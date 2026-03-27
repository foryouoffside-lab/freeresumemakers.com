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
          <span>Ã¢â‚¬Âº</span>
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
          {[
            { title: 'Software Engineering', icon: 'Ã°Å¸â€™Â»', count: '2 examples', slug: 'software-engineering', color: '#e3f2fd', description: 'React, Python, Java, AWS, DevOps' },
            { title: 'Marketing', icon: 'Ã°Å¸â€œÂ±', count: '2 examples', slug: 'marketing', color: '#f3e5f5', description: 'SEO, Social Media, Content Strategy, Analytics' },
            { title: 'Sales', icon: 'Ã°Å¸Â¤Â', count: '2 examples', slug: 'sales', color: '#e8f5e8', description: 'B2B, Account Management, Business Development' },
            { title: 'Healthcare', icon: 'Ã°Å¸ÂÂ¥', count: '2 examples', slug: 'healthcare', color: '#fff3e0', description: 'Nursing, Administration, Clinical Roles' },
            { title: 'Education', icon: 'Ã°Å¸â€œÅ¡', count: '2 examples', slug: 'education', color: '#e1f5fe', description: 'Teaching, Administration, Curriculum Design' },
            { title: 'Finance', icon: 'Ã°Å¸â€™Â°', count: '2 examples', slug: 'finance', color: '#fce4ec', description: 'Accounting, Investment Banking, Analysis' },
            { title: 'Design', icon: 'Ã°Å¸Å½Â¨', count: '2 examples', slug: 'design', color: '#e0f2f1', description: 'UI/UX, Graphic Design, Product Design' },
            { title: 'Administrative', icon: 'Ã°Å¸â€œâ€¹', count: '2 examples', slug: 'administrative', color: '#fff3e0', description: 'Executive Assistant, Office Management' }
          ].map((category, index) => (
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
                {category.icon}
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
                  View Examples Ã¢â€ â€™
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
            <span style={{ fontSize: '32px' }}>Ã°Å¸â€™Â¡</span>
            Tips for Using These Examples
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { 
                icon: 'Ã¢Å“ÂÃ¯Â¸Â', 
                title: 'Customize Content',
                tip: 'Adapt the examples to match your unique experience and achievements. Don\'t copy-paste directly.' 
              },
              { 
                icon: 'Ã°Å¸Å½Â¯', 
                title: 'Focus on Achievements',
                tip: 'Notice how each example highlights quantifiable results and specific accomplishments, not just duties.' 
              },
              { 
                icon: 'Ã°Å¸â€œÅ ', 
                title: 'Use Metrics',
                tip: 'Include numbers, percentages, and data to demonstrate your impact, just like in these examples.' 
              },
              { 
                icon: 'Ã°Å¸â€Â', 
                title: 'Industry Keywords',
                tip: 'Pay attention to industry-specific keywords and incorporate them into your own resume.' 
              }
            ].map((item, index) => (
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
                  {item.icon}
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
            <span>Ã°Å¸â€Â</span>
            Browse by Industry
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {[
              { name: 'Software Engineering', slug: 'software-engineering', icon: 'Ã°Å¸â€™Â»' },
              { name: 'Marketing', slug: 'marketing', icon: 'Ã°Å¸â€œÂ±' },
              { name: 'Sales', slug: 'sales', icon: 'Ã°Å¸Â¤Â' },
              { name: 'Healthcare', slug: 'healthcare', icon: 'Ã°Å¸ÂÂ¥' },
              { name: 'Education', slug: 'education', icon: 'Ã°Å¸â€œÅ¡' },
              { name: 'Finance', slug: 'finance', icon: 'Ã°Å¸â€™Â°' },
              { name: 'Design', slug: 'design', icon: 'Ã°Å¸Å½Â¨' },
              { name: 'Administrative', slug: 'administrative', icon: 'Ã°Å¸â€œâ€¹' }
            ].map((item, index) => (
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
                <span>{item.icon}</span>
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
            No sign-up required Ã¢â‚¬Â¢ 100% Free Ã¢â‚¬Â¢ PDF Download
          </p>
        </div>
      </div>
    </>
  );
}
