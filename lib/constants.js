// App constants
export const APP_NAME = 'Resume Builder Pro';
export const APP_URL = 'https://freeresumemaker.xyz';
export const APP_DESCRIPTION = 'Create professional, ATS-friendly resumes with our free resume builder';

// Template constants
export const TOTAL_TEMPLATES = 17;
export const DEFAULT_TEMPLATE_ID = 1;

// Section constants
export const REQUIRED_SECTIONS = ['personalInfo', 'email'];
export const CORE_SECTIONS = ['summary', 'experience', 'education', 'skills'];

// Validation limits
export const VALIDATION_LIMITS = {
  fullName: { min: 2, max: 50 },
  email: { max: 100 },
  phone: { max: 20 },
  jobTitle: { max: 60 },
  summary: { max: 500 }
};

// LocalStorage keys
export const STORAGE_KEYS = {
  RESUME_STATE: 'resumeState',
  USER_PREFERENCES: 'userPreferences',
  SAVED_RESUMES: 'savedResumes'
};
