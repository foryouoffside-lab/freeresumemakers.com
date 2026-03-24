import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== DEBUG MODE - SET TO false FOR PRODUCTION =====
const DEBUG_MODE = false;

// ===== CONTENT LIMITS =====
const CONTENT_LIMITS = {
  skills: 6,
  experiences: 1,
  projects: 1,
  education: 2,
  certifications: 1,
  achievementsPerExperience: 4,
  achievementLength: 140,
  summaryWords: 100,
};

// ===== SPACING CONFIGURATION =====
const SPACING_CONFIG = {
  container: '8mm 12mm',
  gridGap: '4mm',
  sectionGap: '8px',
  cardPadding: '3mm',
  borderRadius: '8px',
  headerMarginBottom: '6px',
};

// ===== ICON MAPPING =====
const ICON_MAPPING = {
  email: '✉️',
  phone: '📱',
  address: '📍',
  linkedin: { icon: 'in', color: '#0077b5' },
  github: '🐙',
  website: '🌐',
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
  if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') return 'Present';
  if (/^\d{4}$/.test(dateString)) return dateString;
  
  try {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }
  } catch {}
  return dateString;
};

const formatMonthYear = (dateString) => {
  if (!dateString) return '';
  if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') return 'Present';
  if (/^\d{4}$/.test(dateString)) return dateString;
  
  try {
    if (dateString.includes('-')) {
      const [year, month] = dateString.split('-');
      if (year && month) {
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    }
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }
  } catch {}
  return dateString;
};

const formatDateRange = (start, end, isCurrent) => {
  const s = formatMonthYear(start);
  const e = isCurrent ? 'Present' : formatMonthYear(end);
  if (!s && !e) return '';
  if (s && !e) return s;
  if (!s && e) return e;
  return `${s} – ${e}`;
};

const formatEducationDate = (startDate, endDate, current) => {
  const start = formatMonthYear(startDate);
  const end = current ? 'Present' : formatMonthYear(endDate);
  if (!start && !end) return '';
  if (start && !end) return start;
  if (!start && end) return end;
  return `${start} – ${end}`;
};

// ===== LINK FORMATTING =====
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
      username = linkedinUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/^linkedin\.com\//, '').replace(/\/$/, '');
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
      username = linkedinUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/^linkedin\.com\//, '').replace(/\/$/, '');
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
      username = githubUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/^github\.com\//, '').replace(/\/$/, '');
    }
  } else {
    username = githubUrl;
  }
  username = username.split('/')[0].split('?')[0];
  return `https://github.com/${username}`;
};

const formatGitHubDisplay = (github) => {
  if (!github) return '';
  let displayValue = safeString(github).replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/^github\.com\//, '').replace(/\/$/, '').replace(/^@/, '');
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
  let displayValue = safeString(portfolio).replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
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
    case 'email': return `mailto:${value}`;
    case 'phone': return `tel:${String(value).replace(/[^0-9+]/g, '')}`;
    case 'linkedin': return formatLinkedInLink(value);
    case 'github': return formatGitHubLink(value);
    case 'portfolio': return formatPortfolioLink(value);
    default: return null;
  }
};

const getContactDisplayValue = (type, value) => {
  if (!value) return '';
  switch(type) {
    case 'email': return value;
    case 'phone': return value;
    case 'linkedin': return formatLinkedInDisplay(value);
    case 'github': return formatGitHubDisplay(value);
    case 'portfolio': return formatPortfolioDisplay(value);
    default: return value;
  }
};

// ===== GPA FORMATTING =====
const formatGPA = (gpa, scale) => {
  if (!gpa) return null;
  let gpaValue = gpa.toString().trim();
  const gpaNum = parseFloat(gpaValue);
  if (!isNaN(gpaNum)) {
    gpaValue = gpaNum.toFixed(2);
  }
  switch(scale) {
    case '4.0': return `GPA: ${gpaValue}/4.0`;
    case '5.0': return `CGPA: ${gpaValue}/5.0`;
    case '10.0': return `CGPA: ${gpaValue}/10`;
    case '100': return `Percentage: ${gpaValue}%`;
    default: return `GPA: ${gpaValue}/${scale}`;
  }
};

// ===== COLORS =====
const COLORS = {
  textPrimary: '#000000',
  textSecondary: '#1a1a1a',
  textMuted: '#2d2d2d',
  accent: '#2563eb',
  border: '#e5e7eb',
  background: '#ffffff',
  cardBg: '#fafafa',
  skillBg: '#f1f5f9',
};

const Template14 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { 
    personalInfo, 
    education, 
    experience, 
    projects = [], 
    skills, 
    certifications = [],
    professionalSummary,
  } = resumeData;
  
  const templateRef = useRef();

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

  // ===== DYNAMIC NAME SIZE =====
  const getDynamicNameSize = (name) => {
    if (!name) return '36pt';
    const nameLength = name.length;
    if (nameLength <= 15) return '36pt';
    if (nameLength <= 20) return '32pt';
    if (nameLength <= 25) return '28pt';
    if (nameLength <= 30) return '24pt';
    return '22pt';
  };

  // ===== CONTENT VALIDATION =====
  const hasExperienceContent = (exp) => {
    if (!exp) return false;
    const hasPosition = safeString(exp.position || exp.title || exp.role).length > 0;
    const hasCompany = safeString(exp.company || exp.organization).length > 0;
    return hasPosition || hasCompany;
  };

  const hasProjectContent = (project) => {
    if (!project) return false;
    const hasTitle = safeString(project.title || project.name).length > 0;
    const useBulletPoints = project.useBulletPoints !== false;
    let hasContent = false;
    if (useBulletPoints) {
      const bulletPoints = project.achievements || project.bulletPoints || [];
      hasContent = Array.isArray(bulletPoints) && bulletPoints.some(ach => safeString(ach).length > 0);
    } else {
      hasContent = safeString(project.description).length > 0;
    }
    return hasTitle || hasContent;
  };

  const hasEducationContent = (edu) => {
    if (!edu) return false;
    const hasDegree = safeString(edu.degree).length > 0;
    const hasInstitution = safeString(edu.institution || edu.school).length > 0;
    return hasDegree || hasInstitution;
  };

  const hasCertificationContent = (cert) => {
    if (!cert) return false;
    const hasName = safeString(cert.name || cert.certification || cert.title).length > 0;
    return hasName;
  };

  // ===== DATA PROCESSING =====
  const processExperience = (exp) => {
    const bulletPoints = safeArray(exp.bulletPoints || exp.achievements || [])
      .filter(bp => safeString(bp).length > 0)
      .slice(0, CONTENT_LIMITS.achievementsPerExperience)
      .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength));

    return {
      ...exp,
      position: safeString(exp.position || exp.title || exp.role),
      company: safeString(exp.company || exp.organization),
      location: safeString(exp.location || exp.city || ''),
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      current: exp.current || false,
      achievements: bulletPoints,
      formattedStartDate: formatMonthYear(exp.startDate),
      formattedEndDate: exp.current ? 'Present' : formatMonthYear(exp.endDate)
    };
  };

  const processProject = (project) => {
    const useBulletPoints = project.useBulletPoints !== false;
    const rawAchievements = project.achievements || project.bulletPoints || [];
    
    const achievements = useBulletPoints ? 
      safeArray(rawAchievements)
        .slice(0, 3)
        .map(ach => {
          let cleaned = safeString(ach);
          cleaned = cleaned.replace(/^[•\*\-]\s*/, '');
          return cleaned.slice(0, CONTENT_LIMITS.achievementLength);
        }) 
      : [];

    return {
      ...project,
      useBulletPoints,
      achievements,
      title: project.title || project.name || '',
      role: project.role || '',
      startDate: project.startDate || '',
      endDate: project.current ? 'Present' : (project.endDate || ''),
      link: project.link || '',
      projectUrl: project.projectUrl || project.url || project.link || '',
      formattedStartDate: formatMonthYear(project.startDate),
      formattedEndDate: project.current ? 'Present' : formatMonthYear(project.endDate)
    };
  };

  const processEducation = (edu) => {
    const degree = safeString(edu.degree) || '';
    const institution = safeString(edu.institution) || safeString(edu.school) || '';
    const location = safeString(edu.location) || '';
    const gpa = safeString(edu.gpa) || '';
    const honors = safeString(edu.honors) || '';
    
    const startDate = edu.startDate || edu.startYear || '';
    const endDate = edu.endDate || edu.endYear || edu.graduationYear || '';
    const current = edu.current || edu.ongoing || false;
    
    const dateDisplay = formatEducationDate(startDate, endDate, current);
    const gpaDisplay = gpa ? formatGPA(gpa, edu.gpaScale || '4.0') : null;
    
    return {
      ...edu,
      degree,
      institution,
      location,
      gpa,
      honors,
      startDate,
      endDate,
      current,
      dateDisplay,
      gpaDisplay,
      formattedStartDate: formatMonthYear(startDate),
      formattedEndDate: current ? 'Present' : formatMonthYear(endDate),
      gpaScale: edu.gpaScale || '4.0'
    };
  };

  const processCertification = (cert) => {
    const name = safeString(cert.name || cert.certification || cert.title) || '';
    const issuer = safeString(cert.issuer || cert.organization || cert.provider) || '';
    const date = cert.date ? formatMonthYear(cert.date) : (cert.year ? cert.year : '');
    
    return {
      ...cert,
      name,
      issuer,
      date,
      id: cert.id || null
    };
  };

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

  const processSummary = (summary) => {
    if (!summary) return '';
    const words = safeString(summary).split(' ');
    if (words.length > CONTENT_LIMITS.summaryWords) {
      return words.slice(0, CONTENT_LIMITS.summaryWords).join(' ');
    }
    return summary;
  };

  // ===== CONTACT INFO =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    const addContact = (value, key) => {
      if (value && safeString(value)) {
        const type = getContactType(key);
        const link = getContactLink(type, value);
        const displayValue = getContactDisplayValue(type, value);
        const icon = getContactIcon(type);
        const iconColor = getContactIconColor(type);
        contacts.push({ value: displayValue, type, icon, iconColor, link });
      }
    };
    addContact(personalInfo.email, 'email');
    addContact(personalInfo.phone, 'phone');
    addContact(personalInfo.address, 'address');
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.website, 'website');
    addContact(personalInfo.github, 'github');
    return contacts;
  }, [personalInfo]);

  // ===== CONTENT ANALYSIS =====
  const allExperienceWithContent = useMemo(() => 
    safeArray(experience).filter(hasExperienceContent), [experience]
  );

  const allProjectsWithContent = useMemo(() => 
    safeArray(projects).filter(hasProjectContent), [projects]
  );

  const allEducationWithContent = useMemo(() => 
    safeArray(education).filter(hasEducationContent), [education]
  );

  const allCertificationsWithContent = useMemo(() => 
    safeArray(certifications).filter(hasCertificationContent), [certifications]
  );

  const contentAnalysis = useMemo(() => {
    const processedExperiences = allExperienceWithContent
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);

    const processedProjects = allProjectsWithContent
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject);

    const processedEducation = allEducationWithContent
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    const processedCertifications = allCertificationsWithContent
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);

    const processedSkills = processSkills(skills);
    const processedSummary = processSummary(professionalSummary);

    return {
      experiences: processedExperiences,
      projects: processedProjects,
      education: processedEducation,
      certifications: processedCertifications,
      skills: processedSkills,
      summary: processedSummary,
      sections: {
        summary: processedSummary.length > 0,
        experience: processedExperiences.length > 0,
        projects: processedProjects.length > 0,
        skills: processedSkills.length > 0,
        education: processedEducation.length > 0,
        certifications: processedCertifications.length > 0,
      }
    };
  }, [professionalSummary, allExperienceWithContent, allProjectsWithContent, allEducationWithContent, allCertificationsWithContent, skills]);

  // ===== DYNAMIC NAME SIZE =====
  const fullName = safeString(personalInfo.fullName) || 'Your Name';
  const dynamicNameSize = getDynamicNameSize(fullName);

  // ===== RENDER CONTACT ITEM =====
  const renderContactItem = (contact, idx) => {
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          ...(contact.iconColor && { color: contact.iconColor, fontWeight: 'bold' })
        }}>
          {contact.icon}
        </span>
        <span>{contact.value}</span>
      </>
    );
    
    if (contact.link) {
      let finalLink = contact.link;
      if (contact.type === 'linkedin') {
        if (!finalLink.includes('linkedin.com')) {
          finalLink = `https://www.linkedin.com/in/${finalLink.replace(/^@/, '')}`;
        } else if (!finalLink.startsWith('https://')) {
          finalLink = finalLink.replace('http://', 'https://');
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
        }
      }
      if (contact.type === 'portfolio' || contact.type === 'website') {
        if (!finalLink.startsWith('https://') && !finalLink.startsWith('http://')) {
          finalLink = `https://${finalLink}`;
        } else if (finalLink.startsWith('http://')) {
          finalLink = finalLink.replace('http://', 'https://');
        }
      }
      return (
        <a key={idx} href={finalLink} target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
          {content}
        </a>
      );
    }
    return (
      <div key={idx} style={styles.contactItem}>
        {content}
      </div>
    );
  };

  // ===== CERTIFICATION RENDERER =====
  const renderCertificationItem = (cert, idx) => {
    return (
      <div key={idx} style={styles.certificationCard}>
        <div style={styles.certHeader}>
          <div style={styles.certTitleSection}>
            <div style={styles.certName}>{cert.name}</div>
            {cert.issuer && <div style={styles.certIssuer}>{cert.issuer}</div>}
          </div>
          {cert.date && (
            <div style={styles.certDate}>
              {cert.date}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== EXPERIENCE RENDERER =====
  const renderExperienceItem = (exp, idx) => {
    const dateDisplay = formatDateRange(exp.startDate, exp.endDate, exp.current);
    
    return (
      <div key={idx} style={styles.experienceCard}>
        <div style={styles.expHeader}>
          <div style={styles.expTitleSection}>
            <h4 style={styles.expPosition}>{exp.position || 'Position not specified'}</h4>
            <div style={styles.companyLocationRow}>
              <span style={styles.expCompany}>{exp.company || 'Company not specified'}</span>
              {exp.location && (
                <span style={styles.expLocation}>
                  <span>📍</span> {exp.location}
                </span>
              )}
            </div>
          </div>
          {dateDisplay && (
            <div style={styles.expDate}>
              {dateDisplay}
            </div>
          )}
        </div>
        
        {exp.achievements && exp.achievements.length > 0 && (
          <ul style={styles.bulletList}>
            {exp.achievements.map((ach, i) => (
              <li key={i} style={styles.bulletItem}>
                <span style={styles.bulletPoint}>•</span>
                <span style={styles.bulletText}>{ach}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // ===== PROJECT RENDERER =====
  const renderProjectItem = (project, idx) => {
    const dateDisplay = formatDateRange(project.startDate, project.endDate, project.current);
    
    return (
      <div key={idx} style={styles.projectCard}>
        <div style={styles.projectHeader}>
          <div style={styles.projectTitleSection}>
            <h4 style={styles.projectTitle}>{project.title || 'Project not specified'}</h4>
            {project.role && (
              <div style={styles.projectRole}>{project.role}</div>
            )}
          </div>
          {dateDisplay && (
            <div style={styles.projectDate}>
              {dateDisplay}
            </div>
          )}
        </div>
        
        {project.achievements && project.achievements.length > 0 && (
          <ul style={styles.bulletList}>
            {project.achievements.map((ach, i) => (
              <li key={i} style={styles.bulletItem}>
                <span style={styles.bulletPoint}>•</span>
                <span style={styles.bulletText}>{ach}</span>
              </li>
            ))}
          </ul>
        )}
        
        {(project.link || project.projectUrl) && (
          <div style={styles.projectLink}>
            <span style={styles.linkLabel}>Link:</span> 
            <a href={project.projectUrl || project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {project.projectUrl || project.link}
            </a>
          </div>
        )}
      </div>
    );
  };

  // ===== EDUCATION RENDERER - DATE AND GPA SIDE BY SIDE WITH REDUCED GAP (LIKE TEMPLATE18) =====
  const renderEducationItem = (edu, idx) => {
    return (
      <div key={idx} style={styles.educationCard}>
        <div style={styles.educationHeader}>
          <h4 style={styles.eduDegree}>{edu.degree || 'Degree not specified'}</h4>
          <div style={styles.institutionInfo}>
            <span style={styles.eduInstitution}>{edu.institution || 'Institution not specified'}</span>
            {edu.location && (
              <span style={styles.eduLocation}>
                <span>📍</span> {edu.location}
              </span>
            )}
          </div>
        </div>
        
        {/* Date and GPA side by side with reduced gap - matching Template18 style */}
        {(edu.dateDisplay || edu.gpaDisplay) && (
          <div style={styles.eduDetailsRow}>
            {edu.dateDisplay && (
              <span style={styles.eduDateText}>
                {edu.dateDisplay}
                {edu.current && <span style={styles.eduCurrent}> • Current</span>}
              </span>
            )}
            
            {edu.gpaDisplay && (
              <span style={styles.eduGpaText}>
                {edu.gpaDisplay}
              </span>
            )}
          </div>
        )}
        
        {/* Honors on separate line if exists */}
        {edu.honors && (
          <div style={styles.eduHonorsRow}>
            <span>🏆</span> {edu.honors}
          </div>
        )}
      </div>
    );
  };

  // ===== SKILL RENDERER =====
  const renderSkillTag = (skill, idx) => (
    <span key={idx} style={styles.skillTag}>
      {skill}
    </span>
  );

  // ===== STYLES - UPDATED EDUCATION STYLES =====
  const styles = {
    container: {
      boxSizing: 'border-box',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      color: COLORS.textPrimary,
      lineHeight: 1.45,
      backgroundColor: COLORS.background,
      width: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      padding: SPACING_CONFIG.container,
    },

    header: {
      textAlign: 'center',
      marginBottom: SPACING_CONFIG.headerMarginBottom,
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderBottom: '2px solid #e5e7eb',
    },
    name: {
      fontSize: dynamicNameSize,
      fontWeight: 700,
      letterSpacing: '-0.5px',
      marginTop: 0,
      marginBottom: '2mm',
      color: COLORS.textPrimary,
      lineHeight: 1.2,
      wordBreak: 'break-word',
    },
    jobTitle: {
      display: 'none',
    },

    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '30% 70%',
      gap: SPACING_CONFIG.gridGap,
      marginTop: '4mm',
    },

    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: SPACING_CONFIG.sectionGap,
    },
    leftSection: {
      padding: '0',
      marginBottom: 0,
    },
    leftSectionTitle: {
      fontSize: '12pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: '2mm',
      marginTop: 0,
      paddingBottom: '0.5mm',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderBottom: `2px solid ${COLORS.accent}`,
    },

    photoContainer: {
      marginBottom: '3mm',
      textAlign: 'center',
    },
    profilePhoto: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '2mm',
      marginBottom: '1mm',
      fontSize: '10pt',
      color: COLORS.textSecondary,
      textDecoration: 'none',
      padding: '1mm 0',
    },
    contactIcon: {
      width: '20px',
      fontSize: '11pt',
      color: COLORS.accent,
      fontWeight: 'bold',
    },

    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2mm',
    },
    skillTag: {
      backgroundColor: COLORS.skillBg,
      padding: '1mm 3mm',
      borderRadius: '20px',
      fontSize: '9.5pt',
      color: COLORS.textPrimary,
      fontWeight: 600,
      border: `1px solid ${COLORS.border}`,
    },

    // Certification Styles
    certificationCard: {
      backgroundColor: COLORS.cardBg,
      padding: SPACING_CONFIG.cardPadding,
      borderRadius: SPACING_CONFIG.borderRadius,
      marginBottom: '2mm',
      border: `1px solid ${COLORS.border}`,
    },
    certHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2mm',
      flexWrap: 'wrap',
    },
    certTitleSection: {
      flex: 1,
      minWidth: 0,
    },
    certName: {
      fontSize: '10.5pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: '0.5mm',
    },
    certIssuer: {
      fontSize: '9.5pt',
      fontWeight: 600,
      color: COLORS.accent,
    },
    certDate: {
      fontSize: '9pt',
      color: COLORS.textPrimary,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },

    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: SPACING_CONFIG.sectionGap,
    },
    section: {
      marginBottom: 0,
      paddingBottom: 0,
    },
    sectionTitle: {
      fontSize: '14pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      marginBottom: '2mm',
      marginTop: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderBottom: `2px solid ${COLORS.accent}`,
      paddingBottom: '0.5mm',
    },

    summaryBox: {
      backgroundColor: COLORS.cardBg,
      padding: SPACING_CONFIG.cardPadding,
      borderRadius: SPACING_CONFIG.borderRadius,
      fontSize: '11.5pt',
      lineHeight: 1.55,
      color: COLORS.textSecondary,
      border: `1px solid ${COLORS.border}`,
      fontWeight: 500,
      marginBottom: 0,
    },

    experienceCard: {
      backgroundColor: COLORS.cardBg,
      padding: SPACING_CONFIG.cardPadding,
      borderRadius: SPACING_CONFIG.borderRadius,
      marginBottom: 0,
      border: `1px solid ${COLORS.border}`,
    },
    expHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2mm',
      gap: '2mm',
      flexWrap: 'wrap',
    },
    expTitleSection: {
      flex: 1,
      minWidth: 0,
    },
    expPosition: {
      fontSize: '12pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      margin: 0,
      lineHeight: 1.3,
      marginBottom: '1mm',
    },
    companyLocationRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2mm',
      marginTop: '0.5mm',
    },
    expCompany: {
      fontSize: '10pt',
      fontWeight: 600,
      color: COLORS.accent,
    },
    expLocation: {
      fontSize: '9pt',
      color: COLORS.textMuted,
      display: 'flex',
      alignItems: 'center',
      gap: '1mm',
    },
    expDate: {
      fontSize: '9pt',
      color: COLORS.textPrimary,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },

    projectCard: {
      backgroundColor: COLORS.cardBg,
      padding: SPACING_CONFIG.cardPadding,
      borderRadius: SPACING_CONFIG.borderRadius,
      marginBottom: 0,
      border: `1px solid ${COLORS.border}`,
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2mm',
      gap: '2mm',
      flexWrap: 'wrap',
    },
    projectTitleSection: {
      flex: 1,
      minWidth: 0,
    },
    projectTitle: {
      fontSize: '12pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      margin: 0,
      lineHeight: 1.3,
      marginBottom: '1mm',
    },
    projectRole: {
      fontSize: '9.5pt',
      fontWeight: 500,
      color: COLORS.accent,
    },
    projectDate: {
      fontSize: '9pt',
      color: COLORS.textPrimary,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    projectLink: {
      marginTop: '2mm',
      paddingTop: '1.5mm',
      borderTop: `1px solid ${COLORS.border}`,
      fontSize: '8.5pt',
      display: 'flex',
      alignItems: 'center',
      gap: '1mm',
      flexWrap: 'wrap',
    },
    linkLabel: {
      color: COLORS.accent,
      fontWeight: 700,
    },
    link: {
      color: COLORS.accent,
      textDecoration: 'none',
      wordBreak: 'break-all',
    },

    // Education Card Styles - Date and GPA side by side with reduced gap (like Template18)
    educationCard: {
      backgroundColor: COLORS.cardBg,
      padding: SPACING_CONFIG.cardPadding,
      borderRadius: SPACING_CONFIG.borderRadius,
      marginBottom: 0,
      border: `1px solid ${COLORS.border}`,
    },
    educationHeader: {
      marginBottom: '2mm',
    },
    eduDegree: {
      fontSize: '11pt',
      fontWeight: 700,
      color: COLORS.textPrimary,
      margin: 0,
      lineHeight: 1.3,
      marginBottom: '1mm',
    },
    institutionInfo: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '2mm',
    },
    eduInstitution: {
      fontSize: '10pt',
      fontWeight: 600,
      color: COLORS.accent,
    },
    eduLocation: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      fontSize: '9pt',
      color: COLORS.textMuted,
      fontWeight: 500,
    },
    eduDetailsRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',  // Reduced gap between date and GPA
      marginTop: '1mm',
      paddingTop: '2mm',
      borderTop: '1px solid #e5e7eb',
    },
    eduDateText: {
      fontSize: '8.5pt',  // Smaller text size
      color: COLORS.textMuted,
      fontWeight: 500,
    },
    eduCurrent: {
      color: COLORS.accent,
      fontWeight: 600,
      fontStyle: 'italic',
      marginLeft: '1mm',
    },
    eduGpaText: {
      fontSize: '8.5pt',  // Smaller text size
      color: COLORS.textPrimary,
      fontWeight: 600,
    },
    eduHonorsRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '2mm',
      fontSize: '8.5pt',
      color: COLORS.accent,
      fontWeight: 500,
    },

    bulletList: {
      margin: '2mm 0 0 0',
      paddingLeft: 0,
      listStyle: 'none',
    },
    bulletItem: {
      marginBottom: '1mm',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '2mm',
      lineHeight: 1.45,
    },
    bulletPoint: {
      color: COLORS.accent,
      fontSize: '12px',
      fontWeight: 'bold',
      flexShrink: 0,
      width: '10px',
      textAlign: 'center',
    },
    bulletText: {
      flex: 1,
      lineHeight: 1.45,
      color: COLORS.textSecondary,
      fontWeight: 500,
      fontSize: '11pt',
    },
  };

  return (
    <div ref={templateRef} style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>{fullName}</h1>
      </header>

      <div style={styles.contentGrid}>
        {/* LEFT COLUMN - Contact, Skills, Education */}
        <div style={styles.leftColumn}>
          {personalInfo.photo && (
            <div style={styles.photoContainer}>
              <img src={personalInfo.photo} alt="Profile" style={styles.profilePhoto} />
            </div>
          )}
          
          <div style={styles.leftSection}>
            <h3 style={styles.leftSectionTitle}>Contact</h3>
            <div>{contactInfo.map(renderContactItem)}</div>
          </div>
          
          {contentAnalysis.sections.skills && (
            <div style={styles.leftSection}>
              <h3 style={styles.leftSectionTitle}>Skills</h3>
              <div style={styles.skillsContainer}>
                {contentAnalysis.skills.map(renderSkillTag)}
              </div>
            </div>
          )}

          {/* Education Section */}
          {contentAnalysis.sections.education && (
            <div style={styles.leftSection}>
              <h3 style={styles.leftSectionTitle}>Education</h3>
              <div>
                {contentAnalysis.education.map(renderEducationItem)}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - Summary, Experience, Projects, Certifications */}
        <div style={styles.rightColumn}>
          {contentAnalysis.sections.summary && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Summary</h2>
              <div style={styles.summaryBox}>{contentAnalysis.summary}</div>
            </section>
          )}

          {contentAnalysis.sections.experience && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Experience</h2>
              <div>{contentAnalysis.experiences.map(renderExperienceItem)}</div>
            </section>
          )}

          {contentAnalysis.sections.projects && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Projects</h2>
              <div>{contentAnalysis.projects.map(renderProjectItem)}</div>
            </section>
          )}

          {/* Certifications Section */}
          {contentAnalysis.sections.certifications && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Certifications</h2>
              <div>
                {contentAnalysis.certifications.map(renderCertificationItem)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template14;