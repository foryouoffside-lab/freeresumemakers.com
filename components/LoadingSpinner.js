// components/LoadingSpinner.js
import React from 'react';

export default function LoadingSpinner({ size = 'md', color = '#0070f3', text = 'Loading...' }) {
  const sizeMap = {
    sm: '32px',
    md: '48px',
    lg: '64px'
  };
  
  const spinnerSize = sizeMap[size] || sizeMap.md;
  const borderWidth = size === 'sm' ? '3px' : size === 'lg' ? '5px' : '4px';
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      minHeight: '400px',
      width: '100%'
    }}>
      <div style={{
        width: spinnerSize,
        height: spinnerSize,
        border: `${borderWidth} solid #e9ecef`,
        borderTop: `${borderWidth} solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      {text && (
        <p style={{
          color: '#666',
          fontSize: size === 'sm' ? '0.875rem' : '1rem',
          margin: 0
        }}>
          {text}
        </p>
      )}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}