export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-zinc-800">
      <span className="text-xl font-semibold tracking-wide">
        Toloza
      </span>

      <nav className="flex gap-6 text-sm text-zinc-400">
        <a href="#proyectos" className="hover:text-cyan-400">Proyectos</a>
        <a href="#habilidades" className="hover:text-cyan-400">Habilidades</a>
        <a href="#contacto" className="hover:text-cyan-400">Contacto</a>
      </nav>
    </header>
  )
}
