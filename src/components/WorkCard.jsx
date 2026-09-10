import { Link } from "react-router";

function WorkCard({ work }) {
  return (
    <article
      className={`work-card work-card--${work.layout}`}
    >
      {/* ==================================================
          CABECERA
      ================================================== */}

      <div className="work-card__header">
        <span className="work-card__number">
          {work.number}
        </span>

        <span className="work-card__category">
          {work.category}
        </span>
      </div>

      {/* ==================================================
          FOTOGRAFÍA
      ================================================== */}

      <Link
        to="/work"
        className="work-card__media"
        aria-label={`View ${work.title}`}
      >
        <div className="work-card__image-wrapper">
          <img
            src={work.image}
            alt={`${work.title} - ${work.category}`}
            loading="lazy"
            decoding="async"
          />

          <div className="work-card__image-overlay" />

          {/* Texto que aparece al pasar el mouse */}

          <span className="work-card__view">
            View Work
          </span>
        </div>
      </Link>

      {/* ==================================================
          INFORMACIÓN
      ================================================== */}

      <div className="work-card__info">
        <div>
          <h3>{work.title}</h3>

          <p>
            {work.description}
          </p>
        </div>

        <span className="work-card__year">
          {work.year}
        </span>
      </div>
    </article>
  );
}

export default WorkCard;