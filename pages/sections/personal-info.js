import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function PersonalInfoSectionGuide() {
  // Enhanced structured data: Article + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/personal-info#article",
        "headline": "Resume Personal Information: What to Include & What to Avoid 2026",
        "description": "Complete guide to personal information on resumes. Learn which contact details are essential, what to exclude (photo, age), and international formatting tips to land more interviews.",
        "image": "https://freeresumemaker.xyz/images/personal-info-guide-2026.jpg",
        "datePublished": "2026-01-25T08:00:00+00:00",
        "dateModified": "2026-03-23T10:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "url": "https://freeresumemaker.xyz"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FreeResumeMakers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://freeresumemaker.xyz/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://freeresumemaker.xyz/sections/personal-info"
        },
        "keywords": "personal information resume, contact information resume, resume header, resume contact details, what to include on resume, resume privacy"
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/personal-info#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I include a photo on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the US, UK, and Canada, it's not recommended to include a photo as it can lead to unconscious bias. In some European and Asian countries, it may be expected. Always check local norms and industry standards before including a photo."
            }
          },
          {
            "@type": "Question",
            "name": "What email address should I use for my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use a professional email address, ideally in the format firstname.lastname@domain.com. Avoid nicknames, numbers that don't relate to you, or unprofessional terms like 'cutiepie' or 'partyanimal'. A simple, clean email creates a better first impression."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include my full street address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only include city and state/country. Full street address is unnecessary, raises privacy concerns, and can potentially lead to geographic discrimination. City and state are sufficient for employers to know your location and commuting feasibility."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include my age or date of birth on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, never include your age or date of birth on a resume in the US, UK, Canada, or most of Europe. Age discrimination is illegal in many countries, and including this information can work against you. Focus on your skills and experience instead."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include my LinkedIn profile on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, definitely include your LinkedIn profile URL. Ensure your profile is complete, professional, and matches your resume. Use a custom URL (linkedin.com/in/yourname) for a cleaner look. Recruiters often check LinkedIn immediately after reviewing a resume."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I have an unprofessional email address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Create a new, professional email address specifically for job applications. Use your first and last name (e.g., john.smith@gmail.com). If your name is common, add a middle initial or profession (e.g., john.m.smith@email.com). It's free and makes a much better impression."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/personal-info#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freeresumemaker.xyz/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resume Sections",
            "item": "https://freeresumemaker.xyz/sections"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Personal Information Guide",
            "item": "https://freeresumemaker.xyz/sections/personal-info"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "Should I include a photo on my resume?",
      a: "In the US, UK, and Canada, it's not recommended to include a photo as it can lead to unconscious bias and discrimination. In some European countries (Germany, France) and Asian countries, it may be expected. Always research local norms and industry standards before including a photo."
    },
    {
      q: "What email address should I use for my resume?",
      a: "Use a professional email address, ideally in the format firstname.lastname@domain.com. Avoid nicknames, unprofessional terms, or outdated email services. Gmail or Outlook are preferred. Example: john.smith@gmail.com instead of cutiepie123@yahoo.com."
    },
    {
      q: "Should I include my full street address?",
      a: "Only include city and state/country. Full street address is unnecessary, raises privacy and security concerns, and can lead to geographic discrimination. City and state are sufficient for employers to know your location and commuting feasibility."
    },
    {
      q: "Should I include my age or date of birth?",
      a: "No, never include your age, date of birth, or birth year on a resume in the US, UK, Canada, or most of Europe. Age discrimination is illegal in many countries. Focus on your skills, experience, and qualifications instead."
    },
    {
      q: "Should I include my LinkedIn profile?",
      a: "Yes, include your LinkedIn profile URL. Ensure your profile is complete, professional, and consistent with your resume. Use a custom URL (linkedin.com/in/yourname) for a cleaner, more professional look. Recruiters frequently check LinkedIn after reviewing resumes."
    },
    {
      q: "What should I do if I have an unprofessional email address?",
      a: "Create a new, professional email address specifically for job applications. Use your first and last name (e.g., john.smith@gmail.com). If your name is common, add a middle initial or profession (e.g., john.m.smith@email.com). It's free and creates a much better first impression."
    },
    {
      q: "Should I include my marital status or family details?",
      a: "Absolutely not. Marital status, number of children, spouse's occupation, and similar personal details are irrelevant to your qualifications and can lead to discrimination. Never include this information on your resume."
    },
    {
      q: "Should I include my social security number?",
      a: "Never include your social security number, national insurance number, or any government ID on your resume. This is a major security and identity theft risk. This information is only required after you're hired for tax purposes."
    },
    {
      q: "Should I include my nationality or visa status?",
      a: "Only if you require visa sponsorship and the employer specifically asks, or if you're applying internationally. In most cases, wait until the application process or mention briefly if it's relevant to your work authorization."
    },
    {
      q: "How should I format my resume header?",
      a: "Place your name prominently at the top (largest font, 18-24pt). List contact information directly below in a smaller font (10-12pt). Use a clean, readable font like Arial, Calibri, or Helvetica. Avoid decorative fonts that may not be ATS-friendly."
    }
  ];

  // International guidelines by country/region
  const internationalGuidelines = [
    {
      region: "USA & Canada",
      photo: "âŒ Not recommended",
      personalDetails: "âŒ Avoid age, marital status, nationality",
      notes: "Focus on skills and experience. Photo can lead to discrimination claims."
    },
    {
      region: "United Kingdom",
      photo: "âš ï¸ Usually not required",
      personalDetails: "âŒ Avoid personal details",
      notes: "Equal opportunity laws discourage personal information beyond contact details."
    },
    {
      region: "Germany & Austria",
      photo: "âœ… Often expected",
      personalDetails: "âš ï¸ Photo, age, marital status sometimes included",
      notes: "Traditional resumes often include professional photo and date of birth. Check company culture."
    },
    {
      region: "France & Belgium",
      photo: "âš ï¸ Optional but common",
      personalDetails: "âš ï¸ Age sometimes included",
      notes: "Modern resumes often omit photo. Photo laws are changing to prevent discrimination."
    },
    {
      region: "Netherlands & Scandinavia",
      photo: "âŒ Not recommended",
      personalDetails: "âŒ Avoid personal details",
      notes: "Focus on qualifications. Photos are increasingly seen as outdated."
    },
    {
      region: "Australia & New Zealand",
      photo: "âŒ Not recommended",
      personalDetails: "âŒ Avoid personal details",
      notes: "Similar to US/UK standards. Anti-discrimination laws protect candidates."
    },
    {
      region: "United Arab Emirates (UAE)",
      photo: "âœ… Often expected",
      personalDetails: "âœ… Photo, nationality sometimes included",
      notes: "Professional photo is common. Include nationality if relevant to work visa."
    },
    {
      region: "India",
      photo: "âš ï¸ Varies by industry",
      personalDetails: "âš ï¸ Age sometimes included",
      notes: "IT/tech roles often omit photo; traditional industries may expect it. Check company norms."
    },
    {
      region: "Japan & South Korea",
      photo: "âœ… Standard practice",
      personalDetails: "âœ… Photo, age, sometimes marital status",
      notes: "Resumes often include professional photo, birth date, and other personal details on standardized forms."
    },
    {
      region: "China & Hong Kong",
      photo: "âœ… Often expected",
      personalDetails: "âœ… Photo, age common",
      notes: "Professional photo is standard. Age and sometimes gender are typically included."
    }
  ];

  // Sample header formats for different industries
  const sampleHeaders = [
    {
      title: "Standard Format (USA/UK/Canada)",
      style: "standard",
      content: `JOHN SMITH
john.smith@email.com | (555) 123-4567 | San Francisco, CA
linkedin.com/in/johnsmith | github.com/johnsmith`
    },
    {
      title: "Creative Professional Format",
      style: "creative",
      content: `JOHN SMITH
ðŸ“ San Francisco, CA  |  ðŸ“ž (555) 123-4567  |  âœ‰ï¸ john.smith@email.com
ðŸŽ¨ Portfolio: jsmithdesign.com  |  ðŸ’¼ LinkedIn: /in/johnsmith`
    },
    {
      title: "Modern Tech Format",
      style: "tech",
      content: `JOHN SMITH
Software Engineer
john.smith@email.com  |  (555) 123-4567  |  San Francisco, CA
GitHub: github.com/jsmith  |  LinkedIn: /in/johnsmith`
    },
    {
      title: "Traditional German Format (with photo)",
      style: "german",
      content: `[Professional Photo]

JOHN SMITH
ðŸ“ž +49 123 4567890  |  âœ‰ï¸ john.smith@email.com
ðŸ“ Berlin, Germany
ðŸ“… Born: 15.05.1990  |  ðŸ  Married`
    }
  ];

  return (
    <>
      <SEO 
        title="Resume Personal Information: What to Include & What to Avoid 2026 | FreeResumeMakers"
        description="Complete guide to personal information on resumes. Learn which contact details are essential, what to exclude (photo, age, marital status), and international formatting tips to land more interviews."
        keywords="personal information resume, contact information resume, resume header, resume contact details, what to include on resume, resume privacy, resume photo, professional email address resume"
        canonical="https://freeresumemaker.xyz/sections/personal-info"
        type="article"
        publishedTime="2026-01-25T08:00:00+00:00"
        modifiedTime="2026-03-23T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/personal-info" />
        <meta name="description" content="Learn what personal information to include on your resume and what to avoid. Expert tips on resume headers, contact details, and international formatting for 2026." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Personal Info Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            Resume Personal Information: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>ðŸ“… Updated: March 23, 2026</span>
            <span>â±ï¸ 8 min read</span>
            <span>ðŸ‘ï¸ 32,000+ readers</span>
            <span>ðŸŒ 10+ Country Guidelines</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            Your resume's personal information section is the headerâ€”the first thing a recruiter sees. 
            <strong>Well-formatted headers with professional contact details increase response rates by 25%</strong>. 
            Learn exactly what to include, what to avoid, and how to format for your target country.
          </p>
        </header>

        {/* Table of Contents */}
        <div style={{
          background: '#f8f9fa',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: 0 }}>ðŸ“– Table of Contents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="#what-to-include" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ What to Include</a>
            <a href="#what-to-avoid" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ What to Avoid</a>
            <a href="#international" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ International Guidelines</a>
            <a href="#samples" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Sample Headers</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ FAQ</a>
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f7ff 100%)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '40px',
          borderLeft: '6px solid #0070f3'
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a' }}>
            <strong>ðŸ’¡ Pro Tip:</strong> Ensure your email and LinkedIn profile are up-to-date and professional. 
            Recruiters check these within 30 seconds of reviewing your resume. A customized LinkedIn URL (linkedin.com/in/yourname) looks more professional than the default random string.
          </p>
        </div>

        {/* What to Include Section */}
        <section id="what-to-include">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            âœ… What to Include in Your Resume Header
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
            marginTop: '20px'
          }}>
            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #2e7d32' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#2e7d32' }}>Essential Information</h3>
              <ul style={{ margin: 0, lineHeight: '1.8' }}>
                <li><strong>âœ“ Full Name</strong> - Use your legal name; professional nickname optional</li>
                <li><strong>âœ“ Professional Email</strong> - firstname.lastname@domain.com format</li>
                <li><strong>âœ“ Phone Number</strong> - Include country code for international roles</li>
                <li><strong>âœ“ Location</strong> - City and state/country only (no street address)</li>
              </ul>
            </div>
            <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ed6c02' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#ed6c02' }}>Optional but Recommended</h3>
              <ul style={{ margin: 0, lineHeight: '1.8' }}>
                <li><strong>âœ“ LinkedIn Profile</strong> - Custom URL: linkedin.com/in/yourname</li>
                <li><strong>âœ“ Professional Website/Portfolio</strong> - Essential for creative roles</li>
                <li><strong>âœ“ GitHub/GitLab Profile</strong> - Required for developer roles</li>
                <li><strong>âœ“ Portfolio/Behance/Dribbble</strong> - For designers and creatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What NOT to Include Section */}
        <section id="what-to-avoid">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            âŒ What NOT to Include on Your Resume
          </h2>
          <div style={{ background: '#ffebee', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #dc2626' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <p><strong>âœ— Photo</strong> - Not required in US/UK/Canada; can lead to bias</p>
                <p><strong>âœ— Age or Birth Date</strong> - Age discrimination risk</p>
                <p><strong>âœ— Marital Status</strong> - Completely irrelevant</p>
              </div>
              <div>
                <p><strong>âœ— Social Security Number</strong> - Major security risk</p>
                <p><strong>âœ— Full Street Address</strong> - City/state only needed</p>
                <p><strong>âœ— Unprofessional Email</strong> - Avoid nicknames/numbers</p>
              </div>
              <div>
                <p><strong>âœ— Nationality</strong> - Unless visa sponsorship required</p>
                <p><strong>âœ— Religious Affiliation</strong> - Illegal discrimination in many countries</p>
                <p><strong>âœ— Political Views</strong> - Never relevant to qualifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* International Guidelines Section */}
        <section id="international">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸŒ International Resume Formatting Guidelines
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Personal information expectations vary by country. Research your target country's norms before applying:
          </p>
          
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Country/Region</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Photo</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Personal Details</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {internationalGuidelines.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '12px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.region}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.photo}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.personalDetails}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sample Headers Section */}
        <section id="samples">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Sample Resume Headers by Format
          </h2>
          
          {sampleHeaders.map((sample, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#0070f3' }}>{sample.title}</h3>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '24px', 
                borderRadius: '12px', 
                border: '1px solid #e9ecef',
                textAlign: 'center',
                fontFamily: 'monospace',
                fontSize: '14px',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6'
              }}>
                {sample.content}
              </div>
            </div>
          ))}
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ¤– ATS-Friendly Header Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Keep formatting simple:</strong> Avoid tables, text boxes, or columns in your headerâ€”ATS systems may not parse them correctly</li>
              <li><strong>Use standard fonts:</strong> Arial, Calibri, Helvetica, or Times New Roman for best compatibility</li>
              <li><strong>Place contact info on one line:</strong> Use pipes (|) or commas to separate items for easy parsing</li>
              <li><strong>Include full name at top:</strong> Make it the largest text (18-24pt) for clear identification</li>
              <li><strong>Avoid graphics:</strong> No icons, logos, or decorative elements that may confuse ATS parsers</li>
              <li><strong>Use standard section order:</strong> Name â†’ Contact Info â†’ Professional Summary</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ marginBottom: '40px', marginTop: '20px' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '24px', borderBottom: '1px solid #e9ecef', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#1a1a1a' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
          color: 'white',
          marginTop: '50px'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
            Create Your Perfect Resume Header
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Format your personal information professionally in minutes.
          </p>
          <Link 
            href="/editor"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'white',
              color: '#0070f3',
              textDecoration: 'none',
              borderRadius: '40px',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Build Your Resume Now â†’
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '50px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1a1a1a' }}>ðŸ“š Related Resume Guides</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/sections/summary" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Professional Summary Guide â†’</Link>
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide â†’</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 â†’</Link>
            <Link href="/blog/how-to-write-resume" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>How to Write a Resume â†’</Link>
          </div>
        </div>
      </main>
    </>
  );
}
