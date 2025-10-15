# Deployment Guide - HK Reality Web

Tento návod popisuje, jak nasadit aplikaci na Render a Vercel.

## 🚀 Vercel (Doporučeno)

### Krok 1: Připravte repository
```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### Krok 2: Deploy na Vercel
1. Jděte na [vercel.com](https://vercel.com)
2. Přihlaste se pomocí GitHub účtu
3. Klikněte na "New Project"
4. Vyberte vaše repository "hk-reality-web"
5. Vercel automaticky detekuje Vite projekt
6. Klikněte na "Deploy"

### Krok 3: Konfigurace (volitelné)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Výhody Vercel:
- ✅ Automatické HTTPS
- ✅ Global CDN
- ✅ Automatické deployment při push
- ✅ Preview deployments pro PR
- ✅ Bezplatný tier s generózními limity

---

## 🔧 Render

### Krok 1: Připravte repository
```bash
git add .
git commit -m "Add Render configuration"
git push origin main
```

### Krok 2: Deploy na Render
1. Jděte na [render.com](https://render.com)
2. Přihlaste se pomocí GitHub účtu
3. Klikněte na "New +" → "Static Site"
4. Vyberte vaše repository "hk-reality-web"
5. Vyplňte konfiguraci:
   - **Name**: `hk-reality-web`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Klikněte na "Create Static Site"

### Výhody Render:
- ✅ Automatické HTTPS
- ✅ Automatické deployment při push
- ✅ Bezplatný tier
- ✅ Vlastní doména zdarma

---

## 🔧 Lokální testování buildu

Před deploymentem si můžete otestovat production build:

```bash
# Instalace závislostí
npm install

# Build aplikace
npm run build

# Preview production buildu
npm run preview
```

Aplikace bude dostupná na `http://localhost:4173`

---

## 📋 Kontrolní seznam před deploymentem

- [ ] Všechny změny jsou commitnuty do Git
- [ ] Aplikace běží lokálně bez chyb (`npm run dev`)
- [ ] Production build se vytvoří bez chyb (`npm run build`)
- [ ] EmailJS konfigurace je správně nastavena
- [ ] Všechny obrázky a assety jsou v `public/` složce

---

## 🐛 Řešení problémů

### Build selhává
```bash
# Vymažte node_modules a znovu nainstalujte
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Chyby s cestami
- Zkontrolujte, že všechny importy používají správné cesty
- Ujistěte se, že všechny assety jsou v `public/` složce

### EmailJS problémy
- Zkontrolujte `src/config/emailjs.ts`
- Ověřte, že jsou správně nastaveny environment variables

---

## 🌐 Doména a HTTPS

Obě platformy automaticky poskytují:
- **HTTPS** zdarma
- **Subdoménu** (např. `hk-reality-web.vercel.app`)
- **Vlastní doménu** (můžete připojit svou doménu v nastavení)

---

## 📊 Monitoring

Po úspěšném deploymentu můžete:
- Sledovat výkon aplikace
- Monitorovat chyby
- Zobrazit analytics
- Spravovat domény

---

## 🎉 Gratulujeme!

Vaše aplikace je nyní dostupná online! Sdílejte odkaz s klienty a začněte získávat nové zákazníky.
