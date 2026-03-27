// ============================================
// components/templates/Template4.js 
// COMPLETE NEXT.JS COMPATIBLE VERSION WITH LOADING SPINNER
// WITH INLINE STYLES (CSS CONVERTED TO INLINE)
// LOCKED CONSTANTS - DO NOT MODIFY
// ADDED: Intelligent A4 sheet filling with dynamic spacing and fonts
// FIXED: Timeline markers with outer squares now appear in PDF
// UPDATED: Projects section with bullet points (removed description paragraph)
// UPDATED: Contact info wraps LinkedIn link, removed underline from project link, removed link icon, added location icon to education
// UPDATED: Constants - Experience limit 2, Projects limit 1, Certifications limit 1, Awards limit 1, Technologies limit 0
// FIXED: Experience connecting lines properly connected between circles
// UPDATED: Enhanced text contrast for better PDF rendering (MAXIMUM CONTRAST)
// UPDATED: Removed ultraCompact and base font configs, keeping only max and compact
// UPDATED: Added CGPA display to education location dynamically
// UPDATED: Reduced experience achievements to 3 max (from 4)
// UPDATED: Maximum contrast for all text (pure black on white for main content)
// UPDATED: Removed certifications section, moved education below skills
// UPDATED: Reduced all main content text sizes by 2px (except headings)
// UPDATED: Reduced achievement bullet points by additional 1px (total -3px from previous)
// UPDATED: Left sidebar content sizes unchanged
// UPDATED: Added certification section back below skills
// UPDATED: Reduced spacing between main sections (summary, experience, projects, education)
// UPDATED: Increased contact info, skills, certification text by 1px (better readability)
// UPDATED: Further reduced space between experience and projects, and between projects and education
// UPDATED: Moved projects and education sections slightly upward (reduced top margin)
// UPDATED: Removed debug code and eliminated space between headers and content boxes
// UPDATED: Added 9px space between summary, experience, projects, and education sections
// UPDATED: Removed professional title from display
// UPDATED: Reduced skills limit to 6, added awards below certifications
// UPDATED: Removed borders from dates and CGPA, removed CGPA icon
// UPDATED: LinkedIn optimization like Template1 - "in" icon in blue color, shows username instead of full URL
// FIXED: Runtime error - styles initialization order
// UPDATED: Font family changed to Calibri (matching Template1)
// UPDATED: Increased font sizes by 2px for summary, bullet points, and contact info
// ============================================

import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { useResume } from '../../context/ResumeContext';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner';

// ===== FONT SIZE CONFIGURATION - Scales based on available space =====
const FONT_CONFIG = Object.freeze({
  // Maximum sizes when plenty of space
  max: {
    body: 14,
    name: 38,
    title: 18,
    sectionTitle: 18,
    cardTitle: 16,
    cardSubtitle: 15,
    smallText: 13,
    tinyText: 12,
    contactText: 13,
    skillText: 14,
    period: 13,
    lineHeight: 1.6
  },
  // Compact when tight
  compact: {
    body: 11,
    name: 28,
    title: 14,
    sectionTitle: 15,
    cardTitle: 14,
    cardSubtitle: 12,
    smallText: 11,
    tinyText: 10,
    contactText: 11,
    skillText: 12,
    period: 11,
    lineHeight: 1.4
  }
});

// ===== SPACING CONFIGURATION - For A4 optimization =====
const SPACING_CONFIG = Object.freeze({
  // Spacious layout for minimal content
  spacious: {
    sidebarPadding: '28px 20px',
    mainPadding: '28px 30px',
    sectionGap: '28px',
    itemGap: '18px',
    cardPadding: '18px',
    contactPadding: '10px 12px',
    skillPadding: '10px 12px',
    certPadding: '14px',
    awardPadding: '14px',
    timelineLeftOffset: '24px',
    bulletSpacing: '8px',
    headerMarginBottom: '10px',
    summaryMarginBottom: '28px',
    timelineMarginBottom: '24px'
  },
  // Default layout
  default: {
    sidebarPadding: '20px 15px',
    mainPadding: '20px 25px',
    sectionGap: '24px',
    itemGap: '14px',
    cardPadding: '15px',
    contactPadding: '8px 10px',
    skillPadding: '8px 10px',
    certPadding: '12px',
    awardPadding: '12px',
    timelineLeftOffset: '20px',
    bulletSpacing: '6px',
    headerMarginBottom: '8px',
    summaryMarginBottom: '24px',
    timelineMarginBottom: '20px'
  },
  // Compact when tight
  compact: {
    sidebarPadding: '15px 12px',
    mainPadding: '15px 20px',
    sectionGap: '18px',
    itemGap: '10px',
    cardPadding: '12px',
    contactPadding: '6px 8px',
    skillPadding: '6px 8px',
    certPadding: '10px',
    awardPadding: '10px',
    timelineLeftOffset: '18px',
    bulletSpacing: '4px',
    headerMarginBottom: '6px',
    summaryMarginBottom: '18px',
    timelineMarginBottom: '16px'
  }
});

// ===== TEMPLATE4 SPECIFIC CONSTANTS - LOCKED VALUES =====
const TEMPLATE4_CONSTANTS = Object.freeze({
  EXPERIENCE_LIMIT: 2,           // Maximum number of experience entries (work only)
  SKILLS_LIMIT: 6,               // REDUCED FROM 8 TO 6 - Maximum number of skills
  EDUCATION_LIMIT: 1,            // Maximum number of education entries (only 1)
  PROJECTS_LIMIT: 1,             // Maximum number of projects
  CERTIFICATIONS_LIMIT: 1,       // Maximum number of certifications
  AWARDS_LIMIT: 1,               // ADDED - Maximum number of awards
  BULLET_POINTS_PER_EXPERIENCE: 3, // Maximum bullet points per experience
  BULLET_POINTS_PER_PROJECT: 3,   // Maximum bullet points per project
  MAX_BULLET_LENGTH: 140,        // Maximum characters per bullet point
  MAX_DESCRIPTION_LENGTH: 0,   // Maximum characters for experience description
  MAX_SUMMARY_LENGTH: 300,       // Maximum characters for professional summary
  CONTACT_LIMIT: 4,              // Maximum number of contact items
  TECHNOLOGIES_LIMIT: 0          // Maximum number of technologies per experience
});

// ===== ICON MAPPING - LinkedIn "in" icon in blue like Template1 =====
const ICON_MAPPING = Object.freeze({
  email: 'âœ‰ï¸',
  phone: 'ðŸ“ž',
  address: 'ðŸ“',
  linkedin: { icon: 'in', color: '#0077b5' },  // LinkedIn "in" icon with blue color
  github: 'ðŸ™',
  portfolio: 'ðŸŒ',
  default: 'ðŸ“Œ'
});

// ===== COLOR SCHEMES with MAXIMUM CONTRAST for PDF =====
const COLOR_SCHEMES = Object.freeze({
  blue: {
    primary: '#003399', // Even darker blue for maximum contrast
    secondary: '#0066AA', // Darker teal
    dark: '#0A1A2A', // Darker navy
    card: '#1A2A3A', // Darker card background
    text: '#FFFFFF', // White text for dark backgrounds
    textMuted: '#F0F0F0', // Very light gray for muted text
    textDark: '#000000', // Pure black text for light backgrounds
    accent: '#002277' // Darker accent
  },
  green: {
    primary: '#036B46', // Darker green
    secondary: '#0B7B6F', // Darker teal
    dark: '#052814', // Darker green
    card: '#065F46', // Darker card
    text: '#FFFFFF',
    textMuted: '#F0F0F0',
    textDark: '#000000',
    accent: '#024530'
  },
  purple: {
    primary: '#5B1698', // Darker purple
    secondary: '#6E1AB8', // Darker purple
    dark: '#1A0B2E', // Darker purple
    card: '#4C1D95', // Darker card
    text: '#FFFFFF',
    textMuted: '#F0F0F0',
    textDark: '#000000',
    accent: '#4A137A'
  },
  orange: {
    primary: '#B23B0A', // Darker orange
    secondary: '#D4510A', // Darker orange
    dark: '#3B1C06', // Darker orange
    card: '#9A3412', // Darker card
    text: '#FFFFFF',
    textMuted: '#F0F0F0',
    textDark: '#000000',
    accent: '#9A2F0A'
  }
});

// Helper functions - Immutable
const TemplateHelpers = Object.freeze({
  safeString: (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return (
        value.name || value.language || value.text || value.title || 
        value.position || value.company || value.degree || 
        value.institution || value.description || ''
      );
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
    
    if (/^\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      }
    } catch {}
    
    return dateString;
  },

  getItemName: (item) => {
    if (typeof item === 'object') return item.name || '';
    return TemplateHelpers.safeString(item);
  },

  cleanBullet: (bullet) => {
    let cleaned = TemplateHelpers.safeString(bullet);
    cleaned = cleaned.replace(/^[â€¢\*\-]\s*/, '');
    cleaned = cleaned.replace(/\.\.+/g, '.');
    return cleaned;
  },

  // Format GPA for display
  formatGPA: (gpa, scale) => {
    if (!gpa) return null;
    const gpaValue = TemplateHelpers.safeString(gpa);
    if (!gpaValue) return null;
    
    if (scale) {
      const scaleValue = TemplateHelpers.safeString(scale);
      return `GPA: ${gpaValue}/${scaleValue}`;
    }
    
    // Try to detect scale from GPA format
    if (gpaValue.includes('/')) {
      return `GPA: ${gpaValue}`;
    }
    
    // Assume 4.0 scale by default
    return `GPA: ${gpaValue}/4.0`;
  },

  // ===== LINK FORMATTING FUNCTIONS (like Template1) =====
  formatLinkedInLink: (linkedin) => {
    if (!linkedin) return null;
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin).trim();
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
  },

  formatLinkedInDisplay: (linkedin) => {
    if (!linkedin) return '';
    
    let linkedinUrl = TemplateHelpers.safeString(linkedin);
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
  },

  formatGitHubLink: (github) => {
    if (!github) return null;
    
    let githubUrl = TemplateHelpers.safeString(github).trim();
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
    
    let displayValue = TemplateHelpers.safeString(github)
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
    
    let portfolioUrl = TemplateHelpers.safeString(portfolio).trim();
    
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
    
    if (displayValue.length > 30) {
      displayValue = displayValue.substring(0, 27) + '...';
    }
    
    return displayValue || 'Portfolio';
  },

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

  getContactIcon: (type) => {
    const iconConfig = ICON_MAPPING[type] || ICON_MAPPING.default;
    // If it's an object with icon and color, return the icon
    if (typeof iconConfig === 'object' && iconConfig.icon) {
      return iconConfig.icon;
    }
    return iconConfig;
  },

  getContactIconColor: (type) => {
    const iconConfig = ICON_MAPPING[type];
    if (typeof iconConfig === 'object' && iconConfig.color) {
      return iconConfig.color;
    }
    return null;
  },

  truncateLink: (link, maxLength = 40) => {
    const formatted = TemplateHelpers.safeString(link);
    if (formatted.length <= maxLength) return formatted;
    
    const start = formatted.substring(0, 20);
    const end = formatted.substring(formatted.length - 15);
    return `${start}...${end}`;
  },

  // Calculate content density for spacing optimization
  calculateContentDensity: (contentAnalysis) => {
    let score = 0;
    let itemCount = 0;
    
    // Count active sections
    if (contentAnalysis.limitedSummary) {
      score += 2;
      itemCount += 1;
    }
    if (contentAnalysis.limitedExperiences.length > 0) {
      score += 3;
      itemCount += contentAnalysis.limitedExperiences.length;
    }
    if (contentAnalysis.limitedEducation) {
      score += 2;
      itemCount += 1;
    }
    if (contentAnalysis.limitedSkills.length > 0) {
      score += 2;
      itemCount += contentAnalysis.limitedSkills.length;
    }
    if (contentAnalysis.limitedProjects.length > 0) {
      score += 1;
      itemCount += 1;
    }
    if (contentAnalysis.limitedCertifications.length > 0) {
      score += 1;
      itemCount += contentAnalysis.limitedCertifications.length;
    }
    if (contentAnalysis.limitedAwards.length > 0) {
      score += 1;
      itemCount += contentAnalysis.limitedAwards.length;
    }
    
    return { score, itemCount };
  },

  // Calculate optimal spacing and font to fill A4 perfectly
  getOptimalConfigs: (contentHeight, targetHeight = 1123, densityScore, itemCount) => {
    const ratio = contentHeight / targetHeight;
    
    // If content is less than target, we need to expand
    if (ratio < 1) {
      // Calculate how much expansion we need (max 1.4x)
      const expansionFactor = Math.min(1.4, 1 / ratio);
      
      // Very little content - use spacious layout with increased fonts
      if (ratio < 0.6) {
        return {
          spacing: SPACING_CONFIG.spacious,
          fonts: {
            ...FONT_CONFIG.max,
            name: Math.min(44, Math.round(FONT_CONFIG.max.name * expansionFactor)),
            body: Math.min(16, Math.round(FONT_CONFIG.max.body * expansionFactor))
          }
        };
      } 
      // Moderate content - use default with increased fonts
      else if (ratio < 0.8) {
        return {
          spacing: SPACING_CONFIG.default,
          fonts: {
            ...FONT_CONFIG.max,
            name: Math.min(38, Math.round(FONT_CONFIG.max.name * expansionFactor * 0.9)),
            body: Math.min(14, Math.round(FONT_CONFIG.max.body * expansionFactor))
          }
        };
      } 
      // Slightly less than full - use default with slight font increase
      else {
        return {
          spacing: SPACING_CONFIG.default,
          fonts: {
            ...FONT_CONFIG.max,
            name: Math.min(34, Math.round(FONT_CONFIG.max.name * 1.05)),
            body: Math.min(13, Math.round(FONT_CONFIG.max.body * 1.1))
          }
        };
      }
    }
    
    // Content exceeds target, need to compress
    if (ratio >= 1.2) {
      // Too much content - use compact
      return {
        spacing: SPACING_CONFIG.compact,
        fonts: FONT_CONFIG.compact
      };
    } else if (ratio >= 1) {
      // Slightly over - use compact
      return {
        spacing: SPACING_CONFIG.compact,
        fonts: FONT_CONFIG.compact
      };
    }
    
    // Default case
    return {
      spacing: SPACING_CONFIG.default,
      fonts: FONT_CONFIG.max
    };
  }
});

// ===== INLINE STYLES with MAXIMUM CONTRAST for PDF and CALIBRI FONT =====
const createStyles = (colorScheme = 'blue', isATS = false, accessibilityMode = false, spacing = SPACING_CONFIG.default, fonts = FONT_CONFIG.max) => {
  const colors = COLOR_SCHEMES[colorScheme] || COLOR_SCHEMES.blue;
  
  // ATS mode overrides with enhanced contrast
  const sidebarBg = isATS 
    ? '#1a2634' // Even darker solid color for ATS
    : `linear-gradient(135deg, ${colors.dark} 0%, ${colors.card} 100%)`;
  
  const sidebarTextColor = isATS ? '#ffffff' : colors.text;
  const contactBg = isATS ? '#2c3e50' : 'rgba(255, 255, 255, 0.2)';
  const contactBorder = isATS ? '#4a5568' : 'rgba(255, 255, 255, 0.3)';
  const skillBg = isATS ? '#2c3e50' : 'rgba(255, 255, 255, 0.2)';
  const skillBorder = isATS ? '#4a5568' : 'rgba(255, 255, 255, 0.3)';
  
  // MAXIMUM CONTRAST colors for main content
  const mainTextColor = '#000000'; // PURE BLACK for maximum contrast
  const mainMutedColor = '#1a1a1a'; // Very dark gray for secondary text (almost black)
  const mainBorderColor = '#cccccc'; // Light gray for borders
  const primaryColor = colors.primary; // Keep primary color but ensure it's dark enough

  // LEFT SIDEBAR - INCREASED BY 1PX for better readability
  const sidebarContactTextSize = Math.round(fonts.contactText) + 1;
  const sidebarSkillTextSize = Math.round(fonts.skillText) + 1;
  const sidebarCertTextSize = Math.round(fonts.cardSubtitle) + 1;
  const sidebarCertIssuerSize = Math.round(fonts.smallText) + 1;
  const sidebarCertDateSize = Math.round(fonts.tinyText) + 1;
  const sidebarAwardTextSize = Math.round(fonts.cardSubtitle) + 1;
  const sidebarAwardIssuerSize = Math.round(fonts.smallText) + 1;
  const sidebarAwardDateSize = Math.round(fonts.tinyText) + 1;
  
  // MAIN CONTENT - INCREASED BY 2PX for summary, bullet points, and contact info
  const enhancedSectionTitleSize = Math.round(fonts.sectionTitle) + 2;
  const mainBodySize = Math.round(fonts.body) + 4; // Increased by +2px (total +2 from previous)
  const bulletPointSize = Math.round(fonts.smallText) + 3; // Increased by +2px (total +2 from previous)
  const tinyTextSize = Math.round(fonts.tinyText);
  const mainTitleSize = Math.round(fonts.cardTitle) + 3;
  const mainSubtitleSize = Math.round(fonts.cardSubtitle) + 3;
  const periodSize = Math.round(fonts.period) + 1;
  
  // Contact info font size - increased by +2px
  const contactTextSize = Math.round(fonts.contactText) + 3; // Increased by +2px (total +2 from previous)
  const contactIconSize = Math.round(fonts.contactText) + 3; // Increased by +2px (total +2 from previous)

  // 9px spacing between all sections
  const sectionSpacing = '9px';
  
  // Reduced margins for timeline items
  const reducedItemMargin = Math.round(parseInt(spacing.itemGap) * 0.3) + 'px';
  const reducedTimelineMargin = '2px';

  // CALIBRI FONT FAMILY (matching Template1)
  const fontFamily = '"Calibri", "Arial", "Helvetica", sans-serif';
  const fontFamilySerif = '"Calibri", "Arial", "Helvetica", sans-serif';

  return {
    // Base template
    template: {
      fontFamily: fontFamily,
      lineHeight: fonts.lineHeight,
      color: mainTextColor,
      maxWidth: '210mm',
      minHeight: '297mm',
      background: '#ffffff',
      display: 'flex',
      boxShadow: isATS ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.08)',
      borderRadius: 0,
      overflow: 'hidden',
      position: 'relative',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      perspective: 1000,
      willChange: 'auto',
      margin: '0 auto',
      animation: 'none',
      transition: 'none'
    },

    // Sidebar
    sidebar: {
      width: '32%',
      background: sidebarBg,
      color: sidebarTextColor,
      padding: spacing.sidebarPadding,
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },

    // Main content
    mainContent: {
      flex: 1,
      padding: spacing.mainPadding,
      background: '#ffffff',
      color: mainTextColor
    },

    // Profile photo - 180px
    profilePhoto: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto 15px auto',
      border: '3px solid rgba(255, 255, 255, 0.3)',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },

    profilePhotoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },

    // Personal details
    personalDetails: {
      textAlign: 'center',
      marginBottom: '15px'
    },

    name: {
      margin: '0 0 8px 0',
      fontSize: `${fonts.name}px`,
      fontWeight: 800,
      color: sidebarTextColor,
      letterSpacing: '0.5px',
      lineHeight: 1.1,
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      hyphens: 'auto',
      fontFamily: fontFamily,
      textShadow: isATS ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
    },

    // Section heading
    sectionHeading: {
      margin: `0 0 2px 0`,
      paddingBottom: '4px',
      borderBottom: '2px solid',
      position: 'relative',
      display: 'block',
      textAlign: 'left'
    },

    sidebarSectionHeading: {
      borderBottomColor: isATS ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'
    },

    mainSectionHeading: {
      borderBottomColor: primaryColor
    },

    sectionTitle: {
      fontSize: `${enhancedSectionTitleSize}px`,
      fontWeight: 800,
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      lineHeight: 1.1,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: fontFamily,
      textAlign: 'left',
      color: isATS ? '#ffffff' : sidebarTextColor
    },

    mainSectionTitle: {
      color: mainTextColor,
      fontWeight: 800
    },

    sectionIcon: {
      fontSize: `${fonts.smallText}px`,
      color: primaryColor,
      fontWeight: 'bold'
    },

    // Contact info - WITH LINKEDIN OPTIMIZATION AND INCREASED FONT SIZE (+2px)
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.itemGap,
      marginTop: '4px'
    },

    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      fontSize: `${contactTextSize}px`, // Increased by +2px
      padding: spacing.contactPadding,
      lineHeight: 1.3,
      background: contactBg,
      borderRadius: '5px',
      border: `1px solid ${contactBorder}`,
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      hyphens: 'auto',
      fontFamily: fontFamily,
      textAlign: 'left',
      color: sidebarTextColor,
      textDecoration: 'none'
    },

    contactIcon: {
      fontSize: `${contactIconSize}px`, // Increased by +2px
      width: '18px',
      textAlign: 'center',
      opacity: 1,
      flexShrink: 0,
      marginTop: '1px',
      color: sidebarTextColor
    },

    contactText: {
      fontWeight: 600,
      color: sidebarTextColor,
      lineHeight: 1.3,
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      flex: 1,
      fontSize: `${contactTextSize}px`, // Increased by +2px
      fontFamily: fontFamily,
      textAlign: 'left',
      whiteSpace: 'normal'
    },

    // Skills
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.itemGap,
      marginTop: '4px'
    },

    skillItem: {
      background: skillBg,
      color: sidebarTextColor,
      padding: spacing.skillPadding,
      borderRadius: '5px',
      fontSize: `${sidebarSkillTextSize}px`,
      border: `1px solid ${skillBorder}`,
      textAlign: 'left',
      fontWeight: 700,
      wordWrap: 'break-word',
      lineHeight: 1.3,
      fontFamily: fontFamily
    },

    skillText: {
      wordWrap: 'break-word',
      hyphens: 'auto',
      textAlign: 'left',
      fontSize: `${sidebarSkillTextSize}px`,
      color: sidebarTextColor,
      fontWeight: 700
    },

    // Certifications sidebar
    certificationsSidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.itemGap,
      marginTop: '4px'
    },

    certificationItem: {
      background: contactBg,
      padding: spacing.certPadding,
      borderRadius: '5px',
      border: `1px solid ${contactBorder}`,
      color: sidebarTextColor,
      wordWrap: 'break-word'
    },

    certificationName: {
      fontSize: `${sidebarCertTextSize}px`,
      fontWeight: 800,
      lineHeight: 1.3,
      margin: 0,
      color: sidebarTextColor,
      fontFamily: fontFamily,
      marginBottom: '4px'
    },

    certificationIssuer: {
      fontSize: `${sidebarCertIssuerSize}px`,
      color: isATS ? '#f0f0f0' : colors.textMuted,
      marginBottom: '2px',
      fontWeight: 700,
      lineHeight: 1.3
    },

    certificationDate: {
      fontSize: `${sidebarCertDateSize}px`,
      color: isATS ? '#e0e0e0' : 'rgba(255, 255, 255, 0.95)',
      fontWeight: 600,
      lineHeight: 1.3
    },

    // Awards sidebar
    awardsSidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.itemGap,
      marginTop: '4px'
    },

    awardItem: {
      background: contactBg,
      padding: spacing.awardPadding,
      borderRadius: '5px',
      border: `1px solid ${contactBorder}`,
      color: sidebarTextColor,
      wordWrap: 'break-word'
    },

    awardTitle: {
      fontSize: `${sidebarAwardTextSize}px`,
      fontWeight: 800,
      lineHeight: 1.3,
      margin: 0,
      color: sidebarTextColor,
      fontFamily: fontFamily,
      marginBottom: '4px'
    },

    awardIssuer: {
      fontSize: `${sidebarAwardIssuerSize}px`,
      color: isATS ? '#f0f0f0' : colors.textMuted,
      marginBottom: '2px',
      fontWeight: 700,
      lineHeight: 1.3
    },

    awardDate: {
      fontSize: `${sidebarAwardDateSize}px`,
      color: isATS ? '#e0e0e0' : 'rgba(255, 255, 255, 0.95)',
      fontWeight: 600,
      lineHeight: 1.3
    },

    // Experience timeline
    experienceTimeline: {
      position: 'relative',
      paddingLeft: spacing.timelineLeftOffset,
      marginTop: '4px',
      marginBottom: reducedTimelineMargin
    },

    timelineBefore: {
      content: '""',
      position: 'absolute',
      left: '7.5px',
      top: '18px',
      bottom: '4px',
      width: '2px',
      background: primaryColor,
      borderRadius: 0,
      zIndex: 1
    },

    timelineItem: {
      position: 'relative',
      marginBottom: reducedItemMargin,
      background: '#f8f9fa',
      padding: spacing.cardPadding,
      borderRadius: '6px',
      wordWrap: 'break-word',
      marginLeft: 0,
      width: '100%',
      minHeight: '30px',
      border: '1px solid #b0b0b0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      borderLeft: `3px solid ${primaryColor}`
    },

    timelineConnector: {
      position: 'absolute',
      left: `-${spacing.timelineLeftOffset}`,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: spacing.timelineLeftOffset
    },

    connectorDot: {
      width: '14px',
      height: '14px',
      background: `radial-gradient(circle at center, ${primaryColor} 40%, transparent 40%), linear-gradient(white, white)`,
      borderRadius: '50%',
      border: `2px solid ${primaryColor}`,
      position: 'relative',
      zIndex: 3,
      flexShrink: 0,
      marginTop: '18px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },

    connectorLine: {
      flex: 1,
      width: '2px',
      background: primaryColor,
      margin: 0,
      minHeight: '20px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact'
    },

    lastConnectorLine: {
      flex: 1,
      width: '2px',
      background: primaryColor,
      margin: 0,
      minHeight: '20px',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
      opacity: 0
    },

    timelineContent: {
      width: '100%'
    },

    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: spacing.bulletSpacing,
      gap: '10px',
      flexWrap: 'wrap'
    },

    experienceMain: {
      flex: 1,
      textAlign: 'left',
      minWidth: '60%'
    },

    position: {
      margin: 0,
      fontSize: `${mainTitleSize}px`,
      fontWeight: 800,
      color: mainTextColor,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      fontFamily: fontFamily,
      textAlign: 'left'
    },

    companyInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      flexWrap: 'wrap',
      marginTop: '2px'
    },

    companyName: {
      fontWeight: 800,
      color: primaryColor,
      fontSize: `${mainSubtitleSize}px`,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      fontFamily: fontFamily,
      textAlign: 'left'
    },

    companyLocation: {
      fontSize: `${tinyTextSize}px`,
      color: mainMutedColor,
      fontFamily: fontFamily,
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      fontWeight: 600
    },

    locationSeparator: {
      margin: '0 4px',
      color: '#606060'
    },

    period: {
      fontSize: `${periodSize}px`,
      color: mainTextColor,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontFamily: fontFamily,
      background: 'transparent',
      padding: '0',
      border: 'none',
      borderRadius: '0'
    },

    descriptionSection: {
      marginTop: spacing.bulletSpacing,
      paddingTop: spacing.bulletSpacing,
      borderTop: `1px solid ${mainBorderColor}`,
      textAlign: 'left'
    },

    descriptionList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.bulletSpacing
    },

    descriptionItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing.bulletSpacing,
      fontSize: `${bulletPointSize}px`, // Increased by +2px
      color: mainTextColor,
      lineHeight: fonts.lineHeight,
      wordWrap: 'break-word',
      fontFamily: fontFamily
    },

    descriptionBullet: {
      color: primaryColor,
      fontWeight: 'bold',
      flexShrink: 0,
      marginTop: '1px',
      fontSize: `${bulletPointSize}px` // Increased by +2px
    },

    descriptionText: {
      flex: 1,
      fontWeight: 600,
      wordWrap: 'break-word',
      lineHeight: fonts.lineHeight,
      maxWidth: '100%',
      fontFamily: fontFamily,
      textAlign: 'left',
      color: mainTextColor,
      fontSize: `${bulletPointSize}px` // Increased by +2px
    },

    phraseSection: {
      marginTop: spacing.bulletSpacing,
      padding: spacing.cardPadding,
      background: 'linear-gradient(135deg, rgba(240, 245, 250, 0.95) 0%, rgba(220, 230, 240, 0.95) 100%)',
      borderRadius: '6px',
      borderLeft: `4px solid ${primaryColor}`,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      textAlign: 'left'
    },

    phraseDescription: {
      margin: 0,
      fontSize: `${bulletPointSize}px`, // Increased by +2px
      color: mainTextColor,
      lineHeight: fonts.lineHeight,
      textAlign: 'left',
      fontWeight: 600,
      wordWrap: 'break-word',
      fontFamily: fontFamily
    },

    experienceTechnologiesInline: {
      display: 'none'
    },

    technologiesLabel: {
      display: 'none'
    },

    techTagsInline: {
      display: 'none'
    },

    techTagInline: {
      display: 'none'
    },

    summaryText: {
      fontSize: `${mainBodySize}px`, // Increased by +2px
      lineHeight: fonts.lineHeight,
      color: mainTextColor,
      margin: '4px 0 0 0',
      textAlign: 'left',
      fontWeight: 600,
      wordWrap: 'break-word',
      fontFamily: fontFamilySerif,
      padding: spacing.cardPadding,
      background: '#f8f9fa',
      borderRadius: '5px',
      borderLeft: `3px solid ${primaryColor}`,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)'
    },

    projectsTimeline: {
      position: 'relative',
      paddingLeft: spacing.timelineLeftOffset,
      marginTop: '4px',
      marginBottom: reducedTimelineMargin
    },

    projectTimelineBefore: {
      content: '""',
      position: 'absolute',
      left: '7.5px',
      top: '18px',
      bottom: '4px',
      width: '2px',
      background: primaryColor,
      borderRadius: 0,
      zIndex: 1
    },

    projectItem: {
      position: 'relative',
      marginBottom: reducedItemMargin,
      background: '#f8f9fa',
      padding: spacing.cardPadding,
      borderRadius: '6px',
      wordWrap: 'break-word',
      marginLeft: 0,
      width: '100%',
      minHeight: '30px',
      border: '1px solid #b0b0b0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      borderLeft: `3px solid ${primaryColor}`
    },

    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: spacing.bulletSpacing,
      gap: '10px',
      flexWrap: 'wrap'
    },

    projectTitleSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flex: 1
    },

    projectMain: {
      flex: 1,
      textAlign: 'left',
      minWidth: '60%'
    },

    projectTitle: {
      margin: '0 0 4px 0',
      fontSize: `${mainTitleSize}px`,
      fontWeight: 800,
      color: mainTextColor,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      fontFamily: fontFamily,
      textAlign: 'left'
    },

    projectRole: {
      fontWeight: 700,
      color: primaryColor,
      fontSize: `${mainSubtitleSize}px`,
      lineHeight: 1.2,
      wordWrap: 'break-word',
      fontFamily: fontFamily,
      textAlign: 'left'
    },

    projectBulletPointsSection: {
      marginTop: spacing.bulletSpacing,
      paddingTop: spacing.bulletSpacing,
      borderTop: `1px solid ${mainBorderColor}`,
      textAlign: 'left'
    },

    projectBulletList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.bulletSpacing
    },

    projectBulletItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing.bulletSpacing,
      fontSize: `${bulletPointSize}px`, // Increased by +2px
      color: mainTextColor,
      lineHeight: fonts.lineHeight,
      wordWrap: 'break-word',
      fontFamily: fontFamily
    },

    projectBullet: {
      color: primaryColor,
      fontWeight: 'bold',
      flexShrink: 0,
      marginTop: '1px',
      fontSize: `${bulletPointSize}px` // Increased by +2px
    },

    projectBulletText: {
      flex: 1,
      fontWeight: 600,
      wordWrap: 'break-word',
      lineHeight: fonts.lineHeight,
      maxWidth: '100%',
      fontFamily: fontFamily,
      textAlign: 'left',
      color: mainTextColor,
      fontSize: `${bulletPointSize}px` // Increased by +2px
    },

    projectLinkContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: spacing.bulletSpacing,
      fontSize: `${tinyTextSize}px`,
      fontFamily: fontFamily,
      padding: '6px 0'
    },

    projectLinkLabel: {
      fontWeight: 800,
      color: mainTextColor,
      whiteSpace: 'nowrap'
    },

    projectLinkValue: {
      color: primaryColor,
      textDecoration: 'none',
      opacity: 1,
      wordBreak: 'break-all',
      transition: 'opacity 0.2s',
      fontSize: `${tinyTextSize}px`,
      fontWeight: 700
    },

    educationLocationWithIcon: {
      fontSize: `${tinyTextSize}px`,
      color: mainMutedColor,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginTop: '2px',
      flexWrap: 'wrap'
    },

    gpaDisplay: {
      fontSize: `${tinyTextSize}px`,
      color: mainTextColor,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      background: 'transparent',
      padding: '0',
      border: 'none',
      borderRadius: '0'
    },

    mainSection: {
      marginBottom: sectionSpacing,
      position: 'relative'
    },
    
    minimalGapSection: {
      marginBottom: sectionSpacing,
      position: 'relative'
    },

    sidebarSection: {
      marginBottom: spacing.sectionGap
    },

    // Mobile responsive styles
    mobileStyles: {
      template: {
        flexDirection: 'column'
      },
      sidebar: {
        width: '100%',
        padding: '15px 12px'
      },
      mainContent: {
        padding: '15px 12px'
      },
      profilePhoto: {
        width: '150px',
        height: '150px'
      },
      name: {
        fontSize: '28px'
      },
      experienceHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px'
      },
      projectHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px'
      },
      experienceMain: {
        minWidth: '100%'
      },
      projectMain: {
        minWidth: '100%'
      },
      companyInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px'
      },
      projectRole: {
        marginBottom: '2px'
      },
      locationSeparator: {
        display: 'none'
      },
      companyLocation: {
        marginLeft: 0
      },
      educationHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px'
      },
      educationInstitution: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px'
      },
      sectionTitle: {
        fontSize: '17px'
      },
      contactItem: {
        padding: '6px 8px',
        fontSize: '13px'
      },
      skillItem: {
        padding: '6px 8px',
        fontSize: '13px'
      },
      certificationItem: {
        padding: '10px'
      },
      certificationName: {
        fontSize: '13px'
      },
      certificationIssuer: {
        fontSize: '11px'
      },
      certificationDate: {
        fontSize: '10px'
      },
      awardItem: {
        padding: '10px'
      },
      awardTitle: {
        fontSize: '13px'
      },
      awardIssuer: {
        fontSize: '11px'
      },
      awardDate: {
        fontSize: '10px'
      },
      descriptionItem: {
        fontSize: '16px', // Increased for mobile (+2px)
        gap: '4px'
      },
      timelineItem: {
        marginBottom: '8px',
        padding: '12px'
      },
      projectItem: {
        marginBottom: '8px',
        padding: '12px'
      },
      experienceTimeline: {
        paddingLeft: '18px',
        marginBottom: '2px'
      },
      projectsTimeline: {
        paddingLeft: '18px',
        marginBottom: '2px'
      },
      timelineBefore: {
        left: '6.5px'
      },
      projectTimelineBefore: {
        left: '6.5px'
      },
      timelineMarker: {
        left: '-16px',
        width: '10px',
        height: '10px'
      },
      descriptionList: {
        gap: '3px'
      },
      projectBulletList: {
        gap: '3px'
      },
      projectBulletItem: {
        fontSize: '16px', // Increased for mobile (+2px)
        gap: '4px'
      },
      position: {
        fontSize: '15px'
      },
      companyName: {
        fontSize: '14px'
      },
      projectTitle: {
        fontSize: '15px'
      },
      projectRole: {
        fontSize: '14px'
      },
      projectLinkContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '4px'
      },
      educationLocationWithIcon: {
        fontSize: '10px',
        gap: '2px'
      }
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
};

// Template4 Component
const Template4 = ({ 
  isExporting = false,
  colorScheme = 'blue',
  industry = 'tech',
  isATS = false,
  accessibilityMode = false,
  personalInfo = {}, 
  education = [], 
  experience = [], 
  skills = [], 
  professionalSummary = '',
  projects = [],
  certifications = [],
  awards = [],
  ...props 
}) => {
  
  const templateRef = useRef();
  const contextData = useResume();
  
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [contentHeight, setContentHeight] = useState(0);
  const [spacingConfig, setSpacingConfig] = useState(SPACING_CONFIG.default);
  const [fontConfig, setFontConfig] = useState(FONT_CONFIG.max);
  const [hoverStates, setHoverStates] = useState({
    contact: null,
    skill: null,
    experience: null,
    project: null,
    certification: null,
    award: null
  });

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simulate loading template data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Resume data from context or props
  const resumeData = useMemo(() => {
    if (personalInfo && Object.keys(personalInfo).length > 0) {
      return { personalInfo, education, experience, skills, professionalSummary, projects, certifications, awards };
    }
    return contextData.state;
  }, [personalInfo, education, experience, skills, professionalSummary, projects, certifications, awards, contextData.state]);

  const { 
    personalInfo: contextPersonalInfo, 
    education: contextEducation, 
    experience: contextExperience, 
    skills: contextSkills, 
    professionalSummary: contextProfessionalSummary,
    projects: contextProjects,
    certifications: contextCertifications,
    awards: contextAwards
  } = resumeData;

  // ===== HELPER FUNCTIONS =====
  const getSafeText = useCallback((item) => {
    return TemplateHelpers.safeString(item);
  }, []);

  const safeArray = useCallback((data) => {
    return TemplateHelpers.safeArray(data);
  }, []);

  const formatDate = useCallback((dateString) => {
    return TemplateHelpers.formatDate(dateString);
  }, []);

  const formatGPA = useCallback((gpa, scale) => {
    return TemplateHelpers.formatGPA(gpa, scale);
  }, []);

  // Create styles FIRST before using them
  const styles = useMemo(() => createStyles(colorScheme, isATS, accessibilityMode, spacingConfig, fontConfig), 
    [colorScheme, isATS, accessibilityMode, spacingConfig, fontConfig]);

  // ===== CONTACT INFO WITH LINKEDIN OPTIMIZATION (like Template1) =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    
    const addContact = (value, key) => {
      if (value && getSafeText(value)) {
        const type = TemplateHelpers.getContactType(key);
        const link = TemplateHelpers.getContactLink(type, value);
        const displayValue = TemplateHelpers.getContactDisplayValue(type, value);
        const icon = TemplateHelpers.getContactIcon(type);
        const iconColor = TemplateHelpers.getContactIconColor(type);
        
        contacts.push(Object.freeze({ 
          originalValue: getSafeText(value),
          value: displayValue,
          displayValue: displayValue,
          type, 
          icon,
          iconColor,
          link
        }));
      }
    };

    addContact(contextPersonalInfo?.email, 'email');
    addContact(contextPersonalInfo?.phone, 'phone');
    addContact(contextPersonalInfo?.address, 'address');
    addContact(contextPersonalInfo?.linkedin, 'linkedin');
    addContact(contextPersonalInfo?.github, 'github');
    addContact(contextPersonalInfo?.portfolio, 'portfolio');

    return Object.freeze(contacts.slice(0, TEMPLATE4_CONSTANTS.CONTACT_LIMIT));
  }, [contextPersonalInfo, getSafeText]);

  // ===== RENDER CONTACT ITEM WITH LINKEDIN OPTIMIZATION (like Template1) =====
  const renderContactItem = useCallback((contact, index) => {
    const isHovered = hoverStates.contact === index;
    const isLinkedIn = contact.type === 'linkedin';
    
    // Get icon color for LinkedIn (blue)
    const iconColor = contact.iconColor;
    
    const content = (
      <>
        <span style={{
          ...styles.contactIcon,
          ...(iconColor && { color: iconColor, fontWeight: 'bold' })
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
            ...styles.contactItem,
            ...(isHovered ? { background: 'rgba(255, 255, 255, 0.3)' } : {}),
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseEnter={() => setHoverStates(prev => ({ ...prev, contact: index }))}
          onMouseLeave={() => setHoverStates(prev => ({ ...prev, contact: null }))}
          title={finalLink}
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
          ...(isHovered ? { background: 'rgba(255, 255, 255, 0.3)' } : {})
        }}
        onMouseEnter={() => setHoverStates(prev => ({ ...prev, contact: index }))}
        onMouseLeave={() => setHoverStates(prev => ({ ...prev, contact: null }))}
      >
        {content}
      </div>
    );
  }, [hoverStates.contact, styles]);

  const getExperienceDisplay = useCallback(() => {
    if (contextPersonalInfo?.totalExperience && contextPersonalInfo.totalExperience.trim()) {
      return contextPersonalInfo.totalExperience;
    }
    return null;
  }, [contextPersonalInfo]);

  // ===== CONTENT DENSITY ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    // Process experiences - LOCKED AT 2 (work only) with 3 bullet points max
    const limitedExperiences = safeArray(contextExperience)
      .slice(0, TEMPLATE4_CONSTANTS.EXPERIENCE_LIMIT)
      .map(exp => {
        const bulletPoints = exp.bulletPoints || exp.achievements || [];
        const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;
        
        const cleanedBulletPoints = bulletPoints.map(bullet => TemplateHelpers.cleanBullet(bullet));
        
        return {
          ...exp,
          title: exp.title || exp.position || '',
          company: exp.company || exp.organization || '',
          location: exp.location || '',
          hasBulletPoints,
          bulletPoints: hasBulletPoints ? 
            safeArray(cleanedBulletPoints)
              .slice(0, TEMPLATE4_CONSTANTS.BULLET_POINTS_PER_EXPERIENCE)
              .map(bullet => getSafeText(bullet).slice(0, TEMPLATE4_CONSTANTS.MAX_BULLET_LENGTH)) : [],
          description: !hasBulletPoints && exp.description ? 
            getSafeText(exp.description).slice(0, TEMPLATE4_CONSTANTS.MAX_DESCRIPTION_LENGTH) : '',
          startDate: exp.startDate || '',
          endDate: exp.current ? 'Present' : (exp.endDate || ''),
          technologies: []
        };
      });
    
    // Take only one education - LOCKED AT 1 with GPA
    const limitedEducation = safeArray(contextEducation)
      .slice(0, TEMPLATE4_CONSTANTS.EDUCATION_LIMIT)
      .map(edu => ({
        ...edu,
        degree: getSafeText(edu.degree),
        institution: getSafeText(edu.institution),
        location: getSafeText(edu.location),
        startDate: edu.startDate || edu.startYear || '',
        endDate: edu.endDate || edu.endYear || (edu.current ? 'Present' : ''),
        current: edu.current || false,
        gpa: edu.gpa || '',
        gpaScale: edu.gpaScale || '4.0'
      }));

    // Skills - LOCKED AT 6
    const limitedSkills = safeArray(contextSkills).slice(0, TEMPLATE4_CONSTANTS.SKILLS_LIMIT);

    // Summary - limited to 300 chars
    const limitedSummary = contextProfessionalSummary ? 
      getSafeText(contextProfessionalSummary).slice(0, TEMPLATE4_CONSTANTS.MAX_SUMMARY_LENGTH) : '';

    // Process projects - LOCKED AT 1 with bullet points
    const limitedProjects = safeArray(contextProjects)
      .slice(0, TEMPLATE4_CONSTANTS.PROJECTS_LIMIT)
      .map(project => {
        let bulletPoints = [];
        
        if (project.bulletPoints && Array.isArray(project.bulletPoints)) {
          bulletPoints = project.bulletPoints.filter(b => b && typeof b === 'string');
        } else if (project.achievements && Array.isArray(project.achievements)) {
          bulletPoints = project.achievements.filter(a => a && typeof a === 'string');
        } else if (project.highlights && Array.isArray(project.highlights)) {
          bulletPoints = project.highlights.filter(h => h && typeof h === 'string');
        } else if (project.description && typeof project.description === 'string') {
          bulletPoints = project.description
            .split(/[.!?]+/)
            .map(s => s.trim())
            .filter(s => s.length > 10)
            .slice(0, TEMPLATE4_CONSTANTS.BULLET_POINTS_PER_PROJECT);
        }
        
        const cleanedBulletPoints = bulletPoints
          .map(bullet => TemplateHelpers.cleanBullet(bullet))
          .slice(0, TEMPLATE4_CONSTANTS.BULLET_POINTS_PER_PROJECT)
          .map(bullet => bullet.slice(0, TEMPLATE4_CONSTANTS.MAX_BULLET_LENGTH));
        
        return {
          ...project,
          title: getSafeText(project.title || project.name || ''),
          bulletPoints: cleanedBulletPoints,
          projectUrl: getSafeText(project.projectUrl || project.url || project.link || ''),
          startDate: project.startDate || '',
          endDate: project.endDate || '',
          role: getSafeText(project.role || '')
        };
      });

    // Process certifications - LOCKED AT 1
    const limitedCertifications = safeArray(contextCertifications)
      .slice(0, TEMPLATE4_CONSTANTS.CERTIFICATIONS_LIMIT)
      .map(cert => ({
        ...cert,
        name: getSafeText(cert.name || cert.title || ''),
        issuer: getSafeText(cert.issuer || cert.organization || ''),
        date: cert.date ? formatDate(cert.date) : (cert.year || '')
      }));

    // Process awards - LOCKED AT 1
    const limitedAwards = safeArray(contextAwards)
      .slice(0, TEMPLATE4_CONSTANTS.AWARDS_LIMIT)
      .map(award => ({
        ...award,
        title: getSafeText(award.title || award.name || ''),
        issuer: getSafeText(award.issuer || award.organization || ''),
        date: award.date ? formatDate(award.date) : (award.year || '')
      }));

    return {
      limitedExperiences,
      limitedEducation: limitedEducation.length > 0 ? limitedEducation[0] : null,
      limitedSkills,
      limitedSummary,
      limitedProjects,
      limitedCertifications,
      limitedAwards
    };
  }, [contextProfessionalSummary, contextExperience, contextEducation, contextSkills, contextProjects, contextCertifications, contextAwards, getSafeText, safeArray, formatDate]);

  // Measure content height and adjust spacing and fonts to fill A4
  useEffect(() => {
    if (!loading && templateRef.current) {
      const height = templateRef.current.scrollHeight;
      setContentHeight(height);
      
      const A4_HEIGHT = 1123;
      
      const { score: densityScore, itemCount } = TemplateHelpers.calculateContentDensity(contentAnalysis);
      
      const { spacing, fonts } = TemplateHelpers.getOptimalConfigs(height, A4_HEIGHT, densityScore, itemCount);
      
      setSpacingConfig(spacing);
      setFontConfig(fonts);
      
      setTimeout(() => {
        if (templateRef.current) {
          const newHeight = templateRef.current.scrollHeight;
          setContentHeight(newHeight);
          
          if (newHeight < A4_HEIGHT * 0.95) {
            const secondAdjustment = TemplateHelpers.getOptimalConfigs(newHeight, A4_HEIGHT, densityScore, itemCount);
            setSpacingConfig(secondAdjustment.spacing);
            setFontConfig(secondAdjustment.fonts);
          }
        }
      }, 100);
    }
  }, [loading, contentAnalysis]);

  const displayName = useMemo(() => {
    return getSafeText(contextPersonalInfo?.fullName) || 'Your Name';
  }, [contextPersonalInfo, getSafeText]);

  const isMobile = windowWidth < 768;

  // Hover handlers
  const setHoverSkill = useCallback((index) => setHoverStates(prev => ({ ...prev, skill: index })), []);
  const setHoverExperience = useCallback((index) => setHoverStates(prev => ({ ...prev, experience: index })), []);
  const setHoverProject = useCallback((index) => setHoverStates(prev => ({ ...prev, project: index })), []);
  const setHoverCertification = useCallback((index) => setHoverStates(prev => ({ ...prev, certification: index })), []);
  const setHoverAward = useCallback((index) => setHoverStates(prev => ({ ...prev, award: index })), []);

  // ===== RENDER FUNCTIONS =====
  const renderSkillItem = useCallback((skill, index) => {
    const isHovered = hoverStates.skill === index;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.skillItem,
          ...(isHovered && !isATS ? { background: 'rgba(255, 255, 255, 0.35)' } : {})
        }}
        onMouseEnter={() => setHoverSkill(index)}
        onMouseLeave={() => setHoverSkill(null)}
      >
        <span style={styles.skillText}>{getSafeText(skill)}</span>
      </div>
    );
  }, [hoverStates.skill, styles, getSafeText, isATS, setHoverSkill]);

  const renderCertificationItem = useCallback((cert, index) => {
    const isHovered = hoverStates.certification === index;
    
    return (
      <div 
        key={index}
        style={{
          ...styles.certificationItem,
          ...(isHovered && !isATS ? { background: 'rgba(255, 255, 255, 0.3)' } : {}),
          ...(isMobile ? styles.mobileStyles.certificationItem : {})
        }}
        onMouseEnter={() => setHoverCertification(index)}
        onMouseLeave={() => setHoverCertification(null)}
      >
        <h4 style={{
          ...styles.certificationName,
          ...(isMobile ? styles.mobileStyles.certificationName : {})
        }}>{cert.name}</h4>
        
        {cert.issuer && (
          <div style={{
            ...styles.certificationIssuer,
            ...(isMobile ? styles.mobileStyles.certificationIssuer : {})
          }}>{cert.issuer}</div>
        )}
        
        {cert.date && (
          <div style={{
            ...styles.certificationDate,
            ...(isMobile ? styles.mobileStyles.certificationDate : {})
          }}>{cert.date}</div>
        )}
      </div>
    );
  }, [hoverStates.certification, styles, isMobile, isATS, setHoverCertification]);

  const renderAwardItem = useCallback((award, index) => {
    const isHovered = hoverStates.award === index;
    
    return (
      <div 
        key={index}
        style={{
          ...styles.awardItem,
          ...(isHovered && !isATS ? { background: 'rgba(255, 255, 255, 0.3)' } : {}),
          ...(isMobile ? styles.mobileStyles.awardItem : {})
        }}
        onMouseEnter={() => setHoverAward(index)}
        onMouseLeave={() => setHoverAward(null)}
      >
        <h4 style={{
          ...styles.awardTitle,
          ...(isMobile ? styles.mobileStyles.awardTitle : {})
        }}>{award.title}</h4>
        
        {award.issuer && (
          <div style={{
            ...styles.awardIssuer,
            ...(isMobile ? styles.mobileStyles.awardIssuer : {})
          }}>{award.issuer}</div>
        )}
        
        {award.date && (
          <div style={{
            ...styles.awardDate,
            ...(isMobile ? styles.mobileStyles.awardDate : {})
          }}>{award.date}</div>
        )}
      </div>
    );
  }, [hoverStates.award, styles, isMobile, isATS, setHoverAward]);

  const renderExperienceItem = useCallback((exp, index, totalCount) => {
    const hasBulletPoints = exp.hasBulletPoints;
    const isHovered = hoverStates.experience === index;
    const colors = COLOR_SCHEMES[colorScheme] || COLOR_SCHEMES.blue;
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.timelineItem,
          ...(isHovered && !isATS ? { boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' } : {}),
          ...(isMobile ? styles.mobileStyles.timelineItem : {})
        }}
        onMouseEnter={() => setHoverExperience(index)}
        onMouseLeave={() => setHoverExperience(null)}
      >
        <div style={styles.timelineConnector}>
          <div style={styles.connectorDot}></div>
          {index < totalCount - 1 ? (
            <div style={styles.connectorLine}></div>
          ) : (
            <div style={styles.lastConnectorLine}></div>
          )}
        </div>
        
        <div style={styles.timelineContent}>
          <div style={{
            ...styles.experienceHeader,
            ...(isMobile ? styles.mobileStyles.experienceHeader : {})
          }}>
            <div style={{
              ...styles.experienceMain,
              ...(isMobile ? styles.mobileStyles.experienceMain : {})
            }}>
              <h3 style={{
                ...styles.position,
                ...(isMobile ? styles.mobileStyles.position : {})
              }}>{getSafeText(exp.title)}</h3>
              <div style={{
                ...styles.companyInfo,
                ...(isMobile ? styles.mobileStyles.companyInfo : {})
              }}>
                <span style={{
                  ...styles.companyName,
                  ...(isMobile ? styles.mobileStyles.companyName : {})
                }}>{getSafeText(exp.company)}</span>
                {exp.location && (
                  <span style={{
                    ...styles.companyLocation,
                    ...(isMobile ? styles.mobileStyles.companyLocation : {})
                  }}>
                    <span style={{
                      ...styles.locationSeparator,
                      ...(isMobile ? styles.mobileStyles.locationSeparator : {})
                    }}> | </span>
                    ðŸ“ {getSafeText(exp.location)}
                  </span>
                )}
              </div>
            </div>
            <span style={styles.period}>
              {formatDate(exp.startDate)} â€“ {formatDate(exp.endDate)}
            </span>
          </div>
          
          {hasBulletPoints && exp.bulletPoints && exp.bulletPoints.length > 0 && (
            <div style={styles.descriptionSection}>
              <ul style={{
                ...styles.descriptionList,
                ...(isMobile ? styles.mobileStyles.descriptionList : {})
              }}>
                {exp.bulletPoints.slice(0, 3).map((bullet, idx) => (
                  <li key={idx} style={{
                    ...styles.descriptionItem,
                    ...(isMobile ? styles.mobileStyles.descriptionItem : {})
                  }}>
                    <span style={styles.descriptionBullet}>â€¢</span>
                    <span style={styles.descriptionText}>
                      {getSafeText(bullet)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {!hasBulletPoints && exp.description && (
            <div style={styles.phraseSection}>
              <p style={styles.phraseDescription}>
                {exp.description}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }, [hoverStates.experience, styles, getSafeText, formatDate, isMobile, isATS, colorScheme, setHoverExperience]);

  const renderEducationMainItem = useCallback((edu) => {
    const formatDateRange = (startDate, endDate, isCurrent) => {
      const formattedStart = formatDate(startDate);
      const formattedEnd = isCurrent ? 'Present' : formatDate(endDate);
      
      if (!formattedStart && !formattedEnd) return '';
      if (formattedStart && !formattedEnd) return formattedStart;
      if (!formattedStart && formattedEnd) return formattedEnd;
      return `${formattedStart} â€“ ${formattedEnd}`;
    };
    
    const gpaFormatted = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : null;
    
    return (
      <div style={styles.projectItem}>
        <div style={styles.timelineConnector}>
          <div style={styles.connectorDot}></div>
          <div style={styles.lastConnectorLine}></div>
        </div>
        
        <div style={styles.timelineContent}>
          <div style={{
            ...styles.projectHeader,
            ...(isMobile ? styles.mobileStyles.projectHeader : {})
          }}>
            <div style={{
              ...styles.projectMain,
              ...(isMobile ? styles.mobileStyles.projectMain : {})
            }}>
              <h3 style={{
                ...styles.projectTitle,
                ...(isMobile ? styles.mobileStyles.projectTitle : {})
              }}>{edu.degree}</h3>
              <div style={{
                ...styles.projectRole,
                ...(isMobile ? styles.mobileStyles.projectRole : {}),
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <span>{edu.institution}</span>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {edu.location && (
                    <span style={{
                      fontSize: `${fontConfig.tinyText}px`,
                      color: '#000000',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2px'
                    }}>
                      <span>ðŸ“</span> {edu.location}
                    </span>
                  )}
                  
                  {gpaFormatted && (
                    <span style={styles.gpaDisplay}>
                      {gpaFormatted}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <span style={styles.period}>
              {formatDateRange(edu.startDate, edu.endDate, edu.current)}
            </span>
          </div>
        </div>
      </div>
    );
  }, [styles, formatDate, isMobile, fontConfig, formatGPA]);

  const renderProjectItem = useCallback((project, index, totalCount) => {
    const isHovered = hoverStates.project === index;
    const colors = COLOR_SCHEMES[colorScheme] || COLOR_SCHEMES.blue;
    
    const formatLink = (link) => {
      if (!link) return '';
      let formatted = getSafeText(link);
      if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
        return `https://${formatted}`;
      }
      return formatted;
    };

    const truncateLink = (link, maxLength = 40) => {
      const formatted = getSafeText(link);
      if (formatted.length <= maxLength) return formatted;
      
      const start = formatted.substring(0, 20);
      const end = formatted.substring(formatted.length - 15);
      return `${start}...${end}`;
    };
    
    const hasBulletPoints = project.bulletPoints && project.bulletPoints.length > 0 && 
                           project.bulletPoints.some(b => b && b.trim() !== '');
    
    return (
      <div 
        key={index} 
        style={{
          ...styles.projectItem,
          ...(isHovered && !isATS ? { boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' } : {}),
          ...(isMobile ? styles.mobileStyles.projectItem : {})
        }}
        onMouseEnter={() => setHoverProject(index)}
        onMouseLeave={() => setHoverProject(null)}
      >
        <div style={styles.timelineConnector}>
          <div style={styles.connectorDot}></div>
          {index < totalCount - 1 ? (
            <div style={styles.connectorLine}></div>
          ) : (
            <div style={styles.lastConnectorLine}></div>
          )}
        </div>
        
        <div style={styles.timelineContent}>
          <div style={{
            ...styles.projectHeader,
            ...(isMobile ? styles.mobileStyles.projectHeader : {})
          }}>
            <div style={{
              ...styles.projectMain,
              ...(isMobile ? styles.mobileStyles.projectMain : {})
            }}>
              <h3 style={{
                ...styles.projectTitle,
                ...(isMobile ? styles.mobileStyles.projectTitle : {})
              }}>{getSafeText(project.title)}</h3>
              {project.role && (
                <div style={{
                  ...styles.projectRole,
                  ...(isMobile ? styles.mobileStyles.projectRole : {})
                }}>
                  {getSafeText(project.role)}
                </div>
              )}
            </div>
            {(project.startDate || project.endDate) && (
              <span style={styles.period}>
                {formatDate(project.startDate)} â€“ {formatDate(project.endDate)}
              </span>
            )}
          </div>
          
          {hasBulletPoints ? (
            <div style={styles.projectBulletPointsSection}>
              <ul style={{
                ...styles.projectBulletList,
                ...(isMobile ? styles.mobileStyles.projectBulletList : {})
              }}>
                {project.bulletPoints.filter(b => b && b.trim() !== '').map((bullet, idx) => (
                  <li key={idx} style={{
                    ...styles.projectBulletItem,
                    ...(isMobile ? styles.mobileStyles.projectBulletItem : {})
                  }}>
                    <span style={styles.projectBullet}>â€¢</span>
                    <span style={styles.projectBulletText}>
                      {getSafeText(bullet)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={styles.projectBulletPointsSection}>
              <p style={{
                fontSize: `${fontConfig.smallText}px`,
                color: '#1a1a1a',
                fontStyle: 'italic',
                margin: 0,
                fontWeight: 500
              }}>
                No achievements specified
              </p>
            </div>
          )}
          
          {project.projectUrl && (
            <div style={{
              ...styles.projectLinkContainer,
              ...(isMobile ? styles.mobileStyles.projectLinkContainer : {})
            }}>
              <span style={styles.projectLinkLabel}>Link:</span>
              <a 
                href={formatLink(project.projectUrl)}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLinkValue}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {truncateLink(project.projectUrl)}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }, [hoverStates.project, styles, getSafeText, formatDate, isMobile, isATS, colorScheme, fontConfig, setHoverProject]);

  // Show loading spinner
  if (loading) {
    return (
      <div style={{ 
        minHeight: '500px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <LoadingSpinner 
          size="lg" 
          color={COLOR_SCHEMES[colorScheme]?.primary || '#0055CC'} 
          text="Loading template..." 
        />
      </div>
    );
  }

  return (
    <div 
      ref={templateRef}
      style={{
        ...styles.template,
        ...(isExporting ? { boxShadow: 'none' } : {}),
        ...(isMobile ? styles.mobileStyles.template : {})
      }}
      data-template-version="4.22.0-FINAL-CALIBRI-INCREASED-FONTS-V2"
      data-template-locked="true"
      data-content-height={contentHeight}
      data-font-scale={fontConfig.body}
    >
      <div style={styles.srOnly}>
        Resume of {displayName}
      </div>

      {/* Sidebar */}
      <div style={{
        ...styles.sidebar,
        ...(isMobile ? styles.mobileStyles.sidebar : {})
      }}>
        {contextPersonalInfo?.photo && !imageError && (
          <div style={{
            ...styles.profilePhoto,
            ...(isMobile ? styles.mobileStyles.profilePhoto : {})
          }}>
            <img 
              src={contextPersonalInfo.photo} 
              alt="Profile" 
              style={styles.profilePhotoImg}
              crossOrigin="anonymous"
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
            />
          </div>
        )}
        
        <div style={styles.personalDetails}>
          <h1 style={{
            ...styles.name,
            ...(isMobile ? styles.mobileStyles.name : {})
          }}>{displayName}</h1>
          
          {/* Contact Info with LinkedIn optimization */}
          <section style={styles.sidebarSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.sidebarSectionHeading
            }}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>âœ¦</span>
                CONTACT
              </h3>
            </div>
            <div style={styles.contactInfo}>
              {contactInfo.map(renderContactItem)}
            </div>
          </section>
        </div>

        {/* Skills */}
        {contentAnalysis.limitedSkills.length > 0 && (
          <section style={styles.sidebarSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.sidebarSectionHeading
            }}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>âœ¦</span>
                SKILLS
              </h3>
            </div>
            <div style={styles.skillsList}>
              {contentAnalysis.limitedSkills.map((skill, index) => (
                renderSkillItem(skill, index)
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {contentAnalysis.limitedCertifications.length > 0 && (
          <section style={styles.sidebarSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.sidebarSectionHeading
            }}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>âœ¦</span>
                CERTIFICATIONS
              </h3>
            </div>
            <div style={styles.certificationsSidebar}>
              {contentAnalysis.limitedCertifications.map((cert, index) => (
                renderCertificationItem(cert, index)
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {contentAnalysis.limitedAwards.length > 0 && (
          <section style={styles.sidebarSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.sidebarSectionHeading
            }}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>âœ¦</span>
                AWARDS
              </h3>
            </div>
            <div style={styles.awardsSidebar}>
              {contentAnalysis.limitedAwards.map((award, index) => (
                renderAwardItem(award, index)
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div style={{
        ...styles.mainContent,
        ...(isMobile ? styles.mobileStyles.mainContent : {})
      }}>
        {/* Professional Summary */}
        {contentAnalysis.limitedSummary && (
          <section style={styles.mainSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.mainSectionHeading
            }}>
              <h3 style={{
                ...styles.sectionTitle,
                ...styles.mainSectionTitle
              }}>
                <span style={styles.sectionIcon}>âœ¦</span>
                PROFESSIONAL SUMMARY
              </h3>
            </div>
            <p style={styles.summaryText}>{contentAnalysis.limitedSummary}</p>
          </section>
        )}

        {/* Work Experience */}
        {contentAnalysis.limitedExperiences.length > 0 && (
          <section style={styles.mainSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.mainSectionHeading
            }}>
              <h3 style={{
                ...styles.sectionTitle,
                ...styles.mainSectionTitle
              }}>
                <span style={styles.sectionIcon}>âœ¦</span>
                EXPERIENCE
              </h3>
            </div>
            <div style={{
              ...styles.experienceTimeline,
              ...(isMobile ? styles.mobileStyles.experienceTimeline : {})
            }}>
              {contentAnalysis.limitedExperiences.map((exp, index) => 
                renderExperienceItem(exp, index, contentAnalysis.limitedExperiences.length)
              )}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {contentAnalysis.limitedProjects.length > 0 && (
          <section style={styles.minimalGapSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.mainSectionHeading
            }}>
              <h3 style={{
                ...styles.sectionTitle,
                ...styles.mainSectionTitle
              }}>
                <span style={styles.sectionIcon}>âœ¦</span>
                PROJECTS
              </h3>
            </div>
            <div style={{
              ...styles.projectsTimeline,
              ...(isMobile ? styles.mobileStyles.projectsTimeline : {})
            }}>
              {contentAnalysis.limitedProjects.map((project, index) => 
                renderProjectItem(project, index, contentAnalysis.limitedProjects.length)
              )}
            </div>
          </section>
        )}

        {/* Education */}
        {contentAnalysis.limitedEducation && (
          <section style={styles.minimalGapSection}>
            <div style={{
              ...styles.sectionHeading,
              ...styles.mainSectionHeading
            }}>
              <h3 style={{
                ...styles.sectionTitle,
                ...styles.mainSectionTitle
              }}>
                <span style={styles.sectionIcon}>âœ¦</span>
                EDUCATION
              </h3>
            </div>
            <div style={{
              ...styles.projectsTimeline,
              ...(isMobile ? styles.mobileStyles.projectsTimeline : {})
            }}>
              {renderEducationMainItem(contentAnalysis.limitedEducation)}
            </div>
          </section>
        )}
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .template4-print {
            box-shadow: none !important;
            border: none !important;
          }
          .template4-print-sidebar {
            background: ${isATS ? '#1a2634' : `linear-gradient(135deg, ${COLOR_SCHEMES[colorScheme]?.dark || '#0A1A2A'} 0%, ${COLOR_SCHEMES[colorScheme]?.card || '#1A2A3A'} 100%)`} !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .template4-print-marker {
            background: ${COLOR_SCHEMES[colorScheme]?.primary || '#003399'} !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .template4-print-item {
            break-inside: avoid !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .template4-print-main, p, li, h1, h2, h3, h4, span, div {
            color: #000000 !important;
          }
          a {
            text-decoration: underline !important;
            color: #000000 !important;
          }
        }
      `}</style>
    </div>
  );
};

// ===== PROPTYPES =====
Template4.propTypes = {
  isExporting: PropTypes.bool,
  colorScheme: PropTypes.string,
  industry: PropTypes.string,
  isATS: PropTypes.bool,
  accessibilityMode: PropTypes.bool,
  personalInfo: PropTypes.object,
  education: PropTypes.array,
  experience: PropTypes.array,
  skills: PropTypes.array,
  professionalSummary: PropTypes.string,
  projects: PropTypes.array,
  certifications: PropTypes.array,
  awards: PropTypes.array
};

// ===== DEFAULT PROPS =====
Template4.defaultProps = {
  isExporting: false,
  colorScheme: 'blue',
  industry: 'tech',
  isATS: false,
  accessibilityMode: false,
  projects: [],
  certifications: [],
  awards: []
};

// ===== EXPORT =====
Template4.displayName = 'Template4_Locked_v4.22-CALIBRI-INCREASED-FONTS-V2';
export default Template4;