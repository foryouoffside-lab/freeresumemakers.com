// client/src/components/forms/Projects.js
// STABLE VERSION - Fixed infinite save loop and excessive re-renders
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

// Normalize project data - preserve bullet points and URLs correctly
const normalizeProject = (project) => {
  if (!project) {
    return {
      id: generateId(),
      title: '',
      role: '',
      startDate: '',
      endDate: '',
      current: false,
      projectUrl: '',
      bulletPoints: ['']
    };
  }
  
  // Handle bullet points properly
  let bulletPoints = [];
  
  if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
    bulletPoints = project.bulletPoints.filter(bp => bp !== undefined);
  } else if (project.achievements && Array.isArray(project.achievements)) {
    bulletPoints = project.achievements.filter(ach => ach !== undefined);
  } else if (project.highlights && Array.isArray(project.highlights)) {
    bulletPoints = project.highlights.filter(h => h !== undefined);
  }
  
  // Ensure at least one bullet point
  if (bulletPoints.length === 0) {
    bulletPoints = [''];
  }
  
  // Handle URL consistently
  const urlValue = project.projectUrl || project.link || project.url || project.github || '';
  
  return {
    id: project.id || generateId(),
    title: project.title || project.name || '',
    role: project.role || '',
    startDate: project.startDate || '',
    endDate: project.endDate || '',
    current: project.current || false,
    projectUrl: urlValue,
    bulletPoints: bulletPoints
  };
};

// Project role templates with bullet points (140 chars max)
const roleProjects = {
  'software-engineer': {
    title: 'Software Engineer',
    projects: [
      {
        title: 'E-Commerce Platform',
        role: 'Lead Developer',
        bulletPoints: [
          "Built React/Node microservices e-commerce platform serving 100K+ products with 99.9% uptime",
          "Implemented Redis caching reducing response time 65% and handling 10K+ concurrent users",
          "Integrated Stripe payments processing $500K+ transactions with PCI compliance"
        ]
      },
      {
        title: 'Real-Time Analytics Dashboard',
        role: 'Full Stack Developer',
        bulletPoints: [
          "Developed real-time dashboard with WebSockets processing 1M+ daily events",
          "Created interactive D3.js visualizations cutting report generation from 2hrs to 5min",
          "Built REST APIs with Node/Express handling 500K+ daily requests at 200ms latency"
        ]
      },
      {
        title: 'RESTful API Gateway',
        role: 'Backend Developer',
        bulletPoints: [
          "Designed API gateway handling 500K+ daily requests with rate limiting and auth",
          "Implemented JWT authentication and OAuth2 supporting 50K+ registered users",
          "Added request transformation and caching reducing backend load by 45%"
        ]
      }
    ]
  },
  'frontend-developer': {
    title: 'Frontend Developer',
    projects: [
      {
        title: 'Responsive Portfolio Website',
        role: 'UI Developer',
        bulletPoints: [
          "Developed responsive portfolio achieving 98+ Lighthouse score with lazy loading",
          "Implemented code splitting reducing initial bundle size from 2MB to 350KB",
          "Created custom animations with Framer Motion improving engagement by 40%"
        ]
      },
      {
        title: 'Component Library System',
        role: 'Frontend Lead',
        bulletPoints: [
          "Built 40+ reusable React components with Storybook used across 5+ projects",
          "Reduced development time by 45% and ensured consistent UI across applications",
          "Published to NPM with 2K+ weekly downloads and 95% test coverage"
        ]
      },
      {
        title: 'Interactive Data Dashboard',
        role: 'Frontend Developer',
        bulletPoints: [
          "Created dashboard visualizing 10K+ data points with smooth 60fps animations",
          "Implemented responsive design for mobile/tablet/desktop with 100% adaptability",
          "Reduced re-renders by 60% using React.memo and useMemo optimization"
        ]
      }
    ]
  },
  'fullstack-developer': {
    title: 'Full Stack Developer',
    projects: [
      {
        title: 'Task Management Application',
        role: 'Lead Developer',
        bulletPoints: [
          "Built full-stack task app with React/Node/PostgreSQL and real-time updates",
          "Implemented drag-drop interface with 40% faster task organization for 5K+ users",
          "Added team collaboration features with WebSockets for instant notifications"
        ]
      },
      {
        title: 'Social Media Analytics Tool',
        role: 'Full Stack Developer',
        bulletPoints: [
          "Developed analytics platform tracking 20+ metrics across 5 social platforms",
          "Created automated reporting saving 15hrs/week for marketing team",
          "Built competitor analysis feature monitoring 50+ competitors in real-time"
        ]
      }
    ]
  },
  'mobile-developer': {
    title: 'Mobile Developer',
    projects: [
      {
        title: 'Fitness Tracking App',
        role: 'Mobile Developer',
        bulletPoints: [
          "Built React Native fitness app with 50K+ downloads and 4.8⭐ rating",
          "Integrated Apple HealthKit and Google Fit tracking 20+ health metrics",
          "Implemented offline sync with 100% functionality without internet connection"
        ]
      },
      {
        title: 'E-Commerce Mobile App',
        role: 'Lead Mobile Developer',
        bulletPoints: [
          "Developed mobile e-commerce app handling $1M+ monthly transactions",
          "Added biometric authentication with 99.9% security compliance rating",
          "Optimized app size from 80MB to 25MB improving install conversion by 35%"
        ]
      }
    ]
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    projects: [
      {
        title: 'Kubernetes Cluster Management',
        role: 'DevOps Architect',
        bulletPoints: [
          "Deployed multi-node K8s cluster for 15+ microservices with auto-scaling",
          "Implemented CI/CD with ArgoCD reducing deployment time from 2hrs to 15min",
          "Set up monitoring with Prometheus/Grafana achieving 99.99% uptime"
        ]
      },
      {
        title: 'Infrastructure as Code',
        role: 'DevOps Engineer',
        bulletPoints: [
          "Migrated 100% infrastructure to Terraform cutting provisioning from 3 days to 30min",
          "Reduced cloud costs 45% ($200K/year) via resource optimization and spot instances",
          "Implemented security scanning saving $500K in potential breach costs"
        ]
      }
    ]
  },
  'data-scientist': {
    title: 'Data Scientist',
    projects: [
      {
        title: 'Customer Churn Prediction',
        role: 'ML Engineer',
        bulletPoints: [
          "Developed ML model with 89% accuracy predicting churn for 500K+ customers",
          "Implemented feature engineering pipeline reducing training time by 60%",
          "Created dashboard visualizing churn drivers leading to 25% reduction in attrition"
        ]
      },
      {
        title: 'Recommendation Engine',
        role: 'Data Scientist',
        bulletPoints: [
          "Built collaborative filtering system processing 100K+ user interactions",
          "Improved click-through rate by 35% with personalized content recommendations",
          "Scaled to handle 1M+ requests daily with 150ms average latency"
        ]
      }
    ]
  }
};

const Projects = ({ onDataChange, data, templateId, navigationButtons }) => {
  const contentRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);
  const previousDataRef = useRef(null);
  const { state, setProjects: contextSetProjects } = useResume();
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [contentHeight, setContentHeight] = useState(0);
  const [showError, setShowError] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [touchedFields, setTouchedFields] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  
  // Constants
  const MAX_BULLET_POINTS = 3;
  const MAX_CHARS = 140;
  
  // Initialize projects data
  const [projectsData, setProjectsData] = useState(() => {
    let rawData = [];
    
    // Priority 1: props.data
    if (Array.isArray(data) && data.length > 0) {
      rawData = data;
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.projects)) rawData = data.projects;
    }
    
    // Priority 2: state.projects
    if (rawData.length === 0 && state && Array.isArray(state.projects)) {
      rawData = state.projects;
    }
    
    // Priority 3: localStorage
    if (rawData.length === 0) {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed.projects)) {
            rawData = parsed.projects;
          }
        }
      } catch (error) {
        console.error('Failed to load projects from localStorage:', error);
      }
    }
    
    const normalized = rawData.map(normalizeProject);
    previousDataRef.current = normalized;
    return normalized;
  });

  const [newProject, setNewProject] = useState({
    title: '',
    role: '',
    startDate: '',
    endDate: '',
    current: false,
    projectUrl: '',
    bulletPoints: ['']
  });

  const maxProjectsLimit = templateId ? getSectionLimit(templateId, 'projects') || 4 : 4;
  const currentCount = projectsData.length;
  
  const limitInfo = useMemo(() => ({
    limit: maxProjectsLimit,
    currentCount,
    canAdd: currentCount < maxProjectsLimit,
    remaining: Math.max(0, maxProjectsLimit - currentCount)
  }), [maxProjectsLimit, currentCount]);

  const newAchievementCount = useMemo(() => {
    return newProject.bulletPoints.filter(b => b && b.trim() !== '').length;
  }, [newProject.bulletPoints]);

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
  }, [projectsData.length]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // Save projects data with change detection
  const saveProjectsData = useCallback((updatedProjects) => {
    // Check if data actually changed
    if (JSON.stringify(previousDataRef.current) === JSON.stringify(updatedProjects)) {
      return; // No change, don't save
    }
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    setIsSaving(true);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        previousDataRef.current = updatedProjects;
        
        // Update context
        if (contextSetProjects && typeof contextSetProjects === 'function') {
          contextSetProjects(updatedProjects);
        }
        
        // Update localStorage
        const saved = localStorage.getItem('resumeData');
        const currentState = saved ? JSON.parse(saved) : {};
        const newState = { 
          ...currentState, 
          projects: updatedProjects,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('resumeData', JSON.stringify(newState));
        
        // Dispatch storage event for cross-tab synchronization
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
        
        // Notify parent
        if (onDataChange && typeof onDataChange === 'function') {
          onDataChange(updatedProjects);
        }
      } catch (error) {
        console.error('Failed to save projects:', error);
      } finally {
        setIsSaving(false);
      }
    }, 800);
  }, [contextSetProjects, onDataChange]);

  // Only save when projectsData actually changes (not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveProjectsData(projectsData);
  }, [projectsData, saveProjectsData]);

  // Handle role selection
  const handleRoleSelect = useCallback((roleKey) => {
    setSelectedRole(roleKey);
    
    const roleData = roleProjects[roleKey];
    if (roleData && roleData.projects.length > 0) {
      const randomIndex = Math.floor(Math.random() * roleData.projects.length);
      const templateProject = roleData.projects[randomIndex];
      
      setNewProject({
        title: templateProject.title || '',
        role: templateProject.role || roleData.title,
        startDate: '',
        endDate: '',
        current: false,
        projectUrl: '',
        bulletPoints: [...(templateProject.bulletPoints || [''])]
      });
    }
  }, []);

  // Bullet point handlers for new project
  const handleBulletPointChange = useCallback((bulletIndex, value) => {
    if (value.length <= MAX_CHARS) {
      setNewProject(prev => {
        const updatedBullets = [...prev.bulletPoints];
        updatedBullets[bulletIndex] = value;
        return { ...prev, bulletPoints: updatedBullets };
      });
    }
  }, []);

  const canAddBulletPoint = useCallback((bullets) => {
    const nonEmptyCount = bullets.filter(b => b && b.trim() !== '').length;
    return nonEmptyCount < MAX_BULLET_POINTS;
  }, []);

  const handleAddNewBulletPoint = useCallback(() => {
    if (canAddBulletPoint(newProject.bulletPoints)) {
      setNewProject(prev => ({
        ...prev,
        bulletPoints: [...prev.bulletPoints, '']
      }));
    }
  }, [newProject.bulletPoints, canAddBulletPoint]);

  const handleRemoveNewBulletPoint = useCallback((index) => {
    if (newProject.bulletPoints.length > 1) {
      setNewProject(prev => {
        const updatedBullets = [...prev.bulletPoints];
        updatedBullets.splice(index, 1);
        return { ...prev, bulletPoints: updatedBullets };
      });
    }
  }, [newProject.bulletPoints.length]);

  // Add project handler
  const handleAddProject = useCallback(() => {
    if (!limitInfo.canAdd) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    const hasValidBulletPoints = newProject.bulletPoints.some(b => b && b.trim() !== '');
    
    if (!newProject.title.trim() || !hasValidBulletPoints) {
      return;
    }

    const filteredBulletPoints = newProject.bulletPoints.filter(bp => bp.trim() !== '');
    const urlValue = newProject.projectUrl?.trim() || '';
    
    const projectToAdd = {
      id: generateId(),
      title: newProject.title.trim(),
      role: newProject.role.trim(),
      startDate: newProject.startDate,
      endDate: newProject.current ? 'Present' : newProject.endDate,
      current: newProject.current,
      projectUrl: urlValue,
      bulletPoints: filteredBulletPoints.length > 0 ? filteredBulletPoints : ['']
    };
    
    setProjectsData(prev => [...prev, projectToAdd]);
    
    // Reset form
    setNewProject({
      title: '',
      role: '',
      startDate: '',
      endDate: '',
      current: false,
      projectUrl: '',
      bulletPoints: ['']
    });
    setSelectedRole('');
    setTouchedFields({});
  }, [newProject, limitInfo.canAdd]);

  // Update handlers for existing projects
  const handleUpdateProject = useCallback((index, field, value) => {
    if (index >= projectsData.length) return;
    
    setProjectsData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, [projectsData.length]);

  const handleRemoveProject = useCallback((index) => {
    if (index >= projectsData.length) return;
    
    setProjectsData(prev => prev.filter((_, i) => i !== index));
  }, [projectsData.length]);

  const handleBulletPointChangeExisting = useCallback((projectIndex, bulletIndex, value) => {
    if (projectIndex >= projectsData.length) return;
    if (value.length > MAX_CHARS) return;
    
    setProjectsData(prev => {
      const updated = [...prev];
      if (!updated[projectIndex].bulletPoints) {
        updated[projectIndex].bulletPoints = [''];
      }
      updated[projectIndex].bulletPoints[bulletIndex] = value;
      return updated;
    });
  }, [projectsData.length]);

  const handleAddBulletPointExisting = useCallback((projectIndex) => {
    if (projectIndex >= projectsData.length) return;
    
    setProjectsData(prev => {
      const updated = [...prev];
      const currentBullets = updated[projectIndex].bulletPoints || [''];
      const nonEmptyCount = currentBullets.filter(b => b && b.trim() !== '').length;
      
      if (nonEmptyCount < MAX_BULLET_POINTS) {
        updated[projectIndex].bulletPoints = [...currentBullets, ''];
      }
      return updated;
    });
  }, [projectsData.length]);

  const handleRemoveBulletPointExisting = useCallback((projectIndex, bulletIndex) => {
    if (projectIndex >= projectsData.length) return;
    
    setProjectsData(prev => {
      const updated = [...prev];
      if (updated[projectIndex].bulletPoints && updated[projectIndex].bulletPoints.length > 1) {
        updated[projectIndex].bulletPoints = updated[projectIndex].bulletPoints.filter((_, i) => i !== bulletIndex);
      }
      return updated;
    });
  }, [projectsData.length]);

  const handleCurrentProjectToggle = useCallback((index, checked) => {
    if (index >= projectsData.length) return;
    
    setProjectsData(prev => {
      const updated = [...prev];
      updated[index] = { 
        ...updated[index], 
        current: checked,
        endDate: checked ? 'Present' : ''
      };
      return updated;
    });
  }, [projectsData.length]);

  const handleCurrentNewProjectToggle = useCallback((checked) => {
    setNewProject(prev => ({
      ...prev,
      current: checked,
      endDate: checked ? 'Present' : ''
    }));
  }, []);

  const handleBlur = useCallback((field) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  }, []);

  // Calculate completion percentage
  const completionPercentage = useMemo(() => {
    if (projectsData.length === 0) return 0;
    let totalAchievements = 0;
    let totalPossible = 0;
    
    projectsData.forEach(project => {
      const achievements = project.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
      totalAchievements += Math.min(achievements, MAX_BULLET_POINTS);
      totalPossible += MAX_BULLET_POINTS;
    });
    
    return totalPossible > 0 ? Math.round((totalAchievements / totalPossible) * 100) : 0;
  }, [projectsData]);

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
    "name": "Project Portfolio",
    "description": "Software development projects showcase with quantifiable achievements",
    "numberOfItems": projectsData.length,
    "itemListElement": projectsData.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title || "Project",
        "description": project.bulletPoints?.filter(b => b).join('. ') || "",
        "url": project.projectUrl || "",
        "dateCreated": project.startDate || "",
        "dateModified": project.current ? "Present" : (project.endDate || ""),
        "creator": {
          "@type": "Person",
          "name": project.role || "Developer"
        }
      }
    }))
  }), [projectsData]);

  return (
    <>
      <Head>
        <title>Resume Project Portfolio Builder | Showcase Development Projects</title>
        <meta name="description" content="Add software development projects to your resume with quantifiable achievements. 3 bullet points per project, 140 chars each. Projects significantly increase interview chances." />
        <meta name="keywords" content="resume projects, project portfolio, software development projects, GitHub projects, developer portfolio" />
        <meta property="og:title" content="Resume Project Portfolio Builder" />
        <meta property="og:description" content="Showcase your development projects with quantifiable achievements." />
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
            Project <span style={{ color: '#4299e1' }}>Portfolio</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4a5568',
            marginBottom: '16px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Showcase your projects with quantifiable achievements (max 3 bullet points, 140 chars each)
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
            { label: 'Projects', value: currentCount },
            { label: 'Remaining', value: limitInfo.remaining },
            { label: 'Maximum', value: maxProjectsLimit },
            { label: 'Achievements', value: `${projectsData.reduce((sum, p) => sum + (p.bulletPoints?.filter(b => b && b.trim()).length || 0), 0)}/${maxProjectsLimit * MAX_BULLET_POINTS}` }
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
          
          {/* Left Column - Add Project Form */}
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
                }}>➕</span>
                Add Project
              </h2>
              <InfoIcon tooltip="Include live demos and quantifiable achievements. 3 bullet points max, 140 chars each. Only bullet points/achievements are used." />
            </div>

            {/* Project Templates */}
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
                💼 Project Templates
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isSmallMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '8px'
              }}>
                {Object.entries(roleProjects).map(([key, role]) => (
                  <button
                    key={key}
                    onClick={() => handleRoleSelect(key)}
                    onMouseEnter={() => setHoveredBtn(key)}
                    onMouseLeave={() => setHoveredBtn(null)}
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
                    {isMobile ? role.title.split(' ')[0] : role.title}
                  </button>
                ))}
              </div>
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
                <span>Maximum {maxProjectsLimit} projects allowed. Remove an existing project to add more.</span>
              </div>
            )}

            {/* Add Project Form */}
            {limitInfo.canAdd ? (
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: spacing.formPadding,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Project Title */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Project Title <span style={{ color: '#e53e3e' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      placeholder="e.g., E-Commerce Platform"
                      onFocus={() => setFocusedInput('title')}
                      onBlur={() => {
                        setFocusedInput(null);
                        handleBlur('title');
                      }}
                      style={getInputStyle('title', newProject.title)}
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Your Role
                    </label>
                    <input
                      type="text"
                      value={newProject.role}
                      onChange={(e) => setNewProject({...newProject, role: e.target.value})}
                      placeholder="e.g., Lead Developer"
                      onFocus={() => setFocusedInput('role')}
                      onBlur={() => {
                        setFocusedInput(null);
                        handleBlur('role');
                      }}
                      style={getInputStyle('role', newProject.role)}
                    />
                  </div>

                  {/* Project URL */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                      Live URL / GitHub
                    </label>
                    <input
                      type="url"
                      value={newProject.projectUrl}
                      onChange={(e) => setNewProject({...newProject, projectUrl: e.target.value})}
                      placeholder="https://yourproject.com"
                      onFocus={() => setFocusedInput('url')}
                      onBlur={() => {
                        setFocusedInput(null);
                        handleBlur('projectUrl');
                      }}
                      style={getInputStyle('projectUrl', newProject.projectUrl)}
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
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={newProject.startDate}
                        onChange={(e) => setNewProject({...newProject, startDate: e.target.value})}
                        onFocus={() => setFocusedInput('startDate')}
                        onBlur={() => {
                          setFocusedInput(null);
                          handleBlur('startDate');
                        }}
                        style={getInputStyle('startDate', newProject.startDate)}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#2d3748', marginBottom: '4px', display: 'block' }}>
                        End Date
                      </label>
                      <input
                        type={newProject.current ? "text" : "month"}
                        value={newProject.current ? 'Present' : newProject.endDate}
                        onChange={(e) => setNewProject({...newProject, endDate: e.target.value})}
                        disabled={newProject.current}
                        style={{
                          ...getInputStyle('endDate', newProject.endDate),
                          background: newProject.current ? '#f7fafc' : 'white',
                          cursor: newProject.current ? 'not-allowed' : 'auto'
                        }}
                      />
                    </div>
                  </div>

                  {/* Currently working on it */}
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
                        checked={newProject.current}
                        onChange={(e) => handleCurrentNewProjectToggle(e.target.checked)}
                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#2d3748' }}>
                        Currently working on this project
                      </span>
                    </label>
                  </div>

                  {/* Achievements Section */}
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748', margin: 0 }}>
                          Key Achievements <span style={{ color: '#e53e3e' }}>*</span>
                        </h4>
                        <InfoIcon tooltip="Describe specific achievements with metrics. Max 140 characters per bullet point." />
                      </div>
                      <small style={{ fontSize: '12px', color: '#718096' }}>
                        {newAchievementCount}/{MAX_BULLET_POINTS} added • Max {MAX_CHARS} characters each
                      </small>
                    </div>
                    
                    {newProject.bulletPoints.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '12px'
                      }}>
                        <span style={{ fontSize: '14px', color: '#4299e1', marginTop: '10px' }}>•</span>
                        <div style={{ flex: 1 }}>
                          <textarea
                            value={bullet}
                            onChange={(e) => handleBulletPointChange(bulletIndex, e.target.value)}
                            placeholder="Describe your achievement with metrics (e.g., 'Built feature serving 100K users')"
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
                        {newProject.bulletPoints.length > 1 && (
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

                    {canAddBulletPoint(newProject.bulletPoints) && (
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
                    onClick={handleAddProject}
                    disabled={!newProject.title.trim() || !newProject.bulletPoints.some(b => b && b.trim() !== '')}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: (!newProject.title.trim() || !newProject.bulletPoints.some(b => b && b.trim() !== '')) ? 'not-allowed' : 'pointer',
                      opacity: (!newProject.title.trim() || !newProject.bulletPoints.some(b => b && b.trim() !== '')) ? 0.5 : 1,
                      transition: 'all 0.2s'
                    }}
                  >
                    + Add Project
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
                  Maximum {maxProjectsLimit} projects. Remove existing projects to add new ones.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Your Projects List */}
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
                  <span>💡</span>
                  Your Projects
                </h3>
                <div style={{
                  background: '#f7fafc',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <span style={{ fontWeight: 700, color: '#4299e1' }}>{projectsData.length}</span>
                  <span style={{ color: '#718096' }}>/{maxProjectsLimit}</span>
                </div>
              </div>
              
              {projectsData.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                  background: '#f7fafc',
                  borderRadius: '12px',
                  border: '2px dashed #cbd5e0'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>💻</div>
                  <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '4px', fontWeight: 500 }}>
                    No projects added yet
                  </p>
                  <p style={{ fontSize: '13px', color: '#718096' }}>
                    Add your first project using the form on the left
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {projectsData.map((project, index) => {
                    const nonEmptyAchievements = project.bulletPoints?.filter(b => b && b.trim() !== '').length || 0;
                    
                    return (
                      <div
                        key={project.id || index}
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
                            }}>{project.title || 'Project Title'}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                              {project.role && (
                                <span style={{
                                  fontSize: '12px',
                                  color: '#4299e1',
                                  background: '#ebf8ff',
                                  padding: '4px 8px',
                                  borderRadius: '20px'
                                }}>
                                  {project.role}
                                </span>
                              )}
                              {project.current && (
                                <span style={{
                                  fontSize: '11px',
                                  color: '#48bb78',
                                  background: '#f0fff4',
                                  padding: '4px 8px',
                                  borderRadius: '20px'
                                }}>
                                  🔵 In Progress
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveProject(index)}
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
                            gap: '8px'
                          }}>
                            {project.startDate && (
                              <span style={{
                                fontSize: '12px',
                                color: '#4a5568',
                                background: '#f7fafc',
                                padding: '4px 8px',
                                borderRadius: '20px'
                              }}>
                                📅 {formatDate(project.startDate)} - {project.current ? 'Present' : formatDate(project.endDate)}
                              </span>
                            )}
                            {project.projectUrl && (
                              <a
                                href={project.projectUrl.startsWith('http') ? project.projectUrl : `https://${project.projectUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  fontSize: '12px',
                                  color: '#4299e1',
                                  background: '#ebf8ff',
                                  padding: '4px 8px',
                                  borderRadius: '20px',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px'
                                }}
                              >
                                🔗 Live Demo
                              </a>
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
                              Key Achievements
                            </h5>
                            <span style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#4299e1',
                              background: '#ebf8ff',
                              padding: '4px 8px',
                              borderRadius: '20px'
                            }}>
                              {nonEmptyAchievements}/{MAX_BULLET_POINTS}
                            </span>
                          </div>
                          
                          {(!project.bulletPoints || project.bulletPoints.length === 0 || 
                            (project.bulletPoints.length === 1 && !project.bulletPoints[0])) ? (
                            <div style={{
                              textAlign: 'center',
                              padding: '24px',
                              background: '#f7fafc',
                              borderRadius: '8px',
                              border: '2px dashed #e2e8f0'
                            }}>
                              <p style={{ fontSize: '13px', color: '#718096', marginBottom: '12px' }}>No achievements added</p>
                              <button
                                onClick={() => handleAddBulletPointExisting(index)}
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
                              {project.bulletPoints.map((bullet, bulletIndex) => (
                                bullet && bullet.trim() !== '' ? (
                                  <div key={bulletIndex} style={{
                                    display: 'flex',
                                    gap: '8px',
                                    marginBottom: '10px'
                                  }}>
                                    <span style={{ fontSize: '13px', color: '#4299e1', marginTop: '6px' }}>•</span>
                                    <div style={{ flex: 1 }}>
                                      <textarea
                                        value={bullet || ''}
                                        onChange={(e) => handleBulletPointChangeExisting(index, bulletIndex, e.target.value)}
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
                                    {project.bulletPoints.length > 1 && (
                                      <button
                                        onClick={() => handleRemoveBulletPointExisting(index, bulletIndex)}
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
                                ) : null
                              ))}
                              {nonEmptyAchievements < MAX_BULLET_POINTS && (
                                <button
                                  onClick={() => handleAddBulletPointExisting(index)}
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
                              value={project.title || ''}
                              onChange={(e) => handleUpdateProject(index, 'title', e.target.value)}
                              placeholder="Project Title"
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
                              value={project.role || ''}
                              onChange={(e) => handleUpdateProject(index, 'role', e.target.value)}
                              placeholder="Your Role"
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                          </div>
                          <input
                            type="url"
                            value={project.projectUrl || ''}
                            onChange={(e) => handleUpdateProject(index, 'projectUrl', e.target.value)}
                            placeholder="Live URL / GitHub"
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
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '8px',
                            marginBottom: '8px'
                          }}>
                            <input
                              type="month"
                              value={formatDate(project.startDate)}
                              onChange={(e) => handleUpdateProject(index, 'startDate', e.target.value)}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: '#fafafa'
                              }}
                            />
                            <input
                              type={project.current ? "text" : "month"}
                              value={project.current ? 'Present' : formatDate(project.endDate)}
                              onChange={(e) => handleUpdateProject(index, 'endDate', e.target.value)}
                              disabled={project.current}
                              style={{
                                padding: '6px 10px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                fontSize: '12px',
                                background: project.current ? '#f5f5f5' : '#fafafa',
                                cursor: project.current ? 'not-allowed' : 'auto'
                              }}
                            />
                          </div>
                          <div>
                            <label style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer'
                            }}>
                              <input
                                type="checkbox"
                                checked={project.current || false}
                                onChange={(e) => handleCurrentProjectToggle(index, e.target.checked)}
                                style={{ width: '14px', height: '14px' }}
                              />
                              <span style={{ fontSize: '12px', color: '#4a5568' }}>Currently working on this project</span>
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
            {projectsData.length >= 1 ? (
              <div style={{ color: '#48bb78', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckIcon /> {projectsData.length} {projectsData.length === 1 ? 'project' : 'projects'} added. Ready to continue!
              </div>
            ) : (
              <div style={{ color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <AlertIcon /> Add at least 1 project with achievements to continue
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

export default Projects;