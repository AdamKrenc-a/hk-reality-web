import { motion } from 'framer-motion'
import PageTransition from '@/components/common/PageTransition'
import ServiceCard from '@/components/common/ServiceCard'
import SEO from '@/components/common/SEO'
import { services } from '@/data/services'

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Služby - HK Reality"
        description="Komplexní realitní služby: oceňování nemovitostí, prodej, koupě, správa nemovitostí a realitní poradenství. Profesionální přístup a moderní technologie."
        keywords="realitní služby, oceňování nemovitostí, prodej bytu, koupě nemovitosti, správa nemovitostí, realitní poradenství"
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
              Naše služby
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Komplexní realitní služby pod jednou střechou - od oceňování přes zprostředkování až po správu nemovitostí
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
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
        </div>
      </section>

      {/* Why HK Reality */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              Proč zvolit HK Reality pro vaše realitní potřeby?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Komplexní služby
                </h3>
                <p className="text-gray-600">
                  Nabízíme vše pod jednou střechou - od oceňování přes zprostředkování až po správu. 
                  Nemusíte hledat různé dodavatele.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Odbornost a certifikace
                </h3>
                <p className="text-gray-600">
                  Naše služby poskytujeme s oficiálními živnostenskými oprávněními a certifikacemi. 
                  Můžete se na nás spolehnout.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Moderní technologie
                </h3>
                <p className="text-gray-600">
                  Využíváme nejnovější nástroje pro marketing - 3D prohlídky, profesionální foto, 
                  video a účinnou online propagaci.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Osobní přístup
                </h3>
                <p className="text-gray-600">
                  Každý klient je pro nás jedinečný. Věnujeme se vám individuálně a hledáme 
                  optimální řešení přesně pro vás.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Potřebujete pomoc s nemovitostí?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontaktujte nás pro nezávaznou konzultaci a najdeme společně to nejlepší řešení
            </p>
            <a href="/kontakt" className="btn-accent text-lg px-8 py-4">
              Nezávazná konzultace
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
