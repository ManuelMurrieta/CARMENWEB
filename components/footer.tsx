'use client'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      {/* Main Footer */}
      <div className="px-[60px] py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-[28px] font-semibold text-gold mb-[14px]">
              CARLOS <span className="text-white/50 italic font-light">Mendoza</span>
            </div>
            <p className="text-[13px] leading-[1.7] text-white/45 mb-5">
              Asesor inmobiliario premium con más de 10 años de experiencia en Chimbote. Comprometido con tu éxito inmobiliario.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-200"
              >
                f
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-200"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-200"
              >
                📷
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-200"
              >
                🔗
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-gold mb-[18px]">
              Navegación
            </h4>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <a href="#inicio" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-gold mb-[18px]">
              Recursos
            </h4>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <a href="#blog" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-gold mb-[18px]">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span className="text-[16px] flex-shrink-0 mt-1">📍</span>
                <p className="text-[13px] text-white/45 leading-[1.5]">
                  Chimbote, Ancash, Perú
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[16px] flex-shrink-0 mt-1">📞</span>
                <a href="tel:+51901234567" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  +51 9 0123 4567
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[16px] flex-shrink-0 mt-1">✉️</span>
                <a href="mailto:carlos@inmobiliario.com" className="text-[13px] text-white/45 hover:text-gold transition-colors duration-200">
                  carlos@inmobiliario.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-[60px] py-6 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[12px] text-white/25">
          © 2024 Carlos Mendoza. Todos los derechos reservados.
        </div>
        <div className="flex gap-5">
          <a href="#" className="text-[12px] text-white/25 hover:text-gold transition-colors duration-200">
            Términos de Servicio
          </a>
          <a href="#" className="text-[12px] text-white/25 hover:text-gold transition-colors duration-200">
            Política de Privacidad
          </a>
          <a href="#" className="text-[12px] text-white/25 hover:text-gold transition-colors duration-200">
            Cookies
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51901234567?text=Hola%20Carlos%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-[30px] z-[999] w-[58px] h-[58px] rounded-full bg-green-wa flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-108 transition-transform animate-pulse"
      >
        <span className="text-[28px]">💬</span>
        <span className="absolute right-full mr-2 bg-charcoal text-white text-[12px] px-3 py-1.5 rounded-[4px] whitespace-nowrap opacity-0 pointer-events-none">
          Contáctame
        </span>
      </a>
    </footer>
  )
}
