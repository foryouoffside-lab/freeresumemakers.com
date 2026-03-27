import React, { useRef, useMemo } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== DEBUG MODE =====
const DEBUG_MODE = false; // Disabled in production

// ===== ICON MAPPING - LinkedIn "in" icon in blue like Template1 =====
const ICON_MAPPING = {
  email: 'âœ‰ï¸',
  phone: 'ðŸ“±',
  address: 'ðŸ“',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn "in" icon with blue color
  github: 'ðŸ™',
  website: 'ðŸŒ',
  default: 'ðŸ“Œ'
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

const Template16 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    professionalSummary, 
    certifications = [], 
    awards = [], 
    tools = [], 
    coreStrengths = [],
    projects = [] // Kept for backward compatibility but not used
  } = resumeData;
  
  const templateRef = useRef();

  // ===== HELPER FUNCTIONS =====
  const safeString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return value.name || value.text || value.title || '';
    }
    return String(value).trim();
  };

  const safeArray = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item != null);
  };

  // Helper to check if item has content
  const hasContent = (item) => {
    if (!item) return false;
    
    if (item.useDescription !== undefined) {
      if (item.useDescription === false) {
        return item.achievements && safeArray(item.achievements).some(ach => safeString(ach).length > 0);
      } else {
        return safeString(item.description).length > 0;
      }
    } else {
      const hasAchievements = item.achievements && safeArray(item.achievements).length > 0;
      const hasDescription = item.description && safeString(item.description).length > 0;
      const hasAchievementsPhrase = item.achievementsPhrase && safeString(item.achievementsPhrase).length > 0;
      const hasJobTitleOrPosition = (item.jobTitle && safeString(item.jobTitle).length > 0) || 
                                    (item.position && safeString(item.position).length > 0) ||
                                    (item.title && safeString(item.title).length > 0);
      const hasCompany = (item.companyName && safeString(item.companyName).length > 0) || 
                        (item.company && safeString(item.company).length > 0) ||
                        (item.organization && safeString(item.organization).length > 0);
      
      return hasAchievements || hasDescription || hasAchievementsPhrase || hasJobTitleOrPosition || hasCompany;
    }
  };

  // ===== GPA FORMATTING HELPER =====
  const formatGPA = (gpa, scale = '4.0') => {
    if (!gpa) return '';
    
    const gpaValue = safeString(gpa);
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

  // ===== CONTENT LIMITS =====
  const CONTENT_LIMITS = {
    experiences: 1,
    skills: 7, // UPDATED: Set to 7
    certifications: 1,
    awards: 0,
    tools: 0,
    coreStrengths: 0,
    education: 1,
    summaryWords: 100,
    achievementsPerExperience: 4,
    achievementMaxLength: 140,
    descriptionLength: 0,
    technologiesPerExperience: 0,
    educationAchievements: 0
  };

  // Process experience data
  const processExperience = (exp) => {
    const hasUseBulletPoints = exp.useBulletPoints !== undefined;
    const useBulletPoints = exp.useBulletPoints !== false;
    
    const jobTitle = exp.jobTitle || exp.position || exp.title || '';
    const companyName = exp.companyName || exp.company || exp.organization || '';
    
    // Get achievements from various possible fields
    let achievements = [];
    if (exp.achievements && Array.isArray(exp.achievements)) {
      achievements = exp.achievements;
    } else if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
      achievements = exp.bulletPoints;
    }
    
    return {
      ...exp,
      jobTitle: safeString(jobTitle),
      companyName: safeString(companyName),
      useBulletPoints,
      achievements: useBulletPoints ? 
        safeArray(achievements)
          .slice(0, CONTENT_LIMITS.achievementsPerExperience)
          .map(achievement => 
            safeString(achievement).slice(0, CONTENT_LIMITS.achievementMaxLength)
          ) : [],
      achievementsPhrase: !useBulletPoints && exp.achievementsPhrase ? 
        safeString(exp.achievementsPhrase).slice(0, CONTENT_LIMITS.descriptionLength) : '',
      technologies: safeArray(exp.technologies || []).slice(0, CONTENT_LIMITS.technologiesPerExperience)
    };
  };

  // Process certification data
  const processCertification = (cert) => {
    return {
      ...cert,
      name: typeof cert === 'object' ? cert.name || cert.title || '' : safeString(cert),
      issuer: cert.issuer || '',
      date: cert.date || cert.year || ''
    };
  };

  // Process award data
  const processAward = (award) => {
    return {
      ...award,
      name: typeof award === 'object' ? award.name || award.title || '' : safeString(award),
      issuer: award.issuer || '',
      date: award.date || award.year || ''
    };
  };

  // Process education data
  const processEducation = (edu) => {
    // Process education achievements
    let achievements = [];
    if (edu.achievements && Array.isArray(edu.achievements)) {
      achievements = edu.achievements;
    } else if (edu.bulletPoints && Array.isArray(edu.bulletPoints)) {
      achievements = edu.bulletPoints;
    } else if (edu.honors && Array.isArray(edu.honors)) {
      achievements = edu.honors;
    }
    
    // Format GPA display
    const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return {
      ...edu,
      degree: safeString(edu.degree),
      institution: safeString(edu.institution),
      location: safeString(edu.location),
      startDate: edu.startDate || edu.startYear || '',
      endDate: edu.endDate || edu.endYear || edu.graduationYear || '',
      current: edu.current || false,
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay,
      achievements: safeArray(achievements)
        .slice(0, CONTENT_LIMITS.educationAchievements)
        .map(achievement => safeString(achievement))
    };
  };

  // ===== CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    const filteredExperiences = safeArray(experience).filter(hasContent);
    
    const processExperiences = filteredExperiences
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);

    const limitedSummary = professionalSummary ? 
      (safeString(professionalSummary).split(' ').length > CONTENT_LIMITS.summaryWords ? 
        safeString(professionalSummary).split(' ').slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '...' : 
        professionalSummary
      ) : '';

    const processCertifications = safeArray(certifications)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);

    const processAwards = safeArray(awards)
      .slice(0, CONTENT_LIMITS.awards)
      .map(processAward);

    const processEducationItems = safeArray(education)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    return {
      experiences: processExperiences,
      skills: safeArray(skills).slice(0, CONTENT_LIMITS.skills),
      education: processEducationItems,
      certifications: processCertifications,
      awards: processAwards,
      tools: safeArray(tools).slice(0, CONTENT_LIMITS.tools),
      coreStrengths: safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths),
      summary: limitedSummary
    };
  }, [professionalSummary, experience, education, skills, certifications, awards, tools, coreStrengths]);

  // ===== DATE FORMATTING =====
  const formatDate = (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') return 'Present';
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
    } catch {}
    
    return dateString;
  };

  // Format education date range with month and year
  const formatEducationDateRange = (startDate, endDate, current) => {
    const start = startDate ? formatDate(startDate) : '';
    const end = current ? 'Present' : (endDate ? formatDate(endDate) : '');
    
    if (!start && !end) return '';
    if (start && !end) return start;
    if (!start && end) return end;
    return `${start} â€“ ${end}`;
  };

  const displayProfessionalTitle = () => {
    return personalInfo?.jobTitle ? safeString(personalInfo.jobTitle) : null;
  };

  const professionalTitle = displayProfessionalTitle();

  // Get initials for avatar
  const getInitials = () => {
    if (!personalInfo.fullName) return 'PN';
    const names = personalInfo.fullName.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return names[0].substring(0, 2).toUpperCase();
  };

  // ===== CONTACT INFO WITH LINKEDIN OPTIMIZATION =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key, icon) => {
      if (value && safeString(value)) {
        const type = getContactType(key);
        const link = getContactLink(type, value);
        const displayValue = getContactDisplayValue(type, value);
        const iconChar = getContactIcon(type);
        const iconColor = getContactIconColor(type);
        
        contacts.push({
          originalValue: safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type,
          icon: iconChar,
          iconColor,
          link
        });
      }
    };

    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.address, 'address');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.website, 'website');

    return contacts;
  }, [personalInfo]);

  // ===== RENDER CONTACT ITEM WITH LINKEDIN OPTIMIZATION =====
  const renderContactItem = (contact) => {
    const iconColor = contact.iconColor;
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          ...(iconColor && { color: iconColor, fontWeight: 'bold' })
        }}>
          {contact.icon}
        </span>
        <span style={styles.contactValue}>{contact.displayValue}</span>
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
      if (contact.type === 'portfolio' || contact.type === 'website') {
        if (!finalLink.startsWith('https://') && !finalLink.startsWith('http://')) {
          finalLink = `https://${finalLink}`;
        } else if (finalLink.startsWith('http://')) {
          finalLink = finalLink.replace('http://', 'https://');
        }
      }
      
      return (
        <a 
          key={contact.type}
          href={finalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactItem}
          title={finalLink}
        >
          {content}
        </a>
      );
    }
    
    return (
      <div key={contact.type} style={styles.contactItem}>
        {content}
      </div>
    );
  };

  // Define all styles with blue color scheme - SQUARE ACCENT INSTEAD OF DIAMOND
  const styles = {
    // Root container
    root: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      width: '210mm',
      minHeight: '297mm',
      background: '#ffffff',
      color: '#000000',
      lineHeight: 1.5,
      fontSize: '11pt',
      margin: 0,
      padding: 0,
      position: 'relative',
      top: 0,
      left: 0,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      boxSizing: 'border-box',
      ...(isExporting ? {
        animation: 'none',
        transition: 'none'
      } : {})
    },
    
    // Header - Reduced top padding
    header: {
      padding: '6mm 20mm 8mm',
      background: '#ffffff',
      borderBottom: '1px solid #eaeaea'
    },
    
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10mm'
    },
    
    avatar: {
      flexShrink: 0,
      width: '45mm',
      height: '45mm',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      border: '3px solid #ffffff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    },
    
    avatarInitials: {
      fontSize: '22pt',
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      zIndex: 1
    },
    
    headerContent: {
      flex: 1
    },
    
    name: {
      fontSize: '28pt',
      fontWeight: 800,
      color: '#000000',
      margin: '0 0 2mm 0',
      lineHeight: 1.1,
      letterSpacing: '-0.5px'
    },
    
    title: {
      fontSize: '14pt',
      fontWeight: 500,
      color: '#000000',
      margin: 0,
      letterSpacing: '0.3px',
      position: 'relative',
      paddingLeft: '3mm'
    },
    
    titleBefore: {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '2mm',
      height: '2mm',
      background: '#2563eb',
      borderRadius: '50%'
    },
    
    // Layout
    container: {
      display: 'grid',
      gridTemplateColumns: '70mm 1fr',
      minHeight: '200mm'
    },
    
    // Sidebar
    sidebar: {
      padding: '8mm 6mm',
      background: '#f8fafc',
      borderRight: '1px solid #eaeaea'
    },
    
    sidebarHeading: {
      fontSize: '12pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 3mm 0',
      paddingBottom: '1.5mm',
      borderBottom: '2px solid #2563eb',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    
    // Contact section
    contactSection: {
      marginBottom: '6mm'
    },
    
    contactGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm'
    },
    
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1.5mm 0',
      borderBottom: '1px solid #d0d7de',
      gap: '10px',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    
    contactIcon: {
      width: '24px',
      fontSize: '14pt',
      color: '#2563eb',
      textAlign: 'center',
      flexShrink: 0
    },
    
    contactValue: {
      fontSize: '10.5pt',
      color: '#000000',
      lineHeight: 1.4,
      fontWeight: 500,
      flex: 1,
      wordBreak: 'break-word'
    },
    
    // Skills section
    skillsSection: {
      marginBottom: '6mm'
    },
    
    skillsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5mm',
      padding: '1mm 0'
    },
    
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1.5mm 0',
      borderBottom: '1px solid #d0d7de',
      gap: '8px'
    },
    
    skillBullet: {
      width: '6px',
      height: '6px',
      background: '#2563eb',
      borderRadius: '50%',
      flexShrink: 0,
      marginRight: '4px'
    },
    
    skillTag: {
      fontSize: '10.5pt',
      fontWeight: 500,
      color: '#000000',
      flex: 1
    },
    
    // Certifications section
    certificationsSection: {
      marginBottom: '6mm'
    },
    
    certificationsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3mm',
      padding: '1mm 0'
    },
    
    certification: {
      padding: '2mm 0 2mm 6mm',
      borderLeft: '2px solid #2563eb',
      background: 'transparent'
    },
    
    certName: {
      fontSize: '11pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 1mm 0',
      lineHeight: 1.3
    },
    
    certIssuer: {
      fontSize: '10pt',
      fontWeight: 600,
      color: '#2563eb',
      marginBottom: '1mm'
    },
    
    certDate: {
      fontSize: '10pt',
      color: '#000000',
      fontWeight: 600,
      marginTop: '1mm'
    },
    
    // Tools section
    toolsSection: {
      marginBottom: '6mm'
    },
    
    toolsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5mm',
      padding: '1mm 0'
    },
    
    toolItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1.5mm 0',
      borderBottom: '1px solid #d0d7de',
      gap: '8px'
    },
    
    toolBullet: {
      width: '6px',
      height: '6px',
      background: '#2563eb',
      borderRadius: '50%',
      flexShrink: 0,
      marginRight: '4px'
    },
    
    toolTag: {
      fontSize: '10.5pt',
      fontWeight: 500,
      color: '#000000',
      flex: 1
    },
    
    // Core Strengths section
    coreStrengthsSection: {
      marginBottom: '6mm'
    },
    
    coreStrengthsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5mm',
      padding: '1mm 0'
    },
    
    coreStrengthItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1.5mm 0',
      borderBottom: '1px solid #d0d7de',
      gap: '8px'
    },
    
    coreStrengthBullet: {
      width: '6px',
      height: '6px',
      background: '#2563eb',
      borderRadius: '50%',
      flexShrink: 0,
      marginRight: '4px'
    },
    
    coreStrengthTag: {
      fontSize: '10.5pt',
      fontWeight: 500,
      color: '#000000',
      flex: 1
    },
    
    // Awards section
    awardsSection: {
      marginBottom: '6mm'
    },
    
    awardsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm',
      padding: '1mm 0'
    },
    
    awardTag: {
      padding: '2mm 0',
      borderBottom: '1px solid #d0d7de'
    },
    
    awardName: {
      fontSize: '10.5pt',
      fontWeight: 700,
      color: '#000000',
      marginBottom: '0.5mm'
    },
    
    awardMeta: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      fontSize: '10pt',
      color: '#000000'
    },
    
    awardIssuer: {
      fontWeight: 600,
      color: '#2563eb'
    },
    
    awardSeparator: {
      color: '#666666',
      margin: '0 2px'
    },
    
    awardDate: {
      color: '#000000',
      fontWeight: 600
    },
    
    // Main content
    main: {
      padding: '8mm 12mm',
      background: '#ffffff'
    },
    
    // Section title - SQUARE ACCENT
    sectionTitle: {
      fontSize: '13pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 4mm 0',
      display: 'flex',
      alignItems: 'center',
      gap: '2mm',
      letterSpacing: '0.3px',
      textTransform: 'uppercase',
      position: 'relative'
    },
    
    // Simple square accent - consistent size in preview and PDF
    titleAccent: {
      display: 'inline-block',
      width: '5mm',
      height: '5mm',
      background: '#2563eb',
      borderRadius: '0',
      flexShrink: 0
    },
    
    // Summary section
    summarySection: {
      marginBottom: '6mm'
    },
    
    summaryContent: {
      padding: '2mm 0 2mm 6mm',
      borderLeft: '2px solid #2563eb'
    },
    
    summaryText: {
      fontSize: '11pt',
      color: '#000000',
      margin: 0,
      lineHeight: 1.6,
      textAlign: 'justify',
      fontWeight: 400
    },
    
    // Experience section
    experienceSection: {
      marginBottom: '6mm'
    },
    
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5mm'
    },
    
    experience: {
      display: 'flex',
      marginBottom: '0',
      position: 'relative',
      paddingLeft: '6mm',
      borderLeft: '2px solid #2563eb'
    },
    
    expContent: {
      flex: 1,
      width: '100%'
    },
    
    expHeader: {
      marginBottom: '2px'
    },
    
    expTitleRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '2px'
    },
    
    expJobtitle: {
      fontSize: '12pt',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.3,
      flex: 1
    },
    
    // Experience Date - NO BORDER, NO BACKGROUND
    expDates: {
      fontSize: '10.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: 0,
      border: 'none'
    },
    
    expCompanyRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flexWrap: 'wrap',
      marginBottom: '4px',
      paddingBottom: '2px',
      borderBottom: '1px solid #eaeaea'
    },
    
    expCompanyName: {
      fontSize: '11pt',
      fontWeight: 600,
      color: '#2563eb',
      lineHeight: 1.2
    },
    
    // REMOVED expSeparator - No dot between company and location
    expLocation: {
      fontSize: '10.5pt',
      color: '#666666',
      fontWeight: 500,
      fontStyle: 'italic',
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
      gap: '2px'
    },
    
    locationIcon: {
      fontSize: '11pt'
    },
    
    achievements: {
      marginTop: '4px',
      paddingLeft: 0
    },
    
    achievement: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '6px',
      marginBottom: '1.5mm',
      fontSize: '11pt',
      lineHeight: 1.4
    },
    
    achievementBullet: {
      color: '#2563eb',
      fontWeight: 'bold',
      flexShrink: 0,
      fontSize: '12pt'
    },
    
    achievementText: {
      flex: 1,
      color: '#000000',
      fontWeight: 400
    },
    
    // Phrase section
    phraseSection: {
      marginTop: '2mm',
      padding: '2.5mm 3mm',
      background: '#f8f9fa',
      borderRadius: '4px',
      borderLeft: '3px solid #2563eb'
    },
    
    phraseDescription: {
      margin: 0,
      fontSize: '11pt',
      color: '#000000',
      lineHeight: 1.5,
      textAlign: 'justify',
      fontWeight: 400
    },
    
    // Technologies inline
    expTechnologiesInline: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '4px',
      marginTop: '3mm',
      fontSize: '10.5pt',
      paddingTop: '2mm',
      borderTop: '1px dashed #eaeaea'
    },
    
    techLabel: {
      fontWeight: 700,
      color: '#000000',
      whiteSpace: 'nowrap',
      marginRight: '4px'
    },
    
    techTagsInline: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3px',
      alignItems: 'center',
      flex: 1
    },
    
    techTagInline: {
      background: '#eff6ff',
      padding: '1.5mm 3mm',
      borderRadius: '4px',
      fontSize: '10pt',
      color: '#2563eb',
      border: '1px solid #dbeafe',
      whiteSpace: 'nowrap',
      fontWeight: 500
    },
    
    // Education main section
    educationMainSection: {
      marginTop: '6mm'
    },
    
    educationGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4mm',
      marginTop: '2mm'
    },
    
    education: {
      padding: '2mm 0 2mm 6mm',
      borderLeft: '2px solid #2563eb',
      background: 'transparent'
    },
    
    // Education Header - Date next to degree
    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '1.5mm'
    },
    
    eduDegree: {
      fontSize: '12pt',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.3,
      flex: 1
    },
    
    // Education Date - NO BORDER, NO BACKGROUND
    eduDate: {
      fontSize: '10.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: 0,
      border: 'none'
    },
    
    eduInstitutionRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '2mm'
    },
    
    eduInstitutionName: {
      fontSize: '11pt',
      fontWeight: 600,
      color: '#2563eb',
      lineHeight: 1.2
    },
    
    // REMOVED eduSeparator - No dot between institution and location
    eduLocation: {
      fontSize: '10.5pt',
      color: '#666666',
      fontWeight: 500,
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'center',
      gap: '2px'
    },
    
    // GPA - PLAIN TEXT, NO BACKGROUND, NO BORDER
    eduGpa: {
      fontSize: '10.5pt',
      fontWeight: 600,
      color: '#000000',
      display: 'inline-block',
      marginTop: '1mm',
      background: 'transparent',
      padding: 0,
      border: 'none'
    },
    
    eduAchievements: {
      marginTop: '2mm'
    },
    
    eduAchievementItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '6px',
      marginBottom: '1.5mm',
      fontSize: '10.5pt',
      lineHeight: 1.4
    },
    
    eduAchievementBullet: {
      color: '#2563eb',
      fontWeight: 'bold',
      flexShrink: 0,
      fontSize: '12pt'
    },
    
    eduAchievementText: {
      flex: 1,
      color: '#000000'
    },
    
    eduCurrent: {
      color: '#2563eb',
      fontWeight: 600,
      fontStyle: 'italic'
    },
    
    // No experience message
    noExperience: {
      padding: '15px',
      background: '#f8f9fa',
      border: '1.5px dashed #dee2e6',
      borderRadius: '4px',
      textAlign: 'center',
      marginBottom: '15px'
    },
    
    noExperienceIcon: {
      fontSize: '30px',
      marginBottom: '8px',
      opacity: 0.6
    },
    
    noExperienceText: {
      color: '#000000',
      marginBottom: '4px',
      fontSize: '12pt',
      fontWeight: 500
    },
    
    noExperienceHint: {
      color: '#666666',
      fontSize: '10pt'
    }
  };

  // Helper components for pseudo-elements
  const TitleBefore = () => (
    <div style={{
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '2mm',
      height: '2mm',
      background: '#2563eb',
      borderRadius: '50%'
    }} />
  );

  // ===== EXPERIENCE RENDERER =====
  const renderExperienceItem = (exp, index, total) => {
    const useBulletPoints = exp.useBulletPoints !== false;
    const hasTechnologies = exp.technologies && safeArray(exp.technologies).length > 0;
    const jobTitle = safeString(exp.jobTitle);
    const companyName = safeString(exp.companyName);
    const achievements = exp.achievements || [];
    
    return (
      <div key={index} style={styles.experience}>
        <div style={styles.expContent}>
          {/* Title and date row */}
          <div style={styles.expHeader}>
            <div style={styles.expTitleRow}>
              {jobTitle && (
                <h3 style={styles.expJobtitle}>{jobTitle}</h3>
              )}
              {(exp.startDate || exp.endDate) && (
                <div style={styles.expDates}>
                  {formatDate(exp.startDate)} â€“ {formatDate(exp.endDate)}
                </div>
              )}
            </div>
          </div>
          
          {/* Company and location row - NO DOT between them */}
          {(companyName || exp.location) && (
            <div style={styles.expCompanyRow}>
              {companyName && (
                <span style={styles.expCompanyName}>{companyName}</span>
              )}
              {exp.location && (
                <span style={styles.expLocation}>
                  <span style={styles.locationIcon}>ðŸ“</span>
                  {safeString(exp.location)}
                </span>
              )}
            </div>
          )}
          
          {/* Achievements */}
          {useBulletPoints ? (
            achievements && achievements.length > 0 ? (
              <div style={styles.achievements}>
                {achievements.map((achievement, idx) => (
                  <div key={idx} style={styles.achievement}>
                    <span style={styles.achievementBullet}>â€¢</span>
                    <span style={styles.achievementText}>{achievement}</span>
                  </div>
                ))}
              </div>
            ) : null
          ) : (
            exp.achievementsPhrase && (
              <div style={styles.phraseSection}>
                <p style={styles.phraseDescription}>
                  {safeString(exp.achievementsPhrase)}
                </p>
              </div>
            )
          )}
          
          {/* Technologies */}
          {hasTechnologies && (
            <div style={styles.expTechnologiesInline}>
              <span style={styles.techLabel}>Technologies:</span>
              <div style={styles.techTagsInline}>
                {safeArray(exp.technologies).map((tech, idx) => (
                  <span key={idx} style={styles.techTagInline}>
                    {safeString(tech)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== EDUCATION RENDERER =====
  const renderEducationItem = (edu, index) => {
    const displayDate = formatEducationDateRange(edu.startDate, edu.endDate, edu.current);
    const hasAchievements = edu.achievements && edu.achievements.length > 0;
    
    return (
      <div key={index} style={styles.education}>
        {/* Header with degree and date side by side */}
        <div style={styles.educationHeader}>
          <div style={styles.eduDegree}>{safeString(edu.degree)}</div>
          {displayDate && (
            <span style={styles.eduDate}>{displayDate}</span>
          )}
        </div>
        
        {/* Institution and location row - NO DOT between them */}
        <div style={styles.eduInstitutionRow}>
          <span style={styles.eduInstitutionName}>
            {safeString(edu.institution)}
          </span>
          {edu.location && (
            <span style={styles.eduLocation}>
              <span>ðŸ“</span> {safeString(edu.location)}
            </span>
          )}
        </div>
        
        {/* GPA as plain text */}
        {edu.gpaDisplay && (
          <div style={styles.eduGpa}>{edu.gpaDisplay}</div>
        )}
        
        {/* Education achievements */}
        {hasAchievements && (
          <div style={styles.eduAchievements}>
            {edu.achievements.map((achievement, idx) => (
              <div key={idx} style={styles.eduAchievementItem}>
                <span style={styles.eduAchievementBullet}>â€¢</span>
                <span style={styles.eduAchievementText}>{achievement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ===== CERTIFICATION RENDERER =====
  const renderCertificationItem = (cert, index) => {
    const certName = safeString(cert.name);
    const issuer = safeString(cert.issuer);
    const date = safeString(cert.date);
    
    return (
      <div key={index} style={styles.certification}>
        <h4 style={styles.certName}>{certName}</h4>
        {issuer && <div style={styles.certIssuer}>{issuer}</div>}
        {date && <div style={styles.certDate}>{date}</div>}
      </div>
    );
  };

  // ===== AWARD RENDERER =====
  const renderAwardItem = (award, index) => {
    const awardName = safeString(award.name);
    const issuer = safeString(award.issuer);
    const date = safeString(award.date);
    
    return (
      <div key={index} style={index < contentAnalysis.awards.length - 1 ? styles.awardTag : { ...styles.awardTag, borderBottom: 'none' }}>
        <div style={styles.awardName}>{awardName}</div>
        {(issuer || date) && (
          <div style={styles.awardMeta}>
            {issuer && <span style={styles.awardIssuer}>{issuer}</span>}
            {issuer && date && <span style={styles.awardSeparator}>â€¢</span>}
            {date && <span style={styles.awardDate}>{date}</span>}
          </div>
        )}
      </div>
    );
  };

  // ===== TOOL RENDERER =====
  const renderToolItem = (tool, index) => {
    const toolName = typeof tool === 'object' ? tool.name || '' : safeString(tool);
    
    return (
      <div key={index} style={styles.toolItem}>
        <div style={styles.toolBullet}></div>
        <span style={styles.toolTag}>{toolName}</span>
      </div>
    );
  };

  // ===== CORE STRENGTH RENDERER =====
  const renderCoreStrengthItem = (strength, index) => {
    const strengthName = typeof strength === 'object' ? strength.name || '' : safeString(strength);
    
    return (
      <div key={index} style={styles.coreStrengthItem}>
        <div style={styles.coreStrengthBullet}></div>
        <span style={styles.coreStrengthTag}>{strengthName}</span>
      </div>
    );
  };

  // ===== SKILL RENDERER =====
  const renderSkillItem = (skill, index) => {
    const skillName = typeof skill === 'object' ? skill.name || '' : safeString(skill);
    
    return (
      <div key={index} style={styles.skillItem}>
        <div style={styles.skillBullet}></div>
        <span style={styles.skillTag}>{skillName}</span>
      </div>
    );
  };

  // Add print styles as a style tag
  const printStyles = `
    @media print {
      .template16-print {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 !important;
        padding: 0 !important;
        background: white !important;
      }
      body {
        margin: 0 !important;
        padding: 0 !important;
      }
      /* Ensure square renders consistently */
      .title-accent-square {
        width: 5mm !important;
        height: 5mm !important;
        background: #2563eb !important;
        border-radius: 0 !important;
      }
    }
  `;

  return (
    <div ref={templateRef} style={styles.root} className="template16-print">
      <style>{printStyles}</style>
      
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.avatar}>
            <div style={styles.avatarInitials}>{getInitials()}</div>
          </div>
          <div style={styles.headerContent}>
            <h1 style={styles.name}>{safeString(personalInfo.fullName) || 'Professional Name'}</h1>
            {professionalTitle && (
              <div style={styles.title}>
                <TitleBefore />
                {professionalTitle}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Two-Column Layout */}
      <div style={styles.container}>
        {/* Left Column - Contact & Skills & Optional Sections */}
        <div style={styles.sidebar}>
          {/* Contact Info with LinkedIn optimization */}
          <div style={styles.contactSection}>
            <h3 style={styles.sidebarHeading}>Contact</h3>
            <div style={styles.contactGrid}>
              {contactInfo.map(contact => renderContactItem(contact))}
            </div>
          </div>

          {/* Skills - Limited to 7 */}
          {contentAnalysis.skills.length > 0 && (
            <div style={styles.skillsSection}>
              <h3 style={styles.sidebarHeading}>Core Skills</h3>
              <div style={styles.skillsGrid}>
                {contentAnalysis.skills.slice(0, 7).map(renderSkillItem)}
              </div>
            </div>
          )}

          {/* Certifications */}
          {contentAnalysis.certifications.length > 0 && (
            <div style={styles.certificationsSection}>
              <h3 style={styles.sidebarHeading}>Certifications</h3>
              <div style={styles.certificationsList}>
                {contentAnalysis.certifications.map(renderCertificationItem)}
              </div>
            </div>
          )}

          {/* Tools */}
          {contentAnalysis.tools.length > 0 && (
            <div style={styles.toolsSection}>
              <h3 style={styles.sidebarHeading}>Tools</h3>
              <div style={styles.toolsGrid}>
                {contentAnalysis.tools.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* Core Strengths */}
          {contentAnalysis.coreStrengths.length > 0 && (
            <div style={styles.coreStrengthsSection}>
              <h3 style={styles.sidebarHeading}>Core Strengths</h3>
              <div style={styles.coreStrengthsGrid}>
                {contentAnalysis.coreStrengths.map(renderCoreStrengthItem)}
              </div>
            </div>
          )}

          {/* Awards */}
          {contentAnalysis.awards.length > 0 && (
            <div style={styles.awardsSection}>
              <h3 style={styles.sidebarHeading}>Awards</h3>
              <div style={styles.awardsGrid}>
                {contentAnalysis.awards.map(renderAwardItem)}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Main Content */}
        <main style={styles.main}>
          {/* Professional Summary */}
          {contentAnalysis.summary && (
            <section style={styles.summarySection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.titleAccent} className="title-accent-square"></span>
                Professional Profile
              </h2>
              <div style={styles.summaryContent}>
                <p style={styles.summaryText}>{contentAnalysis.summary}</p>
              </div>
            </section>
          )}

          {/* Professional Experience */}
          {contentAnalysis.experiences.length > 0 ? (
            <section style={styles.experienceSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.titleAccent} className="title-accent-square"></span>
                Professional Experience
              </h2>
              <div style={styles.experienceList}>
                {contentAnalysis.experiences.map((exp, index) => 
                  renderExperienceItem(exp, index, contentAnalysis.experiences.length)
                )}
              </div>
            </section>
          ) : (
            <div style={styles.noExperience}>
              <div style={styles.noExperienceIcon}>ðŸ’¼</div>
              <p style={styles.noExperienceText}>No experience added yet</p>
              <small style={styles.noExperienceHint}>Add your first experience to showcase here</small>
            </div>
          )}

          {/* Education */}
          {contentAnalysis.education.length > 0 && (
            <section style={styles.educationMainSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.titleAccent} className="title-accent-square"></span>
                Education
              </h2>
              <div style={styles.educationGrid}>
                {contentAnalysis.education.map(renderEducationItem)}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Template16;