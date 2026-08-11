import React from 'react';
import logo from '../../assets/images/logo/logo.png';

export default function Header() {
  const handleSectionClick = (event, hash) => {
    const nav = document.getElementById('mainNavbar');
    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);

    if (nav && nav.classList.contains('show')) {
      event.preventDefault();
      if (window.bootstrap && window.bootstrap.Collapse) {
        const instance = window.bootstrap.Collapse.getInstance(nav) || new window.bootstrap.Collapse(nav, { toggle: false });
        instance.hide();
      } else {
        nav.classList.remove('show');
      }

      setTimeout(() => {
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.hash = hash;
        }
      }, 200);
    }
  };

  return (
    <header className="app-header shadow-sm">
      <div className="container">
        <nav className="navbar navbar-light px-0 py-3">
          <a className="navbar-brand d-flex align-items-center gap-2 p-0 me-3" href="#">
            <img src={logo} alt="Appzone Infinity logo" className="app-header__logo img-fluid" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h22" />
                <path d="M4 15h22" />
                <path d="M4 23h22" />
              </svg>
            </span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={(e) => handleSectionClick(e, '#services')}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products" onClick={(e) => handleSectionClick(e, '#products')}>Our Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#classes" onClick={(e) => handleSectionClick(e, '#classes')}>Classes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => handleSectionClick(e, '#contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
