import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

// Template names matching your TemplateSelector
const templateNames = {
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

// Template descriptions for better SEO
const templateDescriptions = {
  1: "Classic two-column layout perfect for business, finance, and law professionals seeking a traditional yet polished look.",
  2: "Modern two-column design with visual connectors ideal for technology and creative roles.",
  3: "Sophisticated dark theme designed for senior executives and directors to convey authority and leadership.",
  4: "Timeline-based layout perfect for consultants, project managers, and professionals highlighting career progression.",
  5: "Ultra-clean isolated sections optimized for ATS systems and modern technology companies.",
  6: "Structured technical template built specifically for engineers, architects, and IT professionals.",
  7: "Elegant geometric design perfect for academics, researchers, and scholarly professionals.",
  8: "Clean black and white design trusted by traditional industries and conservative employers.",
  9: "Fresh contemporary design with balanced layout suitable for all industries and career levels.",
  10: "Clean, focused design ideal for students, recent graduates, and entry-level professionals.",
  11: "Elegant serif-based design for humanities, arts, literature, and traditional professional roles.",
  12: "Blueprint-style layout with color-coded sections specifically designed for technical and engineering roles.",
  13: "Visual timeline-based design for project managers and professionals showcasing career progression.",
  14: "Bold black and white design with strong visual hierarchy perfect for formal corporate roles.",
  15: "Space-efficient design for experienced professionals with extensive work history and accomplishments.",
  16: "Ultra-minimalist design focusing purely on content with initials for personal branding.",
  17: "Modern card-based design with internship and project focus for students and early-career professionals.",
  18: "Developer-focused template with project links and technology tags for software engineers and developers.",
  19: "Education-focused design with white-box styling for academics, researchers, and educators.",
  20: "Software engineering optimized template with project-first layout for developers and technical roles."
};

const templates = Array.from({length: 20}, (_, i) => i + 1);

// Industry categories for better organization
const industryCategories = {
  "Executive & Business": [1, 3, 4, 8, 14],
  "Technology & Developer": [2, 5, 6, 12, 18, 20],
  "Creative & Design": [2, 9, 11, 16],
  "Academic & Research": [7, 11, 19],
  "Student & Entry-Level": [10, 17],
  "All Industries": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
};

export default function FreeTemplatesPage() {
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
        "name": "Free Resume Templates",
        "item": "https://freeresumemakers.com/free-resume-templates"
      }
    ]
  };

  // ItemList schema for template collection
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Resume Templates",
    "description": "20 professionally designed ATS-friendly resume templates for 2026. All templates are free, customizable, and available for instant PDF download.",
    "numberOfItems": 20,
    "itemListElement": templates.map(num => ({
      "@type": "ListItem",
      "position": num,
      "name": templateNames[num],
      "description": templateDescriptions[num],
      "url": `https://freeresumemakers.com/templates/${num}`
    }))
  };

  // CollectionPage schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Resume Templates Collection",
    "description": "Browse and download 20+ free, professionally designed resume templates for 2026. All templates are ATS-friendly and ready for instant PDF download.",
    "url": "https://freeresumemakers.com/free-resume-templates",
    "numberOfItems": 20,
    "hasPart": templates.map(num => ({
      "@type": "CreativeWork",
      "name": templateNames[num],
      "description": templateDescriptions[num],
      "url": `https://freeresumemakers.com/templates/${num}`
    }))
  };

  return (
    <>
      <SEO 
        title="20+ Free Resume Templates 2026 | ATS-Friendly Professional Designs | Instant Download"
        description="Download 20+ free, professionally designed resume templates for 2026. All templates are ATS-friendly, customizable, and perfect for technology, business, healthcare, and creative professionals. No sign-up required. Instant PDF download."
        keywords="free resume templates 2026, professional resume templates, ATS-friendly resume, free CV templates, downloadable resume templates, resume templates for technology, resume templates for business, modern resume templates"
        canonical="https://freeresumemakers.com/free-resume-templates"
        image="https://freeresumemakers.com/assets/og-free-templates.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
        />
      </Head>
      
      <main style={{ 
        padding: '40px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
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
          <span style={{ color: '#0070f3' }}>Free Resume Templates</span>
        </nav>

        {/* Hero Section - Text only, no emoji */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Free Resume Templates for Every Profession (2026)
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Choose from <strong>20+ professionally designed templates</strong>. All are <strong>ATS-friendly</strong>, 
            <strong> 100% free</strong>, and ready for instant PDF download. No sign-up required.
          </p>
        </div>

        {/* Stats Bar - Text only, no emoji */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '50px',
          padding: '30px',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>20+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Free Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>ATS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Friendly Design</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>Free</div>
            <div style={{ fontSize: '14px', color: '#666' }}>No Sign-Up</div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ marginBottom: '40px', overflowX: 'auto' }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {Object.keys(industryCategories).map((category, idx) => (
              <button
                key={idx}
                style={{
                  padding: '8px 20px',
                  background: category === "All Industries" ? '#0070f3' : '#f8f9fa',
                  color: category === "All Industries" ? 'white' : '#666',
                  border: category === "All Industries" ? 'none' : '1px solid #e9ecef',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
                onClick={() => {
                  const element = document.getElementById(`category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseEnter={(e) => {
                  if (category !== "All Industries") {
                    e.currentTarget.style.background = '#e9ecef';
                  }
                }}
                onMouseLeave={(e) => {
                  if (category !== "All Industries") {
                    e.currentTarget.style.background = '#f8f9fa';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {templates.map(num => (
            <div 
              key={num}
              style={{
                border: '1px solid #e9ecef',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center',
                background: 'white',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              {/* Template Preview Placeholder - Text only, no emoji */}
              <div style={{
                height: '280px',
                background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,
                borderRadius: '16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#0070f3'
                  }}>
                    {templateNames[num].charAt(0)}
                  </div>
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#666',
                    fontWeight: 500
                  }}>
                    {templateNames[num]}
                  </span>
                </div>
              </div>
              
              <h3 style={{
                margin: '12px 0 8px',
                fontSize: '20px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                {templateNames[num]}
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '16px',
                lineHeight: '1.5',
                minHeight: '65px'
              }}>
                {templateDescriptions[num]}
              </p>
              
              <div style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <span style={{
                  background: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  ATS-Friendly
                </span>
                <span style={{
                  background: '#e3f2fd',
                  color: '#0070f3',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  PDF Ready
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link 
                  href={`/templates/${num}`}
                  style={{
                    display: 'block',
                    padding: '12px',
                    background: '#0070f3',
                    color: 'white',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
                >
                  Preview Template
                </Link>
                
                <Link 
                  href={`/editor/${num}`}
                  style={{
                    color: '#0070f3',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0060d6'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0070f3'}
                >
                  Use This Template →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Links - Text only, no emoji */}
        <div style={{ 
          marginTop: '60px', 
          padding: '40px', 
          background: '#f8fafc', 
          borderRadius: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px', 
            textAlign: 'center',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Browse Templates by Industry
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            {[
              { title: "Executive & Business", link: "/professions/business", letter: "E" },
              { title: "Technology & Developer", link: "/professions/software-engineering", letter: "T" },
              { title: "Creative & Design", link: "/professions/creative", letter: "C" },
              { title: "Academic & Research", link: "/professions/academic", letter: "A" }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#e3f2fd',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#0070f3'
                }}>
                  {item.letter}
                </div>
                <h3 style={{ 
                  fontSize: '16px', 
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  {item.title}
                </h3>
                <Link 
                  href={item.link} 
                  style={{ 
                    color: '#0070f3', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  View Templates →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ 
          marginTop: '60px', 
          padding: '40px', 
          background: '#f8fafc', 
          borderRadius: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px', 
            textAlign: 'center',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { 
                q: 'Are these templates really free?', 
                a: 'Yes, all 20+ templates are 100% free. No hidden charges, no premium tiers, and no sign-up required.' 
              },
              { 
                q: 'Are the templates ATS-friendly?', 
                a: 'Yes. All templates use clean formatting, standard fonts, and proper section headings that Applicant Tracking Systems can easily parse.' 
              },
              { 
                q: 'Can I edit these templates?', 
                a: 'Absolutely. Click "Use This Template" to open our free resume builder and customize every section with your information.' 
              },
              { 
                q: 'How do I download my resume?', 
                a: 'After editing your content, you can download your resume as a professional PDF file instantly with one click.' 
              }
            ].map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '12px',
                marginBottom: '16px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  marginBottom: '8px', 
                  color: '#1a1a1a',
                  fontWeight: 600
                }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#666', margin: 0, lineHeight: '1.5' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Builder | 20+ ATS-Friendly Templates | 100% Free</p>
          <div style={{ marginTop: '12px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/templates" style={{ color: '#999', textDecoration: 'none' }}>All Templates</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#999', textDecoration: 'none' }}>ATS Guide</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/how-to-make-resume" style={{ color: '#999', textDecoration: 'none' }}>Resume Guide</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/faq" style={{ color: '#999', textDecoration: 'none' }}>FAQ</Link>
          </div>
        </div>
      </main>
    </>
  );
}