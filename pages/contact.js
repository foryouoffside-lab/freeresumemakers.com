import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // AI assistance note - text only, no emoji
  const aiAssisted = true;

  // ContactPage schema for rich results
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Free Resume Builder",
    "description": "Get in touch with our team. Have questions about our free resume builder? We are here to help with templates, ATS optimization, and more.",
    "url": "https://freeresumemaker.xyz/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Free Resume Builder",
      "email": "freeresumeemaker@gmail.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "freeresumeemaker@gmail.com",
        "contactType": "customer support",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    }
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
        "name": "Contact Us",
        "item": "https://freeresumemaker.xyz/contact"
      }
    ]
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would send to your API
    // console.log removed for production
    
    // Show success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEO 
          title="Thank You - Message Received | Free Resume Builder"
          description="Thank you for contacting us. We have received your message and will get back to you within 24-48 hours."
          canonical="https://freeresumemaker.xyz/contact/thank-you"
          noindex={true}
        />
        <main style={{
          maxWidth: '600px',
          margin: '80px auto',
          padding: '20px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '50px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: '#155724',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              Ã¢Å“â€œ
            </div>
            <h1 style={{
              fontSize: '2.2rem',
              marginBottom: '20px',
              fontWeight: 700
            }}>
              Thank You
            </h1>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Your message has been sent successfully. We will get back to you within 24-48 hours.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/"
                style={{
                  background: '#155724',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 600,
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Return to Home
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                style={{
                  background: 'transparent',
                  color: '#155724',
                  padding: '12px 30px',
                  borderRadius: '10px',
                  border: '2px solid #155724',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#155724';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#155724';
                }}
              >
                Send Another Message
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Us - Free Resume Builder Support | Get Help with Your Resume"
        description="Get in touch with our team for questions about our free resume builder, templates, ATS optimization, or any issues you are experiencing. We are here to help job seekers create professional resumes."
        keywords="contact resume builder, resume builder support, help with resume, template support, ATS questions, resume help, free resume builder contact"
        canonical="https://freeresumemaker.xyz/contact"
        image="https://freeresumemaker.xyz/images/contact/og-contact.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
          <span>Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }}>Contact Us</span>
        </nav>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Have questions about our resume builder? Need help with a template? 
            We are here to assist you with anything you need.
          </p>
          {aiAssisted && (
            <p style={{
              fontSize: '0.85rem',
              color: '#999',
              marginTop: '12px'
            }}>
              This website and its 20+ templates were created with AI assistance
            </p>
          )}
        </div>

        {/* Main Grid - Contact Info + Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Left Column - Contact Info */}
          <div>
            {/* Quick Contact Cards */}
            <div style={{
              background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
              color: 'white',
              padding: '35px',
              borderRadius: '20px',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '25px',
                fontWeight: 600
              }}>
                Quick Contact
              </h2>
              
              <div style={{marginBottom: '25px'}}>
                <div style={{
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  opacity: 0.8
                }}>
                  Email
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '5px',
                  wordBreak: 'break-all'
                }}>
                  freeresumeemaker@gmail.com
                </div>
                <div style={{opacity: 0.8, fontSize: '0.85rem'}}>
                  We reply within 24-48 hours
                </div>
              </div>

              <div style={{marginBottom: '25px'}}>
                <div style={{
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  opacity: 0.8
                }}>
                  Response Time
                </div>
                <div style={{marginBottom: '5px', fontWeight: 500}}>
                  Monday - Friday: 24 hours
                </div>
                <div style={{fontWeight: 500}}>
                  Weekends and Holidays: 48 hours
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  opacity: 0.8
                }}>
                  Location
                </div>
                <div style={{fontWeight: 500}}>
                  Available Worldwide (Online Service)
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div style={{
              background: '#f8f9fa',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                marginBottom: '20px',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                Quick Answers
              </h3>
              <div style={{marginBottom: '20px'}}>
                <p style={{
                  fontWeight: 600,
                  marginBottom: '5px',
                  color: '#1a1a1a'
                }}>
                  Is it really free?
                </p>
                <p style={{color: '#666', marginBottom: '15px', lineHeight: '1.5'}}>
                  Yes. 100% free forever. No hidden costs or premium tiers.
                </p>
                
                <p style={{
                  fontWeight: 600,
                  marginBottom: '5px',
                  color: '#1a1a1a'
                }}>
                  How many templates?
                </p>
                <p style={{color: '#666', marginBottom: '15px', lineHeight: '1.5'}}>
                  20+ professionally designed, ATS-friendly templates.
                </p>
                
                <p style={{
                  fontWeight: 600,
                  marginBottom: '5px',
                  color: '#1a1a1a'
                }}>
                  Do I need an account?
                </p>
                <p style={{color: '#666', marginBottom: '15px', lineHeight: '1.5'}}>
                  No accounts needed. Start building immediately.
                </p>
                
                <p style={{
                  fontWeight: 600,
                  marginBottom: '5px',
                  color: '#1a1a1a'
                }}>
                  Where is my data stored?
                </p>
                <p style={{color: '#666', marginBottom: '15px', lineHeight: '1.5'}}>
                  Your data stays in your browser. We do not store it on our servers.
                </p>
              </div>
              <Link 
                href="/faq" 
                style={{
                  color: '#0070f3',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block'
                }}
              >
                View all FAQs Ã¢â€ â€™
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #e9ecef'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              color: '#1a1a1a',
              fontWeight: 600
            }}>
              Send Us a Message
            </h2>

            {error && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '15px',
                borderRadius: '12px',
                marginBottom: '25px',
                border: '1px solid #f5c6cb'
              }}>
                <strong>Error:</strong> {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{marginBottom: '24px'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  placeholder="John Doe"
                  onFocus={(e) => e.target.style.borderColor = '#0070f3'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              {/* Email Field */}
              <div style={{marginBottom: '24px'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  placeholder="john@example.com"
                  onFocus={(e) => e.target.style.borderColor = '#0070f3'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              {/* Subject Field */}
              <div style={{marginBottom: '24px'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  placeholder="e.g., Question about templates"
                  onFocus={(e) => e.target.style.borderColor = '#0070f3'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              {/* Message Field */}
              <div style={{marginBottom: '28px'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '12px',
                    fontSize: '16px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  placeholder="How can we help you? Please provide as much detail as possible..."
                  onFocus={(e) => e.target.style.borderColor = '#0070f3'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  marginBottom: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0060d6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0070f3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>

              {/* Privacy Notice */}
              <p style={{
                fontSize: '0.8rem',
                color: '#999',
                textAlign: 'center',
                margin: 0,
                lineHeight: '1.5'
              }}>
                By submitting this form, you agree to our{' '}
                <Link href="/privacy-policy" style={{color: '#0070f3', textDecoration: 'none'}}>
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link href="/terms-of-service" style={{color: '#0070f3', textDecoration: 'none'}}>
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginBottom: '60px'
        }}>
          {[
            {
              title: 'Live Chat',
              desc: 'Chat with our support team',
              status: 'Coming Soon',
              available: false,
              statusBg: '#fff3cd',
              statusColor: '#856404'
            },
            {
              title: 'Email Support',
              desc: 'freeresumeemaker@gmail.com',
              status: 'Available Now',
              available: true,
              statusBg: '#e3f2fd',
              statusColor: '#0070f3'
            },
            {
              title: 'WhatsApp',
              desc: 'Contact via WhatsApp',
              status: 'Coming Soon',
              available: false,
              statusBg: '#fff3cd',
              statusColor: '#856404'
            }
          ].map((method, index) => (
            <div key={index} style={{
              padding: '30px',
              background: '#f8f9fa',
              borderRadius: '16px',
              textAlign: 'center',
              opacity: method.available ? 1 : 0.7,
              border: '1px solid #e9ecef',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '60px',
                height: '60px',
                background: method.available ? '#e3f2fd' : '#f0f0f0',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: method.available ? '#0070f3' : '#999'
              }}>
                {method.title.charAt(0)}
              </div>
              <h3 style={{
                marginBottom: '8px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#1a1a1a'
              }}>
                {method.title}
              </h3>
              <p style={{color: '#666', marginBottom: '15px', fontSize: '0.9rem'}}>
                {method.desc}
              </p>
              <span style={{
                background: method.statusBg,
                color: method.statusColor,
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                {method.status}
              </span>
            </div>
          ))}
        </div>

        {/* Support Hours */}
        <div style={{
          background: '#f8f9fa',
          padding: '40px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '20px',
            fontWeight: 600,
            color: '#1a1a1a'
          }}>
            Support Hours
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{fontWeight: 600, marginBottom: '5px', color: '#1a1a1a'}}>
                Monday - Friday
              </div>
              <div style={{color: '#666'}}>9:00 AM - 6:00 PM (EST)</div>
            </div>
            <div>
              <div style={{fontWeight: 600, marginBottom: '5px', color: '#1a1a1a'}}>
                Saturday
              </div>
              <div style={{color: '#666'}}>10:00 AM - 4:00 PM (EST)</div>
            </div>
            <div>
              <div style={{fontWeight: 600, marginBottom: '5px', color: '#1a1a1a'}}>
                Sunday
              </div>
              <div style={{color: '#666'}}>Closed</div>
            </div>
          </div>
        </div>

        {/* AI Assistance Note */}
        <div style={{
          textAlign: 'center',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{color: '#666', margin: 0, fontSize: '0.9rem'}}>
            This website and its 20+ resume templates were created with the assistance of AI to provide the best free resume building experience.
          </p>
        </div>

        {/* FAQ Link */}
        <div style={{
          textAlign: 'center',
          padding: '30px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{
            fontSize: '1rem',
            marginBottom: '15px',
            color: '#666'
          }}>
            Before contacting, check our frequently asked questions page for instant answers
          </p>
          <Link 
            href="/faq"
            style={{
              background: '#0070f3',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 600,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            View FAQ Page
          </Link>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>Ã‚Â© {new Date().getFullYear()} Free Resume Builder. All rights reserved.</p>
          <p style={{fontSize: '0.8rem', marginTop: '5px'}}>
            20+ Templates | ATS-Friendly | 100% Free
          </p>
          <div style={{marginTop: '12px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/privacy-policy" style={{color: '#999', textDecoration: 'none'}}>Privacy Policy</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/terms-of-service" style={{color: '#999', textDecoration: 'none'}}>Terms of Service</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/about" style={{color: '#999', textDecoration: 'none'}}>About Us</Link>
            <span style={{color: '#ddd'}}>|</span>
            <Link href="/faq" style={{color: '#999', textDecoration: 'none'}}>FAQ</Link>
          </div>
        </div>
      </main>
    </>
  );
}
