import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolleando hacia abajo
        setShow(false);
      } else {
        // scrolleando hacia arriba
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        bg-gray-900 text-white
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div onClick={() => window.location.reload()}
          className="  cursor-pointer text-lg font-semibold tracking-wide border text-cyan-400 border-cyan-400 px-3 py-1 transition-all duration-200 hover:shadow-[4px_4px_0_0_#22d3ee] hover:-translate-x-1 hover:-translate-y-1">
          Toloza.dev
        </div>

        <ul className="hidden md:flex gap-6 text-sm">
          <li className="flex items-center gap-1 animate-fadeDown [animation-delay:100ms]">
            <span className="text-cyan-400">&#123;</span>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              Inicio
            </a>
            <span className="text-cyan-400">&#125;</span>
          </li>
          <li className="flex items-center gap-1 animate-fadeDown [animation-delay:200ms]">
            <span className="text-cyan-400">&#123;</span>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Proyectos
            </a>
            <span className="text-cyan-400">&#125;</span>
          </li>
          <li className="flex items-center gap-1 animate-fadeDown [animation-delay:300ms]">
            <span className="text-cyan-400">&#123;</span>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Habilidades
            </a>
            <span className="text-cyan-400">&#125;</span>
          </li>
          <li className="flex items-center gap-1 animate-fadeDown [animation-delay:400ms]">
            <span className="text-cyan-400">&#123;</span>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">
              Contacto
            </a>
            <span className="text-cyan-400">&#125;</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
