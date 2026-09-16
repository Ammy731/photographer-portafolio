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

      <button
        type="button"

        className="work-gallery__media"

        onClick={onOpen}

        aria-label={
          `Ver fotografía: ${item.title}`
        }
      >

        <img
          src={item.image}

          alt={
            `${item.title} — ${item.category}`
          }

          loading="lazy"

          decoding="async"

          style={{
            objectPosition:
              item.position ||
              "center",
          }}
        />

        {/* Capa oscura utilizada solamente
            durante el hover */}

        <div
          className="work-gallery__overlay"
        />

        {/* Información mínima.
            El protagonista sigue siendo
            la fotografía. */}

        <div
          className="work-gallery__hover"
        >

          <span>
            {item.category}
          </span>

          <span>
            Ver ↗
          </span>

        </div>

      </button>

    </article>
  );
}

export default GalleryItem;