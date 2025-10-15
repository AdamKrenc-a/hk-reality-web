# Průvodce přizpůsobením - HK Reality Web

Tento dokument popisuje, jak snadno přizpůsobit web HK Reality vašim specifickým potřebám.

## 🎨 Změna barev a stylu

### Barevná paleta
Upravte soubor `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1E40AF', // Změňte na vaši primární barvu
    // ... další odstíny
  },
  secondary: {
    DEFAULT: '#F59E0B', // Změňte na vaši sekundární barvu
    // ... další odstíny
  },
}
```

### Typography
V `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', ...],
  heading: ['Poppins', 'Inter', ...], // Změňte fonty
}
```

V `index.html` aktualizujte Google Fonts link.

## 📝 Aktualizace obsahu

### Kontaktní údaje

#### Telefony a emaily
Upravte v celém projektu:
- `src/components/Layout/Header.tsx`
- `src/components/Layout/Footer.tsx`
- `src/pages/Contact.tsx`

Nahraďte:
- `+420 725 212 850` → Michaela telefon
- `+420 605 822 363` → Adam telefon
- `[Your email address]` → váš email

#### Adresa a působnost
V `src/pages/Contact.tsx`:
```typescript
{
  icon: MapPin,
  title: 'Působnost',
  items: [
    { label: 'Hlavní oblast', value: 'Vaše město/region' },
  ],
}
```

### Informace o týmu

Upravte `src/data/team.ts`:

```typescript
export const team: TeamMember[] = [
  {
    name: 'Michaela Hudská',
    role: 'Hlavní realitní makléřka',
    // ... aktualizujte citáty
    quote: 'Váš citát zde',
  },
  // ... další členové
]
```

### Služby

#### Přidání nové služby
V `src/data/services.ts`:

```typescript
{
  id: 'nova-sluzba', // URL slug
  title: 'Název služby',
  shortDescription: 'Krátký popis pro kartu',
  description: 'Dlouhý popis pro detail',
  icon: 'IconName', // z lucide-react
  features: [
    'Feature 1',
    'Feature 2',
  ],
  process: [
    {
      step: 1,
      title: 'Krok 1',
      description: 'Popis kroku',
    },
  ],
  price: 'Cena od X Kč',
  duration: '3-5 dní',
}
```

#### Úprava ikony služby
V `src/components/common/ServiceCard.tsx` přidejte novou ikonu:

```typescript
import { Calculator, Home, NewIcon } from 'lucide-react'

const iconMap = {
  Calculator,
  Home,
  NewIcon, // Přidejte zde
  // ...
}
```

### Reference a testimonials

V `src/pages/Portfolio.tsx`:

```typescript
const testimonials = [
  {
    id: '1',
    name: 'Jméno klienta',
    role: 'Typ projektu',
    content: 'Text recenze',
    rating: 5,
  },
  // Přidejte další
]
```

## 🖼️ Obrázky a média

### Logo
1. Vytvořte SVG logo
2. Nahraďte v `src/components/Layout/Header.tsx`
3. Aktualizujte `public/favicon.svg`

### Favicon
Nahraďte `public/favicon.svg` vaším logem.

### Fotografie týmu
Přidejte obrázky do `public/images/team/`:
```
public/
  images/
    team/
      michaela-hudska.jpg
      adam-krenc.jpg
```

Aktualizujte v `src/data/team.ts`:
```typescript
{
  image: '/images/team/michaela-hudska.jpg',
}
```

### Portfolio obrázky
```
public/
  images/
    portfolio/
      projekt-1-before.jpg
      projekt-1-after.jpg
```

## 🔗 Sociální sítě

V `src/components/Layout/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vas-profil' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/vas-profil' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/vas-profil' },
]
```

## 📋 Navigace a menu

V `src/components/Layout/Header.tsx`:

```typescript
const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'O nás', href: '/o-nas' },
  // Přidejte nebo odeberte položky
]
```

## 📊 SEO optimalizace

### Meta tagy
V každé stránce upravte SEO komponentu:

```typescript
<SEO
  title="Váš titulek"
  description="Váš popis"
  keywords="klíčová, slova, zde"
/>
```

### Sitemap
Aktualizujte `public/sitemap.xml`:
- Změňte URL na vaši doménu
- Přidejte/odeberte stránky
- Aktualizujte datum

### robots.txt
V `public/robots.txt` aktualizujte URL sitemap.

## 🌐 Multi-language (budoucnost)

Připraveno pro i18n:

1. Nainstalujte `react-i18next`
2. Vytvořte `src/locales/cs.json`, `sk.json`, `en.json`
3. Implementujte language switcher

## 📱 WhatsApp link

V `src/pages/Contact.tsx`:

```typescript
href="https://wa.me/420VASETELEFON"
```

Formát: `https://wa.me/[country_code][phone_number]`

## 🎯 Google Analytics

V `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VASE-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VASE-ID');
</script>
```

## 📧 Formulář - backend integrace

### Aktuální stav
Formulář je nyní v demo režimu (console.log).

### Integrace s API
V `src/pages/Contact.tsx` upravte `onSubmit`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      setIsSubmitted(true)
      reset()
    }
  } catch (error) {
    console.error('Error:', error)
    // Handle error
  } finally {
    setIsSubmitting(false)
  }
}
```

### Email služby
Doporučené služby:
- **EmailJS** - jednoduché, zdarma pro nízké volume
- **SendGrid** - profesionální
- **Mailgun** - spolehlivé
- **Vlastní backend** - plná kontrola

## 🔧 Pokročilé úpravy

### Přidání nové stránky

1. Vytvořte komponentu v `src/pages/NovaStranka.tsx`
2. Přidejte route v `src/App.tsx`:
```typescript
<Route path="/nova-stranka" element={<NovaStranka />} />
```
3. Přidejte do navigace v `Header.tsx`

### Custom hooks
Vytvořte v `src/hooks/`:
```typescript
export function useCustomHook() {
  // Vaše logika
}
```

### Utility funkce
Přidejte do `src/utils/`:
```typescript
export function helperFunction() {
  // Vaše funkce
}
```

## 🎨 Tailwind custom classes

V `src/index.css`:

```css
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-primary text-white rounded-lg;
  }
}
```

## 📱 Progressive Web App

Pro PWA funkcionalitu:

1. Vytvořte `public/manifest.json`
2. Implementujte Service Worker
3. Přidejte install prompt

## 🔍 Tips & Tricks

### Rychlé najítí všech výskytů textu
```bash
grep -r "hledaný text" src/
```

### Nahrazení textu v celém projektu
```bash
find src/ -type f -exec sed -i 's/starý text/nový text/g' {} +
```

### Build a test
```bash
npm run build
npm run preview
```

## 🆘 Časté problémy

### Změna barev nefunguje
1. Zastavte dev server
2. Smažte `node_modules/.cache`
3. Restartujte: `npm run dev`

### Formulář neodesílá
1. Zkontrolujte konzoli prohlížeče
2. Ověřte validaci
3. Implementujte backend

### Obrázky se nenačítají
1. Ujistěte se, že jsou v `public/`
2. Používejte absolutní cesty `/images/...`
3. Zkontrolujte velikost souborů

## 📞 Podpora

Pro další otázky ohledně přizpůsobení kontaktujte vývojový tým nebo konzultujte dokumentaci React, TypeScript a Tailwind CSS.

