import { ArrowRight, Shield, Award } from 'lucide-react'
import WhatsAppButton from './whatsapp-button'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-accent to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-ink mb-6 leading-tight">
              Occupational Therapy for Real-World Living
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Personalized, evidence-based support for movement, cognition, and daily tasks—at home, school, or work. 
              Helping individuals across Windhoek achieve independence and confidence in their daily activities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Book an Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <WhatsAppButton />
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-brand" />
                <span className="text-sm text-muted">HPCNA Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-brand" />
                <span className="text-sm text-muted">15+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="/placeholders/hero.jpg"
                alt="Occupational therapist working with a client on daily living skills in a warm, professional setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">500+</div>
                <div className="text-sm text-muted">Clients Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
