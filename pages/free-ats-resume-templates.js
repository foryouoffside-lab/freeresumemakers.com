import React from 'react';
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

// ATS-specific template recommendations
const atsRecommendedTemplates = {
  "Highest ATS Score": [5, 8, 14, 16],
  "Technology & Development": [2, 5, 6, 12, 18, 20],
  "Executive & Business": [1, 3, 4, 8, 14],
  "Entry-Level & Students": [10, 17]
};

export default function FreeATSResumeTemplates() {
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
        "name": "Free ATS Resume Templates",
        "item": "https://freeresumemaker.xyz/free-ats-resume-templates"
      }
    ]
  };

  // HowTo schema for ATS optimization tips
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Optimize Your Resume for Applicant Tracking Systems",
    "description": "Step-by-step guide to creating an ATS-friendly resume that gets past automated screening systems.",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose an ATS-Friendly Template",
        "text": "Select a template with clean formatting, standard fonts, and simple layout without complex graphics or tables.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Use Standard Section Headings",
        "text": "Use common headings like Work Experience, Education, Skills, and Professional Summary that ATS systems recognize.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Include Relevant Keywords",
        "text": "Extract keywords from the job description and incorporate them naturally into your resume content.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Avoid Complex Formatting",
        "text": "Avoid tables, columns, graphics, images, and special characters that can confuse ATS parsing software.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Save as PDF",
        "text": "Download your completed resume as a PDF file for maximum ATS compatibility across different systems.",
        "position": 5
      }
    ]
  };

  // ItemList schema for templates
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ATS-Friendly Resume Templates",
    "description": "Collection of 20+ free ATS-friendly resume templates for 2026.",
    "numberOfItems": Object.keys(templateNames).length,
    "itemListElement": Object.entries(templateNames).map(([id, name], index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name,
      "url": `https://freeresumemaker.xyz/templates/${id}`
    }))
  };

  return (
    <>
      <SEO 
        title="Free ATS Resume Templates 2026 | ATS-Friendly Professional Designs | Instant Download"
        description="Download 20+ free ATS-friendly resume templates for 2026. Professionally designed templates that pass Applicant Tracking Systems. Includes templates for technology, business, healthcare, and creative roles. No sign-up required. Instant PDF download."
        keywords="free ATS resume templates 2026, ATS-friendly resume, free resume templates 2026, applicant tracking system templates, professional resume download, ATS resume templates, resume templates for job applications"
        canonical="https://freeresumemaker.xyz/free-ats-resume-templates"
        image="https://freeresumemaker.xyz/assets/og-ats-templates.jpg"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <main style={{ 
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
          <span style={{ color: '#0070f3' }}>Free ATS Resume Templates</span>
        </nav>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Free ATS-Friendly Resume Templates for 2026
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            All <strong>20+ templates</strong> are <strong>100% free</strong>, <strong>ATS-optimized</strong>, 
            and ready for instant PDF download. No sign-up required. Start building your professional resume today.
          </p>
        </div>

        {/* ATS Info Box - Text only, no emoji */}
        <div style={{
          background: '#e3f2fd',
          padding: '30px',
          borderRadius: '16px',
          marginBottom: '40px',
          borderLeft: '4px solid #0070f3'
        }}>
          <h2 style={{ 
            fontSize: '22px', 
            marginBottom: '12px', 
            color: '#1a1a1a',
            fontWeight: 600
          }}>
            What is an ATS-Friendly Resume?
          </h2>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            color: '#445566', 
            marginBottom: '12px'
          }}>
            Applicant Tracking Systems (ATS) are used by over 75% of companies to screen resumes before they reach human recruiters. 
            Our templates are designed with clean formatting, standard fonts, and simple layouts that 
            ATS systems can easily read and parse.
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            color: '#445566', 
            marginBottom: 0
          }}>
            Using an ATS-friendly resume increases your chances of getting past automated screening and ensures 
            your application reaches hiring managers.
          </p>
        </div>

        {/* Stats Bar - Honest, no fake numbers, text only */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
          padding: '30px',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>20+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>ATS-Friendly Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>100%</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Free Forever</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>PDF</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Instant Download</div>
          </div>
        </div>

        {/* Why Choose ATS-Friendly Templates - Text only */}
        <h2 style={{
          fontSize: '28px',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#1a1a1a',
          fontWeight: 700
        }}>
          Why Choose Our ATS-Friendly Templates?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {[
            {
              title: "ATS-Optimized Design",
              desc: "Clean formatting, standard fonts, and simple layouts that parsing software can read easily."
            },
            {
              title: "Professional Designs",
              desc: "Modern, professional layouts that impress both ATS systems and human recruiters."
            },
            {
              title: "Easy to Customize",
              desc: "Add your experience, skills, and achievements with our simple, intuitive editor."
            },
            {
              title: "Instant PDF Download",
              desc: "Download your resume as a professional PDF file with one click, ready for submission."
            }
          ].map((item, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '28px',
              borderRadius: '16px',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#e3f2fd',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0070f3'
              }}>
                {index + 1}
              </div>
              <h3 style={{ 
                marginBottom: '10px', 
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                {item.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Best ATS Templates Section - Text only */}
        <div style={{
          background: '#f8fafc',
          padding: '32px',
          borderRadius: '20px',
          marginBottom: '48px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px', 
            textAlign: 'center',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Best ATS-Friendly Templates by Category
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {Object.entries(atsRecommendedTemplates).map(([category, templateIds]) => (
              <div key={category} style={{
                background: 'white',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  marginBottom: '16px', 
                  color: '#0070f3',
                  fontWeight: 600
                }}>
                  {category}
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {templateIds.map(id => (
                    <li key={id} style={{ marginBottom: '10px' }}>
                      <Link 
                        href={`/templates/${id}`} 
                        style={{ 
                          color: '#333', 
                          textDecoration: 'none',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0070f3'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                      >
                        {templateNames[id]}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/templates" 
                  style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    color: '#0070f3',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  View All Templates →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ATS Optimization Tips - Text only */}
        <div style={{
          background: '#f8fafc',
          padding: '32px',
          borderRadius: '20px',
          marginBottom: '48px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px',
            fontWeight: 700,
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            How to Optimize Your Resume for ATS
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                title: "Use Keywords",
                desc: "Extract keywords from the job description and incorporate them naturally into your resume. Focus on skills, qualifications, and industry terms."
              },
              {
                title: "Standard Headings",
                desc: "Use common section headings like Work Experience, Education, Skills, and Professional Summary that ATS systems recognize."
              },
              {
                title: "Avoid Complex Formatting",
                desc: "Skip tables, columns, graphics, images, and special characters that can confuse ATS parsing software."
              },
              {
                title: "Save as PDF",
                desc: "Download your completed resume as a PDF file for maximum ATS compatibility across different systems."
              }
            ].map((tip, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#e3f2fd',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#0070f3'
                }}>
                  {index + 1}
                </div>
                <h3 style={{ 
                  fontSize: '16px', 
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  {tip.title}
                </h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link 
              href="/blog/ats-resume-tips-2026" 
              style={{ 
                color: '#0070f3', 
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              Read Complete ATS Guide →
            </Link>
          </div>
        </div>

        {/* Industry-Specific Links - Text only */}
        <h2 style={{
          fontSize: '28px',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#1a1a1a',
          fontWeight: 700
        }}>
          Templates by Industry
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {[
            {
              title: "Technology Templates",
              desc: "For software engineers, developers, and IT professionals",
              link: "/professions/software-engineering",
              linkText: "View Technology Templates"
            },
            {
              title: "Business Templates",
              desc: "For managers, executives, and corporate roles",
              link: "/professions/business",
              linkText: "View Business Templates"
            },
            {
              title: "Creative Templates",
              desc: "For designers, artists, and creative professionals",
              link: "/professions/creative",
              linkText: "View Creative Templates"
            },
            {
              title: "Healthcare Templates",
              desc: "For nurses, doctors, and healthcare professionals",
              link: "/professions/healthcare",
              linkText: "View Healthcare Templates"
            }
          ].map((industry, index) => (
            <div key={index} style={{
              border: '1px solid #e9ecef',
              padding: '28px',
              borderRadius: '16px',
              background: 'white',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#e3f2fd',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#0070f3'
              }}>
                {industry.title.charAt(0)}
              </div>
              <h3 style={{ 
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                {industry.title}
              </h3>
              <p style={{ 
                color: '#666', 
                fontSize: '0.85rem', 
                marginBottom: '16px',
                lineHeight: '1.5'
              }}>
                {industry.desc}
              </p>
              <Link 
                href={industry.link} 
                style={{ 
                  color: '#0070f3',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                {industry.linkText} →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            marginBottom: '16px',
            fontWeight: 700
          }}>
            Ready to Create Your ATS-Friendly Resume?
          </h2>
          <p style={{ 
            fontSize: '16px', 
            marginBottom: '24px', 
            opacity: 0.9,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Start building your professional resume today. Free, no sign-up required, and instant PDF download.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Browse All Templates →
          </Link>
        </div>

        {/* Footer */}
        <div style={{
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
            <Link href="/tools/ats-scanner" style={{ color: '#999', textDecoration: 'none' }}>ATS Scanner</Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/faq" style={{ color: '#999', textDecoration: 'none' }}>FAQ</Link>
          </div>
        </div>
      </main>
    </>
  );
}