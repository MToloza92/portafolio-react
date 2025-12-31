import { useInView } from "../hooks/useInViews";

const slideClasses = {
  left: "group-hover:-translate-x-full",
  right: "group-hover:translate-x-full",
  up: "group-hover:-translate-y-full",
  down: "group-hover:translate-y-full",
};

export default function ProjectCard({
  title,
  tech,
  description,
  href,
  direction = "up",
  image,
  className = "",
}) {
  const { ref, isVisible } = useInView();
  const slide = slideClasses[direction];

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative group overflow-hidden rounded-xl
        bg-slate-900 border border-slate-800
        transition-all duration-500
        hover:border-cyan-400/40

        min-h-[200px] md:min-h-[240px] lg:min-h-[260px]

        ${className}
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      {/* FONDO REAL */}
      <div className="absolute inset-0 z-0 p-6 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-purple-900/40 flex items-end">
        <p className="text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      </div>

      {/* TAPA VISUAL */}
      <div
        className={`
          absolute inset-0 z-10
          bg-cover bg-center
          transform transition-transform duration-500
          ease-[cubic-bezier(.4,0,.2,1)]
          ${slide}
        `}
        style={{ backgroundImage: `url(${image})` }}
      >
        

        {/* Texto */}
        <div className="relative z-10 p-6 bg-slate-900 w-auto text-left inline-block rounded-md">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-cyan-300">
            {tech}
          </p>
          
        </div>
      </div>
    </a>
  );
}
