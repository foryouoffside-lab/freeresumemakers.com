// pages/editor/index.js - SEO OPTIMIZED VERSION (2026 Update)
import TemplateSelector from '../../components/templates/TemplateSelector';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Head from 'next/head';

export default function EditorIndex() {
  const router = useRouter();

  const handleTemplateSelect = (templateId) => {
    router.push(`/editor/${templateId}/personalInfo`);
  };

  // Enhanced ItemList schema for template collection with complete metadata
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Resume Templates Collection 2026",
    "description": "Browse and select from 20+ professional ATS-friendly resume templates optimized for 2026 hiring trends. All templates are fully customizable and free to use.",
    "numberOfItems": 20,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": Array.from({ length: 20 }, (_, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `Template ${i + 1}`,
      "url": `https://freeresumemakers.com/editor/${i + 1}/personalInfo`,
      "description": `ATS-optimized resume template ${i + 1} with clean formatting and professional design`
    }))
  };

  // Enhanced Breadcrumb schema with complete path
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freeresumemakers.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume Builder",
        "item": "https://freeresumemakers.com/editor/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Choose Template",
        "item": "https://freeresumemakers.com/editor/"
      }
    ]
  };

  // LocalBusiness schema for the resume builder service
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Free Resume Builder",
    "description": "Free online resume builder with 20+ ATS-friendly templates. Create and download professional resumes instantly.",
    "url": "https://freeresumemakers.com/editor/",
    "logo": "https://freeresumemakers.com/logo.png",
    "priceRange": "$0",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/OnlineOnly",
      "eligibleRegion": {
        "@type": "Country",
        "name": "Worldwide"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Resume Templates",
      "itemListElement": Array.from({ length: 20 }, (_, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Resume Template ${i + 1}`,
          "description": `Professional ATS-optimized resume template ${i + 1}`
        },
        "price": "0",
        "priceCurrency": "USD"
      }))
    }
  };

  // HowTo schema for step-by-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build a Professional Resume",
    "description": "Create a professional resume in 3 simple steps using our free resume builder.",
    "totalTime": "PT15M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Template",
        "position": 1,
        "text": "Select from 20+ professional ATS-friendly resume templates",
        "image": "https://freeresumemakers.com/assets/howto/step1-choose-template.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Fill Your Details",
        "position": 2,
        "text": "Add your personal information, work experience, education, skills, and achievements",
        "image": "https://freeresumemakers.com/assets/howto/step2-fill-details.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Download PDF",
        "position": 3,
        "text": "Download your professional resume as a PDF file, ready to send to employers",
        "image": "https://freeresumemakers.com/assets/howto/step3-download-pdf.jpg"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Choose Resume Template 2026 | 20+ ATS-Friendly Designs | Free Resume Builder"
        description="Select from 20+ professional ATS-friendly resume templates for 2026. All templates are optimized for Applicant Tracking Systems, fully customizable, and ready for instant PDF download. Start building your resume today - no sign up required."
        keywords="resume template selector, choose resume template, ATS-friendly templates, free resume builder, professional CV templates, best resume templates 2026, resume templates 2026, modern resume templates, ATS resume templates"
        canonical="https://freeresumemakers.com/editor/"
        image="https://freeresumemakers.com/assets/template-previews/all-templates-collection.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </Head>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          marginBottom: '30px',
          fontSize: '14px',
          color: '#666'
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#0070f3' }}>Resume Builder</span>
        </nav>

        {/* Template Selector */}
        <TemplateSelector onTemplateSelect={handleTemplateSelect} />

        {/* Why Choose Our Templates Section */}
        <div style={{
          marginTop: '80px',
          padding: '48px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Why Our Resume Templates Stand Out (2026)
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🤖</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>ATS-Friendly Design</h3>
              <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.6' }}>
                All templates are optimized to pass Applicant Tracking Systems with clean formatting and standard section headings. Updated for 2026 ATS algorithms.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Real-Time Preview</h3>
              <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.6' }}>
                See changes instantly as you type. No waiting, no refreshing - just seamless editing with instant feedback.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📄</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Instant PDF Download</h3>
              <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.6' }}>
                Download your professional resume as a PDF with one click. High-quality print-ready format for all employers.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>💎</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>100% Free Forever</h3>
              <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.6' }}>
                No hidden costs, no sign-up required. Create unlimited resumes completely free with no watermarks.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: '#f0f7ff',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Build Your Resume in 3 Simple Steps
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#0070f3',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 auto 16px'
              }}>1</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Choose Template</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Select from 20+ ATS-friendly designs for 2026</p>
            </div>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#0070f3',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 auto 16px'
              }}>2</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Fill Your Details</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Add experience, skills, education, and achievements</p>
            </div>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#0070f3',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 auto 16px'
              }}>3</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Download PDF</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Get your professional resume instantly</p>
            </div>
          </div>
        </div>

        {/* FAQ Section - Updated for 2026 */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '30px',
            textAlign: 'center',
            color: '#1a1a1a'
          }}>
            Frequently Asked Questions (2026)
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Do I need to create an account?', a: 'No! You can start building your resume immediately without any sign-up or registration. Your privacy is important to us.' },
              { q: 'Are these templates really free?', a: 'Yes, all 20+ templates are 100% free. No credit card, no hidden fees, no premium upgrades, and no watermarks on your downloads.' },
              { q: 'Are these templates ATS-friendly for 2026?', a: 'Absolutely! All our templates are designed with 2026 ATS standards - clean structure, standard headings, no complex tables or graphics, and proper keyword placement.' },
              { q: 'Can I edit the templates?', a: 'Absolutely! Once you select a template, you can customize every section - add, edit, or remove content as needed. Real-time preview shows your changes instantly.' },
              { q: 'What file format can I download?', a: 'You can download your resume as a high-quality PDF file, perfect for job applications, email attachments, and ATS systems.' },
              { q: 'Can I save my progress and come back later?', a: 'Currently, you can build and download in one session. We recommend saving your resume after downloading as PDF. Browser-based storage is coming soon.' },
              { q: 'Do these templates work for all industries?', a: 'Yes! Our templates are designed for all industries including tech, business, healthcare, creative, education, and more. Choose the style that fits your field.' },
              { q: 'How do I know if my resume is ATS-friendly?', a: 'Our templates use standard section headings (Work Experience, Education, Skills), simple formatting, and no columns or graphics that can confuse ATS software.' }
            ].map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '12px',
                marginBottom: '16px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#0070f3' }}>{faq.q}</h3>
                <p style={{ color: '#666', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '16px'
          }}>
            Ready to Create Your Professional Resume?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Join thousands of job seekers who landed their dream jobs with our free resume builder in 2026
          </p>
          <button
            onClick={() => handleTemplateSelect(1)}
            style={{
              padding: '16px 40px',
              background: 'white',
              color: '#0070f3',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start Building Now →
          </button>
        </div>

        {/* Footer Navigation */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          color: '#999',
          fontSize: '0.9rem',
          borderTop: '1px solid #eee',
          paddingTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Builder | 20+ ATS-Friendly Templates (2026) | 100% Free</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/templates" style={{ color: '#999', textDecoration: 'none' }}>All Templates</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#999', textDecoration: 'none' }}>ATS Guide 2026</Link>
            <Link href="/how-to-make-resume" style={{ color: '#999', textDecoration: 'none' }}>Resume Guide</Link>
            <Link href="/faq" style={{ color: '#999', textDecoration: 'none' }}>FAQ</Link>
            <Link href="/privacy-policy" style={{ color: '#999', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/contact" style={{ color: '#999', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}