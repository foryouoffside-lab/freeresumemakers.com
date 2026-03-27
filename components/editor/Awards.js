// client/src/components/forms/Awards.js
// STABLE VERSION - Fixed infinite save loop, proper layout, and functionality
// ============================================

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import { getSectionLimit } from '../../lib/templateConfig';
import Head from 'next/head';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5" aria-hidden="true">
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
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

// Helper function to safely get award data
const getAwardData = (item) => {
  if (!item) return null;
  
  if (typeof item === 'object') {
    return {
      title: item.title || item.name || item.award || '',
      issuer: item.issuer || item.organization || item.presentedBy || '',
      date: item.date || item.year || item.receivedDate || '',
      id: item.id || item._id || null
    };
  }
  
  return null;
};

// Normalize awards data
const normalizeAwards = (data) => {
  if (!Array.isArray(data)) return [];
  
  return data
    .map(item => getAwardData(item))
    .filter(award => award && award.title && award.title.trim() !== '')
    .map((award, index) => ({
      ...award,
      id: award.id || `award-${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`
    }));
};

// Generate unique ID
const generateId = () => {
  return `award-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Award categories with templates
const awardCategories = {
  'academic': {
    label: "Academic",
    title: "Academic Awards",
    color: "#4299e1",
    icon: "🏆",
    awards: [
      { title: "Dean's List", issuer: "University" },
      { title: "Graduated with Honors", issuer: "University" },
      { title: "Academic Excellence Award", issuer: "Department" },
      { title: "Magna Cum Laude", issuer: "University" },
      { title: "Summa Cum Laude", issuer: "University" },
      { title: "President's List", issuer: "University" },
      { title: "Scholarship Recipient", issuer: "Scholarship Foundation" },
      { title: "Research Excellence Award", issuer: "Research Department" }
    ]
  },
  'professional': {
    label: "Professional",
    title: "Professional Awards",
    color: "#48bb78",
    icon: "💼",
    awards: [
      { title: "Employee of the Month", issuer: "Company" },
      { title: "Sales Excellence Award", issuer: "Organization" },
      { title: "Innovation Award", issuer: "Company" },
      { title: "Leadership Award", issuer: "Professional Association" },
      { title: "Rising Star Award", issuer: "Industry Organization" },
      { title: "Excellence in Customer Service", issuer: "Company" },
      { title: "Top Performer Award", issuer: "Company" },
      { title: "Team Player Award", issuer: "Organization" }
    ]
  },
  'industry': {
    label: "Industry",
    title: "Industry Recognition",
    color: "#ed8936",
    icon: "⭐",
    awards: [
      { title: "Best Paper Award", issuer: "Conference" },
      { title: "Industry Innovation Award", issuer: "Trade Association" },
      { title: "Young Professional of the Year", issuer: "Industry Body" },
      { title: "Outstanding Contribution Award", issuer: "Professional Society" },
      { title: "Lifetime Achievement Award", issuer: "Industry Organization" },
      { title: "Technical Excellence Award", issuer: "Technical Association" }
    ]
  },
  'community': {
    label: "Community",
    title: "Community Service",
    color: "#9b59b6",
    icon: "🤝",
    awards: [
      { title: "Volunteer of the Year", issuer: "Nonprofit Organization" },
      { title: "Community Leadership Award", issuer: "Local Government" },
      { title: "Outstanding Service Award", issuer: "Community Center" },
      { title: "Humanitarian Award", issuer: "Charity Organization" },
      { title: "Community Champion", issuer: "Local Council" }
    ]
  }
};

// Role-specific award recommendations
const roleAwardRecommendations = {
  'software-engineer': [
    { title: "Hackathon Winner", issuer: "Tech Event" },
    { title: "Code Quality Award", issuer: "Company" },
    { title: "Open Source Contributor of the Year", issuer: "Community" },
    { title: "Best Innovation Award", issuer: "Tech Conference" }
  ],
  'data-scientist': [
    { title: "Kaggle Competition Winner", issuer: "Kaggle" },
    { title: "Data Visualization Award", issuer: "Industry Conference" },
    { title: "Analytics Excellence Award", issuer: "Company" },
    { title: "ML Innovation Award", issuer: "AI Association" }
  ],
  'product-manager': [
    { title: "Product Launch Excellence", issuer: "Company" },
    { title: "Innovation in Product Development", issuer: "Industry Body" },
    { title: "Customer Impact Award", issuer: "Organization" },
    { title: "Product of the Year", issuer: "Industry Awards" }
  ],
  'sales-executive': [
    { title: "Top Performer Award", issuer: "Company" },
    { title: "President's Club", issuer: "Organization" },
    { title: "Revenue Growth Achievement", issuer: "Sales Division" },
    { title: "Sales Excellence Award", issuer: "Industry Association" }
  ],
  'marketing-manager': [
    { title: "Campaign of the Year", issuer: "Marketing Association" },
    { title: "Digital Excellence Award", issuer: "Industry Body" },
    { title: "Brand Innovation Award", issuer: "Company" },
    { title: "Marketing Leadership Award", issuer: "Professional Organization" }
  ]
};

const Awards = ({ 
  data = [], 
  onDataChange,
  navigationButtons,
  modalMode = false,
  onSelectAward,
  contextRole = '',
  templateId 
}) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  const context = useResume();
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('professional');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAwards, setGeneratedAwards] = useState([]);
  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  
  const maxAwardsLimit = templateId ? getSectionLimit(templateId, 'awards') || 5 : 5;
  
  // Form state for adding/editing
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date: ''
  });

  // Initialize awards data
  const [awards, setAwards] = useState(() => {
    let rawData = [];
    
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.awards)) {
      rawData = data.awards;
    }
    
    if (rawData.length === 0 && context && context.state?.awards && Array.isArray(context.state.awards)) {
      rawData = context.state.awards;
    }
    
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.awards)) {
            rawData = parsed.awards;
          }
        }
      } catch (error) {
        console.error('Failed to load awards from localStorage:', error);
      }
    }
    
    const normalized = normalizeAwards(rawData);
    previousDataRef.current = normalized;
    return normalized;
  });

  const limitInfo = useMemo(() => ({
    limit: maxAwardsLimit,
    currentCount: awards.length,
    canAdd: awards.length < maxAwardsLimit,
    remaining: Math.max(0, maxAwardsLimit - awards.length)
  }), [maxAwardsLimit, awards.length]);

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
  }, [awards.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save awards data with change detection
  const saveAwardsData = useCallback((updatedAwards) => {
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedAwards)) {
      return;
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedAwards;
        
        if (context && context.setAwards && typeof context.setAwards === 'function') {
          context.setAwards(updatedAwards);
        }
        
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          awards: updatedAwards,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
        
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedAwards);
        }
      } catch (error) {
        console.error('Failed to save awards:', error);
        setErrorMessage('Failed to save. Please try again.');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [context, onDataChange]);

  // Only save when awards actually changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveAwardsData(awards);
  }, [awards, saveAwardsData]);

  const handleUpdateAward = useCallback((index, field, value) => {
    if (index >= awards.length) return;
    
    setAwards(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, [awards.length]);

  const handleGenerateAward = useCallback(() => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const category = awardCategories[selectedCategory];
      if (!category) return;
      
      let availableAwards = [...category.awards];
      
      if (searchTerm) {
        availableAwards = availableAwards.filter(award => 
          award.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          award.issuer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (availableAwards.length === 0) {
        availableAwards = category.awards;
      }
      
      const randomIndex = Math.floor(Math.random() * availableAwards.length);
      const selectedAward = { ...availableAwards[randomIndex] };
      
      setGeneratedAwards(prev => [selectedAward, ...prev].slice(0, 5));
      setIsGenerating(false);
    }, 500);
  }, [selectedCategory, searchTerm]);

  const handleAddAward = useCallback(() => {
    if (!formData.title.trim()) {
      setErrorMessage('Please enter an award title');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!formData.issuer.trim()) {
      setErrorMessage('Please enter the issuing organization');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!formData.date.trim()) {
      setErrorMessage('Please enter the date received');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!limitInfo.canAdd && !editingId) {
      setErrorMessage(`Maximum ${maxAwardsLimit} awards allowed`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (editingId) {
      const updated = awards.map(award => 
        award.id === editingId ? { ...award, ...formData } : award
      );
      setAwards(updated);
      setEditingId(null);
    } else {
      const newAward = {
        id: generateId(),
        title: formData.title.trim(),
        issuer: formData.issuer.trim(),
        date: formData.date
      };
      setAwards(prev => [...prev, newAward]);
    }

    setFormData({
      title: '',
      issuer: '',
      date: ''
    });
    setTouchedFields({});
  }, [formData, awards, limitInfo.canAdd, maxAwardsLimit, editingId]);

  const handleRemoveAward = useCallback((id) => {
    setAwards(prev => prev.filter(award => award.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        title: '',
        issuer: '',
        date: ''
      });
    }
  }, [editingId]);

  const handleEditAward = useCallback((award) => {
    if (!limitInfo.canAdd && editingId === null) {
      setErrorMessage(`Cannot edit while at maximum limit (${maxAwardsLimit})`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    setFormData({
      title: award.title,
      issuer: award.issuer,
      date: award.date
    });
    setEditingId(award.id);
  }, [limitInfo.canAdd, maxAwardsLimit, editingId]);

  const handleSelectGeneratedAward = useCallback((awardData) => {
    if (onSelectAward) {
      onSelectAward(awardData);
    } else {
      setFormData({
        title: awardData.title,
        issuer: awardData.issuer,
        date: new Date().getFullYear().toString()
      });
    }
  }, [onSelectAward]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddAward();
    }
  }, [handleAddAward]);

  const handleBlur = useCallback((field) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  }, []);

  const getFieldStatus = useCallback((field, value) => {
    if (!touchedFields[field]) return '';
    if (value && value.trim()) return 'valid';
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

  const completionPercentage = useMemo(() => {
    if (awards.length >= 3) return 100;
    return Math.round((awards.length / 3) * 100);
  }, [awards.length]);

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

  // Awards schema for SEO
  const awardsSchema = awards.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Awards and Recognition",
    "description": "List of awards and recognition added to resume",
    "numberOfItems": awards.length,
    "itemListElement": awards.map((award, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Award",
        "name": award.title,
        "awardedBy": {
          "@type": "Organization",
          "name": award.issuer
        },
        "date": award.date
      }
    }))
  } : null;

  // If in modal mode, show simplified generator
  if (modalMode) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '24px',
            color: '#1a202c',
            marginBottom: '8px',
            fontWeight: 700
          }}>
            Generate Awards
          </h2>
          <p style={{
            color: '#4a5568',
            fontSize: '14px'
          }}>
            Select a category to find relevant awards and recognition
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {contextRole && (
            <div style={{
              background: '#ebf8ff',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#2c5282'
            }}>
              Recommended for: <strong>{contextRole}</strong>
            </div>
          )}

          <input
            type="text"
            placeholder="Search awards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
          />

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a202c',
              marginBottom: '12px'
            }}>Select Category</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '8px'
            }}>
              {Object.entries(awardCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  style={{
                    padding: '10px',
                    border: selectedCategory === key ? `2px solid ${category.color}` : '2px solid #e2e8f0',
                    borderRadius: '8px',
                    background: selectedCategory === key ? `${category.color}10` : 'white',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: selectedCategory === key ? category.color : '#4a5568'
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerateAward}
            disabled={isGenerating}
            style={{
              padding: '12px',
              background: 'linear-gradient(135deg, #4299e1, #3182ce)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: isGenerating ? 'not-allowed' : 'pointer',
              opacity: isGenerating ? 0.6 : 1
            }}
          >
            {isGenerating ? 'Generating...' : 'Generate Award'}
          </button>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a202c',
              marginBottom: '12px'
            }}>Recommended Awards</h3>
            
            {generatedAwards.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '32px',
                background: '#f7fafc',
                borderRadius: '8px',
                color: '#718096'
              }}>
                Click generate to see recommended awards
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {generatedAwards.map((award, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleSelectGeneratedAward(award)}
                    style={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1a202c',
                      margin: '0 0 4px 0'
                    }}>{award.title}</h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#718096',
                      margin: 0
                    }}>{award.issuer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main awards component
  return (
    <>
      <Head>
        <title>Professional Resume Awards Builder | Add Recognition & Honors</title>
        <meta name="description" content="Add awards and recognition to your resume with our professional awards builder. Showcase academic honors, professional achievements, and industry recognition." />
        <meta name="keywords" content="resume awards, professional recognition, academic honors, achievements, resume builder" />
        <meta property="og:title" content="Professional Resume Awards Builder" />
        <meta property="og:description" content="Add awards that showcase your excellence and stand out to employers." />
        <meta name="twitter:card" content="summary_large_image" />
        {awardsSchema && (
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsSchema) }}
          />
        )}
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
            Awards & <span style={{ color: '#4299e1' }}>Recognition</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Add awards and recognition to demonstrate excellence in your field
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
            { label: 'Limit', value: maxAwardsLimit }
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
          
          {/* Left Column - Awards Management */}
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
                <span>{errorMessage}</span>
              </div>
            )}
            
            {/* Award Input Form */}
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
                    background: limitInfo.canAdd ? '#4299e1' : '#a0aec0',
                    color: 'white',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}>+</span>
                  {editingId ? 'Edit Award' : 'Add New Award'}
                </label>
                <InfoIcon tooltip="Add awards that demonstrate excellence and recognition in your field." />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                    Award Title <span style={{ color: '#e53e3e' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., Employee of the Month, Dean's List"
                    style={getInputStyle('title', formData.title)}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                    Issuing Organization <span style={{ color: '#e53e3e' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.issuer}
                    onChange={(e) => setFormData({...formData, issuer: e.target.value})}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., Company Name, University"
                    style={getInputStyle('issuer', formData.issuer)}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                    Date Received <span style={{ color: '#e53e3e' }}>*</span>
                  </label>
                  <input
                    type="month"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    style={getInputStyle('date', formData.date)}
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={handleAddAward}
                    disabled={!formData.title.trim() || !formData.issuer.trim() || !formData.date}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: (!formData.title.trim() || !formData.issuer.trim() || !formData.date) ? '#cbd5e0' : 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: (!formData.title.trim() || !formData.issuer.trim() || !formData.date) ? 'not-allowed' : 'pointer',
                      opacity: (!formData.title.trim() || !formData.issuer.trim() || !formData.date) ? 0.5 : 1
                    }}
                  >
                    {editingId ? 'Update Award' : 'Add Award'}
                  </button>

                  {editingId && (
                    <button 
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ title: '', issuer: '', date: '' });
                        setTouchedFields({});
                      }}
                      style={{
                        padding: '12px 24px',
                        background: '#f1f5f9',
                        color: '#475569',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Awards List */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h2 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 700,
                  color: '#1a202c',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🏆</span>
                  Your Awards
                </h2>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{awards.length}</span>
                  <span style={{ color: '#718096' }}>/{maxAwardsLimit}</span>
                </div>
              </div>
              
              {awards.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏆</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No awards added yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your awards above or generate recommendations from the right panel
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {awards.map((award, index) => (
                    <div
                      key={award.id}
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
                          }}>{award.title}</h4>
                          <span style={{
                            fontSize: '13px',
                            color: '#4299e1',
                            fontWeight: 500
                          }}>
                            {award.issuer}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveAward(award.id)}
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
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px'
                      }}>
                        {award.date && (
                          <span style={{
                            fontSize: '12px',
                            color: '#4a5568',
                            background: '#f7fafc',
                            padding: '4px 8px',
                            borderRadius: '20px'
                          }}>
                            📅 {award.date}
                          </span>
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
                            value={award.title || ''}
                            onChange={(e) => handleUpdateAward(index, 'title', e.target.value)}
                            placeholder="Award Title"
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
                            value={award.issuer || ''}
                            onChange={(e) => handleUpdateAward(index, 'issuer', e.target.value)}
                            placeholder="Issuing Organization"
                            style={{
                              padding: '8px 10px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '12px',
                              background: '#fafafa'
                            }}
                          />
                        </div>
                        <input
                          type="month"
                          value={award.date || ''}
                          onChange={(e) => handleUpdateAward(index, 'date', e.target.value)}
                          placeholder="Date Received"
                          style={{
                            width: '100%',
                            padding: '8px 10px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '12px',
                            background: '#fafafa'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Recommendations */}
          <div style={{ flex: 1 }}>
            {/* Category Tabs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '8px',
              marginBottom: '16px'
            }}>
              {Object.entries(awardCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 8px',
                    background: selectedCategory === key ? category.color : 'white',
                    border: selectedCategory === key ? `1px solid ${category.color}` : '1px solid #e2e8f0',
                    color: selectedCategory === key ? 'white' : '#4a5568',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{category.icon || '🏆'}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Category Awards */}
            <div style={{
              background: '#f7fafc',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e2e8f0',
              marginBottom: '20px'
            }}>
              <h2 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#1a202c',
                margin: '0 0 4px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>⭐</span>
                Popular {awardCategories[selectedCategory]?.label} Awards
              </h2>
              <p style={{
                fontSize: '12px',
                color: '#718096',
                margin: '0 0 16px 0'
              }}>
                Click to add • These awards are highly valued by employers
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '8px'
              }}>
                {awardCategories[selectedCategory]?.awards.slice(0, 8).map((award, index) => {
                  const isAdded = awards.some(a => a.title === award.title);
                  const canAdd = limitInfo.canAdd && !isAdded;
                  
                  return (
                    <button
                      key={`${award.title}-${index}`}
                      onClick={() => {
                        if (canAdd) {
                          setFormData({
                            title: award.title,
                            issuer: award.issuer,
                            date: new Date().getFullYear().toString()
                          });
                        }
                      }}
                      disabled={!canAdd}
                      style={{
                        padding: '8px 10px',
                        background: isAdded ? '#f0fff4' : 'white',
                        border: isAdded ? '1px solid #9ae6b4' : '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: isAdded ? '#276749' : '#4a5568',
                        cursor: canAdd ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s',
                        textAlign: 'center',
                        opacity: isAdded ? 0.8 : 1
                      }}
                      title={!canAdd && !isAdded ? `Max ${maxAwardsLimit} awards reached` : ""}
                    >
                      {award.title}
                      {isAdded && <span style={{ marginLeft: '4px' }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Role-Based Recommendations */}
            {contextRole && roleAwardRecommendations[contextRole] && (
              <div style={{
                background: '#ebf8ff',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #bee3f8'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#2c5282',
                  margin: '0 0 4px 0'
                }}>
                  Recommended for {contextRole}
                </h2>
                <p style={{
                  fontSize: '12px',
                  color: '#4a5568',
                  margin: '0 0 16px 0'
                }}>
                  Highly valued awards for this role
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {roleAwardRecommendations[contextRole].map((award, index) => {
                    const isAdded = awards.some(a => a.title === award.title);
                    const canAdd = limitInfo.canAdd && !isAdded;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (canAdd) {
                            setFormData({
                              title: award.title,
                              issuer: award.issuer,
                              date: new Date().getFullYear().toString()
                            });
                          }
                        }}
                        disabled={!canAdd}
                        style={{
                          padding: '12px',
                          background: isAdded ? '#f0fff4' : 'white',
                          border: isAdded ? '1px solid #9ae6b4' : '1px solid #bee3f8',
                          borderRadius: '8px',
                          cursor: canAdd ? 'pointer' : 'not-allowed',
                          transition: 'all 0.2s',
                          opacity: isAdded ? 0.8 : 1
                        }}
                      >
                        <div style={{ fontWeight: 600, fontSize: '13px', color: '#2d3748' }}>{award.title}</div>
                        <div style={{ fontSize: '11px', color: '#718096', marginTop: '4px' }}>{award.issuer}</div>
                        {isAdded && <div style={{ fontSize: '11px', color: '#48bb78', marginTop: '4px' }}>✓ Added</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
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
            {awards.length >= 3 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {awards.length} awards added. Excellent recognition!
              </div>
            ) : awards.length > 0 ? (
              <div style={{ color: '#ed8936', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add {3 - awards.length} more awards for optimal impact
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 award to continue
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

export default Awards;