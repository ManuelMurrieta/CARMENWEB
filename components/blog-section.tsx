'use client'

// TODO: Reemplazar con artículos reales desde una API o CMS
const BLOG_POSTS = [
  {
    id: '1',
    title: '5 Claves para Invertir en Bienes Raíces',
    category: 'Inversión',
    excerpt: 'Descubre las estrategias más efectivas para maximizar tu inversión inmobiliaria.',
    date: 'Mayo 2024',
    emoji: '📈',
  },
  {
    id: '2',
    title: 'Cómo Comprar tu Primera Casa',
    category: 'Guía',
    excerpt: 'Una guía completa paso a paso para comprar tu primera propiedad.',
    date: 'Abril 2024',
    emoji: '🏡',
  },
  {
    id: '3',
    title: 'Tendencias del Mercado Inmobiliario 2024',
    category: 'Mercado',
    excerpt: 'Análisis detallado de las tendencias más importantes del sector inmobiliario.',
    date: 'Marzo 2024',
    emoji: '📊',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-[90px] px-[60px] bg-white">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[3px] uppercase text-gold mb-3">
          <span className="block w-10 h-[1px] bg-gold" />
          Blog
        </div>

        <h2 className="font-serif text-[clamp(30px,3vw,46px)] font-light leading-[1.2]">
          Artículos y <em className="italic text-gold">Recursos</em>
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-white rounded-[6px] overflow-hidden border border-[#eee] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col"
          >
            {/* Thumbnail */}
            <div className="h-[180px] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-[60px]">
              {post.emoji}
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                  {post.category}
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-charcoal leading-[1.3] mb-2.5">
                  {post.title}
                </h3>
                <p className="text-[12px] text-[#7A7A7A] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="text-[12px] text-[#7A7A7A] mt-4 pt-4 border-t border-[#eee]">
                {post.date}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            console.log('Ir a blog completo')
          }}
          className="px-10 py-3 border-2 border-gold text-gold font-medium rounded-[2px] transition-colors duration-200 hover:bg-gold hover:text-charcoal"
        >
          Ver Todos los Artículos
        </button>
      </div>
    </section>
  )
}
