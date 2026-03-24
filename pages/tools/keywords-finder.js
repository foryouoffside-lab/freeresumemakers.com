import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function KeywordsFinder() {
  const [jobDesc, setJobDesc] = useState('');
  const [keywords, setKeywords] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  const findKeywords = () => {
    // Extract keywords from job description
    const words = jobDesc.toLowerCase().split(/\W+/);
    
    // Filter out common words and short words
    const stopWords = ['the', 'and', 'for', 'with', 'this', 'that', 'have', 'will', 'your', 'from', 'they', 'know', 'about', 'into', 'than', 'then', 'them', 'only', 'other', 'such', 'also', 'can', 'may', 'must', 'should', 'could', 'would'];
    
    const keywordCounts = {};
    words.forEach(word => {
      if (word.length > 3 && !stopWords.includes(word)) {
        keywordCounts[word] = (keywordCounts[word] || 0) + 1;
      }
    });

    // Sort by frequency
    const sortedKeywords = Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30)
      .map(([word, count]) => ({ word, count, importance: count > 3 ? 'High' : count > 1 ? 'Medium' : 'Low' }));

    setKeywords({
      allKeywords: sortedKeywords,
      totalFound: sortedKeywords.length,
      categories: {
        hard: sortedKeywords.filter(k => ['software', 'python', 'java', 'react', 'excel', 'sql', 'aws', 'javascript', 'html', 'css', 'node', 'mongodb', 'typescript', 'docker', 'kubernetes', 'api', 'database'].includes(k.word)),
        soft: sortedKeywords.filter(k => ['leadership', 'communication', 'teamwork', 'problem', 'solving', 'management', 'collaboration', 'analytical', 'creative', 'organized', 'time', 'adaptability', 'critical', 'thinking', 'interpersonal'].includes(k.word)),
        industry: sortedKeywords.filter(k => ['marketing', 'finance', 'healthcare', 'technology', 'sales', 'engineering', 'design', 'education', 'consulting', 'operations', 'human', 'resources'].includes(k.word))
      }
    });
  };

  const copyToClipboard = () => {
    if (!keywords) return;
    const keywordList = keywords.allKeywords.map(k => k.word).join('\n');
    navigator.clipboard.writeText(keywordList);
    setCopySuccess('✅ Keywords copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  // HowTo schema for keyword extraction guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Extract Keywords from Job Description for Resume Optimization",
    "description": "A step-by-step guide to extracting important keywords from any job description to optimize your resume for ATS systems and increase interview chances.",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Copy Job Description",
        "text": "Copy the full job description from the job posting website.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Paste into Keyword Finder",
        "text": "Paste the job description into the text area on this page.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Extract Keywords",
        "text": "Click the Extract Keywords button to analyze the text and identify high-priority keywords.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Use Keywords in Resume",
        "text": "Incorporate the extracted keywords naturally into your resume skills section and work experience descriptions.",
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
        "item": "https://freeresumemakers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://freeresumemakers.com/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Resume Keywords Finder",
        "item": "https://freeresumemakers.com/tools/keywords-finder"
      }
    ]
  };

  // FAQ Schema for Keywords Finder
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are resume keywords and why are they important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resume keywords are specific terms and phrases from job descriptions that ATS systems and recruiters look for. They're important because over 75% of resumes are screened by ATS before reaching human recruiters, and using the right keywords significantly increases your chances of passing the initial screening."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find the right keywords for my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our Resume Keywords Finder tool to extract keywords from any job description. Simply paste the job description, click extract, and the tool will identify high-priority keywords based on frequency and relevance. Focus on keywords marked as 'High Priority' for the best results."
        }
      },
      {
        "@type": "Question",
        "name": "Where should I place keywords in my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Place important keywords in your professional summary, skills section, work experience descriptions, and education section. Ensure keywords appear naturally within context and avoid keyword stuffing, which can make your resume look unprofessional."
        }
      },
      {
        "@type": "Question",
        "name": "How many keywords should I include in my resume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on including 15-20 high-priority keywords from the job description. Quality matters more than quantity - ensure keywords are relevant to your actual skills and experience, and integrate them naturally throughout your resume."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Resume Keywords Finder 2026 - Extract Keywords from Job Description | Free ATS Keyword Tool"
        description="Free resume keywords finder tool to extract important keywords from any job description. Optimize your resume for ATS systems and recruiters. Get higher interview rates by using the right keywords. Used by 50,000+ job seekers."
        keywords="resume keywords, keyword finder, job description keywords, ATS keywords, resume optimization, keyword extractor, resume scanner, job keywords, resume keywords 2026, ATS friendly keywords, resume keyword tool"
        canonical="https://freeresumemakers.com/tools/keywords-finder"
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
          <span>›</span>
          <Link href="/tools" style={{ color: '#666', textDecoration: 'none' }}>Tools</Link>
          <span>›</span>
          <span style={{ color: '#0070f3' }}>Resume Keywords Finder</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔑</div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700
          }}>
            Resume Keywords Finder: <span style={{ color: '#0070f3' }}>Extract Job Description Keywords</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Extract important keywords from any job description to optimize your resume for ATS systems and recruiters. 
            <strong> Used by 50,000+ job seekers to land more interviews.</strong>
          </p>
        </div>

        {/* Pro Tip Banner */}
        <div style={{ 
          background: '#e3f2fd', 
          padding: '24px', 
          borderRadius: '12px', 
          marginBottom: '32px',
          borderLeft: '4px solid #0070f3'
        }}>
          <p style={{ margin: 0, fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6 }}>
            <strong>💡 Pro Tip:</strong> Over 75% of resumes are rejected by ATS systems before reaching human recruiters. 
            Using the right keywords from the job description can increase your interview chances by up to 40%. 
            Our tool identifies the most important keywords recruiters are looking for.
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
            🔍 Extract Keywords from Job Description
          </h2>
          <p style={{ marginBottom: '20px', color: '#666', fontSize: '16px' }}>
            Paste any job description below and get instant keyword analysis to optimize your resume.
          </p>
          
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '16px' }}>
            Job Description
          </label>
          <textarea 
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            rows={12}
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
            placeholder="Paste the job description here to extract keywords... (Include full job requirements for best results)"
          />
          
          <div style={{ marginTop: '24px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={findKeywords} 
              disabled={!jobDesc.trim()}
              style={{ 
                padding: '14px 32px', 
                background: !jobDesc.trim() ? '#ccc' : '#0070f3', 
                color: 'white', 
                border: 'none', 
                borderRadius: '10px', 
                fontSize: '16px', 
                cursor: !jobDesc.trim() ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              🔍 Extract Keywords
            </button>
            {keywords && (
              <button 
                onClick={copyToClipboard} 
                style={{ 
                  padding: '14px 32px', 
                  background: 'white', 
                  color: '#0070f3', 
                  border: '2px solid #0070f3', 
                  borderRadius: '10px', 
                  fontSize: '16px', 
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
              >
                📋 Copy All Keywords
              </button>
            )}
            {copySuccess && <span style={{ color: '#059669', fontWeight: '500', fontSize: '14px' }}>{copySuccess}</span>}
          </div>
        </div>

        {/* Results Section */}
        {keywords && (
          <div style={{ 
            background: 'white', 
            padding: '32px', 
            borderRadius: '16px', 
            border: '1px solid #e9ecef',
            animation: 'fadeIn 0.5s ease'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <h2 style={{ fontSize: '28px', margin: 0 }}>
                📊 Extracted Keywords
              </h2>
              <div style={{ 
                background: '#0070f3', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {keywords.totalFound} Keywords Found
              </div>
            </div>
            
            {/* Keyword Categories */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>
                Top Keywords by Priority
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {keywords.allKeywords.map((kw, i) => (
                  <div key={i} style={{ 
                    background: kw.importance === 'High' ? '#dbeafe' : kw.importance === 'Medium' ? '#fef9c3' : '#f1f5f9',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: `1px solid ${kw.importance === 'High' ? '#3b82f6' : kw.importance === 'Medium' ? '#eab308' : '#cbd5e1'}`
                  }}>
                    <span style={{ fontWeight: kw.importance === 'High' ? '600' : '400' }}>{kw.word}</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>({kw.count})</span>
                    {kw.importance === 'High' && (
                      <span style={{ fontSize: '10px', background: '#3b82f6', color: 'white', padding: '2px 6px', borderRadius: '12px' }}>
                        High Priority
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {keywords.categories.hard.length > 0 && (
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>💻 Hard Skills & Technical Keywords</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {keywords.categories.hard.map((kw, i) => (
                      <span key={i} style={{ background: '#dbeafe', padding: '6px 12px', borderRadius: '20px', fontSize: '13px' }}>{kw.word}</span>
                    ))}
                  </div>
                </div>
              )}

              {keywords.categories.soft.length > 0 && (
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>🤝 Soft Skills & Interpersonal Keywords</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {keywords.categories.soft.map((kw, i) => (
                      <span key={i} style={{ background: '#fef9c3', padding: '6px 12px', borderRadius: '20px', fontSize: '13px' }}>{kw.word}</span>
                    ))}
                  </div>
                </div>
              )}

              {keywords.categories.industry.length > 0 && (
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#0070f3' }}>🏢 Industry-Specific Keywords</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {keywords.categories.industry.map((kw, i) => (
                      <span key={i} style={{ background: '#e0f2fe', padding: '6px 12px', borderRadius: '20px', fontSize: '13px' }}>{kw.word}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* How to Use Section */}
            <div style={{ background: '#e6f7ff', padding: '28px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px', color: '#1a1a1a' }}>📝 How to Use These Keywords in Your Resume</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <strong style={{ color: '#0070f3' }}>1. Skills Section</strong>
                  <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>Include high-priority keywords in a dedicated skills section at the top of your resume.</p>
                </div>
                <div>
                  <strong style={{ color: '#0070f3' }}>2. Work Experience</strong>
                  <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>Naturally incorporate keywords into your bullet points and achievements.</p>
                </div>
                <div>
                  <strong style={{ color: '#0070f3' }}>3. Professional Summary</strong>
                  <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>Add 2-3 key keywords in your summary statement.</p>
                </div>
                <div>
                  <strong style={{ color: '#0070f3' }}>4. Avoid Keyword Stuffing</strong>
                  <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>Use keywords naturally within context - don't just list them randomly.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div style={{
          marginTop: '48px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
            Frequently Asked Questions About Resume Keywords
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                What are resume keywords and why are they important?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Resume keywords are specific terms and phrases from job descriptions that ATS systems and recruiters look for. 
                They're important because over 75% of resumes are screened by ATS before reaching human recruiters, and using 
                the right keywords significantly increases your chances of passing the initial screening.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How do I find the right keywords for my resume?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Use our Resume Keywords Finder tool to extract keywords from any job description. Simply paste the job description, 
                click extract, and the tool will identify high-priority keywords based on frequency and relevance. Focus on keywords 
                marked as "High Priority" for the best results.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                Where should I place keywords in my resume?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Place important keywords in your professional summary, skills section, work experience descriptions, and education section. 
                Ensure keywords appear naturally within context and avoid keyword stuffing, which can make your resume look unprofessional.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How many keywords should I include in my resume?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Focus on including 15-20 high-priority keywords from the job description. Quality matters more than quantity - ensure 
                keywords are relevant to your actual skills and experience, and integrate them naturally throughout your resume.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ fontSize: '22px', marginBottom: '20px', color: '#1a1a1a' }}>More Free Resume Optimization Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/ats-scanner" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>🤖 ATS Scanner →</Link>
            <Link href="/tools/resume-checker" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>✓ Resume Checker →</Link>
            <Link href="/tools/resume-review" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>📝 Resume Review →</Link>
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
          <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>Ready to Build Your Optimized Resume?</h3>
          <p style={{ marginBottom: '24px', fontSize: '16px', opacity: 0.9 }}>
            Use our free resume builder with 20+ ATS-friendly templates and get more interview calls
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
            Start Building Your Resume Now →
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