interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
}

export default function ServiceCard({ title, description, features, image, imageAlt }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-ink mb-3">{title}</h3>
        <p className="text-muted mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted flex items-start">
              <span className="text-brand mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
