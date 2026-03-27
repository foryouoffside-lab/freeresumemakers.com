// ============================================
// components/templates/Template19.js
// COMPLETE NEXT.JS COMPATIBLE VERSION WITH LOADING SPINNER - OPTIMIZED
// UPDATED: 
// - Contact info styled like Template1 (no boxes, clean presentation)
// - LinkedIn "in" icon with blue color
// - Phone number formatted without brackets
// - Clean text-based contact display
// - No additional styling changes to existing structure
// - Added "Link:" text before project link
// - Darker dates and darker bullet points for better contrast
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// CONSTANTS - IMMUTABLE
const CONTENT_LIMITS = Object.freeze({
  skills: 7,
  education: 2,
  projects: 1,
  summaryWords: 120,
  awardsPerItem: 0,
  awardLength: 0,
  certifications: 1,
  internships: 1,
  internshipBullets: 4
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

  formatGPA: (gpa, scale) => {
    if (!gpa) return '';
    
    const gpaValue = TemplateHelpers.safeString(gpa);
    const gpaScale = scale || '4.0';
    
    if (!gpaValue) return '';
    
    if (gpaValue.includes('/')) return gpaValue;
    
    const numericGPA = parseFloat(gpaValue);
    if (isNaN(numericGPA)) return gpaValue;
    
    switch(gpaScale) {
      case '4.0':
        return `${numericGPA.toFixed(2)}/4.0`;
      case '5.0':
        return `${numericGPA.toFixed(2)}/5.0`;
      case '10.0':
        return `${numericGPA.toFixed(2)}/10`;
      case '100':
        return `${Math.round(numericGPA)}%`;
      default:
        return `${numericGPA.toFixed(2)}/${gpaScale}`;
    }
  },

  formatPhone: (phone) => {
    if (!phone) return '';
    // Just return the phone number without formatting
    return TemplateHelpers.safeString(phone);
  },

  extractDomain: (url) => {
    if (!url) return '';
    try {
      const domain = url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
      return domain;
    } catch {
      return url;
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
        return TemplateHelpers.formatPhone(value);
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

  icons: Object.freeze({
    email: 'âœ‰',
    phone: 'ðŸ“ž',
    location: 'ðŸ“',
    linkedin: 'in',
    github: 'âŒ¨',
    portfolio: 'ðŸŒ',
    calendar: 'ðŸ“…',
    briefcase: 'ðŸ’¼',
    project: 'âš¡',
    education: 'ðŸŽ“',
    internship: 'ðŸŒŸ',
    certification: 'ðŸ“œ',
    award: 'ðŸ†',
    bullet: 'â€”',
    dot: 'â€¢',
    triangle: 'â–¹'
  })
});

const Template19 = ({ 
  personalInfo = {}, 
  education = [], 
  skills = [], 
  professionalSummary = '', 
  projects = [],
  certifications = [],
  internships = [],
  isExporting = false 
}) => {
  
  const templateRef = useRef();
  const [loading, setLoading] = useState(true);
  const [hoveredContact, setHoveredContact] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Process education with proper GPA scaling
  const processedEducation = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(education)
      .filter(edu => TemplateHelpers.safeString(edu.degree))
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => {
        const bulletPoints = edu.achievements || edu.highlights || edu.bulletPoints || [];
        return Object.freeze({
          id: `edu-${Date.now()}-${Math.random()}`,
          degree: TemplateHelpers.safeString(edu.degree),
          field: TemplateHelpers.safeString(edu.fieldOfStudy || edu.major || edu.field),
          institution: TemplateHelpers.safeString(edu.institution || edu.school),
          location: TemplateHelpers.safeString(edu.location || edu.city),
          startDate: edu.startYear || edu.startDate,
          endDate: edu.endYear || edu.endDate || edu.graduationYear,
          current: edu.current || false,
          gpa: edu.gpa ? edu.gpa : '',
          gpaScale: edu.gpaScale || '4.0',
          gpaFormatted: edu.gpa ? TemplateHelpers.formatGPA(edu.gpa, edu.gpaScale) : '',
          bulletPoints: Object.freeze(TemplateHelpers.safeArray(bulletPoints)
            .slice(0, CONTENT_LIMITS.awardsPerItem)
            .map(b => TemplateHelpers.safeString(b)))
        });
      }));
  }, [education]);

  // Process internships with exactly 4 bullet points
  const processedInternships = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(internships)
      .filter(intern => TemplateHelpers.safeString(intern.position) || TemplateHelpers.safeString(intern.company))
      .slice(0, CONTENT_LIMITS.internships)
      .map(intern => {
        const bulletPoints = intern.achievements || intern.highlights || intern.responsibilities || intern.bulletPoints || [];
        const processedBullets = TemplateHelpers.safeArray(bulletPoints)
          .slice(0, CONTENT_LIMITS.internshipBullets)
          .map(b => TemplateHelpers.safeString(b))
          .filter(b => b !== '');
        
        return Object.freeze({
          id: `intern-${Date.now()}-${Math.random()}`,
          position: TemplateHelpers.safeString(intern.position || intern.role || intern.title),
          company: TemplateHelpers.safeString(intern.company || intern.organization || intern.employer),
          location: TemplateHelpers.safeString(intern.location),
          startDate: TemplateHelpers.formatDate(intern.startDate || intern.startYear),
          endDate: intern.current ? 'Present' : TemplateHelpers.formatDate(intern.endDate || intern.endYear),
          current: intern.current || false,
          bulletPoints: Object.freeze(processedBullets)
        });
      }));
  }, [internships]);

  // Process projects
  const processedProjects = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(projects)
      .filter(p => TemplateHelpers.safeString(p.name))
      .slice(0, CONTENT_LIMITS.projects)
      .map(project => {
        const primaryLink = TemplateHelpers.safeString(project.link || project.github || project.repository || '');
        
        return Object.freeze({
          id: `proj-${Date.now()}-${Math.random()}`,
          name: TemplateHelpers.safeString(project.name),
          role: TemplateHelpers.safeString(project.role || project.position || ''),
          link: primaryLink,
          startDate: TemplateHelpers.formatDate(project.startDate || project.startYear),
          endDate: project.current ? 'Present' : TemplateHelpers.formatDate(project.endDate || project.endYear),
          current: project.current || false,
          highlights: Object.freeze(Array.isArray(project.highlights) ? 
            project.highlights.map(h => TemplateHelpers.safeString(h)).filter(h => h !== '') : [])
        });
      }));
  }, [projects]);

  // Process skills
  const processedSkills = useMemo(() => {
    const allSkills = [];
    
    TemplateHelpers.safeArray(skills).forEach(skill => {
      if (typeof skill === 'object' && skill.name) {
        allSkills.push(TemplateHelpers.safeString(skill.name));
      } else if (typeof skill === 'string') {
        allSkills.push(TemplateHelpers.safeString(skill));
      }
    });
    
    return Object.freeze(allSkills.slice(0, CONTENT_LIMITS.skills));
  }, [skills]);

  // Process certifications
  const processedCertifications = useMemo(() => {
    return Object.freeze(TemplateHelpers.safeArray(certifications)
      .filter(cert => cert.name)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(cert => Object.freeze({
        id: `cert-${Date.now()}-${Math.random()}`,
        name: TemplateHelpers.safeString(cert.name),
        issuer: TemplateHelpers.safeString(cert.issuer || cert.organization),
        date: cert.date || cert.issueDate,
        current: cert.current || false
      })));
  }, [certifications]);

  // Summary
  const processedSummary = useMemo(() => {
    if (!professionalSummary) return '';
    const words = professionalSummary.split(' ');
    if (words.length <= CONTENT_LIMITS.summaryWords) return professionalSummary;
    return words.slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '...';
  }, [professionalSummary]);

  // OPTIMIZED CONTACT INFO - Like Template1 (clean, no boxes)
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    // Email
    if (personalInfo.email) {
      contacts.push(Object.freeze({ 
        type: 'email',
        icon: TemplateHelpers.icons.email, 
        displayValue: personalInfo.email,
        link: TemplateHelpers.getContactLink('email', personalInfo.email)
      }));
    }
    
    // Phone - no brackets formatting
    if (personalInfo.phone) {
      contacts.push(Object.freeze({ 
        type: 'phone',
        icon: TemplateHelpers.icons.phone, 
        displayValue: TemplateHelpers.formatPhone(personalInfo.phone),
        link: TemplateHelpers.getContactLink('phone', personalInfo.phone)
      }));
    }
    
    // Location
    if (personalInfo.location || personalInfo.address) {
      contacts.push(Object.freeze({ 
        type: 'location',
        icon: TemplateHelpers.icons.location, 
        displayValue: personalInfo.location || personalInfo.address,
        link: null
      }));
    }
    
    // LinkedIn - with proper formatting
    if (personalInfo.linkedin) {
      contacts.push(Object.freeze({ 
        type: 'linkedin',
        icon: TemplateHelpers.icons.linkedin,
        iconColor: '#0077b5',
        displayValue: TemplateHelpers.getContactDisplayValue('linkedin', personalInfo.linkedin),
        link: TemplateHelpers.getContactLink('linkedin', personalInfo.linkedin)
      }));
    }
    
    // GitHub
    if (personalInfo.github) {
      contacts.push(Object.freeze({ 
        type: 'github',
        icon: TemplateHelpers.icons.github, 
        displayValue: TemplateHelpers.getContactDisplayValue('github', personalInfo.github),
        link: TemplateHelpers.getContactLink('github', personalInfo.github)
      }));
    }
    
    // Portfolio
    if (personalInfo.portfolio) {
      contacts.push(Object.freeze({ 
        type: 'portfolio',
        icon: TemplateHelpers.icons.portfolio, 
        displayValue: TemplateHelpers.getContactDisplayValue('portfolio', personalInfo.portfolio),
        link: TemplateHelpers.getContactLink('portfolio', personalInfo.portfolio)
      }));
    }
    
    return Object.freeze(contacts);
  }, [personalInfo]);

  const hasData = useMemo(() => Object.freeze({
    education: processedEducation.length > 0,
    internships: processedInternships.length > 0,
    projects: processedProjects.length > 0,
    skills: processedSkills.length > 0,
    certifications: processedCertifications.length > 0,
    summary: processedSummary.length > 0,
    contact: contactInfo.length > 0
  }), [processedEducation, processedInternships, processedProjects, processedSkills, processedCertifications, processedSummary, contactInfo]);

  const BLUE_COLOR = '#2563eb';

  // OPTIMIZED CONTACT RENDER FUNCTION - Clean text-based, no boxes
  const renderContactItem = (contact, index) => {
    const isHovered = hoveredContact === index;
    const iconColor = contact.iconColor || BLUE_COLOR;
    
    const content = (
      <>
        <span style={{
          width: '20px',
          fontSize: '13px',
          color: iconColor,
          fontWeight: 600,
          display: 'inline-block',
          textAlign: 'center'
        }}>{contact.icon}</span>
        <span style={{
          flex: 1,
          fontSize: '12px',
          color: '#000000',
          fontWeight: 500
        }}>{contact.displayValue}</span>
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
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            padding: '4px 0'
          }}
          onMouseEnter={() => setHoveredContact(index)}
          onMouseLeave={() => setHoveredContact(null)}
          title={contact.displayValue}
        >
          {content}
        </a>
      );
    }
    
    return (
      <div 
        key={index} 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '4px 0',
          cursor: 'default'
        }}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  };

  // Styles - Darker dates and darker bullet points
  const styles = {
    blueText: BLUE_COLOR,
    
    // Internship styles
    internshipItem: {
      borderBottom: '1px solid #334155',
      paddingBottom: '8px',
      marginBottom: '10px'
    },
    internshipHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '6px'
    },
    internshipTitle: {
      fontSize: '16px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 3px',
      lineHeight: 1.3
    },
    internshipCompany: {
      fontSize: '13px',
      color: BLUE_COLOR,
      fontWeight: 600,
      lineHeight: 1.3,
      display: 'inline-block',
      marginRight: '8px'
    },
    internshipLocation: {
      fontSize: '12px',
      color: '#1e293b',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    },
    // UPDATED: Darker date
    internshipDate: {
      fontSize: '12px',
      color: '#1f2937', // Darker from #4b5563 to #1f2937
      fontWeight: 600, // Increased from 500 to 600
      whiteSpace: 'nowrap',
      minWidth: '120px',
      textAlign: 'right'
    },
    internshipBullets: {
      margin: '6px 0 0 0',
      padding: 0,
      listStyle: 'none'
    },
    // UPDATED: Darker bullet point text
    internshipBulletItem: {
      fontSize: '12px',
      color: '#000000', // Pure black
      marginBottom: '4px',
      display: 'flex',
      alignItems: 'flex-start',
      lineHeight: 1.5,
      fontWeight: 500 // Increased from 400 to 500
    },
    internshipBulletIcon: {
      display: 'inline-block',
      marginRight: '8px',
      color: BLUE_COLOR,
      fontSize: '13px',
      fontWeight: 'bold',
      minWidth: '20px'
    },

    // Project styles
    projectItem: {
      borderBottom: '1px solid #334155',
      paddingBottom: '8px',
      marginBottom: '10px'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    projectName: {
      fontSize: '16px',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.3,
      flex: 1
    },
    projectRole: {
      fontSize: '13px',
      fontWeight: 600,
      color: BLUE_COLOR,
      lineHeight: 1.3,
      marginBottom: '6px'
    },
    // UPDATED: Darker project date
    projectDate: {
      fontSize: '12px',
      color: '#1f2937', // Darker from #4b5563 to #1f2937
      fontWeight: 600, // Increased from 500 to 600
      whiteSpace: 'nowrap',
      minWidth: '120px',
      textAlign: 'right',
      flexShrink: 0
    },
    projectHighlights: {
      margin: '6px 0 0 0',
      padding: 0,
      listStyle: 'none'
    },
    // UPDATED: Darker project highlight text
    projectHighlightItem: {
      fontSize: '12px',
      color: '#000000', // Pure black
      marginBottom: '4px',
      display: 'flex',
      alignItems: 'flex-start',
      lineHeight: 1.5,
      fontWeight: 500 // Increased from 400 to 500
    },
    projectHighlightIcon: {
      display: 'inline-block',
      marginRight: '8px',
      color: BLUE_COLOR,
      fontSize: '13px',
      fontWeight: 'bold',
      minWidth: '20px'
    },
    projectLink: {
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    projectLinkText: {
      color: BLUE_COLOR,
      textDecoration: 'none',
      wordBreak: 'break-all',
      fontWeight: 600,
      fontSize: '11px',
      '&:hover': {
        textDecoration: 'underline'
      }
    },

    // Certification styles (for main content)
    certificationItem: {
      borderBottom: '1px solid #334155',
      paddingBottom: '8px',
      marginBottom: '10px'
    },
    certificationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '4px'
    },
    certificationName: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      lineHeight: 1.3
    },
    certificationIssuer: {
      fontSize: '13px',
      color: BLUE_COLOR,
      fontWeight: 600,
      lineHeight: 1.3,
      marginBottom: '2px'
    },
    certificationDate: {
      fontSize: '11px',
      color: '#1f2937', // Darker from #4b5563 to #1f2937
      fontWeight: 600 // Increased from 500 to 600
    },

    // Skill chip styles
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '10px'
    },
    skillChip: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '30px',
      fontSize: '11px',
      color: '#1e293b',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      fontWeight: 500,
      transition: 'all 0.2s ease'
    }
  };

  // Render functions
  const renderSidebar = useMemo(() => () => (
    <div style={{
      background: '#f1f5f9',
      padding: '30px 20px',
      borderRight: '1px solid #334155',
      height: '100%'
    }}>
      {/* Profile */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        {personalInfo.photo ? (
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.fullName} 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid white'
            }}
            crossOrigin="anonymous"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, #000000, ${BLUE_COLOR})`,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            fontWeight: 600,
            margin: '0 auto'
          }}>
            {personalInfo.fullName ? 
              personalInfo.fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 
              'U'
            }
          </div>
        )}
      </div>

      {/* OPTIMIZED CONTACT SECTION - Clean, no boxes, like Template1 */}
      {hasData.contact && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            borderBottom: `2px solid ${BLUE_COLOR}`,
            textTransform: 'uppercase'
          }}>CONTACT</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {contactInfo.map((contact, idx) => renderContactItem(contact, idx))}
          </div>
        </div>
      )}

      {/* Skills */}
      {hasData.skills && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            borderBottom: `2px solid ${BLUE_COLOR}`,
            textTransform: 'uppercase'
          }}>SKILLS</h3>
          <div style={styles.skillsContainer}>
            {processedSkills.map((skill, index) => (
              <div 
                key={index} 
                style={styles.skillChip}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BLUE_COLOR;
                  e.currentTarget.style.boxShadow = `0 2px 4px 0 ${BLUE_COLOR}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }}
              >
                <span style={{ color: '#000000' }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {hasData.education && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            borderBottom: `2px solid ${BLUE_COLOR}`,
            textTransform: 'uppercase'
          }}>EDUCATION</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {processedEducation.map(edu => (
              <div key={edu.id} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <div style={{
                  fontWeight: 700,
                  color: '#000000',
                  fontSize: '13px',
                  lineHeight: 1.4
                }}>
                  {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                </div>
                <div style={{
                  color: BLUE_COLOR,
                  fontSize: '12px',
                  lineHeight: 1.4,
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  {edu.institution}
                </div>
                {edu.location && (
                  <div style={{
                    color: '#1e293b',
                    fontSize: '11px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '2px'
                  }}>
                    <span style={{ color: BLUE_COLOR, fontSize: '11px' }}>{TemplateHelpers.icons.location}</span> {edu.location}
                  </div>
                )}
                <div style={{
                  color: '#1f2937', // Darker date
                  fontSize: '11px',
                  fontWeight: 600,
                  marginTop: '2px'
                }}>
                  {TemplateHelpers.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  {edu.gpa && ` | GPA: ${edu.gpaFormatted}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ), [personalInfo, contactInfo, processedSkills, processedEducation, hasData, BLUE_COLOR, styles, renderContactItem]);

  // Main content - Certifications moved below Projects
  const renderMainContent = useMemo(() => () => (
    <div style={{
      background: '#ffffff',
      padding: '40px 35px'
    }}>
      {/* Header */}
      <div style={{
        marginBottom: '30px',
        borderBottom: '2px solid #334155',
        paddingBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: 700,
          color: '#000000',
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: '-0.5px'
        }}>{personalInfo.fullName || 'Your Name'}</h1>
      </div>

      {/* Summary */}
      {hasData.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            position: 'relative',
            letterSpacing: '0.5px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '3px',
              background: BLUE_COLOR
            }}></span>
            PROFESSIONAL SUMMARY
          </h3>
          <p style={{
            margin: 0,
            lineHeight: 1.7,
            color: '#000000',
            fontSize: '13px',
            fontWeight: 500
          }}>{processedSummary}</p>
        </div>
      )}

      {/* INTERNSHIPS */}
      {hasData.internships && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            position: 'relative',
            letterSpacing: '0.5px'
          }}>
            <span style={{
              display: 'inline-block',
              marginRight: '8px',
              fontSize: '17px',
              color: BLUE_COLOR
            }}>{TemplateHelpers.icons.internship}</span>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '3px',
              background: BLUE_COLOR
            }}></span>
            INTERNSHIPS
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {processedInternships.map((intern, index) => (
              <div key={intern.id} style={index < processedInternships.length - 1 ? styles.internshipItem : { ...styles.internshipItem, borderBottom: 'none', paddingBottom: 0 }}>
                <div style={styles.internshipHeader}>
                  <div>
                    <h4 style={styles.internshipTitle}>{intern.position}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 8px' }}>
                      <span style={styles.internshipCompany}>{intern.company}</span>
                      {intern.location && (
                        <span style={styles.internshipLocation}>
                          <span style={{ color: BLUE_COLOR, fontSize: '12px', marginRight: '2px' }}>{TemplateHelpers.icons.location}</span> {intern.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={styles.internshipDate}>
                    {TemplateHelpers.formatDateRange(intern.startDate, intern.endDate, intern.current)}
                  </div>
                </div>
                
                {intern.bulletPoints.length > 0 && (
                  <ul style={styles.internshipBullets}>
                    {intern.bulletPoints.map((bullet, idx) => (
                      <li key={idx} style={styles.internshipBulletItem}>
                        <span style={styles.internshipBulletIcon}>{TemplateHelpers.icons.triangle}</span> 
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS */}
      {hasData.projects && (
        <div style={{ marginBottom: hasData.projects ? '20px' : '0' }}>
          <h3 style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            position: 'relative',
            letterSpacing: '0.5px'
          }}>
            <span style={{
              display: 'inline-block',
              marginRight: '8px',
              fontSize: '17px',
              color: BLUE_COLOR
            }}>{TemplateHelpers.icons.project}</span>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '3px',
              background: BLUE_COLOR
            }}></span>
            PROJECTS
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {processedProjects.map((project, index) => (
              <div key={project.id} style={index < processedProjects.length - 1 ? styles.projectItem : { ...styles.projectItem, borderBottom: 'none', paddingBottom: 0 }}>
                <div style={styles.projectHeader}>
                  <h4 style={styles.projectName}>{project.name}</h4>
                  <div style={styles.projectDate}>
                    {TemplateHelpers.formatDateRange(project.startDate, project.endDate, project.current)}
                  </div>
                </div>
                
                {project.role && (
                  <div style={styles.projectRole}>{project.role}</div>
                )}
                
                {project.highlights.length > 0 && (
                  <ul style={styles.projectHighlights}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={styles.projectHighlightItem}>
                        <span style={styles.projectHighlightIcon}>{TemplateHelpers.icons.triangle}</span> {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Updated link section with "Link:" text */}
                {project.link && (
                  <div style={styles.projectLink}>
                    <span style={{ 
                      color: '#000000', 
                      fontSize: '11px', 
                      fontWeight: 600 
                    }}>Link:</span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.projectLinkText}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {project.link}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CERTIFICATIONS - MOVED BELOW PROJECTS */}
      {hasData.certifications && (
        <div style={{ marginBottom: '0' }}>
          <h3 style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 15px 0',
            paddingBottom: '8px',
            position: 'relative',
            letterSpacing: '0.5px'
          }}>
            <span style={{
              display: 'inline-block',
              marginRight: '8px',
              fontSize: '17px',
              color: BLUE_COLOR
            }}>{TemplateHelpers.icons.certification}</span>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50px',
              height: '3px',
              background: BLUE_COLOR
            }}></span>
            CERTIFICATIONS
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {processedCertifications.map((cert, index) => (
              <div key={cert.id} style={index < processedCertifications.length - 1 ? styles.certificationItem : { ...styles.certificationItem, borderBottom: 'none', paddingBottom: 0 }}>
                <div style={styles.certificationHeader}>
                  <div>
                    <h4 style={styles.certificationName}>{cert.name}</h4>
                    {cert.issuer && (
                      <div style={styles.certificationIssuer}>{cert.issuer}</div>
                    )}
                  </div>
                  {cert.date && (
                    <div style={styles.certificationDate}>
                      {TemplateHelpers.formatDate(cert.date)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ), [personalInfo, processedSummary, processedInternships, processedProjects, processedCertifications, hasData, BLUE_COLOR, styles]);

  // Show loading spinner
  if (loading) {
    return (
      <div style={{ 
        minHeight: '500px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <LoadingSpinner 
          size="lg" 
          color={BLUE_COLOR} 
          text="Loading template..." 
        />
      </div>
    );
  }

  // Define CSS variables
  const cssVariables = {
    '--primary-color': '#000000',
    '--accent-color': BLUE_COLOR,
    '--text-dark': '#000000',
    '--text-medium': '#1e293b',
    '--text-light': '#334155',
    '--border-color': '#334155',
    '--bg-sidebar': '#f1f5f9',
    '--bg-main': '#ffffff'
  };

  return (
    <div 
      ref={templateRef}
      className={`template19-container ${isExporting ? 'export-mode' : ''}`}
      data-template="19"
      style={{
        ...cssVariables,
        fontFamily: "'Inter', 'Segoe UI', Roboto, -apple-system, sans-serif",
        background: '#ffffff',
        maxWidth: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        fontSize: '12px',
        lineHeight: 1.5,
        color: '#000000'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        minHeight: '297mm'
      }}>
        {renderSidebar()}
        {renderMainContent()}
      </div>
    </div>
  );
};

Template19.displayName = 'Template19';
export default Template19;