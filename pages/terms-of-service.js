import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // WebPage schema for terms of service
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Free Resume Builder",
    "description": "Terms of service for using our free resume builder. Learn about your rights and responsibilities when using our service with 20+ free templates.",
    "url": "https://freeresumemaker.xyz/terms-of-service",
    "mainEntity": {
      "@type": "TermsOfService",
      "name": "Terms of Service",
      "datePublished": "2026-01-01",
      "dateModified": new Date().toISOString().split('T')[0]
    }
  };

  // Organization schema for trust signals
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free Resume Builder",
    "url": "https://freeresumemaker.xyz",
    "email": "freeresumeemaker@gmail.com",
    "description": "Free, privacy-focused resume builder with 20+ ATS-friendly templates",
    "sameAs": [
      "https://twitter.com/freeresumemaker",
      "https://www.linkedin.com/company/free-resume-maker"
    ]
  };

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
        "name": "Terms of Service",
        "item": "https://freeresumemaker.xyz/terms-of-service"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Terms of Service - Free Resume Builder | Legal Terms & Conditions"
        description="Read our terms of service for using the free resume builder. Understand your rights, responsibilities, and our policies. 20+ free ATS-friendly templates. No account required. Updated for 2026."
        keywords="terms of service, terms and conditions, resume builder terms, free resume builder terms, legal terms, service agreement, terms of use"
        canonical="https://freeresumemaker.xyz/terms-of-service"
        image="https://freeresumemaker.xyz/images/terms-og.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.7',
        color: '#333'
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
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>Terms of Service</span>
        </nav>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Terms of Service
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '16px'
          }}>
            <em>Last updated: {currentDate}</em>
          </p>
          <div style={{
            background: '#e3f2fd',
            padding: '12px 24px',
            borderRadius: '40px',
            display: 'inline-block',
            fontSize: '0.85rem',
            color: '#0070f3',
            fontWeight: 500
          }}>
            20+ Templates | Free Forever | No Account Required
          </div>
        </div>

        {/* Important Notice - Text only */}
        <div style={{
          background: '#fff8e7',
          padding: '28px',
          borderRadius: '16px',
          marginBottom: '40px',
          borderLeft: '5px solid #ffc107',
          border: '1px solid #ffd966'
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: '12px',
            fontSize: '1.3rem',
            color: '#b85c00',
            fontWeight: 600
          }}>
            Important - Please Read
          </h2>
          <p style={{
            margin: 0,
            color: '#b85c00',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            By using our free resume builder, you agree to these terms. If you do not agree with any part, 
            please do not use our service. Your privacy and rights are important to us.
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
          border: '1px solid #e9ecef'
        }}>
          {/* Section 1 */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              1. Acceptance of Terms
            </h2>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e9ecef'
            }}>
              <p style={{margin: 0, lineHeight: '1.7'}}>
                By accessing or using our resume builder website and tools, you agree to be bound by these Terms of Service.
                If you disagree with any part, you may not access the service.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              2. Service Description
            </h2>
            <p style={{marginBottom: '16px'}}>We provide a free online tool to create professional resumes. Key features include:</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginTop: '16px',
              marginBottom: '20px'
            }}>
              {[
                '20+ ATS-friendly templates',
                'Real-time preview',
                'PDF download',
                'No account required',
                'Privacy focused',
                'AI-assisted design'
              ].map((feature, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '12px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  border: '1px solid #e9ecef',
                  fontSize: '0.9rem',
                  color: '#1a1a1a'
                }}>
                  {feature}
                </div>
              ))}
            </div>
            <p style={{marginTop: '16px'}}>
              <strong>The service is provided "as is" without any warranties, express or implied.</strong>
            </p>
          </div>

          {/* Section 3 */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              3. User Responsibilities
            </h2>
            <div style={{display: 'grid', gap: '12px'}}>
              {[
                'Accuracy: You are responsible for the accuracy of all information you enter',
                'Legality: Do not use the service for illegal purposes or fraudulent resumes',
                'Content Rights: You confirm you have the right to use any information you input',
                'No Abuse: Do not attempt to hack, overload, or disrupt the service',
                'No Automated Access: Do not use bots or scrapers'
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <span style={{
                    color: '#0070f3',
                    fontWeight: 'bold',
                    minWidth: '24px'
                  }}>
                    {index + 1}.
                  </span>
                  <span style={{color: '#444'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 - Intellectual Property */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              4. Intellectual Property
            </h2>
            
            <div style={{marginBottom: '25px'}}>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '12px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                A. Our Templates and Content
              </h3>
              <div style={{
                background: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <p><strong>You may:</strong></p>
                <ul style={{color: '#2e7d32', marginBottom: '16px'}}>
                  <li>Use templates to create personal resumes for job applications</li>
                  <li>Download and save your created resumes</li>
                  <li>Share your created resume with employers</li>
                </ul>
                <p><strong>You may NOT:</strong></p>
                <ul style={{color: '#c62828'}}>
                  <li>Resell, redistribute, or sublicense our templates</li>
                  <li>Claim the templates as your own creation</li>
                  <li>Use our templates to create a competing service</li>
                  <li>Remove or alter any copyright notices</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '12px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                B. Your Content
              </h3>
              <div style={{
                background: '#e8f5e9',
                padding: '20px',
                borderRadius: '12px',
                borderLeft: '5px solid #2e7d32',
                border: '1px solid #c8e6c9'
              }}>
                <p style={{margin: 0, color: '#2e7d32', lineHeight: '1.7'}}>
                  You retain all rights to your information. We claim no ownership over your personal data. 
                  Since we do not store your data, you are responsible for keeping copies of your resumes.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 - Disclaimer */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              5. Disclaimer of Warranties
            </h2>
            <div style={{display: 'grid', gap: '12px'}}>
              {[
                'Job Placement: Creating a resume does not guarantee job interviews',
                'ATS Compatibility: We cannot guarantee compatibility with every ATS system',
                'Uptime: Service may be unavailable occasionally for maintenance',
                'Error-Free: The service may contain bugs or errors'
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#fff8e7',
                  padding: '16px',
                  borderRadius: '12px',
                  borderLeft: '5px solid #ffc107',
                  border: '1px solid #ffd966',
                  color: '#b85c00'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 - Liability */}
          <div style={{marginBottom: '40px'}}>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              6. Limitation of Liability
            </h2>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e9ecef'
            }}>
              <p style={{margin: 0, lineHeight: '1.7'}}>
                <strong>Since our service is completely free, you agree that our total liability to you shall not exceed $0.</strong>
                We are not liable for any damages arising from your use of the service.
              </p>
            </div>
          </div>

          {/* Sections 7-11 */}
          {[
            { num: 7, title: 'Indemnification', content: 'You agree to hold us harmless from any claims arising out of your use of the service.' },
            { num: 8, title: 'Modifications to Service', content: 'We reserve the right to modify or discontinue any part of the service at any time without notice.' },
            { num: 9, title: 'Third-Party Links', content: 'We are not responsible for the content of third-party websites linked from our service.' },
            { num: 10, title: 'Governing Law', content: 'These terms shall be governed by the laws of your jurisdiction.' },
            { num: 11, title: 'Changes to Terms', content: 'We may update these terms. Continued use of the service means you accept any changes.' }
          ].map((section) => (
            <div key={section.num} style={{marginBottom: '30px'}}>
              <h2 style={{
                fontSize: '1.6rem',
                marginBottom: '16px',
                color: '#1a1a1a',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '12px',
                fontWeight: 600
              }}>
                {section.num}. {section.title}
              </h2>
              <p style={{lineHeight: '1.7', color: '#444'}}>{section.content}</p>
            </div>
          ))}

          {/* Section 12 - Contact */}
          <div>
            <h2 style={{
              fontSize: '1.6rem',
              marginBottom: '20px',
              color: '#1a1a1a',
              borderBottom: '2px solid #0070f3',
              paddingBottom: '12px',
              fontWeight: 600
            }}>
              12. Contact Information
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
              color: 'white',
              padding: '32px',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <p style={{fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6'}}>
                For questions about these Terms of Service, please contact us:
              </p>
              <div style={{marginBottom: '20px'}}>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                 freeresumeemaker@gmail.com
                </div>
                <p style={{opacity: 0.9, margin: 0, fontSize: '0.9rem'}}>
                  We typically reply within 24 to 48 hours
                </p>
              </div>
              <Link 
                href="/contact"
                style={{
                  background: 'white',
                  color: '#0070f3',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 600,
                  marginTop: '8px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Contact Form â†’
              </Link>
            </div>
          </div>
        </div>

        {/* AI Assistance Note - Text only */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <p style={{color: '#666', margin: 0, fontSize: '0.9rem'}}>
            This website and its 20+ resume templates were created with the assistance of AI. 
            We are committed to transparency and continuous improvement.
          </p>
        </div>

        {/* Agreement */}
        <div style={{
          marginTop: '30px',
          padding: '24px',
          background: '#e8f5e9',
          borderRadius: '16px',
          textAlign: 'center',
          border: '1px solid #c8e6c9'
        }}>
          <p style={{
            margin: 0,
            fontWeight: 600,
            color: '#2e7d32',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            By using our resume builder, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Service.
          </p>
        </div>

        {/* Footer Note with Links */}
        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '24px'
        }}>
          <p>Â© {new Date().getFullYear()} Free Resume Builder | 20+ Templates | Free Forever</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '12px',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{color: '#999', textDecoration: 'none'}}>About</Link>
            <Link href="/contact" style={{color: '#999', textDecoration: 'none'}}>Contact</Link>
            <Link href="/faq" style={{color: '#999', textDecoration: 'none'}}>FAQ</Link>
            <Link href="/privacy-policy" style={{color: '#999', textDecoration: 'none'}}>Privacy Policy</Link>
          </div>
        </div>
      </main>
    </>
  );
}
