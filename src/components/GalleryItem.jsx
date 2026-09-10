function GalleryItem({ item }) {
  return (
    <article
      className={`
        work-gallery__item
        work-gallery__item--${item.layout}
      `}
    >
      {/* ==================================================
          FOTOGRAFÍA
      ================================================== */}

      <div className="work-gallery__media">

        <img
          src={item.image}
          alt={`${item.title} - ${item.category}`}
          loading="lazy"
          decoding="async"
          style={{
            objectPosition: item.position,
          }}
        />

        {/* Overlay para interacción visual */}

        <div className="work-gallery__overlay" />

        {/* Información que aparece sobre la foto */}

        <div className="work-gallery__hover">
          <span>
            {item.category}
          </span>

          <span>
            View
          </span>
        </div>

      </div>

      {/* ==================================================
          INFORMACIÓN INFERIOR
      ================================================== */}

      <div className="work-gallery__meta">

        <h3>
          {item.title}
        </h3>

        <span>
          {item.category}
        </span>

      </div>
    </article>
  );
}

export default GalleryItem;