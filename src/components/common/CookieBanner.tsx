import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:flex md:items-center md:justify-between">
              <div className="flex items-start space-x-4 mb-4 md:mb-0 md:flex-1">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Používáme cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tento web používá cookies pro zajištění základní funkcionality a analýzu návštěvnosti. 
                    Vaše soukromí je pro nás důležité. Více informací najdete v našich{' '}
                    <a href="/gdpr" className="text-primary hover:underline">
                      zásadách ochrany osobních údajů
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={rejectCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Odmítnout
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn-primary text-sm py-2"
                >
                  Přijmout
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
