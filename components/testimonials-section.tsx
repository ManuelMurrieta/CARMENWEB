'use client'

// TODO: Reemplazar con testimonios reales desde una API o base de datos
const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Carlos fue excepcional en ayudarnos a encontrar nuestra casa ideal. Su profesionalismo y dedicación fueron incomparables.',
    author: 'María García',
    role: 'Cliente Satisfecho',
    rating: 5,
    initials: 'MG',
  },
  {
    id: '2',
    quote: 'El mejor asesor inmobiliario con el que he trabajado. Muy atento, conocedor del mercado y resultados garantizados.',
    author: 'Juan López',
    role: 'Inversor Inmobiliario',
    rating: 5,
    initials: 'JL',
  },
  {
    id: '3',
    quote: 'Recomiendo a Carlos para cualquiera que busque asesoría inmobiliaria de calidad. Una experiencia excelente de principio a fin.',
    author: 'Patricia Rodríguez',
    role: 'Propietaria',
    rating: 5,
    initials: 'PR',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-[90px] px-[60px] bg-charcoal text-white">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[3px] uppercase text-gold mb-3">
          <span className="block w-10 h-[1px] bg-gold" />
          Testimonios
        </div>

        <h2 className="font-serif text-[clamp(30px,3vw,46px)] font-light leading-[1.2]">
          Lo que dicen nuestros <em className="italic text-gold">clientes</em>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/4 border border-[rgba(201,168,76,0.25)] rounded-[6px] p-7 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Stars */}
            <div className="text-gold text-[16px] mb-[14px]">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-[18px] italic font-light text-white/85 leading-[1.6] mb-5">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#8B6914] to-gold flex items-center justify-center text-charcoal font-serif font-semibold text-[18px]">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-[13px] font-medium text-white">{testimonial.author}</div>
                <div className="text-[11px] text-white/40">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
