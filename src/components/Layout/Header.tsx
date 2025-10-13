import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Služby', href: '/sluzby' },
  { name: 'Reference', href: '/reference' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-primary text-white font-heading font-bold text-2xl px-4 py-2 rounded-lg">
                HK
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-heading font-bold text-primary">
                Reality
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                Váš spolehlivý partner
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    location.pathname === item.href
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <a
              href="tel:+420123456789"
              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+420 123 456 789</span>
            </a>
            <Link
              to="/kontakt"
              className="btn-primary text-sm py-2 px-5"
            >
              Nezávazná konzultace
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 px-4 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 space-y-3 border-t border-gray-200">
                  <a
                    href="tel:+420123456789"
                    className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+420 123 456 789</span>
                  </a>
                  <a
                    href="mailto:info@hkreality.cz"
                    className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@hkreality.cz</span>
                  </a>
                  <Link
                    to="/kontakt"
                    className="btn-primary w-full text-center"
                  >
                    Nezávazná konzultace
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
