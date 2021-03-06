import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const path = useLocation().pathname;

  return (
    <nav id="nav-bar">
      <div className="nav-name">
        <Link to="/" className="link-logo">
          <img src="https://i.ibb.co/fvBXzL9/logo-nav-bar.png" alt="sasas" />
          <h1>Matheus Martino</h1>
        </Link>
      </div>
      <div className="nav-social-links">
        <a
          className="social-link"
          href="https://github.com/MatheusMartino97/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/github-108-438008.png"
            width="48px"
            height="48px"
            alt="Github"
          />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/matheus-martino/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.ibb.co/Kx2GSrT/linkedin.png"
            width="48px"
            height="48px"
            alt="Linked In"
          />
        </a>
      </div>
      <div className="nav-links">
        <Link to="/" className={path === '/' ? 'selected-link' : undefined}>
          Home
        </Link>
        <Link
          to="/projects"
          className={path.includes('/projects') ? 'selected-link' : undefined}
        >
          Projetos
        </Link>
        <Link
          to="/curriculum"
          className={path === '/curriculum' ? 'selected-link' : undefined}
        >
          Currículo
        </Link>
        {/* <Link
          to="/skills"
          className={path === '/skills' ? 'selected-link' : undefined}
        >
          Habilidades
        </Link> */}
        <Link
          to="/contact"
          className={path === '/contact' ? 'selected-link' : undefined}
        >
          Contato
        </Link>
        <Link
          to="/about"
          className={path === '/about' ? 'selected-link' : undefined}
        >
          Sobre
        </Link>
      </div>
      <div className="dropdown">
        <img
          width="50px"
          src="https://i.ibb.co/FmGH3Zm/menu-button.png"
          alt=""
        />
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/projects">Portfólio</Link>
          <Link to="/curriculum">Currículo</Link>
          {/* <Link to="/skills">Habilidades</Link> */}
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
