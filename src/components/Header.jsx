import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Bloquea scroll cuando menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 w-full z-50
          bg-gray-900/90 backdrop-blur
          transition-transform duration-300
          ${show && !menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => window.location.reload()}
            className="
              cursor-pointer text-lg font-semibold tracking-wide
              border border-cyan-400 text-cyan-400
              px-3 py-1
              transition-all duration-200
              hover:shadow-[4px_4px_0_0_#22d3ee]
              hover:-translate-x-1 hover:-translate-y-1
            "
          >
            Toloza.dev
          </div>

          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="flex items-center gap-1 animate-fadeDown"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <span className="text-cyan-400">&#123;</span>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
                <span className="text-cyan-400">&#125;</span>
              </li>
            ))}
          </ul>

          {/* HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-cyan-400 focus:outline-none"
            aria-label="Abrir menú"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[2px] bg-cyan-400"></span>
              <span className="block w-6 h-[2px] bg-cyan-400"></span>
              <span className="block w-6 h-[2px] bg-cyan-400"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`
          fixed inset-0 z-40 bg-gray-950/95 backdrop-blur
          flex flex-col items-center justify-center
          transition-all duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* BOTÓN CERRAR */}
        <button
          onClick={() => setMenuOpen(false)}
          className="
            absolute top-10 right-10
            text-cyan-400 text-3xl
            transition-all duration-300
            hover:rotate-90
            hover:scale-110
            hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
          "
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <ul className="flex flex-col gap-8 text-lg">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="text-center animate-fadeUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  text-gray-200 hover:text-cyan-400
                  transition-colors
                  tracking-wide
                "
              >
                <span className="text-cyan-400 mr-2">&#123;</span>
                {link.label}
                <span className="text-cyan-400 ml-2">&#125;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
