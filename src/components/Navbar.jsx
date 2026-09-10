import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        CDAVID
        <span>PHOTOGRAPHY</span>
      </NavLink>

      <nav className="navbar__menu">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <button className="navbar__mobile-button" aria-label="Open menu">
        Menu
      </button>
    </header>
  );
}

export default Navbar;