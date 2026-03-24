// ============================================
// lib/templateConfig.js
// COMPLETE WORKING VERSION - REFACTORED WITH EXPLICIT SECTIONS
// UPDATED: 
// - Removed unused sections: tools, coreStrengths, languages, hobbies
// - Summary characters set to 300 for all templates
// - Bullet points limited to 150 characters
// - Template17 configuration fully updated
// ============================================

// Template sections configuration - ONLY sections actively used
export const templateSections = {
  'Template1': ['personalInfo', 'imageSection', 'summary', 'experience', 'education', 'skills', 'certifications'],
  'Template2': ['personalInfo', 'imageSection','summary', 'experience', 'education', 'skills', 'certifications', 'projects'],
  'Template3': ['personalInfo', 'summary', 'experience', 'education', 'skills', 'certifications', 'projects', 'awards'],
  'Template4': ['personalInfo', 'imageSection', 'summary', 'experience', 'skills', 'certifications', 'projects', 'education', 'awards'],
  'Template5': ['personalInfo', 'imageSection', 'summary', 'experience', 'skills', 'education', 'projects'],
  'Template6': ['personalInfo','summary', 'experience', 'skills', 'education', 'certifications', 'projects', 'awards'],
  'Template7': ['personalInfo', 'summary', 'experience', 'skills', 'education', 'certifications', 'projects', 'awards'],
  'Template8': ['personalInfo', 'imageSection', 'summary', 'experience', 'skills', 'education', 'certifications', 'projects', 'awards'],
  'Template9': ['personalInfo','summary', 'experience', 'skills', 'education','certifications', 'awards'],
  'Template10': ['personalInfo','summary', 'experience', 'education', 'skills',],
  'Template11': ['personalInfo', 'summary', 'experience', 'skills', 'education', 'projects', 'awards', 'certifications',],
  'Template12': ['personalInfo', 'summary', 'experience', 'skills', 'education', 'projects', 'certifications'],
  'Template13': ['personalInfo', 'summary', 'experience', 'education', 'skills', 'projects', 'certifications'],
  'Template14': ['personalInfo','imageSection', 'summary','experience', 'projects', 'skills', 'education', 'certifications'],
  'Template15': ['personalInfo', 'imageSection', 'summary', 'experience', 'projects', 'skills', 'education'],
  'Template16': ['personalInfo','summary', 'education',  'experience','skills','certifications',],
  'Template17': ['personalInfo', 'imageSection', 'summary', 'education', 'skills', 'projects', 'internships', 'certifications'],
  'Template18': ['personalInfo', 'imageSection', 'summary','education', 'skills', 'projects', 'certifications','internships',],
  'Template19': ['personalInfo', 'imageSection', 'summary','education', 'skills', 'projects', 'certifications', 'internships'],
  'Template20': ['personalInfo', 'summary','education', 'skills', 'projects', 'internships']
};

// Template-specific optional sections - KEPT FOR BACKWARD COMPATIBILITY
export const templateOptionalSections = {
  'Template1': [],
  'Template2': [],
  'Template3': [],
  'Template4': [],
  'Template5': [],
  'Template6': [],
  'Template7': [],
  'Template8': [],
  'Template9': [],
  'Template10': [],
  'Template11': [],
  'Template12': [],
  'Template13': [],
  'Template14': [],
  'Template15': [],
  'Template16': [],
  'Template17': [],
  'Template18': [],
  'Template19': [],
  'Template20': []
};

// Template-specific section limits
export const templateSectionLimits = {
  'Template1': {
    // Section Limits
    'experience': 1,
    'education': 1,
    'skills': 7,
    'certifications': 1,
    'projects': 0,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0
  },
  
  'Template2': {
    // Section Limits
    'experience': 1,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 1,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 3,
    'achievementLength': 150,
    'descriptionLength': 0
  },
  
  'Template3': {
    // Section Limits
    'experience': 2,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 1,
    'awards': 1,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    'achievementWords': 40
  },
  
  'Template4': {
    // Section Limits
    'experience': 2,
    'education': 1,
    'skills': 6,
    'projects': 1,
    'certifications': 1,
    'awards': 1,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 3,
    'achievementLength': 150,
    'descriptionLength': 0,
    'projectDescriptionLength': 0,
    'bulletPointsPerExperience': 3,
    'technologiesLimit': 0
  },
  
  'Template5': {
    // Section Limits
    'experience': 1,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 0,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0
  },
  
  'Template6': {
    // Section Limits - Based on Template6 CONTENT_LIMITS
    'experience': 2,
    'education': 1,
    'skills': 8,
    'certifications': 1,
    'projects': 1,
    'awards': 1,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    
    // Template6 Specific Features
    'hasExperienceTypeTabs': true,
    'showsGPA': true,
    'showsLocation': true,
    'showsDateRanges': true,
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'showsAwardDates': true
  },
  
  'Template7': {
    // Section Limits - Based on TEMPLATE7_LIMITS
    'experience': 2,
    'education': 1,
    'skills': 6,
    'projects': 1,
    'certifications': 1,
    'awards': 1,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    
    // Additional Template7 Limits
    'bulletPointsPerExperience': 4,
    'technologiesLimit': 0,
    
    // Template7 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': false,
    'showsGPA': false,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'showsAwardDates': true
  },
  
  'Template8': {
    // Section Limits
    'experience': 2,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 1,
    'awards': 1,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 250
  },
  
  'Template9': {
    // Section Limits - Based on Template9Limits
    'experience': 2,
    'education': 1,
    'skills': 12,
    'projects': 0,
    'certifications': 2,
    'awards': 2,
    'publications': 0,
    'internships': 0,
    'references': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    
    // Template9 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': false,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'showsAwardDates': true,
    'usesSummaryChars': true
  },
  
  'Template10': {
    // Section Limits - Based on Template10 component
    'experience': 2,
    'education': 1,
    'skills': 4,
    'projects': 0,
    'certifications': 0,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 3,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    
    // Template10 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': false,
    'showsDateRanges': true,
    'showsProjectLinks': true
  },
  
  'Template11': {
    // Section Limits - Based on Template11 component
    'experience': 2,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 2,
    'awards': 1,
    'references': 0,
    'internships': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    
    // Template11 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'showsAwardDates': true,
    'hasLeftPanelContact': true
  },
  
  'Template12': {
    // Section Limits - Based on Template12 CONTENT_LIMITS
    'experience': 3,
    'education': 2,
    'skills': 8,
    'projects': 1,
    'certifications': 2,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 3,
    'achievementLength': 150,
    'achievementsPerProject': 3,
    'descriptionLength': 0,
    
    // Template12 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'hasLeftPanelLayout': true
  },
  
  'Template13': {
    // Section Limits - Based on Template13 CONTENT_LIMITS
    'experience': 2,
    'education': 1,
    'skills': 7,
    'projects': 1,
    'certifications': 1,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    'educationAchievements': 0,
    
    // Template13 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'hasTimelineCircles': true,
    'hasLocationIcon': true,
    'hasSimpleGPA': true,
    'hasSimpleDates': true
  },
  
  'Template14': {
    // Section Limits - Based on Template14 CONTENT_LIMITS
    'experience': 1,
    'education': 2,
    'skills': 6,
    'projects': 1,
    'certifications': 1,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerProject': 4,
    'achievementLength': 150,
    'descriptionLength': 0,
    'achievementsPerExperience': 3,
    
    // Template14 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'hasSimpleGPA': true,
    'hasSimpleDates': true,
    'hasTwoColumnLayout': true,
    'hasSkillsAsTags': true
  },
  
  'Template15': {
    // Section Limits - Based on Template15 CONTENT_LIMITS
    'experience': 1,
    'education': 1,
    'skills': 8,
    'projects': 1,
    'certifications': 0,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'achievementsPerProject': 3,
    'descriptionLength': 0,
    
    // Template15 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'hasCenteredHeader': true,
    'hasContactBar': true,
    'hasSkillsAsChips': true,
    'hasSimpleGPA': true,
    'hasSimpleDates': true,
    'fixedImageSize': '100px'
  },
  
  'Template16': {
    // Section Limits
    'experience': 1,
    'education': 1,
    'skills': 7,
    'projects': 0,
    'certifications': 1,
    'awards': 0,
    'internships': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerExperience': 4,
    'achievementLength': 150,
    'descriptionLength': 0
  },
  
  'Template17': {
    // Section Limits - Based on Template17 CONTENT_LIMITS
    'experience': 0,        // Not directly used, but for compatibility
    'education': 2,         // education: 1
    'skills': 7,            // skills: 8
    'projects': 1,          // projectsPerPage: 1
    'certifications': 2,    // certifications: 2
    'awards': 0,            // awards: 1
    'internships': 1,       // internshipsPerPage: 1
    'references': 0,
    'publications': 0,
    'contact': 4,           // Contact items: email, phone, location, linkedin, github, portfolio
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,     // 300 characters for summary
    'achievementsPerinternships': 4,     // bulletPointsPerItem: 4
    'achievementLength': 150,           // Default bullet point character limit
    'descriptionLength': 0,
    
    // Template17 Specific Features
    'showsProfessionalTitle': true,
    'showsContactInfo': true,
    'showsLocation': true,
    'showsGPA': true,                     // Shows GPA in education with proper formatting
    'showsDateRanges': true,
    'showsProjectLinks': true,
    'showsCertificationDates': true,
    'showsAwardDates': true,
    'hasFixedDatePosition': true,         // Dates always on right, never wrap
    'hasSkillChips': true,                // Skills as bordered chips
    'hasSectionIcons': true,              // Section icons for each category
    'hasHoverEffects': true,              // Card hover effects
    'hasEducationAchievements': true,     // Education achievements/honors
    'hasProjectRoles': true,              // Project role display
    'hasInternshipLocation': true,        // Location display for internships
    'hasEducationLocation': true,         // Location display for education
    'hasTitleTags': true,                 // Student type and major tags in header
    'hasContactChips': true,              // Contact items as chips
    'hasGradientAvatarPlaceholder': true  // Gradient avatar placeholder
  },
  
  'Template18': {
    // Section Limits - Only sections used in Template18
    'experience': 0,
    'education': 1,
    'skills': 8,
    'projects': 1,
    'certifications': 1,
    'awards': 0,
    'internships': 1,
    'publications': 0,
    'references': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerinternships': 3,
    'achievementLength': 150,
    'descriptionLength': 0
  },
  
  'Template19': {
    // Section Limits - Only sections used in Template19
    'experience': 0,
    'education': 2,
    'skills': 7,
    'projects': 1,
    'certifications': 1,
    'internships': 1,
    'awards': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerinternships': 4,
    'achievementLength': 150,
    'internshipBullets': 4,
    'descriptionLength': 0
  },
  
  'Template20': {
    // Section Limits - Only sections used in Template20
    'experience': 2,
    'education': 1,
    'skills': 10,
    'projects': 1,
    'internships': 1,
    'certifications': 0,
    'awards': 0,
    'references': 0,
    'publications': 0,
    'contact': 4,
    
    // Text Limits
    'summaryWords': 100,
    'summaryChars': 300,
    'achievementsPerinternships': 4,
    'achievementLength': 150,
    'bulletPointsPerProject': 3,
    'bulletPointsPerInternship': 4,
    'projectPointCharLimit': 150,
    'descriptionLength': 0
  }
};

// COMPREHENSIVE default limits for ALL possible sections
export const defaultSectionLimits = {
  'experience': 2,
  'education': 1,
  'skills': 6,
  'projects': 1,
  'certifications': 1,
  'awards': 1,
  'internships': 1,
  'references': 0,
  'publications': 0,
  'contact': 4,
  'summaryWords': 100,
  'summaryChars': 300,
  'achievementsPerExperience': 4,
  'achievementsPerProject': 3,
  'educationAchievements': 0,
  'achievementLength': 150,
  'descriptionLength': 0
};

// Section display names
export const sectionDisplayNames = {
  'personalInfo': 'Personal Information',
  'imageSection': 'Profile Photo',
  'summary': 'Professional Summary',
  'experience': 'Work Experience',
  'education': 'Education',
  'skills': 'Skills',
  'projects': 'Projects',
  'internships': 'Internships',
  'references': 'References',
  'certifications': 'Certifications',
  'awards': 'Awards',
  'publications': 'Publications'
};

// Section icons
export const sectionIcons = {
  'personalInfo': '👤',
  'imageSection': '📸',
  'summary': '📝',
  'experience': '💼',
  'education': '🎓',
  'skills': '⚡',
  'projects': '📁',
  'internships': '🌟',
  'references': '📞',
  'certifications': '📜',
  'awards': '🏆',
  'publications': '📚'
};

// Define which sections should have entry limits
const sectionsWithEntryLimits = [
  'experience', 'education', 'skills', 'projects',
  'internships', 'certifications', 'awards', 'references', 'publications', 'contact'
];

// Get sections for a specific template
export const getTemplateSections = (templateId) => {
  const templateKey = `Template${templateId}`;
  return templateSections[templateKey] || [];
};

// Get display name for section
export const getSectionDisplayName = (sectionName) => {
  return sectionDisplayNames[sectionName] || sectionName;
};

// Get icon for section
export const getSectionIcon = (sectionName) => {
  return sectionIcons[sectionName] || '📄';
};

// Get optional sections for a specific template
export const getTemplateOptionalSections = (templateId) => {
  return [];
};

// Check if a section exists in a template
export const isSectionInTemplate = (templateId, sectionName) => {
  const sections = getTemplateSections(templateId);
  return sections.includes(sectionName);
};

// Get section limit for a specific template and section
export const getSectionLimit = (templateId, sectionName) => {
  const templateKey = `Template${templateId}`;
  
  if (!sectionsWithEntryLimits.includes(sectionName)) {
    return null;
  }
  
  if (templateSectionLimits[templateKey] && templateSectionLimits[templateKey][sectionName] !== undefined) {
    return templateSectionLimits[templateKey][sectionName];
  }
  
  return defaultSectionLimits[sectionName] || null;
};

// Check if user can add more entries to a section
export const canAddMoreToSection = (templateId, sectionName, currentCount) => {
  const limit = getSectionLimit(templateId, sectionName);
  if (limit === null) return true;
  if (limit === 0) return false;
  return currentCount < limit;
};

// Get remaining slots for a section
export const getRemainingSlots = (templateId, sectionName, currentCount) => {
  const limit = getSectionLimit(templateId, sectionName);
  if (limit === null) return Infinity;
  if (limit === 0) return 0;
  return Math.max(0, limit - currentCount);
};

// Validate if section entries exceed limit
export const validateSectionEntries = (templateId, sectionName, entries) => {
  const limit = getSectionLimit(templateId, sectionName);
  if (limit === null) return true;
  if (limit === 0) return entries.length === 0;
  return entries.length <= limit;
};

// Get all section limits for a template
export const getAllSectionLimitsForTemplate = (templateId) => {
  const templateKey = `Template${templateId}`;
  const templateLimits = templateSectionLimits[templateKey] || {};
  
  return {
    ...defaultSectionLimits,
    ...templateLimits
  };
};

// Get limits only for sections that exist in the template
export const getApplicableSectionLimits = (templateId) => {
  const sections = getTemplateSections(templateId);
  
  const applicableLimits = {};
  
  sections.forEach(section => {
    if (sectionsWithEntryLimits.includes(section)) {
      const limit = getSectionLimit(templateId, section);
      if (limit !== null) {
        applicableLimits[section] = limit;
      }
    }
  });
  
  return applicableLimits;
};

// Get limit info for UI display
export const getSectionLimitInfo = (templateId, sectionName, currentCount = 0) => {
  const limit = getSectionLimit(templateId, sectionName);
  
  if (limit === null) {
    return {
      limit: null,
      currentCount,
      canAdd: true,
      remaining: Infinity,
      isLimited: false,
      maxReached: false,
      isDisabled: false
    };
  }
  
  if (limit === 0) {
    return {
      limit: 0,
      currentCount,
      canAdd: false,
      remaining: 0,
      isLimited: true,
      maxReached: true,
      isDisabled: true
    };
  }
  
  const canAdd = currentCount < limit;
  const remaining = Math.max(0, limit - currentCount);
  
  return {
    limit,
    currentCount,
    canAdd,
    remaining,
    isLimited: true,
    maxReached: currentCount >= limit,
    isDisabled: false
  };
};

// Get sections for a specific template with limit info
export const getTemplateSectionsWithLimits = (templateId) => {
  const sections = getTemplateSections(templateId);
  
  return sections.map(section => {
    const hasLimit = sectionsWithEntryLimits.includes(section);
    const limitInfo = hasLimit ? getSectionLimitInfo(templateId, section, 0) : null;
    
    return {
      name: section,
      displayName: getSectionDisplayName(section),
      icon: getSectionIcon(section),
      limit: limitInfo?.limit ?? null,
      hasLimit: hasLimit && limitInfo?.limit !== null,
      isDisabled: limitInfo?.isDisabled ?? false
    };
  });
};

// Check if template includes image section
export const hasImageSection = (templateId) => {
  const sections = getTemplateSections(templateId);
  return sections.includes('imageSection');
};

// Get template sections excluding image section
export const getTemplateSectionsWithoutImage = (templateId) => {
  const sections = getTemplateSections(templateId);
  return sections.filter(section => section !== 'imageSection');
};

// Helper to get all template IDs
export const getAllTemplateIds = () => {
  return Object.keys(templateSections).map(key => parseInt(key.replace('Template', '')));
};

// Check if template has optional sections
export const hasOptionalSections = (templateId) => {
  return false;
};

// Get all sections that can have limits for a template
export const getLimitedSectionsForTemplate = (templateId) => {
  const sections = getTemplateSections(templateId);
  return sections.filter(section => sectionsWithEntryLimits.includes(section));
};

// Get character/text limits for a template
export const getTemplateTextLimits = (templateId) => {
  const templateKey = `Template${templateId}`;
  const templateLimits = templateSectionLimits[templateKey] || {};
  
  return {
    summaryWords: templateLimits.summaryWords || defaultSectionLimits.summaryWords,
    summaryChars: templateLimits.summaryChars || defaultSectionLimits.summaryChars,
    achievementLength: templateLimits.achievementLength || defaultSectionLimits.achievementLength,
    descriptionLength: templateLimits.descriptionLength || defaultSectionLimits.descriptionLength,
    achievementsPerExperience: templateLimits.achievementsPerExperience || defaultSectionLimits.achievementsPerExperience,
    achievementsPerProject: templateLimits.achievementsPerProject || defaultSectionLimits.achievementsPerProject,
    educationAchievements: templateLimits.educationAchievements || defaultSectionLimits.educationAchievements
  };
};

// Check if template exists
export const templateExists = (templateId) => {
  const templateKey = `Template${templateId}`;
  return !!templateSections[templateKey];
};

// Get summary of template configuration
export const getTemplateSummary = (templateId) => {
  const sections = getTemplateSections(templateId);
  const limits = getApplicableSectionLimits(templateId);
  const textLimits = getTemplateTextLimits(templateId);
  
  return {
    templateId,
    sections,
    optionalSections: [],
    limits,
    textLimits,
    hasImage: hasImageSection(templateId)
  };
};

// Get the order of sections for a specific template
export const getSectionOrder = (templateId) => {
  return getTemplateSections(templateId);
};

// Check if a section is required
export const isSectionRequired = (templateId, sectionName) => {
  const sections = getTemplateSections(templateId);
  return sections.includes(sectionName);
};

// Get validation rules for a template section
export const getSectionValidationRules = (templateId, sectionName) => {
  const limits = getSectionLimitInfo(templateId, sectionName);
  
  return {
    required: isSectionRequired(templateId, sectionName),
    maxEntries: limits.limit,
    canAddMore: limits.canAdd,
    remaining: limits.remaining,
    isDisabled: limits.isDisabled
  };
};