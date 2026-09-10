import { useRef } from "react";

import WorkCard from "./WorkCard";

import {
  gsap,
  useGSAP,
} from "../lib/gsap";

function SelectedWork({ works }) {
  const section = useRef(null);

  useGSAP(
    () => {
      /*
       * Respetamos la configuración de accesibilidad
       * del usuario.
       */

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        return;
      }

      /*
       * ==================================================
       * ANIMACIÓN DE LAS TARJETAS
       *
       * Seleccionamos todas las tarjetas y creamos
       * una animación independiente para cada una.
       * ==================================================
       */

      const cards = gsap.utils.toArray(
        ".work-card"
      );

      cards.forEach((card) => {
        const image =
          card.querySelector(
            ".work-card__image-wrapper"
          );

        const info =
          card.querySelector(
            ".work-card__info"
          );

        const header =
          card.querySelector(
            ".work-card__header"
          );

        /*
         * Revelado de la fotografía.
         */

        gsap.from(image, {
          y: 80,
          opacity: 0,
          duration: 1.15,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        /*
         * Entrada de categoría y número.
         */

        gsap.from(header, {
          y: 20,
          opacity: 0,
          duration: 0.7,

          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });

        /*
         * Entrada de título y descripción.
         */

        gsap.from(info, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,

          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        });

        /*
         * Parallax extremadamente ligero.
         *
         * Solo movemos la fotografía interior,
         * no la tarjeta completa.
         */

        const photo =
          card.querySelector("img");

        gsap.fromTo(
          photo,
          {
            yPercent: -3,
          },
          {
            yPercent: 3,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    {
      scope: section,
    }
  );

  return (
    <section
      className="selected-work"
      ref={section}
    >
      {/* ==================================================
          CABECERA DE LA SECCIÓN
      ================================================== */}

      <div className="selected-work__heading">

        <span>
          Selected Work
        </span>

        <span>
          01 — {String(works.length).padStart(2, "0")}
        </span>

      </div>

      {/* ==================================================
          TRABAJOS
      ================================================== */}

      <div className="selected-work__grid">

        {works.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
          />
        ))}

      </div>

      {/* ==================================================
          ENLACE A TODO EL PORTAFOLIO
      ================================================== */}

      <div className="selected-work__footer">

        <a
          href="/work"
          className="selected-work__all"
        >
          <span>
            View all work
          </span>

          <span>
            ↗
          </span>
        </a>

      </div>
    </section>
  );
}

export default SelectedWork;