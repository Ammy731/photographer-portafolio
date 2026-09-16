import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects({ projects }) {
  const sectionRef = useRef(null);

  const [activeProject, setActiveProject] =
    useState(projects[0]);

  useEffect(() => {
    const context = gsap.context(() => {
      /*
       * Aparición del encabezado
       */

      gsap.from(
        ".featured-projects__heading",
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /*
       * Aparición progresiva
       * de las filas.
       */

      gsap.from(
        ".featured-projects__item",
        {
          y: 35,
          opacity: 0,

          duration: 0.7,
          stagger: 0.08,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".featured-projects__list",

            start: "top 80%",
          },
        }
      );

      /*
       * Entrada de la imagen.
       */

      gsap.from(
        ".featured-projects__preview",
        {
          scale: 0.96,
          opacity: 0,

          duration: 1,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".featured-projects__preview",

            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  const selectProject = (project) => {
    if (
      activeProject.id === project.id
    ) {
      return;
    }

    /*
     * Animamos ligeramente la imagen
     * cuando cambia el proyecto activo.
     */

    gsap.to(
      ".featured-projects__image",
      {
        opacity: 0,
        scale: 1.02,

        duration: 0.18,

        onComplete: () => {
          setActiveProject(project);

          gsap.fromTo(
            ".featured-projects__image",

            {
              opacity: 0,
              scale: 1.02,
            },

            {
              opacity: 1,
              scale: 1,

              duration: 0.45,

              ease: "power2.out",
            }
          );
        },
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      className="featured-projects"
    >
      <div className="featured-projects__header">

        <span className="section-label">
          Proyectos y colaboraciones
        </span>

        <h2 className="featured-projects__heading">
          Trabajo más allá
          <br />

          <em>de la cancha.</em>
        </h2>

      </div>

      <div className="featured-projects__content">

        <div className="featured-projects__list">

          {projects.map((project) => {
            const isActive =
              activeProject.id === project.id;

            return (
              <button
                key={project.id}
                type="button"

                className={`
                  featured-projects__item
                  ${
                    isActive
                      ? "is-active"
                      : ""
                  }
                `}

                onMouseEnter={() =>
                  selectProject(project)
                }

                onFocus={() =>
                  selectProject(project)
                }

                onClick={() =>
                  selectProject(project)
                }
              >
                <span className="featured-projects__number">
                  {project.number}
                </span>

                <div className="featured-projects__info">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.subtitle}
                  </p>

                </div>

                <span className="featured-projects__type">
                  {project.type}
                </span>
              </button>
            );
          })}

        </div>

        <div className="featured-projects__preview">

          <img
            className="featured-projects__image"
            src={activeProject.image}
            alt={`Proyecto ${activeProject.title}`}
          />

          <div className="featured-projects__preview-info">

            <span>
              {activeProject.number}
            </span>

            <span>
              {activeProject.title}
            </span>

          </div>

        </div>

      </div>

      <div className="featured-projects__footer">

        <Link to="/projects">
          Ver proyectos

          <span aria-hidden="true">
            ↗
          </span>
        </Link>

      </div>
    </section>
  );
}

export default FeaturedProjects;