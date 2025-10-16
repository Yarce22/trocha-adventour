'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MobileMenu } from '../BurgerMenu'
import logo from '@/app/logo_trocha.svg'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Rutas', href: '/rutas' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-secondary/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center gap-4 text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-secondary'
              }`}
            >
              <div className='w-12 h-12'>
                <Image src={logo} alt='logo' className='w-full h-full object-cover' />
              </div>
              Trocha Adventour
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors duration-300 hover:text-primary ${
                      isScrolled ? 'text-tertiary' : 'text-secondary/90'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <a href="#contacto">
              <button
                className={`hidden lg:block px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:cursor-pointer ${isScrolled ? 'bg-primary hover:bg-primary/80 text-secondary' : 'bg-secondary hover:bg-gray-100 text-primary'}`}
              >
                Reservar ahora
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-tertiary hover:bg-gray-100'
                  : 'text-secondary hover:bg-secondary/10'
              }`}
              aria-label="Abrir menú"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}

export { Navbar }
