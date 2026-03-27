import Head from 'next/head';
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== ICON MAPPING - Using Template1 style icons =====
const T15_ICON_MAPPING = Object.freeze({
  email: '✉️',
  phone: '📱',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color matching Template1
  github: '⌨️',
  portfolio: '🌐',
  website: '🌐',
  default: '📌'
});

// ===== CONFIGURATION =====
// Keeping only job experience
const EXPERIENCE_TYPES = {
  job: { label: "Professional Experience", icon: "💼", color: "#2563eb" }
};

// A4 Dimensions for print optimization
const A4 = { widthMM: 210, heightMM: 297 };
const MM_TO_PX = 3.78;

// FIXED: Constant image size - 100px
const PROFILE_IMAGE_SIZE = '100px';

const Template15 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    professionalSummary,
    projects = []
    // certifications removed
  } = resumeData;
  
  const templateRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  // ===== CORE UTILITIES =====
  const safeString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
  };

  const safeArray = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item != null);
  };

  const formatDate = (dateString) => {
    if (!dateString || !dateString.trim()) return '';
    const lower = dateString.toLowerCase();
    if (lower === 'present' || lower === 'current') return 'Present';
    if (/^\d{4}$/.test(dateString)) return dateString;
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
      }
    } catch {}
    return dateString;
  };

  const formatDateRange = (start, end, isCurrent) => {
    const s = formatDate(start);
    const e = isCurrent ? 'Present' : formatDate(end);
    if (!s && !e) return '';
    if (s && !e) return s;
    if (!s && e) return e;
    return `${s} – ${e}`;
  };

  // ===== LINK FORMATTING FUNCTIONS (like Template1) =====
  const formatLinkedInLink = (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = safeString(linkedin).trim();
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
  };

  const formatLinkedInDisplay = (linkedin) => {
    if (!linkedin) return '';
    
    let linkedinUrl = safeString(linkedin);
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
    
    let githubUrl = safeString(github).trim();
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
    
    let displayValue = safeString(github)
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
    
    let portfolioUrl = safeString(portfolio).trim();
    
    if (!portfolioUrl.startsWith('http://') && !portfolioUrl.startsWith('https://')) {
      return `https://${portfolioUrl}`;
    }
    
    return portfolioUrl;
  };

  const formatPortfolioDisplay = (portfolio) => {
    if (!portfolio) return '';
    
    let displayValue = safeString(portfolio)
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');
    
    if (displayValue.length > 30) {
      displayValue = displayValue.substring(0, 27) + '...';
    }
    
    return displayValue || 'Portfolio';
  };

  const getContactLink = (type, value) => {
    if (!value) return null;
    
    switch(type) {
      case 'email':
        return `mailto:${value}`;
      case 'phone':
        return `tel:${value.replace(/[^0-9+]/g, '')}`;
      case 'linkedin':
        return formatLinkedInLink(value);
      case 'github':
        return formatGitHubLink(value);
      case 'website':
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
      case 'website':
      case 'portfolio':
        return formatPortfolioDisplay(value);
      default:
        return value;
    }
  };

  const getContactIcon = (type) => {
    const iconConfig = T15_ICON_MAPPING[type] || T15_ICON_MAPPING.default;
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  };

  const getContactIconColor = (type) => {
    const iconConfig = T15_ICON_MAPPING[type];
    if (typeof iconConfig === 'object' && iconConfig.color) {
      return iconConfig.color;
    }
    return null;
  };

  const getContactType = (key) => {
    const emailPatterns = ['email', 'Email', 'EMAIL'];
    const phonePatterns = ['phone', 'Phone', 'mobile', 'Mobile', 'PHONE'];
    const addressPatterns = ['address', 'Address', 'location', 'Location'];
    const linkedinPatterns = ['linkedin', 'LinkedIn', 'linkedIn', 'linked_in'];
    const githubPatterns = ['github', 'GitHub', 'Github', 'git_hub'];
    const websitePatterns = ['website', 'Website', 'web', 'site', 'portfolio', 'Portfolio'];
    
    if (emailPatterns.includes(key)) return 'email';
    if (phonePatterns.includes(key)) return 'phone';
    if (addressPatterns.includes(key)) return 'address';
    if (linkedinPatterns.includes(key)) return 'linkedin';
    if (githubPatterns.includes(key)) return 'github';
    if (websitePatterns.includes(key)) return 'website';
    return 'text';
  };

  // ===== FORMAT GPA FUNCTION =====
  const formatGPA = (gpa, scale) => {
    if (!gpa) return null;
    
    const gpaValue = parseFloat(gpa).toFixed(2);
    
    switch(scale) {
      case '4.0':
        return `GPA: ${gpaValue}/4.0`;
      case '5.0':
        return `CGPA: ${gpaValue}/5.0`;
      case '10.0':
        return `CGPA: ${gpaValue}/10`;
      case '100':
        return `Percentage: ${gpaValue}%`;
      default:
        return `GPA: ${gpaValue}/${scale}`;
    }
  };

  // ===== CONTENT LIMITS =====
  const CONTENT_LIMITS = {
    skills: 8,                         // UPDATED: Changed from 10 to 8
    summaryWords: 85,
    achievementsPerExperience: 4,
    experiencesPerType: 1,
    education: 1,
    projects: 1
    // certifications removed
  };

  const hasExperienceContent = (exp) => {
    if (!exp) return false;
    const hasTitle = safeString(exp.title || exp.position || exp.role).length > 0;
    const hasOrganization = safeString(exp.organization || exp.company).length > 0;
    
    const bulletPoints = exp.bulletPoints || exp.achievements || exp.points || exp.highlights || [];
    const hasContent = Array.isArray(bulletPoints) && bulletPoints.some(b => safeString(b).length > 0);
    
    return (hasTitle && hasOrganization) || hasContent;
  };

  // ===== DATA PROCESSING =====
  const processExperience = (exp) => {
    let bulletPoints = [];
    if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
      bulletPoints = exp.bulletPoints;
    } else if (exp.achievements && Array.isArray(exp.achievements)) {
      bulletPoints = exp.achievements;
    } else if (exp.points && Array.isArray(exp.points)) {
      bulletPoints = exp.points;
    } else if (exp.highlights && Array.isArray(exp.highlights)) {
      bulletPoints = exp.highlights;
    }
    
    return {
      ...exp,
      title: exp.title || exp.position || exp.role || '',
      organization: exp.organization || exp.company || '',
      startDate: exp.startDate || exp.startYear || '',
      endDate: exp.current ? 'Present' : (exp.endDate || exp.endYear || ''),
      current: exp.current || false,
      location: safeString(exp.location || exp.city || ''),
      bulletPoints: bulletPoints
        .filter(b => safeString(b).length > 0)
        .slice(0, CONTENT_LIMITS.achievementsPerExperience)
    };
  };

  // Education processing - with GPA support
  const processEducation = (edu) => {
    return {
      ...edu,
      degree: safeString(edu.degree),
      field: safeString(edu.fieldOfStudy || edu.major || edu.field || ''),
      institution: safeString(edu.institution || edu.school),
      location: safeString(edu.location || edu.city || ''),
      gpa: edu.gpa ? parseFloat(edu.gpa).toFixed(2) : null,
      gpaScale: edu.gpaScale || '4.0',
      startDate: edu.startDate || edu.startYear || '',
      endDate: edu.endDate || edu.endYear || edu.graduationYear || '',
      current: edu.current || false
    };
  };

  // Project processing - with bullet points
  const processProject = (proj) => {
    // Get bullet points from various possible fields
    let bulletPoints = [];
    if (proj.bulletPoints && Array.isArray(proj.bulletPoints)) {
      bulletPoints = proj.bulletPoints;
    } else if (proj.achievements && Array.isArray(proj.achievements)) {
      bulletPoints = proj.achievements;
    } else if (proj.highlights && Array.isArray(proj.highlights)) {
      bulletPoints = proj.highlights;
    } else if (proj.description) {
      // If only description exists, treat it as a single bullet point
      bulletPoints = [proj.description];
    }
    
    // Get URL from various possible fields
    const urlValue = proj.projectUrl || proj.link || proj.url || proj.github || '';
    
    // Format URL for display (full HTTPS URL)
    let displayUrl = '';
    if (urlValue) {
      if (!urlValue.startsWith('http://') && !urlValue.startsWith('https://')) {
        displayUrl = `https://${urlValue}`;
      } else {
        displayUrl = urlValue;
      }
    }
    
    return {
      id: proj.id || `proj-${Math.random().toString(36).substr(2, 9)}`,
      title: safeString(proj.title || proj.name || ''),
      role: safeString(proj.role || ''),
      startDate: proj.startDate || proj.startYear || '',
      endDate: proj.endDate || proj.endYear || '',
      current: proj.current || false,
      location: safeString(proj.location || proj.city || ''),
      url: urlValue,
      displayUrl: displayUrl, // Full HTTPS URL for display
      bulletPoints: bulletPoints
        .filter(b => safeString(b).length > 0)
        .slice(0, 3) // Max 3 bullet points per project
    };
  };

  // ===== CONTENT ANALYSIS =====
  const allExperiencesWithContent = useMemo(() => 
    safeArray(experience).filter(hasExperienceContent), [experience]
  );

  const experiencesToShow = useMemo(() => 
    allExperiencesWithContent
      .slice(0, CONTENT_LIMITS.experiencesPerType)
      .map(processExperience), 
    [allExperiencesWithContent]
  );

  const projectsToShow = useMemo(() => 
    safeArray(projects)
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject)
      .filter(p => p.title),
    [projects]
  );

  // ===== CONTACT INFO with proper formatting =====
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
          displayValue,
          type,
          icon,
          iconColor,
          link,
          label: type.toUpperCase()
        });
      }
    };

    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.address, 'address');
    addContact(personalInfo.website, 'website');

    return contacts.slice(0, 5);
  }, [personalInfo]);

  const contentAnalysis = useMemo(() => {
    const processedEducation = safeArray(education)
      .filter(edu => edu.degree || edu.institution || edu.school)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    const summaryWords = safeString(professionalSummary).split(/\s+/).filter(w => w);
    const limitedSummary = summaryWords.length > CONTENT_LIMITS.summaryWords
      ? summaryWords.slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '…'
      : safeString(professionalSummary);

    const sections = {
      summary: !!limitedSummary.trim(),
      experience: experiencesToShow.length > 0,
      hasAnyExperience: allExperiencesWithContent.length > 0,
      skills: safeArray(skills).length > 0,
      education: processedEducation.length > 0,
      projects: projectsToShow.length > 0
    };

    return {
      experiences: experiencesToShow,
      allExperiencesCount: allExperiencesWithContent.length,
      skills: safeArray(skills).slice(0, CONTENT_LIMITS.skills), // Now limited to 8
      education: processedEducation,
      projects: projectsToShow,
      limitedSummary,
      sections
    };
  }, [professionalSummary, allExperiencesWithContent, experiencesToShow, skills, education, projectsToShow]);

  // ===== STYLES =====
  const baseFontSize = isExporting ? '10pt' : '11px';
  const baseLineHeight = 1.4;
  
  const styles = {
    container: {
      boxSizing: 'border-box',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      color: '#000000',
      lineHeight: baseLineHeight,
      backgroundColor: '#ffffff',
      width: isExporting ? '210mm' : '100%',
      maxWidth: isExporting ? '210mm' : `${A4.widthMM * MM_TO_PX}px`,
      minHeight: isExporting ? '297mm' : 'auto',
      margin: '0 auto',
      padding: isExporting ? '0' : '10px 20px',
      fontSize: baseFontSize,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      position: 'relative',
      top: 0,
      left: 0,
      border: isExporting ? 'none' : '1px solid #eaeaea',
      borderRadius: isExporting ? '0' : '8px',
      boxShadow: isExporting ? 'none' : '0 4px 20px rgba(0,0,0,0.05)',
      ...(isExporting && {
        boxShadow: 'none',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
        margin: '0',
        padding: '0',
        border: 'none',
        borderRadius: '0'
      })
    },
    
    contentWrapper: {
      padding: isExporting ? '6mm 12mm 12mm 12mm' : '0',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
    },
    
    header: {
      textAlign: 'center',
      padding: isExporting ? '0 0 8px 0' : '0 0 12px 0',
      borderBottom: '3px solid #2563eb',
      marginBottom: isExporting ? '12px' : '16px',
      marginTop: 0,
      paddingTop: 0
    },
    name: {
      fontSize: isExporting ? '22pt' : '28px',
      fontWeight: 800,
      color: '#000000',
      margin: '0 0 4px 0',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    jobTitle: {
      fontSize: isExporting ? '14pt' : '18px',
      fontWeight: 600,
      color: '#0a3f8f',
      margin: '0 0 4px 0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    photoContainer: {
      width: PROFILE_IMAGE_SIZE,
      height: PROFILE_IMAGE_SIZE,
      borderRadius: '50%',
      overflow: 'hidden',
      margin: isExporting ? '0 auto 12px' : '0 auto 16px',
      border: '4px solid #ffffff',
      boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
      backgroundColor: '#f8fafc'
    },
    profilePhoto: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    
    contactBar: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isExporting ? '12px 20px' : '16px 24px',
      padding: isExporting ? '8px 0' : '10px 0',
      marginBottom: isExporting ? '12px' : '16px',
      borderBottom: '1px solid #a0aec0',
      fontSize: isExporting ? '9pt' : '12px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#1e293b',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    contactIcon: {
      fontSize: isExporting ? '10pt' : '14px',
      fontWeight: 'normal'
    },
    contactText: {
      fontWeight: 500,
      color: '#0f172a',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    section: {
      marginBottom: isExporting ? '8px' : '16px',
      pageBreakInside: 'avoid'
    },
    sectionTitle: {
      fontSize: isExporting ? '13pt' : '16px',
      fontWeight: 700,
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      paddingBottom: '4px',
      marginBottom: isExporting ? '8px' : '12px',
      borderBottom: '2px solid #2563eb',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    sectionIcon: {
      fontSize: isExporting ? '14pt' : '18px',
      color: '#000000'
    },
    
    summaryContent: {
      backgroundColor: '#f0f4f8',
      borderLeft: '4px solid #2563eb',
      padding: isExporting ? '8px 12px' : '12px 16px',
      borderRadius: '0 6px 6px 0',
      fontSize: isExporting ? '12pt' : '14px',
      lineHeight: 1.5,
      color: '#111111',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    card: {
      marginBottom: isExporting ? '10px' : '16px'
    },
    
    // Card header with date on the right - constant position
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '4px',
      width: '100%'
    },
    
    // Title row with title and institution/company side by side
    titleWithSecondaryRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      flex: '1',
      minWidth: 0
    },
    
    mainTitle: {
      fontSize: isExporting ? '12pt' : '15px',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      wordBreak: 'break-word'
    },
    
    secondaryText: {
      fontSize: isExporting ? '11pt' : '14px',
      fontWeight: 500,
      color: '#1e293b',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      wordBreak: 'break-word'
    },
    
    // Row for location and GPA together
    locationGpaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '4px'
    },
    
    locationText: {
      fontSize: isExporting ? '9pt' : '12px',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    gpaText: {
      fontSize: isExporting ? '10pt' : '12px',
      color: '#1e293b',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    dateText: {
      color: '#1e293b',
      fontSize: isExporting ? '9pt' : '12px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      marginLeft: 'auto'
    },
    
    achievementsList: {
      margin: '4px 0 0 0',
      paddingLeft: '16px',
      listStyleType: 'disc'
    },
    achievementItem: {
      color: '#1e293b',
      fontSize: isExporting ? '11pt' : '13px',
      lineHeight: 1.5,
      marginBottom: '3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    // Project link with "Link:" text
    projectLinkContainer: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      marginTop: '4px'
    },
    projectLinkLabel: {
      fontSize: isExporting ? '10pt' : '12px',
      fontWeight: 600,
      color: '#1e293b',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectLink: {
      color: '#0066cc',
      fontSize: isExporting ? '10pt' : '12px',
      textDecoration: 'none',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      wordBreak: 'break-all'
    },
    
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isExporting ? '4px' : '6px'
    },
    skillChip: {
      backgroundColor: '#ffffff',
      border: '2px solid #1a4fbc',
      color: '#0a3f8f',
      padding: isExporting ? '3px 10px' : '4px 12px',
      borderRadius: '18px',
      fontSize: isExporting ? '10pt' : '12px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    emptyState: {
      textAlign: 'center',
      padding: isExporting ? '16px 12px' : '20px 16px',
      backgroundColor: '#f0f4f8',
      borderRadius: '6px',
      border: '2px dashed #94a3b8'
    },
    emptyIcon: {
      fontSize: isExporting ? '22pt' : '28px',
      marginBottom: '4px',
      color: '#64748b'
    },
    emptyText: {
      fontSize: isExporting ? '11pt' : '14px',
      color: '#1e293b',
      margin: '1px 0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    }
  };

  // ===== RENDER CONTACT ITEM - With LinkedIn icon in blue =====
  const renderContactItem = (contact) => {
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          color: contact.iconColor || '#1a4fbc',
          fontWeight: contact.type === 'linkedin' ? 'bold' : 'normal',
          fontSize: styles.contactIcon.fontSize
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
      
      // For website/portfolio, ensure complete URL
      if (contact.type === 'website') {
        if (!finalLink.startsWith('https://') && !finalLink.startsWith('http://')) {
          finalLink = `https://${finalLink}`;
        } else if (finalLink.startsWith('http://')) {
          finalLink = finalLink.replace('http://', 'https://');
        }
      }
      
      return (
        <a 
          key={contact.label}
          href={finalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactItem}
          title={contact.originalValue}
        >
          {content}
        </a>
      );
    }
    
    return (
      <div key={contact.label} style={styles.contactItem}>
        {content}
      </div>
    );
  };

  const renderSkillChip = (skill, idx) => {
    const label = typeof skill === 'object' ? safeString(skill.name || skill) : safeString(skill);
    return label ? (
      <span key={idx} style={styles.skillChip}>{label}</span>
    ) : null;
  };

  // Experience card - Company name next to job title
  const renderExperienceCard = (exp, idx) => {
    return (
      <div key={idx} style={styles.card}>
        <div style={styles.cardHeader}>
          <div style={styles.titleWithSecondaryRow}>
            <span style={styles.mainTitle}>{safeString(exp.title)}</span>
            <span style={styles.secondaryText}>{safeString(exp.organization)}</span>
          </div>
          {/* Date - Fixed on the right side */}
          <span style={styles.dateText}>
            {formatDateRange(exp.startDate, exp.endDate, exp.current)}
          </span>
        </div>
        
        {/* Location on its own line */}
        {exp.location && (
          <div style={styles.locationText}>
            <span>📍</span> {exp.location}
          </div>
        )}
        
        {exp.bulletPoints && exp.bulletPoints.length > 0 && (
          <ul style={styles.achievementsList}>
            {exp.bulletPoints.map((point, i) => (
              <li key={i} style={styles.achievementItem}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // Education card - Institution next to degree name, GPA next to location
  const renderEducationCard = (edu, idx) => {
    const degreeDisplay = edu.field 
      ? `${edu.degree}, ${edu.field}`
      : edu.degree;
    
    const formattedGPA = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : null;
    
    return (
      <div key={idx} style={styles.card}>
        <div style={styles.cardHeader}>
          <div style={styles.titleWithSecondaryRow}>
            <span style={styles.mainTitle}>{degreeDisplay}</span>
            {edu.institution && (
              <span style={styles.secondaryText}>{edu.institution}</span>
            )}
          </div>
          {/* Date - Fixed on the right side */}
          <span style={styles.dateText}>
            {formatDateRange(edu.startDate, edu.endDate, edu.current)}
          </span>
        </div>
        
        {/* Location and GPA side by side */}
        {(edu.location || formattedGPA) && (
          <div style={styles.locationGpaRow}>
            {edu.location && (
              <div style={styles.locationText}>
                <span>📍</span> {edu.location}
              </div>
            )}
            {formattedGPA && (
              <div style={styles.gpaText}>
                {formattedGPA}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Project card - with "Link:" text before the URL
  const renderProjectCard = (project, idx) => {
    return (
      <div key={project.id || idx} style={styles.card}>
        <div style={styles.cardHeader}>
          <div style={styles.titleWithSecondaryRow}>
            <span style={styles.mainTitle}>{project.title}</span>
            {project.role && (
              <span style={styles.secondaryText}>{project.role}</span>
            )}
          </div>
          {/* Date - Fixed on the right side */}
          <span style={styles.dateText}>
            {formatDateRange(project.startDate, project.endDate, project.current)}
          </span>
        </div>
        
        {project.location && (
          <div style={styles.locationText}>
            <span>📍</span> {project.location}
          </div>
        )}
        
        {project.bulletPoints && project.bulletPoints.length > 0 && (
          <ul style={styles.achievementsList}>
            {project.bulletPoints.map((point, i) => (
              <li key={i} style={styles.achievementItem}>{point}</li>
            ))}
          </ul>
        )}
        
        {project.displayUrl && (
          <div style={styles.projectLinkContainer}>
            <span style={styles.projectLinkLabel}>Link:</span>
            <a 
              href={project.displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.projectLink}
              onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              {project.displayUrl}
            </a>
          </div>
        )}
      </div>
    );
  };

  // ===== EFFECTS =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const contentHeight = templateRef.current.scrollHeight;
      const maxUsableHeight = (A4.heightMM - 30) * MM_TO_PX;
      setIsOverflowing(contentHeight > maxUsableHeight * 0.97);
    }
  }, [contentAnalysis, isExporting]);

  // ===== ADD COMPREHENSIVE PRINT STYLES =====
  useEffect(() => {
    if (isExporting) {
      const style = document.createElement('style');
      style.innerHTML = `
        @media print {
          @page {
            margin: 0 !important;
            padding: 0 !important;
            size: A4 !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            height: 100% !important;
            width: 100% !important;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .template15-root {
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 210mm !important;
            min-height: 297mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
          }
          .template15-content-wrapper {
            padding: 6mm 12mm 12mm 12mm !important;
            margin: 0 !important;
          }
          .template15-root > *:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          * {
            margin-top: 0 !important;
          }
          header {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isExporting]);

  // ===== MAIN RENDER =====
  return (
    <div ref={templateRef} style={styles.container} className="template15-root">
      <div style={isExporting ? styles.contentWrapper : {}} className={isExporting ? "template15-content-wrapper" : ""}>
        
        {/* HEADER with Image */}
        <header style={styles.header}>
          {personalInfo.photo && (
            <div style={styles.photoContainer}>
              <img 
                src={personalInfo.photo} 
                alt="Profile" 
                style={styles.profilePhoto}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
          <h1 style={styles.name}>{safeString(personalInfo.fullName) || 'Your Name'}</h1>
          {personalInfo.jobTitle && (
            <h2 style={styles.jobTitle}>{safeString(personalInfo.jobTitle)}</h2>
          )}
        </header>

        {/* CONTACT INFO - With LinkedIn icon in blue */}
        {contactInfo.length > 0 && (
          <div style={styles.contactBar}>
            {contactInfo.map(renderContactItem)}
          </div>
        )}

        {/* PROFESSIONAL SUMMARY */}
        {contentAnalysis.sections.summary && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>✨</span>
              Professional Summary
            </h2>
            <div style={styles.summaryContent}>
              {contentAnalysis.limitedSummary}
            </div>
          </section>
        )}

        {/* SKILLS SECTION - Limited to 8 */}
        {contentAnalysis.sections.skills && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>⚡</span>
              Core Skills
            </h2>
            <div style={styles.skillsGrid}>
              {contentAnalysis.skills.slice(0, 8).map(renderSkillChip)}
            </div>
          </section>
        )}

        {/* EDUCATION SECTION */}
        {contentAnalysis.sections.education && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>🎓</span>
              Education
            </h2>
            <div>
              {contentAnalysis.education.map(renderEducationCard)}
            </div>
          </section>
        )}

        {/* EXPERIENCE SECTION */}
        {contentAnalysis.sections.hasAnyExperience && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>💼</span>
              Professional Experience
            </h2>
            
            {contentAnalysis.sections.experience ? (
              <div>
                {contentAnalysis.experiences.map(renderExperienceCard)}
              </div>
            ) : (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>💼</div>
                <p style={styles.emptyText}>No professional experience yet</p>
              </div>
            )}
          </section>
        )}

        {/* PROJECTS SECTION */}
        {contentAnalysis.sections.projects && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>📁</span>
              Projects
            </h2>
            <div>
              {contentAnalysis.projects.map(renderProjectCard)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Template15;