# 🚀 QUICKSTART - Comienza en 5 Minutos

## 1️⃣ Clonar/Descargar (1 min)

```bash
# Si lo descargaste como ZIP, descomprímelo
cd v0-project

# Si lo clonaste
git clone https://github.com/tu-usuario/inmobiliario.git
cd inmobiliario
```

## 2️⃣ Instalar Dependencias (2 min)

```bash
npm install
```

O si usas PNPM:
```bash
pnpm install
```

## 3️⃣ Ejecutar Servidor (1 min)

```bash
npm run dev
```

Verás algo como:
```
> ready - started server on 0.0.0.0:3000
```

## 4️⃣ Abrir en Navegador (1 min)

Abre en tu navegador:
```
http://localhost:3000
```

¡**Listo!** 🎉 Ya puedes ver tu página funcionando.

---

## 📝 Próximos Pasos (30 min)

### Paso 1: Personaliza tu Nombre
En `components/navbar.tsx`, línea ~8:
```typescript
<div className="font-serif text-xl font-semibold tracking-widest text-gold">
  TU_NOMBRE {/* Cambiar aquí */} <span className="text-white font-light italic">Mendoza</span>
</div>
```

En `components/footer.tsx`, línea ~30:
```typescript
<div className="font-serif text-2xl font-semibold text-gold">
  TU_NOMBRE {/* Cambiar aquí */} <span className="text-white/50 italic font-light">Mendoza</span>
</div>
```

### Paso 2: Cambia tu Número de WhatsApp
Busca en todo el proyecto:
```
51901234567  (Número ejemplo)
```

Y reemplázalo con tu número. Formato: `51` + número sin espacios.

**Opción rápida en VS Code:**
- Abre Find & Replace: `Ctrl+H`
- Busca: `51901234567`
- Reemplaza con: `TU_NUMERO`
- Click "Replace All"

### Paso 3: Personaliza Colores (Opcional)
En `app/globals.css`, línea ~7:
```css
:root {
  --gold: #C9A84C;        /* Cambiar este color */
  --gold-light: #E8C96D;
  --gold-dark: #8B6914;
  /* ... más colores */
}
```

### Paso 4: Cambia Título y Meta Tags
En `app/layout.tsx`, línea ~26:
```typescript
export const metadata: Metadata = {
  title: 'Tu Nombre — Asesor Inmobiliario Premium | Tu Ciudad',
  description: 'Encuentra las mejores propiedades...',
}
```

---

## 🖼️ Agregar Imágenes (10 min)

### 1. Crea carpeta de imágenes
```bash
mkdir -p public/images/properties
mkdir -p public/images/testimonials
```

### 2. Copia tus imágenes ahí
```
public/
└── images/
    ├── properties/
    │   ├── property-1.jpg
    │   ├── property-2.jpg
    └── testimonials/
        ├── maria.jpg
        └── juan.jpg
```

### 3. Reemplaza el emoji en PropertyCard
En `components/property-card.tsx`, línea ~37:
```typescript
// De esto:
<div className="text-7xl opacity-15">🏠</div>

// A esto:
<Image 
  src="/images/properties/property-1.jpg"
  alt={title}
  width={400}
  height={300}
/>
```

### 4. Reemplaza foto de asesor en Hero
En `components/hero.tsx`, línea ~30:
```typescript
// De esto:
<div className="w-full h-full bg-gradient... flex items-center justify-center">
  <div className="text-6xl opacity-10">👨‍💼</div>
</div>

// A esto:
<Image 
  src="/images/asesor.jpg"
  alt="Carlos Mendoza"
  width={600}
  height={800}
  className="w-full h-full object-cover"
/>
```

---

## 🏠 Cambiar Propiedades (5 min)

### Opción Rápida: Editar el Array
En `components/catalog-section.tsx`, línea ~9:

```typescript
const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'MI PRIMERA PROPIEDAD',  // Cambia aquí
    location: 'Mi Ciudad',           // Cambia aquí
    price: '$1200',                  // Cambia aquí
    beds: 3,
    baths: 2,
    sqft: 120,
    type: 'Departamento',
    badge: 'Exclusivo',
  },
  // ... más propiedades
]
```

### Opción Profesional: Conectar API (30 min)
Vé a `IMPLEMENTATION_GUIDE.md` sección "Base de Datos".

---

## 📧 Configurar Email (Opcional, 15 min)

Para recibir contactos por email:

### Opción 1: Formspree (MÁS FÁCIL)
```typescript
// En cualquier formulario
<form action="https://formspree.io/f/TU_ID" method="POST">
  <input name="name" required />
  <input name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Opción 2: Nodemailer (Profesional)
```bash
npm install nodemailer
```

Vé a `lib/examples.ts` para ver cómo implementar.

---

## 🚀 Deploy en Vercel (5 min)

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Sigue las instrucciones
```

Eso es todo. Tu página estará en vivo en:
```
https://tu-proyecto.vercel.app
```

---

## ✅ Verificación Rápida

Abre http://localhost:3000 y verifica:

- [ ] Se ve bien (no errores)
- [ ] Navbar funciona
- [ ] Secciones cargadas
- [ ] Botón WhatsApp visible
- [ ] Responsive en móvil (F12 → Mobile)
- [ ] Colores correctos

---

## 🆘 Si Algo Falla

### Error: "Cannot find module"
```bash
rm -rf node_modules
npm install
npm run dev
```

### Error: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Estilos no se aplican
```bash
rm -rf .next
npm run dev
```

### Necesito más ayuda
1. Lee `FAQ.md`
2. Lee `IMPLEMENTATION_GUIDE.md`
3. Revisa `lib/examples.ts`

---

## 📁 Estructura Mínima para Cambios

Estos son los ÚNICOS archivos que necesitas editar:

```
components/
├── navbar.tsx           ← Tu nombre/links
├── hero.tsx            ← Tu foto/texto
├── catalog-section.tsx ← Tus propiedades
├── about-section.tsx   ← Tu biografía
├── footer.tsx          ← Contacto/redes
└── blog-section.tsx    ← Tus artículos

app/
├── layout.tsx          ← Título/description
└── globals.css         ← Colores

public/images/         ← Tus fotos
```

---

## 🎯 Checklist Mínimo

- [ ] Proyecto clonado/descargado
- [ ] `npm install` ejecutado
- [ ] `npm run dev` funcionando
- [ ] http://localhost:3000 abierto
- [ ] Nombre personalizado
- [ ] Número WhatsApp correcto
- [ ] Propiedades actualizadas

**Con esto, ya tienes una página funcional.**

---

## 🎉 ¡Listo!

Tu página web de inmobiliario está lista. 

**Próximos pasos opcionales:**
1. Conectar base de datos (IMPORTANTE)
2. Agregar más imágenes
3. Implementar sistema de contacto
4. Publicar en Vercel

**¿Necesitas ayuda con algo específico?**
- FAQ.md - Preguntas comunes
- IMPLEMENTATION_GUIDE.md - Guía completa
- VISUAL_GUIDE.md - Cómo se ve

---

**¡Happy coding! 🚀**
