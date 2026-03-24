// client/src/components/forms/Skills.js
// STABLE VERSION - Fixed infinite save loop and excessive re-renders
// ============================================

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

// Helper function to safely get skill name
const getSkillName = (item) => {
  if (!item) return '';
  
  if (typeof item === 'string') {
    return item.trim();
  }
  
  if (typeof item === 'number') {
    return item.toString();
  }
  
  if (typeof item === 'object') {
    if (item.name && typeof item.name === 'string') {
      return item.name.trim();
    }
    
    if (item.skill && typeof item.skill === 'string') {
      return item.skill.trim();
    }
    
    if (item.title && typeof item.title === 'string') {
      return item.title.trim();
    }
    
    // Skip education and experience objects
    if (item.degree || item.institution || item.startYear || item.endYear) {
      return '';
    }
    
    if (item.position || item.company || item.bulletPoints) {
      return '';
    }
    
    // Skip project objects
    if (item.title && (item.description || item.technologies)) {
      return '';
    }
    
    // Try to get any string property
    for (const key in item) {
      if (typeof item[key] === 'string' && key !== 'id' && key !== '_id' && item[key].trim()) {
        return item[key].trim();
      }
    }
    
    return '';
  }
  
  return String(item).trim();
};

// Function to normalize skills data
const normalizeSkills = (data) => {
  if (!Array.isArray(data)) {
    return [];
  }
  
  const normalized = data
    .map(item => getSkillName(item))
    .filter(skill => skill && skill !== '' && skill !== '[Object]' && skill !== '{}');
  
  return [...new Set(normalized)];
};

const skillCategories = {
  technical: { 
    label: 'Technical', 
    icon: '💻',
    color: '#8e44ad',
    description: 'Programming languages, frameworks, tools, and technical competencies',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML/CSS', 
             'SQL', 'MongoDB', 'AWS', 'Git', 'Docker', 'TypeScript', 'Next.js', 
             'GraphQL', 'Redux', 'Express', 'PostgreSQL', 'Firebase', 'Tailwind CSS',
             'Vue.js', 'Angular', 'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin',
             'Django', 'Flask', 'Spring Boot', 'Kubernetes', 'Terraform', 'Jenkins']
  },
  soft: { 
    label: 'Soft Skills', 
    icon: '🤝',
    color: '#27ae60',
    description: 'Interpersonal, communication, and personal attributes',
    skills: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork', 
             'Time Management', 'Adaptability', 'Critical Thinking', 'Creativity',
             'Conflict Resolution', 'Emotional Intelligence', 'Collaboration', 'Mentoring',
             'Active Listening', 'Decision Making', 'Stress Management', 'Work Ethic',
             'Flexibility', 'Organization', 'Presentation Skills', 'Negotiation']
  },
  business: { 
    label: 'Business', 
    icon: '📊',
    color: '#f39c12',
    description: 'Business strategy, management, analytics, and professional services',
    skills: ['Project Management', 'Strategic Planning', 'Data Analysis', 
             'Marketing', 'Sales', 'Financial Analysis', 'Customer Service',
             'Agile', 'Scrum', 'Product Management', 'Business Development', 'Negotiation',
             'Digital Marketing', 'SEO/SEM', 'Google Analytics', 'CRM', 'Salesforce',
             'Budget Management', 'Risk Management', 'Operations Management']
  },
  creative: { 
    label: 'Creative', 
    icon: '🎨',
    color: '#e74c3c',
    description: 'Design, content creation, multimedia, and artistic skills',
    skills: ['UI/UX Design', 'Graphic Design', 'Content Writing', 'Video Editing', 
             'Photography', 'Branding', 'Copywriting', 'Illustration', 'Animation',
             'Social Media', 'SEO', 'Adobe Creative Suite', 'Figma', 'Sketch',
             'Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'After Effects',
             'Blender', '3D Modeling', 'Typography', 'Storyboarding']
  }
};

const Skills = ({ onDataChange, data, templateId, navigationButtons }) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  const { state, setSkills: contextSetSkills } = useResume();
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('technical');
  const [newSkill, setNewSkill] = useState('');
  
  // Get template-specific limit
  const maxSkillsLimit = templateId ? getSectionLimit(templateId, 'skills') || 8 : 8;
  
  // Initialize skills data
  const [skills, setSkills] = useState(() => {
    let rawData = [];
    
    // Priority 1: props.data
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.skills)) {
      rawData = data.skills;
    }
    
    // Priority 2: state.skills
    if (rawData.length === 0 && state && Array.isArray(state.skills)) {
      rawData = state.skills;
    }
    
    // Priority 3: localStorage
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.skills)) {
            rawData = parsed.skills;
          }
        }
      } catch (error) {
        console.error('Failed to load skills from localStorage:', error);
      }
    }
    
    const normalized = normalizeSkills(rawData);
    previousDataRef.current = normalized;
    return normalized;
  });

  const limitInfo = useMemo(() => ({
    limit: maxSkillsLimit,
    currentCount: skills.length,
    canAdd: skills.length < maxSkillsLimit,
    remaining: Math.max(0, maxSkillsLimit - skills.length)
  }), [maxSkillsLimit, skills.length]);

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
  }, [skills.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save skills data with change detection
  const saveSkillsData = useCallback((updatedSkills) => {
    // Check if data actually changed
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedSkills)) {
      return; // No change, don't save
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedSkills;
        
        // Update context
        if (contextSetSkills && typeof contextSetSkills === 'function') {
          contextSetSkills(updatedSkills);
        }
        
        // Update localStorage
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          skills: updatedSkills,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        // Dispatch storage event for cross-tab synchronization
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
        
        // Notify parent
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedSkills);
        }
      } catch (error) {
        console.error('Failed to save skills:', error);
        setErrorMessage('Failed to save. Please try again.');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [contextSetSkills, onDataChange]);

  // Only save when skills actually changes (not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveSkillsData(skills);
  }, [skills, saveSkillsData]);

  const handleAddSkill = useCallback(() => {
    if (!newSkill.trim()) {
      setErrorMessage('Please enter a skill');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!limitInfo.canAdd && editingIndex === null) {
      setErrorMessage(`Maximum ${maxSkillsLimit} skills allowed for this template`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    const skillItem = newSkill.trim();

    if (editingIndex !== null) {
      // Edit existing skill
      const updatedSkills = [...skills];
      updatedSkills[editingIndex] = skillItem;
      const uniqueSkills = [...new Set(updatedSkills)];
      setSkills(uniqueSkills);
      setEditingIndex(null);
    } else {
      // Add new skill
      if (skills.includes(skillItem)) {
        setErrorMessage('This skill is already added');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        setNewSkill('');
        return;
      }
      
      setSkills([...skills, skillItem]);
    }

    setNewSkill('');
  }, [newSkill, skills, limitInfo.canAdd, maxSkillsLimit, editingIndex]);

  const handleRemoveSkill = useCallback((index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    
    // If we're editing the removed skill, cancel edit mode
    if (editingIndex === index) {
      setEditingIndex(null);
      setNewSkill('');
    }
  }, [skills, editingIndex]);

  const handleEditSkill = useCallback((index) => {
    if (!limitInfo.canAdd && editingIndex === null) {
      setErrorMessage(`Cannot edit while at maximum limit (${maxSkillsLimit})`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    const skill = skills[index];
    setNewSkill(skill);
    setEditingIndex(index);
  }, [skills, limitInfo.canAdd, maxSkillsLimit, editingIndex]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  }, [handleAddSkill]);

  const handleQuickAdd = useCallback((skill) => {
    if (!limitInfo.canAdd) {
      setErrorMessage(`Maximum ${maxSkillsLimit} skills allowed for this template`);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    if (skills.includes(skill)) {
      setErrorMessage('This skill is already added');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    setSkills([...skills, skill]);
    setErrorMessage('');
    setShowError(false);
  }, [skills, limitInfo.canAdd, maxSkillsLimit]);

  const handleCancelEdit = useCallback(() => {
    setEditingIndex(null);
    setNewSkill('');
  }, []);

  const getPopularSkills = useCallback(() => {
    return skillCategories[selectedCategory]?.skills || [];
  }, [selectedCategory]);

  // Calculate completion percentage
  const completionPercentage = useMemo(() => {
    if (skills.length === 0) return 0;
    const percentage = (skills.length / maxSkillsLimit) * 100;
    return Math.min(Math.round(percentage), 100);
  }, [skills.length, maxSkillsLimit]);

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
        formPadding: '16px',
        skillGridCols: 'repeat(2, 1fr)'
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
        formPadding: '20px',
        skillGridCols: 'repeat(auto-fill, minmax(150px, 1fr))'
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
        formPadding: '24px',
        skillGridCols: 'repeat(auto-fill, minmax(200px, 1fr))'
      };
    }
  }, [isMobile, isTablet]);

  const spacing = getSpacing();

  // Structured data for SEO
  const skillsSchema = skills.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Skills for Resume",
    "description": "List of professional skills added to resume for ATS optimization",
    "numberOfItems": skills.length,
    "itemListElement": skills.map((skill, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "DefinedTerm",
        "name": skill,
        "inDefinedTermSet": "https://schema.org/DefinedTermSet"
      }
    }))
  } : null;

  return (
    <>
      <Head>
        <title>Professional Resume Skills Builder | Add ATS-Friendly Keywords</title>
        <meta name="description" content="Add and optimize professional skills for your resume with our ATS-friendly skills builder. Include technical skills, soft skills, and industry-specific terms." />
        <meta name="keywords" content="resume skills, professional skills, ATS keywords, technical skills list, soft skills list, resume optimization" />
        <meta property="og:title" content="Professional Resume Skills Builder" />
        <meta property="og:description" content="Add professional skills that pass ATS filters with our resume skills builder." />
        <meta name="twitter:card" content="summary_large_image" />
        {skillsSchema && (
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
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
            Professional <span style={{ color: '#4299e1' }}>Skills</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Add your key competencies to showcase your qualifications
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
            { label: 'Limit', value: maxSkillsLimit }
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
          
          {/* Left Column - Skills Management */}
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
            
            {/* Skill Input */}
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
                  Add New Skill
                </label>
                <InfoIcon tooltip="List relevant skills that match your target job description. Include technical, soft, and industry-specific keywords." />
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '12px'
              }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={!limitInfo.canAdd && editingIndex === null ? `Max ${maxSkillsLimit} reached` : "e.g., React, Python, Project Management"}
                    disabled={!limitInfo.canAdd && editingIndex === null}
                    style={{
                      width: '100%',
                      padding: isMobile ? '10px 12px' : '12px 16px',
                      fontSize: isMobile ? '14px' : '15px',
                      border: `2px solid ${newSkill.trim() && limitInfo.canAdd ? '#48bb78' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      background: (!limitInfo.canAdd && editingIndex === null) ? '#f7fafc' : 'white',
                      cursor: (!limitInfo.canAdd && editingIndex === null) ? 'not-allowed' : 'auto',
                      outline: 'none',
                      transition: 'all 0.2s'
                    }}
                  />
                  {newSkill.trim() && limitInfo.canAdd && (
                    <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                      <CheckIcon />
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={handleAddSkill}
                  disabled={!newSkill.trim() || (!limitInfo.canAdd && editingIndex === null)}
                  style={{
                    padding: isMobile ? '10px 16px' : '12px 24px',
                    background: (!newSkill.trim() || (!limitInfo.canAdd && editingIndex === null)) ? '#cbd5e0' : 'linear-gradient(135deg, #4299e1, #3182ce)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: isMobile ? '14px' : '15px',
                    fontWeight: 600,
                    cursor: (!newSkill.trim() || (!limitInfo.canAdd && editingIndex === null)) ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {editingIndex !== null ? 'Update Skill' : 'Add Skill'}
                </button>
              </div>
              
              {limitInfo.canAdd && (
                <div style={{ fontSize: '12px', color: '#718096', marginTop: '10px' }}>
                  💡 Press Enter to quickly add skills. Be specific - use "React" instead of "Frontend Development".
                </div>
              )}
            </div>

            {/* Edit Mode Notice */}
            {editingIndex !== null && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                background: '#fffaf0',
                border: '1px solid #fed7aa',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '13px', color: '#c05621' }}>
                  <strong>Editing:</strong> {skills[editingIndex]}
                </span>
                <button 
                  onClick={handleCancelEdit}
                  style={{
                    padding: '4px 12px',
                    background: 'white',
                    color: '#718096',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    marginLeft: 'auto'
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Skills List */}
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
                  <span>📌</span>
                  Your Skills
                </h2>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{skills.length}</span>
                  <span style={{ color: '#718096' }}>/{maxSkillsLimit}</span>
                </div>
              </div>
              
              {skills.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>📋</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No skills added yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your skills above or select from popular keywords below
                  </p>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: spacing.skillGridCols,
                  gap: '10px'
                }}>
                  {skills.map((skill, index) => (
                    <div
                      key={`${skill}-${index}`}
                      style={{
                        background: 'white',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
                        <span style={{ fontSize: '12px', color: '#48bb78' }}>⚡</span>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#2d3748', wordBreak: 'break-word' }}>
                          {skill}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                          onClick={() => handleEditSkill(index)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: '1px solid #bfdbfe',
                            background: '#eff6ff',
                            color: '#2563eb',
                            fontSize: '12px'
                          }}
                          aria-label={`Edit ${skill}`}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleRemoveSkill(index)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: '1px solid #fed7d7',
                            background: '#fff5f5',
                            color: '#e53e3e',
                            fontSize: '14px'
                          }}
                          aria-label={`Remove ${skill}`}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Popular Skills */}
          <div style={{ flex: 1 }}>
            {/* Category Tabs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '8px',
              marginBottom: '16px'
            }}>
              {Object.entries(skillCategories).map(([key, category]) => (
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
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Popular Skills List */}
            <div style={{
              background: '#f7fafc',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e2e8f0'
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
                Popular {skillCategories[selectedCategory]?.label} Skills
              </h2>
              <p style={{
                fontSize: '12px',
                color: '#718096',
                margin: '0 0 16px 0'
              }}>
                Click to add quickly • These keywords are frequently searched by recruiters
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '8px'
              }}>
                {getPopularSkills().slice(0, isMobile ? 10 : 12).map((skill, index) => {
                  const isAdded = skills.includes(skill);
                  const canAdd = limitInfo.canAdd && !isAdded;
                  
                  return (
                    <button
                      key={`${skill}-${index}`}
                      onClick={() => canAdd && handleQuickAdd(skill)}
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
                      title={!canAdd && !isAdded ? `Max ${maxSkillsLimit} skills reached` : ""}
                    >
                      {skill}
                      {isAdded && <span style={{ marginLeft: '4px' }}>✓</span>}
                    </button>
                  );
                })}
              </div>
              
              {!limitInfo.canAdd && (
                <div style={{
                  marginTop: '16px',
                  padding: '10px',
                  background: '#fffaf0',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#c05621',
                  textAlign: 'center'
                }}>
                  ⚠️ Maximum {maxSkillsLimit} skills reached. Remove existing skills to add more.
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
            {skills.length === 0 ? (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 skill to continue
              </div>
            ) : (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {skills.length} {skills.length === 1 ? 'skill' : 'skills'} added. Ready to continue!
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

export default Skills;