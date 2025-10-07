import Image from 'next/image'
import coffeeImage from '@/assets/images/coffeeHands.jpeg'

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            ¿Por qué elegir Trocka Adventure?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos la empresa líder en senderismo del eje cafetero colombiano, especializada en
            crear experiencias únicas e inolvidables en el corazón de los Andes.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 md:space-y-10">
            {/* Section 1 */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tu aventura en las montañas del café
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Santa Rosa de Cabal es el corazón del turismo de naturaleza en Colombia. 
                Ubicada estratégicamente en el eje cafetero, nuestra región ofrece una 
                biodiversidad única, paisajes espectaculares y una cultura cafetera auténtica 
                que conquista a todos nuestros visitantes.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                En Trocka Adventure, no solo te llevamos a los destinos más hermosos, sino 
                que te conectamos con la esencia de nuestra tierra, sus tradiciones y su gente. 
                Cada ruta es una historia, cada sendero una nueva aventura.
              </p>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-200">
              <div className="flex-shrink-0 w-6 h-6 text-green-600">
                <svg 
                  className="w-full h-full" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <span className="text-base md:text-lg font-semibold text-gray-800">
                Santa Rosa de Cabal, Risaralda - Colombia
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:cursor-pointer hover:scale-105 hover:shadow-xl active:scale-95">
                <span className="text-lg">Conocer más</span>
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full group-hover:translate-x-1 transition-transform duration-300">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[1/1] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={coffeeImage}
                alt="Granos de café en manos - Cultura cafetera colombiana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full -z-10" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 bg-green-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }