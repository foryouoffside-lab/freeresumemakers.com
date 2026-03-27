import Head from 'next/head';
// ============================================
// components/templates/Template2.js 
// ENHANCED: Name optimization like Template1
// UPDATED: Auto-reduces font size for long names
// UPDATED: LinkedIn icon changed to "in" in blue color
// UPDATED: LinkedIn shows username instead of full URL
// UPDATED: Improved contact info spacing and readability
// UPDATED: Project links show full URL instead of truncated display name
// ============================================

import React, { useRef, useMemo, useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner';

// EXPERIENCE TYPES - Fixed icons
const EXPERIENCE_TYPES = Object.freeze({
  job: { label: "Work Experience", icon: "💼", color: "#2563eb" },
  project: { label: "Project", icon: "⚡", color: "#db2777" },
  freelance: { label: "Freelance", icon: "💻", color: "#ea580c" },
  research: { label: "Research", icon: "🔬", color: "#16a34a" }
});

// CONTENT LIMITS - achievementsPerExperience set to 3
const CONTENT_LIMITS = Object.freeze({
  skills: 7,
  experiencesPerType: 1,
  education: 1,
  projects: 1,
  summaryWords: 150,
  achievementsPerExperience: 3,
  achievementLength: 140,
  descriptionLength: 0,
  certifications: 1
});

// FONT SIZE CONFIGURATION - Achievement points set to 14px
const FONT_CONFIG = Object.freeze({
  max: {
    body: 16,
    name: 54,
    sectionTitle: 20,
    cardTitle: 20,
    cardSubtitle: 18,
    smallText: 15,
    tinyText: 13,
    achievementText: 14,
    iconSize: 20,
    lineHeight: 1.6
  },
  base: {
    body: 14,
    name: 46,
    sectionTitle: 18,
    cardTitle: 18,
    cardSubtitle: 16,
    smallText: 13,
    tinyText: 12,
    achievementText: 14,
    iconSize: 17,
    lineHeight: 1.5
  },
  compact: {
    body: 12,
    name: 40,
    sectionTitle: 16,
    cardTitle: 16,
    cardSubtitle: 14,
    smallText: 11,
    tinyText: 10,
    achievementText: 14,
    iconSize: 14,
    lineHeight: 1.4
  },
  ultraCompact: {
    body: 11,
    name: 34,
    sectionTitle: 15,
    cardTitle: 15,
    cardSubtitle: 13,
    smallText: 10,
    tinyText: 9,
    achievementText: 14,
    iconSize: 13,
    lineHeight: 1.3
  }
});

// SPACING CONFIGURATION - Updated with better contact chip spacing
const SPACING_CONFIG = Object.freeze({
  spacious: {
    headerPadding: '40px 45px',
    headerMinHeight: 'auto',
    photoSize: '130px',
    avatarSize: '130px',
    avatarFontSize: '48px',
    contentGridGap: '35px',
    contentPadding: '35px 45px',
    sectionGap: '24px',
    sectionTitleMargin: '0 0 12px 0',
    sectionTitlePadding: '8px 16px',
    itemGap: '16px',
    cardPadding: '18px',
    summaryPadding: '18px',
    skillsPadding: '18px',
    skillChipPadding: '8px 14px',
    contactChipPadding: '10px 20px',
    educationDatePadding: '6px 14px',
    projectDatePadding: '6px 14px',
    experienceDatePadding: '6px 14px',
    techBubblePadding: '5px 12px',
    bottomFillerHeight: '30px',
    marginBetweenSections: '8px',
    bulletSpacing: '8px',
    contactGap: '14px'
  },
  default: {
    headerPadding: '30px 35px',
    headerMinHeight: 'auto',
    photoSize: '110px',
    avatarSize: '110px',
    avatarFontSize: '42px',
    contentGridGap: '25px',
    contentPadding: '25px 35px',
    sectionGap: '12px',
    sectionTitleMargin: '0 0 6px 0',
    sectionTitlePadding: '6px 12px',
    itemGap: '8px',
    cardPadding: '12px',
    summaryPadding: '12px',
    skillsPadding: '12px',
    skillChipPadding: '5px 10px',
    contactChipPadding: '8px 18px',
    educationDatePadding: '4px 10px',
    projectDatePadding: '4px 10px',
    experienceDatePadding: '4px 10px',
    techBubblePadding: '3px 8px',
    bottomFillerHeight: '20px',
    marginBetweenSections: '4px',
    bulletSpacing: '4px',
    contactGap: '12px'
  },
  compact: {
    headerPadding: '20px 25px',
    headerMinHeight: 'auto',
    photoSize: '90px',
    avatarSize: '90px',
    avatarFontSize: '34px',
    contentGridGap: '15px',
    contentPadding: '15px 25px',
    sectionGap: '8px',
    sectionTitleMargin: '0 0 4px 0',
    sectionTitlePadding: '4px 10px',
    itemGap: '6px',
    cardPadding: '10px',
    summaryPadding: '10px',
    skillsPadding: '10px',
    skillChipPadding: '4px 8px',
    contactChipPadding: '6px 14px',
    educationDatePadding: '3px 8px',
    projectDatePadding: '3px 8px',
    experienceDatePadding: '3px 8px',
    techBubblePadding: '2px 6px',
    bottomFillerHeight: '10px',
    marginBetweenSections: '2px',
    bulletSpacing: '2px',
    contactGap: '10px'
  },
  ultraCompact: {
    headerPadding: '15px 20px',
    headerMinHeight: 'auto',
    photoSize: '75px',
    avatarSize: '75px',
    avatarFontSize: '28px',
    contentGridGap: '10px',
    contentPadding: '10px 20px',
    sectionGap: '4px',
    sectionTitleMargin: '0 0 2px 0',
    sectionTitlePadding: '3px 8px',
    itemGap: '4px',
    cardPadding: '8px',
    summaryPadding: '8px',
    skillsPadding: '8px',
    skillChipPadding: '3px 6px',
    contactChipPadding: '5px 12px',
    educationDatePadding: '2px 6px',
    projectDatePadding: '2px 6px',
    experienceDatePadding: '2px 6px',
    techBubblePadding: '1px 4px',
    bottomFillerHeight: '5px',
    marginBetweenSections: '1px',
    bulletSpacing: '1px',
    contactGap: '8px'
  }
});

// ENHANCED COLOR CONSTANTS - Maximum contrast for PDF
const COLORS = Object.freeze({
  textPrimary: '#000000',
  textSecondary: '#000000',
  textTertiary: '#000000',
  background: '#ffffff',
  cardBackground: '#ffffff',
  skillBackground: '#f5f5f5',
  borderLight: '#cccccc',
  borderMedium: '#999999',
  primaryBlue: '#1d4ed8',
  primaryPurple: '#6b21a8',
  primaryPink: '#9d174d',
  primaryOrange: '#c2410c',
  primaryGreen: '#166534',
  gradientStart: '#0a0f1a',
  gradientMid: '#172032',
  gradientEnd: '#1d4ed8',
  black: '#000000',
  white: '#ffffff',
  darkGray: '#333333',
  lightGray: '#f0f0f0',
  linkedinBlue: '#0077b5'
});

// Helper functions with LinkedIn formatting (like Template17)
const TemplateHelpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
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

  formatEducationDate: (startDate, endDate, current) => {
    const start = TemplateHelpers.formatDate(startDate);
    const end = current ? 'Present' : TemplateHelpers.formatDate(endDate);
    
    if (!start && !end) return '';
    if (start && !end) return start;
    if (!start && end) return end;
    return `${start} – ${end}`;
  },

  formatFullUrl: (url) => {
    if (!url) return '';
    let cleanUrl = TemplateHelpers.safeString(url);
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      return `https://${cleanUrl}`;
    }
    return cleanUrl;
  },

  displayUrl: (url) => {
    if (!url) return '';
    let cleanUrl = TemplateHelpers.safeString(url);
    cleanUrl = cleanUrl.replace(/^https?:\/\//, '');
    cleanUrl = cleanUrl.replace(/^www\./, '');
    return cleanUrl;
  },

  // ===== LINK FORMATTING FUNCTIONS (like Template17) with blue "in" icon =====
  formatLinkedInLink: (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin);
    
    if (linkedinUrl.startsWith('http://') || linkedinUrl.startsWith('https://')) {
      return linkedinUrl;
    }
    
    if (linkedinUrl.startsWith('linkedin.com')) {
      return `https://${linkedinUrl}`;
    }
    
    return `https://linkedin.com/in/${linkedinUrl.replace(/^@/, '')}`;
  },

  formatLinkedInDisplay: (linkedin) => {
    if (!linkedin) return '';
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin);
    
    let displayValue = linkedinUrl
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '');
    
    if (displayValue.includes('linkedin.com/in/')) {
      displayValue = displayValue.replace(/linkedin\.com\/in\//, '');
    } else if (displayValue.includes('linkedin.com/')) {
      displayValue = displayValue.replace(/linkedin\.com\//, '');
    }
    
    displayValue = displayValue.replace(/\/$/, '');
    
    if (displayValue.includes('/')) {
      displayValue = displayValue.split('/').pop();
    }
    
    return displayValue || 'LinkedIn';
  },

  formatGitHubLink: (github) => {
    if (!github) return null;
    
    let githubUrl = TemplateHelpers.safeString(github);
    
    if (githubUrl.startsWith('http://') || githubUrl.startsWith('https://')) {
      return githubUrl;
    }
    
    if (githubUrl.startsWith('github.com')) {
      return `https://${githubUrl}`;
    }
    
    return `https://github.com/${githubUrl.replace(/^@/, '')}`;
  },

  formatGitHubDisplay: (github) => {
    if (!github) return '';
    
    let displayValue = TemplateHelpers.safeString(github)
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/^github\.com\//, '')
      .replace(/\/$/, '');
    
    return displayValue || 'GitHub';
  },

  formatPortfolioLink: (portfolio) => {
    if (!portfolio) return null;
    
    let portfolioUrl = TemplateHelpers.safeString(portfolio);
    
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
    
    return displayValue || 'Portfolio';
  },

  // Helper to get formatted display value for contact
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

  // Helper to get full link for contact
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

  // UPDATED: Icons with LinkedIn using "in" in blue - All icons fixed
  icons: Object.freeze({
    email: '✉️',
    phone: '📞',
    location: '📍',
    linkedin: 'in',
    github: '🐙',
    portfolio: '🌐',
    briefcase: '💼',
    education: '🎓',
    skills: '⚡',
    projects: '🚀',
    certificate: '📜',
    bullet: '•',
    triangle: '▹',
    gpa: '📊'
  }),

  // ===== NAME OPTIMIZATION FUNCTION (like Template1) =====
  calculateNameFontSize: (name) => {
    if (!name) return FONT_CONFIG.base.name;
    
    const nameLength = name.length;
    
    if (nameLength > 30) {
      return Math.max(28, FONT_CONFIG.base.name - 18);
    } else if (nameLength > 25) {
      return Math.max(32, FONT_CONFIG.base.name - 14);
    } else if (nameLength > 20) {
      return Math.max(36, FONT_CONFIG.base.name - 10);
    } else if (nameLength > 15) {
      return Math.max(40, FONT_CONFIG.base.name - 6);
    }
    
    return FONT_CONFIG.base.name;
  },

  formatGPA: (gpa, gpaScale) => {
    if (!gpa) return null;
    
    const gpaValue = TemplateHelpers.safeString(gpa);
    if (!gpaValue) return null;
    
    const scale = gpaScale || '4.0';
    const gpaNum = parseFloat(gpaValue);
    if (isNaN(gpaNum)) return null;
    
    switch(scale) {
      case '4.0':
        return `GPA: ${gpaNum.toFixed(2)}/4.0`;
      case '5.0':
        return `CGPA: ${gpaNum.toFixed(2)}/5.0`;
      case '10.0':
        return `CGPA: ${gpaNum.toFixed(2)}/10`;
      case '100':
        return `Percentage: ${gpaNum.toFixed(1)}%`;
      default:
        return `GPA: ${gpaNum.toFixed(2)}/${scale}`;
    }
  },

  getInitials: (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  },

  getItemName: Object.freeze({
    skill: (item) => typeof item === 'object' ? item.name || '' : TemplateHelpers.safeString(item)
  }),
  
  calculateContentDensity: (processedData) => {
    let score = 0;
    let itemCount = 0;
    
    if (processedData.hasData.summary) {
      score += 2;
      itemCount += 1;
    }
    if (processedData.hasData.experiences) {
      score += 3;
      itemCount += processedData.experiences.length;
    }
    if (processedData.hasData.projects) {
      score += 2;
      itemCount += processedData.projects.length;
    }
    if (processedData.hasData.education) {
      score += 2;
      itemCount += processedData.education.length;
    }
    if (processedData.hasData.skills) {
      score += 2;
      itemCount += processedData.skills.length;
    }
    if (processedData.hasData.certifications) {
      score += 2;
      itemCount += processedData.certifications.length;
    }
    
    if (processedData.summary) {
      score += Math.floor(processedData.summary.length / 100);
    }
    
    processedData.experiences.forEach(exp => {
      score += exp.bulletPoints.length;
      itemCount += exp.technologies.length;
    });
    
    processedData.projects.forEach(proj => {
      score += proj.achievements.length;
    });
    
    return { score, itemCount };
  },
  
  calculateOptimalConfigs: (contentHeight, targetHeight = 1123, densityScore, itemCount) => {
    const ratio = contentHeight / targetHeight;
    
    if (ratio < 1) {
      const expansionFactor = Math.min(1.4, 1 / ratio);
      
      if (ratio < 0.6) {
        return {
          spacing: SPACING_CONFIG.spacious,
          fonts: {
            ...FONT_CONFIG.max,
            body: Math.min(18, Math.round(FONT_CONFIG.max.body * expansionFactor)),
            name: Math.min(60, Math.round(FONT_CONFIG.max.name * expansionFactor * 0.9)),
            sectionTitle: Math.min(22, Math.round(FONT_CONFIG.max.sectionTitle * expansionFactor * 0.9)),
            achievementText: 14
          }
        };
      } else if (ratio < 0.8) {
        return {
          spacing: SPACING_CONFIG.default,
          fonts: {
            ...FONT_CONFIG.base,
            body: Math.min(16, Math.round(FONT_CONFIG.base.body * expansionFactor)),
            name: Math.min(52, Math.round(FONT_CONFIG.base.name * expansionFactor * 0.9)),
            sectionTitle: Math.min(20, Math.round(FONT_CONFIG.base.sectionTitle * expansionFactor * 0.9)),
            achievementText: 14
          }
        };
      } else {
        return {
          spacing: SPACING_CONFIG.default,
          fonts: {
            ...FONT_CONFIG.base,
            body: Math.min(15, Math.round(FONT_CONFIG.base.body * 1.1)),
            name: Math.min(50, Math.round(FONT_CONFIG.base.name * 1.05)),
            achievementText: 14
          }
        };
      }
    }
    
    if (ratio >= 1.1) {
      return {
        spacing: SPACING_CONFIG.ultraCompact,
        fonts: FONT_CONFIG.ultraCompact
      };
    } else if (ratio >= 1) {
      return {
        spacing: SPACING_CONFIG.compact,
        fonts: FONT_CONFIG.compact
      };
    }
    
    return {
      spacing: SPACING_CONFIG.default,
      fonts: FONT_CONFIG.base
    };
  }
});

// Template2 Component
const Template2 = ({ 
  personalInfo = {}, 
  experience = [], 
  education = [], 
  skills = [], 
  professionalSummary = '', 
  projects = [],
  certifications = [],
  isExporting = false,
  className = '',
  theme = {
    primaryColor: COLORS.primaryBlue,
    gradientStart: COLORS.gradientStart,
    gradientMid: COLORS.gradientMid,
    gradientEnd: COLORS.gradientEnd
  }
}) => {
  
  const templateRef = useRef();
  const [selectedExperienceType, setSelectedExperienceType] = useState("job");
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [contentHeight, setContentHeight] = useState(0);
  const [spacingConfig, setSpacingConfig] = useState(SPACING_CONFIG.default);
  const [fontConfig, setFontConfig] = useState(FONT_CONFIG.base);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = windowWidth < 768;

  // Process all data
  const processedData = useMemo(() => {
    const processedSkills = TemplateHelpers.safeArray(skills)
      .map(skill => {
        if (typeof skill === 'string') return skill;
        if (typeof skill === 'object') return skill.name || skill.skill || '';
        return '';
      })
      .filter(s => s.trim() !== '')
      .slice(0, CONTENT_LIMITS.skills);

    const processedEducation = TemplateHelpers.safeArray(education)
      .filter(edu => edu.degree || edu.institution || edu.school)
      .slice(0, CONTENT_LIMITS.education)
      .map(edu => ({
        id: `edu-${Math.random().toString(36).substr(2, 9)}`,
        degree: TemplateHelpers.safeString(edu.degree),
        field: TemplateHelpers.safeString(edu.fieldOfStudy || edu.field || edu.major || ''),
        institution: TemplateHelpers.safeString(edu.institution || edu.school || ''),
        location: TemplateHelpers.safeString(edu.location || edu.city || ''),
        displayDate: TemplateHelpers.formatEducationDate(
          edu.startDate || edu.startYear,
          edu.endDate || edu.endYear || edu.graduationYear,
          edu.current || false
        ),
        current: edu.current || false,
        gpa: edu.gpa || edu.grade || '',
        gpaScale: edu.gpaScale || '4.0',
        gpaDisplay: TemplateHelpers.formatGPA(edu.gpa || edu.grade, edu.gpaScale),
        achievements: TemplateHelpers.safeArray(edu.achievements || edu.honors || []).slice(0, 2)
      }));

    const processedProjects = TemplateHelpers.safeArray(projects)
      .filter(p => p.name || p.title)
      .slice(0, CONTENT_LIMITS.projects)
      .map(proj => ({
        id: `proj-${Math.random().toString(36).substr(2, 9)}`,
        name: TemplateHelpers.safeString(proj.name || proj.title),
        role: TemplateHelpers.safeString(proj.role || proj.position || ''),
        startDate: TemplateHelpers.formatDate(proj.startDate || proj.start),
        endDate: proj.ongoing || proj.current ? 'Present' : TemplateHelpers.formatDate(proj.endDate || proj.end),
        link: TemplateHelpers.safeString(proj.link || proj.url || proj.github || ''),
        displayLink: TemplateHelpers.safeString(proj.link || proj.url || proj.github || ''),
        fullLink: TemplateHelpers.formatFullUrl(proj.link || proj.url || proj.github || ''),
        achievements: TemplateHelpers.safeArray(proj.achievements || proj.highlights || []).slice(0, 3)
      }));

    const allExperiences = TemplateHelpers.safeArray(experience)
      .filter(exp => exp.title || exp.position || exp.role)
      .map(exp => ({
        ...exp,
        type: exp.type || 'job'
      }));

    const typeCounts = {};
    Object.keys(EXPERIENCE_TYPES).forEach(type => {
      typeCounts[type] = allExperiences.filter(exp => exp.type === type).length;
    });

    const experiencesByType = allExperiences
      .filter(exp => exp.type === selectedExperienceType)
      .slice(0, CONTENT_LIMITS.experiencesPerType)
      .map(exp => {
        let bulletPoints = [];
        
        if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
          bulletPoints = exp.bulletPoints;
        }
        else if (exp.achievements && Array.isArray(exp.achievements)) {
          bulletPoints = exp.achievements;
        }
        else if (exp.description && typeof exp.description === 'string') {
          bulletPoints = [exp.description];
        }
        
        return {
          id: `exp-${Math.random().toString(36).substr(2, 9)}`,
          title: TemplateHelpers.safeString(exp.title || exp.position || exp.role),
          organization: TemplateHelpers.safeString(exp.organization || exp.company || ''),
          location: TemplateHelpers.safeString(exp.location || ''),
          startDate: TemplateHelpers.formatDate(exp.startDate),
          endDate: exp.current ? 'Present' : TemplateHelpers.formatDate(exp.endDate),
          current: exp.current || false,
          bulletPoints: TemplateHelpers.safeArray(bulletPoints)
            .slice(0, CONTENT_LIMITS.achievementsPerExperience)
            .map(b => TemplateHelpers.safeString(b)),
          technologies: TemplateHelpers.safeArray(exp.technologies || exp.tech || exp.tools || []),
          type: exp.type || 'job'
        };
      });

    const processedCertifications = TemplateHelpers.safeArray(certifications)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(cert => ({
        id: `cert-${Math.random().toString(36).substr(2, 9)}`,
        name: TemplateHelpers.safeString(cert.name || cert.title || cert.certification),
        issuer: TemplateHelpers.safeString(cert.issuer || cert.organization || cert.institution),
        date: TemplateHelpers.formatDate(cert.date || cert.issueDate || cert.completionDate)
      }));

    const summary = TemplateHelpers.safeString(professionalSummary);
    
    const limitedSummary = summary ? 
      summary.split(' ').slice(0, CONTENT_LIMITS.summaryWords).join(' ') + 
      (summary.split(' ').length > CONTENT_LIMITS.summaryWords ? '...' : '')
      : '';

    const hasData = {
      skills: processedSkills.length > 0,
      education: processedEducation.length > 0,
      projects: processedProjects.length > 0,
      experiences: experiencesByType.length > 0,
      certifications: processedCertifications.length > 0,
      summary: limitedSummary.length > 0
    };

    return {
      skills: processedSkills,
      education: processedEducation,
      projects: processedProjects,
      experiences: experiencesByType,
      certifications: processedCertifications,
      summary: limitedSummary,
      typeCounts,
      hasData
    };
  }, [skills, education, projects, experience, certifications, selectedExperienceType, professionalSummary]);

  // Measure content height and adjust spacing and fonts
  useEffect(() => {
    if (!loading && templateRef.current) {
      const height = templateRef.current.scrollHeight;
      setContentHeight(height);
      
      const A4_HEIGHT = 1123;
      
      const { score: densityScore, itemCount } = TemplateHelpers.calculateContentDensity(processedData);
      
      const { spacing, fonts } = TemplateHelpers.calculateOptimalConfigs(height, A4_HEIGHT, densityScore, itemCount);
      
      setSpacingConfig(spacing);
      setFontConfig(fonts);
      
      setTimeout(() => {
        if (templateRef.current) {
          const newHeight = templateRef.current.scrollHeight;
          setContentHeight(newHeight);
          
          if (newHeight < A4_HEIGHT * 0.95) {
            const secondAdjustment = TemplateHelpers.calculateOptimalConfigs(newHeight, A4_HEIGHT, densityScore, itemCount);
            setSpacingConfig(secondAdjustment.spacing);
            setFontConfig(secondAdjustment.fonts);
          }
        }
      }, 100);
    }
  }, [loading, processedData]);

  // UPDATED: Contact info with formatted display values and blue LinkedIn icon
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const email = personalInfo.email || personalInfo.Email || '';
    const phone = personalInfo.phone || personalInfo.Phone || personalInfo.mobile || '';
    const location = personalInfo.location || personalInfo.city || personalInfo.address || personalInfo.Location || '';
    const linkedin = personalInfo.linkedin || personalInfo.LinkedIn || personalInfo.linkedIn || '';
    const github = personalInfo.github || personalInfo.GitHub || personalInfo.Github || '';
    const portfolio = personalInfo.portfolio || personalInfo.Portfolio || personalInfo.website || personalInfo.Website || '';
    
    if (email) {
      contacts.push({ 
        icon: TemplateHelpers.icons.email, 
        originalValue: email,
        displayValue: email,
        value: email,
        link: `mailto:${email}`,
        type: 'email'
      });
    }
    
    if (phone) {
      contacts.push({ 
        icon: TemplateHelpers.icons.phone, 
        originalValue: phone,
        displayValue: phone,
        value: phone,
        link: `tel:${phone.replace(/[^0-9+]/g, '')}`,
        type: 'phone'
      });
    }
    
    if (location) {
      contacts.push({ 
        icon: TemplateHelpers.icons.location, 
        originalValue: location,
        displayValue: location,
        value: location,
        type: 'location'
      });
    }
    
    if (linkedin) {
      const linkedinUrl = TemplateHelpers.formatLinkedInLink(linkedin);
      const displayLinkedIn = TemplateHelpers.formatLinkedInDisplay(linkedin);
      contacts.push({ 
        icon: TemplateHelpers.icons.linkedin, 
        originalValue: linkedin,
        displayValue: displayLinkedIn,
        value: displayLinkedIn,
        fullValue: linkedin,
        link: linkedinUrl,
        type: 'linkedin',
        iconColor: COLORS.linkedinBlue
      });
    }
    
    if (github) {
      const githubUrl = TemplateHelpers.formatGitHubLink(github);
      const displayGitHub = TemplateHelpers.formatGitHubDisplay(github);
      contacts.push({ 
        icon: TemplateHelpers.icons.github, 
        originalValue: github,
        displayValue: displayGitHub,
        value: displayGitHub,
        link: githubUrl,
        type: 'github'
      });
    }
    
    if (portfolio) {
      const portfolioUrl = TemplateHelpers.formatPortfolioLink(portfolio);
      const displayPortfolio = TemplateHelpers.formatPortfolioDisplay(portfolio);
      contacts.push({ 
        icon: TemplateHelpers.icons.portfolio, 
        originalValue: portfolio,
        displayValue: displayPortfolio,
        value: displayPortfolio,
        link: portfolioUrl,
        type: 'portfolio'
      });
    }
    
    return contacts;
  }, [personalInfo]);

  // UPDATED: Calculate optimized name font size based on name length
  const optimizedNameFontSize = useMemo(() => {
    const fullName = personalInfo.fullName || personalInfo.name || 'Your Name';
    return TemplateHelpers.calculateNameFontSize(fullName);
  }, [personalInfo.fullName, personalInfo.name]);

  // Get dynamic styles with ENHANCED PDF-optimized colors and updated font family
  const getDynamicStyles = useMemo(() => {
    const contactChipFontSize = Math.max(12, fontConfig.tinyText + 1);
    
    const baseStyles = {
      body: {
        fontSize: `${fontConfig.body}px`,
        lineHeight: fontConfig.lineHeight,
        color: COLORS.textPrimary,
        fontWeight: 400,
      },
      
      header: {
        background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientMid} 50%, ${theme.gradientEnd} 100%)`,
        color: COLORS.white,
        padding: spacingConfig.headerPadding,
        position: 'relative',
        overflow: 'hidden',
        minHeight: spacingConfig.headerMinHeight,
        flexShrink: 0,
      },
      
      photoContainer: {
        width: spacingConfig.photoSize,
        height: spacingConfig.photoSize,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid rgba(255, 255, 255, 0.5)',
        background: COLORS.white,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        flexShrink: 0
      },
      
      avatarPlaceholder: {
        width: spacingConfig.avatarSize,
        height: spacingConfig.avatarSize,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${COLORS.primaryBlue}, ${COLORS.primaryPurple})`,
        color: COLORS.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: spacingConfig.avatarFontSize,
        fontWeight: 700,
        border: '4px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        flexShrink: 0,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      contentGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: spacingConfig.contentGridGap,
        padding: spacingConfig.contentPadding,
        flex: 1,
        background: COLORS.background,
      },
      
      mainContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.sectionGap,
      },
      
      sidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.sectionGap,
      },
      
      sectionTitle: {
        fontSize: `${fontConfig.sectionTitle}px`,
        fontWeight: 700,
        color: COLORS.white,
        margin: spacingConfig.sectionTitleMargin,
        padding: spacingConfig.sectionTitlePadding,
        background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientMid})`,
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        letterSpacing: '0.5px',
        border: 'none',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      summaryCard: {
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.summaryPadding,
        borderLeft: `3px solid ${COLORS.primaryBlue}`,
        marginTop: '2px'
      },
      
      summaryText: {
        margin: 0,
        fontSize: `${fontConfig.achievementText}px`,
        lineHeight: fontConfig.lineHeight,
        color: COLORS.textPrimary,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        fontWeight: 400,
      },
      
      skillsContainer: {
        background: COLORS.background,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.skillsPadding,
        borderLeft: `3px solid ${COLORS.primaryBlue}`,
        marginTop: '2px'
      },
      
      skillsGrid: {
        display: 'grid',
        gap: spacingConfig.itemGap,
      },
      
      skillChip: {
        display: 'block',
        padding: spacingConfig.skillChipPadding,
        background: COLORS.skillBackground,
        border: `1px solid ${COLORS.borderMedium}`,
        borderRadius: '4px',
        fontSize: `${fontConfig.smallText}px`,
        color: COLORS.black,
        fontWeight: 600,
        cursor: 'default',
        textDecoration: 'none',
        borderLeft: `3px solid ${COLORS.borderMedium}`,
        transition: 'all 0.2s ease',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      },
      
      contactChip: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: spacingConfig.contactChipPadding,
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: COLORS.white,
        textDecoration: 'none',
        fontSize: `${contactChipFontSize}px`,
        fontWeight: 600,
        transition: 'all 0.2s ease',
        maxWidth: '280px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(2px)',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        lineHeight: 1.3,
      },
      
      educationList: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.itemGap,
        marginTop: '2px'
      },
      
      educationItem: {
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.cardPadding,
        borderLeft: `3px solid ${COLORS.primaryBlue}`,
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      },
      
      degreeTitle: {
        fontSize: `${fontConfig.cardTitle}px`,
        fontWeight: 700,
        color: COLORS.textPrimary,
        margin: '0 0 2px 0',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      educationField: {
        fontSize: `${fontConfig.cardSubtitle}px`,
        color: COLORS.primaryBlue,
        fontWeight: 700,
        marginBottom: '4px',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      educationMetaContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '6px',
        marginBottom: spacingConfig.marginBetweenSections,
        width: '100%',
        overflow: 'hidden',
      },
      
      educationDateBadge: {
        fontSize: `${Math.max(10, fontConfig.tinyText - 1)}px`,
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: spacingConfig.educationDatePadding,
        borderRadius: '30px',
        border: `1px solid ${COLORS.borderMedium}`,
        display: 'inline-block',
        fontWeight: 700,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        flex: '0 1 auto',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      },
      
      gpaBadge: {
        fontSize: `${Math.max(10, fontConfig.tinyText - 1)}px`,
        color: COLORS.primaryBlue,
        background: '#eef2ff',
        padding: spacingConfig.educationDatePadding,
        borderRadius: '30px',
        border: `1px solid ${COLORS.primaryBlue}`,
        display: 'inline-block',
        fontWeight: 800,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        flex: '0 1 auto',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      },
      
      gpaIcon: {
        marginRight: '2px',
        fontSize: `${Math.max(9, fontConfig.tinyText - 2)}px`,
      },
      
      projectList: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.itemGap,
        marginTop: '2px'
      },
      
      projectItem: {
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.cardPadding,
        borderLeft: `3px solid ${COLORS.primaryPink}`,
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      },
      
      projectName: {
        fontSize: `${fontConfig.cardTitle}px`,
        fontWeight: 700,
        color: COLORS.textPrimary,
        margin: '0 0 2px 0',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      projectRole: {
        fontSize: `${fontConfig.smallText}px`,
        color: COLORS.primaryPink,
        fontWeight: 700,
        marginBottom: '2px',
        background: '#fdf2f8',
        padding: '3px 8px',
        borderRadius: '20px',
        display: 'inline-block',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        border: `1px solid #fbcfe8`,
      },
      
      projectDates: {
        fontSize: `${fontConfig.tinyText}px`,
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: spacingConfig.projectDatePadding,
        borderRadius: '30px',
        border: `1px solid ${COLORS.borderMedium}`,
        whiteSpace: 'nowrap',
        fontWeight: 700,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      projectLink: {
        display: 'inline-block',
        marginTop: spacingConfig.bulletSpacing,
        fontSize: `${fontConfig.tinyText}px`,
        color: COLORS.primaryBlue,
        textDecoration: 'none',
        fontWeight: 600,
        wordBreak: 'break-all',
        background: '#eef2ff',
        padding: spacingConfig.techBubblePadding,
        borderRadius: '6px',
        border: `1px solid #bfdbfe`,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      },
      
      experienceList: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.itemGap,
        marginTop: '2px'
      },
      
      experienceItem: (type) => ({
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.cardPadding,
        borderLeft: type === 'job' ? `4px solid ${COLORS.primaryBlue}` : 
                   type === 'project' ? `4px solid ${COLORS.primaryPink}` : 
                   type === 'freelance' ? `4px solid ${COLORS.primaryOrange}` : 
                   `4px solid ${COLORS.primaryGreen}`,
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }),
      
      positionTitle: {
        fontSize: `${fontConfig.cardTitle}px`,
        fontWeight: 700,
        color: COLORS.textPrimary,
        margin: '0 0 2px 0',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      companyName: {
        fontWeight: 700,
        color: COLORS.primaryBlue,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        fontSize: `${fontConfig.smallText}px`
      },
      
      companyLocation: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: '3px 8px',
        borderRadius: '20px',
        fontSize: `${fontConfig.tinyText}px`,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        border: `1px solid ${COLORS.borderLight}`,
        fontWeight: 500,
      },
      
      experienceDates: {
        fontSize: `${fontConfig.tinyText}px`,
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: spacingConfig.experienceDatePadding,
        borderRadius: '30px',
        border: `1px solid ${COLORS.borderMedium}`,
        whiteSpace: 'nowrap',
        fontWeight: 700,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      achievementItem: {
        display: 'flex',
        gap: '8px',
        fontSize: `${fontConfig.achievementText}px`,
        color: COLORS.textPrimary,
        marginBottom: spacingConfig.bulletSpacing,
        lineHeight: fontConfig.lineHeight,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        fontWeight: 400,
      },
      
      techCloud: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacingConfig.bulletSpacing,
        marginTop: spacingConfig.bulletSpacing
      },
      
      techBubble: {
        background: COLORS.skillBackground,
        padding: spacingConfig.techBubblePadding,
        borderRadius: '30px',
        fontSize: `${fontConfig.tinyText}px`,
        color: COLORS.textPrimary,
        border: `1px solid ${COLORS.borderMedium}`,
        fontWeight: 600,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      certificationList: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacingConfig.itemGap,
        marginTop: '2px'
      },
      
      certificationItem: {
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: '5px',
        padding: spacingConfig.cardPadding,
        borderLeft: `3px solid ${COLORS.primaryBlue}`,
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      },
      
      certificationName: {
        fontSize: `${fontConfig.cardTitle}px`,
        fontWeight: 700,
        color: COLORS.textPrimary,
        margin: '0 0 2px 0',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      certificationIssuer: {
        fontSize: `${fontConfig.smallText}px`,
        color: COLORS.textPrimary,
        fontWeight: 600,
        marginBottom: '4px',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      certificationDate: {
        fontSize: `${fontConfig.tinyText}px`,
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: spacingConfig.educationDatePadding,
        borderRadius: '30px',
        border: `1px solid ${COLORS.borderMedium}`,
        display: 'inline-block',
        marginTop: spacingConfig.marginBetweenSections,
        fontWeight: 700,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      },
      
      typeSelectorButton: (type, isSelected) => ({
        flex: '1 1 auto',
        minWidth: '120px',
        padding: spacingConfig.cardPadding,
        border: `1px solid ${isSelected ? type.color : COLORS.borderMedium}`,
        borderRadius: '40px',
        background: isSelected ? type.color : COLORS.background,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacingConfig.bulletSpacing,
        fontSize: `${fontConfig.tinyText}px`,
        fontWeight: 700,
        color: isSelected ? COLORS.white : COLORS.textPrimary,
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 4px 8px rgba(37, 99, 235, 0.3)' : '0 1px 2px rgba(0,0,0,0.05)',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      }),
      
      bottomFiller: {
        flex: 1,
        background: COLORS.background,
        minHeight: spacingConfig.bottomFillerHeight,
      },
      
      institutionInfo: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: spacingConfig.bulletSpacing,
        marginBottom: spacingConfig.marginBetweenSections,
        fontSize: `${fontConfig.smallText}px`,
        color: COLORS.textPrimary,
      },
      
      institutionName: {
        fontWeight: 700,
        color: COLORS.textPrimary,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        fontSize: `${fontConfig.smallText}px`
      },
      
      educationLocation: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: COLORS.textPrimary,
        background: COLORS.skillBackground,
        padding: spacingConfig.techBubblePadding,
        borderRadius: '20px',
        fontSize: `${fontConfig.tinyText}px`,
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        border: `1px solid ${COLORS.borderLight}`,
        fontWeight: 500,
      },
      
      fullName: {
        fontSize: `${optimizedNameFontSize}px`,
        fontWeight: 800,
        margin: '0 0 8px 0',
        color: COLORS.white,
        letterSpacing: '-0.5px',
        lineHeight: 1.1,
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      },
      
      titleTag: (color) => ({
        padding: spacingConfig.contactChipPadding,
        borderRadius: '30px',
        fontSize: `${fontConfig.tinyText}px`,
        fontWeight: 700,
        color: COLORS.white,
        background: color,
        display: 'inline-block',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        letterSpacing: '0.3px',
        border: '1px solid rgba(255,255,255,0.2)',
        fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
      }),
      
      bulletPoint: {
        color: COLORS.primaryBlue,
        minWidth: '20px',
        fontSize: `${fontConfig.achievementText}px`,
        fontWeight: 700,
      },
      
      educationAchievements: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacingConfig.bulletSpacing,
        marginTop: spacingConfig.bulletSpacing
      }
    };
    
    return baseStyles;
  }, [spacingConfig, fontConfig, theme, optimizedNameFontSize]);

  const availableTypes = Object.keys(EXPERIENCE_TYPES).filter(
    type => processedData.typeCounts[type] > 0
  );

  // UPDATED: Render contact chip with blue LinkedIn icon and improved styling
  const renderContactChip = (contact, index) => {
    const isLinkedIn = contact.type === 'linkedin';
    
    return contact.link ? (
      <a 
        key={index} 
        href={contact.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={getDynamicStyles.contactChip}
        onMouseEnter={() => setHoveredItem(`contact-${index}`)}
        onMouseLeave={() => setHoveredItem(null)}
        title={contact.originalValue || contact.value}
      >
        <span style={isLinkedIn ? { color: COLORS.linkedinBlue, fontWeight: 'bold', fontSize: '14px' } : {}}>
          {contact.icon}
        </span>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {contact.displayValue || contact.value}
        </span>
      </a>
    ) : (
      <div 
        key={index} 
        style={getDynamicStyles.contactChip}
        onMouseEnter={() => setHoveredItem(`contact-${index}`)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={isLinkedIn ? { color: COLORS.linkedinBlue, fontWeight: 'bold', fontSize: '14px' } : {}}>
          {contact.icon}
        </span>
        <span>{contact.displayValue || contact.value}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '500px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: COLORS.cardBackground,
        borderRadius: '12px'
      }}>
        <LoadingSpinner size="lg" color={theme.primaryColor} text="Loading template..." />
      </div>
    );
  }

  return (
    <div style={styles.outerContainer} className={className}>
      <div 
        ref={templateRef}
        style={{
          ...styles.template,
          fontSize: `${fontConfig.body}px`,
          lineHeight: fontConfig.lineHeight,
          color: COLORS.textPrimary,
        }}
        data-template-version="2.3.2"
        data-content-height={contentHeight}
        data-font-scale={fontConfig.body}
      >
        <div style={styles.templateInner}>
          <header style={{
            ...getDynamicStyles.header,
            ...(isMobile && styles.mobileHeader),
          }}>
            <div style={styles.headerBg} />
            <div style={{
              ...styles.headerContent,
              ...(isMobile && styles.mobileHeaderContent)
            }}>
              {personalInfo.photo ? (
                <div style={{
                  ...getDynamicStyles.photoContainer,
                  ...(isMobile && styles.mobilePhotoContainer)
                }}>
                  <img 
                    src={personalInfo.photo} 
                    alt={personalInfo.fullName || personalInfo.name || 'Profile'} 
                    style={styles.profilePhoto}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ) : (
                <div style={{
                  ...getDynamicStyles.avatarPlaceholder,
                  ...(isMobile && styles.mobileAvatarPlaceholder)
                }}>
                  {TemplateHelpers.getInitials(personalInfo.fullName || personalInfo.name)}
                </div>
              )}
              
              <div style={styles.nameSection}>
                <h1 style={{
                  ...getDynamicStyles.fullName,
                  ...(isMobile && styles.mobileFullName)
                }}>
                  {personalInfo.fullName || personalInfo.name || 'Your Name'}
                </h1>
                
                <div style={styles.titleTags}>
                  {(personalInfo.jobTitle || personalInfo.title || personalInfo.role) && (
                    <span style={getDynamicStyles.titleTag(theme.primaryColor)}>
                      {personalInfo.jobTitle || personalInfo.title || personalInfo.role}
                    </span>
                  )}
                  {personalInfo.totalExperience && (
                    <span style={getDynamicStyles.titleTag(COLORS.primaryPurple)}>
                      {personalInfo.totalExperience}+ Years
                    </span>
                  )}
                  {personalInfo.studentType && (
                    <span style={getDynamicStyles.titleTag(COLORS.primaryPink)}>
                      {personalInfo.studentType}
                    </span>
                  )}
                </div>

                {contactInfo.length > 0 && (
                  <div style={{
                    ...styles.contactStrip,
                    gap: spacingConfig.contactGap || '12px',
                    rowGap: '12px',
                    ...(isMobile && styles.mobileContactStrip)
                  }}>
                    {contactInfo.map((contact, index) => renderContactChip(contact, index))}
                  </div>
                )}
              </div>
            </div>
          </header>

          <div style={{
            ...getDynamicStyles.contentGrid,
            ...(isMobile && styles.mobileContentGrid)
          }}>
            {/* Left Column */}
            <div style={getDynamicStyles.mainContent}>
              {processedData.hasData.summary && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>📝</span>
                    ABOUT ME
                  </h3>
                  <div style={getDynamicStyles.summaryCard}>
                    <p style={getDynamicStyles.summaryText}>{processedData.summary}</p>
                  </div>
                </section>
              )}

              {availableTypes.length > 1 && (
                <div style={{
                  ...styles.typeButtonsContainer,
                  gap: spacingConfig.bulletSpacing
                }}>
                  {availableTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedExperienceType(type)}
                      style={getDynamicStyles.typeSelectorButton(
                        EXPERIENCE_TYPES[type],
                        selectedExperienceType === type
                      )}
                      onMouseEnter={() => setHoveredItem(`type-${type}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span>{EXPERIENCE_TYPES[type].icon}</span>
                      <span>{EXPERIENCE_TYPES[type].label}</span>
                      <span>({processedData.typeCounts[type]})</span>
                    </button>
                  ))}
                </div>
              )}

              {processedData.hasData.experiences && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>
                      {EXPERIENCE_TYPES[selectedExperienceType]?.icon || '💼'}
                    </span>
                    {EXPERIENCE_TYPES[selectedExperienceType]?.label || 'EXPERIENCE'}
                  </h3>
                  <div style={getDynamicStyles.experienceList}>
                    {processedData.experiences.map((exp) => (
                      <div 
                        key={exp.id}
                        style={{
                          ...getDynamicStyles.experienceItem(exp.type),
                          transform: hoveredItem === exp.id ? 'translateY(-2px)' : 'none',
                          boxShadow: hoveredItem === exp.id ? '0 3px 8px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(exp.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div style={{
                          ...styles.experienceHeader,
                          gap: spacingConfig.bulletSpacing,
                          ...(isMobile && styles.mobileExperienceHeader)
                        }}>
                          <div>
                            <h4 style={getDynamicStyles.positionTitle}>{exp.title}</h4>
                            <div style={{
                              ...styles.companyInfo,
                              gap: spacingConfig.bulletSpacing
                            }}>
                              <span style={getDynamicStyles.companyName}>{exp.organization}</span>
                              {exp.location && (
                                <span style={getDynamicStyles.companyLocation}>
                                  <span>{TemplateHelpers.icons.location}</span>
                                  {exp.location}
                                </span>
                              )}
                            </div>
                          </div>
                          {(exp.startDate || exp.endDate) && (
                            <div style={getDynamicStyles.experienceDates}>
                              {exp.startDate} – {exp.endDate}
                            </div>
                          )}
                        </div>

                        {exp.bulletPoints.length > 0 && (
                          <ul style={{
                            ...styles.achievementsList,
                            marginBottom: spacingConfig.bulletSpacing
                          }}>
                            {exp.bulletPoints.map((bullet, idx) => (
                              <li key={idx} style={getDynamicStyles.achievementItem}>
                                <span style={getDynamicStyles.bulletPoint}>{TemplateHelpers.icons.triangle}</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies.length > 0 && (
                          <div style={getDynamicStyles.techCloud}>
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} style={getDynamicStyles.techBubble}>{tech}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {processedData.hasData.projects && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>🚀</span>
                    PROJECTS
                  </h3>
                  <div style={getDynamicStyles.projectList}>
                    {processedData.projects.map((project) => (
                      <div 
                        key={project.id}
                        style={{
                          ...getDynamicStyles.projectItem,
                          transform: hoveredItem === project.id ? 'translateY(-2px)' : 'none',
                          boxShadow: hoveredItem === project.id ? '0 3px 8px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(project.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div style={{
                          ...styles.projectHeader,
                          gap: spacingConfig.bulletSpacing,
                          ...(isMobile && styles.mobileProjectHeader)
                        }}>
                          <div>
                            <h4 style={getDynamicStyles.projectName}>{project.name}</h4>
                            {project.role && (
                              <div style={getDynamicStyles.projectRole}>{project.role}</div>
                            )}
                          </div>
                          {(project.startDate || project.endDate) && (
                            <div style={getDynamicStyles.projectDates}>
                              {project.startDate} – {project.endDate}
                            </div>
                          )}
                        </div>

                        {project.achievements.length > 0 && (
                          <ul style={{
                            ...styles.achievementsList,
                            marginBottom: spacingConfig.bulletSpacing
                          }}>
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} style={getDynamicStyles.achievementItem}>
                                <span style={getDynamicStyles.bulletPoint}>{TemplateHelpers.icons.triangle}</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {project.link && (
                          <a 
                            href={project.fullLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{
                              ...getDynamicStyles.projectLink,
                              ...(isMobile && styles.mobileProjectLink)
                            }}
                            onMouseEnter={() => setHoveredItem(`${project.id}-link`)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            🔗 {project.displayLink}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column */}
            <div style={getDynamicStyles.sidebar}>
              {processedData.hasData.skills && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>⚡</span>
                    KEY SKILLS
                  </h3>
                  <div style={getDynamicStyles.skillsContainer}>
                    <div style={getDynamicStyles.skillsGrid}>
                      {processedData.skills.map((skill, index) => (
                        <span 
                          key={index}
                          style={{
                            ...getDynamicStyles.skillChip,
                            ...(hoveredSkill === index ? styles.skillChipHover : {})
                          }}
                          onMouseEnter={() => setHoveredSkill(index)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {TemplateHelpers.getItemName.skill(skill)}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {processedData.hasData.education && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>🎓</span>
                    EDUCATION
                  </h3>
                  <div style={getDynamicStyles.educationList}>
                    {processedData.education.map((edu) => (
                      <div 
                        key={edu.id}
                        style={{
                          ...getDynamicStyles.educationItem,
                          transform: hoveredItem === edu.id ? 'translateY(-2px)' : 'none',
                          boxShadow: hoveredItem === edu.id ? '0 3px 8px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(edu.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <h4 style={getDynamicStyles.degreeTitle}>{edu.degree || 'Degree'}</h4>
                        {edu.field && <div style={getDynamicStyles.educationField}>{edu.field}</div>}
                        
                        <div style={getDynamicStyles.institutionInfo}>
                          <span style={getDynamicStyles.institutionName}>{edu.institution}</span>
                          {edu.location && (
                            <span style={getDynamicStyles.educationLocation}>
                              <span>{TemplateHelpers.icons.location}</span>
                              {edu.location}
                            </span>
                          )}
                        </div>

                        {(edu.displayDate || edu.gpaDisplay) && (
                          <div style={getDynamicStyles.educationMetaContainer}>
                            {edu.displayDate && (
                              <div style={getDynamicStyles.educationDateBadge}>
                                {edu.displayDate}
                                {edu.current && <span> • Current</span>}
                              </div>
                            )}
                            
                            {edu.gpaDisplay && (
                              <div style={getDynamicStyles.gpaBadge}>
                                <span style={getDynamicStyles.gpaIcon}>{TemplateHelpers.icons.gpa}</span>
                                {edu.gpaDisplay}
                              </div>
                            )}
                          </div>
                        )}

                        {edu.achievements.length > 0 && (
                          <div style={getDynamicStyles.educationAchievements}>
                            {edu.achievements.map((achievement, idx) => (
                              <span key={idx} style={getDynamicStyles.techBubble}>
                                <span>{TemplateHelpers.icons.bullet}</span>
                                {achievement}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {processedData.hasData.certifications && (
                <section style={styles.section}>
                  <h3 style={getDynamicStyles.sectionTitle}>
                    <span style={styles.sectionIcon}>📜</span>
                    CERTIFICATION
                  </h3>
                  <div style={getDynamicStyles.certificationList}>
                    {processedData.certifications.map((cert) => (
                      <div 
                        key={cert.id}
                        style={{
                          ...getDynamicStyles.certificationItem,
                          transform: hoveredItem === cert.id ? 'translateY(-2px)' : 'none',
                          boxShadow: hoveredItem === cert.id ? '0 3px 8px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(cert.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <h4 style={getDynamicStyles.certificationName}>{cert.name}</h4>
                        {cert.issuer && <div style={getDynamicStyles.certificationIssuer}>{cert.issuer}</div>}
                        
                        {cert.date && (
                          <div style={getDynamicStyles.certificationDate}>
                            {cert.date}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
          
          <div style={getDynamicStyles.bottomFiller}></div>
        </div>
      </div>

      <style>{`
        @media print {
          .template2-print {
            box-shadow: none;
            border: none;
          }
          .template2-header {
            background: linear-gradient(135deg, #0a0f1a 0%, #172032 50%, #1d4ed8 100%) !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body, p, h1, h2, h3, h4, h5, h6, span, div, li, a, strong, em {
            color: #000000 !important;
            font-family: "Calibri", "Arial", "Helvetica", sans-serif !important;
          }
          .template2-header * {
            color: #ffffff !important;
          }
          .skill-chip, .tech-bubble, .date-badge {
            border: 1px solid #666666 !important;
          }
          .section-title {
            background: linear-gradient(135deg, #0a0f1a, #172032) !important;
          }
          .card {
            border: 1px solid #999999 !important;
          }
          .bullet-point {
            color: #000000 !important;
            font-weight: bold !important;
          }
          a {
            text-decoration: underline !important;
            color: #1d4ed8 !important;
          }
          a:visited {
            color: #6b21a8 !important;
          }
        }
        
        @media (prefers-contrast: high) {
          .template2 * {
            color: #000000 !important;
          }
          .template2-header * {
            color: #ffffff !important;
          }
          a {
            color: #0000ff !important;
          }
        }
      `}</style>
    </div>
  );
};

// Base styles that don't change with spacing
const styles = {
  outerContainer: {
    width: '100%',
    minHeight: '100%',
    background: COLORS.background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  
  template: {
    fontFamily: '"Calibri", "Arial", "Helvetica", sans-serif',
    background: COLORS.background,
    width: '100%',
    maxWidth: '210mm',
    margin: '0 auto',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100%',
  },
  
  templateInner: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    background: COLORS.background,
  },
  
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
    opacity: 0.7,
  },
  
  headerContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  },
  
  profilePhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  
  nameSection: {
    flex: 1
  },
  
  titleTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '10px'
  },
  
  contactStrip: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  
  section: {
    width: '100%'
  },
  
  sectionIcon: {
    fontSize: '16px',
    background: '#eef2ff',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    color: COLORS.primaryBlue,
  },
  
  skillChipHover: {
    background: '#e0e0e0',
    transform: 'translateX(2px)',
    borderColor: '#666666',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '6px'
  },
  
  achievementsList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '6px'
  },
  
  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  
  typeButtonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '6px',
    marginTop: '2px'
  },
  
  mobileHeader: {
    padding: '20px 20px'
  },
  
  mobileHeaderContent: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '15px'
  },
  
  mobilePhotoContainer: {
    width: '90px',
    height: '90px'
  },
  
  mobileAvatarPlaceholder: {
    width: '90px',
    height: '90px',
    fontSize: '34px'
  },
  
  mobileFullName: {
    fontSize: '30px'
  },
  
  mobileContactStrip: {
    justifyContent: 'center',
    gap: '10px !important',
    rowGap: '12px !important'
  },
  
  mobileContentGrid: {
    gridTemplateColumns: '1fr',
    gap: '15px',
    padding: '15px'
  },
  
  mobileProjectHeader: {
    flexDirection: 'column',
    gap: '6px'
  },
  
  mobileExperienceHeader: {
    flexDirection: 'column',
    gap: '6px'
  },
  
  mobileProjectLink: {
    wordBreak: 'break-all',
    whiteSpace: 'normal'
  }
};

Template2.displayName = 'Template2';

export default Template2;