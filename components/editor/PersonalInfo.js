// ============================================
// components/editor/PersonalInfo.js
// FIXED - Removed invalid UTF-8 characters
// ============================================

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import Head from 'next/head';
import LoadingSpinner from '../LoadingSpinner';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const InfoIcon = ({ tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      style={{ position: 'relative', cursor: 'help', flexShrink: 0, marginLeft: '8px' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      role="button"
      tabIndex={0}
      aria-label={`Information: ${tooltip}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      {showTooltip && (
        <span 
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            width: '220px',
            padding: '10px',
            background: '#333',
            color: 'white',
            borderRadius: '8px',
            fontSize: '12px',
            lineHeight: '1.5',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textAlign: 'left',
            fontWeight: 'normal',
            marginTop: '8px'
          }}
          role="tooltip"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

const PersonalInfo = ({ data, navigationButtons, onDataChange }) => {
  const { updatePersonalInfo, forceSaveNow } = useResume();
  
  // ALL useState hooks at the top
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveTimeout, setSaveTimeout] = useState(null);
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saving', 'saved', 'error'
  const contentRef = useRef(null);
  const debounceTimerRef = useRef(null);
  
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    totalExperience: '',
    linkedin: '',
    ...(data && typeof data === 'object' ? data : {})
  }));
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ALL useEffect hooks after useState
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
  }, [formData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (data && typeof data === 'object') {
      setFormData(prev => ({
        ...prev,
        ...data
      }));
    }
  }, [data]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Auto-save status indicator auto-hide
  useEffect(() => {
    if (saveStatus === 'saved' || saveStatus === 'error') {
      const timer = setTimeout(() => {
        if (saveStatus !== 'saving') {
          setSaveStatus('saved');
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [saveStatus]);

  const fieldTips = {
    fullName: "Use your full legal name as it appears on official documents",
    jobTitle: "Your current or desired job title - keep it concise",
    email: "Use a professional email address (firstname.lastname@domain.com)",
    phone: "Include country code if applying internationally: +1 123 456 7890",
    address: "City, State/Country format. Include 'Remote' if applicable",
    experience: "Total years of professional experience",
    linkedin: "Customize your LinkedIn URL to match your name"
  };

  const validateField = useCallback((field, value) => {
    const newErrors = { ...errors };
    
    switch(field) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'phone':
        const cleanedPhone = value.replace(/[\s\(\)\-]/g, '');
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(cleanedPhone)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
        }
        break;
        
      case 'linkedin':
        if (value && !value.includes('linkedin.com/in/')) {
          newErrors.linkedin = 'Please enter a valid LinkedIn profile URL';
        } else {
          delete newErrors.linkedin;
        }
        break;
        
      case 'fullName':
        if (value && value.length < 2) {
          newErrors.fullName = 'Name must be at least 2 characters';
        } else if (value && value.length > 50) {
          newErrors.fullName = 'Name cannot exceed 50 characters';
        } else {
          delete newErrors.fullName;
        }
        break;

      case 'totalExperience':
        if (value && (parseInt(value) < 0 || parseInt(value) > 50)) {
          newErrors.totalExperience = 'Experience must be between 0 and 50 years';
        } else {
          delete newErrors.totalExperience;
        }
        break;
        
      default:
        delete newErrors[field];
    }
    
    setErrors(newErrors);
    return !newErrors[field];
  }, [errors]);

  const saveData = useCallback(async (updatedData) => {
    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    
    setSaveStatus('saving');
    setIsSaving(true);
    
    try {
      // Update context
      updatePersonalInfo(updatedData);
      
      // Save to localStorage
      await new Promise(resolve => {
        const currentState = JSON.parse(localStorage.getItem('resumeData') || '{}');
        const newState = { 
          ...currentState, 
          personalInfo: updatedData,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        resolve();
      });
      
      if (onDataChange) onDataChange(updatedData);
      forceSaveNow();
      
      setSaveStatus('saved');
    } catch (error) {
      console.error('Save failed:', error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  }, [updatePersonalInfo, forceSaveNow, onDataChange]);

  // Debounced save function
  const debouncedSave = useCallback((updatedData) => {
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      saveData(updatedData);
      debounceTimerRef.current = null;
    }, 500); // Auto-save after 500ms of inactivity
  }, [saveData]);

  const handleChange = useCallback((field, value) => {
    let cleanedValue = value;
    
    switch(field) {
      case 'email':
        cleanedValue = value.toLowerCase().trim();
        break;
      case 'phone':
        cleanedValue = value.replace(/[^\d\s\(\)\-\+]/g, '');
        break;
      case 'linkedin':
        cleanedValue = value.trim().toLowerCase();
        if (cleanedValue && !cleanedValue.startsWith('http') && !cleanedValue.includes('linkedin.com')) {
          cleanedValue = `https://linkedin.com/in/${cleanedValue}`;
        }
        break;
      case 'fullName':
        cleanedValue = value.replace(/[^a-zA-Z\s\-\.']/g, '');
        break;
      case 'totalExperience':
        if (value !== '') {
          const numValue = parseInt(value);
          if (!isNaN(numValue)) {
            cleanedValue = Math.min(50, Math.max(0, numValue)).toString();
          } else {
            cleanedValue = '';
          }
        }
        break;
      default:
        cleanedValue = value;
    }
    
    const updatedData = { ...formData, [field]: cleanedValue };
    setFormData(updatedData);
    validateField(field, cleanedValue);
    
    // Trigger auto-save while typing (debounced)
    debouncedSave(updatedData);
  }, [formData, validateField, debouncedSave]);

  // Save on blur for immediate save when leaving field
  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
    
    // Clear any pending debounce and save immediately
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    saveData(formData);
  }, [formData, validateField, saveData]);

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0,3)} ${numbers.slice(3)}`;
    if (numbers.length <= 10) return `${numbers.slice(0,3)} ${numbers.slice(3,6)} ${numbers.slice(6)}`;
    return `${numbers.slice(0,3)} ${numbers.slice(3,6)} ${numbers.slice(6,10)}`;
  };

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const formattedValue = formatPhoneNumber(rawValue);
    handleChange('phone', formattedValue);
  };

  const getLinkedinUsername = (url) => {
    if (!url) return '';
    const match = url.match(/linkedin\.com\/in\/([^\/\?]+)/);
    return match ? match[1] : url.replace(/^https?:\/\/(?:www\.)?linkedin\.com\/in\//, '');
  };

  const handleLinkedInChange = (e) => {
    const username = e.target.value.replace(/[^a-zA-Z0-9\-_]/g, '');
    if (username) {
      handleChange('linkedin', `https://linkedin.com/in/${username}`);
    } else {
      handleChange('linkedin', '');
    }
  };

  const getFieldStatus = (field) => {
    if (errors[field]) return 'error';
    if (touched[field] && formData[field] && !errors[field]) return 'valid';
    return '';
  };

  const getInputStyle = (field) => {
    const baseStyle = {
      width: '100%',
      padding: windowWidth < 768 ? '10px 12px' : '12px 16px',
      fontSize: windowWidth < 768 ? '14px' : '15px',
      border: '2px solid #e1e5e9',
      borderRadius: '8px',
      background: 'white',
      transition: 'all 0.2s ease',
      color: '#333',
      boxSizing: 'border-box'
    };

    if (errors[field]) {
      return {
        ...baseStyle,
        borderColor: '#e74c3c',
        background: '#fffafa'
      };
    }

    if (touched[field] && formData[field] && !errors[field]) {
      return {
        ...baseStyle,
        borderColor: '#27ae60',
        paddingRight: '50px'
      };
    }

    return baseStyle;
  };

  // Calculate if content fills the viewport
  const isContentShort = contentHeight < windowHeight * 0.7;

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": formData.fullName || "Resume Builder User",
    "jobTitle": formData.jobTitle || "Professional",
    "email": formData.email || "",
    "telephone": formData.phone || "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": formData.address || ""
    },
    "sameAs": formData.linkedin ? [formData.linkedin] : []
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Dynamic spacing based on device and content height
  const getContentSpacing = () => {
    if (isMobile) {
      return {
        heroPadding: '12px',
        heroMargin: '8px',
        statsMargin: '12px',
        fieldMargin: '12px',
        buttonMarginTop: '4px',
        containerPadding: '0'
      };
    } else if (isTablet) {
      return {
        heroPadding: '20px',
        heroMargin: '20px',
        statsMargin: '20px',
        fieldMargin: '20px',
        buttonMarginTop: '12px',
        containerPadding: '12px'
      };
    } else {
      return {
        heroPadding: '24px',
        heroMargin: '32px',
        statsMargin: '32px',
        fieldMargin: '24px',
        buttonMarginTop: '16px',
        containerPadding: '16px'
      };
    }
  };

  const spacing = getContentSpacing();

  // Get save status message and color
  const getSaveStatusConfig = () => {
    switch(saveStatus) {
      case 'saving':
        return { text: 'Saving...', color: '#0070f3', icon: 'âš¡' };
      case 'saved':
        return { text: 'All changes saved', color: '#27ae60', icon: 'âœ“' };
      case 'error':
        return { text: 'Save failed', color: '#e74c3c', icon: 'âš ' };
      default:
        return { text: '', color: '', icon: '' };
    }
  };

  const saveStatusConfig = getSaveStatusConfig();

  return (
    <>
      <Head>
        <title>Professional Resume Builder - Personal Information Section | Create Your Perfect Resume</title>
        <meta name="description" content="Complete your professional profile with our easy-to-use resume builder. Add your name, contact details, LinkedIn profile, and experience to create a standout resume." />
        <meta name="keywords" content="resume builder, personal information, professional profile, resume template, CV builder, job application, career tools" />
        <meta property="og:title" content="Professional Resume Builder - Personal Information" />
        <meta property="og:description" content="Create a professional resume with our easy-to-use builder. Start with your personal information section." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Builder - Personal Information" />
        <meta name="twitter:description" content="Build your professional resume with our guided form. Start with your personal details." />
        <link rel="canonical" href="https://freeresumemaker.xyz/resume-builder/personal-info" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div 
        ref={contentRef}
        style={{
          width: '100%',
          margin: '0 auto',
          padding: spacing.containerPadding,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          background: '#ffffff',
          minHeight: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column'
        }}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Hero Section */}
        <div 
          style={{
            textAlign: 'center',
            padding: spacing.heroPadding,
            marginBottom: spacing.heroMargin,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          <h1 
            style={{
              fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
              marginBottom: isMobile ? '6px' : '12px',
              color: '#1a1a1a',
              fontWeight: 700,
              lineHeight: '1.3'
            }}
          >
            Personal <span style={{
              color: '#0070f3',
              background: 'linear-gradient(135deg, #0070f3, #0060d6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Information</span>
          </h1>
          <p 
            style={{
              fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
              color: '#666',
              margin: '0 auto 12px',
              lineHeight: '1.4',
              padding: '0 4px',
              maxWidth: '600px'
            }}
          >
            {isMobile ? 'Complete your contact details' : 'Complete your contact details to make it easy for employers to reach you'}
          </p>

          {/* Auto-save Status Indicator */}
          {saveStatusConfig.text && (
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                fontSize: '12px',
                fontWeight: 500,
                color: saveStatusConfig.color,
                border: `1px solid ${saveStatusConfig.color}20`
              }}
            >
              <span>{saveStatusConfig.icon}</span>
              <span>{saveStatusConfig.text}</span>
            </div>
          )}
        </div>

        {/* Stats Bar */}
        <div 
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '8px' : '16px',
            marginBottom: spacing.statsMargin,
            padding: isMobile ? '12px' : '20px',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            width: '100%',
            boxSizing: 'border-box',
            justifyContent: 'space-between'
          }}
        >
          {[
            { label: 'Name', value: formData.fullName ? 'âœ“' : 'â—‹', completed: !!formData.fullName },
            { label: 'Email', value: formData.email ? 'âœ“' : 'â—‹', completed: !!formData.email },
            { label: 'Phone', value: formData.phone ? 'âœ“' : 'â—‹', completed: !!formData.phone },
            { label: 'LinkedIn', value: formData.linkedin ? 'âœ“' : 'â—‹', completed: !!formData.linkedin }
          ].map((item, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              flex: isMobile ? '0 0 calc(50% - 4px)' : '1',
              marginBottom: isMobile && index < 2 ? '0' : '0'
            }}>
              <span style={{ 
                display: 'block', 
                fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px', 
                fontWeight: 700, 
                color: item.completed ? '#27ae60' : '#0070f3', 
                marginBottom: '2px' 
              }}>
                {item.value}
              </span>
              <span style={{ fontSize: isMobile ? '11px' : isTablet ? '12px' : '13px', color: '#666', fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content - Form Fields (continued below) */}
        <div style={{ 
          width: '100%',
          flex: '1 0 auto'
        }}>
          {/* Full Name - Required */}
          <div style={{ position: 'relative', width: '100%', marginBottom: spacing.fieldMargin }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
              <label style={{ fontSize: isMobile ? '14px' : isTablet ? '14px' : '15px', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                Full Name <span style={{ color: '#e74c3c', marginLeft: '4px', fontSize: isMobile ? '12px' : '14px' }}>*</span>
              </label>
              <InfoIcon tooltip={fieldTips.fullName} />
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="text"
                value={formData.fullName || ''}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                placeholder="John Smith"
                style={getInputStyle('fullName')}
                required
                autoComplete="name"
                maxLength={50}
                aria-label="Full Name"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {getFieldStatus('fullName') === 'valid' && (
                <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                  <CheckIcon />
                </span>
              )}
            </div>
            {errors.fullName && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e74c3c', fontSize: '12px', marginTop: '4px', fontWeight: 500 }} id="fullName-error">
                <AlertIcon /> {errors.fullName}
              </div>
            )}
            <div style={{ textAlign: 'right', fontSize: '11px', color: '#a0aec0', marginTop: '2px' }}>
              {formData.fullName?.length || 0}/50
            </div>
          </div>

          {/* Professional Title */}
          <div style={{ position: 'relative', width: '100%', marginBottom: spacing.fieldMargin }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
              <label style={{ fontSize: isMobile ? '14px' : isTablet ? '14px' : '15px', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                Professional Title
              </label>
              <InfoIcon tooltip={fieldTips.jobTitle} />
            </div>
            <input
              type="text"
              value={formData.jobTitle || ''}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              onBlur={() => handleBlur('jobTitle')}
              placeholder="Senior Software Engineer"
              style={{
                width: '100%',
                padding: isMobile ? '10px 12px' : '12px 16px',
                fontSize: isMobile ? '14px' : '15px',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                background: 'white',
                transition: 'all 0.2s ease',
                color: '#333',
                boxSizing: 'border-box'
              }}
              autoComplete="organization-title"
              maxLength={60}
              aria-label="Professional Title"
            />
          </div>

          {/* Email - Required */}
          <div style={{ position: 'relative', width: '100%', marginBottom: spacing.fieldMargin }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
              <label style={{ fontSize: isMobile ? '14px' : isTablet ? '14px' : '15px', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                Email Address <span style={{ color: '#e74c3c', marginLeft: '4px', fontSize: isMobile ? '12px' : '14px' }}>*</span>
              </label>
              <InfoIcon tooltip={fieldTips.email} />
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="john.smith@example.com"
                style={getInputStyle('email')}
                required
                autoComplete="email"
                inputMode="email"
                aria-label="Email Address"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {getFieldStatus('email') === 'valid' && (
                <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                  <CheckIcon />
                </span>
              )}
            </div>
            {errors.email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e74c3c', fontSize: '12px', marginTop: '4px', fontWeight: 500 }} id="email-error">
                <AlertIcon /> {errors.email}
              </div>
            )}
          </div>

          {/* Phone & Location Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? spacing.fieldMargin : '20px',
            marginBottom: spacing.fieldMargin
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
                <label style={{ fontSize: isMobile ? '13px' : '13px', fontWeight: 600, color: '#333' }}>Phone Number</label>
                <InfoIcon tooltip={fieldTips.phone} />
              </div>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur('phone')}
                  placeholder="+1 123 456 7890"
                  style={getInputStyle('phone')}
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  aria-label="Phone Number"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {getFieldStatus('phone') === 'valid' && (
                  <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                    <CheckIcon />
                  </span>
                )}
              </div>
              {errors.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e74c3c', fontSize: '12px', marginTop: '4px', fontWeight: 500 }} id="phone-error">
                  <AlertIcon /> {errors.phone}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
                <label style={{ fontSize: isMobile ? '13px' : '13px', fontWeight: 600, color: '#333' }}>Location</label>
                <InfoIcon tooltip={fieldTips.address} />
              </div>
              <input
                type="text"
                value={formData.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                onBlur={() => handleBlur('address')}
                placeholder="San Francisco, CA, USA"
                style={{
                  width: '100%',
                  padding: isMobile ? '10px 12px' : '12px 16px',
                  fontSize: isMobile ? '14px' : '15px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  background: 'white',
                  transition: 'all 0.2s ease',
                  color: '#333',
                  boxSizing: 'border-box'
                }}
                autoComplete="address-level2"
                aria-label="Location"
              />
            </div>
          </div>

          {/* Experience & LinkedIn Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? spacing.fieldMargin : '20px',
            marginBottom: isMobile ? '4px' : spacing.fieldMargin
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
                <label style={{ fontSize: isMobile ? '13px' : '13px', fontWeight: 600, color: '#333' }}>Years of Experience</label>
                <InfoIcon tooltip={fieldTips.experience} />
              </div>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={formData.totalExperience || ''}
                  onChange={(e) => handleChange('totalExperience', e.target.value)}
                  onBlur={() => handleBlur('totalExperience')}
                  placeholder="5"
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : '12px 16px',
                    fontSize: isMobile ? '14px' : '15px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    background: 'white',
                    transition: 'all 0.2s ease',
                    color: '#333',
                    boxSizing: 'border-box'
                  }}
                  inputMode="numeric"
                  aria-label="Years of Experience"
                />
                <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#718096', fontSize: '13px', fontWeight: 500, pointerEvents: 'none' }}>
                  {isMobile ? 'yrs' : 'years'}
                </span>
              </div>
              {errors.totalExperience && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e74c3c', fontSize: '12px', marginTop: '4px', fontWeight: 500 }}>
                  <AlertIcon /> {errors.totalExperience}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', width: '100%' }}>
                <label style={{ fontSize: isMobile ? '13px' : '13px', fontWeight: 600, color: '#333' }}>LinkedIn Profile</label>
                <InfoIcon tooltip={fieldTips.linkedin} />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'white',
                border: errors.linkedin ? '2px solid #e74c3c' : '2px solid #e1e5e9',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                width: '100%',
                ...(touched.linkedin && formData.linkedin && !errors.linkedin && { borderColor: '#27ae60' })
              }}>
                <span style={{
                  padding: isMobile ? '10px 8px' : '12px 12px',
                  background: '#f8fafc',
                  color: '#4a5568',
                  fontSize: isMobile ? '12px' : '14px',
                  borderRight: '2px solid #e1e5e9',
                  whiteSpace: 'nowrap'
                }}>
                  linkedin.com/in/
                </span>
                <input
                  type="text"
                  value={getLinkedinUsername(formData.linkedin)}
                  onChange={handleLinkedInChange}
                  onBlur={() => handleBlur('linkedin')}
                  placeholder="johnsmith"
                  style={{
                    border: 'none',
                    padding: isMobile ? '10px 8px' : '12px 16px',
                    flex: 1,
                    minWidth: 0,
                    fontSize: isMobile ? '14px' : '15px',
                    background: 'white',
                    outline: 'none'
                  }}
                  autoComplete="url"
                  maxLength={100}
                  aria-label="LinkedIn Username"
                  aria-invalid={!!errors.linkedin}
                  aria-describedby={errors.linkedin ? "linkedin-error" : undefined}
                />
              </div>
              {errors.linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e74c3c', fontSize: '12px', marginTop: '4px', fontWeight: 500 }} id="linkedin-error">
                  <AlertIcon /> {errors.linkedin}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {navigationButtons && (
          <div style={{ 
            marginTop: spacing.buttonMarginTop,
            width: '100%',
            paddingBottom: isContentShort && !isMobile ? '20px' : '0'
          }}>
            {navigationButtons}
          </div>
        )}
      </div>

      {/* Saving Indicator */}
      {isSaving && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'white',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
          border: '1px solid #e9ecef'
        }}>
          <LoadingSpinner size="sm" color="#0070f3" text="" />
          <span style={{ color: '#333', fontSize: '14px', fontWeight: 500 }}>Saving...</span>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
