export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://freeresumemaker.xyz</loc><priority>1.0</priority></url>
<url><loc>https://freeresumemaker.xyz/templates</loc><priority>0.9</priority></url>
<url><loc>https://freeresumemaker.xyz/editor</loc><priority>0.9</priority></url>
<url><loc>https://freeresumemaker.xyz/examples</loc><priority>0.8</priority></url>
<url><loc>https://freeresumemaker.xyz/blog</loc><priority>0.8</priority></url>
<url><loc>https://freeresumemaker.xyz/faq</loc><priority>0.7</priority></url>
<url><loc>https://freeresumemaker.xyz/about</loc><priority>0.5</priority></url>
<url><loc>https://freeresumemaker.xyz/contact</loc><priority>0.5</priority></url>
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();
  return { props: {} };
}
