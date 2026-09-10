import {
  useRef,
  useState,
} from "react";

import GalleryItem from "../components/GalleryItem";

import { portfolioInfo } from "../data/portfolio";

import {
  gsap,
  useGSAP,
} from "../lib/gsap";

function Work() {
  /*
   * Categoría seleccionada actualmente.
   *
   * Comenzamos mostrando todas las fotografías.
   */

  const [activeCategory, setActiveCategory] =
    useState("All");

  const container = useRef(null);

  const {
    workCategories,
    workGallery,
  } = portfolioInfo;

  /*
   * ======================================================
   * FILTRADO
   * ======================================================
   */

  const filteredWorks =
    activeCategory === "All"
      ? workGallery
      : workGallery.filter(
          (item) =>
            item.category === activeCategory
        );

  /*
   * ======================================================
   * ANIMACIÓN
   *
   * Se ejecuta nuevamente cuando cambia
   * la categoría seleccionada.
   * ======================================================
   */

  useGSAP(
    () => {
      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      if (reducedMotion) {
        return;
      }

      gsap.from(
        ".work-gallery__item",
        {
          y: 40,
          opacity: 0,

          duration: 0.75,

          stagger: 0.06,

          ease: "power3.out",
        }
      );
    },
    {
      scope: container,

      dependencies: [
        activeCategory,
      ],

      revertOnUpdate: true,
    }
  );

  return (
    <main
      className="work-page"
      ref={container}
    >

      {/* ==================================================
          CABECERA
      ================================================== */}

      <section className="work-hero">

        <div className="work-hero__label">
          Portfolio
        </div>

        <h1>
          SELECTED
          <br />
          <span>
            PHOTOGRAPHY.
          </span>
        </h1>

        <div className="work-hero__bottom">

          <p>
            Football, athletes,
            fitness, portraits
            and commercial work.
          </p>

          <span>
            Ecuador — 2026
          </span>

        </div>

      </section>

      {/* ==================================================
          FILTROS
      ================================================== */}

      <section className="work-filter">

        <div className="work-filter__label">
          Filter by
        </div>

        <div className="work-filter__categories">

          {workCategories.map(
            (category) => (

              <button
                key={category}

                type="button"

                className={
                  activeCategory ===
                  category
                    ? "work-filter__button is-active"
                    : "work-filter__button"
                }

                aria-pressed={
                  activeCategory ===
                  category
                }

                onClick={() =>
                  setActiveCategory(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>

        <span className="work-filter__count">
          {String(
            filteredWorks.length
          ).padStart(2, "0")}
        </span>

      </section>

      {/* ==================================================
          GALERÍA
      ================================================== */}

      <section className="work-gallery">

        {filteredWorks.map(
          (item) => (

            <GalleryItem
              key={item.id}
              item={item}
            />

          )
        )}

      </section>

    </main>
  );
}

export default Work;