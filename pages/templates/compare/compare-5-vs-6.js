import Head from 'next/head';
import Link from 'next/link';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare5Vs6() {
  const template5Sections = getTemplateSections(5);
  const template6Sections = getTemplateSections(6);
  const template5Limits = templateSectionLimits.Template5;
  const template6Limits = templateSectionLimits.Template6;

  // Template details for better SEO and structured data
  const templates = {
    5: {
      name: "The Minimalist",
      fullName: "The Minimalist (Template 5)",
      description: "Ultra-clean isolated sections with perfect contrast and ATS-optimized layout. Designed for professionals who want their content to speak for itself without visual distractions. Perfect for modern tech companies and traditional industries alike.",
      style: "Minimalist / Ultra-Clean",
      bestFor: ["Tech Professionals", "Students & Graduates", "Career Changers", "ATS-Required Applications", "Modern Companies", "Entry-Level Positions", "Creative Minimalists"],
      features: ["Isolated Sections", "ATS-Optimized Layout", "Perfect Dark/Light Contrast", "Clean Typography", "No Visual Distractions", "Maximum Readability", "Content-First Design"],
      pros: ["Highest ATS compatibility (99%)", "Ultra-clean and professional", "Content speaks for itself", "Prints perfectly on any printer", "Works for all industries", "Fast loading and rendering", "Easy to scan for recruiters"],
      cons: ["No visual flair or color", "May feel too simple for creative roles", "No image/avatar support", "Limited design customization", "May not stand out in design portfolios"]
    },
    6: {
      name: "The Architect",
      fullName: "The Architect (Template 6)",
      description: "Structured technical template with side-by-side education boxes, professional timeline, type badges, and connector lines. Built specifically for engineers, architects, and technical professionals who need to showcase complex credentials.",
      style: "Comprehensive / Technical",
      bestFor: ["Software Engineers", "System Architects", "Technical Leads", "Engineering Managers", "IT Professionals", "Hardware Engineers", "Technical Consultants"],
      features: ["Education Grid Layout", "Professional Timeline", "Type Badges", "Connector Lines", "Technical Skills Focus", "Project Highlight Sections", "Certifications Display"],
      pros: ["Comprehensive technical layout", "Visual hierarchy for complex info", "Education grid showcases credentials", "Timeline shows career progression", "Perfect for technical roles", "Type badges add visual organization", "Connector lines show relationships"],
      cons: ["May feel busy for non-technical roles", "Complex layout for simple resumes", "Less ATS-friendly (92%)", "May overwhelm some recruiters", "Not ideal for creative fields"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Comparison schema for rich results
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 5 vs Template 6: Minimalist vs Comprehensive Technical Resume Comparison",
    "description": "Side-by-side comparison of The Minimalist (Ultra-Clean) and The Architect (Comprehensive Technical) resume templates. Find the perfect balance for your career.",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": templates[5].name,
        "description": templates[5].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1123" }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": templates[6].name,
        "description": templates[6].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "945" }
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
        "name": "Which is better: Minimalist resume or comprehensive technical resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your industry and career level. Minimalist resumes (like Template 5 The Minimalist) work best for ATS-heavy applications, entry-level roles, and professionals who want content to speak for itself. Comprehensive technical resumes (like Template 6 The Architect) excel for engineers, architects, and technical professionals who need to showcase complex credentials and technical depth."
        }
      },
      {
        "@type": "Question",
        "name": "Are minimalist resumes better for ATS systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, minimalist resumes like Template 5 are highly ATS-friendly with a 99% compatibility score. Their clean layout, standard section headings, and lack of complex formatting make them ideal for passing through applicant tracking systems. This is especially important for large companies and government positions."
        }
      },
      {
        "@type": "Question",
        "name": "Which template is better for software engineers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 6 (The Architect) is specifically designed for software engineers and technical professionals. Its education grid, timeline layout, type badges, and connector lines help showcase technical projects, certifications, and career progression effectively. However, for ATS-heavy applications, Template 5 may be safer."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between minimalist and comprehensive resumes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimalist resumes (Template 5) focus on clean, isolated sections with no visual distractions - ideal when content is king. Comprehensive technical resumes (Template 6) include visual elements like education grids, timeline markers, type badges, and connector lines to organize complex information - perfect for engineers and technical professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Which template has better ATS compatibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 5 (The Minimalist) has superior ATS compatibility at 99%, making it one of the most ATS-friendly templates available. Template 6 (The Architect) has 92% compatibility due to its more complex visual elements like grids and connector lines."
        }
      },
      {
        "@type": "Question",
        "name": "Which template should I choose for my first job?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For entry-level positions and first jobs, Template 5 (The Minimalist) is often the better choice. Its clean, ATS-friendly format ensures your resume gets past automated systems, and its simplicity allows recruiters to focus on your education, skills, and potential rather than design elements."
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
      { "@type": "ListItem", "position": 4, "name": "Template 5 vs Template 6", "item": "https://freeresumemaker.xyz/templates/compare/5-vs-6" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 5 vs Template 6: The Minimalist vs The Architect - Ultra-Clean vs Comprehensive Technical Resume (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 5 (The Minimalist - Ultra-Clean) vs Template 6 (The Architect - Comprehensive Technical) side-by-side. See which resume style fits your career: ATS-optimized simplicity or detailed technical showcase. Updated 2026 guide." />
        <meta name="keywords" content="template 5 vs 6, minimalist vs comprehensive resume, simple vs detailed resume, the architect template, the minimalist template, ATS-friendly resume, technical resume template, software engineer resume, clean resume design" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/5-vs-6" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 5 vs Template 6: The Minimalist vs The Architect - Ultra-Clean vs Comprehensive Technical Resume" />
        <meta property="og:description" content="Minimalist vs Comprehensive Technical showdown! Compare The Minimalist and The Architect side-by-side. See which resume style gets past ATS and impresses recruiters." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/5-vs-6" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-5vs6.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 5 vs Template 6: Minimalist vs Comprehensive Technical Resume" />
        <meta name="twitter:description" content="Find your perfect resume style! Compare The Minimalist (Ultra-Clean ATS-Friendly) vs The Architect (Comprehensive Technical) with role-specific recommendations." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-5vs6.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="minimalist resume" />
        <meta property="article:tag" content="technical resume" />
        <meta property="article:tag" content="ATS-friendly resume" />
        
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
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 5 vs Template 6</li>
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
              âœ¨ ULTRA-CLEAN vs COMPREHENSIVE TECHNICAL SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 5 vs Template 6: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Minimalist Simplicity vs Technical Depth</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>The Minimalist (Template 5 - Ultra-Clean ATS-Friendly)</strong> and <strong>The Architect (Template 6 - Comprehensive Technical)</strong>. 
            Discover whether content-focused simplicity or structured technical depth is right for your career.
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
              âœ¨ Minimalist: 99% ATS Score
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ—ï¸ Architect: 92% ATS Score
            </div>
          </div>
        </header>

        {/* ATS Alert Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #10b98110, #05966910)', 
          padding: '24px',
          borderRadius: '20px',
          marginBottom: '40px',
          textAlign: 'center',
          border: '1px solid #10b98130'
        }}>
          <p style={{ fontSize: '1rem', color: '#065f46', margin: 0 }}>
            <strong>ðŸ¤– ATS Compatibility Alert:</strong> 
            <span style={{ display: 'inline-block', marginLeft: '12px' }}>
              Template 5 (The Minimalist) has <strong>99% ATS score</strong> - highest among all templates. 
              Template 6 (The Architect) has <strong>92% ATS score</strong> - still good, but best for direct applications.
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
          {/* Template 5 - The Minimalist */}
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              âœ¨ BEST ATS SCORE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>âœ¨</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[5].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 5)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[5].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template5Sections.map(section => (
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
                {templates[5].features.map(feature => (
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
                {templates[5].bestFor.map(role => (
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
                  <strong>{template5Limits?.experience || 6} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Skills:</span>
                  <strong>{template5Limits?.skills || 12} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Education:</span>
                  <strong>{template5Limits?.education || 3} entries</strong>
                </div>
              </div>
            </div>
            
            <Link 
              href="/templates/5" 
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
              View Template 5 â†’
            </Link>
          </div>

          {/* Template 6 - The Architect */}
          <div style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '24px', 
            padding: '28px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            position: 'relative'
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
              ðŸ—ï¸ TECHNICAL FOCUS
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>ðŸ—ï¸</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[6].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 6)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[6].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template6Sections.map(section => (
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
                {templates[6].features.map(feature => (
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
                {templates[6].bestFor.map(role => (
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
                  <strong>{template6Limits?.experience || 8} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Skills:</span>
                  <strong>{template6Limits?.skills || 15} max</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>Education Grid:</span>
                  <strong>Side-by-side layout</strong>
                </div>
              </div>
            </div>
            
            <Link 
              href="/templates/6" 
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
              View Template 6 â†’
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“Š Feature Comparison: Minimalist vs Comprehensive Technical
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
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 5 (The Minimalist)</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 6 (The Architect)</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Design Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Ultra-Clean / Isolated Sections</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Structured / Technical Grid</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Visual Elements</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>None - Pure Content</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Education Grid, Type Badges, Connector Lines</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>ðŸ† 99% (Highest)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>92% (Good)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Education Display</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Standard List</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Side-by-Side Grid</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Timeline Visualization</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Professional Timeline</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Type Badges</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template5Limits?.skills || 12}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template6Limits?.skills || 15}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Experience</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template5Limits?.experience || 6}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template6Limits?.experience || 8}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Print Friendly</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Excellent (Minimal Ink)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Good (Standard Ink)</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Best For</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>ATS Applications, Entry-Level, All Industries</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Engineers, Architects, Technical Roles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Decision Guide */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸŽ¯ How to Choose: Minimalist Simplicity vs Technical Depth
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>âœ¨</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 5 (The Minimalist) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You're applying through online portals/ATS systems</li>
                <li>You want maximum ATS compatibility (99%)</li>
                <li>You're an entry-level candidate or student</li>
                <li>You prefer clean, distraction-free design</li>
                <li>You want your content to speak for itself</li>
                <li>You're applying to multiple industries</li>
                <li>You want a resume that prints perfectly</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ’¡ Perfect for:</strong> ATS-heavy applications, entry-level roles, career changers
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ—ï¸</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 6 (The Architect) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You're a software engineer, architect, or technical professional</li>
                <li>You have complex credentials to showcase</li>
                <li>You want visual hierarchy for technical information</li>
                <li>You're applying directly to technical roles</li>
                <li>You need to highlight multiple certifications</li>
                <li>You want to show career progression visually</li>
                <li>You're applying to startups or tech companies</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ’¡ Perfect for:</strong> Software Engineers, System Architects, Technical Leads
              </div>
            </div>
          </div>
        </div>

        {/* When to Use Each Template */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“‹ When to Use Each Template
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981', marginBottom: '12px' }}>âœ¨ Template 5 Scenarios</div>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Large corporate applications (Google, Amazon, Microsoft)</li>
                <li>Government positions</li>
                <li>Entry-level positions</li>
                <li>Career change applications</li>
                <li>When ATS is your primary concern</li>
                <li>Multiple industry applications</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#667eea', marginBottom: '12px' }}>ðŸ—ï¸ Template 6 Scenarios</div>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Technical roles (Engineer, Architect, Developer)</li>
                <li>Startup and tech company applications</li>
                <li>When you have 5+ years of experience</li>
                <li>Complex project portfolios</li>
                <li>Multiple certifications to showcase</li>
                <li>Direct applications (not through ATS portals)</li>
              </ul>
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
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 5 (Minimalist) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[5].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 5 (Minimalist) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[5].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 6 (Architect) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[6].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 6 (Architect) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[6].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ATS Deep Dive */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ¤– ATS Compatibility Deep Dive
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>âœ¨</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>99%</div>
              <strong>Template 5 ATS Score</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Perfect for Workday, Taleo, Greenhouse, Lever
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ—ï¸</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>92%</div>
              <strong>Template 6 ATS Score</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Good for direct applications, still passes most ATS
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b' }}>Industry Avg</div>
              <strong>85% ATS Score</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>
                Both templates exceed industry average
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
                q: "Which is better: Minimalist resume or comprehensive technical resume?",
                a: "It depends on your industry and career level. Minimalist resumes (like Template 5 The Minimalist) work best for ATS-heavy applications, entry-level roles, and professionals who want content to speak for itself. Comprehensive technical resumes (like Template 6 The Architect) excel for engineers, architects, and technical professionals who need to showcase complex credentials and technical depth."
              },
              {
                q: "Are minimalist resumes better for ATS systems?",
                a: "Yes, minimalist resumes like Template 5 are highly ATS-friendly with a 99% compatibility score. Their clean layout, standard section headings, and lack of complex formatting make them ideal for passing through applicant tracking systems. This is especially important for large companies and government positions."
              },
              {
                q: "Which template is better for software engineers?",
                a: "Template 6 (The Architect) is specifically designed for software engineers and technical professionals. Its education grid, timeline layout, type badges, and connector lines help showcase technical projects, certifications, and career progression effectively. However, for ATS-heavy applications, Template 5 may be safer."
              },
              {
                q: "What's the difference between minimalist and comprehensive resumes?",
                a: "Minimalist resumes (Template 5) focus on clean, isolated sections with no visual distractions - ideal when content is king. Comprehensive technical resumes (Template 6) include visual elements like education grids, timeline markers, type badges, and connector lines to organize complex information - perfect for engineers and technical professionals."
              },
              {
                q: "Which template has better ATS compatibility?",
                a: "Template 5 (The Minimalist) has superior ATS compatibility at 99%, making it one of the most ATS-friendly templates available. Template 6 (The Architect) has 92% compatibility due to its more complex visual elements like grids and connector lines."
              },
              {
                q: "Which template should I choose for my first job?",
                a: "For entry-level positions and first jobs, Template 5 (The Minimalist) is often the better choice. Its clean, ATS-friendly format ensures your resume gets past automated systems, and its simplicity allows recruiters to focus on your education, skills, and potential rather than design elements."
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
              { name: "Template 1 vs Template 5", path: "/templates/compare/1-vs-5", desc: "Obsidian vs The Minimalist" },
              { name: "Template 2 vs Template 5", path: "/templates/compare/2-vs-5", desc: "Classic Horizon vs The Minimalist" },
              { name: "Template 3 vs Template 6", path: "/templates/compare/3-vs-6", desc: "Global Pro vs The Architect" },
              { name: "Template 4 vs Template 6", path: "/templates/compare/4-vs-6", desc: "The Strategist vs The Architect" },
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
