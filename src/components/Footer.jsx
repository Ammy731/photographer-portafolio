import { Link } from "react-router";

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="site-footer__top">

        <Link
          to="/"
          className="site-footer__brand"
        >
          CDAVID

          <span>
            PHOTOGRAPHY
          </span>
        </Link>

        <p className="site-footer__description">
          Fotografía deportiva y
          contenido visual.
          <br />
          Cuenca, Ecuador.
        </p>

        <nav
          className="site-footer__nav"
          aria-label="Navegación del pie de página"
        >
          <Link to="/work">
            Portafolio
          </Link>

          <Link to="/projects">
            Proyectos
          </Link>

          <Link to="/about">
            Sobre mí
          </Link>

          <Link to="/contact">
            Contacto
          </Link>
        </nav>

      </div>

      <div className="site-footer__bottom">

        <span>
          © {currentYear} CDAVID Photography.
        </span>

        <span>
          Todos los derechos reservados.
        </span>

        <span>
          Cuenca, Ecuador.
        </span>

      </div>

    </footer>
  );
}

export default Footer;
