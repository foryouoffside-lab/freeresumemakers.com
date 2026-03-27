import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getTemplateSections, getSectionDisplayName, templateSectionLimits } from '../../../lib/templateConfig';

export default function Compare1Vs3() {
  const template1Sections = getTemplateSections(1);
  const template3Sections = getTemplateSections(3);
  const template1Limits = templateSectionLimits.Template1;
  const template3Limits = templateSectionLimits.Template3;

  // Template details for better SEO and structured data
  const templates = {
    1: {
      name: "Obsidian",
      fullName: "Obsidian (Template 1)",
      description: "Professional two-column layout with image support, gradient header, and experience type filtering. Designed for executives, business professionals, and corporate roles.",
      style: "Professional / Corporate",
      bestFor: ["Business Executives", "Corporate Professionals", "Academic Roles", "Finance & Banking", "Law Professionals"],
      features: ["Image/Avatar Support", "Experience Type Filtering", "Gradient Header", "Projects Section", "Up to 15 Skills", "ATS-Optimized"],
      pros: ["Professional corporate appearance", "Image/avatar support", "Experience filtering by type", "Projects showcase capability", "High ATS score (98%)"],
      cons: ["No dark mode option", "Traditional design may feel conservative", "Requires professional headshot for best results"]
    },
    3: {
      name: "Global Pro",
      fullName: "Global Pro (Template 3)",
      description: "Modern dark-themed resume with sidebar focus, certifications section, and density scaling. Perfect for tech professionals, designers, and creative roles.",
      style: "Modern / Contemporary",
      bestFor: ["Tech Professionals", "Software Developers", "UX/UI Designers", "Creative Directors", "IT Managers", "Startup Founders"],
      features: ["Dark Premium Theme", "Certifications Section", "Density Scaling", "Accent Colors", "Modern Typography", "Tech-Ready Layout"],
      pros: ["Stunning dark theme design", "Certifications prominently displayed", "Adjustable density for content", "Modern tech-friendly aesthetic", "Stand out from traditional resumes"],
      cons: ["May not print well on all printers", "Dark theme less traditional", "Not ideal for conservative industries"]
    }
  };

  // Current date for schema markup
  const currentDate = new Date().toISOString().split('T')[0];
  const comparisonDate = "2026-03-24";

  // Comparison schema for rich results
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Template 1 vs Template 3: Professional vs Modern Resume Comparison",
    "description": "Side-by-side comparison of Obsidian (Professional) and Global Pro (Modern) resume templates. Find out which style suits your career best.",
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
        "name": "Which is better: Professional resume or Modern resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your industry and role. Professional resumes (like Template 1 Obsidian) work best for corporate, finance, legal, and traditional industries. Modern resumes (like Template 3 Global Pro) excel in tech, creative, design, and startup environments where innovation and visual appeal matter."
        }
      },
      {
        "@type": "Question",
        "name": "Is a dark-themed resume acceptable for job applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dark-themed resumes like Template 3 Global Pro are increasingly acceptable, especially in tech, creative, and design industries. However, for conservative fields like law, banking, or government, a traditional light-themed resume like Template 1 Obsidian is still preferred. Both templates are ATS-friendly when exported correctly."
        }
      },
      {
        "@type": "Question",
        "name": "Which template is better for tech professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 3 Global Pro is specifically designed for tech professionals. Its modern dark theme, certifications section, and density scaling make it perfect for software developers, IT managers, and UX/UI designers who want to showcase technical skills and modern aesthetics."
        }
      },
      {
        "@type": "Question",
        "name": "Which template works best for executive positions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Template 1 Obsidian is ideal for executive positions. Its professional two-column layout, image support for professional headshots, and experience filtering capabilities allow executives to showcase leadership roles, career progression, and professional achievements effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Are both templates ATS-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both templates are designed to be ATS-friendly. Template 1 Obsidian scores 98% on ATS compatibility, while Template 3 Global Pro scores 96%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the dark theme in Template 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Template 3 Global Pro includes density scaling and accent color options. You can adjust the color scheme, spacing, and content density to match your preferences while maintaining the modern aesthetic and ATS compatibility."
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
      { "@type": "ListItem", "position": 4, "name": "Template 1 vs Template 3", "item": "https://freeresumemaker.xyz/templates/compare/1-vs-3" }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Template 1 vs Template 3: Obsidian vs Global Pro - Professional vs Modern Resume Comparison (2026) | FreeResumeMakers</title>
        <meta name="description" content="Compare Template 1 (Obsidian - Professional) vs Template 3 (Global Pro - Modern) side-by-side. See features, sections, and find which resume style works best for corporate, tech, and creative roles. Updated 2026 comparison." />
        <meta name="keywords" content="template 1 vs 3, obsidian vs global pro, professional resume vs modern resume, classic vs contemporary resume, corporate resume vs tech resume, best resume style 2026, resume template comparison" />
        <meta name="author" content="FreeResumeMakers" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://freeresumemaker.xyz/templates/compare/1-vs-3" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Template 1 vs Template 3: Obsidian vs Global Pro - Professional vs Modern Resume Comparison" />
        <meta property="og:description" content="Professional vs Modern resume showdown! Compare Obsidian and Global Pro side-by-side with detailed feature analysis, industry recommendations, and expert insights." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://freeresumemaker.xyz/templates/compare/1-vs-3" />
        <meta property="og:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs3.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FreeResumeMakers" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Template 1 vs Template 3: Professional vs Modern Resume Comparison" />
        <meta name="twitter:description" content="Find your perfect resume style! Compare Obsidian (Professional) vs Global Pro (Modern) templates with features, pros & cons, and industry recommendations." />
        <meta name="twitter:image" content="https://freeresumemaker.xyz/assets/og/template-comparison-1vs3.jpg" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={comparisonDate} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="FreeResumeMakers Team" />
        <meta property="article:section" content="Resume Template Comparisons" />
        <meta property="article:tag" content="resume templates" />
        <meta property="article:tag" content="professional resume" />
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
            <li style={{ color: '#64748b' }}>›</li>
            <li><Link href="/templates" style={{ color: '#3b82f6', textDecoration: 'none' }}>Templates</Link></li>
            <li style={{ color: '#64748b' }}>›</li>
            <li><Link href="/templates/compare" style={{ color: '#3b82f6', textDecoration: 'none' }}>Comparisons</Link></li>
            <li style={{ color: '#64748b' }}>›</li>
            <li style={{ color: '#1e293b', fontWeight: '500' }}>Template 1 vs Template 3</li>
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
              🔥 PROFESSIONAL vs MODERN SHOWDOWN
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '800',
            marginBottom: '20px',
            color: '#0f172a',
            lineHeight: '1.2'
          }}>
            Template 1 vs Template 3: <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Professional vs Modern Resume</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#475569', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete side-by-side comparison of <strong>Obsidian (Template 1 - Professional)</strong> and <strong>Global Pro (Template 3 - Modern)</strong>. 
            Discover which resume style aligns with your industry, career goals, and personal brand.
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
              📊 Updated: March 2026
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              💼 Professional Style
            </div>
            <div style={{ background: '#f1f5f9', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem' }}>
              🚀 Modern Style
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
          {/* Template 1 - Obsidian (Professional) */}
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
              💼 PROFESSIONAL STYLE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📄</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#0f172a' }}>
                {templates[1].name}
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', marginLeft: '8px' }}>(Template 1)</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.5' }}>{templates[1].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                📋 Sections Included
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
                ✨ Key Features
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
                🎯 Best For
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
              View Template 1 →
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
              🚀 MODERN STYLE
            </div>
            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🌙</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'white' }}>
                {templates[3].name}
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal', marginLeft: '8px' }}>(Template 3)</span>
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>{templates[3].description}</p>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                📋 Sections Included
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
                ✨ Key Features
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
                🎯 Best For
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {templates[3].bestFor.map(role => (
                  <span key={role} style={{ background: 'rgba(102,126,234,0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem' }}>
                    {role}
                  </span>
                ))}
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
              View Template 3 →
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            📊 Feature Comparison: Professional vs Modern
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
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 1 (Obsidian) - Professional</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Template 3 (Global Pro) - Modern</th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Design Style</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Classic Professional</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark Modern Theme</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Color Scheme</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Light / Gradient Header</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Dark / Accent Colors</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Image Support</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✓ Yes</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✗ No</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Certifications Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✗ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✓ Yes</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Experience Filtering</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✓ By Type</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✗ Single List</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Density Scaling</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✗ No</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✓ Yes</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Projects Section</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✓ Yes (up to 4)</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>✗ No</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Maximum Skills</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>15</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>{template3Limits?.skills || 12}</td>
                 </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>ATS Compatibility Score</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>98%</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>96%</td>
                 </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '16px', fontWeight: '500' }}>Ideal Industries</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Corporate, Finance, Law, Academia</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>Tech, Creative, Design, Startups</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Recommendation Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          padding: '40px',
          borderRadius: '28px',
          marginBottom: '56px'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            🏢 Which Template Should You Choose Based on Your Industry?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🏦</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 1 (Professional) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Banking & Finance</li>
                <li>Law & Legal Services</li>
                <li>Corporate Executive Roles</li>
                <li>Government & Public Sector</li>
                <li>Academic & Research Positions</li>
                <li>Healthcare Administration</li>
                <li>Consulting Firms</li>
              </ul>
              <p style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px', color: '#1e40af' }}>
                💡 These industries value traditional professionalism and often prefer conservative resume formats.
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💻</div>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>Choose Template 3 (Modern) For:</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                <li>Software Development & Engineering</li>
                <li>UX/UI Design & Creative Roles</li>
                <li>Digital Marketing & Social Media</li>
                <li>Startups & Tech Companies</li>
                <li>Game Development</li>
                <li>Artificial Intelligence & Data Science</li>
                <li>Creative Agencies</li>
              </ul>
              <p style={{ marginTop: '16px', padding: '12px', background: '#eef2ff', borderRadius: '12px', color: '#1e40af' }}>
                💡 Modern industries appreciate innovation and visual appeal - dark themes show you're tech-savvy.
              </p>
            </div>
          </div>
        </div>

        {/* Pros & Cons Section */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#0f172a', textAlign: 'center' }}>
            ⚖️ Pros & Cons Analysis
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>✓ Template 1 (Obsidian) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[1].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>✗ Template 1 (Obsidian) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[1].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>✓ Template 3 (Global Pro) Pros</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 style={{ color: '#0f172a', marginTop: '20px', marginBottom: '16px' }}>✗ Template 3 (Global Pro) Cons</h3>
              <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px' }}>
                {templates[3].cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#0f172a', textAlign: 'center' }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "Which is better: Professional resume or Modern resume?",
                a: "It depends on your industry and role. Professional resumes (like Template 1 Obsidian) work best for corporate, finance, legal, and traditional industries. Modern resumes (like Template 3 Global Pro) excel in tech, creative, design, and startup environments where innovation and visual appeal matter."
              },
              {
                q: "Is a dark-themed resume acceptable for job applications?",
                a: "Dark-themed resumes like Template 3 Global Pro are increasingly acceptable, especially in tech, creative, and design industries. However, for conservative fields like law, banking, or government, a traditional light-themed resume like Template 1 Obsidian is still preferred. Both templates are ATS-friendly when exported correctly."
              },
              {
                q: "Which template is better for tech professionals?",
                a: "Template 3 Global Pro is specifically designed for tech professionals. Its modern dark theme, certifications section, and density scaling make it perfect for software developers, IT managers, and UX/UI designers who want to showcase technical skills and modern aesthetics."
              },
              {
                q: "Which template works best for executive positions?",
                a: "Template 1 Obsidian is ideal for executive positions. Its professional two-column layout, image support for professional headshots, and experience filtering capabilities allow executives to showcase leadership roles, career progression, and professional achievements effectively."
              },
              {
                q: "Are both templates ATS-friendly?",
                a: "Yes, both templates are designed to be ATS-friendly. Template 1 Obsidian scores 98% on ATS compatibility, while Template 3 Global Pro scores 96%. Both use clean layouts, standard section headings, and avoid complex formatting that could confuse applicant tracking systems."
              },
              {
                q: "Can I customize the dark theme in Template 3?",
                a: "Yes, Template 3 Global Pro includes density scaling and accent color options. You can adjust the color scheme, spacing, and content density to match your preferences while maintaining the modern aesthetic and ATS compatibility."
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
            🔍 Explore More Template Comparisons
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { name: "Template 1 vs Template 2", path: "/templates/compare/1-vs-2", desc: "Obsidian vs Classic Horizon" },
              { name: "Template 2 vs Template 3", path: "/templates/compare/2-vs-3", desc: "Classic Horizon vs Global Pro" },
              { name: "Template 1 vs Template 4", path: "/templates/compare/1-vs-4", desc: "Obsidian vs The Strategist" },
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