export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  process?: ProcessStep[]
  price?: string
  duration?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  specialization: string
  description: string
  quote?: string
  image?: string
  qualifications: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  beforeImage?: string
  afterImage?: string
  stats: {
    label: string
    value: string
  }[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  category: string
  message: string
  gdprConsent: boolean
}

export interface NewsletterFormData {
  email: string
  gdprConsent: boolean
}

