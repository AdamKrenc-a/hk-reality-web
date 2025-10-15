import { motion } from 'framer-motion'
import { Target, Eye, Award, Heart, Shield, Lightbulb, Users } from 'lucide-react'
import PageTransition from '@/components/common/PageTransition'
import SEO from '@/components/common/SEO'
import { team } from '@/data/team'

const values = [
  {
    icon: Shield,
    title: 'Transparentnost',
    description: 'Otevřená komunikace a jasné informace ve všech procesech',
  },
  {
    icon: Award,
    title: 'Profesionalita',
    description: 'Odbornost podložená certifikacemi a neustálým vzděláváním',
  },
  {
    icon: Lightbulb,
    title: 'Inovace',
    description: 'Moderní technologie a kreativní marketing přístup',
  },
  {
    icon: Heart,
    title: 'Osobní péče',
    description: 'Individuální přístup ke každému klientovi a projektu',
  },
  {
    icon: Users,
    title: 'Etika',
    description: 'Férové jednání a respekt ke všem zúčastněným stranám',
  },
]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="O nás - HK Reality"
        description="Seznamte se s HK Reality a naším týmem. Profesionální realitní služby s osobním přístupem od Michaely Hudské a Adama Krence."
        keywords="HK Reality tým, Michaela Hudská, Adam Krenc, o firmě, realitní makléř"
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
              O nás
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Jsme HK Reality - moderní realitní společnost, která spojuje profesionalitu s osobním přístupem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Náš příběh
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HK Reality vznikla z přesvědčení, že realitní služby mohou být poskytovány jinak - 
                  transparentně, profesionálně a s osobním přístupem ke každému klientovi.
                </p>
                <p>
                  Spojení zkušeností Michaely Hudské v oblasti oceňování a realitních služeb 
                  s technickým zázemím a marketingovými dovednostmi Adama Krence vytvořilo 
                  unikátní kombinaci, která přináší klientům to nejlepší z obou světů.
                </p>
                <p>
                  Náš název HK odkazuje na zakladatele - Hudská & Krenc - ale zároveň symbolizuje 
                  naše hodnoty: H jako Hodnotnost a K jako Kvalita. Tyto principy nás vedou při 
                  každém projektu.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Vize</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Měnit způsob, jakým lidé vnímají realitní služby - vytvářet prostředí důvěry, 
                  transparentnosti a vzájemného respektu.
                </p>
              </div>

              <div className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Mise</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Poskytovat komplexní, transparentní a efektivní realitní služby s využitím 
                  moderních technologií a s osobním přístupem ke každému klientovi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Zakladatelé HK Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tým profesionálů s jasnou vizí a důrazem na kvalitu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card p-8"
              >
                {/* Profile Image */}
                {member.image && (
                  <div className="mb-6 flex justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 border-4 border-primary/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialization}</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Kvalifikace:</h4>
                  <ul className="space-y-2">
                    {member.qualifications.map((qual, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {member.quote && (
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-600 italic">"{member.quote}"</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Hodnoty HK Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principy, kterými se řídíme každý den
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
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
              Chcete se stát součástí našeho příběhu?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Kontaktujte nás a společně najdeme řešení pro vaši nemovitost
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

