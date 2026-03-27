import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function LanguagesSectionGuide() {
  // Enhanced structured data: Article + HowTo + BreadcrumbList + FAQPage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/languages#article",
        "headline": "How to List Languages on Resume: Proficiency Levels & Examples 2026",
        "description": "Master the art of listing languages on your resume. Learn about CEFR & ILR proficiency levels, see formatting examples, and discover which languages to highlight for bilingual and global roles.",
        "image": "https://freeresumemaker.xyz/images/languages-guide-2026.jpg",
        "datePublished": "2026-02-10T08:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/languages"
        },
        "keywords": "languages on resume, language skills, bilingual resume, fluency levels, CEFR levels, language proficiency, ILR scale, resume language examples"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/languages#howto",
        "name": "How to List Languages on Your Resume",
        "description": "A step-by-step guide to listing languages on your resume, including proficiency levels (CEFR, ILR), formatting examples, and industry-specific tips.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Assess Your Proficiency Level Accurately",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Use standard frameworks like CEFR (A1-C2) or ILR to accurately describe your speaking, writing, reading, and listening skills. Be honestâ€”exaggeration can backfire during interviews."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Choose the Right Format for Your Resume",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Select a simple list format for a compact resume or a detailed format with certifications for a skills-based CV. Include certifications like DELE, DELF, JLPT, or TOEFL when applicable."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Position Strategically on Your Resume",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Create a dedicated 'Languages' section after your skills or education, especially for roles where language skills are critical (e.g., international business, translation, customer service)."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Highlight Language Skills in Experience Section",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "For bilingual roles, demonstrate language use in your work experience: 'Conducted client presentations in Spanish for Latin American markets' or 'Translated technical documents from Japanese to English.'"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/languages#breadcrumb",
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
            "name": "Languages Guide",
            "item": "https://freeresumemaker.xyz/sections/languages"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/languages#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I list languages on my resume if I'm not fluent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can list languages at any level. Use accurate descriptors like 'Conversational,' 'Intermediate,' or 'Basic.' Just be honest about your proficiencyâ€”you may be tested during interviews."
            }
          },
          {
            "@type": "Question",
            "name": "How do I describe my language proficiency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use standardized frameworks like CEFR (A1-C2) or ILR (0-5). Common terms include: Native/Bilingual, Fluent, Professional Working, Conversational, Intermediate, and Basic. Certifications like DELE, DELF, or JLPT add credibility."
            }
          },
          {
            "@type": "Question",
            "name": "Where should I put languages on my resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Create a dedicated 'Languages' section after your skills section or education. If language skills are critical to the role, consider placing it higher, near your professional summary."
            }
          }
        ]
      }
    ]
  };

  // FAQ data for visual display
  const faqItems = [
    {
      q: "Should I list languages on my resume if I'm not fluent?",
      a: "Yes, you can list languages at any level. Use accurate descriptors like 'Conversational,' 'Intermediate,' or 'Basic.' Being honest about your proficiency is crucialâ€”you may be tested during interviews, and overstating skills can damage your credibility."
    },
    {
      q: "How do I describe my language proficiency level?",
      a: "Use standardized frameworks like CEFR (A1-C2) or ILR (0-5). Common terms include: Native/Bilingual, Fluent (C1-C2), Professional Working (B2), Conversational (B1), Intermediate (A2-B1), and Basic (A1). Including certification names like DELE, DELF, or JLPT adds credibility."
    },
    {
      q: "Where should I put languages on my resume?",
      a: "Create a dedicated 'Languages' section after your skills section or education. If language skills are critical to the role (e.g., international business, translation, customer service), consider placing it higher, near your professional summary."
    },
    {
      q: "Should I include my native language on my resume?",
      a: "If you're applying in a country where the primary language is not your native language, definitely list it as 'Native' or 'Native/Bilingual.' If you're applying in your home country where everyone speaks the language, you may omit it unless the job specifically requires bilingual skills."
    },
    {
      q: "How do I list multiple languages on my resume?",
      a: "List languages in order of proficiency (most proficient first) or relevance to the job. Use a consistent format: Language: Proficiency Level. For example: 'Spanish: Fluent (DELE C1), French: Professional Working, Japanese: Conversational (JLPT N4).'"
    },
    {
      q: "What's the difference between 'Fluent' and 'Professional Working'?",
      a: "Fluent (C1-C2) means you can speak and write with ease, making only minor errors, and can handle complex topics. Professional Working (B2) means you can conduct business meetings, write professional documents, and understand technical language, though you may make occasional errors."
    }
  ];

  // CEFR Levels with detailed descriptions
  const cefrLevels = [
    { level: "C2", name: "Mastery / Native", description: "Can understand virtually everything with ease. Can express finer shades of meaning precisely and spontaneously." },
    { level: "C1", name: "Fluent / Advanced", description: "Can understand a wide range of demanding, longer texts. Can express ideas fluently and spontaneously without much searching for expressions." },
    { level: "B2", name: "Professional Working", description: "Can interact with a degree of fluency that makes regular interaction with native speakers possible. Can produce clear, detailed text on a wide range of subjects." },
    { level: "B1", name: "Conversational / Intermediate", description: "Can deal with most situations likely to arise while traveling. Can produce simple connected text on familiar topics." },
    { level: "A2", name: "Elementary", description: "Can communicate in simple and routine tasks requiring a simple exchange of information on familiar matters." },
    { level: "A1", name: "Basic", description: "Can understand and use familiar everyday expressions and very basic phrases aimed at satisfying concrete needs." }
  ];

  // Language certifications by language
  const languageCertifications = [
    { language: "English", certifications: "TOEFL (Test of English as a Foreign Language), IELTS (International English Language Testing System), Cambridge English: CPE (Proficiency), CAE (Advanced), FCE (First)" },
    { language: "Spanish", certifications: "DELE (Diplomas of Spanish as a Foreign Language) - A1 to C2, SIELE (Servicio Internacional de EvaluaciÃ³n de la Lengua EspaÃ±ola)" },
    { language: "French", certifications: "DELF (A1-B2), DALF (C1-C2), TCF (Test de connaissance du franÃ§ais), TEF (Test d'Ã©valuation de franÃ§ais)" },
    { language: "German", certifications: "Goethe-Zertifikat (A1-C2), TestDaF (Test Deutsch als Fremdsprache), DSH (Deutsche SprachprÃ¼fung fÃ¼r den Hochschulzugang)" },
    { language: "Japanese", certifications: "JLPT (Japanese-Language Proficiency Test) - N5 to N1, J-TEST, BJT (Business Japanese Proficiency Test)" },
    { language: "Chinese (Mandarin)", certifications: "HSK (Hanyu Shuiping Kaoshi) - Levels 1-6, HSKK (HSK Speaking Test)" },
    { language: "Italian", certifications: "CILS (Certificazione di Italiano come Lingua Straniera), CELI (Certificato di Conoscenza della Lingua Italiana), PLIDA" },
    { language: "Portuguese", certifications: "CELPE-Bras (Certificado de ProficiÃªncia em LÃ­ngua Portuguesa para Estrangeiros), CAPLE (Centro de AvaliaÃ§Ã£o de PortuguÃªs LÃ­ngua Estrangeira)" },
    { language: "Russian", certifications: "TORFL (Test of Russian as a Foreign Language) - A1 to C2" },
    { language: "Arabic", certifications: "ALPT (Arabic Language Proficiency Test), CIMA (Certificate in Modern Arabic)" }
  ];

  // Format examples with different styles
  const formatExamples = [
    {
      title: "Simple Bulleted Format",
      style: "compact",
      content: `â€¢ English: Native / Bilingual
â€¢ Spanish: Fluent (C1 - DELE certified)
â€¢ French: Professional Working (B2)
â€¢ Mandarin: Conversational (HSK 3)`
    },
    {
      title: "Detailed Table Format",
      style: "detailed",
      content: `| Language | Proficiency | Certification | Notes |
|----------|-------------|---------------|-------|
| English | Native/Bilingual | - | Native speaker |
| Spanish | Fluent (C1) | DELE C1 (2024) | 5 years professional use |
| French | Professional Working (B2) | DELF B2 | Business communication |
| Japanese | Conversational (N4) | JLPT N4 | Self-study + classes`
    },
    {
      title: "Inline Professional Summary Integration",
      style: "integrated",
      content: `Bilingual marketing professional fluent in English (native) and Spanish (C1), with professional working proficiency in French. Experienced leading cross-cultural campaigns across LATAM and European markets.`
    },
    {
      title: "Sidebar/Column Format (Modern)",
      style: "sidebar",
      content: `ðŸŒ LANGUAGES
ðŸ‡ºðŸ‡¸ English: Native
ðŸ‡ªðŸ‡¸ Spanish: Fluent (DELE C1)
ðŸ‡«ðŸ‡· French: Professional Working
ðŸ‡¯ðŸ‡µ Japanese: Conversational`
    }
  ];

  // Industry-specific tips
  const industryTips = [
    { industry: "International Business", tip: "Highlight business-specific language skills. List languages in order of relevance to your target markets. Include any experience negotiating or presenting in the language." },
    { industry: "Customer Service / Support", tip: "Emphasize languages you can serve customers in. Use terms like 'Bilingual Customer Support' or 'Multilingual Support Specialist' in your summary." },
    { industry: "Translation & Interpretation", tip: "Include certification details, years of experience, and specializations (e.g., legal, medical, technical). List languages with exact proficiency levels." },
    { industry: "Technology / IT", tip: "For remote global teams, highlight language skills for collaboration. Technical documentation experience in other languages is valuable." },
    { industry: "Healthcare", tip: "List languages used for patient communication. Include any medical terminology proficiency or interpretation certifications." },
    { industry: "Education", tip: "Highlight languages used for instruction. Include proficiency levels and any experience teaching in that language." }
  ];

  return (
    <>
      <SEO
        title="How to List Languages on Resume: Proficiency Levels & Examples 2026 | FreeResumeMakers"
        description="Master the art of listing languages on your resume. Learn CEFR & ILR proficiency levels, see formatting examples, and discover which languages to highlight for bilingual and global roles. Includes certification guides and industry tips."
        keywords="languages on resume, language skills, bilingual resume, fluency levels, CEFR levels, language proficiency, ILR scale, resume language examples, how to list languages on resume, language certifications"
        canonical="https://freeresumemaker.xyz/sections/languages"
        type="article"
        publishedTime="2026-02-10T08:00:00+00:00"
        modifiedTime="2026-03-23T10:00:00+00:00"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/languages" />
        <meta name="description" content="Learn how to list languages on your resume with CEFR proficiency levels, formatting examples, and certification guides. Boost your job applications with expert language skills presentation." />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">â€º</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">â€º</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Languages Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to List Languages on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>ðŸ“… Updated: March 23, 2026</span>
            <span>â±ï¸ 10 min read</span>
            <span>ðŸ‘ï¸ 28,000+ readers</span>
            <span>ðŸŒ 50+ Languages</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            In our globalized world, language skills are a powerful differentiator. 
            <strong>Bilingual candidates earn 5-20% more than monolingual peers</strong> in many industries. 
            This comprehensive guide shows you exactly how to list languages to boost your career prospects and pass ATS screening.
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
            <a href="#cefr" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ CEFR Proficiency Levels</a>
            <a href="#format-examples" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Format Examples</a>
            <a href="#certifications" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Language Certifications</a>
            <a href="#industry-tips" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Industry Tips</a>
            <a href="#placement" style={{ color: '#0070f3', textDecoration: 'none' }}>â€¢ Placement Strategy</a>
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
            <strong>ðŸ’¡ Pro Tip:</strong> Never overstate your proficiency. During interviews, you may be tested in the language. 
            Honesty about your level is crucial for credibility. Instead, focus on highlighting the languages where you have genuine, demonstrable skills.
          </p>
        </div>

        {/* CEFR Proficiency Section */}
        <section id="cefr">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            CEFR Language Proficiency Levels
          </h2>
          <p style={{ marginBottom: '20px' }}>
            The Common European Framework of Reference for Languages (CEFR) is the international standard for describing language ability. 
            Using these levels ensures recruiters understand your exact skill level across all languages.
          </p>
          
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', width: '15%' }}>CEFR Level</th>
                  <th style={{ padding: '14px', textAlign: 'left', width: '20%' }}>Proficiency Level</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Description</th>
                 </tr>
              </thead>
              <tbody>
                {cefrLevels.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.level}</td>
                    <td style={{ padding: '12px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.name}</td>
                    <td style={{ padding: '12px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#f0f7ff', padding: '16px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>ðŸ“Œ Quick Reference:</strong> Native/Bilingual â‰ˆ C2 | Fluent â‰ˆ C1 | Professional Working â‰ˆ B2 | Conversational â‰ˆ B1 | Intermediate â‰ˆ A2-B1 | Basic â‰ˆ A1
            </p>
          </div>
        </section>

        {/* Format Examples Section */}
        <section id="format-examples">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Language Section Format Examples
          </h2>
          
          {formatExamples.map((example, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#0070f3' }}>{example.title}</h3>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef', fontFamily: 'monospace', fontSize: '14px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                {example.content}
              </div>
            </div>
          ))}
        </section>

        {/* Language Certifications Section */}
        <section id="certifications">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Top Language Certifications to Include
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Including official certifications adds credibility to your language claims. Here are the most recognized certifications by language:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            {languageCertifications.map((cert, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0070f3', fontSize: '18px' }}>{cert.language}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#4a5568' }}>{cert.certifications}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Tips Section */}
        <section id="industry-tips">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Industry-Specific Language Tips
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            marginBottom: '30px'
          }}>
            {industryTips.map((tip, idx) => (
              <div key={idx} style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0070f3', fontSize: '18px' }}>{tip.industry}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#4a5568' }}>{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Strategy Section */}
        <section id="placement">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ“ Where to Place Languages on Your Resume
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#0070f3' }}>ðŸŒ Dedicated Languages Section</h3>
              <p style={{ fontSize: '14px', color: '#666' }}><strong>Best for:</strong> 2+ languages or when language skills are job-critical</p>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Place after Skills or Education. Use a clear heading: "Languages" or "Language Skills."</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#0070f3' }}>ðŸ“ Integrated in Professional Summary</h3>
              <p style={{ fontSize: '14px', color: '#666' }}><strong>Best for:</strong> Highlighting bilingual status upfront</p>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Example: "Bilingual marketing professional fluent in English and Spanish with 8+ years experience."</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#0070f3' }}>ðŸ’¼ Within Experience Section</h3>
              <p style={{ fontSize: '14px', color: '#666' }}><strong>Best for:</strong> Demonstrating language use in specific roles</p>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Include bullet points showing how you used languages: "Conducted client presentations in Spanish for Latin American markets."</p>
            </div>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            ðŸ¤– ATS-Friendly Language Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Languages" or "Language Skills" for optimal ATS parsing</li>
              <li><strong>Include language names exactly:</strong> "Spanish" not "EspaÃ±ol" for keyword matching</li>
              <li><strong>Use recognized proficiency terms:</strong> Native, Bilingual, Fluent, Professional Working, Conversational, Basic</li>
              <li><strong>Include certifications:</strong> "DELE C1" or "JLPT N2" are recognized by ATS systems</li>
              <li><strong>Avoid icons and flags:</strong> Stick to text for best ATS compatibility</li>
              <li><strong>Be consistent:</strong> Use the same format for all languages listed</li>
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
            Showcase Your Language Skills Effectively
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates. Highlight your language skills and stand out to global employers.
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
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide â†’</Link>
            <Link href="/sections/summary" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Professional Summary Guide â†’</Link>
            <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Education Section Guide â†’</Link>
            <Link href="/blog/ats-resume-tips-2026" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>ATS Resume Tips 2026 â†’</Link>
          </div>
        </div>
      </main>
    </>
  );
}
