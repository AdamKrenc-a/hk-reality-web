import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, EmailTemplateData } from '@/config/emailjs'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  category: string
  message: string
  gdprConsent: boolean
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Zkontroluj, zda jsou nastaveny konfigurační hodnoty
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || 
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' || 
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE') {
      throw new Error('EmailJS není správně nakonfigurován. Zkontrolujte konfigurační soubor.')
    }

    // Připrav data pro email template
    const templateData: EmailTemplateData = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      category: getCategoryLabel(formData.category),
      message: formData.message,
      to_email: `${EMAILJS_CONFIG.TO_EMAILS.MICHAELA}, ${EMAILJS_CONFIG.TO_EMAILS.ADAM}`,
      date: new Date().toLocaleString('cs-CZ')
    }

    // Odešli email pomocí EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateData as unknown as Record<string, unknown>,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    console.log('Email úspěšně odeslán:', result)
    return { success: true }

  } catch (error) {
    console.error('Chyba při odesílání emailu:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Neznámá chyba při odesílání emailu'
    }
  }
}

// Pomocná funkce pro převod kategorie na čitelný text
const getCategoryLabel = (category: string): string => {
  const categoryLabels: { [key: string]: string } = {
    'ocenovani': 'Oceňování nemovitostí',
    'zprostredkovani': 'Zprostředkování prodeje a koupě nemovitostí',
    'sprava': 'Správa nemovitostí',
    'poradenstvi': 'Realitní poradenství',
    'jine': 'Jiné'
  }
  
  return categoryLabels[category] || category
}
