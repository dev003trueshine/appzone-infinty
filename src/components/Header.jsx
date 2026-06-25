import React from 'react';
import logo from '../assets/images/logo/logo.png';

export default function Header() {
  return (
    <header className="app-header shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0 py-3">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">AI Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary btn-sm" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
