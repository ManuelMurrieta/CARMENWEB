'use client'

import { useState } from 'react'
import PropertyCard from './property-card'

// TODO: Reemplazar con datos desde una API o base de datos
const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Departamento Premium Centro',
    location: 'Centro, Chimbote',
    price: '$800',
    beds: 3,
    baths: 2,
    sqft: 120,
    type: 'Departamento' as const,
    badge: 'Exclusivo' as const,
    featured: true,
  },
  {
    id: '2',
    title: 'Casa Moderna Zona Norte',
    location: 'Zona Norte, Chimbote',
    price: '$1,200',
    beds: 4,
    baths: 3,
    sqft: 180,
    type: 'Casa' as const,
    badge: 'Nuevo' as const,
  },
  {
    id: '3',
    title: 'Departamento Ejecutivo',
    location: 'Centro, Chimbote',
    price: '$950',
    beds: 2,
    baths: 2,
    sqft: 95,
    type: 'Departamento' as const,
    badge: 'Oportunidad' as const,
  },
  {
    id: '4',
    title: 'Casa Familiar Zona Sur',
    location: 'Zona Sur, Chimbote',
    price: '$1,100',
    beds: 5,
    baths: 3,
    sqft: 200,
    type: 'Casa' as const,
  },
  {
    id: '5',
    title: 'Terreno Comercial',
    location: 'Centro, Chimbote',
    price: '$500',
    beds: 0,
    baths: 0,
    sqft: 500,
    type: 'Terreno' as const,
    badge: 'Nuevo' as const,
  },
  {
    id: '6',
    title: 'Penthouse Luxury',
    location: 'Centro, Chimbote',
    price: '$2,000',
    beds: 4,
    baths: 3.5,
    sqft: 250,
    type: 'Departamento' as const,
    badge: 'Exclusivo' as const,
  },
]

const FILTER_OPTIONS = [
  { label: 'Todos', value: 'all' },
  { label: 'Departamentos', value: 'Departamento' },
  { label: 'Casas', value: 'Casa' },
  { label: 'Terrenos', value: 'Terreno' },
]

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProperties = SAMPLE_PROPERTIES.filter((prop) => {
    const matchesFilter = activeFilter === 'all' || prop.type === activeFilter
    const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prop.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section id="catalogo" className="py-[90px] px-[60px] bg-cream">
      {/* Section Header */}
      <div className="mb-9">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[3px] uppercase text-gold mb-3">
          <span className="block w-10 h-[1px] bg-gold" />
          Nuestro Catálogo
        </div>

        <h2 className="font-serif text-[clamp(30px,3vw,46px)] font-light mb-3 leading-[1.2]">
          Propiedades <em className="italic text-gold">Premium</em> Disponibles
        </h2>

        <p className="text-[15px] text-[#7A7A7A] max-w-[540px] leading-[1.7] mb-12">
          Explora nuestra exclusiva selección de propiedades cuidadosamente seleccionadas en los mejores ubicaciones de Chimbote.
        </p>
      </div>

      {/* Catalog Header with Filters */}
      <div className="flex items-end justify-between gap-6 mb-9">
        <div className="flex gap-2 flex-wrap">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-[18px] py-2 rounded-full border text-[12px] transition-all duration-200 ${
                activeFilter === option.value
                  ? 'bg-gold text-white border-gold'
                  : 'border-[rgba(201,168,76,0.25)] text-charcoal hover:border-gold'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Buscar por nombre o ubicación..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80 px-3.5 py-3 border border-[rgba(201,168,76,0.25)] rounded-[4px] text-[13px] font-sans focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-[#7A7A7A] mb-2">No se encontraron propiedades</p>
            <p className="text-[12px] text-[#7A7A7A]">Intenta con otros filtros</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {filteredProperties.length > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              console.log('Cargar más propiedades')
            }}
            className="px-10 py-3 border-2 border-gold text-gold font-medium rounded-[2px] transition-colors duration-200 hover:bg-gold hover:text-charcoal"
          >
            Ver Más Propiedades
          </button>
        </div>
      )}
    </section>
  )
}
