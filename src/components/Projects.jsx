import ProjectCard from "./ProjectCard.jsx";
import pickingImage from "../assets/projects/WebApp Checkeo Picking.png";
import petsImage from "../assets/projects/Api RestFul Django.png";
import ecommerceImage from "../assets/projects/E-commerce Angular.jpg";
import imprimemoImage from "../assets/projects/imprimemo.png";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 scroll-mt-20">
      <h2 className="text-3xl font-semibold text-slate-100 mb-14">
        Proyectos
      </h2>

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
          description="Imprime recordatorios en una impresora térmica al detectar conexión con el auto."
          href="https://github.com/MToloza92/ImpriMemo"
          direction="left"
          image={imprimemoImage}
          className="lg:col-span-1 lg:row-span-2"
        />

        {/* B */}
        <ProjectCard
          title="WebApp Checkeo Picking"
          tech="Angular · LocalStorage · Excel/PDF"
          description="Convierte facturas en checklists digitales para verificar picking."
          href="https://github.com/MToloza92/WebApp-Checkeo-Picking"
          direction="up"
          image={pickingImage}
          className="lg:col-span-4 lg:row-span-1"
        />

        {/* C */}
        <ProjectCard
          title="E-commerce Angular"
          tech="TypeScript · SCSS · HTML"
          description="Learning Project de tienda online con foco en arquitectura Angular."
          href="https://github.com/MToloza92/E-commerce-Angular"
          direction="down"
          image= {ecommerceImage}
          className="lg:col-span-2 lg:row-span-1"
        />

        {/* D */}
        <ProjectCard
          title="API RestFul Mascotas"
          tech="Django · DRF · JWT · MySQL"
          description="API REST con autenticación JWT, roles y CRUD completo."
          href="https://github.com/MToloza92/Aplicaci-n-API-RestFul-con-Django-REST--Framework"
          direction="right"
          image={petsImage}
          className="lg:col-span-2 lg:row-span-1"
        />
      </div>
    </section>
  );
}
