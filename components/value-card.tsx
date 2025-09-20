import { ReactNode } from 'react'

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-serif font-semibold text-ink mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  )
}
