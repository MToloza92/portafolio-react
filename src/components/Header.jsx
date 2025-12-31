export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">
          Toloza.dev
        </div>

        <ul className="hidden md:flex gap-6 text-sm">
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Inicio
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Proyectos
          </li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
            Contacto
          </li>
        </ul>


        </nav>
    </header>
  )
}
