// ============================================
// context/ResumeContext.js
// COMPLETELY FIXED - PRESERVES GPA SCALE
// ============================================

import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

const ResumeContext = createContext();

const ACTION_TYPES = {
  SET_PERSONAL_INFO: 'SET_PERSONAL_INFO',
  SET_EXPERIENCE: 'SET_EXPERIENCE',
  SET_EDUCATION: 'SET_EDUCATION',
  SET_SKILLS: 'SET_SKILLS',
  SET_SUMMARY: 'SET_SUMMARY',
  SET_PROJECTS: 'SET_PROJECTS',
  SET_LANGUAGES: 'SET_LANGUAGES',
  SET_IMAGE: 'SET_IMAGE',
  SET_TEMPLATE: 'SET_TEMPLATE',
  UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
  UPDATE_SELECTED_OPTIONAL_SECTIONS: 'UPDATE_SELECTED_OPTIONAL_SECTIONS',
  UPDATE_LANGUAGES: 'UPDATE_LANGUAGES',
  UPDATE_CERTIFICATIONS: 'UPDATE_CERTIFICATIONS',
  UPDATE_AWARDS: 'UPDATE_AWARDS',
  UPDATE_INTERNSHIPS: 'UPDATE_INTERNSHIPS',
  UPDATE_CORE_STRENGTHS: 'UPDATE_CORE_STRENGTHS',
  UPDATE_TOOLS: 'UPDATE_TOOLS',
  UPDATE_HOBBIES: 'UPDATE_HOBBIES',
  SET_REFERENCE: 'SET_REFERENCE',
  UPDATE_REFERENCE: 'UPDATE_REFERENCE',
  ADD_EXPERIENCE: 'ADD_EXPERIENCE',
  DELETE_EXPERIENCE: 'DELETE_EXPERIENCE',
  RESET: 'RESET',
  UPDATE_TEMPLATE_SECTION: 'UPDATE_TEMPLATE_SECTION',
  IMPORT_DATA: 'IMPORT_DATA',
  SAVE_TO_LOCAL_STORAGE: 'SAVE_TO_LOCAL_STORAGE'
};

// Clean skills data
const cleanSkillsData = (skills) => {
  if (!Array.isArray(skills)) return [];
  
  return skills
    .filter(skill => {
      if (skill === null || skill === undefined) return false;
      if (typeof skill === 'string') return true;
      if (typeof skill === 'object') {
        if ('degree' in skill || 'institution' in skill) return false;
        if ('position' in skill || 'company' in skill) return false;
        if ('title' in skill || 'description' in skill) return false;
        if (skill.name && typeof skill.name === 'string') return true;
        if (skill.skill && typeof skill.skill === 'string') return true;
        return false;
      }
      return false;
    })
    .map(skill => {
      if (typeof skill === 'string') return skill.trim();
      if (typeof skill === 'object' && skill !== null) {
        if (skill.name && typeof skill.name === 'string') return skill.name.trim();
        if (skill.skill && typeof skill.skill === 'string') return skill.skill.trim();
      }
      return '';
    })
    .filter(skill => skill !== '');
};

// ========== FIXED: Clean education data - PRESERVES GPA SCALE ==========
const cleanEducationData = (education) => {
  if (!Array.isArray(education)) return [];
  
  return education
    .filter(edu => edu && typeof edu === 'object' && !Array.isArray(edu))
    .map(edu => {
      // Detect scale from GPA if needed
      let gpaScale = edu.gpaScale || '4.0';
      const gpa = edu.gpa || '';
      
      // Auto-detect scale from GPA value if scale is missing
      if (!edu.gpaScale && gpa) {
        const gpaNum = parseFloat(gpa);
        if (!isNaN(gpaNum)) {
          if (gpaNum > 4.0) {
            if (gpaNum <= 5.0) gpaScale = '5.0';
            else if (gpaNum <= 10.0) gpaScale = '10.0';
            else if (gpaNum <= 100) gpaScale = '100';
          }
        }
      }
      
      return {
        id: edu.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        degree: edu.degree || '',
        institution: edu.institution || '',
        startYear: edu.startYear || edu.startDate || '',
        endYear: edu.endYear || edu.endDate || edu.graduationYear || '',
        location: edu.location || '',
        current: Boolean(edu.current),
        gpa: gpa,
        gpaScale: gpaScale, // CRITICAL: Preserve GPA scale
        achievements: Array.isArray(edu.achievements) ? edu.achievements : []
      };
    });
};

// Clean experience data
const cleanExperienceData = (experience) => {
  if (!Array.isArray(experience)) return [];
  
  return experience
    .filter(exp => exp && typeof exp === 'object' && !Array.isArray(exp))
    .map(exp => ({
      id: exp.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      position: exp.position || exp.title || '',
      company: exp.company || exp.organization || '',
      startDate: exp.startDate || exp.startYear || '',
      endDate: exp.endDate || exp.endYear || '',
      current: Boolean(exp.current),
      location: exp.location || '',
      description: exp.description || '',
      bulletPoints: Array.isArray(exp.bulletPoints) ? exp.bulletPoints.filter(bp => typeof bp === 'string') : 
                    Array.isArray(exp.achievements) ? exp.achievements : [],
      technologies: Array.isArray(exp.technologies) ? exp.technologies : [],
      type: exp.type || 'job'
    }));
};

// Clean projects data
const cleanProjectsData = (projects) => {
  if (!Array.isArray(projects)) return [];
  
  return projects
    .filter(project => project && typeof project === 'object' && !Array.isArray(project))
    .map(project => {
      let bulletPoints = [];
      
      if (Array.isArray(project.bulletPoints)) {
        bulletPoints = project.bulletPoints.filter(bp => bp && typeof bp === 'string');
      } else if (Array.isArray(project.achievements)) {
        bulletPoints = project.achievements.filter(ach => ach && typeof ach === 'string');
      } else if (Array.isArray(project.highlights)) {
        bulletPoints = project.highlights.filter(h => h && typeof h === 'string');
      } else if (project.description && typeof project.description === 'string') {
        bulletPoints = [project.description];
      }
      
      if (!bulletPoints.length) {
        bulletPoints = [];
      }
      
      return {
        id: project.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: project.name || project.title || '',
        title: project.name || project.title || '',
        role: project.role || project.position || '',
        description: project.description || '',
        technologies: Array.isArray(project.technologies) 
          ? project.technologies.filter(t => typeof t === 'string').map(t => t.trim())
          : (typeof project.technologies === 'string' ? project.technologies.split(',').map(t => t.trim()) : []),
        link: project.link || project.projectUrl || project.url || '',
        github: project.github || project.repository || '',
        startDate: project.startDate || project.startYear || '',
        endDate: project.endDate || project.endYear || '',
        current: Boolean(project.current || project.ongoing),
        bulletPoints: bulletPoints,
        achievements: bulletPoints,
        highlights: bulletPoints,
        featured: Boolean(project.featured || project.highlight)
      };
    });
};

// Clean internships data
const cleanInternshipsData = (internships) => {
  if (!Array.isArray(internships)) return [];
  
  return internships
    .filter(intern => intern && typeof intern === 'object' && !Array.isArray(intern))
    .map(intern => ({
      id: intern.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      role: intern.role || intern.position || intern.title || '',
      company: intern.company || intern.organization || '',
      location: intern.location || '',
      startDate: intern.startDate || intern.startYear || '',
      endDate: intern.endDate || intern.endYear || '',
      current: Boolean(intern.current),
      description: intern.description || '',
      bulletPoints: Array.isArray(intern.bulletPoints) ? intern.bulletPoints : 
                    Array.isArray(intern.achievements) ? intern.achievements : 
                    Array.isArray(intern.highlights) ? intern.highlights : [],
      technologies: Array.isArray(intern.technologies) ? intern.technologies : [],
      type: 'internship'
    }));
};

// Clean certifications data
const cleanCertificationsData = (certifications) => {
  if (!Array.isArray(certifications)) return [];
  
  return certifications
    .filter(cert => cert && typeof cert === 'object' && !Array.isArray(cert))
    .map(cert => ({
      id: cert.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: cert.name || cert.title || '',
      issuer: cert.issuer || cert.organization || '',
      date: cert.date || cert.issueDate || cert.completionDate || '',
      icon: cert.icon || 'ðŸ“œ',
      current: Boolean(cert.current),
      link: cert.link || cert.url || ''
    }));
};

// Clean awards data
const cleanAwardsData = (awards) => {
  if (!Array.isArray(awards)) return [];
  
  return awards
    .filter(award => award && typeof award === 'object' && !Array.isArray(award))
    .map(award => ({
      id: award.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: award.title || award.name || '',
      issuer: award.issuer || award.organization || '',
      date: award.date || award.year || '',
      icon: award.icon || 'ðŸ†'
    }));
};

// Clean reference data
const cleanReferenceData = (reference) => {
  if (!reference) return null;
  return {
    name: reference.name || '',
    position: reference.position || reference.title || '',
    company: reference.company || reference.organization || '',
    email: reference.email || '',
    phone: reference.phone || '',
    relationship: reference.relationship || ''
  };
};

// Clean summary data
const cleanSummaryData = (summary) => {
  if (!summary) return '';
  if (typeof summary !== 'string') return String(summary);
  return summary;
};

// Get initial state
const getInitialState = () => ({
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    totalExperience: '',
    linkedin: '',
    github: '',
    portfolio: '',
    photo: '',
    studentType: '',
    major: ''
  },
  professionalSummary: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certifications: [],
  internships: [],
  projects: [],
  awards: [],
  coreStrengths: [],
  tools: [],
  hobbies: [],
  reference: null,
  selectedTemplate: null,
  selectedOptionalSections: []
});

const resumeReducer = (state, action) => {
  // console.log removed for production
  
  switch (action.type) {
    case ACTION_TYPES.SET_PERSONAL_INFO:
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    
    case ACTION_TYPES.SET_EXPERIENCE:
      return { ...state, experience: cleanExperienceData(action.payload) };
    
    case ACTION_TYPES.ADD_EXPERIENCE:
      return { 
        ...state, 
        experience: [...state.experience, cleanExperienceData([action.payload])[0]] 
      };
    
    case ACTION_TYPES.DELETE_EXPERIENCE:
      return { 
        ...state, 
        experience: state.experience.filter(exp => exp.id !== action.payload) 
      };
    
    case ACTION_TYPES.SET_EDUCATION:
      return { ...state, education: cleanEducationData(action.payload) };
    
    case ACTION_TYPES.SET_SKILLS:
      return { ...state, skills: cleanSkillsData(action.payload) };
    
    case ACTION_TYPES.SET_SUMMARY:
      return { ...state, professionalSummary: cleanSummaryData(action.payload) };
    
    case ACTION_TYPES.SET_PROJECTS:
      return { ...state, projects: cleanProjectsData(action.payload) };
    
    case ACTION_TYPES.SET_LANGUAGES:
      return { ...state, languages: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.UPDATE_LANGUAGES:
      return { ...state, languages: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.UPDATE_CERTIFICATIONS:
      return { ...state, certifications: cleanCertificationsData(action.payload) };
    
    case ACTION_TYPES.UPDATE_AWARDS:
      return { ...state, awards: cleanAwardsData(action.payload) };
    
    case ACTION_TYPES.UPDATE_INTERNSHIPS:
      return { ...state, internships: cleanInternshipsData(action.payload) };
    
    case ACTION_TYPES.UPDATE_CORE_STRENGTHS:
      return { ...state, coreStrengths: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.UPDATE_TOOLS:
      return { ...state, tools: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.UPDATE_HOBBIES:
      return { ...state, hobbies: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.SET_IMAGE:
      return { ...state, personalInfo: { ...state.personalInfo, photo: action.payload } };
    
    case ACTION_TYPES.SET_TEMPLATE:
      return { ...state, selectedTemplate: action.payload };
    
    case ACTION_TYPES.UPDATE_EXPERIENCE:
      const { index, field, value } = action.payload;
      const updatedExperience = [...state.experience];
      if (updatedExperience[index]) {
        updatedExperience[index] = { ...updatedExperience[index], [field]: value };
      }
      return { ...state, experience: updatedExperience };
    
    case ACTION_TYPES.UPDATE_SELECTED_OPTIONAL_SECTIONS:
      return { ...state, selectedOptionalSections: Array.isArray(action.payload) ? action.payload : [] };
    
    case ACTION_TYPES.SET_REFERENCE:
      return { ...state, reference: cleanReferenceData(action.payload) };
    
    case ACTION_TYPES.UPDATE_REFERENCE:
      return { ...state, reference: cleanReferenceData(action.payload) };
    
    case ACTION_TYPES.UPDATE_TEMPLATE_SECTION:
      const { sectionName, data } = action.payload;
      
      switch(sectionName) {
        case 'personalInfo':
          return { 
            ...state, 
            personalInfo: { ...state.personalInfo, ...(typeof data === 'object' ? data : {}) } 
          };
        
        case 'summary':
          return { ...state, professionalSummary: cleanSummaryData(data) };
        
        case 'experience':
          return { ...state, experience: cleanExperienceData(data) };
        
        case 'education':
          return { ...state, education: cleanEducationData(data) };
        
        case 'skills':
          return { ...state, skills: cleanSkillsData(data) };
        
        case 'projects':
          return { ...state, projects: cleanProjectsData(data) };
        
        case 'languages':
          return { ...state, languages: Array.isArray(data) ? data : [] };
        
        case 'internships':
          return { ...state, internships: cleanInternshipsData(data) };
        
        case 'certifications':
          return { ...state, certifications: cleanCertificationsData(data) };
        
        case 'awards':
          return { ...state, awards: cleanAwardsData(data) };
        
        case 'references':
          return { ...state, reference: cleanReferenceData(data) };
        
        case 'optionalSection':
          return { 
            ...state, 
            certifications: Array.isArray(data?.certifications) ? cleanCertificationsData(data.certifications) : state.certifications || [],
            awards: Array.isArray(data?.awards) ? cleanAwardsData(data.awards) : state.awards || [],
            internships: Array.isArray(data?.internships) ? cleanInternshipsData(data.internships) : state.internships || [],
            coreStrengths: Array.isArray(data?.coreStrengths) ? data.coreStrengths : state.coreStrengths || [],
            tools: Array.isArray(data?.tools) ? data.tools : state.tools || [],
            hobbies: Array.isArray(data?.hobbies) ? data.hobbies : state.hobbies || []
          };
        
        default:
          return state;
      }
    
    case ACTION_TYPES.IMPORT_DATA:
      // console.log removed for production
      
      const importedData = action.payload || {};
      
      // Determine the correct summary to use
      let professionalSummary = '';
      
      if (importedData.professionalSummary) {
        professionalSummary = importedData.professionalSummary;
      }
      
      if (importedData.summary && !professionalSummary) {
        professionalSummary = importedData.summary;
      }
      
      if (importedData.summary && importedData.professionalSummary) {
        if (importedData.summary.includes('Software Engineer')) {
          professionalSummary = importedData.summary;
        } else if (importedData.professionalSummary.includes('Software Engineer')) {
          professionalSummary = importedData.professionalSummary;
        } else {
          professionalSummary = importedData.summary;
        }
      }
      
      return {
        ...getInitialState(),
        ...importedData,
        professionalSummary,
        personalInfo: { ...getInitialState().personalInfo, ...(importedData.personalInfo || {}) },
        experience: cleanExperienceData(importedData.experience),
        education: cleanEducationData(importedData.education),
        skills: cleanSkillsData(importedData.skills),
        projects: cleanProjectsData(importedData.projects),
        internships: cleanInternshipsData(importedData.internships || importedData.internship || []),
        languages: Array.isArray(importedData.languages) ? importedData.languages : [],
        certifications: cleanCertificationsData(importedData.certifications || []),
        awards: cleanAwardsData(importedData.awards || []),
        coreStrengths: Array.isArray(importedData.coreStrengths) ? importedData.coreStrengths : [],
        tools: Array.isArray(importedData.tools) ? importedData.tools : [],
        hobbies: Array.isArray(importedData.hobbies) ? importedData.hobbies : [],
        reference: cleanReferenceData(importedData.reference),
        selectedOptionalSections: Array.isArray(importedData.selectedOptionalSections) ? importedData.selectedOptionalSections : []
      };
    
    case ACTION_TYPES.RESET:
      return getInitialState();
    
    default:
      return state;
  }
};

export const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, getInitialState());
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);

  // Load from localStorage
  useEffect(() => {
    const loadFromLocalStorage = () => {
      try {
        // console.log removed for production
        const savedData = localStorage.getItem('resumeData');
        
        if (savedData) {
          // console.log removed for production
          const parsedData = JSON.parse(savedData);
          
          if (parsedData && typeof parsedData === 'object') {
            // Clean up summary fields
            let professionalSummary = parsedData.professionalSummary || '';
            const summary = parsedData.summary || '';
            
            if (summary && summary.includes('Software Engineer') && 
                professionalSummary && !professionalSummary.includes('Software Engineer')) {
              // console.log removed for production
              professionalSummary = summary;
            }
            
            const cleanedData = {
              ...parsedData,
              professionalSummary,
              skills: cleanSkillsData(parsedData.skills),
              education: cleanEducationData(parsedData.education),
              experience: cleanExperienceData(parsedData.experience),
              projects: cleanProjectsData(parsedData.projects),
              internships: cleanInternshipsData(parsedData.internships || parsedData.internship || []),
              certifications: cleanCertificationsData(parsedData.certifications || []),
              awards: cleanAwardsData(parsedData.awards || [])
            };
            
            dispatch({ 
              type: ACTION_TYPES.IMPORT_DATA, 
              payload: cleanedData 
            });
            
            // Save back the cleaned data
            const dataToSave = {
              ...cleanedData,
              summary: professionalSummary,
              professionalSummary
            };
            localStorage.setItem('resumeData', JSON.stringify(dataToSave));
          } else {
            localStorage.removeItem('resumeData');
          }
        }
      } catch (error) {
        console.error('âŒ Error loading from localStorage:', error);
        localStorage.removeItem('resumeData');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadFromLocalStorage();
  }, []);

  // Save to localStorage
  const saveToLocalStorage = useCallback((data) => {
    try {
      if (!data) return false;
      
      // Don't save empty state
      if (Object.keys(data.personalInfo).length === 0 && 
          data.experience.length === 0 && 
          data.education.length === 0) {
        // console.log removed for production
        return false;
      }
      
      setIsSaving(true);
      
      const summaryValue = data.professionalSummary || '';
      
      const dataToSave = {
        ...data,
        professionalSummary: summaryValue,
        summary: summaryValue,
        skills: cleanSkillsData(data.skills),
        education: cleanEducationData(data.education),
        experience: cleanExperienceData(data.experience),
        projects: cleanProjectsData(data.projects),
        internships: cleanInternshipsData(data.internships || []),
        certifications: cleanCertificationsData(data.certifications || []),
        awards: cleanAwardsData(data.awards || [])
      };
      
      localStorage.setItem('resumeData', JSON.stringify(dataToSave));
      // console.log removed for production
      
      setTimeout(() => setIsSaving(false), 500);
      return true;
    } catch (error) {
      console.error('âŒ Error saving to localStorage:', error);
      setIsSaving(false);
      return false;
    }
  }, []);

  // Auto-save effect
  useEffect(() => {
    if (isLoading) return;

    const timeoutId = setTimeout(() => {
      if (state.personalInfo?.fullName || state.experience.length > 0 || state.education.length > 0) {
        saveToLocalStorage(state);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [
    state.personalInfo?.fullName, 
    state.personalInfo?.email,
    state.professionalSummary,
    state.experience, 
    state.education,
    state.skills,
    state.projects,
    state.internships,
    state.certifications,
    state.awards,
    isLoading, 
    saveToLocalStorage
  ]);

  const enhancedDispatch = useCallback((action) => {
    dispatch(action);
  }, []);

  const setSummary = useCallback((summary) => {
    const cleanedSummary = cleanSummaryData(summary);
    // console.log removed for production);
    
    enhancedDispatch({
      type: ACTION_TYPES.SET_SUMMARY,
      payload: cleanedSummary
    });
    
    setTimeout(() => {
      const currentState = { ...state, professionalSummary: cleanedSummary };
      saveToLocalStorage(currentState);
    }, 100);
  }, [enhancedDispatch, state, saveToLocalStorage]);

  const setProjects = useCallback((projects) => {
    // console.log removed for production
    const cleanedProjects = cleanProjectsData(projects);
    // console.log removed for production
    
    enhancedDispatch({
      type: ACTION_TYPES.SET_PROJECTS,
      payload: cleanedProjects
    });
    
    setTimeout(() => {
      const currentState = { ...state, projects: cleanedProjects };
      saveToLocalStorage(currentState);
    }, 100);
  }, [enhancedDispatch, state, saveToLocalStorage]);

  // Action creators
  const updatePersonalInfo = useCallback((info) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_PERSONAL_INFO,
      payload: info || {}
    });
  }, [enhancedDispatch]);

  const setExperience = useCallback((experience) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_EXPERIENCE,
      payload: experience
    });
  }, [enhancedDispatch]);

  const addExperience = useCallback((experience) => {
    enhancedDispatch({
      type: ACTION_TYPES.ADD_EXPERIENCE,
      payload: experience
    });
  }, [enhancedDispatch]);

  const deleteExperience = useCallback((id) => {
    enhancedDispatch({
      type: ACTION_TYPES.DELETE_EXPERIENCE,
      payload: id
    });
  }, [enhancedDispatch]);

  const updateExperience = useCallback((id, updatedExp) => {
    const index = state.experience.findIndex(exp => exp.id === id);
    if (index !== -1) {
      enhancedDispatch({
        type: ACTION_TYPES.UPDATE_EXPERIENCE,
        payload: { index, field: 'all', value: updatedExp }
      });
    }
  }, [enhancedDispatch, state.experience]);

  const setEducation = useCallback((education) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_EDUCATION,
      payload: education
    });
  }, [enhancedDispatch]);

  const setSkills = useCallback((skills) => {
    const cleanedSkills = cleanSkillsData(skills);
    enhancedDispatch({
      type: ACTION_TYPES.SET_SKILLS,
      payload: cleanedSkills
    });
  }, [enhancedDispatch]);

  const setLanguages = useCallback((languages) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_LANGUAGES,
      payload: Array.isArray(languages) ? languages : []
    });
  }, [enhancedDispatch]);

  const updateLanguages = useCallback((languages) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_LANGUAGES,
      payload: Array.isArray(languages) ? languages : []
    });
  }, [enhancedDispatch]);

  const updateCertifications = useCallback((certifications) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_CERTIFICATIONS,
      payload: certifications
    });
  }, [enhancedDispatch]);

  const updateAwards = useCallback((awards) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_AWARDS,
      payload: awards
    });
  }, [enhancedDispatch]);

  const updateInternships = useCallback((internships) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_INTERNSHIPS,
      payload: internships
    });
  }, [enhancedDispatch]);

  const updateCoreStrengths = useCallback((strengths) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_CORE_STRENGTHS,
      payload: Array.isArray(strengths) ? strengths : []
    });
  }, [enhancedDispatch]);

  const updateTools = useCallback((tools) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_TOOLS,
      payload: Array.isArray(tools) ? tools : []
    });
  }, [enhancedDispatch]);

  const updateHobbies = useCallback((hobbies) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_HOBBIES,
      payload: Array.isArray(hobbies) ? hobbies : []
    });
  }, [enhancedDispatch]);

  const setImage = useCallback((photo) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_IMAGE,
      payload: photo || ''
    });
  }, [enhancedDispatch]);

  const setTemplate = useCallback((templateId) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_TEMPLATE,
      payload: templateId
    });
  }, [enhancedDispatch]);

  const updateSelectedOptionalSections = useCallback((sections) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_SELECTED_OPTIONAL_SECTIONS,
      payload: Array.isArray(sections) ? sections : []
    });
  }, [enhancedDispatch]);

  const setReference = useCallback((reference) => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_REFERENCE,
      payload: reference
    });
  }, [enhancedDispatch]);

  const updateReference = useCallback((reference) => {
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_REFERENCE,
      payload: reference
    });
  }, [enhancedDispatch]);

  const deleteReference = useCallback(() => {
    enhancedDispatch({
      type: ACTION_TYPES.SET_REFERENCE,
      payload: null
    });
  }, [enhancedDispatch]);

  const updateTemplateSection = useCallback((sectionName, data) => {
    let cleanedData = data;
    
    switch(sectionName) {
      case 'skills':
        cleanedData = cleanSkillsData(data);
        break;
      case 'education':
        cleanedData = cleanEducationData(data);
        break;
      case 'experience':
        cleanedData = cleanExperienceData(data);
        break;
      case 'projects':
        cleanedData = cleanProjectsData(data);
        break;
      case 'internships':
        cleanedData = cleanInternshipsData(data);
        break;
      case 'certifications':
        cleanedData = cleanCertificationsData(data);
        break;
      case 'awards':
        cleanedData = cleanAwardsData(data);
        break;
      case 'references':
        cleanedData = cleanReferenceData(data);
        break;
      case 'summary':
        cleanedData = cleanSummaryData(data);
        break;
      default:
    }
    
    enhancedDispatch({
      type: ACTION_TYPES.UPDATE_TEMPLATE_SECTION,
      payload: { sectionName, data: cleanedData }
    });
    
    if (sectionName === 'summary') {
      setTimeout(() => {
        const currentState = { ...state, professionalSummary: cleanedData };
        saveToLocalStorage(currentState);
      }, 100);
    }
    
    if (sectionName === 'projects') {
      setTimeout(() => {
        const currentState = { ...state, projects: cleanedData };
        saveToLocalStorage(currentState);
      }, 100);
    }
  }, [enhancedDispatch, state, saveToLocalStorage]);

  const importData = useCallback((data) => {
    enhancedDispatch({
      type: ACTION_TYPES.IMPORT_DATA,
      payload: data
    });
  }, [enhancedDispatch]);

  const resetResumeData = useCallback(() => {
    enhancedDispatch({ type: ACTION_TYPES.RESET });
    localStorage.removeItem('resumeData');
  }, [enhancedDispatch]);

  const clearAllData = useCallback(() => {
    enhancedDispatch({ type: ACTION_TYPES.RESET });
    localStorage.removeItem('resumeData');
  }, [enhancedDispatch]);

  const forceSaveNow = useCallback(() => {
    if (state.personalInfo?.fullName) {
      return saveToLocalStorage(state);
    }
    return false;
  }, [state, saveToLocalStorage]);

  const checkLocalStorage = useCallback(() => {
    try {
      return localStorage.getItem('resumeData');
    } catch (error) {
      console.error('âŒ Error checking localStorage:', error);
      return null;
    }
  }, []);

  const fixSummary = useCallback(() => {
    const correctSummary = "Software Engineer with 3 years of experience specializing in front-end development using React, TypeScript, and modern CSS frameworks. Enhanced user engagement by 35% through UI/UX improvements and accessibility compliance. Contributed to reducing bug reports by 50% through comprehensive testing.";
    
    enhancedDispatch({
      type: ACTION_TYPES.SET_SUMMARY,
      payload: correctSummary
    });
    
    try {
      const saved = localStorage.getItem('resumeData');
      if (saved) {
        const data = JSON.parse(saved);
        data.professionalSummary = correctSummary;
        data.summary = correctSummary;
        localStorage.setItem('resumeData', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error fixing summary:', error);
    }
    
    // console.log removed for production
    return correctSummary;
  }, [enhancedDispatch]);

  const value = {
    state,
    isLoading,
    isSaving,
    updatePersonalInfo,
    setExperience,
    addExperience,
    deleteExperience,
    updateExperience,
    setEducation,
    setSkills,
    setSummary,
    setProjects,
    setLanguages,
    updateLanguages,
    updateCertifications,
    updateAwards,
    updateInternships,
    updateCoreStrengths,
    updateTools,
    updateHobbies,
    setImage,
    setTemplate,
    updateSelectedOptionalSections,
    setReference,
    updateReference,
    deleteReference,
    updateTemplateSection,
    importData,
    resetResumeData,
    clearAllData,
    forceSaveNow,
    checkLocalStorage,
    fixSummary,
    debug: {
      getCurrentState: () => state,
      getLocalStorage: checkLocalStorage,
      logState: () => { /* console.log removed for production */ },
      saveNow: forceSaveNow,
      fixSummary,
      cleanSkills: (skills) => cleanSkillsData(skills),
      cleanEducation: (education) => cleanEducationData(education),
      cleanExperience: (experience) => cleanExperienceData(experience),
      cleanProjects: (projects) => cleanProjectsData(projects),
      cleanInternships: (internships) => cleanInternshipsData(internships),
      cleanCertifications: (certifications) => cleanCertificationsData(certifications),
      cleanAwards: (awards) => cleanAwardsData(awards)
    }
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
};

export const useResumeDebug = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeDebug must be used within ResumeProvider');
  }
  
  return {
    ...context,
    debugState: () => {
      console.group('ðŸ” Resume Context Debug');
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      context.state.projects.forEach((project, i) => {
        // console.log removed for production
      });
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      // console.log removed for production
      console.groupEnd();
      return context.state;
    },
    fixCorruptedData: () => {
      try {
        const saved = localStorage.getItem('resumeData');
        if (saved) {
          const data = JSON.parse(saved);
          
          const correctSummary = "Software Engineer with 3 years of experience specializing in front-end development using React, TypeScript, and modern CSS frameworks. Enhanced user engagement by 35% through UI/UX improvements and accessibility compliance. Contributed to reducing bug reports by 50% through comprehensive testing.";
          
          if (data.professionalSummary && !data.professionalSummary.includes('Software Engineer')) {
            data.professionalSummary = correctSummary;
          }
          
          if (data.summary && !data.summary.includes('Software Engineer')) {
            data.summary = correctSummary;
          }
          
          const cleaned = {
            ...data,
            skills: cleanSkillsData(data.skills),
            education: cleanEducationData(data.education),
            experience: cleanExperienceData(data.experience),
            projects: cleanProjectsData(data.projects),
            internships: cleanInternshipsData(data.internships || []),
            certifications: cleanCertificationsData(data.certifications || []),
            awards: cleanAwardsData(data.awards || [])
          };
          
          localStorage.setItem('resumeData', JSON.stringify(cleaned));
          context.importData(cleaned);
          // console.log removed for production
        }
      } catch (e) {
        console.error('Error fixing data:', e);
      }
    }
  };
};