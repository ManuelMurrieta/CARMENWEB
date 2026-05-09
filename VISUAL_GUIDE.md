# 🎨 Guía Visual - Layout y Estructura

## 📐 Estructura General de la Página

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR FIJO                          │
│  CARLOS Mendoza  |  Inicio | Catálogo | Sobre Mí | Blog   │
│                                            [CONTACTAR]      │
└─────────────────────────────────────────────────────────────┘
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║                  HERO SECTION (DARK)                 ║ │
│  ║                                                       ║ │
│  ║  [FOTO ASESOR]  │  Encuentra tu             ✨       ║ │
│  ║                 │  hogar ideal en Chimbote           ║ │
│  ║                 │                                     ║ │
│  ║                 │  [BUSCADOR DE PROPIEDADES]         ║ │
│  ║                 │                                     ║ │
│  ║                 │  150+ Propiedades | 500+ Clientes  ║ │
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  CATÁLOGO DE PROPIEDADES (SECCIÓN PRINCIPAL)        │  │
│  │                                                      │  │
│  │  Filtros: [Todos] [Departamentos] [Casas] [Terrenos]  │
│  │                                                      │  │
│  │  ┌─────────────────────┬──────────────────────────┐ │  │
│  │  │ [PROPIEDAD 1]       │ [PROPIEDAD 2]            │ │  │
│  │  │ Featured (2 cols)   │ (1 col)                  │ │  │
│  │  └─────────────────────┴──────────────────────────┘ │  │
│  │  ┌──────────────┬──────────────┬──────────────┐    │  │
│  │  │ [PROPIEDAD3] │ [PROPIEDAD4] │ [PROPIEDAD5] │    │  │
│  │  │ (1 col)      │ (1 col)      │ (1 col)      │    │  │
│  │  └──────────────┴──────────────┴──────────────┘    │  │
│  │                                                      │  │
│  │                [VER MÁS PROPIEDADES]                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║           SOBRE MÍ (DARK) - 2 COLUMNAS              ║ │
│  ║                                                       ║ │
│  ║  [FOTO] ✨ │  CARLOS M.                             ║ │
│  ║            │  Asesor Inmobiliario Premium           ║ │
│  ║            │                                         ║ │
│  ║            │  Texto profesional...                  ║ │
│  ║            │                                         ║ │
│  ║            │  [Servicios Grid 2x2]                  ║ │
│  ║            │  🏠 Venta | 🔑 Arrendamiento           ║ │
│  ║            │  📊 Asesoría | 💼 Valuación            ║ │
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  TESTIMONIOS (DARK) - GRID 3 COLUMNAS              │  │
│  │                                                      │  │
│  │  ⭐⭐⭐⭐⭐                                              │  │
│  │  "Excelente servicio..."                           │  │
│  │  María García - Cliente                            │  │
│  │                                                      │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ [CARD 1]      │ [CARD 2]      │ [CARD 3]     │  │  │
│  │  │ Testimonio    │ Testimonio    │ Testimonio   │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  BLOG / ARTÍCULOS (LIGHT) - GRID 3 COLUMNAS       │  │
│  │                                                      │  │
│  │  ┌──────────────┬──────────────┬──────────────┐    │  │
│  │  │ 📈           │ 🏡           │ 📊           │    │  │
│  │  │ Artículo 1   │ Artículo 2   │ Artículo 3   │    │  │
│  │  │ Mayo 2024    │ Abril 2024   │ Marzo 2024   │    │  │
│  │  └──────────────┴──────────────┴──────────────┘    │  │
│  │                                                      │  │
│  │            [VER TODOS LOS ARTÍCULOS]                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    FOOTER (BLACK)                    │  │
│  │                                                      │  │
│  │  CARLOS Mendoza | Navegación | Recursos | Contacto │  │
│  │  © 2024 Carlos Mendoza. All rights reserved.        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│                    💬 BOTÓN FLOTANTE WA                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏘️ Detalle: Property Card

```
┌──────────────────────────────────────────┐
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │     [IMAGEN/EMOJI PROPIEDAD]       │  │
│  │                                    │  │
│  │     [BADGE: EXCLUSIVO/NUEVO]       │  │
│  │                                    │  │
│  │                    $800 MENSUAL    │  │
│  │                    DEPARTAMENTO    │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Departamento Premium Centro             │
│  📍 Centro, Chimbote                    │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │ 🛏️ 3 Dorm | 🚿 2 Baño | 📐 120 m² │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌──────────────────┬──────────────────┐ │
│  │ 💬 WhatsApp      │ ➜ Detalles       │ │
│  └──────────────────┴──────────────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🎯 Sección Catálogo - Descripción Detallada

### Layout Responsivo

**Desktop (3 columnas):**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 1  │ │ Card 2  │ │ Card 3  │
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 4  │ │ Card 5  │ │ Card 6  │
└─────────┘ └─────────┘ └─────────┘
```

**Tablet (2 columnas):**
```
┌──────────────┐ ┌──────────────┐
│ Card 1       │ │ Card 2       │
└──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐
│ Card 3       │ │ Card 4       │
└──────────────┘ └──────────────┘
```

**Mobile (1 columna):**
```
┌──────────────┐
│ Card 1       │
└──────────────┘
┌──────────────┐
│ Card 2       │
└──────────────┘
┌──────────────┐
│ Card 3       │
└──────────────┘
```

### Featured Property (Destacada)

Una propiedad puede ser destacada (ocupa 2 columnas en desktop):
```
┌─────────────────────┐ ┌─────────┐
│                     │ │ Card 2  │
│ Card 1 (Featured)   │ │         │
│ (Span 2 columns)    │ └─────────┘
│                     │
└─────────────────────┘
```

---

## 🎨 Paleta de Colores Por Sección

### Hero Section
- Fondo: Negro (#1A1A1A)
- Texto: Blanco
- Acentos: Oro (#C9A84C)
- Buscador: Inputs oscuros con borde oro

### Catálogo
- Fondo: Crema (#F8F4EE)
- Tarjetas: Blanco
- Botones: Verde WhatsApp (#25D366)
- Filtros activos: Oro

### Sobre Mí
- Fondo: Negro (#1A1A1A)
- Texto: Blanco
- Acentos: Oro

### Testimonios
- Fondo: Negro
- Tarjetas: Blanco/Transparente 4%
- Estrellas: Oro

### Blog
- Fondo: Crema
- Tarjetas: Blanco
- Categorías: Oro

### Footer
- Fondo: Negro puro (#0F0F0F)
- Texto: Blanco
- Enlaces: Gris con hover a oro

---

## ✨ Efectos y Animaciones

### Fade Up Animation
```
Estado inicial:  Opacidad 0%, Y +30px
                 ↓ (0.6s)
Estado final:    Opacidad 100%, Y 0px
```

Aplicado a:
- Eyebrow en Hero
- Headline en Hero
- Stats en Hero
- Todos los elementos principales

### Hover Effects

**Property Cards:**
```
Normal:   Sombra pequeña
Hover:    Sombra grande + Elevación (-6px)
```

**Botones:**
```
Normal:   Color base
Hover:    Color más claro + Cambio de cursor
```

**Links:**
```
Normal:   Blanco/Gris
Hover:    Oro (#C9A84C)
```

---

## 📱 Responsive Breakpoints

### Mobile First (< 768px)
- 1 columna en grids
- Navbar comprimido con ícono hamburguesa
- Fuentes más pequeñas
- Espaciado reducido

### Tablet (768px - 1024px)
- 2 columnas en catálogo
- Navbar completo
- Espaciado moderado

### Desktop (> 1024px)
- 3 columnas en catálogo
- Navbar con todos los elementos
- Espaciado premium
- Fuentes grandes

---

## 🔤 Tipografía

### Headings (Cormorant Garamond)
- Elegante y serif
- Font weights: 300 (light), 400 (regular), 600 (bold)
- Se usa para:
  - H1 (Hero): 56px
  - H2 (Secciones): 46px
  - H3 (Cards): 18px

### Body Text (DM Sans)
- Limpio y moderno sans-serif
- Font weight: 400
- Tamaño: 15px para párrafos, 13px para detalles

### Special (Playfair Display)
- Solo para "Carlos M." en About
- Italic
- Tamaño: 42px

---

## 🎯 Conversión Optimizada

1. **CTA Prominente**: Botón "Contactar" en navbar
2. **WhatsApp Flotante**: Accesible en toda la página
3. **Búsqueda Inmediata**: En el hero (arriba)
4. **Cards con Múltiples CTAs**: WhatsApp + Detalles
5. **Testimonios**: Construyen confianza
6. **Elementos de Confianza**: Años de experiencia, clientes, certificaciones

---

## 🌐 SEO Visual

- Estructura semántica clara (H1, H2, H3...)
- Imágenes con alt text
- Contraste suficiente (WCAG AA)
- Espaciado adecuado para legibilidad
- Velocidad de animaciones optimizada

---

**La página está diseñada para convertir visitas en contactos. Cada sección tiene un propósito claro en el customer journey.**
