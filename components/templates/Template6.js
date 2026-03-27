import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== ICON MAPPING - Using Template1 style icons =====
const T6_ICON_MAPPING = Object.freeze({
  email: 'âœ‰',
  phone: 'ðŸ“ž',
  address: 'ðŸ“',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color matching Template1
  github: 'âŒ¨',
  portfolio: 'ðŸŒ',
  default: 'ðŸ“Œ'
});

const EXPERIENCE_TYPES = {
  job: { label: "Experience", icon: "ðŸ’¼", color: "#1a3a5f" },
  internship: { label: "Internships", icon: "ðŸŽ“", color: "#1e6f5c" },
  project: { label: "Projects", icon: "ðŸš€", color: "#c13535" },
  freelance: { label: "Freelance", icon: "ðŸ’»", color: "#d35400" },
  research: { label: "Research", icon: "ðŸ”¬", color: "#5e35b1" }
};

const Template6 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    languages = [], 
    professionalSummary,
    certifications = [], 
    projects = [], 
    awards = [], 
    tools = [], 
    coreStrengths = [] 
  } = resumeData;
  
  const templateRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [selectedExperienceType, setSelectedExperienceType] = useState("job");
  const [hoveredContact, setHoveredContact] = useState(null);

  // ===== CONTENT LIMITS =====
  const CONTENT_LIMITS = {
    experiences: 2,
    education: 1,
    skills: 8,
    languages: 0,
    projects: 1,
    awards: 1,
    tools: 0,
    coreStrengths: 0,
    certifications: 1,
    summaryWords: 100,
    achievementsPerExperience: 4,
    achievementLength: 140
  };

  // ===== HELPER FUNCTIONS =====
  const safeString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
  };

  const safeArray = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item != null && item !== '');
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
    portfolioUrl = portfolioUrl.replace(/^https?:\/\//, '');
    portfolioUrl = portfolioUrl.replace(/^www\./, '');
    
    return `https://${portfolioUrl}`;
  };

  const formatPortfolioDisplay = (portfolio) => {
    if (!portfolio) return '';
    
    let displayValue = safeString(portfolio).trim();
    
    if (!displayValue.startsWith('https://') && !displayValue.startsWith('http://')) {
      displayValue = `https://${displayValue}`;
    }
    
    return displayValue;
  };

  // ===== CONTACT HELPER FUNCTIONS =====
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

  const getContactIcon = (type) => {
    const iconConfig = T6_ICON_MAPPING[type] || T6_ICON_MAPPING.default;
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  };

  const getContactIconColor = (type) => {
    const iconConfig = T6_ICON_MAPPING[type];
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

  // ===== GPA FORMATTING =====
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

  // ===== EXPERIENCE CONTENT VALIDATION =====
  const hasExperienceContent = (exp) => {
    if (!exp) return false;
    const title = safeString(exp.position || exp.title || exp.role);
    const org = safeString(exp.company || exp.organization);
    const hasCoreInfo = title.length > 0 && org.length > 0;
    
    return hasCoreInfo || (exp.bulletPoints && 
      safeArray(exp.bulletPoints).some(bp => safeString(bp).length > 10));
  };

  // ===== CONTACT INFO with formatted display values =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key) => {
      if (value && safeString(value)) {
        const type = getContactType(key);
        const link = getContactLink(type, value);
        const displayValue = getContactDisplayValue(type, value);
        const icon = getContactIcon(type);
        const iconColor = getContactIconColor(type);
        
        contacts.push(Object.freeze({ 
          originalValue: safeString(value),
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
    addContact(personalInfo.linkedin, 'linkedin');
    addContact(personalInfo.github, 'github');
    addContact(personalInfo.portfolio, 'portfolio');

    return contacts.slice(0, 4);
  }, [personalInfo]);

  // ===== PROFESSIONAL TITLE =====
  const professionalTitle = personalInfo?.jobTitle ? safeString(personalInfo.jobTitle) : null;

  // ===== DATE FORMATTING =====
  const formatDate = (dateString) => {
    if (!dateString || dateString.trim() === '') return '';
    const lower = dateString.toLowerCase();
    if (lower === 'present' || lower === 'current' || lower === 'ongoing') return 'Present';
    
    if (/^\d{4}$/.test(dateString.trim())) return dateString.trim();
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short',
          timeZone: 'UTC'
        });
      }
    } catch (e) {
      console.warn('Date parsing failed:', dateString);
    }
    
    return dateString.trim();
  };

  const formatDateRange = (start, end, isCurrent) => {
    const startDate = formatDate(start);
    const endDate = isCurrent ? 'Present' : formatDate(end);
    
    if (!startDate && !endDate) return '';
    if (startDate && !endDate) return startDate;
    if (!startDate && endDate) return endDate;
    return `${startDate} â€“ ${endDate}`;
  };

  const formatEducationDate = (dateString) => {
    if (!dateString || dateString.trim() === '') return '';
    const lower = dateString.toLowerCase();
    if (lower === 'present' || lower === 'current' || lower === 'ongoing') return 'Present';
    
    if (/^\d{4}$/.test(dateString.trim())) return dateString.trim();
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short',
          timeZone: 'UTC'
        });
      }
    } catch (e) {}
    
    return dateString.trim();
  };

  // ===== CONTENT PROCESSING =====
  const processExperience = (exp) => {
    return {
      ...exp,
      bulletPoints: safeArray(exp.bulletPoints || exp.achievements)
        .filter(bp => safeString(bp).length > 10)
        .slice(0, CONTENT_LIMITS.achievementsPerExperience)
        .map(bp => safeString(bp).slice(0, CONTENT_LIMITS.achievementLength)),
      company: safeString(exp.company || exp.organization),
      position: safeString(exp.position || exp.title || exp.role),
      startDate: safeString(exp.startDate),
      endDate: exp.current ? 'Present' : safeString(exp.endDate),
      location: safeString(exp.location),
      current: exp.current || false
    };
  };

  const processEducation = (edu) => {
    const startDate = formatEducationDate(edu.startDate || edu.startYear);
    const endDate = edu.current ? 'Present' : formatEducationDate(edu.endDate || edu.endYear || edu.graduationYear);
    const dateDisplay = startDate && endDate ? `${startDate} â€“ ${endDate}` : (startDate || endDate || '');
    
    const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return {
      degree: safeString(edu.degree),
      institution: safeString(edu.institution),
      location: safeString(edu.location) || safeString(edu.address) || '',
      dateDisplay,
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay,
      honors: safeString(edu.honors)
    };
  };

  const processProject = (project) => {
    const rawLink = safeString(project.link || project.url);
    let fullLink = '';
    let displayLink = '';
    
    if (rawLink) {
      let cleanedLink = rawLink.trim();
      cleanedLink = cleanedLink.replace(/^@/, '');
      cleanedLink = cleanedLink.replace(/^https?:\/\//, '');
      cleanedLink = cleanedLink.replace(/^www\./, '');
      fullLink = `https://${cleanedLink}`;
      displayLink = fullLink;
    }
    
    return {
      name: safeString(project.name),
      role: safeString(project.role),
      link: rawLink,
      fullLink: fullLink,
      displayLink: displayLink
    };
  };

  const processCertification = (cert) => ({
    name: safeString(cert.name || cert.title),
    issuer: safeString(cert.issuer || cert.organization),
    dateDisplay: cert.date ? formatDate(cert.date) : (cert.year || '')
  });

  const processAward = (award) => ({
    name: safeString(award.name || award.title),
    issuer: safeString(award.issuer || award.organization),
    dateDisplay: award.date ? formatDate(award.date) : (award.year || '')
  });

  // ===== CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    const allExperiencesWithContent = safeArray(experience).filter(hasExperienceContent);
    const typeCounts = {};
    Object.keys(EXPERIENCE_TYPES).forEach(type => {
      typeCounts[type] = allExperiencesWithContent.filter(exp => exp.type === type).length;
    });

    const processedExperiences = safeArray(experience)
      .filter(hasExperienceContent)
      .filter(exp => exp.type === selectedExperienceType)
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);

    const processedEducation = safeArray(education)
      .filter(edu => safeString(edu.institution).length > 0)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    const processedProjects = safeArray(projects)
      .filter(proj => safeString(proj.name).length > 0)
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject);

    let limitedSummary = '';
    if (professionalSummary) {
      const words = safeString(professionalSummary).split(/\s+/);
      if (words.length > CONTENT_LIMITS.summaryWords) {
        limitedSummary = words.slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '...';
      } else {
        limitedSummary = words.join(' ');
      }
    }

    const processedCertifications = safeArray(certifications)
      .filter(c => safeString(c.name || c.title).length > 1)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);

    const processedAwards = safeArray(awards)
      .filter(a => safeString(a.name || a.title).length > 1)
      .slice(0, CONTENT_LIMITS.awards)
      .map(processAward);

    const availableTypes = Object.keys(EXPERIENCE_TYPES)
      .filter(type => typeCounts[type] > 0)
      .sort((a, b) => {
        const priority = ['job', 'internship', 'project', 'freelance', 'research'];
        return priority.indexOf(a) - priority.indexOf(b);
      });

    if (availableTypes.length > 0 && !availableTypes.includes(selectedExperienceType)) {
      setSelectedExperienceType(availableTypes[0]);
    }

    const processedSkills = safeArray(skills)
      .filter(s => safeString(s).length > 1)
      .slice(0, CONTENT_LIMITS.skills);

    const processData = {
      experiences: processedExperiences,
      education: processedEducation,
      skills: processedSkills,
      projects: processedProjects,
      awards: processedAwards,
      certifications: processedCertifications
    };

    const sections = {
      summary: limitedSummary.length > 30,
      experience: processedExperiences.length > 0,
      hasAnyExperience: allExperiencesWithContent.length > 0,
      skills: processedSkills.length >= 2,
      education: processedEducation.length > 0,
      projects: processedProjects.length > 0,
      awards: processedAwards.length > 0,
      certifications: processedCertifications.length > 0
    };

    return {
      ...processData,
      limitedSummary,
      sections,
      typeCounts,
      availableTypes,
      activeSections: Object.values(sections).filter(Boolean).length,
      allExperiencesWithContent
    };
  }, [professionalSummary, experience, education, skills, certifications, projects, awards, selectedExperienceType]);

  // ===== LAYOUT CONFIG =====
  const layoutConfig = useMemo(() => {
    const { activeSections } = contentAnalysis;
    
    const baseConfig = {
      fontSize: '11pt',
      nameSize: '25pt',
      titleSize: '13pt',
      spacing: '2mm',
      lineHeight: '1.3'
    };
    
    if (activeSections > 7) {
      return { 
        ...baseConfig, 
        fontSize: '10pt',
        nameSize: '23pt',
        titleSize: '12pt',
        spacing: '1.5mm',
        lineHeight: '1.2'
      };
    } else if (activeSections > 5) {
      return { 
        ...baseConfig, 
        fontSize: '10.5pt',
        nameSize: '24pt',
        titleSize: '12.5pt',
        spacing: '1.75mm',
        lineHeight: '1.25'
      };
    }
    return baseConfig;
  }, [contentAnalysis]);

  // ===== AUTO-SELECT VALID EXPERIENCE TYPE =====
  useEffect(() => {
    if (contentAnalysis.availableTypes.length > 0 && 
        !contentAnalysis.availableTypes.includes(selectedExperienceType)) {
      setSelectedExperienceType(contentAnalysis.availableTypes[0]);
    }
  }, [contentAnalysis.availableTypes, selectedExperienceType]);

  // ===== HELPER GETTERS =====
  const getSkillName = (skill) => typeof skill === 'object' ? skill.name : skill;

  // ===== SECTION TITLE GENERATOR =====
  const getSectionTitle = (baseTitle, type) => {
    if (baseTitle === 'WORK EXPERIENCE' && type) {
      return EXPERIENCE_TYPES[type]?.label || 'Experience';
    }
    return baseTitle;
  };

  // ===== GET SECTION BORDER COLOR (matching skills color #1a3a5f) =====
  const getSectionBorderColor = () => '#1a3a5f';

  // ===== OVERFLOW CHECK =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const container = templateRef.current;
      const contentHeight = container.scrollHeight;
      const a4Height = 297;
      const mmToPx = 3.78;
      const maxPxHeight = a4Height * mmToPx;
      setIsOverflowing(contentHeight > maxPxHeight * 1.05);
    }
  }, [contentAnalysis, isExporting, layoutConfig]);

  // ===== OPTIMIZED RENDER CONTACT ITEM =====
  const renderContactItem = (contact, index) => {
    const isHovered = hoveredContact === index;
    const iconColor = contact.iconColor || '#000000';
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          color: iconColor,
          fontWeight: contact.type === 'linkedin' ? 'bold' : 'normal',
          transition: 'transform 0.2s ease'
        }}>
          {contact.icon}
        </span>
        <span style={styles.contactValue}>{contact.displayValue}</span>
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

  // ===== RENDER FUNCTIONS =====
  const renderExperienceItem = (exp, index) => (
    <div key={index} style={styles.experienceWrapper}>
      <div style={styles.connector}>
        <div style={styles.connectorDot}></div>
        {index < contentAnalysis.experiences.length - 1 && (
          <div style={styles.connectorLine}></div>
        )}
      </div>
      
      <div style={styles.experienceBox}>
        <div style={styles.expBoxHeader}>
          <div style={styles.expBoxTitleSection}>
            <h4 style={styles.expBoxPosition}>{safeString(exp.position)}</h4>
            <div style={styles.expBoxCompanyRow}>
              <span style={styles.expBoxCompany}>{safeString(exp.company)}</span>
              {exp.location && (
                <span style={styles.expBoxLocation}>
                  <span style={styles.locationIcon}>ðŸ“</span>
                  {safeString(exp.location)}
                </span>
              )}
            </div>
          </div>
          <div style={styles.expBoxDates}>
            {formatDate(exp.startDate)} â€“ {exp.current ? 'Present' : formatDate(exp.endDate)}
          </div>
        </div>
        
        {exp.bulletPoints && exp.bulletPoints.length > 0 && (
          <ul style={styles.expBoxAchievements}>
            {exp.bulletPoints.map((achievement, idx) => (
              <li key={idx} style={styles.expBoxAchievement}>
                <span style={styles.achievementBullet}>â€¢</span>
                {safeString(achievement)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  const renderEducationItem = (edu, index) => (
    <div key={index} style={styles.educationBox}>
      <h4 style={styles.eduBoxDegree}>{safeString(edu.degree)}</h4>
      <div style={styles.eduBoxInstitutionRow}>
        <span style={styles.eduBoxInstitution}>{safeString(edu.institution)}</span>
        {edu.location && (
          <span style={styles.eduBoxLocation}>
            <span>ðŸ“</span>
            {safeString(edu.location)}
          </span>
        )}
      </div>
      
      <div style={styles.eduBoxMetaRow}>
        {edu.dateDisplay && (
          <div style={styles.eduBoxDates}>
            {edu.dateDisplay}
          </div>
        )}
        
        {edu.gpaDisplay && (
          <span style={styles.gpaDisplay}>
            {edu.gpaDisplay}
          </span>
        )}
      </div>
    </div>
  );

  const renderProjectItem = (project, index) => (
    <div key={index} style={styles.projectMiniBox}>
      <h4 style={styles.projectMiniName}>{safeString(project.name)}</h4>
      
      {project.role && (
        <div style={styles.projectMiniRole}>
          <span style={styles.projectLabel}>Role:</span> {safeString(project.role)}
        </div>
      )}
      
      {project.fullLink && (
        <div style={styles.projectMiniLink}>
          <span style={styles.projectLabel}>Link:</span> 
          <a 
            href={project.fullLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.projectLink}
            title={project.fullLink}
            onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
          >
            {project.displayLink}
          </a>
        </div>
      )}
    </div>
  );

  const renderCertificationItem = (cert, index) => (
    <div key={index} style={styles.certificationBox}>
      <div style={styles.certBoxName}>{safeString(cert.name)}</div>
      <div style={styles.certBoxIssuer}>{safeString(cert.issuer)}</div>
      {cert.dateDisplay && (
        <div style={styles.certBoxDate}>{cert.dateDisplay}</div>
      )}
    </div>
  );

  const renderAwardItem = (award, index) => (
    <div key={index} style={styles.awardBox}>
      <div style={styles.certBoxName}>{safeString(award.name)}</div>
      <div style={styles.certBoxIssuer}>{safeString(award.issuer)}</div>
      {award.dateDisplay && (
        <div style={styles.certBoxDate}>{award.dateDisplay}</div>
      )}
    </div>
  );

  const renderSkillItem = (skill, index) => {
    const name = getSkillName(skill);
    if (!name || name.length < 2) return null;
    return (
      <div key={index} style={styles.skillItem}>
        <span>âœ¦</span>
        <span>{name}</span>
      </div>
    );
  };

  // ===== STYLES WITH IMPROVED SPACING BETWEEN SECTIONS =====
  const styles = {
    template: {
      fontFamily: "'Georgia', 'Times New Roman', 'Merriweather', serif",
      lineHeight: layoutConfig.lineHeight,
      color: '#1a1a1a',
      width: '210mm',
      minHeight: '297mm',
      background: 'white',
      margin: 0,
      padding: 0,
      fontSize: layoutConfig.fontSize,
      fontWeight: 400,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      overflow: 'hidden',
      position: 'relative',
      ...(isOverflowing && { overflow: 'visible' })
    },
    container: {
      padding: '0 15mm',
      position: 'relative'
    },
    header: {
      padding: '10mm 0 5mm 0',
      position: 'relative',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '5mm',
      textAlign: 'center'
    },
    nameSection: {
      marginTop: '5px',
      marginBottom: '10px'
    },
    fullName: {
      fontSize: layoutConfig.nameSize,
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 4px 0',
      lineHeight: 1.1,
      letterSpacing: '0.5px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      textAlign: 'center'
    },
    jobTitle: {
      fontSize: `calc(${layoutConfig.titleSize} * 1.2)`,
      fontWeight: 600,
      color: '#000000',
      margin: 0,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      textAlign: 'center'
    },
    
    contactSection: {
      marginTop: '10px',
      paddingTop: '8px',
      borderTop: '1px solid #e2e8f0'
    },
    contactList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))',
      gap: '12px 24px',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      color: '#000000',
      padding: '4px 0',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      justifyContent: 'center'
    },
    contactItemHover: {
      background: 'rgba(0, 0, 0, 0.05)',
      padding: '4px 8px',
      margin: '0 -8px',
      borderRadius: '4px'
    },
    contactIcon: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      flexShrink: 0,
      transition: 'transform 0.2s ease',
      width: '20px',
      textAlign: 'center'
    },
    contactValue: {
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '200px'
    },
    
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '7fr 3fr',
      gap: `calc(${layoutConfig.spacing} * 3)`,
      padding: `calc(${layoutConfig.spacing} * 1) 0`
    },
    mainColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    sideColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    section: {
      marginBottom: `calc(${layoutConfig.spacing} * 3)`
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: layoutConfig.spacing,
      marginBottom: `calc(${layoutConfig.spacing} * 2)`
    },
    sectionTitle: {
      fontSize: `calc(${layoutConfig.fontSize} * 1.1)`,
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      paddingBottom: `calc(${layoutConfig.spacing} * 0.8)`,
      borderBottom: `2px solid ${getSectionBorderColor()}`,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: "'Georgia', 'Times New Roman', serif"
    },
    sectionIcon: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      color: '#000000',
    },
    sectionContent: {
      padding: 0
    },
    sectionSpacing: {
      marginTop: `calc(${layoutConfig.spacing} * 1.5)`
    },
    
    summaryBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: `calc(${layoutConfig.spacing} * 1.5)`,
      marginBottom: 0,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `3px solid ${getSectionBorderColor()}`,
      borderRadius: '0 6px 6px 0'
    },
    summaryText: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      color: '#000000',
      lineHeight: layoutConfig.lineHeight,
      margin: 0,
      textAlign: 'justify',
      lineHeight: 1.55,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 500
    },
    
    educationGrid: (count) => ({
      display: 'grid',
      gridTemplateColumns: count === 1 ? '1fr' : 'repeat(2, 1fr)',
      gap: `calc(${layoutConfig.spacing} * 2)`
    }),
    educationBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: `calc(${layoutConfig.spacing} * 1.5)`,
      marginBottom: 0,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `3px solid ${getSectionBorderColor()}`,
      height: '100%',
      width: '100%'
    },
    eduBoxDegree: {
      fontSize: `calc(${layoutConfig.fontSize} * 1.05)`,
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 4px 0',
      lineHeight: 1.2,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    eduBoxInstitutionRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '4px'
    },
    eduBoxInstitution: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      fontWeight: 700,
      color: '#000000',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    eduBoxLocation: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      whiteSpace: 'nowrap',
      fontWeight: 500
    },
    eduBoxMetaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '6px'
    },
    eduBoxDates: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      fontWeight: 600,
      color: '#000000',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: 'inline-flex',
      alignItems: 'center',
      background: 'transparent',
      padding: '0',
      border: 'none',
      borderRadius: '0'
    },
    gpaDisplay: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      fontWeight: 600,
      color: '#000000',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: 'transparent',
      padding: '0',
      border: 'none',
      borderRadius: '0',
      marginLeft: '0'
    },
    
    experienceList: {
      position: 'relative'
    },
    experienceWrapper: {
      position: 'relative',
      paddingLeft: '25px'
    },
    connector: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '25px'
    },
    connectorDot: {
      width: '14px',
      height: '14px',
      background: 'radial-gradient(circle at center, #1a3a5f 40%, transparent 40%), linear-gradient(white, white)',
      borderRadius: '50%',
      border: '2px solid #1a3a5f',
      position: 'relative',
      zIndex: 2,
      flexShrink: 0,
      marginTop: '15px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    connectorLine: {
      flex: 1,
      width: '2px',
      background: '#1a3a5f',
      margin: '4px 0',
      minHeight: '20px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },
    experienceBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: `calc(${layoutConfig.spacing} * 1.5)`,
      marginBottom: `calc(${layoutConfig.spacing} * 1.5)`,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `2px solid ${getSectionBorderColor()}`
    },
    expBoxHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '4px',
      gap: '15px'
    },
    expBoxTitleSection: {
      flex: 1,
      minWidth: 0
    },
    expBoxPosition: {
      fontSize: `calc(${layoutConfig.fontSize} * 1.05)`,
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      lineHeight: 1.3,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal'
    },
    expBoxCompanyRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '2px'
    },
    expBoxCompany: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      fontWeight: 700,
      color: '#000000',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    expBoxLocation: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      whiteSpace: 'nowrap',
      fontWeight: 500
    },
    locationIcon: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`
    },
    expBoxDates: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      color: '#000000',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      background: 'transparent',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      flexShrink: 0,
      alignSelf: 'flex-start'
    },
    expBoxAchievements: {
      margin: '12px 0 0 0',
      paddingLeft: '0',
      listStyle: 'none'
    },
    expBoxAchievement: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      color: '#000000',
      marginBottom: '8px',
      lineHeight: 1.4,
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 500
    },
    achievementBullet: {
      color: '#000000',
      fontWeight: 'bold',
      flexShrink: 0,
      marginTop: '2px',
      fontSize: '14px'
    },
    
    skillsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '8px'
    },
    skillItem: {
      background: getSectionBorderColor(),
      color: 'white',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      fontWeight: 500,
      textAlign: 'center',
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      justifyContent: 'center',
      fontFamily: "'Georgia', 'Times New Roman', serif"
    },
    
    projectMiniBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: '12px',
      marginBottom: `calc(${layoutConfig.spacing} * 1)`,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `3px solid ${getSectionBorderColor()}`
    },
    projectMiniName: {
      fontSize: `calc(${layoutConfig.fontSize} * 1)`,
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 8px 0',
      lineHeight: 1.2,
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    projectMiniRole: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      color: '#000000',
      marginBottom: '6px',
      display: 'flex',
      gap: '6px',
      lineHeight: 1.3,
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      fontWeight: 500
    },
    projectMiniLink: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      color: '#000000',
      display: 'flex',
      gap: '6px',
      lineHeight: 1.3,
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      fontWeight: 500
    },
    projectLabel: {
      fontWeight: 700,
      color: '#000000',
      minWidth: '40px',
      flexShrink: 0
    },
    projectLink: {
      color: '#0066cc',
      textDecoration: 'none',
      wordBreak: 'break-all',
      fontWeight: 500,
      flex: 1
    },
    
    certificationBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: '12px',
      marginBottom: `calc(${layoutConfig.spacing} * 0.8)`,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `3px solid ${getSectionBorderColor()}`
    },
    
    awardBox: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      padding: '12px',
      marginBottom: `calc(${layoutConfig.spacing} * 0.8)`,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: `3px solid ${getSectionBorderColor()}`
    },
    certBoxName: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      lineHeight: 1.2,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    certBoxIssuer: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      fontWeight: 600,
      color: '#000000',
      marginBottom: '2px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    certBoxDate: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      color: '#000000',
      fontStyle: 'italic',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 500
    },
    emptyState: {
      textAlign: 'center',
      padding: '30px 20px',
      background: 'rgba(0,0,0,0.02)',
      borderRadius: '8px',
      border: '1px dashed #e2e8f0'
    },
    emptyIcon: {
      fontSize: '36px',
      marginBottom: '10px',
      opacity: 0.6
    },
    emptyStateP: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.95)`,
      color: '#000000',
      fontWeight: 500
    },
    experienceTypes: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    },
    typeTab: (isActive, color) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 12px',
      background: isActive ? 'white' : 'transparent',
      border: `2px solid ${isActive ? color : 'transparent'}`,
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`,
      fontWeight: 600,
      color: '#000000',
      transition: 'all 0.2s ease'
    }),
    tabIcon: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.9)`
    },
    tabLabel: {
      fontSize: `calc(${layoutConfig.fontSize} * 0.85)`,
      fontWeight: 600
    }
  };

  return (
    <div 
      ref={templateRef}
      style={styles.template}
    >
      <div style={styles.container}>
        {/* ===== HEADER - CENTERED ===== */}
        <header style={styles.header}>
          <div style={styles.nameSection}>
            <h1 style={styles.fullName}>{safeString(personalInfo.fullName) || 'Your Name'}</h1>
            
            {professionalTitle && (
              <h2 style={styles.jobTitle}>{professionalTitle}</h2>
            )}
          </div>

          {/* OPTIMIZED Contact Info - Centered with improved spacing */}
          {contactInfo.length > 0 && (
            <div style={styles.contactSection}>
              <div style={styles.contactList}>
                {contactInfo.map(renderContactItem)}
              </div>
            </div>
          )}
        </header>

        <div style={styles.contentGrid}>
          {/* ===== LEFT COLUMN ===== */}
          <div style={styles.mainColumn}>
            {contentAnalysis.sections.summary && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  PROFESSIONAL SUMMARY
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div style={styles.summaryBox}>
                    <p style={styles.summaryText}>{contentAnalysis.limitedSummary}</p>
                  </div>
                </div>
              </section>
            )}

            {contentAnalysis.sections.hasAnyExperience && (
              <section style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionIcon}>âœ¦</span>
                    {getSectionTitle("WORK EXPERIENCE", selectedExperienceType)}
                  </h3>
                  
                  {contentAnalysis.availableTypes.length > 1 && (
                    <div style={styles.experienceTypes}>
                      {contentAnalysis.availableTypes.map(type => {
                        const config = EXPERIENCE_TYPES[type];
                        const isActive = selectedExperienceType === type;
                        return (
                          <button
                            key={type}
                            style={styles.typeTab(isActive, config.color)}
                            onClick={() => setSelectedExperienceType(type)}
                          >
                            <span style={styles.tabIcon}>{config.icon}</span>
                            <span style={styles.tabLabel}>{config.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                {contentAnalysis.sections.experience ? (
                  <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                    <div style={styles.experienceList}>
                      {contentAnalysis.experiences.map(renderExperienceItem)}
                    </div>
                  </div>
                ) : (
                  <div style={styles.emptyState}>
                    <div style={styles.emptyIcon}>{EXPERIENCE_TYPES[selectedExperienceType]?.icon || 'ðŸ’¼'}</div>
                    <p style={styles.emptyStateP}>No {EXPERIENCE_TYPES[selectedExperienceType]?.label.toLowerCase() || 'experience'} entries available</p>
                  </div>
                )}
              </section>
            )}

            {contentAnalysis.sections.education && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  EDUCATION
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div style={styles.educationGrid(contentAnalysis.education.length)}>
                    {contentAnalysis.education.map(renderEducationItem)}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div style={styles.sideColumn}>
            {contentAnalysis.sections.skills && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  KEY SKILLS
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div style={styles.skillsList}>
                    {contentAnalysis.skills.map(renderSkillItem)}
                  </div>
                </div>
              </section>
            )}

            {contentAnalysis.sections.projects && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  PROJECT
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div>
                    {contentAnalysis.projects.map(renderProjectItem)}
                  </div>
                </div>
              </section>
            )}

            {contentAnalysis.sections.certifications && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  CERTIFICATIONS
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div>
                    {contentAnalysis.certifications.map(renderCertificationItem)}
                  </div>
                </div>
              </section>
            )}

            {contentAnalysis.sections.awards && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¦</span>
                  AWARDS
                </h3>
                <div style={{...styles.sectionContent, ...styles.sectionSpacing}}>
                  <div>
                    {contentAnalysis.awards.map(renderAwardItem)}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;