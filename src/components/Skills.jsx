import { skills } from "../data/skills";

// Componente para una sección de habilidades (Frontend, Backend, etc.)
function SkillSection({ title, items }) {
  return (
    <section className="relative grid grid-cols-[auto_1fr] gap-12 mb-28">
      {/* Columna izquierda: título vertical + barra */}
      <div className="hidden md:flex flex-col items-center">
        <span
          className="
            text-cyan-400
            text-xs
            tracking-widest
            uppercase
            select-none
            mb-6
            [writing-mode:vertical-rl]
          "
        >
          {title}
        </span>

        {/* Barra vertical decorativa */}
        <div className="w-px flex-1 bg-cyan-400/40" />
      </div>

      {/* Título horizontal solo en mobile */}
      <h3 className="md:hidden text-cyan-400 text-lg mb-6">{title}</h3>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        {items.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-4">
            {/* Icono */}
            <img
              src={skill.icon}
              alt={skill.name}
              title={skill.name}
              className="
                w-16 h-16
                grayscale
                opacity-80
                transition-all duration-300 ease-out
                drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]
                hover:grayscale-0
                hover:opacity-100
                hover:drop-shadow-none
                hover:-translate-y-1
              "
            />

            {/* Nombre */}
            <span className="text-sm text-zinc-300">{skill.name}</span>

            {/* Barra de progreso */}
            <div className="w-6/12 h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Porcentaje */}
            <span className="text-xs text-zinc-500">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 pt-20 pb-24 scroll-mt-20"
    >
      <h2 className="text-3xl font-semibold mb-20">Habilidades</h2>

      <SkillSection title="Frontend" items={skills.frontend} />
      <SkillSection title="Backend" items={skills.backend} />
      <SkillSection title="Database" items={skills.database} />
      <SkillSection title="Tools" items={skills.tools} />
    </section>
  );
}
