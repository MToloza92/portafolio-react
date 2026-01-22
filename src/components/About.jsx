// About.jsx
import myPhoto from "../assets/projects/foto-perfil.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 pt-20 pb-24 scroll-mt-20"
    >
      {/* Layout principal en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ================= TEXTO ================= */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Desde pequeño he sentido una atracción natural por la{" "}
            <span className="text-cyan-400 font-medium">tecnología</span>.
            Siempre me intrigó entender cómo funcionan las cosas por dentro,
            desarmarlas mentalmente y volver a armarlas de una mejor forma.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Con el tiempo encontré en el{" "}
            <span className="text-cyan-400 font-medium">
              desarrollo de software
            </span>{" "}
            un espacio donde esa curiosidad se transformó en{" "}
            <span className="text-cyan-400 font-medium">pasión</span>. Hoy
            disfruto crear soluciones que no solo funcionen, sino que también
            sean claras, eficientes y agradables de usar.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Trabajo como{" "}
            <span className="text-cyan-400 font-medium">
              desarrollador full stack
            </span>
            , con foco en frontend moderno, pero con una comprensión sólida del
            backend, bases de datos y arquitectura general de aplicaciones.
          </p>
        </div>

        {/* ================= IMAGEN ================= */}
        <div className="relative group w-fit">
          {/* Marco decorativo */}
          <div
            className="
              absolute inset-0
              border-2 border-cyan-400
              translate-x-4 translate-y-4
              transition-transform duration-300
              group-hover:translate-x-2 group-hover:translate-y-2
            "
          />

          {/* Imagen */}
          <img
            src={myPhoto}
            alt="Foto de Toloza"
            className="
              relative z-10
              w-64 h-64
              object-cover
              grayscale
              transition-all duration-300
              group-hover:grayscale-0
              group-hover:-translate-x-1 group-hover:-translate-y-1
            "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
