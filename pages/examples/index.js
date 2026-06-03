// pages/examples/index.js
import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Head from 'next/head';

export default function ExamplesPage() {
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
        "name": "Resume Examples",
        "item": "https://freeresumemaker.xyz/examples"
      }
    ]
  };

  // ItemList schema for professions
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Resume Examples by Profession",
    "description": "Browse professional resume examples for various industries and career levels",
    "numberOfItems": 8,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Software Engineering Resume Examples" },
      { "@type": "ListItem", "position": 2, "name": "Marketing Resume Examples" },
      { "@type": "ListItem", "position": 3, "name": "Sales Resume Examples" },
      { "@type": "ListItem", "position": 4, "name": "Healthcare Resume Examples" },
      { "@type": "ListItem", "position": 5, "name": "Education Resume Examples" },
      { "@type": "ListItem", "position": 6, "name": "Finance Resume Examples" },
      { "@type": "ListItem", "position": 7, "name": "Design Resume Examples" },
      { "@type": "ListItem", "position": 8, "name": "Administrative Resume Examples" }
    ]
  };

  // Helper functions for modern inline vector SVG icons
  const getCategoryIcon = (slug, size = '36px') => {
    const icons = {
      'software-engineering': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      'marketing': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
      'sales': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      'healthcare': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
      'education': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
      'finance': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
      'design': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="11.5" cy="7.5" r="1.5"></circle><circle cx="16.5" cy="9.5" r="1.5"></circle><circle cx="15.5" cy="14.5" r="1.5"></circle></svg>,
      'administrative': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
    };
    return icons[slug] || null;
  };

  const getTipIcon = (iconName, size = '24px') => {
    const icons = {
      'pencil': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>,
      'target': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
      'chart': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
      'search': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    };
    return icons[iconName] || null;
  };

  // Profession categories data
  const categories = [
    { title: 'Software Engineering', count: '2 examples', slug: 'software-engineering', color: '#e3f2fd', description: 'React, Python, Java, AWS, DevOps' },
    { title: 'Marketing', count: '2 examples', slug: 'marketing', color: '#f3e5f5', description: 'SEO, Social Media, Content Strategy, Analytics' },
    { title: 'Sales', count: '2 examples', slug: 'sales', color: '#e8f5e8', description: 'B2B, Account Management, Business Development' },
    { title: 'Healthcare', count: '2 examples', slug: 'healthcare', color: '#fff3e0', description: 'Nursing, Administration, Clinical Roles' },
    { title: 'Education', count: '2 examples', slug: 'education', color: '#e1f5fe', description: 'Teaching, Administration, Curriculum Design' },
    { title: 'Finance', count: '2 examples', slug: 'finance', color: '#fce4ec', description: 'Accounting, Investment Banking, Analysis' },
    { title: 'Design', count: '2 examples', slug: 'design', color: '#e0f2f1', description: 'UI/UX, Graphic Design, Product Design' },
    { title: 'Administrative', count: '2 examples', slug: 'administrative', color: '#fff3e0', description: 'Executive Assistant, Office Management' }
  ];

  // Tips data
  const tips = [
    { 
      icon: 'pencil', 
      title: 'Customize Content',
      tip: 'Adapt the examples to match your unique experience and achievements. Do not copy-paste directly.' 
    },
    { 
      icon: 'target', 
      title: 'Focus on Achievements',
      tip: 'Notice how each example highlights quantifiable results and specific accomplishments, not just duties.' 
    },
    { 
      icon: 'chart', 
      title: 'Use Metrics',
      tip: 'Include numbers, percentages, and data to demonstrate your impact, just like in these examples.' 
    },
    { 
      icon: 'search', 
      title: 'Industry Keywords',
      tip: 'Pay attention to industry-specific keywords and incorporate them into your own resume.' 
    }
  ];

  // Industry quick links
  const industries = [
    { name: 'Software Engineering', slug: 'software-engineering' },
    { name: 'Marketing', slug: 'marketing' },
    { name: 'Sales', slug: 'sales' },
    { name: 'Healthcare', slug: 'healthcare' },
    { name: 'Education', slug: 'education' },
    { name: 'Finance', slug: 'finance' },
    { name: 'Design', slug: 'design' },
    { name: 'Administrative', slug: 'administrative' }
  ];

  return (
    <>
      <SEO 
        title="Resume Examples by Profession | Industry-Specific Resume Samples 2026"
        description="Browse real resume examples for different professions and industries. Get inspired by our collection of successful resumes for software engineering, marketing, sales, healthcare, education, finance, design, and administrative roles."
        keywords="resume examples, resume samples, professional resumes, CV examples, job resume templates, industry-specific resumes, resume by profession"
        canonical="https://freeresumemaker.xyz/examples"
        image="https://freeresumemaker.xyz/images/examples/resume-examples-og.jpg"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
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
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Resume Examples</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Resume Examples by Profession
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse our collection of real resume examples tailored to your industry. 
            Each example includes complete templates with experience, skills, and achievements.
          </p>
        </div>

        {/* Profession Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/professions/${category.slug}`}
              style={{
                padding: '24px',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,112,243,0.15)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
                background: category.color,
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getCategoryIcon(category.slug, "36px")}
              </div>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '20px',
                color: '#1a1a1a',
                fontWeight: 600
              }}>
                {category.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                {category.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '8px'
              }}>
                <p style={{ 
                  margin: 0, 
                  color: '#0070f3', 
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  {category.count}
                </p>
                <span style={{
                  color: '#0070f3',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  View Examples →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Tips Section */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#1a1a1a'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', color: '#eab308' }}><path d="M9 18h6M10 22h4M15.09 14c.18-.33.3-.68.37-1.04.18-1 .07-2-.32-2.93-.38-.93-1.07-1.69-1.92-2.16C12.38 7.4 11.22 7.37 10.36 7.8c-.85.43-1.48 1.15-1.78 2.04-.3.88-.32 1.83-.06 2.73.1.36.26.7.47 1.02.5.75.56 1.7.17 2.51H14.9c-.38-.8-.32-1.75.19-2.5z"></path></svg>
            Tips for Using These Examples
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {tips.map((item, index) => (
              <div 
                key={index} 
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '36px',
                  background: '#f0f7ff',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getTipIcon(item.icon, "28px")}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: '0 0 6px 0', 
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#666', 
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Quick Links */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '20px',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            Browse by Industry
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {industries.map((item, index) => (
              <Link
                key={index}
                href={`/professions/${item.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  background: '#f8f9fa',
                  borderRadius: '30px',
                  border: '1px solid #e9ecef',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                  e.currentTarget.style.borderColor = '#0070f3';
                  e.currentTarget.style.color = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.color = '#333';
                }}
              >
                <span>{getCategoryIcon(item.slug, "16px")}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '20px',
          padding: '50px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            marginBottom: '16px',
            fontWeight: 700
          }}>
            Ready to Create Your Resume?
          </h2>
          <p style={{ 
            fontSize: '18px', 
            marginBottom: '30px', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Use our resume builder to create a professional, ATS-friendly resume in minutes. 
            Choose from 20 professionally designed templates.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            }}
          >
            Start Building Now
          </Link>
          <p style={{
            fontSize: '14px',
            marginTop: '20px',
            opacity: 0.8
          }}>
            No sign-up required • 100% Free • PDF Download
          </p>
        </div>
      </div>
    </>
  );
}
