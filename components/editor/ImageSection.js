// ============================================
// components/editor/ImageSection.js
// OPTIMIZED VERSION - DYNAMIC SPACING FOR ALL DEVICES
// WITH ADAPTIVE BUTTON POSITIONING - FIXED FUNCTIONALITY
// ============================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';
import Head from 'next/head';

// Simple icon components
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const InfoIcon = ({ tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      style={{ 
        position: 'relative', 
        display: 'inline-flex',
        cursor: 'help',
        marginLeft: '8px'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      role="button"
      tabIndex={0}
      aria-label={`Information: ${tooltip}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      {showTooltip && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: '0',
          width: '250px',
          padding: '8px 12px',
          background: '#1f2937',
          color: 'white',
          borderRadius: '6px',
          fontSize: '12px',
          lineHeight: '1.5',
          marginBottom: '8px',
          zIndex: 50,
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
};

const ImageSection = ({ onDataChange, data, navigationButtons }) => {
  const { setImage, updatePersonalInfo } = useResume();
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [successTimeout, setSuccessTimeout] = useState(null);
  const [errorTimeout, setErrorTimeout] = useState(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Measure content height
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [preview, uploadError, showSuccess]);

  // Load image from props
  useEffect(() => {
    let imageUrl = '';
    
    if (data?.photo) {
      imageUrl = data.photo;
    } else if (data?.personalInfo?.photo) {
      imageUrl = data.personalInfo.photo;
    } else if (typeof data === 'string') {
      imageUrl = data;
    }
    
    setPreview(imageUrl);
  }, [data]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (successTimeout) clearTimeout(successTimeout);
      if (errorTimeout) clearTimeout(errorTimeout);
    };
  }, [successTimeout, errorTimeout]);

  const showTemporaryMessage = useCallback((type, message) => {
    if (type === 'success') {
      if (successTimeout) clearTimeout(successTimeout);
      setShowSuccess(true);
      const timeout = setTimeout(() => setShowSuccess(false), 3000);
      setSuccessTimeout(timeout);
    } else if (type === 'error') {
      if (errorTimeout) clearTimeout(errorTimeout);
      setUploadError(message);
      const timeout = setTimeout(() => setUploadError(''), 3000);
      setErrorTimeout(timeout);
    }
  }, [successTimeout, errorTimeout]);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const compressImage = useCallback((file, maxWidth = 800, maxHeight = 800, quality = 0.8) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Calculate new dimensions while maintaining aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Convert to base64 with compression
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  }, []);

  const handleFile = useCallback(async (file) => {
    setUploadError('');
    setShowSuccess(false);

    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      showTemporaryMessage('error', 'Please upload JPG, PNG, or WebP format only');
      return;
    }

    // Check file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      showTemporaryMessage('error', 'File too large. Maximum size is 2MB');
      return;
    }

    setIsUploading(true);

    try {
      // Compress image
      const compressedImage = await compressImage(file, 600, 600, 0.85);
      
      // Set preview
      setPreview(compressedImage);
      showTemporaryMessage('success', 'Photo uploaded successfully!');
      
      // Update context
      if (setImage) {
        setImage(compressedImage);
      }
      
      // Update personalInfo with photo
      const updatedPersonalInfo = {
        ...(data?.personalInfo || {}),
        photo: compressedImage
      };
      
      if (updatePersonalInfo) {
        updatePersonalInfo(updatedPersonalInfo);
      }
      
      // Save to localStorage
      try {
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          personalInfo: { 
            ...(currentState.personalInfo || {}),
            ...updatedPersonalInfo,
            photo: compressedImage 
          } 
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        // Dispatch storage event for other components
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
      } catch (error) {
        console.error('Save to localStorage failed:', error);
      }
      
      // Notify parent
      if (onDataChange && typeof onDataChange === 'function') {
        onDataChange({ 
          ...(data || {}),
          photo: compressedImage 
        });
      }
      
    } catch (error) {
      console.error('Image processing failed:', error);
      showTemporaryMessage('error', 'Error processing image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [compressImage, setImage, updatePersonalInfo, onDataChange, data, showTemporaryMessage]);

  const handlePhotoUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (!file) return;
    handleFile(file);
    // Reset file input to allow re-uploading same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [handleFile]);

  const handleRemovePhoto = useCallback(() => {
    setPreview('');
    setShowSuccess(false);
    
    // Clear from context
    if (setImage) {
      setImage('');
    }
    
    // Clear from personalInfo
    const updatedPersonalInfo = {
      ...(data?.personalInfo || {}),
      photo: ''
    };
    
    if (updatePersonalInfo) {
      updatePersonalInfo(updatedPersonalInfo);
    }
    
    // Clear from localStorage
    try {
      const saved = localStorage.getItem('resumeData');
      if (saved) {
        const currentState = JSON.parse(saved);
        const newState = { 
          ...currentState, 
          personalInfo: { 
            ...(currentState.personalInfo || {}),
            photo: '' 
          } 
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        // Dispatch storage event for other components
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
      }
    } catch (error) {
      console.error('Remove from localStorage failed:', error);
    }
    
    // Notify parent
    if (onDataChange && typeof onDataChange === 'function') {
      onDataChange({ 
        ...(data || {}),
        photo: '' 
      });
    }
  }, [setImage, updatePersonalInfo, onDataChange, data]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  
  // Calculate if content fills the viewport
  const isContentShort = contentHeight < windowHeight * 0.6;

  const fieldTips = {
    profilePhoto: "Professional headshots increase profile views and interview requests by up to 40%",
    photoRequirements: "Use a recent, well-lit photo with neutral background for best results",
    photoBenefits: "Recruiters are 14x more likely to view profiles with professional photos"
  };

  // Dynamic spacing based on device
  const getSpacing = useCallback(() => {
    if (isMobile) {
      return {
        containerPadding: '12px 12px 0 12px',
        heroPadding: '16px 12px',
        heroMargin: '12px',
        gridGap: '16px',
        sectionMargin: '12px',
        buttonMarginTop: '8px',
        statusMarginTop: '8px'
      };
    } else if (isTablet) {
      return {
        containerPadding: '20px 20px 0 20px',
        heroPadding: '24px 20px',
        heroMargin: '24px',
        gridGap: '24px',
        sectionMargin: '20px',
        buttonMarginTop: '16px',
        statusMarginTop: '12px'
      };
    } else {
      return {
        containerPadding: '24px 20px 0 20px',
        heroPadding: '32px 24px',
        heroMargin: '40px',
        gridGap: '32px',
        sectionMargin: '24px',
        buttonMarginTop: '24px',
        statusMarginTop: '16px'
      };
    }
  }, [isMobile, isTablet]);

  const spacing = getSpacing();

  // Custom navigation buttons wrapper with dynamic positioning
  const NavigationWrapper = useCallback(() => (
    <div style={{
      width: '100%',
      marginTop: spacing.buttonMarginTop,
      paddingBottom: isContentShort && !isMobile ? '20px' : (isMobile ? '8px' : '0'),
      position: isMobile ? 'sticky' : 'relative',
      bottom: isMobile ? '0' : 'auto',
      background: isMobile ? 'white' : 'transparent',
      borderTop: isMobile ? '1px solid #e5e7eb' : 'none',
      zIndex: isMobile ? 10 : 'auto'
    }}>
      {navigationButtons}
      
      <div style={{
        marginTop: spacing.statusMarginTop,
        textAlign: 'center',
        padding: isMobile ? '8px' : '10px',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        fontSize: isMobile ? '12px' : '14px',
        color: '#6b7280'
      }}>
        {preview ? (
          <span style={{ color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <CheckIcon /> Photo added successfully!
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>ℹ️</span>
            <span>{isMobile ? 'Photo increases interview chances' : 'Adding a photo increases interview chances by 40%'}</span>
          </span>
        )}
      </div>
    </div>
  ), [navigationButtons, spacing, isContentShort, isMobile, preview]);

  return (
    <>
      <Head>
        <title>Add Professional Profile Photo - Resume Builder</title>
        <meta name="description" content="Upload a professional profile photo. Support for JPG, PNG, WebP up to 2MB. Increase your interview chances by 40%." />
        <meta property="og:title" content="Professional Profile Photo - Resume Builder" />
        <meta property="og:description" content="Add a professional photo to your resume to stand out to recruiters." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div 
        ref={contentRef}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: spacing.containerPadding,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: '#ffffff',
          minHeight: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Content - grows to fill available space */}
        <div style={{
          flex: '1 0 auto',
        }}>
          {/* Hero Section - dynamic padding */}
          <div style={{
            textAlign: 'center',
            padding: spacing.heroPadding,
            marginBottom: spacing.heroMargin,
            background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
            borderRadius: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <h1 style={{
              fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
              fontWeight: 700,
              margin: '0 0 6px 0',
              color: '#111827'
            }}>
              Add Your <span style={{ color: '#2563eb' }}>Profile Photo</span>
            </h1>
            <p style={{
              fontSize: isMobile ? '13px' : isTablet ? '15px' : '16px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.4
            }}>
              {isMobile ? 'Make your resume stand out with a photo' : 'Make your resume stand out with a professional headshot'}
            </p>
          </div>

          {/* Main Content Grid - dynamic gaps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '1fr' : '1.5fr 1fr'),
            gap: spacing.gridGap,
            marginBottom: spacing.sectionMargin,
          }}>
            {/* Left Column - Photo Upload */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: isMobile ? '12px' : '16px'
              }}>
                <label style={{
                  fontSize: isMobile ? '15px' : isTablet ? '16px' : '18px',
                  fontWeight: 600,
                  color: '#111827'
                }}>
                  Profile Photo
                </label>
                <InfoIcon tooltip={fieldTips.profilePhoto} />
              </div>

              {preview ? (
                // Preview Mode
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: isMobile ? '140px' : (isTablet ? '160px' : '200px'),
                    height: isMobile ? '140px' : (isTablet ? '160px' : '200px'),
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    border: '4px solid #2563eb',
                    padding: '4px',
                    background: 'white',
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                  }}>
                    <img 
                      src={preview} 
                      alt="Profile preview" 
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                      onError={() => {
                        // Handle image loading error
                        setPreview('');
                        showTemporaryMessage('error', 'Error loading image. Please upload again.');
                      }}
                    />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: isMobile ? '8px' : '10px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <label htmlFor="photoUpload" style={{
                      padding: isMobile ? '8px 14px' : '12px 24px',
                      background: '#2563eb',
                      color: 'white',
                      borderRadius: '8px',
                      fontSize: isMobile ? '13px' : '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      border: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s',
                      ':hover': {
                        background: '#1d4ed8'
                      }
                    }}>
                      <input
                        type="file"
                        id="photoUpload"
                        ref={fileInputRef}
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handlePhotoUpload}
                        style={{ display: 'none' }}
                      />
                      <span>📷</span>
                      Change
                    </label>
                    
                    <button 
                      onClick={handleRemovePhoto}
                      style={{
                        padding: isMobile ? '8px 14px' : '12px 24px',
                        background: 'white',
                        color: '#dc2626',
                        borderRadius: '8px',
                        fontSize: isMobile ? '13px' : '15px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        border: '2px solid #fee2e2',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s',
                        ':hover': {
                          background: '#fef2f2',
                          borderColor: '#fecaca'
                        }
                      }}
                    >
                      <span>🗑️</span>
                      Remove
                    </button>
                  </div>
                  
                  {showSuccess && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      marginTop: '12px',
                      padding: '8px',
                      background: '#ecfdf5',
                      color: '#059669',
                      borderRadius: '8px',
                      border: '1px solid #a7f3d0',
                      fontSize: isMobile ? '12px' : '14px',
                    }}>
                      <CheckIcon />
                      Photo uploaded successfully!
                    </div>
                  )}
                </div>
              ) : (
                // Upload Mode
                <div 
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  style={{
                    border: `3px dashed ${dragActive ? '#2563eb' : '#d1d5db'}`,
                    borderRadius: '16px',
                    padding: isMobile ? '24px 12px' : (isTablet ? '36px 20px' : '48px 24px'),
                    background: dragActive ? '#eff6ff' : '#f9fafb',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    id="photoUploadInput"
                    ref={fileInputRef}
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handlePhotoUpload}
                    style={{ display: 'none' }}
                  />
                  
                  {isUploading ? (
                    <div>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        margin: '0 auto 10px',
                        border: '3px solid #e5e7eb',
                        borderTopColor: '#2563eb',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      <div style={{ color: '#2563eb', fontWeight: 500, fontSize: isMobile ? '13px' : '14px' }}>
                        Processing image...
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{
                        fontSize: isMobile ? '32px' : '40px',
                        marginBottom: '8px',
                        color: '#9ca3af'
                      }}>📸</div>
                      <div style={{
                        fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
                        fontWeight: 600,
                        color: '#111827',
                        marginBottom: '4px'
                      }}>
                        {dragActive ? 'Drop your photo here' : 'Click or drag to upload'}
                      </div>
                      <div style={{
                        fontSize: isMobile ? '11px' : isTablet ? '12px' : '14px',
                        color: '#6b7280',
                        marginBottom: '10px'
                      }}>
                        JPG, PNG, WebP • Max 2MB
                      </div>
                      <div style={{
                        display: 'inline-block',
                        padding: isMobile ? '6px 14px' : '10px 24px',
                        background: '#2563eb',
                        color: 'white',
                        borderRadius: '8px',
                        fontSize: isMobile ? '12px' : '14px',
                        fontWeight: 500,
                        pointerEvents: 'none'
                      }}>
                        Choose File
                      </div>
                    </div>
                  )}
                </div>
              )}

              {uploadError && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '12px',
                  padding: '8px',
                  background: '#fef2f2',
                  color: '#b91c1c',
                  borderRadius: '8px',
                  border: '1px solid #fecaca',
                  fontSize: isMobile ? '12px' : '14px'
                }}>
                  <AlertIcon />
                  {uploadError}
                </div>
              )}
            </div>

            {/* Right Column - Requirements (hidden on mobile) */}
            {!isMobile && (
              <div>
                <div style={{
                  background: '#f9fafb',
                  borderRadius: '16px',
                  padding: isTablet ? '20px' : '24px',
                  border: '1px solid #e5e7eb',
                  position: 'sticky',
                  top: '20px'
                }}>
                  <h3 style={{
                    fontSize: isTablet ? '16px' : '18px',
                    fontWeight: 600,
                    color: '#111827',
                    margin: '0 0 16px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>📋</span>
                    Photo Requirements
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { label: 'Formats', value: 'JPG, PNG, WebP' },
                      { label: 'Max Size', value: '2 MB' },
                      { label: 'Recommended', value: 'Square (1:1 ratio)' },
                      { label: 'Min Dimensions', value: '400×400 pixels' },
                      { label: 'Background', value: 'Neutral, professional' }
                    ].map((item, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        background: 'white',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#eff6ff',
                          borderRadius: '6px',
                          color: '#2563eb',
                          fontSize: '13px',
                          fontWeight: 'bold'
                        }}>✓</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '13px', color: '#111827' }}>{item.label}</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: '#eff6ff',
                    borderRadius: '8px',
                    border: '1px solid #bfdbfe'
                  }}>
                    <div style={{ fontSize: '12px', color: '#1e40af', textAlign: 'center' }}>
                      💡 Tip: A professional photo can increase interview chances by 40%
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Requirements (shown only on mobile) */}
          {isMobile && (
            <div style={{
              marginBottom: '8px',
              padding: '14px',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#111827',
                margin: '0 0 8px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>📋</span>
                Photo Requirements
              </h3>
              <ul style={{
                margin: 0,
                paddingLeft: '18px',
                color: '#4b5563',
                fontSize: '13px',
                lineHeight: '1.6'
              }}>
                <li>JPG, PNG, or WebP format</li>
                <li>Maximum file size: 2MB</li>
                <li>Square photo recommended</li>
                <li>Professional appearance</li>
                <li>Good lighting, clear face</li>
              </ul>
              <div style={{
                marginTop: '12px',
                padding: '8px',
                background: '#eff6ff',
                borderRadius: '6px',
                fontSize: '11px',
                color: '#1e40af',
                textAlign: 'center'
              }}>
                💡 Professional photos increase interview chances by 40%
              </div>
            </div>
          )}
        </div>

        {/* Navigation Section - Dynamic positioning */}
        <NavigationWrapper />

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default ImageSection;