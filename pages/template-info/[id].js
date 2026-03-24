import Head from 'next/head';
import { useRouter } from 'next/router';
import { getTemplateSections, getSectionDisplayName, getSectionLimit } from '../../lib/templateConfig';
import Link from 'next/link';
import SEO from '../../components/SEO';

// Template names and descriptions for SEO
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

const TEMPLATE_DESCRIPTIONS = {
  1: "Classic two-column layout with gradient header and experience type filtering. Perfect for business, finance, and law professionals.",
  2: "Modern two-column design with visual connectors and centered header. Ideal for tech, marketing, and creative roles.",
  3: "Sophisticated dark theme with sidebar focus on certifications. Designed for senior executives and directors.",
  4: "Timeline-based layout with square markers showing career progression. Perfect for consultants and project managers.",
  5: "Ultra-clean isolated sections with perfect contrast. Optimized for ATS and modern tech companies.",
  6: "Structured technical template with side-by-side education boxes and professional timeline. Built for engineers and architects.",
  7: "Elegant geometric design with sidebar achievements and professional timeline. Perfect for academics and researchers.",
  8: "Clean black & white design with side-by-side education layout. Trusted by traditional industries and government roles.",
  9: "Fresh contemporary design with equal spacing and modern typography. Balanced layout for all industries.",
  10: "Clean, focused design showing exactly one experience. Ideal for students, interns, and entry-level professionals.",
  11: "Elegant serif-based design with clear hierarchy and professional spacing. Perfect for humanities, arts, and traditional roles.",
  12: "Structured blueprint-style layout with color-coded sections. Designed for engineers, architects, and technical roles.",
  13: "Visual timeline-based design with clear progression markers. Perfect for project managers and career progression focus.",
  14: "Bold black & white design with strong visual hierarchy. Ideal for legal, government, and formal roles.",
  15: "Space-efficient design with tight spacing and streamlined sections. Perfect for experienced professionals with lots of content.",
  16: "Ultra-minimalist design with avatar initials and clean layout. Focuses purely on content with no distractions.",
  17: "Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.",
  18: "Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.",
  19: "Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.",
  20: "Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads."
};

const TEMPLATE_BEST_FOR = {
  1: "Business, Finance, Law, Management",
  2: "Tech, Marketing, Design, Creative Roles",
  3: "Senior Executives, Directors, Leadership Roles",
  4: "Consultants, Project Managers, Strategists",
  5: "Software Engineers, UX/UI Designers, Recent Graduates",
  6: "Engineers, Architects, Technical Professionals",
  7: "Academics, Researchers, Educators, PhD Candidates",
  8: "Legal, Government, Traditional Industries",
  9: "All Industries, Versatile Professionals",
  10: "Students, Interns, Entry-Level Professionals",
  11: "Humanities, Arts, Traditional Roles",
  12: "Engineers, Architects, Technical Roles",
  13: "Project Managers, Operations Professionals",
  14: "Legal, Government, Formal Roles",
  15: "Experienced Professionals, Senior Roles",
  16: "Minimalists, Content-Focused Professionals",
  17: "Students, Interns, Junior Developers",
  18: "Software Engineers, Developers, Programmers",
  19: "Academics, Researchers, Educators",
  20: "Developers, Programmers, Tech Leads"
};

const TEMPLATE_ATS_SCORE = {
  1: 95, 2: 88, 3: 92, 4: 90, 5: 98, 6: 91, 7: 89, 8: 96, 9: 93, 10: 94,
  11: 87, 12: 90, 13: 89, 14: 95, 15: 91, 16: 97, 17: 88, 18: 92, 19: 90, 20: 93
};

export default function TemplateInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const templateId = parseInt(id);

  if (!templateId || templateId < 1 || templateId > 20) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1>Template Not Found</h1>
        <p>The template you're looking for doesn't exist.</p>
        <Link href="/templates" style={{ color: '#0070f3' }}>Browse All Templates →</Link>
      </div>
    );
  }

  const sections = getTemplateSections(templateId);
  const templateName = TEMPLATE_NAMES[templateId] || `Template ${templateId}`;
  const description = TEMPLATE_DESCRIPTIONS[templateId] || `Professional resume template ${templateId} with ATS-friendly design.`;
  const bestFor = TEMPLATE_BEST_FOR[templateId] || "All Professions";
  const atsScore = TEMPLATE_ATS_SCORE[templateId] || 85;

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
        "name": "Resume Templates",
        "item": "https://freeresumemakers.com/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": templateName,
        "item": `https://freeresumemakers.com/template-info/${templateId}`
      }
    ]
  };

  // Product schema for template info
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": templateName,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <>
      <SEO 
        title={`${templateName} Resume Template - Sections Required & Complete Guide 2026`}
        description={`Complete guide to ${templateName} resume template. Learn what sections are needed: ${sections.map(s => getSectionDisplayName(s)).join(', ')}. ${description} Best for ${bestFor}. ATS Score: ${atsScore}%.`}
        keywords={`${templateName.toLowerCase()} resume, ${templateName.toLowerCase()} template, ${bestFor.toLowerCase()} resume template, ATS friendly resume, resume sections guide, template ${templateId} requirements`}
        canonical={`https://freeresumemakers.com/template-info/${templateId}`}
        image={`https://freeresumemakers.com/assets/template-previews/template-${templateId}.png`}
        type="article"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
          <span>›</span>
          <Link href={`/templates/${templateId}`} style={{ color: '#666', textDecoration: 'none' }}>{templateName}</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Template Guide</span>
        </nav>

        <h1 style={{ fontSize: '42px', marginBottom: '16px', color: '#1a1a1a', fontWeight: 700 }}>
          {templateName} Resume Template: Complete Guide
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: '#e3f2fd',
            color: '#0070f3',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 500
          }}>
            🤖 ATS Score: {atsScore}%
          </span>
          <span style={{
            background: '#e8f5e9',
            color: '#2e7d32',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 500
          }}>
            🎯 Best for: {bestFor}
          </span>
          <span style={{
            background: '#fff3e0',
            color: '#ed6c02',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 500
          }}>
            📄 Template #{templateId}
          </span>
        </div>

        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
          {description}
        </p>

        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #0070f3' }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>💡 Pro Tip:</strong> This template is optimized for ATS systems with clean formatting and standard section headings. 
            Follow the section requirements below to create a resume that gets noticed.
          </p>
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
          Sections Required for {templateName}
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px',
          marginBottom: '30px'
        }}>
          {sections.map(section => (
            <div key={section} style={{
              background: '#f8f9fa',
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <strong style={{ fontSize: '16px' }}>{getSectionDisplayName(section)}</strong>
              {getSectionLimit(templateId, section) && (
                <span style={{
                  background: '#e9ecef',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#666'
                }}>
                  Max: {getSectionLimit(templateId, section)} entries
                </span>
              )}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
          Who Should Use {templateName}?
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
          {templateName} is ideal for <strong>{bestFor}</strong>. {description.split('.')[0]}.
        </p>

        <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
          Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '30px'
        }}>
          <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '10px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🤖</div>
            <strong>ATS-Optimized</strong>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Clean formatting that passes Applicant Tracking Systems</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '10px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📄</div>
            <strong>PDF Ready</strong>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Download your resume as a professional PDF instantly</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '10px' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>✏️</div>
            <strong>Easy to Edit</strong>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Customize every section with our simple editor</p>
          </div>
        </div>

        <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
          How to Use This Template
        </h2>
        <ol style={{ lineHeight: '1.8', marginBottom: '30px', paddingLeft: '20px' }}>
          <li>Click the "Start Building" button below</li>
          <li>Fill in your personal information, work experience, and education</li>
          <li>Add skills, projects, and certifications as needed</li>
          <li>Preview your resume in real-time</li>
          <li>Download as PDF when you're satisfied</li>
        </ol>

        <div style={{ 
          marginTop: '40px', 
          padding: '32px', 
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)', 
          borderRadius: '16px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Ready to Use {templateName}?</h3>
          <p style={{ marginBottom: '24px', opacity: 0.9 }}>
            Start building your professional resume with this ATS-friendly template
          </p>
          <Link 
            href={`/editor/${templateId}`}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'white',
              color: '#0070f3',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Building Now →
          </Link>
        </div>

        {/* Related Templates */}
        <div style={{ marginTop: '48px', padding: '24px', background: '#f8f9fa', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Related Templates</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[templateId - 1, templateId + 1].filter(id => id >= 1 && id <= 20).map(relatedId => (
              <Link 
                key={relatedId}
                href={`/template-info/${relatedId}`}
                style={{
                  padding: '8px 16px',
                  background: 'white',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.color = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.color = '#333';
                }}
              >
                {TEMPLATE_NAMES[relatedId]}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { q: `Is ${templateName} really free?`, a: 'Yes, all templates are 100% free with no hidden charges or sign-up requirements.' },
              { q: `Is ${templateName} ATS-friendly?`, a: `Yes, ${templateName} has an ATS score of ${atsScore}% and uses clean formatting that passes Applicant Tracking Systems.` },
              { q: 'Can I customize this template?', a: 'Yes, you can customize every section including personal info, experience, education, skills, and more.' },
              { q: 'How do I download my resume?', a: 'After editing, you can download your resume as a PDF instantly with one click.' }
            ].map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: '#f8f9fa',
                borderRadius: '12px'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>{faq.q}</h3>
                <p style={{ color: '#666', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}