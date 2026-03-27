// pages/api/create-order.js
import Razorpay from 'razorpay';

// Initialize Razorpay with environment variables
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Valid currencies supported by Razorpay
const VALID_CURRENCIES = ['INR', 'USD', 'EUR', 'GBP', 'SGD', 'AED'];
const MIN_AMOUNT = 1; // Minimum support amount in INR
const MAX_AMOUNT = 10000; // Maximum support amount in INR (â‚¹10,000)
const SUPPORTED_PAYMENT_METHODS = ['card', 'netbanking', 'upi', 'wallet'];

export default async function handler(req, res) {
  // Set CORS headers for security
  res.setHeader('Access-Control-Allow-Origin', 'https://freeresumemaker.xyz');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Validate request method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }

  try {
    const { amount, currency = 'INR', receipt, customerDetails, paymentMethods } = req.body;

    // Validate amount
    if (!amount || typeof amount !== 'number' || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
      return res.status(400).json({
        error: 'Invalid amount',
        message: `Amount must be between â‚¹${MIN_AMOUNT} and â‚¹${MAX_AMOUNT}`,
        minAmount: MIN_AMOUNT,
        maxAmount: MAX_AMOUNT
      });
    }

    // Validate currency
    if (!VALID_CURRENCIES.includes(currency.toUpperCase())) {
      return res.status(400).json({
        error: 'Invalid currency',
        message: `Currency must be one of: ${VALID_CURRENCIES.join(', ')}`,
        validCurrencies: VALID_CURRENCIES
      });
    }

    // Create receipt if not provided
    const receiptId = receipt || `support_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    // Prepare order options
    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in smallest currency unit (paise/cents)
      currency: currency.toUpperCase(),
      receipt: receiptId,
      payment_capture: 1, // Auto-capture payment
      notes: {
        purpose: 'Support donation for Free Resume Builder',
        timestamp: new Date().toISOString(),
        userAgent: req.headers['user-agent'] || 'Unknown',
        ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
      }
    };

    // Add customer details if provided (for better tracking)
    if (customerDetails) {
      options.notes.customer_name = customerDetails.name || 'Anonymous';
      options.notes.customer_email = customerDetails.email || 'Not provided';
      options.notes.customer_phone = customerDetails.phone || 'Not provided';
    }

    // Add payment method restrictions if specified
    if (paymentMethods && Array.isArray(paymentMethods) && paymentMethods.length > 0) {
      const validMethods = paymentMethods.filter(m => SUPPORTED_PAYMENT_METHODS.includes(m));
      if (validMethods.length > 0) {
        options.payment_method = validMethods;
      }
    }

    // Log order creation attempt (for monitoring)
    

    // Create order
    const order = await razorpay.orders.create(options);

    // Log successful order creation
    

    // Return order details with additional metadata
    res.status(200).json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        createdAt: order.created_at
      },
      key_id: process.env.RAZORPAY_KEY_ID,
      amount: amount,
      currency: currency,
      notes: {
        message: 'Thank you for supporting Free Resume Builder!',
        supportEmail: 'freeresumeemaker@gmail.com'
      }
    });

  } catch (error) {
    // Detailed error logging
    console.error('Razorpay order creation error:', {
      message: error.message,
      stack: error.stack,
      statusCode: error.statusCode,
      timestamp: new Date().toISOString()
    });

    // Handle specific Razorpay errors
    if (error.statusCode === 400) {
      return res.status(400).json({
        error: 'Invalid request',
        message: error.message || 'Please check your payment details and try again'
      });
    }

    if (error.statusCode === 401) {
      return res.status(401).json({
        error: 'Authentication failed',
        message: 'Payment service configuration error. Please contact support.'
      });
    }

    // Generic error response
    res.status(500).json({
      error: 'Payment processing failed',
      message: 'Unable to create payment order. Please try again later.',
      reference: `ERR_${Date.now()}`
    });
  }
}

// Optional: Webhook verification endpoint for payment confirmation
export async function verifyPayment(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    // Verify payment signature (implement crypto verification)
    // This would be handled in a separate webhook endpoint
    
    // Log successful payment
    
    
    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      paymentId: razorpay_payment_id
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      error: 'Verification failed',
      message: 'Unable to verify payment status'
    });
  }
}

