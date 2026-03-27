import React from 'react';
// components/PaymentScanner.js
import { useState } from 'react';

// Load Razorpay script
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function PaymentScanner({ onScan, amount = 10, currency = 'INR' }) {
  const [showPayment, setShowPayment] = useState(false);
  const [paid, setPaid] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi, card, netbanking

  const handleSkip = () => {
    setMessage('Thank you for using our scanner! If you found it helpful, consider supporting us.');
    setTimeout(() => setMessage(''), 5000);
    onScan && onScan();
  };

  const handlePayment = async (selectedAmount) => {
    setLoading(true);
    
    try {
      // Create order on your server
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedAmount,
          currency: currency,
        }),
      });
      
      const order = await response.json();
      
      if (!order.success) {
        throw new Error(order.error || 'Failed to create order');
      }
      
      // Load Razorpay script if not loaded
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }
      
      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: selectedAmount * 100, // Convert to paise
        currency: currency,
        name: 'Free Resume Maker',
        description: `Support the development - ₹${selectedAmount}`,
        image: '/logo.png',
        order_id: order.id,
        handler: function (response) {
          // Payment successful
          setPaid(true);
          setMessage('Thank you for your support! You are awesome! 🎉');
          setTimeout(() => setMessage(''), 5000);
          onScan && onScan();
          
          // Send payment verification to server
          fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount: selectedAmount,
              currency: currency
            }),
          }).catch(err => console.error('Payment verification error:', err));
        },
        prefill: {
          name: 'Supporter',
          email: 'supporter@example.com',
        },
        theme: {
          color: '#0070f3',
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            setMessage('Payment cancelled. You can continue for free.');
            setTimeout(() => setMessage(''), 3000);
          }
        }
      };
      
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      setMessage('Payment failed. Please try again or continue for free.');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleUPIPayment = () => {
    // UPI Intent URL
    const upiId = 'foryouoffside@okhdfcbank';
    const payeeName = 'Free Resume Maker';
    const amountValue = amount;
    const currencyValue = 'INR';
    const description = 'Support Free Resume Maker';
    
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amountValue}&cu=${currencyValue}&tn=${encodeURIComponent(description)}`;
    
    // Try to open UPI app
    window.location.href = upiUrl;
    
    // Fallback message
    setMessage('Opening UPI app... If it doesn\'t open, please scan QR code or use UPI ID: foryouoffside@okhdfcbank');
    setTimeout(() => {
      setMessage('Thank you for your support! You can continue with the scanner.');
      setTimeout(() => {
        setPaid(true);
        onScan && onScan();
      }, 2000);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" style={{
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <svg style={{ width: '64px', height: '64px', margin: '0 auto 16px', color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>
          Resume Scanner Ready!
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
          Scan your resume for ATS optimization, keyword analysis, and improvement suggestions.
        </p>
      </div>

      {!showPayment && !paid ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            onClick={() => setShowPayment(true)}
            style={{
              width: '100%',
              background: '#0070f3',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
          >
            Start Scanning
          </button>
          <button
            onClick={handleSkip}
            style={{
              width: '100%',
              background: '#f1f5f9',
              color: '#334155',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
          >
            Continue for Free
          </button>
          <p style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>
            No credit card required. If you find value, you can support with a voluntary payment.
          </p>
        </div>
      ) : !paid ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ textAlign: 'center', color: '#334155', fontSize: '0.9rem' }}>
            This tool helps you improve your resume. If it adds value, please consider supporting my work.
          </p>
          
          {/* Payment Method Selector */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '8px' }}>
            <button
              onClick={() => setPaymentMethod('upi')}
              style={{
                padding: '8px 16px',
                background: paymentMethod === 'upi' ? '#0070f3' : '#f1f5f9',
                color: paymentMethod === 'upi' ? 'white' : '#334155',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}
            >
              UPI
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              style={{
                padding: '8px 16px',
                background: paymentMethod === 'card' ? '#0070f3' : '#f1f5f9',
                color: paymentMethod === 'card' ? 'white' : '#334155',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}
            >
              Card
            </button>
            <button
              onClick={() => setPaymentMethod('netbanking')}
              style={{
                padding: '8px 16px',
                background: paymentMethod === 'netbanking' ? '#0070f3' : '#f1f5f9',
                color: paymentMethod === 'netbanking' ? 'white' : '#334155',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}
            >
              Net Banking
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[5, 10, 20].map((amt) => (
              <button
                key={amt}
                onClick={() => paymentMethod === 'upi' ? handleUPIPayment() : handlePayment(amt)}
                disabled={loading}
                style={{
                  padding: '10px',
                  border: `2px solid ${amt === amount ? '#10b981' : '#e2e8f0'}`,
                  background: amt === amount ? '#f0fdf4' : 'white',
                  color: '#0f172a',
                  borderRadius: '8px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.2s',
                  opacity: loading ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.borderColor = '#10b981';
                }}
                onMouseLeave={(e) => {
                  if (amt !== amount) e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          
          {paymentMethod === 'upi' && (
            <div style={{
              background: '#f0fdf4',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #bbf7d0'
            }}>
              <p style={{ fontSize: '0.8rem', color: '#166534', marginBottom: '4px' }}>
                <strong>UPI ID:</strong> foryouoffside@okhdfcbank
              </p>
              <p style={{ fontSize: '0.7rem', color: '#15803d' }}>
                Scan QR or pay directly to support
              </p>
            </div>
          )}
          
          <button
            onClick={handleSkip}
            style={{
              width: '100%',
              background: 'transparent',
              color: '#64748b',
              padding: '10px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0f172a'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          >
            Continue without payment
          </button>
          
          <p style={{ fontSize: '0.65rem', color: '#94a3b8', textAlign: 'center' }}>
            Your support helps keep this tool free for everyone
          </p>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ color: '#10b981', fontWeight: '500', marginBottom: '12px' }}>{message}</p>
          <div style={{ marginTop: '16px' }}>
            <div style={{
              width: '100%',
              height: '6px',
              background: '#e2e8f0',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: '#10b981',
                borderRadius: '3px',
                animation: 'pulse 1s ease-in-out'
              }}></div>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '12px' }}>Preparing scanner...</p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}