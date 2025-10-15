# 📧 EmailJS Setup - Instrukce pro nastavení

## 🚀 Krok 1: Registrace na EmailJS

1. Jděte na [https://www.emailjs.com/](https://www.emailjs.com/)
2. Zaregistrujte se nebo se přihlaste
3. Vytvořte nový účet

## ⚙️ Krok 2: Nastavení Email Service

1. V dashboardu jděte na **"Email Services"**
2. Klikněte **"Add New Service"**
3. Vyberte **"Gmail"** (nebo jiný email provider)
4. Přihlaste se ke svému Gmail účtu
5. Zkopírujte **Service ID** (např. `service_abc123`)

## 📝 Krok 3: Vytvoření Email Template

1. Jděte na **"Email Templates"**
2. Klikněte **"Create New Template"**
3. Nastavte template takto:

### Template Settings:

- **Template Name:** `HK Reality Contact Form`
- **Subject:** `Nový dotaz z webu HK Reality - {{category}}`

### Template Content:

```html


```

4. Zkopírujte **Template ID** (např. `template_xyz789`)

## 🔑 Krok 4: Získání Public Key

1. Jděte na **"Account"** → **"General"**
2. Zkopírujte **Public Key** (např. `user_abc123def456`)

## 🔧 Krok 5: Aktualizace konfigurace

Otevřete soubor `src/config/emailjs.ts` a nahraďte:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'VÁŠ_PUBLIC_KEY',        // Z kroku 4
  SERVICE_ID: 'VÁŠ_SERVICE_ID',        // Z kroku 2
  TEMPLATE_ID: 'VÁŠ_TEMPLATE_ID',      // Z kroku 3
  
  TO_EMAILS: {
    MICHAELA: 'mhudska@email.cz',
    ADAM: 'adamkrenc4@gmail.com'
  }
}
```

## ✅ Krok 6: Testování

1. Restartujte development server: `npm run dev`
2. Jděte na kontaktní stránku
3. Vyplňte a odešlete testovací formulář
4. Zkontrolujte, zda dorazil email na oba adresy

## 🎯 Výsledek

Po správném nastavení se při odeslání formuláře:

- ✅ Odešle email na `mhudska@email.cz`
- ✅ Odešle email na `adamkrenc4@gmail.com`
- ✅ Zobrazí se potvrzovací zpráva uživateli
- ✅ Formulář se vyčistí

## 🆓 Limity EmailJS

- **Bezplatný plán:** 200 emailů/měsíc
- **Pro více emailů:** placené plány od $15/měsíc

## 🐛 Řešení problémů

### Chyba: "EmailJS není správně nakonfigurován"

- Zkontrolujte, zda jsou všechny ID správně zkopírovány
- Ujistěte se, že nejsou v konfiguraci placeholder hodnoty

### Emaily nedorazí

- Zkontrolujte spam složku
- Ověřte, že je email service správně propojen
- Zkontrolujte template syntaxi

### Template proměnné se nezobrazují

- Ujistěte se, že názvy proměnných v template odpovídají těm v kódu
- Zkontrolujte, zda jsou proměnné v `{{}}` závorkách
