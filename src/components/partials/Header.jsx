import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (event, hash) => {
    const nav = document.getElementById('mainNavbar');
    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);

    if (nav && nav.classList.contains('show')) {
      event.preventDefault();
      // Hide our custom menu
      if (window.bootstrap && window.bootstrap.Collapse) {
        const instance = window.bootstrap.Collapse.getInstance(nav) || new window.bootstrap.Collapse(nav, { toggle: false });
        try { instance.hide(); } catch (e) { nav.classList.remove('show'); }
      } else {
        nav.classList.remove('show');
      }
      setIsOpen(false);

      setTimeout(() => {
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.hash = hash;
        }
      }, 200);
    }
  };

  useEffect(() => {
    // lock body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // Keep UI consistent on resize: close fullscreen menu on large screens
    const onResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="app-header shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0 py-3">
          <a className="navbar-brand d-flex align-items-center gap-2 p-0 me-3" href="#">
            <img src={logo} alt="Appzone Infinity logo" className="app-header__logo img-fluid" />
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-controls="mainNavbar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((s) => !s)}
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

          <div className={"collapse navbar-collapse justify-content-end" + (isOpen ? ' show navbar-fullscreen' : '')} id="mainNavbar">
            {isOpen && (
              <div className="navbar-fullscreen-header d-flex align-items-center justify-content-between px-3">
                <a className="navbar-brand d-flex align-items-center gap-2 p-0" href="#" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Appzone Infinity logo" className="app-header__logo img-fluid" />
                </a>
                <button className="navbar-fullscreen-close btn p-0" aria-label="Close menu" onClick={() => setIsOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}
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
