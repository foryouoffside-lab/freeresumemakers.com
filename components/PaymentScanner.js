import { useState } from 'react';

export default function PaymentScanner({ onScan }) {
  const [showPayment, setShowPayment] = useState(false);
  const [paid, setPaid] = useState(false);
  const [message, setMessage] = useState('');

  const handleSkip = () => {
    setMessage('Thank you for using our scanner! If you found it helpful, consider supporting us.');
    setTimeout(() => setMessage(''), 5000);
    onScan && onScan();
  };

  const handlePayment = () => {
    setPaid(true);
    setMessage('Thank you for your support! You\'re awesome! ðŸŽ‰');
    setTimeout(() => setMessage(''), 5000);
    onScan && onScan();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Resume Scanner Ready!</h3>
        <p className="text-gray-600">
          Scan your resume for ATS optimization, keyword analysis, and improvement suggestions.
        </p>
      </div>

      {!showPayment && !paid ? (
        <div className="space-y-4">
          <button
            onClick={() => setShowPayment(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Start Scanning
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Continue for Free
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            No credit card required. If you find value, you can support with a voluntary payment.
          </p>
        </div>
      ) : !paid ? (
        <div className="space-y-4">
          <p className="text-center text-gray-700">
            This tool helps you improve your resume. If it adds value, please consider supporting my work.
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            {[5, 10, 20].map((amount) => (
              <button
                key={amount}
                onClick={() => handlePayment()}
                className="border-2 border-green-500 text-green-600 py-2 rounded-md hover:bg-green-50 transition"
              >
                ${amount}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleSkip}
            className="w-full text-gray-500 py-2 text-sm hover:text-gray-700"
          >
            Continue without payment
          </button>
          
          <p className="text-xs text-gray-400 text-center">
            Your support helps keep this tool free for everyone â¤ï¸
          </p>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-green-600 font-medium">{message}</p>
          <div className="mt-4 animate-pulse">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Preparing scanner...</p>
          </div>
        </div>
      )}
    </div>
  );
}