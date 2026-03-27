import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({
  title,
  description,
  canonical,
  image = '/default-og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
  keywords = '',
  article = false
}) => {
  const router = useRouter();
  const siteUrl = 'https://freeresumemaker.xyz'; // Replace with your actual domain
  const siteTitle = 'Free Resume Builder - Create Professional Resumes Online';
  const siteDescription = 'Create professional ATS-friendly resumes with our free resume builder. No sign up required. 20+ templates, instant download.';
  
  const fullTitle = title ? `${title} | Free Resume Builder` : siteTitle;
  const fullDescription = description || siteDescription;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullCanonical = canonical || `${siteUrl}${router.asPath.split('?')[0]}`;
  const defaultImage = `${siteUrl}/default-og-image.jpg`;

  const schemaOrg = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImage,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Person",
      "name": author || "Resume Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Builder",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": fullDescription,
    "url": fullCanonical,
    "publisher": {
      "@type": "Organization",
      "name": "Free Resume Builder",
      "url": siteUrl
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta Tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage || defaultImage} />
      <meta property="og:image:alt" content={title || siteTitle} />
      <meta property="og:site_name" content="Free Resume Builder" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage || defaultImage} />
      <meta name="twitter:site" content="@YourTwitterHandle" />
      <meta name="twitter:creator" content="@YourTwitterHandle" />
      
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      
      {/* Additional SEO Tags */}
      <meta name="author" content={author || "Resume Builder Team"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Head>
  );
};

export default SEO;

