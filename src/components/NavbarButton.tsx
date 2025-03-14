"use client"
interface NavbarButtonProps {
    menuOpen: boolean;
    toggleMenu: () => void;
  }
  

const  NavbarButton: React.FC<NavbarButtonProps> = ({ toggleMenu, menuOpen }) => {
  return (
<button
 onClick={toggleMenu}
      className="relative flex items-center justify-center bg-black rounded-lg aspect-square w-10"
      aria-label="Toggle menu"
    >
      <div className="relative w-2/5 h-2/5 flex flex-col justify-between">
        {/* Top Line */}
        <span
          className={`absolute left-0 w-full h-[10%] bg-white rounded transition-all duration-600 ${
            menuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`absolute left-0 w-full h-[10%] bg-white rounded transition-all duration-600 ${
            menuOpen ? "opacity-0 translate-x-4 top-1/2 -translate-y-1/2" : "top-1/2 -translate-y-1/2"
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`absolute left-0 w-full h-[10%] bg-white rounded transition-all duration-600 ${
            menuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default NavbarButton;