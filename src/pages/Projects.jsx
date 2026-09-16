import { useRef } from "react";

import { portfolioInfo } from "../data/portfolio";

import {
  gsap,
  useGSAP,
} from "../lib/gsap";

const projects = [
  {
    id: 1,
    number: "01",
    slug: "cuenca-jrs",
    title: "Cuenca Jrs",
    type: "Club de fútbol",

    description:
      "Trabajo continuo alrededor de la imagen y comunicación del club, combinando cobertura fotográfica, creación de contenido y gestión de redes sociales.",

    roles: [
      "Fotografía",
      "Contenido audiovisual",
      "Community Management",
    ],

    cover: "/images/work/football.jpg",

    gallery: [
      "/images/gallery/football-01.jpg",
      "/images/gallery/football-02.jpg",
      "/images/gallery/football-03.jpg",
    ],

    note:
      "Un proyecto que combina la cobertura dentro de cancha con el contenido que el club necesita para comunicar su actividad en redes.",
  },

  {
    id: 2,
    number: "02",
    slug: "ligapro",
    title: "LigaPro",
    type: "Fútbol profesional",

    description:
      "Cobertura fotográfica de fútbol profesional realizada en Cuenca, enfocada en momentos de partido, jugadores y acción dentro de cancha.",

    roles: [
      "Cobertura deportiva",
      "Fotografía de partido",
      "Selección y edición",
    ],

    cover: "/images/gallery/football-03.jpg",

    gallery: [
      "/images/gallery/football-02.jpg",
      "/images/gallery/football-01.jpg",
      "/images/work/football.jpg",
    ],

    note:
      "La prioridad es documentar el ritmo del partido y entregar imágenes útiles para comunicación deportiva y archivo visual.",
  },

  {
    id: 3,
    number: "03",
    slug: "jugadores",
    title: "Jugadores",
    type: "Deportistas",

    description:
      "Trabajo individual con futbolistas para construir material visual de sus partidos, sesiones, marca personal y contenido para redes.",

    roles: [
      "Sesiones individuales",
      "Seguimiento personal",
      "Marca personal",
      "Contenido para redes",
    ],

    cover: "/images/work/players.jpg",

    gallery: [
      "/images/gallery/player-01.jpg",
      "/images/gallery/portrait-01.jpg",
      "/images/work/players.jpg",
    ],

    note:
      "Dentro de esta línea también entra el servicio de fotógrafo personal cuando el trabajo requiere seguimiento más constante de un deportista.",
  },

  {
    id: 4,
    number: "04",
    slug: "marcas",
    title: "Marcas",
    type: "Colaboraciones",

    description:
      "Producción de fotografía y contenido audiovisual para marcas que necesitan material visual para campañas, productos y redes sociales.",

    roles: [
      "Fotografía",
      "Video vertical",
      "Contenido para redes",
      "Campañas",
    ],

    cover: "/images/work/fitness.jpg",

    gallery: [
      "/images/gallery/fitness-01.jpg",
      "/images/gallery/fitness-02.jpg",
      "/images/work/fitness.jpg",
    ],

    note:
      "Aquí se agrupan colaboraciones como Cueva Grill y trabajos realizados para marcas vinculadas al entrenamiento y fitness.",
  },

  {
    id: 5,
    number: "05",
    slug: "comercial",
    title: "Comercial",
    type: "Proyectos independientes",

    description:
      "Trabajos visuales desarrollados para negocios y proyectos que necesitan fotografía o contenido con un objetivo publicitario y comercial.",

    roles: [
      "Publicidad",
      "Fotografía comercial",
      "Contenido audiovisual",
    ],

    cover: "/images/work/projects.jpg",

    gallery: [
      "/images/gallery/commercial-01.jpg",
      "/images/work/projects.jpg",
    ],

    note:
      "El alcance cambia según cada cliente, por lo que estos trabajos se plantean mediante una cotización personalizada.",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="projects-hero">
        <span className="projects-hero__label">
          Proyectos
        </span>

        <h1 className="projects-hero__title">
          Proyectos y
          <br />
          colaboraciones.
        </h1>

        <div className="projects-hero__bottom">
          <p>
            Fotografía, contenido y comunicación
            aplicados a clubes, deportistas,
            marcas y proyectos comerciales.
          </p>

          <span>
            Cuenca, Ecuador
          </span>
        </div>
      </section>

      {/* ==================================================
          ÍNDICE
      ================================================== */}

      <nav
        className="projects-index"
        aria-label="Índice de proyectos"
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.slug}`}
          >
            <span>
              {project.number}
            </span>

            <strong>
              {project.title}
            </strong>
          </a>
        ))}
      </nav>

      {/* ==================================================
          PROYECTOS
      ================================================== */}

      <section className="projects-list">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.slug}
            className={`
              project-case
              ${
                index % 2 === 1
                  ? "project-case--reverse"
                  : ""
              }
            `}
          >
            <div className="project-case__meta">
              <div className="project-case__number">
                {project.number}
              </div>

              <div>
                <span className="project-case__type">
                  {project.type}
                </span>

                <h2>
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="project-case__intro">
              <p>
                {project.description}
              </p>

              <div className="project-case__roles">
                <span>
                  Rol / servicios
                </span>

                <ul>
                  {project.roles.map((role) => (
                    <li key={role}>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-case__media">
              <figure className="project-case__cover">
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.type}`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="project-case__gallery">
                {project.gallery.map(
                  (image, imageIndex) => (
                    <figure
                      key={`${project.id}-${imageIndex}`}
                      className={
                        imageIndex === 0
                          ? "project-case__image project-case__image--large"
                          : "project-case__image"
                      }
                    >
                      <img
                        src={image}
                        alt={`${project.title} — imagen ${imageIndex + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  )
                )}
              </div>
            </div>

            <div className="project-case__note">
              <span>
                Contexto
              </span>

              <p>
                {project.note}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
