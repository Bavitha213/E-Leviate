import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="relative flex items-center justify-center h-16 lg:h-20 px-4">

          {/* CENTER LOGO */}
          <img
            src="/src/assets/logos/E-LEVIATE_LOGO_LILAC(no_bg).png"
            alt="E-Leviate logo"
            className="h-10 sm:h-12 lg:h-14 object-contain"
          />

          {/* HAMBURGER */}
          <button
            className="absolute right-4 lg:right-8 text-periwinkle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={32} />}
          </button>

        </div>
      </nav>

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-72 lg:w-80 bg-plum text-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-8 pt-24 text-base sm:text-lg font-light">

          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#rethinking" onClick={() => setIsOpen(false)}>Management</a>
          <a href="#clinical" onClick={() => setIsOpen(false)}>Clinical Performance</a>
          <a href="#timeline" onClick={() => setIsOpen(false)}>Timeline</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        </div>
      </div>
    </>
  );
}
