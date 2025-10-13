import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

export default function SEO({
  title = 'HK Reality - Profesionální realitní služby s osobním přístupem',
  description = 'HK Reality - komplexní realitní služby. Oceňování, prodej, koupě a správa nemovitostí. Osobní přístup, moderní technologie.',
  keywords = 'HK Reality, realitní makléř, oceňování nemovitostí, prodej bytu, správa nemovitostí, realitní služby',
  ogImage = '/og-image.jpg',
  canonical,
}: SEOProps) {
  const fullTitle = title.includes('HK Reality') ? title : `${title} | HK Reality`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
