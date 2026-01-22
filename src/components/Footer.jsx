import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-zinc-950  border-zinc-800 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center gap-10 text-center">
        {/* TEXTO PRINCIPAL */}
        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold text-zinc-100">¿Hablamos?</h3>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Siempre estoy interesado en conectar para explorar oportunidades de
            colaboración, discutir ideas innovadoras o intercambiar perspectivas
            sobre las tendencias en tecnología y desarrollo.
          </p>
        </div>

        {/* CONTACTOS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {/* Email */}
          <a
            href="mailto:toloza.dev@gmail.com"
            className="group flex items-center gap-2 text-zinc-300 transition-all hover:text-cyan-400"
          >
            <FaEnvelope className="transition-transform group-hover:-translate-y-0.5" />
            toloza.dev@gmail.com
          </a>

          {/* Teléfono */}
          <a
            href="tel:+56993883963"
            className="group flex items-center gap-2 text-zinc-300 transition-all hover:text-cyan-400"
          >
            <FaPhoneAlt className="transition-transform group-hover:-translate-y-0.5" />
            +56 9 9388 3963
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MToloza92"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-300 transition-all hover:text-cyan-400"
          >
            <FaGithub className="transition-transform group-hover:-translate-y-0.5" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tolozadev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-300 transition-all hover:text-cyan-400"
          >
            <FaLinkedin className="transition-transform group-hover:-translate-y-0.5" />
            LinkedIn
          </a>
        </div>

        {/* DIVISOR */}
        <div className="w-full h-px bg-zinc-800" />

        {/* COPYRIGHT */}
        <div className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Toloza.dev — Todos los derechos
          reservados
        </div>
      </div>
    </footer>
  );
}
