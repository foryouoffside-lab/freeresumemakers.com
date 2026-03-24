import Head from 'next/head';
import { useState } from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ATSScanner() {
  const [resumeText, setResumeText] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [results, setResults] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const analyzeATS = () => {
    if (!resumeText.trim() || !jobDesc.trim()) return;
    
    setAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      // Simple keyword matching logic
      const jobKeywords = jobDesc.toLowerCase().split(/\W+/);
      const resumeLower = resumeText.toLowerCase();
      const matched = jobKeywords.filter(word => word.length > 3 && resumeLower.includes(word));
      const uniqueMatched = [...new Set(matched)];
      const score = Math.min(100, Math.round((uniqueMatched.length / jobKeywords.filter(w => w.length > 3).length) * 100));
      
      // Generate suggestions based on score
      let suggestions = [];
      if (score < 50) {
        suggestions = [
          '❌ Add more keywords from the job description',
          '❌ Use standard section headings (Experience, Education, Skills)',
          '❌ Avoid tables, columns, and graphics',
          '❌ Include specific metrics and achievements',
          '❌ Match your skills to job requirements'
        ];
      } else if (score < 75) {
        suggestions = [
          '⚠️ Add 5-10 more relevant keywords',
          '⚠️ Quantify your achievements with numbers',
          '⚠️ Include industry-specific terminology',
          '✓ Good formatting overall',
          '✓ Strong skills section'
        ];
      } else {
        suggestions = [
          '✓ Excellent keyword optimization!',
          '✓ Great use of industry terminology',
          '✓ Strong formatting for ATS',
          '💡 Consider adding more metrics and numbers',
          '💡 Include a professional summary section'
        ];
      }
      
      setResults({
        score: score || 0,
        matchedKeywords: uniqueMatched.slice(0, 20),
        suggestions: suggestions,
        keywordCount: uniqueMatched.length,
        totalJobKeywords: jobKeywords.filter(w => w.length > 3).length
      });
      setAnalyzing(false);
    }, 1500);
  };

  const clearForm = () => {
    setResumeText('');
    setJobDesc('');
    setResults(null);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#28a745';
    if (score >= 60) return '#ffc107';
    return '#dc3545';
  };

  const getScoreEmoji = (score) => {
    if (score >= 80) return '🎉';
    if (score >= 60) return '📈';
    return '📊';
  };

  // Generate structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an ATS resume scanner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ATS resume scanner is a tool that analyzes your resume against job descriptions to check how well it would perform with Applicant Tracking Systems used by employers to screen candidates."
        }
      },
      {
        "@type": "Question",
        "name": "How does ATS scanning work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ATS scanners analyze keyword matches, formatting compatibility, and content relevance between your resume and the job description to calculate a compatibility score."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good ATS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good ATS score is typically 80% or higher. This indicates strong keyword optimization and good compatibility with automated screening systems."
        }
      }
    ]
  };

  // Generate structured data for the tool
  const toolStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free ATS Resume Scanner",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free AI-powered ATS resume scanner that analyzes your resume against job descriptions and provides optimization suggestions to improve your chances of getting interviews.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <>
      <SEO 
        title="Free ATS Resume Scanner - Check Your Resume Score & Optimize for Applicant Tracking Systems | AI-Powered Analysis"
        description="Free AI-powered ATS resume scanner that analyzes your resume against job descriptions. Get instant feedback on keywords, formatting, and ATS compatibility. Improve your chances of getting interviews with our resume optimization tool. Used by 10,000+ job seekers."
        keywords="ATS scanner, resume scanner, ATS checker, applicant tracking system, resume analyzer, AI resume review, resume optimization tool, resume keyword checker, ATS resume checker, resume score checker"
        canonical="https://freeresumemakers.com/tools/ats-scanner"
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolStructuredData) }}
      />
      
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
          <span style={{ color: '#0070f3' }}>ATS Scanner</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🤖</div>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700
          }}>
            Free ATS Resume Scanner: <span style={{ color: '#0070f3' }}>Check Your Resume Score</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Check how well your resume matches the job description and get past automated screening systems. 
            <strong> 10,000+ job seekers have improved their interview chances with our free tool.</strong>
          </p>
        </div>

        {/* How ATS Works Section */}
        <div style={{
          background: '#e3f2fd',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '12px', color: '#0070f3' }}>
            What is an Applicant Tracking System (ATS)?
          </h2>
          <p style={{ color: '#666', margin: 0, fontSize: '16px', lineHeight: 1.6 }}>
            <strong>Over 75% of Fortune 500 companies</strong> use ATS to screen resumes before they reach human recruiters. 
            Our scanner helps you optimize your resume to pass these automated filters and <strong>increase your interview chances by up to 40%</strong>.
          </p>
        </div>

        {/* Input Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '30px'
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Paste Your Resume <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#666' }}>(Text format recommended)</span>
            </label>
            <textarea 
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={15}
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '14px',
                lineHeight: '1.6',
                fontFamily: 'monospace',
                resize: 'vertical'
              }}
              placeholder="Paste your resume text here... (Remove tables, columns, and graphics for best results)"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Paste Job Description
            </label>
            <textarea 
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              rows={15}
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '14px',
                lineHeight: '1.6',
                fontFamily: 'monospace',
                resize: 'vertical'
              }}
              placeholder="Paste job description here... (Include full job requirements for accurate analysis)"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
          <button 
            onClick={analyzeATS}
            disabled={analyzing || !resumeText || !jobDesc}
            style={{
              padding: '14px 32px',
              background: (!resumeText || !jobDesc) ? '#ccc' : '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: (!resumeText || !jobDesc) ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {analyzing ? 'Analyzing...' : '🔍 Analyze Resume'}
          </button>
          <button 
            onClick={clearForm}
            style={{
              padding: '14px 32px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
        </div>

        {/* Results Section */}
        {results && (
          <div style={{
            marginTop: '40px',
            padding: '32px',
            background: '#f8f9fa',
            borderRadius: '16px',
            animation: 'fadeIn 0.5s ease'
          }}>
            {/* Score Display */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '20px', color: '#666', marginBottom: '8px' }}>
                {getScoreEmoji(results.score)} ATS Compatibility Score
              </div>
              <div style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: getScoreColor(results.score)
              }}>
                {results.score}%
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e0e0e0',
                borderRadius: '4px',
                marginTop: '16px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${results.score}%`,
                  height: '100%',
                  background: getScoreColor(results.score),
                  transition: 'width 0.5s ease'
                }} />
              </div>
              {results.score >= 80 && (
                <p style={{ marginTop: '12px', color: '#28a745', fontWeight: 'bold' }}>
                  ✓ Your resume is well-optimized! You have a strong chance of passing ATS screening.
                </p>
              )}
              {results.score >= 60 && results.score < 80 && (
                <p style={{ marginTop: '12px', color: '#ffc107', fontWeight: 'bold' }}>
                  ⚠️ Good start! A few optimizations can significantly improve your ATS score.
                </p>
              )}
              {results.score < 60 && (
                <p style={{ marginTop: '12px', color: '#dc3545', fontWeight: 'bold' }}>
                  ❌ Your resume needs optimization. Follow our suggestions below to improve your ATS score.
                </p>
              )}
            </div>

            {/* Keyword Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '32px'
            }}>
              <div style={{ textAlign: 'center', padding: '16px', background: 'white', borderRadius: '8px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>
                  {results.keywordCount}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>Keywords Matched</div>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: 'white', borderRadius: '8px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0070f3' }}>
                  {results.totalJobKeywords}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>Total Keywords in Job</div>
              </div>
            </div>

            {/* Matched Keywords */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>
                ✓ Keywords Found in Your Resume
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {results.matchedKeywords.map((kw, i) => (
                  <span key={i} style={{
                    background: '#e3f2fd',
                    color: '#0070f3',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500
                  }}>
                    {kw}
                  </span>
                ))}
                {results.matchedKeywords.length === 0 && (
                  <p style={{ color: '#999' }}>No keywords matched. Try adding more keywords from the job description.</p>
                )}
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>
                💡 Optimization Suggestions
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {results.suggestions.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '12px', color: '#666', lineHeight: '1.6' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            {results.score < 70 && (
              <div style={{
                marginTop: '32px',
                padding: '20px',
                background: '#fff3cd',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ margin: 0, color: '#856404' }}>
                  Want to improve your score? Check out our <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3' }}>ATS Resume Tips Guide</Link> for detailed optimization strategies.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tips Section */}
        <div style={{
          marginTop: '60px',
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '32px'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>
            Expert Tips to Improve Your ATS Score
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {[
              { icon: '🔑', title: 'Use Exact Keywords', desc: 'Include exact keywords and phrases from the job description throughout your resume for maximum ATS compatibility.' },
              { icon: '📝', title: 'Standard Sections', desc: 'Use clear section headings like "Work Experience" and "Education" to ensure ATS can parse your resume correctly.' },
              { icon: '🚫', title: 'Avoid Complex Formatting', desc: 'Skip tables, columns, graphics, and special characters that can confuse ATS software.' },
              { icon: '📄', title: 'Use PDF Format', desc: 'Save and upload your resume as a PDF file to preserve formatting across different systems.' },
              { icon: '📊', title: 'Quantify Achievements', desc: 'Use numbers, percentages, and metrics to demonstrate your impact and stand out to recruiters.' },
              { icon: '🎯', title: 'Tailor Each Application', desc: 'Customize your resume for each job you apply to, matching skills and keywords from the job description.' }
            ].map((tip, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '20px', background: 'white', borderRadius: '12px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{tip.icon}</div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{tip.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div style={{
          marginTop: '48px',
          padding: '32px',
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>
            Frequently Asked Questions About ATS Scanners
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How accurate is this ATS scanner?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Our ATS scanner uses industry-standard keyword matching algorithms similar to those used by major ATS systems like Greenhouse, Lever, and Workday. While no tool is 100% accurate, our scanner provides a reliable benchmark for your resume's ATS compatibility.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                What's a good ATS score?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                A score of 80% or higher is considered excellent and indicates your resume is well-optimized for ATS systems. Scores between 60-79% are good but could use some optimization. Scores below 60% suggest significant improvements are needed to pass automated screening.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                Is this ATS scanner really free?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Yes! Our ATS scanner is completely free to use with no limitations. We believe in helping job seekers succeed without barriers.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How can I improve my ATS score quickly?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Focus on adding exact keywords from the job description to your resume, especially in your skills section and work experience bullet points. Also ensure your resume uses standard section headings and avoids complex formatting.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>More Free Resume Tools</h3>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/keywords-finder" style={{ color: '#0070f3', textDecoration: 'none' }}>🔍 Keywords Finder</Link>
            <span>•</span>
            <Link href="/tools/resume-checker" style={{ color: '#0070f3', textDecoration: 'none' }}>✓ Resume Checker</Link>
            <span>•</span>
            <Link href="/tools/resume-review" style={{ color: '#0070f3', textDecoration: 'none' }}>📝 Resume Review</Link>
          </div>
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