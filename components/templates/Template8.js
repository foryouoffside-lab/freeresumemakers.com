import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== ICON MAPPING - LinkedIn icon with blue color only =====
const T8_ICON_MAPPING = Object.freeze({
  email: '✉️',
  phone: '📱',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color ONLY for the icon
  github: '⌨️',
  portfolio: '🌐',
  website: '🌐',
  default: '📌'
});

// ===== CONSTANTS - LOCKED VALUES =====
const TEMPLATE_CONSTANTS = Object.freeze({
  EXPERIENCE_LIMIT: 2,
  SKILLS_LIMIT: 7,
  EDUCATION_LIMIT: 1,
  PROJECTS_LIMIT: 1,
  CERTIFICATIONS_LIMIT: 1,
  AWARDS_LIMIT: 1,
  BULLET_POINTS_PER_ITEM: 4,
  MAX_BULLET_LENGTH: 140,
  MAX_SUMMARY_WORDS: 80,
  CONTACT_ITEMS: 4,
  LANGUAGES_LIMIT: 5
});

// ===== HELPER FUNCTIONS =====
const Helpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
  },

  safeArray: (data) => Array.isArray(data) ? data.filter(item => item != null) : [],

  formatDate: (dateString) => {
    if (!dateString) return '';
    
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
      return 'Present';
    }
    
    if (/^\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    if (/^[A-Za-z]{3,9}\s+\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return dateString;
  },

  formatDateRange: (start, end) => {
    const startDate = Helpers.formatDate(start);
    const endDate = end ? Helpers.formatDate(end) : 'Present';
    
    if (!startDate && !endDate) return '';
    if (startDate && !endDate) return startDate;
    if (!startDate && endDate) return endDate;
    
    if (/^\d{4}$/.test(startDate) && /^\d{4}$/.test(endDate) && startDate === endDate) {
      return startDate;
    }
    
    return `${startDate} – ${endDate}`;
  },

  formatEducationDate: (startYear, endYear, isCurrent) => {
    if (!startYear && !endYear) return '';
    
    const formatYear = (year) => {
      if (!year) return '';
      if (year.toLowerCase() === 'present') return 'Present';
      
      if (year.includes('-')) {
        try {
          const [yearNum, monthNum] = year.split('-');
          const date = new Date(parseInt(yearNum), parseInt(monthNum) - 1);
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        } catch {
          return year;
        }
      }
      
      return year;
    };
    
    const formattedStart = formatYear(startYear);
    const formattedEnd = isCurrent ? 'Present' : formatYear(endYear);
    
    if (!formattedStart && !formattedEnd) return '';
    if (formattedStart && !formattedEnd) return formattedStart;
    if (!formattedStart && formattedEnd) return formattedEnd;
    
    return `${formattedStart} – ${formattedEnd}`;
  },

  getSkillName: (skill) => {
    if (typeof skill === 'object') return skill.name || skill.skill || '';
    return Helpers.safeString(skill);
  },

  getLanguageName: (lang) => {
    if (!lang) return '';
    if (typeof lang === 'object') return lang.name || lang.language || lang.lang || '';
    return Helpers.safeString(lang);
  },

  cleanBullet: (bullet) => {
    let cleaned = Helpers.safeString(bullet);
    cleaned = cleaned.replace(/^[•\*\-]\s*/, '');
    return cleaned;
  },

  cleanLanguageName: (lang) => {
    const name = Helpers.getLanguageName(lang);
    return name.replace(/\s*\([^)]*\)/g, '').trim();
  },

  // Format GPA for display
  formatGPA: (gpa, scale) => {
    if (!gpa) return '';
    
    const gpaValue = Helpers.safeString(gpa);
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

  // ===== LINK FORMATTING FUNCTIONS =====
  formatLinkedInLink: (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = Helpers.safeString(linkedin).trim();
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
    
    return `https://www.linkedin.com/in/${username}`;
  },

  formatLinkedInDisplay: (linkedin) => {
    if (!linkedin) return '';
    
    let linkedinUrl = Helpers.safeString(linkedin);
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
  },

  formatGitHubLink: (github) => {
    if (!github) return null;
    
    let githubUrl = Helpers.safeString(github).trim();
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
    
    let displayValue = Helpers.safeString(github)
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
    
    let portfolioUrl = Helpers.safeString(portfolio).trim();
    
    if (!portfolioUrl.startsWith('http://') && !portfolioUrl.startsWith('https://')) {
      return `https://${portfolioUrl}`;
    }
    
    return portfolioUrl;
  },

  formatPortfolioDisplay: (portfolio) => {
    if (!portfolio) return '';
    
    let displayValue = Helpers.safeString(portfolio)
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');
    
    if (displayValue.length > 30) {
      displayValue = displayValue.substring(0, 27) + '...';
    }
    
    return displayValue || 'Portfolio';
  },

  // Contact helper functions
  getContactLink: (type, value) => {
    if (!value) return null;
    
    switch(type) {
      case 'email':
        return `mailto:${value}`;
      case 'phone':
        return `tel:${value.replace(/[^0-9+]/g, '')}`;
      case 'linkedin':
        return Helpers.formatLinkedInLink(value);
      case 'github':
        return Helpers.formatGitHubLink(value);
      case 'portfolio':
      case 'website':
        return Helpers.formatPortfolioLink(value);
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
        return Helpers.formatLinkedInDisplay(value);
      case 'github':
        return Helpers.formatGitHubDisplay(value);
      case 'portfolio':
      case 'website':
        return Helpers.formatPortfolioDisplay(value);
      default:
        return value;
    }
  },

  getContactIcon: (type) => {
    const iconConfig = T8_ICON_MAPPING[type] || T8_ICON_MAPPING.default;
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  },

  getContactIconColor: (type) => {
    const iconConfig = T8_ICON_MAPPING[type];
    if (typeof iconConfig === 'object' && iconConfig.color) {
      return iconConfig.color; // Only return color for LinkedIn icon
    }
    return null;
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

  // Format project link to show full HTTPS URL
  formatProjectLinkForDisplay: (link) => {
    if (!link) return '';
    let formatted = Helpers.safeString(link);
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      return `https://${formatted}`;
    }
    return formatted;
  }
});

// ===== INLINE STYLES =====
const createStyles = () => {
  const primaryColor = '#000000';

  return {
    template: {
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#000000',
      width: '210mm',
      minHeight: '297mm',
      background: '#ffffff',
      margin: 0,
      padding: '3mm',
      position: 'relative',
      boxSizing: 'border-box',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: '32% 68%',
      gap: '3mm',
      minHeight: '100%'
    },

    // Sidebar styles
    sidebar: {
      background: '#f8f9fa',
      padding: '3mm 3mm',
      borderRadius: '4px 0 0 4px',
      borderRight: `2px solid ${primaryColor}`,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '3mm'
    },

    mainContent: {
      padding: '2mm 3mm'
    },

    // Profile section
    profileImage: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      border: `3px solid ${primaryColor}`,
      overflow: 'hidden',
      margin: '0 auto 1mm auto',
      background: '#e8e8e8'
    },

    profileImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },

    name: {
      fontSize: '29px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2mm 0',
      lineHeight: 1.2,
      textAlign: 'center',
      wordWrap: 'break-word'
    },

    // Section headings
    sectionHeading: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#000000',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 2mm 0',
      paddingBottom: '1mm',
      borderBottom: `2px solid ${primaryColor}`,
      lineHeight: 1.2
    },

    // Contact section
    contactSection: {
      marginTop: '1mm',
      marginBottom: '3mm'
    },

    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5mm',
      marginTop: '1mm'
    },

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '2mm',
      padding: '0.8mm 0',
      fontSize: '12px',
      lineHeight: 1.3,
      borderBottom: '1px solid #dddddd',
      wordWrap: 'break-word',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#000000'
    },

    contactIcon: {
      fontSize: '12px',
      minWidth: '16px',
      flexShrink: 0,
      textAlign: 'center'
    },

    contactValue: {
      flex: 1,
      wordBreak: 'break-word',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#000000'
    },

    // Skills - ONE PER LINE
    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5mm',
      marginTop: '1mm'
    },

    skillItem: {
      background: '#ffffff',
      padding: '2mm 3mm',
      borderRadius: '3px',
      border: '1px solid #cccccc',
      fontSize: '12px',
      fontWeight: 600,
      color: '#000000',
      width: '100%',
      boxSizing: 'border-box',
      display: 'block'
    },

    // Languages
    languagesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5mm',
      marginTop: '1mm'
    },

    languageItem: {
      background: '#ffffff',
      padding: '2mm 3mm',
      borderRadius: '3px',
      border: '1px solid #cccccc',
      fontSize: '12px',
      fontWeight: 600,
      color: '#000000',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      boxSizing: 'border-box'
    },

    // Summary
    summaryBox: {
      padding: '3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      borderLeft: `3px solid ${primaryColor}`,
      marginBottom: '3mm',
      fontSize: '13px',
      lineHeight: 1.5,
      color: '#222222'
    },

    // Experience items
    experienceItem: {
      marginBottom: '3mm',
      padding: '3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      breakInside: 'avoid',
      borderLeft: `3px solid ${primaryColor}`
    },

    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2mm',
      marginBottom: '2mm',
      flexWrap: 'wrap'
    },

    experienceTitle: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      flex: 1
    },

    experienceCompany: {
      fontSize: '13px',
      color: '#222222',
      fontWeight: 600,
      margin: '1mm 0 0 0',
      lineHeight: 1.2
    },

    experienceLocation: {
      fontSize: '12px',
      color: '#333333',
      marginLeft: '2mm',
      fontWeight: 400,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1mm'
    },

    locationIcon: {
      fontSize: '11px',
      marginRight: '1mm'
    },

    experiencePeriod: {
      fontSize: '12px',
      color: '#111111',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontWeight: 500,
      alignSelf: 'flex-start',
      background: 'transparent',
      padding: 0,
      border: 'none'
    },

    bulletList: {
      listStyle: 'none',
      padding: 0,
      margin: '2mm 0 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1mm'
    },

    bulletItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '2mm',
      fontSize: '12px',
      color: '#222222',
      lineHeight: 1.4
    },

    bulletPoint: {
      color: primaryColor,
      fontWeight: 'bold',
      flexShrink: 0,
      fontSize: '13px'
    },

    // Education items
    educationGrid: {
      display: 'grid',
      gap: '2mm',
      marginTop: '2mm'
    },

    educationItem: {
      padding: '3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: `3px solid ${primaryColor}`
    },

    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2mm',
      marginBottom: '1mm',
      flexWrap: 'wrap'
    },

    educationDegree: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      flex: 1
    },

    educationDate: {
      fontSize: '11px',
      color: '#111111',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontWeight: 500,
      alignSelf: 'flex-start',
      background: 'transparent',
      padding: 0,
      border: 'none'
    },

    educationInstitutionRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2mm',
      marginBottom: '1mm',
      fontSize: '12px',
      color: '#222222',
      fontWeight: 600,
      lineHeight: 1.2
    },

    educationInstitution: {
      fontWeight: 600,
      color: '#222222'
    },

    educationLocation: {
      fontSize: '11px',
      color: '#333333',
      fontWeight: 400,
      display: 'flex',
      alignItems: 'center',
      gap: '1mm'
    },

    // Location and GPA row
    locationGpaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2mm',
      marginTop: '1mm',
      fontSize: '11px'
    },

    gpaBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1mm',
      background: 'transparent',
      padding: 0,
      borderRadius: 0,
      border: 'none',
      fontSize: '11px',
      color: '#111111',
      fontWeight: 600
    },

    // Honors
    honorsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '2mm',
      marginTop: '2mm',
      padding: '2mm',
      background: '#f0f0f0',
      borderRadius: '4px',
      borderLeft: `2px solid ${primaryColor}`,
      fontSize: '11px',
      color: '#222222'
    },

    // Certifications & Awards
    compactItem: {
      padding: '2mm',
      background: '#ffffff',
      borderRadius: '3px',
      border: '1px solid #dddddd',
      marginBottom: '1mm',
      fontSize: '12px',
      lineHeight: 1.3,
      borderLeft: `2px solid ${primaryColor}`
    },

    compactTitle: {
      fontWeight: 700,
      color: '#000000',
      marginBottom: '0.5mm',
      fontSize: '12px'
    },

    compactSub: {
      fontSize: '11px',
      color: '#333333',
      fontStyle: 'italic'
    },

    compactDate: {
      fontSize: '10px',
      color: '#111111',
      marginTop: '0.5mm',
      fontWeight: 500
    },

    // Project item
    projectItem: {
      marginBottom: '3mm',
      padding: '3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      breakInside: 'avoid',
      borderLeft: `3px solid ${primaryColor}`
    },

    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2mm',
      marginBottom: '2mm',
      flexWrap: 'wrap'
    },

    projectTitle: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      flex: 1
    },

    projectRole: {
      fontSize: '13px',
      color: '#222222',
      fontWeight: 600,
      margin: '1mm 0 0 0',
      lineHeight: 1.2
    },

    projectPeriod: {
      fontSize: '12px',
      color: '#111111',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontWeight: 500,
      alignSelf: 'flex-start',
      background: 'transparent',
      padding: 0,
      border: 'none'
    },

    // Simple project link - blue text, no borders, full HTTPS URL
    projectLink: {
      color: '#0066cc',
      textDecoration: 'none',
      fontSize: '12px',
      display: 'inline-block',
      marginTop: '2mm',
      cursor: 'pointer',
      wordBreak: 'break-all'
    },

    // Reference
    referenceItem: {
      padding: '3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      borderLeft: `3px solid ${primaryColor}`
    },

    referenceName: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#000000',
      marginBottom: '1mm'
    },

    referenceDetails: {
      fontSize: '11px',
      color: '#333333',
      marginTop: '1mm',
      lineHeight: 1.3
    },

    referenceContact: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1mm',
      fontSize: '11px',
      color: '#222222',
      marginTop: '1.5mm'
    }
  };
};

const Template8 = ({ 
  isExporting = false, 
  personalInfo: propPersonalInfo,
  education: propEducation,
  experience: propExperience,
  skills: propSkills,
  languages: propLanguages = [],
  professionalSummary: propSummary,
  certifications: propCertifications = [],
  projects: propProjects = [],
  awards: propAwards = [],
  reference: propReference,
  ...props 
}) => {
  
  const contextData = useResume();
  const templateRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [hoverStates, setHoverStates] = useState({});
  const [hoveredContact, setHoveredContact] = useState(null);

  const resumeData = useMemo(() => {
    if (propPersonalInfo && Object.keys(propPersonalInfo).length > 0) {
      return {
        personalInfo: propPersonalInfo,
        education: propEducation,
        experience: propExperience,
        skills: propSkills,
        languages: propLanguages,
        professionalSummary: propSummary,
        certifications: propCertifications,
        projects: propProjects,
        awards: propAwards,
        reference: propReference
      };
    }
    return contextData.state;
  }, [propPersonalInfo, propEducation, propExperience, propSkills, propLanguages, 
      propSummary, propCertifications, propProjects, propAwards, propReference, contextData]);

  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    languages,
    professionalSummary,
    certifications,
    projects,
    awards,
    reference
  } = resumeData;

  const styles = useMemo(() => createStyles(), []);

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

  const processedData = useMemo(() => {
    // Skills - ONE PER LINE
    const limitedSkills = Helpers.safeArray(skills)
      .slice(0, TEMPLATE_CONSTANTS.SKILLS_LIMIT)
      .map(Helpers.getSkillName);

    const limitedLanguages = Helpers.safeArray(languages)
      .slice(0, TEMPLATE_CONSTANTS.LANGUAGES_LIMIT)
      .map(Helpers.cleanLanguageName);

    // Education with GPA
    const limitedEducation = Helpers.safeArray(education)
      .slice(0, TEMPLATE_CONSTANTS.EDUCATION_LIMIT)
      .map(edu => ({
        degree: Helpers.safeString(edu.degree),
        institution: Helpers.safeString(edu.institution),
        location: Helpers.safeString(edu.location),
        startYear: edu.startDate || edu.startYear || '',
        endYear: edu.endDate || edu.endYear || edu.graduationYear || '',
        current: edu.current || false,
        formattedDate: Helpers.formatEducationDate(
          edu.startDate || edu.startYear, 
          edu.endDate || edu.endYear || edu.graduationYear,
          edu.current
        ),
        gpa: edu.gpa || '',
        gpaScale: edu.gpaScale || '4.0',
        gpaDisplay: edu.gpa ? Helpers.formatGPA(edu.gpa, edu.gpaScale) : '',
        honors: edu.honors || ''
      }));

    const limitedExperience = Helpers.safeArray(experience)
      .slice(0, TEMPLATE_CONSTANTS.EXPERIENCE_LIMIT)
      .map(exp => {
        const achievements = Helpers.safeArray(exp.achievements || exp.bulletPoints || [])
          .slice(0, TEMPLATE_CONSTANTS.BULLET_POINTS_PER_ITEM)
          .map(b => Helpers.cleanBullet(b).slice(0, TEMPLATE_CONSTANTS.MAX_BULLET_LENGTH));

        return {
          title: Helpers.safeString(exp.title || exp.position || ''),
          company: Helpers.safeString(exp.company || exp.organization || ''),
          location: Helpers.safeString(exp.location),
          startDate: exp.startDate || '',
          endDate: exp.endDate || '',
          formattedDate: Helpers.formatDateRange(exp.startDate, exp.endDate),
          achievements: achievements,
          hasAchievements: achievements.length > 0
        };
      });

    // Projects - with full HTTPS URL for link display
    const limitedProjects = Helpers.safeArray(projects)
      .slice(0, TEMPLATE_CONSTANTS.PROJECTS_LIMIT)
      .map(proj => {
        const achievements = Helpers.safeArray(proj.achievements || proj.bulletPoints || proj.highlights || [])
          .slice(0, TEMPLATE_CONSTANTS.BULLET_POINTS_PER_ITEM)
          .map(b => Helpers.cleanBullet(b).slice(0, TEMPLATE_CONSTANTS.MAX_BULLET_LENGTH));

        let link = Helpers.safeString(proj.link || proj.projectUrl || proj.url || '');
        // Format the link to show full HTTPS URL
        let displayLink = '';
        if (link) {
          if (!link.startsWith('http://') && !link.startsWith('https://')) {
            displayLink = `https://${link}`;
          } else {
            displayLink = link;
          }
        }

        return {
          name: Helpers.safeString(proj.name || proj.title || ''),
          role: Helpers.safeString(proj.role || ''),
          achievements: achievements,
          hasAchievements: achievements.length > 0,
          link: link,
          displayLink: displayLink, // Full HTTPS URL for display
          startDate: proj.startDate || '',
          endDate: proj.endDate || '',
          formattedDate: Helpers.formatDateRange(proj.startDate, proj.endDate)
        };
      });

    const limitedCertifications = Helpers.safeArray(certifications)
      .slice(0, TEMPLATE_CONSTANTS.CERTIFICATIONS_LIMIT)
      .map(cert => ({
        name: Helpers.safeString(cert.name || cert.title || ''),
        issuer: Helpers.safeString(cert.issuer || ''),
        date: Helpers.formatDate(cert.issueDate || cert.date || '')
      }));

    const limitedAwards = Helpers.safeArray(awards)
      .slice(0, TEMPLATE_CONSTANTS.AWARDS_LIMIT)
      .map(award => ({
        name: Helpers.safeString(award.name || award.title || ''),
        issuer: Helpers.safeString(award.issuer || ''),
        date: Helpers.formatDate(award.awardDate || award.date || '')
      }));

    const summaryWords = Helpers.safeString(professionalSummary || '').split(' ');
    const limitedSummary = summaryWords.length > TEMPLATE_CONSTANTS.MAX_SUMMARY_WORDS ?
      summaryWords.slice(0, TEMPLATE_CONSTANTS.MAX_SUMMARY_WORDS).join(' ') + '...' :
      summaryWords.join(' ');

    const processedReference = reference ? {
      name: Helpers.safeString(reference.name),
      position: Helpers.safeString(reference.position),
      company: Helpers.safeString(reference.company),
      email: Helpers.safeString(reference.email),
      phone: Helpers.safeString(reference.phone)
    } : null;

    // Contact info with proper formatting
    const contactInfo = [];
    const addContact = (value, key) => {
      if (value && Helpers.safeString(value)) {
        const type = Helpers.getContactType(key);
        const link = Helpers.getContactLink(type, value);
        const displayValue = Helpers.getContactDisplayValue(type, value);
        const icon = Helpers.getContactIcon(type);
        const iconColor = Helpers.getContactIconColor(type);
        
        contactInfo.push({
          originalValue: Helpers.safeString(value),
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
    addContact(personalInfo?.website, 'website');

    return {
      name: Helpers.safeString(personalInfo?.fullName) || 'Your Name',
      photo: personalInfo?.photo,
      contactInfo: contactInfo.slice(0, TEMPLATE_CONSTANTS.CONTACT_ITEMS),
      summary: limitedSummary,
      skills: limitedSkills,
      languages: limitedLanguages,
      education: limitedEducation,
      experience: limitedExperience,
      projects: limitedProjects,
      certifications: limitedCertifications,
      awards: limitedAwards,
      reference: processedReference
    };
  }, [personalInfo, education, experience, skills, languages, professionalSummary, 
      certifications, projects, awards, reference]);

  const setHover = (type, index) => setHoverStates(prev => ({ ...prev, [type]: index }));
  const clearHover = (type) => setHoverStates(prev => ({ ...prev, [type]: null }));

  // RENDER CONTACT ITEM - LinkedIn icon in blue, text in black
  const renderContactItem = (item, index) => {
    const isHovered = hoveredContact === index;
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          color: item.iconColor || '#000000',
          fontWeight: item.type === 'linkedin' ? 'bold' : 'normal',
          fontSize: item.type === 'linkedin' ? '11px' : '12px'
        }}>
          {item.icon}
        </span>
        <span style={styles.contactValue}>{item.displayValue}</span>
      </>
    );

    if (item.link) {
      let finalLink = item.link;
      
      // For LinkedIn, ensure complete URL
      if (item.type === 'linkedin') {
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
      if (item.type === 'email' && !finalLink.startsWith('mailto:')) {
        finalLink = `mailto:${finalLink}`;
      }
      
      // For phone, ensure tel:
      if (item.type === 'phone' && !finalLink.startsWith('tel:')) {
        finalLink = `tel:${finalLink.replace(/[^0-9+]/g, '')}`;
      }
      
      // For GitHub, ensure complete URL
      if (item.type === 'github') {
        if (!finalLink.includes('github.com')) {
          finalLink = `https://github.com/${finalLink.replace(/^@/, '')}`;
        } else if (!finalLink.startsWith('https://')) {
          finalLink = finalLink.replace('http://', 'https://');
          if (!finalLink.startsWith('https://')) {
            finalLink = `https://${finalLink}`;
          }
        }
      }
      
      // For portfolio/website, ensure complete URL
      if (item.type === 'portfolio' || item.type === 'website') {
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
            background: isHovered ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
            padding: isHovered ? '0.8mm 2mm' : '0.8mm 0',
            margin: isHovered ? '0 -2mm' : '0',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => setHoveredContact(index)}
          onMouseLeave={() => setHoveredContact(null)}
          title={item.originalValue}
        >
          {content}
        </a>
      );
    }
    
    return (
      <div 
        key={index}
        style={{
          ...styles.contactItem,
          background: isHovered ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          padding: isHovered ? '0.8mm 2mm' : '0.8mm 0',
          margin: isHovered ? '0 -2mm' : '0',
          borderRadius: '4px',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  };

  const renderSkillItem = (skill, index) => (
    <div 
      key={index} 
      style={styles.skillItem}
      onMouseEnter={() => setHover('skill', index)}
      onMouseLeave={() => clearHover('skill')}
    >
      {skill}
    </div>
  );

  const renderLanguageItem = (lang, index) => (
    <div 
      key={index} 
      style={styles.languageItem}
      onMouseEnter={() => setHover('lang', index)}
      onMouseLeave={() => clearHover('lang')}
    >
      {lang}
    </div>
  );

  const renderExperienceItem = (exp, index) => (
    <div 
      key={index} 
      style={styles.experienceItem}
      onMouseEnter={() => setHover('exp', index)}
      onMouseLeave={() => clearHover('exp')}
    >
      <div style={styles.experienceHeader}>
        <div style={{ flex: 1 }}>
          <h4 style={styles.experienceTitle}>{exp.title}</h4>
          <div style={styles.experienceCompany}>
            {exp.company}
            {exp.location && (
              <span style={styles.experienceLocation}>
                <span style={styles.locationIcon}>📍</span> {exp.location}
              </span>
            )}
          </div>
        </div>
        <span style={styles.experiencePeriod}>{exp.formattedDate}</span>
      </div>

      {exp.hasAchievements && (
        <ul style={styles.bulletList}>
          {exp.achievements.map((achievement, idx) => (
            <li key={idx} style={styles.bulletItem}>
              <span style={styles.bulletPoint}>•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderProjectItem = (project, index) => (
    <div 
      key={index} 
      style={styles.projectItem}
      onMouseEnter={() => setHover('project', index)}
      onMouseLeave={() => clearHover('project')}
    >
      <div style={styles.projectHeader}>
        <div style={{ flex: 1 }}>
          <h4 style={styles.projectTitle}>{project.name}</h4>
          {project.role && <div style={styles.projectRole}>{project.role}</div>}
        </div>
        {project.formattedDate && <span style={styles.projectPeriod}>{project.formattedDate}</span>}
      </div>

      {project.hasAchievements && (
        <ul style={styles.bulletList}>
          {project.achievements.map((achievement, idx) => (
            <li key={idx} style={styles.bulletItem}>
              <span style={styles.bulletPoint}>•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}

      {project.displayLink && (
        <div style={{ marginTop: '2mm' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#000000', marginRight: '4px' }}>
            Link:
          </span>
          <a 
            href={project.displayLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.projectLink}
            onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
          >
            {project.displayLink}
          </a>
        </div>
      )}
    </div>
  );

  const renderCompactItem = (item, index, type) => (
    <div 
      key={index} 
      style={styles.compactItem}
      onMouseEnter={() => setHover(type, index)}
      onMouseLeave={() => clearHover(type)}
    >
      <div style={styles.compactTitle}>{item.name}</div>
      {item.issuer && <div style={styles.compactSub}>{item.issuer}</div>}
      {item.date && <div style={styles.compactDate}>{item.date}</div>}
    </div>
  );

  const renderEducationItem = (edu, index) => (
    <div key={index} style={styles.educationItem}>
      <div style={styles.educationHeader}>
        <h4 style={styles.educationDegree}>{edu.degree}</h4>
        {edu.formattedDate && <span style={styles.educationDate}>{edu.formattedDate}</span>}
      </div>
      
      <div style={styles.educationInstitutionRow}>
        <span style={styles.educationInstitution}>{edu.institution}</span>
      </div>

      <div style={styles.locationGpaRow}>
        {edu.location && (
          <span style={styles.educationLocation}>
            <span style={styles.locationIcon}>📍</span> {edu.location}
          </span>
        )}
        
        {edu.gpaDisplay && (
          <span style={styles.gpaBadge}>
            {edu.gpaDisplay}
          </span>
        )}
      </div>

      {edu.honors && (
        <div style={styles.honorsContainer}>
          <span>🏆</span> {edu.honors}
        </div>
      )}
    </div>
  );

  const renderReference = () => {
    if (!processedData.reference) return null;
    const ref = processedData.reference;

    return (
      <div style={styles.referenceItem}>
        <div style={styles.referenceName}>{ref.name}</div>
        {ref.position && <div style={styles.compactSub}>{ref.position}</div>}
        {ref.company && <div style={styles.referenceDetails}>{ref.company}</div>}
        {(ref.email || ref.phone) && (
          <div style={styles.referenceContact}>
            {ref.email && <div>✉ {ref.email}</div>}
            {ref.phone && <div>📱 {ref.phone}</div>}
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      ref={templateRef}
      style={styles.template}
      className={isExporting ? 'export-mode' : ''}
    >
      <div style={styles.grid}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {processedData.photo && (
            <div style={styles.profileImage}>
              <img 
                src={processedData.photo} 
                alt="Profile" 
                style={styles.profileImageImg}
                crossOrigin="anonymous"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}

          <h1 style={styles.name}>{processedData.name}</h1>

          {/* Contact - LinkedIn icon in blue, text in black */}
          {processedData.contactInfo.length > 0 && (
            <div style={styles.contactSection}>
              <h3 style={styles.sectionHeading}>CONTACT</h3>
              <div style={styles.contactGrid}>
                {processedData.contactInfo.map(renderContactItem)}
              </div>
            </div>
          )}

          {/* Skills - ONE PER LINE */}
          {processedData.skills.length > 0 && (
            <div>
              <h3 style={styles.sectionHeading}>SKILLS</h3>
              <div style={styles.skillsContainer}>
                {processedData.skills.map(renderSkillItem)}
              </div>
            </div>
          )}

          {/* Languages */}
          {processedData.languages.length > 0 && (
            <div>
              <h3 style={styles.sectionHeading}>LANGUAGES</h3>
              <div style={styles.languagesContainer}>
                {processedData.languages.map(renderLanguageItem)}
              </div>
            </div>
          )}

          {/* Certifications */}
          {processedData.certifications.length === 1 && (
            <div>
              <h3 style={styles.sectionHeading}>CERTIFICATION</h3>
              {processedData.certifications.map((cert, idx) => renderCompactItem(cert, idx, 'cert'))}
            </div>
          )}

          {/* Awards */}
          {processedData.awards.length === 1 && (
            <div>
              <h3 style={styles.sectionHeading}>AWARD</h3>
              {processedData.awards.map((award, idx) => renderCompactItem(award, idx, 'award'))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Summary */}
          {processedData.summary && (
            <div>
              <h3 style={styles.sectionHeading}>SUMMARY</h3>
              <div style={styles.summaryBox}>
                <p style={{ margin: 0, color: '#222222', lineHeight: 1.5 }}>{processedData.summary}</p>
              </div>
            </div>
          )}

          {/* Experience */}
          {processedData.experience.length > 0 && (
            <div>
              <h3 style={styles.sectionHeading}>EXPERIENCE</h3>
              <div>
                {processedData.experience.map(renderExperienceItem)}
              </div>
            </div>
          )}

          {/* Projects */}
          {processedData.projects.length > 0 && (
            <div>
              <h3 style={styles.sectionHeading}>PROJECTS</h3>
              <div>
                {processedData.projects.map(renderProjectItem)}
              </div>
            </div>
          )}

          {/* Education */}
          {processedData.education.length > 0 && (
            <div>
              <h3 style={styles.sectionHeading}>EDUCATION</h3>
              <div style={styles.educationGrid}>
                {processedData.education.map(renderEducationItem)}
              </div>
            </div>
          )}

          {/* Reference */}
          {processedData.reference && (
            <div>
              <h3 style={styles.sectionHeading}>REFERENCE</h3>
              {renderReference()}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media print {
          .export-mode {
            box-shadow: none !important;
          }
          .template8-root {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

Template8.displayName = 'Template8_Optimized';
export default Template8;