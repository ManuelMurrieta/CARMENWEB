/**
 * EJEMPLOS DE IMPLEMENTACIÓN CON SWR
 * 
 * Esta archivo contiene ejemplos de cómo conectar tu componente
 * a datos reales usando SWR (Stale-While-Revalidate)
 */

// ============================================
// EJEMPLO 1: Usar SWR en CatalogSection
// ============================================

/*
'use client'

import useSWR from 'swr'
import PropertyCard from './property-card'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // SWR carga datos y los cachea automáticamente
  const { data, isLoading, error } = useSWR(
    `/api/properties?type=${activeFilter}&search=${searchQuery}`,
    fetcher
  )

  const properties = data?.data || []

  return (
    <section id="catalogo" className="...">
      {/* Header */}
      
      {isLoading && <div>Cargando propiedades...</div>}
      {error && <div>Error al cargar propiedades</div>}
      
      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  )
}
*/

// ============================================
// EJEMPLO 2: Enviar Lead/Contacto
// ============================================

/*
export async function submitLead(data: {
  name: string
  email: string
  phone: string
  propertyId?: string
  message: string
}) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error al enviar contacto')
  }

  return response.json()
}

// En componente:
const handleContact = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      propertyId: propertyId,
    })
    toast.success('Contacto enviado correctamente')
  } catch (error) {
    toast.error('Error al enviar contacto')
  }
}
*/

// ============================================
// EJEMPLO 3: Obtener Propiedad Individual
// ============================================

/*
export async function getProperty(id: string) {
  const response = await fetch(`/api/properties/${id}`)
  if (!response.ok) throw new Error('Propiedad no encontrada')
  return response.json()
}

// En página dinámmica (/properties/[id]/page.tsx):
import { getProperty } from '@/lib/api'

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id)
  
  return <PropertyDetail property={property} />
}
*/

// ============================================
// EJEMPLO 4: API con Validación
// ============================================

/*
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  message: z.string().min(10, 'Mensaje muy corto'),
})

export async function submitContact(data: unknown) {
  const validated = ContactSchema.parse(data)
  
  // Aquí enviar email, guardar en BD, etc.
  const response = await fetch('/api/leads', {
    method: 'POST',
    body: JSON.stringify(validated),
  })
  
  return response.json()
}
*/

// ============================================
// EJEMPLO 5: Cargar Imágenes
// ============================================

/*
import Image from 'next/image'

// En PropertyCard:
<Image
  src={property.images?.[0] || '/placeholder.jpg'}
  alt={property.title}
  width={400}
  height={300}
  className="w-full h-full object-cover"
  priority={featured}
/>

// Para upload de imágenes (en formulario admin):
const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
  if (!file) return
  
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  
  const { url } = await response.json()
  setImageUrl(url)
}
*/

// ============================================
// EJEMPLO 6: Tipos TypeScript
// ============================================

/*
export interface Property {
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
  description: string
  images: string[]
  amenities?: string[]
  whatsapp?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  propertyId?: string
  message: string
  status: 'new' | 'contacted' | 'converted'
  createdAt: Date
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  rating: 1 | 2 | 3 | 4 | 5
  createdAt: Date
}
*/

// ============================================
// EJEMPLO 7: Email con NodeMailer
// ============================================

/*
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendLeadEmail(lead: Lead) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `Nuevo contacto: ${lead.name}`,
    html: `
      <h2>Nuevo Lead Recibido</h2>
      <p><strong>Nombre:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Teléfono:</strong> ${lead.phone}</p>
      <p><strong>Mensaje:</strong> ${lead.message}</p>
    `,
  }
  
  return transporter.sendMail(mailOptions)
}
*/

// ============================================
// EJEMPLO 8: Instalaciones requeridas
// ============================================

/*
# Instalaciones necesarias:

npm install swr              # Para fetching de datos
npm install axios            # Alternativa a fetch
npm install zod              # Validación de datos
npm install nodemailer       # Envío de emails
npm install dotenv           # Variables de entorno
npm install next-themes      # Dark mode

# Base de datos:
npm install @supabase/supabase-js
npm install @prisma/client
npm install mongodb

# Componentes de UI:
npm install react-hot-toast
npm install zustand          # State management
*/

export {} // Necesario para que TypeScript lo reconozca como módulo
