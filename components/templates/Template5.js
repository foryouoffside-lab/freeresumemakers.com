import React, { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== ICON MAPPING - Using Template1 style icons =====
const T5I_ICON_MAPPING = Object.freeze({
  email: '✉️',
  phone: '📱',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color matching Template1
  github: '⌨️',
  portfolio: '🌐',
  default: '📌'
});

// ===== PRIVATE CONSTANTS - NAMESPACED =====
const T5I_EXPERIENCE_TYPES = Object.freeze({
  job: { label: "Work Experience", icon: "💼", color: "#2c578b" },
  internship: { label: "Internship", icon: "🎓", color: "#28a745" },
  project: { label: "Project", icon: "🚀", color: "#ff6b6b" },
  freelance: { label: "Freelance", icon: "💻", color: "#ffa726" },
  research: { label: "Research", icon: "🔬", color: "#9c27b0" }
});

const T5I_CONTENT_LIMITS = Object.freeze({
  experiences: 1,              // Only show 1 experience entry
  projects: 1,                  // Maximum 1 project
  education: 1,                  // Only show 1 education entry
  skills: 7,                     // CHANGED: Increased from 6 to 7 skills
  hobbies: 0,                     // Hobbies disabled (show none)
  certifications: 0,              // Certifications disabled (show none)
  summaryWords: 120,              // Professional summary word limit
  achievementsPerExperience: 4,    // Max bullet points per experience
  achievementLength: 140,          // Max characters per bullet point
  descriptionLength: 0,           // Max characters for description
  projectDescriptionLength: 0,     // Max characters for project description
  projectBulletPoints: 3             // Max bullet points per project
});

// ===== LINK FORMATTING FUNCTIONS (like Template1) =====
const formatLinkedInLink = (linkedin) => {
  if (!linkedin) return null;
  
  let linkedinUrl = T5I_Helpers.safeString(linkedin).trim();
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
  
  let linkedinUrl = T5I_Helpers.safeString(linkedin);
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

// ===== PRIVATE HELPER FUNCTIONS =====
const T5I_Helpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return value.name || value.text || value.title || value.certification || '';
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

  truncateLink: (link, maxLength = 40) => {
    const formatted = T5I_Helpers.safeString(link);
    if (formatted.length <= maxLength) return formatted;
    
    const start = formatted.substring(0, 20);
    const end = formatted.substring(formatted.length - 15);
    return `${start}...${end}`;
  },

  // GPA formatting like Template1 - now returns just the text without icon/border
  formatGPA: (gpa, scale = '4.0') => {
    if (!gpa) return '';
    
    const gpaValue = T5I_Helpers.safeString(gpa);
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

  // Contact helper functions (matching Template1)
  getContactLink: (type, value) => {
    if (!value) return null;
    
    switch(type) {
      case 'email':
        return `mailto:${value}`;
      case 'phone':
        return `tel:${value.replace(/[^0-9+]/g, '')}`;
      case 'linkedin':
        return formatLinkedInLink(value);
      case 'github':
        return T5I_Helpers.formatGitHubLink(value);
      case 'portfolio':
        return T5I_Helpers.formatPortfolioLink(value);
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
        return formatLinkedInDisplay(value);
      case 'github':
        return T5I_Helpers.formatGitHubDisplay(value);
      case 'portfolio':
        return T5I_Helpers.formatPortfolioDisplay(value);
      default:
        return value;
    }
  },

  getContactIcon: (type) => {
    const iconConfig = T5I_ICON_MAPPING[type] || T5I_ICON_MAPPING.default;
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  },

  getContactIconColor: (type) => {
    const iconConfig = T5I_ICON_MAPPING[type];
    if (typeof iconConfig === 'object' && iconConfig.color) {
      return iconConfig.color;
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

  formatGitHubLink: (github) => {
    if (!github) return null;
    
    let githubUrl = T5I_Helpers.safeString(github).trim();
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
    
    let displayValue = T5I_Helpers.safeString(github)
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
    
    let portfolioUrl = T5I_Helpers.safeString(portfolio).trim();
    
    if (!portfolioUrl.startsWith('http://') && !portfolioUrl.startsWith('https://')) {
      return `https://${portfolioUrl}`;
    }
    
    return portfolioUrl;
  },

  formatPortfolioDisplay: (portfolio) => {
    if (!portfolio) return '';
    
    let displayValue = T5I_Helpers.safeString(portfolio)
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');
    
    if (displayValue.length > 30) {
      displayValue = displayValue.substring(0, 27) + '...';
    }
    
    return displayValue || 'Portfolio';
  }
});

// ===== SECTION ICONS =====
const T5I_SECTION_ICONS = Object.freeze({
  'PROFESSIONAL SUMMARY': '📝',
  'WORK EXPERIENCE': '💼',
  'EDUCATION': '🎓',
  'KEY SKILLS': '⚡',
  'CERTIFICATIONS': '🏆',
  'HOBBIES': '🎯',
  'CONTACT': '📞',
  'PROJECTS': '🚀'
});

// ===== MAIN TEMPLATE COMPONENT =====
const Template5Isolated = ({ 
  isExporting = false,
  language = 'en',
  country = 'US',
  colorScheme = 'blue',
  industry = 'tech',
  isATS = false,
  accessibilityMode = false,
  ...props 
}) => {
  // ===== PRIVATE STATE =====
  const resumeData = props.personalInfo ? props : useResume().state;
  const { 
    personalInfo = {}, 
    education = [], 
    experience = [], 
    skills = [], 
    certifications = [],
    hobbies = [],
    professionalSummary = '',
    projects = []
  } = resumeData;
  
  const templateRef = useRef();
  const [selectedExperienceType, setSelectedExperienceType] = useState("job");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

  // ===== CONTACT INFO with formatted display values (matching Template1) =====
  const t5i_contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key) => {
      if (value && T5I_Helpers.safeString(value)) {
        const type = T5I_Helpers.getContactType(key);
        const link = T5I_Helpers.getContactLink(type, value);
        const displayValue = T5I_Helpers.getContactDisplayValue(type, value);
        const icon = T5I_Helpers.getContactIcon(type);
        const iconColor = T5I_Helpers.getContactIconColor(type);
        
        contacts.push(Object.freeze({ 
          originalValue: T5I_Helpers.safeString(value),
          value: displayValue,
          displayValue: displayValue,
          type, 
          icon,
          iconColor,
          link
        }));
      }
    };

    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.address, 'address');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.portfolio, 'portfolio');

    return Object.freeze(contacts.slice(0, 6));
  }, [personalInfo]);

  // ===== RENDER CONTACT ITEM - With LinkedIn icon in blue (matching Template1) =====
  const t5i_renderContactItem = useMemo(() => (contact, index) => {
    const isHovered = hoveredContact === index;
    
    const content = (
      <>
        <span style={{
          width: '16px',
          flexShrink: 0,
          fontSize: '12px',
          opacity: 1,
          textAlign: 'center',
          color: contact.iconColor || '#ffffff',
          fontWeight: contact.type === 'linkedin' ? 'bold' : 'normal'
        }}>{contact.icon}</span>
        <span style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#ffffff',
          lineHeight: 1.4,
          wordBreak: 'break-word',
          flex: 1,
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          whiteSpace: 'normal'
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
            gap: '12px',
            padding: '10px 0',
            position: 'relative',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            margin: isHovered ? '0 -8px' : '0',
            paddingLeft: isHovered ? '8px' : '0',
            paddingRight: isHovered ? '8px' : '0'
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
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 0',
          position: 'relative',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'background 0.2s ease',
          background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          margin: isHovered ? '0 -8px' : '0',
          paddingLeft: isHovered ? '8px' : '0',
          paddingRight: isHovered ? '8px' : '0'
        }}
        onMouseEnter={() => setHoveredContact(index)}
        onMouseLeave={() => setHoveredContact(null)}
      >
        {content}
      </div>
    );
  }, [hoveredContact]);

  // ===== PRIVATE MEMOIZED HELPERS =====
  const t5i_hasExperienceContent = useMemo(() => (exp) => {
    if (!exp) return false;
    
    const hasTitle = T5I_Helpers.safeString(exp.title || exp.position || exp.role).length > 0;
    const hasOrganization = T5I_Helpers.safeString(exp.organization || exp.company).length > 0;
    const hasDescription = T5I_Helpers.safeString(exp.description).length > 0;
    const hasAchievements = exp.achievements && T5I_Helpers.safeArray(exp.achievements).some(ach => T5I_Helpers.safeString(ach).length > 0);
    const hasBulletPoints = exp.bulletPoints && T5I_Helpers.safeArray(exp.bulletPoints).some(bp => T5I_Helpers.safeString(bp).length > 0);
    
    return hasTitle || hasOrganization || hasDescription || hasAchievements || hasBulletPoints;
  }, []);

  const t5i_processExperience = useMemo(() => (exp) => {
    const bulletPoints = exp.bulletPoints || exp.achievements || [];
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
    
    const cleanedBulletPoints = bulletPoints.map(bullet => {
      let cleaned = T5I_Helpers.safeString(bullet);
      cleaned = cleaned.replace(/^[•\*\-]\s*/, '');
      cleaned = cleaned.replace(/\.\.+/g, '.');
      return cleaned;
    });
    
    return Object.freeze({
      ...exp,
      hasBulletPoints,
      bulletPoints: hasBulletPoints ? 
        Object.freeze(T5I_Helpers.safeArray(cleanedBulletPoints)
          .slice(0, T5I_CONTENT_LIMITS.achievementsPerExperience)
          .map(achievement => 
            T5I_Helpers.safeString(achievement).slice(0, T5I_CONTENT_LIMITS.achievementLength)
          )) : Object.freeze([]),
      description: !hasBulletPoints && exp.description ? 
        T5I_Helpers.safeString(exp.description).slice(0, T5I_CONTENT_LIMITS.descriptionLength) : '',
      organization: exp.organization || exp.company || '',
      title: exp.title || exp.position || exp.role || '',
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      location: exp.location || '',
      type: exp.type || 'job'
    });
  }, []);

  const t5i_processEducation = useMemo(() => (edu) => {
    const startDate = edu.startDate || edu.startYear || '';
    const endDate = edu.current ? 'Present' : (edu.endDate || edu.endYear || edu.graduationYear || '');
    
    // Format GPA like Template1 - now just text
    const gpaDisplay = edu.gpa ? T5I_Helpers.formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return Object.freeze({
      ...edu,
      degree: T5I_Helpers.safeString(edu.degree),
      institution: T5I_Helpers.safeString(edu.institution),
      location: T5I_Helpers.safeString(edu.location),
      startDate: startDate,
      endDate: endDate,
      current: edu.current || false,
      gpa: T5I_Helpers.safeString(edu.gpa),
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay: gpaDisplay,
      honors: T5I_Helpers.safeString(edu.honors)
    });
  }, []);

  const t5i_processProject = useMemo(() => (project) => {
    const bulletPoints = project.bulletPoints || project.achievements || project.highlights || [];
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
    
    const cleanedBulletPoints = bulletPoints.map(bullet => {
      let cleaned = T5I_Helpers.safeString(bullet);
      cleaned = cleaned.replace(/^[•\*\-]\s*/, '');
      return cleaned;
    });
    
    return Object.freeze({
      ...project,
      name: T5I_Helpers.safeString(project.name) || T5I_Helpers.safeString(project.title) || '',
      role: T5I_Helpers.safeString(project.role),
      bulletPoints: hasBulletPoints ? 
        Object.freeze(T5I_Helpers.safeArray(cleanedBulletPoints)
          .slice(0, T5I_CONTENT_LIMITS.projectBulletPoints)
          .map(bullet => 
            T5I_Helpers.safeString(bullet).slice(0, T5I_CONTENT_LIMITS.achievementLength)
          )) : Object.freeze([]),
      link: T5I_Helpers.safeString(project.link) || T5I_Helpers.safeString(project.projectUrl) || T5I_Helpers.safeString(project.url) || '',
      startDate: T5I_Helpers.safeString(project.startDate),
      endDate: project.ongoing ? 'Present' : T5I_Helpers.safeString(project.endDate)
    });
  }, []);

  const t5i_processCertification = useMemo(() => (cert) => {
    return Object.freeze({
      ...cert,
      name: T5I_Helpers.safeString(cert.name || cert.certification),
      issuer: T5I_Helpers.safeString(cert.issuer || cert.organization),
      date: T5I_Helpers.safeString(cert.date || cert.issueDate),
      credentialId: T5I_Helpers.safeString(cert.credentialId || cert.id)
    });
  }, []);

  // ===== DATA PROCESSING =====
  const t5i_allExperiencesWithContent = useMemo(() => {
    const experiences = T5I_Helpers.safeArray(experience).filter(t5i_hasExperienceContent);
    return Object.freeze(experiences.map(exp => Object.freeze({
      ...exp,
      type: exp.type || 'job'
    })));
  }, [experience]);

  const t5i_experiencesByType = useMemo(() => {
    return Object.freeze(t5i_allExperiencesWithContent.filter(exp => exp.type === selectedExperienceType));
  }, [t5i_allExperiencesWithContent, selectedExperienceType]);

  // ===== CONTENT ANALYSIS =====
  const t5i_contentAnalysis = useMemo(() => {
    const currentExperiences = Object.freeze(t5i_experiencesByType
      .slice(0, T5I_CONTENT_LIMITS.experiences)
      .map(t5i_processExperience));

    const filteredEducation = Object.freeze(T5I_Helpers.safeArray(education)
      .filter(edu => T5I_Helpers.safeString(edu.degree).length > 0 || T5I_Helpers.safeString(edu.institution).length > 0)
      .slice(0, T5I_CONTENT_LIMITS.education)
      .map(t5i_processEducation));

    const filteredProjects = Object.freeze(T5I_Helpers.safeArray(projects)
      .filter(proj => T5I_Helpers.safeString(proj.name || proj.title).length > 0)
      .slice(0, T5I_CONTENT_LIMITS.projects)
      .map(t5i_processProject));

    const filteredCertifications = Object.freeze(T5I_Helpers.safeArray(certifications)
      .filter(cert => T5I_Helpers.safeString(cert.name || cert.certification).length > 0)
      .slice(0, T5I_CONTENT_LIMITS.certifications)
      .map(t5i_processCertification));

    const filteredHobbies = Object.freeze(T5I_Helpers.safeArray(hobbies)
      .filter(hobby => T5I_Helpers.safeString(hobby).length > 0)
      .slice(0, T5I_CONTENT_LIMITS.hobbies));

    const limitedSummary = professionalSummary ? 
      T5I_Helpers.safeString(professionalSummary).split(' ').slice(0, T5I_CONTENT_LIMITS.summaryWords).join(' ') + 
      (T5I_Helpers.safeString(professionalSummary).split(' ').length > T5I_CONTENT_LIMITS.summaryWords ? '...' : '')
      : '';

    const sections = Object.freeze({
      summary: limitedSummary.length > 0,
      currentExperience: currentExperiences.length,
      hasAnyExperience: t5i_allExperiencesWithContent.length > 0,
      skills: T5I_Helpers.safeArray(skills).slice(0, T5I_CONTENT_LIMITS.skills).length,  // Now uses 7
      education: filteredEducation.length,
      projects: filteredProjects.length,
      certifications: filteredCertifications.length,
      hobbies: filteredHobbies.length
    });

    return Object.freeze({
      currentExperiences,
      limitedSummary,
      sections,
      education: filteredEducation,
      projects: filteredProjects,
      skills: Object.freeze(T5I_Helpers.safeArray(skills).slice(0, T5I_CONTENT_LIMITS.skills)),  // Now shows 7 skills
      certifications: filteredCertifications,
      hobbies: filteredHobbies
    });
  }, [professionalSummary, t5i_allExperiencesWithContent, t5i_experiencesByType, skills, selectedExperienceType, education, projects, certifications, hobbies]);

  // ===== LAYOUT CONFIG =====
  const t5i_layoutConfig = useMemo(() => {
    const { sections } = t5i_contentAnalysis;
    const hasPhoto = !!personalInfo.photo;

    const totalSections = [
      sections.summary,
      sections.currentExperience > 0,
      sections.education > 0,
      sections.projects > 0,
      sections.skills > 0,
      sections.certifications > 0,
      sections.hobbies > 0
    ].filter(Boolean).length;

    let layoutMode = 'balanced';
    if (totalSections >= 6) layoutMode = 'compact';
    if (totalSections <= 3) layoutMode = 'spacious';

    return Object.freeze({
      mode: layoutMode,
      showSummary: sections.summary,
      showExperienceSection: sections.hasAnyExperience,
      showExperienceList: sections.currentExperience > 0,
      showEducation: sections.education > 0,
      showProjects: sections.projects > 0,
      showImage: hasPhoto,
      showSkills: sections.skills > 0,
      showCertifications: sections.certifications > 0,
      showHobbies: sections.hobbies > 0,
      summaryBoxStyle: true
    });
  }, [t5i_contentAnalysis, personalInfo.photo]);

  // ===== FORMAT DATE RANGE =====
  const t5i_formatDateRange = useCallback((startDate, endDate, isCurrent) => {
    const formattedStart = T5I_Helpers.formatDate(startDate);
    const formattedEnd = isCurrent ? 'Present' : T5I_Helpers.formatDate(endDate);
    
    if (!formattedStart && !formattedEnd) return '';
    if (formattedStart && !formattedEnd) return formattedStart;
    if (!formattedStart && formattedEnd) return formattedEnd;
    return `${formattedStart} – ${formattedEnd}`;
  }, []);

  // ===== RENDER FUNCTIONS =====
  const t5i_renderEducationItem = useMemo(() => (edu, index) => {
    const dateRange = t5i_formatDateRange(edu.startDate, edu.endDate, edu.current);
    
    return (
      <div key={index} style={{
        paddingBottom: '12px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          fontSize: '13px',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: '1.3',
          marginBottom: '6px',
          wordWrap: 'break-word',
          wordBreak: 'normal',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          whiteSpace: 'normal'
        }}>
          {T5I_Helpers.safeString(edu.degree)}
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '6px'
        }}>
          <span style={{
            fontSize: '12px',
            color: '#a78bfa',
            fontWeight: 700,
          }}>
            {T5I_Helpers.safeString(edu.institution)}
          </span>
          {edu.location && (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              color: '#f3f4f6',
            }}>
              <span style={{
                color: '#d1d5db',
                margin: '0 6px',
                opacity: 1
              }}> | </span>
              📍 {T5I_Helpers.safeString(edu.location)}
            </span>
          )}
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '11px',
          color: '#d1d5db',
          fontWeight: 600
        }}>
          {dateRange && <span>{dateRange}</span>}
          
          {/* GPA display - now without icon and border, just normal text */}
          {edu.gpaDisplay && (
            <>
              <span style={{ color: '#818cf8' }}>•</span>
              <span style={{
                color: '#d1d5db',
                fontWeight: 600
              }}>
                {edu.gpaDisplay}
              </span>
            </>
          )}
        </div>
        
        {/* Honors display */}
        {edu.honors && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '8px',
            padding: '6px 10px',
            background: 'rgba(129, 140, 248, 0.15)',
            borderRadius: '6px',
            fontSize: '11px',
            color: '#f3f4f6',
            borderLeft: '3px solid #818cf8'
          }}>
            <span style={{ fontSize: '12px' }}>🏆</span>
            <span>{T5I_Helpers.safeString(edu.honors)}</span>
          </div>
        )}
      </div>
    );
  }, [t5i_formatDateRange]);

  const t5i_renderProjectItem = useMemo(() => (project, index) => {
    const hasBulletPoints = project.bulletPoints && project.bulletPoints.length > 0;
    
    return (
      <div key={index} style={{
        padding: '16px',
        background: 'rgba(45, 45, 45, 0.6)',
        borderRadius: '10px',
        borderLeft: '4px solid #818cf8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        color: '#ffffff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
          gap: '16px'
        }}>
          <div style={{
            flex: 1,
            minWidth: 0
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '4px'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                flex: 1,
                wordWrap: 'break-word',
                wordBreak: 'normal',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                whiteSpace: 'normal'
              }}>{T5I_Helpers.safeString(project.name)}</h3>
            </div>
            {project.role && (
              <div style={{
                fontSize: '14px',
                color: '#f3f4f6',
                fontWeight: 600
              }}>{T5I_Helpers.safeString(project.role)}</div>
            )}
          </div>
          {(project.startDate || project.endDate) && (
            <div style={{
              fontSize: '13px',
              color: '#d1d5db',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '12px',
              whiteSpace: 'nowrap',
              border: '1px solid #4b5563',
              fontWeight: 600,
              flexShrink: 0
            }}>
              {T5I_Helpers.formatDate(project.startDate) || 'Start'} – {T5I_Helpers.formatDate(project.endDate) || 'Present'}
            </div>
          )}
        </div>
        
        {hasBulletPoints ? (
          <ul style={{
            margin: '12px 0 0 0',
            paddingLeft: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {project.bulletPoints.filter(bp => bp && bp.trim()).map((bulletPoint, idx) => (
              <li key={idx} style={{
                color: '#ffffff',
                lineHeight: 1.5,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '2px 0',
                fontWeight: 500
              }}>
                <span style={{
                  color: '#818cf8',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  marginTop: '2px',
                  lineHeight: 1
                }}>•</span>
                <span style={{
                  flex: 1,
                  lineHeight: 1.5,
                  wordWrap: 'break-word',
                  wordBreak: 'normal',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                  whiteSpace: 'normal',
                  color: '#ffffff',
                  fontWeight: 500
                }}>{T5I_Helpers.safeString(bulletPoint)}</span>
              </li>
            ))}
          </ul>
        ) : null}
        
        {project.link && T5I_Helpers.safeString(project.link) && (
          <div style={{
            marginTop: '12px',
            fontSize: '13px',
            color: '#ffffff'
          }}>
            <span style={{
              fontWeight: 700,
              color: '#f3f4f6',
              marginRight: '8px'
            }}>Link:</span>
            <a 
              href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#818cf8',
                textDecoration: 'underline',
                textDecorationColor: '#818cf8',
                fontWeight: 500,
                wordBreak: 'break-all',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              {T5I_Helpers.truncateLink(project.link)}
            </a>
          </div>
        )}
      </div>
    );
  }, []);

  const t5i_renderExperienceItem = useMemo(() => (exp, index) => {
    const hasBulletPoints = exp.hasBulletPoints !== false;
    
    return (
      <div key={index} style={{
        background: 'rgba(45, 45, 45, 0.7)',
        padding: '16px',
        borderRadius: '10px',
        border: '1px solid #4b5563',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        color: '#ffffff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
          gap: '16px'
        }}>
          <div style={{
            flex: 1,
            minWidth: 0
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 4px 0',
              lineHeight: 1.3,
              wordWrap: 'break-word',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              whiteSpace: 'normal'
            }}>
              {T5I_Helpers.safeString(exp.title) || 'Position'}
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#a78bfa',
                fontWeight: 700,
              }}>
                {T5I_Helpers.safeString(exp.organization) || 'Company'}
              </span>
              {exp.location && (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '13px',
                  color: '#f3f4f6',
                }}>
                  <span style={{
                    color: '#d1d5db',
                    margin: '0 6px',
                    opacity: 1
                  }}> | </span>
                  📍 {T5I_Helpers.safeString(exp.location)}
                </span>
              )}
            </div>
          </div>
          <div style={{
            fontSize: '13px',
            color: '#d1d5db',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '6px 12px',
            borderRadius: '12px',
            whiteSpace: 'nowrap',
            border: '1px solid #4b5563',
            fontWeight: 600,
            flexShrink: 0
          }}>
            {T5I_Helpers.formatDate(exp.startDate) || 'Start'} – {T5I_Helpers.formatDate(exp.endDate) || 'Present'}
          </div>
        </div>
        
        {hasBulletPoints && exp.bulletPoints && exp.bulletPoints.length > 0 ? (
          <ul style={{
            margin: 0,
            paddingLeft: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {exp.bulletPoints.filter(ach => ach && ach.trim()).map((achievement, idx) => (
              <li key={idx} style={{
                color: '#ffffff',
                lineHeight: 1.5,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '2px 0',
                fontWeight: 500
              }}>
                <span style={{
                  color: '#818cf8',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  marginTop: '2px',
                  lineHeight: 1
                }}>•</span>
                <span style={{
                  flex: 1,
                  lineHeight: 1.5,
                  wordWrap: 'break-word',
                  wordBreak: 'normal',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                  whiteSpace: 'normal',
                  color: '#ffffff',
                  fontWeight: 500
                }}>{T5I_Helpers.safeString(achievement)}</span>
              </li>
            ))}
          </ul>
        ) : (
          exp.description && exp.description.trim() && (
            <div style={{
              background: 'rgba(45, 45, 45, 0.4)',
              padding: '12px',
              borderRadius: '8px',
              borderLeft: '4px solid #818cf8',
              marginTop: '8px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <p style={{
                margin: 0,
                color: '#ffffff',
                lineHeight: 1.6,
                fontSize: '14px',
                textAlign: 'left',
                wordBreak: 'break-word',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                whiteSpace: 'normal',
                fontWeight: 500
              }}>
                {T5I_Helpers.safeString(exp.description)}
              </p>
            </div>
          )
        )}
      </div>
    );
  }, []);

  // ===== SKILLS RENDERER (7 skills max - increased from 6) =====
  const t5i_renderSkills = useMemo(() => () => {
    if (!t5i_contentAnalysis.skills.length) return null;
    
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '8px'
      }}>
        {t5i_contentAnalysis.skills.map((skill, index) => (
          <div key={index} style={{
            padding: '8px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative'
          }}>
            <span style={{
              fontSize: '12px',
              color: '#ffffff',
              fontWeight: 700,
              lineHeight: 1.4,
              wordWrap: 'break-word',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              whiteSpace: 'normal'
            }}>
              {typeof skill === 'object' ? T5I_Helpers.safeString(skill.name) : T5I_Helpers.safeString(skill)}
            </span>
          </div>
        ))}
      </div>
    );
  }, [t5i_contentAnalysis.skills]);

  // ===== CERTIFICATIONS RENDERER =====
  const t5i_renderCertifications = useMemo(() => () => {
    if (!t5i_contentAnalysis.certifications.length) return null;
    
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '8px'
      }}>
        {t5i_contentAnalysis.certifications.map((cert, index) => (
          <div key={index} style={{
            padding: '12px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.5)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            transition: 'all 0.2s ease'
          }}>
            <div style={{
              fontSize: '12px',
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1.3
            }}>
              {T5I_Helpers.safeString(cert.name)}
            </div>
            {cert.issuer && (
              <div style={{
                fontSize: '11px',
                color: '#a78bfa',
                fontWeight: 700
              }}>
                {T5I_Helpers.safeString(cert.issuer)}
              </div>
            )}
            {cert.date && (
              <div style={{
                fontSize: '10px',
                color: '#d1d5db',
                fontWeight: 600
              }}>
                {T5I_Helpers.formatDate(cert.date)}
              </div>
            )}
            {cert.credentialId && (
              <div style={{
                fontSize: '10px',
                color: '#f3f4f6',
                fontWeight: 600,
                fontFamily: 'monospace',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '2px 6px',
                borderRadius: '4px',
                display: 'inline-block',
                marginTop: '2px'
              }}>
                ID: {T5I_Helpers.safeString(cert.credentialId)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }, [t5i_contentAnalysis.certifications]);

  // ===== HOBBIES RENDERER =====
  const t5i_renderHobbies = useMemo(() => () => {
    if (!t5i_contentAnalysis.hobbies.length) return null;
    
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '8px'
      }}>
        {t5i_contentAnalysis.hobbies.map((hobby, index) => (
          <div key={index} style={{
            padding: '8px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              color: '#818cf8',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>•</span>
            <span style={{
              fontSize: '12px',
              color: '#ffffff',
              fontWeight: 600,
              lineHeight: 1.4,
              flex: 1,
              wordWrap: 'break-word',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              whiteSpace: 'normal'
            }}>
              {T5I_Helpers.safeString(hobby)}
            </span>
          </div>
        ))}
      </div>
    );
  }, [t5i_contentAnalysis.hobbies]);

  // ===== NAME HANDLING =====
  const t5i_getDisplayName = useMemo(() => {
    const fullName = T5I_Helpers.safeString(personalInfo.fullName) || '';
    const nameParts = fullName.split(' ');
    
    if (nameParts.length === 1) return { firstName: fullName, lastName: '' };
    if (nameParts.length === 2) return { firstName: nameParts[0], lastName: nameParts[1] };
    
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    return { firstName, lastName };
  }, [personalInfo.fullName]);

  const { firstName, lastName } = t5i_getDisplayName;

  // ===== SECTION TITLE =====
  const t5i_getSectionTitle = useMemo(() => () => {
    return T5I_EXPERIENCE_TYPES[selectedExperienceType]?.label || "WORK EXPERIENCE";
  }, [selectedExperienceType]);

  // ===== OVERFLOW CHECK =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const container = templateRef.current;
      const contentHeight = container.scrollHeight;
      const a4Height = 297;
      const mmToPx = 3.78;
      const maxPxHeight = a4Height * mmToPx;
      
      setIsOverflowing(contentHeight > maxPxHeight);
    }
  }, [t5i_contentAnalysis, isExporting]);

  // ===== BASE STYLES =====
  const baseStyles = {
    template: {
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
      background: '#1a1a1a',
      color: '#ffffff',
      width: '210mm',
      minHeight: '297mm',
      margin: 0,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      lineHeight: 1.4,
      WebkitFontSmoothing: 'antialiased',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      isolation: 'isolate'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      minHeight: '297mm',
      width: '100%'
    },
    sidebar: {
      background: '#2d2d2d',
      padding: '20px 16px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      zIndex: 1
    },
    sidebarContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      height: '100%'
    },
    profileSection: {
      textAlign: 'center',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    },
    photoContainer: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 0 8px 0',
      border: '4px solid #818cf8',
      background: '#2d2d2d',
      position: 'relative'
    },
    profilePhoto: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    firstName: {
      fontSize: '26px',
      fontWeight: 900,
      margin: 0,
      padding: 0,
      color: '#ffffff',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      wordWrap: 'break-word',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'normal'
    },
    lastName: {
      fontSize: '26px',
      fontWeight: 900,
      margin: '0 0 2px 0',
      padding: 0,
      color: '#ffffff',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      wordWrap: 'break-word',
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'normal'
    },
    contactSection: {
      marginBottom: 0
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      marginTop: '8px'
    },
    sidebarHeading: {
      fontSize: '14px',
      fontWeight: 800,
      color: '#ffffff',
      margin: '0 0 8px 0',
      paddingBottom: '6px',
      borderBottom: '2px solid #818cf8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      display: 'flex',
      alignItems: 'center'
    },
    sectionIconSmall: {
      marginRight: '8px',
      fontSize: '14px',
      opacity: 1,
      color: '#ffffff'
    },
    mainContent: {
      padding: '20px 24px',
      background: '#1a1a1a',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
      paddingBottom: '8px',
      borderBottom: '2px solid #4b5563'
    },
    sectionIcon: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: 'white',
      flexShrink: 0
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 800,
      color: '#ffffff',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    summaryBox: {
      background: '#2d2d2d',
      padding: '16px',
      borderRadius: '8px',
      borderLeft: '6px solid #818cf8',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      marginTop: 0
    },
    summaryBoxContent: {
      color: '#ffffff',
      lineHeight: 1.6
    },
    summaryBoxContentP: {
      fontSize: '14px',
      color: '#ffffff',
      lineHeight: 1.6,
      margin: 0,
      opacity: 1,
      fontWeight: 500,
      wordBreak: 'normal',
      overflowWrap: 'break-word',
      textAlign: 'left',
      wordWrap: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'normal'
    },
    experienceContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: 0
    },
    projectsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: 0
    },
    noExperience: {
      textAlign: 'center',
      padding: '30px 20px',
      background: 'rgba(45, 45, 45, 0.4)',
      borderRadius: '12px',
      border: '2px dashed #4b5563',
      marginTop: 0
    },
    noExperienceIcon: {
      fontSize: '48px',
      marginBottom: '15px',
      opacity: 0.8,
      display: 'inlineFlex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80px',
      height: '80px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      margin: '0 auto 15px'
    },
    noExperienceP: {
      fontSize: '16px',
      color: '#ffffff',
      marginBottom: '8px',
      fontWeight: 600
    },
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  };

  // Apply conditional styles based on props
  if (isATS) {
    baseStyles.template.background = '#ffffff';
    baseStyles.template.color = '#000000';
    baseStyles.sidebar.background = '#f8f9fa';
    baseStyles.firstName.color = '#000000';
    baseStyles.lastName.color = '#000000';
    baseStyles.sectionTitle.color = '#000000';
    baseStyles.sidebarHeading.color = '#000000';
    baseStyles.summaryBox.background = '#f8f9fa';
  }

  if (colorScheme === 'green') {
    baseStyles.photoContainer.border = '4px solid #34d399';
    baseStyles.sidebarHeading.borderBottom = '2px solid #34d399';
    baseStyles.sectionIcon.background = 'linear-gradient(135deg, #34d399 0%, #10b981 100%)';
    baseStyles.summaryBox.borderLeft = '6px solid #34d399';
  } else if (colorScheme === 'red') {
    baseStyles.photoContainer.border = '4px solid #f87171';
    baseStyles.sidebarHeading.borderBottom = '2px solid #f87171';
    baseStyles.sectionIcon.background = 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)';
    baseStyles.summaryBox.borderLeft = '6px solid #f87171';
  }

  return (
    <div 
      ref={templateRef}
      style={baseStyles.template}
      lang={language}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      data-template="template5-isolated"
      data-template-version="2.1.0"
      data-isolated="true"
    >
      <div style={baseStyles.srOnly}>
        Resume of {firstName} {lastName}
      </div>

      <div style={baseStyles.container}>
        
        {/* Sidebar */}
        <aside style={baseStyles.sidebar}>
          <div style={baseStyles.sidebarContent}>
            
            {/* Profile Section */}
            <div style={baseStyles.profileSection}>
              {t5i_layoutConfig.showImage && (
                <div style={baseStyles.photoContainer}>
                  <img 
                    src={personalInfo.photo} 
                    alt="Profile" 
                    style={baseStyles.profilePhoto}
                    crossOrigin="anonymous"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
              
              {firstName && (
                <h1 style={baseStyles.firstName}>
                  {firstName}
                </h1>
              )}
              
              {lastName && (
                <h1 style={baseStyles.lastName}>
                  {lastName}
                </h1>
              )}
            </div>

            {/* Contact Info - Using updated contactInfo with LinkedIn formatting */}
            {t5i_contactInfo.length > 0 && (
              <div style={baseStyles.contactSection}>
                <h3 style={baseStyles.sidebarHeading}>
                  <span style={baseStyles.sectionIconSmall}>{T5I_SECTION_ICONS['CONTACT']}</span>
                  CONTACT
                </h3>
                <div style={baseStyles.contactList}>
                  {t5i_contactInfo.map(t5i_renderContactItem)}
                </div>
              </div>
            )}

            {/* Skills (Limited to 7 - increased from 6) */}
            {t5i_layoutConfig.showSkills && t5i_contentAnalysis.skills.length > 0 && (
              <section style={baseStyles.contactSection}>
                <h3 style={baseStyles.sidebarHeading}>
                  <span style={baseStyles.sectionIconSmall}>{T5I_SECTION_ICONS['KEY SKILLS']}</span>
                  KEY SKILLS
                </h3>
                {t5i_renderSkills()}
              </section>
            )}

            {/* Education */}
            {t5i_layoutConfig.showEducation && t5i_contentAnalysis.education.length > 0 && (
              <section style={baseStyles.contactSection}>
                <h3 style={baseStyles.sidebarHeading}>
                  <span style={baseStyles.sectionIconSmall}>{T5I_SECTION_ICONS['EDUCATION']}</span>
                  EDUCATION
                </h3>
                <div style={baseStyles.contactList}>
                  {t5i_contentAnalysis.education.slice(0, 1).map(t5i_renderEducationItem)}
                </div>
              </section>
            )}

            {/* Certifications */}
            {t5i_layoutConfig.showCertifications && t5i_contentAnalysis.certifications.length > 0 && (
              <section style={baseStyles.contactSection}>
                <h3 style={baseStyles.sidebarHeading}>
                  <span style={baseStyles.sectionIconSmall}>{T5I_SECTION_ICONS['CERTIFICATIONS']}</span>
                  CERTIFICATIONS
                </h3>
                {t5i_renderCertifications()}
              </section>
            )}

            {/* Hobbies */}
            {t5i_layoutConfig.showHobbies && t5i_contentAnalysis.hobbies.length > 0 && (
              <section style={baseStyles.contactSection}>
                <h3 style={baseStyles.sidebarHeading}>
                  <span style={baseStyles.sectionIconSmall}>{T5I_SECTION_ICONS['HOBBIES']}</span>
                  HOBBIES
                </h3>
                {t5i_renderHobbies()}
              </section>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main style={baseStyles.mainContent}>
          
          {/* Professional Summary */}
          {t5i_layoutConfig.showSummary && t5i_contentAnalysis.limitedSummary && (
            <section style={baseStyles.contactSection}>
              <div style={baseStyles.sectionHeader}>
                <div style={baseStyles.sectionIcon}>{T5I_SECTION_ICONS['PROFESSIONAL SUMMARY']}</div>
                <h2 style={baseStyles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
              </div>
              <div style={baseStyles.summaryBox}>
                <div style={baseStyles.summaryBoxContent}>
                  <p style={baseStyles.summaryBoxContentP}>
                    {T5I_Helpers.safeString(t5i_contentAnalysis.limitedSummary)}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Experience */}
          {t5i_layoutConfig.showExperienceSection && (
            <section style={baseStyles.contactSection}>
              <div style={baseStyles.sectionHeader}>
                <div style={baseStyles.sectionIcon}>
                  {T5I_EXPERIENCE_TYPES[selectedExperienceType]?.icon || T5I_SECTION_ICONS['WORK EXPERIENCE']}
                </div>
                <h2 style={baseStyles.sectionTitle}>
                  {t5i_getSectionTitle()}
                </h2>
              </div>
              
              {t5i_layoutConfig.showExperienceList ? (
                <div style={baseStyles.experienceContainer}>
                  {t5i_contentAnalysis.currentExperiences.slice(0, 1).map(t5i_renderExperienceItem)}
                </div>
              ) : (
                <div style={baseStyles.noExperience}>
                  <div style={baseStyles.noExperienceIcon}>
                    {T5I_EXPERIENCE_TYPES[selectedExperienceType]?.icon || '💼'}
                  </div>
                  <p style={baseStyles.noExperienceP}>No {T5I_EXPERIENCE_TYPES[selectedExperienceType]?.label.toLowerCase() || 'experience'} added yet</p>
                </div>
              )}
            </section>
          )}

          {/* Projects */}
          {t5i_layoutConfig.showProjects && t5i_contentAnalysis.projects.length > 0 && (
            <section style={baseStyles.contactSection}>
              <div style={baseStyles.sectionHeader}>
                <div style={baseStyles.sectionIcon}>{T5I_SECTION_ICONS['PROJECTS']}</div>
                <h2 style={baseStyles.sectionTitle}>PROJECTS</h2>
              </div>
              <div style={baseStyles.projectsList}>
                {t5i_contentAnalysis.projects.map(t5i_renderProjectItem)}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

Template5Isolated.displayName = 'Template5Isolated';

export default Template5Isolated;