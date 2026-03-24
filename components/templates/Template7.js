import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== TEMPLATE7 CONTENT LIMITS - GLOBALLY DEFINED =====
export const TEMPLATE7_LIMITS = {
  // Main Sections
  experiences: 2,           // Maximum number of work experience entries
  projects: 1,              // Maximum number of project entries
  education: 1,             // Maximum number of education entries
  skills: 7,                // Maximum number of skills to display (UPDATED: 6 → 7)
  languages: 0,             // Maximum number of languages to display
  certifications: 1,        // Maximum number of certifications to display
  awards: 1,                // Maximum number of awards to display
  
  // Text Limits
  summaryWords: 80,         // Maximum words in professional summary
  achievementsPerExperience: 4,  // Maximum bullet points per experience
  achievementLength: 150,   // Maximum characters per achievement bullet
  descriptionLength: 0      // Maximum characters for phrase descriptions
};

// ===== TEMPLATE7 FORMATTING CONSTANTS - GLOBALLY DEFINED =====
export const TEMPLATE7_FORMATTING = {
  // Page Dimensions (A4)
  pageWidth: '210mm',
  pageHeight: '297mm',
  
  // Grid Layout
  sidebarWidth: '35%',
  mainContentWidth: '65%',
  
  // Font Sizes - REDUCED BY 1PX
  fontSize: {
    sidebarName: '27px',           // Reduced from 28px to 27px
    sidebarHeading: '14px',         // Reduced from 15px to 14px
    sidebarText: '13px',            // Reduced from 14px to 13px
    mainHeading: '17px',            // Reduced from 18px to 17px
    roleTitle: '15px',              // Reduced from 16px to 15px
    companyName: '14px',            // Reduced from 15px to 14px
    dateText: '13px',               // Reduced from 14px to 13px
    achievementText: '13px',        // Reduced from 14px to 13px
    projectAchievementText: '13px', // Reduced from 14px to 13px
    projectName: '16px',            // Reduced from 17px to 16px
    projectRole: '15px',            // Reduced from 16px to 15px
    projectDescription: '13px',     // Reduced from 14px to 13px
    summaryText: '14px',            // Reduced from 15px to 14px
    contactText: '13px'             // Reduced from 14px to 13px
  },
  
  // Spacing - MODERATE ADJUSTMENTS
  spacing: {
    experienceGap: '5px',
    projectGap: '5px',
    sectionMargin: '12px',
    contentPadding: '10px',
    sidebarPadding: '12px',
    summaryPadding: '10px 15px',
    itemMarginBottom: '6px'
  },
  
  // Colors - INCREASED CONTRAST (darker text, brighter accents)
  colors: {
    sidebarGradient: 'linear-gradient(135deg, #0a0a1a 0%, #121230 50%, #1a3a6b 100%)', // Darker gradient
    sidebarText: '#ffffff',          // Pure white (maximum contrast)
    sidebarTextMuted: '#ffffff',      // Pure white (was rgba)
    sidebarTextDim: '#ffffff',        // Pure white (was rgba)
    mainBackground: '#ffffff',
    mainText: '#000000',              // Pure black (was #000000)
    borderLight: '#d0d7de',           // Darker border
    dateBackground: '#e6eef5',        // Darker background
    dateBorder: '#9aa9b7',            // Darker border
    accent: '#f97316',                 // Brighter orange
    linkBlue: '#0066cc',               // Darker blue
    highlightBackground: '#f0f4f8',    // Slightly darker highlight
    gpaBadgeBg: '#e6f0ff',            // Darker background
    gpaBadgeBorder: '#0a2a4a',        // Darker border
    linkedinBlue: '#0077b5'           // LinkedIn official blue
  },
  
  // Timeline
  timeline: {
    connectorWidth: '2px',
    connectorColor: '#000000',        // Pure black
    dotSize: '14px',
    dotBorder: '2px solid #000000',
    contentBorderLeft: '3px solid #000000'
  }
};

// ===== ICON MAPPING - LinkedIn "in" icon in blue like Template1 =====
const ICON_MAPPING = Object.freeze({
  email: '✉️',
  phone: '📱',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn "in" icon with blue color
  github: '🐙',
  portfolio: '🌐',
  website: '🌐',
  default: '📌'
});

// ===== TEMPLATE7 FIELD MAPPINGS - GLOBALLY DEFINED =====
export const TEMPLATE7_FIELD_MAPPINGS = {
  experience: {
    position: ['position', 'title', 'role'],
    company: ['company', 'organization'],
    startDate: ['startDate', 'startYear'],
    endDate: ['endDate', 'endYear'],
    location: ['location'],
    achievements: ['bulletPoints', 'achievements', 'description'],
    technologies: ['technologies'],
    isCurrent: ['current']
  },
  
  education: {
    degree: ['degree'],
    institution: ['institution', 'school', 'university'],
    location: ['location'],
    startDate: ['startDate', 'startYear'],
    endDate: ['endDate', 'endYear'],
    isCurrent: ['current'],
    gpa: ['gpa'],
    gpaScale: ['gpaScale'],
    honors: ['honors']
  },
  
  project: {
    name: ['name', 'title'],
    role: ['role'],
    description: ['description'],
    startDate: ['startDate'],
    endDate: ['endDate'],
    link: ['link', 'url', 'projectUrl'],
    isOngoing: ['ongoing', 'current'],
    bulletPoints: ['bulletPoints', 'achievements', 'highlights']
  },
  
  certification: {
    title: ['name', 'title', 'certification'],
    issuer: ['issuer', 'organization', 'issuedBy'],
    date: ['date', 'issueDate', 'dateIssued']
  },
  
  award: {
    title: ['name', 'title', 'award'],
    issuer: ['issuer', 'organization', 'presentedBy', 'awardedBy'],
    date: ['date', 'awardDate', 'dateReceived']
  }
};

// ===== TEMPLATE7 DATE FORMATS - GLOBALLY DEFINED =====
export const TEMPLATE7_DATE_FORMATS = {
  experience: 'MMM YYYY',
  education: 'MMM YYYY',
  certification: 'MMM YYYY',
  award: 'MMM YYYY'
};

// ===== TEMPLATE7 EMPTY STATES - GLOBALLY DEFINED =====
export const TEMPLATE7_EMPTY_STATES = {
  personalInfo: {
    fullName: 'Your Name'
  },
  
  contactInfo: [
    { icon: '✉️', placeholder: 'email@example.com' },
    { icon: '📱', placeholder: '+1 (123) 456-7890' },
    { icon: '📍', placeholder: 'City, State' },
    { icon: '💼', placeholder: 'linkedin.com/in/username' }
  ],
  
  messages: {
    noExperiences: 'Add your work experience to showcase your professional journey',
    noProjects: 'Add projects to demonstrate your practical skills',
    noEducation: 'Add your educational background',
    noSkills: 'Add your key skills',
    noCertifications: 'Add your professional certifications',
    noAwards: 'Add your achievements and awards'
  }
};

// ===== LINK FORMATTING FUNCTIONS (like Template1) =====
const formatLinkedInLink = (linkedin) => {
  if (!linkedin) return null;
  
  let linkedinUrl = String(linkedin).trim();
  linkedinUrl = linkedinUrl.replace(/^@/, '');
  
  // Extract username
  let username = '';
  
  if (linkedinUrl.includes('linkedin.com')) {
    const match = linkedinUrl.match(/linkedin\.com\/(?:in|company)\/([^\/?#]+)/);
    if (match && match[1]) {
      username = match[1];
    } else {
      username = linkedinUrl
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/^linkedin\.com\//, '')
        .replace(/\/$/, '');
    }
  } else {
    username = linkedinUrl;
  }
  
  username = username.split('/')[0].split('?')[0];
  
  // Return FULL https URL for PDF clickability
  return `https://www.linkedin.com/in/${username}`;
};

const formatLinkedInDisplay = (linkedin) => {
  if (!linkedin) return '';
  
  let linkedinUrl = String(linkedin);
  linkedinUrl = linkedinUrl.replace(/^@/, '');
  
  let username = '';
  
  if (linkedinUrl.includes('linkedin.com')) {
    const match = linkedinUrl.match(/linkedin\.com\/(?:in|company)\/([^\/?#]+)/);
    if (match && match[1]) {
      username = match[1];
    } else {
      username = linkedinUrl
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/^linkedin\.com\//, '')
        .replace(/\/$/, '');
    }
  } else {
    username = linkedinUrl;
  }
  
  username = username.split('/')[0].split('?')[0];
  
  return username || 'LinkedIn';
};

const formatGitHubLink = (github) => {
  if (!github) return null;
  
  let githubUrl = String(github).trim();
  githubUrl = githubUrl.replace(/^@/, '');
  
  let username = '';
  
  if (githubUrl.includes('github.com')) {
    const match = githubUrl.match(/github\.com\/([^\/?#]+)/);
    if (match && match[1]) {
      username = match[1];
    } else {
      username = githubUrl
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/^github\.com\//, '')
        .replace(/\/$/, '');
    }
  } else {
    username = githubUrl;
  }
  
  username = username.split('/')[0].split('?')[0];
  
  return `https://github.com/${username}`;
};

const formatGitHubDisplay = (github) => {
  if (!github) return '';
  
  let displayValue = String(github)
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/^github\.com\//, '')
    .replace(/\/$/, '')
    .replace(/^@/, '');
  
  displayValue = displayValue.split('/')[0].split('?')[0];
  
  return displayValue || 'GitHub';
};

const formatPortfolioLink = (portfolio) => {
  if (!portfolio) return null;
  
  let portfolioUrl = String(portfolio).trim();
  
  if (!portfolioUrl.startsWith('http://') && !portfolioUrl.startsWith('https://')) {
    return `https://${portfolioUrl}`;
  }
  
  return portfolioUrl;
};

const formatPortfolioDisplay = (portfolio) => {
  if (!portfolio) return '';
  
  let displayValue = String(portfolio)
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');
  
  if (displayValue.length > 30) {
    displayValue = displayValue.substring(0, 27) + '...';
  }
  
  return displayValue || 'Portfolio';
};

const getContactIcon = (type) => {
  const iconConfig = ICON_MAPPING[type] || ICON_MAPPING.default;
  if (typeof iconConfig === 'object' && iconConfig.icon) {
    return iconConfig.icon;
  }
  return iconConfig;
};

const getContactIconColor = (type) => {
  const iconConfig = ICON_MAPPING[type];
  if (typeof iconConfig === 'object' && iconConfig.color) {
    return iconConfig.color;
  }
  return null;
};

const getContactType = (key) => {
  const emailPatterns = ['email', 'Email', 'EMAIL'];
  const phonePatterns = ['phone', 'Phone', 'mobile', 'Mobile', 'PHONE'];
  const linkedinPatterns = ['linkedin', 'LinkedIn', 'linkedIn', 'linked_in'];
  const githubPatterns = ['github', 'GitHub', 'Github', 'git_hub'];
  const portfolioPatterns = ['portfolio', 'Portfolio', 'website', 'Website', 'web', 'site'];
  
  if (emailPatterns.includes(key)) return 'email';
  if (phonePatterns.includes(key)) return 'phone';
  if (linkedinPatterns.includes(key)) return 'linkedin';
  if (githubPatterns.includes(key)) return 'github';
  if (portfolioPatterns.includes(key)) return 'portfolio';
  return 'text';
};

const getContactLink = (type, value) => {
  if (!value) return null;
  
  switch(type) {
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${String(value).replace(/[^0-9+]/g, '')}`;
    case 'linkedin':
      return formatLinkedInLink(value);
    case 'github':
      return formatGitHubLink(value);
    case 'portfolio':
      return formatPortfolioLink(value);
    default:
      return null;
  }
};

const getContactDisplayValue = (type, value) => {
  if (!value) return '';
  
  switch(type) {
    case 'email':
      return value;
    case 'phone':
      return value;
    case 'linkedin':
      return formatLinkedInDisplay(value);
    case 'github':
      return formatGitHubDisplay(value);
    case 'portfolio':
      return formatPortfolioDisplay(value);
    default:
      return value;
  }
};

// ===== GPA FORMATTING HELPER =====
const formatGPA = (gpa, scale = '4.0') => {
  if (!gpa) return '';
  
  const gpaValue = String(gpa).trim();
  const gpaScale = scale || '4.0';
  
  if (!gpaValue) return '';
  
  switch(gpaScale) {
    case '4.0':
      return `GPA: ${gpaValue}/4.0`;
    case '5.0':
      return `CGPA: ${gpaValue}/5.0`;
    case '10.0':
      return `CGPA: ${gpaValue}/10`;
    case '100':
      return `Percentage: ${gpaValue}%`;
    default:
      return `GPA: ${gpaValue}/${gpaScale}`;
  }
};

// ===== TEMPLATE7 COMPONENT =====
const Template7 = ({ 
  isExporting = false,
  language = 'en',
  country = 'US',
  colorScheme = 'blue',
  industry = 'tech',
  isATS = false,
  accessibilityMode = false,
  ...props 
}) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  
  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    languages = [], 
    professionalSummary, 
    certifications = [], 
    projects = [], 
    awards = [], 
    tools = [], 
    coreStrengths = [] 
  } = resumeData;
  
  const templateRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Use globally defined limits
  const CONTENT_LIMITS = TEMPLATE7_LIMITS;

  // ===== OPTIMIZED HELPER FUNCTIONS =====
  const safeString = useMemo(() => (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return value.name || value.text || value.title || value.language || '';
    }
    return String(value).trim();
  }, []);

  const safeArray = useMemo(() => (data) => {
    return Array.isArray(data) ? data.filter(item => item != null) : [];
  }, []);

  // ===== OPTIMIZED DATE FORMATTING =====
  const formatExperienceDate = useMemo(() => (dateString) => {
    if (!dateString) return 'Present';
    if (dateString.toLowerCase() === 'present') return 'Present';
    
    // Handle YYYY-MM format
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return safeString(dateString);
  }, [safeString]);

  // Format education date to show month and year
  const formatEducationDate = useMemo(() => (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
      return 'Present';
    }
    
    // Handle YYYY-MM format for education as well
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    
    // If just year, return year only
    if (/^\d{4}$/.test(dateString)) return dateString;
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return safeString(dateString);
  }, [safeString]);

  const formatSimpleDate = useMemo(() => (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
      return 'Present';
    }
    
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return safeString(dateString);
  }, [safeString]);

  // Helper to check if item has content
  const hasContent = (item) => {
    if (!item) return false;
    
    // Check for position/title
    const hasPosition = !!(item.position || item.title || item.role);
    
    // Check for company
    const hasCompany = !!(item.company || item.organization);
    
    // Check for achievements/bulletPoints
    let hasAchievements = false;
    
    // Handle bulletPoints (from the form)
    if (item.bulletPoints && Array.isArray(item.bulletPoints)) {
      hasAchievements = item.bulletPoints.some(bp => bp && bp.trim() !== '');
    }
    
    // Handle achievements (alternative field)
    if (item.achievements && Array.isArray(item.achievements)) {
      hasAchievements = hasAchievements || item.achievements.some(a => a && a.trim() !== '');
    }
    
    // Handle description/achievementsPhrase
    const hasDescription = !!(item.description && item.description.trim());
    const hasPhrase = !!(item.achievementsPhrase && item.achievementsPhrase.trim());
    
    return (hasPosition && hasCompany) || hasAchievements || hasDescription || hasPhrase;
  };

  // Process experience data
  const processExperience = (exp) => {
    const hasUseBulletPoints = exp.useBulletPoints !== undefined;
    const useBulletPoints = exp.useBulletPoints !== false;
    
    const position = exp.position || exp.title || exp.role || '';
    const company = exp.company || exp.organization || '';
    
    // Handle achievements/bulletPoints - support both fields
    let achievements = [];
    
    // First try bulletPoints (from the form)
    if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
      achievements = exp.bulletPoints
        .filter(bp => bp && bp.trim() !== '')
        .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength));
    }
    
    // Then try achievements (alternative field)
    if (achievements.length === 0 && exp.achievements && Array.isArray(exp.achievements)) {
      achievements = exp.achievements
        .filter(a => a && a.trim() !== '')
        .map(a => safeString(a).slice(0, CONTENT_LIMITS.achievementLength));
    }
    
    if (hasUseBulletPoints) {
      return {
        ...exp,
        useBulletPoints,
        achievements: useBulletPoints ? 
          achievements.slice(0, CONTENT_LIMITS.achievementsPerExperience) : [],
        achievementsPhrase: !useBulletPoints && exp.achievementsPhrase ? 
          safeString(exp.achievementsPhrase).slice(0, CONTENT_LIMITS.descriptionLength) : '',
        position,
        company,
        startDate: exp.startDate || '',
        endDate: exp.current ? 'Present' : (exp.endDate || ''),
        location: exp.location || '',
        technologies: exp.technologies || []
      };
    } else {
      return {
        ...exp,
        useBulletPoints: true,
        achievements: achievements.slice(0, CONTENT_LIMITS.achievementsPerExperience),
        achievementsPhrase: exp.achievementsPhrase ? 
          safeString(exp.achievementsPhrase).slice(0, CONTENT_LIMITS.descriptionLength) : '',
        position,
        company,
        startDate: exp.startDate || '',
        endDate: exp.current ? 'Present' : (exp.endDate || ''),
        location: exp.location || '',
        technologies: exp.technologies || []
      };
    }
  };

  // Process education data with GPA and honors
  const processEducation = (edu) => {
    const startDate = edu.startDate || edu.startYear || '';
    const endDate = edu.current ? 'Present' : (edu.endDate || edu.endYear || '');
    
    const formattedStartDate = startDate ? formatEducationDate(startDate) : '';
    const formattedEndDate = endDate ? (endDate === 'Present' ? 'Present' : formatEducationDate(endDate)) : '';
    
    // Create display date with month and year
    let displayDate = '';
    if (formattedStartDate && formattedEndDate) {
      displayDate = `${formattedStartDate} – ${formattedEndDate}`;
    } else if (formattedStartDate) {
      displayDate = formattedStartDate;
    } else if (formattedEndDate) {
      displayDate = formattedEndDate;
    }
    
    // Format GPA display (without icon)
    const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return {
      ...edu,
      degree: edu.degree || '',
      institution: edu.institution || '',
      location: edu.location || '',
      startDate: startDate,
      endDate: endDate,
      displayDate,
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay,
      honors: edu.honors || ''
    };
  };

  // Process project data 
  const processProject = (project) => {
    // Handle bullet points for projects
    let bulletPoints = [];
    
    if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
      bulletPoints = project.bulletPoints
        .filter(bp => bp && bp.trim() !== '')
        .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength));
    } else if (project.achievements && Array.isArray(project.achievements)) {
      bulletPoints = project.achievements
        .filter(a => a && a.trim() !== '')
        .map(a => safeString(a).slice(0, CONTENT_LIMITS.achievementLength));
    } else if (project.highlights && Array.isArray(project.highlights)) {
      bulletPoints = project.highlights
        .filter(h => h && h.trim() !== '')
        .map(h => safeString(h).slice(0, CONTENT_LIMITS.achievementLength));
    }
    
    // Limit to 3 bullet points
    bulletPoints = bulletPoints.slice(0, 3);
    
    return {
      name: project.name || project.title || '',
      role: project.role || '',
      description: project.description || '',
      bulletPoints: bulletPoints,
      startDate: project.startDate || '',
      endDate: project.ongoing ? 'Present' : (project.endDate || ''),
      link: project.link || project.projectUrl || project.url || ''
    };
  };

  // Process certification data
  const processCertification = (cert) => {
    if (typeof cert === 'string') {
      return {
        title: cert,
        issuer: '',
        date: ''
      };
    }
    
    return {
      title: cert.name || cert.title || cert.certification || '',
      issuer: cert.issuer || cert.organization || cert.issuedBy || '',
      date: formatSimpleDate(cert.date || cert.issueDate || cert.dateIssued || '')
    };
  };

  // Process award data
  const processAward = (award) => {
    if (typeof award === 'string') {
      return {
        title: award,
        issuer: '',
        date: ''
      };
    }
    
    return {
      title: award.name || award.title || award.award || '',
      issuer: award.issuer || award.organization || award.presentedBy || award.awardedBy || '',
      date: formatSimpleDate(award.date || award.awardDate || award.dateReceived || '')
    };
  };

  // ===== CONTACT INFO WITH LINKEDIN OPTIMIZATION (like Template1) =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key) => {
      if (value && safeString(value)) {
        const type = getContactType(key);
        const link = getContactLink(type, value);
        const displayValue = getContactDisplayValue(type, value);
        const icon = getContactIcon(type);
        const iconColor = getContactIconColor(type);
        
        contacts.push({
          originalValue: safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type,
          icon,
          iconColor,
          link
        });
      }
    };

    addContact(personalInfo?.email, 'email');
    addContact(personalInfo?.phone, 'phone');
    addContact(personalInfo?.address, 'address');
    addContact(personalInfo?.linkedin, 'linkedin');
    addContact(personalInfo?.github, 'github');
    addContact(personalInfo?.portfolio, 'portfolio');
    addContact(personalInfo?.website, 'website');

    return contacts.slice(0, 4);
  }, [personalInfo, safeString]);

  // ===== CONTENT OVERFLOW DETECTION =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const container = templateRef.current;
      const contentHeight = container.scrollHeight;
      const a4Height = 297;
      const mmToPx = 3.78;
      const maxPxHeight = a4Height * mmToPx;
      
      setIsOverflowing(contentHeight > maxPxHeight);
    }
  }, [resumeData, isExporting]);

  // ===== OPTIMIZED CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    // Filter experiences that have content
    const experiencesWithContent = safeArray(experience).filter(hasContent);
    
    // Process experiences (2 experiences)
    const limitedExperiences = experiencesWithContent
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);
    
    // Process other sections with updated limits
    const limitedEducation = safeArray(education)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);
    
    // Updated: Skills limit is now 7
    const limitedSkills = safeArray(skills).slice(0, CONTENT_LIMITS.skills);
    const limitedLanguages = safeArray(languages).slice(0, CONTENT_LIMITS.languages);
    const limitedCertifications = safeArray(certifications)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);
    const limitedAwards = safeArray(awards)
      .slice(0, CONTENT_LIMITS.awards)
      .map(processAward);
    const limitedTools = safeArray(tools).slice(0, CONTENT_LIMITS.tools);
    const limitedCoreStrengths = safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths);
    const limitedProjects = safeArray(projects)
      .filter(proj => proj.name || proj.title)
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject);
    
    // Process summary
    const limitedSummary = professionalSummary ? 
      safeString(professionalSummary).split(' ').slice(0, CONTENT_LIMITS.summaryWords).join(' ') + 
      (safeString(professionalSummary).split(' ').length > CONTENT_LIMITS.summaryWords ? '...' : '')
      : '';

    // Sections data
    const sections = {
      summary: limitedSummary.length > 0,
      experience: limitedExperiences.length,
      projects: limitedProjects.length,
      education: limitedEducation.length,
      skills: limitedSkills.length,
      languages: limitedLanguages.length,
      certifications: limitedCertifications.length,
      awards: limitedAwards.length,
      tools: limitedTools.length,
      coreStrengths: limitedCoreStrengths.length
    };

    return {
      sections,
      limitedExperiences,
      limitedProjects,
      limitedEducation,
      limitedSkills,
      limitedLanguages,
      limitedCertifications,
      limitedAwards,
      limitedTools,
      limitedCoreStrengths,
      limitedSummary
    };
  }, [
    professionalSummary, experience, education, skills, 
    languages, certifications, awards, tools, 
    coreStrengths, projects, safeArray, safeString
  ]);

  // ===== SIMPLIFIED LAYOUT CONFIGURATION =====
  const layoutConfig = useMemo(() => {
    const { sections } = contentAnalysis;

    return {
      showSummary: sections.summary,
      showLanguages: sections.languages > 0 && CONTENT_LIMITS.languages > 0,
      showEducation: sections.education > 0,
      showCertifications: sections.certifications > 0,
      showTools: sections.tools > 0 && CONTENT_LIMITS.tools > 0,
      showCoreStrengths: sections.coreStrengths > 0 && CONTENT_LIMITS.coreStrengths > 0,
      showAwards: sections.awards > 0,
      showProjects: sections.projects > 0
    };
  }, [contentAnalysis]);

  // ===== RENDER FUNCTIONS =====
  // UPDATED: Render contact item with LinkedIn "in" icon in blue
  const renderContactItem = useCallback((contact, index) => {
    const iconColor = contact.iconColor;
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          ...(iconColor && { color: iconColor, fontWeight: 'bold' })
        }}>
          {contact.icon}
        </span>
        <span style={styles.contactText}>{contact.displayValue}</span>
      </>
    );
    
    if (contact.link) {
      let finalLink = contact.link;
      
      // For LinkedIn, ensure complete URL
      if (contact.type === 'linkedin') {
        if (!finalLink.includes('linkedin.com')) {
          finalLink = `https://www.linkedin.com/in/${finalLink.replace(/^@/, '')}`;
        } else if (!finalLink.startsWith('https://')) {
          finalLink = finalLink.replace('http://', 'https://');
          if (!finalLink.startsWith('https://')) {
            finalLink = `https://${finalLink}`;
          }
        }
        
        if (finalLink.includes('linkedin.com') && !finalLink.includes('www.')) {
          finalLink = finalLink.replace('linkedin.com', 'www.linkedin.com');
        }
      }
      
      // For email, ensure mailto:
      if (contact.type === 'email' && !finalLink.startsWith('mailto:')) {
        finalLink = `mailto:${finalLink}`;
      }
      
      // For phone, ensure tel:
      if (contact.type === 'phone' && !finalLink.startsWith('tel:')) {
        finalLink = `tel:${finalLink.replace(/[^0-9+]/g, '')}`;
      }
      
      // For GitHub, ensure complete URL
      if (contact.type === 'github') {
        if (!finalLink.includes('github.com')) {
          finalLink = `https://github.com/${finalLink.replace(/^@/, '')}`;
        } else if (!finalLink.startsWith('https://')) {
          finalLink = finalLink.replace('http://', 'https://');
          if (!finalLink.startsWith('https://')) {
            finalLink = `https://${finalLink}`;
          }
        }
      }
      
      // For portfolio, ensure complete URL
      if (contact.type === 'portfolio' || contact.type === 'website') {
        if (!finalLink.startsWith('https://') && !finalLink.startsWith('http://')) {
          finalLink = `https://${finalLink}`;
        } else if (finalLink.startsWith('http://')) {
          finalLink = finalLink.replace('http://', 'https://');
        }
      }
      
      return (
        <a 
          key={index}
          href={finalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.contactItem,
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          title={finalLink}
        >
          {content}
        </a>
      );
    }
    
    return (
      <div 
        key={index} 
        style={styles.contactItem}
      >
        {content}
      </div>
    );
  }, []);

  const renderExperienceItem = useCallback((exp, index, totalCount) => {
    const useBulletPoints = exp.useBulletPoints !== false;
    
    const renderAchievements = () => {
      if (useBulletPoints) {
        if (!exp.achievements || !Array.isArray(exp.achievements) || exp.achievements.length === 0) return null;
        
        const validAchievements = exp.achievements.filter(achievement => 
          achievement && safeString(achievement).trim() !== ''
        );
        
        if (validAchievements.length === 0) return null;
        
        return (
          <div style={styles.achievementsSection}>
            <div style={styles.achievementsList}>
              {validAchievements.map((achievement, idx) => (
                <div key={idx} style={styles.achievementItem}>
                  <span style={styles.achievementBullet}>•</span>
                  <span style={styles.achievementText}>{safeString(achievement)}</span>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        if (!exp.achievementsPhrase || exp.achievementsPhrase.trim() === '') return null;
        
        return (
          <div style={styles.phraseSection}>
            <p style={styles.phraseDescription}>
              {safeString(exp.achievementsPhrase)}
            </p>
          </div>
        );
      }
    };

    const itemStyle = {
      ...styles.timelineItem,
      marginBottom: index === totalCount - 1 ? '0' : TEMPLATE7_FORMATTING.spacing.itemMarginBottom
    };

    return (
      <div key={index} style={itemStyle}>
        {/* Timeline Connector */}
        <div style={styles.timelineConnector}>
          <div style={styles.connectorDot}></div>
          {index < totalCount - 1 && (
            <div style={styles.connectorLine}></div>
          )}
        </div>
        
        <div style={styles.timelineContent}>
          {/* Title and dates on same line */}
          <div style={styles.rolePeriod}>
            <div style={styles.titleDatesRow}>
              <h3 style={styles.roleTitle}>{exp.position || 'Position'}</h3>
              <span style={styles.datePeriod}>
                {formatExperienceDate(exp.startDate)} – {formatExperienceDate(exp.endDate)}
              </span>
            </div>
            
            {/* Company and Location */}
            <div style={styles.companyLocationRow}>
              <span style={styles.companyName}>{exp.company || 'Company'}</span>
              {exp.location && (
                <>
                  <span style={styles.locationSeparator}> | </span>
                  <span style={styles.experienceLocation}>
                    <span style={styles.locationIcon}>📍</span> {safeString(exp.location)}
                  </span>
                </>
              )}
            </div>
          </div>
          
          {renderAchievements()}
          
          {/* Technologies */}
          {exp.technologies && exp.technologies.length > 0 && (
            <div style={styles.experienceTechnologiesInline}>
              <span style={styles.technologiesLabel}>Technologies:</span>
              <div style={styles.techTagsInline}>
                {Array.isArray(exp.technologies) 
                  ? exp.technologies.map((tech, idx) => (
                      <span key={idx} style={styles.techTagInline}>
                        {safeString(tech)}
                      </span>
                    ))
                  : <span style={styles.techTagInline}>{safeString(exp.technologies)}</span>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }, [safeString, formatExperienceDate]);

  // Education item in sidebar
  const renderEducationSidebarItem = useCallback((edu, index) => (
    <div key={index} style={styles.educationSidebarItem}>
      <div style={styles.educationSidebarDegree}>
        {safeString(edu.degree)}
      </div>
      <div style={styles.educationSidebarInstitution}>
        {safeString(edu.institution)}
      </div>
      {edu.location && (
        <div style={styles.educationSidebarLocation}>
          📍 {safeString(edu.location)}
        </div>
      )}
      
      {/* Dates and GPA in same row - without borders */}
      {(edu.displayDate || edu.gpaDisplay) && (
        <div style={styles.educationSidebarMetaRow}>
          {edu.displayDate && (
            <span style={styles.educationSidebarDates}>
              {edu.displayDate}
            </span>
          )}
          
          {/* GPA display without icon - just plain text */}
          {edu.gpaDisplay && (
            <span style={styles.gpaSidebarText}>
              {edu.gpaDisplay}
            </span>
          )}
        </div>
      )}
      
      {/* Honors display */}
      {edu.honors && (
        <div style={styles.educationSidebarHonors}>
          <span style={styles.honorsIcon}>🏆</span>
          <span>{safeString(edu.honors)}</span>
        </div>
      )}
    </div>
  ), [safeString]);

  // Certification item in sidebar
  const renderCertificationSidebarItem = useCallback((cert, index) => (
    <div key={index} style={styles.educationSidebarItem}>
      <div style={styles.educationSidebarDegree}>
        {safeString(cert.title)}
      </div>
      {cert.issuer && (
        <div style={styles.educationSidebarInstitution}>
          {safeString(cert.issuer)}
        </div>
      )}
      {cert.date && (
        <div style={styles.educationSidebarDates}>
          Issued: {cert.date}
        </div>
      )}
    </div>
  ), [safeString]);

  // Award item in sidebar
  const renderAwardSidebarItem = useCallback((award, index) => (
    <div key={index} style={styles.educationSidebarItem}>
      <div style={styles.educationSidebarDegree}>
        {safeString(award.title)}
      </div>
      {award.issuer && (
        <div style={styles.educationSidebarInstitution}>
          {safeString(award.issuer)}
        </div>
      )}
      {award.date && (
        <div style={styles.educationSidebarDates}>
          Received: {award.date}
        </div>
      )}
    </div>
  ), [safeString]);

  // Project item 
  const renderProjectItem = useCallback((project, index, totalCount) => {
    const formatLink = (link) => {
      if (!link) return '';
      let formatted = safeString(link);
      if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
        return `https://${formatted}`;
      }
      return formatted;
    };

    const truncateLink = (link, maxLength = 40) => {
      const formatted = safeString(link);
      if (formatted.length <= maxLength) return formatted;
      
      const start = formatted.substring(0, 20);
      const end = formatted.substring(formatted.length - 15);
      return `${start}...${end}`;
    };

    const itemStyle = {
      ...styles.projectMainItem,
      marginBottom: index === totalCount - 1 ? '0' : TEMPLATE7_FORMATTING.spacing.itemMarginBottom
    };

    // Check if project has bullet points
    const hasBulletPoints = project.bulletPoints && project.bulletPoints.length > 0;

    return (
      <div key={index} style={itemStyle}>
        {/* Timeline Connector */}
        <div style={styles.timelineConnector}>
          <div style={styles.connectorDot}></div>
          {index < totalCount - 1 && (
            <div style={styles.connectorLine}></div>
          )}
        </div>
        
        <div style={styles.timelineContent}>
          <div style={styles.projectHeader}>
            <div style={styles.projectTitleSection}>
              <h4 style={styles.projectName}>{safeString(project.name)}</h4>
            </div>
            {(project.startDate || project.endDate) && (
              <div style={styles.projectDates}>
                {formatExperienceDate(project.startDate)} – {formatExperienceDate(project.endDate)}
              </div>
            )}
          </div>
          
          {project.role && (
            <div style={styles.projectRole}>
              <span style={styles.projectLabel}>Role:</span> {safeString(project.role)}
            </div>
          )}
          
          {/* Bullet points for projects - FIXED ALIGNMENT */}
          {hasBulletPoints ? (
            <div style={styles.projectBulletPoints}>
              {project.bulletPoints.map((bullet, idx) => (
                <div key={idx} style={styles.projectBulletItem}>
                  <span style={styles.projectBullet}>•</span>
                  <span style={styles.projectBulletText}>{safeString(bullet)}</span>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback to description if no bullet points */
            project.description && (
              <div style={styles.projectDescriptionMain}>
                <p style={styles.projectDescriptionText}>{safeString(project.description)}</p>
              </div>
            )
          )}
          
          {/* Project Link Display */}
          {project.link && safeString(project.link) && (
            <div style={styles.projectLinkContainer}>
              <span style={styles.projectLinkLabel}>Link:</span>
              <a 
                href={formatLink(project.link)}
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.projectLinkValue}
              >
                {truncateLink(project.link)}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }, [safeString, formatExperienceDate]);

  const renderSkillItem = useCallback((skill, index) => (
    <div key={index} style={styles.skillItem}>
      <span style={{ position: 'absolute', left: 0, color: TEMPLATE7_FORMATTING.colors.accent, fontSize: '16px', lineHeight: 1.4 }}>•</span>
      <span style={styles.skillText}>{safeString(skill)}</span>
    </div>
  ), [safeString]);

  // Define all styles using global formatting constants - WITH TEMPLATE1 FONT FAMILY
  const styles = {
    // Container
    template: {
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      background: TEMPLATE7_FORMATTING.colors.mainBackground,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      lineHeight: 1.5,
      width: TEMPLATE7_FORMATTING.pageWidth,
      minHeight: TEMPLATE7_FORMATTING.pageHeight,
      margin: 0,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: TEMPLATE7_FORMATTING.sidebarWidth + ' ' + TEMPLATE7_FORMATTING.mainContentWidth,
      minHeight: TEMPLATE7_FORMATTING.pageHeight,
      position: 'relative'
    },
    
    // Sidebar
    sidebar: {
      background: TEMPLATE7_FORMATTING.colors.sidebarGradient,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    sidebarContent: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    
    // Geometric shapes
    shape1: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '8px',
      width: '60px',
      height: '60px',
      top: '15%',
      right: '8%',
      transform: 'rotate(45deg)'
    },
    shape2: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.08)',
      width: '40px',
      height: '40px',
      bottom: '20%',
      left: '10%',
      borderRadius: '50%'
    },
    
    // Profile section
    profileSection: {
      textAlign: 'center',
      marginBottom: 0,
      position: 'relative',
      padding: '15px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '2px solid rgba(255, 255, 255, 0.4)'
    },
    sidebarNameSection: {
      textAlign: 'center',
      width: '100%'
    },
    sidebarName: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarName,
      fontWeight: 800,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      margin: 0,
      lineHeight: 1.1,
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
      letterSpacing: '-0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    nameBottomLine: {
      height: '1px',
      background: 'rgba(255, 255, 255, 0.4)',
      margin: '8px 0 0 0'
    },
    
    // Contact section
    contactSection: {
      padding: '10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 8px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginTop: '5px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      padding: '3px 0'
    },
    contactIcon: {
      width: '18px',
      height: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: TEMPLATE7_FORMATTING.fontSize.contactText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      flexShrink: 0,
      opacity: 1,
      marginTop: '2px'
    },
    contactText: {
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontSize: TEMPLATE7_FORMATTING.fontSize.contactText,
      fontWeight: 500,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      wordBreak: 'break-word',
      lineHeight: 1.4,
      flex: 1,
      whiteSpace: 'normal',
      overflowWrap: 'break-word'
    },
    
    // Sidebar headings
    sidebarHeading: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarHeading,
      fontWeight: 800,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: '0 0 6px 0',
      padding: '8px 10px',
      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
      borderRadius: '4px',
      borderLeft: '3px solid ' + TEMPLATE7_FORMATTING.colors.accent,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
    },
    headingIcon: {
      fontSize: '15px',
      opacity: 1,
      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))'
    },
    
    // Skills section
    skillsSection: {
      padding: '10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 8px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      marginTop: '5px'
    },
    skillItem: {
      padding: '5px 0 5px 12px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      textAlign: 'left',
      position: 'relative'
    },
    skillText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      lineHeight: 1.4,
      display: 'block'
    },
    
    // Languages section
    languagesSection: {
      padding: '10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 8px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      display: CONTENT_LIMITS.languages > 0 ? 'block' : 'none'
    },
    languagesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      marginTop: '5px'
    },
    languageItem: {
      padding: '5px 0 5px 12px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      textAlign: 'left',
      position: 'relative'
    },
    languageText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      fontWeight: 600,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      lineHeight: 1.4,
      display: 'block'
    },
    
    // Education in sidebar
    educationSidebarSection: {
      padding: '10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 8px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    },
    educationSidebarList: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '5px'
    },
    educationSidebarItem: {
      padding: '8px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
    },
    educationSidebarDegree: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarHeading,
      fontWeight: 700,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      lineHeight: 1.3,
      marginBottom: '3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationSidebarInstitution: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      marginBottom: '3px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationSidebarLocation: {
      fontSize: '12px',
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      marginBottom: '3px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontWeight: 500
    },
    educationSidebarMetaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '3px',
      marginBottom: '3px'
    },
    educationSidebarDates: {
      fontSize: '12px',
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    gpaSidebarText: {
      fontSize: '12px',
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      display: 'inline-block'
    },
    educationSidebarHonors: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginTop: '4px',
      padding: '5px 7px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '4px',
      fontSize: '11px',
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      borderLeft: '2px solid ' + TEMPLATE7_FORMATTING.colors.accent,
      fontWeight: 500
    },
    honorsIcon: {
      fontSize: '11px'
    },
    
    // Optional sections
    optionalSection: {
      padding: '10px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding + ' 8px ' + TEMPLATE7_FORMATTING.spacing.sidebarPadding,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    },
    optionalList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      marginTop: '5px'
    },
    optionalItem: {
      padding: '5px 0 5px 12px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      textAlign: 'left',
      position: 'relative'
    },
    optionalText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      lineHeight: 1.4,
      display: 'block'
    },
    
    // Main content
    main: {
      padding: '15px 22px',
      background: TEMPLATE7_FORMATTING.colors.mainBackground,
      position: 'relative'
    },
    
    // Summary section
    summarySection: {
      marginBottom: TEMPLATE7_FORMATTING.spacing.sectionMargin,
      padding: TEMPLATE7_FORMATTING.spacing.summaryPadding,
      background: TEMPLATE7_FORMATTING.colors.highlightBackground,
      borderRadius: '4px',
      border: '1px solid ' + TEMPLATE7_FORMATTING.colors.borderLight
    },
    sectionHeader: {
      marginBottom: '6px',
      position: 'relative'
    },
    mainHeading: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.mainHeading,
      fontWeight: 800,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      margin: '0 0 3px 0',
      position: 'relative',
      display: 'inline-block',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '0.3px'
    },
    titleBar: {
      width: '45px',
      height: '3px',
      background: TEMPLATE7_FORMATTING.colors.mainText,
      borderRadius: '2px',
      marginTop: '2px'
    },
    summaryContent: {
      marginTop: '4px'
    },
    summaryText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.summaryText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      lineHeight: 1.6,
      margin: 0,
      textAlign: 'justify',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      wordSpacing: 'normal',
      letterSpacing: 'normal',
      fontWeight: 500
    },
    
    // Experience timeline with connectors
    experienceSection: {
      marginBottom: TEMPLATE7_FORMATTING.spacing.sectionMargin,
      position: 'relative'
    },
    timelineItem: {
      position: 'relative',
      padding: '0',
      marginLeft: '20px'
    },
    timelineConnector: {
      position: 'absolute',
      left: '-20px',
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '20px'
    },
    connectorDot: {
      width: TEMPLATE7_FORMATTING.timeline.dotSize,
      height: TEMPLATE7_FORMATTING.timeline.dotSize,
      background: 'radial-gradient(circle at center, ' + TEMPLATE7_FORMATTING.colors.mainText + ' 40%, transparent 40%), linear-gradient(white, white)',
      borderRadius: '50%',
      border: TEMPLATE7_FORMATTING.timeline.dotBorder,
      position: 'relative',
      zIndex: 3,
      flexShrink: 0,
      marginTop: '6px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    connectorLine: {
      flex: 1,
      width: TEMPLATE7_FORMATTING.timeline.connectorWidth,
      background: TEMPLATE7_FORMATTING.timeline.connectorColor,
      margin: '4px 0',
      minHeight: '18px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    timelineContent: {
      background: TEMPLATE7_FORMATTING.colors.mainBackground,
      borderRadius: '4px',
      border: '1px solid ' + TEMPLATE7_FORMATTING.colors.borderLight,
      padding: TEMPLATE7_FORMATTING.spacing.contentPadding,
      position: 'relative',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
      borderLeft: TEMPLATE7_FORMATTING.timeline.contentBorderLeft,
      width: '100%'
    },
    rolePeriod: {
      marginBottom: '4px'
    },
    titleDatesRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '3px'
    },
    roleTitle: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.roleTitle,
      fontWeight: 800,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      margin: 0,
      flex: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    datePeriod: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.dateText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      flexShrink: 0
    },
    companyLocationRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '5px',
      flexWrap: 'wrap'
    },
    companyName: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.companyName,
      fontWeight: 700,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    locationSeparator: {
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontSize: TEMPLATE7_FORMATTING.fontSize.dateText,
      opacity: 0.8
    },
    experienceLocation: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.dateText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    locationIcon: {
      fontSize: '11px',
      opacity: 1
    },
    
    // Achievements - FIXED ALIGNMENT
    achievementsSection: {
      marginTop: '6px',
      paddingTop: '6px',
      borderTop: '1px solid ' + TEMPLATE7_FORMATTING.colors.borderLight
    },
    achievementsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      fontSize: TEMPLATE7_FORMATTING.fontSize.achievementText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      lineHeight: 1.5,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    achievementBullet: {
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 'bold',
      flexShrink: 0,
      fontSize: '16px',
      width: '16px',
      textAlign: 'center',
      marginTop: '0',
      lineHeight: '1.5'
    },
    achievementText: {
      flex: 1,
      fontWeight: 500
    },
    
    // Phrase description
    phraseSection: {
      marginTop: '6px',
      padding: '8px 10px',
      background: TEMPLATE7_FORMATTING.colors.highlightBackground,
      borderRadius: '4px',
      borderLeft: '3px solid ' + TEMPLATE7_FORMATTING.colors.mainText,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    phraseDescription: {
      margin: 0,
      fontSize: TEMPLATE7_FORMATTING.fontSize.achievementText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      lineHeight: 1.6,
      textAlign: 'justify',
      fontWeight: 500
    },
    
    // Technologies inline
    experienceTechnologiesInline: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
      gap: '5px',
      marginTop: '6px',
      fontSize: TEMPLATE7_FORMATTING.fontSize.achievementText,
      width: '100%',
      overflow: 'hidden',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    technologiesLabel: {
      fontWeight: 700,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginRight: '5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontSize: TEMPLATE7_FORMATTING.fontSize.achievementText
    },
    techTagsInline: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      gap: '3px',
      alignItems: 'center',
      flex: 1,
      minWidth: 0
    },
    techTagInline: {
      background: TEMPLATE7_FORMATTING.colors.dateBackground,
      padding: '2px 6px',
      borderRadius: '12px',
      fontSize: '12px',
      color: TEMPLATE7_FORMATTING.colors.mainText,
      border: '1px solid ' + TEMPLATE7_FORMATTING.colors.dateBorder,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '95px',
      display: 'inline-block',
      fontWeight: 500
    },
    
    // Projects in main content
    projectsMainSection: {
      marginTop: '15px',
      marginBottom: TEMPLATE7_FORMATTING.spacing.sectionMargin,
      position: 'relative'
    },
    projectsMainList: {
      display: 'flex',
      flexDirection: 'column',
      gap: TEMPLATE7_FORMATTING.spacing.projectGap
    },
    projectMainItem: {
      position: 'relative',
      marginLeft: '20px'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '5px'
    },
    projectTitleSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flex: 1
    },
    projectName: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectName,
      fontWeight: 800,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      margin: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectDates: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.dateText,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      flexShrink: 0
    },
    projectRole: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectRole,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 600,
      marginBottom: '6px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectLabel: {
      fontWeight: 700,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      marginRight: '4px'
    },
    projectBulletPoints: {
      marginTop: '5px',
      marginBottom: '6px'
    },
    projectBulletItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '5px',
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectAchievementText,
      lineHeight: 1.5,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectBullet: {
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 'bold',
      flexShrink: 0,
      fontSize: '16px',
      width: '16px',
      textAlign: 'center',
      lineHeight: '1.5'
    },
    projectBulletText: {
      flex: 1,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontWeight: 500,
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectAchievementText
    },
    projectDescriptionMain: {
      marginTop: '5px',
      marginBottom: '6px'
    },
    projectDescriptionText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectDescription,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      lineHeight: 1.5,
      margin: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontWeight: 500
    },
    
    // Project link
    projectLinkContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '5px',
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectDescription,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      background: TEMPLATE7_FORMATTING.colors.highlightBackground,
      padding: '4px 7px',
      borderRadius: '4px',
      border: '1px solid ' + TEMPLATE7_FORMATTING.colors.borderLight
    },
    projectLinkLabel: {
      fontWeight: 700,
      color: TEMPLATE7_FORMATTING.colors.mainText,
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectDescription
    },
    projectLinkValue: {
      color: TEMPLATE7_FORMATTING.colors.linkBlue,
      textDecoration: 'underline',
      wordBreak: 'break-all',
      fontWeight: 600,
      fontSize: TEMPLATE7_FORMATTING.fontSize.projectDescription,
      ':hover': {
        textDecoration: 'underline',
        color: '#004999'
      }
    },
    
    // Core strengths, tools
    coreStrengthItem: {
      padding: '5px 0 5px 12px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      textAlign: 'left',
      position: 'relative',
      display: CONTENT_LIMITS.coreStrengths > 0 ? 'block' : 'none'
    },
    coreStrengthText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      lineHeight: 1.4,
      display: 'block'
    },
    toolItem: {
      padding: '5px 0 5px 12px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      textAlign: 'left',
      position: 'relative',
      display: CONTENT_LIMITS.tools > 0 ? 'block' : 'none'
    },
    toolText: {
      fontSize: TEMPLATE7_FORMATTING.fontSize.sidebarText,
      color: TEMPLATE7_FORMATTING.colors.sidebarText,
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      lineHeight: 1.4,
      display: 'block'
    }
  };

  // Helper component for before pseudo-elements
  const SkillItemWithBullet = ({ children }) => (
    <div style={styles.skillItem}>
      <span style={{ position: 'absolute', left: 0, color: TEMPLATE7_FORMATTING.colors.accent, fontSize: '16px', lineHeight: 1.4 }}>•</span>
      <span style={styles.skillText}>{children}</span>
    </div>
  );

  const LanguageItemWithBullet = ({ children }) => (
    <div style={styles.languageItem}>
      <span style={{ position: 'absolute', left: 0, color: TEMPLATE7_FORMATTING.colors.accent, fontSize: '16px', lineHeight: 1.4 }}>•</span>
      <span style={styles.languageText}>{children}</span>
    </div>
  );

  const OptionalItemWithBullet = ({ children, style }) => (
    <div style={styles.optionalItem}>
      <span style={{ position: 'absolute', left: 0, color: TEMPLATE7_FORMATTING.colors.accent, fontSize: '16px', lineHeight: 1.4 }}>•</span>
      <span style={style || styles.optionalText}>{children}</span>
    </div>
  );

  // Section heading component
  const SidebarHeading = ({ icon, text }) => (
    <h3 style={styles.sidebarHeading}>
      <span style={styles.headingIcon}>{icon}</span>
      {text}
    </h3>
  );

  // Main heading component
  const MainHeading = ({ text }) => (
    <div style={styles.sectionHeader}>
      <h2 style={styles.mainHeading}>{text}</h2>
      <div style={styles.titleBar}></div>
    </div>
  );

  return (
    <div 
      ref={templateRef}
      style={{
        ...styles.template,
        ...(isExporting ? { padding: 0, margin: 0, background: 'white', boxShadow: 'none' } : {})
      }}
    >
      <div style={styles.container}>
        
        {/* Left Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarContent}>
            
            {/* Geometric shapes */}
            <div style={styles.shape1}></div>
            <div style={styles.shape2}></div>
            
            {/* Profile Section */}
            <div style={styles.profileSection}>
              <div style={styles.sidebarNameSection}>
                <h1 style={styles.sidebarName}>
                  {personalInfo.fullName || (isExporting ? '' : TEMPLATE7_EMPTY_STATES.personalInfo.fullName)}
                </h1>
              </div>
              
              <div style={styles.nameBottomLine}></div>
            </div>

            {/* Contact Info with LinkedIn optimization */}
            {contactInfo.length > 0 && (
              <div style={styles.contactSection}>
                <SidebarHeading icon="📞" text="CONTACT" />
                <div style={styles.contactList}>
                  {contactInfo.map(renderContactItem)}
                </div>
              </div>
            )}

            {/* Skills - 7 skills max (UPDATED) */}
            {contentAnalysis.limitedSkills.length > 0 && (
              <section style={styles.skillsSection}>
                <SidebarHeading icon="⚡" text="KEY SKILLS" />
                <div style={styles.skillsList}>
                  {contentAnalysis.limitedSkills.map((skill, index) => (
                    <SkillItemWithBullet key={index}>
                      {safeString(skill)}
                    </SkillItemWithBullet>
                  ))}
                </div>
              </section>
            )}

            {/* Languages - Hidden (0 limit) */}
            {CONTENT_LIMITS.languages > 0 && layoutConfig.showLanguages && contentAnalysis.limitedLanguages.length > 0 && (
              <section style={styles.languagesSection}>
                <SidebarHeading icon="🌐" text="LANGUAGES" />
                <div style={styles.languagesList}>
                  {contentAnalysis.limitedLanguages.map((lang, index) => (
                    <LanguageItemWithBullet key={index}>
                      {safeString(lang)}
                    </LanguageItemWithBullet>
                  ))}
                </div>
              </section>
            )}

            {/* Education - 1 max with GPA */}
            {layoutConfig.showEducation && contentAnalysis.limitedEducation.length > 0 && (
              <section style={styles.educationSidebarSection}>
                <SidebarHeading icon="🎓" text="EDUCATION" />
                <div style={styles.educationSidebarList}>
                  {contentAnalysis.limitedEducation.map(renderEducationSidebarItem)}
                </div>
              </section>
            )}

            {/* Certifications - 1 max */}
            {layoutConfig.showCertifications && contentAnalysis.limitedCertifications.length > 0 && (
              <section style={styles.educationSidebarSection}>
                <SidebarHeading icon="🏆" text="CERTIFICATIONS" />
                <div style={styles.educationSidebarList}>
                  {contentAnalysis.limitedCertifications.map(renderCertificationSidebarItem)}
                </div>
              </section>
            )}

            {/* Awards - 1 max */}
            {layoutConfig.showAwards && contentAnalysis.limitedAwards.length > 0 && (
              <section style={styles.educationSidebarSection}>
                <SidebarHeading icon="⭐" text="AWARDS" />
                <div style={styles.educationSidebarList}>
                  {contentAnalysis.limitedAwards.map(renderAwardSidebarItem)}
                </div>
              </section>
            )}

            {/* Core Strengths - Hidden (0 limit) */}
            {CONTENT_LIMITS.coreStrengths > 0 && layoutConfig.showCoreStrengths && contentAnalysis.limitedCoreStrengths.length > 0 && (
              <section style={styles.optionalSection}>
                <SidebarHeading icon="💪" text="CORE STRENGTHS" />
                <div style={styles.optionalList}>
                  {contentAnalysis.limitedCoreStrengths.map((strength, index) => (
                    <OptionalItemWithBullet key={index} style={styles.coreStrengthText}>
                      {safeString(strength)}
                    </OptionalItemWithBullet>
                  ))}
                </div>
              </section>
            )}

            {/* Tools - Hidden (0 limit) */}
            {CONTENT_LIMITS.tools > 0 && layoutConfig.showTools && contentAnalysis.limitedTools.length > 0 && (
              <section style={styles.optionalSection}>
                <SidebarHeading icon="🛠️" text="TOOLS" />
                <div style={styles.optionalList}>
                  {contentAnalysis.limitedTools.map((tool, index) => (
                    <OptionalItemWithBullet key={index} style={styles.toolText}>
                      {safeString(tool)}
                    </OptionalItemWithBullet>
                  ))}
                </div>
              </section>
            )}

          </div>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          
          {/* Summary - 80 words max */}
          {layoutConfig.showSummary && contentAnalysis.limitedSummary && (
            <section style={styles.summarySection}>
              <MainHeading text="Professional Summary" />
              <div style={styles.summaryContent}>
                <p style={styles.summaryText}>{contentAnalysis.limitedSummary}</p>
              </div>
            </section>
          )}

          {/* Experience - 2 experiences max, 4 bullet points per experience */}
          {contentAnalysis.limitedExperiences.length > 0 && (
            <section style={styles.experienceSection}>
              <MainHeading text="Work Experience" />
              <div style={{ position: 'relative' }}>
                {contentAnalysis.limitedExperiences.map((exp, index) => 
                  renderExperienceItem(exp, index, contentAnalysis.limitedExperiences.length)
                )}
              </div>
            </section>
          )}

          {/* Projects - 1 project max */}
          {layoutConfig.showProjects && contentAnalysis.limitedProjects.length > 0 && (
            <section style={styles.projectsMainSection}>
              <MainHeading text="Projects" />
              <div style={styles.projectsMainList}>
                {contentAnalysis.limitedProjects.map((project, index) => 
                  renderProjectItem(project, index, contentAnalysis.limitedProjects.length)
                )}
              </div>
            </section>
          )}

        </main>

      </div>
    </div>
  );
};

// Export the component with all global constants
export default Template7;

// Also export all constants for use in other components
export {
  TEMPLATE7_LIMITS,
  TEMPLATE7_FORMATTING,
  TEMPLATE7_FIELD_MAPPINGS,
  TEMPLATE7_DATE_FORMATS,
  TEMPLATE7_EMPTY_STATES
};