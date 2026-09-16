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

/*
 * ======================================================
 * DISTRIBUCIÓN DE LAS FOTOGRAFÍAS FILTRADAS
 * ======================================================
 *
 * En "Todos" usamos el layout definido manualmente
 * en portfolio.js.
 *
 * Cuando elegimos una categoría, esta función crea
 * una nueva composición para aprovechar mejor
 * el espacio disponible.
 */

function getFilteredLayout(
  index,
  total
) {
  /*
   * Una sola fotografía:
   * la mostramos grande y centrada.
   */

  if (total === 1) {
    return "wide";
  }

  /*
   * Dos fotografías:
   * dos columnas equilibradas.
   */

  if (total === 2) {
    return "medium";
  }

  /*
   * Tres fotografías:
   *
   * [ grande ][ vertical ]
   *      [ horizontal ]
   */

  if (total === 3) {
    const pattern = [
      "large",
      "portrait",
      "wide",
    ];

    return pattern[index];
  }

  /*
   * Cuatro fotografías.
   */

  if (total === 4) {
    const pattern = [
      "large",
      "portrait",
      "medium",
      "medium",
    ];

    return pattern[index];
  }

  /*
   * Cinco fotografías.
   */

  if (total === 5) {
    const pattern = [
      "large",
      "portrait",
      "medium",
      "medium",
      "wide",
    ];

    return pattern[index];
  }

  /*
   * Para galerías más grandes utilizamos
   * un patrón repetible.
   *
   * 8 + 4 = 12 columnas
   * 6 + 6 = 12 columnas
   * 4 + 8 = 12 columnas
   */

  const pattern = [
    "large",
    "portrait",
    "medium",
    "medium",
    "portrait",
    "large",
  ];

  return pattern[
    index % pattern.length
  ];
}

function Work() {
  /*
   * ======================================================
   * ESTADOS
   * ======================================================
   */

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("Todos");

  /*
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

  /*
   * ======================================================
   * FILTRADO
   * ======================================================
   */

  const filteredWorks =
    activeCategory === "Todos"
      ? workGallery
      : workGallery.filter(
          (item) =>
            item.category ===
            activeCategory
        );

  /*
   * ======================================================
   * LIGHTBOX
   * ======================================================
   */

  const closeLightbox =
    useCallback(() => {
      setActiveImageIndex(null);
    }, []);

  const nextImage =
    useCallback(() => {
      setActiveImageIndex(
        (currentIndex) => {
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

  /*
   * ======================================================
   * ANIMACIÓN DE LA GALERÍA
   * ======================================================
   *
   * Cada vez que cambia el filtro,
   * las fotografías aparecen nuevamente
   * con una transición sutil.
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

      gsap.fromTo(
        ".work-gallery__item",

        {
          y: 35,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.7,

          stagger: 0.055,

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

  /*
   * ======================================================
   * CAMBIO DE FILTRO
   * ======================================================
   */

  const handleCategoryChange = (
    category
  ) => {
    /*
     * Evitamos ejecutar de nuevo
     * el filtro actual.
     */

    if (
      category ===
      activeCategory
    ) {
      return;
    }

    /*
     * Cerramos el lightbox si está abierto.
     */

    setActiveImageIndex(null);

    /*
     * Activamos la nueva categoría.
     */

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
          Portafolio
        </div>

        <h1>
          TRABAJO
          <br />

          <span>
            FOTOGRÁFICO.
          </span>
        </h1>

        <div className="work-hero__bottom">

          <p>
            Fútbol, deportistas,
            marcas y proyectos
            comerciales.
          </p>

          <span>
            Cuenca, Ecuador — 2026
          </span>

        </div>

      </section>

      {/* ==================================================
          FILTROS
      ================================================== */}

      <section className="work-filter">

        <div className="work-filter__label">
          Filtrar por
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

      <section
        className={`
          work-gallery
          ${
            activeCategory === "Todos"
              ? "work-gallery--all"
              : "work-gallery--filtered"
          }
        `}
      >

        {filteredWorks.map(
          (item, index) => {

            /*
             * En "Todos" respetamos el diseño
             * editorial definido en portfolio.js.
             *
             * En cada filtro calculamos una
             * nueva posición automáticamente.
             */

            const displayLayout =
              activeCategory === "Todos"
                ? item.layout
                : getFilteredLayout(
                    index,
                    filteredWorks.length
                  );

            const displayItem = {
              ...item,
              layout:
                displayLayout,
            };

            return (
              <GalleryItem
                key={item.id}

                item={
                  displayItem
                }

                onOpen={() =>
                  setActiveImageIndex(
                    index
                  )
                }
              />
            );
          }
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