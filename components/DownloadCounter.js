import React from 'react';
// components/DownloadCounter.js
import { useState, useEffect } from 'react';

export default function DownloadCounter() {
  const [counts, setCounts] = useState({ total: 0, templates: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCounts();
    // Refresh every 30 seconds
    const interval = setInterval(fetchCounts, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await fetch('/api/track-download');
      const data = await response.json();
      setCounts(data);
    } catch (error) {
      console.error('Error fetching download counts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>;

  return (
    <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
      <svg 
        className="w-5 h-5 text-green-600" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
        />
      </svg>
      <span className="text-sm font-medium text-green-700">
        {counts.total.toLocaleString()} resumes downloaded
      </span>
    </div>
  );
}