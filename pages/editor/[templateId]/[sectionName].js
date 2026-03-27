// pages/editor/[templateId]/[sectionName].js
import Head from 'next/head';
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

// Import all section components directly for rendering
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
  1: "The Professional",
  2: "The Innovator",
  3: "The Executive",
  4: "The Strategist",
  5: "The Minimalist",
  6: "The Architect",
  7: "The Scholar",
  8: "The Traditionalist",
  9: "The Modernist",
  10: "The Essential",
  11: "The Composer",
  12: "The Blueprint",
  13: "The Timeline",
  14: "The Monochrome",
  15: "The Compact",
  16: "The Minimal",
  17: "The Innovator 2.0",
  18: "The Code",
  19: "The Scholar 2.0",
  20: "The Engineer"
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

// Inner component that uses the resume context
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
        console.log(`🔍 Loading Template ${id}, Section: ${sectionName}`);
        
        setTemplate(id);
        
        const requiredSections = getTemplateSections(id);
        const optionalSections = getTemplateOptionalSections(id);
        const allAvailableSections = [...requiredSections, ...optionalSections];
        setAvailableSections(allAvailableSections);
        
        if (!allAvailableSections.includes(sectionName)) {
          console.error(`❌ Section "${sectionName}" not found in Template ${id}`);
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
        console.error('Error loading section:', err);
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
    console.log(`📝 Saving ${sectionName}:`, data);
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
      return (
        <div style={{
          padding: '60px 40px',
          textAlign: 'center',
          background: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>📋</span>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Section: {sectionName}
          </h3>
          <p style={{ color: '#666' }}>
            Component not found for this section.
          </p>
        </div>
      );
    }
    
    if (sectionName === 'preview') {
      return <SectionComponent templateId={parseInt(templateId)} isInline={true} />;
    }
    
    const navigationButtons = (
      <div style={{
        display: 'flex',
        flexDirection: windowWidth < 768 ? 'column' : 'row',
        gap: windowWidth < 768 ? '8px' : '12px',
        width: '100%',
        marginTop: windowWidth < 768 ? '8px' : '16px'
      }}>
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          style={{
            padding: windowWidth < 768 ? '14px 16px' : '14px 28px',
            background: currentStep === 0 ? '#f8f9fa' : 'white',
            color: currentStep === 0 ? '#999' : '#333',
            border: '2px solid #e1e5e9',
            borderRadius: '10px',
            fontSize: windowWidth < 768 ? '16px' : '16px',
            fontWeight: 600,
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            opacity: currentStep === 0 ? 0.5 : 1,
            flex: 1,
            width: '100%',
            minHeight: '48px'
          }}
        >
          <span>←</span> Back
        </button>
        
        <button
          onClick={handlePreview}
          style={{
            padding: windowWidth < 768 ? '14px 16px' : '14px 28px',
            background: '#6c5ce7',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: windowWidth < 768 ? '16px' : '16px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            transform: 'translateY(0)',
            boxShadow: '0 4px 12px rgba(108, 92, 231, 0.3)',
            flex: 1,
            width: '100%',
            minHeight: '48px'
          }}
          onMouseEnter={(e) => {
            if (windowWidth >= 768) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 92, 231, 0.3)';
          }}
        >
          <span>👁️</span> {windowWidth < 768 ? 'Preview' : 'Preview Resume'}
        </button>
        
        <button
          onClick={handleContinue}
          style={{
            padding: windowWidth < 768 ? '14px 16px' : '14px 28px',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: windowWidth < 768 ? '16px' : '16px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            transform: 'translateY(0)',
            boxShadow: '0 4px 12px rgba(0,112,243,0.2)',
            flex: 1,
            width: '100%',
            minHeight: '48px'
          }}
          onMouseEnter={(e) => {
            if (windowWidth >= 768) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,112,243,0.3)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,112,243,0.2)';
          }}
        >
          {windowWidth < 768 ? 'Continue' : 'Continue'} <span>→</span>
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f8f9fa',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚠️</div>
          <h2 style={{ color: '#dc3545', marginBottom: '15px' }}>Section Not Found</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>{error}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => router.push(`/editor/${templateId}`)}
              style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Go to Template Overview
            </button>
            <button
              onClick={() => router.push('/editor')}
              style={{
                background: '#e9ecef',
                color: '#333',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Back to Templates
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f8f9fa'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: '#666' }}>Loading {getSectionDisplayName(sectionName)} section...</p>
        </div>
      </div>
    );
  }

  const isMobile = windowWidth < 768;

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '8px' : '20px',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: '#ffffff',
      minHeight: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: isMobile ? '8px' : '24px',
        padding: isMobile ? '10px 12px' : '16px 20px',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        <div>
          <h1 style={{ 
            fontSize: isMobile ? '18px' : '24px', 
            fontWeight: 700, 
            margin: '0 0 2px 0',
            color: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexWrap: 'wrap'
          }}>
            <span>T{templateId}</span>
            <span style={{ color: '#666', fontWeight: 400 }}>/</span>
            <span style={{ color: '#667eea', fontSize: isMobile ? '16px' : '24px' }}>
              {getSectionDisplayName(sectionName).split(' ').map(word => 
                isMobile && word.length > 8 ? word.substring(0, 6) + '…' : word
              ).join(' ')}
            </span>
          </h1>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
            Step {currentStep + 1}/{sectionsList.length}
          </p>
        </div>
        <button
          onClick={handleChangeTemplate}
          style={{
            padding: isMobile ? '6px 10px' : '10px 20px',
            background: 'white',
            border: '1px solid #e9ecef',
            borderRadius: '6px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
        >
          {isMobile ? 'Change' : 'Change Template'}
        </button>
      </div>

      <div style={{
        width: '100%',
        height: isMobile ? '4px' : '6px',
        background: '#e9ecef',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: isMobile ? '8px' : '24px'
      }}>
        <div style={{
          width: `${((currentStep + 1) / sectionsList.length) * 100}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          borderRadius: '3px',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        border: '1px solid #e9ecef',
        overflow: 'hidden',
        flex: '1 0 auto',
        marginBottom: 0
      }}>
        {renderSectionComponent()}
      </div>
    </div>
  );
}

// Main page component with provider
export default function TemplateDynamicSectionPage() {
  const router = useRouter();
  const { templateId, sectionName } = router.query;
  
  const id = parseInt(templateId);
  const displayName = sectionName ? getSectionDisplayName(sectionName) : '';
  const templateName = TEMPLATE_NAMES[id] || `Template ${id}`;
  const sectionDescription = SECTION_DESCRIPTIONS[sectionName] || `Edit your ${displayName} section to create a professional resume.`;
  
  if (!templateId || !sectionName) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <div style={{ color: '#666' }}>Loading section...</div>
        </div>
      </div>
    );
  }
  
  if (!templateExists(id)) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          background: '#fff3cd',
          padding: '40px',
          borderRadius: '12px',
          borderLeft: '5px solid #ffc107',
          maxWidth: '500px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h2 style={{ color: '#856404', marginBottom: '1rem' }}>Template Not Found</h2>
          <p style={{ color: '#856404', marginBottom: '1.5rem' }}>
            We couldn't find template {id}. Available templates: 1-20
          </p>
          <a 
            href="/editor"
            style={{
              display: 'inline-block',
              background: '#667eea',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Browse All Templates
          </a>
        </div>
      </div>
    );
  }

  // Breadcrumb schema for rich results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemaker.xyz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Builder",
        "item": "https://freeresumemaker.xyz/editor"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": templateName,
        "item": `https://freeresumemaker.xyz/editor/${id}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": displayName,
        "item": `https://freeresumemaker.xyz/editor/${id}/${sectionName}`
      }
    ]
  };

  // HowTo schema for the section editing process - FIXED: removed the typo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Edit Your ${displayName} Section`,
    "description": `Step-by-step guide to adding your ${displayName.toLowerCase()} to your resume.`,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Fill in Your Details",
        "text": `Enter your ${displayName.toLowerCase()} information in the fields below.`
      },
      {
        "@type": "HowToStep",
        "name": "Review Your Entry",
        "text": "Check that all information is accurate and complete."
      },
      {
        "@type": "HowToStep",
        "name": "Continue to Next Section",
        "text": "Click Continue to move to the next section of your resume."
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`Edit ${displayName} - ${templateName} Resume Builder | Free ATS-Friendly Tool`}
        description={`Add your ${displayName.toLowerCase()} to ${templateName}. ${sectionDescription} Create your professional resume with our free builder. No sign-up required.`}
        keywords={`${displayName.toLowerCase()} section, resume ${displayName.toLowerCase()}, ${templateName.toLowerCase()} resume, edit resume ${displayName.toLowerCase()}, resume builder ${displayName.toLowerCase()}`}
        canonical={`https://freeresumemaker.xyz/editor/${id}/${sectionName}`}
        image={`https://freeresumemaker.xyz/assets/template-previews/template-${id}.png`}
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <ResumeProvider>
        <SectionEditorContent />
      </ResumeProvider>
    </>
  );
}