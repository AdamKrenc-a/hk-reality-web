import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'O nás', href: '/o-nas' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Reference', href: '/reference' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  services: [
    { name: 'Oceňování nemovitostí', href: '/sluzby/ocenovani' },
    { name: 'Prodej nemovitosti', href: '/sluzby/prodej' },
    { name: 'Koupě nemovitosti', href: '/sluzby/koupe' },
    { name: 'Správa nemovitostí', href: '/sluzby/sprava' },
  ],
  legal: [
    { name: 'Ochrana osobních údajů', href: '/gdpr' },
    { name: 'Podmínky použití', href: '/podminky' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-dark text-gray-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white font-heading font-bold text-2xl px-4 py-2 rounded-lg">
                HK
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-white">
                  Reality
                </div>
                <div className="text-xs text-gray-400">
                  Váš spolehlivý partner
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Profesionální realitní služby s osobním přístupem. Od oceňování přes zprostředkování až po správu - vše na jednom místě.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Společnost</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Služby</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420725212850"
                  className="flex items-start space-x-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Michaela Hudská</div>
                    <div>+420 725 212 850</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+420605822363"
                  className="flex items-start space-x-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Adam Krenc</div>
                    <div>+420 605 822 363</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Ústecký kraj</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} HK Reality. Všechna práva vyhrazena.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

