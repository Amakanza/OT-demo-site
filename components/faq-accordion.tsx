'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-semibold text-ink pr-4">{faq.question}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-muted transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
