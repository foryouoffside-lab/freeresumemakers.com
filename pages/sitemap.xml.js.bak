import React from 'react';

const EXTERNAL_DATA_URL = 'https://freeresumemaker.xyz';

function generateSiteMap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = [
    // Core pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/templates', priority: '1.0', changefreq: 'daily' },
    { url: '/editor', priority: '1.0', changefreq: 'daily' },
    { url: '/examples', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', priority: '0.7', changefreq: 'weekly' },
    { url: '/about', priority: '0.5', changefreq: 'monthly' },
    { url: '/contact', priority: '0.5', changefreq: 'monthly' },
    { url: '/free-ats-resume-templates', priority: '0.9', changefreq: 'weekly' },
    { url: '/free-resume-templates', priority: '0.9', changefreq: 'weekly' },
    { url: '/how-to-make-resume', priority: '0.8', changefreq: 'weekly' },
    { url: '/resume-builder', priority: '0.9', changefreq: 'weekly' },
    { url: '/support', priority: '0.4', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { url: '/templates/by-section', priority: '0.8', changefreq: 'weekly' },
    
    // Template pages (1-20)
    ...[...Array(20)].map((_, i) => ({
      url: `/templates/${i + 1}`,
      priority: '0.8',
      changefreq: 'weekly'
    })),
    
    // Editor pages (1-20) - just the main editor, not all sections
    ...[...Array(20)].map((_, i) => ({
      url: `/editor/${i + 1}`,
      priority: '0.9',
      changefreq: 'weekly'
    })),
    
    // Blog posts
    { url: '/blog/action-verbs-for-resume', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/ats-resume-tips-2026', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/cv-vs-resume-difference', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/fresher-resume-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/how-to-write-resume', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/remote-work-resume-tips', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-for-career-change', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-formatting-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-mistakes-to-avoid', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-objective-vs-summary', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-sections-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/ultimate-resume-guide-2026', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/resume-writing-tips', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/cover-letter-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/interview-preparation-tips', priority: '0.7', changefreq: 'monthly' },
    
    // Professions
    { url: '/professions/software-engineering', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/marketing', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/sales', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/healthcare', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/education', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/finance', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/design', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/administrative', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/business', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/creative', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/legal', priority: '0.7', changefreq: 'monthly' },
    { url: '/professions/human-resources', priority: '0.7', changefreq: 'monthly' },
  ];

  const urlElements = urls.map(page => `
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
  try {
    const sitemap = generateSiteMap();
    
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Sitemap error:', error);
    res.statusCode = 500;
    res.end();
  }

  return { props: {} };
}

export default function Sitemap() {
  return null;
}