import React from 'react';
// pages/professions/administrative.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

export default function AdministrativeExamples() {
  const [selectedExample, setSelectedExample] = useState(null);

  // 2 administrative resume examples
  const resumeExamples = [
    {
      id: 1,
      title: 'Executive Assistant Resume',
      level: 'senior',
      specialization: 'executive-assistant',
      experience: '12+ years',
      description: 'Sample resume for an Executive Assistant supporting C-suite executives, featuring calendar management and event coordination expertise.',
      skills: ['Calendar Management', 'Travel Coordination', 'Meeting Planning', 'Communication', 'Confidentiality', 'Project Management'],
      template: {
        name: 'SUNITA VERMA',
        credentials: 'Certified Executive Assistant (CEA)',
        email: 'sunita.verma@email.com',
        phone: '+91 98765 43224',
        linkedin: 'linkedin.com/in/sunitaverma',
        location: 'Mumbai, India',
        summary: 'Executive Assistant with 12+ years of experience supporting C-level executives in corporate environments. Expert in calendar management, international travel coordination, and confidential communication. Proven track record of improving executive efficiency by 40%.',
        education: [
          {
            degree: 'Bachelor of Commerce (B.Com)',
            institution: 'University of Mumbai',
            year: '2008-2011',
            score: '78%'
          },
          {
            degree: 'Diploma in Office Management',
            institution: 'St. Xavier\'s College, Mumbai',
            year: '2011-2012',
            score: 'Distinction'
          }
        ],
        certifications: [
          'Certified Executive Assistant (CEA) - International Association of Administrative Professionals',
          'Microsoft Office Specialist (MOS) - Excel, Word, PowerPoint, Outlook',
          'Business Communication Certification - British Council',
          'Project Management Fundamentals - PMI',
          'Advanced Calendar Management Certificate'
        ],
        skills: {
          core: ['Calendar Management', 'Travel Coordination', 'Meeting Planning', 'Event Coordination', 'Office Management', 'Document Management'],
          software: ['MS Office Suite', 'Google Workspace', 'SAP', 'Concur', 'Salesforce', 'Asana', 'Trello', 'Zoom', 'Teams'],
          communication: ['Email Management', 'Minutes of Meeting', 'Report Preparation', 'Stakeholder Communication', 'Executive Briefings'],
          soft: ['Confidentiality', 'Time Management', 'Problem Solving', 'Multi-tasking', 'Professionalism', 'Discretion']
        },
        experience: [
          {
            title: 'Executive Assistant to CEO',
            company: 'Tata Group, Mumbai',
            period: '2018-Present',
            points: [
              'Provide comprehensive administrative support to CEO and 4 C-level executives',
              'Manage complex calendars across 6 time zones, coordinating 50+ meetings weekly',
              'Coordinate international travel for executive team including visas, itineraries, and accommodations for 20+ trips annually',
              'Prepare board meeting materials and take minutes for quarterly board reviews with 12 board members',
              'Handle confidential information including HR matters, financial data, and M&A discussions',
              'Implemented digital filing system reducing document retrieval time by 60%',
              'Recognized for exceptional performance with 2 promotions in 5 years'
            ]
          },
          {
            title: 'Senior Administrative Assistant',
            company: 'Reliance Industries, Mumbai',
            period: '2014-2018',
            points: [
              'Supported 3 senior directors in the Corporate Strategy department',
              'Processed and tracked expense reports worth ₹2Cr annually, ensuring 100% compliance',
              'Organized quarterly town halls for 500+ employees and annual team offsites',
              'Created and maintained filing systems improving document retrieval efficiency by 50%',
              'Received "Employee of the Quarter" award for exceptional performance in 2016'
            ]
          },
          {
            title: 'Administrative Assistant',
            company: 'HDFC Bank, Mumbai',
            period: '2011-2014',
            points: [
              'Managed reception and administrative tasks for Regional Office serving 200+ employees',
              'Handled 100+ incoming calls and emails daily, directing to appropriate departments',
              'Assisted in organizing corporate events and client meetings for 50+ high-profile clients',
              'Maintained office supplies and inventory, reducing costs by 15% through vendor negotiation'
            ]
          }
        ],
        achievements: [
          'Employee of the Quarter - Reliance Industries (2016)',
          'Best Support Staff Award - Tata Group (2021, 2023)',
          'Certified Microsoft Office Specialist (MOS) - All 4 certifications',
          'Volunteer Coordinator for Corporate Social Responsibility initiatives serving 1,000+ beneficiaries',
          'Implemented digital calendar system saving executive team 200+ hours annually'
        ],
        tools: ['MS Office Suite', 'Google Workspace', 'SAP', 'Concur', 'Zoom', 'Teams', 'Slack', 'Asana', 'Trello', 'Expensify'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Marathi (Fluent)', 'Gujarati (Conversational)']
      }
    },
    {
      id: 2,
      title: 'Office Manager Resume',
      level: 'mid',
      specialization: 'office-manager',
      experience: '8 years',
      description: 'Sample resume for an Office Manager with facilities management and team supervision experience, featuring vendor management and budget optimization expertise.',
      skills: ['Office Administration', 'Facility Management', 'Vendor Management', 'Team Coordination', 'Budgeting', 'Project Management'],
      template: {
        name: 'RAJESH KUMAR',
        credentials: 'Certified Office Manager (COM)',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43225',
        linkedin: 'linkedin.com/in/rajeshkumar',
        location: 'Bangalore, India',
        summary: 'Office Manager with 8+ years of experience in facilities management, vendor coordination, and team supervision. Skilled in optimizing office operations, managing budgets up to ₹2Cr, and improving workplace efficiency by 35%.',
        education: [
          {
            degree: 'MBA in Operations Management',
            institution: 'Symbiosis Institute of Management, Pune',
            year: '2014-2016',
            score: '8.2/10'
          },
          {
            degree: 'Bachelor of Business Administration (BBA)',
            institution: 'Christ University, Bangalore',
            year: '2011-2014',
            score: '82%'
          }
        ],
        certifications: [
          'Certified Office Manager (COM) - Office Managers Association',
          'Facility Management Professional (FMP) - IFMA',
          'Lean Six Sigma Green Belt',
          'First Aid and Emergency Response Certified',
          'Workplace Safety Management Certificate'
        ],
        skills: {
          core: ['Office Administration', 'Facility Management', 'Vendor Management', 'Inventory Control', 'Budgeting', 'Space Planning'],
          software: ['MS Office Suite', 'Google Workspace', 'Tally', 'Zoho', 'Slack', 'Asana', 'Jira', 'ServiceNow'],
          management: ['Team Supervision', 'Training & Onboarding', 'Performance Review', 'Policy Implementation', 'Crisis Management'],
          soft: ['Problem Solving', 'Communication', 'Leadership', 'Organization', 'Customer Service', 'Negotiation']
        },
        experience: [
          {
            title: 'Office Manager',
            company: 'Infosys, Bangalore',
            period: '2019-Present',
            points: [
              'Oversee daily operations of 200,000 sq. ft. corporate office serving 2,500+ employees',
              'Assist in managing facilities budget of ₹2Cr, identifying cost savings of ₹25L annually',
              'Coordinate with 15+ vendors for maintenance, catering, security, and supplies',
              'Lead team of 12 administrative staff including receptionists and facility coordinators',
              'Implemented inventory management system reducing supply costs by 20% and waste by 30%',
              'Achieved 95% employee satisfaction score in annual workplace survey'
            ]
          },
          {
            title: 'Assistant Office Manager',
            company: 'Wipro Technologies, Bangalore',
            period: '2016-2019',
            points: [
              'Assisted in managing office operations in a fast-paced IT environment with 1,200+ employees',
              'Coordinated 25 all-hands meetings, 40 team offsites, and 15 client events annually',
              'Managed office seating for 500+ employees, access cards, and IT equipment inventory',
              'Served as point of contact for 200+ employee queries and facilities issues monthly',
              'Conducted new employee orientations for 300+ new hires annually',
              'Reduced facility-related complaints by 40% through proactive maintenance scheduling'
            ]
          }
        ],
        achievements: [
          'Facility Manager of the Year - Infosys (2022)',
          'Cost Saving Champion Award - Wipro (2018)',
          'Lean Six Sigma Green Belt Certification',
          'Organized office redesign project improving collaboration space utilization by 50%',
          'Implemented COVID-19 safety protocols ensuring zero workplace transmission'
        ],
        vendors: ['Security Services', 'Catering', 'Housekeeping', 'IT Support', 'Stationery', 'Travel Desk', 'Landscaping', 'HVAC Maintenance'],
        languages: ['English (Fluent)', 'Hindi (Native)', 'Kannada (Conversational)', 'Tamil (Basic)']
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
        "name": "Administrative Resumes",
        "item": "https://freeresumemaker.xyz/professions/administrative"
      }
    ]
  };

  // ItemList schema for examples
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Administrative Resume Examples",
    "description": "Browse professional administrative resume examples for executive assistants and office managers. Sample resumes with calendar management, travel coordination, facilities management, team supervision, and vendor management expertise. Learn from real examples to create your winning administrative resume.",
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
          title={`${selectedExample.title} | Administrative Resume Example 2026 | Free Sample Template`}
          description={`${selectedExample.description} View a complete ${selectedExample.title.toLowerCase()} with ${selectedExample.experience} of experience. Includes ${selectedExample.skills.slice(0, 3).join(', ')} and more. Download as template or customize with our free resume builder.`}
          keywords={`${selectedExample.title.toLowerCase()}, administrative resume, executive assistant resume, office manager CV, admin resume, office administration resume, executive support resume, administrative assistant CV, facilities management resume, executive assistant 2026`}
          canonical={`https://freeresumemaker.xyz/professions/administrative/${selectedExample.id}`}
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
            <Link href="/professions/administrative" style={{ color: '#666', textDecoration: 'none' }}>Administrative Resumes</Link>
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
            ← Back to All Administrative Resume Examples
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
                Professional resume template for {selectedExample.specialization === 'executive-assistant' ? 'C-suite executive support professionals' : 'corporate office management'} | Updated for 2026 hiring season
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
                {selectedExample.specialization === 'executive-assistant' ? 'Executive Support' : 'Office Operations'}
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
              {selectedExample.template.skills.core && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Core Administrative Skills:</strong> {selectedExample.template.skills.core.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.software && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Software & Tools:</strong> {selectedExample.template.skills.software.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.communication && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Communication & Documentation:</strong> {selectedExample.template.skills.communication.join(', ')}
                </p>
              )}
              {selectedExample.template.skills.management && (
                <p style={{ marginBottom: '4px' }}>
                  <strong>Management & Leadership:</strong> {selectedExample.template.skills.management.join(', ')}
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

            {/* Tools/Software */}
            {selectedExample.template.tools && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  TECHNICAL TOOLS & SOFTWARE
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

            {/* Vendors (for Office Manager) */}
            {selectedExample.template.vendors && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '18px', 
                  marginBottom: '12px', 
                  color: '#0070f3',
                  borderBottom: '2px solid #0070f3',
                  paddingBottom: '5px'
                }}>
                  VENDOR PARTNERSHIPS MANAGED
                </h2>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {selectedExample.template.vendors.map((vendor, index) => (
                    <span key={index} style={{
                      background: '#f0f7ff',
                      color: '#0070f3',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {vendor}
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
              This is a sample administrative resume for reference purposes. Use our{' '}
              <Link href="/editor" style={{ color: '#0070f3', textDecoration: 'none' }}>
                free resume builder
              </Link>{' '}
              to create your own customized administrative or executive support resume with 20+ ATS-friendly templates designed for administrative professionals.
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
        title="Administrative Resume Examples | Executive Assistant & Office Manager Resumes 2026"
        description="Browse 20+ professional administrative resume examples for executive assistants, office managers, administrative assistants, and executive support professionals. Sample resumes with calendar management, travel coordination, facilities management, team supervision, vendor management, and budget optimization expertise. Learn from real examples to create your winning administrative resume for 2026 hiring season."
        keywords="administrative resume, executive assistant resume, office manager resume, administrative assistant resume, executive support resume, office administration resume, admin resume, facilities management resume, C-suite support resume, administrative CV, office manager CV, executive assistant 2026"
        canonical="https://freeresumemaker.xyz/professions/administrative"
        image="https://freeresumemaker.xyz/images/professions/administrative-og.jpg"
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
          <span style={{ color: '#0070f3' }}>Administrative Resumes</span>
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
            More administrative resume examples are being added weekly. Check back soon for additional samples including administrative assistants, receptionists, and operations coordinators.
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
            Administrative Resume Examples
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse professional resume samples for administrative professionals, from executive assistants to office managers.
            Each example includes calendar management, travel coordination, facilities management, and proven efficiency improvements.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            maxWidth: '700px',
            margin: '12px auto 0',
            lineHeight: '1.5'
          }}>
            Perfect for: Executive Assistants | Office Managers | Administrative Assistants | Executive Support Professionals | Facilities Coordinators | Operations Administrators
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
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>C-Suite • Corporate</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Executive Support Roles</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>CEA • COM • MOS</div>
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
                    {example.specialization === 'executive-assistant' ? 'Executive Support' : 'Office Operations'}
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
            Tips for Creating Effective Administrative Resumes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Quantify Efficiency Improvements</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Use specific metrics: "Improved executive efficiency by 40%", "Reduced document retrieval time by 60%", "Saved 200+ hours annually through calendar optimization", "Managed ₹2Cr budget with 15% cost reduction".</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Highlight Technical Expertise</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>List software proficiency including MS Office Suite, Google Workspace, SAP, Concur, Asana, and Trello. Include certifications like Certified Executive Assistant (CEA), Microsoft Office Specialist (MOS), and Facility Management Professional (FMP).</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Emphasize Confidentiality & Trust</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Highlight experience handling sensitive information, C-level executive support, board meeting coordination, and confidential HR or financial matters. Trust is the #1 quality hiring managers seek.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Showcase Vendor & Stakeholder Management</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Include number of vendors managed, contract values, negotiation outcomes, and cross-departmental collaboration to demonstrate your ability to manage complex stakeholder relationships.</p>
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
            Build Your Professional Administrative Resume
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Use our free resume builder with 20+ ATS-friendly templates designed specifically for executive assistants, office managers, and administrative professionals. Get hired faster with a resume that showcases your organizational excellence.
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