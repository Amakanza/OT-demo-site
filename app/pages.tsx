import SiteHeader from '@/components/site-header'
import Hero from '@/components/hero'
import Section from '@/components/section'
import ValueCard from '@/components/value-card'
import ServiceCard from '@/components/service-card'
import TestimonialCard from '@/components/testimonial-card'
import FaqAccordion from '@/components/faq-accordion'
import ContactForm from '@/components/contact-form'
import WhatsAppButton from '@/components/whatsapp-button'
import { services, testimonials, faqs } from '@/lib/content'
import { Activity, Heart, Users, Brain, Hand, Home, Car, Stethoscope } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Hero />
        
        {/* Key Outcomes */}
        <Section id="outcomes" className="bg-accent/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                Life-Changing Outcomes
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Evidence-based occupational therapy that helps you regain independence and confidence in daily activities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard
                icon={<Activity className="w-8 h-8 text-brand" />}
                title="Independence in Daily Activities"
                description="Master self-care, work, and leisure tasks with personalized strategies and adaptive techniques."
              />
              <ValueCard
                icon={<Brain className="w-8 h-8 text-brand" />}
                title="Return to Work & School"
                description="Cognitive rehabilitation and workplace assessments to help you thrive in your environment."
              />
              <ValueCard
                icon={<Hand className="w-8 h-8 text-brand" />}
                title="Hand & Upper Limb Recovery"
                description="Specialized therapy for injuries, arthritis, and neurological conditions affecting hand function."
              />
              <ValueCard
                icon={<Heart className="w-8 h-8 text-brand" />}
                title="Sensory Integration & Pediatrics"
                description="Help children process sensory information and participate fully in school and play activities."
              />
            </div>
          </div>
        </Section>

        {/* Who We Help */}
        <Section id="who-we-help">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                Who We Help
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Comprehensive occupational therapy services across the lifespan
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">Children & Teens</h3>
                <ul className="space-y-2 text-muted">
                  <li>• Sensory processing disorders</li>
                  <li>• Autism spectrum support</li>
                  <li>• Handwriting and fine motor skills</li>
                  <li>• School participation challenges</li>
                  <li>• ADHD management strategies</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">Adults</h3>
                <ul className="space-y-2 text-muted">
                  <li>• Stroke and brain injury recovery</li>
                  <li>• Hand and wrist injuries</li>
                  <li>• Workplace ergonomics</li>
                  <li>• Mental health occupational support</li>
                  <li>• Chronic condition management</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">Seniors</h3>
                <ul className="space-y-2 text-muted">
                  <li>• Fall prevention programs</li>
                  <li>• Home safety modifications</li>
                  <li>• Caregiver education</li>
                  <li>• Dementia care strategies</li>
                  <li>• Aging in place support</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Services */}
        <Section id="services" className="bg-accent/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                Our Specialized Services
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Comprehensive occupational therapy services tailored to your unique needs and goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </Section>

        {/* How OT Works */}
        <Section id="process">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                How Occupational Therapy Works
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Our evidence-based approach follows three key phases to achieve your goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">1. Comprehensive Assessment</h3>
                <p className="text-muted">
                  We evaluate your current abilities, challenges, and goals using standardized assessments and clinical observation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">2. Goal Setting & Planning</h3>
                <p className="text-muted">
                  Together, we establish meaningful, measurable goals and create a personalized intervention plan.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink mb-4">3. Treatment & Review</h3>
                <p className="text-muted">
                  Regular therapy sessions with ongoing progress monitoring and plan adjustments as needed.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Evidence & Approach */}
        <Section className="bg-accent/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-8">
                Evidence-Based Practice
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Our practice is grounded in the International Classification of Functioning, Disability and Health (ICF) model, 
                emphasizing goal-directed practice and task-specific training. We use graded exposure techniques, 
                environmental modifications, and comprehensive caregiver training to ensure lasting outcomes. 
                Every intervention is supported by current research and tailored to your unique circumstances and cultural context.
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Real stories from families and individuals who have benefited from our care
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </Section>

        {/* FAQs */}
        <Section id="faq" className="bg-accent/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Common questions about our occupational therapy services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </Section>

        {/* Call to Action */}
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

        {/* Contact Form */}
        <Section id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold text-ink mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted">
                  Ready to begin? Send us a message and we'll contact you to schedule your initial assessment.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>Independence Avenue, Windhoek</p>
                <p>Phone: {process.env.NEXT_PUBLIC_CLINIC_PHONE}</p>
                <p>Email: hello@windhoek-ot.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#who-we-help" className="block text-gray-300 hover:text-white transition-colors">Who We Help</a>
                <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">FAQs</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Practice Details</h3>
              <div className="space-y-2 text-gray-300">
                <p>HPCNA Registration: OT12345</p>
                <p>Hours: Mon-Fri 8:00-17:00</p>
                <p>Weekend appointments available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Windhoek Occupational Therapy Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
