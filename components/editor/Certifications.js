// client/src/components/forms/Certifications.js
// STABLE VERSION - Fixed infinite save loop and excessive re-renders
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

// Helper function to safely get certification data
const getCertificationData = (item) => {
  if (!item) return null;
  
  if (typeof item === 'object') {
    return {
      name: item.name || item.certification || item.title || '',
      issuer: item.issuer || item.organization || item.provider || '',
      date: item.date || item.year || item.completionDate || '',
      id: item.id || item._id || null
    };
  }
  
  return null;
};

// Normalize certifications data
const normalizeCertifications = (data) => {
  if (!Array.isArray(data)) return [];
  
  return data
    .map(item => getCertificationData(item))
    .filter(cert => cert && cert.name && cert.name.trim() !== '')
    .map((cert, index) => ({
      ...cert,
      id: cert.id || `cert-${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`
    }));
};

// Generate unique ID
const generateId = () => {
  return `cert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Certification categories with templates
const certificationCategories = {
  'technical': {
    label: "Technical",
    title: "Technical Certifications",
    color: "#4299e1",
    certifications: [
      { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
      { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud" },
      { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft" },
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation" },
      { name: "Cisco Certified Network Professional (CCNP)", issuer: "Cisco" },
      { name: "CompTIA Security+", issuer: "CompTIA" },
      { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISCÃ‚Â²" },
      { name: "AWS Certified Developer", issuer: "Amazon Web Services" }
    ]
  },
  'project-management': {
    label: "Project Management",
    title: "Project Management",
    color: "#48bb78",
    certifications: [
      { name: "Project Management Professional (PMP)", issuer: "PMI" },
      { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance" },
      { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org" },
      { name: "SAFe Agilist Certification", issuer: "Scaled Agile" },
      { name: "PMI Agile Certified Practitioner (PMI-ACP)", issuer: "PMI" },
      { name: "Certified Associate in Project Management (CAPM)", issuer: "PMI" }
    ]
  },
  'data-science': {
    label: "Data Science",
    title: "Data Science & Analytics",
    color: "#ed8936",
    certifications: [
      { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
      { name: "IBM Data Science Professional Certificate", issuer: "IBM" },
      { name: "Microsoft Certified: Azure Data Scientist Associate", issuer: "Microsoft" },
      { name: "Tableau Desktop Specialist", issuer: "Tableau" },
      { name: "SAS Certified Advanced Analytics Professional", issuer: "SAS" },
      { name: "TensorFlow Developer Certificate", issuer: "Google" }
    ]
  },
  'development': {
    label: "Development",
    title: "Development",
    color: "#9b59b6",
    certifications: [
      { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta" },
      { name: "Google UX Design Professional Certificate", issuer: "Google" },
      { name: "IBM Full Stack Cloud Developer", issuer: "IBM" },
      { name: "Oracle Certified Professional, Java SE Developer", issuer: "Oracle" },
      { name: "Python Institute Certified Python Developer", issuer: "Python Institute" },
      { name: "MongoDB Certified Developer Associate", issuer: "MongoDB" }
    ]
  }
};

// Role-specific recommendations
const roleRecommendations = {
  'software-engineer': [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services" },
    { name: "Google Cloud Developer", issuer: "Google Cloud" },
    { name: "Microsoft Certified: Azure Developer", issuer: "Microsoft" }
  ],
  'data-scientist': [
    { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
    { name: "IBM Data Science Professional Certificate", issuer: "IBM" },
    { name: "TensorFlow Developer Certificate", issuer: "Google" }
  ],
  'product-manager': [
    { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" },
    { name: "Product School Product Manager Certificate", issuer: "Product School" },
    { name: "SAFe Product Manager", issuer: "Scaled Agile" }
  ],
  'devops-engineer': [
    { name: "AWS DevOps Engineer", issuer: "Amazon Web Services" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF" },
    { name: "Terraform Associate", issuer: "HashiCorp" }
  ],
  'ux-designer': [
    { name: "Google UX Design Professional Certificate", issuer: "Google" },
    { name: "NN/g UX Certification", issuer: "Nielsen Norman Group" },
    { name: "Adobe XD Professional", issuer: "Adobe" }
  ]
};

const Certifications = ({ 
  data = [], 
  onDataChange,
  navigationButtons,
  modalMode = false,
  onSelectCertification,
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
  const [selectedCategory, setSelectedCategory] = useState('technical');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCertifications, setGeneratedCertifications] = useState([]);
  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  
  const maxCertificationsLimit = templateId ? getSectionLimit(templateId, 'certifications') || 8 : 8;
  
  // Form state for adding/editing
  const [formData, setFormData] = useState({
    name: '',
    issuer: '',
    date: ''
  });

  // Initialize certifications data
  const [certifications, setCertifications] = useState(() => {
    let rawData = [];
    
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.certifications)) {
      rawData = data.certifications;
    }
    
    if (rawData.length === 0 && context && context.state?.certifications && Array.isArray(context.state.certifications)) {
      rawData = context.state.certifications;
    }
    
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.certifications)) {
            rawData = parsed.certifications;
          }
        }
      } catch (error) {
        console.error('Failed to load certifications from localStorage:', error);
      }
    }
    
    const normalized = normalizeCertifications(rawData);
    previousDataRef.current = normalized;
    return normalized;
  });

  const limitInfo = useMemo(() => ({
    limit: maxCertificationsLimit,
    currentCount: certifications.length,
    canAdd: certifications.length < maxCertificationsLimit,
    remaining: Math.max(0, maxCertificationsLimit - certifications.length)
  }), [maxCertificationsLimit, certifications.length]);

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
  }, [certifications.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save certifications data with change detection
  const saveCertificationsData = useCallback((updatedCertifications) => {
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedCertifications)) {
      return;
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedCertifications;
        
        if (context && context.setCertifications && typeof context.setCertifications === 'function') {
          context.setCertifications(updatedCertifications);
        }
        
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          certifications: updatedCertifications,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
        
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedCertifications);
        }
      } catch (error) {
        console.error('Failed to save certifications:', error);
        setErrorMessage('Failed to save. Please try again.');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [context, onDataChange]);

  // Only save when certifications actually changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveCertificationsData(certifications);
  }, [certifications, saveCertificationsData]);

  const handleUpdateCertification = useCallback((index, field, value) => {
    if (index >= certifications.length) return;
    
    setCertifications(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, [certifications.length]);

  const handleGenerateCertification = useCallback(() => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const category = certificationCategories[selectedCategory];
      if (!category) return;
      
      let availableCerts = [...category.certifications];
      
      if (searchTerm) {
        availableCerts = availableCerts.filter(cert => 
          cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (availableCerts.length === 0) {
        availableCerts = category.certifications;
      }
      
      const randomIndex = Math.floor(Math.random() * availableCerts.length);
      const selectedCert = { ...availableCerts[randomIndex] };
      
      setGeneratedCertifications(prev => [selectedCert, ...prev].slice(0, 5));
      setIsGenerating(false);
    }, 500);
  }, [selectedCategory, searchTerm]);

  const handleAddCertification = useCallback(() => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter a certification name');
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
      setErrorMessage('Please enter the date earned');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!limitInfo.canAdd && !editingId) {
      setErrorMessage(`Maximum ${maxCertificationsLimit} certifications allowed`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (editingId) {
      const updated = certifications.map(cert => 
        cert.id === editingId ? { ...cert, ...formData } : cert
      );
      setCertifications(updated);
      setEditingId(null);
    } else {
      const newCertification = {
        id: generateId(),
        name: formData.name.trim(),
        issuer: formData.issuer.trim(),
        date: formData.date
      };
      setCertifications(prev => [...prev, newCertification]);
    }

    setFormData({
      name: '',
      issuer: '',
      date: ''
    });
    setTouchedFields({});
  }, [formData, certifications, limitInfo.canAdd, maxCertificationsLimit, editingId]);

  const handleRemoveCertification = useCallback((id) => {
    setCertifications(prev => prev.filter(cert => cert.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        name: '',
        issuer: '',
        date: ''
      });
    }
  }, [editingId]);

  const handleEditCertification = useCallback((cert) => {
    if (!limitInfo.canAdd && editingId === null) {
      setErrorMessage(`Cannot edit while at maximum limit (${maxCertificationsLimit})`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    setFormData({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date
    });
    setEditingId(cert.id);
  }, [limitInfo.canAdd, maxCertificationsLimit, editingId]);

  const handleSelectGeneratedCert = useCallback((certData) => {
    if (onSelectCertification) {
      onSelectCertification(certData);
    } else {
      setFormData({
        name: certData.name,
        issuer: certData.issuer,
        date: new Date().getFullYear().toString()
      });
    }
  }, [onSelectCertification]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCertification();
    }
  }, [handleAddCertification]);

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
    if (certifications.length >= 3) return 100;
    return Math.round((certifications.length / 3) * 100);
  }, [certifications.length]);

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

  // Certifications schema for SEO
  const certificationsSchema = certifications.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Certifications for Resume",
    "description": "List of professional certifications added to resume for career advancement",
    "numberOfItems": certifications.length,
    "itemListElement": certifications.map((cert, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": cert.name,
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": cert.issuer
        },
        "dateCreated": cert.date
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
            Generate Certifications
          </h2>
          <p style={{
            color: '#4a5568',
            fontSize: '14px'
          }}>
            Select a category to find relevant certifications
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
            placeholder="Search certifications..."
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
              {Object.entries(certificationCategories).map(([key, category]) => (
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
            onClick={handleGenerateCertification}
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
            {isGenerating ? 'Generating...' : 'Generate Certification'}
          </button>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a202c',
              marginBottom: '12px'
            }}>Recommended Certifications</h3>
            
            {generatedCertifications.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '32px',
                background: '#f7fafc',
                borderRadius: '8px',
                color: '#718096'
              }}>
                Click generate to see recommended certifications
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {generatedCertifications.map((cert, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleSelectGeneratedCert(cert)}
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
                    }}>{cert.name}</h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#718096',
                      margin: 0
                    }}>{cert.issuer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main certifications component
  return (
    <>
      <Head>
        <title>Professional Resume Certifications Builder | Add ATS-Friendly Credentials</title>
        <meta name="description" content="Add and optimize professional certifications for your resume with our ATS-friendly certifications builder. Include industry-recognized credentials like AWS, PMP, CISSP, and Google Cloud certifications." />
        <meta name="keywords" content="resume certifications, professional certifications, ATS keywords, technical certifications, project management certifications" />
        <meta property="og:title" content="Professional Resume Certifications Builder" />
        <meta property="og:description" content="Add professional certifications that pass ATS filters with our resume certifications builder." />
        <meta name="twitter:card" content="summary_large_image" />
        {certificationsSchema && (
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
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
            Professional <span style={{ color: '#4299e1' }}>Certifications</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Add industry-recognized certifications to validate your expertise
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
            { label: 'Limit', value: maxCertificationsLimit }
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
          
          {/* Left Column - Certifications Management */}
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
            
            {/* Certification Input Form */}
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
                  {editingId ? 'Edit Certification' : 'Add New Certification'}
                </label>
                <InfoIcon tooltip="Add professional certifications that validate your expertise. Include the full certification name, issuing organization, and date earned." />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                    Certification Name <span style={{ color: '#e53e3e' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., AWS Certified Solutions Architect"
                    style={getInputStyle('name', formData.name)}
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
                    placeholder="e.g., Amazon Web Services"
                    style={getInputStyle('issuer', formData.issuer)}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                    Date Earned <span style={{ color: '#e53e3e' }}>*</span>
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
                    onClick={handleAddCertification}
                    disabled={!formData.name.trim() || !formData.issuer.trim() || !formData.date}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: (!formData.name.trim() || !formData.issuer.trim() || !formData.date) ? '#cbd5e0' : 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: (!formData.name.trim() || !formData.issuer.trim() || !formData.date) ? 'not-allowed' : 'pointer',
                      opacity: (!formData.name.trim() || !formData.issuer.trim() || !formData.date) ? 0.5 : 1
                    }}
                  >
                    {editingId ? 'Update Certification' : 'Add Certification'}
                  </button>

                  {editingId && (
                    <button 
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ name: '', issuer: '', date: '' });
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

            {/* Certifications List */}
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
                  <span>Ã°Å¸â€œÅ“</span>
                  Your Certifications
                </h2>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{certifications.length}</span>
                  <span style={{ color: '#718096' }}>/{maxCertificationsLimit}</span>
                </div>
              </div>
              
              {certifications.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>Ã°Å¸â€œÅ“</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No certifications added yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your certifications above or generate recommendations from the right panel
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.id}
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
                          }}>{cert.name}</h4>
                          <span style={{
                            fontSize: '13px',
                            color: '#4299e1',
                            fontWeight: 500
                          }}>
                            {cert.issuer}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveCertification(cert.id)}
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
                          Ã¢Å“â€¢
                        </button>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px'
                      }}>
                        {cert.date && (
                          <span style={{
                            fontSize: '12px',
                            color: '#4a5568',
                            background: '#f7fafc',
                            padding: '4px 8px',
                            borderRadius: '20px'
                          }}>
                            Ã°Å¸â€œâ€¦ {cert.date}
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
                            value={cert.name || ''}
                            onChange={(e) => handleUpdateCertification(index, 'name', e.target.value)}
                            placeholder="Certification Name"
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
                            value={cert.issuer || ''}
                            onChange={(e) => handleUpdateCertification(index, 'issuer', e.target.value)}
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
                          value={cert.date || ''}
                          onChange={(e) => handleUpdateCertification(index, 'date', e.target.value)}
                          placeholder="Date Earned"
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
              {Object.entries(certificationCategories).map(([key, category]) => (
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
                  <span>{category.icon || 'Ã°Å¸â€œÅ“'}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Category Certifications */}
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
                <span>Ã¢Â­Â</span>
                Popular {certificationCategories[selectedCategory]?.label} Certifications
              </h2>
              <p style={{
                fontSize: '12px',
                color: '#718096',
                margin: '0 0 16px 0'
              }}>
                Click to add Ã¢â‚¬Â¢ These certifications are highly valued by employers
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '8px'
              }}>
                {certificationCategories[selectedCategory]?.certifications.slice(0, 8).map((cert, index) => {
                  const isAdded = certifications.some(c => c.name === cert.name);
                  const canAdd = limitInfo.canAdd && !isAdded;
                  
                  return (
                    <button
                      key={`${cert.name}-${index}`}
                      onClick={() => {
                        if (canAdd) {
                          setFormData({
                            name: cert.name,
                            issuer: cert.issuer,
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
                      title={!canAdd && !isAdded ? `Max ${maxCertificationsLimit} certifications reached` : ""}
                    >
                      {cert.name}
                      {isAdded && <span style={{ marginLeft: '4px' }}>Ã¢Å“â€œ</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Role-Based Recommendations */}
            {contextRole && roleRecommendations[contextRole] && (
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
                  Highly valued certifications for this role
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {roleRecommendations[contextRole].map((cert, index) => {
                    const isAdded = certifications.some(c => c.name === cert.name);
                    const canAdd = limitInfo.canAdd && !isAdded;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (canAdd) {
                            setFormData({
                              name: cert.name,
                              issuer: cert.issuer,
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
                        <div style={{ fontWeight: 600, fontSize: '13px', color: '#2d3748' }}>{cert.name}</div>
                        <div style={{ fontSize: '11px', color: '#718096', marginTop: '4px' }}>{cert.issuer}</div>
                        {isAdded && <div style={{ fontSize: '11px', color: '#48bb78', marginTop: '4px' }}>Ã¢Å“â€œ Added</div>}
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
            {certifications.length >= 3 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {certifications.length} certifications added. Excellent credentials!
              </div>
            ) : certifications.length > 0 ? (
              <div style={{ color: '#ed8936', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add {3 - certifications.length} more certifications for optimal impact
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 certification to continue
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

export default Certifications;