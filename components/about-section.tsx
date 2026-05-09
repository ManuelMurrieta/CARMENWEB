'use client'

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-[90px] px-[60px] bg-charcoal text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Portrait Column */}
        <div className="relative">
          {/* TODO: Reemplazar con foto real del asesor - usar imagen de 3/4 aspect ratio */}
          <div className="w-full aspect-[3/4] rounded-[4px] bg-gradient-to-br from-[#2C3345] to-[#1A1A1A] flex items-center justify-center text-[120px] text-white/5">
            👨‍💼
          </div>

          {/* Gold Accents */}
          <div className="absolute -right-5 bottom-10 w-1 h-[120px] bg-gold" />
          <div className="absolute -bottom-5 left-10 h-1 w-[120px] bg-gold" />

          {/* Badge */}
          <div className="absolute -bottom-5 -left-5 bg-gold text-charcoal px-5 py-4 rounded-[4px] shadow-[0_8px_32px_rgba(201,168,76,0.4)]">
            <span className="font-serif text-[36px] font-semibold leading-none block">10+</span>
            <div className="text-[11px] font-medium">Años Experiencia</div>
          </div>
        </div>

        {/* Content Column */}
        <div>
          {/* Signature */}
          <div className="font-playfair text-[42px] italic text-gold leading-tight mb-2">
            Carlos M.
          </div>
          <div className="text-[11px] tracking-[2px] uppercase text-white/40 mb-7">
            Asesor Inmobiliario Premium
          </div>

          {/* About Text */}
          <p className="text-[15px] leading-[1.8] text-white/70 mb-8">
            Con más de una década de experiencia en el mercado inmobiliario de Chimbote, he ayudado a cientos de familias a encontrar el hogar perfecto. Mi compromiso es garantizar que cada transacción sea transparente, segura y satisfactoria.
          </p>

          <p className="text-[15px] leading-[1.8] text-white/70 mb-8">
            Especializado en propiedades residenciales y comerciales, utilizo estrategias innovadoras y análisis de mercado profundo para ofrecer las mejores oportunidades inmobiliarias.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="border border-[rgba(201,168,76,0.25)] p-4 rounded-[4px] hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-200">
              <div className="text-[20px] mb-2">🏠</div>
              <div className="text-[13px] font-medium text-white mb-1">Venta Inmuebles</div>
              <div className="text-[11px] text-white/45">Propiedades premium</div>
            </div>

            <div className="border border-[rgba(201,168,76,0.25)] p-4 rounded-[4px] hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-200">
              <div className="text-[20px] mb-2">🔑</div>
              <div className="text-[13px] font-medium text-white mb-1">Arrendamiento</div>
              <div className="text-[11px] text-white/45">Inversión rentable</div>
            </div>

            <div className="border border-[rgba(201,168,76,0.25)] p-4 rounded-[4px] hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-200">
              <div className="text-[20px] mb-2">📊</div>
              <div className="text-[13px] font-medium text-white mb-1">Asesoría Legal</div>
              <div className="text-[11px] text-white/45">Trámites completos</div>
            </div>

            <div className="border border-[rgba(201,168,76,0.25)] p-4 rounded-[4px] hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-200">
              <div className="text-[20px] mb-2">💼</div>
              <div className="text-[13px] font-medium text-white mb-1">Valuación</div>
              <div className="text-[11px] text-white/45">Análisis profesional</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-2.5">
            <div className="border border-[rgba(201,168,76,0.25)] px-3.5 py-1.5 rounded-[2px] text-[11px] text-gold tracking-[1px]">
              CRECI CERTIFIED
            </div>
            <div className="border border-[rgba(201,168,76,0.25)] px-3.5 py-1.5 rounded-[2px] text-[11px] text-gold tracking-[1px]">
              LEGAL EXPERTISE
            </div>
            <div className="border border-[rgba(201,168,76,0.25)] px-3.5 py-1.5 rounded-[2px] text-[11px] text-gold tracking-[1px]">
              TRUSTED PARTNER
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
