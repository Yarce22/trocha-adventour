"use client"

interface BurgerMenuProps {
  handleMenu: () => void;
  menuOpen: boolean
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ handleMenu, menuOpen }) => {
  return (
    <div>
      <button onClick={handleMenu} className="flex flex-col justify-between w-6 h-4 md:w-10 md:h-6">
        <span className={`w-full h-0.5 md:h-1 bg-black transition ease-in-out duration-300 ${menuOpen && "rotate-45 translate-y-[7px] md:translate-y-[10px]"}`}></span>
        <span className={`w-full h-0.5 md:h-1 bg-black transition ease-in-out duration-300 ${menuOpen && "hidden"}`}></span>
        <span className={`w-full h-0.5 md:h-1 bg-black transition ease-in-out duration-300 ${menuOpen && "-rotate-45 -translate-y-[7px] md:-translate-y-[10px]"}`}></span>
      </button>
    </div>
  )
}

export { BurgerMenu }
