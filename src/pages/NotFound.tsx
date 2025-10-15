import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/common/PageTransition'
import SEO from '@/components/common/SEO'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Stránka nenalezena - HK Reality" />
      
      <section className="min-h-[80vh] flex items-center justify-center bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <h1 className="text-9xl font-heading font-bold text-primary mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Stránka nenalezena
              </h2>
              <p className="text-xl text-gray-600">
                Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Zpět na hlavní stránku
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Zpět
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Možná vás zaujmou tyto odkazy:
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/sluzby" className="text-primary hover:underline">
                  Naše služby
                </Link>
                <Link to="/o-nas" className="text-primary hover:underline">
                  O nás
                </Link>
                <Link to="/reference" className="text-primary hover:underline">
                  Reference
                </Link>
                <Link to="/kontakt" className="text-primary hover:underline">
                  Kontakt
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

