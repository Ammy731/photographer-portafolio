import {
  useCallback,
  useRef,
  useState,
} from "react";

import GalleryItem from "../components/GalleryItem";
import Lightbox from "../components/Lightbox";

import {
  portfolioInfo,
} from "../data/portfolio";

import {
  gsap,
  useGSAP,
} from "../lib/gsap";

function Work() {
  /*
   * ======================================================
   * ESTADOS
   * ======================================================
   */

  /*
   * Categoría activa.
   */

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  /*
   * Índice de la fotografía abierta.
   *
   * null significa que el lightbox
   * está cerrado.
   */

  const [
    activeImageIndex,
    setActiveImageIndex,
  ] = useState(null);

  const container =
    useRef(null);

  const {
    workCategories,
    workGallery,
  } = portfolioInfo;

  /* ======================================================
     FILTRADO
  ====================================================== */

  const filteredWorks =
    activeCategory === "All"
      ? workGallery
      : workGallery.filter(
          (item) =>
            item.category ===
            activeCategory
        );

  /* ======================================================
     LIGHTBOX
  ====================================================== */

  const closeLightbox =
    useCallback(() => {
      setActiveImageIndex(null);
    }, []);

  const nextImage =
    useCallback(() => {
      setActiveImageIndex(
        (currentIndex) => {
          /*
           * Cuando llegamos a la última fotografía
           * volvemos a la primera.
           */

          if (
            currentIndex ===
            filteredWorks.length - 1
          ) {
            return 0;
          }

          return currentIndex + 1;
        }
      );
    }, [filteredWorks.length]);

  const previousImage =
    useCallback(() => {
      setActiveImageIndex(
        (currentIndex) => {
          /*
           * Si estamos en la primera fotografía,
           * saltamos a la última.
           */

          if (currentIndex === 0) {
            return (
              filteredWorks.length -
              1
            );
          }

          return currentIndex - 1;
        }
      );
    }, [filteredWorks.length]);

  /* ======================================================
     ANIMACIÓN DE LA GALERÍA
  ====================================================== */

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

  /* ======================================================
     CAMBIO DE FILTRO
  ====================================================== */

  const handleCategoryChange = (
    category
  ) => {
    /*
     * Cerramos cualquier lightbox antes
     * de modificar la colección.
     */

    setActiveImageIndex(null);

    setActiveCategory(category);
  };

  return (
    <main
      className="work-page"
      ref={container}
    >

      {/* ==================================================
          HERO
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
                  handleCategoryChange(
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
          (item, index) => (

            <GalleryItem
              key={item.id}
              item={item}

              onOpen={() =>
                setActiveImageIndex(
                  index
                )
              }
            />

          )
        )}

      </section>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      {activeImageIndex !== null && (
        <Lightbox
          items={filteredWorks}

          activeIndex={
            activeImageIndex
          }

          onClose={
            closeLightbox
          }

          onNext={
            nextImage
          }

          onPrevious={
            previousImage
          }
        />
      )}

    </main>
  );
}

export default Work;