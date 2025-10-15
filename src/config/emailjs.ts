// EmailJS Configuration
// Tyto hodnoty budete muset nahradit skutečnými hodnotami z EmailJS dashboardu

export const EMAILJS_CONFIG = {
  // Získejte z EmailJS dashboardu -> Account -> API Keys
  PUBLIC_KEY: 'e6EW5LqS_unDzSDQk',
  
  // Získejte z EmailJS dashboardu -> Email Services
  SERVICE_ID: 'service_2823se6',
  
  // Získejte z EmailJS dashboardu -> Email Templates
  TEMPLATE_ID: 'template_81q51mk',
  
  // Email adresy pro odesílání
  TO_EMAILS: {
    MICHAELA: 'mhudska@email.cz',
    ADAM: 'adamkrenc4@gmail.com'
  }
}

// Template proměnné pro email
export interface EmailTemplateData {
  from_name: string
  from_email: string
  phone: string
  category: string
  message: string
  to_email: string
  date: string
}
