import { useEffect, useRef } from "react";

import {gsap, useGSAP,} from "../lib/gsap";

function Lightbox({
  items,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
}) {
  const container = useRef(null);

  /*
   * Fotografía seleccionada actualmente
   */
  const currentItem =
    items[activeIndex];

  /* ======================================================
     TECLADO + BLOQUEO DEL SCROLL
  ====================================================== */

  useEffect(() => {
    /*
     * Mientras el lightbox esté abierto no queremos
     * que la página situada detrás pueda desplazarse.
     */

    const previousOverflow =
      document.documentElement.style.overflow;

    document.documentElement.style.overflow =
      "hidden";

    /*
     * Navegación mediante teclado.
     */

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    /*
     * Cleanup:
     * restauramos el scroll y eliminamos
     * el listener al cerrar el lightbox.
     */

    return () => {
      document.documentElement.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    onClose,
    onNext,
    onPrevious,
  ]);

  /* ======================================================
     ANIMACIÓN DE APERTURA
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

      const timeline =
        gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

      /*
       * Fondo.
       */

      timeline.from(
        ".lightbox",
        {
          opacity: 0,
          duration: 0.35,
        }
      );

      /*
       * Fotografía.
       */

      timeline.from(
        ".lightbox__image-wrapper",
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.65,
        },
        0.08
      );

      /*
       * Información.
       */

      timeline.from(
        [
          ".lightbox__top",
          ".lightbox__meta",
          ".lightbox__navigation",
        ],
        {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        0.2
      );
    },
    {
      scope: container,
    }
  );

  /*
   * Si no existe un elemento seleccionado,
   * no renderizamos nada.
   */

  if (!currentItem) {
    return null;
  }

  return (
    <div
      ref={container}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.title}`}
      onMouseDown={(event) => {
        /*
         * Solo se cierra cuando el usuario pulsa en el fondo
         */

        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      {/* ==================================================
          PARTE SUPERIOR
      ================================================== */}

      <div className="lightbox__top">

        <div className="lightbox__counter">
          {String(
            activeIndex + 1
          ).padStart(2, "0")}

          <span>/</span>

          {String(
            items.length
          ).padStart(2, "0")}
        </div>

        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          Close

          <span>
            ×
          </span>
        </button>

      </div>

      {/* ==================================================
          FOTOGRAFÍA
      ================================================== */}

      <div className="lightbox__stage">

        <button
          type="button"
          className="
            lightbox__side
            lightbox__side--previous
          "
          onClick={onPrevious}
          aria-label="Previous photograph"
        >
          ←
        </button>

        <div className="lightbox__image-wrapper">

          <img
            key={currentItem.id}
            src={currentItem.image}
            alt={`${currentItem.title} - ${currentItem.category}`}
          />

        </div>

        <button
          type="button"
          className="
            lightbox__side
            lightbox__side--next
          "
          onClick={onNext}
          aria-label="Next photograph"
        >
          →
        </button>

      </div>

      {/* ==================================================
          INFORMACIÓN
      ================================================== */}

      <div className="lightbox__bottom">

        <div className="lightbox__meta">

          <h2>
            {currentItem.title}
          </h2>

          <span>
            {currentItem.category}
          </span>

        </div>

        <div className="lightbox__navigation">

          <button
            type="button"
            onClick={onPrevious}
          >
            ← Previous
          </button>

          <button
            type="button"
            onClick={onNext}
          >
            Next →
          </button>

        </div>

      </div>
    </div>
  );
}

export default Lightbox;