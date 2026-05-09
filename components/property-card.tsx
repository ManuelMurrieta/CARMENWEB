'use client'

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  type: 'Departamento' | 'Casa' | 'Terreno'
  badge?: 'Exclusivo' | 'Oportunidad' | 'Nuevo'
  featured?: boolean
  whatsapp?: string
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  type,
  badge,
  featured = false,
  whatsapp = '51901234567'
}: PropertyCardProps) {
  
  const cardImage = '🏠'

  const getBadgeStyles = (badge?: string) => {
    switch (badge) {
      case 'Exclusivo':
        return 'bg-gold'
      case 'Oportunidad':
        return 'bg-[#E74C3C]'
      case 'Nuevo':
        return 'bg-slate'
      default:
        return ''
    }
  }

  const whatsappMessage = `Hola, me interesa la propiedad: ${title} en ${location}`
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className={`bg-white rounded-[6px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-all duration-300 hover:-translate-y-1.5 ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-[#d4c5b0] to-[#b5a48a] flex items-center justify-center ${featured ? 'h-[280px]' : 'h-[220px]'}`}>
        <div className="text-[70px] opacity-15">{cardImage}</div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45" />

        {/* Badge */}
        {badge && (
          <div className={`absolute top-[14px] left-[14px] px-3 py-[5px] rounded-[2px] text-[10px] font-medium uppercase tracking-[1.5px] text-white ${getBadgeStyles(badge)}`}>
            {badge}
          </div>
        )}

        {/* Price Overlay */}
        <div className="absolute bottom-[14px] left-[14px] right-[14px] flex items-end justify-between">
          <div className="font-serif text-[24px] font-semibold text-white">
            {price}
            <span className="text-[14px] font-light"> / mes</span>
          </div>
          <div className="bg-white/15 backdrop-blur-sm px-[10px] py-1 rounded-[2px] text-[10px] text-white uppercase tracking-[1px]">
            {type}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-serif text-[18px] font-semibold mb-[6px] line-clamp-2 text-charcoal leading-[1.3]">
          {title}
        </h3>

        {/* Location */}
        <div className="text-[12px] text-[#7A7A7A] mb-[14px] flex items-center gap-[5px]">
          <span className="opacity-50">📍</span>
          {location}
        </div>

        {/* Features */}
        <div className="flex gap-4 py-[14px] border-t border-[#f0f0f0] mb-[14px]">
          <div className="flex items-center gap-[5px] text-[12px] text-[#7A7A7A]">
            <span className="text-[14px]">🛏️</span>
            <span>{beds} Dorm</span>
          </div>
          <div className="flex items-center gap-[5px] text-[12px] text-[#7A7A7A]">
            <span className="text-[14px]">🚿</span>
            <span>{baths} Baño</span>
          </div>
          <div className="flex items-center gap-[5px] text-[12px] text-[#7A7A7A]">
            <span className="text-[14px]">📐</span>
            <span>{sqft} m²</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-wa text-white py-[10px] px-3 rounded-[4px] text-[13px] font-medium flex items-center justify-center gap-[6px] hover:opacity-85 transition-opacity duration-200"
          >
            <span>💬</span>
            WhatsApp
          </a>
          <button
            onClick={() => {
              console.log('Mostrar detalles de propiedad:', id)
            }}
            className="flex-1 border border-[rgba(201,168,76,0.25)] text-charcoal py-[10px] px-3 rounded-[4px] text-[13px] font-medium transition-all duration-200 hover:bg-charcoal hover:text-white"
          >
            Detalles
          </button>
        </div>
      </div>
    </div>
  )
}
