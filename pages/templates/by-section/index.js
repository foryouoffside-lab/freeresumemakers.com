import Link from 'next/link';
import SEO from '../../../components/SEO';
import Head from 'next/head';

// Section data with descriptions (icons removed)
const sections = [
  { 
    id: 'experience', 
    name: 'Work Experience', 
    description: 'Templates with dedicated work experience sections to showcase your career history',
    count: 20,
    color: '#e3f2fd'
  },
  { 
    id: 'summary', 
    name: 'Professional Summary', 
    description: 'Templates that highlight your professional summary at the top',
    count: 18,
    color: '#f3e5f5'
  },
  { 
    id: 'skills', 
    name: 'Skills', 
    description: 'Templates with prominent skills sections to showcase your expertise',
    count: 20,
    color: '#e8f5e8'
  },
  { 
    id: 'education', 
    name: 'Education', 
    description: 'Templates with well-organized education sections',
    count: 20,
    color: '#fff3e0'
  },
  { 
    id: 'projects', 
    name: 'Projects', 
    description: 'Templates with dedicated project sections for portfolio work',
    count: 12,
    color: '#e1f5fe'
  },
  { 
    id: 'languages', 
    name: 'Languages', 
    description: 'Templates with language proficiency sections for bilingual professionals',
    count: 8,
    color: '#fce4ec'
  },
  { 
    id: 'certifications', 
    name: 'Certifications', 
    description: 'Templates with certification sections for professional credentials',
    count: 10,
    color: '#e0f2f1'
  },
  { 
    id: 'image-section', 
    name: 'Profile Photo', 
    description: 'Templates that include a profile photo section',
    count: 6,
    color: '#fff3e0'
  }
];

export default function BySectionIndex() {
  // Breadcrumb schema
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
        "name": "Resume Templates",
        "item": "https://freeresumemaker.xyz/templates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Browse by Section",
        "item": "https://freeresumemaker.xyz/templates/by-section"
      }
    ]
  };

  // ItemList schema for sections
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Templates by Section",
    "description": "Browse resume templates by the sections they include. Find templates with work experience, skills, education, projects, languages, certifications, and profile photo sections.",
    "numberOfItems": sections.length,
    "itemListElement": sections.map((section, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": section.name,
      "url": `https://freeresumemaker.xyz/templates/by-section/${section.id}`
    }))
  };

  return (
    <>
      <SEO 
        title="Browse Resume Templates by Section | Find Templates with Experience, Skills & More"
        description="Browse and filter resume templates by the sections you need. Find templates with work experience, skills, education, projects, languages, certifications, and profile photo sections. Choose the perfect layout for your career."
        keywords="resume templates by section, resume sections, work experience templates, skills section, education section, resume by section, CV sections, professional summary templates, project portfolio templates, certification resume templates"
        canonical="https://freeresumemaker.xyz/templates/by-section"
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
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px', 
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
          <Link href="/templates" style={{ color: '#666', textDecoration: 'none' }}>Resume Templates</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Browse by Section</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Browse Resume Templates by Section
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Find the perfect template based on the sections you need. Whether you need a strong work experience section, 
            a skills-focused layout, or a professional summary at the top, we have the right template for your career.
          </p>
        </div>

        {/* Pro Tip Section */}
        <div style={{ 
          background: '#e3f2fd', 
          padding: '20px', 
          borderRadius: '12px', 
          marginBottom: '40px', 
          borderLeft: '4px solid #0070f3' 
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>Pro Tip:</strong> Different industries value different resume sections. Technology roles benefit from projects and skills sections, 
            while executive roles need strong achievement-focused experience sections. Choose templates with sections that matter most to your target role.
          </p>
        </div>

        {/* Section Header */}
        <h2 style={{ 
          fontSize: '28px', 
          marginBottom: '24px', 
          color: '#1a1a1a',
          fontWeight: 600
        }}>
          Browse by Resume Section
        </h2>

        {/* Templates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {sections.map((section, idx) => (
            <Link 
              key={idx}
              href={`/templates/by-section/${section.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'white',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}>
                {/* Visual indicator - colored circle with section initial */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: section.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#0070f3'
                }}>
                  {section.name.charAt(0)}
                </div>
                
                <h3 style={{ 
                  fontSize: '20px', 
                  marginBottom: '8px', 
                  color: '#1a1a1a',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {section.name}
                </h3>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666', 
                  marginBottom: '16px', 
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {section.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '8px',
                  borderTop: '1px solid #e9ecef',
                  paddingTop: '16px'
                }}>
                  <span style={{
                    background: '#f0f7ff',
                    color: '#0070f3',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {section.count} templates
                  </span>
                  <span style={{ 
                    color: '#0070f3', 
                    fontSize: '14px', 
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    View Templates →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Sections Matter Section */}
        <h2 style={{ 
          fontSize: '28px', 
          marginBottom: '24px', 
          color: '#1a1a1a',
          fontWeight: 600
        }}>
          Why Resume Sections Matter
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '16px' }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              fontWeight: 'bold',
              color: '#0070f3'
            }}>
              Work Experience
            </div>
            <h3 style={{ marginBottom: '8px', fontSize: '18px', color: '#1a1a1a' }}>Career Progression</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
              Essential for all resumes. Shows your career progression, key achievements, and professional growth over time.
            </p>
          </div>
          
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '16px' }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              fontWeight: 'bold',
              color: '#0070f3'
            }}>
              Skills
            </div>
            <h3 style={{ marginBottom: '8px', fontSize: '18px', color: '#1a1a1a' }}>Technical Expertise</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
              Critical for technical roles. Highlight your technical competencies, soft skills, and industry-specific expertise.
            </p>
          </div>
          
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '16px' }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              fontWeight: 'bold',
              color: '#0070f3'
            }}>
              Projects
            </div>
            <h3 style={{ marginBottom: '8px', fontSize: '18px', color: '#1a1a1a' }}>Portfolio Showcase</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
              Ideal for developers, designers, and early-career professionals to showcase practical work and accomplishments.
            </p>
          </div>
          
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '16px' }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              fontWeight: 'bold',
              color: '#0070f3'
            }}>
              Certifications
            </div>
            <h3 style={{ marginBottom: '8px', fontSize: '18px', color: '#1a1a1a' }}>Professional Credentials</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
              Validates your expertise in specific areas like AWS, PMP, CPA, or industry-specific certifications.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '24px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#1a1a1a' }}>Which sections should I include on my resume?</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Essential sections include Contact Information, Professional Summary, and Work Experience. Additional sections like Skills, Education, Projects, and Certifications depend on your industry and career level.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#1a1a1a' }}>How do I choose the right template for my needs?</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Consider your industry, career level, and the sections you want to highlight. Use our "Browse by Section" feature to find templates with specific sections that match your requirements.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#1a1a1a' }}>Can I customize which sections appear on my resume?</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Yes! Our resume builder allows you to add, remove, and rearrange sections to create a personalized resume that best represents your experience and skills.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Ready to Build Your Resume?</h2>
          <p style={{ fontSize: '16px', marginBottom: '24px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Choose a template with the sections you need and start building your professional resume today. All templates are ATS-friendly and optimized for 2026 hiring standards.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Building Now →
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Related Resume Resources</h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/blog/how-to-choose-resume-sections" style={{ color: '#0070f3' }}>How to Choose Resume Sections →</Link>
            <Link href="/blog/resume-formatting-guide" style={{ color: '#0070f3' }}>Resume Formatting Guide →</Link>
            <Link href="/templates" style={{ color: '#0070f3' }}>All Resume Templates →</Link>
            <Link href="/examples" style={{ color: '#0070f3' }}>Resume Examples by Industry →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
