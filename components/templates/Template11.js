import Head from 'next/head';
import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== DEBUG MODE =====
const DEBUG_MODE = false;

// ===== LOCKED TEMPLATE11 COMPONENT =====
const LockedTemplate11 = React.memo(({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { personalInfo, education, experience, skills, languages = [], professionalSummary, certifications = [], projects = [], awards = [], tools = [], coreStrengths = [] } = resumeData;
  
  const templateRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // ===== DEBUG LOGGING =====
  const debugLog = useCallback((message, data = null, level = 'info') => {
    if (DEBUG_MODE) {
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      const logMessage = `[Template11 DEBUG ${timestamp}] ${message}`;
      
      if (level === 'error') {
        console.error(logMessage, data);
      } else if (level === 'warn') {
        console.warn(logMessage, data);
      }
    }
  }, []);

  // ===== ISOLATED HELPER FUNCTIONS =====
  const safeString = useCallback((value) => {
    const result = value == null ? '' : (typeof value === 'string' ? value.trim() : String(value).trim());
    return result;
  }, []);

  const safeArray = useCallback((data) => {
    return !Array.isArray(data) ? [] : data.filter(item => item != null);
  }, []);

  // ===== FORMAT GPA FUNCTION =====
  const formatGPA = useCallback((gpa, scale) => {
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
  }, [safeString]);

  // ===== FIXED COMPANY NAME EXTRACTION =====
  const getCompanyName = useCallback((exp) => {
    if (!exp) return '';
    
    const possibleFields = [
      exp.company,
      exp.organization,
      exp.employer,
      exp.institution,
      exp.client,
      exp.companyName
    ];
    
    for (const field of possibleFields) {
      const name = safeString(field);
      if (name) return name;
    }
    
    return '';
  }, [safeString]);

  // ===== FIXED POSITION/TITLE EXTRACTION =====
  const getPositionTitle = useCallback((exp) => {
    if (!exp) return '';
    
    const possibleFields = [
      exp.position,
      exp.jobTitle,
      exp.title,
      exp.role,
      exp.positionTitle
    ];
    
    for (const field of possibleFields) {
      const title = safeString(field);
      if (title) return title;
    }
    
    return '';
  }, [safeString]);

  // ===== GET COMPANY LOCATION =====
  const getCompanyLocation = useCallback((exp) => {
    if (!exp) return '';
    
    const possibleFields = [
      exp.location,
      exp.companyLocation,
      exp.city,
      exp.country,
      exp.workLocation
    ];
    
    for (const field of possibleFields) {
      const location = safeString(field);
      if (location) return location;
    }
    
    return '';
  }, [safeString]);

  // ===== UPDATED CONTENT LIMITS =====
  const CONTENT_LIMITS = useMemo(() => ({
    experiences: 2,
    skills: 7,
    languages: 0,
    projects: 1,
    awards: 1,
    tools: 0,
    certifications: 2,
    education: 1,
    summaryWords: 100,
    achievementsPerExperience: 4,
    achievementMaxLength: 150
  }), []);

  // ===== ISOLATED CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    const rawExperiences = safeArray(experience);
    
    const processExperiences = rawExperiences
      .slice(0, CONTENT_LIMITS.experiences)
      .map((exp, index) => {
        const companyName = getCompanyName(exp);
        const positionTitle = getPositionTitle(exp);
        const companyLocation = getCompanyLocation(exp);
        
        return {
          ...exp,
          company: exp.company || companyName,
          companyName: companyName,
          position: exp.position || positionTitle,
          positionTitle: positionTitle,
          location: exp.location || companyLocation,
          companyLocation: companyLocation,
          achievements: safeArray(exp.achievements || exp.bulletPoints || [])
            .slice(0, CONTENT_LIMITS.achievementsPerExperience)
            .map(achievement => 
              safeString(achievement).slice(0, CONTENT_LIMITS.achievementMaxLength)
            ),
        };
      });

    const limitedSummary = professionalSummary ? 
      (safeString(professionalSummary).split(' ').length > CONTENT_LIMITS.summaryWords ? 
        safeString(professionalSummary).split(' ').slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '...' : 
        professionalSummary
      ) : '';

    const processData = {
      experiences: processExperiences,
      skills: safeArray(skills).slice(0, CONTENT_LIMITS.skills),
      languages: safeArray(languages).slice(0, CONTENT_LIMITS.languages),
      projects: safeArray(projects).slice(0, CONTENT_LIMITS.projects),
      awards: safeArray(awards).slice(0, CONTENT_LIMITS.awards),
      tools: safeArray(tools).slice(0, CONTENT_LIMITS.tools),
      coreStrengths: safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths),
      certifications: safeArray(certifications).slice(0, CONTENT_LIMITS.certifications),
      education: safeArray(education).slice(0, CONTENT_LIMITS.education),
    };

    const sections = {
      summary: limitedSummary.length > 0,
      experience: processData.experiences.length,
      education: processData.education.length,
      skills: processData.skills.length,
      languages: processData.languages.length,
      certifications: processData.certifications.length,
      projects: processData.projects.length,
      awards: processData.awards.length,
      tools: processData.tools.length,
      coreStrengths: processData.coreStrengths.length,
    };

    return {
      ...processData,
      limitedSummary,
      sections,
      activeSections: Object.values(sections).filter(Boolean).length
    };
  }, [professionalSummary, experience, education, skills, languages, certifications, projects, awards, tools, coreStrengths, CONTENT_LIMITS, safeArray, safeString, getCompanyName, getPositionTitle, getCompanyLocation]);

  // ===== ISOLATED DATA GETTERS =====
  const getItemName = useMemo(() => ({
    skill: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    language: (item) => {
      if (typeof item === 'object') return item.name || item.language || item.lang || '';
      return safeString(item);
    },
    project: (item) => typeof item === 'object' ? item.name || item.title || '' : safeString(item),
    award: (item) => typeof item === 'object' ? item.name || item.title || '' : safeString(item),
    tool: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    coreStrength: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    certification: (item) => typeof item === 'object' ? item.name || item.title || '' : safeString(item)
  }), [safeString]);

  // ===== ISOLATED DATE FORMATTING =====
  const formatDate = useCallback((dateString, isEducation = false) => {
    if (!dateString || dateString.trim() === '') return '';
    
    if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
      return 'Present';
    }
    
    if (/^\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    if (/^[a-zA-Z]+\s+\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    if (/^[a-zA-Z]+-\d{4}$/.test(dateString)) {
      return dateString.replace('-', ' ');
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {
      // If parsing fails, return the original string
    }
    
    return dateString;
  }, []);

  // ===== FIXED EDUCATION DATE FORMATTING WITH GPA =====
  const formatEducationDate = useCallback((edu) => {
    const startYear = edu.startYear || edu.startDate || '';
    const endYear = edu.endYear || edu.endDate || '';
    const graduationYear = edu.graduationYear || '';
    
    const formattedStart = startYear ? formatDate(startYear, true) : '';
    const formattedEnd = endYear ? formatDate(endYear, true) : '';
    const formattedGrad = graduationYear ? formatDate(graduationYear, true) : '';
    
    if (formattedStart && formattedEnd) {
      return `${formattedStart} - ${formattedEnd}`;
    }
    
    if (formattedEnd) {
      return formattedEnd;
    }
    
    if (formattedGrad) {
      return formattedGrad;
    }
    
    if (formattedStart) {
      return formattedStart;
    }
    
    return '';
  }, [formatDate]);

  // ===== GET GPA DISPLAY =====
  const getGPADisplay = useCallback((edu) => {
    if (!edu.gpa) return '';
    return formatGPA(edu.gpa, edu.gpaScale);
  }, [formatGPA]);

  // ===== ISOLATED EXPERIENCE DATE FORMATTING =====
  const formatExperienceDate = useCallback((exp) => {
    const startDate = formatDate(exp.startDate);
    const endDate = formatDate(exp.endDate);
    
    if (startDate && endDate) {
      return `${startDate} – ${endDate}`;
    } else if (startDate) {
      return `${startDate} – Present`;
    } else if (endDate) {
      return endDate;
    }
    
    return '';
  }, [formatDate]);

  // ===== ISOLATED CERTIFICATION DATE FORMATTING =====
  const formatCertificationDate = useCallback((cert) => {
    const dateFields = [
      cert.date,
      cert.year,
      cert.issueDate,
      cert.issuedDate,
      cert.completionDate,
      cert.receivedDate
    ];
    
    for (const field of dateFields) {
      const date = formatDate(field);
      if (date) return date;
    }
    
    return '';
  }, [formatDate]);

  // ===== ISOLATED CONTACT INFO =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    const addContact = (value, icon) => {
      if (value) contacts.push({ value: safeString(value), icon });
    };

    addContact(personalInfo.email, '✉');
    addContact(personalInfo.phone, '☏');
    addContact(personalInfo.address, '📍');
    addContact(personalInfo.linkedin, '🔗');
    addContact(personalInfo.website, '🌐');
    addContact(personalInfo.github, '⚡');

    return contacts;
  }, [personalInfo, safeString]);

  // ===== ISOLATED OVERFLOW CHECK =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const container = templateRef.current;
      const contentHeight = container.scrollHeight;
      const a4Height = 297;
      const mmToPx = 3.78;
      const maxPxHeight = a4Height * mmToPx;
      
      setIsOverflowing(contentHeight > maxPxHeight);
    }
  }, [contentAnalysis, isExporting]);

  // ===== UPDATED STYLES - REDUCED FONT SIZES BY 1PX =====
  const styles = {
    root: {
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      width: '210mm',
      minHeight: '297mm',
      background: '#ffffff',
      color: '#000000',
      lineHeight: 1.4,
      fontSize: '11.5pt', // Reduced from 12.5pt to 11.5pt (-1px)
      margin: 0,
      padding: 0,
      letterSpacing: '0.1px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      boxSizing: 'border-box',
      position: 'relative',
      top: 0,
      left: 0,
      ...(isExporting && {
        boxShadow: '0 0 30px rgba(0,0,0,0.15)',
        border: '1px solid #ddd',
        margin: '0 auto',
        borderRadius: '0'
      })
    },
    textWrapFix: {
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'normal',
      maxWidth: '100%',
      lineHeight: 1.4,
      color: '#000000'
    },
    header: {
      padding: '4mm 20mm 2mm 20mm',
      borderBottom: '3px double #000000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      background: 'linear-gradient(to bottom, #fdfdfd, #f5f5f5)',
      margin: 0
    },
    name: {
      fontSize: '26pt', // Kept same
      fontWeight: 800,
      color: '#000000',
      margin: '0 0 1mm 0',
      letterSpacing: '-0.8px',
      textTransform: 'uppercase',
      lineHeight: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    contact: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      lineHeight: 1.3,
      textAlign: 'right',
      fontWeight: 500,
      minWidth: '70mm',
      color: '#000000',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    contactItem: {
      color: '#000000',
      marginBottom: '0.5mm'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '7fr 3fr',
      gap: '4mm',
      padding: '3mm 20mm 15mm 20mm'
    },
    sectionTitle: {
      fontSize: '12.5pt', // Reduced from 13.5pt to 12.5pt (-1px)
      fontWeight: 800,
      color: '#000000',
      marginBottom: '1.5mm',
      paddingBottom: '0.5mm',
      borderBottom: '2px solid #000000',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    sidebarTitle: {
      fontSize: '11.5pt', // Reduced from 12.5pt to 11.5pt (-1px)
      fontWeight: 800,
      color: '#000000',
      marginBottom: '1.5mm',
      paddingBottom: '0.5mm',
      borderBottom: '2px solid #000000',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    summarySection: {
      marginBottom: '3mm'
    },
    educationSection: {
      marginBottom: '4mm'
    },
    experienceSection: {
      marginBottom: '3mm'
    },
    experienceItem: {
      marginBottom: '4mm',
      paddingBottom: '2mm',
      borderBottom: '1px solid #e0e0e0'
    },
    experienceItemLastChild: {
      borderBottom: 'none',
      marginBottom: 0
    },
    expHeader: {
      marginBottom: '1mm'
    },
    expTitleRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1mm',
      flexWrap: 'wrap',
      gap: '8px'
    },
    expPosition: {
      fontSize: '12.5pt', // Reduced from 13.5pt to 12.5pt (-1px)
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.3,
      flex: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    expDates: {
      fontSize: '10.5pt', // Reduced from 11.5pt to 10.5pt (-1px)
      fontWeight: 600,
      color: '#1a3a5f',
      fontStyle: 'italic',
      textAlign: 'right',
      flexShrink: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    companyLocationLine: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '1mm'
    },
    expCompany: {
      fontSize: '10.5pt', // Reduced from 11.5pt to 10.5pt (-1px)
      fontWeight: 600,
      color: '#2c3e50',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    expLocation: {
      fontSize: '11px', // Reduced from 12px to 11px (-1px)
      color: '#4b5563',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    locationIcon: {
      fontSize: '10px' // Reduced from 11px to 10px (-1px)
    },
    achievementsList: {
      margin: '1.5mm 0 0 0',
      paddingLeft: '3mm'
    },
    achievementItem: {
      fontSize: '11pt', // Reduced from 12pt to 11pt (-1px)
      lineHeight: 1.4,
      color: '#1f2937',
      marginBottom: '0.8mm',
      textAlign: 'justify',
      position: 'relative',
      paddingLeft: '1.5mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0.8mm',
      marginBottom: '0.8mm'
    },
    skillItem: {
      padding: '1mm 2mm',
      borderLeft: '2px solid #000000',
      fontWeight: 600,
      fontSize: '10.5pt', // Reduced from 11.5pt to 10.5pt (-1px)
      textAlign: 'left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      background: 'transparent',
      color: '#000000',
      flexShrink: 0,
      minWidth: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationItem: {
      marginBottom: '3mm',
      padding: '1.5mm 0'
    },
    educationItemLastChild: {
      marginBottom: 0
    },
    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.8mm',
      gap: '6px',
      flexWrap: 'wrap'
    },
    eduDegree: {
      fontSize: '12pt', // Reduced from 13pt to 12pt (-1px)
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      lineHeight: 1.2,
      flex: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationDates: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      fontWeight: 600,
      color: '#1a3a5f',
      fontStyle: 'italic',
      textAlign: 'right',
      flexShrink: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    institutionLocationRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '0.8mm'
    },
    eduInstitution: {
      fontSize: '11pt', // Reduced from 12pt to 11pt (-1px)
      fontWeight: 600,
      color: '#2c3e50',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    eduLocation: {
      fontSize: '10.5pt', // Reduced from 11.5pt to 10.5pt (-1px)
      color: '#4b5563',
      fontStyle: 'italic',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      lineHeight: 1.2,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      whiteSpace: 'nowrap'
    },
    locationGpaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '0.8mm'
    },
    gpaText: {
      fontSize: '10.5pt', // Reduced from 11.5pt to 10.5pt (-1px)
      fontWeight: 600,
      color: '#1a3a5f',
      display: 'inline-block',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    sidebarSection: {
      marginBottom: '4mm'
    },
    projectsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5mm'
    },
    projectItem: {
      paddingBottom: '1.5mm',
      borderBottom: '1px solid #e0e0e0'
    },
    projectItemLastChild: {
      borderBottom: 'none',
      paddingBottom: 0
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1mm',
      gap: '6px',
      flexWrap: 'wrap'
    },
    projectNameSection: {
      flex: 1
    },
    projectName: {
      fontSize: '12pt', // Reduced from 13pt to 12pt (-1px)
      fontWeight: 700,
      color: '#000000',
      margin: 0,
      flex: 1,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectLink: {
      color: '#000000',
      textDecoration: 'none',
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    },
    projectDate: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      fontWeight: 600,
      color: '#1a3a5f',
      fontStyle: 'italic',
      textAlign: 'right',
      flexShrink: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectRole: {
      fontSize: '11pt', // Reduced from 12pt to 11pt (-1px)
      color: '#2c3e50',
      marginBottom: '0.8mm',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    projectLinkDisplay: {
      marginTop: '1.5mm'
    },
    projectUrl: {
      fontSize: '11pt', // Reduced from 12pt to 11pt (-1px)
      color: '#0066cc',
      textDecoration: 'none',
      wordBreak: 'break-all',
      display: 'inline-block',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    certificationsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm'
    },
    certificationItem: {
      paddingBottom: '1.5mm'
    },
    certificationItemLastChild: {
      borderBottom: 'none',
      paddingBottom: 0
    },
    certName: {
      fontWeight: 600,
      fontSize: '11.2pt', // Reduced from 12.2pt to 11.2pt (-1px)
      color: '#000000',
      marginBottom: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    certIssuer: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      color: '#4b5563',
      fontStyle: 'italic',
      marginBottom: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    certDate: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      color: '#1a3a5f',
      fontWeight: 600,
      fontStyle: 'italic',
      marginTop: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    awardsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2mm'
    },
    awardItem: {
      paddingBottom: '1.5mm'
    },
    awardItemLastChild: {
      paddingBottom: 0
    },
    awardName: {
      fontWeight: 600,
      fontSize: '11.2pt', // Reduced from 12.2pt to 11.2pt (-1px)
      color: '#000000',
      marginBottom: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    awardIssuer: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      color: '#4b5563',
      fontStyle: 'italic',
      marginBottom: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    awardDate: {
      fontSize: '10pt', // Reduced from 11pt to 10pt (-1px)
      color: '#1a3a5f',
      fontWeight: 600,
      fontStyle: 'italic',
      marginTop: '0.4mm',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    summary: {
      fontSize: '11.5pt', // Reduced from 12.5pt to 11.5pt (-1px)
      lineHeight: 1.5,
      textAlign: 'justify',
      color: '#1f2937',
      fontWeight: 400,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    }
  };

  // ===== EXPERIENCE RENDERER =====
  const renderExperienceItem = useCallback((exp, index) => {
    const position = exp.positionTitle || exp.position || getPositionTitle(exp);
    const company = exp.companyName || exp.company || getCompanyName(exp);
    const location = exp.companyLocation || exp.location || getCompanyLocation(exp);
    const isLast = index === contentAnalysis.experiences.length - 1;
    const achievements = exp.achievements || [];
    const dateRange = formatExperienceDate(exp);
    
    return (
      <div key={index} style={{
        ...styles.experienceItem,
        ...(isLast ? styles.experienceItemLastChild : {})
      }}>
        {/* Position and Date on same line */}
        <div style={styles.expTitleRow}>
          {position && (
            <h4 style={{...styles.expPosition, ...styles.textWrapFix}}>
              {position}
            </h4>
          )}
          
          {dateRange && (
            <div style={{...styles.expDates, ...styles.textWrapFix}}>
              {dateRange}
            </div>
          )}
        </div>
        
        {/* Company and location inline - NO DOT between them */}
        {(company || location) && (
          <div style={styles.companyLocationLine}>
            {company && (
              <div style={{...styles.expCompany, ...styles.textWrapFix}}>
                {company}
              </div>
            )}
            
            {location && (
              <div style={{...styles.expLocation, ...styles.textWrapFix}}>
                <span style={styles.locationIcon}>📍</span> {location}
              </div>
            )}
          </div>
        )}
        
        {/* ACHIEVEMENTS */}
        {achievements.length > 0 && (
          <ul style={styles.achievementsList}>
            {achievements.slice(0, 4).map((achievement, idx) => (
              <li key={idx} style={{...styles.achievementItem, ...styles.textWrapFix}}>
                {safeString(achievement)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }, [safeString, formatExperienceDate, getCompanyName, getPositionTitle, getCompanyLocation, contentAnalysis.experiences.length, styles]);

  // ===== EDUCATION RENDERER =====
  const renderEducationItem = useCallback((edu, index) => {
    const degree = safeString(edu.degree || edu.course || '');
    const institution = safeString(edu.institution || edu.school || edu.college || '');
    const location = safeString(edu.location || edu.city || '');
    const isLast = index === contentAnalysis.education.length - 1;
    
    const formattedDate = formatEducationDate(edu);
    const gpaDisplay = getGPADisplay(edu);
    
    return (
      <div key={index} style={{
        ...styles.educationItem,
        ...(isLast ? styles.educationItemLastChild : {})
      }}>
        {/* Degree and Date on same line */}
        <div style={styles.educationHeader}>
          {degree && (
            <h4 style={{...styles.eduDegree, ...styles.textWrapFix}}>{degree}</h4>
          )}
          
          {formattedDate && (
            <div style={{...styles.educationDates, ...styles.textWrapFix}}>
              {formattedDate}
            </div>
          )}
        </div>
        
        {/* Institution and location inline - NO DOT between them */}
        {(institution || location) && (
          <div style={styles.institutionLocationRow}>
            {institution && (
              <div style={{...styles.eduInstitution, ...styles.textWrapFix}}>{institution}</div>
            )}
            
            {location && (
              <div style={{...styles.eduLocation, ...styles.textWrapFix}}>
                <span style={styles.locationIcon}>📍</span> {location}
              </div>
            )}
          </div>
        )}
        
        {/* GPA displayed separately if needed */}
        {gpaDisplay && (
          <div style={styles.locationGpaRow}>
            <div style={{...styles.gpaText, ...styles.textWrapFix}}>
              {gpaDisplay}
            </div>
          </div>
        )}
      </div>
    );
  }, [safeString, formatEducationDate, getGPADisplay, contentAnalysis.education.length, styles]);

  // ===== PROJECT RENDERER =====
  const renderProjectItem = useCallback((project, index) => {
    const projectName = getItemName.project(project);
    const link = safeString(project.link || project.url || project.github || '');
    const role = safeString(project.role || project.position || '');
    const isLast = index === contentAnalysis.projects.length - 1;
    const projectDate = project.date ? formatDate(project.date) : '';
    
    let displayUrl = '';
    if (link) {
      if (!link.startsWith('http://') && !link.startsWith('https://')) {
        displayUrl = `https://${link}`;
      } else {
        displayUrl = link;
      }
    }
    
    return (
      <div key={index} style={{
        ...styles.projectItem,
        ...(isLast ? styles.projectItemLastChild : {})
      }}>
        <div style={styles.projectHeader}>
          <div style={styles.projectNameSection}>
            {link ? (
              <a 
                href={displayUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{...styles.projectName, ...styles.projectLink, ...styles.textWrapFix}}
              >
                {projectName}
              </a>
            ) : (
              <h4 style={{...styles.projectName, ...styles.textWrapFix}}>{projectName}</h4>
            )}
          </div>
          {projectDate && (
            <div style={styles.projectDate}>
              {projectDate}
            </div>
          )}
        </div>
        
        {role && (
          <div style={{...styles.projectRole, ...styles.textWrapFix}}>
            <strong>Role:</strong> {role}
          </div>
        )}
        
        {displayUrl && (
          <div style={styles.projectLinkDisplay}>
            <a 
              href={displayUrl}
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.projectUrl}
              onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              {displayUrl}
            </a>
          </div>
        )}
      </div>
    );
  }, [getItemName, safeString, formatDate, contentAnalysis.projects.length, styles]);

  // ===== CERTIFICATION RENDERER =====
  const renderCertificationItem = useCallback((cert, index) => {
    const certDate = formatCertificationDate(cert);
    const isLast = index === contentAnalysis.certifications.length - 1;
    
    return (
      <div key={index} style={{
        ...styles.certificationItem,
        ...(isLast ? styles.certificationItemLastChild : {})
      }}>
        <div style={{...styles.certName, ...styles.textWrapFix}}>
          {getItemName.certification(cert)}
        </div>
        
        {cert.issuer && (
          <div style={{...styles.certIssuer, ...styles.textWrapFix}}>
            {safeString(cert.issuer)}
          </div>
        )}
        
        {certDate && (
          <div style={{...styles.certDate, ...styles.textWrapFix}}>
            {certDate}
          </div>
        )}
      </div>
    );
  }, [getItemName, safeString, formatCertificationDate, contentAnalysis.certifications.length, styles]);

  // ===== AWARD RENDERER =====
  const renderAwardItem = useCallback((award, index) => {
    const isLast = index === contentAnalysis.awards.length - 1;
    
    let awardDate = '';
    if (award.date) {
      awardDate = formatDate(award.date);
    } else if (award.year) {
      awardDate = award.year;
    }
    
    return (
      <div key={index} style={{
        ...styles.awardItem,
        ...(isLast ? styles.awardItemLastChild : {})
      }}>
        <div style={{...styles.awardName, ...styles.textWrapFix}}>
          {getItemName.award(award)}
        </div>
        
        {award.issuer && (
          <div style={{...styles.awardIssuer, ...styles.textWrapFix}}>
            {safeString(award.issuer)}
          </div>
        )}
        
        {awardDate && (
          <div style={{...styles.awardDate, ...styles.textWrapFix}}>
            {awardDate}
          </div>
        )}
      </div>
    );
  }, [getItemName, safeString, formatDate, contentAnalysis.awards.length, styles]);

  // ===== MAIN RENDER =====
  return (
    <div ref={templateRef} style={styles.root} className="template11-root">
      <header style={styles.header}>
        <div>
          <h1 style={{...styles.name, ...styles.textWrapFix}}>{personalInfo.fullName || 'Your Name'}</h1>
        </div>

        <div style={styles.contact}>
          {contactInfo.map((contact, index) => (
            contact.value && (
              <div key={index} style={{...styles.contactItem, ...styles.textWrapFix}}>
                {contact.icon} {contact.value}
              </div>
            )
          ))}
        </div>
      </header>

      <div style={styles.content}>
        <div>
          {/* Professional Summary */}
          {contentAnalysis.sections.summary && (
            <section style={{...styles.section, ...styles.summarySection}}>
              <h3 style={{...styles.sectionTitle, ...styles.textWrapFix}}>Professional Summary</h3>
              <p style={{...styles.summary, ...styles.textWrapFix}}>{contentAnalysis.limitedSummary}</p>
            </section>
          )}

          {/* Education */}
          {contentAnalysis.sections.education > 0 && (
            <section style={{...styles.section, ...styles.educationSection}}>
              <h3 style={{...styles.sectionTitle, ...styles.textWrapFix}}>Education</h3>
              <div>
                {contentAnalysis.education.map(renderEducationItem)}
              </div>
            </section>
          )}

          {/* Work Experience */}
          {contentAnalysis.sections.experience > 0 && (
            <section style={{...styles.section, ...styles.experienceSection}}>
              <h3 style={{...styles.sectionTitle, ...styles.textWrapFix}}>Professional Experience</h3>
              <div>
                {contentAnalysis.experiences.map(renderExperienceItem)}
              </div>
            </section>
          )}
        </div>

        <div style={styles.sidebar}>
          {/* Skills */}
          {contentAnalysis.sections.skills > 0 && (
            <section style={{...styles.sidebarSection}}>
              <h3 style={{...styles.sidebarTitle, ...styles.textWrapFix}}>Skills</h3>
              <div style={styles.skillsGrid}>
                {contentAnalysis.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} style={{...styles.skillItem, ...styles.textWrapFix}}>
                    {getItemName.skill(skill)}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {contentAnalysis.sections.projects > 0 && (
            <section style={{...styles.sidebarSection}}>
              <h3 style={{...styles.sidebarTitle, ...styles.textWrapFix}}>Key Projects</h3>
              <div style={styles.projectsList}>
                {contentAnalysis.projects.map(renderProjectItem)}
              </div>
            </section>
          )}

          {/* Certifications */}
          {contentAnalysis.sections.certifications > 0 && (
            <section style={{...styles.sidebarSection}}>
              <h3 style={{...styles.sidebarTitle, ...styles.textWrapFix}}>Certifications</h3>
              <div style={styles.certificationsList}>
                {contentAnalysis.certifications.map(renderCertificationItem)}
              </div>
            </section>
          )}

          {/* Awards */}
          {contentAnalysis.sections.awards > 0 && (
            <section style={{...styles.sidebarSection}}>
              <h3 style={{...styles.sidebarTitle, ...styles.textWrapFix}}>Awards & Recognition</h3>
              <div style={styles.awardsList}>
                {contentAnalysis.awards.map(renderAwardItem)}
              </div>
            </section>
          )}
        </div>
      </div>

      <style>{`
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .template11-root {
            margin: 0 !important;
            padding: 0 !important;
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 210mm !important;
            min-height: 297mm !important;
            box-shadow: none !important;
            border: none !important;
          }
          .template11-root > *:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          .export-mode {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
          }
          @page {
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

LockedTemplate11.displayName = 'LockedTemplate11';

export default LockedTemplate11;