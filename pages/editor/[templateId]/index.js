import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SEO from '../../../components/SEO';
import Head from 'next/head';
import { getTemplateSections, getSectionDisplayName } from '../../../lib/templateConfig';

// Template names matching your TEMPLATES array
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

// Get template description for SEO
const getTemplateDescription = (id) => {
  const descriptions = {
    1: 'Classic two-column layout with gradient header and experience type filtering. Perfect for business, finance, and law professionals.',
    2: 'Modern two-column design with visual connectors and centered header. Ideal for tech, marketing, and creative roles.',
    3: 'Sophisticated dark theme with sidebar focus on certifications. Designed for senior executives and directors.',
    4: 'Timeline-based layout with square markers showing career progression. Perfect for consultants and project managers.',
    5: 'Ultra-clean isolated sections with perfect contrast. Optimized for ATS and modern tech companies.',
    6: 'Structured technical template with side-by-side education boxes and professional timeline. Built for engineers and architects.',
    7: 'Elegant geometric design with sidebar achievements and professional timeline. Perfect for academics and researchers.',
    8: 'Clean black & white design with side-by-side education layout. Trusted by traditional industries and government roles.',
    9: 'Fresh contemporary design with equal spacing and modern typography. Balanced layout for all industries.',
    10: 'Clean, focused design showing exactly one experience. Ideal for students, interns, and entry-level professionals.',
    11: 'Elegant serif-based design with clear hierarchy and professional spacing. Perfect for humanities, arts, and traditional roles.',
    12: 'Structured blueprint-style layout with color-coded sections. Designed for engineers, architects, and technical roles.',
    13: 'Visual timeline-based design with clear progression markers. Perfect for project managers and career progression focus.',
    14: 'Bold black & white design with strong visual hierarchy. Ideal for legal, government, and formal roles.',
    15: 'Space-efficient design with tight spacing and streamlined sections. Perfect for experienced professionals with lots of content.',
    16: 'Ultra-minimalist design with avatar initials and clean layout. Focuses purely on content with no distractions.',
    17: 'Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.',
    18: 'Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.',
    19: 'Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.',
    20: 'Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads.'
  };
  return descriptions[parseInt(id)] || `Professional ATS-friendly resume template with customizable sections.`;
};

// Get best for info for SEO
const getBestFor = (id) => {
  const bestFor = {
    1: 'business, finance, law, management',
    2: 'tech, marketing, design, creative roles',
    3: 'senior executives, directors, leadership roles',
    4: 'consultants, project managers, strategists',
    5: 'software engineers, UX/UI designers, recent graduates',
    6: 'engineers, architects, technical professionals',
    7: 'academics, researchers, educators, PhD candidates',
    8: 'legal, government, traditional industries',
    9: 'all industries, versatile professionals',
    10: 'students, interns, entry-level professionals',
    11: 'humanities, arts, traditional roles',
    12: 'engineers, architects, technical roles',
    13: 'project managers, operations professionals',
    14: 'legal, government, formal roles',
    15: 'experienced professionals, senior roles',
    16: 'minimalists, content-focused professionals',
    17: 'students, interns, junior developers',
    18: 'software engineers, developers, programmers',
    19: 'academics, researchers, educators',
    20: 'developers, programmers, tech leads'
  };
  return bestFor[parseInt(id)] || 'all professions';
};

export default function TemplateEditorHome() {
  const router = useRouter();
  const { templateId } = router.query;

  useEffect(() => {
    if (templateId) {
      const id = parseInt(templateId);
      const sections = getTemplateSections(id);
      if (sections && sections.length > 0) {
        router.replace(`/editor/${templateId}/${sections[0]}`);
      }
    }
  }, [templateId, router]);

  if (!templateId) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
        <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Loading Editor...</h2>
        <p style={{ color: '#64748b' }}>Preparing your template</p>
      </div>
    );
  }

  const templateName = getTemplateName(templateId);
  const templateDescription = getTemplateDescription(templateId);
  const bestFor = getBestFor(templateId);

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Builder",
        "item": "https://freeresumemakers.com/editor"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": templateName,
        "item": `https://freeresumemakers.com/editor/${templateId}`
      }
    ]
  };

  // Product schema for the template
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": templateName,
    "description": templateDescription,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly"
    }
  };

  return (
    <>
      <SEO 
        title={`${templateName} Resume Template Editor | Free ATS-Friendly Resume Builder`}
        description={`Edit your ${templateName} resume template online. Add personal information, work experience, skills, and customize each section. ${templateDescription} Best for ${bestFor}. Free PDF download.`}
        keywords={`${templateName.toLowerCase()} resume template, ${templateName.toLowerCase()} editor, resume builder, edit resume, ATS-friendly resume, ${bestFor} resume template`}
        canonical={`https://freeresumemakers.com/editor/${templateId}`}
        image={`https://freeresumemakers.com/assets/template-previews/template-${templateId}.png`}
        type="website"
      />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Free Resume Builder" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
        <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Loading {templateName} Editor...</h2>
        <p style={{ color: '#64748b' }}>Preparing your template sections</p>
        <div style={{
          marginTop: '30px',
          width: '40px',
          height: '40px',
          border: '3px solid #e2e8f0',
          borderTop: '3px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
}