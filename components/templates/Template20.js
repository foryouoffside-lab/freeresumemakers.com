// ============================================
// components/templates/Template20.js
// COMPLETE NEXT.JS COMPATIBLE VERSION WITH LOADING SPINNER - FIXED HOOK ORDER
// TEMPLATE 20 - SOFTWARE ENGINEERING FOCUSED
// UPDATED: Name centered, removed location from contact, moved LinkedIn to phone side, skill limit 10, education limit 1, project chars 140
// UPDATED: LinkedIn optimization with "in" icon in blue color and username display
// UPDATED: Fixed date positioning - dates now constant and don't shift based on content
// UPDATED: Added "Link:" text before project link
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// CONSTANTS - IMMUTABLE
const CONTENT_LIMITS = Object.freeze({
  skills: 10,
  projects: 1,
  internships: 1,
  education: 1, // Changed to 1
  awards: 0,
  certifications: 0,
  bulletPointsPerProject: 3,
  bulletPointsPerInternship: 4,
  projectPointCharLimit: 140 // New limit for project achievements
});

// ===== ICON MAPPING - LinkedIn "in" icon in blue like Template1 =====
const ICON_MAPPING = Object.freeze({
  email: 'Ã¢Å“â€°',
  phone: 'Ã°Å¸â€œÅ¾',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn "in" icon with blue color
  github: 'Ã¢Å’Â¨',
  portfolio: 'Ã°Å¸Å’Â',
  location: 'Ã°Å¸â€œÂ',
  calendar: 'Ã°Å¸â€œâ€¦',
  bullet: 'Ã¢â‚¬â€',
  dot: 'Ã¢â‚¬Â¢',
  triangle: 'Ã¢â€“Â¹',
  award: 'Ã°Å¸Ââ€ ',
  default: 'Ã°Å¸â€œÅ’'
});

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

// ===== GPA FORMATTING HELPER with simplified display =====
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

// Helper functions - Immutable
const TemplateHelpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return value.name || value.text || value.title || '';
    }
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
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return dateString;
  },

  formatDateRange: (start, end, current) => {
    const startDate = TemplateHelpers.formatDate(start);
    const endDate = current ? 'Present' : TemplateHelpers.formatDate(end);
    
    if (!startDate && !endDate) return '';
    if (!startDate) return endDate;
    if (!endDate) return startDate;
    return `${startDate} Ã¢â‚¬â€œ ${endDate}`;
  },

  formatBulletPoints: (points, charLimit = null) => {
    if (!points) return [];
    
    let bulletPoints = [];
    if (Array.isArray(points)) {
      bulletPoints = points.filter(p => TemplateHelpers.safeString(p).length > 0);
    } else if (typeof points === 'string') {
      bulletPoints = points.split('\n').filter(p => p.trim().length > 0);
    }
    
    // Apply character limit if specified
    if (charLimit) {
      bulletPoints = bulletPoints.map(point => {
        const cleanPoint = TemplateHelpers.safeString(point);
        if (cleanPoint.length > charLimit) {
          return cleanPoint.substring(0, charLimit - 3) + '...';
        }
        return cleanPoint;
      });
    }
    
    return bulletPoints;
  },

  icons: Object.freeze({
    location: 'Ã°Å¸â€œÂ',
    bullet: 'Ã¢â‚¬â€',
    dot: 'Ã¢â‚¬Â¢',
    triangle: 'Ã¢â€“Â¹',
    email: 'Ã¢Å“â€°',
    phone: 'Ã°Å¸â€œÅ¾',
    linkedin: 'Ã°Å¸â€â€”',
    github: 'Ã¢Å’Â¨',
    portfolio: 'Ã°Å¸Å’Â',
    calendar: 'Ã°Å¸â€œâ€¦',
    award: 'Ã°Å¸Ââ€ '
  })
});

const Template20 = ({ 
  personalInfo = {}, 
  education = [], 
  skills = [], 
  professionalSummary = '', 
  projects = [],
  certifications = [],
  awards = [],
  internships = [],
  isExporting = false 
}) => {
  
  const templateRef = useRef();
  const [loading, setLoading] = useState(true);

  // Simulate loading template data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Process data for template
  const processedData = useMemo(() => {
    // Process education - limit to 1
    const processedEducation = Object.freeze(TemplateHelpers.safeArray(education)
      .filter(e => e.degree || e.institution)
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => {
        // Format GPA with numerator/denominator
        const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
        
        return Object.freeze({
          degree: TemplateHelpers.safeString(edu.degree),
          field: TemplateHelpers.safeString(edu.fieldOfStudy || edu.major || edu.field || ''),
          institution: TemplateHelpers.safeString(edu.institution || edu.school),
          location: TemplateHelpers.safeString(edu.location || edu.city || ''),
          startDate: edu.startDate || edu.startYear,
          endDate: edu.endDate || edu.endYear || edu.graduationYear,
          current: edu.current || false,
          gpa: edu.gpa || '',
          gpaScale: edu.gpaScale || '4.0',
          gpaDisplay
        });
      }));

    // Process internships - with bullet points
    const processedInternships = Object.freeze(TemplateHelpers.safeArray(internships)
      .filter(intern => intern.role || intern.company)
      .slice(0, CONTENT_LIMITS.internships)
      .map(intern => Object.freeze({
        role: TemplateHelpers.safeString(intern.role || intern.title || intern.position),
        company: TemplateHelpers.safeString(intern.company || intern.organization),
        startDate: intern.startDate || intern.startYear,
        endDate: intern.endDate || intern.endYear,
        current: intern.current || false,
        location: TemplateHelpers.safeString(intern.location || intern.city || ''),
        points: Object.freeze(TemplateHelpers.formatBulletPoints(intern.points || intern.achievements || intern.highlights || intern.bulletPoints || [])
          .slice(0, CONTENT_LIMITS.bulletPointsPerInternship)
          .map(p => TemplateHelpers.safeString(p))),
        technologies: Object.freeze(TemplateHelpers.safeArray(intern.technologies || []).slice(0, 5))
      })));

    // Process projects - with character limit on bullet points
    const processedProjects = Object.freeze(TemplateHelpers.safeArray(projects)
      .filter(p => p.name || p.title)
      .slice(0, CONTENT_LIMITS.projects)
      .map(project => {
        // Get bullet points from various possible fields
        let bulletPoints = [];
        if (project.points && Array.isArray(project.points)) {
          bulletPoints = project.points;
        } else if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
          bulletPoints = project.bulletPoints;
        } else if (project.highlights && Array.isArray(project.highlights)) {
          bulletPoints = project.highlights;
        } else if (project.achievements && Array.isArray(project.achievements)) {
          bulletPoints = project.achievements;
        }
        
        return Object.freeze({
          title: TemplateHelpers.safeString(project.name || project.title),
          role: TemplateHelpers.safeString(project.role || project.position || ''),
          startDate: project.startDate || project.startYear,
          endDate: project.endDate || project.endYear,
          current: project.current || false,
          points: Object.freeze(TemplateHelpers.formatBulletPoints(bulletPoints, CONTENT_LIMITS.projectPointCharLimit)
            .slice(0, CONTENT_LIMITS.bulletPointsPerProject)
            .map(p => TemplateHelpers.safeString(p))),
          description: TemplateHelpers.safeString(project.description || project.summary || project.overview || ''),
          technologies: Object.freeze(TemplateHelpers.safeArray(project.technologies || []).slice(0, 5)),
          link: TemplateHelpers.safeString(project.link || project.url || project.github)
        });
      }));

    // Process skills - combine all skills into a single array and limit to 10
    const allSkills = [];
    
    TemplateHelpers.safeArray(skills).forEach(skill => {
      const name = typeof skill === 'object' ? skill.name || '' : skill;
      if (name) {
        allSkills.push(name);
      }
    });

    // Remove duplicates and limit to 10
    const uniqueSkills = Object.freeze([...new Set(allSkills)].slice(0, CONTENT_LIMITS.skills));

    // Process awards - limited to 0, so effectively removed
    const processedAwards = Object.freeze([]);

    const personalInfoData = Object.freeze({
      name: TemplateHelpers.safeString(personalInfo.fullName || personalInfo.name),
      email: TemplateHelpers.safeString(personalInfo.email),
      phone: TemplateHelpers.safeString(personalInfo.phone),
      location: TemplateHelpers.safeString(personalInfo.location || personalInfo.address || ''),
      linkedin: TemplateHelpers.safeString(personalInfo.linkedin),
      github: TemplateHelpers.safeString(personalInfo.github),
      portfolio: TemplateHelpers.safeString(personalInfo.portfolio),
      summary: TemplateHelpers.safeString(professionalSummary)
    });

    return Object.freeze({
      personalInfo: personalInfoData,
      education: processedEducation,
      internships: processedInternships,
      projects: processedProjects,
      skills: uniqueSkills,
      awards: processedAwards,
      hasData: Object.freeze({
        education: processedEducation.length > 0,
        internships: processedInternships.length > 0,
        projects: processedProjects.length > 0,
        skills: uniqueSkills.length > 0,
        awards: false,
        summary: professionalSummary.length > 0
      })
    });
  }, [personalInfo, education, skills, professionalSummary, projects, awards, internships]);

  // Format contact line WITHOUT location, with LinkedIn moved to same line as phone
  const contactLine = useMemo(() => {
    const parts = [];
    
    const addContact = (value, key) => {
      if (value) {
        const type = getContactType(key);
        const link = getContactLink(type, value);
        const displayValue = getContactDisplayValue(type, value);
        const icon = getContactIcon(type);
        const iconColor = getContactIconColor(type);
        
        parts.push({
          originalValue: TemplateHelpers.safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type,
          icon,
          iconColor,
          link
        });
      }
    };

    addContact(processedData.personalInfo.email, 'email');
    addContact(processedData.personalInfo.phone, 'phone');
    addContact(processedData.personalInfo.linkedin, 'linkedin');
    addContact(processedData.personalInfo.github, 'github');
    addContact(processedData.personalInfo.portfolio, 'portfolio');
    // Location removed from contact line
    
    return Object.freeze(parts);
  }, [processedData.personalInfo]);

  // Show loading spinner AFTER all hooks are declared
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
          color="#1e40af" 
          text="Loading template..." 
        />
      </div>
    );
  }

  return (
    <div 
      ref={templateRef}
      className={`template20-container ${isExporting ? 'template20-export' : ''}`}
      style={{
        width: '210mm',
        minHeight: '297mm',
        margin: isExporting ? '0 auto' : '20px auto',
        padding: 0,
        background: 'white',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif",
        color: '#000000',
        lineHeight: 1.5,
        fontSize: '14px',
        boxSizing: 'border-box',
        boxShadow: isExporting ? 'none' : '0 10px 30px rgba(0,0,0,0.1)'
      }}
    >
      {/* Main Resume Content */}
      <div style={{
        maxWidth: '100%',
        margin: 0,
        padding: '20px 35px 40px 35px',
        background: 'white'
      }}>
        {/* Header - with centered name and contact line below */}
        <header style={{
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 12px 0',
            letterSpacing: '-0.5px',
            textAlign: 'center'
          }}>
            {processedData.personalInfo.name || 'YOUR NAME'}
          </h1>
          
          {/* Contact line - centered below name with LinkedIn optimization */}
          <div style={{
            color: '#1a1a1a',
            fontSize: '14px',
            lineHeight: 1.8,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px 16px'
          }}>
            {contactLine.map((part, index) => {
              const iconColor = part.iconColor;
              
              const content = (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#1a1a1a'
                }}>
                  <span style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    ...(iconColor && { color: iconColor, fontWeight: 'bold' })
                  }}>{part.icon}</span>
                  <span style={{ color: '#1a1a1a' }}>{part.displayValue}</span>
                </span>
              );
              
              if (part.link) {
                let finalLink = part.link;
                
                // For LinkedIn, ensure complete URL
                if (part.type === 'linkedin') {
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
                if (part.type === 'email' && !finalLink.startsWith('mailto:')) {
                  finalLink = `mailto:${finalLink}`;
                }
                
                // For phone, ensure tel:
                if (part.type === 'phone' && !finalLink.startsWith('tel:')) {
                  finalLink = `tel:${finalLink.replace(/[^0-9+]/g, '')}`;
                }
                
                // For GitHub, ensure complete URL
                if (part.type === 'github') {
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
                if (part.type === 'portfolio') {
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
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#1a1a1a',
                      textDecoration: 'none'
                    }}
                    title={finalLink}
                  >
                    {content}
                  </a>
                );
              }
              
              return (
                <span key={index} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#1a1a1a'
                }}>
                  {content}
                </span>
              );
            })}
          </div>
        </header>

        {/* Professional Summary Section */}
        {processedData.hasData.summary && (
          <section style={{
            marginBottom: '25px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1e40af',
              margin: '0 0 12px 0',
              borderBottom: '2px solid #1e40af',
              paddingBottom: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>PROFESSIONAL SUMMARY</h2>
            <div style={{
              background: '#f8f9fa',
              padding: '16px 20px',
              borderRadius: '8px',
              borderLeft: '4px solid #1e40af',
              color: '#000000',
              fontSize: '14px',
              lineHeight: 1.6,
              fontStyle: 'normal',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
              {processedData.personalInfo.summary}
            </div>
          </section>
        )}

        {/* Education Section - Limited to 1 with FIXED date positioning */}
        {processedData.hasData.education && (
          <section style={{
            marginBottom: '25px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1e40af',
              margin: '0 0 12px 0',
              borderBottom: '2px solid #1e40af',
              paddingBottom: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>EDUCATION</h2>
            {processedData.education.map((edu, index) => (
              <div key={index} style={{
                marginBottom: '20px'
              }}>
                {/* Fixed layout with date in right-aligned container */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  marginBottom: '4px'
                }}>
                  {/* Left side: Degree and Field */}
                  <span style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#000000',
                    flex: '0 1 auto'
                  }}>
                    {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                  </span>
                  
                  {/* Right side: Date - fixed position */}
                  <span style={{
                    color: '#333333',
                    fontSize: '13px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    marginLeft: '16px'
                  }}>
                    {TemplateHelpers.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </span>
                </div>
                
                {/* College name, location, and CGPA all in one line */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '4px 8px',
                  color: '#1a1a1a',
                  fontSize: '14px'
                }}>
                  {/* College name */}
                  <span style={{
                    fontWeight: 600,
                    color: '#000000'
                  }}>
                    {edu.institution}
                  </span>
                  
                  {/* Location with icon */}
                  {edu.location && (
                    <>
                      <span style={{ color: '#666666' }}>|</span>
                      <span style={{
                        color: '#1a1a1a',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          color: '#000000'
                        }}>{TemplateHelpers.icons.location}</span>
                        <span>{edu.location}</span>
                      </span>
                    </>
                  )}
                  
                  {/* CGPA - SIMPLE, NO PLACEHOLDERS */}
                  {edu.gpaDisplay && (
                    <>
                      <span style={{ color: '#666666' }}>|</span>
                      <span style={{
                        color: '#000000',
                        fontSize: '13px',
                        fontWeight: 500
                      }}>
                        {edu.gpaDisplay}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Technical Skills Section - Limited to 10 */}
        {processedData.hasData.skills && (
          <section style={{
            marginBottom: '25px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1e40af',
              margin: '0 0 12px 0',
              borderBottom: '2px solid #1e40af',
              paddingBottom: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>TECHNICAL SKILLS</h2>
            <div style={{
              marginBottom: 0
            }}>
              <div style={{
                color: '#000000',
                fontSize: '14px',
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                {processedData.skills.join(' Ã¢â‚¬Â¢ ')}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section - With 140 char limit on bullet points and FIXED date positioning */}
        {processedData.hasData.projects && (
          <section style={{
            marginBottom: '25px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1e40af',
              margin: '0 0 12px 0',
              borderBottom: '2px solid #1e40af',
              paddingBottom: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>PROJECTS</h2>
            {processedData.projects.map((project, index) => (
              <div key={index} style={{
                marginBottom: '25px'
              }}>
                {/* Fixed layout with title/role on left, date on right */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  marginBottom: '6px'
                }}>
                  {/* Left side: Title and Role */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px',
                    flex: '1'
                  }}>
                    <span style={{
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#000000'
                    }}>{project.title}</span>
                    {project.role && (
                      <span style={{
                        color: '#333333',
                        fontWeight: 500,
                        fontStyle: 'italic'
                      }}> - {project.role}</span>
                    )}
                  </div>
                  
                  {/* Right side: Date - fixed position */}
                  <span style={{
                    color: '#333333',
                    fontSize: '13px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    marginLeft: '16px'
                  }}>
                    {TemplateHelpers.formatDateRange(project.startDate, project.endDate, project.current)}
                  </span>
                </div>
                
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div style={{
                    marginBottom: '8px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{
                        background: '#e6f0ff',
                        color: '#1e40af',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        border: '1px solid #1e40af'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Bullet points for project achievements - with 140 char limit */}
                {project.points && project.points.length > 0 ? (
                  <ul style={{
                    margin: '6px 0 8px 0',
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}>
                    {project.points.map((point, i) => (
                      <li key={i} style={{
                        color: '#1a1a1a',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        marginBottom: '4px'
                      }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : project.description ? (
                  <div style={{
                    margin: '8px 0',
                    color: '#1a1a1a',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>
                    {project.description.length > CONTENT_LIMITS.projectPointCharLimit 
                      ? project.description.substring(0, CONTENT_LIMITS.projectPointCharLimit - 3) + '...'
                      : project.description}
                  </div>
                ) : null}
                
                {/* Link with "Link:" text */}
                {project.link && (
                  <div style={{
                    margin: '8px 0 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{
                      color: '#000000',
                      fontSize: '13px',
                      fontWeight: 500
                    }}>Link:</span>
                    <a 
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#1e40af',
                        textDecoration: 'none',
                        fontSize: '13px',
                        fontWeight: 500,
                        wordBreak: 'break-all'
                      }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {project.link}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Internships Section with FIXED date positioning */}
        {processedData.hasData.internships && (
          <section style={{
            marginBottom: '25px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1e40af',
              margin: '0 0 12px 0',
              borderBottom: '2px solid #1e40af',
              paddingBottom: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>INTERNSHIPS</h2>
            {processedData.internships.map((intern, index) => (
              <div key={index} style={{
                marginBottom: '25px'
              }}>
                {/* Fixed layout with role/company on left, date on right */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  marginBottom: '6px'
                }}>
                  {/* Left side: Role and Company */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px',
                    flex: '1'
                  }}>
                    <span style={{
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#000000'
                    }}>{intern.role}</span>
                    <span style={{
                      color: '#333333',
                      fontWeight: 600
                    }}>| {intern.company}</span>
                  </div>
                  
                  {/* Right side: Date - fixed position */}
                  <span style={{
                    color: '#333333',
                    fontSize: '13px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    marginLeft: '16px'
                  }}>
                    {TemplateHelpers.formatDateRange(intern.startDate, intern.endDate, intern.current)}
                  </span>
                </div>
                
                {intern.location && (
                  <div style={{
                    color: '#333333',
                    fontSize: '13px',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ color: '#000000' }}>{TemplateHelpers.icons.location}</span> 
                    <span>{intern.location}</span>
                  </div>
                )}
                
                {/* Points limited to 3 max */}
                {intern.points.length > 0 && (
                  <ul style={{
                    margin: '6px 0 8px 0',
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}>
                    {intern.points.map((point, i) => (
                      <li key={i} style={{
                        color: '#1a1a1a',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        marginBottom: '4px'
                      }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                
                {intern.technologies && intern.technologies.length > 0 && (
                  <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {intern.technologies.map((tech, i) => (
                      <span key={i} style={{
                        background: '#e6f0ff',
                        color: '#1e40af',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        border: '1px solid #1e40af'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

Template20.displayName = 'Template20';
export default Template20;