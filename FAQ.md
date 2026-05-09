# ❓ Preguntas Frecuentes (FAQ) & Troubleshooting

## 🚀 Cómo Empezar

### P: ¿Cómo inicio el servidor de desarrollo?
**R:** 
```bash
cd /vercel/share/v0-project
npm install  # Primera vez
npm run dev
```
Luego abre http://localhost:3000

### P: ¿Qué versión de Node.js necesito?
**R:** Node.js 18+ es recomendado. Verifica con `node --version`

### P: ¿Qué editor de código recomiendan?
**R:** 
- VS Code (Recomendado)
- WebStorm
- Cursor
- Cualquiera que soporte JavaScript/TypeScript

---

## 💻 Desarrollo & Código

### P: ¿Cómo cambio los colores?
**R:** 
1. Edita `app/globals.css` - sección `:root`
2. O edita `tailwind.config.ts` - sección `colors`
3. Los cambios se aplican automáticamente (hot reload)

```css
/* En globals.css */
:root {
  --gold: #C9A84C;  /* Cambia este valor */
}
```

### P: ¿Cómo agrego nuevas secciones?
**R:**
1. Crea nuevo componente: `components/nueva-seccion.tsx`
2. Importa en `app/page.tsx`
3. Añádelo a la estructura:
```typescript
import NuevaSeccion from '@/components/nueva-seccion'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NuevaSeccion />  {/* Aquí */}
      <Footer />
    </main>
  )
}
```

### P: ¿Cómo cambio las propiedades de ejemplo?
**R:** 
Edita `components/catalog-section.tsx`:
```typescript
const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Tu propiedad aquí',
    // ... cambia los datos
  }
]
```

Luego conéctalo a una API real (ver `IMPLEMENTATION_GUIDE.md`).

### P: ¿Cómo agrego más propiedades?
**R:** Hay 3 formas (de simple a compleja):

**1. Directamente en el código (RÁPIDO):**
```typescript
// En catalog-section.tsx
const SAMPLE_PROPERTIES = [
  { id: '1', ... },
  { id: '2', ... },
  // Agrega más aquí
]
```

**2. Con API propia (RECOMENDADO):**
```typescript
// En catalog-section.tsx con SWR
const { data: properties } = useSWR('/api/properties')
```

**3. Con base de datos (PROFESIONAL):**
- Supabase: `npm install @supabase/supabase-js`
- Firebase: `npm install firebase`
- MongoDB: `npm install mongodb`

---

## 🖼️ Imágenes

### P: ¿Dónde pongo las imágenes?
**R:**
```
public/
├── images/
│   ├── properties/
│   │   ├── property-1.jpg
│   │   ├── property-2.jpg
│   ├── testimonials/
│   │   ├── maria.jpg
│   │   ├── juan.jpg
```

### P: ¿Cómo agrego una imagen a una property card?
**R:** 
**Opción 1 - URL externa:**
```typescript
<img src="https://ejemplo.com/imagen.jpg" alt="Propiedad" />
```

**Opción 2 - Archivo local (mejor):**
```typescript
import Image from 'next/image'

<Image 
  src="/images/properties/property-1.jpg"
  alt="Departamento Premium"
  width={400}
  height={300}
/>
```

### P: ¿Cómo optimizo imágenes?
**R:** 
1. **Herramientas online**: TinyPNG, Cloudinary
2. **Comando CLI**: `ImageOptim` (Mac)
3. **Next.js Image**: Automáticamente optimiza
4. **Formatos**: JPG para fotos, PNG para gráficos

---

## 🔗 WhatsApp & Enlaces

### P: ¿Cómo cambio el número de WhatsApp?
**R:** 
Busca y reemplaza en todo el proyecto:
```bash
# Usa Ctrl+Shift+F en VS Code
Buscar: 51901234567
Reemplazar con: TU_NUMERO_REAL
```

O manualmente:
- `components/footer.tsx` - línea con `wa.me`
- `components/property-card.tsx` - función `whatsapp`
- `app/api/properties/route.ts` - comentario

### P: ¿Cómo customizo el mensaje de WhatsApp?
**R:**
```typescript
// En property-card.tsx
const whatsappMessage = `Hola, me interesa la propiedad: ${title}`
// Personaliza este texto
```

### P: ¿Cómo agrego links de redes sociales?
**R:**
En `components/footer.tsx`:
```typescript
<a href="https://facebook.com/tu-pagina">Facebook</a>
<a href="https://instagram.com/tu-usuario">Instagram</a>
<a href="https://linkedin.com/in/tu-perfil">LinkedIn</a>
```

---

## 📧 Email & Contacto

### P: ¿Cómo recibo emails de contactos?
**R:** 
Necesitas implementar un backend. Opciones:

**1. Con Vercel Email + SendGrid:**
```bash
npm install react-email
```

**2. Con Nodemailer:**
```bash
npm install nodemailer
```

**3. Con servicio tercero:**
- Formspree
- Emailjs
- Brevo

Ver ejemplos en `lib/examples.ts`

### P: ¿Cómo guardo contactos en base de datos?
**R:**
1. Crea tabla `leads`:
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP
)
```

2. Crea API:
```typescript
// app/api/leads/route.ts
export async function POST(request) {
  // Guardar en BD
}
```

3. Llama desde formulario:
```typescript
const handleSubmit = async (e) => {
  await fetch('/api/leads', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

---

## 🔍 SEO

### P: ¿Cómo mejoro SEO?
**R:** Checklist básico:

- [ ] Actualiza `metadata` en `app/layout.tsx`
- [ ] Agrega `keywords` en meta tags
- [ ] Crea `public/sitemap.xml`
- [ ] Crea `public/robots.txt`
- [ ] Agrega descripciones a imágenes
- [ ] Schema.json para propiedades

Vé a `IMPLEMENTATION_GUIDE.md` sección SEO.

### P: ¿Cómo agrego Google Analytics?
**R:**
```bash
npm install @vercel/analytics
```

Luego en `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout() {
  return (
    <html>
      <Analytics />
    </html>
  )
}
```

---

## 🎨 Diseño

### P: ¿Cómo cambio fuentes?
**R:**
En `app/layout.tsx`:
```typescript
import { TuFuente } from 'next/font/google'

const tuFuente = TuFuente({ subsets: ['latin'] })
```

Luego en tailwind.config.ts:
```typescript
fontFamily: {
  sans: ['var(--font-tu-fuente)']
}
```

### P: ¿Cómo agrego dark mode?
**R:**
```bash
npm install next-themes
```

Luego implementa con:
```typescript
<html className={darkMode ? 'dark' : ''}>
```

---

## ⚡ Performance

### P: La página está lenta, ¿qué hago?
**R:** 
Checklist:
1. [ ] Optimiza imágenes (WebP, comprime)
2. [ ] Usa Next.js Image component
3. [ ] Code splitting automático
4. [ ] Lazy loading de componentes

Ver con Lighthouse: F12 → Lighthouse

### P: ¿Cómo optimizo images?
**R:**
```typescript
import Image from 'next/image'

<Image
  src="/images/property.jpg"
  alt="Propiedad"
  width={400}
  height={300}
  loading="lazy"  {/* Lazy load */}
  quality={75}    {/* Comprime */}
/>
```

---

## 🐛 Debugging

### P: Hay error "module not found"
**R:**
1. Reinstala dependencias:
```bash
rm -rf node_modules
npm install
```

2. Reinicia servidor:
```bash
npm run dev
```

### P: Los estilos no se aplican
**R:**
1. Borra `.next` y reinicia:
```bash
rm -rf .next
npm run dev
```

2. Verifica que Tailwind esté importado en `globals.css`

3. Usa `!important` como último recurso:
```html
<div className="!text-gold">Texto</div>
```

### P: El botón de WhatsApp no funciona
**R:**
1. Verifica número: debe ser sin `+` o `-`
2. Formato correcto: `51901234567`
3. Verifica el link:
```
https://wa.me/51901234567?text=Mensaje
```

---

## 🚀 Deployment

### P: ¿Cómo subo a producción?
**R:**
**Opción 1 - Vercel (Recomendado):**
```bash
npm install -g vercel
vercel deploy
```

**Opción 2 - Manual:**
```bash
npm run build
npm run start
```

### P: ¿Necesito dominio propio?
**R:** No, Vercel te da uno gratis.
Pero recomendamos comprar uno:
- Namecheap
- GoDaddy
- Google Domains

---

## 📱 Mobile

### P: Se ve raro en móvil
**R:**
1. En Chrome F12, habilita "Device Toolbar"
2. Prueba en diferentes tamaños
3. Verifica `@media` queries en `globals.css`

### P: ¿Cómo agrego app icon?
**R:**
```
public/
├── icon.svg
├── icon-light-32x32.png
├── icon-dark-32x32.png
└── apple-icon.png
```

---

## 💡 Tips y Tricks

### Limpiar caché Next.js
```bash
rm -rf .next
npm run dev
```

### Ver variables de entorno
```bash
cat .env.local
```

### Debuggear en consola
```typescript
console.log("[v0] Debug:", data)
```

### Ejecutar en puerto diferente
```bash
npm run dev -- -p 3001
```

### Generar build optimizado
```bash
npm run build
npm run start
```

---

## 🆘 Otros Problemas

### P: ¿Cómo agrego más testimonios?
**R:** En `components/testimonials-section.tsx`:
```typescript
const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Excelente servicio',
    author: 'Nombre',
    role: 'Rol',
    rating: 5,
    initials: 'NI'
  },
  // Agrega más aquí
]
```

### P: ¿Cómo customizo el footer?
**R:** Edita `components/footer.tsx`:
- Cambia teléfono
- Cambia dirección
- Agrega redes sociales
- Personaliza links

### P: ¿Cómo cambio el logo?
**R:** En `components/navbar.tsx`:
```typescript
<div className="font-serif text-xl font-semibold">
  TU_NOMBRE_AQUI
</div>
```

---

## 📚 Recursos Útiles

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **React Docs**: https://react.dev
- **TypeScript**: https://typescriptlang.org
- **Vercel**: https://vercel.com/docs

---

## ✅ Checklist Pre-Launch

- [ ] Todas las imágenes cargadas
- [ ] Número de WhatsApp correcto
- [ ] Email de contacto funciona
- [ ] Propiedades reales en catálogo
- [ ] Testimonios reales
- [ ] Links del footer funcionan
- [ ] Mobile responsive verificado
- [ ] SEO básico implementado
- [ ] Analytics configurado
- [ ] Dominio propio (si aplica)

---

**¿No encuentras respuesta? Revisa `IMPLEMENTATION_GUIDE.md` o contacta a soporte.**
