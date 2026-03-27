// pages/editor/template-selector.js
import { useRouter } from 'next/router';
import Head from 'next/head';
import TemplateSelectorComponent from '../../components/templates/TemplateSelector';

export default function TemplateSelectorPage() {
  const router = useRouter();

  const handleTemplateSelect = (templateId) => {
    // Navigate to the editor with the selected template
    router.push(`/editor/${templateId}`);
  };

  // Template names for structured data
  const templateNames = [
    "The Professional", "The Innovator", "The Executive", "The Strategist", "The Minimalist",
    "The Architect", "The Scholar", "The Traditionalist", "The Modernist", "The Essential",
    "The Composer", "The Blueprint", "The Timeline", "The Monochrome", "The Compact",
    "The Minimal", "The Innovator 2.0", "The Code", "The Scholar 2.0", "The Engineer"
  ];

  // Complete structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://freeresumemaker.xyz/editor/template-selector",
        "name": "Resume Template Selector | Choose Your Perfect Design 2026",
        "description": "Browse and select from 20 professionally designed, ATS-friendly resume templates. Find the perfect template for your career - whether you are in technology, business, creative, or executive roles.",
        "url": "https://freeresumemaker.xyz/editor/template-selector",
        "inLanguage": "en-US",
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-03-24T10:00:00+00:00",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Free Resume Builder",
          "url": "https://freeresumemaker.xyz/"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://freeresumemaker.xyz/assets/template-previews/all-templates-2026.jpg",
          "width": "1200",
          "height": "630"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://freeresumemaker.xyz/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Resume Builder",
              "item": "https://freeresumemaker.xyz/editor"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Choose Template",
              "item": "https://freeresumemaker.xyz/editor/template-selector"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "name": "Professional Resume Templates 2026",
        "description": "Collection of 20 ATS-friendly resume templates optimized for 2026 hiring trends. Each template is professionally designed and customizable for any industry.",
        "numberOfItems": 20,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://freeresumemaker.xyz/editor/template-selector"
        },
        "itemListElement": templateNames.map((name, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": name,
          "url": `https://freeresumemaker.xyz/templates/${name.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/editor/template-selector#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an ATS-friendly resume template?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An ATS-friendly resume template is designed to be easily parsed by Applicant Tracking Systems. Our templates use clean formatting, standard fonts, and simple layouts that ensure your resume gets through automated screening systems."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose the right resume template?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider your industry and career level. The Professional is great for business roles, The Innovator for creative positions, The Executive for senior leaders, and The Code for software engineers. Browse our collection to find the perfect match for your career path."
            }
          },
          {
            "@type": "Question",
            "name": "Are these resume templates free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all 20 resume templates are completely free to use. You can customize them in our builder, download as PDF, and use them for your job applications. No sign-up required."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize these resume templates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Once you select a template, you can customize all content, including personal information, work experience, skills, education, and more. Each template is fully editable to match your needs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Choose Resume Template 2026 | 20 ATS-Friendly Designs | Free Resume Builder</title>
        <meta name="description" content="Browse and select from 20 professionally designed, ATS-friendly resume templates for 2026. Find the perfect template for your career - technology, business, creative, executive, and more. 100% free to use." />
        <meta name="keywords" content="resume templates 2026, ATS-friendly resume, professional resume templates, free resume builder, choose resume template, best resume templates, The Professional template, The Innovator template, executive resume template, technology resume template, creative resume design" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Free Resume Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0070f3" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/editor/template-selector" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freeresumemaker.xyz/editor/template-selector" />
        <meta property="og:title" content="Choose Your Perfect Resume Template | 20 ATS-Friendly Designs 2026" />
        <meta property="og:description" content="Browse 20 professionally designed resume templates optimized for 2026. Find the perfect template for your career - from executive to creative, technology to traditional. All templates are ATS-friendly and free." />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/template-previews/all-templates-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="20 professional resume templates preview collection" />
        <meta property="og:site_name" content="Free Resume Builder" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Choose Your Perfect Resume Template | 20 ATS-Friendly Designs 2026" />
        <meta name="twitter:description" content="Browse 20 professionally designed resume templates. Find the perfect design for your career - technology, business, creative, executive roles. All templates are ATS-friendly and free." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/template-previews/all-templates-2026.jpg" />
        <meta name="twitter:site" content="@freeresumemaker" />
        <meta name="twitter:creator" content="@freeresumemaker" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Free Resume Builder" />
        <meta name="apple-mobile-web-app-title" content="Resume Templates" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo and Language */}
        <meta name="geo.region" content="US" />
        <meta name="language" content="English" />
        <link rel="alternate" hrefLang="en-us" href="https://freeresumemaker.xyz/editor/template-selector" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource Hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>
      
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Page Header */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 24px 20px 24px',
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
          <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
          <span>›</span>
          <a href="/editor" style={{ color: '#666', textDecoration: 'none' }}>Resume Builder</a>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Choose Template</span>
        </nav>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Choose Your Perfect Resume Template
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Select from 20 professionally designed, ATS-friendly templates. Find the perfect design for your career path.
          </p>
        </div>

        {/* Stats Bar - No Emojis */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '48px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e9ecef',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>20+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Templates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>ATS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Friendly</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>100%</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Free</div>
          </div>
        </div>
      </div>
      
      {/* Template Selector Component */}
      <TemplateSelectorComponent onTemplateSelect={handleTemplateSelect} />
      
      {/* Footer Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        borderTop: '1px solid #e9ecef',
        marginTop: '40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {/* Template Categories */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
              Template Categories
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/templates/category/executive" style={{ color: '#666', textDecoration: 'none' }}>Executive & Business</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/templates/category/tech" style={{ color: '#666', textDecoration: 'none' }}>Technology & Developer</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/templates/category/creative" style={{ color: '#666', textDecoration: 'none' }}>Creative & Design</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/templates/category/academic" style={{ color: '#666', textDecoration: 'none' }}>Academic & Research</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/templates/category/entry-level" style={{ color: '#666', textDecoration: 'none' }}>Student & Entry Level</a></li>
            </ul>
          </div>
          
          {/* Helpful Links */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
              Helpful Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/how-to-make-resume" style={{ color: '#666', textDecoration: 'none' }}>How to Make a Resume</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/blog/ats-resume-tips-2026" style={{ color: '#666', textDecoration: 'none' }}>ATS Resume Tips 2026</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/blog/action-verbs-for-resume" style={{ color: '#666', textDecoration: 'none' }}>200+ Action Verbs</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/blog/resume-formatting-guide" style={{ color: '#666', textDecoration: 'none' }}>Resume Formatting Guide</a></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1a1a1a' }}>
              About Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/about" style={{ color: '#666', textDecoration: 'none' }}>About Free Resume Builder</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/contact" style={{ color: '#666', textDecoration: 'none' }}>Contact Us</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/privacy-policy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/terms-of-service" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Copyright */}
        <div style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '0.85rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '24px'
        }}>
          <p>© {new Date().getFullYear()} Free Resume Builder | 20+ ATS-Friendly Templates | 100% Free</p>
        </div>
      </div>
    </>
  );
}
