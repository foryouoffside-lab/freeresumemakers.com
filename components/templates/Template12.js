import React, { useRef, useMemo } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== CONTENT LIMITS =====
const CONTENT_LIMITS = {
  skills: 8,
  experiences: 3,        // INCREASED from 2 to 3
  education: 2,          // INCREASED from 1 to 2
  certifications: 2,     // INCREASED from 1 to 2
  summaryWords: 100,
  achievementsPerExperience: 4,
  achievementLength: 140,
};

// ===== SPACING CONFIGURATION - CONSTANT (FIXED COLUMN WIDTHS) =====
const SPACING_CONFIG = {
  leftPanelWidth: '75mm',
  rightPanelWidth: '135mm',
  headerPadding: '12mm 8mm',
  contentPadding: '8mm 6mm',
  sectionGap: '6px',
  itemGap: '6px',
  contactItemPadding: '6px 8px',
  skillItemPadding: '6px 8px',
  certItemPadding: '10px',
  eduItemPadding: '10px',
  expItemPadding: '10px',
  sectionTitleMargin: '0 0 4px 0',
};

// ===== ICON MAPPING - Using Template12 original icons =====
const ICON_MAPPING = {
  email: '✉',
  phone: '📞',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },
  github: '⌨',
  portfolio: '🌐',
  default: '📌'
};

// ===== HELPER FUNCTIONS =====
const safeString = (value) => {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  return String(value).trim();
};

const safeArray = (data) => {
  if (!Array.isArray(data)) return [];
  return data.filter(item => item != null);
};

// ===== DATE FORMATTING =====
const formatDate = (dateString) => {
  if (!dateString) return '';
  if (dateString.toLowerCase() === 'present') return 'Present';
  
  if (/^\d{4}-\d{2}$/.test(dateString)) {
    try {
      const [year, month] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {}
  }
  
  if (/^\d{4}$/.test(dateString)) {
    return dateString;
  }
  
  try {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
  } catch {}
  
  return dateString;
};

// ===== LINK FORMATTING FUNCTIONS (like Template1 for LinkedIn) =====
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

// ===== Format Education Date Range =====
const formatEducationDateRange = (edu) => {
  const startDate = edu.startDate || edu.startYear || edu.admissionYear || '';
  const endDate = edu.endDate || edu.endYear || edu.graduationYear || '';
  const current = edu.current || false;
  
  if (!startDate && !endDate && !current) {
    return '';
  }
  
  const formatWithMonth = (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present') return 'Present';
    
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      try {
        const [year, month] = dateString.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1, 1);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      } catch {}
    }
    
    if (/^\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
    } catch {}
    
    return dateString;
  };
  
  const start = formatWithMonth(startDate);
  const end = current ? 'Present' : formatWithMonth(endDate);
  
  if (start && end && end !== 'Present') {
    return `${start} – ${end}`;
  } else if (start && current) {
    return `${start} – Present`;
  } else if (start) {
    return start;
  } else if (end) {
    return end;
  }
  
  return '';
};

// ===== Format GPA with scale =====
const formatGPA = (gpa, scale) => {
  if (!gpa) return null;
  const gpaValue = safeString(gpa);
  if (!gpaValue) return null;
  
  if (scale) {
    const scaleValue = safeString(scale);
    return `${gpaValue}/${scaleValue}`;
  }
  
  const gpaNum = parseFloat(gpaValue);
  if (!isNaN(gpaNum)) {
    if (gpaNum <= 5.0) return `${gpaValue}/5.0`;
    if (gpaNum <= 10.0) return `${gpaValue}/10.0`;
    if (gpaNum <= 100) return `${gpaValue}/100`;
  }
  
  if (gpaValue.includes('/')) {
    return gpaValue;
  }
  
  return `${gpaValue}/10.0`;
};

// ===== Process Experience =====
const processExperience = (exp) => {
  const position = exp.position || exp.title || '';
  const company = exp.company || exp.organization || '';
  const companyLocation = exp.location || exp.companyLocation || '';
  
  const bulletPoints = exp.bulletPoints && Array.isArray(exp.bulletPoints) 
    ? exp.bulletPoints
        .filter(bp => safeString(bp).length > 0)
        .slice(0, CONTENT_LIMITS.achievementsPerExperience)
        .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength))
    : [];
  
  const technologies = exp.technologies || [];
  const techArray = Array.isArray(technologies) ? 
    technologies.map(tech => safeString(tech)).filter(tech => tech.length > 0) : 
    (typeof technologies === 'string' ? technologies.split(',').map(tech => safeString(tech)).filter(tech => tech.length > 0) : []);
  
  return {
    ...exp,
    position: safeString(position),
    company: safeString(company),
    companyLocation: safeString(companyLocation),
    useBulletPoints: true,
    achievements: bulletPoints,
    description: safeString(exp.description || ''),
    technologies: techArray,
    startDate: exp.startDate || exp.startYear || '',
    endDate: exp.endDate || exp.endYear || '',
    current: exp.current || false
  };
};

// ===== Process Projects =====
const processProject = (project) => {
  let bulletPoints = [];
  
  if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
    bulletPoints = project.bulletPoints
      .filter(bp => safeString(bp).length > 0)
      .slice(0, CONTENT_LIMITS.achievementsPerProject)
      .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength));
  } else if (project.achievements && Array.isArray(project.achievements)) {
    bulletPoints = project.achievements
      .filter(ach => safeString(ach).length > 0)
      .slice(0, CONTENT_LIMITS.achievementsPerProject)
      .map(ach => safeString(ach).slice(0, CONTENT_LIMITS.achievementLength));
  }
  
  return {
    ...project,
    name: safeString(project.title || project.name || ''),
    role: safeString(project.role || ''),
    startDate: project.startDate || '',
    endDate: project.endDate || '',
    current: project.current || false,
    achievements: bulletPoints,
    projectUrl: safeString(project.projectUrl || project.url || project.link || '')
  };
};

// ===== Process Education =====
const processEducation = (edu) => {
  const institution = safeString(edu.institution || edu.school || '');
  const degree = safeString(edu.degree || '');
  const location = safeString(edu.location || edu.city || '');
  const dateRange = formatEducationDateRange(edu);
  const gpa = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : null;
  
  return {
    ...edu,
    institution,
    degree,
    location,
    dateRange,
    gpa,
    current: edu.current || false
  };
};

// ===== Process Certifications =====
const processCertification = (cert) => {
  const name = safeString(cert.name || cert.certification || cert.title || '');
  const issuer = safeString(cert.issuer || cert.organization || cert.provider || '');
  const date = cert.date ? formatDate(cert.date) : (cert.year ? cert.year : '');
  
  return {
    ...cert,
    name,
    issuer,
    date,
    id: cert.id || null
  };
};

// ===== Process Skills =====
const processSkills = (skillsArray) => {
  return safeArray(skillsArray)
    .slice(0, CONTENT_LIMITS.skills)
    .map(skill => {
      if (typeof skill === 'string') return skill;
      if (typeof skill === 'object') return skill.name || skill.skill || '';
      return '';
    })
    .filter(s => s.trim() !== '');
};

// ===== Process Summary =====
const processSummary = (summary) => {
  if (!summary) return '';
  const words = safeString(summary).split(' ');
  if (words.length > CONTENT_LIMITS.summaryWords) {
    return words.slice(0, CONTENT_LIMITS.summaryWords).join(' ');
  }
  return summary;
};

const Template12 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { personalInfo, education, experience, skills, languages = [], professionalSummary, projects = [], certifications = [] } = resumeData;
  const templateRef = useRef();

  // ===== Helper to check if item has content =====
  const hasContent = (item) => {
    if (!item) return false;
    
    if (item.bulletPoints && Array.isArray(item.bulletPoints) && item.bulletPoints.some(bp => safeString(bp).length > 0)) {
      return true;
    }
    
    if (safeString(item.position || item.title || '').length > 0 || 
        safeString(item.company || item.organization || '').length > 0) {
      return true;
    }
    
    if (safeString(item.description || '').length > 0) {
      return true;
    }
    
    if (item.achievements && Array.isArray(item.achievements) && item.achievements.some(ach => safeString(ach).length > 0)) {
      return true;
    }
    
    return false;
  };

  // ===== CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    const processExperiences = safeArray(experience)
      .filter(hasContent)
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);

    const processProjects = safeArray(projects)
      .filter(hasContent)
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject);

    const processEducations = safeArray(education)
      .filter(edu => edu.institution || edu.school || edu.degree)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    const processCertifications = safeArray(certifications)
      .filter(cert => cert.name || cert.certification || cert.title)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);

    const processedSkills = processSkills(skills);
    const processedSummary = processSummary(professionalSummary);

    return {
      experiences: processExperiences,
      projects: processProjects,
      education: processEducations,
      certifications: processCertifications,
      skills: processedSkills,
      summary: processedSummary
    };
  }, [professionalSummary, experience, projects, education, skills, certifications]);

  // ===== CONTACT INFO (Only LinkedIn optimized like Template1) =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key) => {
      if (value && safeString(value)) {
        let displayValue = safeString(value);
        let link = null;
        let icon = null;
        let iconColor = null;
        
        // LinkedIn optimization like Template1
        if (key === 'linkedin' || key === 'LinkedIn') {
          link = formatLinkedInLink(value);
          displayValue = formatLinkedInDisplay(value);
          const iconConfig = ICON_MAPPING.linkedin;
          icon = iconConfig.icon;
          iconColor = iconConfig.color;
        } else if (key === 'email') {
          link = `mailto:${value}`;
          icon = ICON_MAPPING.email;
        } else if (key === 'phone') {
          link = `tel:${value.replace(/[^0-9+]/g, '')}`;
          icon = ICON_MAPPING.phone;
        } else if (key === 'address') {
          icon = ICON_MAPPING.address;
        } else if (key === 'github') {
          link = safeString(value).startsWith('http') ? value : `https://${value}`;
          icon = ICON_MAPPING.github;
        } else if (key === 'portfolio') {
          link = safeString(value).startsWith('http') ? value : `https://${value}`;
          icon = ICON_MAPPING.portfolio;
        }
        
        contacts.push({ 
          value: displayValue,
          originalValue: safeString(value),
          type: key, 
          icon: icon,
          iconColor: iconColor,
          link: link
        });
      }
    };

    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.address, 'address');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.portfolio, 'portfolio');

    return contacts.slice(0, 4);
  }, [personalInfo]);

  // Define all styles - INCREASED CONTRAST and REDUCED SPACING
  const styles = {
    root: {
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      width: '210mm',
      minHeight: '297mm',
      background: '#ffffff',
      color: '#000000',
      lineHeight: 1.4,
      fontSize: '10.5pt',
      margin: 0,
      padding: 0,
      position: 'relative',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      boxSizing: 'border-box',
      ...(isExporting ? {
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e5e7',
        margin: '0 auto',
        borderRadius: '0',
        overflow: 'hidden'
      } : {})
    },
    
    container: {
      display: 'flex',
      minHeight: '297mm',
      margin: 0,
      padding: 0
    },
    
    leftPanel: {
      width: SPACING_CONFIG.leftPanelWidth,
      background: '#f5f5f7',
      padding: SPACING_CONFIG.headerPadding,
      display: 'flex',
      flexDirection: 'column',
      gap: SPACING_CONFIG.sectionGap,
      flexShrink: 0,
      boxSizing: 'border-box'
    },
    
    rightPanel: {
      width: SPACING_CONFIG.rightPanelWidth,
      background: '#ffffff',
      padding: SPACING_CONFIG.contentPadding,
      display: 'flex',
      flexDirection: 'column',
      gap: SPACING_CONFIG.sectionGap,
      flexShrink: 0,
      boxSizing: 'border-box'
    },
    
    nameSection: {
      textAlign: 'center',
      paddingBottom: '2mm',
      borderBottom: '2px solid #007aff',
      marginBottom: 0
    },
    
    name: {
      fontSize: '23pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 1mm 0',
      lineHeight: 1.1,
      letterSpacing: '-0.3px',
      textTransform: 'uppercase',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    // Professional title removed - no job title display
    contactBox: {
      background: '#ffffff',
      borderRadius: '6px',
      border: '1px solid #e5e5e7',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
      marginBottom: '0'
    },
    
    contactHeader: {
      background: '#007aff',
      color: '#ffffff',
      fontSize: '10pt',
      fontWeight: 600,
      padding: '1.5mm 3mm',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    contactContent: {
      padding: '1.5mm'
    },
    
    contactLine: {
      marginBottom: '0.5mm',
      paddingBottom: '0.5mm',
      borderBottom: '1px solid #f2f2f7',
      position: 'relative'
    },
    
    contactType: {
      fontSize: '8.5pt',
      fontWeight: 600,
      color: '#555555',
      marginBottom: '0',
      textTransform: 'uppercase',
      letterSpacing: '0.3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    contactInfo: {
      fontSize: '10pt',
      color: '#000000',
      lineHeight: 1.3,
      wordBreak: 'break-word',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    
    contactIcon: {
      fontSize: '11pt',
      marginRight: '2px'
    },
    
    panelHeader: {
      fontSize: '10pt',
      fontWeight: 600,
      color: '#ffffff',
      background: '#007aff',
      padding: '1mm 2.5mm',
      borderRadius: '4px',
      marginBottom: '0.5mm',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      textAlign: 'center',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    skillsPanel: {
      marginTop: 0
    },
    
    skillsContent: {
      padding: '0'
    },
    
    skillLine: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5mm',
      marginBottom: '1mm',
      padding: '0.8mm 1.5mm',
      background: '#ffffff',
      borderRadius: '4px',
      borderLeft: '3px solid #007aff',
      transition: 'all 0.2s ease'
    },
    
    skillBullet: {
      fontSize: '7.5pt',
      color: '#007aff',
      flexShrink: 0
    },
    
    skillName: {
      fontSize: '10pt',
      fontWeight: 500,
      color: '#000000',
      flex: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    educationPanel: {
      marginTop: 0
    },
    
    educationPanelContent: {
      padding: '0'
    },
    
    educationCardLeft: {
      background: '#ffffff',
      borderRadius: '4px',
      padding: '1.5mm',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '1mm'
    },
    
    eduHeaderLeft: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.3mm',
      position: 'relative',
      zIndex: 1
    },
    
    eduDegreeLeft: {
      fontSize: '10pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 0.2mm 0',
      lineHeight: 1.2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    eduInstitutionLeft: {
      fontSize: '9pt',
      fontWeight: 600,
      color: '#007aff',
      margin: '0.2mm 0 0.2mm 0',
      fontStyle: 'italic',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    eduLocationLeft: {
      fontSize: '8pt',
      color: '#555555',
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5mm',
      marginTop: '0.2mm',
      marginBottom: '0.2mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    eduDateGpaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',  // ADDED: 3px space between CGPA and date
      marginTop: '0.2mm',
      marginBottom: '0'
    },
    
    eduDateLeft: {
      fontSize: '7.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    eduGpaLeft: {
      fontSize: '7.5pt',
      fontWeight: 600,
      color: '#000000',
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5mm',
      whiteSpace: 'nowrap',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    gpaLabel: {
      color: '#000000',
      fontWeight: 600,
      marginRight: '0.5mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    certificationsPanel: {
      marginTop: 0
    },
    
    certificationsPanelContent: {
      padding: '0'
    },
    
    certificationCardLeft: {
      background: '#ffffff',
      borderRadius: '4px',
      padding: '1.5mm',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '1mm'
    },
    
    certHeaderLeft: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.3mm',
      position: 'relative',
      zIndex: 1
    },
    
    certNameLeft: {
      fontSize: '10pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 0.2mm 0',
      lineHeight: 1.2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    certIssuerLeft: {
      fontSize: '9pt',
      fontWeight: 600,
      color: '#007aff',
      margin: '0.2mm 0 0.2mm 0',
      fontStyle: 'italic',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    certDateLeft: {
      fontSize: '7.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      marginTop: '0.2mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    rightPanelContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: SPACING_CONFIG.sectionGap
    },
    
    summarySection: {
      marginBottom: '2mm',
      display: 'block',
      width: '100%'
    },
    
    cardHeader: {
      marginBottom: '1mm',
      position: 'relative'
    },
    
    cardTitle: {
      fontSize: '12.5pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 0.3mm 0',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      display: 'block'
    },
    
    cardAccent: {
      height: '1.5px',
      background: '#007aff',
      width: '25mm',
      borderRadius: '1px',
      display: 'block'
    },
    
    cardContent: {
      padding: '0.5mm 0'
    },
    
    summaryCard: {
      background: '#f8f8fa',
      padding: '2mm',
      borderRadius: '4px',
      borderLeft: '3px solid #007aff',
      marginBottom: '0',
      display: 'block'
    },
    
    summaryText: {
      fontSize: '10.5pt',
      color: '#000000',
      margin: 0,
      lineHeight: 1.5,
      textAlign: 'justify',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      display: 'block',
      fontWeight: 500
    },
    
    sectionHeader: {
      marginBottom: '1mm',
      position: 'relative'
    },
    
    sectionTitle: {
      fontSize: '12pt',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 0.3mm 0',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    titleDecoration: {
      height: '1.5px',
      background: '#007aff',
      width: '30mm',
      borderRadius: '1px'
    },
    
    experienceSection: {
      marginBottom: '2mm',
      order: 1
    },
    
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm'
    },
    
    experienceItem: {
      position: 'relative',
      paddingBottom: '1.5mm',
      borderBottom: '1px solid #f0f0f5'
    },
    
    projectItem: {
      position: 'relative',
      paddingBottom: '1.5mm',
      borderBottom: '1px solid #f0f0f5',
      marginBottom: 0
    },
    
    titleDateRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.5mm',
      flexWrap: 'wrap',
      gap: '1mm'
    },
    
    expPosition: {
      fontSize: '11pt',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      flex: 1,
      minWidth: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    dateStyle: {
      fontSize: '9.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      order: 2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    companyRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6mm',
      fontSize: '10pt',
      color: '#555555',
      marginTop: '0.2mm',
      lineHeight: 1.2,
      flexWrap: 'wrap'
    },
    
    expCompany: {
      fontWeight: 600,
      color: '#007aff',
      fontSize: '10pt',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    locationIcon: {
      fontSize: '9pt',
      color: '#555555',
      marginRight: '0.2mm'
    },
    
    expLocation: {
      fontWeight: 500,
      color: '#555555',
      fontStyle: 'italic',
      fontSize: '9.5pt',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    projectRole: {
      fontSize: '10pt',
      fontWeight: 500,
      color: '#007aff',
      margin: '0.2mm 0 0 0',
      fontStyle: 'normal',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    achievements: {
      marginTop: '1mm',
      paddingLeft: 0
    },
    
    achievement: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '2mm',
      marginBottom: '1mm',
      paddingLeft: 0,
      position: 'relative'
    },
    
    achievementIndicator: {
      flexShrink: 0,
      width: '5px',
      height: '5px',
      background: '#007aff',
      borderRadius: '50%',
      marginTop: '0.5em',
      position: 'relative',
      display: 'inline-block'
    },
    
    achievementText: {
      fontSize: '10pt',
      color: '#000000',
      lineHeight: 1.45,
      flex: 1,
      margin: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontWeight: 500
    },
    
    experienceDescription: {
      marginTop: '1mm',
      padding: '1.5mm',
      background: '#f8f8fa',
      borderRadius: '4px',
      borderLeft: '3px solid #007aff'
    },
    
    descriptionText: {
      fontSize: '10pt',
      color: '#000000',
      lineHeight: 1.45,
      margin: 0,
      textAlign: 'justify',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontWeight: 500
    },
    
    experienceTechnologies: {
      marginTop: '1mm',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '0.6mm'
    },
    
    technologiesLabel: {
      fontSize: '9pt',
      fontWeight: 600,
      color: '#007aff',
      whiteSpace: 'nowrap',
      marginRight: '0.6mm',
      marginTop: '0.2mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5mm',
      alignItems: 'center'
    },
    
    techTag: {
      fontSize: '8.5pt',
      color: '#000000',
      background: '#f0f7ff',
      padding: '0.3mm 1mm',
      borderRadius: '3px',
      border: '1px solid #e0f0ff',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      fontWeight: 500
    },
    
    projectsSection: {
      marginTop: '0',
      marginBottom: '0',
      order: 2
    },
    
    projectsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm'
    },
    
    projectHeader: {
      marginBottom: '1mm'
    },
    
    projectName: {
      fontSize: '11pt',
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      flex: 1,
      minWidth: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    projectDates: {
      fontSize: '9.5pt',
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      order: 2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    projectLink: {
      marginTop: '1mm',
      paddingTop: '1mm',
      borderTop: '1px solid #e5e5e7',
      fontSize: '9pt',
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6mm',
      flexWrap: 'wrap'
    },
    
    projectLinkStrong: {
      color: '#007aff',
      fontWeight: 600,
      marginRight: '0.6mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    
    link: {
      color: '#007aff',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'all 0.2s ease',
      wordBreak: 'break-all',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    }
  };

  // Helper component for achievement dot
  const AchievementIndicator = () => (
    <div style={styles.achievementIndicator}></div>
  );

  // ===== EXPERIENCE RENDERER =====
  const renderExperienceItem = (exp, index) => {
    return (
      <div key={index} style={index < contentAnalysis.experiences.length - 1 ? styles.experienceItem : { ...styles.experienceItem, borderBottom: 'none', paddingBottom: 0 }}>
        <div>
          <div style={styles.titleDateRow}>
            <h3 style={styles.expPosition}>{safeString(exp.position) || 'Position Not Specified'}</h3>
            <div style={styles.dateStyle}>
              {exp.startDate ? formatDate(exp.startDate) : 'Start'} – {exp.current ? 'Present' : (exp.endDate ? formatDate(exp.endDate) : 'End')}
            </div>
          </div>
          
          <div style={styles.companyRow}>
            <span style={styles.expCompany}>{safeString(exp.company) || 'Company Not Specified'}</span>
            {exp.companyLocation && exp.companyLocation.trim() && (
              <span style={styles.expLocation}>
                <span style={styles.locationIcon}>📍</span>
                <span>{exp.companyLocation}</span>
              </span>
            )}
          </div>
        </div>
        
        {exp.achievements && exp.achievements.length > 0 ? (
          <div style={styles.achievements}>
            {exp.achievements.map((achievement, idx) => (
              <div key={idx} style={styles.achievement}>
                <AchievementIndicator />
                <div style={styles.achievementText}>{safeString(achievement)}</div>
              </div>
            ))}
          </div>
        ) : exp.description ? (
          <div style={styles.experienceDescription}>
            <p style={styles.descriptionText}>{safeString(exp.description)}</p>
          </div>
        ) : null}
        
        {exp.technologies && exp.technologies.length > 0 && (
          <div style={styles.experienceTechnologies}>
            <span style={styles.technologiesLabel}>Technologies:</span>
            <div style={styles.techTags}>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} style={styles.techTag}>
                  {safeString(tech)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ===== PROJECT RENDERER =====
  const renderProjectItem = (project, index) => {
    const hasAchievements = project.achievements && project.achievements.length > 0;
    
    return (
      <div key={index} style={index < contentAnalysis.projects.length - 1 ? styles.projectItem : { ...styles.projectItem, borderBottom: 'none', paddingBottom: 0 }}>
        <div>
          <div style={styles.titleDateRow}>
            <h3 style={styles.projectName}>{project.name || 'Project Name'}</h3>
            <div style={styles.projectDates}>
              {project.startDate ? formatDate(project.startDate) : 'Start'} – {project.current ? 'Present' : (project.endDate ? formatDate(project.endDate) : 'End')}
            </div>
          </div>
          
          {project.role && (
            <div style={styles.projectRole}>{project.role}</div>
          )}
        </div>
        
        {hasAchievements ? (
          <div style={styles.achievements}>
            {project.achievements.map((achievement, idx) => (
              <div key={idx} style={styles.achievement}>
                <AchievementIndicator />
                <div style={styles.achievementText}>{safeString(achievement)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.experienceDescription}>
            <p style={styles.descriptionText}>No achievements specified</p>
          </div>
        )}
        
        {project.projectUrl && (
          <div style={styles.projectLink}>
            <span style={styles.projectLinkStrong}>Link:</span> 
            <a 
              href={project.projectUrl.startsWith('http') ? project.projectUrl : `https://${project.projectUrl}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.link}
            >
              {project.projectUrl}
            </a>
          </div>
        )}
      </div>
    );
  };

  // ===== EDUCATION RENDERER =====
  const renderEducationItemLeft = (edu, index) => {
    return (
      <div key={index} style={styles.educationCardLeft}>
        <div style={styles.eduHeaderLeft}>
          <h3 style={styles.eduDegreeLeft}>{safeString(edu.degree) || 'Degree'}</h3>
          <div style={styles.eduInstitutionLeft}>{edu.institution || 'Institution'}</div>
        </div>
        
        {edu.location && (
          <div style={styles.eduLocationLeft}>
            <span>📍</span> {edu.location}
          </div>
        )}
        
        <div style={styles.eduDateGpaRow}>
          {edu.dateRange && (
            <div style={styles.eduDateLeft}>
              {edu.dateRange}
            </div>
          )}
          
          {edu.gpa && (
            <div style={styles.eduGpaLeft}>
              <span style={styles.gpaLabel}>CGPA:</span> {edu.gpa}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== CERTIFICATION RENDERER =====
  const renderCertificationItemLeft = (cert, index) => {
    return (
      <div key={index} style={styles.certificationCardLeft}>
        <div style={styles.certHeaderLeft}>
          <h3 style={styles.certNameLeft}>{cert.name || 'Certification'}</h3>
          <div style={styles.certIssuerLeft}>{cert.issuer || 'Issuing Organization'}</div>
        </div>
        
        {cert.date && (
          <div style={styles.certDateLeft}>
            {cert.date}
          </div>
        )}
      </div>
    );
  };

  // ===== CONTACT RENDERER with LinkedIn optimization =====
  const renderContactItem = (contact, index) => {
    const content = (
      <>
        {contact.icon && (
          <span style={{
            ...styles.contactIcon,
            ...(contact.iconColor && { color: contact.iconColor, fontWeight: 'bold' })
          }}>
            {contact.icon}
          </span>
        )}
        <span style={{ flex: 1 }}>{contact.value}</span>
      </>
    );
    
    if (contact.link) {
      let finalLink = contact.link;
      
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
      
      if (contact.type === 'email' && !finalLink.startsWith('mailto:')) {
        finalLink = `mailto:${finalLink}`;
      }
      
      if (contact.type === 'phone' && !finalLink.startsWith('tel:')) {
        finalLink = `tel:${finalLink.replace(/[^0-9+]/g, '')}`;
      }
      
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
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div style={styles.contactLine}>
            <div style={styles.contactType}>{contact.type === 'linkedin' ? 'LinkedIn' : contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}</div>
            <div style={styles.contactInfo}>{content}</div>
          </div>
        </a>
      );
    }
    
    return (
      <div key={index} style={styles.contactLine}>
        <div style={styles.contactType}>{contact.type === 'linkedin' ? 'LinkedIn' : contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}</div>
        <div style={styles.contactInfo}>{content}</div>
      </div>
    );
  };

  // Professional title removed - no longer displayed
  // const professionalTitle = displayProfessionalTitle(); - REMOVED

  // Add print styles
  const printStyles = `
    @media print {
      .template12-print {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 !important;
        padding: 0 !important;
        background: white !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      .template12-print .left-panel {
        background: #f5f5f7 !important;
        gap: 4mm !important;
        padding: 10mm 5mm !important;
        width: 75mm !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .template12-print .right-panel {
        width: 135mm !important;
        padding: 8mm 6mm !important;
      }
      .template12-print .education-card-left,
      .template12-print .certification-card-left {
        background: white !important;
      }
      .template12-print .skill-line {
        margin-bottom: 1.5mm !important;
        padding: 1mm 1.5mm !important;
        background: white !important;
      }
      .template12-print .contact-header,
      .template12-print .panel-header {
        background: #007aff !important;
        color: white !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .template12-print .contact-box,
      .template12-print .skill-line,
      .template12-print .summary-card {
        border: 1px solid #e0e0e0 !important;
        background: white !important;
      }
      .template12-print .name,
      .template12-print .exp-position,
      .template12-print .project-name,
      .template12-print .edu-degree-left,
      .template12-print .cert-name-left,
      .template12-print .section-title,
      .template12-print .card-title {
        color: #000000 !important;
        display: block !important;
      }
      .template12-print .achievement-text,
      .template12-print .summary-text,
      .template12-print .description-text {
        color: #000000 !important;
        font-weight: 500 !important;
      }
      a {
        text-decoration: underline !important;
      }
    }
  `;

  return (
    <div ref={templateRef} style={styles.root} className="template12-print">
      <style>{printStyles}</style>
      
      <div style={styles.container}>
        {/* Left Panel - FIXED WIDTH */}
        <div style={styles.leftPanel}>
          <div style={styles.nameSection}>
            <h1 style={styles.name}>{safeString(personalInfo.fullName) || 'Professional Name'}</h1>
            {/* Professional title removed */}
          </div>

          {/* Contact Box */}
          {contactInfo.length > 0 && (
            <div style={styles.contactBox}>
              <div style={styles.contactHeader}>Contact Information</div>
              <div style={styles.contactContent}>
                {contactInfo.map(renderContactItem)}
              </div>
            </div>
          )}

          {/* Skills Section - Limited to 7 */}
          {contentAnalysis.skills.length > 0 && (
            <div style={styles.skillsPanel}>
              <div style={styles.panelHeader}>Core Competencies</div>
              <div style={styles.skillsContent}>
                {contentAnalysis.skills.map((skill, index) => (
                  <div key={index} style={styles.skillLine}>
                    <div style={styles.skillBullet}>●</div>
                    <div style={styles.skillName}>{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section - Limited to 2 */}
          {contentAnalysis.education.length > 0 && (
            <div style={styles.educationPanel}>
              <div style={styles.panelHeader}>Education</div>
              <div style={styles.educationPanelContent}>
                {contentAnalysis.education.slice(0, CONTENT_LIMITS.education).map(renderEducationItemLeft)}
              </div>
            </div>
          )}

          {/* Certifications Section - Limited to 2 */}
          {contentAnalysis.certifications.length > 0 && (
            <div style={styles.certificationsPanel}>
              <div style={styles.panelHeader}>Certifications</div>
              <div style={styles.certificationsPanelContent}>
                {contentAnalysis.certifications.slice(0, CONTENT_LIMITS.certifications).map(renderCertificationItemLeft)}
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - FIXED WIDTH */}
        <div style={styles.rightPanel}>
          {/* Professional Summary */}
          {contentAnalysis.summary && (
            <section style={styles.summarySection}>
              <div style={styles.cardHeader}>
                <h2 style={styles.cardTitle}>Executive Summary</h2>
                <div style={styles.cardAccent}></div>
              </div>
              <div style={styles.cardContent}>
                <div style={styles.summaryCard}>
                  <p style={styles.summaryText}>{contentAnalysis.summary}</p>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section - Limited to 3 */}
          {contentAnalysis.experiences.length > 0 && (
            <section style={styles.experienceSection}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Professional Experience</h2>
                <div style={styles.titleDecoration}></div>
              </div>
              <div style={styles.experienceList}>
                {contentAnalysis.experiences.map(renderExperienceItem)}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {contentAnalysis.projects.length > 0 && (
            <section style={styles.projectsSection}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Projects</h2>
                <div style={styles.titleDecoration}></div>
              </div>
              <div style={styles.projectsList}>
                {contentAnalysis.projects.slice(0, CONTENT_LIMITS.projects).map(renderProjectItem)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template12;