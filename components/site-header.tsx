'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-soft py-2' : 'bg-white/95 backdrop-blur py-4'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OT</span>
            </div>
            <div>
              <h1 className="font-serif font-semibold text-lg text-ink">
                Demo OT Practice
              </h1>
              <p className="text-xs text-muted">Occupational Therapy</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CLINIC_PHONE}`}
              className="hidden sm:flex items-center space-x-2 text-muted hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{process.env.NEXT_PUBLIC_CLINIC_PHONE}</span>
            </a>
            
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi, I'd like to book an OT assessment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            <button
              onClick={scrollToContact}
              className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <span className="text-sm font-medium">Book Assessment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
