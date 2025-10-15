import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import ServiceCard from '@/components/common/ServiceCard'
import SEO from '@/components/common/SEO'
import { services } from '@/data/services'

const whyChooseUs = [
  {
    title: 'Oficiální živnostenská oprávnění',
    description: 'Autorizovaná odhadkyně s platnými certifikacemi pro oceňování a realitní činnost',
    icon: CheckCircle2,
  },
  {
    title: 'Osobní přístup ke každému klientovi',
    description: 'Každá nemovitost je pro nás jedinečná, stejně jako vaše potřeby a přání',
    icon: CheckCircle2,
  },
  {
    title: 'Moderní technologie a marketing',
    description: 'Využíváme nejnovější nástroje pro prezentaci a marketing vašich nemovitostí',
    icon: CheckCircle2,
  },
  {
    title: 'Transparentní komunikace',
    description: 'Budete vždy informováni o průběhu celého procesu, bez skrytých poplatků',
    icon: CheckCircle2,
  },
  {
    title: 'Rychlé a efektivní řešení',
    description: 'Díky našim zkušenostem dokážeme najít optimální řešení v co nejkratším čase',
    icon: CheckCircle2,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Úvodní konzultace zdarma',
    description: 'Seznámíme se s vašimi potřebami a cíli. Probereme všechny možnosti a najdeme optimální řešení.',
  },
  {
    number: '02',
    title: 'Analýza a návrh řešení',
    description: 'Provedeme důkladnou analýzu situace a připravíme detailní plán postupu.',
  },
  {
    number: '03',
    title: 'Realizace služeb',
    description: 'S maximální pečlivostí a profesionalitou realizujeme dohodnuté služby.',
  },
  {
    number: '04',
    title: 'Průběžná komunikace',
    description: 'Během celého procesu vás pravidelně informujeme o aktuálním stavu.',
  },
  {
    number: '05',
    title: 'Úspěšné dokončení',
    description: 'Společně oslavíme úspěšné dokončení vašeho realitního projektu.',
  },
]

export default function Home() {
  const mainServices = services.slice(0, 4)

  return (
    <PageTransition>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
                <span className="text-secondary font-medium">Profesionální realitní služby</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                HK Reality - Kompletní realitní služby
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                Od oceňování přes zprostředkování až po správu - vše na jednom místě. 
                <span className="block mt-2 text-secondary font-medium">
                  Váš spolehlivý partner v realitách
                </span>
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-neutral-light"
                >
                  Nezávazná konzultace
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements - removed bottom white fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Naše služby
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nabízíme komplexní realitní služby pod jednou střechou
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon as any}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/sluzby" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Všechny služby
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Proč si vybrat HK Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderní technologie, tradiční hodnoty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Jak HK Reality pracuje
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jednoduchý a transparentní proces od začátku do konce
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-primary/20" />
                )}
                
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Máte otázky? Rádi vám pomůžeme!
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Kontaktujte nás pro nezávaznou konzultaci nebo odhad vaší nemovitosti zdarma
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+420725212850" className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zavolat
                </a>
                <Link to="/kontakt" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Napsat zprávu
                </Link>
              </div>
              <p className="text-sm text-gray-200">
                Odpovídáme během 24 hodin • Konzultace zdarma a nezávazně
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

