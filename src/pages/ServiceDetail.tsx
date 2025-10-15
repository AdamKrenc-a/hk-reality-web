import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import SEO from '@/components/common/SEO'
import { getServiceById } from '@/data/services'

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = serviceId ? getServiceById(serviceId) : undefined

  if (!service) {
    return <Navigate to="/sluzby" replace />
  }

  return (
    <PageTransition>
      <SEO
        title={`${service.title} - HK Reality`}
        description={service.description}
        keywords={`${service.title}, HK Reality, realitní služby, ${serviceId}`}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link
              to="/sluzby"
              className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Zpět na služby
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Co zahrnuje služba
                </h2>
                <div className="grid gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              {service.process && service.process.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                    Jak služba probíhá
                  </h2>
                  <div className="space-y-8">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card p-6 bg-gradient-to-br from-primary to-primary-700 text-white"
                >
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Máte zájem?
                  </h3>
                  <p className="mb-6 text-gray-100">
                    Kontaktujte nás pro nezávaznou konzultaci a individuální cenovou nabídku
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+420725212850"
                      className="btn-accent w-full text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Zavolat
                    </a>
                    <Link
                      to="/kontakt"
                      className="btn-secondary bg-white text-primary hover:bg-gray-100 w-full text-center"
                    >
                      Napsat zprávu
                    </Link>
                  </div>
                </motion.div>

                {/* Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Informace
                  </h3>
                  <div className="space-y-4">
                    {service.price && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Cena</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {service.price}
                        </div>
                      </div>
                    )}
                    {service.duration && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Doba zpracování
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {service.duration}
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Konzultace
                      </div>
                      <div className="text-lg font-semibold text-accent">
                        Zdarma a nezávazně
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Další služby
                  </h3>
                  <Link
                    to="/sluzby"
                    className="text-primary hover:text-primary-700 font-medium inline-flex items-center gap-2"
                  >
                    Zobrazit všechny služby
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Jste připraveni začít?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Kontaktujte nás ještě dnes a my se postaráme o vše ostatní
            </p>
            <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
              Nezávazná konzultace
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

