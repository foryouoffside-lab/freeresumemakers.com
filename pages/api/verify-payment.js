// pages/api/verify-payment.js
import crypto from 'crypto';

// Constants for validation
const ALLOWED_ORIGINS = [
  'https://freeresumemaker.xyz',
  'https://www.freeresumemaker.xyz',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://freeresumemaker.vercel.app'
];

// Validate payment data
function validatePaymentData(data) {
  const errors = [];
  
  if (!data.razorpay_payment_id || typeof data.razorpay_payment_id !== 'string') {
    errors.push('Payment ID is required and must be a string');
  } else if (data.razorpay_payment_id.trim().length === 0) {
    errors.push('Payment ID cannot be empty');
  }
  
  if (!data.razorpay_order_id || typeof data.razorpay_order_id !== 'string') {
    errors.push('Order ID is required and must be a string');
  } else if (data.razorpay_order_id.trim().length === 0) {
    errors.push('Order ID cannot be empty');
  }
  
  if (!data.razorpay_signature || typeof data.razorpay_signature !== 'string') {
    errors.push('Signature is required and must be a string');
  } else if (data.razorpay_signature.trim().length === 0) {
    errors.push('Signature cannot be empty');
  }
  
  // Validate amount if provided
  if (data.amount !== undefined && data.amount !== null) {
    const amountNum = parseFloat(data.amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      errors.push('Amount must be a positive number if provided');
    }
  }
  
  // Validate currency if provided
  if (data.currency && typeof data.currency === 'string') {
    const validCurrencies = ['INR', 'USD', 'EUR', 'GBP', 'SGD', 'AED'];
    if (!validCurrencies.includes(data.currency.toUpperCase())) {
      errors.push(`Currency must be one of: ${validCurrencies.join(', ')}`);
    }
  }
  
  return errors;
}

// Sanitize input data
function sanitizeInput(data) {
  return {
    razorpay_payment_id: data.razorpay_payment_id ? data.razorpay_payment_id.trim() : '',
    razorpay_order_id: data.razorpay_order_id ? data.razorpay_order_id.trim() : '',
    razorpay_signature: data.razorpay_signature ? data.razorpay_signature.trim() : '',
    amount: data.amount ? parseFloat(data.amount) : null,
    currency: data.currency ? data.currency.toUpperCase().trim() : 'INR'
  };
}

// Verify signature with proper error handling
function verifySignature(orderId, paymentId, signature, secret) {
  try {
    if (!secret || secret === 'test_secret_key') {
      console.warn('⚠️ Using test secret key. Ensure proper secret in production');
      // For demo purposes, allow test signature
      if (signature === 'test_signature') {
        return {
          isValid: true,
          expectedSignature: 'test_signature',
          providedSignature: signature,
          isTest: true
        };
      }
    }
    
    const body = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');
    
    return {
      isValid: expectedSignature === signature,
      expectedSignature: expectedSignature,
      providedSignature: signature,
      isTest: false
    };
  } catch (error) {
    console.error('❌ Signature verification error:', error);
    return {
      isValid: false,
      error: error.message
    };
  }
}

// Format success response
function formatSuccessResponse(paymentId, orderId, amount, currency, isTest = false) {
  const response = {
    success: true,
    message: isTest ? 'Payment verified successfully (Test Mode)' : 'Payment verified successfully',
    data: {
      paymentId: paymentId,
      orderId: orderId,
      verifiedAt: new Date().toISOString(),
      verifiedAtFormatted: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      })
    }
  };
  
  // Add amount and currency if provided
  if (amount && !isNaN(amount)) {
    response.data.amount = amount;
    response.data.currency = currency || 'INR';
  }
  
  if (isTest) {
    response.data.mode = 'test';
  }
  
  return response;
}

// Format error response
function formatErrorResponse(errorCode, errorMessage, details = null) {
  const response = {
    success: false,
    error: errorCode,
    message: errorMessage,
    timestamp: new Date().toISOString()
  };
  
  if (details) {
    response.details = details;
  }
  
  return response;
}

// Store payment record (in production, use a database)
let paymentRecords = [];

export default async function handler(req, res) {
  // Set CORS headers
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle GET requests (for checking payment status)
  if (req.method === 'GET') {
    const { paymentId, orderId } = req.query;
    
    if (paymentId) {
      const record = paymentRecords.find(p => p.paymentId === paymentId);
      if (record) {
        return res.status(200).json({
          success: true,
          data: record
        });
      }
      return res.status(404).json(formatErrorResponse(
        'NOT_FOUND',
        'Payment record not found'
      ));
    }
    
    if (orderId) {
      const record = paymentRecords.find(p => p.orderId === orderId);
      if (record) {
        return res.status(200).json({
          success: true,
          data: record
        });
      }
      return res.status(404).json(formatErrorResponse(
        'NOT_FOUND',
        'Payment record not found'
      ));
    }
    
    return res.status(200).json({
      success: true,
      data: paymentRecords,
      count: paymentRecords.length
    });
  }

  // Validate request method for POST
  if (req.method !== 'POST') {
    return res.status(405).json(formatErrorResponse(
      'METHOD_NOT_ALLOWED',
      `The ${req.method} method is not supported for this endpoint`,
      { supportedMethods: ['POST', 'GET', 'OPTIONS'] }
    ));
  }

  try {
    // Extract payment data from request
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount,
      currency,
      email,
      name
    } = req.body;

    // Validate input
    const validationErrors = validatePaymentData({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount,
      currency
    });

    if (validationErrors.length > 0) {
      return res.status(400).json(formatErrorResponse(
        'VALIDATION_FAILED',
        'Invalid payment verification data',
        { errors: validationErrors }
      ));
    }

    // Sanitize input
    const sanitizedData = sanitizeInput({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount,
      currency
    });

    // Get secret key from environment
    const secretKey = process.env.RAZORPAY_KEY_SECRET;
    
    // Check if we're in test mode
    const isTestMode = !secretKey || secretKey === 'test_secret_key';
    
    if (isTestMode) {
      console.log('🔧 Running in test mode - skipping actual signature verification');
    } else if (!secretKey) {
      console.error('❌ RAZORPAY_KEY_SECRET not configured');
      return res.status(500).json(formatErrorResponse(
        'CONFIGURATION_ERROR',
        'Payment verification service is not properly configured'
      ));
    }

    // Verify signature
    const verification = verifySignature(
      sanitizedData.razorpay_order_id,
      sanitizedData.razorpay_payment_id,
      sanitizedData.razorpay_signature,
      secretKey || 'test_secret_key'
    );

    if (verification.isValid || isTestMode) {
      // Store payment record
      const paymentRecord = {
        paymentId: sanitizedData.razorpay_payment_id,
        orderId: sanitizedData.razorpay_order_id,
        amount: sanitizedData.amount,
        currency: sanitizedData.currency,
        email: email || null,
        name: name || null,
        status: 'success',
        verifiedAt: new Date().toISOString(),
        isTest: isTestMode || verification.isTest || false
      };
      
      paymentRecords.unshift(paymentRecord);
      
      // Keep only last 100 records
      if (paymentRecords.length > 100) {
        paymentRecords = paymentRecords.slice(0, 100);
      }
      
      // Log successful verification
      console.log(`✅ Payment verified successfully:`, {
        paymentId: sanitizedData.razorpay_payment_id,
        orderId: sanitizedData.razorpay_order_id,
        amount: sanitizedData.amount,
        currency: sanitizedData.currency,
        isTest: isTestMode || verification.isTest,
        timestamp: new Date().toISOString()
      });
      
      // Return success response
      return res.status(200).json(
        formatSuccessResponse(
          sanitizedData.razorpay_payment_id,
          sanitizedData.razorpay_order_id,
          sanitizedData.amount,
          sanitizedData.currency,
          isTestMode || verification.isTest
        )
      );
    } else {
      // Log failed verification
      console.warn(`❌ Payment verification failed:`, {
        paymentId: sanitizedData.razorpay_payment_id,
        orderId: sanitizedData.razorpay_order_id,
        reason: 'Invalid signature',
        expectedSignature: verification.expectedSignature,
        providedSignature: verification.providedSignature,
        timestamp: new Date().toISOString()
      });
      
      // Store failed attempt
      const failedRecord = {
        paymentId: sanitizedData.razorpay_payment_id,
        orderId: sanitizedData.razorpay_order_id,
        amount: sanitizedData.amount,
        currency: sanitizedData.currency,
        status: 'failed',
        reason: 'Invalid signature',
        attemptedAt: new Date().toISOString()
      };
      paymentRecords.unshift(failedRecord);
      
      // Return error response
      return res.status(400).json(formatErrorResponse(
        'INVALID_SIGNATURE',
        'Payment verification failed: Invalid signature',
        {
          expectedSignature: verification.expectedSignature,
          providedSignature: verification.providedSignature
        }
      ));
    }
    
  } catch (error) {
    // Log error for monitoring
    console.error('❌ Payment verification error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error response
    return res.status(500).json(formatErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'Unable to verify payment. Please try again later.',
      { reference: `ERR_${Date.now()}_${Math.random().toString(36).substring(2, 8)}` }
    ));
  }
}

// Optional: Webhook endpoint for payment confirmation
export async function paymentWebhook(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { event, payload } = req.body;
    
    // Verify webhook signature (implement with Razorpay webhook secret)
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    // Log webhook event
    console.log('📨 Payment webhook received:', {
      event,
      paymentId: payload?.payment?.entity?.id,
      orderId: payload?.payment?.entity?.order_id,
      amount: payload?.payment?.entity?.amount / 100,
      timestamp: new Date().toISOString()
    });
    
    // Handle different event types
    switch (event) {
      case 'payment.captured':
        // Payment successfully captured
        console.log('✅ Payment captured:', payload?.payment?.entity?.id);
        // Update database, send confirmation email, etc.
        break;
      case 'payment.failed':
        // Payment failed
        console.log('❌ Payment failed:', payload?.payment?.entity?.id);
        // Notify user, retry logic, etc.
        break;
      case 'payment.authorized':
        // Payment authorized
        console.log('🔓 Payment authorized:', payload?.payment?.entity?.id);
        break;
      default:
        console.log('📋 Other webhook event:', event);
        break;
    }
    
    res.status(200).json({
      success: true,
      message: 'Webhook processed successfully',
      receivedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    res.status(500).json({
      success: false,
      error: 'Webhook processing failed'
    });
  }
}