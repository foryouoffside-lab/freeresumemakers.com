import Head from 'next/head';
// ============================================
// components/templates/Template1.js 
// UPDATED: LinkedIn "in" icon in blue color
// - Shows username instead of full URL
// - Maintains clickable link functionality
// - Handles both full URLs and usernames
// - Uses blue-colored LinkedIn "in" icon
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// CONSTANTS - IMMUTABLE
const CONTENT_LIMITS = Object.freeze({
  skills: 7,
  experiences: 1,
  education: 1,
  certifications: 1,
  summaryWords: 100,
  achievementsPerExperience: 4,
  achievementLength: 140,
});

// SPACING CONFIGURATION - CONSTANT (NO ADJUSTMENTS)
const SPACING_CONFIG = Object.freeze({
  headerPadding: '25px 35px 20px 35px',
  contentGridGap: '25px',
  contentPadding: '25px 35px',
  sectionGap: '15px',
  itemGap: '8px',
  summaryPadding: '15px 18px',
  contactItemPadding: '6px 8px',
  skillItemPadding: '6px 8px',
  certItemPadding: '12px',
  eduItemPadding: '12px',
  expItemPadding: '14px',
  sectionTitleMargin: '0 0 8px 0',
  sectionTitlePadding: '8px 12px',
  photoSize: '160px'
});

// ICON MAPPING - Fixed characters
const ICON_MAPPING = Object.freeze({
  email: '✉️',
  phone: '📞',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color
  github: '🐙',
  portfolio: '🌐',
  default: '📄'
});

// Helper functions
const TemplateHelpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
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
    
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }
    
    if (/^[a-zA-Z]+\s+\d{4}$/.test(dateString)) return dateString;
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return dateString;
  },

  formatMonthYear: (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
      return 'Present';
    }
    
    try {
      if (dateString.includes('-')) {
        const [year, month] = dateString.split('-');
        if (year && month) {
          const date = new Date(parseInt(year), parseInt(month) - 1);
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        }
      }
      return TemplateHelpers.formatDate(dateString);
    } catch {
      return dateString;
    }
  },

  getItemName: Object.freeze({
    skill: (item) => typeof item === 'object' ? item.name || '' : TemplateHelpers.safeString(item)
  }),

  formatLink: (link) => {
    if (!link) return '';
    let formatted = TemplateHelpers.safeString(link);
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      return `https://${formatted}`;
    }
    return formatted;
  },

  // ===== LINK FORMATTING FUNCTIONS (like Template17) =====
  formatLinkedInLink: (linkedin) => {
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

  truncateLink: (link, maxLength = 40) => {
    const formatted = TemplateHelpers.safeString(link);
    if (formatted.length <= maxLength) return formatted;
    
    const start = formatted.substring(0, 20);
    const end = formatted.substring(formatted.length - 15);
    return `${start}...${end}`;
  },
  
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

  getContactIcon: (type) => {
    const iconConfig = ICON_MAPPING[type] || ICON_MAPPING.default;
    // If it's an object with icon and color, return the icon
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
  }
});

// Template1 Component
const Template1 = ({ 
  personalInfo = {}, 
  experience = [], 
  education = [], 
  skills = [], 
  professionalSummary = '', 
  certifications = [],
  isExporting = false
}) => {
  
  const templateRef = useRef();
  const [loading, setLoading] = useState(true);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredEducation, setHoveredEducation] = useState(null);
  const [hoveredCertification, setHoveredCertification] = useState(null);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const context = useResume();

  // Helper functions
  const hasExperienceContent = useMemo(() => (exp) => {
    if (!exp) return false;
    
    const hasTitle = TemplateHelpers.safeString(exp.title || exp.position || exp.role).length > 0;
    const hasOrganization = TemplateHelpers.safeString(exp.organization || exp.company).length > 0;
    
    let hasContent = false;
    if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
      hasContent = exp.bulletPoints.some(bp => TemplateHelpers.safeString(bp).length > 0);
    } else if (exp.achievements && Array.isArray(exp.achievements)) {
      hasContent = exp.achievements.some(ach => TemplateHelpers.safeString(ach).length > 0);
    } else if (exp.description) {
      hasContent = TemplateHelpers.safeString(exp.description).length > 0;
    }
    
    return (hasTitle && hasOrganization) || hasContent;
  }, []);

  const processExperience = useMemo(() => (exp) => {
    const bulletPoints = exp.bulletPoints || exp.achievements || [];
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
    
    const cleanedBulletPoints = bulletPoints.map(bullet => {
      let cleaned = TemplateHelpers.safeString(bullet);
      cleaned = cleaned.replace(/^[•\*\-]\s*/, '');
      cleaned = cleaned.replace(/\.\.+/g, '.');
      return cleaned;
    });
    
    return Object.freeze({
      ...exp,
      hasBulletPoints,
      bulletPoints: hasBulletPoints ? 
        Object.freeze(TemplateHelpers.safeArray(cleanedBulletPoints)
          .slice(0, CONTENT_LIMITS.achievementsPerExperience)
          .map(bullet => 
            TemplateHelpers.safeString(bullet).slice(0, CONTENT_LIMITS.achievementLength)
          )) : Object.freeze([]),
      description: !hasBulletPoints && exp.description ? 
        TemplateHelpers.safeString(exp.description).slice(0, CONTENT_LIMITS.descriptionLength) : '',
      organization: exp.organization || exp.company || '',
      title: exp.title || exp.position || exp.role || '',
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      technologies: Object.freeze(TemplateHelpers.safeArray(exp.technologies || [])),
      location: exp.location || '',
      formattedStartDate: TemplateHelpers.formatMonthYear(exp.startDate),
      formattedEndDate: exp.current ? 'Present' : TemplateHelpers.formatMonthYear(exp.endDate)
    });
  }, []);

  const formatEducationDate = (startDate, endDate, current) => {
    const start = TemplateHelpers.formatMonthYear(startDate);
    const end = current ? 'Present' : TemplateHelpers.formatMonthYear(endDate);
    
    if (!start && !end) return '';
    if (start && !end) return start;
    if (!start && end) return end;
    return `${start} – ${end}`;
  };

  const processEducation = useMemo(() => (edu) => {
    const startDate = TemplateHelpers.safeString(edu.startYear || edu.startDate);
    const endDate = edu.current ? 'Present' : TemplateHelpers.safeString(edu.endYear || edu.endDate || edu.graduationYear);
    
    const gpaDisplay = edu.gpa ? TemplateHelpers.formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return Object.freeze({
      ...edu,
      degree: TemplateHelpers.safeString(edu.degree || edu.course),
      institution: TemplateHelpers.safeString(edu.institution || edu.college || edu.university),
      location: TemplateHelpers.safeString(edu.location || personalInfo?.location || ''),
      startYear: startDate,
      endYear: endDate,
      current: edu.current || false,
      formattedStartDate: TemplateHelpers.formatMonthYear(startDate),
      formattedEndDate: edu.current ? 'Present' : TemplateHelpers.formatMonthYear(endDate),
      displayDate: formatEducationDate(startDate, endDate, edu.current),
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay: gpaDisplay,
      honors: edu.honors || ''
    });
  }, [personalInfo]);

  const processCertification = useMemo(() => (cert) => {
    if (!cert) return null;
    
    return Object.freeze({
      name: TemplateHelpers.safeString(cert.name || cert.title || ''),
      issuer: TemplateHelpers.safeString(cert.issuer || cert.organization || ''),
      date: cert.date || '',
      formattedDate: TemplateHelpers.formatMonthYear(cert.date)
    });
  }, []);

  // UPDATED: Render contact item with LinkedIn "in" icon in blue
  const renderContactItem = (contact, index) => {
    const isHovered = hoveredContact === index;
    const link = contact.link;
    const displayValue = contact.displayValue;
    const isLink = link && (contact.type === 'email' || contact.type === 'linkedin' || contact.type === 'github' || contact.type === 'portfolio' || contact.type === 'phone');
    
    // Get custom color for the icon if available
    const iconColor = contact.type === 'linkedin' ? TemplateHelpers.getContactIconColor('linkedin') : null;
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          ...(iconColor && { color: iconColor, fontWeight: 'bold' })
        }}>
          {contact.icon}
        </span>
        <span style={styles.contactValue}>{displayValue}</span>
      </>
    );
    
    if (isLink && link) {
      let finalLink = link;
      
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
            ...styles.contactItem,
            padding: SPACING_CONFIG.contactItemPadding,
            ...(isHovered ? styles.contactItemHover : {}),
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseEnter={() => setHoveredContact(index)}
          onMouseLeave={() => setHoveredContact(null)}
          title={finalLink}
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
          padding: SPACING_CONFIG.contactItemPadding,
          ...(isHovered ? styles.contactItemHover : {})
        }}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  };

  const renderSkillItem = (skill, index) => {
    const isHovered = hoveredSkill === index;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.skillItem,
          padding: SPACING_CONFIG.skillItemPadding,
          ...(isHovered ? styles.skillItemHover : {})
        }}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <span style={styles.skillName}>
          {TemplateHelpers.getItemName.skill(skill)}
        </span>
      </div>
    );
  };

  const renderCertificationItem = (cert, index) => {
    const isHovered = hoveredCertification === index;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.certificationItem,
          padding: SPACING_CONFIG.certItemPadding,
          ...(isHovered ? styles.certificationItemHover : {})
        }}
        onMouseEnter={() => setHoveredCertification(index)}
        onMouseLeave={() => setHoveredCertification(null)}
      >
        <div style={styles.certificationHeader}>
          <div style={styles.certificationMain}>
            <h4 style={styles.certificationName}>{cert.name}</h4>
            {cert.issuer && (
              <div style={styles.certificationIssuer}>{cert.issuer}</div>
            )}
            {cert.formattedDate && (
              <div style={styles.certificationDate}>
                {cert.formattedDate}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderEducationItem = (edu, index) => {
    const isHovered = hoveredEducation === index;
    const isMobile = windowWidth < 768;
    
    const dateDisplay = edu.formattedStartDate && edu.formattedEndDate 
      ? `${edu.formattedStartDate} – ${edu.formattedEndDate}`
      : edu.displayDate;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.educationItem,
          padding: SPACING_CONFIG.eduItemPadding,
          ...(isHovered ? styles.educationItemHover : {})
        }}
        onMouseEnter={() => setHoveredEducation(index)}
        onMouseLeave={() => setHoveredEducation(null)}
      >
        <div style={{
          ...styles.educationHeader,
          ...(isMobile ? styles.mobileEducationHeader : {})
        }}>
          <div style={styles.educationMain}>
            <h4 style={{
              ...styles.degreeTitle,
              ...(isMobile ? { fontSize: '15px' } : {})
            }}>
              {edu.degree}
            </h4>
          </div>
          
          {dateDisplay && (
            <div style={{
              ...styles.educationDates,
              ...(isMobile ? styles.mobileEducationDates : {})
            }}>
              {dateDisplay}
              {edu.current && <span style={styles.educationCurrent}>• Current</span>}
            </div>
          )}
        </div>
        
        <div style={{
          ...styles.institutionInfo,
          ...(isMobile ? styles.mobileInstitutionInfo : {})
        }}>
          <span style={styles.institutionName}>
            {edu.institution}
          </span>
          
          <div style={{
            ...styles.locationGpaRow,
            ...(isMobile ? styles.mobileLocationGpaRow : {})
          }}>
            {edu.location && edu.location.trim() && (
              <span style={styles.institutionLocation}>
                <span style={styles.locationIcon}>📍</span> {edu.location}
              </span>
            )}
            
            {edu.gpaDisplay && (
              <span style={{
                ...styles.gpaBadge,
                ...(isMobile ? styles.mobileGpaBadge : {})
              }}>
                <span style={styles.gpaIcon}>⭐</span>
                <span style={styles.gpaText}>{edu.gpaDisplay}</span>
              </span>
            )}
          </div>
        </div>
        
        {edu.honors && edu.honors.trim() && (
          <div style={{
            ...styles.honorsContainer,
            ...(isMobile ? styles.mobileHonorsContainer : {})
          }}>
            <span style={styles.honorsIcon}>🏆</span>
            <span style={styles.honorsText}>{edu.honors}</span>
          </div>
        )}
      </div>
    );
  };

  const renderExperienceItem = (exp, index) => {
    const hasBulletPoints = exp.hasBulletPoints;
    const isHovered = hoveredExperience === index;
    const isMobile = windowWidth < 768;
    
    const dateDisplay = exp.formattedStartDate && exp.formattedEndDate 
      ? `${exp.formattedStartDate} – ${exp.formattedEndDate}`
      : `${TemplateHelpers.formatDate(exp.startDate)} – ${TemplateHelpers.formatDate(exp.endDate)}`;
    
    const locationValue = exp.location && typeof exp.location === 'string' ? exp.location.trim() : '';
    const hasLocation = locationValue.length > 0;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.experienceItem,
          padding: SPACING_CONFIG.expItemPadding,
          ...(isHovered ? styles.experienceItemHover : {}),
          ...(isMobile ? { padding: '12px' } : {})
        }}
        onMouseEnter={() => setHoveredExperience(index)}
        onMouseLeave={() => setHoveredExperience(null)}
      >
        <div style={{
          ...styles.experienceHeader,
          ...(isMobile ? styles.mobileExperienceHeader : {})
        }}>
          <div style={styles.experienceMain}>
            <h4 style={styles.positionTitle}>
              {TemplateHelpers.safeString(exp.title)}
            </h4>
            <div style={{
              ...styles.companyInfo,
              ...(isMobile ? styles.mobileCompanyInfo : {})
            }}>
              <span style={styles.companyName}>
                {TemplateHelpers.safeString(exp.organization)}
              </span>
              {hasLocation && (
                <span style={styles.companyLocation}>
                  <span style={styles.locationIcon}>📍</span> {locationValue}
                </span>
              )}
            </div>
          </div>
          <div style={{
            ...styles.experienceDates,
            ...(isMobile ? styles.mobileExperienceDates : {})
          }}>
            {dateDisplay}
          </div>
        </div>
        
        {hasBulletPoints ? (
          exp.bulletPoints && exp.bulletPoints.length > 0 && (
            <ul style={styles.achievementsList}>
              {exp.bulletPoints.map((bullet, idx) => (
                <li key={idx} style={styles.achievementItem}>
                  <span style={styles.bulletPoint}>•</span>
                  <span style={styles.achievementText}>
                    {TemplateHelpers.safeString(bullet)}
                  </span>
                </li>
              ))}
            </ul>
          )
        ) : (
          exp.description && (
            <div style={styles.descriptionContent}>
              <p style={styles.descriptionText}>
                {TemplateHelpers.safeString(exp.description)}
              </p>
            </div>
          )
        )}
        
        {exp.technologies && exp.technologies.length > 0 && (
          <div style={styles.techInline}>
            <span style={styles.techLabel}>Technologies:</span>
            <div style={styles.techTags}>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} style={styles.techTag}>
                  {TemplateHelpers.safeString(tech)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Memoized data
  const allExperiencesWithContent = useMemo(() => {
    const experiences = TemplateHelpers.safeArray(experience).filter(hasExperienceContent);
    return Object.freeze(experiences.map(processExperience));
  }, [experience, hasExperienceContent, processExperience]);

  const workExperience = useMemo(() => {
    const experiencesOfWork = allExperiencesWithContent.filter(exp => 
      !exp.type || exp.type === 'job' || exp.type === 'work'
    );
    return experiencesOfWork.length > 0 ? [experiencesOfWork[0]] : [];
  }, [allExperiencesWithContent]);

  const processedSummary = useMemo(() => {
    if (!professionalSummary) return '';
    if (typeof professionalSummary !== 'string') return String(professionalSummary);
    return professionalSummary;
  }, [professionalSummary]);

  const contentAnalysis = useMemo(() => {
    const filteredEducation = Object.freeze(TemplateHelpers.safeArray(education)
      .filter(edu => TemplateHelpers.safeString(edu.degree).length > 0 || TemplateHelpers.safeString(edu.institution).length > 0)
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => {
        const processed = processEducation(edu);
        return {
          ...processed,
          gpa: edu.gpa || '',
          gpaScale: edu.gpaScale || '4.0',
          gpaDisplay: edu.gpa ? TemplateHelpers.formatGPA(edu.gpa, edu.gpaScale) : '',
          honors: edu.honors || ''
        };
      }));

    const filteredCertifications = Object.freeze(
      TemplateHelpers.safeArray(certifications)
        .map(processCertification)
        .filter(cert => cert && cert.name.length > 0)
        .slice(0, CONTENT_LIMITS.certifications)
    );

    const summaryLength = processedSummary ? processedSummary.length : 0;

    const sections = Object.freeze({
      summary: summaryLength > 0,
      hasWorkExperience: workExperience.length > 0,
      hasAnyExperience: allExperiencesWithContent.length > 0,
      skills: TemplateHelpers.safeArray(skills).slice(0, CONTENT_LIMITS.skills).length,
      education: filteredEducation.length,
      certifications: filteredCertifications.length
    });

    return Object.freeze({
      workExperience,
      allExperiencesCount: allExperiencesWithContent.length,
      skills: Object.freeze(TemplateHelpers.safeArray(skills).slice(0, CONTENT_LIMITS.skills)),
      education: filteredEducation,
      certifications: filteredCertifications,
      processedSummary,
      summaryLength,
      sections,
      activeSections: Object.values(sections).filter(Boolean).length
    });
  }, [processedSummary, allExperiencesWithContent, workExperience, skills, education, certifications, processEducation, processCertification]);

  const renderSummaryContent = () => {
    const summary = contentAnalysis.processedSummary;
    
    if (!summary) {
      return (
        <div style={{ 
          color: '#999', 
          fontStyle: 'italic',
          fontFamily: styles.summaryText.fontFamily
        }}>
          No professional summary added
        </div>
      );
    }
    
    const paragraphs = summary.split('\n').filter(p => p.trim().length > 0);
    
    if (paragraphs.length > 1) {
      return (
        <div>
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} style={{
              ...styles.summaryText,
              marginBottom: idx < paragraphs.length - 1 ? '12px' : '0'
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <p style={styles.summaryText}>
          {summary}
        </p>
      );
    }
  };

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Add dynamic styles for mobile
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 767px) {
        .template1-gpa-badge {
          padding: 2px 6px !important;
          font-size: 11px !important;
        }
        .template1-honors {
          padding: 6px 10px !important;
          font-size: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Contact info with formatted display values
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key, icon) => {
      if (value && TemplateHelpers.safeString(value)) {
        const type = TemplateHelpers.getContactType(key);
        const link = TemplateHelpers.getContactLink(type, value);
        const displayValue = TemplateHelpers.getContactDisplayValue(type, value);
        
        contacts.push(Object.freeze({ 
          originalValue: TemplateHelpers.safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type, 
          icon,
          link
        }));
      }
    };

    addContact(personalInfo.email, 'email', TemplateHelpers.getContactIcon('email'));
    addContact(personalInfo.phone, 'phone', TemplateHelpers.getContactIcon('phone'));
    addContact(personalInfo.address, 'address', TemplateHelpers.getContactIcon('address'));
    addContact(personalInfo.linkedin, 'linkedin', TemplateHelpers.getContactIcon('linkedin'));
    addContact(personalInfo.github, 'github', TemplateHelpers.getContactIcon('github'));
    addContact(personalInfo.portfolio, 'portfolio', TemplateHelpers.getContactIcon('portfolio'));

    return Object.freeze(contacts.slice(0, 6));
  }, [personalInfo]);

  const displayTotalExperience = useMemo(() => {
    return () => {
      if (personalInfo?.totalExperience && TemplateHelpers.safeString(personalInfo.totalExperience)) {
        return TemplateHelpers.safeString(personalInfo.totalExperience);
      }
      return null;
    };
  }, [personalInfo?.totalExperience]);

  // Loading state
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
          color="#2c578b" 
          text="Loading template..." 
        />
      </div>
    );
  }

  const isMobile = windowWidth < 768;

  return (
    <div 
      ref={templateRef}
      style={{
        ...styles.template,
        ...(isExporting ? { boxShadow: 'none', border: 'none' } : {})
      }}
      data-template-version="1.0.25"
      data-template-locked="true"
    >
      <header style={{
        ...styles.header,
        ...(isMobile ? styles.mobileHeader : {})
      }}>
        <div style={styles.headerBg}></div>
        <div style={styles.headerContent}>
          <div style={{
            ...styles.profileSection,
            ...(isMobile ? styles.mobileProfileSection : {})
          }}>
            {personalInfo.photo && (
              <div style={{
                ...styles.photoContainer,
                ...(isMobile ? styles.mobilePhotoContainer : {})
              }}>
                <img 
                  src={personalInfo.photo} 
                  alt="Profile" 
                  style={styles.profilePhoto}
                  crossOrigin="anonymous"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            )}
            
            <div style={{
              ...styles.nameSection,
              ...(isMobile ? styles.mobileNameSection : {})
            }}>
              <div style={styles.nameTop}>
                <h1 style={{
                  ...styles.fullName,
                  ...(isMobile ? styles.mobileFullName : {})
                }}>
                  {TemplateHelpers.safeString(personalInfo.fullName) || 'Your Name'}
                </h1>
                {personalInfo?.jobTitle && (
                  <h2 style={{
                    ...styles.jobTitle,
                    ...(isMobile ? styles.mobileJobTitle : {})
                  }}>
                    {TemplateHelpers.safeString(personalInfo.jobTitle)}
                  </h2>
                )}
              </div>
              
              {displayTotalExperience() && (
                <div style={{
                  ...styles.expBadge,
                  ...(isMobile ? styles.mobileExpBadge : { alignSelf: 'flex-start' })
                }}>
                  <span style={styles.badgeIcon}>⏱️</span>
                  {displayTotalExperience()} Years Experience
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div style={{
        ...styles.contentGrid,
        ...(isMobile ? styles.mobileContentGrid : {})
      }}>
        <div style={styles.mainContent}>
          {/* Summary Section */}
          <section style={styles.section}>
            <h3 style={{
              ...styles.sectionTitle,
              margin: SPACING_CONFIG.sectionTitleMargin,
              padding: SPACING_CONFIG.sectionTitlePadding
            }}>
              <span style={styles.sectionIcon}>📝</span>
              PROFESSIONAL SUMMARY
            </h3>
            <div style={{
              ...styles.summaryContent,
              padding: SPACING_CONFIG.summaryPadding
            }}>
              {renderSummaryContent()}
            </div>
          </section>

          <section style={styles.section}>
            <h3 style={{
              ...styles.sectionTitle,
              margin: SPACING_CONFIG.sectionTitleMargin,
              padding: SPACING_CONFIG.sectionTitlePadding
            }}>
              <span style={styles.sectionIcon}>💼</span>
              PROFESSIONAL EXPERIENCE
            </h3>
            
            {contentAnalysis.sections.hasWorkExperience ? (
              <div style={styles.experienceList}>
                {contentAnalysis.workExperience.map((exp, index) => 
                  renderExperienceItem(exp, index)
                )}
              </div>
            ) : (
              <div style={styles.noExperienceMessage}>
                <div style={styles.noExperienceIcon}>💼</div>
                <p style={styles.noExperienceP}>
                  No work experience added yet
                </p>
                <small style={styles.noExperienceSmall}>
                  Add your work experience in the Experience section
                </small>
              </div>
            )}
          </section>

          {contentAnalysis.sections.education > 0 && (
            <section style={styles.section}>
              <h3 style={{
                ...styles.sectionTitle,
                margin: SPACING_CONFIG.sectionTitleMargin,
                padding: SPACING_CONFIG.sectionTitlePadding
              }}>
                <span style={styles.sectionIcon}>🎓</span>
                EDUCATION
              </h3>
              <div style={styles.educationList}>
                {contentAnalysis.education.map(renderEducationItem)}
              </div>
            </section>
          )}
        </div>

        <div style={styles.sidebar}>
          {contactInfo.length > 0 && (
            <section style={styles.section}>
              <h3 style={{
                ...styles.sectionTitle,
                margin: SPACING_CONFIG.sectionTitleMargin,
                padding: SPACING_CONFIG.sectionTitlePadding
              }}>
                <span style={styles.sectionIcon}>📞</span>
                CONTACT
              </h3>
              <div style={styles.contactList}>
                {contactInfo.map(renderContactItem)}
              </div>
            </section>
          )}

          {contentAnalysis.sections.skills > 0 && (
            <section style={styles.section}>
              <h3 style={{
                ...styles.sectionTitle,
                margin: SPACING_CONFIG.sectionTitleMargin,
                padding: SPACING_CONFIG.sectionTitlePadding
              }}>
                <span style={styles.sectionIcon}>⚡</span>
                KEY SKILLS
              </h3>
              <div style={styles.skillsGrid}>
                {contentAnalysis.skills.map(renderSkillItem)}
              </div>
            </section>
          )}

          {contentAnalysis.sections.certifications > 0 && (
            <section style={styles.section}>
              <h3 style={{
                ...styles.sectionTitle,
                margin: SPACING_CONFIG.sectionTitleMargin,
                padding: SPACING_CONFIG.sectionTitlePadding
              }}>
                <span style={styles.sectionIcon}>📜</span>
                CERTIFICATION
              </h3>
              <div style={styles.certificationsList}>
                {contentAnalysis.certifications.map(renderCertificationItem)}
              </div>
            </section>
          )}
        </div>
      </div>

      <style>{`
        @media print {
          .template1-print {
            box-shadow: none;
            border: none;
          }
          .template1-print-header {
            background: linear-gradient(135deg, #1a1a2e 0%, #222542 50%, #2c578b 100%) !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .template1-print-photo {
            width: ${SPACING_CONFIG.photoSize} !important;
            height: ${SPACING_CONFIG.photoSize} !important;
            border: 3px solid rgba(255, 255, 255, 0.95) !important;
          }
          .template1-print-badge,
          .template1-print-contact,
          .template1-print-title {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .template1-print-item {
            break-inside: avoid;
          }
          .template1-print-bullet {
            color: #000000 !important;
          }
          .template1-print-degree,
          .template1-print-institution,
          .template1-print-cert-name {
            white-space: normal !important;
            word-break: break-word !important;
            overflow-wrap: break-word !important;
          }
          a {
            text-decoration: underline !important;
            color: #000000 !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  template: {
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    background: '#ffffff',
    color: '#000000',
    lineHeight: 1.5,
    maxWidth: '210mm',
    margin: '0 auto',
    position: 'relative',
    animation: 'none',
    transition: 'none',
    transform: 'none',
    willChange: 'auto',
    opacity: 1,
    visibility: 'visible',
    display: 'block',
    overflow: 'visible'
  },
  
  header: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #222542 50%, #2c578b 100%)',
    color: 'white',
    padding: SPACING_CONFIG.headerPadding,
    position: 'relative',
    overflow: 'hidden',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center'
  },
  
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 240, 240, 0.2) 0%, transparent 50%)',
    opacity: 0.4,
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  headerContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    width: '100%',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  photoContainer: {
    width: SPACING_CONFIG.photoSize,
    height: SPACING_CONFIG.photoSize,
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid rgba(255, 255, 255, 0.95)',
    background: '#ffffff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative'
  },
  
  profilePhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  nameSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  nameTop: {
    marginBottom: '10px'
  },
  
  fullName: {
    fontSize: '37px',
    fontWeight: 700,
    margin: 0,
    color: 'white',
    textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
    letterSpacing: '-0.5px',
    lineHeight: 1.1,
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    whiteSpace: 'normal',
    maxWidth: '100%',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  jobTitle: {
    fontSize: '21px',
    fontWeight: 400,
    margin: '5px 0 0 0',
    color: 'rgba(255, 255, 255, 0.9)',
    opacity: 0.95,
    fontStyle: 'italic',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto',
    whiteSpace: 'normal',
    maxWidth: '100%',
    lineHeight: 1.3,
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  expBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '8px 15px',
    borderRadius: '12px',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    fontSize: '12pt',
    fontWeight: 600,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    alignSelf: 'flex-start',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  badgeIcon: {
    fontSize: '11pt'
  },
  
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: SPACING_CONFIG.contentGridGap,
    padding: SPACING_CONFIG.contentPadding
  },
  
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.sectionGap
  },
  
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.sectionGap
  },
  
  section: {
    width: '100%',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #000000, #16213e)',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    letterSpacing: '0.5px',
    border: 'none'
  },
  
  sectionIcon: {
    fontSize: '15px'
  },
  
  summaryContent: {
    background: '#ffffff',
    borderRadius: '5px',
    borderLeft: '3px solid #000000',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    marginTop: '2px'
  },
  
  summaryText: {
    margin: 0,
    color: '#000000',
    lineHeight: 1.6,
    fontSize: '16px',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.itemGap
  },
  
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    background: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e9ecef',
    marginBottom: 0
  },
  
  contactIcon: {
    fontSize: '13px',
    opacity: 0.8,
    width: '18px',
    textAlign: 'center',
    flexShrink: 0,
    marginTop: '2px',
    animation: 'none',
    transition: 'none'
  },
  
  contactValue: {
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    color: '#000000',
    wordBreak: 'break-word',
    lineHeight: 1.4,
    flex: 1,
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    animation: 'none',
    transition: 'none'
  },
  
  contactItemHover: {
    background: '#e9ecef',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  
  skillsGrid: {
    display: 'grid',
    gap: SPACING_CONFIG.itemGap
  },
  
  skillItem: {
    background: '#ecf0f1',
    borderRadius: '4px',
    borderLeft: '2px solid #1a1a2e'
  },
  
  skillItemHover: {
    background: '#d5dbdb'
  },
  
  skillName: {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 500,
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    animation: 'none',
    transition: 'none'
  },
  
  certificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.itemGap
  },
  
  certificationItem: {
    background: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e9ecef',
    borderLeft: '3px solid #2c578b',
    marginBottom: 0,
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  
  certificationHeader: {
    marginBottom: '6px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  certificationMain: {
    minWidth: 0
  },
  
  certificationName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#000000',
    margin: '0 0 4px 0',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    lineHeight: 1.3,
    animation: 'none',
    transition: 'none'
  },
  
  certificationIssuer: {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 500,
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    marginBottom: '8px',
    animation: 'none',
    transition: 'none'
  },
  
  certificationDate: {
    fontSize: '13px',
    color: '#000000',
    background: '#ecf0f1',
    padding: '4px 8px',
    borderRadius: '10px',
    display: 'inline-block',
    border: '1px solid #bdc3c7',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    animation: 'none',
    transition: 'none'
  },
  
  certificationItemHover: {
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
    borderColor: '#2c578b'
  },
  
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.itemGap
  },
  
  educationItem: {
    background: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e9ecef',
    marginBottom: 0,
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  
  educationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '6px',
    gap: '10px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  educationMain: {
    flex: 1,
    minWidth: 0,
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  degreeTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#000000',
    margin: '0 0 5px 0',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    lineHeight: 1.2,
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    minWidth: 0,
    animation: 'none',
    transition: 'none'
  },
  
  educationDates: {
    fontSize: '14px',
    color: '#000000',
    background: '#ecf0f1',
    padding: '4px 8px',
    borderRadius: '10px',
    whiteSpace: 'nowrap',
    border: '1px solid #bdc3c7',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    flexShrink: 0,
    animation: 'none',
    transition: 'none'
  },
  
  institutionInfo: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    fontSize: '14px',
    color: '#000000',
    width: '100%',
    overflow: 'hidden',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  institutionName: {
    fontWeight: 600,
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    minWidth: 0,
    animation: 'none',
    transition: 'none'
  },
  
  locationGpaRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginLeft: '0',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  institutionLocation: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '13px',
    color: '#666',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    animation: 'none',
    transition: 'none'
  },
  
  locationIcon: {
    fontSize: '13px',
    marginRight: '2px'
  },
  
  gpaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: '#ecf0f1',
    padding: '2px 8px',
    borderRadius: '12px',
    border: '1px solid #bdc3c7',
    fontSize: '12px',
    color: '#000000',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    animation: 'none',
    transition: 'none',
    whiteSpace: 'nowrap'
  },
  
  gpaIcon: {
    fontSize: '11px',
    opacity: 0.8
  },
  
  gpaText: {
    fontWeight: 600,
    letterSpacing: '0.2px'
  },
  
  educationCurrent: {
    color: '#2c578b',
    fontWeight: 600,
    fontStyle: 'italic',
    fontSize: '12px',
    marginLeft: '4px'
  },
  
  educationItemHover: {
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)'
  },
  
  honorsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
    padding: '8px 12px',
    background: '#f0f7ff',
    borderRadius: '6px',
    borderLeft: '3px solid #2c578b',
    fontSize: '14px',
    color: '#000000',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    animation: 'none',
    transition: 'none'
  },
  
  honorsIcon: {
    fontSize: '15px',
    flexShrink: 0
  },
  
  honorsText: {
    lineHeight: 1.4,
    wordBreak: 'break-word',
    whiteSpace: 'normal'
  },
  
  experienceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING_CONFIG.itemGap,
    marginTop: 0
  },
  
  experienceItem: {
    background: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e9ecef',
    borderLeft: '4px solid #2c578b',
    marginBottom: 0,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    breakInside: 'avoid'
  },
  
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '6px',
    gap: '10px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  experienceMain: {
    flex: 1
  },
  
  positionTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#000000',
    margin: '0 0 3px 0',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    animation: 'none',
    transition: 'none'
  },
  
  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    fontSize: '14px',
    color: '#000000',
    width: '100%',
    overflow: 'hidden',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  companyName: {
    fontSize: '15px',
    color: '#000000',
    fontWeight: 600,
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    minWidth: 0,
    animation: 'none',
    transition: 'none'
  },
  
  companyLocation: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    color: '#666',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    fontWeight: 500,
    animation: 'none',
    transition: 'none'
  },
  
  experienceDates: {
    fontSize: '14px',
    color: '#000000',
    background: '#ecf0f1',
    padding: '4px 8px',
    borderRadius: '10px',
    whiteSpace: 'nowrap',
    border: '1px solid #bdc3c7',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    flexShrink: 0,
    animation: 'none',
    transition: 'none'
  },
  
  experienceItemHover: {
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)'
  },
  
  achievementsList: {
    margin: '6px 0 0 0',
    paddingLeft: 0,
    listStyle: 'none',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  achievementItem: {
    color: '#000000',
    marginBottom: '4px',
    lineHeight: 1.5,
    fontSize: '15px',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  bulletPoint: {
    color: '#2c578b',
    fontSize: '17px',
    fontWeight: 'bold',
    flexShrink: 0,
    marginTop: '2px',
    lineHeight: 1,
    animation: 'none',
    transition: 'none'
  },
  
  achievementText: {
    flex: 1,
    lineHeight: 1.5,
    wordBreak: 'break-word',
    whiteSpace: 'normal'
  },
  
  descriptionContent: {
    background: 'white',
    padding: '10px',
    borderRadius: '4px',
    borderLeft: '3px solid #2c578b',
    marginTop: '6px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  descriptionText: {
    margin: 0,
    color: '#000000',
    lineHeight: 1.5,
    fontSize: '15px',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    textAlign: 'justify',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    animation: 'none',
    transition: 'none'
  },
  
  techInline: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '4px',
    fontSize: '14px',
    width: '100%',
    overflow: 'hidden',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  techLabel: {
    fontWeight: 600,
    color: '#000000',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    marginRight: '5px',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    animation: 'none',
    transition: 'none'
  },
  
  techTags: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '4px',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  techTag: {
    background: '#ecf0f1',
    padding: '2px 6px',
    borderRadius: '10px',
    fontSize: '13px',
    color: '#000000',
    border: '1px solid #bdc3c7',
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100px',
    display: 'inline-block',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  noExperienceMessage: {
    background: '#f8f9fa',
    padding: '20px 15px',
    borderRadius: '6px',
    textAlign: 'center',
    border: '2px dashed #dee2e6',
    marginTop: '8px',
    animation: 'none',
    transition: 'none',
    transform: 'none'
  },
  
  noExperienceIcon: {
    fontSize: '37px',
    marginBottom: '12px',
    opacity: 0.5
  },
  
  noExperienceP: {
    color: '#6c757d',
    fontSize: '16px',
    marginBottom: '6px',
    fontWeight: 600
  },
  
  noExperienceSmall: {
    fontSize: '14px',
    opacity: 0.8,
    maxWidth: '250px',
    lineHeight: 1.4,
    display: 'block',
    margin: '0 auto'
  },
  
  mobileHeader: {
    padding: '20px 20px 15px 20px',
    minHeight: '180px'
  },
  
  mobilePhotoContainer: {
    width: '120px',
    height: '120px'
  },
  
  mobileFullName: {
    fontSize: '29px'
  },
  
  mobileJobTitle: {
    fontSize: '19px'
  },
  
  mobileContentGrid: {
    gridTemplateColumns: '1fr',
    gap: '15px',
    padding: '15px'
  },
  
  mobileProfileSection: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '12px'
  },
  
  mobileNameSection: {
    alignItems: 'center',
    textAlign: 'center'
  },
  
  mobileExpBadge: {
    alignSelf: 'center'
  },
  
  mobileExperienceHeader: {
    flexDirection: 'column',
    gap: '6px'
  },
  
  mobileExperienceDates: {
    alignSelf: 'flex-start'
  },
  
  mobileCompanyInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '3px'
  },
  
  mobileInstitutionInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px'
  },
  
  mobileEducationHeader: {
    flexDirection: 'column',
    gap: '6px'
  },
  
  mobileEducationDates: {
    alignSelf: 'flex-start'
  },
  
  mobileLocationGpaRow: {
    flexWrap: 'wrap',
    gap: '8px'
  },
  
  mobileGpaBadge: {
    fontSize: '11px',
    padding: '2px 6px'
  },
  
  mobileHonorsContainer: {
    padding: '6px 10px',
    fontSize: '12px',
    marginTop: '8px'
  } 
};

Template1.displayName = 'Template1';

export default Template1;