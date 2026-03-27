import React from 'react';
// pages/professions/sales.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function SalesExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 sales resume examples with complete template data
  const resumeExamples = [
    {
      id: 1,
      title: 'Enterprise Sales Manager Resume',
      level: 'senior',
      specialization: 'enterprise-sales',
      experience: '10+ years',
      description: 'Professional resume sample for an Enterprise Sales Manager with B2B technology sales expertise. Features $12M+ ARR generation, President\'s Club achievements, and C-level relationship management.',
      skills: ['B2B Sales', 'Enterprise Solutions', 'Contract Negotiation', 'Sales Strategy', 'Team Leadership', 'C-Level Presentations'],
      template: {
        name: 'VIKRAM MEHTA',
        credentials: 'Enterprise Sales Leader | President\'s Club Winner (3x)',
        email: 'vikram.mehta@email.com',
        phone: '+91 98765 43214',
        linkedin: 'linkedin.com/in/vikrammehta',
        location: 'Mumbai, India',
        summary: 'Enterprise Sales Manager with 10+ years of experience in B2B technology sales, specializing in enterprise solution selling and C-level relationship management. Proven track record of generating $12M+ in ARR, consistently exceeding quotas by 140%, and building high-performing sales teams. President\'s Club winner for three consecutive years.',
        education: [
          {
            degree: 'MBA in Sales & Marketing',
            institution: 'Indian School of Business (ISB), Hyderabad',
            year: '2012-2014',
            score: '8.8/10'
          },
          {
            degree: 'Bachelor of Engineering (Computer Science)',
            institution: 'Pune Institute of Technology, Pune',
            year: '2008-2012',
            score: '82%'
          }
        ],
        certifications: [
          'Salesforce Certified Administrator',
          'MEDDIC Sales Methodology Certified',
          'Challenger Sales Certification',
          'Negotiation Mastery - Harvard Online',
          'Strategic Sales Management - Stanford Graduate School',
          'Value-Based Selling Certification'
        ],
        skills: {
          core: ['Enterprise Sales', 'Solution Selling', 'Contract Negotiation', 'Pipeline Management', 'Forecasting', 'Account Planning'],
          tools: ['Salesforce', 'HubSpot', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Outreach.io', 'Tableau', 'Clari'],
          industries: ['SaaS', 'Enterprise Software', 'Cloud Solutions', 'IT Services', 'FinTech', 'Cyber Security'],
          soft: ['C-Level Relationships', 'Team Leadership', 'Strategic Planning', 'Client Retention', 'Cross-Functional Collaboration', 'Mentorship']
        },
        experience: [
          {
            title: 'Enterprise Sales Manager',
            company: 'TechSolutions Enterprise, Mumbai',
            period: '2020-Present',
            points: [
              'Generated $12M+ in ARR over 3 years, achieving 140% of annual quota consistently',
              'Led and mentored team of 8 enterprise account executives, with 3 team members promoted to senior roles',
              'Closed 20+ enterprise deals worth $500K+ each, including 5 Fortune 500 clients',
              'Developed comprehensive sales playbook adopted company-wide, increasing win rates by 35%',
              'Negotiated multi-year enterprise contracts resulting in $8M in committed revenue',
              'Achieved President\'s Club recognition for three consecutive years (2021, 2022, 2023)',
              'Reduced average sales cycle from 9 months to 6 months through strategic qualification'
            ]
          },
          {
            title: 'Senior Account Executive',
            company: 'CloudFirst Technologies, Bangalore',
            period: '2016-2020',
            points: [
              'Closed $5.2M in total contract value across 4 years with 98% client retention rate',
              'Acquired 50+ enterprise clients including 3 Fortune 500 companies',
              'Expanded existing accounts through strategic cross-selling, generating $2M in upsell revenue',
              'Named "Top Performer" for 3 consecutive years (2017-2019)',
              'Managed $10M+ portfolio of enterprise accounts with 100% renewal rate',
              'Mentored 5 junior account executives, 2 of whom were promoted to senior roles'
            ]
          }
        ],
        achievements: [
          'President\'s Club Winner (2021, 2022, 2023) - Top 5% of global sales force',
          'Sales Leader of the Year 2022 - TechSolutions Enterprise',
          'Closed largest deal in company history ($1.2M ACV)',
          'Achieved 100% quota attainment for 12 consecutive quarters',
          'Speaker at Sales Excellence Summit 2023 on "Building High-Performance Enterprise Sales Teams"'
        ],
        quotaHistory: {
          '2023': '$4.2M / $3.0M (140%)',
          '2022': '$3.8M / $2.8M (136%)',
          '2021': '$3.5M / $2.5M (140%)',
          '2020': '$2.8M / $2.0M (140%)'
        },
        tools: ['Salesforce', 'HubSpot', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Outreach.io', 'Clari', 'Tableau', 'Gong.io', 'DocuSign'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Marathi (Conversational)']
      }
    },
    {
      id: 2,
      title: 'SaaS Account Executive Resume',
      level: 'mid',
      specialization: 'saas-sales',
      experience: '5 years',
      description: 'Sample resume for a SaaS Account Executive specializing in B2B software sales. Features 140% quota attainment, 35% close rate, and rapid promotion from SDR to Account Executive.',
      skills: ['SaaS Sales', 'B2B Sales', 'Consultative Selling', 'Pipeline Management', 'Lead Generation', 'Client Onboarding'],
      template: {
        name: 'NEHA GUPTA',
        credentials: 'SaaS Account Executive | Top Performer 2023',
        email: 'neha.gupta@email.com',
        phone: '+91 98765 43215',
        linkedin: 'linkedin.com/in/nehagupta',
        location: 'Bangalore, India',
        summary: 'SaaS Account Executive with 5+ years of experience in B2B software sales, specializing in consultative selling and client relationship management. Track record of exceeding quotas by 140%, reducing sales cycle by 50%, and achieving 35% close rate. Promoted from SDR to Account Executive within 18 months.',
        education: [
          {
            degree: 'Bachelor of Commerce (Hons)',
            institution: 'Shri Ram College of Commerce (SRCC), Delhi University',
            year: '2015-2018',
            score: '8.9/10'
          },
          {
            degree: 'Post Graduate Diploma in Sales Management',
            institution: 'MICA, Ahmedabad',
            year: '2018-2019',
            score: 'Distinction'
          }
        ],
        certifications: [
          'Salesforce Certified Associate',
          'HubSpot Sales Software Certification',
          'Sandler Sales Training',
          'SPIN Selling Certified',
          'MEDDIC Sales Methodology Certification',
          'Negotiation Skills Certification - LinkedIn Learning'
        ],
        skills: {
          core: ['SaaS Sales', 'B2B Sales', 'Lead Generation', 'Pipeline Management', 'Closing', 'Account Management'],
          tools: ['Salesforce', 'HubSpot', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Lusha', 'Outreach.io', 'Calendly'],
          products: ['CRM Software', 'Marketing Automation', 'Analytics Tools', 'Collaboration Platforms', 'Project Management Tools'],
          soft: ['Consultative Selling', 'Relationship Building', 'Time Management', 'Cold Calling', 'Active Listening', 'Presentation Skills']
        },
        experience: [
          {
            title: 'Account Executive',
            company: 'SaaSPro Solutions, Bangalore',
            period: '2021-Present',
            points: [
              'Generated $2.8M in total revenue, achieving 140% average quota attainment',
              'Closed 35+ new logo accounts with average deal size of $85,000',
              'Reduced average sales cycle from 45 days to 21 days through improved qualification and value selling',
              'Achieved 35% close rate, significantly above industry average of 20%',
              'Generated $800K in upsell revenue from existing accounts through strategic account expansion',
              'Ranked #1 out of 25 Account Executives in 2023 performance rankings',
              'Maintained 95% customer satisfaction score across all closed deals'
            ]
          },
          {
            title: 'Sales Development Representative',
            company: 'SaaSPro Solutions, Bangalore',
            period: '2019-2021',
            points: [
              'Promoted to Account Executive within 18 months - fastest promotion in team history',
              'Generated 1,500+ qualified leads, achieving 200% of monthly targets for 6 consecutive months',
              'Achieved 30% conversion rate from qualified lead to sales opportunity',
              'Developed outbound prospecting playbook adopted by entire SDR team',
              'Mentored 3 new SDR hires, all of whom exceeded ramp-up targets'
            ]
          }
        ],
        achievements: [
          'Rookie of the Year 2020 - SaaSPro Solutions',
          'Top Performer Award Q1, Q3 2023',
          'Closed first $500K enterprise deal within 6 months of promotion',
          'Mentor to 3 new SDRs, all promoted to Account Executive roles',
          'Speaker at SaaS Sales Summit 2023 on "From SDR to AE: The Fast Track Journey"'
        ],
        performanceMetrics: {
          'Quota Attainment': '140%',
          'Win Rate': '35%',
          'Average Deal Size': '$85,000',
          'Sales Cycle': '21 days',
          'Customer Retention': '95%'
        },
        tools: ['Salesforce', 'HubSpot', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Outreach.io', 'Lusha', 'Calendly', 'Gong.io', 'Chorus.ai'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Kannada (Conversational)']
      }
    }
  ];

  // Breadcrumb schema for structured data
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sales Resumes",
        "item": "https://freeresumemaker.xyz/professions/sales"
      }
    ]
  };

  // ItemList schema for examples listing
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sales Resume Examples",
    "description": "Browse professional sales resume examples for enterprise sales managers and SaaS account executives. Sample resumes with quota attainment, revenue generation metrics, and sales methodology certifications. Learn from real examples to create your winning sales resume for 2026.",
    "numberOfItems": resumeExamples.length,
    "itemListElement": resumeExamples.map((example, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": example.title,
      "description": example.description,
      "url": `https://freeresumemaker.xyz/professions/sales/${example.id}`
    }))
  };

  const handleViewExample = (example) => {
    setSelectedExample(example);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExamples = () => {
    setSelectedExample(null);
  };

  // If an example is selected, show the detailed template view
  if (selectedExample) {
    return (
      <>
        <SEO 
          title={`${selectedExample.title} | Sales Resume Example 2026 | Professional Sample`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience in ${selectedExample.specialization === 'enterprise-sales' ? 'enterprise B2B sales, C-level negotiations' : 'SaaS sales, consultative selling'}. Includes quota history, revenue metrics, and sales certifications. Customize with our free resume builder.`}
          keywords={`${selectedExample.title.toLowerCase()}, sales resume, enterprise sales resume, SaaS sales resume, account executive resume, B2B sales resume, sales manager resume, sales CV, professional sales resume, sales resume 2026, ATS friendly sales resume`}
          canonical={`https://freeresumemaker.xyz/professions/sales/${selectedExample.id}`}
          noindex={false}
        />

        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </Head>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '40px 20px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}>
          {/* Breadcrumb Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
            <span>›</span>
            <Link href="/professions/sales" style={{ color: '#666', textDecoration: 'none' }}>Sales Resumes</Link>
            <span>›</span>
            <span style={{ color: '#0070f3' }}>{selectedExample.title}</span>
          </nav>

          {/* Back button */}
          <button
            onClick={handleBackToExamples}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#666',
              textDecoration: 'none',
              marginBottom: '30px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef';
              e.currentTarget.style.color = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
              e.currentTarget.style.color = '#666';
            }}
          >
            ← Back to All Sales Resume Examples
          </button>

          {/* Template Header */}
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid #e9ecef',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h1 style={{ fontSize: '24px', marginBottom: '8px', color: '#1a1a1a' }}>
                {selectedExample.title}: Complete Sample with {selectedExample.experience} Experience
              </h1>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                Professional sales resume template for {selectedExample.specialization === 'enterprise-sales' ? 'enterprise sales management roles' : 'SaaS account executive positions'} | Updated for 2026 hiring season
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <span style={{
                background: '#e3f2fd',
                color: '#0070f3',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'capitalize'
              }}>
                {selectedExample.specialization === 'enterprise-sales' ? 'Enterprise Sales' : 'SaaS Sales'}
              </span>
            </div>
          </div>

          {/* Resume Template */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '32px', marginBottom: '4px', color: '#1a1a1a' }}>
                {selectedExample.template.name}
              </h1>
              {selectedExample.template.credentials && (
                <p style={{ fontSize: '16px', color: '#0070f3', marginBottom: '8px', fontWeight: 500 }}>
                  {selectedExample.template.credentials}
                </p>
              )}
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span>{selectedExample.template.email}</span>
                <span>|</span>
                <span>{selectedExample.template.phone}</span>
                <span>|</span>
                <span>{selectedExample.template.linkedin}</span>
              </div>
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
                {selectedExample.template.location}
              </div>
              
              {/* Professional Summary */}
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                borderLeft: '4px solid #0070f3'
              }}>
                <p style={{ margin: 0, color: '#333', fontStyle: 'italic' }}>
                  {selectedExample.template.summary}
                </p>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                EDUCATION
              </h2>
              {selectedExample.template.education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>{edu.degree}</p>
                  <p style={{ color: '#666', marginBottom: '2px' }}>{edu.institution} | {edu.year}</p>
                  {edu.score && <p style={{ color: '#666' }}>Score: {edu.score}</p>}
                </div>
              ))}
            </div>

            {/* Professional Certifications */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                SALES CERTIFICATIONS
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {selectedExample.template.certifications.map((cert, index) => (
                  <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{cert}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                SALES SKILLS & TOOLS
              </h2>
              {selectedExample.template.skills.core && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Core Sales Skills:</strong> {selectedExample.template.skills.core.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.tools && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Sales Technology Stack:</strong> {selectedExample.template.skills.tools.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.industries && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Industry Expertise:</strong> {selectedExample.template.skills.industries.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.products && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Product Expertise:</strong> {selectedExample.template.skills.products.join(', ')}
                </p>
              )}
              <p style={{ marginBottom: '4px' }}>
                <strong>Professional Competencies:</strong> {selectedExample.template.skills.soft.join(', ')}
              </p>
            </div>

            {/* Work Experience */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '18px', 
                marginBottom: '12px', 
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
                paddingBottom: '5px'
              }}>
                PROFESSIONAL EXPERIENCE
              </h2>
              {selectedExample.template.experience.map((exp, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '2px' }}>
                      {exp.title} | {exp.company}
                    </p>
                    <p style={{ color: '#666', fontSize: '14px' }}>{exp.period}</p>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quota History - Sales Specific */}
            {selectedExample.template.quotaHistory && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  QUOTA ATTAINMENT HISTORY
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '10px'
                }}>
                  {Object.entries(selectedExample.template.quotaHistory).map(([year, achievement]) => (
                    <div key={year} style={{
                      background: '#e6f7ff',
                      padding: '12px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid #0070f3'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#0070f3' }}>{year}</div>
                      <div style={{ fontSize: '14px', color: '#333' }}>{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Performance Metrics - Sales Specific */}
            {selectedExample.template.performanceMetrics && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  KEY PERFORMANCE METRICS
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '10px'
                }}>
                  {Object.entries(selectedExample.template.performanceMetrics).map(([metric, value]) => (
                    <div key={metric} style={{
                      background: '#f8f9fa',
                      padding: '12px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid #e9ecef'
                    }}>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{metric}</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0070f3' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements & Awards */}
            {selectedExample.template.achievements && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  ACHIEVEMENTS & AWARDS
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sales Tools & Software */}
            {selectedExample.template.tools && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  SALES TECHNOLOGY STACK
                </h2>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {selectedExample.template.tools.map((tool, index) => (
                    <span key={index} style={{
                      background: '#f0f7ff',
                      color: '#0070f3',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {selectedExample.template.languages && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  LANGUAGE PROFICIENCY
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.languages.map((lang, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Note about templates */}
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #e9ecef',
            fontSize: '14px',
            color: '#666'
          }}>
            <p style={{ margin: 0 }}>
              This is a sample sales resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized sales resume with 20+ ATS-friendly templates designed for sales professionals.
            </p>
          </div>
        </div>
      </>
    );
  }

  // Main listing page
  return (
    <>
      <SEO 
        title="Sales Resume Examples | Enterprise & SaaS Sales Resumes 2026 | Professional Samples"
        description="Browse 20+ professional sales resume examples for enterprise sales managers, SaaS account executives, B2B sales professionals, and business development managers. Sample resumes with quota attainment, revenue generation metrics, President's Club achievements, and sales methodology certifications. Learn from real examples to create your winning sales resume for the 2026 hiring season."
        keywords="sales resume, enterprise sales resume, SaaS sales resume, account executive resume, B2B sales resume, sales manager resume, business development resume, sales CV examples, sales resume 2026, sales professional resume, quota attainment resume, President's Club resume"
        canonical="https://freeresumemaker.xyz/professions/sales"
        image="https://freeresumemaker.xyz/images/professions/sales-og.jpg"
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
        maxWidth: '1000px',
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
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Sales Resumes</span>
        </nav>

        {/* Development Notice */}
        <div style={{
          background: '#fff3cd',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '0.95rem',
          border: '1px solid #ffc107'
        }}>
          <p style={{margin: 0, color: '#856404'}}>
            More sales resume examples are being added weekly. Check back soon for additional samples including Business Development Managers, Sales Directors, Account Managers, and Inside Sales Representatives.
          </p>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: '1.2'
          }}>
            Sales Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional sales resume samples for enterprise and SaaS roles.
            Each example includes quota attainment, revenue metrics, and sales certifications that recruiters look for.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Enterprise Sales Managers | SaaS Account Executives | B2B Sales Professionals | Business Development Managers | Sales Directors | Account Managers
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '40px',
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>{resumeExamples.length}+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Sample Resumes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Enterprise • SaaS</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Specializations</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>140% Quota</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Average Attainment</div>
          </div>
        </div>

        {/* Examples Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {resumeExamples.map(example => (
            <div
              key={example.id}
              onClick={() => handleViewExample(example)}
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e9ecef',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#0070f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={{
                marginBottom: '16px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  marginBottom: '8px',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {example.title}
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: '8px'
                }}>
                  <span style={{
                    background: '#e6f7ff',
                    color: '#0070f3',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {example.level}
                  </span>
                  <span style={{
                    background: '#f0f4f8',
                    color: '#666',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px'
                  }}>
                    {example.experience} experience
                  </span>
                  <span style={{
                    background: '#f0f4f8',
                    color: '#666',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    textTransform: 'capitalize'
                  }}>
                    {example.specialization === 'enterprise-sales' ? 'Enterprise Sales' : 'SaaS Sales'}
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {example.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {example.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} style={{
                    background: '#f0f7ff',
                    color: '#0070f3',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {skill}
                  </span>
                ))}
                {example.skills.length > 4 && (
                  <span style={{
                    color: '#999',
                    fontSize: '12px',
                    padding: '4px 0'
                  }}>
                    +{example.skills.length - 4} more
                  </span>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #e9ecef',
                paddingTop: '16px'
              }}>
                <span style={{
                  color: '#0070f3',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  View Complete Resume →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            color: '#1a1a1a',
            textAlign: 'center'
          }}>
            Tips for Creating Effective Sales Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Your Sales Achievements</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific revenue metrics: "Exceeded quota by 140%", "Generated $12M in ARR", "Closed 35+ enterprise accounts", "Achieved 35% win rate". Numbers validate your success.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Sales Methodologies</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include certifications like MEDDIC, Challenger, Sandler, SPIN Selling, and Value-Based Selling. These demonstrate your structured approach to complex sales cycles.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Awards & Recognition</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>President's Club, Top Performer, Rookie of the Year, and Sales Leader awards validate your performance against peers and establish credibility.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Sales Technology Stack</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List CRM platforms (Salesforce, HubSpot), prospecting tools (LinkedIn Sales Navigator, ZoomInfo), and sales engagement platforms (Outreach.io) to demonstrate technical proficiency.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '16px'
          }}>
            Build Your Professional Sales Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for sales professionals. Create a resume that showcases your quota attainment, revenue generation, and sales methodology expertise.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Create Your Resume Now →
          </Link>
        </div>
      </div>
    </>
  );
}