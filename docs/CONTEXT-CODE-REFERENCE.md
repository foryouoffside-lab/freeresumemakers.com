// CONTEXT WRAPPER FUNCTIONS REFERENCE
// ------------------------------------
// ALWAYS use these instead of raw dispatch:

// Personal Information
const { updatePersonalInfo, state } = useResume();
updatePersonalInfo(data);

// Experience  
const { setExperience, state } = useResume();
setExperience(experienceArray);

// Education
const { setEducation, state } = useResume();
setEducation(educationArray);

// Skills
const { setSkills, state } = useResume();
setSkills(skillsArray);

// Projects
const { setProjects, state } = useResume();
setProjects(projectsArray);

// Languages
const { setLanguages, state } = useResume();
setLanguages(languagesArray);

// Summary
const { setSummary, state } = useResume();
setSummary(summaryText);

// Image/Photo
const { setImage, state } = useResume();
setImage(imageUrl);

// Template
const { setTemplate, state } = useResume();
setTemplate(templateId);

// DO NOT use raw dispatch like this:
//  dispatch({ type: 'SET_EXPERIENCE', payload: data })

// DO use wrapper functions like this:
//  setExperience(data)
