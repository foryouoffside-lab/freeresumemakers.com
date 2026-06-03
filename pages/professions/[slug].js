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

  const getProfessionIcon = (profSlug, size = '64px') => {
    const icons = {
      'academic': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>,
      'business': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1e3a8a' }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
      'creative': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="11.5" cy="7.5" r="1.5"></circle><circle cx="16.5" cy="9.5" r="1.5"></circle><circle cx="15.5" cy="14.5" r="1.5"></circle></svg>,
      'engineering': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4b5563' }}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
      'executive': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0f172a' }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
      'healthcare': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0d9488' }}><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
      'it-tech': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2563eb' }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      'legal': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4b5563' }}><path d="M12 3v18M5 10c0 3 2.5 4 5 4M19 10c0 3-2.5 4-5 4M3 10h4M17 10h4"></path></svg>,
      'sales-marketing': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0ea5e9' }}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
      'software-engineering': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2563eb' }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      'student': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#16a34a' }}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
      'tech': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4b5563' }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    };
    return icons[profSlug] || <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>;
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
    'administrative': 'Browse professional administrative resume examples for executive assistants, office managers, and administrative professionals. Sample resumes with calendar management, vendor relations, and operational efficiency.',
    'design': 'Browse professional design resume examples for UI/UX designers, graphic designers, and product designers. Sample resumes with portfolio links, user research, and design tools expertise.'
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
    'administrative': { count: 8, stack: 'Executive Support • Office Management' },
    'design': { count: 8, stack: 'UI/UX • Figma • Photoshop • Illustrator' }
  };

  const validProfessions = [
    'academic', 'business', 'creative', 'design', 'engineering', 'executive', 
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
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#64748b' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
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
  
  // professionIcon lookup replaced with getProfessionIcon
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
        fontFamily: 'var(--font-family-sans)'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: 'var(--text-secondary-light)',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/"
              style={{ color: 'var(--text-secondary-light)', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary-light)'}
            >
              Home
            </Link>
            <span>›</span>
            <Link 
              href="/examples"
              style={{ color: 'var(--text-secondary-light)', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary-light)'}
            >
              Resume Examples
            </Link>
            <span>›</span>
            <span style={{ color: 'var(--primary)', fontWeight: 500 }}>{professionName} Resumes</span>
          </div>
        </nav>

        {/* Header Section */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {getProfessionIcon(slug, "64px")}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontFamily: 'var(--font-family-display)',
            marginBottom: '16px',
            color: 'var(--text-primary-light)',
            lineHeight: '1.2',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            {professionName} Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary-light)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {professionDescription}
          </p>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary-light)',
            opacity: 0.8,
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: {professionName} professionals at all career levels
          </p>
        </div>

        {/* Stats Bar */}
        <div className="premium-card" style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '48px',
          padding: '24px',
          background: '#f8fafc',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center', minWidth: '150px' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-family-display)' }}>
              {professionStat.count}+
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary-light)', fontWeight: 500 }}>Sample Resumes</div>
          </div>
          <div style={{ textAlign: 'center', minWidth: '150px' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-family-display)' }}>
              {professionStat.stack.split(' • ')[0]}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary-light)', fontWeight: 500 }}>Key Skills</div>
          </div>
          <div style={{ textAlign: 'center', minWidth: '150px' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-family-display)' }}>
              2026
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary-light)', fontWeight: 500 }}>Updated for Hiring Season</div>
          </div>
        </div>

        {/* Examples Grid - Will be populated with actual examples */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {/* Example Card Placeholder */}
          <div className="premium-card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#f0f7ff',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '16px'
              }}>
                {getProfessionIcon(slug, "32px")}
              </div>
              <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>
                {professionName} Resume Sample
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', marginBottom: '16px', lineHeight: '1.6' }}>
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
                    color: 'var(--primary)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '16px'
            }}>
              <span style={{
                color: 'var(--primary)',
                fontSize: '14px',
                fontWeight: 600
              }}>
                View Complete Resume →
              </span>
            </div>
          </div>

          <div className="premium-card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#f0f7ff',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '16px'
              }}>
                {getProfessionIcon(slug, "32px")}
              </div>
              <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>
                Senior {professionName} Resume
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', marginBottom: '16px', lineHeight: '1.6' }}>
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
                  color: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  Leadership
                </span>
                <span style={{
                  background: '#f0f7ff',
                  color: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  Strategy
                </span>
                <span style={{
                  background: '#f0f7ff',
                  color: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  Management
                </span>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '16px'
            }}>
              <span style={{
                color: 'var(--primary)',
                fontSize: '14px',
                fontWeight: 600
              }}>
                View Complete Resume →
              </span>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="premium-card" style={{
          background: '#f8fafc',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontFamily: 'var(--font-family-display)',
            marginBottom: '24px',
            color: 'var(--text-primary-light)',
            textAlign: 'center'
          }}>
            Tips for Creating Effective {professionName} Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>Quantify Your Achievements</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', lineHeight: '1.6' }}>Use specific metrics and numbers to demonstrate your impact. Numbers make your accomplishments tangible and credible to hiring managers.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>Highlight Industry-Specific Skills</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', lineHeight: '1.6' }}>Include relevant technical skills, certifications, and tools specific to your profession. This helps your resume pass ATS screening.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>Showcase Career Progression</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', lineHeight: '1.6' }}>Demonstrate growth through promotions, increased responsibilities, and expanding scope of work. This shows potential for future advancement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-family-display)', marginBottom: '8px', color: 'var(--text-primary-light)' }}>Include Professional Certifications</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary-light)', lineHeight: '1.6' }}>List relevant certifications, licenses, and professional development. Certifications validate your expertise and commitment to the field.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'var(--primary-gradient)',
          borderRadius: '24px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 10px 25px -5px rgba(0, 112, 243, 0.15)'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            Build Your Professional {professionName} Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px',
            lineHeight: '1.6'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for {professionName.toLowerCase()} professionals. Create a standout resume in minutes.
          </p>
          <Link 
            href="/editor"
            className="premium-btn-primary"
            style={{
              background: 'white',
              color: 'var(--primary)',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.25)',
              display: 'inline-flex'
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