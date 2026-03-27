// ============================================
// components/templates/Template18.js
// OPTIMIZED: Contact info styling from Template1
// - LinkedIn "in" icon with blue color
// - Phone and email with proper formatting
// - Improved hover effects
// - Better spacing and alignment
// - Updated fonts to match Template1 (Calibri, Arial)
// - Added "Link:" text before project link
// - Reduced header spacing
// - Removed GPA icon, added text "GPA:" or "CGPA:"
// - Certification: date below issuer
// - Increased content font sizes by 2px total
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// ===== ICON MAPPING - Using Template1 style icons =====
const T18_ICON_MAPPING = Object.freeze({
  email: 'âœ‰',
  phone: 'ðŸ“ž',
  location: 'ðŸ“',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color matching Template1
  github: 'âŒ¨',
  portfolio: 'ðŸŒ',
  website: 'ðŸŒ',
  default: 'ðŸ“Œ'
});

// CONSTANTS - IMMUTABLE
const CONTENT_LIMITS = Object.freeze({
  skills: 8,
  internships: 1,
  projects: 1,
  education: 1,
  summaryWords: 100,
  certifications: 1,
  languages: 0,
  awardsPerItem: 0,
  bulletPointsPerItem: 3
});

// Icon mapping - IMMUTABLE
const ICONS = Object.freeze({
  email: 'âœ‰',
  phone: 'ðŸ“ž',
  location: 'ðŸ“',
  linkedin: 'in',
  github: 'âŒ¨',
  portfolio: 'ðŸŒ',
  education: 'ðŸŽ“',
  internship: 'ðŸ’¼',
  project: 'âš¡',
  skill: 'âš¡',
  certification: 'ðŸ“œ',
  language: 'ðŸ—£ï¸',
  about: 'ðŸ“',
  calendar: 'ðŸ“…',
  code: 'âŒ¨ï¸',
  demo: 'ðŸ”—',
  gpa: 'ðŸ“Š',
  badge: 'â€¢',
  bullet: 'â€¢',
  triangle: 'â–¹',
  dot: 'â€¢',
  default: 'â€¢',
  link: 'ðŸ”—'
});

// Helper functions - Immutable
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
    if (!dateString) return '';
    const str = TemplateHelpers.safeString(dateString);
    if (str.toLowerCase() === 'present' || str.toLowerCase() === 'current') return 'Present';
    if (str.toLowerCase() === 'expected') return 'Expected';
    if (/^\d{4}$/.test(str)) return str;
    
    try {
      const date = new Date(str);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    return str;
  },

  formatDateRange: (start, end, current) => {
    const startDate = TemplateHelpers.formatDate(start);
    const endDate = current ? 'Present' : TemplateHelpers.formatDate(end);
    
    if (!startDate && !endDate) return '';
    if (!startDate) return endDate;
    if (!endDate) return startDate;
    return `${startDate} â€“ ${endDate}`;
  },

  formatGPA: (gpa) => {
    if (!gpa) return '';
    const gpaStr = TemplateHelpers.safeString(gpa);
    if (gpaStr.includes('/')) return gpaStr;
    return `${gpaStr}/4.0`;
  },

  getInitials: (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  },

  truncateText: (text, maxLength = 120) => {
    const cleaned = TemplateHelpers.safeString(text);
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.substring(0, maxLength).trim() + '...';
  },

  getIcon: (iconName) => {
    return ICONS[iconName] || ICONS.default;
  },

  formatFullUrl: (url) => {
    if (!url) return '';
    let urlStr = TemplateHelpers.safeString(url);
    if (!urlStr.startsWith('http://') && !urlStr.startsWith('https://')) {
      urlStr = 'https://' + urlStr;
    }
    return urlStr;
  },

  extractDomain: (url) => {
    if (!url) return '';
    try {
      let urlToParse = url;
      if (!urlToParse.startsWith('http://') && !urlToParse.startsWith('https://')) {
        urlToParse = 'https://' + urlToParse;
      }
      const domain = new URL(urlToParse).hostname.replace('www.', '');
      return domain;
    } catch {
      return url.length > 30 ? url.substring(0, 30) + '...' : url;
    }
  },

  // ===== LINK FORMATTING FUNCTIONS (like Template1) =====
  formatLinkedInLink: (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin).trim();
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
      case 'website':
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
      case 'website':
        return TemplateHelpers.formatPortfolioDisplay(value);
      default:
        return value;
    }
  },

  getContactIcon: (type) => {
    const iconConfig = T18_ICON_MAPPING[type] || T18_ICON_MAPPING.default;
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  },

  getContactIconColor: (type) => {
    const iconConfig = T18_ICON_MAPPING[type];
    if (typeof iconConfig === 'object' && iconConfig.color) {
      return iconConfig.color;
    }
    return null;
  },

  getContactType: (key) => {
    const emailPatterns = ['email', 'Email', 'EMAIL'];
    const phonePatterns = ['phone', 'Phone', 'mobile', 'Mobile', 'PHONE'];
    const locationPatterns = ['address', 'Address', 'location', 'Location'];
    const linkedinPatterns = ['linkedin', 'LinkedIn', 'linkedIn', 'linked_in'];
    const githubPatterns = ['github', 'GitHub', 'Github', 'git_hub'];
    const portfolioPatterns = ['portfolio', 'Portfolio', 'website', 'Website', 'web', 'site'];
    
    if (emailPatterns.includes(key)) return 'email';
    if (phonePatterns.includes(key)) return 'phone';
    if (locationPatterns.includes(key)) return 'location';
    if (linkedinPatterns.includes(key)) return 'linkedin';
    if (githubPatterns.includes(key)) return 'github';
    if (portfolioPatterns.includes(key)) return 'portfolio';
    return 'text';
  }
});

const Template18 = ({ 
  personalInfo = {}, 
  education = [], 
  skills = [], 
  professionalSummary = '', 
  projects = [],
  certifications = [],
  languages = [],
  internships = [],
  isExporting = false 
}) => {
  
  const templateRef = useRef();
  const [loading, setLoading] = useState(true);
  const [hoveredContact, setHoveredContact] = useState(null);

  // Simulate loading template data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Process data
  const processedData = useMemo(() => {
    // Process internships - WITH BULLET POINTS LIMITED TO 3
    const processedInternships = TemplateHelpers.safeArray(internships)
      .filter(intern => intern.role || intern.title || intern.position)
      .slice(0, CONTENT_LIMITS.internships)
      .map(intern => {
        const bulletPoints = intern.highlights || intern.achievements || intern.bulletPoints || [];
        return Object.freeze({
          id: `intern-${Date.now()}-${Math.random()}`,
          position: TemplateHelpers.safeString(intern.role || intern.title || intern.position),
          company: TemplateHelpers.safeString(intern.company || intern.organization),
          location: TemplateHelpers.safeString(intern.location),
          startDate: TemplateHelpers.formatDate(intern.startDate),
          endDate: intern.current ? 'Present' : TemplateHelpers.formatDate(intern.endDate),
          current: intern.current || false,
          bulletPoints: Object.freeze(TemplateHelpers.safeArray(bulletPoints)
            .slice(0, CONTENT_LIMITS.bulletPointsPerItem)
            .map(b => TemplateHelpers.safeString(b))),
          technologies: Object.freeze(TemplateHelpers.safeArray(intern.technologies || [])
            .map(t => TemplateHelpers.safeString(t)))
        });
      });

    // Process projects - WITH BULLET POINTS LIMITED TO 3
    const processedProjects = TemplateHelpers.safeArray(projects)
      .filter(p => TemplateHelpers.safeString(p.name) || TemplateHelpers.safeString(p.title))
      .slice(0, CONTENT_LIMITS.projects)
      .map(project => {
        const projectName = TemplateHelpers.safeString(project.name || project.title);
        
        let bulletPoints = [];
        
        if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
          bulletPoints = project.bulletPoints.filter(b => b && typeof b === 'string');
        } 
        else if (project.achievements && Array.isArray(project.achievements)) {
          bulletPoints = project.achievements.filter(a => a && typeof a === 'string');
        }
        else if (project.highlights && Array.isArray(project.highlights)) {
          bulletPoints = project.highlights.filter(h => h && typeof h === 'string');
        }
        
        const githubUrl = project.github || project.repository;
        const projectUrl = project.link || project.url || project.demo || project.projectUrl;
        
        // Format URLs properly
        const formattedGithubUrl = githubUrl ? TemplateHelpers.formatFullUrl(githubUrl) : '';
        const formattedProjectUrl = projectUrl ? TemplateHelpers.formatFullUrl(projectUrl) : '';
        
        // Prioritize project link over github link (only show one)
        const primaryLink = formattedProjectUrl || formattedGithubUrl;
        
        return Object.freeze({
          id: `proj-${Date.now()}-${Math.random()}`,
          name: projectName,
          title: projectName,
          role: TemplateHelpers.safeString(project.role),
          startDate: TemplateHelpers.formatDate(project.startDate),
          endDate: project.ongoing || project.current ? 'Present' : TemplateHelpers.formatDate(project.endDate),
          current: project.ongoing || project.current || false,
          link: primaryLink, // Only store one link
          bulletPoints: Object.freeze(bulletPoints.slice(0, CONTENT_LIMITS.bulletPointsPerItem)),
          linkDisplay: primaryLink ? primaryLink.replace(/^https?:\/\//, '') : ''
        });
      });

    // Process education - ACHIEVEMENTS LIMITED TO 3
    const processedEducation = TemplateHelpers.safeArray(education)
      .filter(e => TemplateHelpers.safeString(e.degree))
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => {
        const achievements = [
          ...(edu.achievements || []),
          ...(edu.highlights || [])
        ];
        
        // Determine if it's GPA or CGPA based on field name
        const gpaText = edu.gpaScale === '10.0' ? 'CGPA' : 'GPA';
        
        return Object.freeze({
          id: `edu-${Date.now()}-${Math.random()}`,
          degree: TemplateHelpers.safeString(edu.degree),
          field: TemplateHelpers.safeString(edu.fieldOfStudy || edu.major || edu.field),
          institution: TemplateHelpers.safeString(edu.institution || edu.school),
          location: TemplateHelpers.safeString(edu.location),
          startDate: TemplateHelpers.formatDate(edu.startYear || edu.startDate),
          endDate: edu.current ? 'Expected' : TemplateHelpers.formatDate(edu.endYear || edu.endDate || edu.graduationYear),
          current: edu.current || false,
          gpa: TemplateHelpers.formatGPA(edu.gpa),
          gpaText: gpaText,
          achievements: Object.freeze(achievements.slice(0, CONTENT_LIMITS.bulletPointsPerItem).map(a => TemplateHelpers.safeString(a))),
          role: 'Student',
          technologies: Object.freeze([])
        });
      });

    // Process skills - NOW LIMITED TO 8
    const skillCategories = {};
    
    TemplateHelpers.safeArray(skills).slice(0, CONTENT_LIMITS.skills).forEach(skill => {
      let skillName = '';
      let category = '';
      
      if (typeof skill === 'object') {
        skillName = TemplateHelpers.safeString(skill.name);
        category = TemplateHelpers.safeString(skill.category);
      } else {
        skillName = TemplateHelpers.safeString(skill);
        category = 'skills';
      }
      
      const catKey = category.toLowerCase() || 'skills';
      if (!skillCategories[catKey]) {
        skillCategories[catKey] = [];
      }
      if (skillName) {
        skillCategories[catKey].push(skillName);
      }
    });

    // Process certifications - Simplified like other sections, date below issuer
    const processedCertifications = TemplateHelpers.safeArray(certifications)
      .filter(c => TemplateHelpers.safeString(c.name))
      .slice(0, CONTENT_LIMITS.certifications)
      .map(cert => Object.freeze({
        id: `cert-${Date.now()}-${Math.random()}`,
        name: TemplateHelpers.safeString(cert.name),
        issuer: TemplateHelpers.safeString(cert.issuer || cert.organization),
        date: TemplateHelpers.formatDate(cert.date || cert.issueDate),
        link: cert.link || cert.url ? TemplateHelpers.formatFullUrl(cert.link || cert.url) : '',
        credentialId: TemplateHelpers.safeString(cert.credentialId)
      }));

    // Process languages
    const processedLanguages = TemplateHelpers.safeArray(languages)
      .slice(0, CONTENT_LIMITS.languages)
      .map(lang => {
        const name = typeof lang === 'object' ? 
          TemplateHelpers.safeString(lang.name) : 
          TemplateHelpers.safeString(lang);
        const proficiency = typeof lang === 'object' ? 
          TemplateHelpers.safeString(lang.proficiency) : '';
        return Object.freeze({ name, proficiency });
      });

    return Object.freeze({
      internships: Object.freeze(processedInternships),
      projects: Object.freeze(processedProjects),
      education: Object.freeze(processedEducation),
      skills: Object.freeze(skillCategories),
      certifications: Object.freeze(processedCertifications),
      languages: Object.freeze(processedLanguages),
      summary: TemplateHelpers.safeString(professionalSummary),
      hasData: Object.freeze({
        internships: processedInternships.length > 0,
        projects: processedProjects.length > 0,
        education: processedEducation.length > 0,
        skills: Object.keys(skillCategories).length > 0,
        certifications: processedCertifications.length > 0,
        languages: processedLanguages.length > 0,
        summary: TemplateHelpers.safeString(professionalSummary).length > 0
      })
    });
  }, [internships, projects, education, skills, certifications, languages, professionalSummary]);

  // Contact info with proper formatting (like Template1)
  const contactInfo = useMemo(() => {
    const contacts = [];
    const addContact = (value, key) => {
      if (value && TemplateHelpers.safeString(value)) {
        const type = TemplateHelpers.getContactType(key);
        const link = TemplateHelpers.getContactLink(type, value);
        const displayValue = TemplateHelpers.getContactDisplayValue(type, value);
        const icon = TemplateHelpers.getContactIcon(type);
        const iconColor = TemplateHelpers.getContactIconColor(type);
        
        contacts.push(Object.freeze({ 
          originalValue: TemplateHelpers.safeString(value),
          displayValue,
          type,
          icon,
          iconColor,
          link
        }));
      }
    };

    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.address || personalInfo.location, 'address');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.portfolio, 'portfolio');

    return Object.freeze(contacts);
  }, [personalInfo]);

  // Define all styles - WITH INCREASED CONTENT FONT SIZES (+2px total)
  const styles = {
    loadingContainer: {
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      borderRadius: '8px'
    },

    container: {
      maxWidth: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      background: '#ffffff',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      color: '#000000',
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      lineHeight: 1.5,
      position: 'relative',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      colorAdjust: 'exact'
    },

    pdfIcon: {
      fontFamily: '"Arial", "Helvetica", "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif',
      display: 'inline-block'
    },

    header: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)',
      padding: '40px 35px 20px 35px',
      color: 'white',
      position: 'relative',
      marginBottom: '12px',
      minHeight: '150px'
    },

    headerGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)'
    },

    headerContent: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%'
    },

    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      maxWidth: 'calc(100% - 320px)'
    },

    profileImage: {
      flexShrink: 0,
      marginTop: '0px'
    },

    profilePhoto: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid rgba(255, 255, 255, 0.4)'
    },

    profileInitials: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '36px',
      fontWeight: 700,
      border: '3px solid rgba(255, 255, 255, 0.4)',
      color: 'white'
    },

    nameContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      justifyContent: 'center'
    },

    firstName: {
      fontSize: '32px',
      fontWeight: 800,
      margin: 0,
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      lineHeight: 1.2,
      wordBreak: 'break-word',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    lastName: {
      fontSize: '32px',
      fontWeight: 800,
      margin: '2px 0 0 0',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      lineHeight: 1.2,
      wordBreak: 'break-word',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    singleName: {
      fontSize: '38px',
      fontWeight: 800,
      margin: 0,
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      lineHeight: 1.2,
      wordBreak: 'break-word',
      display: 'flex',
      alignItems: 'center',
      minHeight: '90px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    headerContact: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      minWidth: '250px',
      maxWidth: '300px',
      position: 'relative',
      top: '-5px',
      right: 0
    },

    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '6px 12px',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      color: 'white',
      fontWeight: 500,
      fontSize: '11px',
      width: '100%',
      boxSizing: 'border-box',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },

    contactItemHover: {
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateX(2px)'
    },

    contactIcon: {
      fontSize: '12px',
      minWidth: '18px',
      textAlign: 'center',
      filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))',
      transition: 'transform 0.2s ease'
    },

    contactLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '11px',
      fontWeight: 500,
      wordBreak: 'break-all',
      flex: 1
    },

    contactText: {
      color: 'white',
      fontSize: '11px',
      fontWeight: 500,
      wordBreak: 'break-all',
      flex: 1
    },

    content: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '15px',
      padding: '0 35px 25px'
    },

    contentLeft: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },

    contentRight: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },

    contentSection: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '14px',
      marginBottom: '0',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease'
    },

    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px', // Increased from 14px to 16px (+2px)
      fontWeight: 700,
      color: '#1e293b',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 8px',
      paddingBottom: '6px',
      borderBottom: '2px solid #e2e8f0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    sectionIcon: {
      fontSize: '17px', // Increased from 15px to 17px (+2px)
      color: '#4f46e5',
      background: '#eef2ff',
      padding: '4px',
      borderRadius: '8px',
      width: '23px',
      height: '23px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    bulletIcon: {
      display: 'inline-block',
      marginRight: '8px',
      color: '#4f46e5',
      fontWeight: 'bold',
      fontSize: '14px' // Increased from 12px to 14px (+2px)
    },

    locationText: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#64748b',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      fontWeight: 500,
      marginLeft: '8px'
    },

    educationGpa: {
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      color: '#475569',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: 600,
      background: '#f1f5f9',
      padding: '2px 8px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },

    linkIcon: {
      display: 'inline-block',
      marginRight: '4px',
      color: '#4f46e5',
      fontWeight: 'bold',
      fontSize: '14px' // Increased from 12px to 14px (+2px)
    },

    dateText: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      color: '#475569',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginLeft: 'auto'
    },

    summaryText: {
      margin: 0,
      color: '#334155',
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      fontWeight: 450,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    },

    skillCategory: {
      width: '100%'
    },

    skillCategoryTitle: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      fontWeight: 700,
      color: '#1e293b',
      textTransform: 'uppercase',
      marginBottom: '6px',
      letterSpacing: '0.3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    skillItems: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      flexDirection: 'row',
      alignItems: 'center'
    },

    skillItem: {
      background: '#f8fafc',
      color: '#1e293b',
      padding: '3px 8px',
      borderRadius: '20px',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      border: '1px solid #e2e8f0',
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    internshipsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },

    internshipItem: {
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '8px',
      '&:last-child': {
        borderBottom: 'none',
        paddingBottom: 0
      }
    },

    internshipHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'start',
      gap: '12px',
      marginBottom: '4px',
      width: '100%'
    },

    internshipTitleContent: {
      overflow: 'hidden'
    },

    internshipTitle: {
      fontSize: '16px', // Increased from 14px to 16px (+2px)
      fontWeight: 800,
      color: '#0f172a',
      margin: '0 0 2px',
      wordWrap: 'break-word',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    internshipCompanyRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '4px'
    },

    internshipCompany: {
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 700,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    internshipLocation: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#64748b',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      fontWeight: 500
    },

    internshipDateWrapper: {
      justifySelf: 'end',
      alignSelf: 'start'
    },

    internshipBullets: {
      margin: '0 0 4px',
      padding: 0,
      listStyle: 'none'
    },

    internshipBulletItem: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      color: '#1e293b',
      marginBottom: '3px',
      paddingLeft: '16px',
      position: 'relative',
      lineHeight: 1.5,
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    internshipBulletIcon: {
      position: 'absolute',
      left: 0,
      top: '2px',
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 'bold'
    },

    internshipTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px',
      marginTop: '4px'
    },

    techTag: {
      background: '#f1f5f9',
      color: '#1e293b',
      padding: '2px 6px',
      borderRadius: '20px',
      fontSize: '11px', // Increased from 9px to 11px (+2px)
      border: '1px solid #e2e8f0',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    projectsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },

    projectItem: {
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '8px',
      '&:last-child': {
        borderBottom: 'none',
        paddingBottom: 0
      }
    },

    projectHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'start',
      gap: '12px',
      marginBottom: '4px',
      width: '100%'
    },

    projectTitleContent: {
      overflow: 'hidden'
    },

    projectName: {
      fontSize: '16px', // Increased from 14px to 16px (+2px)
      fontWeight: 800,
      color: '#0f172a',
      margin: 0,
      wordWrap: 'break-word',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    projectDateWrapper: {
      justifySelf: 'end',
      alignSelf: 'start'
    },

    projectRole: {
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 700,
      marginBottom: '4px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    projectBullets: {
      margin: '0 0 4px',
      padding: 0,
      listStyle: 'none'
    },

    projectBulletItem: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      color: '#1e293b',
      marginBottom: '3px',
      paddingLeft: '16px',
      position: 'relative',
      lineHeight: 1.5,
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    projectBulletIcon: {
      position: 'absolute',
      left: 0,
      top: '2px',
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 'bold'
    },

    projectLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginTop: '4px'
    },

    projectLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#f1f5f9',
      padding: '4px 8px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      wordBreak: 'break-all',
      transition: 'all 0.2s ease',
      fontWeight: 500,
      width: 'fit-content',
      maxWidth: '100%',
      fontFamily: 'monospace'
    },

    projectLinkText: {
      color: '#1e293b',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    projectLinkLabel: {
      fontWeight: 600,
      color: '#4f46e5',
      marginRight: '4px'
    },

    // Education layout styles
    educationInstitutionRow: {
      marginBottom: '6px'
    },

    educationInstitution: {
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 700,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    educationLocationGpaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '8px'
    },

    educationLocation: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#64748b',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      fontWeight: 500
    },

    educationGpaWrapper: {
      display: 'inline-flex',
      alignItems: 'center'
    },

    educationAchievementsRow: {
      marginTop: '4px'
    },

    // Certifications styling - date below issuer
    certificationsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },

    certItem: {
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '8px',
      '&:last-child': {
        borderBottom: 'none',
        paddingBottom: 0
      }
    },

    certHeader: {
      marginBottom: '4px'
    },

    certTitleContent: {
      overflow: 'hidden'
    },

    certName: {
      fontSize: '16px', // Increased from 14px to 16px (+2px)
      fontWeight: 800,
      color: '#0f172a',
      margin: '0 0 4px',
      wordWrap: 'break-word',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    certIssuer: {
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      color: '#4f46e5',
      fontWeight: 700,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      marginBottom: '4px'
    },

    certDate: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      color: '#64748b',
      fontWeight: 500,
      marginBottom: '6px'
    },

    certDetails: {
      marginTop: '4px'
    },

    certId: {
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      color: '#475569',
      fontFamily: 'monospace',
      background: '#f8fafc',
      padding: '2px 6px',
      borderRadius: '6px',
      display: 'inline-block',
      fontWeight: 500,
      marginTop: '4px'
    },

    certLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontSize: '12px', // Increased from 10px to 12px (+2px)
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#f1f5f9',
      padding: '4px 8px',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      marginTop: '4px',
      fontWeight: 500,
      width: 'fit-content',
      transition: 'all 0.2s ease'
    },

    languagesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },

    languageItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#ffffff',
      borderRadius: '10px',
      padding: '5px 8px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    },

    langName: {
      fontSize: '14px', // Increased from 12px to 14px (+2px)
      fontWeight: 700,
      color: '#0f172a',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },

    langProficiency: {
      fontSize: '13px', // Increased from 11px to 13px (+2px)
      color: '#4f46e5',
      background: '#f1f5f9',
      padding: '2px 6px',
      borderRadius: '20px',
      fontWeight: 600,
      border: '1px solid #e2e8f0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    }
  };

  // Helper component for bullet icons
  const BulletIcon = ({ icon = 'dot' }) => (
    <span style={{ ...styles.bulletIcon, ...styles.pdfIcon }}>{TemplateHelpers.getIcon(icon)}</span>
  );

  // Helper component for location icons
  const LocationIcon = () => (
    <span style={{ ...styles.locationIcon, ...styles.pdfIcon }}>{TemplateHelpers.getIcon('location')}</span>
  );

  // Helper component for link icons
  const LinkIcon = () => (
    <span style={{ ...styles.linkIcon, ...styles.pdfIcon }}>{TemplateHelpers.getIcon('link')}</span>
  );

  // Helper component for section icon
  const SectionIcon = ({ icon }) => (
    <span style={{ ...styles.sectionIcon, ...styles.pdfIcon }}>{TemplateHelpers.getIcon(icon)}</span>
  );

  // Date component - plain text, no border/background
  const DateText = ({ start, end, current }) => {
    const dateStr = TemplateHelpers.formatDateRange(start, end, current);
    if (!dateStr) return null;
    return <span style={styles.dateText}>{dateStr}</span>;
  };

  // OPTIMIZED RENDER CONTACT ITEM - With LinkedIn icon in blue and hover effects (matching Template1)
  const renderContactItem = (contact, index) => {
    const isHovered = hoveredContact === index;
    const iconColor = contact.iconColor || 'white';
    
    const content = (
      <>
        <span style={{ 
          ...styles.contactIcon, 
          ...styles.pdfIcon,
          color: iconColor,
          transition: 'transform 0.2s ease'
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
      
      // For portfolio/website, ensure complete URL
      if (contact.type === 'portfolio') {
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
            ...(isHovered ? styles.contactItemHover : {})
          }}
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
        style={{
          ...styles.contactItem,
          ...(isHovered ? styles.contactItemHover : {})
        }}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  };

  // Render header with optimized contacts
  const renderHeader = useMemo(() => () => {
    const fullName = personalInfo.fullName || 'Your Name';
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const hasLastName = lastName.trim().length > 0;
    
    return (
      <div style={styles.header}>
        <div style={styles.headerGradient}></div>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.profileImage}>
              {personalInfo.photo ? (
                <img 
                  src={personalInfo.photo} 
                  alt={fullName} 
                  style={styles.profilePhoto}
                  crossOrigin="anonymous"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div style={styles.profileInitials}>
                  {TemplateHelpers.getInitials(fullName)}
                </div>
              )}
            </div>
            <div style={styles.nameContainer}>
              {hasLastName ? (
                <>
                  <h1 style={styles.firstName}>{firstName}</h1>
                  <h1 style={styles.lastName}>{lastName}</h1>
                </>
              ) : (
                <h1 style={styles.singleName}>{firstName}</h1>
              )}
            </div>
          </div>
          
          <div style={styles.headerContact}>
            {contactInfo.map((contact, index) => renderContactItem(contact, index))}
          </div>
        </div>
      </div>
    );
  }, [personalInfo, contactInfo, hoveredContact]);

  const renderSummary = useMemo(() => () => {
    if (!processedData.hasData.summary) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="about" /></span> ABOUT ME
        </h3>
        <p style={styles.summaryText}>{processedData.summary}</p>
      </div>
    );
  }, [processedData]);

  const renderSkills = useMemo(() => () => {
    if (!processedData.hasData.skills) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="skill" /></span> SKILLS
        </h3>
        <div style={styles.skillsContainer}>
          {Object.entries(processedData.skills).map(([category, skills]) => (
            <div key={category} style={styles.skillCategory}>
              {category !== 'skills' && (
                <div style={styles.skillCategoryTitle}>{category}</div>
              )}
              <div style={styles.skillItems}>
                {skills.map((skill, idx) => (
                  <span key={idx} style={styles.skillItem}>
                    <BulletIcon icon="dot" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.skills, processedData.hasData.skills]);

  // Render certifications with date below issuer
  const renderCertifications = useMemo(() => () => {
    if (!processedData.hasData.certifications) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="certification" /></span> CERTIFICATIONS
        </h3>
        <div style={styles.certificationsList}>
          {processedData.certifications.map((cert, index) => (
            <div key={cert.id} style={index === processedData.certifications.length - 1 ? { ...styles.certItem, borderBottom: 'none', paddingBottom: 0 } : styles.certItem}>
              <div style={styles.certHeader}>
                <div style={styles.certTitleContent}>
                  <div style={styles.certName}>{cert.name}</div>
                  <div style={styles.certIssuer}>{cert.issuer}</div>
                  {cert.date && (
                    <div style={styles.certDate}>{cert.date}</div>
                  )}
                </div>
              </div>
              
              {(cert.credentialId || cert.link) && (
                <div style={styles.certDetails}>
                  {cert.credentialId && (
                    <div style={styles.certId}>ID: {cert.credentialId}</div>
                  )}
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.certLink}
                    >
                      <LinkIcon /> View Certificate
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.certifications, processedData.hasData.certifications]);

  const renderLanguages = useMemo(() => () => {
    if (!processedData.hasData.languages) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="language" /></span> LANGUAGES
        </h3>
        <div style={styles.languagesList}>
          {processedData.languages.map((lang, idx) => (
            <div key={idx} style={styles.languageItem}>
              <span style={styles.langName}>{lang.name}</span>
              {lang.proficiency && (
                <span style={styles.langProficiency}>{lang.proficiency}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.languages, processedData.hasData.languages]);

  const renderInternships = useMemo(() => () => {
    if (!processedData.hasData.internships) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="internship" /></span> INTERNSHIPS
        </h3>
        <div style={styles.internshipsList}>
          {processedData.internships.map((internship, index) => (
            <div key={internship.id} style={index === processedData.internships.length - 1 ? { ...styles.internshipItem, borderBottom: 'none', paddingBottom: 0 } : styles.internshipItem}>
              <div style={styles.internshipHeader}>
                <div style={styles.internshipTitleContent}>
                  <h4 style={styles.internshipTitle}>{internship.position}</h4>
                  <div style={styles.internshipCompanyRow}>
                    <span style={styles.internshipCompany}>{internship.company}</span>
                    {internship.location && (
                      <span style={styles.internshipLocation}>
                        <LocationIcon /> {internship.location}
                      </span>
                    )}
                  </div>
                </div>
                <div style={styles.internshipDateWrapper}>
                  <DateText 
                    start={internship.startDate} 
                    end={internship.endDate} 
                    current={internship.current}
                  />
                </div>
              </div>
              
              {internship.bulletPoints.length > 0 && (
                <ul style={styles.internshipBullets}>
                  {internship.bulletPoints.map((bullet, idx) => (
                    <li key={idx} style={styles.internshipBulletItem}>
                      <span style={styles.internshipBulletIcon}>{TemplateHelpers.getIcon('dot')}</span> {bullet}
                    </li>
                  ))}
                </ul>
              )}
              
              {internship.technologies.length > 0 && (
                <div style={styles.internshipTech}>
                  {internship.technologies.map((tech, idx) => (
                    <span key={idx} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.internships, processedData.hasData.internships]);

  // Projects with only achievement points (limited to 3) and single link with "Link:" text
  const renderProjects = useMemo(() => () => {
    if (!processedData.hasData.projects) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="project" /></span> PROJECTS
        </h3>
        <div style={styles.projectsList}>
          {processedData.projects.map((project, index) => (
            <div key={project.id} style={index === processedData.projects.length - 1 ? { ...styles.projectItem, borderBottom: 'none', paddingBottom: 0 } : styles.projectItem}>
              <div style={styles.projectHeader}>
                <div style={styles.projectTitleContent}>
                  <h4 style={styles.projectName}>{project.name}</h4>
                </div>
                <div style={styles.projectDateWrapper}>
                  <DateText 
                    start={project.startDate} 
                    end={project.endDate} 
                    current={project.current}
                  />
                </div>
              </div>
              
              {project.role && (
                <div style={styles.projectRole}>{project.role}</div>
              )}
              
              {/* ONLY bullet points - limited to 3, no description fallback */}
              {project.bulletPoints && project.bulletPoints.length > 0 ? (
                <ul style={styles.projectBullets}>
                  {project.bulletPoints.map((bullet, idx) => (
                    bullet && bullet.trim() !== '' && (
                      <li key={idx} style={styles.projectBulletItem}>
                        <span style={styles.projectBulletIcon}>{TemplateHelpers.getIcon('triangle')}</span> {bullet}
                      </li>
                    )
                  ))}
                </ul>
              ) : null}
              
              {/* SINGLE link - with "Link:" text */}
              {project.link && (
                <div style={styles.projectLinks}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.projectLink}
                    title={project.link}
                  >
                    <LinkIcon /> 
                    <span style={styles.projectLinkLabel}>Link:</span>
                    <span style={styles.projectLinkText}>{project.link}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.projects, processedData.hasData.projects]);

  // Education with GPA text (no icon)
  const renderEducation = useMemo(() => () => {
    if (!processedData.hasData.education) return null;
    
    return (
      <div style={styles.contentSection}>
        <h3 style={styles.sectionTitle}>
          <span style={styles.sectionIcon}><SectionIcon icon="education" /></span> EDUCATION
        </h3>
        <div style={styles.projectsList}>
          {processedData.education.map((edu, index) => (
            <div key={edu.id} style={index === processedData.education.length - 1 ? { ...styles.projectItem, borderBottom: 'none', paddingBottom: 0 } : styles.projectItem}>
              <div style={styles.projectHeader}>
                <div style={styles.projectTitleContent}>
                  <h4 style={styles.projectName}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</h4>
                </div>
                <div style={styles.projectDateWrapper}>
                  <DateText 
                    start={edu.startDate} 
                    end={edu.endDate} 
                    current={edu.current}
                  />
                </div>
              </div>
              
              {/* College/Institution name */}
              <div style={styles.educationInstitutionRow}>
                <span style={styles.educationInstitution}>{edu.institution}</span>
              </div>
              
              {/* Location and GPA side by side */}
              <div style={styles.educationLocationGpaRow}>
                {edu.location && (
                  <span style={styles.educationLocation}>
                    <LocationIcon /> {edu.location}
                  </span>
                )}
                {edu.gpa && (
                  <div style={styles.educationGpaWrapper}>
                    <span style={styles.educationGpa}>{edu.gpaText}: {edu.gpa}</span>
                  </div>
                )}
              </div>
              
              {/* Achievements below */}
              {edu.achievements.length > 0 && (
                <div style={styles.educationAchievementsRow}>
                  <ul style={{...styles.internshipBullets, margin: 0}}>
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx} style={styles.internshipBulletItem}>
                        <span style={styles.internshipBulletIcon}>{TemplateHelpers.getIcon('triangle')}</span> {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }, [processedData.education, processedData.hasData.education]);

  // Add print styles
  const printStyles = `
    @media print {
      .template18-print {
        background: white !important;
      }
      .template18-print .template18-header {
        background: linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%) !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .template18-print .content-section {
        background: white !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: none !important;
      }
      .template18-print .skill-item,
      .template18-print .tech-tag,
      .template18-print .language-item,
      .template18-print .project-link,
      .template18-print .cert-link {
        border: 1px solid #e2e8f0 !important;
        background: #f8fafc !important;
      }
      .template18-print .template18-header .profile-name,
      .template18-print .template18-header .contact-item,
      .template18-print .template18-header .contact-icon,
      .template18-print .template18-header .contact-link,
      .template18-print .template18-header .contact-text {
        color: white !important;
      }
      .template18-print .project-link .project-link-text {
        color: #1e293b !important;
      }
    }
  `;

  // Show loading spinner
  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <LoadingSpinner 
          size="lg" 
          color="#8B5CF6" 
          text="Loading template..." 
        />
      </div>
    );
  }

  return (
    <div 
      ref={templateRef}
      style={styles.container}
      className={isExporting ? 'template18-print' : ''}
      data-template="18"
    >
      <style>{printStyles}</style>
      {renderHeader()}
      
      <div style={styles.content}>
        <div style={styles.contentLeft}>
          {renderSummary()}
          {renderSkills()}
          {renderCertifications()}
          {renderLanguages()}
        </div>
        
        <div style={styles.contentRight}>
          {renderInternships()}
          {renderProjects()}
          {renderEducation()}
        </div>
      </div>
    </div>
  );
};

Template18.displayName = 'Template18';
export default Template18;