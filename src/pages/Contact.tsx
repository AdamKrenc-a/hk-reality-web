import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import SEO from '@/components/common/SEO'
import { ContactFormData } from '@/types'
import { contactFormSchema } from '@/utils/validation'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    items: [
      { label: 'Michaela Hudská', value: '+420 123 456 789' },
      { label: 'Adam Krenc', value: '+420 987 654 321' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    items: [
      { label: 'Obecné dotazy', value: 'info@hkreality.cz' },
      { label: 'Michaela Hudská', value: 'michaela@hkreality.cz' },
    ],
  },
  {
    icon: MapPin,
    title: 'Působnost',
    items: [
      { label: 'Hlavní oblast', value: 'Bude doplněno' },
    ],
  },
  {
    icon: Clock,
    title: 'Pracovní doba',
    items: [
      { label: 'Po - Pá', value: '9:00 - 18:00' },
      { label: 'So', value: 'Po dohodě' },
    ],
  },
]

const categories = [
  { value: '', label: 'Vyberte kategorii...' },
  { value: 'ocenovani', label: 'Oceňování nemovitostí' },
  { value: 'prodej', label: 'Prodej nemovitosti' },
  { value: 'koupe', label: 'Koupě nemovitosti' },
  { value: 'sprava', label: 'Správa nemovitostí' },
  { value: 'poradenstvi', label: 'Realitní poradenství' },
  { value: 'jine', label: 'Jiné' },
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulace odeslání formuláře
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <PageTransition>
      <SEO
        title="Kontakt - HK Reality"
        description="Kontaktujte HK Reality pro nezávaznou konzultaci. Telefon, email, kontaktní formulář. Rádi vám pomůžeme s vašimi realitními potřebami."
        keywords="kontakt HK Reality, realitní makléř kontakt, Michaela Hudská telefon, konzultace realitní"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Kontaktujte nás
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Rádi vám pomůžeme s vašimi realitními potřebami. Neváhejte nás kontaktovat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.items.map((item, i) => (
                    <div key={i}>
                      <div className="text-xs text-gray-500">{item.label}</div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Napište nám
              </h2>
              <p className="text-xl text-gray-600">
                Vyplňte formulář a my se vám ozveme do 24 hodin
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-accent font-medium">
                    Děkujeme! Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label">
                    Jméno a příjmení *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`input-field ${errors.name ? 'input-error' : ''}`}
                    placeholder="Jan Novák"
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`input-field ${errors.email ? 'input-error' : ''}`}
                    placeholder="jan.novak@email.cz"
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label">
                    Telefon *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={`input-field ${errors.phone ? 'input-error' : ''}`}
                    placeholder="+420 123 456 789"
                  />
                  {errors.phone && (
                    <p className="error-message">{errors.phone.message}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="label">
                    Kategorie dotazu *
                  </label>
                  <select
                    {...register('category')}
                    id="category"
                    className={`input-field ${errors.category ? 'input-error' : ''}`}
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="error-message">{errors.category.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label">
                    Zpráva *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                    placeholder="Popište nám vaši situaci nebo požadavky..."
                  />
                  {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )}
                </div>

                {/* GDPR Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register('gdprConsent')}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">
                      Souhlasím se zpracováním osobních údajů za účelem vyřízení mého dotazu. 
                      Více informací v{' '}
                      <a href="/gdpr" className="text-primary hover:underline">
                        zásadách ochrany osobních údajů
                      </a>
                      . *
                    </span>
                  </label>
                  {errors.gdprConsent && (
                    <p className="error-message">{errors.gdprConsent.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner !w-5 !h-5 !border-2" />
                      Odesílám...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Odeslat zprávu
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Povinná pole
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Potřebujete rychlou odpověď?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Zavolejte nám nebo napište na WhatsApp. Jsme tu pro vás!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420123456789"
                className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Zavolat
              </a>
              <a
                href="https://wa.me/420123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
