// pages/professions/[slug].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SEO from '../../components/SEO';

export default function ProfessionPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [debug, setDebug] = useState({});

  // Mapping of slugs to display names and icons
  const professionNames = {
    'academic': 'Academic',
    'business': 'Business',
    'creative': 'Creative',
    'engineering': 'Engineering',
    'executive': 'Executive',
    'healthcare': 'Healthcare',
    'it-tech': 'IT & Technology',
    'legal': 'Legal',
    'sales-marketing': 'Sales & Marketing',
    'software-engineering': 'Software Engineering',
    'student': 'Student',
    'tech': 'Tech'
  };

  const professionIcons = {
    'academic': '🎓',
    'business': '💼',
    'creative': '🎨',
    'engineering': '⚙️',
    'executive': '👔',
    'healthcare': '🏥',
    'it-tech': '💻',
    'legal': '⚖️',
    'sales-marketing': '📈',
    'software-engineering': '💻',
    'student': '📚',
    'tech': '🔧'
  };

  const professionDescriptions = {
    'software-engineering': 'Browse professional software engineering resume examples for frontend engineers, full stack developers, backend engineers, and DevOps professionals. Sample resumes with React, TypeScript, Node.js, AWS, system design, and microservices architecture.',
    'it-tech': 'Browse professional IT and technology resume examples for IT managers, system administrators, network engineers, and technical support professionals. Sample resumes with cloud computing, cybersecurity, network architecture, and IT infrastructure expertise.',
    'sales-marketing': 'Browse professional sales and marketing resume examples for sales managers, account executives, marketing directors, and digital marketing specialists. Sample resumes with quota attainment, revenue generation, and campaign metrics.',
    'healthcare': 'Browse professional healthcare resume examples for registered nurses, healthcare administrators, and medical professionals. Sample resumes with clinical skills, patient care metrics, and healthcare certifications.',
    'engineering': 'Browse professional engineering resume examples for mechanical, civil, electrical, and chemical engineers. Sample resumes with project management, CAD software, and technical expertise.',
    'executive': 'Browse professional executive resume examples for C-suite leaders, directors, and senior management. Sample resumes with strategic leadership, business development, and organizational transformation.',
    'legal': 'Browse professional legal resume examples for attorneys, lawyers, paralegals, and legal assistants. Sample resumes with litigation experience, contract law, and corporate legal expertise.',
    'finance': 'Browse professional finance resume examples for investment bankers, financial analysts, and accounting professionals. Sample resumes with financial modeling, M&A experience, and regulatory compliance.',
    'education': 'Browse professional education resume examples for teachers, professors, and academic administrators. Sample resumes with curriculum development, student achievement, and educational leadership.',
    'administrative': 'Browse professional administrative resume examples for executive assistants, office managers, and administrative professionals. Sample resumes with calendar management, vendor relations, and operational efficiency.'
  };

  const professionStats = {
    'software-engineering': { count: 12, stack: 'React • Node.js • AWS • Python' },
    'it-tech': { count: 10, stack: 'Cloud • Security • Networks • DevOps' },
    'sales-marketing': { count: 12, stack: 'CRM • Analytics • SEO • PPC' },
    'healthcare': { count: 8, stack: 'Clinical • Administration • Patient Care' },
    'engineering': { count: 8, stack: 'CAD • Project Management • Quality Control' },
    'executive': { count: 6, stack: 'Strategy • Leadership • Board Relations' },
    'legal': { count: 6, stack: 'Litigation • Contracts • Compliance' },
    'finance': { count: 12, stack: 'Financial Modeling • Audit • Taxation' },
    'education': { count: 10, stack: 'Teaching • Research • Curriculum Design' },
    'administrative': { count: 8, stack: 'Executive Support • Office Management' }
  };

  const validProfessions = [
    'academic', 'business', 'creative', 'engineering', 'executive', 
    'healthcare', 'it-tech', 'legal', 'sales-marketing', 
    'software-engineering', 'student', 'tech'
  ];

  useEffect(() => {
    if (slug) {
      // Log for debugging purposes only
      if (process.env.NODE_ENV === 'development') {
        console.log('Profession page accessed:', slug);
      }
      
      setDebug({
        slug,
        exists: validProfessions.includes(slug),
        timestamp: new Date().toISOString()
      });
    }
  }, [slug]);

  if (!slug) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  // If profession doesn't exist, show 404 page
  if (!validProfessions.includes(slug)) {
    return (
      <>
        <SEO 
          title="Profession Not Found | Resume Examples"
          description="The requested profession page could not be found. Browse our complete collection of professional resume examples for various industries and career paths."
          canonical={`https://freeresumemaker.xyz/professions/${slug}`}
          noindex={true}
        />
        
        <div style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '40px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}>
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔍</div>
            <h1 style={{ fontSize: '28px', marginBottom: '12px', color: '#1a1a1a' }}>
              Profession Page Not Found
            </h1>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
              We couldn't find a profession page for "{slug}". 
              The page you're looking for might have been moved or doesn't exist.
            </p>
            <div style={{
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Available Professions:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {validProfessions.map(prof => (
                  <Link 
                    key={prof}
                    href={`/professions/${prof}`}
                    style={{
                      background: '#e9ecef',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      color: '#0070f3',
                      textDecoration: 'none'
                    }}
                  >
                    {professionNames[prof] || prof}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            href="/examples"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 500,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}
          >
            ← Browse All Resume Examples
          </Link>
        </div>
      </>
    );
  }

  // Get profession data
  const professionName = professionNames[slug] || slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const professionIcon = professionIcons[slug] || '📄';
  const professionDescription = professionDescriptions[slug] || 
    `Browse professional ${professionName.toLowerCase()} resume examples and templates. Sample resumes with industry-specific skills, experience, and achievements to help you create your winning resume.`;
  const professionStat = professionStats[slug] || { count: 8, stack: 'Industry-Specific Skills' };

  return (
    <>
      <SEO 
        title={`${professionName} Resume Examples | Professional ${professionName} Resume Templates 2026`}
        description={professionDescription}
        keywords={`${professionName.toLowerCase()} resume, ${professionName.toLowerCase()} resume examples, ${professionName.toLowerCase()} CV, professional resume template, ${professionName.toLowerCase()} resume 2026, ATS friendly resume`}
        canonical={`https://freeresumemaker.xyz/professions/${slug}`}
        image={`https://freeresumemaker.xyz/images/professions/${slug}-og.jpg`}
        type="website"
      />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: '#666',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/"
              style={{ color: '#666', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0070f3'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            >
              Home
            </Link>
            <span>›</span>
            <Link 
              href="/examples"
              style={{ color: '#666', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0070f3'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            >
              Resume Examples
            </Link>
            <span>›</span>
            <span style={{ color: '#0070f3' }}>{professionName} Resumes</span>
          </div>
        </nav>

        {/* Header Section */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>
            {professionIcon}
          </div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontWeight: 700
          }}>
            {professionName} Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {professionDescription}
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: {professionName} professionals at all career levels
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '48px',
          padding: '24px',
          background: '#f8fafc',
          borderRadius: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>
              {professionStat.count}+
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Sample Resumes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>
              {professionStat.stack.split(' • ')[0]}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Key Skills</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>
              2026
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Updated for Hiring Season</div>
          </div>
        </div>

        {/* Examples Grid - Will be populated with actual examples */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {/* Example Card Placeholder */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            padding: '24px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#f0f7ff',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: '16px'
            }}>
              {professionIcon}
            </div>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>
              {professionName} Resume Sample
            </h2>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>
              Professional resume example for {professionName.toLowerCase()} professionals. Includes industry-specific skills, experience, and achievements.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px'
            }}>
              {professionStat.stack.split(' • ').slice(0, 3).map((skill, i) => (
                <span key={i} style={{
                  background: '#f0f7ff',
                  color: '#0070f3',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #e9ecef',
              paddingTop: '16px'
            }}>
              <span style={{
                color: '#0070f3',
                fontSize: '14px',
                fontWeight: 600
              }}>
                View Complete Resume →
              </span>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            padding: '24px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#f0f7ff',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: '16px'
            }}>
              {professionIcon}
            </div>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#1a1a1a' }}>
              Senior {professionName} Resume
            </h2>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>
              Advanced resume example for experienced {professionName.toLowerCase()} professionals with leadership experience and strategic achievements.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <span style={{
                background: '#f0f7ff',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500
              }}>
                Leadership
              </span>
              <span style={{
                background: '#f0f7ff',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500
              }}>
                Strategy
              </span>
              <span style={{
                background: '#f0f7ff',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500
              }}>
                Management
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #e9ecef',
              paddingTop: '16px'
            }}>
              <span style={{
                color: '#0070f3',
                fontSize: '14px',
                fontWeight: 600
              }}>
                View Complete Resume →
              </span>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            Tips for Creating Effective {professionName} Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Your Achievements</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific metrics and numbers to demonstrate your impact. Numbers make your accomplishments tangible and credible to hiring managers.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Industry-Specific Skills</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include relevant technical skills, certifications, and tools specific to your profession. This helps your resume pass ATS screening.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Career Progression</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Demonstrate growth through promotions, increased responsibilities, and expanding scope of work. This shows potential for future advancement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Professional Certifications</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List relevant certifications, licenses, and professional development. Certifications validate your expertise and commitment to the field.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px',
            fontWeight: 700
          }}>
            Build Your Professional {professionName} Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for {professionName.toLowerCase()} professionals. Create a standout resume in minutes.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.2s ease',
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
            Create Your Resume Now →
          </Link>
          <p style={{
            fontSize: '13px',
            marginTop: '20px',
            opacity: 0.8
          }}>
            No sign-up required • 100% Free • Instant PDF Download
          </p>
        </div>
      </div>
    </>
  );
}