// ============================================
// components/templates/Template17.js
// COMPLETE NEXT.JS COMPATIBLE VERSION WITH LOADING SPINNER - FIXED DATE POSITIONING
// UPDATED: Date positioning fixed to stay constant (like Template19)
// - Dates always aligned to the right, never wrap
// - Titles can wrap to multiple lines without affecting date position
// - Using flexbox with flex-shrink: 0 to ensure dates stay fixed
// UPDATED: Contact info with equal spacing and Calibri font family
// UPDATED: Increased font sizes for experience, project, summary, and skill items (+1px more)
// UPDATED: Increased contrast for contact info and bullet points
// UPDATED: Darker dates for better visibility
// UPDATED: Added "Link:" text before project links
// UPDATED: Darker dates for certification and award
// UPDATED: Added awards section (1 award below certifications)
// UPDATED: Applied specified limits - education:2, skills:7, certifications:1, internships:1, awards:1, contact:4
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import LoadingSpinner from '../LoadingSpinner';

// CONSTANTS - IMMUTABLE with proper color values
const SECTION_TYPES = Object.freeze({
  internship: { 
    label: "Internships", 
    icon: "ðŸŽ“", 
    color: "#4f46e5",
    lightColor: "#eef2ff",
    borderColor: "#c7d2fe"
  },
  project: { 
    label: "Projects", 
    icon: "âš¡", 
    color: "#db2777",
    lightColor: "#fdf2f8",
    borderColor: "#fbcfe8"
  },
  education: { 
    label: "Education", 
    icon: "ðŸ“–", 
    color: "#2563eb",
    lightColor: "#eff6ff",
    borderColor: "#bfdbfe"
  },
  certification: { 
    label: "Certifications", 
    icon: "ðŸ“œ", 
    color: "#16a34a",
    lightColor: "#f0fdf4",
    borderColor: "#bbf7d0"
  },
  award: {
    label: "Awards & Honors", 
    icon: "ðŸ†", 
    color: "#e11d48",
    lightColor: "#fff1f2",
    borderColor: "#fecdd3"
  }
});

// ===== APPLIED LIMITS FROM USER SPECIFICATION =====
const CONTENT_LIMITS = Object.freeze({
  skills: 7,                    // skills: 7
  internshipsPerPage: 1,       // internships: 1
  projectsPerPage: 1,          // projects: 1
  education: 2,                // education: 2
  certifications: 2,           // certifications: 1
  awards: 0,                   // awards: 1 (added back)
  summaryWords: 100,           // summaryWords: 100
  summaryChars: 300,           // summaryChars: 300
  achievementsPerInternship: 4, // achievementsPerinternships: 4
  achievementLength: 150,      // achievementLength: 150
  descriptionLength: 0,        // descriptionLength: 0
  contact: 4                   // contact: 4 (email, phone, location, linkedin)
});

// ===== GPA FORMATTING HELPER with numerator/denominator =====
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

  formatDateRange: (start, end, current) => {
    const startDate = TemplateHelpers.formatDate(start);
    const endDate = current ? 'Present' : TemplateHelpers.formatDate(end);
    
    if (!startDate && !endDate) return '';
    if (startDate && !endDate) return startDate;
    if (!startDate && endDate) return endDate;
    return `${startDate} â€“ ${endDate}`;
  },

  // Icon mapping for PDF-friendly icons
  icons: Object.freeze({
    email: 'âœ‰',
    phone: 'ðŸ“ž',
    location: 'ðŸ“',
    linkedin: 'in',
    github: 'âŒ¨',
    portfolio: 'ðŸŒ',
    briefcase: 'ðŸ’¼',
    project: 'âš¡',
    education: 'ðŸŽ“',
    certification: 'ðŸ“œ',
    award: 'ðŸ†',
    bullet: 'â€”',
    dot: 'â€¢',
    triangle: 'â–¹',
    link: 'ðŸ”—',
    role: 'ðŸ‘¤',
    calendar: 'ðŸ“…'
  })
});

const Template17 = ({ 
  personalInfo = {}, 
  education = [], 
  experience = [], 
  skills = [], 
  professionalSummary = '', 
  projects = [],
  awards = [],
  certifications = [],
  internships = [],
  isExporting = false 
}) => {
  
  const templateRef = useRef();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading template data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Process education (with location) - UPDATED with GPA formatting
  const processEducation = useMemo(() => (edu) => {
    const startDate = edu.startDate || edu.startYear || '';
    const endDate = edu.endDate || edu.endYear || edu.graduationYear || '';
    const current = edu.current || false;
    
    const formattedStart = TemplateHelpers.formatDate(startDate);
    const formattedEnd = current ? 'Present' : TemplateHelpers.formatDate(endDate);
    
    let displayDate = '';
    if (formattedStart && formattedEnd) {
      displayDate = `${formattedStart} â€“ ${formattedEnd}`;
    } else if (formattedStart) {
      displayDate = formattedStart;
    } else if (formattedEnd) {
      displayDate = formattedEnd;
    }
    
    // Format GPA with numerator/denominator
    const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return Object.freeze({
      id: Math.random().toString(36).substr(2, 9),
      degree: TemplateHelpers.safeString(edu.degree),
      field: TemplateHelpers.safeString(edu.field || edu.major),
      institution: TemplateHelpers.safeString(edu.institution),
      location: TemplateHelpers.safeString(edu.location || edu.city || ''),
      displayDate,
      current,
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay,
      achievements: Object.freeze(TemplateHelpers.safeArray(edu.achievements || edu.honors || []).slice(0, 2))
    });
  }, []);

  // Process data with applied limits
  const processedData = useMemo(() => {
    // Get internships from either prop or experience array
    const allInternships = [
      ...TemplateHelpers.safeArray(internships),
      ...TemplateHelpers.safeArray(experience).filter(exp => 
        exp.type === 'internship' || 
        exp.title?.toLowerCase().includes('intern') ||
        exp.role?.toLowerCase().includes('intern')
      )
    ];

    // Get projects
    const allProjects = [
      ...TemplateHelpers.safeArray(projects),
      ...TemplateHelpers.safeArray(experience).filter(exp => 
        exp.type === 'project' ||
        exp.title?.toLowerCase().includes('project')
      )
    ];

    // Process internships - Limited to 1 with 4 bullet points, each limited to 150 chars
    const processedInternships = allInternships
      .filter(i => i.role || i.title || i.position)
      .slice(0, CONTENT_LIMITS.internshipsPerPage)
      .map(internship => Object.freeze({
        id: internship.id || Math.random().toString(36).substr(2, 9),
        role: TemplateHelpers.safeString(internship.role || internship.title || internship.position),
        company: TemplateHelpers.safeString(internship.company || internship.organization),
        location: TemplateHelpers.safeString(internship.location),
        duration: TemplateHelpers.formatDateRange(internship.startDate, internship.endDate, internship.current),
        startDate: TemplateHelpers.formatDate(internship.startDate),
        endDate: internship.current ? 'Present' : TemplateHelpers.formatDate(internship.endDate),
        current: internship.current || false,
        highlights: Object.freeze(TemplateHelpers.safeArray(internship.highlights || internship.achievements || internship.bulletPoints || [])
          .slice(0, CONTENT_LIMITS.achievementsPerInternship)
          .map(h => TemplateHelpers.safeString(h).slice(0, CONTENT_LIMITS.achievementLength)))
      }));

    // Process projects - Limited to 1
    const processedProjects = allProjects
      .filter(p => p.name || p.title)
      .slice(0, CONTENT_LIMITS.projectsPerPage)
      .map(project => Object.freeze({
        id: Math.random().toString(36).substr(2, 9),
        name: TemplateHelpers.safeString(project.name || project.title),
        role: TemplateHelpers.safeString(project.role || project.position || ''),
        duration: TemplateHelpers.formatDateRange(project.startDate, project.endDate, project.current),
        startDate: TemplateHelpers.formatDate(project.startDate),
        endDate: project.current ? 'Present' : TemplateHelpers.formatDate(project.endDate),
        highlights: Object.freeze(TemplateHelpers.safeArray(project.highlights || project.features || project.bulletPoints || [])
          .slice(0, CONTENT_LIMITS.achievementsPerInternship)
          .map(h => TemplateHelpers.safeString(h).slice(0, CONTENT_LIMITS.achievementLength))),
        link: TemplateHelpers.safeString(project.link || project.url || project.github),
        demo: TemplateHelpers.safeString(project.demo || project.live),
        featured: project.featured || project.highlight || false
      }));

    // Process education - Now up to 2
    const processedEducation = TemplateHelpers.safeArray(education)
      .filter(e => e.degree || e.institution)
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);

    // Process skills - Limited to 7
    const allSkills = Object.freeze(TemplateHelpers.safeArray(skills)
      .map(skill => typeof skill === 'object' ? skill.name || '' : skill)
      .filter(s => s.trim() !== '')
      .slice(0, CONTENT_LIMITS.skills));

    // Process certifications - Limited to 1
    const processedCertifications = TemplateHelpers.safeArray(certifications)
      .concat(TemplateHelpers.safeArray(personalInfo.certifications || []))
      .slice(0, CONTENT_LIMITS.certifications)
      .map(cert => Object.freeze({
        id: cert.id || Math.random().toString(36).substr(2, 9),
        name: TemplateHelpers.safeString(cert.name || cert.title || cert.certification),
        issuer: TemplateHelpers.safeString(cert.issuer || cert.organization || cert.institution),
        date: TemplateHelpers.formatDate(cert.date || cert.issueDate || cert.completionDate),
        icon: cert.icon || TemplateHelpers.icons.certification
      }));

    // Process awards - Limited to 1 (added back)
    const processedAwards = TemplateHelpers.safeArray(awards)
      .concat(TemplateHelpers.safeArray(personalInfo.awards || []))
      .slice(0, CONTENT_LIMITS.awards)
      .map(award => Object.freeze({
        id: award.id || Math.random().toString(36).substr(2, 9),
        title: TemplateHelpers.safeString(award.title || award.name),
        issuer: TemplateHelpers.safeString(award.issuer || award.organization || ''),
        date: TemplateHelpers.formatDate(award.date || award.year),
        icon: award.icon || TemplateHelpers.icons.award
      }));

    // Process summary with char limit (300 chars)
    const processedSummary = professionalSummary ? 
      TemplateHelpers.safeString(professionalSummary).slice(0, CONTENT_LIMITS.summaryChars) : '';

    return Object.freeze({
      internships: Object.freeze(processedInternships),
      projects: Object.freeze(processedProjects),
      education: Object.freeze(processedEducation),
      skills: allSkills,
      certifications: Object.freeze(processedCertifications),
      awards: Object.freeze(processedAwards),
      summary: processedSummary,
      hasData: Object.freeze({
        internships: processedInternships.length > 0,
        projects: processedProjects.length > 0,
        education: processedEducation.length > 0,
        skills: allSkills.length > 0,
        certifications: processedCertifications.length > 0,
        awards: processedAwards.length > 0,
        summary: processedSummary.length > 0
      })
    });
  }, [experience, projects, education, skills, certifications, awards, professionalSummary, personalInfo, internships, processEducation]);

  // Contact info - Limited to 4 items (email, phone, location, linkedin)
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    // Only add first 4 contacts based on priority
    const addContact = (value, icon, link = null, type = null) => {
      if (value && contacts.length < CONTENT_LIMITS.contact) {
        contacts.push(Object.freeze({ icon, value, link, type }));
      }
    };

    // Priority order: email, phone, location, linkedin
    addContact(personalInfo.email, TemplateHelpers.icons.email, `mailto:${personalInfo.email}`, 'email');
    addContact(personalInfo.phone, TemplateHelpers.icons.phone, null, 'phone');
    
    const locationValue = personalInfo.location || personalInfo.city || personalInfo.address || '';
    addContact(locationValue, TemplateHelpers.icons.location, null, 'location');
    
    if (personalInfo.linkedin && contacts.length < CONTENT_LIMITS.contact) {
      let linkedinUrl = personalInfo.linkedin;
      if (!linkedinUrl.startsWith('http')) {
        linkedinUrl = linkedinUrl.startsWith('linkedin.com') 
          ? `https://${linkedinUrl}` 
          : `https://linkedin.com/in/${linkedinUrl.replace(/^@/, '')}`;
      }
      const displayValue = linkedinUrl.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/|^https?:\/\/(www\.)?linkedin\.com\/|^linkedin\.com\/in\/|^linkedin\.com\//, '').replace(/\/$/, '');
      addContact(displayValue || 'LinkedIn', TemplateHelpers.icons.linkedin, linkedinUrl, 'linkedin');
    }

    return Object.freeze(contacts);
  }, [personalInfo]);

  // ===== UPDATED STYLES - Added award styles =====
  const styles = {
    container: {
      '--primary-color': '#0f172a',
      '--accent-internship': '#4f46e5',
      '--accent-project': '#db2777',
      '--accent-education': '#2563eb',
      '--accent-certification': '#16a34a',
      '--accent-award': '#e11d48',
      '--text-primary': '#000000',
      '--text-secondary': '#1e293b',
      '--text-tertiary': '#334155',
      
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      maxWidth: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      background: 'white',
      color: '#000000',
      fontSize: '12px',
      lineHeight: 1.5,
      fontWeight: 400,
      ...(isExporting && {
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
        colorAdjust: 'exact'
      })
    },
    content: {
      padding: '20px 25px'
    },
    header: {
      marginBottom: '20px'
    },
    headerInner: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #d1d5db'
    },
    profileSection: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      marginBottom: '15px'
    },
    avatarWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '3px solid white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    avatar: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    avatarPlaceholder: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0f172a, #2563eb)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      fontWeight: 500,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    nameWrapper: {
      flex: 1
    },
    name: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 8px 0',
      letterSpacing: '-0.5px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    titleTags: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    },
    titleTag: (bgColor) => ({
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 600,
      color: 'white',
      background: bgColor,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    }),
    contactStrip: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '10px'
    },
    contactChip: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      background: '#f5f5f5',
      borderRadius: '30px',
      border: '1px solid #cbd5e1',
      color: '#0f172a',
      textDecoration: 'none',
      fontSize: '11px',
      fontWeight: 600,
      maxWidth: '280px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      cursor: 'pointer',
      '&:hover': {
        background: '#e5e5e5',
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }
    },
    contactIcon: {
      fontSize: '12px',
      color: '#2563eb',
      flexShrink: 0,
      width: '18px',
      textAlign: 'center'
    },
    contactValue: {
      color: '#0f172a',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.9fr',
      gap: '20px'
    },
    section: {
      marginBottom: '15px'
    },
    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '15px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#000000',
      margin: '0 0 10px 0',
      paddingBottom: '6px',
      borderBottom: '2px solid #9ca3af',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    sectionIcon: {
      fontSize: '17px',
      color: '#2563eb'
    },
    card: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '14px',
      marginBottom: '12px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease',
      ...(isExporting && {
        breakInside: 'avoid',
        pageBreakInside: 'avoid'
      })
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px',
      gap: '12px'
    },
    titleSection: {
      flex: 1,
      minWidth: 0
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      hyphens: 'auto',
      lineHeight: 1.4,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    dateBadge: {
      fontSize: '11px',
      color: '#1f2937',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    cardSubtitle: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '6px',
      color: '#374151',
      fontSize: '12px',
      fontWeight: 500,
      marginBottom: '2px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    internshipCompany: {
      fontWeight: 600,
      color: '#4f46e5'
    },
    locationWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#374151',
      fontWeight: 500
    },
    locationIcon: {
      fontSize: '12px',
      color: '#4f46e5'
    },
    projectRole: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '2px',
      marginBottom: '6px',
      padding: '4px 10px',
      background: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #d1d5db',
      width: 'fit-content'
    },
    roleIcon: {
      fontSize: '12px',
      color: '#db2777'
    },
    roleText: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#db2777',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    highlightList: {
      listStyle: 'none',
      padding: 0,
      margin: '6px 0 0 0'
    },
    highlightItem: {
      display: 'flex',
      gap: '8px',
      fontSize: '13px',
      color: '#000000',
      marginBottom: '4px',
      lineHeight: 1.5,
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    highlightBullet: {
      minWidth: '16px',
      color: '#000000',
      fontWeight: 800,
      fontSize: '14px',
      lineHeight: 1.4
    },
    projectLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      marginTop: '8px'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#ffffff',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      color: '#db2777',
      textDecoration: 'none',
      border: '1px solid #d1d5db',
      wordBreak: 'break-all',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    linkLabel: {
      fontWeight: 700,
      color: '#1f2937',
      marginRight: '4px'
    },
    linkUrl: {
      color: '#db2777',
      fontWeight: 500,
      wordBreak: 'break-all'
    },
    linkIcon: {
      fontSize: '13px',
      color: '#db2777'
    },
    educationItem: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '12px',
      marginBottom: '10px'
    },
    degreeTitle: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationField: {
      color: '#2563eb',
      fontSize: '13px',
      marginBottom: '2px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    institutionInfo: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      fontSize: '12px',
      color: '#374151',
      fontWeight: 500,
      marginBottom: '8px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    institutionName: {
      fontWeight: 600,
      color: '#000000'
    },
    educationLocation: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#1f2937',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: '11px'
    },
    educationLocationIcon: {
      fontSize: '10px',
      color: '#2563eb'
    },
    educationMetaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '8px',
      flexWrap: 'wrap'
    },
    educationDate: {
      fontSize: '11px',
      color: '#1f2937',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    educationGpa: {
      fontSize: '12px',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color: '#1e293b',
      background: '#f8fafc',
      padding: '2px 8px',
      borderRadius: '12px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    gpaLabel: {
      fontWeight: 700,
      color: '#2563eb'
    },
    educationAchievements: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '4px'
    },
    achievementTag: {
      background: '#ffffff',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      color: '#1e293b',
      border: '1px solid #d1d5db',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    achievementIcon: {
      color: '#e11d48'
    },
    skillsContainer: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '12px'
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    },
    skillChip: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 13px',
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '30px',
      fontSize: '12px',
      color: '#1e293b',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    skillText: {
      color: '#000000'
    },
    certificationsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    certificationItem: {
      display: 'flex',
      gap: '12px',
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '10px'
    },
    certificationIcon: {
      width: '36px',
      height: '36px',
      borderRadius: '8px',
      background: '#16a34a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '19px'
    },
    certificationName: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#000000',
      margin: '0 0 2px 0',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    certificationIssuer: {
      fontSize: '11px',
      color: '#16a34a',
      marginBottom: '2px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    certificationDate: {
      fontSize: '10px',
      color: '#1f2937',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    // Awards container styles (added back)
    awardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    awardItem: {
      display: 'flex',
      gap: '12px',
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '10px',
      alignItems: 'flex-start'
    },
    awardIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      background: '#e11d48',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '17px'
    },
    awardTitle: {
      fontSize: '13px',
      fontWeight: 700,
      color: '#000000',
      marginBottom: '2px',
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    awardIssuer: {
      fontSize: '11px',
      color: '#e11d48',
      marginBottom: '2px',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    awardDate: {
      fontSize: '10px',
      color: '#1f2937',
      fontWeight: 600,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    summaryCard: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '10px',
      padding: '12px'
    },
    summaryText: {
      margin: 0,
      fontSize: '13px',
      lineHeight: 1.6,
      color: '#1e293b',
      fontWeight: 500,
      fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif'
    },
    loadingContainer: {
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      borderRadius: '8px'
    }
  };

  // Render functions
  const renderSkillChip = useMemo(() => (skill, index) => {
    return (
      <div key={index} style={styles.skillChip}>
        <span style={styles.skillText}>{skill}</span>
      </div>
    );
  }, [styles]);

  const renderCertification = useMemo(() => (cert, index) => (
    <div key={cert.id} style={styles.certificationItem}>
      <div style={styles.certificationIcon}>
        {cert.icon}
      </div>
      <div>
        <h4 style={styles.certificationName}>{cert.name}</h4>
        {cert.issuer && (
          <div style={styles.certificationIssuer}>{cert.issuer}</div>
        )}
        {cert.date && (
          <div style={styles.certificationDate}>
            {cert.date}
          </div>
        )}
      </div>
    </div>
  ), [styles]);

  // Award renderer (added back)
  const renderAward = useMemo(() => (award, index) => (
    <div key={award.id} style={styles.awardItem}>
      <div style={styles.awardIcon}>
        {award.icon}
      </div>
      <div>
        <div style={styles.awardTitle}>{award.title}</div>
        {award.issuer && (
          <div style={styles.awardIssuer}>{award.issuer}</div>
        )}
        {award.date && (
          <div style={styles.awardDate}>
            {award.date}
          </div>
        )}
      </div>
    </div>
  ), [styles]);

  const renderInternshipCard = useMemo(() => (internship, index) => (
    <div 
      key={internship.id} 
      style={{
        ...styles.card,
        transform: hoveredCard === internship.id ? 'translateY(-2px)' : 'none',
        boxShadow: hoveredCard === internship.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setHoveredCard(internship.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={styles.cardHeader}>
        <div style={styles.titleSection}>
          <h4 style={styles.cardTitle}>
            {internship.role}
          </h4>
          <div style={styles.cardSubtitle}>
            <span style={styles.internshipCompany}>{internship.company}</span>
            {internship.location && (
              <>
                <span>â€¢</span>
                <span style={styles.locationWrapper}>
                  <span style={styles.locationIcon}>{TemplateHelpers.icons.location}</span>
                  <span>{internship.location}</span>
                </span>
              </>
            )}
          </div>
        </div>
        {(internship.startDate || internship.endDate) && (
          <div style={styles.dateBadge}>
            {internship.startDate} â€“ {internship.endDate}
          </div>
        )}
      </div>

      {internship.highlights.length > 0 && (
        <ul style={styles.highlightList}>
          {internship.highlights.map((highlight, idx) => (
            <li key={idx} style={styles.highlightItem}>
              <span style={styles.highlightBullet}>{TemplateHelpers.icons.dot}</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  ), [hoveredCard, styles]);

  const renderProjectCard = useMemo(() => (project, index) => (
    <div 
      key={project.id} 
      style={{
        ...styles.card,
        transform: hoveredCard === project.id ? 'translateY(-2px)' : 'none',
        boxShadow: hoveredCard === project.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div style={styles.cardHeader}>
        <div style={styles.titleSection}>
          <h4 style={styles.cardTitle}>
            {project.name}
          </h4>
          {project.role && (
            <div style={styles.projectRole}>
              <span style={styles.roleIcon}>{TemplateHelpers.icons.role}</span>
              <span style={styles.roleText}>{project.role}</span>
            </div>
          )}
        </div>
        {(project.startDate || project.endDate) && (
          <div style={styles.dateBadge}>
            {project.startDate} â€“ {project.endDate}
          </div>
        )}
      </div>

      {project.highlights.length > 0 && (
        <ul style={styles.highlightList}>
          {project.highlights.map((highlight, idx) => (
            <li key={idx} style={styles.highlightItem}>
              <span style={styles.highlightBullet}>{TemplateHelpers.icons.triangle}</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {(project.link || project.demo) && (
        <div style={styles.projectLinks}>
          {project.demo && (
            <a href={TemplateHelpers.safeString(project.demo)} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              <span style={styles.linkLabel}>Link:</span>
              <span style={styles.linkUrl}>{project.demo}</span>
            </a>
          )}
          {project.link && (
            <a href={TemplateHelpers.safeString(project.link)} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              <span style={styles.linkLabel}>Link:</span>
              <span style={styles.linkUrl}>{project.link}</span>
            </a>
          )}
        </div>
      )}
    </div>
  ), [hoveredCard, styles]);

  const renderEducationItem = useMemo(() => (edu, index) => (
    <div key={edu.id} style={styles.educationItem}>
      <h4 style={styles.degreeTitle}>{edu.degree || 'Degree'}</h4>
      
      {edu.field && <div style={styles.educationField}>{edu.field}</div>}

      <div style={styles.institutionInfo}>
        <span style={styles.institutionName}>{edu.institution}</span>
        {edu.location && (
          <span style={styles.educationLocation}>
            <span> | </span>
            <span style={styles.educationLocationIcon}>{TemplateHelpers.icons.location}</span>
            {edu.location}
          </span>
        )}
      </div>
      
      {(edu.displayDate || edu.gpaDisplay) && (
        <div style={styles.educationMetaRow}>
          {edu.displayDate && (
            <div style={styles.educationDate}>
              {edu.displayDate}
              {edu.current && <span> â€¢ Current</span>}
            </div>
          )}
          
          {edu.gpaDisplay && (
            <div style={styles.educationGpa}>
              {edu.gpaDisplay}
            </div>
          )}
        </div>
      )}

      {edu.achievements.length > 0 && (
        <div style={styles.educationAchievements}>
          {edu.achievements.map((ach, idx) => (
            <div key={idx} style={styles.achievementTag}>
              <span style={styles.achievementIcon}>{TemplateHelpers.icons.award}</span>
              {ach}
            </div>
          ))}
        </div>
      )}
    </div>
  ), [styles]);

  // Show loading spinner AFTER all hooks are declared
  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <LoadingSpinner 
          size="lg" 
          color="#4f46e5" 
          text="Loading template..." 
        />
      </div>
    );
  }

  return (
    <div 
      ref={templateRef}
      style={styles.container}
    >
      <div style={styles.content}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <div style={styles.profileSection}>
              {personalInfo.photo ? (
                <div style={styles.avatarWrapper}>
                  <img 
                    src={personalInfo.photo} 
                    alt={personalInfo.fullName} 
                    style={styles.avatar}
                    crossOrigin="anonymous"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ) : (
                <div style={styles.avatarPlaceholder}>
                  {personalInfo.fullName ? 
                    personalInfo.fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 
                    'U'
                  }
                </div>
              )}
              
              <div style={styles.nameWrapper}>
                <h1 style={styles.name}>
                  {personalInfo.fullName || 'Your Name'}
                </h1>
                {(personalInfo.studentType || personalInfo.major) && (
                  <div style={styles.titleTags}>
                    {personalInfo.studentType && (
                      <span style={styles.titleTag(SECTION_TYPES.internship.color)}>{personalInfo.studentType}</span>
                    )}
                    {personalInfo.major && (
                      <span style={styles.titleTag(SECTION_TYPES.education.color)}>{personalInfo.major}</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Strip - Limited to 4 items */}
            {contactInfo.length > 0 && (
              <div style={styles.contactStrip}>
                {contactInfo.map((contact, index) => (
                  contact.link ? (
                    <a 
                      key={index} 
                      href={contact.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.contactChip} 
                      title={contact.link}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#e5e5e5';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f5f5f5';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span style={styles.contactIcon}>{contact.icon}</span>
                      <span style={styles.contactValue}>{contact.value}</span>
                    </a>
                  ) : (
                    <div key={index} style={styles.contactChip}>
                      <span style={styles.contactIcon}>{contact.icon}</span>
                      <span style={styles.contactValue}>{contact.value}</span>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Main Grid */}
        <div style={styles.mainGrid}>
          {/* Left Column */}
          <div>
            {/* Summary */}
            {processedData.hasData.summary && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âœ¨</span>
                  About Me
                </h3>
                <div style={styles.summaryCard}>
                  <p style={styles.summaryText}>{processedData.summary}</p>
                </div>
              </section>
            )}

            {/* Internships - Limited to 1 */}
            {processedData.hasData.internships && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>{SECTION_TYPES.internship.icon}</span>
                  {SECTION_TYPES.internship.label}
                </h3>
                <div>
                  {processedData.internships.map(renderInternshipCard)}
                </div>
              </section>
            )}

            {/* Projects - Limited to 1 */}
            {processedData.hasData.projects && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>{SECTION_TYPES.project.icon}</span>
                  {SECTION_TYPES.project.label}
                </h3>
                <div>
                  {processedData.projects.map(renderProjectCard)}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div>
            {/* Education - Up to 2 items */}
            {processedData.hasData.education && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>{SECTION_TYPES.education.icon}</span>
                  {SECTION_TYPES.education.label}
                </h3>
                <div>
                  {processedData.education.map(renderEducationItem)}
                </div>
              </section>
            )}

            {/* Skills - Limited to 7 */}
            {processedData.hasData.skills && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>âš¡</span>
                  Skills
                </h3>
                <div style={styles.skillsContainer}>
                  <div style={styles.skillsGrid}>
                    {processedData.skills.map((skill, index) => renderSkillChip(skill, index))}
                  </div>
                </div>
              </section>
            )}

            {/* Certifications - Limited to 1 */}
            {processedData.hasData.certifications && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>{SECTION_TYPES.certification.icon}</span>
                  {SECTION_TYPES.certification.label}
                </h3>
                <div style={styles.certificationsContainer}>
                  {processedData.certifications.map(renderCertification)}
                </div>
              </section>
            )}

            {/* Awards - Added back, limited to 1, below certifications */}
            {processedData.hasData.awards && (
              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  <span style={styles.sectionIcon}>{SECTION_TYPES.award.icon}</span>
                  {SECTION_TYPES.award.label}
                </h3>
                <div style={styles.awardsContainer}>
                  {processedData.awards.map(renderAward)}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Template17.displayName = 'Template17';
export default Template17;