import ProjectCard from "./ProjectCard.jsx";
import pickingImage from "../assets/projects/WebApp Checkeo Picking.png";
import petsImage from "../assets/projects/Api RestFul Django.png";
import imprimemoImage from "../assets/projects/imprimemo.png";
import kairosImage from "../assets/projects/Kairos.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 pt-20 pb-24 scroll-mt-20 whitespace-pre-line "
    >
      <h2 className="text-3xl font-semibold text-slate-100 mb-14">Proyectos</h2>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-5
          lg:grid-rows-2
          grid-flow-dense
          gap-[6px]
          bg-slate-900/60
          p-[6px]
          rounded-2xl
        "
      >
        {/* A */}
        <ProjectCard
          title="ImpriMemo"
          tech="Python · BLE · Automatización"
          description="🖨️ ImpriMemo
          
          ImpriMemo es una aplicación desarrollada en Python que permite imprimir automáticamente mensajes recordatorios en una impresora térmica Bluetooth (BLE).
          El objetivo principal es facilitar la impresión de notas o recordatorios almacenados digitalmente"
          href="https://github.com/MToloza92/ImpriMemo"
          direction="left"
          image={imprimemoImage}
          className="lg:col-span-1 lg:row-span-2"
        />

        {/* B */}
        <ProjectCard
          title="WebApp Checkeo Picking"
          tech="Angular · LocalStorage · Excel/PDF"
          description="📦 WebApp Checkeo Picking

          Aplicación web desarrollada en Angular para Giorgio Market, con el fin de digitalizar y controlar el proceso de checkeo (picking) de productos, 
          permitiendo cargar facturas desde PDF o Excel,
          convertirlas en un checklist interactivo y generar reportes con historial local."
          href="https://github.com/MToloza92/WebApp-Checkeo-Picking"
          direction="up"
          image={pickingImage}
          className="lg:col-span-4 lg:row-span-1"
        />

        {/* C */}
        <ProjectCard
          title="Kairos Institute"
          tech="React · Tailwind · JavaScript · Vite"
          description="🏫  Sitio web institucional para el Colegio Kairos Institute de Pucon, Chile.
          
          Sobre Kairos Institute
          Kairos Institute es una institución educativa privada enfocada en una experiencia pedagógica integral, con énfasis en el desarrollo humano,
          el aprendizaje significativo y la formación valórica.
"
          href="https://github.com/MToloza92/Kairos-Institute"
          direction="down"
          image={kairosImage}
          className="lg:col-span-2 lg:row-span-1"
        />

        {/* D */}
        <ProjectCard
          title="API RestFul Mascotas"
          tech="Django · DRF · JWT · MySQL"
          description="🐰 API REST con autenticación JWT, roles y CRUD completo.

          Proyecto desarrollado como parte del aprendizaje en Django y Django REST Framework, que implementa una API RestFul para gestión de mascotas, 
          junto con un sistema de autenticación por grupos de usuarios y JWT (JSON Web Tokens)."
          href="https://github.com/MToloza92/Aplicaci-n-API-RestFul-con-Django-REST--Framework"
          direction="right"
          image={petsImage}
          className="lg:col-span-2 lg:row-span-1"
        />
      </div>
    </section>
  );
}
