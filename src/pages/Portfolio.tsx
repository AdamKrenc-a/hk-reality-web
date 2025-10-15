import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import SEO from '@/components/common/SEO'

const testimonials = [
  {
    id: '1',
    name: 'Jan Novák',
    role: 'Prodej bytu 3+1, Praha',
    content: 'S HK Reality jsem byl nadmíru spokojen. Michaela byla profesionální, trpělivá a vždy ochotná odpovědět na všechny moje otázky. Byt se prodal rychle a za vynikající cenu. Mohu jen doporučit!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marie Svobodová',
    role: 'Oceňování rodinného domu',
    content: 'Potřebovala jsem znalecký posudek pro dědické řízení. Michaela vše vyřídila rychle a profesionálně. Posudek byl velmi podrobný a přesný. Děkuji za skvělou práci!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Petr Dvořák',
    role: 'Koupě bytu 2+kk',
    content: 'HK Reality mi pomohla najít perfektní byt přesně podle mých představ. Celý proces od vyhledávání po převod vlastnictví proběhl hladce. Ocenil jsem zejména osobní přístup a důkladnost.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Kateřina Němcová',
    role: 'Správa bytové jednotky',
    content: 'Mám pronajatý byt a HK Reality se o vše postará. Pravidelné reporty, kvalitní nájemníci a rychlá reakce na jakékoliv problémy. Konečně můžu mít z pronájmu příjem bez starostí.',
    rating: 5,
  },
]

const portfolioItems = [
  {
    id: '1',
    title: 'Moderní byt 3+kk, Praha 5',
    category: 'Prodej bytu',
    description: 'Kompletní servis od přípravy po úspěšný prodej. Profesionální fotografie, home staging a efektivní marketing.',
    stats: [
      { label: 'Doba prodeje', value: '18 dní' },
      { label: 'Dosažená cena', value: '102% odhadní ceny' },
      { label: 'Počet prohlídek', value: '12' },
    ],
  },
  {
    id: '2',
    title: 'Rodinný dům, Brno-venkov',
    category: 'Oceňování',
    description: 'Znalecký posudek pro účely hypotéky. Detailní analýza a přesné stanovení tržní hodnoty nemovitosti.',
    stats: [
      { label: 'Typ posudku', value: 'Hypoteční' },
      { label: 'Doba zpracování', value: '5 dní' },
      { label: 'Rozsah', value: '45 stran' },
    ],
  },
  {
    id: '3',
    title: 'Investiční bytová jednotka',
    category: 'Správa nemovitosti',
    description: 'Dlouhodobá správa pronajatého bytu včetně výběru nájemníků, pravidelných kontrol a údržby.',
    stats: [
      { label: 'Doba správy', value: '2+ roky' },
      { label: 'Obsazenost', value: '100%' },
      { label: 'Spokojenost klienta', value: '5/5' },
    ],
  },
]

export default function Portfolio() {
  return (
    <PageTransition>
      <SEO
        title="Reference a Portfolio - HK Reality"
        description="Podívejte se na naše úspěšné realitní projekty a reference spokojených klientů. HK Reality - váš spolehlivý partner v realitách."
        keywords="reference HK Reality, realitní projekty, recenze, hodnocení, spokojení klienti"
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
              Reference a Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Podívejte se na naše úspěšné projekty a přesvědčte se sami o kvalitě našich služeb
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Naše úspěšné projekty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Každý projekt je pro nás příležitostí prokázat naši odbornost a osobní přístup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-sm font-medium text-primary mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-3">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{stat.label}</span>
                        <span className="font-semibold text-gray-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Co říkají naši klienti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vaše spokojenost je naším největším úspěchem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Chcete se přidat k našim spokojeným klientům?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontaktujte nás a společně vytvoříme další úspěšný projekt
            </p>
            <a href="/kontakt" className="btn-accent text-lg px-8 py-4">
              Kontaktovat nás
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

