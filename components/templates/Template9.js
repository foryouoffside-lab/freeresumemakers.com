// ============================================
// components/templates/Template9.js
// UPDATED: LinkedIn "in" icon with blue color optimization
// - Shows ONLY username (not full linkedin.com/in/username)
// - Uses blue-colored LinkedIn "in" icon like Template1
// - Maintains clickable link functionality
// - Handles both full URLs and usernames
// UPDATED: Fixed date positioning - dates now in constant position on the right
// UPDATED: Location and Company name placed side by side (not title and company)
// UPDATED: Education - Institution and location placed side by side with location icon
// UPDATED: No dot separators, only location icon with location text
// ============================================

import React, { useRef, useMemo, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';

/**
 * Template9 - Modern ATS-Friendly A4 Resume Template v3.14
 * 
 * UPDATED: LinkedIn "in" icon with blue color optimization
 * - LinkedIn now displays with blue "in" icon (following Template1 style)
 * - Shows ONLY username (not full URL)
 * - Blue color (#0077b5) for LinkedIn icon
 * - GitHub and Website icons also optimized
 * - ATS-optimized: semantic HTML, clean structure, parseable dates
 * - A4 optimized: exact 21cm x 29.7cm dimensions with proper print styles
 * - Modern design: clean typography, subtle accents, professional hierarchy
 * - High contrast: pure black text (#000000) for maximum readability
 * - FIXED: Experience and Education dates now in constant position (right-aligned)
 * - UPDATED: Location and Company name side by side (not title and company)
 * - UPDATED: Education - Institution and location side by side with location icon
 * - UPDATED: No dot separators, only location icon with location text
 */

// ============================================================================
// ICON MAPPING - Using Template1 style with LinkedIn blue color
// ============================================================================
const ICON_MAPPING = Object.freeze({
  email: { icon: '✉', color: '#666666' },
  phone: { icon: '☎', color: '#666666' },
  location: { icon: '📍', color: '#666666' },
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn blue color
  github: { icon: '🐙', color: '#333333' },
  website: { icon: '🌐', color: '#666666' }
});

// ============================================================================
// ULTRA-COMPACT HELPERS - ATS & A4 OPTIMIZED
// ============================================================================
const Template9Helpers = Object.freeze({
  str: (val) => val != null ? String(val).trim().replace(/\s+/g, ' ') : '',
  
  arr: (data) => Array.isArray(data) ? data.filter(x => x != null && x !== '') : [],
  
  // ATS-friendly date formatter: "MMM YYYY" or "YYYY" format
  date: (d) => {
    if (!d) return '';
    const s = Template9Helpers.str(d).toLowerCase();
    if (s === 'present' || s === 'current' || s === 'now') return 'Present';
    if (/^\d{4}$/.test(d)) return d;
    if (/^\d{4}-\d{2}$/.test(d)) {
      const [y, m] = d.split('-');
      const date = new Date(parseInt(y), parseInt(m) - 1);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    try {
      const dt = new Date(d);
      if (!isNaN(dt.getTime())) {
        return dt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
    } catch {}
    return Template9Helpers.str(d);
  },
  
  // Date range formatter for ATS parsing
  range: (start, end, isCurrent) => {
    const s = Template9Helpers.date(start);
    const e = isCurrent ? 'Present' : Template9Helpers.date(end);
    if (!s && !e) return '';
    if (!s) return e;
    if (!e) return s;
    return `${s} – ${e}`;
  },
  
  // Smart truncation preserving word boundaries
  cut: (text, max = 120) => {
    const t = Template9Helpers.str(text);
    return t;
  },
  
  // Sanitize text for ATS
  sanitize: (text) => Template9Helpers.str(text).replace(/[^\w\s\-\.\,\:\;\(\)\/\&\@]/g, ''),
  
  // Format LinkedIn URL - Returns full URL for link, username only for display (like Template1)
  formatLinkedInLink: (url) => {
    if (!url) return null;
    const cleanUrl = Template9Helpers.str(url);
    
    // Extract username
    let username = '';
    
    if (cleanUrl.includes('linkedin.com')) {
      const match = cleanUrl.match(/linkedin\.com\/(?:in|company)\/([^\/?#]+)/);
      if (match && match[1]) {
        username = match[1];
      } else {
        username = cleanUrl
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/^linkedin\.com\//, '')
          .replace(/\/$/, '');
      }
    } else {
      username = cleanUrl;
    }
    
    username = username.split('/')[0].split('?')[0];
    
    // Return FULL https URL for PDF clickability
    return `https://www.linkedin.com/in/${username}`;
  },
  
  // UPDATED: Return ONLY username (not full URL) - matches Template1 style
  formatLinkedInDisplay: (url) => {
    if (!url) return '';
    const cleanUrl = Template9Helpers.str(url);
    
    // Extract username
    let username = '';
    
    if (cleanUrl.includes('linkedin.com')) {
      const match = cleanUrl.match(/linkedin\.com\/(?:in|company)\/([^\/?#]+)/);
      if (match && match[1]) {
        username = match[1];
      } else {
        username = cleanUrl
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/^linkedin\.com\//, '')
          .replace(/\/$/, '');
      }
    } else {
      username = cleanUrl;
    }
    
    username = username.split('/')[0].split('?')[0];
    
    // Return ONLY username (not full URL)
    return username || 'LinkedIn';
  },
  
  // Format GitHub URL
  formatGitHubLink: (url) => {
    if (!url) return null;
    const cleanUrl = Template9Helpers.str(url);
    
    let username = '';
    
    if (cleanUrl.includes('github.com')) {
      const match = cleanUrl.match(/github\.com\/([^\/?#]+)/);
      if (match && match[1]) {
        username = match[1];
      } else {
        username = cleanUrl
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/^github\.com\//, '')
          .replace(/\/$/, '');
      }
    } else {
      username = cleanUrl;
    }
    
    username = username.split('/')[0].split('?')[0];
    
    return `https://github.com/${username}`;
  },
  
  formatGitHubDisplay: (url) => {
    if (!url) return '';
    const cleanUrl = Template9Helpers.str(url);
    
    let username = '';
    
    if (cleanUrl.includes('github.com')) {
      const match = cleanUrl.match(/github\.com\/([^\/?#]+)/);
      if (match && match[1]) {
        username = match[1];
      } else {
        username = cleanUrl
          .replace(/^https?:\/\//, '')
          .replace(/^www\./, '')
          .replace(/^github\.com\//, '')
          .replace(/\/$/, '');
      }
    } else {
      username = cleanUrl;
    }
    
    username = username.split('/')[0].split('?')[0];
    
    return username || 'GitHub';
  },
  
  // Format website URL (remove protocol for display)
  formatWebsiteLink: (url) => {
    if (!url) return null;
    let cleanUrl = Template9Helpers.str(url);
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      return `https://${cleanUrl}`;
    }
    return cleanUrl;
  },
  
  formatWebsiteDisplay: (url) => {
    if (!url) return '';
    let displayValue = Template9Helpers.str(url)
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');
    
    if (displayValue.length > 35) {
      displayValue = displayValue.substring(0, 32) + '...';
    }
    
    return displayValue;
  },
  
  // Format GPA with scale detection (5, 10, or 100 point scales only)
  formatGPA: (gpa, scale) => {
    if (!gpa) return null;
    const gpaValue = Template9Helpers.str(gpa);
    if (!gpaValue) return null;
    
    // If scale is provided, use it
    if (scale) {
      const scaleValue = Template9Helpers.str(scale);
      return `${gpaValue}/${scaleValue}`;
    }
    
    // Auto-detect scale from GPA value
    const gpaNum = parseFloat(gpaValue);
    if (!isNaN(gpaNum)) {
      if (gpaNum <= 5.0) return `${gpaValue}/5.0`;
      if (gpaNum <= 10.0) return `${gpaValue}/10.0`;
      if (gpaNum <= 100) return `${gpaValue}/100`;
    }
    
    // If it contains a slash already, assume it's formatted correctly
    if (gpaValue.includes('/')) {
      return gpaValue;
    }
    
    // Default to 10.0 scale
    return `${gpaValue}/10.0`;
  },
  
  // Get contact icon with color
  getContactIcon: (type) => {
    const iconConfig = ICON_MAPPING[type] || { icon: '•', color: '#666666' };
    return iconConfig.icon;
  },
  
  getContactIconColor: (type) => {
    const iconConfig = ICON_MAPPING[type];
    return iconConfig ? iconConfig.color : '#666666';
  }
});

// ============================================================================
// A4 PAGE OPTIMIZED LIMITS
// ============================================================================
const Template9Limits = Object.freeze({
  contact: 3,           // Maximum contact items
  skills: 12,           // Maximum individual skills displayed as tags
  experience: 2,        // Maximum number of jobs/positions shown
  bullets: 4,           // Maximum bullet points per experience entry
  education: 1,         // Maximum number of education entries shown
  certifications: 2,    // Maximum certifications shown
  awards: 2,            // Maximum awards shown
  summaryChars: 450     // Maximum characters for summary
});

// ============================================================================
// MAIN TEMPLATE COMPONENT
// ============================================================================
const Template9 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? { ...props } : (useResume?.()?.state || {});
  
  const { 
    personalInfo = {}, 
    education = [], 
    experience = [], 
    skills = [], 
    professionalSummary = '', 
    certifications = [],
    awards = []
  } = resumeData;

  const templateRef = useRef(null);

  // ============================================================================
  // SINGLE PASS DATA PROCESSING - WITH OPTIMIZED CONTACT HANDLING
  // ============================================================================
  const data = useMemo(() => {
    const contacts = [];
    const addContact = (val, type, formattedVal = null, linkVal = null) => {
      const displayVal = formattedVal || val;
      const linkValFinal = linkVal || val;
      const s = Template9Helpers.str(displayVal);
      if (s) contacts.push(Object.freeze({ 
        val: s, 
        type, 
        originalVal: val,
        link: linkValFinal,
        displayValue: displayVal,
        icon: Template9Helpers.getContactIcon(type),
        iconColor: Template9Helpers.getContactIconColor(type)
      }));
    };
    
    // Contact methods with formatters (like Template1)
    const contactMethods = [
      { 
        val: personalInfo.email, 
        type: 'email',
        displayFormatter: (v) => v,
        linkFormatter: (v) => `mailto:${v}`
      },
      { 
        val: personalInfo.phone, 
        type: 'phone',
        displayFormatter: (v) => v,
        linkFormatter: (v) => `tel:${v.replace(/[^0-9+]/g, '')}`
      },
      { 
        val: personalInfo.location, 
        type: 'location',
        displayFormatter: (v) => v,
        linkFormatter: null
      },
      { 
        val: personalInfo.linkedin, 
        type: 'linkedin',
        displayFormatter: (v) => Template9Helpers.formatLinkedInDisplay(v), // Returns ONLY username
        linkFormatter: (v) => Template9Helpers.formatLinkedInLink(v)
      },
      { 
        val: personalInfo.github, 
        type: 'github',
        displayFormatter: (v) => Template9Helpers.formatGitHubDisplay(v),
        linkFormatter: (v) => Template9Helpers.formatGitHubLink(v)
      },
      { 
        val: personalInfo.website, 
        type: 'website',
        displayFormatter: (v) => Template9Helpers.formatWebsiteDisplay(v),
        linkFormatter: (v) => Template9Helpers.formatWebsiteLink(v)
      }
    ];

    // Add contacts until we reach the limit
    for (const method of contactMethods) {
      if (contacts.length >= Template9Limits.contact) break;
      if (method.val) {
        const displayValue = method.displayFormatter ? method.displayFormatter(method.val) : method.val;
        const linkValue = method.linkFormatter ? method.linkFormatter(method.val) : null;
        addContact(method.val, method.type, displayValue, linkValue);
      }
    }

    // SKILLS - Simple array for text display
    const skillList = Template9Helpers.arr(skills)
      .slice(0, Template9Limits.skills)
      .map(s => {
        const raw = typeof s === 'object' ? (s.name || s.skill || s.title) : s;
        return Template9Helpers.sanitize(raw);
      })
      .filter(s => s.length >= 2);

    // EXPERIENCE
    const expList = Template9Helpers.arr(experience)
      .filter(e => {
        const hasRole = Template9Helpers.str(e.title || e.position || e.role);
        const hasCompany = Template9Helpers.str(e.company || e.organization);
        return hasRole || hasCompany;
      })
      .slice(0, Template9Limits.experience)
      .map(e => Object.freeze({
        title: Template9Helpers.str(e.title || e.position || e.role),
        company: Template9Helpers.str(e.company || e.organization),
        location: Template9Helpers.str(e.location),
        duration: Template9Helpers.range(e.startDate, e.endDate, e.current),
        achievements: Template9Helpers.arr(e.bulletPoints || e.achievements || [])
          .map(p => Template9Helpers.str(p))
          .filter(p => p.length > 0)
          .slice(0, Template9Limits.bullets),
        technologies: Template9Helpers.arr(e.technologies)
          .map(t => Template9Helpers.sanitize(t))
          .filter(t => t)
          .slice(0, 4)
      }));

    // Education
    const eduList = Template9Helpers.arr(education)
      .filter(e => Template9Helpers.str(e.degree) || Template9Helpers.str(e.institution))
      .slice(0, Template9Limits.education)
      .map(e => {
        const formattedGPA = e.gpa ? Template9Helpers.formatGPA(e.gpa, e.gpaScale) : null;
        
        return Object.freeze({
          degree: Template9Helpers.str(e.degree),
          institution: Template9Helpers.str(e.institution),
          location: Template9Helpers.str(e.location),
          duration: Template9Helpers.range(e.startDate || e.startYear, e.endDate || e.endYear, e.current),
          achievements: Template9Helpers.arr(e.details || e.achievements || e.bulletPoints || [])
            .map(p => Template9Helpers.cut(Template9Helpers.str(p), 110))
            .filter(p => p.length > 10)
            .slice(0, Template9Limits.bullets),
          gpa: formattedGPA,
          field: Template9Helpers.str(e.fieldOfStudy || e.field)
        });
      });

    // Certifications
    const certList = Template9Limits.certifications > 0
      ? Template9Helpers.arr(certifications)
          .slice(0, Template9Limits.certifications)
          .map(c => {
            const name = Template9Helpers.sanitize(c.name);
            const issuer = Template9Helpers.str(c.issuer);
            const date = Template9Helpers.date(c.date || c.year || c.issued);
            
            const nameLength = name.length;
            const issuerLength = issuer.length;
            const dateLength = date.length;
            const totalChars = nameLength + issuerLength + dateLength;
            
            return Object.freeze({ 
              name,
              issuer,
              date,
              canFitOneLine: totalChars < 60 && issuerLength > 0 && dateLength > 0
            });
          })
          .filter(c => c.name)
      : [];

    // Awards
    const awardList = Template9Limits.awards > 0
      ? Template9Helpers.arr(awards)
          .slice(0, Template9Limits.awards)
          .map(a => Object.freeze({ 
            title: Template9Helpers.sanitize(a.title || a.name), 
            issuer: Template9Helpers.str(a.issuer || a.organization),
            date: Template9Helpers.date(a.year || a.date)
          }))
          .filter(a => a.title)
      : [];

    const summary = professionalSummary
      ? Template9Helpers.cut(Template9Helpers.str(professionalSummary), Template9Limits.summaryChars)
      : '';

    const sections = Object.freeze({
      summary: summary.length > 20,
      experience: expList.length > 0,
      skills: skillList.length > 0,
      education: eduList.length > 0,
      certifications: certList.length > 0,
      awards: awardList.length > 0
    });

    return Object.freeze({
      personal: Object.freeze({
        name: Template9Helpers.str(personalInfo.fullName || personalInfo.name),
        title: Template9Helpers.str(personalInfo.jobTitle || personalInfo.headline)
      }),
      contacts: Object.freeze(contacts),
      skillList: Object.freeze(skillList),
      expList: Object.freeze(expList),
      eduList: Object.freeze(eduList),
      certList: Object.freeze(certList),
      awardList: Object.freeze(awardList),
      summary,
      sections
    });
  }, [personalInfo, skills, experience, education, professionalSummary, certifications, awards]);

  // ============================================================================
  // A4-OPTIMIZED STYLES - HIGH CONTRAST VERSION WITH FIXED DATE POSITIONS
  // ============================================================================
  const baseFontSize = isExporting ? '10pt' : '10.5pt';
  const baseLineHeight = isExporting ? 1.3 : 1.35;
  
  const sectionSpacing = '16px';
  const headerMarginBottom = '8px';
  const contentItemSpacing = '4px';
  
  const colors = {
    textPrimary: '#000000',
    textSecondary: '#1a1a1a',
    textMuted: '#2d2d2d',
    accent: '#003399',
    accentLight: '#e6f0ff',
    border: '#b0b0b0',
    borderLight: '#d0d0d0',
    background: '#ffffff',
    skillBg: '#f0f0f0',
    linkedinBlue: '#0077b5'
  };
  
  const styles = useMemo(() => ({
    template: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontSize: baseFontSize,
      lineHeight: baseLineHeight,
      color: colors.textPrimary,
      background: colors.background,
      width: isExporting ? '210mm' : '100%',
      minHeight: isExporting ? '297mm' : '100vh',
      margin: 0,
      padding: isExporting ? '12mm 15mm' : '16px 20px',
      boxSizing: 'border-box',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      ...(isExporting && {
        maxHeight: '297mm',
        overflow: 'hidden',
        pageBreakAfter: 'always',
        printColorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact'
      })
    },
    
    header: {
      marginBottom: sectionSpacing,
      paddingBottom: '8px',
      borderBottom: `2px solid ${colors.accent}`,
      textAlign: 'center'
    },
    name: {
      fontSize: '28pt',
      fontWeight: 700,
      color: colors.textPrimary,
      margin: '0 0 4px 0',
      lineHeight: 1.1,
      letterSpacing: '-0.5px'
    },
    title: {
      fontSize: '14pt',
      fontWeight: 500,
      color: colors.textSecondary,
      margin: '0 0 8px 0',
      fontStyle: 'normal'
    },
    contacts: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px 16px',
      fontSize: '10pt',
      color: colors.textSecondary
    },
    contact: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: '#f8f9fa',
      padding: '4px 10px',
      borderRadius: '20px',
      transition: 'all 0.2s ease'
    },
    contactLink: {
      color: colors.textSecondary,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    },
    contactIcon: {
      fontSize: '11pt',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px'
    },
    contactValue: {
      fontSize: '10pt',
      fontWeight: 500
    },
    
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: sectionSpacing
    },
    
    section: {
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
      margin: 0,
      padding: 0
    },
    sectionTitle: {
      fontSize: '12pt',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      color: colors.textPrimary,
      margin: `0 0 ${headerMarginBottom} 0`,
      paddingBottom: '4px',
      borderBottom: `1px solid ${colors.borderLight}`
    },
    
    summary: {
      fontSize: baseFontSize,
      lineHeight: baseLineHeight,
      color: colors.textSecondary,
      textAlign: 'justify',
      margin: 0,
      hyphens: 'auto',
      fontWeight: 500
    },
    
    // UPDATED: Experience container with fixed date positioning and company+location side by side
    expContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: contentItemSpacing
    },
    expItem: {
      margin: 0,
      padding: 0,
      border: 'none'
    },
    expHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '2px',
      width: '100%'
    },
    expTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      flex: '1',
      minWidth: 0
    },
    expTitle: {
      fontSize: '12pt',
      fontWeight: 700,
      color: colors.textPrimary,
      margin: 0,
      wordBreak: 'break-word'
    },
    // Company and Location container - side by side
    expCompanyLocation: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '2px',
      marginBottom: '4px'
    },
    expCompany: {
      fontSize: '11pt',
      fontWeight: 600,
      color: colors.textSecondary,
      margin: 0,
      fontStyle: 'normal',
      wordBreak: 'break-word'
    },
    expLocation: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '11pt',
      color: colors.textMuted,
      fontWeight: 500
    },
    locationIcon: {
      color: colors.accent,
      fontSize: '10pt'
    },
    // FIXED: Date now has fixed position - always on the right
    expDuration: {
      fontSize: '10.5pt',
      fontWeight: 500,
      color: colors.textSecondary,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginLeft: 'auto'
    },
    expBullets: {
      margin: '8px 0 0 0',
      padding: 0,
      listStyle: 'none'
    },
    expBullet: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: contentItemSpacing,
      fontSize: baseFontSize,
      color: colors.textSecondary,
      lineHeight: baseLineHeight,
      fontWeight: 500
    },
    bulletIcon: {
      color: colors.accent,
      fontWeight: 'bold',
      fontSize: baseFontSize,
      lineHeight: baseLineHeight,
      flexShrink: 0
    },
    bulletText: {
      flex: 1,
      wordBreak: 'break-word',
      whiteSpace: 'normal'
    },
    expTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: contentItemSpacing
    },
    techTag: {
      fontSize: '9.5pt',
      color: colors.accent,
      background: colors.accentLight,
      padding: '2px 8px',
      borderRadius: '4px',
      border: `1px solid ${colors.accent}30`,
      fontWeight: 600
    },
    
    // UPDATED: Education container with institution and location side by side
    eduContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    },
    eduItem: {
      margin: 0,
      padding: 0,
      border: 'none'
    },
    eduHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '2px',
      width: '100%'
    },
    eduTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      flex: '1',
      minWidth: 0
    },
    eduDegree: {
      fontSize: '12pt',
      fontWeight: 700,
      color: colors.textPrimary,
      margin: 0,
      wordBreak: 'break-word'
    },
    // Institution and Location container - side by side
    eduInstitutionLocation: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '2px',
      marginBottom: '4px'
    },
    eduInstitution: {
      fontSize: '11pt',
      fontWeight: 600,
      color: colors.textSecondary,
      margin: 0,
      fontStyle: 'normal',
      wordBreak: 'break-word'
    },
    eduLocation: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '11pt',
      color: colors.textMuted,
      fontWeight: 500
    },
    // FIXED: Date now has fixed position - always on the right
    eduDuration: {
      fontSize: '10.5pt',
      fontWeight: 500,
      color: colors.textSecondary,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginLeft: 'auto'
    },
    eduMetaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '0',
      marginBottom: '0'
    },
    eduGpa: {
      fontSize: '10pt',
      color: colors.textMuted,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    },
    eduField: {
      fontSize: '10pt',
      color: colors.textMuted,
      fontWeight: 500,
      marginTop: '0',
      marginBottom: '0'
    },
    eduBullets: {
      margin: '2px 0 0 0',
      padding: 0,
      listStyle: 'none'
    },
    eduBullet: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: contentItemSpacing,
      fontSize: baseFontSize,
      color: colors.textSecondary,
      lineHeight: baseLineHeight,
      fontWeight: 500
    },
    
    skillsContainer: {
      margin: 0,
      padding: 0
    },
    skillsText: {
      fontSize: baseFontSize,
      lineHeight: baseLineHeight,
      color: colors.textSecondary,
      fontWeight: 500,
      margin: 0
    },
    
    certList: {
      display: 'flex',
      flexDirection: 'column',
      gap: contentItemSpacing,
      margin: 0,
      padding: 0
    },
    certItem: {
      margin: 0,
      padding: 0,
      border: 'none'
    },
    certSingleLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      width: '100%'
    },
    certTitleIssuer: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      fontSize: '11pt'
    },
    certName: {
      fontWeight: 700,
      color: colors.textPrimary
    },
    certIssuer: {
      color: colors.textSecondary,
      fontStyle: 'normal',
      fontWeight: 500
    },
    certDate: {
      fontSize: '10.5pt',
      color: colors.textMuted,
      whiteSpace: 'nowrap',
      fontWeight: 500
    },
    certMultiLine: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    },
    certTitleRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      marginBottom: '0'
    },
    certMetaRow: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      fontSize: '10pt',
      color: colors.textMuted,
      fontWeight: 500
    },
    
    awardList: {
      display: 'flex',
      flexDirection: 'column',
      gap: contentItemSpacing,
      margin: 0,
      padding: 0
    },
    awardItem: {
      margin: 0,
      padding: 0,
      border: 'none'
    },
    awardSingleLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      width: '100%'
    },
    awardTitleIssuer: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      fontSize: '11pt'
    },
    awardName: {
      fontWeight: 700,
      color: colors.textPrimary
    },
    awardIssuer: {
      color: colors.textSecondary,
      fontStyle: 'normal',
      fontWeight: 500
    },
    awardDate: {
      fontSize: '10.5pt',
      color: colors.textMuted,
      whiteSpace: 'nowrap',
      fontWeight: 500
    }
  }), [baseFontSize, baseLineHeight, isExporting, sectionSpacing, headerMarginBottom, contentItemSpacing]);

  // ============================================================================
  // RENDER HELPERS - UPDATED with LinkedIn blue icon
  // ============================================================================
  
  const renderContact = useCallback((contact, index) => {
    const isLink = contact.link && (contact.type === 'email' || contact.type === 'linkedin' || 
                    contact.type === 'github' || contact.type === 'website' || contact.type === 'phone');
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          color: contact.iconColor,
          fontWeight: contact.type === 'linkedin' ? 'bold' : 'normal'
        }}>
          {contact.icon}
        </span>
        <span style={styles.contactValue}>{contact.displayValue}</span>
      </>
    );
    
    if (isLink && contact.link) {
      let finalLink = contact.link;
      
      // Ensure proper formatting for different link types
      if (contact.type === 'email' && !finalLink.startsWith('mailto:')) {
        finalLink = `mailto:${finalLink}`;
      }
      
      if (contact.type === 'phone' && !finalLink.startsWith('tel:')) {
        finalLink = `tel:${finalLink.replace(/[^0-9+]/g, '')}`;
      }
      
      // For LinkedIn, ensure the link is properly formatted
      if (contact.type === 'linkedin' && finalLink && !finalLink.includes('linkedin.com')) {
        finalLink = `https://www.linkedin.com/in/${finalLink.replace(/^@/, '')}`;
      }
      
      return (
        <a 
          key={index}
          href={finalLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactLink}
          aria-label={`${contact.type}: ${contact.displayValue}`}
        >
          <span style={styles.contact}>
            {content}
          </span>
        </a>
      );
    }
    
    return (
      <span key={index} style={styles.contact} aria-label={`${contact.type}: ${contact.displayValue}`}>
        {content}
      </span>
    );
  }, [styles]);

  // Skills as simple text joined with bullet separators
  const renderSkills = useCallback(() => {
    if (data.skillList.length === 0) return null;
    
    return (
      <div style={styles.skillsContainer}>
        <p style={styles.skillsText}>
          {data.skillList.join(' • ')}
        </p>
      </div>
    );
  }, [data.skillList, styles]);

  // Experience renderer - Company and Location side by side
  const renderExperience = useCallback((exp, index) => (
    <article key={index} style={styles.expItem} itemScope itemType="https://schema.org/JobPosting">
      <header style={styles.expHeader}>
        <div style={styles.expTitleWrapper}>
          <h4 style={styles.expTitle} itemProp="title">{exp.title}</h4>
        </div>
        {/* Date - Fixed on the right side */}
        {exp.duration && (
          <time style={styles.expDuration} itemProp="datePosted">{exp.duration}</time>
        )}
      </header>
      
      {/* Company and Location side by side - no dot separator */}
      <div style={styles.expCompanyLocation}>
        {exp.company && (
          <span style={styles.expCompany} itemProp="hiringOrganization">{exp.company}</span>
        )}
        {exp.location && (
          <span style={styles.expLocation}>
            <span style={styles.locationIcon} aria-hidden="true">📍</span>
            <span>{exp.location}</span>
          </span>
        )}
      </div>
      
      {exp.achievements.length > 0 && (
        <ul style={styles.expBullets}>
          {exp.achievements.map((bullet, i) => (
            <li key={i} style={styles.expBullet} itemProp="description">
              <span style={styles.bulletIcon} aria-hidden="true">•</span>
              <span style={styles.bulletText}>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      
      {exp.technologies.length > 0 && (
        <div style={styles.expTech} aria-label="Technologies used">
          {exp.technologies.map((tech, i) => (
            <span key={i} style={styles.techTag}>{tech}</span>
          ))}
        </div>
      )}
    </article>
  ), [styles]);

  // Education renderer - Institution and Location side by side
  const renderEducation = useCallback((edu, index) => (
    <div key={index} style={styles.eduItem} itemScope itemType="https://schema.org/EducationalOccupationalCredential">
      <header style={styles.eduHeader}>
        <div style={styles.eduTitleWrapper}>
          <h4 style={styles.eduDegree} itemProp="name">{edu.degree}</h4>
        </div>
        {/* Date - Fixed on the right side */}
        {edu.duration && (
          <time style={styles.eduDuration} itemProp="dateCreated">{edu.duration}</time>
        )}
      </header>
      
      {/* Institution and Location side by side - no dot separator */}
      <div style={styles.eduInstitutionLocation}>
        {edu.institution && (
          <span style={styles.eduInstitution} itemProp="provider">{edu.institution}</span>
        )}
        {edu.location && (
          <span style={styles.eduLocation}>
            <span style={styles.locationIcon} aria-hidden="true">📍</span>
            <span>{edu.location}</span>
          </span>
        )}
      </div>
      
      {(edu.gpa || edu.field) && (
        <div style={styles.eduMetaRow}>
          {edu.gpa && (
            <div style={styles.eduGpa}>
              <span>CGPA: {edu.gpa}</span>
            </div>
          )}
          {edu.field && (
            <div style={styles.eduField}>
              {edu.field}
            </div>
          )}
        </div>
      )}
      
      {edu.achievements.length > 0 && (
        <ul style={styles.eduBullets}>
          {edu.achievements.map((achievement, i) => (
            <li key={i} style={styles.eduBullet}>
              <span style={styles.bulletIcon} aria-hidden="true">•</span>
              <span style={styles.bulletText}>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  ), [styles]);

  const renderCertification = useCallback((cert, index) => {
    if (cert.canFitOneLine && cert.issuer && cert.date) {
      return (
        <div key={index} style={styles.certItem}>
          <div style={styles.certSingleLine}>
            <div style={styles.certTitleIssuer}>
              <span style={styles.certName}>{cert.name}</span>
              <span style={{ color: colors.textMuted, margin: '0 2px' }}>•</span>
              <span style={styles.certIssuer}>{cert.issuer}</span>
            </div>
            <span style={styles.certDate}>{cert.date}</span>
          </div>
        </div>
      );
    }
    
    return (
      <div key={index} style={styles.certItem}>
        <div style={styles.certMultiLine}>
          <div style={styles.certTitleRow}>
            <span style={styles.certName}>{cert.name}</span>
            {cert.date && <span style={styles.certDate}>{cert.date}</span>}
          </div>
          {(cert.issuer || cert.date) && (
            <div style={styles.certMetaRow}>
              {cert.issuer && <span>{cert.issuer}</span>}
            </div>
          )}
        </div>
      </div>
    );
  }, [styles, colors]);

  const renderAward = useCallback((award, index) => {
    return (
      <div key={index} style={styles.awardItem}>
        <div style={styles.awardSingleLine}>
          <div style={styles.awardTitleIssuer}>
            <span style={styles.awardName}>{award.title}</span>
            {award.issuer && (
              <>
                <span style={{ color: colors.textMuted, margin: '0 2px' }}>•</span>
                <span style={styles.awardIssuer}>{award.issuer}</span>
              </>
            )}
          </div>
          {award.date && <span style={styles.awardDate}>{award.date}</span>}
        </div>
      </div>
    );
  }, [styles, colors]);

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  return (
    <div 
      ref={templateRef} 
      style={styles.template}
      itemScope 
      itemType="https://schema.org/Person"
      data-template="Template9-ATS"
      data-version="3.14.0"
      role="document"
    >
      <header style={styles.header}>
        <h1 style={styles.name} itemProp="name">{data.personal.name || 'Your Name'}</h1>
        {data.personal.title && (
          <h2 style={styles.title} itemProp="jobTitle">{data.personal.title}</h2>
        )}
        {data.contacts.length > 0 && (
          <nav style={styles.contacts} aria-label="Contact information">
            {data.contacts.map(renderContact)}
          </nav>
        )}
      </header>

      <main style={styles.content}>
        
        {data.sections.summary && (
          <section style={styles.section} aria-labelledby="summary-heading">
            <h3 id="summary-heading" style={styles.sectionTitle}>Professional Summary</h3>
            <p style={styles.summary} itemProp="description">{data.summary}</p>
          </section>
        )}

        {data.sections.experience && (
          <section style={styles.section} aria-labelledby="experience-heading">
            <h3 id="experience-heading" style={styles.sectionTitle}>Professional Experience</h3>
            <div style={styles.expContainer}>
              {data.expList.map(renderExperience)}
            </div>
          </section>
        )}

        {data.sections.skills && (
          <section style={styles.section} aria-labelledby="skills-heading">
            <h3 id="skills-heading" style={styles.sectionTitle}>Core Skills</h3>
            {renderSkills()}
          </section>
        )}

        {data.sections.education && (
          <section style={styles.section} aria-labelledby="education-heading">
            <h3 id="education-heading" style={styles.sectionTitle}>Education</h3>
            <div style={styles.eduContainer}>
              {data.eduList.map(renderEducation)}
            </div>
          </section>
        )}

        {data.sections.certifications && (
          <section style={styles.section} aria-labelledby="certs-heading">
            <h3 id="certs-heading" style={styles.sectionTitle}>Certifications</h3>
            <div style={styles.certList}>
              {data.certList.map(renderCertification)}
            </div>
          </section>
        )}

        {data.sections.awards && (
          <section style={styles.section} aria-labelledby="awards-heading">
            <h3 id="awards-heading" style={styles.sectionTitle}>Awards & Recognition</h3>
            <div style={styles.awardList}>
              {data.awardList.map(renderAward)}
            </div>
          </section>
        )}

      </main>

      {isExporting && (
        <style>{`
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          a:hover {
            text-decoration: underline;
          }
          @media print {
            .template9-contact {
              background: none !important;
              padding: 2px 5px !important;
            }
          }
        `}</style>
      )}
    </div>
  );
};

// ============================================================================
// COMPONENT METADATA
// ============================================================================
Object.defineProperties(Template9, {
  displayName: { value: 'Template9', writable: false }
});

export default Object.freeze(Template9);