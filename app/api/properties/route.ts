/**
 * API Route: GET /api/properties
 * 
 * Esta es una estructura ejemplo para tu API de propiedades.
 * Reemplaza la lógica aquí según tu sistema de base de datos.
 * 
 * TODO: Implementar conexión con tu base de datos real
 */

import { NextRequest, NextResponse } from 'next/server'

// Tipos
interface Property {
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
  description?: string
  images?: string[]
  whatsapp?: string
}

// Datos de ejemplo (REEMPLAZAR CON BASE DE DATOS REAL)
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Departamento Premium Centro',
    location: 'Centro, Chimbote',
    price: '$800',
    beds: 3,
    baths: 2,
    sqft: 120,
    type: 'Departamento',
    badge: 'Exclusivo',
    featured: true,
    description: 'Hermoso departamento en el corazón del centro con vistas al mar.',
    images: ['/images/property-1-1.jpg', '/images/property-1-2.jpg'],
  },
  {
    id: '2',
    title: 'Casa Moderna Zona Norte',
    location: 'Zona Norte, Chimbote',
    price: '$1,200',
    beds: 4,
    baths: 3,
    sqft: 180,
    type: 'Casa',
    badge: 'Nuevo',
    description: 'Casa de construcción moderna con todos los servicios.',
    images: ['/images/property-2-1.jpg'],
  },
]

/**
 * GET: Obtener propiedades con filtros opcionales
 * 
 * Query parameters:
 * - location: string (ej: "Centro")
 * - type: string (ej: "Departamento")
 * - minPrice: number
 * - maxPrice: number
 * - beds: number
 * - search: string (búsqueda en título/ubicación)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    
    // Obtener parámetros de filtro
    const location = searchParams.get('location')
    const type = searchParams.get('type')
    const search = searchParams.get('search')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const beds = searchParams.get('beds')

    let filtered = [...SAMPLE_PROPERTIES]

    // TODO: Implementar filtros reales en la base de datos
    // Ejemplo de filtrado básico:
    
    if (location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase())
      )
    }

    if (type) {
      filtered = filtered.filter(p => p.type === type)
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (beds) {
      filtered = filtered.filter(p => p.beds === parseInt(beds))
    }

    // TODO: Agregar filtros de precio cuando tengas precios numéricos

    return NextResponse.json(
      {
        success: true,
        data: filtered,
        count: filtered.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener propiedades',
      },
      { status: 500 }
    )
  }
}

/**
 * POST: Crear una nueva propiedad (solo para admin)
 * 
 * TODO: Implementar autenticación antes de permitir crear propiedades
 */
export async function POST(request: NextRequest) {
  try {
    // TODO: Validar que sea admin antes de permitir crear
    // if (!isAdmin(request)) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    // }

    const body = await request.json()

    // TODO: Validar datos
    const { title, location, price, beds, baths, sqft, type, description, images } = body

    if (!title || !location || !price || !type) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // TODO: Guardar en base de datos
    const newProperty: Property = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      location,
      price,
      beds: beds || 0,
      baths: baths || 0,
      sqft: sqft || 0,
      type,
      description,
      images: images || [],
    }

    // SAMPLE_PROPERTIES.push(newProperty) // No hagas esto en producción

    return NextResponse.json(
      {
        success: true,
        data: newProperty,
        message: 'Propiedad creada exitosamente',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Error al crear propiedad',
      },
      { status: 500 }
    )
  }
}

/**
 * EJEMPLOS DE IMPLEMENTACIÓN:
 * 
 * CON SUPABASE:
 * ```typescript
 * import { createClient } from '@supabase/supabase-js'
 * 
 * const supabase = createClient(
 *   process.env.SUPABASE_URL!,
 *   process.env.SUPABASE_ANON_KEY!
 * )
 * 
 * export async function GET(request: NextRequest) {
 *   const { data, error } = await supabase.from('properties').select('*')
 *   if (error) return NextResponse.json({ error }, { status: 500 })
 *   return NextResponse.json({ data })
 * }
 * ```
 * 
 * CON MONGODB:
 * ```typescript
 * import { MongoClient } from 'mongodb'
 * 
 * const client = new MongoClient(process.env.MONGODB_URI!)
 * 
 * export async function GET() {
 *   try {
 *     await client.connect()
 *     const db = client.db('inmobiliario')
 *     const properties = await db.collection('properties').find({}).toArray()
 *     return NextResponse.json({ data: properties })
 *   } finally {
 *     await client.close()
 *   }
 * }
 * ```
 * 
 * CON PRISMA:
 * ```typescript
 * import { PrismaClient } from '@prisma/client'
 * 
 * const prisma = new PrismaClient()
 * 
 * export async function GET() {
 *   const properties = await prisma.property.findMany()
 *   return NextResponse.json({ data: properties })
 * }
 * ```
 */
