// pages/professions/marketing.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function MarketingExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 marketing resume examples with complete template data
  const resumeExamples = [
    {
      id: 1,
      title: 'Digital Marketing Manager Resume',
      level: 'senior',
      specialization: 'digital-marketing',
      experience: '7+ years',
      description: 'Professional resume sample for a Digital Marketing Manager with expertise in SEO, PPC, and social media strategy. Features campaign management experience, organic traffic growth metrics, and team leadership achievements.',
      skills: ['SEO Strategy', 'Google Analytics', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy', 'Team Leadership'],
      template: {
        name: 'PRIYA SINGH',
        credentials: 'Digital Marketing Professional | Google Analytics Certified',
        email: 'priya.singh@email.com',
        phone: '+91 98765 43212',
        linkedin: 'linkedin.com/in/priyasingh',
        location: 'Mumbai, India',
        summary: 'Digital Marketing Manager with 7+ years of experience in driving brand growth and customer engagement through digital channels. Expertise in SEO, PPC, and social media strategy. Proven track record of increasing organic traffic by 150% and managing $2M+ marketing budgets with 3.5x ROAS.',
        education: [
          {
            degree: 'MBA in Marketing',
            institution: 'Indian Institute of Management (IIM), Bangalore',
            year: '2016-2018',
            score: '8.9/10'
          },
          {
            degree: 'Bachelor of Business Administration (BBA)',
            institution: 'Delhi University',
            year: '2013-2016',
            score: '82%'
          }
        ],
        certifications: [
          'Google Analytics Individual Qualification',
          'HubSpot Inbound Marketing Certified',
          'Facebook Blueprint Certified',
          'SEMrush SEO Toolkit Certification',
          'Google Ads Certification',
          'Content Marketing Certification - HubSpot'
        ],
        skills: {
          technical: ['Google Analytics', 'SEO Tools', 'SEMrush', 'HubSpot', 'Mailchimp', 'Google Search Console', 'Ahrefs', 'Moz'],
          platforms: ['Facebook Ads', 'Google Ads', 'LinkedIn Marketing', 'Instagram', 'Twitter Ads', 'YouTube Ads', 'TikTok Ads'],
          analytics: ['Data Analysis', 'A/B Testing', 'ROI Analysis', 'Conversion Rate Optimization', 'Customer Journey Mapping'],
          soft: ['Campaign Management', 'Team Leadership', 'Budget Planning', 'Client Relations', 'Strategic Planning']
        },
        experience: [
          {
            title: 'Senior Digital Marketing Manager',
            company: 'GrowthX Digital, Mumbai',
            period: '2021-Present',
            points: [
              'Increased organic website traffic by 150% through comprehensive SEO optimization and content strategy',
              'Managed $2M+ annual marketing budget across digital channels achieving 3.5x return on ad spend (ROAS)',
              'Led and mentored team of 5 marketing specialists, achieving 140% of quarterly targets consistently',
              'Developed social media strategy that grew follower base from 10,000 to 85,000 across platforms in 18 months',
              'Implemented marketing automation workflows increasing lead conversion rates by 45% year-over-year',
              'Reduced customer acquisition cost by 28% through audience segmentation and targeted campaigns'
            ]
          },
          {
            title: 'Digital Marketing Specialist',
            company: 'BrandBuzz Agency, Bangalore',
            period: '2018-2021',
            points: [
              'Executed PPC campaigns generating $3M+ revenue with 4.2x average ROAS across client portfolio',
              'Improved email marketing conversion rates from 2.1% to 5.8% through strategic A/B testing and personalization',
              'Managed social media accounts for 12+ enterprise clients across e-commerce, SaaS, and B2B industries',
              'Reduced cost-per-acquisition by 35% across all campaigns through audience optimization and creative testing',
              'Achieved #1 search ranking positions for 25+ high-value keywords for key clients'
            ]
          }
        ],
        campaigns: [
          {
            title: 'SaaS Product Launch Campaign',
            description: 'Led comprehensive digital marketing campaign for new B2B SaaS product launch',
            results: [
              'Generated 5,000+ qualified leads within first 3 months post-launch',
              'Achieved 25% market penetration in target demographics within first quarter',
              'Secured 15 enterprise clients with average contract value of $50,000',
              'Delivered 300% ROI on marketing spend within first 6 months'
            ]
          }
        ],
        achievements: [
          'Digital Marketer of the Year 2023 - Indian Marketing Association',
          'Guest lecturer at IIM Bangalore for Digital Marketing Strategy course',
          'Awarded "Best Integrated Campaign" at Marketing Excellence Awards 2022',
          'Featured speaker at Digital Marketing Summit 2023 on "Data-Driven Marketing Strategies"',
          'Published article on SEO trends in Marketing Insider Magazine'
        ],
        tools: ['Google Analytics', 'SEMrush', 'HubSpot', 'Ahrefs', 'Mailchimp', 'Facebook Ads Manager', 'Google Ads', 'Canva', 'Hootsuite', 'Tableau'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Kannada (Conversational)']
      }
    },
    {
      id: 2,
      title: 'Content Marketing Specialist Resume',
      level: 'mid',
      specialization: 'content-marketing',
      experience: '4 years',
      description: 'Sample resume for a Content Marketing Specialist with B2B and B2C content strategy expertise. Features blog traffic growth metrics, SEO content optimization, and email marketing performance improvements.',
      skills: ['Content Strategy', 'SEO Writing', 'Email Marketing', 'Copywriting', 'Editorial Planning', 'B2B Content', 'Lead Generation'],
      template: {
        name: 'ARJUN KUMAR',
        credentials: 'Content Marketing Specialist | SEO Content Strategist',
        email: 'arjun.kumar@email.com',
        phone: '+91 98765 43213',
        linkedin: 'linkedin.com/in/arjunkumar',
        location: 'Bangalore, India',
        summary: 'Content Marketing Specialist with 4+ years of experience developing and executing content strategies for B2B and B2C brands. Proven track record of increasing organic traffic by 200% through data-driven content optimization and strategic editorial planning. Expert in creating high-converting content across multiple formats.',
        education: [
          {
            degree: 'Bachelor of Arts in English Literature',
            institution: 'Delhi University, Delhi',
            year: '2016-2019',
            score: '8.5/10'
          },
          {
            degree: 'Post Graduate Diploma in Digital Marketing',
            institution: 'MICA, Ahmedabad',
            year: '2019-2020',
            score: 'Distinction'
          }
        ],
        certifications: [
          'HubSpot Content Marketing Certification',
          'Google Digital Marketing & E-commerce Certification',
          'SEO Fundamentals - Moz Academy',
          'Copywriting Masterclass - AWAI',
          'Email Marketing Certification - Mailchimp',
          'SEMrush Content Marketing Toolkit Certification'
        ],
        skills: {
          content: ['Blog Posts', 'Whitepapers', 'Case Studies', 'Email Newsletters', 'Social Media Copy', 'E-books', 'Video Scripts', 'Website Copy'],
          technical: ['WordPress', 'Content Management Systems', 'SEO Tools', 'Google Docs', 'Ahrefs', 'SurferSEO', 'Grammarly', 'Canva'],
          strategy: ['Editorial Planning', 'Content Calendar Management', 'Keyword Research', 'Topic Clusters', 'Content Distribution'],
          soft: ['Storytelling', 'Research', 'Brand Voice Development', 'Project Management', 'Team Collaboration']
        },
        experience: [
          {
            title: 'Content Marketing Specialist',
            company: 'ContentFirst Media, Bangalore',
            period: '2022-Present',
            points: [
              'Developed and executed content strategy resulting in 200% increase in blog traffic (10,000 to 30,000 monthly visitors)',
              'Created and optimized 50+ articles ranking in top 3 search results for target keywords with high commercial intent',
              'Managed editorial calendar for 5 distinct brands across SaaS, finance, and e-commerce sectors',
              'Collaborated with design team to create visual content assets, increasing content engagement by 65%',
              'Grew email subscriber base from 2,000 to 12,000 through strategic lead magnet optimization and content upgrades',
              'Achieved average email open rate of 28% (industry benchmark: 18%) through compelling subject lines and content'
            ]
          },
          {
            title: 'Junior Content Writer',
            company: 'Digital Pulse Agency, Delhi',
            period: '2019-2022',
            points: [
              'Researched, wrote, and published 200+ blog posts, articles, and website copies for 30+ clients across industries',
              'Improved client website engagement metrics by 40% through SEO-optimized and audience-focused content',
              'Assisted in executing email marketing campaigns achieving 25% open rates and 8% click-through rates',
              'Created SEO-optimized product descriptions that increased e-commerce conversion rates by 22%',
              'Conducted competitor content analysis to identify content gaps and opportunities for clients'
            ]
          }
        ],
        projects: [
          {
            title: 'B2B SaaS Brand Blog Overhaul',
            description: 'Complete content strategy revamp for major B2B technology client',
            points: [
              'Redesigned content strategy focusing on high-intent keywords and user intent mapping',
              'Increased monthly blog readership from 5,000 to 25,000 in 6 months (400% growth)',
              'Reduced bounce rate from 72% to 48% through improved content quality and user experience',
              'Generated 300+ qualified marketing qualified leads (MQLs) through gated premium content assets',
              'Achieved 15 first-page keyword rankings within 4 months of strategy implementation'
            ]
          }
        ],
        achievements: [
          'Content Piece of the Month award (3 times) - ContentFirst Media',
          'Published in leading marketing publications: Content Marketing Institute, HubSpot Blog, Entrepreneur India',
          'Guest contributor for Marketing Insider and Digital Marketing Magazine',
          'Created viral social media content series reaching 500,000+ impressions',
          'Selected as featured speaker at Content Marketing Conference 2024'
        ],
        tools: ['WordPress', 'Ahrefs', 'SEMrush', 'SurferSEO', 'Mailchimp', 'Canva', 'Google Docs', 'Trello', 'Asana', 'Notion'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'French (Conversational)']
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
        "name": "Marketing Resumes",
        "item": "https://freeresumemaker.xyz/professions/marketing"
      }
    ]
  };

  // ItemList schema for examples listing
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Marketing Resume Examples",
    "description": "Browse professional marketing resume examples for digital marketing managers and content marketing specialists. Sample resumes with campaign metrics, SEO expertise, and quantifiable results. Learn from real examples to create your winning marketing resume for 2026.",
    "numberOfItems": resumeExamples.length,
    "itemListElement": resumeExamples.map((example, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": example.title,
      "description": example.description,
      "url": `https://freeresumemaker.xyz/professions/marketing/${example.id}`
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
          title={`${selectedExample.title} | Marketing Resume Example 2026 | Professional Sample`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience in ${selectedExample.specialization === 'digital-marketing' ? 'digital marketing, SEO, PPC' : 'content marketing, SEO writing'}. Includes certifications, campaign results, and quantifiable achievements. Customize with our free resume builder.`}
          keywords={`${selectedExample.title.toLowerCase()}, marketing resume, digital marketing resume example, content marketing resume, ${selectedExample.specialization} resume, marketing CV, professional resume sample, marketing resume 2026, ATS friendly marketing resume`}
          canonical={`https://freeresumemaker.xyz/professions/marketing/${selectedExample.id}`}
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
            <span>â€º</span>
            <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
            <span>â€º</span>
            <Link href="/professions/marketing" style={{ color: '#666', textDecoration: 'none' }}>Marketing Resumes</Link>
            <span>â€º</span>
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
            â† Back to All Marketing Resume Examples
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
                Professional marketing resume template for {selectedExample.specialization === 'digital-marketing' ? 'digital marketing management roles' : 'content marketing specialist positions'} | Updated for 2026 hiring season
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
                {selectedExample.specialization === 'digital-marketing' ? 'Digital Marketing' : 'Content Marketing'}
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
                PROFESSIONAL CERTIFICATIONS
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
                MARKETING SKILLS
              </h2>
              {selectedExample.template.skills.technical && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Technical & Analytics Skills:</strong> {selectedExample.template.skills.technical.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.platforms && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Marketing Platforms:</strong> {selectedExample.template.skills.platforms.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.content && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Content & Strategy:</strong> {selectedExample.template.skills.content.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.analytics && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Analytics & Optimization:</strong> {selectedExample.template.skills.analytics.join(', ')}
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

            {/* Key Campaigns or Projects */}
            {selectedExample.template.campaigns && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  KEY MARKETING CAMPAIGNS
                </h2>
                {selectedExample.template.campaigns.map((campaign, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{campaign.title}</p>
                    <p style={{ color: '#666', marginBottom: '4px' }}>{campaign.description}</p>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {campaign.results.map((result, i) => (
                        <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{result}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {selectedExample.template.projects && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  KEY PROJECTS
                </h2>
                {selectedExample.template.projects.map((project, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{project.title}</p>
                    <p style={{ color: '#666', marginBottom: '4px' }}>{project.description}</p>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {project.points.map((point, i) => (
                        <li key={i} style={{ marginBottom: '4px', color: '#666' }}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

            {/* Marketing Tools & Software */}
            {selectedExample.template.tools && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  MARKETING TOOLS & SOFTWARE
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
              This is a sample marketing resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized marketing resume with 20+ ATS-friendly templates designed for digital marketing and content marketing professionals.
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
        title="Marketing Resume Examples | Digital Marketing & Content Marketing Resumes 2026"
        description="Browse 20+ professional marketing resume examples for digital marketing managers, content marketing specialists, SEO experts, and PPC specialists. Sample resumes with campaign metrics, organic traffic growth, ROAS improvements, and SEO expertise. Learn from real examples to create your winning marketing resume for the 2026 hiring season."
        keywords="marketing resume, digital marketing resume, content marketing resume, marketing manager resume, SEO resume, PPC specialist resume, social media marketing resume, marketing CV examples, digital marketing CV, content strategist resume, marketing resume 2026, ATS friendly marketing resume"
        canonical="https://freeresumemaker.xyz/professions/marketing"
        image="https://freeresumemaker.xyz/images/professions/marketing-og.jpg"
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
          <span>â€º</span>
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
          <span>â€º</span>
          <span style={{ color: '#0070f3' }}>Marketing Resumes</span>
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
            More marketing resume examples are being added weekly. Check back soon for additional samples including Social Media Managers, SEO Specialists, Brand Managers, and Marketing Coordinators.
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
            Marketing Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional marketing resume samples for digital and content roles.
            Each example includes campaign metrics, SEO expertise, and quantifiable achievements that recruiters look for.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Digital Marketing Managers | Content Marketing Specialists | SEO Managers | PPC Specialists | Social Media Managers | Marketing Directors
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
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>Digital â€¢ Content</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Specializations</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>ROAS â€¢ SEO â€¢ Traffic</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Quantifiable Metrics</div>
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
                    {example.specialization === 'digital-marketing' ? 'Digital Marketing' : 'Content Marketing'}
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
                  View Complete Resume â†’
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
            Tips for Creating Effective Marketing Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Campaign Results</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific marketing metrics: "Increased organic traffic by 150%", "Achieved 3.5x ROAS on $2M budget", "Grew social followers from 10,000 to 85,000", "Reduced CPA by 35% through optimization".</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Marketing Technology Stack</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include platforms like Google Analytics, SEMrush, HubSpot, Salesforce Marketing Cloud, and marketing automation tools. Certifications in these tools add credibility.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Cross-Channel Expertise</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Demonstrate ability to manage integrated campaigns across SEO, PPC, social media, email, and content marketing. Show how channels work together to achieve business goals.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Awards and Industry Recognition</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List marketing awards, speaking engagements, published articles, and industry certifications. This establishes credibility and expertise in your field.</p>
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
            Build Your Professional Marketing Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for digital marketing and content marketing professionals. Create a resume that showcases your campaign results and marketing expertise.
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
            Create Your Resume Now â†’
          </Link>
        </div>

       
      </div>
    </>
  );
}
