// ============================================
// components/editor/ResumeEditor.js
// COMPLETE VERSION - WITH PROPER DOWNLOAD TRACKING
// ============================================

import React, { useState, useEffect } from 'react';
import { useResume } from '../../context/ResumeContext';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import OptionalSection from './OptionalSection';
import Summary from './Summary';
import Projects from './Projects';
import Reference from './Reference';
import Preview from './Preview';
import TemplateSelector from '../templates/TemplateSelector';
import GuidedForm from './GuidedForm';
import ReviewSystem from '../ReviewSystem';
import DownloadCounter from '../DownloadCounter';
import { getTemplateSections, getSectionDisplayName, getSectionIcon } from '../../lib/templateConfig';

const ResumeEditor = () => {
  const { state, setTemplate } = useResume();
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [templateSectionsList, setTemplateSectionsList] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [mode, setMode] = useState('select');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  // Set template sections when template changes
  useEffect(() => {
    if (selectedTemplateId) {
      const sections = getTemplateSections(selectedTemplateId);
      const sectionsWithInfo = [...sections, 'preview'];
      setTemplateSectionsList(sectionsWithInfo);
      setCurrentStep(0);
      if (sectionsWithInfo.length > 0) {
        setCurrentSection(sectionsWithInfo[0]);
      }
      setMode('edit');
    }
  }, [selectedTemplateId]);

  // Update current section when step changes
  useEffect(() => {
    if (templateSectionsList.length > 0 && currentStep < templateSectionsList.length) {
      setCurrentSection(templateSectionsList[currentStep]);
    }
  }, [currentStep, templateSectionsList]);

  // Handle template selection
  const handleTemplateSelect = (templateId) => {
    setSelectedTemplateId(templateId);
    setTemplate(templateId);
    setMode('edit');
    
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // âœ… Track download - ONLY called when PDF is actually downloaded
  const trackDownload = async (tid = selectedTemplateId) => {
    const templateToTrack = tid || selectedTemplateId;
    
    if (isTracking) {
      
      return;
    }
    
    setIsTracking(true);
    
    
    try {
      const response = await fetch('/api/track-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: templateToTrack.toString() })
      });
      
      const data = await response.json();
      
      
      
      // Show review modal after successful download
      setTimeout(() => {
        
        setShowReviewModal(true);
      }, 1000);
      
      return data;
    } catch (error) {
      console.error('âŒ Error tracking download:', error);
    } finally {
      setIsTracking(false);
    }
  };

  // Navigation for guided mode
  const handleContinue = () => {
    if (currentStep < templateSectionsList.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToPreview = () => {
    const previewIndex = templateSectionsList.indexOf('preview');
    if (previewIndex !== -1) {
      setCurrentStep(previewIndex);
    }
  };

  const handleChangeTemplate = () => {
    setMode('select');
    setSelectedTemplateId(null);
    setTemplateSectionsList([]);
    setCurrentStep(0);
    setShowReviewModal(false);
  };

  const getSafeSectionDisplayName = (section) => {
    if (section === 'preview') return 'Preview & Download';
    return getSectionDisplayName(section) || section;
  };

  const getSectionCompletion = (section) => {
    if (section === 'preview') return true;
    
    switch(section) {
      case 'personalInfo':
        return state.personalInfo?.fullName?.trim() && 
               state.personalInfo?.email?.trim() && 
               state.personalInfo?.phone?.trim();
      case 'imageSection':
        return state.personalInfo?.photo?.trim();
      case 'summary':
        return state.professionalSummary?.trim() && state.professionalSummary.length > 20;
      case 'experience':
        return state.experience?.length > 0 && state.experience[0]?.description?.trim();
      case 'education':
        return state.education?.length > 0;
      case 'skills':
        return state.skills?.length > 0;
      case 'languages':
        return state.languages?.length > 0;
      case 'projects':
        return state.projects?.length > 0;
      case 'internships':
        return state.internships?.length > 0;
      case 'certifications':
        return state.certifications?.length > 0;
      case 'awards':
        return state.awards?.length > 0;
      case 'tools':
        return state.tools?.length > 0;
      case 'coreStrengths':
        return state.coreStrengths?.length > 0;
      case 'hobbies':
        return state.hobbies?.length > 0;
      case 'publications':
        return state.publications?.length > 0;
      case 'references':
        return state.reference?.length > 0;
      case 'optionalSection':
        return state.certifications?.length > 0 || 
               state.projects?.length > 0 || 
               state.awards?.length > 0 || 
               state.tools?.length > 0 || 
               state.coreStrengths?.length > 0 ||
               state.hobbies?.length > 0 ||
               state.publications?.length > 0;
      default:
        return false;
    }
  };

  const getSafeSectionIcon = (section) => {
    if (section === 'preview') return 'ðŸ‘ï¸';
    return getSectionIcon(section) || 'ðŸ“„';
  };

  const handleSectionClick = (section, index) => {
    setCurrentStep(index);
  };

  const renderSectionPreview = (section) => {
    switch(section) {
      case 'personalInfo':
        const personalInfo = state.personalInfo || {};
        return (
          <div className="preview-personal-info">
            {personalInfo.fullName && <div className="preview-name">{personalInfo.fullName}</div>}
            {personalInfo.jobTitle && <div className="preview-job-title">{personalInfo.jobTitle}</div>}
            {(personalInfo.email || personalInfo.phone) && (
              <div className="preview-contact">
                {personalInfo.email && <span>{personalInfo.email}</span>}
                {personalInfo.phone && <span>{personalInfo.phone}</span>}
              </div>
            )}
          </div>
        );
      
      case 'summary':
        const summary = state.professionalSummary || '';
        return (
          <div className="preview-summary">
            {summary ? (
              <div className="preview-text">{summary.substring(0, 100)}...</div>
            ) : (
              <div className="preview-empty">No summary added yet</div>
            )}
          </div>
        );
      
      case 'experience':
        const experiences = state.experience || [];
        return (
          <div className="preview-experience">
            {experiences.length > 0 ? (
              experiences.slice(0, 2).map((exp, index) => (
                <div key={index} className="preview-experience-item">
                  <div className="preview-exp-title">
                    <strong>{exp.position || 'Position'}</strong> at {exp.company || 'Company'}
                  </div>
                  {exp.description && (
                    <div className="preview-exp-desc">
                      {exp.description.substring(0, 50)}...
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="preview-empty">No experience added yet</div>
            )}
          </div>
        );
      
      case 'education':
        const education = state.education || [];
        return (
          <div className="preview-education">
            {education.length > 0 ? (
              education.slice(0, 2).map((edu, index) => (
                <div key={index} className="preview-education-item">
                  <div className="preview-edu-title">
                    <strong>{edu.degree || 'Degree'}</strong> at {edu.institution || edu.school || 'School'}
                  </div>
                </div>
              ))
            ) : (
              <div className="preview-empty">No education added yet</div>
            )}
          </div>
        );
      
      case 'skills':
        const skills = state.skills || [];
        return (
          <div className="preview-skills">
            {skills.length > 0 ? (
              <div className="preview-skills-list">
                {skills.slice(0, 5).map((skill, index) => (
                  <span key={index} className="preview-skill-tag">{skill}</span>
                ))}
                {skills.length > 5 && <span className="preview-more">+{skills.length - 5} more</span>}
              </div>
            ) : (
              <div className="preview-empty">No skills added yet</div>
            )}
          </div>
        );
      
      case 'languages':
        const languages = state.languages || [];
        return (
          <div className="preview-languages">
            {languages.length > 0 ? (
              <div className="preview-languages-list">
                {languages.slice(0, 3).map((lang, index) => (
                  <span key={index} className="preview-language-tag">
                    {lang.name || lang.language || lang}
                  </span>
                ))}
              </div>
            ) : (
              <div className="preview-empty">No languages added yet</div>
            )}
          </div>
        );
      
      default:
        return (
          <div className="preview-default">
            Preview will appear here as you add information
          </div>
        );
    }
  };

  // MODE 1: Template Selection
  if (mode === 'select') {
    return (
      <div className="template-selector-fullscreen">
        <div className="selector-container">
          <div className="selector-header">
            <h1>Choose Your Resume Template</h1>
            <p className="selector-description">
              Select a template to get started. You'll only be asked for information that your template needs.
            </p>
          </div>
          <TemplateSelector onTemplateSelect={handleTemplateSelect} />
        </div>
      </div>
    );
  }

  // MODE 2: Editing Mode (Guided Form)
  if (!templateSectionsList || templateSectionsList.length === 0) {
    return (
      <div className="error-container">
        <h2>âš ï¸ No sections defined for Template #{selectedTemplateId}</h2>
        <p>This template doesn't have any sections configured. Please select a different template.</p>
        <div className="error-actions">
          <button onClick={handleChangeTemplate} className="btn-change-template">
            Select Different Template
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="resume-editor guided-mode-only">
      {/* Notification Toast */}
      {showNotification && (
        <div className="notification-toast">
          <div className="notification-content">
            <span className="notification-icon">âœ“</span>
            <div className="notification-text">
              <strong>Template Selected!</strong>
              <p>You can now start filling your resume details.</p>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal - Shows after download */}
      {showReviewModal && (
        <div className="review-modal-overlay" onClick={() => setShowReviewModal(false)}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowReviewModal(false)}>Ã—</button>
            <ReviewSystem templateId={selectedTemplateId} />
          </div>
        </div>
      )}

      <div className="guided-editor-container">
        {/* Sidebar with Sections */}
        <div className="guided-sidebar">
          <div className="sidebar-header">
            <div className="template-header">
              <div className="template-info">
                <span className="template-badge">Template {selectedTemplateId}</span>
                <div className="download-counter-sidebar">
                  <DownloadCounter />
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-list">
            {templateSectionsList.map((section, index) => {
              const isComplete = getSectionCompletion(section);
              const isCurrent = index === currentStep;
              const isInfoSection = section === 'preview';
              
              return (
                <React.Fragment key={section}>
                  <div 
                    className={`section-item ${isCurrent ? 'active' : ''} ${isComplete ? 'completed' : ''} ${isInfoSection ? 'info-section' : ''}`}
                    onClick={() => handleSectionClick(section, index)}
                  >
                    <div className="section-number">
                      {getSafeSectionIcon(section)}
                    </div>
                    <div className="section-info">
                      <div className="section-name">
                        {getSafeSectionDisplayName(section)}
                      </div>
                      <div className="section-status">
                        {isInfoSection ? 'Action' : (isCurrent ? 'Current' : isComplete ? 'Complete' : 'Upcoming')}
                      </div>
                    </div>
                    {isInfoSection && (
                      <div className="section-action-arrow">â†’</div>
                    )}
                  </div>

                  {/* Mini Preview Below Each Category */}
                  {!isInfoSection && isCurrent && (
                    <div className="section-preview">
                      <h4>Preview</h4>
                      <div className="preview-content-mini">
                        {renderSectionPreview(section)}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="sidebar-actions">
            <div className="progress-info">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentStep + 1) / templateSectionsList.length) * 100}%` }}
                />
              </div>
              <div className="progress-text">
                Step {currentStep + 1} of {templateSectionsList.length}
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="guided-main">
          <div className="guided-header">
            <div className="header-title">
              <h1>{getSafeSectionDisplayName(currentSection)}</h1>
              <div className="header-subtitle">
                {currentSection === 'preview' ? (
                  'Preview your resume and download it as PDF'
                ) : (
                  'Fill in the details below'
                )}
              </div>
            </div>
            <button onClick={handleChangeTemplate} className="btn-change-template-header">
              Change Template
            </button>
          </div>

          <div className="guided-content">
            {/* Render the appropriate form based on current section */}
            <GuidedForm 
              templateId={selectedTemplateId}
              currentStep={currentStep}
              onContinue={handleContinue}
              onBack={handleBack}
              onPreview={handleGoToPreview}
              totalSteps={templateSectionsList.length}
              currentSection={currentSection}
              isInfoSection={currentSection === 'preview'}
              onGoToPreview={handleGoToPreview}
              onChangeTemplate={handleChangeTemplate}
              onDownloadComplete={trackDownload}  // â† Pass the download tracking callback
            />
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .notification-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border-left: 4px solid #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 16px 20px;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
        }

        .notification-content {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .notification-icon {
          width: 32px;
          height: 32px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
        }

        .notification-text strong {
          color: #333;
          display: block;
          margin-bottom: 4px;
        }

        .notification-text p {
          margin: 0;
          font-size: 14px;
          color: #666;
        }

        .review-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          animation: fadeIn 0.2s ease-out;
        }

        .review-modal {
          background: white;
          border-radius: 16px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #f3f4f6;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: #e5e7eb;
          transform: scale(1.05);
        }

        .download-counter-sidebar {
          margin-top: 8px;
        }

        /* Section Item Styles */
        .section-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 4px;
        }

        .section-item:hover {
          background: #f8fafc;
        }

        .section-item.active {
          background: linear-gradient(135deg, #f0f9ff 0%, #e6f3ff 100%);
          border-left: 3px solid #0070f3;
        }

        .section-item.completed {
          opacity: 0.8;
        }

        .section-item.completed .section-number {
          background: #10b981;
          color: white;
        }

        .section-number {
          width: 32px;
          height: 32px;
          background: #e2e8f0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .section-info {
          flex: 1;
        }

        .section-name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .section-status {
          font-size: 11px;
          color: #64748b;
        }

        .section-action-arrow {
          color: #0070f3;
          font-size: 18px;
        }

        .section-preview {
          margin: 8px 0 16px 44px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 2px solid #0070f3;
          font-size: 12px;
        }

        .section-preview h4 {
          margin: 0 0 8px 0;
          font-size: 12px;
          color: #475569;
          font-weight: 600;
        }

        .preview-name {
          font-weight: 600;
          color: #0f172a;
        }

        .preview-job-title {
          font-size: 11px;
          color: #475569;
        }

        .preview-contact {
          font-size: 10px;
          color: #64748b;
          margin-top: 4px;
        }

        .preview-text {
          color: #334155;
          line-height: 1.4;
        }

        .preview-empty {
          color: #94a3b8;
          font-style: italic;
        }

        .preview-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .preview-skill-tag {
          background: #e2e8f0;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          color: #334155;
        }

        .preview-more {
          font-size: 10px;
          color: #64748b;
        }

        /* Progress Bar */
        .progress-info {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .progress-bar {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0070f3, #00a6f3);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 12px;
          color: #64748b;
          text-align: center;
        }

        /* Header Styles */
        .guided-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .header-title h1 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #0f172a;
        }

        .header-subtitle {
          font-size: 14px;
          color: #64748b;
        }

        .btn-change-template-header {
          padding: 8px 16px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-change-template-header:hover {
          background: #f8fafc;
          border-color: #0070f3;
        }

        /* Editor Container */
        .guided-editor-container {
          display: flex;
          gap: 24px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px;
        }

        .guided-sidebar {
          width: 280px;
          flex-shrink: 0;
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          position: sticky;
          top: 24px;
          height: fit-content;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .template-badge {
          display: inline-block;
          padding: 4px 12px;
          background: linear-gradient(135deg, #0070f3, #00a6f3);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .guided-main {
          flex: 1;
          min-width: 0;
        }

        .guided-content {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 24px;
        }

        /* Animations */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .guided-editor-container {
            flex-direction: column;
            padding: 16px;
          }
          
          .guided-sidebar {
            width: 100%;
            position: relative;
            top: 0;
          }
          
          .guided-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .guided-content {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeEditor;
