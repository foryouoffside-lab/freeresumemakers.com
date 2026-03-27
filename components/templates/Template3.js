// ============================================
// components/templates/Template3.js
// UPDATED - Summary higher, Projects enabled (1 item above certifications)
// FIXED - Achievement points now displaying properly
// FIXED - Date display: removed "Current" text, only shows "Present"
// FIXED - TypeError: Cannot read properties of undefined (reading 'length')
// IMPROVED - Maximum text contrast for PDF export
// REMOVED - Debug overlay text from bottom right
// UPDATED - GPA now placed next to location with responsive wrapping
// UPDATED - GPA display format matches Template1 (GPA: X.X/4.0, CGPA: X.X/5.0, etc.)
// UPDATED - Added Honors support for Education section
// UPDATED - Using BASE FONTS (not compact)
// UPDATED - Achievements per experience increased to 4
// UPDATED - Skills limit increased to 7
// UPDATED - Adjusted column proportions: left sidebar now 32% (was 28%), main content 68% (was 72%)
// UPDATED - Increased left sidebar padding for better spacing
// UPDATED - Moved summary higher (reduced header margin)
// UPDATED - Maintained consistent spacing between sections (2mm gap between sections)
// UPDATED - Added location icon to education location
// UPDATED - Changed location color to white in education and experience
// UPDATED - Dates in experience, certification, and awards are now plain text with no borders
// FIXED - Hoisting issue with renderSidebarProjectItem
// UPDATED - LinkedIn icon changed from suitcase to proper LinkedIn icon (in)
// UPDATED - LinkedIn link formatting like Template1 (shows username instead of full URL)
// UPDATED - LinkedIn icon now blue color matching Template1
// FIXED - Skills display now uses vertical layout (one below another) with full width
// ============================================

import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// BASE FONTS - Used as starting point (NOT COMPACT)
const BASE_FONTS = Object.freeze({
  body: 11,
  name: 32,
  titleSize: 12,
  sectionTitle: 10.5,
  cardTitle: 12,
  cardSubtitle: 11,
  smallText: 10,
  tinyText: 9,
  lineHeight: 1.5
});

// BASE SPACING - Default comfortable spacing with adjusted sidebar and reduced header margin
const BASE_SPACING = Object.freeze({
  headerMarginBottom: '2mm', // Reduced from 6mm to move summary higher
  contactMarginTop: '5mm',
  summaryMarginTop: '0mm', // Reduced from 1mm
  summaryMarginBottom: '2mm', // Consistent gap after summary
  sectionGap: '2mm', // Consistent gap between sections (reduced from 3.5mm)
  itemGap: '2mm',
  cardPadding: '3mm',
  sidebarPadding: '8mm 5mm 4mm 5mm',
  mainPadding: '7mm 6mm 4mm 6mm', // Reduced bottom padding slightly
  skillPadding: '2mm 2.5mm',
  contactPadding: '1.5mm 2.5mm',
  projectPadding: '2mm',
  certPadding: '2mm',
  awardPadding: '2mm',
  photoSize: '100px',
  nameSize: '32pt',
  titleSize: '12pt',
  sectionTitleSize: '10.5pt',
  contentFontSize: '11pt',
  bulletSpacing: '2mm'
});

// ICON MAPPING - Using Template1 style icons
const ICON_MAPPING = Object.freeze({
  email: 'Ã¢Å“â€°Ã¯Â¸Â',
  phone: 'Ã°Å¸â€œÂ±',
  address: 'Ã°Å¸â€œÂ',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color matching Template1
  github: 'Ã¢Å’Â¨Ã¯Â¸Â',
  portfolio: 'Ã°Å¸Å’Â',
  default: 'Ã°Å¸â€œÅ’'
});

const Template3 = ({ 
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
  const { personalInfo, education, experience, skills, languages = [], hobbies = [], professionalSummary, certifications = [], projects = [], awards = [], tools = [], coreStrengths = [] } = resumeData;
  const templateRef = useRef();
  const contentRef = useRef();
  const observerRef = useRef();
  
  // States for UI/UX
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredEducation, setHoveredEducation] = useState(null);
  const [hoveredCertification, setHoveredCertification] = useState(null);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredAward, setHoveredAward] = useState(null);
  
  // Current config (using BASE_FONTS)
  const [currentFonts, setCurrentFonts] = useState(BASE_FONTS);
  const [currentSpacing, setCurrentSpacing] = useState(BASE_SPACING);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set loading to false immediately after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // CONSTANTS - IMMUTABLE
  const CONTENT_LIMITS = Object.freeze({
    // Main Sections
    skills: 7,              // Maximum 7 skills
    languages: 0,            // Maximum 0 languages (disabled)
    projects: 1,             // Maximum 1 project (ENABLED)
    awards: 1,               // Maximum 1 award
    tools: 0,                // Maximum 0 tools (disabled)
    coreStrengths: 0,        // Maximum 0 core strengths (disabled)
    certifications: 1,       // Maximum 1 certification
    hobbies: 0,              // No hobbies shown
    
    // Text Limits
    summaryWords: 100,        // Professional summary max 80 words
    experience: 2,           // Maximum 2 experience items
    education: 1,            // Maximum 1 education item
    
    // Achievement/Description Limits - 4 achievements per experience
    achievements: 4,         // Max 4 bullet points per experience
    achievementChars: 140,   // Max 140 characters per bullet point
    descriptionChars: 0      // Max 0 characters for description (using bullet points only)
  });

  const EXPERIENCE_TYPES = Object.freeze({
    job: { label: "Work Experience", icon: "Ã°Å¸â€™Â¼", color: "#2c578b" },
    internship: { label: "Internship", icon: "Ã°Å¸Å½â€œ", color: "#28a745" },
    freelance: { label: "Freelance", icon: "Ã°Å¸â€™Â»", color: "#ffa726" },
    research: { label: "Research", icon: "Ã°Å¸â€Â¬", color: "#9c27b0" }
  });

  // ===== LINK FORMATTING FUNCTIONS (like Template1) =====
  const formatLinkedInLink = (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin).trim();
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
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin);
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

  // Helper functions - IMMUTABLE
  const TemplateHelpers = Object.freeze({
    safeString: (value) => {
      if (value == null) return '';
      if (typeof value === 'string') return value.trim();
      return String(value).trim();
    },

    safeArray: (data) => {
      if (!Array.isArray(data)) return [];
      return data.filter(item => item != null);
    },

    formatDate: (dateString) => {
      if (!dateString || dateString.trim() === '') return '';
      if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
        return 'Present';
      }
      if (/^\d{4}$/.test(dateString)) return dateString;
      if (/^[a-zA-Z]+\s+\d{4}$/.test(dateString)) return dateString;
      if (/^[a-zA-Z]+-\d{4}$/.test(dateString)) return dateString.replace('-', ' ');
      
      try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        }
      } catch {}
      
      return dateString;
    },

    formatDateRange: (startDate, endDate) => {
      const start = TemplateHelpers.formatDate(startDate);
      const end = TemplateHelpers.formatDate(endDate);
      
      if (!start && !end) return '';
      if (start && !end) return start;
      if (!start && end) return end;
      return `${start} Ã¢â‚¬â€œ ${end}`;
    },

    // Format GPA exactly like Template1
    formatGPA: (gpa, scale) => {
      if (!gpa) return '';
      
      const gpaValue = TemplateHelpers.safeString(gpa);
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
    },

    getItemName: Object.freeze({
      skill: (item) => typeof item === 'object' ? item.name || '' : TemplateHelpers.safeString(item),
      language: (item) => {
        let name = '';
        if (typeof item === 'object') {
          name = item.name || item.language || '';
        } else {
          name = TemplateHelpers.safeString(item);
        }
        name = name.replace(/\s*\((Native|Fluent|Intermediate|Basic|Advanced|Expert|Beginner|Elementary|Proficient)\)/gi, '');
        name = name.replace(/\s*-\s*(Native|Fluent|Intermediate|Basic|Advanced|Expert|Beginner|Elementary|Proficient)/gi, '');
        name = name.replace(/\s*:\s*(Native|Fluent|Intermediate|Basic|Advanced|Expert|Beginner|Elementary|Proficient)/gi, '');
        return name.trim();
      },
      award: (item) => typeof item === 'object' && item ? item.name || item.title || '' : TemplateHelpers.safeString(item),
      tool: (item) => typeof item === 'object' && item ? item.name || '' : TemplateHelpers.safeString(item),
      coreStrength: (item) => typeof item === 'object' && item ? item.name || '' : TemplateHelpers.safeString(item),
      certification: (item) => typeof item === 'object' && item ? item.name || item.title || '' : TemplateHelpers.safeString(item)
    }),

    formatLink: (link) => {
      if (!link) return '';
      let formatted = TemplateHelpers.safeString(link);
      if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
        return `https://${formatted}`;
      }
      return formatted;
    },

    // LinkedIn formatting helpers (matching Template1)
    formatLinkedInLink: formatLinkedInLink,
    formatLinkedInDisplay: formatLinkedInDisplay,

    // Get contact link and display value helpers
    getContactLink: (type, value) => {
      if (!value) return null;
      
      switch(type) {
        case 'email':
          return `mailto:${value}`;
        case 'phone':
          return `tel:${value.replace(/[^0-9+]/g, '')}`;
        case 'linkedin':
          return TemplateHelpers.formatLinkedInLink(value);
        case 'github':
          return TemplateHelpers.formatGitHubLink(value);
        case 'portfolio':
          return TemplateHelpers.formatPortfolioLink(value);
        default:
          return null;
      }
    },

    getContactDisplayValue: (type, value) => {
      if (!value) return '';
      
      switch(type) {
        case 'email':
          return value;
        case 'phone':
          return value;
        case 'linkedin':
          return TemplateHelpers.formatLinkedInDisplay(value);
        case 'github':
          return TemplateHelpers.formatGitHubDisplay(value);
        case 'portfolio':
          return TemplateHelpers.formatPortfolioDisplay(value);
        default:
          return value;
      }
    },

    getContactIcon: (type) => {
      const iconConfig = ICON_MAPPING[type] || ICON_MAPPING.default;
      if (typeof iconConfig === 'object' && iconConfig.icon) {
        return iconConfig.icon;
      }
      return iconConfig;
    },

    getContactIconColor: (type) => {
      const iconConfig = ICON_MAPPING[type];
      if (typeof iconConfig === 'object' && iconConfig.color) {
        return iconConfig.color;
      }
      return null;
    },

    formatGitHubLink: (github) => {
      if (!github) return null;
      
      let githubUrl = TemplateHelpers.safeString(github).trim();
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
    },

    formatGitHubDisplay: (github) => {
      if (!github) return '';
      
      let displayValue = TemplateHelpers.safeString(github)
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/^github\.com\//, '')
        .replace(/\/$/, '')
        .replace(/^@/, '');
      
      displayValue = displayValue.split('/')[0].split('?')[0];
      
      return displayValue || 'GitHub';
    },

    formatPortfolioLink: (portfolio) => {
      if (!portfolio) return null;
      
      let portfolioUrl = TemplateHelpers.safeString(portfolio).trim();
      
      if (!portfolioUrl.startsWith('http://') && !portfolioUrl.startsWith('https://')) {
        return `https://${portfolioUrl}`;
      }
      
      return portfolioUrl;
    },

    formatPortfolioDisplay: (portfolio) => {
      if (!portfolio) return '';
      
      let displayValue = TemplateHelpers.safeString(portfolio)
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\/$/, '');
      
      if (displayValue.length > 30) {
        displayValue = displayValue.substring(0, 27) + '...';
      }
      
      return displayValue || 'Portfolio';
    },

    getContactType: (key) => {
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
    },

    optimizeSummaryText: (text) => {
      if (!text) return '';
      
      const words = TemplateHelpers.safeString(text).split(' ');
      if (words.length <= CONTENT_LIMITS.summaryWords) {
        return text;
      }
      
      const truncatedWords = words.slice(0, CONTENT_LIMITS.summaryWords);
      
      const lastWord = truncatedWords[truncatedWords.length - 1];
      const hasPunctuation = /[.!?]$/.test(lastWord);
      
      if (!hasPunctuation) {
        const cleanTruncated = truncatedWords.slice(0, -1).join(' ');
        return cleanTruncated + '...';
      }
      
      const truncated = truncatedWords.join(' ');
      return truncated + '...';
    },

    willTextFit: (text1, text2, maxLength = 40) => {
      const t1 = TemplateHelpers.safeString(text1);
      const t2 = TemplateHelpers.safeString(text2);
      return (t1.length + t2.length + 3) <= maxLength;
    }
  });

  // Check if item has content
  const hasExperienceContent = useMemo(() => (item) => {
    if (!item) return false;
    
    const hasTitle = TemplateHelpers.safeString(item.title || item.position || item.role).length > 0;
    const hasOrganization = TemplateHelpers.safeString(item.organization || item.company).length > 0;
    
    let hasContent = false;
    if (item.bulletPoints && Array.isArray(item.bulletPoints)) {
      hasContent = item.bulletPoints.some(bp => TemplateHelpers.safeString(bp).length > 0);
    } else if (item.achievements && Array.isArray(item.achievements)) {
      hasContent = item.achievements.some(ach => TemplateHelpers.safeString(ach).length > 0);
    } else if (item.description) {
      hasContent = TemplateHelpers.safeString(item.description).length > 0;
    }
    
    return (hasTitle && hasOrganization) || hasContent;
  }, []);

  // Process experience data - Now properly handles bullet points with 4 achievements max
  const processExperience = useMemo(() => (exp) => {
    // Get bullet points from either bulletPoints or achievements
    const bulletPoints = exp.bulletPoints || exp.achievements || [];
    
    // Check if there are any valid bullet points (after cleaning)
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
    
    // Clean and process bullet points
    const cleanedBulletPoints = hasBulletPoints ? bulletPoints.map(bullet => {
      if (!bullet) return '';
      let cleaned = TemplateHelpers.safeString(bullet);
      // Remove bullet characters if they exist
      cleaned = cleaned.replace(/^[Ã¢â‚¬Â¢\*\-]\s*/, '');
      // Remove excessive periods
      cleaned = cleaned.replace(/\.\.+/g, '.');
      return cleaned;
    }).filter(bullet => bullet.length > 0) : [];
    
    return Object.freeze({
      ...exp,
      hasBulletPoints: cleanedBulletPoints.length > 0,
      bulletPoints: Object.freeze(cleanedBulletPoints
        .slice(0, CONTENT_LIMITS.achievements) // Using 4 as max
        .map(bullet => 
          TemplateHelpers.safeString(bullet).slice(0, CONTENT_LIMITS.achievementChars)
        )),
      description: !hasBulletPoints && exp.description ? 
        TemplateHelpers.safeString(exp.description).slice(0, CONTENT_LIMITS.descriptionChars) : '',
      organization: exp.organization || exp.company || '',
      title: exp.title || exp.position || exp.role || '',
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      technologies: Object.freeze(TemplateHelpers.safeArray(exp.technologies || [])),
      location: exp.location || '',
      type: exp.type || 'job'
    });
  }, []);

  // Process education with GPA support - Matches Template1 format
  const processEducation = useMemo(() => (edu) => {
    const bulletPoints = edu.achievements || edu.bulletPoints || [];
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
    
    const cleanedBulletPoints = bulletPoints.map(bullet => {
      let cleaned = TemplateHelpers.safeString(bullet);
      cleaned = cleaned.replace(/^[Ã¢â‚¬Â¢\*\-]\s*/, '');
      return cleaned;
    }).filter(bullet => bullet.length > 0);
    
    // Format GPA display exactly like Template1
    const gpaDisplay = edu.gpa ? TemplateHelpers.formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return Object.freeze({
      ...edu,
      hasBulletPoints: cleanedBulletPoints.length > 0,
      bulletPoints: Object.freeze(cleanedBulletPoints
        .slice(0, CONTENT_LIMITS.achievements)
        .map(bullet => 
          TemplateHelpers.safeString(bullet).slice(0, CONTENT_LIMITS.achievementChars)
        )),
      description: !hasBulletPoints && edu.description ? 
        TemplateHelpers.safeString(edu.description).slice(0, CONTENT_LIMITS.descriptionChars) : '',
      institution: edu.institution || edu.school || '',
      degree: edu.degree || edu.program || '',
      startDate: edu.startDate || edu.startYear || '',
      endDate: edu.current ? 'Present' : (edu.endDate || edu.endYear || ''),
      location: edu.location || '',
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay: gpaDisplay,
      honors: edu.honors || '',
      major: edu.major || edu.fieldOfStudy || ''
    });
  }, []);

  // Process project for sidebar - ONLY title, role, link
  const processProjectForSidebar = useMemo(() => (project) => {
    return Object.freeze({
      name: TemplateHelpers.safeString(project.name),
      role: TemplateHelpers.safeString(project.role),
      link: TemplateHelpers.safeString(project.link)
    });
  }, []);

  // Process certification - SIMPLIFIED: only date, name, issuer
  const processCertification = useMemo(() => (cert) => {
    return Object.freeze({
      name: TemplateHelpers.safeString(cert.name) || TemplateHelpers.safeString(cert.title) || '',
      issuer: TemplateHelpers.safeString(cert.issuer) || TemplateHelpers.safeString(cert.issuingOrganization) || '',
      dateEarned: TemplateHelpers.formatDate(TemplateHelpers.safeString(cert.dateEarned) || TemplateHelpers.safeString(cert.date) || TemplateHelpers.safeString(cert.year) || '')
    });
  }, []);

  // Process award - SIMPLIFIED: only date, name, issuer (1 item max)
  const processAward = useMemo(() => (award) => {
    return Object.freeze({
      name: TemplateHelpers.safeString(award.name) || TemplateHelpers.safeString(award.title) || '',
      issuer: TemplateHelpers.safeString(award.issuer) || TemplateHelpers.safeString(award.issuingOrganization) || '',
      dateReceived: TemplateHelpers.formatDate(TemplateHelpers.safeString(award.dateReceived) || TemplateHelpers.safeString(award.date) || TemplateHelpers.safeString(award.year) || '')
    });
  }, []);

  // Optimized Experiences - Now properly processes bullet points with 4 max
  const optimizedExperiences = useMemo(() => {
    const experiences = TemplateHelpers.safeArray(experience)
      .filter(hasExperienceContent)
      .map(processExperience);
    
    return Object.freeze(experiences.slice(0, CONTENT_LIMITS.experience));
  }, [experience, hasExperienceContent, processExperience]);

  // Optimized Education - Now includes GPA display and honors
  const optimizedEducation = useMemo(() => {
    const edu = TemplateHelpers.safeArray(education);
    const validEducation = edu.filter(edu => 
      TemplateHelpers.safeString(edu.degree).length > 0 || TemplateHelpers.safeString(edu.institution).length > 0
    );

    return Object.freeze(validEducation
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => {
        const processed = processEducation(edu);
        // Ensure GPA fields are preserved
        return {
          ...processed,
          gpa: edu.gpa || '',
          gpaScale: edu.gpaScale || '4.0',
          gpaDisplay: edu.gpa ? TemplateHelpers.formatGPA(edu.gpa, edu.gpaScale) : '',
          honors: edu.honors || ''
        };
      }));
  }, [education, processEducation]);

  // Process certifications
  const processedCertifications = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(certifications)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification));
  }, [certifications, processCertification]);

  // Process awards
  const processedAwards = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(awards)
      .slice(0, CONTENT_LIMITS.awards)
      .map(processAward));
  }, [awards, processAward]);

  // Process projects for sidebar
  const sidebarProjects = useMemo(() => {
    const allProjects = TemplateHelpers.safeArray(projects)
      .filter(proj => TemplateHelpers.safeString(proj.name).length > 0)
      .map(processProjectForSidebar);
    
    return Object.freeze(allProjects.slice(0, CONTENT_LIMITS.projects));
  }, [projects, processProjectForSidebar]);

  // Process languages - DISABLED
  const processedLanguages = useMemo(() => {
    const lang = TemplateHelpers.safeArray(languages);
    const validLanguages = lang.filter(lang => 
      TemplateHelpers.getItemName.language(lang).length > 0
    );

    const optimizedLanguages = validLanguages
      .slice(0, CONTENT_LIMITS.languages)
      .map(lang => Object.freeze({
        ...lang,
        name: TemplateHelpers.getItemName.language(lang)
      }));

    return Object.freeze(optimizedLanguages);
  }, [languages]);

  // Contact info with formatted display values (matching Template1 approach)
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key, icon) => {
      if (value && TemplateHelpers.safeString(value)) {
        const type = TemplateHelpers.getContactType(key);
        const link = TemplateHelpers.getContactLink(type, value);
        const displayValue = TemplateHelpers.getContactDisplayValue(type, value);
        const iconChar = icon || TemplateHelpers.getContactIcon(type);
        const iconColor = TemplateHelpers.getContactIconColor(type);
        
        contacts.push(Object.freeze({ 
          originalValue: TemplateHelpers.safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type, 
          icon: iconChar,
          iconColor,
          link
        }));
      }
    };

    addContact(personalInfo.email, 'email', ICON_MAPPING.email);
    addContact(personalInfo.phone, 'phone', ICON_MAPPING.phone);
    addContact(personalInfo.address, 'address', ICON_MAPPING.address);
    addContact(personalInfo.linkedin, 'linkedin', ICON_MAPPING.linkedin.icon);
    addContact(personalInfo.github, 'github', ICON_MAPPING.github);
    addContact(personalInfo.portfolio, 'portfolio', ICON_MAPPING.portfolio);

    return Object.freeze(contacts.slice(0, 6));
  }, [personalInfo]);

  // Content analysis
  const contentAnalysis = useMemo(() => {
    const limitedSkills = Object.freeze(TemplateHelpers.safeArray(skills).slice(0, CONTENT_LIMITS.skills));
    const limitedLanguages = Object.freeze(processedLanguages);
    const limitedHobbies = Object.freeze(TemplateHelpers.safeArray(hobbies).slice(0, CONTENT_LIMITS.hobbies));
    const limitedAwards = Object.freeze(processedAwards);
    const limitedTools = Object.freeze(TemplateHelpers.safeArray(tools).slice(0, CONTENT_LIMITS.tools));
    const limitedCoreStrengths = Object.freeze(TemplateHelpers.safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths));
    const limitedCertifications = Object.freeze(processedCertifications);
    const limitedProjects = Object.freeze(sidebarProjects);
    
    const limitedSummary = TemplateHelpers.optimizeSummaryText(professionalSummary);

    const sections = Object.freeze({
      summary: limitedSummary.length > 0,
      experience: optimizedExperiences.length,
      education: optimizedEducation.length,
      skills: limitedSkills.length,
      languages: limitedLanguages.length,
      hobbies: limitedHobbies.length,
      certifications: limitedCertifications.length,
      awards: limitedAwards.length,
      tools: limitedTools.length,
      coreStrengths: limitedCoreStrengths.length,
      projects: limitedProjects.length
    });

    return Object.freeze({
      sections,
      optimizedExperiences,
      optimizedEducation,
      limitedSkills,
      limitedLanguages,
      limitedHobbies,
      limitedAwards,
      limitedTools,
      limitedCoreStrengths,
      limitedCertifications,
      limitedProjects,
      limitedSummary
    });
  }, [professionalSummary, optimizedExperiences, optimizedEducation, skills, languages, hobbies, certifications, awards, tools, coreStrengths, processedCertifications, processedAwards, sidebarProjects, processedLanguages]);

  // Layout configuration with dynamic fonts and adjusted column ratio
  const layoutConfig = useMemo(() => {
    return Object.freeze({
      ...currentSpacing,
      showCertifications: contentAnalysis.sections.certifications > 0,
      showSummary: true,
      showAwards: contentAnalysis.sections.awards > 0,
      showProjects: contentAnalysis.sections.projects > 0,
      showTools: false,
      showCoreStrengths: false,
      showHobbies: false,
      showLanguages: false,
      summaryBoxStyle: true,
      // Dynamic font values
      bodyFont: currentFonts.body,
      nameFont: currentFonts.name,
      titleFont: currentFonts.titleSize,
      sectionTitleFont: currentFonts.sectionTitle,
      smallTextFont: currentFonts.smallText,
      tinyTextFont: currentFonts.tinyText,
      // Column proportions - Adjusted to give left sidebar more space
      sidebarWidth: windowWidth < 768 ? '1fr' : '32%', // Increased from 28%
      mainWidth: windowWidth < 768 ? '1fr' : '68%'    // Decreased from 72%
    });
  }, [currentSpacing, currentFonts, contentAnalysis.sections, windowWidth]);

  // Phone number formatting
  const formatPhoneNumber = useMemo(() => (phone, countryCode = country) => {
    const formats = {
      'US': (p) => p.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      'UK': (p) => p.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3'),
      'EU': (p) => p.replace(/(\d{2})(\d{3})(\d{3})/, '$1 $2 $3'),
      'default': (p) => p
    };
    return formats[countryCode]?.(phone) || formats['default'](phone);
  }, [country]);

  // Text direction detection
  const getTextDirection = useMemo(() => (lang) => {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    return rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
  }, []);

  // Localized text
  const getLocalizedText = useMemo(() => (key, lang = language) => {
    const translations = {
      present: { en: 'Present', es: 'Actual', fr: 'Actuel', de: 'Aktuell', zh: 'Ã¨â€¡Â³Ã¤Â»Å ', ja: 'Ã§ÂÂ¾Ã¥Å“Â¨' },
      contact: { en: 'CONTACT', es: 'CONTACTO', fr: 'CONTACT', de: 'KONTAKT', zh: 'Ã¨Ââ€Ã§Â³Â»Ã¦â€“Â¹Ã¥Â¼Â', ja: 'Ã©â‚¬Â£Ã§ÂµÂ¡Ã¥â€¦Ë†' },
      skills: { en: 'SKILLS', es: 'HABILIDADES', fr: 'COMPÃƒâ€°TENCES', de: 'FÃƒâ€žHIGKEITEN', zh: 'Ã¦Å â‚¬Ã¨Æ’Â½', ja: 'Ã£â€šÂ¹Ã£â€šÂ­Ã£Æ’Â«' },
      certifications: { en: 'CERTIFICATIONS', es: 'CERTIFICACIONES', fr: 'CERTIFICATIONS', de: 'ZERTIFIZIERUNGEN', zh: 'Ã¨Â®Â¤Ã¨Â¯Â', ja: 'Ã¨ÂªÂÃ¥Â®Å¡' },
      awards: { en: 'AWARDS', es: 'PREMIOS', fr: 'PRIX', de: 'AUSZEICHNUNGEN', zh: 'Ã¥Â¥â€“Ã©Â¡Â¹', ja: 'Ã¥Ââ€”Ã¨Â³Å¾' },
      projects: { en: 'PROJECTS', es: 'PROYECTOS', fr: 'PROJETS', de: 'PROJEKTE', zh: 'Ã©Â¡Â¹Ã§â€ºÂ®', ja: 'Ã£Æ’â€”Ã£Æ’Â­Ã£â€šÂ¸Ã£â€šÂ§Ã£â€šÂ¯Ã£Æ’Ë†' },
      professionalSummary: { en: 'PROFESSIONAL SUMMARY', es: 'RESUMEN PROFESIONAL', fr: 'RÃƒâ€°SUMÃƒâ€° PROFESSIONNEL', de: 'PROFESSIONELLE ZUSAMMENFASSUNG', zh: 'Ã¤Â¸â€œÃ¤Â¸Å¡Ã¦Â¦â€šÃ¨Â¿Â°', ja: 'Ã£Æ’â€”Ã£Æ’Â­Ã£Æ’â€¢Ã£â€šÂ§Ã£Æ’Æ’Ã£â€šÂ·Ã£Æ’Â§Ã£Æ’Å Ã£Æ’Â«Ã£â€šÂµÃ£Æ’Å¾Ã£Æ’ÂªÃ£Æ’Â¼' },
      workExperience: { en: 'WORK EXPERIENCE', es: 'EXPERIENCIA LABORAL', fr: 'EXPÃƒâ€°RIENCE PROFESSIONNELLE', de: 'BERUFSERFAHRUNG', zh: 'Ã¥Â·Â¥Ã¤Â½Å“Ã§Â»ÂÃ¥Å½â€ ', ja: 'Ã¨ÂÂ·Ã¥â€¹â„¢Ã§ÂµÅ’Ã©Â¨â€œ' },
      education: { en: 'EDUCATION', es: 'EDUCACIÃƒâ€œN', fr: 'Ãƒâ€°DUCATION', de: 'BILDUNG', zh: 'Ã¦â€¢â„¢Ã¨â€šÂ²Ã¨Æ’Å’Ã¦â„¢Â¯', ja: 'Ã¥Â­Â¦Ã¦Â­Â´' }
    };
    return translations[key]?.[lang] || translations[key]?.en || key;
  }, [language]);

  // MAXIMUM CONTRAST COLOR SCHEMES - Optimized for PDF
  const colorSchemes = Object.freeze({
    blue: {
      primary: '#3B82F6',      // Bright, vibrant blue
      secondary: '#3B82F6',
      accent: '#3B82F6',
      dark: '#0B1120',         // Very dark background for max contrast
      card: '#1E293B',         // Dark card background
      light: '#F8FAFC',        // Almost white
      gray: '#94A3B8',         // Medium gray for borders
      white: '#FFFFFF',        // Pure white
      text: '#FFFFFF',         // Pure white text
      textSecondary: '#F1F5F9' // Off-white for secondary text
    },
    green: {
      primary: '#10B981',       // Bright emerald
      secondary: '#10B981',
      accent: '#10B981',
      dark: '#0A2E1F',          // Very dark green
      card: '#064E3B',          // Dark green card
      light: '#ECFDF5',         // Light mint
      gray: '#9CA3AF',          // Light gray
      white: '#FFFFFF',
      text: '#FFFFFF',
      textSecondary: '#F0FDF4'
    },
    purple: {
      primary: '#8B5CF6',       // Bright purple
      secondary: '#8B5CF6',
      accent: '#8B5CF6',
      dark: '#1E1B4B',          // Very dark purple
      card: '#2E1B5E',          // Dark purple card
      light: '#F5F3FF',         // Light lavender
      gray: '#9CA3AF',
      white: '#FFFFFF',
      text: '#FFFFFF',
      textSecondary: '#F0F0FF'
    },
    orange: {
      primary: '#F97316',       // Bright orange
      secondary: '#F97316',
      accent: '#F97316',
      dark: '#2D1B0F',          // Very dark orange/brown
      card: '#4A2A12',          // Dark orange card
      light: '#FFF7ED',         // Light cream
      gray: '#9CA3AF',
      white: '#FFFFFF',
      text: '#FFFFFF',
      textSecondary: '#FEF3E2'
    }
  });

  const colorSchemeConfig = colorSchemes[colorScheme] || colorSchemes.blue;

  // Enhanced Skills (7 max - INCREASED FROM 6)
  const enhancedSkills = useMemo(() => {
    const skillsArray = TemplateHelpers.safeArray(skills);
    const hasTypeScript = skillsArray.some(skill => 
      TemplateHelpers.getItemName.skill(skill).toLowerCase().includes('typescript')
    );
    
    let finalSkills = skillsArray;
    if (!hasTypeScript && industry === 'tech') {
      finalSkills = [...skillsArray, 'TypeScript'];
    }
    
    return Object.freeze(finalSkills.slice(0, CONTENT_LIMITS.skills)); // Now 7 max
  }, [skills, industry]);

  // Limited arrays
  const limitedLanguages = useMemo(() => Object.freeze(processedLanguages), [processedLanguages]);
  const limitedAwards = useMemo(() => Object.freeze(processedAwards), [processedAwards]);
  const limitedTools = useMemo(() => Object.freeze(TemplateHelpers.safeArray(tools).slice(0, CONTENT_LIMITS.tools)), [tools]);
  const limitedCoreStrengths = useMemo(() => Object.freeze(TemplateHelpers.safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths)), [coreStrengths]);
  const limitedCertifications = useMemo(() => Object.freeze(processedCertifications), [processedCertifications]);
  const limitedHobbies = useMemo(() => Object.freeze(TemplateHelpers.safeArray(hobbies).slice(0, CONTENT_LIMITS.hobbies)), [hobbies]);
  const limitedProjects = useMemo(() => Object.freeze(sidebarProjects), [sidebarProjects]);

  // Name analysis with dynamic sizing
  const nameAnalysis = useMemo(() => {
    const name = TemplateHelpers.safeString(personalInfo.fullName) || 'Your Name';
    const nameLength = name.length;
    const words = name.split(' ').length;
    
    let nameSizeClass = 'normal-name';
    let nameFontSize = `${layoutConfig.nameFont}pt`;
    
    if (nameLength > 25 || words > 4) {
      nameSizeClass = 'small-name';
      nameFontSize = `calc(${layoutConfig.nameFont}pt * 0.8)`;
    } else if (nameLength > 18 || words > 3) {
      nameSizeClass = 'medium-name';
      nameFontSize = `calc(${layoutConfig.nameFont}pt * 0.9)`;
    }
    
    return Object.freeze({ name, nameSizeClass, nameFontSize });
  }, [personalInfo.fullName, layoutConfig.nameFont]);

  // Professional title display
  const getProfessionalTitle = useMemo(() => () => {
    if (personalInfo?.jobTitle && TemplateHelpers.safeString(personalInfo.jobTitle)) {
      return TemplateHelpers.safeString(personalInfo.jobTitle);
    }
    return null;
  }, [personalInfo?.jobTitle]);

  // Determine which optional sections to show
  const getOptionalSections = useMemo(() => () => {
    const sections = [];
    
    if (limitedProjects.length > 0) sections.push('projects');
    if (limitedCertifications.length > 0) sections.push('certifications');
    if (limitedAwards.length > 0) sections.push('awards');
    
    return Object.freeze(sections.slice(0, 3));
  }, [limitedProjects, limitedCertifications, limitedAwards]);

  const optionalSections = getOptionalSections();
  const professionalTitle = getProfessionalTitle();

  // ========== BASE STYLES - DEFINED BEFORE RENDER FUNCTIONS ==========
  const templateBaseStyles = {
    container: {
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: currentFonts.lineHeight,
      color: colorSchemeConfig.text,
      width: '210mm',
      minHeight: '297mm',
      background: colorSchemeConfig.dark,
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: layoutConfig.sidebarWidth + ' ' + layoutConfig.mainWidth,
      position: 'relative',
      overflow: 'visible',
      boxSizing: 'border-box',
      fontSize: `${layoutConfig.bodyFont}pt`,
      fontWeight: 400,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      colorAdjust: 'exact',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'antialiased'
    },
    sidebar: {
      background: colorSchemeConfig.card,
      padding: layoutConfig.sidebarPadding,
      position: 'relative',
      overflow: 'visible',
      boxSizing: 'border-box',
      height: '100%',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    sidebarSection: {
      marginBottom: layoutConfig.sectionGap
    },
    main: {
      padding: layoutConfig.mainPadding,
      background: colorSchemeConfig.dark,
      position: 'relative',
      boxSizing: 'border-box',
      height: '100%'
    },
    mainSection: {
      marginBottom: layoutConfig.sectionGap // Consistent gap between main sections
    },
    sectionTitle: {
      fontSize: `${layoutConfig.sectionTitleFont}pt`,
      fontWeight: 700,
      color: colorSchemeConfig.white,
      margin: '0 0 3mm 0',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      position: 'relative',
      paddingBottom: '1mm'
    },
    // Updated skillItem for vertical layout - full width
    skillItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      background: 'transparent',
      padding: layoutConfig.skillPadding,
      borderRadius: '4px',
      border: `1px solid ${colorSchemeConfig.gray}80`,
      transition: 'background 0.2s ease',
      width: '100%', // Full width
      boxSizing: 'border-box'
    },
    skillName: {
      fontSize: `${layoutConfig.smallTextFont}pt`,
      fontWeight: 600,
      color: colorSchemeConfig.white,
      textAlign: 'left',
      width: '100%',
      lineHeight: 1.2,
      wordBreak: 'break-word' // Prevent overflow
    }
  };

  // Section title component
  const SectionTitle = ({ text }) => {
    const titleStyles = {
      ...templateBaseStyles.sectionTitle,
      position: 'relative'
    };
    
    const afterStyles = {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '1px',
      background: colorSchemeConfig.gray
    };

    return (
      <div style={{ position: 'relative' }}>
        <h3 style={titleStyles}>{text}</h3>
        <div style={afterStyles}></div>
      </div>
    );
  };

  const MainSectionTitle = ({ text }) => {
    const titleStyles = {
      fontSize: `${layoutConfig.sectionTitleFont}pt`,
      fontWeight: 600,
      color: colorSchemeConfig.white,
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      margin: 0
    };

    return <h2 style={titleStyles}>{text}</h2>;
  };

  // ========== RENDER FUNCTIONS ==========

  // RENDER CONTACT ITEM - With LinkedIn icon in blue (matching Template1)
  const renderContactItem = (contact, index) => {
    const isHovered = hoveredContact === index;
    const isMobile = windowWidth < 768;
    
    const baseStyles = {
      item: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2mm',
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        padding: layoutConfig.contactPadding,
        borderRadius: '4px',
        border: `1px solid ${colorSchemeConfig.gray}80`,
        transition: 'background 0.2s ease',
        textDecoration: 'none',
        cursor: contact.link ? 'pointer' : 'default'
      },
      icon: {
        width: '14px',
        height: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '8pt',
        color: contact.iconColor || colorSchemeConfig.primary,
        flexShrink: 0,
        marginTop: '1px',
        fontWeight: contact.type === 'linkedin' ? 'bold' : 'normal'
      },
      value: {
        flex: 1,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        fontWeight: 500,
        color: colorSchemeConfig.white,
        lineHeight: 1.3,
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        opacity: 1
      }
    };

    const content = (
      <>
        <div style={baseStyles.icon}>{contact.icon}</div>
        <div style={baseStyles.value}>{contact.displayValue}</div>
      </>
    );

    if (contact.link) {
      return (
        <a 
          key={index} 
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          style={baseStyles.item}
          onMouseEnter={() => setHoveredContact(index)}
          onMouseLeave={() => setHoveredContact(null)}
          title={contact.originalValue}
        >
          {content}
        </a>
      );
    }

    return (
      <div 
        key={index} 
        style={baseStyles.item}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  };

  // RENDER PROJECT ITEM - Defined first to avoid hoisting issues
  const renderSidebarProjectItem = useMemo(() => (project, index) => {
    const isHovered = hoveredProject === index;
    
    const baseStyles = {
      container: {
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        padding: layoutConfig.projectPadding,
        borderRadius: '5px',
        border: `1px solid ${colorSchemeConfig.gray}80`,
        borderLeft: `4px solid ${colorSchemeConfig.primary}`,
        transition: 'background 0.2s ease',
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      name: {
        fontSize: `${layoutConfig.smallTextFont}pt`,
        fontWeight: 700,
        color: colorSchemeConfig.white,
        margin: '0 0 1mm 0',
        lineHeight: 1.2,
        wordWrap: 'break-word'
      },
      role: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.primary,
        fontWeight: 500,
        lineHeight: 1.2,
        margin: '0 0 1.5mm 0',
        wordWrap: 'break-word'
      },
      link: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: '#FF8A8A',
        textDecoration: 'none',
        wordBreak: 'break-all',
        fontWeight: 500,
        display: 'block',
        overflow: 'visible',
        whiteSpace: 'normal'
      }
    };

    return (
      <div 
        key={index} 
        style={baseStyles.container}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
        className="template3-print-item"
      >
        <div>
          <h5 style={baseStyles.name}>{TemplateHelpers.safeString(project.name)}</h5>
          {project.role && <div style={baseStyles.role}>{TemplateHelpers.safeString(project.role)}</div>}
          {project.link && (
            <a 
              href={TemplateHelpers.formatLink(project.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              style={baseStyles.link}
              title={TemplateHelpers.safeString(project.link)}
            >
              {project.link}
            </a>
          )}
        </div>
      </div>
    );
  }, [colorSchemeConfig, layoutConfig, hoveredProject]);

  // RENDER EXPERIENCE ITEM - Enhanced contrast with 4 achievements max
  // Dates have no borders, location color white
  const renderExperienceItem = useMemo(() => (exp, index) => {
    const hasBulletPoints = exp.hasBulletPoints && exp.bulletPoints && exp.bulletPoints.length > 0;
    const experienceType = EXPERIENCE_TYPES[exp.type] || EXPERIENCE_TYPES.job;
    const isHovered = hoveredExperience === index;
    const isMobile = windowWidth < 768;
    
    const baseStyles = {
      container: {
        background: colorSchemeConfig.card,
        padding: layoutConfig.cardPadding,
        borderRadius: '6px',
        borderLeft: `3px solid ${colorSchemeConfig.primary}`,
        boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: 0,
        transition: 'box-shadow 0.2s ease',
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      header: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-start',
        marginBottom: layoutConfig.bulletSpacing,
        gap: isMobile ? '1mm' : 0
      },
      title: {
        fontSize: `${layoutConfig.bodyFont}pt`,
        fontWeight: 700,
        color: colorSchemeConfig.white,
        margin: '0 0 1mm 0',
        lineHeight: 1.2
      },
      subtitle: {
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.primary,
        fontWeight: 600,
        lineHeight: 1.3,
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '1mm' : '2mm',
        flexWrap: 'wrap'
      },
      // Location - WHITE color with icon
      location: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1mm',
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.white, // White color
        fontWeight: 400,
        whiteSpace: 'normal',
        wordBreak: 'break-word'
      },
      // Period - NO BORDER, white color, normal placement
      period: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.white, // White color
        fontWeight: 500,
        whiteSpace: isMobile ? 'normal' : 'nowrap',
        // Removed background and border
        alignSelf: isMobile ? 'flex-start' : 'auto'
      },
      achievementsSection: {
        marginTop: layoutConfig.bulletSpacing,
        paddingTop: layoutConfig.bulletSpacing,
        borderTop: `1px solid ${colorSchemeConfig.gray}80`
      },
      achievementsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: layoutConfig.bulletSpacing
      },
      achievementItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: layoutConfig.bulletSpacing,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        lineHeight: currentFonts.lineHeight,
        opacity: 1,
        fontWeight: 400
      },
      achievementBullet: {
        color: colorSchemeConfig.primary,
        fontWeight: 'bold',
        flexShrink: 0,
        marginTop: '1px',
        fontSize: `${layoutConfig.smallTextFont}pt`
      },
      achievementText: {
        flex: 1,
        fontWeight: 400,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',
        color: colorSchemeConfig.light
      },
      descriptionSection: {
        background: `${colorSchemeConfig.primary}30`,
        padding: '2.5mm 3mm',
        borderRadius: '6px',
        borderLeft: `2px solid ${colorSchemeConfig.primary}`,
        marginTop: layoutConfig.bulletSpacing
      },
      descriptionText: {
        margin: 0,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        lineHeight: currentFonts.lineHeight,
        textAlign: 'left',
        fontWeight: 400,
        wordWrap: 'break-word',
        opacity: 1
      },
      technologies: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: layoutConfig.bulletSpacing,
        marginTop: layoutConfig.bulletSpacing,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        width: '100%',
        paddingTop: layoutConfig.bulletSpacing,
        borderTop: `1px solid ${colorSchemeConfig.gray}80`
      },
      technologiesLabel: {
        fontWeight: 600,
        color: colorSchemeConfig.white,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        marginRight: '1.5mm',
        fontSize: `${layoutConfig.smallTextFont}pt`
      },
      techTags: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: layoutConfig.bulletSpacing,
        alignItems: 'center',
        flex: 1,
        minWidth: 0
      },
      techTag: {
        background: `${colorSchemeConfig.primary}40`,
        padding: '0.5mm 2mm',
        borderRadius: '10px',
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.white,
        border: `1px solid ${colorSchemeConfig.primary}80`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '120px',
        display: 'inline-block',
        fontWeight: 500
      }
    };

    return (
      <div 
        key={index} 
        style={baseStyles.container}
        onMouseEnter={() => setHoveredExperience(index)}
        onMouseLeave={() => setHoveredExperience(null)}
        className="template3-print-item"
      >
        <div>
          {/* Header */}
          <div style={baseStyles.header}>
            <div>
              <div>
                <h4 style={baseStyles.title}>
                  <span style={{ marginRight: '1mm' }}>{experienceType.icon}</span>
                  {TemplateHelpers.safeString(exp.title)}
                </h4>
              </div>
              <div style={baseStyles.subtitle}>
                <span>{TemplateHelpers.safeString(exp.organization)}</span>
                {exp.location && (
                  <span style={baseStyles.location}>
                    <span> | </span>
                    <span>Ã°Å¸â€œÂ</span> {TemplateHelpers.safeString(exp.location)}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div style={baseStyles.period}>
                {TemplateHelpers.formatDate(exp.startDate)} Ã¢â‚¬â€œ {TemplateHelpers.formatDate(exp.endDate)}
              </div>
            </div>
          </div>
          
          {/* Content - Now can show up to 4 bullet points */}
          {hasBulletPoints ? (
            exp.bulletPoints && exp.bulletPoints.length > 0 && (
              <div style={baseStyles.achievementsSection}>
                <div style={baseStyles.achievementsList}>
                  {exp.bulletPoints.map((bullet, idx) => (
                    <div key={idx} style={baseStyles.achievementItem}>
                      <span style={baseStyles.achievementBullet}>Ã¢â‚¬Â¢</span>
                      <span style={baseStyles.achievementText}>
                        {TemplateHelpers.safeString(bullet)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            exp.description && (
              <div style={baseStyles.descriptionSection}>
                <p style={baseStyles.descriptionText}>
                  {TemplateHelpers.safeString(exp.description)}
                </p>
              </div>
            )
          )}
          
          {/* TECHNOLOGIES */}
          {exp.technologies && exp.technologies.length > 0 && (
            <div style={baseStyles.technologies}>
              <span style={baseStyles.technologiesLabel}>Technologies:</span>
              <div style={baseStyles.techTags}>
                {exp.technologies.slice(0, 5).map((tech, idx) => (
                  <span key={idx} style={baseStyles.techTag}>
                    {TemplateHelpers.safeString(tech)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }, [colorSchemeConfig, layoutConfig, currentFonts, hoveredExperience, windowWidth]);

  // RENDER EDUCATION ITEM - Added location icon, white color for location
  const renderEducationItem = useMemo(() => (edu, index) => {
    const hasBulletPoints = edu.hasBulletPoints;
    const isHovered = hoveredEducation === index;
    const isMobile = windowWidth < 768;
    
    const baseStyles = {
      container: {
        background: colorSchemeConfig.card,
        padding: layoutConfig.cardPadding,
        borderRadius: '6px',
        borderLeft: `3px solid ${colorSchemeConfig.primary}`,
        boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: 0,
        transition: 'box-shadow 0.2s ease',
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      header: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-start',
        marginBottom: layoutConfig.bulletSpacing,
        gap: isMobile ? '1mm' : 0
      },
      title: {
        fontSize: `${layoutConfig.bodyFont}pt`,
        fontWeight: 700,
        color: colorSchemeConfig.white,
        margin: '0 0 1mm 0',
        lineHeight: 1.2
      },
      // Period - white color, no border (matching experience)
      period: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.white,
        fontWeight: 500,
        whiteSpace: isMobile ? 'normal' : 'nowrap',
        alignSelf: isMobile ? 'flex-start' : 'auto'
      },
      // Institution details row with location and GPA side by side
      institutionDetailsRow: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2mm',
        marginTop: '1mm',
        marginBottom: '2mm',
        width: '100%'
      },
      institutionName: {
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.primary,
        fontWeight: 600,
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        flex: '0 0 auto',
        marginRight: '2mm'
      },
      // Location and GPA container - flex wrap for responsive
      locationGpaContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2mm',
        flex: '1 1 auto'
      },
      // Location - WITH ICON, white color
      location: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1mm',
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.white, // White color
        fontWeight: 400,
        whiteSpace: 'normal',
        wordBreak: 'break-word'
      },
      // GPA - plain text, light color
      gpa: {
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        fontWeight: 400,
        whiteSpace: 'nowrap'
      },
      major: {
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.primary,
        marginBottom: '2mm',
        marginTop: '1mm',
        fontWeight: 500
      },
      // Honors container
      honorsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '2mm',
        marginTop: '2mm',
        padding: '1.5mm 2mm',
        background: `${colorSchemeConfig.primary}20`,
        borderRadius: '4px',
        borderLeft: `2px solid ${colorSchemeConfig.primary}`,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        fontFamily: 'inherit'
      },
      honorsText: {
        lineHeight: 1.4,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        fontWeight: 400
      },
      achievementsSection: {
        marginTop: layoutConfig.bulletSpacing,
        paddingTop: layoutConfig.bulletSpacing,
        borderTop: `1px solid ${colorSchemeConfig.gray}80`
      },
      achievementsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: layoutConfig.bulletSpacing
      },
      achievementItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: layoutConfig.bulletSpacing,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        lineHeight: currentFonts.lineHeight,
        opacity: 1,
        fontWeight: 400
      },
      achievementBullet: {
        color: colorSchemeConfig.primary,
        fontWeight: 'bold',
        flexShrink: 0,
        marginTop: '1px',
        fontSize: `${layoutConfig.smallTextFont}pt`
      },
      achievementText: {
        flex: 1,
        fontWeight: 400,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',
        color: colorSchemeConfig.light
      },
      descriptionSection: {
        background: `${colorSchemeConfig.primary}30`,
        padding: '2.5mm 3mm',
        borderRadius: '6px',
        borderLeft: `2px solid ${colorSchemeConfig.primary}`,
        marginTop: layoutConfig.bulletSpacing
      },
      descriptionText: {
        margin: 0,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.light,
        lineHeight: currentFonts.lineHeight,
        textAlign: 'left',
        fontWeight: 400,
        wordWrap: 'break-word',
        opacity: 1
      }
    };

    return (
      <div 
        key={index} 
        style={baseStyles.container}
        onMouseEnter={() => setHoveredEducation(index)}
        onMouseLeave={() => setHoveredEducation(null)}
        className="template3-print-item"
      >
        <div>
          {/* Header with degree and dates */}
          <div style={baseStyles.header}>
            <div>
              <div>
                <h4 style={baseStyles.title}>
                  Ã°Å¸Å½â€œ {TemplateHelpers.safeString(edu.degree)}
                </h4>
              </div>
            </div>
            <div>
              <div style={baseStyles.period}>
                {TemplateHelpers.formatDate(edu.startDate)} Ã¢â‚¬â€œ {TemplateHelpers.formatDate(edu.endDate)}
              </div>
            </div>
          </div>
          
          {/* Institution details row with location and GPA side by side */}
          <div style={baseStyles.institutionDetailsRow}>
            <span style={baseStyles.institutionName}>
              {TemplateHelpers.safeString(edu.institution)}
            </span>
            
            <div style={baseStyles.locationGpaContainer}>
              {/* Location - WITH ICON, white color */}
              {edu.location && edu.location.trim() && (
                <span style={baseStyles.location}>
                  <span>Ã°Å¸â€œÂ</span> {TemplateHelpers.safeString(edu.location)}
                </span>
              )}
              
              {/* GPA - plain text, separator if both exist */}
              {edu.gpaDisplay && edu.gpaDisplay.trim() && (
                <>
                  {edu.location && edu.location.trim() && (
                    <span style={{ color: colorSchemeConfig.gray }}>Ã¢â‚¬Â¢</span>
                  )}
                  <span style={baseStyles.gpa}>
                    {edu.gpaDisplay}
                  </span>
                </>
              )}
            </div>
          </div>
          
          {/* Major if available */}
          {edu.major && (
            <div style={baseStyles.major}>
              Major: {edu.major}
            </div>
          )}
          
          {/* Honors - with subtle styling */}
          {edu.honors && edu.honors.trim() && (
            <div style={baseStyles.honorsContainer}>
              <span style={baseStyles.honorsText}>{edu.honors}</span>
            </div>
          )}
          
          {/* Content - Bullet points or description */}
          {hasBulletPoints ? (
            edu.bulletPoints && edu.bulletPoints.length > 0 && (
              <div style={baseStyles.achievementsSection}>
                <div style={baseStyles.achievementsList}>
                  {edu.bulletPoints.map((bullet, idx) => (
                    <div key={idx} style={baseStyles.achievementItem}>
                      <span style={baseStyles.achievementBullet}>Ã¢â‚¬Â¢</span>
                      <span style={baseStyles.achievementText}>
                        {TemplateHelpers.safeString(bullet)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            edu.description && (
              <div style={baseStyles.descriptionSection}>
                <p style={baseStyles.descriptionText}>
                  {TemplateHelpers.safeString(edu.description)}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }, [colorSchemeConfig, layoutConfig, currentFonts, hoveredEducation, windowWidth]);

  // RENDER CERTIFICATION ITEM - Date now has no borders, white color
  const renderCertificationItem = useMemo(() => (cert, index) => {
    const isHovered = hoveredCertification === index;
    const isMobile = windowWidth < 768;
    
    const baseStyles = {
      container: {
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        padding: layoutConfig.certPadding,
        borderRadius: '5px',
        border: `1px solid ${colorSchemeConfig.gray}80`,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.white,
        lineHeight: 1.3,
        borderLeft: `4px solid ${colorSchemeConfig.primary}`,
        transition: 'background 0.2s ease',
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      name: {
        fontWeight: 700,
        margin: '0 0 1mm 0',
        color: colorSchemeConfig.white,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        lineHeight: 1.1,
        wordWrap: 'break-word'
      },
      issuer: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.primary,
        marginBottom: '1mm',
        wordWrap: 'break-word'
      },
      // Date - NO BORDER, white color
      date: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.white, // White color
        fontWeight: 400,
        display: 'inline-block'
        // Removed background and border
      }
    };

    return (
      <div 
        key={index} 
        style={baseStyles.container}
        onMouseEnter={() => setHoveredCertification(index)}
        onMouseLeave={() => setHoveredCertification(null)}
        className="template3-print-item"
      >
        <div>
          <div style={baseStyles.name}>{cert.name}</div>
          {cert.issuer && <div style={baseStyles.issuer}>by {cert.issuer}</div>}
          {cert.dateEarned && <div style={baseStyles.date}>{cert.dateEarned}</div>}
        </div>
      </div>
    );
  }, [colorSchemeConfig, layoutConfig, hoveredCertification, windowWidth]);

  // RENDER AWARD ITEM - Date now has no borders, white color
  const renderAwardItem = useMemo(() => (award, index) => {
    const isHovered = hoveredAward === index;
    const isMobile = windowWidth < 768;
    
    const baseStyles = {
      container: {
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        padding: layoutConfig.awardPadding,
        borderRadius: '5px',
        border: `1px solid ${colorSchemeConfig.gray}80`,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        color: colorSchemeConfig.white,
        lineHeight: 1.3,
        borderLeft: `4px solid ${colorSchemeConfig.primary}`,
        transition: 'background 0.2s ease',
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      name: {
        fontWeight: 700,
        margin: '0 0 1mm 0',
        color: colorSchemeConfig.white,
        fontSize: `${layoutConfig.smallTextFont}pt`,
        lineHeight: 1.1,
        wordWrap: 'break-word'
      },
      issuer: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.primary,
        marginBottom: '1mm',
        wordWrap: 'break-word'
      },
      // Date - NO BORDER, white color
      date: {
        fontSize: `${layoutConfig.tinyTextFont}pt`,
        color: colorSchemeConfig.white, // White color
        fontWeight: 400,
        display: 'inline-block'
        // Removed background and border
      }
    };

    return (
      <div 
        key={index} 
        style={baseStyles.container}
        onMouseEnter={() => setHoveredAward(index)}
        onMouseLeave={() => setHoveredAward(null)}
        className="template3-print-item"
      >
        <div>
          <div style={baseStyles.name}>{award.name}</div>
          {award.issuer && <div style={baseStyles.issuer}>by {award.issuer}</div>}
          {award.dateReceived && <div style={baseStyles.date}>{award.dateReceived}</div>}
        </div>
      </div>
    );
  }, [colorSchemeConfig, layoutConfig, hoveredAward, windowWidth]);

  // SKILL RENDERER - Updated for vertical layout (one below another)
  const renderSkillItem = useMemo(() => (skill, index) => {
    const isHovered = hoveredSkill === `skill-${index}`;
    
    return (
      <div 
        key={index} 
        style={{
          ...templateBaseStyles.skillItem,
          background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          border: `1px solid ${colorSchemeConfig.gray}80`
        }}
        onMouseEnter={() => setHoveredSkill(`skill-${index}`)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div style={templateBaseStyles.skillName}>
          {TemplateHelpers.getItemName.skill(skill)}
        </div>
      </div>
    );
  }, [hoveredSkill, templateBaseStyles.skillItem, templateBaseStyles.skillName, colorSchemeConfig]);

  // SUMMARY RENDERER - Enhanced contrast with reduced top margin
  const renderSummaryAsExperienceBox = useMemo(() => () => {
    const baseStyles = {
      section: {
        marginTop: layoutConfig.summaryMarginTop, // Now 0mm
        marginBottom: layoutConfig.summaryMarginBottom // Now 2mm
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        gap: '1mm',
        marginBottom: '2mm',
        paddingBottom: '1mm'
      },
      headerIcon: {
        fontSize: `${layoutConfig.sectionTitleFont}pt`,
        color: colorSchemeConfig.primary,
        width: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      headerTitle: {
        fontSize: `${layoutConfig.sectionTitleFont}pt`,
        fontWeight: 600,
        color: colorSchemeConfig.white,
        textTransform: 'uppercase',
        letterSpacing: '0.8px',
        margin: 0
      },
      box: {
        background: colorSchemeConfig.card,
        padding: layoutConfig.cardPadding,
        borderRadius: '6px',
        borderLeft: `4px solid ${colorSchemeConfig.primary}`,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        marginTop: 0,
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      },
      content: {
        fontSize: `${layoutConfig.bodyFont}pt`,
        color: colorSchemeConfig.light,
        lineHeight: currentFonts.lineHeight,
        margin: 0,
        opacity: 1,
        fontWeight: 400,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left'
      }
    };

    return (
      <section style={baseStyles.section} className="template3-print-section">
        <div style={baseStyles.header}>
          <div style={baseStyles.headerIcon}>Ã¢â‚¬â€</div>
          <h2 style={baseStyles.headerTitle}>{getLocalizedText('professionalSummary')}</h2>
        </div>
        <div style={baseStyles.box}>
          <div>
            <p style={baseStyles.content}>
              {TemplateHelpers.safeString(contentAnalysis.limitedSummary)}
            </p>
          </div>
        </div>
      </section>
    );
  }, [contentAnalysis.limitedSummary, colorSchemeConfig, layoutConfig, currentFonts, getLocalizedText]);

  // Render optional sections in correct order
  const optionalSectionsRendered = optionalSections.map((section) => {
    if (section === 'projects' && limitedProjects.length > 0) {
      return (
        <div key="projects" style={templateBaseStyles.sidebarSection} className="template3-print-section">
          <SectionTitle text={getLocalizedText('projects')} />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: layoutConfig.itemGap,
            marginTop: '2mm'
          }}>
            {limitedProjects.map((project, index) => renderSidebarProjectItem(project, index))}
          </div>
        </div>
      );
    }
    
    if (section === 'certifications' && limitedCertifications.length > 0) {
      return (
        <div key="certifications" style={templateBaseStyles.sidebarSection} className="template3-print-section">
          <SectionTitle text={getLocalizedText('certifications')} />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: layoutConfig.itemGap,
            marginTop: '2mm'
          }}>
            {limitedCertifications.map((cert, index) => renderCertificationItem(cert, index))}
          </div>
        </div>
      );
    }
    
    if (section === 'awards' && limitedAwards.length > 0) {
      return (
        <div key="awards" style={templateBaseStyles.sidebarSection} className="template3-print-section">
          <SectionTitle text={getLocalizedText('awards')} />
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: layoutConfig.itemGap,
            marginTop: '2mm'
          }}>
            {limitedAwards.map((award, index) => renderAwardItem(award, index))}
          </div>
        </div>
      );
    }
    
    return null;
  });

  const isMobile = windowWidth < 768;

  // Main render
  return (
    <>
      {/* Loading overlay */}
      {loading && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255,255,255,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <LoadingSpinner 
            size="lg" 
            color={colorSchemeConfig.primary} 
            text="Loading template..." 
          />
        </div>
      )}
      
      {/* Main template - NO DEBUG OVERLAY */}
      <div 
        ref={templateRef}
        style={{
          ...templateBaseStyles.container,
          ...(isExporting ? { boxShadow: 'none', border: 'none' } : {})
        }}
        lang={language}
        dir={getTextDirection(language)}
        data-template-version="3.9.7"
        data-template-locked="true"
        className="template3-print"
      >
        {/* Screen reader only content */}
        <div style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}>
          Resume of {nameAnalysis.name}{professionalTitle ? `, ${professionalTitle}` : ''}
        </div>

        {/* Sidebar */}
        <aside style={templateBaseStyles.sidebar} className="template3-print-sidebar">
          {/* Contact Info - Using contactInfo array like Template1 */}
          {contactInfo.length > 0 && (
            <div style={{ ...templateBaseStyles.sidebarSection, marginTop: layoutConfig.contactMarginTop }}>
              <SectionTitle text={getLocalizedText('contact')} />
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: layoutConfig.itemGap,
                marginTop: '2mm'
              }}>
                {contactInfo.map((contact, index) => renderContactItem(contact, index))}
              </div>
            </div>
          )}

          {/* Skills - 7 items max with VERTICAL LAYOUT (one below another) */}
          {enhancedSkills.length > 0 && (
            <div style={templateBaseStyles.sidebarSection}>
              <SectionTitle text={getLocalizedText('skills')} />
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: layoutConfig.itemGap,
                marginTop: '2mm'
              }}>
                {enhancedSkills.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          )}

          {/* Optional Sections - Projects, Certifications, Awards in order */}
          {optionalSectionsRendered}
        </aside>

        {/* Main Content */}
        <main style={templateBaseStyles.main} className="template3-print-main">
          {/* Name and Job Title */}
          <section style={{ 
            textAlign: 'left', 
            marginBottom: layoutConfig.headerMarginBottom, // Now 2mm (reduced from 6mm)
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%'
          }}>
            <div>
              {nameAnalysis.name && (
                <h1 style={{
                  fontSize: isMobile ? '28pt' : nameAnalysis.nameFontSize,
                  fontWeight: 700,
                  color: colorSchemeConfig.white,
                  margin: '0 0 1mm 0',
                  lineHeight: 1.1,
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  textAlign: 'left',
                  width: '100%'
                }}>
                  {nameAnalysis.name}
                </h1>
              )}
              {professionalTitle && (
                <>
                  <div>
                    <h2 style={{
                      fontSize: isMobile ? '11pt' : `${layoutConfig.titleFont}pt`,
                      fontWeight: 500,
                      color: colorSchemeConfig.primary,
                      margin: 0,
                      lineHeight: 1.2,
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                      textAlign: 'left',
                      width: '100%'
                    }}>
                      {professionalTitle}
                    </h2>
                  </div>
                  {/* Line below job title */}
                  <div style={{
                    height: '2px',
                    background: colorSchemeConfig.gray,
                    width: '100%',
                    marginTop: isMobile ? '2mm' : '3mm'
                  }}></div>
                </>
              )}
            </div>
          </section>

          {/* Summary Section - Now higher up with reduced top margin */}
          {layoutConfig.showSummary && contentAnalysis.limitedSummary && (
            renderSummaryAsExperienceBox()
          )}

          {/* Experience Timeline - 2 items max with 4 achievements each */}
          {contentAnalysis.optimizedExperiences.length > 0 && (
            <section style={{ marginTop: 0 }} className="template3-print-section">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1mm',
                marginBottom: '2mm',
                paddingBottom: '1mm'
              }}>
                <div style={{
                  fontSize: `${layoutConfig.sectionTitleFont}pt`,
                  color: colorSchemeConfig.primary,
                  width: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>Ã¢â‚¬â€</div>
                <MainSectionTitle text={getLocalizedText('workExperience')} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: layoutConfig.sectionGap, // 2mm gap between items
                marginTop: '2mm'
              }}>
                {contentAnalysis.optimizedExperiences.map((exp, index) => renderExperienceItem(exp, index))}
              </div>
            </section>
          )}

          {/* EDUCATION SECTION - 1 item max with GPA and Honors support */}
          {contentAnalysis.optimizedEducation.length > 0 && (
            <section style={{ 
              marginTop: layoutConfig.sectionGap // 2mm gap from previous section
            }} className="template3-print-section">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1mm',
                marginBottom: '2mm',
                paddingBottom: '1mm'
              }}>
                <div style={{
                  fontSize: `${layoutConfig.sectionTitleFont}pt`,
                  color: colorSchemeConfig.primary,
                  width: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>Ã¢â‚¬â€</div>
                <MainSectionTitle text={getLocalizedText('education')} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: layoutConfig.sectionGap, // 2mm gap between items
                marginTop: '2mm'
              }}>
                {contentAnalysis.optimizedEducation.map((edu, index) => renderEducationItem(edu, index))}
              </div>
            </section>
          )}
        </main>

        {/* Print styles - Enhanced for PDF */}
        <style>{`
          @media print {
            .template3-print {
              box-shadow: none;
              border: none;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .template3-print-sidebar {
              background: ${colorSchemeConfig.card} !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .template3-print-main {
              background: ${colorSchemeConfig.dark} !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .template3-print-item {
              break-inside: avoid;
              page-break-inside: avoid;
            }
            .template3-print-section {
              break-inside: avoid;
            }
            .template3-print-name,
            .template3-print-title,
            .template3-print-degree {
              white-space: normal !important;
              word-break: break-word !important;
              overflow-wrap: break-word !important;
            }
            .template3-print-bullet {
              color: ${colorSchemeConfig.primary} !important;
            }
            /* Force maximum contrast in print */
            h1, h2, h3, h4, h5, h6, p, span, div, a {
              color-adjust: exact !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            /* Ensure links are visible in print */
            a {
              text-decoration: underline !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

Template3.displayName = 'Template3';

export default Template3;