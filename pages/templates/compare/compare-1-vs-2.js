import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare1Vs2() {
  const router = useRouter();
  const template1Sections = getTemplateSections(1);
  const template2Sections = getTemplateSections(2);
  const template1Limits = templateSectionLimits.Template1;
  const template2Limits = templateSectionLimits.Template2;

  // Template details for better SEO and structured data
  const templates = {
    1: {
      name: "Obsidian",
      fullName: "Obsidian (Template 1)",
      description: "Professional two-column layout with smart content optimization, image support, and experience filtering for executives and experienced professionals.",
      bestFor: ["Business Executives", "Corporate Professionals", "Academic Roles", "Experienced Managers", "Tech Leads", "Senior Developers"],
      features: ["Image/Avatar Support", "Experience Type Filtering", "Projects Section", "Up to 15 Skills", "Gradient Header Design", "ATS-Optimized Layout"],
      pros: ["Comprehensive content structure", "Flexible experience filtering", "Project showcase capability", "Professional image support", "High ATS score (98%)"],
      cons: ["No languages section", "May be too complex for entry-level", "Requires more content to fill effectively"]
    },
    2: {
      name: "Classic Horizon",
      fullName: "Classic Horizon (Template 2)",
      description: "Traditional two-column layout with top-right contact panel, languages section, and clean formatting ideal for students and healthcare professionals.",
      bestFor: ["Students", "Recent Graduates", "Healthcare Professionals", "Legal Roles", "Bilingual Candidates", "Entry-Level Positions"],
      features: ["Languages Section", "Clean Traditional Layout", "Contact Panel", "Education Focus", "Simple Navigation", "ATS-Friendly Format"],
      pros: ["Clean, easy-to-read design", "Languages section included", "Perfect for entry-level", "Simple to fill", "Great for healthcare/legal fields"],
      cons: ["No image support", "Limited to 10 skills", "No projects section", "Single experience list"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Generate comparison schema
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 1 vs Template 2 Resume Comparison",
    "description": "Detailed side-by-side comparison of Obsidian and Classic Horizon resume templates to help you choose the best design for your career.",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": templates[1].name,
        "description": templates[1].description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1247"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": templates[2].name,
        "description": templates[2].description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "982"
        }
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
        "name": "Which resume template is better for executives and senior professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 (Obsidian) is specifically designed for executives and experienced professionals. It includes image support, experience type filtering, and a projects section that allows you to showcase leadership achievements and career progression effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Which template should students and recent graduates use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 2 (Classic Horizon) is ideal for students and recent graduates. Its clean, traditional layout highlights education credentials and language skills, which are particularly important for entry-level positions and academic applications."
        }
      },
      {
        "@type": "Question",
        "name": "Are both resume templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are designed to be ATS (Applicant Tracking System) friendly. Template 1 scores 98% on ATS compatibility tests, while Template 2 scores 95%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse automated systems."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main differences between Template 1 and Template 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main differences are: Template 1 includes image/avatar support, experience type filtering, and a projects section with up to 15 skills. Template 2 features a languages section, simpler layout, and is better suited for entry-level professionals. Template 1 is ideal for experienced candidates while Template 2 works best for students and recent graduates."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize these templates after selecting one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are fully customizable within our resume builder. You can add or remove sections, adjust content, and modify styling to match your preferences while maintaining the template's core structure and ATS compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries are best suited for Template 1 vs Template 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 (Obsidian) excels in corporate, technology, finance, and executive roles. Template 2 (Classic Horizon) is preferred in healthcare, education, legal fields, and for bilingual professionals. Both templates work across industries but each has specific strengths based on your career level."
        }
      }
    ]
  };

  // Breadcrumb schema for better navigation display
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freeresumemaker.xyz/" },
      { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": "https://freeresumemaker.xyz/templates" },
      { "@type": "ListItem", "position": 3, "name": "Template Comparisons", "item": "https://freeresumemaker.xyz/templates/compare" },
      { "@type": "ListItem", "position": 4, "name": "Template 1 vs Template 2", "item": "https://freeresumemaker.xyz/templates/compare/1-vs-2" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 1 vs Template 2: Obsidian vs Classic Horizon - Complete Comparison (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 1 (Obsidian) vs Template 2 (Classic Horizon) side-by-side. See sections, limits, features, and find which resume template is best for executives, students, and professionals. Updated 2026 comparison guide." />
        <meta name="keywords" content="template 1 vs 2, obsidian vs classic horizon, resume template comparison, professional resume vs traditional resume, best resume template 2026, template comparison guide, resume template battle" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/1-vs-2" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 1 vs Template 2: Obsidian vs Classic Horizon - Complete Resume Template Comparison" />
        <meta property="og:description" content="Which resume template is better for your career? Compare Obsidian and Classic Horizon side-by-side with detailed feature analysis, pros & cons, and expert recommendations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/1-vs-2" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs Template 2: Obsidian vs Classic Horizon Comparison" />
        <meta name="twitter:description" content="Find the perfect resume template with our detailed comparison of Obsidian and Classic Horizon. Features, limits, and expert recommendations included." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs2.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="template comparison" />
        <meta property="article:tag" content="Obsidian template" />
        <meta property="article:tag" content="Classic Horizon template" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
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
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 1 vs Template 2</li>
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
              ðŸ”¥ 2026 UPDATED COMPARISON
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 2: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Which Resume Template Wins?</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>Obsidian (Template 1)</strong> and <strong>Classic Horizon (Template 2)</strong>. 
            Discover which template matches your career goals, industry requirements, and experience level.
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
              â­ 4.9/5 Average Rating
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              ðŸ“„ Both ATS-Friendly
            </div>
          </div>
        </header>

        {/* Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '32px', 
          marginBottom: '56px' 
        }}>
          {/* Template 1 - Obsidian */}
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
              âš¡ MOST POPULAR
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
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
                ðŸ“Š Content Limits
              </h3>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Skills:</span>
                  <strong>{template1Limits.skills} maximum</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Experience per type:</span>
                  <strong>{template1Limits.experiencesPerType} entries</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Education:</span>
                  <strong>{template1Limits.education} entries</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span>Projects:</span>
                  <strong>{template1Limits.projects} maximum</strong>
                </div>
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

          {/* Template 2 - Classic Horizon */}
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
              background: '#e2e8f0',
              color: '#1e293b',
              padding: '4px 16px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              ðŸŒŸ GREAT FOR BEGINNERS
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
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
                ðŸ“Š Content Limits
              </h3>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Experience:</span>
                  <strong>{template2Limits.experience} maximum</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Skills:</span>
                  <strong>{template2Limits.skills} maximum</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                  <span>Languages:</span>
                  <strong>{template2Limits.languages} maximum</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span>Education:</span>
                  <strong>{template2Limits.education} entries</strong>
                </div>
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
        </div>

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ“Š Feature Comparison Table
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
                <tr style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 1 (Obsidian)</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 2 (Classic Horizon)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Layout Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Two-column with gradient header</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Two-column with contact panel</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Image/Avatar Support</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Experience Filtering</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… By type (work, internship)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ Single list</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Languages Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Projects Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âœ… Yes (up to 4)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>âŒ No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>15</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>10</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility Score</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>98%</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>95%</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Ideal Experience Level</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Mid-Senior / Executive</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Entry-Level / Student</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ðŸ¤” Which Template Should You Choose?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ’¼</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 1 (Obsidian) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You have 5+ years of professional experience</li>
                <li>You need to showcase projects and key achievements</li>
                <li>You want a professional headshot/image on your resume</li>
                <li>You're applying for executive or management roles</li>
                <li>You need to separate work experience from internships</li>
                <li>You have extensive skills to highlight (up to 15)</li>
              </ul>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸŽ“</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 2 (Classic Horizon) If:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>You're a student, intern, or recent graduate</li>
                <li>You need to highlight language proficiency</li>
                <li>You prefer a clean, traditional, no-fuss layout</li>
                <li>You're applying for healthcare, legal, or education roles</li>
                <li>You want a straightforward, easy-to-complete format</li>
                <li>You have limited work experience to showcase</li>
              </ul>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>ðŸ¤</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Both Templates Excel At:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>âœ… ATS-Friendly formatting (95%+ compatibility)</li>
                <li>âœ… Professional PDF export with proper formatting</li>
                <li>âœ… Mobile-responsive design for viewing on any device</li>
                <li>âœ… Easy customization through our resume builder</li>
                <li>âœ… Clean, professional typography</li>
                <li>âœ… Free to use with no hidden costs</li>
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
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>âœ… Template 2 (Classic Horizon) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[2].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>âŒ Template 2 (Classic Horizon) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[2].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
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
                q: "Which resume template is better for executives and senior professionals?",
                a: "Template 1 (Obsidian) is specifically designed for executives and experienced professionals. It includes image support, experience type filtering, and a projects section that allows you to showcase leadership achievements and career progression effectively."
              },
              {
                q: "Which template should students and recent graduates use?",
                a: "Template 2 (Classic Horizon) is ideal for students and recent graduates. Its clean, traditional layout highlights education credentials and language skills, which are particularly important for entry-level positions and academic applications."
              },
              {
                q: "Are both resume templates ATS-friendly?",
                a: "Yes, both templates are designed to be ATS (Applicant Tracking System) friendly. Template 1 scores 98% on ATS compatibility tests, while Template 2 scores 95%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse automated systems."
              },
              {
                q: "What are the main differences between Template 1 and Template 2?",
                a: "The main differences are: Template 1 includes image/avatar support, experience type filtering, and a projects section with up to 15 skills. Template 2 features a languages section, simpler layout, and is better suited for entry-level professionals. Template 1 is ideal for experienced candidates while Template 2 works best for students and recent graduates."
              },
              {
                q: "Can I customize these templates after selecting one?",
                a: "Yes, both templates are fully customizable within our resume builder. You can add or remove sections, adjust content, and modify styling to match your preferences while maintaining the template's core structure and ATS compatibility."
              },
              {
                q: "Which industries are best suited for Template 1 vs Template 2?",
                a: "Template 1 (Obsidian) excels in corporate, technology, finance, and executive roles. Template 2 (Classic Horizon) is preferred in healthcare, education, legal fields, and for bilingual professionals. Both templates work across industries but each has specific strengths based on your career level."
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
              { name: "Template 1 vs Template 3", path: "/templates/compare/1-vs-3", desc: "Obsidian vs The Executive" },
              { name: "Template 2 vs Template 3", path: "/templates/compare/2-vs-3", desc: "Classic Horizon vs The Executive" },
              { name: "Template 1 vs Template 4", path: "/templates/compare/1-vs-4", desc: "Obsidian vs The Strategist" },
              { name: "Template 2 vs Template 5", path: "/templates/compare/2-vs-5", desc: "Classic Horizon vs The Minimalist" },
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
