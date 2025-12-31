export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-cyan-400 tracking-widest text-sm uppercase mb-4">
            Analista Programador
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hola, soy <span className="text-cyan-400">Toloza</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Desarrollador Full Stack con enfoque en aplicaciones web modernas,
            automatización y soluciones eficientes orientadas a negocio.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-cyan-500 text-gray-900 font-medium rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
