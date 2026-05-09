'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[60px] py-[18px] bg-[rgba(26,26,26,0.92)] backdrop-blur-[12px] border-b border-[rgba(201,168,76,0.25)]">
      {/* Logo */}
      <div className="font-serif text-[22px] font-semibold tracking-[2px] text-gold">
        CARLOS <span className="text-white font-light italic font-serif">Mendoza</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8">
        <a href="#inicio" className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/75 hover:text-gold transition-colors duration-[0.25s]">
          Inicio
        </a>
        <a href="#catalogo" className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/75 hover:text-gold transition-colors duration-[0.25s]">
          Catálogo
        </a>
        <a href="#sobre-mi" className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/75 hover:text-gold transition-colors duration-[0.25s]">
          Sobre Mí
        </a>
        <a href="#testimonios" className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/75 hover:text-gold transition-colors duration-[0.25s]">
          Testimonios
        </a>
        <a href="#blog" className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/75 hover:text-gold transition-colors duration-[0.25s]">
          Blog
        </a>
      </div>

      {/* CTA Button */}
      <button className="hidden md:block px-[22px] py-[9px] bg-gold text-charcoal font-medium text-[12px] rounded-[2px] transition-colors duration-[0.2s] hover:bg-gold-light">
        Contactar
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gold">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}
