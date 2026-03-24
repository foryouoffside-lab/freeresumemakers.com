// ============================================
// src/components/common/LoadingSpinner.js
// VERSATILE LOADING SPINNER WITH INLINE STYLES
// ============================================

import React from 'react';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = '#0070f3',
  text = 'Loading...',
  fullPage = false,
  overlay = false,
  transparent = false
}) => {
  
  // Size mappings
  const sizes = {
    small: {
      spinner: '24px',
      container: '40px',
      border: '3px',
      text: '12px'
    },
    medium: {
      spinner: '40px',
      container: '60px',
      border: '4px',
      text: '14px'
    },
    large: {
      spinner: '56px',
      container: '80px',
      border: '5px',
      text: '16px'
    },
    xlarge: {
      spinner: '80px',
      container: '120px',
      border: '6px',
      text: '18px'
    }
  };

  const currentSize = sizes[size] || sizes.medium;

  // Style objects
  const styles = {
    fullPageContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: overlay 
        ? 'rgba(255, 255, 255, 0.9)' 
        : transparent 
          ? 'transparent' 
          : '#ffffff',
      zIndex: 9999,
      backdropFilter: overlay ? 'blur(4px)' : 'none',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '24px',
      minWidth: currentSize.container
    },
    spinnerWrapper: {
      position: 'relative',
      width: currentSize.spinner,
      height: currentSize.spinner
    },
    spinner: {
      width: '100%',
      height: '100%',
      border: `${currentSize.border} solid ${color}20`,
      borderTop: `${currentSize.border} solid ${color}`,
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    },
    text: {
      fontSize: currentSize.text,
      color: '#4a5568',
      fontWeight: 500,
      margin: 0,
      animation: 'pulse 1.5s ease-in-out infinite'
    },
    // Alternative spinner styles
    dotsContainer: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      width: size === 'small' ? '8px' : size === 'large' ? '14px' : '10px',
      height: size === 'small' ? '8px' : size === 'large' ? '14px' : '10px',
      borderRadius: '50%',
      backgroundColor: color,
      animation: 'bounce 1.4s ease-in-out infinite'
    },
    pulseRing: {
      width: currentSize.spinner,
      height: currentSize.spinner,
      borderRadius: '50%',
      backgroundColor: `${color}10`,
      animation: 'pulse-ring 1.5s ease-out infinite'
    },
    progressRing: {
      transform: 'rotate(-90deg)',
      width: currentSize.spinner,
      height: currentSize.spinner
    },
    progressRingBg: {
      stroke: `${color}20`,
      strokeWidth: currentSize.border,
      fill: 'none'
    },
    progressRingFg: {
      stroke: color,
      strokeWidth: currentSize.border,
      fill: 'none',
      strokeLinecap: 'round',
      animation: 'progress 1.5s ease-in-out infinite'
    }
  };

  // Animation keyframes as string for style tag
  const animations = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    
    @keyframes pulse-ring {
      0% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.2;
      }
      100% {
        transform: scale(0.8);
        opacity: 0.5;
      }
    }
    
    @keyframes progress {
      0% {
        stroke-dasharray: 1, 100;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100, 100;
        stroke-dashoffset: -25;
      }
      100% {
        stroke-dasharray: 1, 100;
        stroke-dashoffset: -100;
      }
    }
  `;

  // Spinner variants
  const SpinnerVariants = {
    // Classic circular spinner
    classic: () => (
      <div style={styles.spinnerWrapper}>
        <div style={styles.spinner} />
      </div>
    ),
    
    // Bouncing dots
    dots: () => (
      <div style={styles.dotsContainer}>
        <div style={{ ...styles.dot, animationDelay: '0s' }} />
        <div style={{ ...styles.dot, animationDelay: '0.2s' }} />
        <div style={{ ...styles.dot, animationDelay: '0.4s' }} />
      </div>
    ),
    
    // Pulse ring
    pulse: () => (
      <div style={styles.spinnerWrapper}>
        <div style={styles.pulseRing} />
      </div>
    ),
    
    // Progress ring (SVG)
    progress: () => (
      <svg style={styles.progressRing} viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          style={styles.progressRingBg}
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          style={styles.progressRingFg}
        />
      </svg>
    ),
    
    // Dual ring
    dualRing: () => (
      <div style={styles.spinnerWrapper}>
        <div style={{
          ...styles.spinner,
          borderBottom: `${currentSize.border} solid ${color}`,
          borderTop: 'none',
          animation: 'spin 1.2s linear infinite'
        }} />
      </div>
    ),
    
    // Ripple
    ripple: () => (
      <div style={{
        position: 'relative',
        width: currentSize.spinner,
        height: currentSize.spinner
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `${currentSize.border} solid ${color}`,
          animation: 'pulse-ring 1.5s ease-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `${currentSize.border} solid ${color}`,
          animation: 'pulse-ring 1.5s ease-out infinite',
          animationDelay: '0.5s'
        }} />
      </div>
    )
  };

  // Default to classic spinner
  const SpinnerComponent = SpinnerVariants.classic;

  if (fullPage) {
    return (
      <>
        <style>{animations}</style>
        <div style={styles.fullPageContainer}>
          <div style={styles.container}>
            <SpinnerComponent />
            {text && <p style={styles.text}>{text}</p>}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{animations}</style>
      <div style={styles.container}>
        <SpinnerComponent />
        {text && <p style={styles.text}>{text}</p>}
      </div>
    </>
  );
};

// Specialized spinner components
export const PageSpinner = ({ text = 'Loading page...' }) => (
  <LoadingSpinner size="large" text={text} fullPage overlay />
);

export const SectionSpinner = ({ text = 'Loading...' }) => (
  <LoadingSpinner size="medium" text={text} />
);

export const ButtonSpinner = ({ color = '#ffffff', size = 'small' }) => (
  <LoadingSpinner 
    size={size} 
    color={color} 
    text="" 
    variant="dots"
  />
);

export const InlineSpinner = ({ size = 'small', color = '#0070f3' }) => (
  <LoadingSpinner size={size} color={color} text="" />
);

export default LoadingSpinner;