// pages/editor/[templateId]/preview.js
import { useRouter } from 'next/router';
import { ResumeProvider, useResume } from '../../../context/ResumeContext';
import Preview from '../../../components/editor/Preview';
import Link from 'next/link';
import SEO from '../../../components/SEO';

// Template names for SEO
const getTemplateName = (id) => {
  const names = {
    1: 'The Professional',
    2: 'The Innovator',
    3: 'The Executive',
    4: 'The Strategist',
    5: 'The Minimalist',
    6: 'The Architect',
    7: 'The Scholar',
    8: 'The Traditionalist',
    9: 'The Modernist',
    10: 'The Essential',
    11: 'The Composer',
    12: 'The Blueprint',
    13: 'The Timeline',
    14: 'The Monochrome',
    15: 'The Compact',
    16: 'The Minimal',
    17: 'The Innovator 2.0',
    18: 'The Code',
    19: 'The Scholar 2.0',
    20: 'The Engineer'
  };
  return names[parseInt(id)] || `Template ${id}`;
};

export default function TemplatePreviewPage() {
  const router = useRouter();
  const { templateId } = router.query;

  if (!templateId) {
    return (
      <div style={{ textAlign: 'center', padding: '60px' }}>
        <div>Loading preview...</div>
      </div>
    );
  }

  const templateName = getTemplateName(templateId);
  const fullTitle = `Preview ${templateName} Resume | Professional Resume Preview`;
  const fullDescription = `Preview your ${templateName} resume before downloading. See how your professional information, work experience, and skills appear in this ATS-friendly template.`;

  return (
    <ResumeProvider>
      <SEO 
        title={fullTitle}
        description={fullDescription}
        canonical={`https://freeresumemaker.xyz/editor/${templateId}/preview`}
        type="website"
      />
      
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
            {templateName} Preview
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

        <Preview templateId={templateId} />
      </div>
    </ResumeProvider>
  );
}