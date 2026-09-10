import { useRef } from "react";

import { portfolioInfo } from "../data/portfolio";
import { gsap, useGSAP } from "../lib/gsap";

import SelectedWork from "../components/SelectedWork";

function Home() {
  const container = useRef(null);

  const { photographer, hero, selectedWork } = portfolioInfo;

  useGSAP(
    () => {
      /*
       * Detectamos si el usuario ha solicitado
       * reducir las animaciones desde su sistema.
       */
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        return;
      }

      /* ==================================================
         ANIMACIÓN INICIAL DEL HERO
      ================================================== */

      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTimeline

        /*
         * La fotografía comienza ligeramente ampliada
         * y vuelve progresivamente a su escala normal.
         */
        .from(".hero__media img", {
          scale: 1.15,
          duration: 1.8,
        })

        /*
         * Información superior.
         */
        .from(
          ".hero__eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          0.25
        )

        /*
         * Revelamos las dos líneas del título.
         */
        .from(
          ".hero__title-inner",
          {
            yPercent: 115,
            duration: 1.15,
            stagger: 0.12,
          },
          0.35
        )

        /*
         * Información inferior.
         */
        .from(
          [
            ".hero__categories",
            ".hero__explore",
            ".hero__year",
          ],
          {
            y: 20,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
          },
          0.75
        );

      /* ==================================================
         PARALLAX
      ================================================== */

      /*
       * Durante el scroll solamente modificamos
       * la posición vertical de la fotografía.
       *
       * Ya no modificamos scale aquí para evitar
       * conflictos con la animación inicial.
       */
      gsap.to(".hero__media img", {
        yPercent: 8,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ==================================================
         SALIDA DEL CONTENIDO DEL HERO
      ================================================== */

      gsap.to(".hero__content", {
        y: -50,
        opacity: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "75% top",
          scrub: true,
        },
      });

      /* ==================================================
         INTRO / SELECTED WORK
      ================================================== */

      gsap.from(".intro .section-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: ".intro",
          start: "top 75%",
        },
      });

      gsap.from(".intro h2", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".intro",
          start: "top 65%",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main ref={container}>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero">

        {/* FOTOGRAFÍA */}

        <div className="hero__media">
          <img
            src={hero.image}
            alt={`${photographer.name} sports photography`}
          />

          <div className="hero__overlay" />
        </div>

        {/* CONTENIDO */}

        <div className="hero__content">

          {/* INFORMACIÓN SUPERIOR */}

          <div className="hero__eyebrow">
            <span>
              {photographer.profession}
            </span>

            <span>
              {photographer.location}
            </span>
          </div>

          {/* TÍTULO */}

          <h1 className="hero__title">

            <span className="hero__title-line">
              <span className="hero__title-inner">
                {hero.line1}
              </span>
            </span>

            <span
              className="
                hero__title-line
                hero__title-line--right
              "
            >
              <span className="hero__title-inner">
                {hero.line2}
              </span>
            </span>

          </h1>

          {/* INFORMACIÓN INFERIOR */}

          <div className="hero__bottom">

            <p className="hero__categories">

              {hero.description.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </p>

            <a
              href="#selected-work"
              className="hero__explore"
            >
              <span>
                Explore
              </span>

              <span className="hero__arrow">
                ↓
              </span>
            </a>

            <div className="hero__year">
              <span>
                Portfolio
              </span>

              <span>
                2026
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SELECTED WORK INTRO
      ================================================== */}

      <section
        id="selected-work"
        className="intro"
      >

        <span className="section-label">
          Selected work
        </span>

        <h2>
          Stories built around
          <br />

          <em>
            sport, people
          </em>{" "}

          and movement.
        </h2>

      </section>

      <SelectedWork works={selectedWork}/>

    </main>
  );
}

export default Home;