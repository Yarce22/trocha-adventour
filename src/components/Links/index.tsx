import Link from "next/link"

interface LinksProps {
  handleMenu: () => void
}

const Links: React.FC<LinksProps> = ({ handleMenu }) => {
    return (
      <ul className="flex flex-col gap-4 items-center text-background transition-all duration-300 lg:flex-row">
        <li className="relative mb-2 font-bold md:text-2xl lg:text-xl group">
          <Link href="/" onClick={handleMenu}>Inicio</Link>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-background transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
        <li className="relative mb-2 font-bold md:text-2xl lg:text-xl group">
          <Link href="/about" onClick={handleMenu}>Sobre nosotros</Link>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-background transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </li>
      </ul>
    )
}

export { Links }