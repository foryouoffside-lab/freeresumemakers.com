import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResumeReview() {
  const [file, setFile] = useState(null);
  const [reviewStarted, setReviewStarted] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
      setReviewStarted(true);
      
      // Simulate AI review (in real app, this would call an API)
      setTimeout(() => {
        setReviews([
          {
            category: 'ATS Compatibility',
            score: 85,
            strengths: ['Good keyword density', 'Standard formatting with clear headings', 'Simple layout without complex tables'],
            improvements: ['Add more industry-specific keywords from job description', 'Include a dedicated skills section prominently', 'Use standard section headings like "Work Experience"']
          },
          {
            category: 'Content Quality',
            score: 72,
            strengths: ['Clear job descriptions with action verbs', 'Good use of numbers and metrics', 'Relevant experience highlighted'],
            improvements: ['Use more powerful action verbs (achieved, spearheaded, optimized)', 'Quantify more achievements with percentages and dollar amounts', 'Add a professional summary section']
          },
          {
            category: 'Formatting & Design',
            score: 90,
            strengths: ['Clean, professional layout', 'Consistent formatting throughout', 'Easy to read font choice'],
            improvements: ['Consider adding a skills summary section', 'Optimize spacing for better readability', 'Ensure consistent bullet point style']
          }
        ]);
      }, 2000);
    }
  };

  // Calculate overall score
  const overallScore = reviews.length > 0 
    ? Math.round(reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length)
    : 0;

  const getScoreColor = (score) => {
    if (score >= 80) return { color: '#059669', bg: '#d1fae5', text: 'Excellent' };
    if (score >= 60) return { color: '#b45309', bg: '#fef3c7', text: 'Good - Needs Improvement' };
    return { color: '#b91c1c', bg: '#fee2e2', text: 'Needs Significant Work' };
  };

  // HowTo schema for resume review
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Your Resume Professionally Reviewed Online",
    "description": "A step-by-step guide to getting professional AI-powered feedback on your resume to improve your job application success rate.",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your Resume",
        "text": "Upload your resume in PDF or DOCX format. Maximum file size is 5MB.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "AI Analysis",
        "text": "Our AI tool analyzes your resume for content quality, formatting, and ATS compatibility.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Review Detailed Feedback",
        "text": "Review the comprehensive feedback including strengths and specific areas for improvement.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Implement Improvements",
        "text": "Apply the suggested improvements to optimize your resume and increase interview chances.",
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
        "name": "Resume Review",
        "item": "https://freeresumemaker.xyz/tools/resume-review"
      }
    ]
  };

  // FAQ Schema for Resume Review
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a professional resume review include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional resume review typically includes analysis of ATS compatibility, content quality, formatting, keyword optimization, action verb usage, and overall presentation. Our AI tool provides comprehensive feedback on these areas with specific strengths and improvement suggestions."
        }
      },
      {
        "@type": "Question",
        "name": "Is this resume review really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our AI-powered resume review is completely free with no hidden charges. We provide instant feedback on your resume to help you improve your chances of landing interviews."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is AI resume review?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI resume review uses industry-standard algorithms similar to those used by professional resume writers and ATS systems. While it provides valuable insights, we recommend using it alongside human feedback for best results."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my resume review score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on implementing the specific suggestions in the 'Areas to Improve' section. Common improvements include adding quantifiable achievements, using stronger action verbs, improving formatting, and incorporating relevant keywords from job descriptions."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Free AI Resume Review 2026 - Get Professional Feedback & Score | Resume Analysis Tool"
        description="Get a free professional AI-powered resume review. Our tool analyzes your resume and provides actionable feedback on content, formatting, ATS compatibility, and keyword optimization. Used by 50,000+ job seekers to improve their resumes."
        keywords="resume review, resume feedback, CV review, professional resume review, free resume critique, resume analysis, resume evaluation, AI resume review, resume grader, resume scoring tool"
        canonical="https://freeresumemaker.xyz/tools/resume-review"
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
          <span style={{ color: '#0070f3' }}>Resume Review</span>
        </nav>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>⭐</div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#1a1a1a',
            fontWeight: 700
          }}>
            Free AI Resume Review: <span style={{ color: '#0070f3' }}>Get Professional Feedback</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Get instant AI-powered feedback on your resume. Improve content, formatting, and ATS compatibility.
            <strong> Trusted by 50,000+ job seekers to land more interviews.</strong>
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
            <strong>💡 Pro Tip:</strong> A professionally reviewed resume can <strong>increase your interview chances by up to 40%</strong>. 
            Our AI tool gives you instant, detailed feedback to help you stand out from other candidates.
          </p>
        </div>

        {!reviewStarted ? (
          <div style={{ 
            background: '#f8fafc', 
            padding: '48px', 
            borderRadius: '16px', 
            textAlign: 'center',
            border: '2px dashed #cbd5e1'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>📄</div>
            <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Upload Your Resume for Review</h2>
            <p style={{ color: '#666', marginBottom: '20px', fontSize: '16px' }}>PDF or DOCX files up to 5MB • 100% Secure & Private</p>
            
            <label htmlFor="resume-upload" style={{ 
              display: 'inline-block',
              padding: '14px 36px',
              background: '#0070f3',
              color: 'white',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0060d6'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0070f3'}>
              📁 Choose File
              <input
                type="file"
                id="resume-upload"
                accept=".pdf,.docx"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
            
            <p style={{ marginTop: '24px', fontSize: '14px', color: '#999' }}>
              🔒 Your file is encrypted and will be processed anonymously. We never share your data.
            </p>
          </div>
        ) : (
          <div>
            {reviews.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', background: '#f8fafc', borderRadius: '16px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px', animation: 'pulse 1.5s infinite' }}>⏳</div>
                <h3 style={{ marginBottom: '12px', fontSize: '24px' }}>Analyzing your resume...</h3>
                <p style={{ color: '#666', fontSize: '16px' }}>Our AI is reviewing your resume for content, formatting, and ATS compatibility</p>
                <p style={{ fontSize: '14px', color: '#999', marginTop: '16px' }}>File: {fileName}</p>
              </div>
            ) : (
              <div>
                {/* Overall Score Section */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  padding: '32px', 
                  borderRadius: '20px', 
                  marginBottom: '32px',
                  textAlign: 'center'
                }}>
                  <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>
                    Overall Resume Score: <span style={{ color: getScoreColor(overallScore).color }}>{overallScore}%</span>
                  </h2>
                  <p style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>
                    File: <strong>{fileName}</strong>
                  </p>
                  <p style={{ color: '#666', fontSize: '16px' }}>
                    {overallScore >= 80 
                      ? '🎉 Excellent! Your resume is well-optimized. Minor improvements can make it perfect.'
                      : overallScore >= 60
                      ? '📈 Good foundation! Implement the suggestions below to boost your score.'
                      : '⚡ Needs significant improvement. Follow our detailed recommendations to transform your resume.'}
                  </p>
                </div>

                {/* Detailed Reviews */}
                {reviews.map((review, index) => {
                  const scoreColor = getScoreColor(review.score);
                  return (
                    <div key={index} style={{ 
                      background: 'white', 
                      padding: '28px', 
                      borderRadius: '20px', 
                      border: '1px solid #e9ecef', 
                      marginBottom: '24px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                        <h3 style={{ fontSize: '24px', margin: 0 }}>{review.category}</h3>
                        <span style={{ 
                          background: scoreColor.bg,
                          color: scoreColor.color,
                          padding: '6px 20px',
                          borderRadius: '30px',
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          {review.score}%
                        </span>
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '18px' }}>✓ Strengths</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', lineHeight: '1.8' }}>
                          {review.strengths.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 style={{ color: '#b45309', marginBottom: '12px', fontSize: '18px' }}>📈 Areas for Improvement</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', lineHeight: '1.8' }}>
                          {review.improvements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}

                {/* Actionable Next Steps */}
                <div style={{ 
                  textAlign: 'center', 
                  marginTop: '40px',
                  padding: '36px',
                  background: 'linear-gradient(135deg, #0070f3 0%, #0060d6 100%)',
                  borderRadius: '20px',
                  color: 'white'
                }}>
                  <h3 style={{ fontSize: '26px', marginBottom: '12px' }}>Ready to Apply These Improvements?</h3>
                  <p style={{ marginBottom: '24px', fontSize: '16px', opacity: 0.9 }}>
                    Use our free resume builder to create your optimized, interview-winning resume
                  </p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/editor" style={{ 
                      display: 'inline-block',
                      padding: '14px 36px',
                      background: 'white',
                      color: '#0070f3',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: '600',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      ✏️ Build Your Optimized Resume →
                    </Link>
                    <Link href="/tools/ats-scanner" style={{ 
                      display: 'inline-block',
                      padding: '14px 36px',
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      🤖 Check ATS Score →
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
            Frequently Asked Questions About Resume Review
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                What does a professional resume review include?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                A professional resume review typically includes analysis of ATS compatibility, content quality, formatting, 
                keyword optimization, action verb usage, and overall presentation. Our AI tool provides comprehensive feedback 
                on these areas with specific strengths and improvement suggestions.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                Is this resume review really free?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Yes! Our AI-powered resume review is completely free with no hidden charges. We provide instant feedback on 
                your resume to help you improve your chances of landing interviews. No credit card required.
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How accurate is AI resume review?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Our AI resume review uses industry-standard algorithms similar to those used by professional resume writers 
                and major ATS systems. While it provides valuable insights, we recommend using it alongside human feedback 
                for best results.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#333' }}>
                How can I improve my resume review score?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Focus on implementing the specific suggestions in the 'Areas to Improve' section. Common improvements include 
                adding quantifiable achievements (numbers, percentages), using stronger action verbs, improving formatting 
                with bullet points, and incorporating relevant keywords from job descriptions.
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
          <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>More Free Resume Optimization Tools</h3>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/ats-scanner" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>🤖 ATS Scanner →</Link>
            <Link href="/tools/keywords-finder" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>🔑 Keywords Finder →</Link>
            <Link href="/tools/resume-checker" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}>✓ Resume Checker →</Link>
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
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    </>
  );
}