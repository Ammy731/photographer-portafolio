import {
  useEffect,
  useState,
} from "react";

import {
  NavLink,
  useLocation,
} from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
   * Cerramos el menú automáticamente
   * cuando el usuario cambia de página.
   */
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  /*
   * Bloqueamos el scroll del contenido de fondo
   * mientras el panel lateral está abierto.
   * También permitimos cerrar con Escape.
   */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [menuOpen]);

  return (
    <header
      className={`navbar ${
        menuOpen ? "is-open" : ""
      }`}
    >
      <NavLink
        to="/"
        className="navbar__brand"
        onClick={closeMenu}
      >
        CDAVID

        <span>
          PHOTOGRAPHY
        </span>
      </NavLink>

      {/* Escritorio */}
      <nav
        className="navbar__menu"
        aria-label="Navegación principal"
      >
        <NavLink to="/work">
          Portafolio
        </NavLink>

        <NavLink to="/projects">
          Proyectos
        </NavLink>

        <NavLink to="/services">
          Servicios
        </NavLink>

        <NavLink to="/about">
          Sobre mí
        </NavLink>

        <NavLink to="/contact">
          Contacto
        </NavLink>
      </nav>

      {/* Tablet y móvil */}
      <button
        className="navbar__mobile-button"
        type="button"
        aria-label={
          menuOpen
            ? "Cerrar menú"
            : "Abrir menú"
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() =>
          setMenuOpen(
            (current) => !current
          )
        }
      >
        {menuOpen ? "Cerrar" : "Menú"}
      </button>

      {menuOpen && (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      )}

      <nav
        id="mobile-navigation"
        className="navbar__mobile-menu"
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/work"
          onClick={closeMenu}
        >
          Portafolio
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
        >
          Proyectos
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
        >
          Servicios
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          Sobre mí
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
