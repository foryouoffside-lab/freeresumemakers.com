import Head from 'next/head';
import Link from 'next/link';
import { getAllTemplateIds, getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function ByProfession() {
  const templateIds = getAllTemplateIds();

  // Complete profession mapping with detailed recommendations
  const professionMap = {
    tech: {
      ids: [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20],
      icon: "💻",
      title: "Tech & IT",
      description: "Software developers, engineers, IT professionals, and tech specialists",
      keyFeatures: ["Technical skills showcase", "Project highlights", "Certifications section", "Modern design", "Code-friendly layout"],
      bestTemplate: 3,
      atsScore: 94,
      averageExperience: "2-8 years",
      industries: ["Software Development", "DevOps", "Data Science", "IT Management", "Cloud Engineering"]
    },
    business: {
      ids: [1, 2, 4, 7, 8, 11, 12, 14, 15, 17, 19],
      icon: "💼",
      title: "Business & Management",
      description: "Business analysts, managers, consultants, and corporate professionals",
      keyFeatures: ["Professional layout", "Achievement focus", "Clean typography", "ATS-optimized", "Leadership highlights"],
      bestTemplate: 1,
      atsScore: 97,
      averageExperience: "3-10 years",
      industries: ["Management Consulting", "Business Analysis", "Operations", "Project Management", "Corporate Strategy"]
    },
    healthcare: {
      ids: [2, 6, 7, 8, 11, 12, 14, 19],
      icon: "🏥",
      title: "Healthcare",
      description: "Doctors, nurses, medical professionals, and healthcare administrators",
      keyFeatures: ["Certifications section", "Clean layout", "Professional design", "Experience focus", "Licensing display"],
      bestTemplate: 2,
      atsScore: 96,
      averageExperience: "All levels",
      industries: ["Nursing", "Physician", "Healthcare Admin", "Medical Research", "Pharmaceutical"]
    },
    legal: {
      ids: [2, 4, 7, 8, 11, 12, 14],
      icon: "⚖️",
      title: "Legal",
      description: "Lawyers, attorneys, paralegals, and legal professionals",
      keyFeatures: ["Conservative design", "Black & white", "Publications section", "Professional tone", "High ATS score"],
      bestTemplate: 8,
      atsScore: 98,
      averageExperience: "3-15 years",
      industries: ["Corporate Law", "Criminal Law", "Family Law", "Paralegal", "Legal Research"]
    },
    creative: {
      ids: [3, 5, 7, 8, 9, 11, 13, 15, 16, 17],
      icon: "🎨",
      title: "Creative & Design",
      description: "Graphic designers, artists, copywriters, and creative professionals",
      keyFeatures: ["Visual design elements", "Color accents", "Portfolio showcase", "Modern typography", "Creative layouts"],
      bestTemplate: 9,
      atsScore: 88,
      averageExperience: "1-6 years",
      industries: ["Graphic Design", "UX/UI Design", "Art Direction", "Copywriting", "Creative Direction"]
    },
    executive: {
      ids: [1, 4, 7, 8, 11, 12, 14, 15, 17, 20],
      icon: "👔",
      title: "Executive & Leadership",
      description: "C-suite executives, directors, and senior leadership roles",
      keyFeatures: ["Comprehensive layout", "Achievement metrics", "Leadership focus", "Strategic highlights", "Professional polish"],
      bestTemplate: 4,
      atsScore: 96,
      averageExperience: "10+ years",
      industries: ["C-Suite", "Director Level", "VP Roles", "Senior Management", "Board Positions"]
    },
    student: {
      ids: [2, 5, 6, 9, 10, 12, 16, 17],
      icon: "🎓",
      title: "Students & Entry-Level",
      description: "College students, recent graduates, interns, and entry-level professionals",
      keyFeatures: ["Education focus", "Skills grid", "Project showcase", "Internship highlights", "ATS-friendly"],
      bestTemplate: 10,
      atsScore: 98,
      averageExperience: "0-2 years",
      industries: ["All Industries", "Internships", "Graduate Programs", "Entry-Level Roles"]
    },
    academic: {
      ids: [7, 11, 19],
      icon: "📚",
      title: "Academic & Research",
      description: "Professors, researchers, PhD candidates, and academic professionals",
      keyFeatures: ["Publications section", "Research highlights", "Conference presentations", "Academic timeline", "Citations ready"],
      bestTemplate: 7,
      atsScore: 92,
      averageExperience: "5-20 years",
      industries: ["University Faculty", "Research Institutions", "Postdoctoral", "PhD Programs"]
    },
    engineering: {
      ids: [1, 6, 12, 18, 20],
      icon: "🔧",
      title: "Engineering",
      description: "Civil, mechanical, electrical, and software engineers",
      keyFeatures: ["Technical skills", "Project portfolio", "Certifications", "Timeline view", "Technical depth"],
      bestTemplate: 6,
      atsScore: 93,
      averageExperience: "3-12 years",
      industries: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Systems Engineering"]
    },
    marketing: {
      ids: [3, 5, 9, 11, 13, 16, 17],
      icon: "📢",
      title: "Marketing & Communications",
      description: "Marketing managers, content creators, social media specialists, and PR professionals",
      keyFeatures: ["Creative layout", "Campaign highlights", "Metrics focus", "Modern design", "Portfolio ready"],
      bestTemplate: 9,
      atsScore: 90,
      averageExperience: "2-8 years",
      industries: ["Digital Marketing", "Content Strategy", "Social Media", "PR", "Brand Management"]
    }
  };

  // Helper to get template name
  const getTemplateName = (id) => {
    const names = {
      1: "Obsidian", 2: "Classic Horizon", 3: "Global Pro", 4: "The Strategist",
      5: "The Minimalist", 6: "The Architect", 7: "The Scholar", 8: "The Traditionalist",
      9: "The Modernist", 10: "The Essential", 11: "The Composer", 12: "The Blueprint",
      13: "The Timeline", 14: "The Monochrome", 15: "The Compact", 16: "The Minimal",
      17: "The Innovator 2.0", 18: "The Code", 19: "The Scholar 2.0", 20: "The Engineer"
    };
    return names[id] || `Template ${id}`;
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freeresumemakers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": "https://freeresumemakers.com/templates" },
      { "@type": "ListItem", "position": 3, "name": "Templates by Profession", "item": "https://freeresumemakers.com/templates/compare/by-profession" }
    ]
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best resume template for tech professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For tech professionals, Template 3 (Global Pro) and Template 6 (The Architect) are top choices. They feature technical skills sections, project showcases, certifications, and modern dark themes that appeal to tech recruiters."
        }
      },
      {
        "@type": "Question",
        "name": "Which resume template is best for healthcare jobs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare professionals should choose Template 2 (Classic Horizon) or Template 7 (The Scholar). These templates offer clean layouts, certifications sections, and professional designs that hospitals and medical institutions prefer."
        }
      },
      {
        "@type": "Question",
        "name": "What resume format do executives use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Executives prefer comprehensive templates like Template 1 (Obsidian) and Template 4 (The Strategist). These templates feature experience filtering, timeline visualization, and space for leadership achievements."
        }
      },
      {
        "@type": "Question",
        "name": "Best resume template for students and entry-level?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 10 (The Essential) is specifically designed for students and entry-level professionals. Its single experience focus, skills grid, and project showcase highlight education, internships, and transferable skills."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Best Resume Templates by Profession: Find Your Perfect Match (2026) | FreeResumeMakers</title>
        <meta name="description" content="Find the best resume template for your profession. Expert recommendations for Tech, Business, Healthcare, Legal, Creative, Executive, Student, and more. Industry-specific templates with ATS scores." />
        <meta name="keywords" content="resume by profession, industry-specific resume, best template for tech, business resume, healthcare resume, legal resume, creative resume, executive resume, student resume template" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href="https://freeresumemakers.com/templates/compare/by-profession" />
        
        <meta property="og:title" content="Best Resume Templates by Profession: Industry-Specific Recommendations (2026)" />
        <meta property="og:description" content="Find your perfect resume template based on your profession. Expert-curated recommendations for 10+ professions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemakers.com/templates/compare/by-profession" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Resume Templates by Profession: Industry-Specific Guide" />
        <meta name="twitter:description" content="Find the perfect resume template for your career. Expert recommendations for 10+ professions." />
        
        <meta property="article:published_time" content="2026-03-24" />
        <meta property="article:modified_time" content={currentDate} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '40px 24px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '32px', fontSize: '0.875rem' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <Link href="/templates" style={{ color: '#3b82f6', textDecoration: 'none' }}>Templates</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <Link href="/templates/compare" style={{ color: '#3b82f6', textDecoration: 'none' }}>Comparisons</Link>
          <span style={{ margin: '0 8px', color: '#64748b' }}>›</span>
          <span style={{ color: '#1e293b', fontWeight: '500' }}>By Profession</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a'
          }}>
            Best Resume Templates <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>by Profession</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Find the perfect resume template for your career. Expert-curated recommendations for <strong>10+ professions</strong> 
            based on industry standards, ATS compatibility, and hiring manager preferences.
          </p>
        </header>

        {/* Quick Navigation */}
        <div style={{ 
          background: '#f8fafc', 
          padding: '20px', 
          borderRadius: '16px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>Jump to Your Profession:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {Object.entries(professionMap).map(([key, value]) => (
              <a 
                key={key}
                href={`#profession-${key}`}
                style={{ 
                  padding: '8px 16px', 
                  background: 'white', 
                  borderRadius: '30px', 
                  textDecoration: 'none',
                  color: '#1e293b',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid #e2e8f0'
                }}
              >
                {value.icon} {value.title}
              </a>
            ))}
          </div>
        </div>

        {/* Profession Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '30px' }}>
          {Object.entries(professionMap).map(([key, profession]) => (
            <div 
              key={key}
              id={`profession-${key}`}
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '24px', 
                padding: '24px',
                background: 'white',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                scrollMarginTop: '80px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2.5rem' }}>{profession.icon}</div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#0f172a' }}>{profession.title}</h2>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>{profession.description}</p>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <span style={{ 
                    background: '#eef2ff', 
                    color: '#1e40af', 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    📊 ATS Score: {profession.atsScore}%
                  </span>
                  <span style={{ 
                    background: '#eef2ff', 
                    color: '#1e40af', 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    ⭐ Experience: {profession.averageExperience}
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>Key Features:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {profession.keyFeatures.slice(0, 4).map((feature, idx) => (
                    <span key={idx} style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', color: '#475569' }}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>Best Templates:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {profession.ids.slice(0, 6).map(id => (
                    <Link 
                      key={id}
                      href={`/templates/${id}`}
                      style={{ 
                        background: '#f8fafc', 
                        padding: '6px 12px', 
                        borderRadius: '8px', 
                        textDecoration: 'none',
                        color: '#1e293b',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}
                    >
                      {getTemplateName(id)}
                    </Link>
                  ))}
                  {profession.ids.length > 6 && (
                    <span style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#64748b' }}>
                      +{profession.ids.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>Ideal For:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {profession.industries.slice(0, 4).map((industry, idx) => (
                    <span key={idx} style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', color: '#475569' }}>
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                <Link 
                  href={`/professions/${key}`}
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  View All {profession.title} Templates →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Comparison Table */}
        <div style={{ marginTop: '56px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            📊 Quick Comparison: Best Template by Profession
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)'
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Profession</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Top Template</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>ATS Score</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Key Focus</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>Experience</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(professionMap).map(([key, profession], index) => (
                  <tr key={key} style={{ borderBottom: '1px solid #e2e8f0', background: index % 2 === 0 ? 'white' : '#f8fafc' }}>
                    <td style={{ padding: '14px', fontWeight: '500' }}>
                      {profession.icon} {profession.title}
                    </td>
                    <td style={{ padding: '14px' }}>
                      <Link href={`/templates/${profession.bestTemplate}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                        {getTemplateName(profession.bestTemplate)}
                      </Link>
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center' }}>
                      <span style={{ 
                        background: profession.atsScore >= 95 ? '#10b981' : profession.atsScore >= 90 ? '#f59e0b' : '#ef4444',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '20px',
                        fontSize: '0.75rem'
                      }}>
                        {profession.atsScore}%
                      </span>
                    </td>
                    <td style={{ padding: '14px', fontSize: '0.9rem', color: '#475569' }}>
                      {profession.keyFeatures[0]}
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>
                      {profession.averageExperience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Tips Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            💡 Industry-Specific Resume Tips
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💻</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Tech & IT</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Highlight technical skills, GitHub projects, and certifications. Use modern templates that show design awareness.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💼</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Business</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Focus on achievements and metrics. Use clean, ATS-friendly templates with professional typography.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🏥</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Healthcare</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Include certifications, licenses, and clinical experience. Use clean, conservative templates.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎨</div>
              <h3 style={{ marginBottom: '8px', color: '#1e293b' }}>Creative</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Show your design skills through template choice. Include portfolio links and visual projects.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <details style={{ 
              background: 'white', 
              padding: '20px 24px', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: '600', fontSize: '1rem', cursor: 'pointer', color: '#0f172a' }}>
                What is the best resume template for tech professionals?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6' }}>
                For tech professionals, Template 3 (Global Pro) and Template 6 (The Architect) are top choices. They feature technical skills sections, project showcases, certifications, and modern dark themes that appeal to tech recruiters.
              </p>
            </details>
            <details style={{ 
              background: 'white', 
              padding: '20px 24px', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: '600', fontSize: '1rem', cursor: 'pointer', color: '#0f172a' }}>
                Which resume template is best for healthcare jobs?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6' }}>
                Healthcare professionals should choose Template 2 (Classic Horizon) or Template 7 (The Scholar). These templates offer clean layouts, certifications sections, and professional designs that hospitals and medical institutions prefer.
              </p>
            </details>
            <details style={{ 
              background: 'white', 
              padding: '20px 24px', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: '600', fontSize: '1rem', cursor: 'pointer', color: '#0f172a' }}>
                What resume format do executives use?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6' }}>
                Executives prefer comprehensive templates like Template 1 (Obsidian) and Template 4 (The Strategist). These templates feature experience filtering, timeline visualization, and space for leadership achievements.
              </p>
            </details>
            <details style={{ 
              background: 'white', 
              padding: '20px 24px', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: '600', fontSize: '1rem', cursor: 'pointer', color: '#0f172a' }}>
                Best resume template for students and entry-level?
              </summary>
              <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6' }}>
                Template 10 (The Essential) is specifically designed for students and entry-level professionals. Its single experience focus, skills grid, and project showcase highlight education, internships, and transferable skills.
              </p>
            </details>
          </div>
        </div>

        {/* Related Resources */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#0f172a' }}>
            🔍 Explore More Resources
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link href="/templates/compare/ats-friendly-vs-creative" style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', fontWeight: '500', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              ATS-Friendly vs Creative Resume
            </Link>
            <Link href="/templates/compare/1-vs-2" style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', fontWeight: '500', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              Template 1 vs Template 2
            </Link>
            <Link href="/templates/compare/3-vs-4" style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', fontWeight: '500', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              Template 3 vs Template 4
            </Link>
            <Link href="/templates/compare/all" style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', textDecoration: 'none', color: '#1e293b', fontSize: '0.875rem', fontWeight: '500', border: '1px solid #e2e8f0', display: 'inline-block' }}>
              All Templates Comparison
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}