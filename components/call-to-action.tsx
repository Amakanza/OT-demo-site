'use client'

import Section from './section'
import WhatsAppButton from './whatsapp-button'

export default function CallToActionSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section className="bg-brand text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-serif font-semibold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Take the first step towards greater independence and confidence in daily life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-white text-brand px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Book Assessment
          </button>
          <WhatsAppButton />
        </div>
        <p className="mt-4 text-sm text-white/80">
          We typically respond within 1 business day
        </p>
      </div>
    </Section>
  )
}
