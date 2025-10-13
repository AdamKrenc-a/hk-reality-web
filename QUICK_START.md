# 🚀 Quick Start Guide - HK Reality Web

Rychlý průvodce spuštěním webu HK Reality.

## ⚡ Rychlý start (5 minut)

### 1. Instalace závislostí
```bash
npm install
```

### 2. Spuštění dev serveru
```bash
npm run dev
```

Web poběží na: **http://localhost:3000**

### 3. Otevřete v prohlížeči
```
http://localhost:3000
```

## 🎯 Co můžete hned vyzkoušet

### Navigace
- ✅ Klikněte na jednotlivé položky menu
- ✅ Zkuste mobile menu (zmenšete okno)
- ✅ Všimněte si smooth přechodů mezi stránkami

### Služby
- ✅ Na hlavní stránce klikněte na kartu služby
- ✅ Prohlédněte si detail každé služby
- ✅ Zkuste navigaci zpět

### Formulář
- ✅ Jděte na stránku Kontakt
- ✅ Vyzkoušejte vyplnit formulář
- ✅ Zkuste odeslat bez vyplnění - uvidíte validaci
- ✅ Vyplňte správně a odešlete

### Responsive design
- ✅ Otevřete Developer Tools (F12)
- ✅ Zapněte Device Toolbar (Ctrl+Shift+M)
- ✅ Vyzkoušejte různá zařízení

## 📋 Checklist před spuštěním

- [x] Node.js 16+ nainstalován
- [x] npm nebo yarn dostupný
- [x] Port 3000 volný (nebo změňte v vite.config.ts)

## 🛠️ Příkazy

```bash
# Development
npm run dev          # Spustí dev server na localhost:3000

# Production
npm run build        # Vytvoří produkční build
npm run preview      # Preview produkčního buildu

# Linting
npm run lint         # Zkontroluje kód
```

## 📁 Struktura projektu

```
hk-reality-web/
├── public/              # Statické soubory
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # React komponenty
│   ├── pages/          # Stránky
│   ├── data/           # Data (služby, tým)
│   ├── types/          # TypeScript typy
│   ├── utils/          # Utility funkce
│   ├── hooks/          # Custom hooks
│   ├── App.tsx         # Hlavní App
│   └── main.tsx        # Entry point
├── index.html
├── package.json
└── tailwind.config.js  # Tailwind konfigurace
```

## 🎨 Stránky webu

1. **/** - Úvodní stránka
   - Hero sekce
   - Služby overview
   - Proč HK Reality
   - Jak pracujeme

2. **/o-nas** - O společnosti
   - Příběh firmy
   - Tým zakladatelů
   - Hodnoty

3. **/sluzby** - Seznam služeb
   - Všechny služby v kartách
   - Proč zvolit HK Reality

4. **/sluzby/:id** - Detail služby
   - Oceňování: `/sluzby/ocenovani`
   - Prodej: `/sluzby/prodej`
   - Koupě: `/sluzby/koupe`
   - Správa: `/sluzby/sprava`
   - Poradenství: `/sluzby/poradenstvi`

5. **/reference** - Portfolio
   - Úspěšné projekty
   - Recenze klientů

6. **/kontakt** - Kontakt
   - Formulář
   - Kontaktní info

## 🎯 První kroky po spuštění

### 1. Aktualizace kontaktů (důležité!)
Otevřete a upravte:
- `src/components/Layout/Header.tsx` - telefony v headeru
- `src/components/Layout/Footer.tsx` - kontakty v patičce
- `src/pages/Contact.tsx` - všechny kontakty

Nahraďte:
- `+420 123 456 789` → váš telefon
- `info@hkreality.cz` → váš email

### 2. Doplnění citátů
V `src/data/team.ts`:
```typescript
quote: 'Doplňte váš citát zde'
```

### 3. Fotografie
Přidejte do `public/images/`:
- Fotky týmu
- Portfolio projekty
- Logo (pokud máte vlastní)

### 4. Sociální sítě
V `src/components/Layout/Footer.tsx`:
```typescript
const socialLinks = [
  { name: 'Facebook', href: 'vaše-facebook-url' },
  // ...
]
```

## 🚀 Deployment

### Vercel (doporučeno)
1. Push do GitHub
2. Import na vercel.com
3. Automatický deploy ✅

### Ostatní platformy
Viz `DEPLOYMENT.md` pro detailní návod.

## ❓ Časté problémy

### Port 3000 je obsazený
```bash
# Změňte port v vite.config.ts
server: {
  port: 3001, // nebo jiný port
}
```

### Dependency errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Změny se nepromítají
- Restartujte dev server (Ctrl+C a znovu `npm run dev`)
- Vymažte cache prohlížeče (Ctrl+Shift+R)

## 📚 Další dokumentace

- **README.md** - Kompletní přehled projektu
- **FEATURES.md** - Seznam všech funkcí
- **CUSTOMIZATION.md** - Jak přizpůsobit web
- **DEPLOYMENT.md** - Nasazení do produkce

## 💡 Tips

1. **Dev Tools**: Používejte F12 pro debugging
2. **Hot Reload**: Změny se automaticky promítají
3. **TypeScript**: Využijte autocomplete v editoru
4. **Tailwind**: IntelliSense pro Tailwind třídy

## 🎉 Hotovo!

Web je připravený k použití. Můžete začít:
1. Přizpůsobovat obsah
2. Přidávat fotografie
3. Integrovat backend pro formuláře
4. Deployovat do produkce

---

**Potřebujete pomoc?** 
- Přečtěte si CUSTOMIZATION.md
- Zkontrolujte FEATURES.md
- Konzultujte DEPLOYMENT.md

**Úspěšný start! 🚀**
