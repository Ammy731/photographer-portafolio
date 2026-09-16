import { Link } from "react-router";

function ServicesPreview({ services }) {
  return (
    <section className="services-preview">
      <div className="services-preview__header">
        <span className="section-label">
          Servicios
        </span>

        <div>
          <h2>
            Fotografía y contenido
            <br />
            para deporte y marcas.
          </h2>

          <p>
            Coberturas, sesiones y producción visual
            adaptadas a cada proyecto.
          </p>
        </div>
      </div>

      <div className="services-preview__list">
        {services.map((service) => (
          <article
            key={service.id}
            className="services-preview__item"
          >
            <span className="services-preview__number">
              {service.number}
            </span>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="services-preview__footer">
        <Link to="/services">
          Ver servicios y paquetes
          <span aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ServicesPreview;
