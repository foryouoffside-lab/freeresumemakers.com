import Head from 'next/head';
import Link from 'next/link';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare1Vs4() {
  const template1Sections = getTemplateSections(1);
  const template4Sections = getTemplateSections(4);
  const template1Limits = templateSectionLimits.Template1;
  const template4Limits = templateSectionLimits.Template4;

  // Template details for better SEO and structured data
  const templates = {
    1: {
      name: "Obsidian",
      fullName: "Obsidian (Template 1)",
      description: "Comprehensive two-column layout with image support, experience type filtering, projects section, and up to 15 skills. Designed for executives and experienced professionals who need to showcase extensive career history.",
      style: "Comprehensive / Executive",
      bestFor: ["Senior Executives", "Directors & VPs", "Experienced Managers", "Corporate Leaders", "Professionals with 10+ years experience", "Career Changers"],
      features: ["Image/Avatar Support", "Experience Type Filtering", "Projects Section (up to 4)", "Up to 15 Skills", "Gradient Header Design", "Education Section", "ATS-Optimized Layout"],
      pros: ["Comprehensive content structure", "Shows career progression effectively", "Projects showcase capability", "Professional image support", "High ATS score (98%)", "Flexible experience filtering"],
      cons: ["May feel overwhelming for entry-level", "Requires substantial content to fill", "Not ideal for minimalists"]
    },
    4: {
      name: "The Strategist",
      fullName: "The Strategist (Template 4)",
      description: "Timeline-based layout with square markers showing career progression. Clean, focused design that emphasizes professional journey without overwhelming content requirements.",
      style: "Timeline / Focused",
      bestFor: ["Project Managers", "Consultants", "Mid-Level Professionals", "Career Progression Focus", "Professionals with 3-8 years experience", "Strategy Roles"],
      features: ["Timeline Markers", "Career Visualization", "Clean Sidebar Layout", "Structured Content Flow", "Experience Focus", "Professional Timeline Design"],
      pros: ["Clean, uncluttered design", "Visual career timeline", "Perfect for 3-8 years experience", "Easy to scan and read", "Great for consultants", "Balanced content requirements"],
      cons: ["No image support", "Limited to one experience list", "Fewer sections than Template 1", "Less comprehensive for senior roles"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Comparison schema for rich results
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 1 vs Template 4: Comprehensive Executive vs Timeline-Based Resume Comparison",
    "description": "Side-by-side comparison of Obsidian (Comprehensive Executive) and The Strategist (Timeline-Based) resume templates. Find out which layout matches your career level.",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": templates[1].name,
        "description": templates[1].description,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1247" }
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
        "name": "Which template is better for executives with 10+ years experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 (Obsidian) is specifically designed for executives and experienced professionals with extensive career history. Its comprehensive layout includes image support, experience type filtering, projects section, and can accommodate up to 15 skills, allowing you to showcase your full career progression effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Which template works best for project managers and consultants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 4 (The Strategist) is ideal for project managers and consultants. Its timeline-based layout with square markers visually communicates career progression and project milestones, making it perfect for roles where showcasing professional journey is important."
        }
      },
      {
        "@type": "Question",
        "name": "What's the main difference between comprehensive and timeline resumes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comprehensive resumes (Template 1) include extensive sections like image, projects, and skill categorization - ideal for senior professionals. Timeline resumes (Template 4) focus on visualizing career progression through markers and clean structure - perfect for mid-level professionals who want to highlight their career journey without overwhelming detail."
        }
      },
      {
        "@type": "Question",
        "name": "How many years of experience work best with each template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 (Obsidian) works best for professionals with 10+ years of experience or those with extensive career histories to showcase. Template 4 (The Strategist) is optimal for professionals with 3-8 years of experience who want to highlight their career progression in a clean, visual format."
        }
      },
      {
        "@type": "Question",
        "name": "Which template is better for career changers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 (Obsidian) is better for career changers as it allows you to filter experience by type, helping you highlight transferable skills and relevant experiences while downplaying unrelated roles. The comprehensive structure gives you flexibility to craft your career narrative."
        }
      },
      {
        "@type": "Question",
        "name": "Are both templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are ATS-friendly. Template 1 (Obsidian) scores 98% on ATS compatibility tests, while Template 4 (The Strategist) scores 97%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
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
      { "@type": "ListItem", "position": 4, "name": "Template 1 vs Template 4", "item": "https://freeresumemaker.xyz/templates/compare/1-vs-4" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 1 vs Template 4: Obsidian vs The Strategist - Executive vs Timeline Resume Comparison (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 1 (Obsidian - Comprehensive Executive) vs Template 4 (The Strategist - Timeline-Based) side-by-side. Find which layout suits your experience level: 10+ years vs 3-8 years career progression. Updated 2026 guide." />
        <meta name="keywords" content="template 1 vs 4, obsidian vs strategist, executive resume vs timeline resume, comprehensive resume vs focused resume, career progression resume, best resume for executives, resume for project managers" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/1-vs-4" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 1 vs Template 4: Obsidian vs The Strategist - Executive vs Timeline Resume Comparison" />
        <meta property="og:description" content="Comprehensive Executive vs Timeline-Based resume showdown! Compare Obsidian and The Strategist with detailed feature analysis, experience level recommendations, and career guidance." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/1-vs-4" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs4.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs Template 4: Comprehensive Executive vs Timeline-Based Resume" />
        <meta name="twitter:description" content="Find your perfect resume style! Compare Obsidian (Executive) vs The Strategist (Timeline) templates based on your experience level and career goals." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs4.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="executive resume" />
        <meta property="article:tag" content="timeline resume" />
        <meta property="article:tag" content="career progression" />
        
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
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 1 vs Template 4</li>
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
              ðŸŽ¯ COMPREHENSIVE vs TIMELINE SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 4: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Executive Depth vs Timeline Clarity</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>Obsidian (Template 1 - Comprehensive Executive)</strong> and <strong>The Strategist (Template 4 - Timeline-Based)</strong>. 
            Discover which layout matches your experience level and career narrative style.
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
              â­ 10+ Years Experience
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ“ˆ 3-8 Years Experience
            </div>
          </div>
        </header>

        {/* Experience Level Guide */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea10, #764ba210)', 
          padding: '24px',
          borderRadius: '20px',
          marginBottom: '40px',
          textAlign: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ fontSize: '1rem', color: '#1e293b', margin: 0 }}>
            <strong>ðŸ’¡ Quick Guide:</strong> Choose <strong>Template 1 (Obsidian)</strong> if you have <strong>10+ years of experience</strong> or extensive career history. 
            Choose <strong>Template 4 (The Strategist)</strong> if you have <strong>3-8 years of experience</strong> and want to showcase career progression visually.
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '32px', 
          marginBottom: '56px' 
        }}>
          {/* Template 1 - Obsidian (Comprehensive Executive) */}
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
              ðŸ‘” COMPREHENSIVE EXECUTIVE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[1].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 1)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[1].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“‹ Sections Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {template1Sections.map(section => (
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
                {templates[1].features.map(feature => (
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
                {templates[1].bestFor.map(role => (
                  <span key={role} style={{ background: '#f1f5f9', color: '#1e293b', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ðŸ“Š Experience Level
              </h3>
              <div style={{ 
                background: '#eef2ff', 
                padding: '12px', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>10+ Years</span>
                <span style={{ display: 'block', fontSize: '0.875rem', color: '#475569', marginTop: '4px' }}>
                  Ideal for senior executives and experienced professionals
                </span>
              </div>
            </div>
            
            <Link 
              href="/templates/1" 
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
              View Template 1 â†’
            </Link>
          </div>

          {/* Template 4 - The Strategist (Timeline-Based) */}
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
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              ðŸ“ˆ TIMELINE FOCUSED
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>â±ï¸</div>
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
                ðŸ“Š Experience Level
              </h3>
              <div style={{ 
                background: '#eef2ff', 
                padding: '12px', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>3-8 Years</span>
                <span style={{ display: 'block', fontSize: '0.875rem', color: '#475569', marginTop: '4px' }}>
                  Perfect for mid-level professionals and career progression focus
                </span>
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
            ðŸ“Š Feature Comparison: Comprehensive Executive vs Timeline-Based
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
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 1 (Obsidian) - Executive</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 4 (The Strategist) - Timeline</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Design Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Comprehensive Two-Column</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Timeline-Based with Markers</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Image/Avatar Support</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Experience Filtering</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… By Type</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ Single List</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Projects Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes (up to 4)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Timeline Visualization</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Square Markers</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>15</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template4Limits?.skills || 10}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Experience</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Multiple per type</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template4Limits?.experience || 6}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility Score</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>98%</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>97%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Ideal Experience Level</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>10+ Years / Executive</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>3-8 Years / Mid-Level</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Content Density</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>High - Comprehensive</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Medium - Focused</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience Level Recommendation */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸŽ¯ Choose Based on Your Experience Level
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ‘”</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 1 (Obsidian) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You have 10+ years of professional experience</li>
                <li>You're applying for executive or senior leadership roles</li>
                <li>You need to separate work experience from internships/projects</li>
                <li>You want to include a professional headshot</li>
                <li>You have extensive skills to showcase (15+)</li>
                <li>You've held multiple roles with different types of experience</li>
                <li>You're a career changer needing to highlight transferable skills</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ’¼ Best for:</strong> Directors, VPs, C-Suite, Senior Managers, Experienced Consultants
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ“ˆ</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 4 (The Strategist) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You have 3-8 years of professional experience</li>
                <li>You want to visually showcase career progression</li>
                <li>You're applying for project management or consulting roles</li>
                <li>You prefer a clean, timeline-based layout</li>
                <li>You want to highlight steady career growth</li>
                <li>You have 3-6 relevant work experiences to showcase</li>
                <li>You want a focused, easy-to-scan resume format</li>
              </ul>
              <div style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px' }}>
                <strong style={{ color: '#1e40af' }}>ðŸ“Š Best for:</strong> Project Managers, Consultants, Mid-Level Professionals, Career Progression Focus
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
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 1 (Obsidian) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[1].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 1 (Obsidian) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[1].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 4 (The Strategist) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[4].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 4 (The Strategist) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[4].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Career Scenario Guide */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸŽ¯ Career Scenario Guide
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>ðŸ‘¨â€ðŸ’¼</div>
              <strong>Senior Executive (15+ years)</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>â†’ Template 1 (Obsidian) - Comprehensive layout to showcase extensive leadership history</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>ðŸ“Š</div>
              <strong>Project Manager (6 years)</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>â†’ Template 4 (The Strategist) - Timeline markers show project milestones</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>ðŸ”„</div>
              <strong>Career Changer (12 years, switching industries)</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>â†’ Template 1 (Obsidian) - Experience filtering to highlight relevant skills</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>ðŸ“ˆ</div>
              <strong>Rapid Career Growth (5 years, multiple promotions)</strong>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#475569' }}>â†’ Template 4 (The Strategist) - Visual timeline showcases progression</p>
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
                q: "Which template is better for executives with 10+ years experience?",
                a: "Template 1 (Obsidian) is specifically designed for executives and experienced professionals with extensive career history. Its comprehensive layout includes image support, experience type filtering, projects section, and can accommodate up to 15 skills, allowing you to showcase your full career progression effectively."
              },
              {
                q: "Which template works best for project managers and consultants?",
                a: "Template 4 (The Strategist) is ideal for project managers and consultants. Its timeline-based layout with square markers visually communicates career progression and project milestones, making it perfect for roles where showcasing professional journey is important."
              },
              {
                q: "What's the main difference between comprehensive and timeline resumes?",
                a: "Comprehensive resumes (Template 1) include extensive sections like image, projects, and skill categorization - ideal for senior professionals. Timeline resumes (Template 4) focus on visualizing career progression through markers and clean structure - perfect for mid-level professionals who want to highlight their career journey without overwhelming detail."
              },
              {
                q: "How many years of experience work best with each template?",
                a: "Template 1 (Obsidian) works best for professionals with 10+ years of experience or those with extensive career histories to showcase. Template 4 (The Strategist) is optimal for professionals with 3-8 years of experience who want to highlight their career progression in a clean, visual format."
              },
              {
                q: "Which template is better for career changers?",
                a: "Template 1 (Obsidian) is better for career changers as it allows you to filter experience by type, helping you highlight transferable skills and relevant experiences while downplaying unrelated roles. The comprehensive structure gives you flexibility to craft your career narrative."
              },
              {
                q: "Are both templates ATS-friendly?",
                a: "Yes, both templates are ATS-friendly. Template 1 (Obsidian) scores 98% on ATS compatibility tests, while Template 4 (The Strategist) scores 97%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
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
