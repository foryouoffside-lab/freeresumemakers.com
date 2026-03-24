import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function HomePage() {
  // Enhanced schema markup for rich results
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Resume Maker",
    "description": "Create professional ATS-friendly resumes with our free resume builder. No sign up required. 20+ templates, instant PDF download.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "ATS-friendly templates, Real-time preview, PDF download, No sign up required, Mobile responsive"
  };

  // FAQ Schema for featured questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this resume builder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our resume builder is 100% free with no hidden charges. You can create, edit, and download your resume without any payment or sign-up requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are your resume templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our templates are designed to be ATS-friendly, using clean formatting, standard fonts, and proper section headings that Applicant Tracking Systems can easily parse."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account required. You can start building your resume immediately. Your information stays in your browser and is cleared when you close the tab."
        }
      }
    ]
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Maker",
    "url": "https://freeresumemakers.com",
    "logo": "https://freeresumemakers.com/logo.png",
    "description": "Free online resume builder to create professional ATS-friendly resumes.",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker"
    ]
  };

  return (
    <>
      <SEO 
        title="Free Resume Maker - Create Professional Resumes Online in Minutes"
        description="Build professional, ATS-friendly resumes instantly with our free resume builder. No sign-up required. Choose from 20+ templates, edit in real-time, and download as PDF. Trusted by job seekers worldwide."
        keywords="free resume builder, online resume maker, ATS friendly resume, professional resume templates, CV builder, resume creator, job application tool, free CV maker"
        canonical="https://freeresumemakers.com/"
        type="website"
      />
      
      {/* Additional structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Development Notice - Text only */}
        <div style={{
          background: '#fff3cd',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '30px',
          textAlign: 'center',
          border: '1px solid #ffc107'
        }}>
          <p style={{margin: 0, color: '#856404', fontSize: '0.9rem'}}>
            This website is currently in active development. Features are being added regularly.
          </p>
        </div>

        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: '60px 20px'}}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            marginBottom: '20px',
            fontWeight: 700,
            lineHeight: '1.2',
            color: '#1a1a1a'
          }}>
            Create a <span style={{color: '#0070f3'}}>Professional Resume</span> for Free
          </h1>
          <p style={{
            fontSize: '1.2rem', 
            color: '#666', 
            maxWidth: '800px', 
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Free resume builder with ATS-friendly templates, real-time preview, and PDF download. 
            <strong> No sign up required.</strong>
          </p>
          
          {/* Stats Bar - Text only */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '28px', fontWeight: 'bold', color: '#0070f3'}}>Free</div>
              <div style={{fontSize: '14px', color: '#666'}}>Forever</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '28px', fontWeight: 'bold', color: '#0070f3'}}>ATS</div>
              <div style={{fontSize: '14px', color: '#666'}}>Friendly</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '28px', fontWeight: 'bold', color: '#0070f3'}}>PDF</div>
              <div style={{fontSize: '14px', color: '#666'}}>Download</div>
            </div>
          </div>

          <Link 
            href="/editor"
            style={{
              background: '#0070f3',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Build Your Resume - It's Free
          </Link>
        </section>

        {/* Features Section - Text only, no emojis */}
        <section style={{margin: '80px 0'}}>
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '20px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Why Choose Our Resume Builder
          </h2>
          <p style={{
            textAlign: 'center', 
            color: '#666', 
            maxWidth: '700px', 
            margin: '0 auto 50px',
            fontSize: '1.1rem'
          }}>
            Everything you need to create a professional resume
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {title: 'ATS-Friendly Templates', desc: 'Templates designed to pass through Applicant Tracking Systems with clean formatting'},
              {title: 'Fast and Easy to Use', desc: 'Build your resume in minutes with our step-by-step intuitive editor'},
              {title: '100% Free', desc: 'No hidden charges, no sign up required, unlimited downloads'},
              {title: 'Mobile Responsive', desc: 'Works on all devices - desktop, tablet, and mobile phone'},
              {title: 'Privacy Focused', desc: 'Your information stays on your device. We do not store any personal data'},
              {title: 'PDF Download', desc: 'Download your resume as a professional PDF file when completed'}
            ].map((feature, idx) => (
              <div key={idx} style={{
                padding: '28px',
                borderRadius: '16px',
                background: '#f8fafc',
                textAlign: 'center',
                border: '1px solid #e9ecef',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#e3f2fd',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#0070f3'
                }}>
                  {idx + 1}
                </div>
                <h3 style={{
                  marginBottom: '12px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  {feature.title}
                </h3>
                <p style={{color: '#666', lineHeight: '1.6', margin: 0, fontSize: '0.9rem'}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section style={{margin: '80px 0'}}>
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '50px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            How It Works in 3 Simple Steps
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {step: '1', title: 'Choose a Template', desc: 'Select from our collection of 20+ ATS-friendly templates'},
              {step: '2', title: 'Fill in Your Details', desc: 'Add your personal information, work experience, skills, and education'},
              {step: '3', title: 'Download PDF', desc: 'Preview your resume and download it instantly as a professional PDF'}
            ].map((item, idx) => (
              <div key={idx} style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '35px',
                  background: '#0070f3',
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  marginBottom: '12px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  {item.title}
                </h3>
                <p style={{color: '#666', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Preview */}
        <section style={{margin: '80px 0'}}>
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '20px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Browse Our Professional Templates
          </h2>
          <p style={{
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Choose from 20+ ATS-friendly designs for every profession
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px'
          }}>
            {[1,2,3,4,5,6,7,8].map(num => (
              <Link key={num} href={`/templates/${num}`} style={{textDecoration: 'none'}}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#333',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.2s',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  Template {num}
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link href="/templates" style={{color: '#0070f3', textDecoration: 'none', fontWeight: 500}}>
              View All 20+ Templates →
            </Link>
          </div>
        </section>

        {/* Blog Highlights - Text only */}
        <section style={{
          margin: '80px 0', 
          background: '#f8fafc', 
          padding: '50px', 
          borderRadius: '24px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{
            textAlign: 'center', 
            fontSize: '2rem', 
            marginBottom: '20px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Expert Career Advice
          </h2>
          <p style={{
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Get tips and insights to land your dream job
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {title: 'How to Write a Resume', link: '/blog/how-to-write-resume', number: 1},
              {title: 'ATS Resume Tips for 2026', link: '/blog/ats-resume-tips-2026', number: 2},
              {title: 'Resume Mistakes to Avoid', link: '/blog/resume-mistakes-to-avoid', number: 3},
              {title: 'Action Verbs for Resume', link: '/blog/action-verbs-for-resume', number: 4}
            ].map((post, idx) => (
              <Link key={idx} href={post.link} style={{textDecoration: 'none'}}>
                <div style={{
                  padding: '28px',
                  background: 'white',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  border: '1px solid #e9ecef'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#e3f2fd',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#0070f3'
                  }}>
                    {post.number}
                  </div>
                  <h3 style={{
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}>
                    {post.title}
                  </h3>
                  <span style={{color: '#0070f3', fontWeight: 500, fontSize: '0.9rem'}}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link href="/blog" style={{color: '#0070f3', textDecoration: 'none', fontWeight: 500}}>
              Read All Articles →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          color: 'white',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          margin: '80px 0'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            fontWeight: 700
          }}>
            Start Building Your Resume Today
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            opacity: 0.95
          }}>
            Join thousands of job seekers who created professional resumes with our free builder
          </p>
          <Link 
            href="/editor"
            style={{
              background: 'white',
              color: '#0070f3',
              padding: '16px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Create My Resume Now →
          </Link>
        </section>

        {/* Footer Navigation */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Maker. Create professional resumes instantly.</p>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <Link href="/templates" style={{color: '#999', textDecoration: 'none'}}>Templates</Link>
            <Link href="/blog" style={{color: '#999', textDecoration: 'none'}}>Blog</Link>
            <Link href="/about" style={{color: '#999', textDecoration: 'none'}}>About</Link>
            <Link href="/contact" style={{color: '#999', textDecoration: 'none'}}>Contact</Link>
            <Link href="/faq" style={{color: '#999', textDecoration: 'none'}}>FAQ</Link>
            <Link href="/privacy-policy" style={{color: '#999', textDecoration: 'none'}}>Privacy</Link>
          </div>
        </div>
      </main>
    </>
  );
}