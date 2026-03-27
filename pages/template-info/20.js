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
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateName} Resume Template`} />
        <meta name="twitter:description" content={longDescription} />
        <meta name="twitter:image" content={`https://freeresumemaker.xyz/images/templates/${templateId}-preview.jpg`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": `${templateName} Resume Template`,
              "description": longDescription,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1250"
              }
            })
          }}
        />
      </Head>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            {templateName} Resume Template
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: '#555', marginBottom: '24px' }}>
            {longDescription}
          </p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px', padding: '16px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <div>
              <strong style={{ fontSize: '1.5rem', color: '#0070f3' }}>{sectionCount}</strong>
              <span style={{ marginLeft: '8px', color: '#666' }}>Sections</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.5rem', color: '#0070f3' }}>ATS-Friendly</strong>
              <span style={{ marginLeft: '8px', color: '#666' }}>Optimized</span>
            </div>
            <div>
              <strong style={{ fontSize: '1.5rem', color: '#0070f3' }}>Free</strong>
              <span style={{ marginLeft: '8px', color: '#666' }}>Download</span>
            </div>
          </div>
        </header>
        
        {/* Sections Required */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Sections Included</h2>
          <p style={{ marginBottom: '20px', color: '#555' }}>
            This {templateName} template includes {sectionCount} carefully curated sections:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {sections.map(section => (
              <div key={section} style={{ padding: '12px 16px', backgroundColor: '#f5f5f5', borderRadius: '8px', borderLeft: '3px solid #0070f3' }}>
                <strong>{getSectionDisplayName(section)}</strong>
                {getSectionLimit(templateId, section) && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                    Maximum: {getSectionLimit(templateId, section)} {getSectionLimit(templateId, section) === 1 ? 'entry' : 'entries'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Why Choose This Template */}
        <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Why Choose {templateName}?</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '12px' }}>âœ“ ATS-optimized formatting that passes automated screening systems</li>
            <li style={{ marginBottom: '12px' }}>âœ“ Professional design trusted by recruiters and hiring managers</li>
            <li style={{ marginBottom: '12px' }}>âœ“ Easy to customize and fill out in minutes</li>
            <li style={{ marginBottom: '12px' }}>âœ“ Download as PDF or DOCX format</li>
            <li style={{ marginBottom: '12px' }}>âœ“ 100% free with no hidden costs</li>
          </ul>
        </section>
        
        {/* How to Use */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>How to Create Your Resume</h2>
          <ol style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Select this template</strong> - Start building your resume with {templateName}</li>
            <li style={{ marginBottom: '12px' }}><strong>Fill in your information</strong> - Complete each section with your experience and skills</li>
            <li style={{ marginBottom: '12px' }}><strong>Customize content</strong> - Add keywords relevant to your target job</li>
            <li style={{ marginBottom: '12px' }}><strong>Review and download</strong> - Export your finished resume in PDF format</li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Frequently Asked Questions</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#333' }}>Is this template really free?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, all our resume templates are completely free to use. No credit card required, no hidden fees.</p>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#333' }}>Is this template ATS-friendly?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, all our templates are designed to be ATS-compatible with clean formatting and standard section headers that automated systems can easily parse.</p>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#333' }}>Can I download my resume as PDF?</h3>
            <p style={{ lineHeight: 1.6, color: '#555' }}>Yes, you can download your completed resume as a PDF or DOCX file, ready to submit to employers.</p>
          </div>
        </section>
        
        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '48px', padding: '40px 24px', backgroundColor: '#0070f3', borderRadius: '12px', color: 'white' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'white' }}>Ready to Create Your Resume?</h2>
          <p style={{ marginBottom: '24px', fontSize: '1.1rem' }}>
            Start building your professional resume with {templateName} today
          </p>
          <Link 
            href="/builder/"
            style={{ 
              display: 'inline-block', 
              padding: '14px 32px', 
              backgroundColor: 'white', 
              color: '#0070f3', 
              textDecoration: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Build Your Resume Now â†’
          </Link>
          <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
            <Link href="/templates/" style={{ color: 'white', textDecoration: 'underline' }}>
              Browse all templates
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
