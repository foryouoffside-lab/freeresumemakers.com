// pages/professions/finance.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function FinanceExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 finance resume examples
  const resumeExamples = [
    {
      id: 1,
      title: 'Investment Banking Analyst Resume',
      level: 'mid',
      specialization: 'investment-banking',
      experience: '4 years',
      description: 'Sample resume for an investment banking analyst with financial modeling and M&A experience, featuring deal execution and valuation expertise.',
      skills: ['Financial Modeling', 'M&A', 'Valuation', 'Due Diligence', 'Deal Execution', 'DCF Analysis'],
      template: {
        name: 'AKASH GUPTA',
        credentials: 'CFA Level III Candidate, MBA (Finance)',
        email: 'akash.gupta@email.com',
        phone: '+91 98765 43220',
        linkedin: 'linkedin.com/in/akashgupta',
        location: 'Mumbai, India',
        summary: 'Investment Banking Analyst with 4+ years of experience in M&A, capital raising, and financial advisory. Completed $300M+ in transaction value across technology, manufacturing, and healthcare sectors. Strong financial modeling and valuation skills.',
        education: [
          {
            degree: 'MBA in Finance',
            institution: 'Indian Institute of Management (IIM), Ahmedabad',
            year: '2018-2020',
            score: '8.6/10',
            rank: 'Dean\'s List (Top 10%)'
          },
          {
            degree: 'Bachelor of Commerce (Hons)',
            institution: 'Shri Ram College of Commerce (SRCC), Delhi University',
            year: '2015-2018',
            score: '88%',
            rank: 'University Rank Holder (Top 5%)'
          }
        ],
        certifications: [
          'CFA Level III Candidate (Expected completion 2026)',
          'NISM Series VIII: Equity Derivatives Certification',
          'Financial Modeling & Valuation Certification (Wall Street Prep)',
          'Bloomberg Market Concepts (BMC) Certified',
          'Advanced Excel for Investment Banking'
        ],
        skills: {
          technical: ['Financial Modeling', 'DCF Valuation', 'Comparable Analysis', 'LBO Modeling', 'Merger Models', 'Accretion/Dilution Analysis'],
          software: ['MS Excel (Advanced)', 'PowerPoint', 'Bloomberg Terminal', 'Capital IQ', 'FactSet', 'Thomson Reuters', 'VBA'],
          deal: ['M&A', 'Private Equity', 'Debt Financing', 'Due Diligence', 'Deal Structuring', 'Pitch Books'],
          soft: ['Client Management', 'Team Leadership', 'Presentation Skills', 'Negotiation', 'Time Management', 'Attention to Detail']
        },
        experience: [
          {
            title: 'Investment Banking Analyst',
            company: 'Kotak Investment Banking, Mumbai',
            period: '2021-Present',
            points: [
              'Executed 8 M&A transactions across technology and healthcare sectors with total deal value of $250M',
              'Built complex financial models including DCF, LBO, and merger models for 15+ client presentations',
              'Led due diligence process for 5 acquisitions, identifying $15M in potential synergies',
              'Prepared 50+ pitch books and confidential information memorandums for C-level client meetings',
              'Supported in raising $100M in growth capital for technology startups across 3 funding rounds',
              'Ranked in top 10% of analysts for deal execution efficiency and client satisfaction'
            ]
          },
          {
            title: 'Investment Banking Summer Analyst',
            company: 'ICICI Securities, Mumbai',
            period: 'Jan 2020 - June 2020',
            points: [
              'Supported senior bankers in executing 3 M&A transactions in the manufacturing sector worth $75M',
              'Conducted industry research and prepared 20+ company profiles for potential acquisition targets',
              'Assisted in preparing 15 client presentations and pitch materials',
              'Received Pre-Placement Offer (PPO) based on exceptional performance and technical skills',
              'Created industry benchmarking analysis that was adopted for client presentations'
            ]
          }
        ],
        deals: [
          {
            title: 'Acquisition of TechSolutions Pvt Ltd',
            role: 'Analyst',
            value: 'Ã¢â€šÂ¹150Cr',
            year: '2025',
            description: 'Advised ABC Corp on strategic acquisition of TechSolutions, a leading SaaS provider. Led financial modeling and due diligence.',
            outcome: 'Deal closed 2 months ahead of schedule with favorable terms'
          },
          {
            title: 'Series B Funding for HealthTech Startup',
            role: 'Analyst',
            value: 'Ã¢â€šÂ¹80Cr',
            year: '2024',
            description: 'Assisted in raising growth capital from PE investors for healthcare technology platform.',
            outcome: 'Oversubscribed by 2.5x with top-tier investors'
          },
          {
            title: 'Sell-side Advisory for Manufacturing Co',
            role: 'Analyst',
            value: 'Ã¢â€šÂ¹70Cr',
            year: '2023',
            description: 'Advised promoters on strategic sale to international strategic buyer. Built valuation models and managed data room.',
            outcome: 'Achieved 3x EBITDA multiple premium'
          }
        ],
        achievements: [
          'Deal of the Quarter Award - Kotak Investment Banking (Q3 2025)',
          'Ranked #1 out of 25 Summer Analysts with Pre-Placement Offer',
          'Published article on M&A trends in Indian financial publication (Economic Times)',
          'CFA Level I & II cleared in first attempt (Top 10% globally)',
          'Guest speaker at SRCC Finance Summit on "Career in Investment Banking"'
        ],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Gujarati (Conversational)']
      }
    },
    {
      id: 2,
      title: 'Chartered Accountant (CA) Resume',
      level: 'senior',
      specialization: 'accounting',
      experience: '8 years',
      description: 'Sample resume for a chartered accountant with audit and taxation experience, featuring Ind AS implementation and statutory audit expertise.',
      skills: ['Audit', 'Taxation', 'Financial Reporting', 'Ind AS', 'Compliance', 'Internal Controls'],
      template: {
        name: 'NEHA SINGHAL',
        credentials: 'FCA, DISA (ICA)',
        email: 'neha.singhal@email.com',
        phone: '+91 98765 43221',
        linkedin: 'linkedin.com/in/nehasinghal',
        location: 'Delhi NCR',
        membership: 'Institute of Chartered Accountants of India (ICAI) | Membership No: 412345',
        summary: 'Chartered Accountant with 8+ years of post-qualification experience in audit, taxation, and financial reporting. Expertise in Ind AS implementation, statutory audits, and direct tax compliance. Led audit teams for 20+ listed and private companies.',
        education: [
          {
            degree: 'Chartered Accountant (CA)',
            institution: 'Institute of Chartered Accountants of India (ICAI)',
            year: '2014-2017',
            rank: 'All India Rank 45',
            attempt: 'First Attempt'
          },
          {
            degree: 'Bachelor of Commerce (B.Com)',
            institution: 'Lady Shri Ram College, Delhi University',
            year: '2011-2014',
            score: '85%',
            rank: 'College Topper'
          }
        ],
        certifications: [
          'DISA (Diploma in Information Systems Audit) - ICAI',
          'Certified Ind AS Professional',
          'GST Certification - ICAI',
          'Certificate Course on Internal Audit',
          'Forensic Accounting & Fraud Detection'
        ],
        skills: {
          audit: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Concurrent Audit', 'Stock Audit', 'Forensic Audit'],
          taxation: ['Income Tax', 'GST', 'TDS', 'Transfer Pricing', 'Tax Planning', 'International Taxation'],
          reporting: ['Ind AS', 'IFRS', 'Financial Statements', 'Consolidation', 'Schedule III', 'XBRL'],
          software: ['SAP FICO', 'Tally ERP', 'QuickBooks', 'ClearTax', 'ICAI Portal', 'Zoho Books'],
          soft: ['Team Leadership', 'Client Management', 'Analytical Skills', 'Communication', 'Problem Solving', 'Risk Assessment']
        },
        experience: [
          {
            title: 'Senior Manager - Audit & Assurance',
            company: 'Deloitte India, Gurugram',
            period: '2020-Present',
            points: [
              'Lead audit and assurance engagements for 15+ clients including listed companies and private enterprises with revenues up to Ã¢â€šÂ¹500Cr',
              'Successfully led Ind AS implementation for 5 manufacturing companies, ensuring smooth transition',
              'Managed client portfolio of Ã¢â€šÂ¹3Cr in annual audit fees, achieving 95% client retention',
              'Conducted 20+ training sessions on Ind AS and audit standards for 50+ team members',
              'Identified Ã¢â€šÂ¹25Cr in tax savings for clients through strategic tax planning',
              'Received "Exceptional Performance" rating for 3 consecutive years'
            ]
          },
          {
            title: 'Assistant Manager - Assurance',
            company: 'EY (Ernst & Young), Bangalore',
            period: '2017-2020',
            points: [
              'Managed statutory audits for 12+ clients across manufacturing, real estate, and services sectors',
              'Prepared financial statements in compliance with Ind AS and Schedule III requirements for 8 clients',
              'Handled direct tax assessments for 10 corporate clients, successfully resolving Ã¢â€šÂ¹15Cr in tax disputes',
              'Mentored and trained 15 article assistants, with 5 receiving ICAI All India Ranks',
              'Reduced audit turnaround time by 25% through process optimization'
            ]
          }
        ],
        clients: [
          'ABC Manufacturing Ltd (Listed) - Revenue Ã¢â€šÂ¹350Cr',
          'XYZ Realty Pvt Ltd - Portfolio of 12 projects',
          'PQR Healthcare Ltd - Chain of 25 hospitals',
          'TechStart Solutions Inc - Series B funded startup'
        ],
        achievements: [
          'Star Performer Award - Deloitte India (2024)',
          'Best Mentor Award - EY Bangalore (2019)',
          'All India Rank 45 in CA Final (First Attempt)',
          'Published article on Ind AS Implementation in CA Journal (circulation: 50,000+)',
          'Guest lecturer at ICAI for "Emerging Trends in Audit" (2025)'
        ],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Punjabi (Conversational)', 'Spanish (Basic)']
      }
    }
  ];

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Finance Resumes",
        "item": "https://freeresumemaker.xyz/professions/finance"
      }
    ]
  };

  // ItemList schema for examples
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Finance Resume Examples",
    "description": "Browse professional finance resume examples for investment banking analysts, chartered accountants, and financial professionals. Sample resumes with financial modeling, M&A deals, audit experience, and taxation expertise for 2026 hiring season.",
    "numberOfItems": resumeExamples.length,
    "itemListElement": resumeExamples.map((example, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": example.title,
      "description": example.description
    }))
  };

  const handleViewExample = (example) => {
    setSelectedExample(example);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExamples = () => {
    setSelectedExample(null);
  };

  // If an example is selected, show the template
  if (selectedExample) {
    return (
      <>
        <SEO 
          title={`${selectedExample.title} | Finance Resume Example 2026 | Free Sample Template`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience. Includes ${selectedExample.skills.slice(0, 3).join(', ')} and more. Download as template or customize with our free resume builder for finance professionals.`}
          keywords={`${selectedExample.title.toLowerCase()}, finance resume, investment banking resume, chartered accountant CV, financial analyst resume, M&A resume, financial modeling resume, audit resume, taxation resume, CFA resume, CA resume sample, finance resume 2026`}
          canonical={`https://freeresumemaker.xyz/professions/finance/${selectedExample.id}`}
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
            <span>Ã¢â‚¬Âº</span>
            <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
            <span>Ã¢â‚¬Âº</span>
            <Link href="/professions/finance" style={{ color: '#666', textDecoration: 'none' }}>Finance Resumes</Link>
            <span>Ã¢â‚¬Âº</span>
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
            Ã¢â€ Â Back to All Finance Resume Examples
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
                Professional resume template for {selectedExample.specialization === 'investment-banking' ? 'investment banking and M&A professionals' : 'chartered accountants and audit professionals'} | Updated for 2026 hiring season
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
                {selectedExample.specialization === 'investment-banking' ? 'Investment Banking' : 'Accounting & Audit'}
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
              <div style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                {selectedExample.template.location}
              </div>
              {selectedExample.template.membership && (
                <div style={{
                  background: '#e6f7ff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginBottom: '15px',
                  fontSize: '14px',
                  color: '#0070f3',
                  fontWeight: 500,
                  border: '1px solid #bbdefb'
                }}>
                  {selectedExample.template.membership}
                </div>
              )}
              
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
                <div key={index} style={{ marginBottom: '15px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {edu.degree}
                  </p>
                  <p style={{ color: '#666', marginBottom: '2px' }}>
                    {edu.institution} | {edu.year}
                  </p>
                  {edu.rank && (
                    <p style={{ color: '#666', marginBottom: '2px' }}>
                      <strong>Rank:</strong> {edu.rank}
                    </p>
                  )}
                  {edu.attempt && (
                    <p style={{ color: '#666', marginBottom: '2px' }}>
                      {edu.attempt}
                    </p>
                  )}
                  {edu.score && (
                    <p style={{ color: '#666' }}>Score: {edu.score}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
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
                PROFESSIONAL SKILLS
              </h2>
              {selectedExample.template.skills.technical && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Financial Modeling & Valuation:</strong> {selectedExample.template.skills.technical.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.audit && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Audit & Assurance:</strong> {selectedExample.template.skills.audit.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.taxation && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Taxation & Compliance:</strong> {selectedExample.template.skills.taxation.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.reporting && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Financial Reporting:</strong> {selectedExample.template.skills.reporting.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.deal && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Deal Execution & Advisory:</strong> {selectedExample.template.skills.deal.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.software && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Software & Platforms:</strong> {selectedExample.template.skills.software.join(', ')}
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

            {/* Deals (for Investment Banking) */}
            {selectedExample.template.deals && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  SELECTED TRANSACTIONS & DEALS
                </h2>
                <div style={{
                  display: 'grid',
                  gap: '15px'
                }}>
                  {selectedExample.template.deals.map((deal, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', flexWrap: 'wrap', gap: '8px' }}>
                        <p style={{ fontWeight: 'bold', margin: 0 }}>{deal.title}</p>
                        <span style={{
                          background: '#0070f3',
                          color: 'white',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '11px'
                        }}>
                          {deal.value}
                        </span>
                      </div>
                      <p style={{ color: '#666', fontSize: '13px', margin: '0 0 4px 0' }}>
                        {deal.role} | {deal.year} | {deal.description}
                      </p>
                      {deal.outcome && (
                        <p style={{ color: '#0070f3', fontSize: '12px', margin: '4px 0 0 0' }}>
                          Ã¢Å“â€œ {deal.outcome}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clients (for CA) */}
            {selectedExample.template.clients && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  KEY CLIENTS & ENGAGEMENTS
                </h2>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedExample.template.clients.map((client, index) => (
                    <li key={index} style={{ marginBottom: '4px', color: '#666' }}>{client}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
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
              This is a sample finance resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized finance resume with 20+ ATS-friendly templates designed for investment banking, accounting, and financial services professionals.
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
        title="Finance Resume Examples | Investment Banking & CA Resumes 2026 | Professional Samples"
        description="Browse 20+ professional finance resume examples for investment banking analysts, chartered accountants, financial analysts, and finance professionals. Sample resumes with financial modeling, M&A deals, audit experience, taxation expertise, and Ind AS implementation. Learn from real examples to create your winning finance resume for 2026 hiring season."
        keywords="finance resume, investment banking resume, CA resume, chartered accountant resume, financial analyst resume, M&A resume, financial modeling resume, audit resume, taxation resume, CFA resume, investment banking CV, accounting resume, finance professional resume, finance resume 2026, CA final resume"
        canonical="https://freeresumemaker.xyz/professions/finance"
        image="https://freeresumemaker.xyz/images/professions/finance-og.jpg"
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
          <span>Ã¢â‚¬Âº</span>
          <Link href="/examples" style={{ color: '#666', textDecoration: 'none' }}>Resume Examples</Link>
          <span>Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }}>Finance Resumes</span>
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
            More finance resume examples are being added weekly. Check back soon for additional samples including financial analysts, private equity professionals, and corporate finance specialists.
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
            Finance Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional resume samples for finance professionals, from investment banking analysts to chartered accountants.
            Each example includes financial modeling, deal execution, audit expertise, and quantifiable achievements that recruiters seek.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Investment Banking Analysts | Chartered Accountants | Financial Analysts | M&A Professionals | Audit Managers | Tax Specialists | Corporate Finance Professionals
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
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>$300M+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Deal Transaction Value</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>CFA Ã¢â‚¬Â¢ CA Ã¢â‚¬Â¢ CPA</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Professional Certifications</div>
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
                    {example.specialization === 'investment-banking' ? 'Investment Banking' : 'Accounting & Audit'}
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
                  View Complete Resume Ã¢â€ â€™
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
            Tips for Creating Effective Finance Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Financial Impact</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific metrics: "$300M+ deal value", "Identified Ã¢â€šÂ¹25Cr in tax savings", "Managed Ã¢â€šÂ¹3Cr audit portfolio", "Achieved 95% client retention". Numbers demonstrate tangible value to employers.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Technical Expertise</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List financial modeling skills (DCF, LBO, Merger Models, Comps), software proficiency (Bloomberg Terminal, Capital IQ, SAP FICO), and professional certifications (CFA, CA, CPA, CMA).</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Deal & Transaction Experience</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Feature specific transactions with deal size, your role, and outcomes. Include M&A, capital raising, IPO advisory, and restructuring experience to demonstrate execution capability.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Include Regulatory Compliance Knowledge</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Highlight expertise in Ind AS, IFRS, SEBI regulations, RBI guidelines, Income Tax Act, and GST compliance. Regulatory knowledge is critical for finance roles.</p>
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
            Build Your Professional Finance Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for investment banking, accounting, and finance professionals. Get hired faster with a resume that showcases your financial expertise.
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
            Create Your Resume Now Ã¢â€ â€™
          </Link>
        </div>

        
      </div>
    </>
  );
}
