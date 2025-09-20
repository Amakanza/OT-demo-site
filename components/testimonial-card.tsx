import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  initials: string
  context: string
  rating: number
}

export default function TestimonialCard({ quote, initials, context, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-muted mb-4 leading-relaxed italic">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-semibold text-ink">{initials}</div>
        <div className="text-sm text-muted">{context}</div>
      </div>
    </div>
  )
}
