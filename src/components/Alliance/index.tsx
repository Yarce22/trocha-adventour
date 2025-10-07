import Image from 'next/image'

interface Partner {
  id: number
  name: string
  description: string
  logo: string
}

const Alliance: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'Hotel Termales Santa Rosa',
      description: 'Hospedaje de lujo con aguas termales naturales',
      logo: '/logos/hotel-termales.png'
    },
    {
      id: 2,
      name: 'Turismo Eje Cafetero',
      description: 'Agencia oficial de turismo regional',
      logo: '/logos/turismo-eje.png'
    },
    {
      id: 3,
      name: 'Outdoor Gear Colombia',
      description: 'Equipos profesionales para montañismo',
      logo: '/logos/outdoor-gear.png'
    },
    {
      id: 4,
      name: 'Café de los Andes',
      description: 'Café premium de la región cafetera',
      logo: '/logos/cafe-andes.png'
    },
    {
      id: 5,
      name: 'Parques Nacionales',
      description: 'Sistema de áreas protegidas de Colombia',
      logo: '/logos/parques-nacionales.png'
    },
    {
      id: 6,
      name: 'Aviatur',
      description: 'Líder en viajes y turismo en Colombia',
      logo: '/logos/aviatur.png'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Nuestros Aliados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trabajamos con las mejores empresas y organizaciones del sector turístico para
            brindarte experiencias excepcionales y servicios de calidad.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            Empresas Aliadas
          </h3>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex">
            {/* First Set */}
            <div className="flex animate-infinite-scroll">
              {partners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 mx-4 md:mx-8"
                >
                  <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 w-48 md:w-56 h-48 md:h-56 flex flex-col items-center justify-center gap-4 hover:-translate-y-2">
                    {/* Logo Container */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                        {/* Aquí van los logos reales */}
                        <span className="text-2xl md:text-3xl font-bold text-gray-600">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Partner Info */}
                    <div className="text-center">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                        {partner.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex animate-infinite-scroll" aria-hidden="true">
              {partners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 mx-4 md:mx-8"
                >
                  <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 w-48 md:w-56 h-48 md:h-56 flex flex-col items-center justify-center gap-4 hover:-translate-y-2">
                    {/* Logo Container */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-gray-600">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Partner Info */}
                    <div className="text-center">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                        {partner.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Alliance }
