"use client"

import Image from "next/image"
import { useState } from "react"
import { BurgerMenu } from "../BurgerMenu"
import { Links } from "../Links"

const Navbar:React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => setMenuOpen(!menuOpen)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <h1 className="hidden">Trocha Adventour</h1>
      </div>
      <BurgerMenu handleMenu={handleMenu} menuOpen={menuOpen} />
      <div className={`absolute top-32 right-0 left-0 z-50 h-screen lg:flex ${menuOpen ? "block" : "hidden"}`}>
        <Links handleMenu={handleMenu} />
      </div>
    </nav>
  )
}

export { Navbar }