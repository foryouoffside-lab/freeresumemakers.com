import { useState } from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import Head from 'next/head';

export default function Support() {
  const [amount, setAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSupport = () => {
    const finalAmount = customAmount || amount;
    // Simulate payment process - replace with actual payment integration
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    // window.location.href = `https://buy.stripe.com/your-link?amount=${finalAmount}`;
  };

  // FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the resume builder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the resume builder is 100% free with no hidden charges. You can create, edit, and download unlimited resumes without ever paying."
        }
      },
      {
        "@type": "Question",
        "name": "How will my donation be used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Donations go towards server costs, new template development, feature improvements, and keeping the tool ad-free for all users."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All contributions are non-refundable as they support ongoing development. Thank you for understanding and supporting the project."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a monthly subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, there is no subscription. The tool is completely free. Support is entirely optional and one-time."
        }
      }
    ]
  };

  // Organization schema for trust signals
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    "name": "Free Resume Builder",
    "url": "https://freeresumemaker.xyz",
    "description": "Free, ad-free resume builder helping job seekers create professional resumes.",
    "funding": {
      "@type": "FundingAgency",
      "name": "Community Supported"
    },
    "taxID": "N/A",
    "nonprofitStatus": "Community-Supported Project"
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
        "name": "Support",
        "item": "https://freeresumemaker.xyz/support"
      }
    ]
  };
  
  return (
    <>
      <SEO 
        title="Support Our Project - Help Keep Resume Builder Free | Community Supported"
        description="Support the development of our free resume builder. Your contribution helps us keep this tool free, add new features, and help more job seekers create professional resumes. 100% optional, one-time support."
        keywords="support resume builder, donate, contribute, keep it free, resume builder support, community supported, free resume builder"
        canonical="https://freeresumemaker.xyz/support"
        image="https://freeresumemaker.xyz/images/support-og.jpg"
        type="website"
      />
      
      {/* Schema Markup */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb */}
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
          <span style={{ color: '#0070f3' }}>Support</span>
        </nav>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#e3f2fd',
            borderRadius: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#0070f3'
          }}>
            â¤
          </div>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Support This Project
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            This tool is completely free and always will be. If it helped you land your dream job, 
            consider supporting its continued development.
          </p>
        </div>
        
        {/* Stats - Text only */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <div style={{ 
            padding: '20px', 
            background: '#f8fafc', 
            borderRadius: '16px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>50K+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Resumes Created</div>
          </div>
          <div style={{ 
            padding: '20px', 
            background: '#f8fafc', 
            borderRadius: '16px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>100%</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Free Forever</div>
          </div>
          <div style={{ 
            padding: '20px', 
            background: '#f8fafc', 
            borderRadius: '16px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>20+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Templates</div>
          </div>
        </div>
        
        {/* Support Card */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          padding: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Choose Your Contribution
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '28px'
          }}>
            {[5, 10, 20].map((value) => (
              <button
                key={value}
                onClick={() => { setAmount(value); setCustomAmount(''); }}
                style={{
                  padding: '20px 16px',
                  borderRadius: '16px',
                  border: `2px solid ${amount === value && !customAmount ? '#0070f3' : '#e9ecef'}`,
                  background: amount === value && !customAmount ? '#e3f2fd' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  if (!(amount === value && !customAmount)) {
                    e.currentTarget.style.borderColor = '#0070f3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!(amount === value && !customAmount)) {
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a' }}>${value}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>One-time</div>
              </button>
            ))}
          </div>
          
          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 600,
              color: '#1a1a1a'
            }}>
              Custom Amount
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px solid #e9ecef',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'border-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e9ecef'}>
              <span style={{
                padding: '14px 18px',
                background: '#f8fafc',
                fontWeight: 'bold',
                color: '#1a1a1a',
                borderRight: '1px solid #e9ecef'
              }}>
                USD
              </span>
              <input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>
          
          {showSuccess && (
            <div style={{
              marginBottom: '24px',
              padding: '14px',
              background: '#d4edda',
              color: '#155724',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #c3e6cb'
            }}>
              Thank you for your support!
            </div>
          )}
          
          <button
            onClick={handleSupport}
            style={{
              width: '100%',
              background: '#0070f3',
              color: 'white',
              padding: '18px',
              borderRadius: '16px',
              border: 'none',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
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
            Support with ${customAmount || amount || 10}
          </button>
          
          <p style={{
            fontSize: '13px',
            color: '#999',
            textAlign: 'center',
            marginTop: '28px',
            lineHeight: '1.6'
          }}>
            Your support helps keep this tool free and ad-free for everyone.<br />
            Every contribution goes directly to server costs and new feature development.
          </p>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '28px',
            textAlign: 'center',
            fontWeight: 700,
            color: '#1a1a1a'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { 
                q: 'Is the resume builder really free?', 
                a: 'Yes, the resume builder is 100% free with no hidden charges. You can create, edit, and download unlimited resumes without ever paying. No credit card required.' 
              },
              { 
                q: 'How will my donation be used?', 
                a: 'Donations go towards server costs, new template development, feature improvements, and keeping the tool ad-free for all users. Every contribution directly supports the project.' 
              },
              { 
                q: 'Can I get a refund?', 
                a: 'All contributions are non-refundable as they support ongoing development. Thank you for understanding and supporting the project.' 
              },
              { 
                q: 'Is there a monthly subscription?', 
                a: 'No, there is no subscription. The tool is completely free. Support is entirely optional and one-time only. You never have to pay to use the resume builder.' 
              }
            ].map((faq, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  marginBottom: '10px',
                  color: '#1a1a1a',
                  fontWeight: 600
                }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Support Message */}
        <div style={{
          marginTop: '48px',
          padding: '32px',
          background: '#f8fafc',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '12px',
            fontWeight: 600,
            color: '#1a1a1a'
          }}>
            Can't Contribute Financially?
          </h3>
          <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
            You can still help by sharing this tool with someone who might need it, or leaving feedback to help us improve.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/contact"
              style={{
                color: '#0070f3',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Share Feedback â†’
            </Link>
            <span style={{ color: '#ddd' }}>|</span>
            <Link 
              href="/templates"
              style={{
                color: '#0070f3',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Browse Templates â†’
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px'
        }}>
          <p>Â© {new Date().getFullYear()} Free Resume Builder | 100% Free | Community Supported</p>
        </div>
      </div>
    </>
  );
}
