import React from 'react';
// pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://freeresumemaker.xyz';

function generateSiteMap() {
  // Get current date for lastmod
  const currentDate = new Date().toISOString();
  
  // Generate URLs for all templates (1-20)
  const templateUrls = Array.from({length: 20}, (_, i) => i + 1).map(id => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/templates/${id}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  // Editor template pages (1-20)
  const editorUrls = Array.from({length: 20}, (_, i) => i + 1).map(id => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/editor/${id}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
  `).join('');

  // Template info pages (1-20)
  const templateInfoUrls = Array.from({length: 20}, (_, i) => i + 1).map(id => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/template-info/${id}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');

  // Blog posts - All articles
  const blogUrls = [
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
  ].map(slug => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/blog/${slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  // Profession pages
  const professionUrls = [
    'software-engineering',
    'marketing',
    'sales',
    'healthcare',
    'education',
    'finance',
    'design',
    'administrative',
    'business',
    'creative',
    'legal',
    'human-resources'
  ].map(prof => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/professions/${prof}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  // Section guides
  const sectionUrls = [
    'skills',
    'summary',
    'experience',
    'education',
    'projects',
    'languages',
    'certifications',
    'awards',
    'references',
    'publications',
    'personal-info',
    'core-strengths',
    'tools'
  ].map(section => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/sections/${section}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');

  // Tool pages
  const toolUrls = [
    'ats-scanner',
    'keywords-finder',
    'resume-checker',
    'resume-review'
  ].map(tool => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/tools/${tool}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');

  // Comparison pages
  const comparisonUrls = [
    '1-vs-2',
    '1-vs-3',
    '1-vs-4',
    '2-vs-3',
    '3-vs-4',
    '5-vs-6',
    '7-vs-8',
    '9-vs-10',
    '17-vs-18',
    '17-vs-19',
    '18-vs-19',
    '19-vs-20',
    'ats-friendly-vs-creative',
    'by-profession',
    'minimalist-vs-professional'
  ].map(comp => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/templates/compare/${comp}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');

  // By-section pages
  const bySectionUrls = [
    'experience',
    'summary',
    'skills',
    'languages',
    'projects',
    'image-section'
  ].map(section => `
    <url>
      <loc>${EXTERNAL_DATA_URL}/templates/by-section/${section}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `).join('');

  // Core pages with proper priorities
  const coreUrls = `
    <url>
      <loc>${EXTERNAL_DATA_URL}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/about</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/contact</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/editor</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/examples</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/faq</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/free-ats-resume-templates</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/free-resume-templates</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/how-to-make-resume</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/privacy-policy</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/resume-builder</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/support</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.4</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/templates</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/templates/by-section</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/terms-of-service</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
    </url>
    <url>
      <loc>${EXTERNAL_DATA_URL}/blog</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;

  // Combine all URLs
  const allUrls = coreUrls + 
                  templateUrls + 
                  editorUrls +
                  templateInfoUrls + 
                  blogUrls + 
                  professionUrls + 
                  sectionUrls + 
                  toolUrls + 
                  comparisonUrls + 
                  bySectionUrls;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${allUrls}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}