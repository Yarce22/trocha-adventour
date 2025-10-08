'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

const SliderImages: React.FC<{ sliderImages: HeroImg[] }> = ({ sliderImages }) => {
    
    return (
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
              src={image.img.fields.file.url.replace('//', 'https://')}
              alt={image.title}
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
    )
}

export { SliderImages }