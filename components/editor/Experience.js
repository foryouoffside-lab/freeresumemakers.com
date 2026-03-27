// ============================================
// components/forms/Experience.js
// STABLE VERSION - Fixed infinite save loop
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
        marginLeft: '8px',
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

// Generate unique ID
const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Professional role achievements templates
const roleAchievements = {
  'software-engineer': {
    title: 'Software Engineer',
    achievements: [
      "Built React/Node apps serving 500K+ users, improving performance 45% with code splitting",
      "Developed REST APIs handling 500K daily requests with 99.9% uptime and monitoring",
      "Led 4 devs across 3 time zones, delivering 15+ projects 20% ahead of schedule",
      "Optimized PostgreSQL queries, cutting response time from 800ms to 50ms"
    ]
  },
  'senior-software-engineer': {
    title: 'Senior Software Engineer',
    achievements: [
      "Architected Kafka/K8s microservices for 2M+ users with 99.99% uptime",
      "Mentored 12 engineers, leading to 3 promotions and 40% faster team onboarding",
      "Migrated PHP monolith to 15+ AWS microservices, cutting deploy time from 2hrs to 10min",
      "Optimized AWS infrastructure saving $500K annually while maintaining 99.95% availability"
    ]
  },
  'product-manager': {
    title: 'Product Manager',
    achievements: [
      "Launched 5 B2B SaaS features generating $2.5M ARR with 40% market adoption",
      "Conducted 100+ user interviews, increasing NPS from 32 to 58",
      "Prioritized roadmap using data, delivering features 25% faster",
      "Drove product adoption up 35% YoY and reduced churn 20%"
    ]
  },
  'marketing-manager': {
    title: 'Marketing Manager',
    achievements: [
      "Led digital campaigns generating $3M+ revenue with 4.5x ROAS across 5 channels",
      "Grew organic traffic 150% YoY to 200K monthly visitors via SEO",
      "Managed $500K marketing budget, reallocating 30% to high-performing channels",
      "Launched email automation increasing open rates 35% and conversions 28%"
    ]
  },
  'sales-director': {
    title: 'Sales Director',
    achievements: [
      "Grew regional revenue 85% from $4M to $7.4M within 18 months",
      "Closed 15 enterprise deals worth $2.8M with 94% renewal rate",
      "Built 20-person sales team, achieving 120% of quota 3 consecutive years",
      "Reduced sales cycle from 90 to 45 days through process optimization"
    ]
  },
  'data-scientist': {
    title: 'Data Scientist',
    achievements: [
      "Built ML models predicting churn with 94% accuracy, reducing churn 25%",
      "Analyzed 50TB customer data, uncovering insights that increased LTV 35%",
      "Deployed 8 production models serving 100K+ predictions daily",
      "Reduced model training time 70% via distributed computing optimization"
    ]
  }
};

const categoryAchievements = {
  'performance': {
    title: 'Performance Optimization',
    achievements: [
      "Improved PageSpeed score from 45 to 95 via code splitting and lazy loading",
      "Reduced query time from 2s to 50ms with PostgreSQL indexing",
      "Optimized React rendering from 30fps to 60fps, reducing CPU usage 50%",
      "Added Redis caching reducing API response time 80%"
    ]
  },
  'leadership': {
    title: 'Leadership',
    achievements: [
      "Led 15-person team to deliver $2M platform 30% ahead of schedule",
      "Mentored 8 junior professionals, improving productivity 40%",
      "Managed $2M budget with 98% accuracy, delivering under budget",
      "Implemented Agile across 5 teams, increasing velocity 35%"
    ]
  },
  'cost-savings': {
    title: 'Cost Optimization',
    achievements: [
      "Cut AWS costs 45% ($200K/year) via reserved instances",
      "Renegotiated 20+ vendor contracts, saving $150K annually",
      "Automated cleanup of idle resources, reducing wasted spend 60%",
      "Consolidated 30+ servers via virtualization, saving $100K/year"
    ]
  },
  'revenue-growth': {
    title: 'Revenue Growth',
    achievements: [
      "Drove $5M+ in new revenue through strategic partnerships",
      "Launched 3 product lines generating $2.8M in first year",
      "Expanded into 4 new markets, increasing TAM by $15M",
      "Optimized pricing strategy increasing average order value 35%"
    ]
  }
};

const Experience = ({ onDataChange, data, templateId, navigationButtons }) => {
  const contentRef = useRef(null);
  const context = useResume();
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [showError, setShowError] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  
  // Constants
  const MAX_ACHIEVEMENTS = 4;
  const MAX_CHARS = 140;
  
  // Initialize experience data
  const [experienceData, setExperienceData] = useState(() => {
    let rawData = [];
    
    if (data && Array.isArray(data)) {
      rawData = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.experience)) {
      rawData = data.experience;
    } else if (data && typeof data === 'object' && Array.isArray(data.experiences)) {
      rawData = data.experiences;
    }
    
    if (rawData.length === 0 && context) {
      if (Array.isArray(context.experience)) {
        rawData = context.experience;
      } else if (context.state?.experience && Array.isArray(context.state.experience)) {
        rawData = context.state.experience;
      }
    }
    
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.experience)) {
            rawData = parsed.experience;
          } else if (Array.isArray(parsed.experiences)) {
            rawData = parsed.experiences;
          }
        }
      } catch (error) {
        console.error('Failed to load experience from localStorage:', error);
      }
    }
    
    const normalized = rawData.map(exp => ({
      id: exp.id || generateId(),
      position: exp.position || '',
      company: exp.company || '',
      startDate: exp.startDate || '',
      endDate: exp.endDate || '',
      current: exp.current || false,
      location: exp.location || '',
      bulletPoints: Array.isArray(exp.bulletPoints) ? exp.bulletPoints.filter(b => b) : ['']
    }));
    
    previousDataRef.current = normalized;
    return normalized;
  });

  const [newExperience, setNewExperience] = useState({
    id: '',
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    location: '',
    bulletPoints: ['']
  });

  const maxExperienceLimit = templateId ? getSectionLimit(templateId, 'experience') : 4;
  const currentCount = experienceData.length;
  
  const limitInfo = useMemo(() => ({
    limit: maxExperienceLimit,
    currentCount,
    canAdd: currentCount < maxExperienceLimit,
    remaining: Math.max(0, maxExperienceLimit - currentCount)
  }), [maxExperienceLimit, currentCount]);

  const newAchievementCount = useMemo(() => {
    return newExperience.bulletPoints.filter(b => b && b.trim() !== '').length;
  }, [newExperience.bulletPoints]);

  // Save to context and localStorage - only when data actually changes
  const saveExperienceData = useCallback((updatedData) => {
    // Check if data actually changed
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedData)) {
      return; // No change, don't save
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedData;
        
        if (context && typeof context.updateExperience === 'function') {
          context.updateExperience(updatedData);
        } else if (context && typeof context.setState === 'function') {
          context.setState(prev => ({ ...prev, experience: updatedData }));
        }
        
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          experience: updatedData,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedData);
        }
      } catch (error) {
        console.error('Failed to save experience:', error);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [context, onDataChange]);

  // Only save when experienceData actually changes (not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveExperienceData(experienceData);
  }, [experienceData, saveExperienceData]);

  // Window resize effect
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll to top on mount only once
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
  }, [experienceData.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const detectRoleFromTitle = useCallback((title) => {
    if (!title) return null;
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('senior software engineer') || 
        (lowerTitle.includes('senior') && lowerTitle.includes('software'))) {
      return 'senior-software-engineer';
    }
    if (lowerTitle.includes('software engineer') || lowerTitle.includes('developer')) {
      return 'software-engineer';
    }
    if (lowerTitle.includes('product manager')) {
      return 'product-manager';
    }
    if (lowerTitle.includes('marketing')) {
      return 'marketing-manager';
    }
    if (lowerTitle.includes('sales')) {
      return 'sales-director';
    }
    if (lowerTitle.includes('data') || lowerTitle.includes('analyst')) {
      return 'data-scientist';
    }
    return null;
  }, []);

  const generateRandomAchievements = useCallback((templateKey) => {
    let template = roleAchievements[templateKey] || categoryAchievements[templateKey];
    if (!template) {
      template = roleAchievements['software-engineer'];
    }
    const allAchievements = template.achievements;
    const shuffled = [...allAchievements].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  const handleGenerateAchievements = useCallback(() => {
    let templateKey = null;
    
    if (selectedRole) {
      templateKey = selectedRole;
    } else if (selectedCategory) {
      templateKey = selectedCategory;
    } else if (newExperience.position.trim()) {
      const detected = detectRoleFromTitle(newExperience.position);
      if (detected) templateKey = detected;
    }
    
    if (!templateKey) {
      templateKey = 'software-engineer';
      setSelectedRole('software-engineer');
    }
    
    const achievements = generateRandomAchievements(templateKey);
    
    setNewExperience(prev => ({
      ...prev,
      bulletPoints: achievements
    }));
  }, [selectedRole, selectedCategory, newExperience.position, detectRoleFromTitle, generateRandomAchievements]);

  const handleGenerateForExisting = useCallback((expIndex) => {
    if (!experienceData[expIndex]) return;
    
    const exp = experienceData[expIndex];
    let templateKey = null;
    
    if (exp.position) {
      const detected = detectRoleFromTitle(exp.position);
      if (detected) templateKey = detected;
    }
    
    if (!templateKey) templateKey = 'software-engineer';
    
    const achievements = generateRandomAchievements(templateKey);
    
    setExperienceData(prev => {
      const updated = [...prev];
      updated[expIndex] = {
        ...updated[expIndex],
        bulletPoints: achievements
      };
      return updated;
    });
  }, [experienceData, detectRoleFromTitle, generateRandomAchievements]);

  const handleAchievementChange = useCallback((bulletIndex, value) => {
    if (value.length <= MAX_CHARS) {
      setNewExperience(prev => {
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
    if (canAddAchievement(newExperience.bulletPoints)) {
      setNewExperience(prev => ({
        ...prev,
        bulletPoints: [...prev.bulletPoints, '']
      }));
    }
  }, [newExperience.bulletPoints, canAddAchievement]);

  const handleRemoveNewBulletPoint = useCallback((index) => {
    if (newExperience.bulletPoints.length > 1) {
      setNewExperience(prev => {
        const updatedBullets = [...prev.bulletPoints];
        updatedBullets.splice(index, 1);
        return { ...prev, bulletPoints: updatedBullets };
      });
    }
  }, [newExperience.bulletPoints]);

  const handleAddExperience = useCallback(() => {
    if (!limitInfo.canAdd) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!newExperience.position.trim() || !newExperience.company.trim() || !newExperience.startDate) {
      return;
    }

    const experienceToAdd = {
      id: generateId(),
      position: newExperience.position.trim(),
      company: newExperience.company.trim(),
      startDate: newExperience.startDate,
      endDate: newExperience.current ? 'Present' : newExperience.endDate,
      current: newExperience.current,
      location: newExperience.location.trim(),
      bulletPoints: newExperience.bulletPoints.filter(bp => bp && bp.trim() !== '')
    };
    
    if (experienceToAdd.bulletPoints.length === 0) {
      experienceToAdd.bulletPoints = [''];
    }
    
    setExperienceData(prev => [...prev, experienceToAdd]);
    
    setNewExperience({
      id: '',
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      location: '',
      bulletPoints: ['']
    });
    setSelectedRole('');
    setSelectedCategory('');
    setTouchedFields({});
  }, [newExperience, limitInfo.canAdd]);

  const handleUpdateExperience = useCallback((index, field, value) => {
    if (index >= experienceData.length) return;
    
    setExperienceData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, [experienceData.length]);

  const handleRemoveExperience = useCallback((index) => {
    if (index >= experienceData.length) return;
    setExperienceData(prev => prev.filter((_, i) => i !== index));
  }, [experienceData.length]);

  const handleBulletPointChange = useCallback((expIndex, bulletIndex, value) => {
    if (expIndex >= experienceData.length) return;
    if (value.length > MAX_CHARS) return;
    
    setExperienceData(prev => {
      const updated = [...prev];
      if (!updated[expIndex].bulletPoints) {
        updated[expIndex].bulletPoints = [''];
      }
      updated[expIndex].bulletPoints[bulletIndex] = value;
      return updated;
    });
  }, [experienceData.length]);

  const handleAddBulletPoint = useCallback((expIndex) => {
    if (expIndex >= experienceData.length) return;
    
    setExperienceData(prev => {
      const updated = [...prev];
      const currentBullets = updated[expIndex].bulletPoints || [''];
      const nonEmptyCount = currentBullets.filter(b => b && b.trim() !== '').length;
      
      if (nonEmptyCount < MAX_ACHIEVEMENTS) {
        updated[expIndex].bulletPoints = [...currentBullets, ''];
      }
      return updated;
    });
  }, [experienceData.length]);

  const handleRemoveBulletPoint = useCallback((expIndex, bulletIndex) => {
    if (expIndex >= experienceData.length) return;
    
    setExperienceData(prev => {
      const updated = [...prev];
      if (updated[expIndex].bulletPoints && updated[expIndex].bulletPoints.length > 1) {
        updated[expIndex].bulletPoints = updated[expIndex].bulletPoints.filter((_, i) => i !== bulletIndex);
      }
      return updated;
    });
  }, [experienceData.length]);

  const handleCurrentExperienceToggle = useCallback((index, checked) => {
    if (index >= experienceData.length) return;
    
    setExperienceData(prev => {
      const updated = [...prev];
      updated[index] = { 
        ...updated[index], 
        current: checked,
        endDate: checked ? 'Present' : ''
      };
      return updated;
    });
  }, [experienceData.length]);

  const handleCurrentNewExperienceToggle = useCallback((checked) => {
    setNewExperience(prev => ({
      ...prev,
      current: checked,
      endDate: checked ? 'Present' : ''
    }));
  }, []);

  const handleRoleSelect = useCallback((roleKey) => {
    setSelectedRole(roleKey);
    setSelectedCategory('');
  }, []);

  const handleCategorySelect = useCallback((categoryKey) => {
    setSelectedCategory(categoryKey);
    setSelectedRole('');
  }, []);

  const handleBlur = useCallback((field) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  }, []);

  const completionPercentage = useMemo(() => {
    if (experienceData.length === 0) return 0;
    let totalAchievements = 0;
    let totalPossible = 0;
    
    experienceData.forEach(exp => {
      const achievements = exp.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
      totalAchievements += Math.min(achievements, MAX_ACHIEVEMENTS);
      totalPossible += MAX_ACHIEVEMENTS;
    });
    
    return totalPossible > 0 ? Math.round((totalAchievements / totalPossible) * 100) : 0;
  }, [experienceData]);

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

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Work Experience",
    "description": "Detailed work history with quantifiable achievements",
    "numberOfItems": experienceData.length,
    "itemListElement": experienceData.map((exp, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "OrganizationRole",
        "roleName": exp.position || 'Professional Role',
        "startDate": exp.startDate || '',
        "endDate": exp.current ? null : (exp.endDate || ''),
        "memberOf": {
          "@type": "Organization",
          "name": exp.company || '',
          "location": exp.location || ''
        }
      }
    }))
  }), [experienceData]);

  return (
    <>
      <Head>
        <title>Professional Work Experience Builder | Resume Achievement Generator</title>
        <meta name="description" content="Add and optimize your work experience with quantifiable achievements. Includes templates for software engineers, product managers, and more." />
        <meta name="keywords" content="work experience, resume achievements, job history, professional experience" />
        <meta property="og:title" content="Professional Work Experience Builder" />
        <meta property="og:description" content="Add quantifiable achievements to your work experience." />
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
            Work <span style={{ color: '#4299e1' }}>Experience</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Showcase your professional journey with quantifiable achievements using the STAR method
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
            { label: 'Maximum', value: maxExperienceLimit },
            { label: 'Achievements', value: `${experienceData.reduce((sum, exp) => sum + (exp.bulletPoints?.filter(b => b && b.trim()).length || 0), 0)}/${maxExperienceLimit * MAX_ACHIEVEMENTS}` }
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
          
          {/* Left Column - Add Experience Form */}
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
                Add Work Experience
              </h2>
              <InfoIcon tooltip="Focus on quantifiable achievements with metrics. Use the STAR method: Situation, Task, Action, Result." />
            </div>

            {/* Role Templates */}
            <div style={{
              marginBottom: '16px',
              padding: '16px',
              background: '#ebf8ff',
              borderRadius: '12px',
              border: '1px solid #bee3f8'
            }}>
              <h4 style={{
                fontSize: '14px',
                color: '#2c5282',
                margin: '0 0 12px 0',
                fontWeight: 600
              }}>
                👔 Job Role Templates
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '8px'
              }}>
                {Object.entries(roleAchievements).map(([key, role]) => (
                  <button
                    key={key}
                    onClick={() => handleRoleSelect(key)}
                    style={{
                      padding: '8px 12px',
                      background: selectedRole === key ? '#4299e1' : 'white',
                      border: `1px solid ${selectedRole === key ? '#4299e1' : '#cbd5e0'}`,
                      color: selectedRole === key ? 'white' : '#2d3748',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'center'
                    }}
                  >
                    {role.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Templates */}
            <div style={{
              marginBottom: '16px',
              padding: '16px',
              background: '#fffaf0',
              borderRadius: '12px',
              border: '1px solid #fed7aa'
            }}>
              <h4 style={{
                fontSize: '14px',
                color: '#c05621',
                margin: '0 0 12px 0',
                fontWeight: 600
              }}>
                🏆 Achievement Categories
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '8px'
              }}>
                {Object.entries(categoryAchievements).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => handleCategorySelect(key)}
                    style={{
                      padding: '8px 12px',
                      background: selectedCategory === key ? '#ed8936' : 'white',
                      border: `1px solid ${selectedCategory === key ? '#ed8936' : '#fed7aa'}`,
                      color: selectedCategory === key ? 'white' : '#c05621',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'center'
                    }}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerateAchievements}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: '20px',
                transition: 'all 0.2s'
              }}
            >
              ⚡ Generate 4 Achievements
              {(selectedRole || selectedCategory) && (
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  marginLeft: '8px'
                }}>
                  {selectedRole ? roleAchievements[selectedRole]?.title : 
                   selectedCategory ? categoryAchievements[selectedCategory]?.title : ''}
                </span>
              )}
            </button>

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
                <span>Maximum {maxExperienceLimit} entries allowed. Remove an existing entry to add more.</span>
              </div>
            )}

            {/* Add Experience Form */}
            {limitInfo.canAdd ? (
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: spacing.formPadding,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Position and Company */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '12px'
                  }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Job Title <span style={{ color: '#e53e3e' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={newExperience.position}
                        onChange={(e) => setNewExperience({...newExperience, position: e.target.value})}
                        placeholder="e.g., Senior Software Engineer"
                        style={getInputStyle('position', newExperience.position)}
                      />
                    </div>
                    
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        Company <span style={{ color: '#e53e3e' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={newExperience.company}
                        onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                        placeholder="e.g., Google, Microsoft"
                        style={getInputStyle('company', newExperience.company)}
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
                      value={newExperience.location}
                      onChange={(e) => setNewExperience({...newExperience, location: e.target.value})}
                      placeholder="e.g., San Francisco, CA (Remote)"
                      style={getInputStyle('location', newExperience.location)}
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
                        value={newExperience.startDate}
                        onChange={(e) => setNewExperience({...newExperience, startDate: e.target.value})}
                        style={getInputStyle('startDate', newExperience.startDate)}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        End Date
                      </label>
                      <input
                        type={newExperience.current ? "text" : "month"}
                        value={newExperience.current ? 'Present' : newExperience.endDate}
                        onChange={(e) => setNewExperience({...newExperience, endDate: e.target.value})}
                        disabled={newExperience.current}
                        style={{
                          ...getInputStyle('endDate', newExperience.endDate),
                          background: newExperience.current ? '#f7fafc' : 'white',
                          cursor: newExperience.current ? 'not-allowed' : 'auto'
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
                        checked={newExperience.current}
                        onChange={(e) => handleCurrentNewExperienceToggle(e.target.checked)}
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
                        {newAchievementCount}/{MAX_ACHIEVEMENTS} added • Max {MAX_CHARS} characters each
                      </small>
                    </div>
                    
                    {newExperience.bulletPoints.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '12px'
                      }}>
                        <span style={{ fontSize: '14px', color: '#4299e1', marginTop: '10px' }}>•</span>
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
                        {newExperience.bulletPoints.length > 1 && (
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
                            ✕
                          </button>
                        )}
                      </div>
                    ))}

                    {canAddAchievement(newExperience.bulletPoints) && (
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
                    onClick={handleAddExperience}
                    disabled={!newExperience.position.trim() || !newExperience.company.trim() || !newExperience.startDate}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: (!newExperience.position.trim() || !newExperience.company.trim() || !newExperience.startDate) ? 'not-allowed' : 'pointer',
                      opacity: (!newExperience.position.trim() || !newExperience.company.trim() || !newExperience.startDate) ? 0.5 : 1,
                      transition: 'all 0.2s'
                    }}
                  >
                    + Add Experience Entry
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
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚠️</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#c05621', marginBottom: '8px' }}>
                  Limit Reached
                </h4>
                <p style={{ fontSize: '14px', color: '#718096' }}>
                  Maximum {maxExperienceLimit} entries. Remove existing entries to add new ones.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Your Experience List */}
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
                  <span>📋</span>
                  Your Experience
                </h3>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{experienceData.length}</span>
                  <span style={{ color: '#718096' }}>/{maxExperienceLimit}</span>
                </div>
              </div>
              
              {experienceData.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>💼</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No experience entries yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your first experience using the form on the left
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {experienceData.map((exp, index) => {
                    const nonEmptyAchievements = exp.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
                    
                    return (
                      <div
                        key={exp.id || index}
                        style={{
                          background: 'white',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          padding: '16px'
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
                            }}>{exp.position || 'Job Title'}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                              <span style={{
                                fontSize: '12px',
                                color: '#4299e1',
                                background: '#ebf8ff',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                {exp.company || 'Company'}
                              </span>
                              {exp.current && (
                                <span style={{
                                  fontSize: '11px',
                                  color: '#48bb78',
                                  background: '#f0fff4',
                                  padding: '4px 8px',
                                  borderRadius: '20px'
                                }}>
                                  🟢 Current
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveExperience(index)}
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
                              📅 {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                            </span>
                            {exp.location && (
                              <span style={{
                                fontSize: '12px',
                                color: '#4a5568',
                                background: '#f7fafc',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                📍 {exp.location}
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
                              <button
                                onClick={() => handleGenerateForExisting(index)}
                                style={{
                                  padding: '4px 10px',
                                  background: 'white',
                                  color: '#4299e1',
                                  border: '1px solid #4299e1',
                                  borderRadius: '6px',
                                  fontSize: '11px',
                                  fontWeight: 500,
                                  cursor: 'pointer'
                                }}
                              >
                                ⚡ Generate
                              </button>
                            </div>
                          </div>
                          
                          {(!exp.bulletPoints || exp.bulletPoints.length === 0 || 
                            (exp.bulletPoints.length === 1 && !exp.bulletPoints[0])) ? (
                            <div style={{
                              textAlign: 'center',
                              padding: '24px',
                              background: '#f7fafc',
                              borderRadius: '8px',
                              border: '2px dashed #e2e8f0'
                            }}>
                              <p style={{ fontSize: '13px', color: '#718096', marginBottom: '12px' }}>No achievements added</p>
                              <button
                                onClick={() => handleGenerateForExisting(index)}
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
                                ⚡ Generate Achievements
                              </button>
                            </div>
                          ) : (
                            <>
                              {exp.bulletPoints.map((bullet, bulletIndex) => (
                                <div key={bulletIndex} style={{
                                  display: 'flex',
                                  gap: '8px',
                                  marginBottom: '10px'
                                }}>
                                  <span style={{ fontSize: '13px', color: '#4299e1', marginTop: '6px' }}>•</span>
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
                                  {exp.bulletPoints.length > 1 && (
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
                                      ✕
                                    </button>
                                  )}
                                </div>
                              ))}
                              {nonEmptyAchievements < MAX_ACHIEVEMENTS && (
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

                        {/* Editable Fields - NOW INCLUDES LOCATION */}
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
                              value={exp.position || ''}
                              onChange={(e) => handleUpdateExperience(index, 'position', e.target.value)}
                              placeholder="Job Title"
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
                              value={exp.company || ''}
                              onChange={(e) => handleUpdateExperience(index, 'company', e.target.value)}
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
                          
                          {/* Location Field - ADDED HERE */}
                          <div style={{
                            marginBottom: '8px'
                          }}>
                            <input
                              type="text"
                              value={exp.location || ''}
                              onChange={(e) => handleUpdateExperience(index, 'location', e.target.value)}
                              placeholder="Location (e.g., San Francisco, CA)"
                              style={{
                                width: '100%',
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
                            gap: '8px'
                          }}>
                            <input
                              type="month"
                              value={formatDate(exp.startDate)}
                              onChange={(e) => handleUpdateExperience(index, 'startDate', e.target.value)}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                            <input
                              type={exp.current ? "text" : "month"}
                              value={exp.current ? 'Present' : formatDate(exp.endDate)}
                              onChange={(e) => handleUpdateExperience(index, 'endDate', e.target.value)}
                              disabled={exp.current}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: exp.current ? '#f5f5f5' : '#fafafa',
                                cursor: exp.current ? 'not-allowed' : 'auto'
                              }}
                            />
                          </div>
                          <div style={{ marginTop: '8px' }}>
                            <label style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer'
                            }}>
                              <input
                                type="checkbox"
                                checked={exp.current || false}
                                onChange={(e) => handleCurrentExperienceToggle(index, e.target.checked)}
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
            {experienceData.length >= 1 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {experienceData.length} {experienceData.length === 1 ? 'entry' : 'entries'} added. Ready to continue!
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 work experience entry to continue
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

export default Experience;