import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResumeChecker() {
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('length');

  const checkResume = () => {
    const checks = {
      length: { score: 0, issues: [] },
      contact: { score: 0, issues: [] },
      keywords: { score: 0, issues: [] },
      formatting: { score: 0, issues: [] },
      actionVerbs: { score: 0, issues: [] }
    };

    // Length check (target: 300-800 words)
    const wordCount = resumeText.split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < 200) {
      checks.length.issues.push('Resume is too short (less than 200 words) - add more details about your experience and achievements');
      checks.length.score = 20;
    } else if (wordCount > 1000) {
      checks.length.issues.push('Resume may be too long (over 1000 words) - consider condensing to focus on most relevant experience');
      checks.length.score = 40;
    } else if (wordCount >= 300 && wordCount <= 800) {
      checks.length.score = 100;
    } else {
      checks.length.score = 60;
      checks.length.issues.push(wordCount < 300 ? 'Consider adding more details to reach 300+ words' : 'Consider condensing content to stay under 800 words');
    }

    // Contact info check
    const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(resumeText);
    const hasPhone = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/.test(resumeText);
    const hasLinkedIn = /linkedin\.com\/in\//.test(resumeText.toLowerCase());
    
    let contactScore = 0;
    if (hasEmail) contactScore += 40;
    if (hasPhone) contactScore += 30;
    if (hasLinkedIn) contactScore += 30;
    
    checks.contact.score = contactScore;
    if (!hasEmail) checks.contact.issues.push('Missing email address - recruiters need a way to contact you');
    if (!hasPhone) checks.contact.issues.push('Missing phone number - include with area code');
    if (!hasLinkedIn) checks.contact.issues.push('Missing LinkedIn profile URL - 87% of recruiters use LinkedIn to screen candidates');

    // Action verbs check
    const actionVerbs = ['achieved', 'managed', 'developed', 'created', 'implemented', 'led', 'increased', 'decreased', 'improved', 'designed', 'built', 'launched', 'delivered', 'coordinated', 'organized', 'negotiated', 'presented', 'trained', 'mentored', 'supervised', 'spearheaded', 'streamlined', 'optimized', 'accelerated', 'executed', 'established', 'facilitated', 'generated'];
    const foundVerbs = actionVerbs.filter(verb => resumeText.toLowerCase().includes(verb));
    const verbScore = Math.min(100, Math.round((foundVerbs.length / 6) * 100));
    
    checks.actionVerbs.score = verbScore;
    if (foundVerbs.length < 4) {
      checks.actionVerbs.issues.push(`Use more action verbs (found: ${foundVerbs.length}, recommended: 6+) to make your achievements stand out`);
    } else if (foundVerbs.length < 6) {
      checks.actionVerbs.issues.push(`Good start with action verbs (found: ${foundVerbs.length}), try adding 2-3 more for stronger impact`);
    }

    // Formatting check
    const hasBulletPoints = (resumeText.match(/[Ã¢â‚¬Â¢\-\*]\s/g) || []).length > 3;
    const hasNumbers = (resumeText.match(/[0-9]+%/g) || []).length > 0 || (resumeText.match(/[0-9]+[,]?[0-9]*/g) || []).length > 2;
    const hasSectionHeaders = /(experience|education|skills|summary|work history|employment|qualifications|achievements)/i.test(resumeText);
    
    let formatScore = 30;
    if (hasBulletPoints) formatScore += 30;
    if (hasNumbers) formatScore += 20;
    if (hasSectionHeaders) formatScore += 20;
    
    checks.formatting.score = formatScore;
    if (!hasBulletPoints) checks.formatting.issues.push('Use bullet points for better readability - recruiters scan resumes quickly');
    if (!hasNumbers) checks.formatting.issues.push('Include quantifiable achievements (%, $, numbers) to demonstrate impact');
    if (!hasSectionHeaders) checks.formatting.issues.push('Use clear section headings (Experience, Education, Skills) for ATS compatibility');

    // Calculate overall score
    const overallScore = Math.round((checks.length.score + checks.contact.score + checks.actionVerbs.score + checks.formatting.score) / 4);

    setResults({
      overall: overallScore,
      checks,
      wordCount,
      actionVerbCount: foundVerbs.length
    });
  };

  const getScoreColor = (score) => {
    if (score >= 80) return { color: '#059669', bg: '#d1fae5', text: 'Excellent - Ready for Applications' };
    if (score >= 60) return { color: '#b45309', bg: '#fef3c7', text: 'Needs Improvement - Review Suggestions' };
    return { color: '#b91c1c', bg: '#fee2e2', text: 'Critical Issues - Requires Updates' };
  };

  const getScoreEmoji = (score) => {
    if (score >= 80) return 'Ã¢Å“â€¦';
    if (score >= 60) return 'Ã¢Å¡Â Ã¯Â¸Â';
    return 'Ã¢ÂÅ’';
  };

  // HowTo schema for resume checking
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check Your Resume for Errors and Optimize for Success",
    "description": "A comprehensive step-by-step guide to analyzing your resume for length, contact information, action verbs, formatting issues, and ATS compatibility.",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paste Your Resume",
        "text": "Copy and paste your full resume text into the free resume checker tool.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Run Complete Analysis",
        "text": "Click the Check Resume button to get instant feedback on length, contact info, action verbs, and formatting.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Review Category Scores",
        "text": "Review each category score and read the specific improvement suggestions provided.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Implement Improvements",
        "text": "Apply the suggested improvements to your resume and run the analysis again to see your score increase.",
        "position": 4
      }
    ]
  };

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
        "name": "Tools",
        "item": "https://freeresumemaker.xyz/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Resume Checker",
        "item": "https://freeresumemaker.xyz/tools/resume-checker"
      }
    ]
  };

  // FAQ Schema for Resume Checker
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a resume checker tool do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A resume checker tool analyzes your resume for common issues including length, missing contact information, action verb usage, formatting problems, and ATS compatibility. It provides instant feedback and specific suggestions for improvement."
        }
      },
      {
        "@type": "Question",
        "name": "How long should my resume be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal resume length is 300-800 words or 1-2 pages. Entry-level resumes can be 1 page, while experienced professionals with 10+ years may need 2 pages. Our resume checker will tell you if your length needs adjustment."
        }
      },
      {
        "@type": "Question",
        "name": "Why are action verbs important in a resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Action verbs like 'achieved,' 'managed,' and 'increased' make your accomplishments more powerful and measurable. They help recruiters quickly understand your impact and are proven to increase interview rates."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my resume score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Review the specific suggestions in each category. Common improvements include adding quantifiable achievements (numbers, percentages), using more action verbs, ensuring all contact information is present, and using clear section headings for better ATS compatibility."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Free Resume Checker 2026 - Analyze Your Resume for Errors & Get Instant Feedback | AI-Powered Tool"
        description="Free AI-powered resume checker that analyzes your resume for length, contact info, action verbs, and formatting issues. Get instant feedback and improvement tips to land more interviews. Used by 100,000+ job seekers."
        keywords="resume checker, resume analyzer, resume review, CV checker, resume feedback, resume evaluation, resume scanner, resume critique, resume grader, free resume checker online"
        canonical="https://freeresumemaker.xyz/tools/resume-checker"
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}>
        {/* Breadcrumb */}
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
          <Link href="/tools" style={{ color: '#666', textDecoration: 'none' }}>Tools</Link>
          <span>Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }}>Resume Checker</span>
        </nav>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>Ã°Å¸â€Â</div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700
          }}>
            Free Resume Checker: <span style={{ color: '#0070f3' }}>Get Instant Feedback</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Analyze your resume for common issues and get instant improvement tips to land more interviews.
            <strong> Trusted by 100,000+ job seekers to improve their resumes.</strong>
          </p>
        </header>

        {/* Pro Tip Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e8ff 100%)', 
          padding: '24px', 
          borderRadius: '12px', 
          marginBottom: '32px',
          borderLeft: '4px solid #0070f3'
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6 }}>
            <strong>Ã°Å¸â€™Â¡ Pro Tip:</strong> Recruiters spend an average of <strong>6-7 seconds scanning each resume</strong>. 
            Our checker helps ensure your resume passes the test and makes a strong first impression.
          </p>
        </div>

        {/* Main Tool Section */}
        <div style={{ 
          background: '#f8fafc', 
          padding: '32px', 
          borderRadius: '16px', 
          marginBottom: '32px', 
          border: '1px solid #e9ecef' 
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '12px', color: '#1a1a1a' }}>
            Ã°Å¸â€œÂ Paste Your Resume for Analysis
          </h2>
          <p style={{ marginBottom: '20px', color: '#666', fontSize: '16px' }}>
            Paste your resume text below and get a comprehensive analysis with actionable improvements.
          </p>
          
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '16px' }}>
            Resume Text
          </label>
          <textarea 
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={15}
            style={{ 
              width: '100%', 
              padding: '16px', 
              border: '2px solid #e2e8f0', 
              borderRadius: '12px', 
              fontSize: '14px',
              fontFamily: 'monospace',
              resize: 'vertical',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#0070f3'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            placeholder="Paste your resume text here to check for issues... (Include your full resume for best results)"
          />
          
          <button 
            onClick={checkResume} 
            disabled={!resumeText.trim()}
            style={{ 
              marginTop: '24px', 
              padding: '14px 32px', 
              background: !resumeText.trim() ? '#ccc' : '#0070f3', 
              color: 'white', 
              border: 'none', 
              borderRadius: '10px', 
              fontSize: '16px', 
              cursor: !resumeText.trim() ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            Ã°Å¸â€Â Check Resume
          </button>
        </div>

        {/* Results Section */}
        {results && (
          <div style={{ 
            background: 'white', 
            padding: '32px', 
            borderRadius: '16px', 
            border: '1px solid #e9ecef',
            animation: 'fadeIn 0.5s ease'
          }}>
            {/* Overall Score */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              marginBottom: '30px', 
              flexWrap: 'wrap', 
              gap: '16px' 
            }}>
              <div>
                <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>
                  Resume Score: <span style={{ color: getScoreColor(results.overall).color }}>{results.overall}%</span>
                </h2>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Word count: <strong>{results.wordCount}</strong> words | 
                  Action verbs: <strong>{results.actionVerbCount}</strong> found
                </p>
              </div>
              <div style={{ 
                background: getScoreColor(results.overall).bg, 
                color: getScoreColor(results.overall).color,
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '16px'
              }}>
                {getScoreEmoji(results.overall)} {getScoreColor(results.overall).text}
              </div>
            </div>

            {/* Score Tabs */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '32px', 
              borderBottom: '2px solid #e2e8f0', 
              paddingBottom: '16px',
              flexWrap: 'wrap',
              overflowX: 'auto'
            }}>
              {[
                { id: 'length', label: 'Ã°Å¸â€œÂ Length', score: results.checks.length.score, tip: 'Ideal: 300-800 words' },
                { id: 'contact', label: 'Ã°Å¸â€œÅ¾ Contact Info', score: results.checks.contact.score, tip: 'Email, phone, LinkedIn' },
                { id: 'actionVerbs', label: 'Ã¢Å¡Â¡ Action Verbs', score: results.checks.actionVerbs.score, tip: 'Use strong verbs' },
                { id: 'formatting', label: 'Ã°Å¸â€œâ€¹ Formatting', score: results.checks.formatting.score, tip: 'Bullets & numbers' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)} 
                  style={{ 
                    padding: '10px 20px', 
                    background: activeTab === tab.id ? '#0070f3' : '#f1f5f9', 
                    color: activeTab === tab.id ? 'white' : '#333', 
                    border: 'none', 
                    borderRadius: '10px', 
                    cursor: 'pointer',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                  <span style={{ 
                    background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : '#cbd5e1',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>{tab.score}%</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ marginBottom: '32px' }}>
              {activeTab === 'length' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '48px' }}>Ã°Å¸â€œÂ</div>
                    <div>
                      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Length Score: {results.checks.length.score}%</h3>
                      <p>Your resume has <strong>{results.wordCount}</strong> words</p>
                      <p style={{ fontSize: '14px', color: '#666' }}>Ã¢Å“â€œ Target: 300-800 words (1-2 pages) for optimal recruiter attention</p>
                    </div>
                  </div>
                  {results.checks.length.issues.map((issue, i) => (
                    <div key={i} style={{ background: '#fef3c7', padding: '14px', borderRadius: '10px', marginBottom: '10px', borderLeft: '3px solid #f59e0b' }}>
                      Ã¢Å¡Â Ã¯Â¸Â {issue}
                    </div>
                  ))}
                  {results.checks.length.issues.length === 0 && (
                    <div style={{ background: '#d1fae5', padding: '14px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                      Ã¢Å“â€¦ Perfect length! Your resume is well-proportioned and recruiters will appreciate the concise format.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '48px' }}>Ã°Å¸â€œÅ¾</div>
                    <div>
                      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Contact Info Score: {results.checks.contact.score}%</h3>
                      <p style={{ fontSize: '14px', color: '#666' }}>Ã¢Å“â€œ Include email, phone, and LinkedIn for maximum recruiter reach</p>
                    </div>
                  </div>
                  {results.checks.contact.issues.map((issue, i) => (
                    <div key={i} style={{ background: '#fee2e2', padding: '14px', borderRadius: '10px', marginBottom: '10px', borderLeft: '3px solid #ef4444' }}>
                      Ã¢ÂÅ’ {issue}
                    </div>
                  ))}
                  {results.checks.contact.issues.length === 0 && (
                    <div style={{ background: '#d1fae5', padding: '14px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                      Ã¢Å“â€¦ All contact information is present! Recruiters can easily reach you.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'actionVerbs' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '48px' }}>Ã¢Å¡Â¡</div>
                    <div>
                      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Action Verbs Score: {results.checks.actionVerbs.score}%</h3>
                      <p>Found <strong>{results.actionVerbCount}</strong> strong action verbs</p>
                      <p style={{ fontSize: '14px', color: '#666' }}>Ã¢Å“â€œ Strong action verbs make your achievements stand out to recruiters</p>
                    </div>
                  </div>
                  {results.checks.actionVerbs.issues.map((issue, i) => (
                    <div key={i} style={{ background: '#fef3c7', padding: '14px', borderRadius: '10px', marginBottom: '10px', borderLeft: '3px solid #f59e0b' }}>
                      Ã¢Å¡Â Ã¯Â¸Â {issue}
                    </div>
                  ))}
                  <div style={{ marginTop: '16px', padding: '16px', background: '#f0f7ff', borderRadius: '10px' }}>
                    <strong>Ã°Å¸â€™Â¡ Top Action Verbs to Use:</strong> Achieved, Managed, Developed, Created, Implemented, Led, Increased, Improved, Designed, Built, Launched, Optimized
                  </div>
                </div>
              )}

              {activeTab === 'formatting' && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '48px' }}>Ã°Å¸â€œâ€¹</div>
                    <div>
                      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Formatting Score: {results.checks.formatting.score}%</h3>
                      <p style={{ fontSize: '14px', color: '#666' }}>Ã¢Å“â€œ Good formatting helps recruiters scan your resume in 6-7 seconds</p>
                    </div>
                  </div>
                  {results.checks.formatting.issues.map((issue, i) => (
                    <div key={i} style={{ background: '#fef3c7', padding: '14px', borderRadius: '10px', marginBottom: '10px', borderLeft: '3px solid #f59e0b' }}>
                      Ã¢Å¡Â Ã¯Â¸Â {issue}
                    </div>
                  ))}
                  {results.checks.formatting.issues.length === 0 && (
                    <div style={{ background: '#d1fae5', padding: '14px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                      Ã¢Å“â€¦ Great formatting! Your resume is well-structured and ATS-friendly.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div style={{ 
              marginTop: '32px', 
              paddingTop: '24px', 
              borderTop: '2px solid #e2e8f0',
              background: '#f8fafc',
              padding: '24px',
              borderRadius: '12px'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Ã°Å¸Å¡â‚¬ Next Steps to Improve Your Resume</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/tools/ats-scanner" style={{ 
                  padding: '12px 24px', 
                  background: '#0070f3', 
                  color: 'white', 
                  textDecoration: 'none', 
                  borderRadius: '10px',
                  fontWeight: '500',
                  transition: 'transform 0.2s'
                }}>
                  Ã°Å¸â€œÅ  Check ATS Compatibility Ã¢â€ â€™
                </Link>
                <Link href="/tools/keywords-finder" style={{ 
                  padding: '12px 24px', 
                  background: '#f1f5f9', 
                  color: '#333', 
                  textDecoration: 'none', 
                  borderRadius: '10px',
                  fontWeight: '500'
                }}>
                  Ã°Å¸â€â€˜ Find Keywords Ã¢â€ â€™
                </Link>
                <Link href="/editor" style={{ 
                  padding: '12px 24px', 
                  background: '#f1f5f9', 
                  color: '#333', 
                  textDecoration: 'none', 
                  borderRadius: '10px',
                  fontWeight: '500'
                }}>
                  Ã¢Å“ÂÃ¯Â¸Â Build ATS-Friendly Resume Ã¢â€ â€™
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <section style={{
          marginTop: '48px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
            Frequently Asked Questions About Resume Checking
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                What does a resume checker tool do?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                A resume checker tool analyzes your resume for common issues including length, missing contact information, 
                action verb usage, formatting problems, and ATS compatibility. It provides instant feedback and specific 
                suggestions for improvement to help you land more interviews.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How long should my resume be?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                The ideal resume length is 300-800 words or 1-2 pages. Entry-level candidates with less experience should 
                aim for 1 page, while experienced professionals with 10+ years may need 2 pages. Our resume checker will 
                tell you if your length needs adjustment.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                Why are action verbs important in a resume?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Action verbs like 'achieved,' 'managed,' and 'increased' make your accomplishments more powerful and measurable. 
                They help recruiters quickly understand your impact and are proven to increase interview rates by up to 40%.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How can I improve my resume score?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Review the specific suggestions in each category. Common improvements include adding quantifiable achievements 
                (numbers, percentages), using more action verbs, ensuring all contact information is present, and using clear 
                section headings for better ATS compatibility.
              </p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>More Free Resume Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/ats-scanner" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>Ã°Å¸Â¤â€“ ATS Scanner Ã¢â€ â€™</Link>
            <Link href="/tools/keywords-finder" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>Ã°Å¸â€â€˜ Keywords Finder Ã¢â€ â€™</Link>
            <Link href="/tools/resume-review" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>Ã°Å¸â€œÂ Resume Review Ã¢â€ â€™</Link>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '40px',
          background: '#0070f3',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>Ready to Build an Interview-Winning Resume?</h3>
          <p style={{ marginBottom: '24px', fontSize: '16px', opacity: 0.9 }}>
            Use our free resume builder with 20+ ATS-friendly templates and professional designs
          </p>
          <Link href="/editor" style={{ 
            display: 'inline-block', 
            padding: '12px 32px', 
            background: 'white', 
            color: '#0070f3', 
            textDecoration: 'none', 
            borderRadius: '10px', 
            fontWeight: '600',
            fontSize: '16px'
          }}>
            Build Your Resume Now Ã¢â€ â€™
          </Link>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}
