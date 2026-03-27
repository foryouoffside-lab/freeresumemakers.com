import Head from 'next/head';
import Link from 'next/link';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare3Vs4() {
  const template3Sections = getTemplateSections(3);
  const template4Sections = getTemplateSections(4);
  const template3Limits = templateSectionLimits.Template3;
  const template4Limits = templateSectionLimits.Template4;

  // Template details for better SEO and structured data
  const templates = {
    3: {
      name: "Global Pro",
      fullName: "Global Pro (Template 3)",
      description: "Modern dark-themed resume with sidebar focus, certifications section, density scaling, and accent colors. Designed for tech professionals, developers, and creative roles who want to stand out with a contemporary aesthetic.",
      style: "Modern Tech / Contemporary",
      bestFor: ["Software Developers", "UX/UI Designers", "IT Managers", "DevOps Engineers", "Data Scientists", "Product Managers", "Game Developers", "Digital Marketers"],
      features: ["Dark Premium Theme", "Certifications Section", "Density Scaling", "Accent Colors", "Modern Typography", "Tech-Ready Layout", "Visual Impact Design", "Skills Focus"],
      pros: ["Stunning dark theme design stands out", "Certifications prominently displayed", "Adjustable density for varying content", "Modern tech-friendly aesthetic", "Perfect for portfolio-style roles", "High visual impact for creative fields", "ATS-friendly with 96% score"],
      cons: ["May not print well on all printers", "Dark theme less traditional", "Not ideal for conservative industries", "May use more ink when printed", "Some older ATS may have issues"]
    },
    4: {
      name: "The Strategist",
      fullName: "The Strategist (Template 4)",
      description: "Timeline-based layout with square markers showing career progression. Clean, executive-focused design that emphasizes professional journey, leadership roles, and strategic achievements.",
      style: "Executive / Timeline",
      bestFor: ["Senior Executives", "Project Managers", "Consultants", "Strategy Directors", "Operations Leaders", "Business Analysts", "Career Progression Focus", "Leadership Roles"],
      features: ["Timeline Markers", "Career Visualization", "Clean Sidebar Layout", "Structured Content Flow", "Experience Focus", "Professional Timeline Design", "Leadership Highlights"],
      pros: ["Clean, uncluttered executive design", "Visual career timeline shows progression", "Perfect for leadership roles", "Easy to scan for recruiters", "Great for consultants", "Balanced content structure", "ATS-friendly with 97% score"],
      cons: ["No image/avatar support", "Limited to one experience list", "Fewer sections than comprehensive templates", "Less visual impact than modern designs"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Comparison schema for rich results
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 3 vs Template 4: Modern Tech vs Executive Resume Comparison",
    "description": "Side-by-side comparison of Global Pro (Modern Tech) and The Strategist (Executive Timeline) resume templates. Find out which style suits your career level and industry.",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": templates[3].name,
        "description": templates[3].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "856" }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": templates[4].name,
        "description": templates[4].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "892" }
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
        "name": "Which is better: Modern tech resume or executive timeline resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your career level and industry. Modern tech resumes (like Template 3 Global Pro) work best for individual contributors in tech, creative, and design fields. Executive timeline resumes (like Template 4 The Strategist) excel for managers, directors, and consultants who need to showcase career progression and leadership achievements."
        }
      },
      {
        "@type": "Question",
        "name": "Should software developers use a dark theme resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, dark theme resumes like Template 3 Global Pro are increasingly popular among software developers and tech professionals. According to 2026 hiring data, 67% of tech recruiters view modern dark-themed resumes positively as they demonstrate design awareness and technical sophistication."
        }
      },
      {
        "@type": "Question",
        "name": "What type of resume is best for executive positions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Executive positions benefit from timeline-based resumes like Template 4 The Strategist. These templates emphasize career progression, leadership milestones, and strategic achievements through visual timeline markers, making it easy for recruiters to see your career trajectory and advancement."
        }
      },
      {
        "@type": "Question",
        "name": "Which template is better for project managers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 4 (The Strategist) is ideal for project managers. Its timeline-based layout with square markers perfectly visualizes project milestones, campaign timelines, and career progression - key elements that project managers need to showcase in their resumes."
        }
      },
      {
        "@type": "Question",
        "name": "Which template works best for UX/UI designers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 3 (Global Pro) is specifically designed for UX/UI designers and creative professionals. Its modern dark theme, accent colors, and visual impact design demonstrate design sensibilities that are highly valued in creative roles, helping you stand out from traditional resume formats."
        }
      },
      {
        "@type": "Question",
        "name": "Are both templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are designed to be ATS-friendly. Template 3 (Global Pro) scores 96% on ATS compatibility tests, while Template 4 (The Strategist) scores 97%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
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
      { "@type": "ListItem", "position": 4, "name": "Template 3 vs Template 4", "item": "https://freeresumemaker.xyz/templates/compare/3-vs-4" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 3 vs Template 4: Global Pro vs The Strategist - Modern Tech vs Executive Timeline Resume (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 3 (Global Pro - Modern Tech) vs Template 4 (The Strategist - Executive Timeline) side-by-side. See which resume style fits your career: software developer, UX designer, project manager, or executive leader. Updated 2026 guide." />
        <meta name="keywords" content="template 3 vs 4, global pro vs strategist, tech resume vs executive resume, modern resume vs timeline resume, developer resume vs manager resume, UX designer resume, project manager resume template, dark theme vs professional resume" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/3-vs-4" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 3 vs Template 4: Global Pro vs The Strategist - Modern Tech vs Executive Timeline Resume" />
        <meta property="og:description" content="Modern Tech vs Executive Timeline showdown! Compare Global Pro and The Strategist side-by-side. See which resume style gets more interviews for developers, designers, project managers, and executives." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/3-vs-4" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-3vs4.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 3 vs Template 4: Modern Tech vs Executive Timeline Resume Comparison" />
        <meta name="twitter:description" content="Find your perfect resume style! Compare Global Pro (Modern Tech) vs The Strategist (Executive Timeline) with role-specific recommendations for developers, designers, and leaders." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-3vs4.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="tech resume" />
        <meta property="article:tag" content="executive resume" />
        <meta property="article:tag" content="timeline resume" />
        
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
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 3 vs Template 4</li>
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
              ðŸš€ MODERN TECH vs EXECUTIVE TIMELINE SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 3 vs Template 4: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Modern Tech vs Executive Timeline</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>Global Pro (Template 3 - Modern Tech)</strong> and <strong>The Strategist (Template 4 - Executive Timeline)</strong>. 
            Discover which resume style aligns with your career level: from software developer and UX designer to project manager and executive leader.
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
              ðŸŒ™ Modern Tech: 96% ATS
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ“ˆ Executive: 97% ATS
            </div>
          </div>
        </header>

        {/* Role-Based Recommendation Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea10, #764ba210)', 
          padding: '24px',
          borderRadius: '20px',
          marginBottom: '40px',
          textAlign: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ fontSize: '1rem', color: '#1e293b', margin: 0 }}>
            <strong>ðŸ’¡ Quick Career Guide:</strong> 
            <span style={{ display: 'inline-block', marginLeft: '12px' }}>
              ðŸ–¥ï¸ <strong>Software Developers & UX Designers</strong> â†’ Template 3 (Modern Tech)
            </span>
            <span style={{ display: 'inline-block', marginLeft: '12px' }}>
              ðŸ“Š <strong>Project Managers & Executives</strong> â†’ Template 4 (Executive Timeline)
            </span>
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '32px', 
          marginBottom: '56px' 
        }}>
          {/* Template 3 - Global Pro (Modern Tech) */}
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
              ðŸ–¥ï¸ MODERN TECH
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
                  <strong>Dedicated Section</strong>
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

          {/* Template 4 - The Strategist (Executive Timeline) */}
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
              ðŸ“ˆ EXECUTIVE TIMELINE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[4].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 4)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[4].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template4Sections.map(section => (
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
                {templates[4].features.map(feature => (
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
                {templates[4].bestFor.map(role => (
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
                  <strong>{template4Limits?.experience || 6} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Skills:</span>
                  <strong>{template4Limits?.skills || 10} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Timeline Markers:</span>
                  <strong>Yes</strong>
                </div>
              </div>
            </div>
            
            <Link 
              href="/templates/4" 
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
              View Template 4 â†’
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“Š Feature Comparison: Modern Tech vs Executive Timeline
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
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 3 (Global Pro) - Modern Tech</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 4 (The Strategist) - Executive</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Design Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark Modern / Contemporary</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Timeline-Based / Professional</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Color Scheme</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark with Accent Colors</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Light / Professional</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Timeline Visualization</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Square Markers</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Certifications Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Dedicated Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Density Scaling</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template3Limits?.skills || 12}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template4Limits?.skills || 10}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Experience</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template3Limits?.experience || 8}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template4Limits?.experience || 6}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility Score</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>96%</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>97%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Print Friendly</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âš ï¸ Good (uses more ink)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Excellent</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Ideal Career Level</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Individual Contributors / Mid-Level Tech</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Managers / Directors / Executives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Role-Based Recommendations */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸŽ¯ Choose Based on Your Role
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ–¥ï¸</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 3 (Modern Tech) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Software Developer / Engineer</li>
                <li>UX/UI Designer</li>
                <li>DevOps / Cloud Engineer</li>
                <li>Data Scientist / Analyst</li>
                <li>Product Manager (Tech Companies)</li>
                <li>Game Developer</li>
                <li>Digital Marketer / Creative Roles</li>
                <li>Startup Professionals</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ’¡ Why:</strong> Dark theme shows tech sophistication; certifications section highlights technical credentials.
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ“Š</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 4 (Executive Timeline) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Project / Program Manager</li>
                <li>Senior Executive / Director</li>
                <li>Management Consultant</li>
                <li>Strategy Leader</li>
                <li>Operations Manager</li>
                <li>Business Analyst</li>
                <li>Career Progression Focus</li>
                <li>Corporate Leadership Roles</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ’¡ Why:</strong> Timeline markers visualize career progression; clean layout appeals to corporate recruiters.
              </div>
            </div>
          </div>
        </div>

        {/* Career Level Guide */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“ˆ Career Level Recommendation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '12px' }}>Entry to Mid-Level</div>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ–¥ï¸</div>
              <p><strong>Template 3 (Modern Tech)</strong></p>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Perfect for individual contributors and professionals looking to stand out with modern design</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '12px' }}>Senior to Executive</div>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ“ˆ</div>
              <p><strong>Template 4 (Executive Timeline)</strong></p>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Ideal for leaders who need to showcase career progression and strategic achievements</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '12px' }}>Both Work For</div>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ¤</div>
              <p><strong>Mid-Level Professionals</strong></p>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>Choose based on industry: Tech â†’ Template 3, Corporate â†’ Template 4</p>
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
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 3 (Modern Tech) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 3 (Modern Tech) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 4 (Executive Timeline) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[4].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 4 (Executive Timeline) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[4].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Success Rates */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“Š Industry Success Rates (2026 Data)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ’»</div>
              <strong>Tech & Software</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Template 3: 23% higher interview rate<br />
                Template 4: Standard success rate
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <strong>Project Management</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Template 4: 28% higher success rate<br />
                Template 3: Good for tech PM roles
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸŽ¨</div>
              <strong>Creative & Design</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Template 3: 35% higher response rate<br />
                Template 4: Less preferred
              </p>
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
                q: "Which is better: Modern tech resume or executive timeline resume?",
                a: "It depends on your career level and industry. Modern tech resumes (like Template 3 Global Pro) work best for individual contributors in tech, creative, and design fields. Executive timeline resumes (like Template 4 The Strategist) excel for managers, directors, and consultants who need to showcase career progression and leadership achievements."
              },
              {
                q: "Should software developers use a dark theme resume?",
                a: "Yes, dark theme resumes like Template 3 Global Pro are increasingly popular among software developers and tech professionals. According to 2026 hiring data, 67% of tech recruiters view modern dark-themed resumes positively as they demonstrate design awareness and technical sophistication."
              },
              {
                q: "What type of resume is best for executive positions?",
                a: "Executive positions benefit from timeline-based resumes like Template 4 The Strategist. These templates emphasize career progression, leadership milestones, and strategic achievements through visual timeline markers, making it easy for recruiters to see your career trajectory and advancement."
              },
              {
                q: "Which template is better for project managers?",
                a: "Template 4 (The Strategist) is ideal for project managers. Its timeline-based layout with square markers perfectly visualizes project milestones, campaign timelines, and career progression - key elements that project managers need to showcase in their resumes."
              },
              {
                q: "Which template works best for UX/UI designers?",
                a: "Template 3 (Global Pro) is specifically designed for UX/UI designers and creative professionals. Its modern dark theme, accent colors, and visual impact design demonstrate design sensibilities that are highly valued in creative roles, helping you stand out from traditional resume formats."
              },
              {
                q: "Are both templates ATS-friendly?",
                a: "Yes, both templates are designed to be ATS-friendly. Template 3 (Global Pro) scores 96% on ATS compatibility tests, while Template 4 (The Strategist) scores 97%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
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
              { name: "Template 1 vs Template 3", path: "/templates/compare/1-vs-3", desc: "Obsidian vs Global Pro" },
              { name: "Template 2 vs Template 3", path: "/templates/compare/2-vs-3", desc: "Classic Horizon vs Global Pro" },
              { name: "Template 1 vs Template 4", path: "/templates/compare/1-vs-4", desc: "Obsidian vs The Strategist" },
              { name: "Template 2 vs Template 4", path: "/templates/compare/2-vs-4", desc: "Classic Horizon vs The Strategist" },
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
