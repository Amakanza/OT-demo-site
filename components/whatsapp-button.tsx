import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  className?: string
  text?: string
}

export default function WhatsAppButton({ 
  className = '', 
  text = "Hi, I'd like to book an OT assessment." 
}: WhatsAppButtonProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp Us</span>
    </a>
  )
}
