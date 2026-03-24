// ============================================
// pages/editor/[templateId]/preview.js
// ENHANCED SEO VERSION - WITH DEBUG LOGS
// ============================================

import { useRouter } from 'next/router';
import { ResumeProvider, useResume } from '../../../context/ResumeContext';
import Preview from '../../../components/editor/Preview';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

// Debug component to log state
const DebugState = () => {
  const { state } = useResume();
  
  useEffect(() => {
    console.group('🔍 PREVIEW PAGE - Context State');
    console.log('state.professionalSummary:', state.professionalSummary);
    console.log('Type:', typeof state.professionalSummary);
    console.log('Length:', state.professionalSummary?.length || 0);
    console.log('First 100 chars:', state.professionalSummary?.substring(0, 100));
    console.log('Full state:', state);
    console.groupEnd();
  }, [state.professionalSummary]);
  
  return null;
};

export default function TemplatePreviewPage() {
  const router = useRouter();
  const { templateId } = router.query;

  // Template names for better SEO
  const getTemplateName = () => {
    const names = {
      1: "Obsidian - Professional",
      2: "Classic Horizon - Traditional",
      3: "Global Pro - Modern",
      4: "Cornerstone - Executive",
      5: "Equinox - Minimalist",
      6: "Quantum - Feature-Rich",
      7: "Galileo - Balanced",
      8: "Monochrome - Classic",
      9: "Bold Professional",
      10: "Simple Professional",
      11: "Ethereal - Minimalist",
      12: "Dashboard Pro - Modern",
      13: "Legacy - Traditional",
      14: "Corporate Classic",
      15: "Synergy - Modern",
      16: "Ethereal - Creative",
      17: "Entry Level - Graduate",
      18: "Executive Pro - Senior",
      19: "Modern Creative - Designer",
      20: "Tech Stack - Developer"
    };
    return names[parseInt(templateId)] || `Template ${templateId}`;
  };

  const fullTitle = `Preview ${getTemplateName()} Resume | Professional Resume Preview`;
  const fullDescription = `Preview your ${getTemplateName()} resume before downloading. See how your professional information, work experience, and skills appear in this ATS-friendly template.`;

  return (
    <ResumeProvider>
      <DebugState />
      <Head>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={`preview resume, ${getTemplateName().toLowerCase()} preview, resume template preview, check resume before download`} />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://freeresumemakers.com/editor/${templateId}/preview`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://freeresumemakers.com/editor/${templateId}/preview`} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={`https://freeresumemakers.com/assets/template-previews/template-${templateId}.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={`https://freeresumemakers.com/assets/template-previews/template-${templateId}.png`} />
      </Head>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          padding: '20px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          border: '1px solid #e9ecef'
        }}>
          <Link 
            href={`/editor/${templateId}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '8px',
              border: '2px solid #0070f3',
              fontSize: '15px',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0070f3';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#0070f3';
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
            <span>Back to Editor</span>
          </Link>
          
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px', 
            color: '#1a1a1a',
            fontWeight: '700'
          }}>
            {getTemplateName()} Preview
          </h1>
          
          <Link 
            href="/templates"
            style={{
              padding: '10px 20px',
              background: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#5a6268'}
            onMouseLeave={(e) => e.target.style.background = '#6c757d'}
          >
            Change Template
          </Link>
        </div>

        <Preview 
          templateId={templateId} 
        />
      </div>
    </ResumeProvider>
  );
}