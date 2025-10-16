'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/logo_trocha.svg'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Aquí va la lógica de suscripción al newsletter
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setEmail('')
    setIsSubmitting(false)
  }

  const navigationLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Rutas', href: '/rutas' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const routeLinks = [
    { name: 'Sendero del Cóndor', href: '/rutas' },
    { name: 'Cascada El Ensueño', href: '/rutas' },
    { name: 'Pico Nevado Explorer', href: '/rutas' },
    { name: 'Ruta del Café', href: '/rutas' }
  ]

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Política de Cancelación', href: '/cancelacion' }
  ]

  const certifications = [
    { name: 'RNT: 12345-67' },
    { name: 'ANATO Certificado' },
    { name: 'ICONTEC Calidad' },
    { name: 'Turismo Sostenible' }
  ]

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className='w-12 h-12'>
                <Image src={logo} alt='logo' className='w-full h-full object-cover' />
              </div>
              <span className="text-xl font-bold text-secondary">Trocha Adventure</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu compañía de confianza para explorar los senderos más espectaculares del eje cafetero colombiano. Aventuras seguras, guías expertos y experiencias inolvidables.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Santa Rosa de Cabal, Risaralda</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+573162345678" className="hover:text-primary transition-colors">
                  +57 319 361 8477
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@trockaadventure.com" className="hover:text-primary transition-colors break-all">
                  info@trockaadventure.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes Column */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">Nuestras Rutas</h3>
            <ul className="space-y-3">
              {routeLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">Síguenos</h3>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              
              <a
                href="/https://www.instagram.com/trocha_adventour/"
                className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Tik Tok"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 mb-4">
            © 2025 Trocha Adventure. Todos los derechos reservados.
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-gray-600">
            {certifications.map((cert, index) => (
              <span key={index}>{cert.name}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
