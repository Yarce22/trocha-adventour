import { SliderImages } from "../SliderImages"
import { getHeroImgs } from "@/lib/contentfulServices"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Hero: React.FC = async () => {
  const heroImgs = await getHeroImgs()
  console.log(heroImgs)

  return (
    <section className="h-screen relative">
      <SliderImages sliderImages={heroImgs} />

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
