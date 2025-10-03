"use client"

import React from "react"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import hero1 from '@/assets/images/hero_1.jpg'
import hero2 from '@/assets/images/hero_2.jpeg'
import hero3 from '@/assets/images/hero_3.jpeg'


const Hero:React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = useMemo(() => [
    {src: hero1, alt: 'Hero 1', title: "Descubre el Eje Cafetero", subtitle: "Aventura unica en Santa Rosa de Cabal", description: "Explora los senderos más espectaculares de Colombia con guías expertos y vive una experiencia inolvidable."},
    {src: hero2, alt: 'Hero 2', title: "Paisajes de ensueño", subtitle: "Montañas, bosques y cascadas te esperan", description: "Sumérgete en la naturaleza más pura y conéctate con la biodiversidad del eje cafetero Colombiano."},
    {src: hero3, alt: 'Hero 3', title: "Aventura Garantizada", subtitle: "Equipos profesionales y rutas seguras", description: "Con más de 10 años de experiencia en la industria de la aventura, Trocha Aventura garantiza que tu experiencia sea segura y memorable."},
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages])

  return (
      <section className="h-screen">
          <div className="relative flex container overflow-hidden h-screen">
            <Image src={heroImages[currentImage].src} alt={heroImages[currentImage].alt} className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center gap-3 w-full h-full bg-black/50 text-center px-6">
              <h1 className="text-4xl font-bold text-white">{heroImages[currentImage].title}</h1>
              <p className="text-white text-xl">{heroImages[currentImage].subtitle}</p>
              <p className="text-white">{heroImages[currentImage].description}</p>
              
              <div className="flex gap-3">
                <button className="bg-white text-black px-6 py-2 rounded-full">Ver más</button>
                <button className="bg-white text-black px-6 py-2 rounded-full">Reservar</button>
              </div>
            </div>  
          </div>
      </section>
  )
}

export { Hero }

