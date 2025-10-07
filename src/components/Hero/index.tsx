'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import hero1 from '@/assets/images/hero_1.jpg'
import hero2 from '@/assets/images/hero_2.jpeg'
import hero3 from '@/assets/images/hero_3.jpeg'

const Hero: React.FC = () => {
  const sliderImages = [
    { src: hero1, alt: "Senderismo en montaña", title: "Descubre el Eje Cafetero", subtitle: "Aventuras únicas en Santa Rosa de Cabal", description: "Explora los senderos más espectaculares de Colombia con guías expertos y vive una experiencia inolvidable." },
    { src: hero2, alt: "Rutas de aventura", title: "Paisajes de Ensueño", subtitle: "Montañas, bosques y cascadas te esperan", description: "Sumérgete en la naturaleza más pura y conecta con la biodiversidad del eje cafetero colombiano." },
    { src: hero3, alt: "Expediciones guiadas", title: "Aventura Garantizada", subtitle: "Equipos profesionales y rutas seguras", description: "Con más de 10 años de experiencia, te garantizamos aventuras seguras y emocionantes para todos los niveles." },  
  ]

  return (
    <section className="h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute w-full h-full flex flex-col gap-4 px-6 items-center justify-center bg-black/50 text-center">
                <h2 className="text-4xl font-bold text-white">{image.title}</h2>
                <h3 className="text-2xl font-semibold text-white">{image.subtitle}</h3>
                <p className="text-white">{image.description}</p>

                <div className="flex gap-4">
                  <a href="/rutas">
                    <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:cursor-pointer">Ver más</button>
                  </a>
                  <a href="#contacto">
                    <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:cursor-pointer">Reservar</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination-custom absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-2
        [&_.swiper-pagination-bullet]:w-3 
        [&_.swiper-pagination-bullet]:h-3 
        [&_.swiper-pagination-bullet]:rounded-full 
        [&_.swiper-pagination-bullet]:bg-white 
        [&_.swiper-pagination-bullet]:opacity-50 
        [&_.swiper-pagination-bullet]:transition-all 
        [&_.swiper-pagination-bullet]:duration-300
        [&_.swiper-pagination-bullet]:cursor-pointer
        [&_.swiper-pagination-bullet-active]:opacity-100 
        [&_.swiper-pagination-bullet-active]:w-8 
        [&_.swiper-pagination-bullet-active]:bg-white
        md:bottom-12"
      />

      <button 
        className="swiper-button-prev-custom hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 
          bg-white/30 hover:bg-white/50 backdrop-blur-sm 
          w-12 h-12 lg:w-14 lg:h-14 
          rounded-full items-center justify-center 
          transition-all duration-300 
          group cursor-pointer
          active:scale-95"
        aria-label="Imagen anterior"
      >
        <svg 
          className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" 
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

      <button 
        className="swiper-button-next-custom hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 
          bg-white/30 hover:bg-white/50 backdrop-blur-sm 
          w-12 h-12 lg:w-14 lg:h-14 
          rounded-full items-center justify-center 
          transition-all duration-300 
          group cursor-pointer
          active:scale-95"
        aria-label="Imagen siguiente"
      >
        <svg 
          className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" 
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
    </section> 
  )
}

export { Hero }
