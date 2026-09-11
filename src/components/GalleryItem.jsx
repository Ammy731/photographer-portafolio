function GalleryItem({
  item,
  onOpen,
}) {
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

      <button
        type="button"
        className="work-gallery__media"
        onClick={onOpen}
        aria-label={`Open ${item.title}`}
      >

        <img
          src={item.image}
          alt={`${item.title} - ${item.category}`}
          loading="lazy"
          decoding="async"
          style={{
            objectPosition:
              item.position,
          }}
        />

        <div className="work-gallery__overlay" />

        <div className="work-gallery__hover">

          <span>
            {item.category}
          </span>

          <span>
            View
          </span>

        </div>

      </button>

      {/* ==================================================
          INFORMACIÓN
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