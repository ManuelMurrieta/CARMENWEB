import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' })
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: '--font-cormorant',
  weights: ['300', '400', '600']
})
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair',
  style: ['italic']
})

export const metadata: Metadata = {
  title: 'Carlos Mendoza — Asesor Inmobiliario Premium | Chimbote',
  description: 'Experto en bienes raíces con más de 10 años de experiencia en Chimbote. Encuentra tu propiedad ideal con el mejor asesor inmobiliario.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
