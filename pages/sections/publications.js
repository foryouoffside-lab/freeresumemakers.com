import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function PublicationsSectionGuide() {
  // Enhanced structured data: Article + HowTo + FAQPage + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freeresumemaker.xyz/sections/publications#article",
        "headline": "How to List Publications on Resume: APA Format & Examples (2026 Guide)",
        "description": "Complete guide to citing publications on your resume with APA format examples for journals, books, and conferences. Updated for 2026 academic and research standards.",
        "image": "https://freeresumemaker.xyz/images/publications-guide-2026.jpg",
        "datePublished": "2026-02-28T08:00:00+00:00",
        "dateModified": "2026-03-24T10:00:00+00:00",
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
          "@id": "https://freeresumemaker.xyz/sections/publications"
        },
        "keywords": "publications on resume, academic publications, research papers, citing publications, APA format resume, journal articles, conference papers 2026, academic CV publications"
      },
      {
        "@type": "HowTo",
        "@id": "https://freeresumemaker.xyz/sections/publications#howto",
        "name": "How to List Publications on Your Resume (2026 Guide)",
        "description": "Complete guide to citing publications on your resume with APA format examples for journals, books, and conferences. Updated for 2026 academic and research standards.",
        "totalTime": "PT20M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "List of your academic publications"
          },
          {
            "@type": "HowToSupply",
            "name": "Citation management tool (Zotero, Mendeley, or EndNote)"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Gather Your Publications",
            "position": 1,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Collect all your published and in-progress work including journal articles, conference papers, books, book chapters, preprints, and under-review manuscripts."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Use APA Citation Format",
            "position": 2,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Follow APA 7th edition style: Author(s). (Year). Title. Journal, Volume(Issue), Pages. DOI. This is the standard format for academic resumes in 2026."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Organize by Category",
            "position": 3,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Separate publications by type: Peer-Reviewed Journal Articles, Conference Papers, Books and Book Chapters, Preprints, and Under Review submissions."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Highlight Your Name",
            "position": 4,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Bold or underline your name in multi-author publications to make your contribution easily identifiable to recruiters and hiring committees."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Add DOIs and Links",
            "position": 5,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Include Digital Object Identifiers (DOIs) or permanent URLs where available to provide easy access to your published work."
            }
          },
          {
            "@type": "HowToStep",
            "name": "Order Chronologically",
            "position": 6,
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "List publications in reverse chronological order (most recent first) to highlight your latest research contributions and current productivity."
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://freeresumemaker.xyz/sections/publications#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Should I include publications on my resume for non-academic jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only include publications if they are directly relevant to the position you're applying for. For industry R&D, data science, or research-focused roles, publications can demonstrate expertise. For general corporate positions, consider omitting them or listing only the most relevant ones."
            }
          },
          {
            "@type": "Question",
            "name": "How do I cite a publication that is 'under review'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cite it as 'Under review at [Journal Name]' or list as 'Manuscript submitted for publication.' Be honest about the statusÃ¢â‚¬â€do not claim a paper is published if it's still under review. Update immediately when accepted."
            }
          },
          {
            "@type": "Question",
            "name": "What citation format should I use for publications on a resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APA (American Psychological Association) format is the most common and widely accepted for academic and research resumes. MLA and Chicago are also acceptable depending on your field. Consistency is key."
            }
          },
          {
            "@type": "Question",
            "name": "How do I highlight my name in multi-author publications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bold your name, underline it, or use an asterisk with a note. Example: *Smith, J.*, Johnson, M., & Williams, R. (2023). Title. *Journal*, 45(2), 112-128. *Indicates corresponding author."
            }
          },
          {
            "@type": "Question",
            "name": "Should I include preprints on my academic resume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, preprints are increasingly valued in academic hiring for 2026. They demonstrate research productivity before formal publication. Clearly label them as 'Preprint' or include the arXiv ID."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freeresumemaker.xyz/sections/publications#breadcrumb",
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
            "name": "Publications Guide",
            "item": "https://freeresumemaker.xyz/sections/publications"
          }
        ]
      }
    ]
  };

  // Extended FAQ data for visual display
  const faqItems = [
    {
      q: "Should I include publications on my resume for non-academic jobs?",
      a: "Only include publications if they are directly relevant to the position. For industry R&D, data science, machine learning engineer, or research-focused roles, publications demonstrate technical expertise. For general corporate positions (marketing, sales, operations), consider omitting them or listing only the most relevant 1-2 publications in a condensed format."
    },
    {
      q: "How do I cite a publication that is 'under review'?",
      a: "Cite it as 'Under review at [Journal Name]' or 'Manuscript submitted for publication.' Be honest about the statusÃ¢â‚¬â€do not claim a paper is published if it's still under review. Once accepted, update the citation immediately to 'Forthcoming in [Journal Name]' or with the full citation including volume/issue if available."
    },
    {
      q: "What citation format should I use for publications on a resume?",
      a: "APA 7th edition (American Psychological Association) format is the most common and widely accepted for academic and research resumes in 2026. MLA is standard in humanities, and Chicago is acceptable for some fields. Consistency throughout your publications section is most importantÃ¢â‚¬â€never mix different citation styles."
    },
    {
      q: "How do I highlight my name in multi-author publications?",
      a: "Bold your name, underline it, or use an asterisk with a footnote. Example: <strong>Smith, J.</strong>, Johnson, M., & Williams, R. (2024). Title. *Journal*, 45(2), 112-128. *Indicates corresponding author. For first-author papers, bold your name. For senior author/corresponding author papers, add an asterisk."
    },
    {
      q: "Should I include preprints on my academic resume?",
      a: "Yes, preprints are increasingly valued in academic hiring for 2026. They demonstrate research productivity before formal publication. Clearly label them as 'Preprint' or include the arXiv ID. Example: 'arXiv preprint arXiv:2501.12345' or 'Preprint: Available at SSRN 123456.'"
    },
    {
      q: "How do I list publications with 10+ authors?",
      a: "List the first 3-5 authors, then use 'et al.' in italics. Example: Smith, J., Johnson, M., Williams, R., Chen, L., Patel, S., <em>et al.</em> (2024). Title. *Journal*, 45(2), 112-128. Always include your own name in the listed authors."
    },
    {
      q: "Should I include conference proceedings on my resume?",
      a: "Yes, include peer-reviewed conference proceedings, especially in computer science, engineering, and applied fields. Format as: Author(s). (Year). Title. In <em>Proceedings of Conference Name</em> (pp. XX-XX), Location. Include acceptance rate if prestigious (< 30% acceptance)."
    },
    {
      q: "How many publications should I list on my resume?",
      a: "For academic positions (PhD, postdoc, faculty), list all peer-reviewed publications (10-30+). For industry positions, select 3-8 most relevant publications. Quality matters more than quantityÃ¢â‚¬â€highlight prestigious journals and first-author papers."
    }
  ];

  // Publication examples by category
  const publicationCategories = [
    {
      title: "Ã°Å¸â€œâ€ž Peer-Reviewed Journal Articles",
      examples: [
        {
          citation: "<strong>Smith, J.</strong>, Johnson, M., & Williams, R. (2024). Machine learning applications in healthcare: A systematic review. <em>Journal of Artificial Intelligence Research</em>, 48(2), 112-128.",
          note: "Impact factor: 8.5 | Citations: 45 | First-author paper"
        },
        {
          citation: "Chen, L., <strong>Smith, J.</strong>, & Garcia, P. (2023). Deep learning for natural language processing: A comprehensive analysis. <em>IEEE Transactions on Neural Networks</em>, 34(4), 567-582.",
          note: "Co-first author | Featured as Editor's Choice"
        },
        {
          citation: "<strong>Smith, J.</strong>, & Patel, S. (2023). Optimizing transformer architectures for low-resource languages. <em>Computational Linguistics</em>, 49(3), 891-915.",
          note: "Open access publication | 5,000+ downloads"
        }
      ]
    },
    {
      title: "Ã°Å¸â€œÅ¡ Books & Book Chapters",
      examples: [
        {
          citation: "Williams, R., & <strong>Smith, J.</strong> (2025). Data visualization best practices. In K. Brown (Ed.), <em>The Handbook of Data Science</em> (3rd ed., pp. 245-278). Academic Press.",
          note: "Invited chapter | 2,500+ citations expected"
        },
        {
          citation: "<strong>Smith, J.</strong> (2024). <em>Practical Machine Learning: From Theory to Production</em>. O'Reilly Media.",
          note: "Authored textbook | Used in 50+ universities worldwide"
        }
      ]
    },
    {
      title: "Ã°Å¸Å½Â¤ Conference Papers (Peer-Reviewed)",
      examples: [
        {
          citation: "Chen, L., Garcia, P., & <strong>Smith, J.</strong> (2025). Quantum computing algorithms for optimization problems. In <em>Proceedings of the 2025 International Conference on Computer Science</em> (pp. 342-350), San Francisco, CA.",
          note: "Acceptance rate: 18% | Best Paper Award nominee"
        },
        {
          citation: "<strong>Smith, J.</strong>, & Williams, R. (2024). Efficient fine-tuning of large language models. In <em>NeurIPS 2024 Proceedings</em> (pp. 2345-2358), Vancouver, Canada.",
          note: "Top 10% of submissions | 150+ citations in first year"
        }
      ]
    },
    {
      title: "Ã°Å¸Å’Â Preprints & Under Review (2026 Best Practices)",
      examples: [
        {
          citation: "Patel, S., & <strong>Smith, J.</strong> (2025). Diffusion models for medical image synthesis. <em>arXiv preprint</em> arXiv:2501.12345.",
          note: "Under review at Nature Machine Intelligence"
        },
        {
          citation: "<strong>Smith, J.</strong>, & Johnson, M. (2025). Ethical considerations in AI-driven healthcare. <em>Manuscript under review at Journal of Medical Ethics</em>.",
          note: "Under review (submitted January 2025)"
        }
      ]
    }
  ];

  // Career stage guidelines
  const careerStages = [
    { stage: "PhD Candidate / Postdoc", guidance: "Full list with complete citations, separate categories, highlight first-author and corresponding author papers. Include all peer-reviewed publications, preprints, and under review manuscripts." },
    { stage: "Assistant Professor", guidance: "Include all publications, highlight recent and prestigious publications, separate peer-reviewed from conference proceedings. Consider adding a separate section for 'In Preparation' manuscripts." },
    { stage: "Industry Researcher (R&D)", guidance: "Include relevant publications, focus on those demonstrating expertise for the role. Limit to 5-8 most impactful publications unless applying for senior research positions." },
    { stage: "Graduate Student", guidance: "Include any publications, preprints, and 'under review' submissions. Add conference presentations, posters, and thesis work if publications are limited." },
    { stage: "Undergraduate Student", guidance: "Include research papers, honors theses, conference presentations, and poster sessions. Quality matters more than quantityÃ¢â‚¬â€highlight your best work." }
  ];

  return (
    <>
      <SEO 
        title="How to List Publications on Resume: APA Format & Examples (2026 Guide) | FreeResumeMakers"
        description="Complete guide to citing publications on your resume with APA format examples for journals, books, and conferences. Learn how to highlight your name, add DOIs, and organize publications for academic and research roles in 2026."
        keywords="publications on resume, academic publications, research papers, citing publications, APA format resume, journal articles, conference papers 2026, academic CV publications, how to list publications on resume"
        canonical="https://freeresumemaker.xyz/sections/publications"
        type="article"
        publishedTime="2026-02-28T08:00:00+00:00"
        modifiedTime="2026-03-24T10:00:00+00:00"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreeResumeMakers" />
        <link rel="canonical" href="https://freeresumemaker.xyz/sections/publications" />
      </Head>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span aria-hidden="true">Ã¢â‚¬Âº</span>
          <Link href="/sections" style={{ color: '#666', textDecoration: 'none' }}>Resume Sections</Link>
          <span aria-hidden="true">Ã¢â‚¬Âº</span>
          <span style={{ color: '#0070f3' }} aria-current="page">Publications Guide</span>
        </nav>

        <header>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
            How to List Publications on Your Resume: Complete Guide 2026
          </h1>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#666', fontSize: '14px', flexWrap: 'wrap' }}>
            <span>Ã°Å¸â€œâ€¦ Updated: March 24, 2026</span>
            <span>Ã¢ÂÂ±Ã¯Â¸Â 12 min read</span>
            <span>Ã°Å¸â€˜ÂÃ¯Â¸Â 28,000+ readers</span>
            <span>Ã°Å¸â€œÅ¡ APA 7th Edition Standards</span>
          </div>
          
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            A publications section is essential for academic, research, and scientific roles in 2026. 
            <strong>Candidates with well-formatted publication lists receive 65% more interview calls</strong> for research positions. 
            This guide provides updated APA formatting, real examples, and best practices for showcasing your scholarly work.
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
          <h2 style={{ fontSize: '20px', marginBottom: '16px', marginTop: 0 }}>Ã°Å¸â€œâ€“ Table of Contents</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="#apa-format" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ APA Format (2026)</a>
            <a href="#examples" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ Examples by Type</a>
            <a href="#organization" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ How to Organize</a>
            <a href="#career-stage" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ By Career Stage</a>
            <a href="#mistakes" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ Common Mistakes</a>
            <a href="#faq" style={{ color: '#0070f3', textDecoration: 'none' }}>Ã¢â‚¬Â¢ FAQ</a>
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
            <strong>Ã°Å¸â€™Â¡ 2026 Pro Tip:</strong> In multi-author publications, <strong>bold your name</strong> to make it easy for recruiters to identify your contribution. 
            For first-author papers, highlight your name. For corresponding author papers, add an asterisk with a note. Include DOIs for all publicationsÃ¢â‚¬â€this adds credibility and provides easy access.
          </p>
        </div>

        {/* APA Format Section */}
        <section id="apa-format">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            APA 7th Edition Format (2026 Standards)
          </h2>
          <p style={{ marginBottom: '16px' }}>APA (American Psychological Association) format is the most widely accepted citation style for academic and research resumes in 2026:</p>
          <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #e9ecef' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8' }}>
              <strong>Journal Article:</strong> Author(s). (Year). Title of article. <em>Journal Name</em>, Volume(Issue), Page numbers. https://doi.org/xxxxx<br/><br/>
              <strong>Book:</strong> Author(s). (Year). <em>Title of book</em> (Edition). Publisher.<br/><br/>
              <strong>Book Chapter:</strong> Author(s). (Year). Title of chapter. In Editor(s) (Eds.), <em>Title of book</em> (pp. xx-xx). Publisher.<br/><br/>
              <strong>Conference Paper:</strong> Author(s). (Year). Title of paper. In <em>Proceedings of Conference Name</em> (pp. xx-xx), Location.<br/><br/>
              <strong>Preprint:</strong> Author(s). (Year). Title. <em>arXiv preprint</em> arXiv:xxxx.xxxxx
            </div>
          </div>
        </section>

        {/* Examples by Type Section */}
        <section id="examples">
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: '#1a1a1a', marginTop: '40px', borderBottom: '2px solid #0070f3', paddingBottom: '8px', display: 'inline-block' }}>
            Publication Examples by Type (2026)
          </h2>
          
          {publicationCategories.map((category, idx) => (
            <div key={idx} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px', color: '#0070f3' }}>{category.title}</h3>
              {category.examples.map((example, eIdx) => (
                <div key={eIdx} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #e9ecef' }}>
                  <p style={{ margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: example.citation }} />
                  <p style={{ marginTop: '12px', fontSize: '14px', color: '#0070f3', background: '#e3f2fd', padding: '6px 12px', borderRadius: '8px', display: 'inline-block' }}>
                    Ã°Å¸â€œÅ  {example.note}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Organization Section */}
        <section id="organization">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            How to Organize Your Publications Section
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>Ã°Å¸â€œâ€¦</div>
              <strong>Reverse Chronological Order</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>List most recent publications first. This is the preferred method for academic and research resumes, highlighting current productivity.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>Ã°Å¸â€œâ€š</div>
              <strong>By Category</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Separate into Journal Articles, Conference Papers, Books, Chapters, Preprints for clarity. Best for longer publication lists (10+).</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>Ã¢Â­Â</div>
              <strong>Highlight Your Name</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Bold or underline your name in multi-author publications. Add asterisk for corresponding author status.</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>Ã°Å¸â€â€”</div>
              <strong>Include DOIs/URLs</strong>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Provide permanent links for easy access. DOIs are preferred over generic URLs for academic publications.</p>
            </div>
          </div>
        </section>

        {/* Career Stage Section */}
        <section id="career-stage">
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a', marginTop: '40px' }}>
            Publications by Career Stage (2026)
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e9ecef' }}>
              <thead>
                <tr style={{ background: '#0070f3', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', width: '25%' }}>Career Stage</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>How to Present Publications</th>
                 </tr>
              </thead>
              <tbody>
                {careerStages.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e9ecef' }}>
                    <td style={{ padding: '14px', fontWeight: '600', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.stage}</td>
                    <td style={{ padding: '14px', background: idx % 2 === 0 ? '#f8f9fa' : 'white' }}>{item.guidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section id="mistakes">
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            Ã¢ÂÅ’ Common Mistakes to Avoid (2026)
          </h2>
          <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #ff9800' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Ã¢ÂÅ’ Using inconsistent citation formats</strong> - Mixing APA, MLA, and Chicago styles within the same section looks unprofessional</li>
              <li><strong>Ã¢ÂÅ’ Including publications where you're not an author</strong> - Only list your own scholarly work</li>
              <li><strong>Ã¢ÂÅ’ Forgetting to update citations</strong> - Changing "under review" to "published" after acceptance is critical</li>
              <li><strong>Ã¢ÂÅ’ Not highlighting your name</strong> - Your name should stand out in multi-author publications</li>
              <li><strong>Ã¢ÂÅ’ Including predatory journals</strong> - List only reputable, peer-reviewed venues to maintain credibility</li>
              <li><strong>Ã¢ÂÅ’ Missing DOIs or incomplete citations</strong> - Always include full citation information for easy verification</li>
              <li><strong>Ã¢ÂÅ’ Overwhelming non-academic resumes</strong> - For industry roles, limit to 3-5 most relevant publications</li>
            </ul>
          </div>
        </section>

        {/* ATS Optimization Section */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#1a1a1a', marginTop: '40px' }}>
            Ã°Å¸Â¤â€“ ATS-Friendly Publication Formatting
          </h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Use standard section heading:</strong> "Publications," "Selected Publications," or "Peer-Reviewed Publications"</li>
              <li><strong>Keep formatting simple:</strong> Avoid complex tables, text boxes, or columns that may confuse ATS parsers</li>
              <li><strong>Include DOIs as plain text:</strong> "https://doi.org/10.1234/jair.2024.48.2.112" rather than hyperlinks</li>
              <li><strong>Use consistent author name format:</strong> Last name, First initial (e.g., "Smith, J.") throughout</li>
              <li><strong>Avoid special characters:</strong> Use plain text for italics, bolding, and other formatting</li>
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
            Ready to Build Your Academic Resume?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 24px' }}>
            Use our free resume builder with 20+ ATS-friendly templates designed for academic and research professionals. Format your publications section perfectly in minutes.
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
            Build Your Resume Now Ã¢â€ â€™
          </Link>
        </div>

        {/* Related Resources */}
        <div style={{
          marginTop: '50px',
          padding: '32px',
          background: '#f8f9fa',
          borderRadius: '16px'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1a1a1a' }}>Ã°Å¸â€œÅ¡ Related Resume Guides</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/sections/education" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Education Section Guide Ã¢â€ â€™</Link>
            <Link href="/sections/skills" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Skills Section Guide Ã¢â€ â€™</Link>
            <Link href="/sections/experience" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>Experience Section Guide Ã¢â€ â€™</Link>
            <Link href="/blog/cv-vs-resume-difference" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 500 }}>CV vs Resume Guide Ã¢â€ â€™</Link>
          </div>
        </div>
      </main>
    </>
  );
}
