// ============================================
// components/editor/GuidedForm.js
// UPDATED: Added onDownloadComplete prop and passes it to Preview
// ============================================

import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import Head from 'next/head';
import LoadingSpinner from '../LoadingSpinner';

// Import all section components
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Internships from './Internships';
import Certifications from './Certifications';
import Awards from './Awards';
import ImageSection from './ImageSection';
import Preview from './Preview';

// Import utilities
import { 
  getTemplateOptionalSections,
  getSectionDisplayName,
  getTemplateSections
} from '../../lib/templateConfig';

// Helper Components
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div style={{
      width: '100%',
      height: '6px',
      background: '#e9ecef',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '24px'
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        background: 'linear-gradient(90deg, #0070f3, #00a6f3)',
        borderRadius: '3px',
        transition: 'width 0.3s ease'
      }} />
    </div>
  );
};

const SectionHeader = ({ currentSection, currentStep, totalSteps, onSave, isSaving }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSectionIcon = (section) => {
    const icons = {
      personalInfo: 'ðŸ‘¤',
      imageSection: 'ðŸ“¸',
      summary: 'ðŸ“',
      experience: 'ðŸ’¼',
      education: 'ðŸŽ“',
      skills: 'âš¡',
      projects: 'ðŸš€',
      internships: 'ðŸŒŸ',
      certifications: 'ðŸ“œ',
      awards: 'ðŸ†',
      preview: 'ðŸ‘ï¸'
    };
    return icons[section] || 'ðŸ“‹';
  };

  const getSectionDescription = (section) => {
    const descriptions = {
      personalInfo: "Start with your basic contact information and professional details.",
      imageSection: "Add a professional photo to personalize your resume.",
      summary: "Write a compelling professional summary that highlights your key strengths.",
      experience: "Detail your work history, including responsibilities and achievements.",
      education: "List your educational background, degrees, and institutions.",
      skills: "Showcase your technical and soft skills relevant to your target role.",
      projects: "Highlight key projects that demonstrate your capabilities.",
      internships: "Add internship experiences to showcase practical training.",
      certifications: "Include professional certifications that validate your expertise.",
      awards: "Showcase recognitions and achievements that set you apart.",
      preview: "Review your complete resume before downloading."
    };
    return descriptions[section] || `Complete the ${section} section`;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: windowWidth < 768 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: windowWidth < 768 ? 'flex-start' : 'center',
      gap: '16px',
      marginBottom: '24px',
      padding: '20px',
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e9ecef',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <div>
        <h2 style={{
          fontSize: windowWidth < 480 ? '20px' : '24px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <span>{getSectionIcon(currentSection)}</span>
          <span>{getSectionDisplayName(currentSection) || currentSection}</span>
          <span style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#666',
            background: '#f8f9fa',
            padding: '4px 10px',
            borderRadius: '20px',
            marginLeft: '12px'
          }}>
            Step {currentStep + 1} of {totalSteps}
          </span>
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0,
          lineHeight: '1.5'
        }}>
          {getSectionDescription(currentSection)}
        </p>
      </div>
      
      <button 
        onClick={onSave}
        disabled={isSaving}
        style={{
          padding: '10px 20px',
          background: isSaving ? '#ccc' : 'linear-gradient(135deg, #28a745, #20c997)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: isSaving ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          boxShadow: isSaving ? 'none' : '0 2px 8px rgba(40, 167, 69, 0.2)',
          whiteSpace: 'nowrap',
          opacity: isSaving ? 0.7 : 1
        }}
      >
        {isSaving ? (
          <>
            <LoadingSpinner size="sm" color="white" text="" />
            Saving...
          </>
        ) : (
          <>
            <span>ðŸ’¾</span>
            Save Progress
          </>
        )}
      </button>
    </div>
  );
};

const NavigationButtons = ({ 
  currentStep, 
  totalSteps, 
  onContinue, 
  onBack, 
  onPreview,
  isFirstSection = false,
  isLastSection = false,
  canProceed = true,
  currentSection,
  isSaving
}) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (action) => {
    if (isSaving) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (action === 'continue' && onContinue) onContinue();
    if (action === 'back' && onBack) onBack();
    if (action === 'preview' && onPreview) onPreview();
  };

  if (currentSection === 'preview') return null;

  return (
    <div style={{
      display: 'flex',
      flexDirection: windowWidth < 640 ? 'column' : 'row',
      gap: windowWidth < 640 ? '12px' : '16px',
      justifyContent: 'center',
      marginTop: '32px',
      padding: '24px 0',
      borderTop: '1px solid #e9ecef'
    }}>
      <button 
        onClick={() => handleNavigation('back')}
        disabled={isFirstSection || isSaving}
        onMouseEnter={() => !isFirstSection && !isSaving && setHoveredBtn('back')}
        onMouseLeave={() => setHoveredBtn(null)}
        style={{
          padding: windowWidth < 480 ? '12px 24px' : '14px 32px',
          background: hoveredBtn === 'back' && !isFirstSection && !isSaving ? '#f8f9fa' : 'white',
          color: '#333',
          border: '2px solid #e1e5e9',
          borderRadius: '10px',
          fontSize: windowWidth < 480 ? '14px' : '16px',
          fontWeight: 600,
          cursor: (isFirstSection || isSaving) ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          opacity: (isFirstSection || isSaving) ? 0.5 : 1,
          flex: 1,
          minWidth: '120px'
        }}
      >
        <span style={{ fontSize: '18px' }}>â†</span>
        Back
      </button>
      
      <button 
        onClick={() => handleNavigation('preview')}
        disabled={isSaving}
        onMouseEnter={() => !isSaving && setHoveredBtn('preview')}
        onMouseLeave={() => setHoveredBtn(null)}
        style={{
          padding: windowWidth < 480 ? '12px 24px' : '14px 32px',
          background: hoveredBtn === 'preview' && !isSaving ? '#6c5ce7' : '#5a4bcf',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: windowWidth < 480 ? '14px' : '16px',
          fontWeight: 600,
          cursor: isSaving ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          transform: hoveredBtn === 'preview' && !isSaving ? 'translateY(-2px)' : 'none',
          boxShadow: hoveredBtn === 'preview' && !isSaving ? '0 8px 20px rgba(90, 75, 207, 0.4)' : '0 4px 12px rgba(90, 75, 207, 0.3)',
          flex: 1,
          minWidth: '120px',
          opacity: isSaving ? 0.7 : 1
        }}
      >
        <span style={{ fontSize: '18px' }}>ðŸ‘ï¸</span>
        Preview Resume
      </button>
      
      <button 
        onClick={() => handleNavigation('continue')}
        disabled={!canProceed || isSaving}
        onMouseEnter={() => canProceed && !isSaving && setHoveredBtn('continue')}
        onMouseLeave={() => setHoveredBtn(null)}
        style={{
          padding: windowWidth < 480 ? '12px 24px' : '14px 32px',
          background: !canProceed || isSaving ? '#ccc' : hoveredBtn === 'continue' ? '#2563eb' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: windowWidth < 480 ? '14px' : '16px',
          fontWeight: 600,
          cursor: (!canProceed || isSaving) ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          transform: hoveredBtn === 'continue' && canProceed && !isSaving ? 'translateY(-2px)' : 'none',
          boxShadow: hoveredBtn === 'continue' && canProceed && !isSaving ? '0 8px 20px rgba(0,112,243,0.3)' : '0 4px 12px rgba(0,112,243,0.2)',
          flex: 1,
          minWidth: '120px',
          opacity: (!canProceed || isSaving) ? 0.7 : 1
        }}
      >
        {isLastSection ? 'Finish' : 'Continue'}
        <span style={{ fontSize: '18px' }}>â†’</span>
      </button>
    </div>
  );
};

const GuidedForm = ({ 
  templateId = '1',
  currentStep = 0,
  totalSteps = 10,
  currentSection = 'personalInfo',
  onContinue,
  onBack,
  onPreview,
  isInfoSection = false,
  onChangeTemplate,
  onDownloadComplete  // â† ADD THIS PROP
}) => {
  const { state, updateTemplateSection, forceSaveNow, isSaving, debug } = useResume();
  const [canProceed, setCanProceed] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [componentKey, setComponentKey] = useState(`${templateId}-${currentSection}`);
  const [isNavigating, setIsNavigating] = useState(false);
  const saveTimeoutRef = useRef(null);

  useEffect(() => {
    setComponentKey(`${templateId}-${currentSection}`);
    setIsNavigating(false);
  }, [templateId, currentSection]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const handleSectionComplete = useCallback((data) => {
    if (process.env.NODE_ENV === 'development') {
      
    }
    updateTemplateSection(currentSection, data);
    setSaveStatus('Changes saved');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => setSaveStatus(''), 3000);
  }, [currentSection, updateTemplateSection]);

  const handleManualSave = useCallback(() => {
    forceSaveNow();
    setSaveStatus('Progress saved');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => setSaveStatus(''), 3000);
  }, [forceSaveNow]);

  const handleNavigation = useCallback((action) => {
    if (isNavigating || isSaving) return;
    setIsNavigating(true);
    forceSaveNow();
    setTimeout(() => {
      if (action === 'continue' && onContinue) onContinue();
      else if (action === 'back' && onBack) onBack();
      else if (action === 'preview' && onPreview) onPreview();
    }, 100);
  }, [onContinue, onBack, onPreview, forceSaveNow, isNavigating, isSaving]);

  const templateOptionalSections = getTemplateOptionalSections(templateId);
  const hasOptionalSections = templateOptionalSections?.length > 0;

  useEffect(() => {
    const requiredChecks = {
      personalInfo: () => state.personalInfo?.fullName?.trim() && state.personalInfo?.email?.trim(),
      summary: () => state.professionalSummary?.length > 20,
      experience: () => state.experience?.length > 0,
      education: () => state.education?.length > 0,
      skills: () => state.skills?.length > 0
    };
    if (requiredChecks[currentSection]) {
      setCanProceed(requiredChecks[currentSection]());
    } else {
      setCanProceed(true);
    }
  }, [currentSection, state]);

  const getSectionData = () => {
    const sectionMap = {
      personalInfo: state.personalInfo || {},
      imageSection: state.personalInfo || {},
      summary: state.professionalSummary || state.summary || '',
      experience: state.experience || [],
      education: state.education || [],
      skills: state.skills || [],
      projects: state.projects || [],
      internships: state.internships || [],
      certifications: state.certifications || [],
      awards: state.awards || [],
      preview: state
    };
    return sectionMap[currentSection] || null;
  };

  const renderSectionComponent = () => {
    const data = getSectionData();
    
    // âœ… CRITICAL FIX: Preview section receives onDownloadComplete
    if (currentSection === 'preview') {
      
      return (
        <div key={`preview-${templateId}`} style={{ animation: 'fadeIn 0.3s ease' }}>
          <Preview 
            templateId={templateId}
            isInline={true}
            onDownloadComplete={onDownloadComplete}  // â† PASS THE CALLBACK HERE
          />
        </div>
      );
    }
    
    if (currentSection === 'optionalSection') {
      if (!hasOptionalSections) {
        setTimeout(() => { if (onContinue) onContinue(); }, 0);
        return null;
      }
      return (
        <OptionalSection 
          key={`optional-${templateId}`}
          templateId={templateId} 
          onDataChange={handleSectionComplete}
          data={data}
        />
      );
    }
    
    const componentMap = {
      personalInfo: PersonalInfo,
      imageSection: ImageSection,
      summary: Summary,
      experience: Experience,
      education: Education,
      skills: Skills,
      projects: Projects,
      internships: Internships,
      certifications: Certifications,
      awards: Awards
    };
    
    const SectionComponent = componentMap[currentSection];
    
    if (!SectionComponent) {
      return (
        <div key={`notfound-${currentSection}`} style={{
          padding: '60px 40px',
          textAlign: 'center',
          background: '#f8f9fa',
          borderRadius: '12px',
          border: '2px dashed #e9ecef'
        }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>ðŸ“‹</span>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Section: {currentSection}
          </h3>
          <p style={{ color: '#666', marginBottom: '24px' }}>
            The {getSectionDisplayName(currentSection)} section is being prepared.
          </p>
        </div>
      );
    }
    
    const extraProps = {};
    if (currentSection === 'summary') {
      extraProps.onContinue = () => handleNavigation('continue');
      extraProps.navigationButtons = (
        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          currentSection={currentSection}
          onContinue={() => handleNavigation('continue')}
          onBack={() => handleNavigation('back')}
          onPreview={() => handleNavigation('preview')}
          isFirstSection={currentStep === 0}
          isLastSection={currentStep === totalSteps - 1}
          canProceed={canProceed}
          isSaving={isSaving}
        />
      );
    }
    
    return (
      <SectionComponent 
        key={componentKey}
        onDataChange={handleSectionComplete}
        data={data}
        templateId={templateId}
        {...extraProps}
      />
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Build Your Professional Resume",
    "description": "Step-by-step guided form to create a professional, ATS-optimized resume.",
    "totalTime": "PT15M",
    "tool": { "@type": "HowToTool", "name": "Resume Builder" },
    "step": [
      { "@type": "HowToStep", "name": "Personal Information", "text": "Add your contact details and professional information." },
      { "@type": "HowToStep", "name": "Professional Summary", "text": "Write a compelling summary of your professional background." },
      { "@type": "HowToStep", "name": "Work Experience", "text": "Detail your work history and achievements." },
      { "@type": "HowToStep", "name": "Education", "text": "List your educational qualifications." },
      { "@type": "HowToStep", "name": "Skills", "text": "Showcase your technical and soft skills." }
    ]
  };

  return (
    <>
      <Head>
        <title>{getSectionDisplayName(currentSection)} - Resume Builder | Create Professional Resume</title>
        <meta name="description" content={getSectionDescription(currentSection)} />
        <meta name="keywords" content={`resume builder, ${currentSection}, create resume, professional resume`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: windowWidth < 480 ? '12px' : '20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: '#ffffff',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        <SectionHeader 
          currentSection={currentSection}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onSave={handleManualSave}
          isSaving={isSaving}
        />
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: windowWidth < 480 ? '16px' : '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
          border: '1px solid #e9ecef',
          animation: 'slideIn 0.3s ease'
        }}>
          {renderSectionComponent()}
        </div>

        {currentSection !== 'summary' && (
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            currentSection={currentSection}
            onContinue={() => handleNavigation('continue')}
            onBack={() => handleNavigation('back')}
            onPreview={() => handleNavigation('preview')}
            isFirstSection={currentStep === 0}
            isLastSection={currentStep === totalSteps - 1}
            canProceed={canProceed}
            isSaving={isSaving}
          />
        )}

        {saveStatus && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#28a745',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 1000,
            animation: 'slideUp 0.3s ease'
          }}>
            <CheckIcon />
            {saveStatus}
          </div>
        )}

        {isNavigating && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(2px)'
          }}>
            <div style={{
              background: 'white',
              padding: '20px 40px',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <LoadingSpinner size="md" color="#0070f3" text="" />
              <span style={{ fontSize: '16px', fontWeight: 500, color: '#333' }}>
                Saving and navigating...
              </span>
            </div>
          </div>
        )}

        {isSaving && !isNavigating && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 1000,
            border: '1px solid #e9ecef'
          }}>
            <LoadingSpinner size="sm" color="#0070f3" text="" />
            <span style={{ color: '#333' }}>Auto-saving...</span>
          </div>
        )}

        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    </>
  );
};

export default GuidedForm;
