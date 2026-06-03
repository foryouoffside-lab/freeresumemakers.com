// pages/editor/[templateId]/[sectionName].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ResumeProvider, useResume } from '../../../context/ResumeContext';
import SEO from '../../../components/SEO';
import { 
  getSectionDisplayName, 
  templateExists,
  getTemplateSections,
  getTemplateOptionalSections 
} from '../../../lib/templateConfig';

// Import all section components
import PersonalInfo from '../../../components/editor/PersonalInfo';
import Summary from '../../../components/editor/Summary';
import Experience from '../../../components/editor/Experience';
import Education from '../../../components/editor/Education';
import Skills from '../../../components/editor/Skills';
import Projects from '../../../components/editor/Projects';
import Internships from '../../../components/editor/Internships';
import Certifications from '../../../components/editor/Certifications';
import Awards from '../../../components/editor/Awards';
import ImageSection from '../../../components/editor/ImageSection';
import Preview from '../../../components/editor/Preview';

// Template names for SEO
const TEMPLATE_NAMES = {
  1: "The Professional", 2: "The Innovator", 3: "The Executive", 4: "The Strategist",
  5: "The Minimalist", 6: "The Architect", 7: "The Scholar", 8: "The Traditionalist",
  9: "The Modernist", 10: "The Essential", 11: "The Composer", 12: "The Blueprint",
  13: "The Timeline", 14: "The Monochrome", 15: "The Compact", 16: "The Minimal",
  17: "The Innovator 2.0", 18: "The Code", 19: "The Scholar 2.0", 20: "The Engineer"
};

// Section descriptions for SEO
const SECTION_DESCRIPTIONS = {
  personalInfo: "Add your contact information, name, email, phone number, location, and LinkedIn profile to your resume.",
  imageSection: "Add a professional profile photo to your resume for personal branding.",
  summary: "Write a compelling professional summary that highlights your experience, skills, and career goals.",
  experience: "List your work experience with achievements, responsibilities, and quantifiable results.",
  education: "Add your educational background including degrees, institutions, and honors.",
  skills: "Showcase your technical and soft skills relevant to the job you're applying for.",
  projects: "Highlight your projects with technologies used, your role, and outcomes.",
  internships: "List internship experiences to demonstrate practical skills and industry exposure.",
  certifications: "Display professional certifications and credentials that validate your expertise.",
  awards: "Showcase awards, honors, and recognitions that demonstrate excellence.",
  preview: "Preview your complete resume before downloading as PDF."
};

function SectionEditorContent() {
  const router = useRouter();
  const { templateId, sectionName } = router.query;
  const { setTemplate, state, updateTemplateSection } = useResume();
  const [sectionsList, setSectionsList] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableSections, setAvailableSections] = useState([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (templateId && sectionName) {
      try {
        const id = parseInt(templateId);
        setTemplate(id);
        
        const requiredSections = getTemplateSections(id);
        const optionalSections = getTemplateOptionalSections(id);
        const allAvailableSections = [...requiredSections, ...optionalSections];
        setAvailableSections(allAvailableSections);
        
        if (!allAvailableSections.includes(sectionName)) {
          setError(`Section "${sectionName}" is not available in Template ${id}. Available sections: ${allAvailableSections.join(', ')}`);
          setIsLoading(false);
          return;
        }
        
        const fullSectionsList = [...requiredSections, 'preview'];
        setSectionsList(fullSectionsList);
        
        const sectionIndex = requiredSections.indexOf(sectionName);
        setCurrentStep(sectionIndex >= 0 ? sectionIndex : requiredSections.length);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load section: ' + err.message);
        setIsLoading(false);
      }
    }
  }, [templateId, sectionName, setTemplate]);

  const handleContinue = () => {
    if (currentStep < sectionsList.length - 1) {
      const nextSection = sectionsList[currentStep + 1];
      if (nextSection === 'preview') {
        router.push(`/editor/${templateId}/preview`);
      } else {
        router.push(`/editor/${templateId}/${nextSection}`);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prevSection = sectionsList[currentStep - 1];
      router.push(`/editor/${templateId}/${prevSection}`);
    }
  };

  const handlePreview = () => {
    router.push(`/editor/${templateId}/preview`);
  };

  const handleChangeTemplate = () => {
    router.push('/editor');
  };

  const handleSectionChange = (data) => {
    updateTemplateSection(sectionName, data);
  };

  const getSectionData = () => {
    switch(sectionName) {
      case 'personalInfo':
        return state.personalInfo || {};
      case 'imageSection':
        return state.personalInfo || {};
      case 'summary':
        return state.professionalSummary || '';
      case 'experience':
        return state.experience || [];
      case 'education':
        return state.education || [];
      case 'skills':
        return state.skills || [];
      case 'projects':
        return state.projects || [];
      case 'internships':
        return state.internships || [];
      case 'certifications':
        return state.certifications || [];
      case 'awards':
        return state.awards || [];
      case 'preview':
        return state;
      default:
        return null;
    }
  };

  const renderSectionComponent = () => {
    const data = getSectionData();
    
    const componentMap = {
      'personalInfo': PersonalInfo,
      'imageSection': ImageSection,
      'summary': Summary,
      'experience': Experience,
      'education': Education,
      'skills': Skills,
      'projects': Projects,
      'internships': Internships,
      'certifications': Certifications,
      'awards': Awards,
      'preview': Preview
    };
    
    const SectionComponent = componentMap[sectionName];
    
    if (!SectionComponent) {
      return <div>Component not found for section: {sectionName}</div>;
    }
    
    if (sectionName === 'preview') {
      return <SectionComponent templateId={parseInt(templateId)} isInline={true} />;
    }
    
    const navigationButtons = (
      <div style={{
        display: 'flex',
        flexDirection: windowWidth < 1024 ? 'column' : 'row',
        gap: '12px',
        width: '100%',
        marginTop: '16px',
        flexWrap: 'wrap'
      }}>
        <button onClick={handleBack} disabled={currentStep === 0} style={{
          padding: windowWidth < 768 ? '12px 16px' : windowWidth < 1200 ? '12px 20px' : '14px 28px',
          background: currentStep === 0 ? '#f8f9fa' : 'white',
          color: currentStep === 0 ? '#999' : '#333',
          border: '2px solid #e1e5e9',
          borderRadius: '10px',
          fontSize: windowWidth < 768 ? '14px' : '15px',
          fontWeight: 600,
          cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
          opacity: currentStep === 0 ? 0.5 : 1,
          flex: 1,
          width: '100%',
          minHeight: '48px',
          whiteSpace: 'nowrap'
        }}>
          ← Back
        </button>
        <button onClick={handlePreview} style={{
          padding: windowWidth < 768 ? '12px 16px' : windowWidth < 1200 ? '12px 20px' : '14px 28px',
          background: '#6c5ce7',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: windowWidth < 768 ? '14px' : '15px',
          fontWeight: 600,
          cursor: 'pointer',
          flex: 1,
          width: '100%',
          minHeight: '48px',
          whiteSpace: 'nowrap'
        }}>
          Preview
        </button>
        <button onClick={handleContinue} style={{
          padding: windowWidth < 768 ? '12px 16px' : windowWidth < 1200 ? '12px 20px' : '14px 28px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: windowWidth < 768 ? '14px' : '15px',
          fontWeight: 600,
          cursor: 'pointer',
          flex: 1,
          width: '100%',
          minHeight: '48px',
          whiteSpace: 'nowrap'
        }}>
          Continue →
        </button>
      </div>
    );

    return (
      <SectionComponent 
        onDataChange={handleSectionChange} 
        data={data} 
        templateId={parseInt(templateId)}
        navigationButtons={navigationButtons}
      />
    );
  };

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '60px' }}>
        <h2>Section Not Found</h2>
        <p>{error}</p>
        <button onClick={() => router.push(`/editor/${templateId}`)}>Go Back</button>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isMobile = windowWidth < 768;
  const id = parseInt(templateId);
  const templateName = TEMPLATE_NAMES[id] || `Template ${id}`;
  const sectionDescription = SECTION_DESCRIPTIONS[sectionName] || `Complete your ${getSectionDisplayName(sectionName)} section.`;

  const isSplitLayout = windowWidth >= 1100 && sectionName !== 'preview';

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '8px' : '20px',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Optimized Header Card */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        padding: isMobile ? '16px 12px' : '20px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid #e9ecef',
        gap: isMobile ? '16px' : '20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {isMobile ? (
          <>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h1 style={{ 
                margin: 0, 
                fontSize: '20px', 
                color: '#1a1a1a',
                fontWeight: '800',
                fontFamily: 'Outfit, sans-serif',
                lineHeight: '1.2'
              }}>
                {templateName} <span style={{
                  background: 'linear-gradient(135deg, #0070f3, #7928ca)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>(T{templateId})</span>
              </h1>
              <p style={{
                fontSize: '12px',
                color: '#0070f3',
                fontWeight: 700,
                margin: '6px 0 0 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Step {currentStep + 1} of {sectionsList.length} • {getSectionDisplayName(sectionName)}
              </p>
              
              <div style={{
                width: '100%',
                maxWidth: '200px',
                height: '4px',
                background: '#e2e8f0',
                borderRadius: '2px',
                overflow: 'hidden',
                margin: '8px auto 0 auto'
              }}>
                <div style={{
                  width: `${((currentStep + 1) / sectionsList.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #0070f3, #7928ca)',
                  borderRadius: '2px'
                }} />
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              width: '100%',
              justifyContent: 'stretch'
            }}>
              <button 
                onClick={handleChangeTemplate}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  background: 'white',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '700',
                  flex: 1,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
              >
                Change Template
              </button>
              
              <button 
                onClick={handlePreview}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '700',
                  flex: 1,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
              >
                👁️ Preview
              </button>
            </div>
          </>
        ) : (
          <>
            <button 
              onClick={handleChangeTemplate}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'white',
                color: '#475569',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
            >
              ← Change Template
            </button>
            
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <h1 style={{ 
                margin: 0, 
                fontSize: '22px', 
                color: '#1a1a1a',
                fontWeight: '800',
                fontFamily: 'Outfit, sans-serif',
                lineHeight: '1.2'
              }}>
                {templateName} <span style={{
                  background: 'linear-gradient(135deg, #0070f3, #7928ca)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>(T{templateId})</span>
              </h1>
              <p style={{
                fontSize: '13px',
                color: '#0070f3',
                fontWeight: 700,
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Step {currentStep + 1} of {sectionsList.length} • {getSectionDisplayName(sectionName)}
              </p>
              
              <div style={{
                width: '120px',
                height: '4px',
                background: '#e2e8f0',
                borderRadius: '2px',
                overflow: 'hidden',
                marginTop: '4px'
              }}>
                <div style={{
                  width: `${((currentStep + 1) / sectionsList.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #0070f3, #7928ca)',
                  borderRadius: '2px'
                }} />
              </div>
            </div>
            
            <button 
              onClick={handlePreview}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#005ecb'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
            >
              <span>👁️</span>
              <span>Live Preview</span>
            </button>
          </>
        )}
      </div>

      {/* Guide/Description Box */}
      <div style={{
        background: '#f8fafc',
        borderLeft: '4px solid #3b82f6',
        padding: '14px 18px',
        borderRadius: '0 8px 8px 0',
        marginBottom: '24px',
        fontSize: isMobile ? '13px' : '14px',
        color: '#475569',
        lineHeight: 1.5,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        💡 <strong>Tip:</strong> {sectionDescription}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isSplitLayout ? '1.2fr 0.8fr' : '1fr',
        gap: '24px',
        width: '100%',
        alignItems: 'start',
        boxSizing: 'border-box'
      }}>
        {/* Left Column: Form Editor Component */}
        <div className="editor-squeezed-container" style={{
          background: 'white',
          borderRadius: isMobile ? '12px' : '20px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.015)',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {renderSectionComponent()}
        </div>

        {/* Right Column: Live Sticky Mini Preview */}
        {isSplitLayout && (
          <div style={{
            position: 'sticky',
            top: '20px',
            background: 'white',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', fontFamily: 'Outfit, sans-serif' }}>
                Live A4 Preview
              </span>
              <button 
                onClick={handlePreview}
                style={{
                  padding: '6px 12px',
                  background: '#f1f5f9',
                  color: '#0f172a',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                }}
              >
                Full Screen
              </button>
            </div>
            <Preview templateId={parseInt(templateId)} isMini={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function TemplateDynamicSectionPage() {
  const router = useRouter();
  const { templateId, sectionName } = router.query;
  
  const id = parseInt(templateId);
  const displayName = sectionName ? getSectionDisplayName(sectionName) : '';
  const templateName = TEMPLATE_NAMES[id] || `Template ${id}`;
  const sectionDescription = SECTION_DESCRIPTIONS[sectionName] || `Edit your ${displayName} section.`;
  
  if (!templateId || !sectionName) {
    return <div>Loading...</div>;
  }
  
  if (!templateExists(id)) {
    return <div>Template not found</div>;
  }

  return (
    <ResumeProvider>
      <SEO 
        title={`Edit ${displayName} - ${templateName} Resume Builder`}
        description={sectionDescription}
        canonical={`https://freeresumemaker.xyz/editor/${id}/${sectionName}`}
        type="website"
      />
      <SectionEditorContent />
    </ResumeProvider>
  );
}