import React from 'react';

const EXTERNAL_DATA_URL = 'https://freeresumemaker.xyz';

function generateSiteMap() {
  const currentDate = new Date().toISOString();

  // ==================== CORE PAGES ====================
  const coreUrls = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.5' },
    { url: '/contact', changefreq: 'monthly', priority: '0.5' },
    { url: '/editor', changefreq: 'daily', priority: '1.0' },
    { url: '/examples', changefreq: 'weekly', priority: '0.8' },
    { url: '/faq', changefreq: 'weekly', priority: '0.7' },
    { url: '/free-ats-resume-templates', changefreq: 'weekly', priority: '0.9' },
    { url: '/free-resume-templates', changefreq: 'weekly', priority: '0.9' },
    { url: '/how-to-make-resume', changefreq: 'weekly', priority: '0.8' },
    { url: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { url: '/resume-builder', changefreq: 'weekly', priority: '0.9' },
    { url: '/support', changefreq: 'monthly', priority: '0.4' },
    { url: '/templates', changefreq: 'daily', priority: '1.0' },
    { url: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/templates/by-section', changefreq: 'weekly', priority: '0.8' },
  ];

  // ==================== EDITOR PAGES ====================
  const editorUrls = [];
  for (let id = 1; id <= 20; id++) {
    // Editor index (redirects to first section)
    editorUrls.push({ url: `/editor/${id}`, changefreq: 'weekly', priority: '0.9' });
    
    // Editor sections for each template
    const sections = ['personalInfo', 'summary', 'experience', 'education', 'skills', 'projects', 'certifications', 'awards', 'internships', 'preview'];
    sections.forEach(section => {
      editorUrls.push({ url: `/editor/${id}/${section}`, changefreq: 'weekly', priority: '0.8' });
    });
  }

  // ==================== TEMPLATE PAGES ====================
  const templateUrls = [];
  for (let id = 1; id <= 20; id++) {
    templateUrls.push({ url: `/templates/${id}`, changefreq: 'weekly', priority: '0.8' });
  }

  // ==================== BLOG POSTS ====================
  const blogSlugs = [
    'action-verbs-for-resume',
    'ats-resume-tips-2026',
    'cv-vs-resume-difference',
    'fresher-resume-guide',
    'how-to-write-resume',
    'remote-work-resume-tips',
    'resume-for-career-change',
    'resume-formatting-guide',
    'resume-mistakes-to-avoid',
    'resume-objective-vs-summary',
    'resume-sections-guide',
    'ultimate-resume-guide-2026',
    'resume-writing-tips',
    'cover-letter-guide',
    'interview-preparation-tips'
  ];
  const blogUrls = blogSlugs.map(slug => ({
    url: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // ==================== PROFESSION PAGES ====================
  const professions = [
    'software-engineering', 'marketing', 'sales', 'healthcare',
    'education', 'finance', 'design', 'administrative',
    'business', 'creative', 'legal', 'human-resources'
  ];
  const professionUrls = professions.map(prof => ({
    url: `/professions/${prof}`,
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // ==================== SECTION GUIDES ====================
  const sections = [
    'skills', 'summary', 'experience', 'education',
    'projects', 'languages', 'certifications', 'awards',
    'references', 'publications', 'personal-info',
    'core-strengths', 'tools'
  ];
  const sectionUrls = sections.map(section => ({
    url: `/sections/${section}`,
    changefreq: 'monthly',
    priority: '0.6'
  }));

  // ==================== TOOL PAGES ====================
  const tools = ['ats-scanner', 'keywords-finder', 'resume-checker', 'resume-review'];
  const toolUrls = tools.map(tool => ({
    url: `/tools/${tool}`,
    changefreq: 'monthly',
    priority: '0.6'
  }));

  // ==================== COMPARISON PAGES ====================
  const comparisons = [
    '1-vs-2', '1-vs-3', '1-vs-4', '2-vs-3', '3-vs-4',
    '5-vs-6', '7-vs-8', '9-vs-10', '17-vs-18', '17-vs-19',
    '18-vs-19', '19-vs-20', 'ats-friendly-vs-creative',
    'by-profession', 'minimalist-vs-professional'
  ];
  const comparisonUrls = comparisons.map(comp => ({
    url: `/templates/compare/${comp}`,
    changefreq: 'monthly',
    priority: '0.6'
  }));

  // ==================== BY-SECTION PAGES ====================
  const bySections = ['experience', 'summary', 'skills', 'languages', 'projects', 'image-section'];
  const bySectionUrls = bySections.map(section => ({
    url: `/templates/by-section/${section}`,
    changefreq: 'monthly',
    priority: '0.6'
  }));

  // ==================== COMBINE ALL ====================
  const allPages = [
    ...coreUrls,
    ...editorUrls,
    ...templateUrls,
    ...blogUrls,
    ...professionUrls,
    ...sectionUrls,
    ...toolUrls,
    ...comparisonUrls,
    ...bySectionUrls
  ];

  const urlElements = allPages.map(page => `
    <url>
      <loc>${EXTERNAL_DATA_URL}${page.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}