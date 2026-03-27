import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../../components/SEO';
import { getTemplateSections, getSectionDisplayName, getSectionLimit } from '../../lib/templateConfig';

const TEMPLATE_NAMES = {
  17: "The Innovator 2.0",
  18: "The Code",
  19: "The Scholar 2.0",
  20: "The Engineer"
};

const TEMPLATE_DESCRIPTIONS = {
  17: "Modern card-based design with internship and project focus. Perfect for students, interns, and junior developers.",
  18: "Developer-focused template with project links, tech tags, and code-friendly icons. Built for software engineers.",
  19: "Education-focused design with white-box education styling. Perfect for academics, researchers, and educators.",
  20: "Software engineering optimized template with project-first layout. Designed for developers, programmers, and tech leads."
};

const TEMPLATE_LONG_DESCRIPTIONS = {
  17: "The Innovator 2.0 is a modern, ATS-friendly resume template featuring a clean card-based layout that highlights internships, projects, and academic achievements. Perfect for students, interns, and junior developers looking to make a strong impression.",
  18: "The Code template is specifically designed for software engineers and developers, featuring prominent project links, tech tags, and developer-friendly icons that showcase technical skills and GitHub contributions effectively.",
  19: "The Scholar 2.0 template offers an education-focused design with white-box styling that emphasizes academic credentials, research experience, and publications. Ideal for academics, researchers, and educators.",
  20: "The Engineer template provides a project-first layout optimized for software engineering roles, featuring clear hierarchy for technical achievements, system designs, and leadership experience."
};

const TEMPLATE_KEYWORDS = {
  17: "student resume template, intern resume, junior developer CV, modern resume design, ATS friendly resume, college graduate resume",
  18: "software engineer resume, developer CV, tech resume template, programmer resume, coding portfolio, GitHub resume",
  19: "academic CV template, researcher resume, educator CV, scholar resume, faculty application, postdoc resume",
  20: "tech lead resume, senior developer CV, engineering manager resume, software architect CV, technical lead template"
};

export default function TemplateInfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const templateId = parseInt(id);
  const templateName = TEMPLATE_NAMES[templateId] || "Professional Resume Template";
  const description = TEMPLATE_DESCRIPTIONS[templateId] || "Professional ATS-friendly resume template.";
  const longDescription = TEMPLATE_LONG_DESCRIPTIONS[templateId] || description;
  const keywords = TEMPLATE_KEYWORDS[templateId] || "resume template, CV template, professional resume, ATS friendly resume";
  
  const sections = getTemplateSections(templateId);
  const sectionCount = sections?.length || 0;
  
  // Handle case when id is not yet available (during initial render)
  if (!id) {
    return null;
  }
  
  // Handle invalid template ID
  if (!sections || sections.length === 0 || !TEMPLATE_NAMES[templateId]) {
    return (
      <>
        <SEO 
          title="Resume Template Not Found | Free Resume Templates"
          description="Browse our collection of professional ATS-friendly resume templates. Find the perfect template for your career path."
          canonical="https://freeresumemaker.xyz/templates/"
          type="website"
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
          <h1>Template Not Found</h1>
          <p>The resume template you're looking for doesn't exist or may have been moved.</p>
          <Link href="/templates/" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>
            Browse All Templates
          </Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <SEO 
        title={`${templateName} Resume Template | ${sectionCount}-Section ATS-Friendly CV Guide`}
        description={`${longDescription} Includes ${sectionCount} essential sections: ${sections.map(s => getSectionDisplayName(s)).join(', ')}. Download free, ATS-optimized resume template.`}
        canonical={`https://freeresumemaker.xyz/template-info/${id}`}
        type="article"
      />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Free Resume Makers" />
        <link rel="canonical" href={`https://freeresumemaker.xyz/template-info/${id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://freeresumemaker.xyz/template-info/${id}`} />
        <meta property="og:title" content={`${templateName} - Professional ATS-Friendly Resume Template`} />
        <meta property="og:description" content={longDescription} />
        <meta property="og:image" content={`https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Free Resume Builder" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateName} Resume Template`} />
        <meta name="twitter:description" content={longDescription} />
        <meta name="twitter:image" content={`https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`} />
        <meta name="twitter:site" content="@freeresumemaker" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": `${templateName} Resume Template`,
              "description": longDescription,
              "image": `https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly",
                "priceValidUntil": "2026-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "brand": {
                "@type": "Brand",
                "name": "Free Resume Builder"
              }
            })
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://freeresumemaker.xyz/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Resume Templates",
                  "item": "https://freeresumemaker.xyz/templates/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": templateName,
                  "item": `https://freeresumemaker.xyz/template-info/${id}`
                }
              ]
            })
          }}
        />
      </Head>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '24px', fontSize: '14px' }}>
          <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: '#666' }}>/</span>
          <Link href="/templates/" style={{ color: '#0070f3', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#666' }}>/</span>
          <span style={{ color: '#333' }}>{templateName}</span>
        </nav>
        
        {/* Header */}
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 700, color: '#1a1a1a' }}>
            {templateName} Resume Template
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: '#555', marginBottom: '24px' }}>
            {longDescription}
          </p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '32px', padding: '20px 0', borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>{sectionCount}</strong>
              <span style={{ color: '#666' }}>Sections</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>ATS-Friendly</strong>
              <span style={{ color: '#666' }}>Optimized</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.8rem', color: '#0070f3', display: 'block' }}>Free</strong>
              <span style={{ color: '#666' }}>Download</span>
            </div>
          </div>
        </header>
        
        {/* Sections Required */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>Sections Included</h2>
          <p style={{ marginBottom: '24px', color: '#555', fontSize: '1rem' }}>
            This {templateName} template includes {sectionCount} carefully curated sections:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
            {sections.map(section => (
              <div key={section} style={{ padding: '14px 18px', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #0070f3', transition: 'all 0.2s' }}>
                <strong style={{ fontSize: '1rem' }}>{getSectionDisplayName(section)}</strong>
                {getSectionLimit(templateId, section) && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginTop: '6px' }}>
                    Maximum: {getSectionLimit(templateId, section)} {getSectionLimit(templateId, section) === 1 ? 'entry' : 'entries'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Why Choose This Template */}
        <section style={{ marginBottom: '48px', backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>Why Choose {templateName}?</h2>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>✓ ATS-optimized formatting that passes automated screening systems</li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>✓ Professional design trusted by recruiters and hiring managers</li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>✓ Easy to customize and fill out in minutes</li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>✓ Download as PDF or DOCX format</li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>✓ 100% free with no hidden costs</li>
          </ul>
        </section>
        
        {/* How to Use */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', fontWeight: 600, color: '#1a1a1a' }}>How to Create Your Resume</h2>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>
              <strong>Select this template</strong> - Start building your resume with {templateName}
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>
              <strong>Fill in your information</strong> - Complete each section with your experience and skills
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>
              <strong>Customize content</strong> - Add keywords relevant to your target job
            </li>
            <li style={{ marginBottom: '12px', color: '#555', lineHeight: 1.5 }}>
              <strong>Review and download</strong> - Export your finished resume in PDF format
            </li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '28px', fontWeight: 600, color: '#1a1a1a' }}>Frequently Asked Questions</h2>
          
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 600, color: '#333' }}>Is this template really free?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, all our resume templates are completely free to use. No credit card required, no hidden fees.</p>
          </div>
          
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 600, color: '#333' }}>Is this template ATS-friendly?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, all our templates are designed to be ATS-compatible with clean formatting and standard section headers that automated systems can easily parse.</p>
          </div>
          
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: 600, color: '#333' }}>Can I download my resume as PDF?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, you can download your completed resume as a PDF or DOCX file, ready to submit to employers.</p>
          </div>
        </section>
        
        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '48px', padding: '48px 32px', backgroundColor: '#0070f3', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'white', fontWeight: 700 }}>Ready to Create Your Resume?</h2>
          <p style={{ marginBottom: '28px', fontSize: '1.1rem', opacity: 0.95 }}>
            Start building your professional resume with {templateName} today
          </p>
          <Link 
            href="/builder/"
            style={{ 
              display: 'inline-block', 
              padding: '14px 36px', 
              backgroundColor: 'white', 
              color: '#0070f3', 
              textDecoration: 'none', 
              borderRadius: '50px', 
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            Build Your Resume Now →
          </Link>
          <p style={{ marginTop: '24px', fontSize: '0.9rem', opacity: 0.9 }}>
            <Link href="/templates/" style={{ color: 'white', textDecoration: 'underline' }}>
              Browse all templates
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}