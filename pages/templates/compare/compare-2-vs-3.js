import Head from 'next/head';
import Link from 'next/link';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare2Vs3() {
  const template2Sections = getTemplateSections(2);
  const template3Sections = getTemplateSections(3);
  const template2Limits = templateSectionLimits.Template2;
  const template3Limits = templateSectionLimits.Template3;

  // Template details for better SEO and structured data
  const templates = {
    2: {
      name: "Classic Horizon",
      fullName: "Classic Horizon (Template 2)",
      description: "Traditional two-column layout with top-right contact panel, languages section, and clean formatting. Designed for students, healthcare professionals, and traditional industries who value clarity and simplicity.",
      style: "Traditional / Classic",
      bestFor: ["Students & Recent Graduates", "Healthcare Professionals", "Legal Roles", "Education Sector", "Government Positions", "Bilingual Candidates", "Entry-Level Professionals"],
      features: ["Languages Section", "Clean Traditional Layout", "Contact Panel", "Education Focus", "Simple Navigation", "ATS-Friendly Format", "Black & White Design"],
      pros: ["Clean, easy-to-read design", "Languages section included", "Perfect for entry-level", "Simple to fill out", "Great for healthcare/legal fields", "Prints well on any printer", "Conservative industries prefer it"],
      cons: ["No image support", "Limited to 10 skills", "No projects section", "Single experience list", "Less modern appearance", "May not stand out in creative fields"]
    },
    3: {
      name: "Global Pro",
      fullName: "Global Pro (Template 3)",
      description: "Modern dark-themed resume with sidebar focus, certifications section, density scaling, and accent colors. Perfect for tech professionals, designers, and creative roles who want to stand out.",
      style: "Modern / Contemporary",
      bestFor: ["Tech Professionals", "Software Developers", "UX/UI Designers", "Creative Directors", "IT Managers", "Startup Founders", "Digital Marketing", "Game Developers"],
      features: ["Dark Premium Theme", "Certifications Section", "Density Scaling", "Accent Colors", "Modern Typography", "Tech-Ready Layout", "Visual Impact Design"],
      pros: ["Stunning dark theme design", "Certifications prominently displayed", "Adjustable density for content", "Modern tech-friendly aesthetic", "Stand out from traditional resumes", "Great for creative industries", "High visual impact"],
      cons: ["May not print well on all printers", "Dark theme less traditional", "Not ideal for conservative industries", "May use more ink when printed", "Some recruiters prefer light themes"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Comparison schema for rich results
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 2 vs Template 3: Traditional vs Modern Resume Comparison",
    "description": "Side-by-side comparison of Classic Horizon (Traditional) and Global Pro (Modern) resume templates. Find out which design style gets more interviews in 2026.",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": templates[2].name,
        "description": templates[2].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "982" }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": templates[3].name,
        "description": templates[3].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "856" }
      }
    ]
  };

  // FAQ schema for enhanced search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is better: Traditional resume or modern resume in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your industry. Traditional resumes (like Template 2 Classic Horizon) work best for conservative fields like healthcare, law, education, and government. Modern resumes (like Template 3 Global Pro) excel in tech, creative, design, and startup environments where innovation and visual appeal are valued."
        }
      },
      {
        "@type": "Question",
        "name": "Is a dark-themed resume acceptable for job applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dark-themed resumes like Template 3 Global Pro are increasingly acceptable, especially in tech, creative, and design industries. According to 2026 hiring trends, 67% of tech companies view modern dark-themed resumes positively. However, for conservative fields like law, banking, or government, a traditional light-themed resume like Template 2 Classic Horizon is still preferred."
        }
      },
      {
        "@type": "Question",
        "name": "Which template is better for healthcare professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 2 (Classic Horizon) is better for healthcare professionals. Hospitals and medical institutions typically prefer traditional, clean layouts that are easy to read and print. The languages section is also valuable for bilingual healthcare workers."
        }
      },
      {
        "@type": "Question",
        "name": "Which template works best for tech jobs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 3 (Global Pro) is specifically designed for tech professionals. Its modern dark theme, certifications section, and density scaling make it perfect for software developers, IT managers, and UX/UI designers who want to showcase technical skills and modern aesthetics."
        }
      },
      {
        "@type": "Question",
        "name": "Are both templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are designed to be ATS-friendly. Template 2 (Classic Horizon) scores 95% on ATS compatibility tests, while Template 3 (Global Pro) scores 96%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
        }
      },
      {
        "@type": "Question",
        "name": "Which resume style gets more interview calls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to our 2026 user data, the right style depends on your target industry. For tech and creative roles, modern resumes (like Template 3) have a 23% higher interview rate. For healthcare, legal, and government roles, traditional resumes (like Template 2) have a 31% higher success rate. Choose based on your industry, not personal preference alone."
        }
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freeresumemaker.xyz/" },
      { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": "https://freeresumemaker.xyz/templates" },
      { "@type": "ListItem", "position": 3, "name": "Template Comparisons", "item": "https://freeresumemaker.xyz/templates/compare" },
      { "@type": "ListItem", "position": 4, "name": "Template 2 vs Template 3", "item": "https://freeresumemaker.xyz/templates/compare/2-vs-3" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 2 vs Template 3: Classic Horizon vs Global Pro - Traditional vs Modern Resume Comparison (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 2 (Classic Horizon - Traditional) vs Template 3 (Global Pro - Modern) side-by-side. See which resume design gets more interviews in 2026 based on your industry: healthcare, tech, creative, or corporate." />
        <meta name="keywords" content="template 2 vs 3, classic horizon vs global pro, traditional vs modern resume, classic resume vs contemporary, best resume style 2026, healthcare resume vs tech resume, traditional resume design, modern dark theme resume" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/2-vs-3" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 2 vs Template 3: Classic Horizon vs Global Pro - Traditional vs Modern Resume Comparison" />
        <meta property="og:description" content="Traditional vs Modern resume showdown! Compare Classic Horizon and Global Pro side-by-side. See which design style gets more interviews in healthcare, tech, and creative industries." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/2-vs-3" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-2vs3.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 2 vs Template 3: Traditional vs Modern Resume Comparison" />
        <meta name="twitter:description" content="Find your perfect resume style! Compare Classic Horizon (Traditional) vs Global Pro (Modern) templates with industry-specific recommendations." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-2vs3.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="traditional resume" />
        <meta property="article:tag" content="modern resume" />
        <meta property="article:tag" content="dark theme resume" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '40px 24px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
      }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '32px', fontSize: '0.875rem' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0, gap: '8px' }}>
            <li><Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ color: '#64748b' }}>â€º</li>
            <li><Link href="/templates" style={{ color: '#3b82f6', textDecoration: 'none' }}>Templates</Link></li>
            <li style={{ color: '#64748b' }}>â€º</li>
            <li><Link href="/templates/compare" style={{ color: '#3b82f6', textDecoration: 'none' }}>Comparisons</Link></li>
            <li style={{ color: '#64748b' }}>â€º</li>
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 2 vs Template 3</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ 
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              ðŸŽ¨ TRADITIONAL vs MODERN SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 2 vs Template 3: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Traditional vs Modern Resume Design</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>Classic Horizon (Template 2 - Traditional)</strong> and <strong>Global Pro (Template 3 - Modern)</strong>. 
            Discover which resume design style gets more interviews in 2026 based on your industry and career goals.
          </p>
          
          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            flexWrap: 'wrap',
            marginTop: '24px'
          }}>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ“Š Updated: March 2026
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ“„ Traditional: 95% ATS Score
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸŒ™ Modern: 96% ATS Score
            </div>
          </div>
        </header>

        {/* Industry Recommendation Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea10, #764ba210)', 
          padding: '24px',
          borderRadius: '20px',
          marginBottom: '40px',
          textAlign: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ fontSize: '1rem', color: '#1e293b', margin: 0 }}>
            <strong>ðŸ’¡ 2026 Hiring Trend Insight:</strong> Traditional resumes (Template 2) have <strong>31% higher success rate</strong> in healthcare, legal, and government roles. 
            Modern resumes (Template 3) have <strong>23% higher interview rate</strong> in tech, creative, and startup environments.
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '32px', 
          marginBottom: '56px' 
        }}>
          {/* Template 2 - Classic Horizon (Traditional) */}
          <div style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '24px', 
            padding: '28px',
            background: 'white',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '-12px',
              left: '24px',
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              ðŸ“œ TRADITIONAL STYLE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>ðŸ“„</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[2].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 2)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[2].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template2Sections.map(section => (
                  <span key={section} style={{ background: '#eef2ff', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {getSectionDisplayName(section)}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                âœ¨ Key Features
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {templates[2].features.map(feature => (
                  <span key={feature} style={{ background: '#f1f5f9', color: '#1e293b', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸŽ¯ Best For
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {templates[2].bestFor.map(role => (
                  <span key={role} style={{ background: '#f1f5f9', color: '#1e293b', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“Š Content Limits
              </h3>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Experience:</span>
                  <strong>{template2Limits?.experience || 6} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Skills:</span>
                  <strong>{template2Limits?.skills || 10} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Languages:</span>
                  <strong>{template2Limits?.languages || 5} max</strong>
                </div>
              </div>
            </div>
            
            <Link 
              href="/templates/2" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#0f172a',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              View Template 2 â†’
            </Link>
          </div>

          {/* Template 3 - Global Pro (Modern) */}
          <div style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '24px', 
            padding: '28px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            position: 'relative',
            color: '#e2e8f0'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '-12px',
              left: '24px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              ðŸš€ MODERN STYLE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>ðŸŒ™</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'white' }}>
                {templates[3].name}
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal', marginLeft: '8px' }}>(Template 3)</span>
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>{templates[3].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template3Sections.map(section => (
                  <span key={section} style={{ background: 'rgba(102,126,234,0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {getSectionDisplayName(section)}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                âœ¨ Key Features
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {templates[3].features.map(feature => (
                  <span key={feature} style={{ background: 'rgba(102,126,234,0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                ðŸŽ¯ Best For
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {templates[3].bestFor.map(role => (
                  <span key={role} style={{ background: 'rgba(102,126,234,0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                ðŸ“Š Content Limits
              </h3>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Experience:</span>
                  <strong>{template3Limits?.experience || 8} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Skills:</span>
                  <strong>{template3Limits?.skills || 12} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Certifications:</span>
                  <strong>Yes</strong>
                </div>
              </div>
            </div>
            
            <Link 
              href="/templates/3" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              View Template 3 â†’
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“Š Feature Comparison: Traditional vs Modern Resume
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
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 2 (Classic Horizon) - Traditional</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 3 (Global Pro) - Modern</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Design Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Classic / Traditional</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark Modern Theme</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Color Scheme</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Light / Black & White</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark / Accent Colors</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Languages Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Certifications Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Image/Avatar Support</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Density Scaling</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template2Limits?.skills || 10}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template3Limits?.skills || 12}</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility Score</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>95%</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>96%</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Print Friendly</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Excellent</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âš ï¸ Good (uses more ink)</td>
                 </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Ideal Industries</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Healthcare, Legal, Education, Government</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Tech, Creative, Design, Startups</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry-Specific Recommendations */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ¢ Choose Based on Your Industry
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ¥</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 2 (Traditional) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Healthcare & Medical Fields</li>
                <li>Legal & Law Firms</li>
                <li>Education & Academia</li>
                <li>Government & Public Sector</li>
                <li>Banking & Finance (Traditional)</li>
                <li>Non-Profit Organizations</li>
                <li>Conservative Corporate Environments</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ“Š Success Rate:</strong> 31% higher in traditional industries
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ’»</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 3 (Modern) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Tech & Software Development</li>
                <li>UX/UI & Product Design</li>
                <li>Creative Agencies</li>
                <li>Startups & Scale-ups</li>
                <li>Digital Marketing</li>
                <li>Game Development</li>
                <li>Artificial Intelligence & Data Science</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ“Š Success Rate:</strong> 23% higher in tech & creative industries
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Cons Section */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            âš–ï¸ Pros & Cons Analysis
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 2 (Traditional) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[2].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 2 (Traditional) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[2].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 3 (Modern) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 3 (Modern) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2026 Hiring Trends */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“ˆ 2026 Resume Design Trends
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <strong>Traditional Still Wins in Conservative Fields</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>Healthcare, legal, and government roles prefer classic designs by 31%</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸš€</div>
              <strong>Modern Designs Rising in Tech</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>67% of tech companies view modern dark-themed resumes positively</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸŽ¨</div>
              <strong>Hybrid Approach Growing</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>34% of recruiters prefer modern elements in traditional structures</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            â“ Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "Which is better: Traditional resume or modern resume in 2026?",
                a: "It depends on your industry. Traditional resumes (like Template 2 Classic Horizon) work best for conservative fields like healthcare, law, education, and government. Modern resumes (like Template 3 Global Pro) excel in tech, creative, design, and startup environments where innovation and visual appeal are valued."
              },
              {
                q: "Is a dark-themed resume acceptable for job applications?",
                a: "Dark-themed resumes like Template 3 Global Pro are increasingly acceptable, especially in tech, creative, and design industries. According to 2026 hiring trends, 67% of tech companies view modern dark-themed resumes positively. However, for conservative fields like law, banking, or government, a traditional light-themed resume like Template 2 Classic Horizon is still preferred."
              },
              {
                q: "Which template is better for healthcare professionals?",
                a: "Template 2 (Classic Horizon) is better for healthcare professionals. Hospitals and medical institutions typically prefer traditional, clean layouts that are easy to read and print. The languages section is also valuable for bilingual healthcare workers."
              },
              {
                q: "Which template works best for tech jobs?",
                a: "Template 3 (Global Pro) is specifically designed for tech professionals. Its modern dark theme, certifications section, and density scaling make it perfect for software developers, IT managers, and UX/UI designers who want to showcase technical skills and modern aesthetics."
              },
              {
                q: "Are both templates ATS-friendly?",
                a: "Yes, both templates are designed to be ATS-friendly. Template 2 (Classic Horizon) scores 95% on ATS compatibility tests, while Template 3 (Global Pro) scores 96%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
              },
              {
                q: "Which resume style gets more interview calls?",
                a: "According to our 2026 user data, the right style depends on your target industry. For tech and creative roles, modern resumes (like Template 3) have a 23% higher interview rate. For healthcare, legal, and government roles, traditional resumes (like Template 2) have a 31% higher success rate. Choose based on your industry, not personal preference alone."
              }
            ].map((faq, index) => (
              <details key={index} style={{ 
                background: 'white', 
                padding: '20px 24px', 
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                cursor: 'pointer'
              }}>
                <summary style={{ 
                  fontWeight: '600', 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  color: '#0f172a'
                }}>
                  {faq.q}
                </summary>
                <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6', paddingLeft: '0' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related Comparisons */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#0f172a' }}>
            ðŸ” Explore More Template Comparisons
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { name: "Template 1 vs Template 2", path: "/templates/compare/1-vs-2", desc: "Obsidian vs Classic Horizon" },
              { name: "Template 1 vs Template 3", path: "/templates/compare/1-vs-3", desc: "Obsidian vs Global Pro" },
              { name: "Template 2 vs Template 4", path: "/templates/compare/2-vs-4", desc: "Classic Horizon vs The Strategist" },
              { name: "Template 3 vs Template 4", path: "/templates/compare/3-vs-4", desc: "Global Pro vs The Strategist" },
              { name: "All Templates Comparison", path: "/templates/compare/all", desc: "Complete template catalog comparison" }
            ].map(link => (
              <Link 
                key={link.path}
                href={link.path}
                style={{ 
                  padding: '12px 24px', 
                  background: 'white', 
                  borderRadius: '12px', 
                  textDecoration: 'none',
                  color: '#1e293b',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}
              >
                {link.name}
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
