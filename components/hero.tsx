'use client'

import { useState } from 'react'

export default function Hero() {
  const [filters, setFilters] = useState({ location: '', priceRange: '', type: '' })

  const handleSearch = () => {
    // TODO: Implementar búsqueda de propiedades
    console.log('Buscando con filtros:', filters)
  }

  return (
    <section className="relative min-h-screen pt-[80px] bg-charcoal overflow-hidden" id="inicio">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Image Column */}
        <div className="relative overflow-hidden">
          {/* TODO: Reemplazar con imagen real del asesor - usar imagen profesional */}
          <div className="w-full h-full bg-gradient-to-br from-slate to-charcoal flex items-center justify-center">
            <div className="text-[150px] opacity-5">👨‍💼</div>
          </div>

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />

          {/* Gold Bar Left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center px-[60px] py-[60px] relative z-10">
          {/* Eyebrow */}
          <div className="text-[11px] tracking-[3px] uppercase text-gold mb-5 flex items-center gap-3">
            <span className="block w-[30px] h-[1px] bg-gold" />
            Experto Inmobiliario
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(36px,3.5vw,56px)] font-light leading-[1.15] text-white mb-6">
            Encuentra tu <em className="italic text-gold">hogar ideal</em> en Chimbote
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-[420px] mb-10">
            Con más de 10 años de experiencia, te ayudaré a encontrar la propiedad perfecta para ti y tu familia.
          </p>

          {/* Search Bar */}
          <div className="bg-white/6 border border-[rgba(201,168,76,0.25)] rounded-[4px] p-[6px] backdrop-blur-[8px] mb-10">
            <label className="text-[10px] tracking-[2px] uppercase text-gold px-[14px] pt-[10px] pb-[6px] block">
              Buscar propiedad
            </label>
            <div className="flex gap-[6px] items-center">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="flex-1 bg-white/7 border border-white/10 text-white text-[13px] px-[14px] py-3 rounded-[3px] appearance-none cursor-pointer font-sans focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Seleccionar zona</option>
                <option value="centro">Centro</option>
                <option value="norte">Zona Norte</option>
                <option value="sur">Zona Sur</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="flex-1 bg-white/7 border border-white/10 text-white text-[13px] px-[14px] py-3 rounded-[3px] appearance-none cursor-pointer font-sans focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Rango de precio</option>
                <option value="0-100">$0 - $100k</option>
                <option value="100-250">$100k - $250k</option>
                <option value="250-500">$250k - $500k</option>
                <option value="500+">$500k+</option>
              </select>

              <button
                onClick={handleSearch}
                className="bg-gold text-charcoal px-5 py-3 font-medium text-[13px] rounded-[3px] transition-colors duration-[0.2s] hover:bg-gold-light whitespace-nowrap"
              >
                Buscar
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-[rgba(201,168,76,0.25)]">
            <div className="text-center">
              <span className="font-serif text-[32px] font-semibold text-gold block leading-none">150+</span>
              <div className="text-[11px] text-white/50 uppercase tracking-[1px] mt-[6px]">Propiedades</div>
            </div>
            <div className="text-center">
              <span className="font-serif text-[32px] font-semibold text-gold block leading-none">500+</span>
              <div className="text-[11px] text-white/50 uppercase tracking-[1px] mt-[6px]">Clientes Felices</div>
            </div>
            <div className="text-center">
              <span className="font-serif text-[32px] font-semibold text-gold block leading-none">10+</span>
              <div className="text-[11px] text-white/50 uppercase tracking-[1px] mt-[6px]">Años Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
