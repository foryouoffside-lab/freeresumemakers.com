// ============================================
// components/editor/Internship.js
// COMPLETELY FIXED VERSION - Proper data saving
// ============================================

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import { getSectionLimit } from '../../lib/templateConfig';
import Head from 'next/head';

// SVG Icons as components
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

// Helper function to format date safely
const formatDate = (dateValue) => {
  if (!dateValue) return '';
  if (dateValue === 'Present') return 'Present';
  if (typeof dateValue === 'string') return dateValue;
  if (dateValue instanceof Date) {
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }
  return '';
};

// Stable ID generator
const generateId = () => {
  return `intern-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Normalize internship data - make it serializable
const normalizeInternship = (intern) => {
  if (!intern) {
    return {
      id: generateId(),
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      location: '',
      bulletPoints: ['']
    };
  }
  
  return {
    id: intern.id || generateId(),
    role: intern.role || intern.title || '',
    company: intern.company || '',
    startDate: intern.startDate || '',
    endDate: intern.endDate || '',
    current: intern.current || false,
    location: intern.location || '',
    bulletPoints: Array.isArray(intern.bulletPoints) 
      ? intern.bulletPoints.filter(b => b !== undefined && b !== null)
      : (intern.description ? [intern.description] : [''])
  };
};

const Internship = ({ data = [], navigationButtons, onDataChange, templateId }) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  const { state, updateTemplateSection } = useResume();
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [showError, setShowError] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  
  // Constants
  const MAX_ACHIEVEMENTS = 4;
  const MAX_CHARS = 140;
  
  // Initialize internship data - only once on mount
  const [internshipData, setInternshipData] = useState(() => {
    let rawData = [];
    
    // Priority 1: props.data
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.internships)) rawData = data.internships;
      else if (Array.isArray(data.internship)) rawData = data.internship;
    }
    
    // Priority 2: state.internships from context
    if (rawData.length === 0 && state && Array.isArray(state.internships) && state.internships.length > 0) {
      rawData = state.internships;
    }
    
    // Priority 3: localStorage
    if (rawData.length === 0 && typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.internships)) {
            rawData = parsed.internships;
          }
        }
      } catch (error) {
        console.error('Failed to load internships from localStorage:', error);
      }
    }
    
    const normalized = rawData.map(normalizeInternship);
    previousDataRef.current = JSON.parse(JSON.stringify(normalized)); // Deep clone for comparison
    return normalized;
  });

  const [newInternship, setNewInternship] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    location: '',
    bulletPoints: ['']
  });

  const maxInternshipLimit = templateId ? getSectionLimit(templateId, 'internships') || 3 : 3;
  const currentCount = internshipData.length;
  
  const limitInfo = useMemo(() => ({
    limit: maxInternshipLimit,
    currentCount,
    canAdd: currentCount < maxInternshipLimit,
    remaining: Math.max(0, maxInternshipLimit - currentCount)
  }), [maxInternshipLimit, currentCount]);

  // Calculate achievement count for new internship
  const newAchievementCount = useMemo(() => {
    return newInternship.bulletPoints.filter(b => b && b.trim() !== '').length;
  }, [newInternship.bulletPoints]);

  // Calculate completion percentage
  const completionPercentage = useMemo(() => {
    if (internshipData.length === 0) return 0;
    let totalAchievements = 0;
    let totalPossible = 0;
    
    internshipData.forEach(intern => {
      const achievements = intern.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
      totalAchievements += Math.min(achievements, MAX_ACHIEVEMENTS);
      totalPossible += MAX_ACHIEVEMENTS;
    });
    
    return totalPossible > 0 ? Math.round((totalAchievements / totalPossible) * 100) : 0;
  }, [internshipData]);

  // Validate and normalize data before saving
  const validateAndNormalizeData = useCallback((dataToValidate) => {
    return dataToValidate.map(intern => ({
      id: intern.id || generateId(),
      role: intern.role || '',
      company: intern.company || '',
      startDate: intern.startDate || '',
      endDate: intern.current ? 'Present' : (intern.endDate || ''),
      current: intern.current || false,
      location: intern.location || '',
      bulletPoints: Array.isArray(intern.bulletPoints) 
        ? intern.bulletPoints.filter(b => b !== undefined && b !== null && b !== '')
        : ['']
    }));
  }, []);

  // Save data function - only when data actually changes
  const saveInternshipData = useCallback((updatedInternships) => {
    // Validate and normalize data
    const normalizedData = validateAndNormalizeData(updatedInternships);
    
    // Create serializable version for comparison
    const serializableData = normalizedData.map(intern => ({
      ...intern,
      bulletPoints: intern.bulletPoints || ['']
    }));
    
    const currentSerialized = JSON.stringify(serializableData);
    const previousSerialized = JSON.stringify(previousDataRef.current);
    
    // Only save if data actually changed
    if (currentSerialized === previousSerialized) {
      return;
    }
    
    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        // Update ref with serializable data
        previousDataRef.current = JSON.parse(JSON.stringify(serializableData));
        
        // Update context
        if (updateTemplateSection && typeof updateTemplateSection === 'function') {
          updateTemplateSection('internships', serializableData);
        }
        
        // Update localStorage
        if (typeof window !== 'undefined') {
          try {
            const saved = localStorage.getItem('resumeData');
            let currentState = {};
            if (saved) {
              currentState = JSON.parse(saved);
            }
            
            const newState = { 
              ...currentState, 
              internships: serializableData,
              lastUpdated: new Date().toISOString()
            };
            
            localStorage.setItem('resumeData', JSON.stringify(newState));
          } catch (error) {
            console.error('Failed to save to localStorage:', error);
          }
        }
        
        // Notify parent
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(serializableData);
        }
      } catch (error) {
        console.error('Failed to save internships:', error);
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } finally {
        setIsSaving(false);
      }
    }, 500);
  }, [updateTemplateSection, onDataChange, validateAndNormalizeData]);

  // Save when internshipData changes (but not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveInternshipData(internshipData);
  }, [internshipData, saveInternshipData]);

  // Sync with context when it changes externally - with proper comparison
  useEffect(() => {
    if (!state || !Array.isArray(state.internships) || isInitialMount.current) {
      return;
    }
    
    const contextData = state.internships.map(normalizeInternship);
    const currentData = internshipData.map(normalizeInternship);
    
    const contextSerialized = JSON.stringify(contextData);
    const currentSerialized = JSON.stringify(currentData);
    
    if (contextSerialized !== currentSerialized) {
      // Only update if different and not during save
      setInternshipData(contextData);
      previousDataRef.current = JSON.parse(JSON.stringify(contextData));
    }
  }, [state?.internships]);

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
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [internshipData.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Achievement handlers for new internship
  const handleAchievementChange = useCallback((bulletIndex, value) => {
    if (value.length <= MAX_CHARS) {
      setNewInternship(prev => {
        const updatedBullets = [...prev.bulletPoints];
        updatedBullets[bulletIndex] = value;
        return { ...prev, bulletPoints: updatedBullets };
      });
    }
  }, []);

  const canAddAchievement = useCallback((bullets) => {
    const nonEmptyCount = bullets.filter(b => b && b.trim() !== '').length;
    return nonEmptyCount < MAX_ACHIEVEMENTS;
  }, []);

  const handleAddNewBulletPoint = useCallback(() => {
    if (canAddAchievement(newInternship.bulletPoints)) {
      setNewInternship(prev => ({
        ...prev,
        bulletPoints: [...prev.bulletPoints, '']
      }));
    }
  }, [newInternship.bulletPoints, canAddAchievement]);

  const handleRemoveNewBulletPoint = useCallback((index) => {
    if (newInternship.bulletPoints.length > 1) {
      setNewInternship(prev => {
        const updatedBullets = [...prev.bulletPoints];
        updatedBullets.splice(index, 1);
        return { ...prev, bulletPoints: updatedBullets };
      });
    }
  }, [newInternship.bulletPoints]);

  // Add internship handler
  const handleAddInternship = useCallback(() => {
    if (!limitInfo.canAdd) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!newInternship.role.trim() || !newInternship.company.trim() || !newInternship.startDate) {
      return;
    }

    const internshipToAdd = {
      id: generateId(),
      role: newInternship.role.trim(),
      company: newInternship.company.trim(),
      startDate: newInternship.startDate,
      endDate: newInternship.current ? 'Present' : newInternship.endDate,
      current: newInternship.current,
      location: newInternship.location.trim(),
      bulletPoints: newInternship.bulletPoints.filter(bp => bp && bp.trim() !== '')
    };
    
    // If no bullet points, add an empty one
    if (internshipToAdd.bulletPoints.length === 0) {
      internshipToAdd.bulletPoints = [''];
    }
    
    setInternshipData(prev => [...prev, internshipToAdd]);
    
    // Reset form
    setNewInternship({
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      location: '',
      bulletPoints: ['']
    });
    setTouchedFields({});
  }, [newInternship, limitInfo.canAdd]);

  // Update handlers for existing entries
  const handleUpdateInternship = useCallback((index, field, value) => {
    if (index >= internshipData.length) return;
    
    setInternshipData(prev => {
      const updated = [...prev];
      // Special handling for dates to maintain consistency
      if (field === 'startDate' || field === 'endDate') {
        updated[index] = { 
          ...updated[index], 
          [field]: value,
          // If endDate is being updated and it's not empty, ensure current is false
          ...(field === 'endDate' && value && value !== 'Present' ? { current: false } : {})
        };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return updated;
    });
  }, [internshipData]);

  const handleRemoveInternship = useCallback((index) => {
    if (index >= internshipData.length) return;
    
    setInternshipData(prev => prev.filter((_, i) => i !== index));
  }, [internshipData]);

  const handleBulletPointChange = useCallback((internIndex, bulletIndex, value) => {
    if (internIndex >= internshipData.length) return;
    if (value.length > MAX_CHARS) return;
    
    setInternshipData(prev => {
      const updated = [...prev];
      if (!updated[internIndex].bulletPoints) {
        updated[internIndex].bulletPoints = [''];
      }
      updated[internIndex].bulletPoints[bulletIndex] = value;
      return updated;
    });
  }, [internshipData]);

  const handleAddBulletPoint = useCallback((internIndex) => {
    if (internIndex >= internshipData.length) return;
    
    setInternshipData(prev => {
      const updated = [...prev];
      const currentBullets = updated[internIndex].bulletPoints || [''];
      const totalCount = currentBullets.length;
      
      if (totalCount < MAX_ACHIEVEMENTS) {
        updated[internIndex].bulletPoints = [...currentBullets, ''];
      }
      return updated;
    });
  }, [internshipData]);

  const handleRemoveBulletPoint = useCallback((internIndex, bulletIndex) => {
    if (internIndex >= internshipData.length) return;
    
    setInternshipData(prev => {
      const updated = [...prev];
      if (updated[internIndex].bulletPoints && updated[internIndex].bulletPoints.length > 1) {
        updated[internIndex].bulletPoints = updated[internIndex].bulletPoints.filter((_, i) => i !== bulletIndex);
      }
      return updated;
    });
  }, [internshipData]);

  const handleCurrentToggle = useCallback((index, checked) => {
    if (index >= internshipData.length) return;
    
    setInternshipData(prev => {
      const updated = [...prev];
      updated[index] = { 
        ...updated[index], 
        current: checked,
        endDate: checked ? 'Present' : ''
      };
      return updated;
    });
  }, [internshipData]);

  const handleCurrentNewToggle = useCallback((checked) => {
    setNewInternship(prev => ({
      ...prev,
      current: checked,
      endDate: checked ? 'Present' : ''
    }));
  }, []);

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
  
  // Calculate if content fills the viewport
  const isContentShort = contentHeight < windowHeight * 0.6;

  // Dynamic spacing based on device
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
    "name": "Internship Experience",
    "description": "Professional internship experiences with quantifiable achievements",
    "numberOfItems": internshipData.length,
    "itemListElement": internshipData.map((intern, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Role",
        "name": intern.role || 'Internship Role',
        "startDate": intern.startDate || '',
        "endDate": intern.current ? null : (intern.endDate || ''),
        "location": intern.location || '',
        "department": {
          "@type": "Organization",
          "name": intern.company || ''
        }
      }
    }))
  }), [internshipData]);

  return (
    <>
      <Head>
        <title>Internship Experience Builder | Resume Achievement Generator</title>
        <meta name="description" content="Add and optimize your internship experiences with quantifiable achievements using the STAR method. Perfect for students and recent graduates." />
        <meta name="keywords" content="internship experience, resume internships, summer internship, student resume, entry level resume, internship achievements" />
        <meta property="og:title" content="Internship Experience Builder" />
        <meta property="og:description" content="Add quantifiable achievements to your internship experiences with our easy-to-use builder." />
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
            Internship <span style={{ color: '#4299e1' }}>Experience</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Showcase your internship experiences with quantifiable achievements using the STAR method
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
              {completionPercentage}% Complete
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
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: spacing.statsMargin,
          padding: '20px',
          background: '#f7fafc',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          {[
            { label: 'Entries', value: currentCount },
            { label: 'Remaining', value: limitInfo.remaining },
            { label: 'Maximum', value: maxInternshipLimit },
            { label: 'Achievements', value: `${internshipData.reduce((sum, intern) => sum + (intern.bulletPoints?.filter(b => b && b.trim()).length || 0), 0)}/${maxInternshipLimit * MAX_ACHIEVEMENTS}` }
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
          
          {/* Left Column - Add Internship Form */}
          <div style={{ flex: '1.5' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h2 style={{
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: 700,
                color: '#1a202c',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: 0
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
                Add Internship
              </h2>
              <InfoIcon tooltip="Focus on quantifiable achievements with metrics. Use the STAR method: Situation, Task, Action, Result. Max 140 characters per achievement." />
            </div>

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
                <span>Maximum {maxInternshipLimit} internship entries allowed. Remove an existing entry to add more.</span>
              </div>
            )}

            {/* Add Internship Form */}
            {limitInfo.canAdd ? (
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: spacing.formPadding,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Role and Company */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '12px'
                  }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Internship Title <span style={{ color: '#e53e3e' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={newInternship.role}
                        onChange={(e) => setNewInternship({...newInternship, role: e.target.value})}
                        placeholder="e.g., Software Engineer Intern"
                        onFocus={() => setFocusedInput('role')}
                        onBlur={() => {
                          setFocusedInput(null);
                          handleBlur('role');
                        }}
                        style={getInputStyle('role', newInternship.role)}
                      />
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Company <span style={{ color: '#e53e3e' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={newInternship.company}
                        onChange={(e) => setNewInternship({...newInternship, company: e.target.value})}
                        placeholder="e.g., Google, Microsoft"
                        onFocus={() => setFocusedInput('company')}
                        onBlur={() => {
                          setFocusedInput(null);
                          handleBlur('company');
                        }}
                        style={getInputStyle('company', newInternship.company)}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      value={newInternship.location}
                      onChange={(e) => setNewInternship({...newInternship, location: e.target.value})}
                      placeholder="e.g., San Francisco, CA (Remote)"
                      onFocus={() => setFocusedInput('location')}
                      onBlur={() => {
                        setFocusedInput(null);
                        handleBlur('location');
                      }}
                      style={getInputStyle('location', newInternship.location)}
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
                        value={newInternship.startDate}
                        onChange={(e) => setNewInternship({...newInternship, startDate: e.target.value})}
                        onFocus={() => setFocusedInput('startDate')}
                        onBlur={() => {
                          setFocusedInput(null);
                          handleBlur('startDate');
                        }}
                        style={getInputStyle('startDate', newInternship.startDate)}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        End Date
                      </label>
                      <input
                        type={newInternship.current ? "text" : "month"}
                        value={newInternship.current ? 'Present' : newInternship.endDate}
                        onChange={(e) => setNewInternship({...newInternship, endDate: e.target.value})}
                        disabled={newInternship.current}
                        style={{
                          ...getInputStyle('endDate', newInternship.endDate),
                          background: newInternship.current ? '#f7fafc' : 'white',
                          cursor: newInternship.current ? 'not-allowed' : 'auto'
                        }}
                      />
                    </div>
                  </div>

                  {/* Currently working here */}
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
                        checked={newInternship.current}
                        onChange={(e) => handleCurrentNewToggle(e.target.checked)}
                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#2d3748' }}>
                        I currently work here
                      </span>
                    </label>
                  </div>

                  {/* Achievements Section */}
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748', margin: 0 }}>
                          Achievements & Responsibilities
                        </h4>
                        <InfoIcon tooltip="Use the STAR method: Situation, Task, Action, Result. Include metrics and numbers." />
                      </div>
                      <small style={{ fontSize: '12px', color: '#718096' }}>
                        {newAchievementCount}/{MAX_ACHIEVEMENTS} added â€¢ Max {MAX_CHARS} characters each
                      </small>
                    </div>
                    
                    {newInternship.bulletPoints.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '12px'
                      }}>
                        <span style={{ fontSize: '14px', color: '#4299e1', marginTop: '10px' }}>â€¢</span>
                        <div style={{ flex: 1 }}>
                          <textarea
                            value={bullet}
                            onChange={(e) => handleAchievementChange(bulletIndex, e.target.value)}
                            placeholder="Describe your achievement with metrics using STAR method..."
                            rows={2}
                            maxLength={MAX_CHARS}
                            style={{
                              width: '100%',
                              padding: '10px',
                              border: `2px solid ${bullet.length >= MAX_CHARS ? '#e53e3e' : '#e2e8f0'}`,
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontFamily: 'inherit',
                              resize: 'vertical',
                              minHeight: '60px'
                            }}
                          />
                          <span style={{
                            fontSize: '10px',
                            color: bullet.length >= MAX_CHARS ? '#e53e3e' : '#718096',
                            marginTop: '4px',
                            display: 'inline-block'
                          }}>
                            {bullet.length}/{MAX_CHARS}
                          </span>
                        </div>
                        {newInternship.bulletPoints.length > 1 && (
                          <button
                            onClick={() => handleRemoveNewBulletPoint(bulletIndex)}
                            style={{
                              width: '28px',
                              height: '28px',
                              background: '#fff5f5',
                              color: '#e53e3e',
                              border: '1px solid #fed7d7',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              marginTop: '6px',
                              fontSize: '12px'
                            }}
                          >
                            âœ•
                          </button>
                        )}
                      </div>
                    ))}

                    {canAddAchievement(newInternship.bulletPoints) && (
                      <button
                        onClick={handleAddNewBulletPoint}
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: 'white',
                          color: '#4299e1',
                          border: '2px dashed #cbd5e0',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: 500,
                          cursor: 'pointer',
                          marginTop: '8px'
                        }}
                      >
                        + Add Another Achievement
                      </button>
                    )}
                  </div>

                  <button
                    onClick={handleAddInternship}
                    disabled={!newInternship.role.trim() || !newInternship.company.trim() || !newInternship.startDate}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: (!newInternship.role.trim() || !newInternship.company.trim() || !newInternship.startDate) ? 'not-allowed' : 'pointer',
                      opacity: (!newInternship.role.trim() || !newInternship.company.trim() || !newInternship.startDate) ? 0.5 : 1,
                      transition: 'all 0.2s'
                    }}
                  >
                    + Add Internship Entry
                  </button>
                </div>
              </div>
            ) : (
              <div style={{
                padding: '24px',
                background: '#fffaf0',
                borderRadius: '12px',
                border: '1px solid #fed7aa',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>âš ï¸</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#c05621', marginBottom: '8px' }}>
                  Limit Reached
                </h4>
                <p style={{ fontSize: '14px', color: '#718096' }}>
                  Maximum {maxInternshipLimit} entries. Remove existing entries to add new ones.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Your Internship List */}
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
                  <span>ðŸ“‹</span>
                  Your Internships
                </h3>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{internshipData.length}</span>
                  <span style={{ color: '#718096' }}>/{maxInternshipLimit}</span>
                </div>
              </div>
              
              {internshipData.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>ðŸ’¼</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No internship entries yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your first internship using the form on the left
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {internshipData.map((intern, index) => {
                    const nonEmptyAchievements = intern.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
                    const totalBulletPoints = intern.bulletPoints?.length || 0;
                    
                    return (
                      <div
                        key={intern.id || index}
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
                            <h4 style={{
                              fontSize: '16px',
                              fontWeight: 700,
                              color: '#1a202c',
                              margin: '0 0 4px 0'
                            }}>{intern.role || 'Internship Role'}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                              <span style={{
                                fontSize: '12px',
                                color: '#4299e1',
                                background: '#ebf8ff',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                {intern.company || 'Company'}
                              </span>
                              {intern.current && (
                                <span style={{
                                  fontSize: '11px',
                                  color: '#48bb78',
                                  background: '#f0fff4',
                                  padding: '4px 8px',
                                  borderRadius: '20px'
                                }}>
                                  ðŸŸ¢ Current
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveInternship(index)}
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
                            âœ•
                          </button>
                        </div>
                        
                        <div style={{ marginBottom: '12px' }}>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '8px'
                          }}>
                            <span style={{
                              fontSize: '12px',
                              color: '#4a5568',
                              background: '#f7fafc',
                              padding: '4px 8px',
                              borderRadius: '20px'
                            }}>
                              ðŸ“… {formatDate(intern.startDate)} - {intern.current ? 'Present' : formatDate(intern.endDate)}
                            </span>
                            {intern.location && (
                              <span style={{
                                fontSize: '12px',
                                color: '#4a5568',
                                background: '#f7fafc',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                ðŸ“ {intern.location}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Achievements Section */}
                        <div style={{ marginTop: '12px' }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '12px'
                          }}>
                            <h5 style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', margin: 0 }}>
                              Achievements
                            </h5>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                              <span style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#4299e1',
                                background: '#ebf8ff',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                {nonEmptyAchievements}/{MAX_ACHIEVEMENTS}
                              </span>
                            </div>
                          </div>
                          
                          {(!intern.bulletPoints || intern.bulletPoints.length === 0 || 
                            (intern.bulletPoints.length === 1 && !intern.bulletPoints[0])) ? (
                            <div style={{
                              textAlign: 'center',
                              padding: '24px',
                              background: '#f7fafc',
                              borderRadius: '8px',
                              border: '2px dashed #e2e8f0'
                            }}>
                              <p style={{ fontSize: '13px', color: '#718096', marginBottom: '12px' }}>No achievements added</p>
                              <button
                                onClick={() => handleAddBulletPoint(index)}
                                style={{
                                  padding: '6px 16px',
                                  background: '#4299e1',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '6px',
                                  fontSize: '12px',
                                  cursor: 'pointer'
                                }}
                              >
                                + Add Achievement
                              </button>
                            </div>
                          ) : (
                            <>
                              {intern.bulletPoints.map((bullet, bulletIndex) => (
                                <div key={bulletIndex} style={{
                                  display: 'flex',
                                  gap: '8px',
                                  marginBottom: '10px'
                                }}>
                                  <span style={{ fontSize: '13px', color: '#4299e1', marginTop: '6px' }}>â€¢</span>
                                  <div style={{ flex: 1 }}>
                                    <textarea
                                      value={bullet || ''}
                                      onChange={(e) => handleBulletPointChange(index, bulletIndex, e.target.value)}
                                      placeholder="Achievement with metrics..."
                                      rows={2}
                                      maxLength={MAX_CHARS}
                                      style={{
                                        width: '100%',
                                        padding: '8px 10px',
                                        border: `1px solid ${bullet?.length >= MAX_CHARS ? '#e53e3e' : '#e2e8f0'}`,
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontFamily: 'inherit',
                                        resize: 'vertical',
                                        background: '#fafafa'
                                      }}
                                    />
                                    <span style={{
                                      fontSize: '10px',
                                      color: bullet?.length >= MAX_CHARS ? '#e53e3e' : '#718096',
                                      marginTop: '2px',
                                      display: 'inline-block'
                                    }}>
                                      {bullet?.length || 0}/{MAX_CHARS}
                                    </span>
                                  </div>
                                  {totalBulletPoints > 1 && (
                                    <button
                                      onClick={() => handleRemoveBulletPoint(index, bulletIndex)}
                                      style={{
                                        width: '24px',
                                        height: '24px',
                                        background: '#fff5f5',
                                        color: '#e53e3e',
                                        border: '1px solid #fed7d7',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        marginTop: '4px',
                                        fontSize: '11px'
                                      }}
                                    >
                                      âœ•
                                    </button>
                                  )}
                                </div>
                              ))}
                              {totalBulletPoints < MAX_ACHIEVEMENTS && (
                                <button
                                  onClick={() => handleAddBulletPoint(index)}
                                  style={{
                                    width: '100%',
                                    padding: '8px',
                                    background: 'white',
                                    color: '#4299e1',
                                    border: '1px dashed #cbd5e0',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    cursor: 'pointer',
                                    marginTop: '8px'
                                  }}
                                >
                                  + Add Another Achievement
                                </button>
                              )}
                            </>
                          )}
                        </div>

                        {/* Editable Fields */}
                        <div style={{
                          marginTop: '16px',
                          paddingTop: '16px',
                          borderTop: '1px solid #e2e8f0'
                        }}>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '8px',
                            marginBottom: '8px'
                          }}>
                            <input
                              type="text"
                              value={intern.role || ''}
                              onChange={(e) => handleUpdateInternship(index, 'role', e.target.value)}
                              placeholder="Internship Title"
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                            <input
                              type="text"
                              value={intern.company || ''}
                              onChange={(e) => handleUpdateInternship(index, 'company', e.target.value)}
                              placeholder="Company"
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                          </div>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '8px',
                            marginBottom: '8px'
                          }}>
                            <input
                              type="month"
                              value={formatDate(intern.startDate)}
                              onChange={(e) => handleUpdateInternship(index, 'startDate', e.target.value)}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                            <input
                              type={intern.current ? "text" : "month"}
                              value={intern.current ? 'Present' : formatDate(intern.endDate)}
                              onChange={(e) => handleUpdateInternship(index, 'endDate', e.target.value)}
                              disabled={intern.current}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: intern.current ? '#f5f5f5' : '#fafafa',
                                cursor: intern.current ? 'not-allowed' : 'auto'
                              }}
                            />
                          </div>
                          <input
                            type="text"
                            value={intern.location || ''}
                            onChange={(e) => handleUpdateInternship(index, 'location', e.target.value)}
                            placeholder="Location"
                            style={{
                              width: '100%',
                              padding: '6px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa',
                              marginBottom: '8px'
                            }}
                          />
                          <div>
                            <label style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer'
                            }}>
                              <input
                                type="checkbox"
                                checked={intern.current || false}
                                onChange={(e) => handleCurrentToggle(index, e.target.checked)}
                                style={{ width: '14px', height: '14px' }}
                              />
                              <span style={{ fontSize: '12px', color: '#4a5568' }}>Currently working here</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
            {internshipData.length >= 1 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {internshipData.length} {internshipData.length === 1 ? 'entry' : 'entries'} added. Ready to continue!
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 internship entry to continue
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

export default Internship;