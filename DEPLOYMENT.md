# Deployment Guide - HK Reality Web

Tento dokument popisuje možnosti nasazení webu HK Reality do produkce.

## 🚀 Doporučené platformy

### 1. Vercel (Doporučeno)
Nejjednodušší a nejrychlejší možnost pro React aplikace.

**Postup:**
1. Vytvořte účet na [vercel.com](https://vercel.com)
2. Připojte GitHub repository
3. Vercel automaticky detekuje Vite projekt
4. Deploy proběhne automaticky při každém push

**Výhody:**
- Automatický CI/CD
- Global CDN
- SSL certifikát zdarma
- Automatické preview deployments
- Perfektní pro Vite/React

**Konfigurace:**
Není potřeba žádná speciální konfigurace, Vercel automaticky rozpozná Vite projekt.

### 2. Netlify
Další vynikající možnost s podobnými funkcemi jako Vercel.

**Postup:**
1. Vytvořte účet na [netlify.com](https://netlify.com)
2. Připojte GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages
Bezplatná možnost přímo z GitHub repository.

**Postup:**
1. Nainstalujte gh-pages: `npm install -D gh-pages`
2. Přidejte do package.json:
```json
{
  "homepage": "https://vase-jmeno.github.io/hk-reality",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Spusťte: `npm run deploy`

**Poznámka:** V `vite.config.ts` přidejte:
```ts
export default defineConfig({
  base: '/hk-reality/',
  // ... zbytek konfigurace
})
```

### 4. Vlastní server (VPS/Dedicated)

**Požadavky:**
- Node.js 16+
- Nginx nebo Apache
- SSL certifikát (Let's Encrypt)

**Postup:**
1. Build aplikace: `npm run build`
2. Nahrajte složku `dist` na server
3. Nakonfigurujte web server

**Nginx konfigurace:**
```nginx
server {
    listen 80;
    server_name hkreality.cz www.hkreality.cz;
    
    root /var/www/hkreality/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 Pre-deployment checklist

### 1. Environment Variables
Vytvořte `.env.production`:
```env
VITE_API_URL=https://api.hkreality.cz
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_EMAIL=[your-email@domain.com]
```

### 2. SEO Optimalizace
- ✅ Správné meta tagy (již implementováno)
- ✅ Sitemap.xml (vytvořte)
- ✅ robots.txt (vytvořte)
- ✅ Google Analytics (implementujte)
- ✅ Google Search Console (zaregistrujte)

### 3. Performance
```bash
# Analyzujte bundle size
npm run build
npx vite-bundle-visualizer
```

### 4. robots.txt
Vytvořte `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://hkreality.cz/sitemap.xml
```

### 5. Sitemap.xml
Vytvořte `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hkreality.cz/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hkreality.cz/o-nas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hkreality.cz/sluzby</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hkreality.cz/reference</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkreality.cz/kontakt</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 📊 Analytics a Monitoring

### Google Analytics 4
1. Vytvořte GA4 property
2. Přidejte tracking code do `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console
1. Zaregistrujte web na [search.google.com/search-console](https://search.google.com/search-console)
2. Ověřte vlastnictví webu
3. Nahrajte sitemap.xml

## 🔒 Security

### Content Security Policy
Přidejte do `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com;
">
```

## 📱 Progressive Web App (Budoucnost)

Pro PWA funkcionalitu přidejte:
1. Service Worker
2. manifest.json
3. Offline fallback

## 🎯 Post-deployment

### 1. Test všech funkcí
- [ ] Všechny stránky se načítají
- [ ] Formuláře fungují
- [ ] Navigace funguje
- [ ] Responzivní design
- [ ] SSL certifikát aktivní
- [ ] Rychlost načítání (Google PageSpeed)

### 2. Monitoring
- [ ] Google Analytics funguje
- [ ] Search Console aktivní
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring

### 3. Marketing
- [ ] Social media links aktuální
- [ ] Email adresy funkční
- [ ] Telefonní čísla správná
- [ ] Google My Business aktualizováno

## 📞 Podpora

Pro technické problémy při deployment kontaktujte vývojový tým.

