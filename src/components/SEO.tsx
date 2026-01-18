import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '@/utils/advancedSchemaMarkup';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
  noindex?: boolean;
  nofollow?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = `${COMPANY_INFO.url}/thumbnail.png`,
  ogType = "website",
  schema,
  noindex = false,
  nofollow = false,
  article
}: SEOProps) => {
  const baseUrl = COMPANY_INFO.url;
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const robots = noindex || nofollow ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` : 'index, follow';

  // Handle schema - can be single object or array of objects
  const renderSchema = () => {
    if (!schema) return null;
    
    // If it's an array, render each schema separately for better Google parsing
    if (Array.isArray(schema)) {
      return schema.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ));
    }
    
    // Single schema object
    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="publisher" content={COMPANY_INFO.name} />
      
      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content={`US-${COMPANY_INFO.address.stateAbbr}`} />
      <meta name="geo.placename" content={COMPANY_INFO.address.city} />
      <meta name="geo.position" content={`${COMPANY_INFO.geo.latitude};${COMPANY_INFO.geo.longitude}`} />
      <meta name="ICBM" content={`${COMPANY_INFO.geo.latitude}, ${COMPANY_INFO.geo.longitude}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Business Contact Info for Rich Snippets */}
      <meta name="contact" content={COMPANY_INFO.email} />
      <meta name="telephone" content={COMPANY_INFO.phone} />
      <meta name="address" content={`${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.stateAbbr}, ${COMPANY_INFO.address.country}`} />
      
      {/* Schema.org Structured Data */}
      {renderSchema()}
    </Helmet>
  );
};

export default SEO;
