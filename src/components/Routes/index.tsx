'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ImageProps } from 'next/image'

import hero1 from '@/assets/images/hero_1.jpg'

interface Route {
  id: number
  title: string
  description: string
  features: string[]
  difficulty: 'Fácil' | 'Difícil'
  duration: string
  image: ImageProps['src']
  buttonText: string
}

const Routes: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const routes: Route[] = [
    {
      id: 1,
      title: 'Cascada El Ensueño',
      description: 'Un sendero familiar que conduce a una hermosa cascada de 40 metros de altura, perfecta para un baño refrescante.',
      features: ['Piscina natural', 'Fotografía perfecta', 'Apto para familias'],
      difficulty: 'Fácil',
      duration: '2-3 horas',
      image: hero1,
      buttonText: 'Reservar'
    },
    {
      id: 2,
      title: 'Pico Nevado Explorer',
      description: 'Desafío extremo para montañistas experimentados. Alcanza la cumbre nevada con vistas panorámicas espectaculares.',
      features: ['Vistas 360°', 'Equipo especializado', 'Guía experto incluido'],
      difficulty: 'Difícil',
      duration: '8-10 horas',
      image: hero1,
      buttonText: 'Consultar'
    },
    {
      id: 3,
      title: 'Ruta del Café',
      description: 'Recorre plantaciones tradicionales de café, aprende sobre el proceso y disfruta de degustaciones en fincas locales.',
      features: ['Degustación incluida', 'Cultura local', 'Paisajes cafeteros'],
      difficulty: 'Fácil',
      duration: '3-4 horas',
      image: hero1,
      buttonText: 'Reservar'
    },
    {
      id: 4,
      title: 'Laguna Escondida',
      description: 'Aventura de día completo hacia una laguna de aguas cristalinas rodeada de bosque nuboso y fauna silvestre.',
      features: ['Observación de aves', 'Natación', 'Almuerzo campestre'],
      difficulty: 'Fácil',
      duration: '5-6 horas',
      image: hero1,
      buttonText: 'Reservar'
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Ajusta según el ancho de tus cards
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nuestras Rutas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Descubre senderos únicos en el corazón del eje cafetero, desde caminatas familiares
            hasta desafíos extremos para montañistas experimentados.
          </p>
        </div>

        {/* Scrollable Cards Container with Navigation */}
        <div className="relative group px-6 md:px-6 lg:px-16">
          {/* Botón izquierdo */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 
              bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl
              w-12 h-12 xl:w-14 xl:h-14
              rounded-full items-center justify-center
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              -translate-x-6 group-hover:translate-x-0
              disabled:opacity-0 disabled:cursor-not-allowed
              border border-gray-200 hover:cursor-pointer"
            aria-label="Scroll a la izquierda"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Botón derecho */}
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 
              bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl
              w-12 h-12 xl:w-14 xl:h-14
              rounded-full items-center justify-center
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              translate-x-6 group-hover:translate-x-0
              disabled:opacity-0 disabled:cursor-not-allowed
              border border-gray-200 hover:cursor-pointer"
            aria-label="Scroll a la derecha"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
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
          </button>

          {/* Gradient Overlays */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
          >
            <div className="flex gap-6 md:gap-8 px-4 md:px-6 lg:px-8 min-w-min">
              {routes.map((route) => (
                <div
                  key={route.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-start"
                  onMouseEnter={() => setHoveredCard(route.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-[500px] md:h-[550px] rounded-2xl overflow-hidden group/card cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                        {/* Aquí van tus imágenes reales */}
                        <Image
                            src={route.image}
                            alt={route.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                        />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-30 p-6 md:p-8 flex flex-col justify-end">
                      {/* Tags superiores */}
                      <div className="absolute top-6 left-6 right-6 flex gap-3 z-10">
                        <span
                          className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 backdrop-blur-sm ${
                            route.difficulty === 'Fácil'
                              ? 'bg-green-200/90 text-green-700'
                              : 'bg-red-200/90 text-red-700'
                          }`}
                        >
                          {route.difficulty}
                        </span>
                        <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-800/80 text-white backdrop-blur-sm flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {route.duration}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
                        {route.title}
                      </h3>

                      {/* Contenido expandible en hover */}
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          hoveredCard === route.id
                            ? 'opacity-100 translate-y-0 max-h-96'
                            : 'opacity-0 translate-y-4 max-h-0'
                        }`}
                      >
                        {/* Descripción */}
                        <p className="text-white text-sm md:text-base mb-4 leading-relaxed">
                          {route.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-6">
                          {route.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-white text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Button */}
                        <button className="w-full bg-white hover:bg-green-500 text-gray-900 hover:cursor-pointer hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                          {route.buttonText}
                        </button>
                      </div>
                    </div>

                    {/* Overlay gradient */}
                    <div
                      className={`absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                        hoveredCard === route.id ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador de scroll para móvil */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {routes.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Routes }
