import { Link } from "react-router";

const serviceGroups = [
  {
    id: 1,
    number: "01",
    title: "Fotografía deportiva",
    description:
      "Coberturas de partidos, entrenamientos, torneos, clubes y eventos deportivos.",
    items: [
      "Partidos",
      "Entrenamientos",
      "Torneos",
      "Clubes",
      "Eventos deportivos",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Deportistas",
    description:
      "Sesiones individuales, seguimiento personal y creación de contenido para construir una imagen sólida en redes.",
    items: [
      "Sesiones individuales",
      "Fotógrafo personal",
      "Marca personal",
      "Contenido para redes",
      "Seguimiento deportivo",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Marcas y contenido",
    description:
      "Producción visual para marcas que necesitan fotografía, video vertical y contenido pensado para redes sociales.",
    items: [
      "Fotografía",
      "Video vertical",
      "Reels",
      "Campañas",
      "Contenido para redes",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Comercial",
    description:
      "Fotografía y contenido para negocios, productos, publicidad y proyectos independientes.",
    items: [
      "Negocios",
      "Productos",
      "Publicidad",
      "Campañas",
      "Contenido comercial",
    ],
  },
];

const packages = [
  {
    id: 1,
    name: "Sesión individual",
    category: "Deportistas",
    description:
      "Pensada para jugadores que necesitan una sesión puntual para imagen personal y redes.",
    features: [
      "Sesión fotográfica",
      "Selección y edición",
      "Entrega digital",
      "Contenido para redes",
    ],
    price: null,
  },
  {
    id: 2,
    name: "Cobertura deportiva",
    category: "Fútbol",
    description:
      "Cobertura de un partido, entrenamiento o evento deportivo.",
    features: [
      "Cobertura en cancha",
      "Selección de fotografías",
      "Edición",
      "Entrega digital",
    ],
    price: null,
  },
  {
    id: 3,
    name: "Seguimiento personal",
    category: "Deportistas",
    description:
      "Para futbolistas que necesitan contenido recurrente durante partidos, entrenamientos o etapas de temporada.",
    features: [
      "Seguimiento periódico",
      "Partidos y entrenamientos",
      "Contenido para redes",
      "Marca personal",
    ],
    price: null,
  },
  {
    id: 4,
    name: "Marca / comercial",
    category: "Contenido",
    description:
      "Proyecto personalizado según objetivos, cantidad de contenido, fotografía y video.",
    features: [
      "Fotografía",
      "Video",
      "Contenido vertical",
      "Propuesta personalizada",
    ],
    price: null,
  },
];

function Services() {
  return (
    <main className="services-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="services-hero">
        <span className="services-hero__label">
          Servicios
        </span>

        <h1>
          Fotografía y
          <br />
          contenido visual.
        </h1>

        <div className="services-hero__bottom">
          <p>
            Servicios para fútbol, deportistas,
            marcas y proyectos comerciales.
          </p>

          <span>
            Cuenca, Ecuador
          </span>
        </div>
      </section>

      {/* ==================================================
          SERVICIOS
      ================================================== */}

      <section className="services-page__list">
        {serviceGroups.map((service) => (
          <article
            key={service.id}
            className="service-row"
          >
            <span className="service-row__number">
              {service.number}
            </span>

            <div className="service-row__content">
              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>
            </div>

            <ul className="service-row__items">
              {service.items.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* ==================================================
          PAQUETES
      ================================================== */}

      <section className="service-packages">
        <div className="service-packages__header">
          <span className="section-label">
            Paquetes
          </span>

          <div>
            <h2>
              Formas de trabajar.
            </h2>

            <p>
              Los paquetes pueden adaptarse según
              duración, número de entregables,
              desplazamiento y necesidad de video.
            </p>
          </div>
        </div>

        <div className="service-packages__grid">
          {packages.map((item) => (
            <article
              key={item.id}
              className="service-package"
            >
              <div className="service-package__top">
                <span>
                  {item.category}
                </span>

                <span>
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>

              <h3>
                {item.name}
              </h3>

              <p className="service-package__description">
                {item.description}
              </p>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="service-package__bottom">
                <span className="service-package__price">
                  {item.price
                    ? item.price
                    : "Cotización personalizada"}
                </span>

                <Link to="/contact">
                  Cotizar ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}

      <section className="services-contact">
        <span className="section-label">
          Cotización
        </span>

        <div className="services-contact__content">
          <h2>
            ¿Necesitas algo
            <br />
            diferente?
          </h2>

          <div>
            <p>
              Cuéntame el tipo de cobertura,
              fecha, duración y contenido que
              necesitas para preparar una propuesta.
            </p>

            <Link
              to="/contact"
              className="services-contact__button"
            >
              Solicitar cotización
              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
