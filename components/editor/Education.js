// client/src/components/forms/Education.js
// STABLE VERSION - Fixed infinite save loop with proper data persistence
// GPA SCALES: 5.0, 10.0, 100 only
// ============================================

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useResume } from '../../context/ResumeContext';
import { getSectionLimit } from '../../lib/templateConfig';
import Head from 'next/head';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const InfoIcon = ({ tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      style={{ 
        position: 'relative', 
        cursor: 'help', 
        flexShrink: 0, 
        marginLeft: '6px',
        display: 'inline-flex'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      role="button"
      tabIndex={0}
      aria-label={`Information: ${tooltip}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      {showTooltip && (
        <span 
          style={{
            position: 'absolute',
            bottom: '100%',
            right: 0,
            width: '240px',
            padding: '8px 12px',
            background: '#1f2937',
            color: 'white',
            borderRadius: '8px',
            fontSize: '11px',
            lineHeight: '1.4',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textAlign: 'left',
            fontWeight: 'normal',
            marginBottom: '8px'
          }}
          role="tooltip"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const getSafeString = (value) => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  if (typeof value === 'boolean') return value.toString();
  return String(value);
};

const normalizeEducation = (edu) => {
  if (!edu) {
    return {
      id: generateId(),
      degree: '',
      institution: '',
      startYear: '',
      endYear: '',
      location: '',
      current: false,
      gpa: '',
      gpaScale: '10.0'
    };
  }
  
  if (typeof edu === 'string') {
    return {
      id: generateId(),
      degree: edu,
      institution: '',
      startYear: '',
      endYear: '',
      location: '',
      current: false,
      gpa: '',
      gpaScale: '10.0'
    };
  }
  
  if (typeof edu === 'object') {
    let gpaScale = edu.gpaScale || '10.0';
    const gpa = edu.gpa || '';
    
    if (!edu.gpaScale && gpa) {
      const gpaNum = parseFloat(gpa);
      if (!isNaN(gpaNum)) {
        if (gpaNum <= 5.0) gpaScale = '5.0';
        else if (gpaNum <= 10.0) gpaScale = '10.0';
        else if (gpaNum <= 100) gpaScale = '100';
      }
    }
    
    return {
      id: edu.id || edu._id || generateId(),
      degree: getSafeString(edu.degree),
      institution: getSafeString(edu.institution),
      startYear: getSafeString(edu.startYear),
      endYear: getSafeString(edu.endYear),
      location: getSafeString(edu.location),
      current: Boolean(edu.current),
      gpa: gpa,
      gpaScale: gpaScale
    };
  }
  
  return {
    id: generateId(),
    degree: '',
    institution: '',
    startYear: '',
    endYear: '',
    location: '',
    current: false,
    gpa: '',
    gpaScale: '10.0'
  };
};

const Education = ({ onDataChange, data, templateId, navigationButtons }) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  const { state, setEducation: contextSetEducation } = useResume();
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [showError, setShowError] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  const [editingId, setEditingId] = useState(null);
  
  const maxEducationLimit = templateId ? getSectionLimit(templateId, 'education') || 3 : 3;
  
  // GPA scales - only 5.0, 10.0, 100
  const gpaScales = ['5.0', '10.0', '100'];
  
  // Initialize education data
  const [educationData, setEducationData] = useState(() => {
    let rawData = [];
    
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.education)) {
      rawData = data.education;
    }
    
    if (rawData.length === 0 && state && Array.isArray(state.education)) {
      rawData = state.education;
    }
    
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.education)) {
            rawData = parsed.education;
          }
        }
      } catch (error) {
        console.error('Failed to load education from localStorage:', error);
      }
    }
    
    const normalized = rawData.map(normalizeEducation);
    previousDataRef.current = normalized;
    return normalized;
  });

  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    startYear: '',
    endYear: '',
    location: '',
    current: false,
    gpa: '',
    gpaScale: '10.0'
  });

  const limitInfo = useMemo(() => ({
    limit: maxEducationLimit,
    currentCount: educationData.length,
    canAdd: educationData.length < maxEducationLimit,
    remaining: Math.max(0, maxEducationLimit - educationData.length)
  }), [maxEducationLimit, educationData.length]);

  // Window resize effect
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Measure content height with debounce
  useEffect(() => {
    let timeoutId;
    const measureHeight = () => {
      if (contentRef.current) {
        timeoutId = setTimeout(() => {
          setContentHeight(contentRef.current.offsetHeight);
        }, 150);
      }
    };
    measureHeight();
    return () => clearTimeout(timeoutId);
  }, [educationData.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save education data with change detection
  const saveEducationData = useCallback((updatedEducation) => {
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedEducation)) {
      return;
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedEducation;
        
        if (contextSetEducation && typeof contextSetEducation === 'function') {
          contextSetEducation(updatedEducation);
        }
        
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          education: updatedEducation,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
        
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedEducation);
        }
      } catch (error) {
        console.error('Failed to save education:', error);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [contextSetEducation, onDataChange]);

  // Only save when educationData actually changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveEducationData(educationData);
  }, [educationData, saveEducationData]);

  const handleAddEducation = useCallback(() => {
    if (!limitInfo.canAdd) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!newEducation.degree.trim() || !newEducation.institution.trim() || !newEducation.startYear) {
      return;
    }

    const educationToAdd = {
      id: generateId(),
      degree: newEducation.degree.trim(),
      institution: newEducation.institution.trim(),
      startYear: newEducation.startYear,
      endYear: newEducation.current ? 'Present' : newEducation.endYear,
      current: newEducation.current,
      location: newEducation.location.trim(),
      gpa: newEducation.gpa,
      gpaScale: newEducation.gpaScale
    };
    
    setEducationData(prev => [...prev, educationToAdd]);
    
    setNewEducation({
      degree: '',
      institution: '',
      startYear: '',
      endYear: '',
      location: '',
      current: false,
      gpa: '',
      gpaScale: '10.0'
    });
    setTouchedFields({});
  }, [newEducation, limitInfo.canAdd]);

  const handleUpdateEducation = useCallback((index, field, value) => {
    if (index >= educationData.length) return;
    
    setEducationData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, [educationData.length]);

  const handleRemoveEducation = useCallback((index) => {
    if (index >= educationData.length) return;
    setEducationData(prev => prev.filter((_, i) => i !== index));
    if (editingId === educationData[index]?.id) {
      setEditingId(null);
    }
  }, [educationData.length, editingId]);

  const handleCurrentEducationToggle = useCallback((index, checked) => {
    if (index >= educationData.length) return;
    
    setEducationData(prev => {
      const updated = [...prev];
      updated[index] = { 
        ...updated[index], 
        current: checked,
        endYear: checked ? 'Present' : ''
      };
      return updated;
    });
  }, [educationData.length]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddEducation();
    }
  }, [handleAddEducation]);

  const handleBlur = useCallback((field) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  }, []);

  const getFieldStatus = useCallback((field, value) => {
    if (!touchedFields[field]) return '';
    if (value && value.toString().trim()) return 'valid';
    return '';
  }, [touchedFields]);

  const getInputStyle = useCallback((field, value) => {
    const baseStyle = {
      width: '100%',
      padding: windowWidth < 768 ? '10px 12px' : '12px 16px',
      fontSize: windowWidth < 768 ? '14px' : '15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      background: 'white',
      transition: 'all 0.2s ease',
      color: '#1a202c',
      boxSizing: 'border-box',
      outline: 'none'
    };

    if (getFieldStatus(field, value) === 'valid') {
      return {
        ...baseStyle,
        borderColor: '#48bb78',
        paddingRight: '40px'
      };
    }

    if (focusedInput === field) {
      return {
        ...baseStyle,
        borderColor: '#4299e1',
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.1)'
      };
    }

    return baseStyle;
  }, [windowWidth, focusedInput, getFieldStatus]);

  // Responsive conditions
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isSmallMobile = windowWidth < 480;
  const isContentShort = contentHeight < windowHeight * 0.6;

  const getSpacing = useCallback(() => {
    if (isMobile) {
      return {
        containerPadding: '12px',
        heroPadding: '20px 16px',
        heroMargin: '16px',
        statsMargin: '16px',
        mainGap: '24px',
        sectionMargin: '24px',
        buttonMarginTop: '16px',
        statusMarginTop: '12px',
        formPadding: '16px'
      };
    } else if (isTablet) {
      return {
        containerPadding: '20px',
        heroPadding: '32px 24px',
        heroMargin: '24px',
        statsMargin: '24px',
        mainGap: '32px',
        sectionMargin: '32px',
        buttonMarginTop: '20px',
        statusMarginTop: '16px',
        formPadding: '20px'
      };
    } else {
      return {
        containerPadding: '24px',
        heroPadding: '40px 32px',
        heroMargin: '32px',
        statsMargin: '32px',
        mainGap: '40px',
        sectionMargin: '40px',
        buttonMarginTop: '24px',
        statusMarginTop: '20px',
        formPadding: '24px'
      };
    }
  }, [isMobile, isTablet]);

  const spacing = getSpacing();

  // Structured data for SEO
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Education History",
    "description": "Professional education history with degrees and qualifications",
    "numberOfItems": educationData.length,
    "itemListElement": educationData.map((edu, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": edu.degree || "Degree",
        "name": edu.degree || "Academic Degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": edu.institution || "Educational Institution",
          "location": edu.location || ""
        },
        "dateCreated": edu.startYear || "",
        "expires": edu.current ? null : (edu.endYear || "")
      }
    }))
  }), [educationData]);

  return (
    <>
      <Head>
        <title>Education Section Builder | Resume Builder</title>
        <meta name="description" content="Add your education history to your resume. Include degrees, institutions, GPA, and academic achievements." />
        <meta name="keywords" content="education section, resume education, degree, GPA, academic background, resume builder" />
        <meta property="og:title" content="Education Section Builder" />
        <meta property="og:description" content="Add your education history to your professional resume." />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div 
        ref={contentRef}
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: spacing.containerPadding,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: '#ffffff',
          minHeight: '100vh',
          boxSizing: 'border-box'
        }}
      >
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          padding: spacing.heroPadding,
          marginBottom: spacing.heroMargin,
          background: 'linear-gradient(135deg, #f7fafc 0%, #ffffff 100%)',
          borderRadius: '16px',
          border: '1px solid #e2e8f0'
        }}>
          <h1 style={{
            fontSize: isMobile ? '24px' : '28px',
            marginBottom: '8px',
            color: '#1a202c',
            fontWeight: 700
          }}>
            Education <span style={{ color: '#4299e1' }}>Background</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Showcase your academic background, degrees, and qualifications
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: '#ebf8ff',
            borderRadius: '20px',
            border: '1px solid #bee3f8'
          }}>
            <span style={{ fontSize: '14px', color: '#3182ce', fontWeight: 600 }}>
              {educationData.length}/{maxEducationLimit} Entries
            </span>
          </div>
          {isSaving && (
            <div style={{
              marginTop: '12px',
              fontSize: '12px',
              color: '#4299e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                border: '2px solid #4299e1',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Saving...
            </div>
          )}
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: spacing.statsMargin,
          padding: '20px',
          background: '#f7fafc',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          {[
            { label: 'Added', value: limitInfo.currentCount },
            { label: 'Remaining', value: limitInfo.remaining },
            { label: 'Limit', value: maxEducationLimit }
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: isMobile ? '20px' : '24px',
                fontWeight: 700,
                color: '#4299e1',
                marginBottom: '4px'
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: isMobile ? '11px' : '13px',
                color: '#4a5568',
                fontWeight: 500
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: spacing.mainGap,
          marginBottom: spacing.sectionMargin
        }}>
          
          {/* Left Column - Add Education Form */}
          <div style={{ flex: '1.5' }}>
            {/* Error Message */}
            {showError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                background: '#fff5f5',
                border: '1px solid #fed7d7',
                borderRadius: '8px',
                color: '#c53030',
                fontSize: '13px',
                marginBottom: '16px'
              }}>
                <AlertIcon />
                <span>Maximum {maxEducationLimit} entries allowed. Remove an existing entry to add more.</span>
              </div>
            )}
            
            {/* Add Education Form */}
            {limitInfo.canAdd && (
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: spacing.formPadding,
                border: '1px solid #e2e8f0',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <label style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 700,
                    color: '#1a202c',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      background: '#4299e1',
                      color: 'white',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}>+</span>
                    Add New Education
                  </label>
                  <InfoIcon tooltip="List your highest degree first. Include degree name, institution, dates, GPA (optional), and location." />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Degree */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Degree <span style={{ color: '#e53e3e' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={newEducation.degree}
                      onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="e.g., Bachelor of Science in Computer Science"
                      style={getInputStyle('degree', newEducation.degree)}
                    />
                  </div>

                  {/* Institution */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Institution <span style={{ color: '#e53e3e' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={newEducation.institution}
                      onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="e.g., Stanford University"
                      style={getInputStyle('institution', newEducation.institution)}
                    />
                  </div>

                  {/* Dates */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '12px'
                  }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Start Date <span style={{ color: '#e53e3e' }}>*</span>
                      </label>
                      <input
                        type="month"
                        value={newEducation.startYear}
                        onChange={(e) => setNewEducation({...newEducation, startYear: e.target.value})}
                        style={getInputStyle('startYear', newEducation.startYear)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        End Date
                      </label>
                      <input
                        type={newEducation.current ? "text" : "month"}
                        value={newEducation.current ? 'Present' : newEducation.endYear}
                        onChange={(e) => setNewEducation({...newEducation, endYear: e.target.value})}
                        disabled={newEducation.current}
                        style={{
                          ...getInputStyle('endYear', newEducation.endYear),
                          background: newEducation.current ? '#f7fafc' : 'white',
                          cursor: newEducation.current ? 'not-allowed' : 'auto'
                        }}
                      />
                    </div>
                  </div>

                  {/* GPA - Only 5, 10, 100 scales */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
                    gap: '12px'
                  }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        GPA / CGPA
                      </label>
                      <input
                        type="text"
                        value={newEducation.gpa}
                        onChange={(e) => setNewEducation({...newEducation, gpa: e.target.value})}
                        placeholder="e.g., 8.5"
                        style={getInputStyle('gpa', newEducation.gpa)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Scale
                      </label>
                      <select
                        value={newEducation.gpaScale}
                        onChange={(e) => setNewEducation({...newEducation, gpaScale: e.target.value})}
                        style={{
                          width: '100%',
                          padding: windowWidth < 768 ? '10px 12px' : '12px 16px',
                          fontSize: windowWidth < 768 ? '14px' : '15px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '8px',
                          background: 'white',
                          transition: 'all 0.2s ease',
                          color: '#1a202c',
                          boxSizing: 'border-box',
                          outline: 'none'
                        }}
                      >
                        {gpaScales.map(scale => (
                          <option key={scale} value={scale}>{scale}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      value={newEducation.location}
                      onChange={(e) => setNewEducation({...newEducation, location: e.target.value})}
                      placeholder="e.g., New York, NY"
                      style={getInputStyle('location', newEducation.location)}
                    />
                  </div>

                  {/* Currently Studying */}
                  <div style={{
                    padding: '12px',
                    background: '#f7fafc',
                    borderRadius: '8px'
                  }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="checkbox"
                        checked={newEducation.current}
                        onChange={(e) => setNewEducation({
                          ...newEducation,
                          current: e.target.checked,
                          endYear: e.target.checked ? 'Present' : ''
                        })}
                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#2d3748' }}>
                        I currently study here
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleAddEducation}
                    disabled={!newEducation.degree.trim() || !newEducation.institution.trim() || !newEducation.startYear}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: (!newEducation.degree.trim() || !newEducation.institution.trim() || !newEducation.startYear) ? 'not-allowed' : 'pointer',
                      opacity: (!newEducation.degree.trim() || !newEducation.institution.trim() || !newEducation.startYear) ? 0.5 : 1,
                      transition: 'all 0.2s'
                    }}
                  >
                    + Add Education Entry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Your Education List */}
          <div style={{ flex: 1 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 700,
                  color: '#1a202c',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>📚</span>
                  Your Education
                </h3>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{educationData.length}</span>
                  <span style={{ color: '#718096' }}>/{maxEducationLimit}</span>
                </div>
              </div>
              
              {educationData.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎓</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No education entries yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your first education entry using the form on the left
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {educationData.map((edu, index) => (
                    <div
                      key={edu.id || index}
                      style={{
                        background: 'white',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        padding: '16px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '12px'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '4px'
                          }}>
                            <h4 style={{
                              fontSize: '16px',
                              fontWeight: 700,
                              color: '#1a202c',
                              margin: 0
                            }}>{edu.degree || 'Degree'}</h4>
                            <span style={{
                              fontSize: '11px',
                              padding: '4px 8px',
                              borderRadius: '20px',
                              background: edu.current ? '#f0fff4' : '#f1f5f9',
                              color: edu.current ? '#48bb78' : '#475569'
                            }}>
                              {edu.current ? 'In Progress' : 'Completed'}
                            </span>
                          </div>
                          <span style={{
                            fontSize: '13px',
                            color: '#4299e1',
                            fontWeight: 500
                          }}>
                            {edu.institution || 'Institution'}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveEducation(index)}
                          style={{
                            width: '28px',
                            height: '28px',
                            background: '#fff5f5',
                            color: '#e53e3e',
                            border: '1px solid #fed7d7',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '16px',
                        padding: '8px',
                        background: '#f7fafc',
                        borderRadius: '8px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          background: 'white',
                          padding: '4px 8px',
                          borderRadius: '20px'
                        }}>
                          📅 {edu.startYear?.substring(0, 7)} - {edu.current ? 'Present' : edu.endYear?.substring(0, 7)}
                        </span>
                        {edu.gpa && (
                          <span style={{
                            fontSize: '12px',
                            background: 'white',
                            padding: '4px 8px',
                            borderRadius: '20px'
                          }}>
                            📊 GPA: {edu.gpa}/{edu.gpaScale}
                          </span>
                        )}
                        {edu.location && (
                          <span style={{
                            fontSize: '12px',
                            background: 'white',
                            padding: '4px 8px',
                            borderRadius: '20px'
                          }}>
                            📍 {edu.location}
                          </span>
                        )}
                      </div>

                      {/* Current Study Toggle */}
                      <div style={{
                        marginBottom: '14px',
                        padding: '10px',
                        background: '#f7fafc',
                        borderRadius: '8px'
                      }}>
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={edu.current || false}
                            onChange={(e) => handleCurrentEducationToggle(index, e.target.checked)}
                            style={{ width: '16px', height: '16px' }}
                          />
                          <span style={{ fontSize: '12px', color: '#4a5568' }}>I currently study here</span>
                        </label>
                      </div>

                      {/* Editable Fields */}
                      <div style={{
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid #e2e8f0'
                      }}>
                        <p style={{
                          fontSize: '12px',
                          color: '#666',
                          marginBottom: '12px',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <span style={{ fontSize: '14px' }}>✏️</span> Click any field to edit
                        </p>
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                          gap: '8px',
                          marginBottom: '8px'
                        }}>
                          <input
                            type="text"
                            value={edu.degree || ''}
                            onChange={(e) => handleUpdateEducation(index, 'degree', e.target.value)}
                            placeholder="Degree"
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa'
                            }}
                          />
                          <input
                            type="text"
                            value={edu.institution || ''}
                            onChange={(e) => handleUpdateEducation(index, 'institution', e.target.value)}
                            placeholder="Institution"
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa'
                            }}
                          />
                        </div>
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
                          gap: '8px',
                          marginBottom: '8px'
                        }}>
                          <input
                            type="text"
                            value={edu.gpa || ''}
                            onChange={(e) => handleUpdateEducation(index, 'gpa', e.target.value)}
                            placeholder="GPA"
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa'
                            }}
                          />
                          <select
                            value={edu.gpaScale || '10.0'}
                            onChange={(e) => handleUpdateEducation(index, 'gpaScale', e.target.value)}
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa',
                              cursor: 'pointer'
                            }}
                          >
                            {gpaScales.map(scale => (
                              <option key={scale} value={scale}>{scale}</option>
                            ))}
                          </select>
                        </div>
                        
                        <input
                          type="text"
                          value={edu.location || ''}
                          onChange={(e) => handleUpdateEducation(index, 'location', e.target.value)}
                          placeholder="Location"
                          style={{
                            width: '100%',
                            padding: '8px 10px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '12px',
                            background: '#fafafa',
                            marginBottom: '8px'
                          }}
                        />
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                          gap: '8px'
                        }}>
                          <input
                            type="month"
                            value={edu.startYear || ''}
                            onChange={(e) => handleUpdateEducation(index, 'startYear', e.target.value)}
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa'
                            }}
                          />
                          <input
                            type={edu.current ? "text" : "month"}
                            value={edu.current ? 'Present' : edu.endYear || ''}
                            onChange={(e) => handleUpdateEducation(index, 'endYear', e.target.value)}
                            disabled={edu.current}
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: edu.current ? '#f5f5f5' : '#fafafa',
                              cursor: edu.current ? 'not-allowed' : 'auto'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div style={{
          marginTop: spacing.buttonMarginTop,
          paddingBottom: isContentShort && !isMobile ? '20px' : (isMobile ? '8px' : '0')
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            gap: isMobile ? '12px' : '16px',
            marginBottom: '16px'
          }}>
            {navigationButtons}
          </div>
          <div style={{
            textAlign: 'center',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '13px',
            background: '#f7fafc',
            border: '1px solid #e2e8f0'
          }}>
            {educationData.length >= 1 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {educationData.length} {educationData.length === 1 ? 'entry' : 'entries'} added. Ready to continue!
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 education entry to continue
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default Education;