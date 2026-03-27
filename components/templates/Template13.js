import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useResume } from '../../context/ResumeContext';

// ===== DEBUG MODE =====
const DEBUG_MODE = false; // Set to false in production

const Template13 = ({ isExporting = false, ...props }) => {
  const resumeData = props.personalInfo ? props : useResume().state;
  const { personalInfo, education, experience, skills, languages = [], hobbies = [], professionalSummary, certifications = [], projects = [], awards = [], tools = [], coreStrengths = [], reference } = resumeData;
  const templateRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  // ===== DEBUG LOGGING =====
  const debugLog = (message, data = null, level = 'info') => {
    if (DEBUG_MODE) {
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      const logMessage = `[Template13 DEBUG ${timestamp}] ${message}`;
      
      if (level === 'error') {
        console.error(logMessage, data);
      } else if (level === 'warn') {
        console.warn(logMessage, data);
      } else {

      }
    }
  };

  // ===== HELPER FUNCTIONS =====
  const safeString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') {
      return value.name || value.text || value.title || value.language || '';
    }
    return String(value).trim();
  };

  const safeArray = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item != null);
  };

  // ===== GPA FORMATTING HELPER =====
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

  // Helper to check if item has content
  const hasContent = (item) => {
    if (!item) return false;
    
    if (item.useDescription !== undefined) {
      if (item.useDescription === false) {
        return item.achievements && safeArray(item.achievements).some(ach => safeString(ach).length > 0);
      } else {
        return safeString(item.description).length > 0;
      }
    } else {
      return (item.achievements && safeArray(item.achievements).length > 0) || 
             (item.bulletPoints && safeArray(item.bulletPoints).length > 0) ||
             (item.description && safeString(item.description).length > 0) ||
             (item.achievementsPhrase && safeString(item.achievementsPhrase).length > 0);
    }
  };

  // ===== UPDATED CONTENT LIMITS =====
  const CONTENT_LIMITS = {
    experiences: 2,
    projects: 1,
    skills: 7,
    certifications: 1,
    education: 1,
    summaryWords: 80,
    achievementsPerExperience: 4, // CHANGED: Increased from 3 to 4
    achievementMaxLength: 140,
  };

  // ===== Process Experience =====
  const processExperience = (exp) => {
    const hasUseBulletPoints = exp.useBulletPoints !== undefined;
    const useBulletPoints = exp.useBulletPoints !== false;
    
    const position = exp.position || exp.title || '';
    const company = exp.company || exp.organization || '';
    const location = exp.location || exp.companyLocation || '';
    
    // Get achievements from either achievements or bulletPoints
    let achievements = [];
    if (exp.achievements && Array.isArray(exp.achievements)) {
      achievements = exp.achievements;
    } else if (exp.bulletPoints && Array.isArray(exp.bulletPoints)) {
      achievements = exp.bulletPoints;
    }
    
    debugLog('Processing experience:', { position, company, achievementsCount: achievements.length });
    
    if (hasUseBulletPoints) {
      return {
        ...exp,
        position: safeString(position),
        company: safeString(company),
        location: safeString(location),
        useBulletPoints,
        achievements: useBulletPoints ? 
          safeArray(achievements)
            .slice(0, CONTENT_LIMITS.achievementsPerExperience) // Now uses 4
            .map(achievement => 
              safeString(achievement).slice(0, CONTENT_LIMITS.achievementMaxLength)
            ) : [],
        achievementsPhrase: !useBulletPoints && exp.achievementsPhrase ? 
          safeString(exp.achievementsPhrase) : ''
      };
    } else {
      return {
        ...exp,
        position: safeString(position),
        company: safeString(company),
        location: safeString(location),
        useBulletPoints: true,
        achievements: exp.achievementsPhrase ? [] : 
          safeArray(achievements)
            .slice(0, CONTENT_LIMITS.achievementsPerExperience) // Now uses 4
            .map(achievement => 
              safeString(achievement).slice(0, CONTENT_LIMITS.achievementMaxLength)
            ),
        achievementsPhrase: exp.achievementsPhrase ? 
          safeString(exp.achievementsPhrase) : ''
      };
    }
  };

  // ===== Process Education - UPDATED with GPA and achievements =====
  const processEducation = (edu) => {
    debugLog('Processing education:', edu);
    
    // Process education achievements/bullet points
    let achievements = [];
    if (edu.achievements && Array.isArray(edu.achievements)) {
      achievements = edu.achievements;
    } else if (edu.bulletPoints && Array.isArray(edu.bulletPoints)) {
      achievements = edu.bulletPoints;
    } else if (edu.honors && Array.isArray(edu.honors)) {
      achievements = edu.honors;
    }
    
    // Format GPA display
    const gpaDisplay = edu.gpa ? formatGPA(edu.gpa, edu.gpaScale) : '';
    
    return {
      ...edu,
      degree: safeString(edu.degree),
      institution: safeString(edu.institution),
      location: safeString(edu.location),
      startDate: edu.startYear || edu.startDate || '',
      endDate: edu.endYear || edu.endDate || edu.graduationYear || '',
      current: edu.current || false,
      gpa: edu.gpa || '',
      gpaScale: edu.gpaScale || '4.0',
      gpaDisplay,
      achievements: safeArray(achievements)
        .slice(0, CONTENT_LIMITS.educationAchievements)
        .map(achievement => safeString(achievement))
    };
  };

  // ===== Process Project =====
  const processProject = (project) => {
    return {
      ...project,
      name: safeString(project.name || project.title),
      role: safeString(project.role),
      link: project.link || ''
    };
  };

  // ===== Process Certification =====
  const processCertification = (cert) => {
    return {
      ...cert,
      title: safeString(cert.title || cert.name),
      issuer: safeString(cert.organization || cert.issuer || cert.givenBy),
      year: cert.year || cert.date || ''
    };
  };

  // ===== CONTENT ANALYSIS =====
  const contentAnalysis = useMemo(() => {
    debugLog('Starting content analysis');
    
    // Process experiences
    const rawExperiences = safeArray(experience);
    debugLog('Raw experiences count:', rawExperiences.length);
    
    const filteredExperiences = rawExperiences.filter(hasContent);
    debugLog('Filtered experiences count:', filteredExperiences.length);
    
    const processExperiences = filteredExperiences
      .slice(0, CONTENT_LIMITS.experiences)
      .map(processExperience);
    
    debugLog('Processed experiences count:', processExperiences.length);
    
    // Process projects
    const processProjects = safeArray(projects)
      .slice(0, CONTENT_LIMITS.projects)
      .map(processProject);
    
    // Process education
    const rawEducation = safeArray(education);
    debugLog('Raw education count:', rawEducation.length);
    
    const processEducationData = rawEducation
      .slice(0, CONTENT_LIMITS.education)
      .map(processEducation);
    
    debugLog('Processed education count:', processEducationData.length);
    
    // Process certifications - only 1
    const processCertificationsData = safeArray(certifications)
      .slice(0, CONTENT_LIMITS.certifications)
      .map(processCertification);
    
    // Convert single reference to array
    const referencesArray = reference ? [reference] : [];

    // Process summary
    const limitedSummary = professionalSummary ? 
      (safeString(professionalSummary).split(' ').length > CONTENT_LIMITS.summaryWords ? 
        safeString(professionalSummary).split(' ').slice(0, CONTENT_LIMITS.summaryWords).join(' ') + '...' : 
        professionalSummary
      ) : '';

    // Process all data - awards removed
    const processData = {
      experiences: processExperiences,
      projects: processProjects,
      skills: safeArray(skills).slice(0, CONTENT_LIMITS.skills),
      languages: safeArray(languages).slice(0, CONTENT_LIMITS.languages),
      hobbies: safeArray(hobbies).slice(0, CONTENT_LIMITS.hobbies),
      tools: safeArray(tools).slice(0, CONTENT_LIMITS.tools),
      coreStrengths: safeArray(coreStrengths).slice(0, CONTENT_LIMITS.coreStrengths),
      certifications: processCertificationsData,
      education: processEducationData,
      references: referencesArray.slice(0, CONTENT_LIMITS.references),
    };

    // Calculate sections - awards removed
    const sections = {
      summary: limitedSummary.length > 0,
      experience: processData.experiences.length,
      projects: processData.projects.length > 0,
      education: processData.education.length,
      skills: processData.skills.length,
      languages: processData.languages.length,
      hobbies: processData.hobbies.length,
      certifications: processData.certifications.length,
      tools: processData.tools.length,
      coreStrengths: processData.coreStrengths.length,
      references: processData.references.length
    };

    debugLog('Content analysis complete', { 
      experiencesCount: processData.experiences.length,
      educationCount: processData.education.length,
      sections 
    });

    return {
      ...processData,
      limitedSummary,
      sections,
      activeSections: Object.values(sections).filter(Boolean).length
    };
  }, [professionalSummary, experience, projects, education, skills, languages, hobbies, certifications, tools, coreStrengths, reference]);

  // ===== DATA GETTERS =====
  const getItemName = {
    skill: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    language: (item) => {
      if (typeof item === 'object') return item.name || item.language || item.lang || '';
      return safeString(item);
    },
    hobby: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    project: (item) => typeof item === 'object' ? item.name || item.title || '' : safeString(item),
    tool: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    coreStrength: (item) => typeof item === 'object' ? item.name || '' : safeString(item),
    certification: (item) => typeof item === 'object' ? item.title || item.name || '' : safeString(item)
  };

  // ===== DATE FORMATTING =====
  const formatDate = (dateString) => {
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
    } catch {
      // If parsing fails, return the original string
    }
    
    return dateString;
  };

  // Format education date range
  const formatEducationDateRange = (startDate, endDate, current) => {
    const start = formatDate(startDate);
    const end = current ? 'Present' : formatDate(endDate);
    
    if (!start && !end) return '';
    if (start && end) return `${start} Ã¢â‚¬â€œ ${end}`;
    if (start) return `${start} Ã¢â‚¬â€œ Present`;
    return end;
  };

  // ===== CONTACT INFO =====
  const contactInfo = useMemo(() => {
    const contacts = [];
    const addContact = (value, label) => {
      if (value) contacts.push({ value: safeString(value), label });
    };

    addContact(personalInfo.email, 'Email');
    addContact(personalInfo.phone, 'Phone');
    addContact(personalInfo.address, 'Address');
    addContact(personalInfo.linkedin, 'LinkedIn');

    return contacts;
  }, [personalInfo]);

  // ===== EXPERIENCE RENDERER - WITH CIRCLES RESTORED, NO DOT BETWEEN COMPANY AND LOCATION, LOCATION TEXT SIZE SMALLER =====
  const renderExperienceItem = (exp, index, total) => {
    const useBulletPoints = exp.useBulletPoints !== false;
    
    debugLog(`Rendering experience[${index}]:`, exp);
    
    return (
      <div 
        key={index} 
        style={{
          display: 'flex',
          marginBottom: '5mm',
          position: 'relative'
        }}
      >
        {/* Experience timeline - WITH CIRCLES RESTORED */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '20px',
          marginRight: '8px',
          marginTop: '3px'
        }}>
          {/* Circle dot - RESTORED */}
          <div style={{
            width: '12px',
            height: '12px',
            background: '#ffffff',
            border: '2px solid #3f70f8',
            borderRadius: '50%',
            zIndex: 2,
            position: 'relative'
          }}></div>
          {index < total - 1 && (
            <div style={{
              flex: 1,
              width: '1px',
              background: '#3f70f8',
              marginTop: '4px',
              minHeight: '20px'
            }}></div>
          )}
        </div>
        
        <div style={{ flex: 1 }}>
          {/* FIRST LINE: Job Title and Date on opposite corners */}
          <div style={{ marginBottom: '2px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <h3 style={{
                fontSize: '12.5pt',
                fontWeight: 700,
                color: '#000000',
                margin: 0,
                lineHeight: 1.2,
                flex: 1,
                minWidth: 0
              }}>
                {safeString(exp.position)}
              </h3>
              {/* EXPERIENCE DATE - NO BORDER, NO BACKGROUND */}
              <div style={{
                fontSize: '10.5pt',
                fontWeight: 600,
                color: '#000000',
                background: 'transparent',
                padding: '0',
                borderRadius: '0',
                whiteSpace: 'nowrap',
                border: 'none',
                flexShrink: 0
              }}>
                {formatDate(exp.startDate)} Ã¢â‚¬â€œ {formatDate(exp.endDate)}
              </div>
            </div>
          </div>
          
          {/* SECOND LINE: Company name and Location side by side - NO DOT BETWEEN THEM, LOCATION TEXT SIZE SMALLER */}
          <div style={{
            marginBottom: '8px',
            paddingBottom: '4px',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap',
              fontSize: '11pt'
            }}>
              <span style={{
                fontWeight: 600,
                color: '#3f70f8',
                lineHeight: 1.2
              }}>
                {safeString(exp.company)}
              </span>
              {/* REMOVED DOT - No separator between company and location */}
              {/* Location with icon - TEXT SIZE SMALLER by 1px */}
              {exp.location && safeString(exp.location).length > 0 && (
                <span style={{
                  color: '#666666',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  lineHeight: 1.2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  fontSize: '10pt' // Reduced from 11pt to 10pt (1px smaller)
                }}>
                  <span style={{ fontSize: '9.5pt' }}>Ã°Å¸â€œÂ</span>
                  {safeString(exp.location)}
                </span>
              )}
            </div>
          </div>
          
          {/* Render content based on mode */}
          {useBulletPoints ? (
            exp.achievements && safeArray(exp.achievements).length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {exp.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      style={{
                        fontSize: '10.5pt',
                        lineHeight: 1.4,
                        color: '#000000',
                        marginBottom: '1.2mm',
                        paddingLeft: '3mm',
                        position: 'relative',
                        textAlign: 'justify'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '6px',
                        height: '6px',
                        background: '#3f70f8',
                        borderRadius: '50%'
                      }}></span>
                      {safeString(achievement)}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ) : (
            exp.achievementsPhrase && (
              <div style={{
                marginTop: '8px',
                padding: '10px 12px',
                background: '#f8f9fa',
                borderRadius: '4px',
                borderLeft: '3px solid #3f70f8'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '10.5pt',
                  color: '#000000',
                  lineHeight: 1.5,
                  textAlign: 'justify'
                }}>
                  {safeString(exp.achievementsPhrase)}
                </p>
              </div>
            )
          )}
          
          {/* DEBUG: Show if no achievements but experience exists */}
          {DEBUG_MODE && (!exp.achievements || safeArray(exp.achievements).length === 0) && !exp.achievementsPhrase && (
            <div style={{
              marginTop: '4px',
              padding: '4px 8px',
              background: '#fff3cd',
              border: '1px solid #ffeeba',
              borderRadius: '4px',
              color: '#856404',
              fontSize: '9pt'
            }}>
              [DEBUG] No achievements found for this experience
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== UPDATED EDUCATION RENDERER - WITH LOCATION TEXT SIZE SMALLER =====
  const renderEducationItem = (edu, index, total) => {
    const dateRange = formatEducationDateRange(edu.startDate, edu.endDate, edu.current);
    const hasAchievements = edu.achievements && edu.achievements.length > 0;
    
    debugLog(`Rendering education[${index}]:`, edu);
    debugLog(`  - dateRange:`, dateRange);
    debugLog(`  - gpaDisplay:`, edu.gpaDisplay);
    debugLog(`  - achievements:`, edu.achievements);
    
    return (
      <div 
        key={index} 
        style={{
          marginBottom: hasAchievements ? '5mm' : '4mm',
          position: 'relative'
        }}
      >
        {/* No timeline elements for education */}
        
        <div style={{ flex: 1 }}>
          {/* FIRST LINE: Course/Degree Name */}
          <div style={{ marginBottom: '1mm' }}>
            <h3 style={{
              fontSize: '12pt',
              fontWeight: 700,
              color: '#000000',
              margin: 0,
              lineHeight: 1.2
            }}>
              {safeString(edu.degree)}
            </h3>
          </div>
          
          {/* SECOND LINE: College/Institution - FULL SIZE */}
          {edu.institution && (
            <div style={{ marginBottom: '1mm' }}>
              <div style={{
                fontWeight: 600,
                fontSize: '11pt',
                color: '#3f70f8',
                lineHeight: 1.2
              }}>
                {safeString(edu.institution)}
              </div>
            </div>
          )}
          
          {/* THIRD LINE: Location with icon - TEXT SIZE SMALLER by 1px */}
          {edu.location && safeString(edu.location).length > 0 && (
            <div style={{ marginBottom: '2mm' }}>
              <div style={{
                fontSize: '9.5pt', // Reduced from 10.5pt to 9.5pt (1px smaller)
                color: '#666666',
                fontWeight: 500,
                fontStyle: 'italic',
                lineHeight: 1.2,
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}>
                <span style={{ fontSize: '9pt' }}>Ã°Å¸â€œÂ</span>
                {safeString(edu.location)}
              </div>
            </div>
          )}
          
          {/* FOURTH LINE: Date and CGPA side by side - WITH FLEXIBLE SIZING AND NO BORDERS */}
          {(dateRange || edu.gpaDisplay) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '2px',
              marginBottom: hasAchievements ? '4mm' : '2px'
            }}>
              {/* Date - smaller if needed, NO BORDER */}
              {dateRange && (
                <div style={{
                  fontSize: dateRange.length > 20 ? '9pt' : '10pt',
                  fontWeight: 600,
                  color: '#000000',
                  background: 'transparent',
                  padding: '0',
                  borderRadius: '0',
                  border: 'none'
                }}>
                  {dateRange}
                </div>
              )}
              
              {/* CGPA next to date - smaller if needed, NO BORDER, NO BACKGROUND */}
              {edu.gpaDisplay && (
                <div style={{
                  fontSize: edu.gpaDisplay.length > 15 ? '8.5pt' : '9.5pt',
                  fontWeight: 600,
                  color: '#000000',
                  background: 'transparent',
                  padding: '0',
                  borderRadius: '0',
                  border: 'none',
                  whiteSpace: 'nowrap'
                }}>
                  {edu.gpaDisplay}
                </div>
              )}
            </div>
          )}
          
          {/* Education Achievements - up to 4 */}
          {hasAchievements && (
            <div style={{ marginTop: '3mm' }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {edu.achievements.map((achievement, idx) => (
                  <li 
                    key={idx} 
                    style={{
                      fontSize: '10pt',
                      lineHeight: 1.4,
                      color: '#000000',
                      marginBottom: '1.5mm',
                      paddingLeft: '3mm',
                      position: 'relative',
                      textAlign: 'justify'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '5px',
                      width: '5px',
                      height: '5px',
                      background: '#3f70f8',
                      borderRadius: '50%'
                    }}></span>
                    {safeString(achievement)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* DEBUG: Show if no date */}
          {DEBUG_MODE && !dateRange && (
            <div style={{
              marginTop: '4px',
              padding: '4px 8px',
              background: '#fff3cd',
              border: '1px solid #ffeeba',
              borderRadius: '4px',
              color: '#856404',
              fontSize: '9pt'
            }}>
              [DEBUG] No date found for this education entry
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== PROJECT RENDERER =====
  const renderProjectItem = (project, index) => {
    return (
      <div 
        key={index} 
        style={{
          paddingBottom: '2mm',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '2mm'
        }}
      >
        {/* Project Title Row */}
        <div style={{ marginBottom: '1mm' }}>
          <h4 style={{
            fontSize: '11pt',
            fontWeight: 700,
            color: '#000000',
            margin: 0,
            lineHeight: 1.3
          }}>
            {getItemName.project(project)}
          </h4>
        </div>
        
        {/* Project Role */}
        {project.role && safeString(project.role).length > 0 && (
          <div style={{
            fontSize: '10.5pt',
            fontWeight: 600,
            color: '#000000',
            margin: '0 0 1mm 0',
            lineHeight: 1.3
          }}>
            <strong style={{ color: '#3f70f8', fontWeight: 700 }}>Role:</strong> {safeString(project.role)}
          </div>
        )}
        
        {/* Project Link - Full HTTPS link, no icon, no underline */}
        {project.link && safeString(project.link).length > 0 && (
          <div style={{ marginTop: '1mm' }}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                fontSize: '10pt',
                color: '#3f70f8',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-block',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#2a56d4';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#3f70f8';
              }}
            >
              {project.link}
            </a>
          </div>
        )}
      </div>
    );
  };

  // ===== CERTIFICATION RENDERER =====
  const renderCertificationItem = (cert, index) => (
    <div 
      key={index} 
      style={{
        paddingBottom: '1.5mm',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '1.5mm'
      }}
    >
      {/* Certification Name */}
      <div style={{
        fontWeight: 600,
        fontSize: '10.5pt',
        color: '#000000',
        lineHeight: 1.3,
        marginBottom: '0.5mm'
      }}>
        {getItemName.certification(cert)}
      </div>
      
      {/* Issuer/Organisation */}
      {cert.issuer && (
        <div style={{
          fontSize: '10pt',
          color: '#000000',
          fontWeight: 500,
          fontStyle: 'italic',
          marginBottom: '0.5mm'
        }}>
          {safeString(cert.issuer)}
        </div>
      )}
      
      {/* Date - NO SEPARATING LINE */}
      {cert.year && (
        <div style={{
          marginTop: '2px',
          fontSize: '10pt',
          fontWeight: 600,
          color: '#000000'
        }}>
          {cert.year}
        </div>
      )}
    </div>
  );

  // ===== REFERENCE RENDERER =====
  const renderReferenceItem = (ref, index) => (
    <div 
      key={index} 
      style={{
        padding: '3mm',
        border: '1px solid #e0e0e0',
        borderRadius: '2px',
        background: '#f7fafc'
      }}
    >
      <h4 style={{
        fontSize: '11.5pt',
        fontWeight: 700,
        color: '#000000',
        margin: '0 0 1mm 0',
        lineHeight: 1.2
      }}>
        {safeString(ref.name)}
      </h4>
      <div style={{
        fontSize: '11pt',
        fontWeight: 600,
        color: '#3f70f8',
        margin: '0 0 0.5mm 0',
        lineHeight: 1.2
      }}>
        {safeString(ref.position)}
      </div>
      <div style={{
        fontSize: '10.5pt',
        fontWeight: 500,
        color: '#000000',
        margin: '0 0 1mm 0',
        lineHeight: 1.2
      }}>
        {safeString(ref.company)}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5mm',
        paddingTop: '1mm',
        borderTop: '1px dashed #e0e0e0'
      }}>
        {ref.email && (
          <div style={{
            fontSize: '10pt',
            color: '#000000',
            fontWeight: 500
          }}>
            {safeString(ref.email)}
          </div>
        )}
        {ref.phone && (
          <div style={{
            fontSize: '10pt',
            color: '#000000',
            fontWeight: 500
          }}>
            {safeString(ref.phone)}
          </div>
        )}
      </div>
    </div>
  );

  // ===== SKILL RENDERER (6 skills max) =====
  const renderSkillItem = (skill, index) => {
    const name = getItemName.skill(skill);
    
    return (
      <div 
        key={index} 
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.2mm 0',
          borderBottom: '1px solid #e0e0e0',
          gap: '5px'
        }}
      >
        <div style={{
          width: '6px',
          height: '6px',
          background: '#3f70f8',
          borderRadius: '50%',
          flexShrink: 0,
          marginRight: '5px'
        }}></div>
        <div style={{
          fontWeight: 500,
          fontSize: '10.5pt',
          color: '#000000'
        }}>
          {name}
        </div>
      </div>
    );
  };

  // ===== LANGUAGE RENDERER =====
  const renderLanguageItem = (lang, index) => (
    <div 
      key={index} 
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.2mm 0',
        borderBottom: '1px solid #e0e0e0',
        gap: '5px'
      }}
    >
      <div style={{
        width: '6px',
        height: '6px',
        background: '#3f70f8',
        borderRadius: '50%',
        flexShrink: 0,
        marginRight: '5px'
      }}></div>
      <div style={{
        fontWeight: 500,
        fontSize: '10.5pt',
        color: '#000000'
      }}>
        {getItemName.language(lang)}
      </div>
    </div>
  );

  // ===== TOOL RENDERER =====
  const renderToolItem = (tool, index) => (
    <div 
      key={index} 
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.2mm 0',
        borderBottom: '1px solid #e0e0e0',
        gap: '5px'
      }}
    >
      <div style={{
        width: '6px',
        height: '6px',
        background: '#3f70f8',
        borderRadius: '50%',
        flexShrink: 0,
        marginRight: '5px'
      }}></div>
      <div style={{
        fontWeight: 500,
        fontSize: '10.5pt',
        color: '#000000'
      }}>
        {getItemName.tool(tool)}
      </div>
    </div>
  );

  // ===== CORE STRENGTH RENDERER =====
  const renderCoreStrengthItem = (strength, index) => (
    <div 
      key={index} 
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.2mm 0',
        borderBottom: '1px solid #e0e0e0',
        gap: '5px'
      }}
    >
      <div style={{
        width: '6px',
        height: '6px',
        background: '#3f70f8',
        borderRadius: '50%',
        flexShrink: 0,
        marginRight: '5px'
      }}></div>
      <div style={{
        fontWeight: 500,
        fontSize: '10.5pt',
        color: '#000000'
      }}>
        {getItemName.coreStrength(strength)}
      </div>
    </div>
  );

  // ===== OVERFLOW CHECK =====
  useEffect(() => {
    if (!isExporting && templateRef.current) {
      const container = templateRef.current;
      const contentHeight = container.scrollHeight;
      const a4Height = 297;
      const mmToPx = 3.78;
      const maxPxHeight = a4Height * mmToPx;
      
      setIsOverflowing(contentHeight > maxPxHeight);
      
      if (DEBUG_MODE && contentHeight > maxPxHeight) {
        debugLog('Template is overflowing!', { contentHeight, maxPxHeight });
      }
    }
  }, [contentAnalysis, isExporting]);

  // ===== DEBUG: Log final render data =====
  useEffect(() => {
    if (DEBUG_MODE && contentAnalysis) {
      debugLog('Final contentAnalysis for render:', {
        experiences: contentAnalysis?.experiences?.length,
        education: contentAnalysis?.education?.length,
        sections: contentAnalysis?.sections
      });
    }
  }, [contentAnalysis]);

  // Add global style to remove body margin/padding when exporting
  useEffect(() => {
    if (isExporting) {
      // Save original body styles
      const originalBodyMargin = document.body.style.margin;
      const originalBodyPadding = document.body.style.padding;
      const originalBodyBackground = document.body.style.background;
      
      // Remove margin and padding from body to eliminate white strip
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.background = '#ffffff';
      
      // Add style to html element as well
      const originalHtmlMargin = document.documentElement.style.margin;
      const originalHtmlPadding = document.documentElement.style.padding;
      
      document.documentElement.style.margin = '0';
      document.documentElement.style.padding = '0';
      
      // Clean up on unmount or when isExporting changes
      return () => {
        document.body.style.margin = originalBodyMargin;
        document.body.style.padding = originalBodyPadding;
        document.body.style.background = originalBodyBackground;
        document.documentElement.style.margin = originalHtmlMargin;
        document.documentElement.style.padding = originalHtmlPadding;
      };
    }
  }, [isExporting]);

  return (
    <>
      {/* Add inline style to handle any potential margin/padding issues */}
      <style>{`
        @media print {
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .template13-root {
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
      
      <div 
        ref={templateRef} 
        className={`template13-root ${isExporting ? 'export-mode' : ''}`}
        style={{
          fontFamily: "'Calibri', 'Arial', 'Helvetica Neue', sans-serif",
          width: '210mm',
          minHeight: '297mm',
          background: '#ffffff',
          color: '#000000',
          lineHeight: 1.4,
          fontSize: '11pt',
          margin: 0,
          padding: 0,
          position: 'relative',
          WebkitPrintColorAdjust: 'exact',
          printColorAdjust: 'exact',
          ...(isExporting ? {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ddd',
            margin: '0 auto',
          } : {})
        }}
      >
        {/* Header Section - Now with zero top padding */}
        <header style={{
          padding: '8mm 20mm 8mm 20mm',
          borderBottom: '2px solid #3f70f8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '26pt',
              fontWeight: 700,
              color: '#000000',
              margin: '0 0 1mm 0',
              letterSpacing: '0.5px',
              lineHeight: 1.1
            }}>
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <p style={{
              fontSize: '13pt',
              fontWeight: 600,
              color: '#3f70f8',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {personalInfo.jobTitle || 'Professional Title'}
            </p>
          </div>
          
          <div style={{
            textAlign: 'right',
            minWidth: '75mm',
            fontSize: '10pt'
          }}>
            {contactInfo.map((contact, index) => (
              <div 
                key={index} 
                style={{
                  marginBottom: '0.8mm',
                  lineHeight: 1.3
                }}
              >
                <span style={{
                  fontWeight: 600,
                  color: '#000000',
                  marginRight: '1mm'
                }}>
                  {contact.label}:
                </span>
                <span style={{
                  fontWeight: 400,
                  color: '#000000'
                }}>
                  {contact.value}
                </span>
              </div>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr',
          gap: '8mm',
          padding: '5mm 20mm 10mm 20mm'
        }}>
          {/* Left Column - Primary Content */}
          <div style={{ paddingRight: '4mm' }}>
            {/* Professional Summary */}
            {contentAnalysis.sections.summary && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Professional Summary
                </h3>
                <p style={{
                  fontSize: '11pt',
                  lineHeight: 1.5,
                  color: '#000000',
                  textAlign: 'justify',
                  fontWeight: 400
                }}>
                  {contentAnalysis.limitedSummary}
                </p>
              </section>
            )}

            {/* Work Experience with Timeline - WITH CIRCLES RESTORED AND NO DATE BORDERS */}
            {contentAnalysis.sections.experience > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Work Experience
                </h3>
                <div style={{ position: 'relative' }}>
                  {contentAnalysis.experiences.map((exp, index) => 
                    renderExperienceItem(exp, index, contentAnalysis.experiences.length)
                  )}
                </div>
                
                {/* DEBUG: Show if no experiences but section is true */}
                {DEBUG_MODE && contentAnalysis.sections.experience === 0 && (
                  <div style={{
                    padding: '8px 12px',
                    background: '#fff3cd',
                    border: '1px solid #ffeeba',
                    borderRadius: '4px',
                    color: '#856404',
                    fontSize: '10pt'
                  }}>
                    [DEBUG] No experience entries to display. Check console for details.
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div style={{
            paddingLeft: '4mm',
            borderLeft: '1px solid #e0e0e0'
          }}>
            {/* Contact Info in Sidebar (for mobile) - hidden on desktop */}
            <div style={{
              display: 'none'
            }}>
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  style={{
                    marginBottom: '0.8mm',
                    lineHeight: 1.3,
                    fontSize: '10pt'
                  }}
                >
                  <span style={{
                    fontWeight: 600,
                    color: '#000000',
                    marginRight: '1mm'
                  }}>
                    {contact.label}:
                  </span>
                  <span style={{
                    fontWeight: 400,
                    color: '#000000'
                  }}>
                    {contact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills - 6 items max */}
            {contentAnalysis.sections.skills > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Skills
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.skills.slice(0, 6).map(renderSkillItem)}
                </div>
              </section>
            )}

            {/* Education - WITH FLEXIBLE DATE/CGPA SIZING, LOCATION ICON, AND NO BORDERS */}
            {contentAnalysis.sections.education > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Education
                </h3>
                <div>
                  {contentAnalysis.education.map((edu, index) => 
                    renderEducationItem(edu, index, contentAnalysis.education.length)
                  )}
                </div>
                
                {/* DEBUG: Show if no education but section is true */}
                {DEBUG_MODE && contentAnalysis.sections.education === 0 && (
                  <div style={{
                    padding: '8px 12px',
                    background: '#fff3cd',
                    border: '1px solid #ffeeba',
                    borderRadius: '4px',
                    color: '#856404',
                    fontSize: '10pt'
                  }}>
                    [DEBUG] No education entries to display. Check console for details.
                  </div>
                )}
              </section>
            )}

            {/* Languages */}
            {contentAnalysis.sections.languages > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Languages
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.languages.map(renderLanguageItem)}
                </div>
              </section>
            )}

            {/* Tools */}
            {contentAnalysis.sections.tools > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Tools
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.tools.map(renderToolItem)}
                </div>
              </section>
            )}

            {/* Projects */}
            {contentAnalysis.sections.projects && contentAnalysis.projects.length > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Projects
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.projects.map(renderProjectItem)}
                </div>
              </section>
            )}

            {/* Certifications - Only 1 */}
            {contentAnalysis.sections.certifications > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Certifications
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.certifications.map(renderCertificationItem)}
                </div>
              </section>
            )}

            {/* Core Strengths */}
            {contentAnalysis.sections.coreStrengths > 0 && (
              <section style={{ marginBottom: '6mm' }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Core Strengths
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5mm'
                }}>
                  {contentAnalysis.coreStrengths.map(renderCoreStrengthItem)}
                </div>
              </section>
            )}

            {/* Reference */}
            {contentAnalysis.sections.references > 0 && (
              <section style={{
                marginTop: '6mm',
                paddingTop: '6mm',
                borderTop: '1px solid #e0e0e0'
              }}>
                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: '#3f70f8',
                  marginBottom: '3mm',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #3f70f8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Reference
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3mm',
                  marginTop: '2mm'
                }}>
                  {contentAnalysis.references.map(renderReferenceItem)}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template13;