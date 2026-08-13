import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
  return (
    <footer className="footer border-top">
      <Container>
        {/* Footer Top */}
        <Row className="align-items-center justify-content-between pb-4 mb-4" style={{ borderBottom: '1px solid #1e293b' }}>
          <Col xs={12} md="auto" className="mb-3 mb-md-0">
            <a href="#banner" className="logo d-flex align-items-center gap-2" style={{ textDecoration: 'none' }}>
              <img 
                src={logo}
                alt="Appzone Infinity Logo" 
                className="logo-img" 
              />
              <span className="logo-text">
                Appzone Infinity
              </span>
            </a>
          </Col>
          
          <Col xs={12} md="auto">
            <div className="footer-socials d-flex gap-3 align-items-center">
              <a
                href="https://www.linkedin.com/in/appzone-infinity/"
                className="social-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 5.43 3.42 7 1.5 7S-1.98 5.43-1.98 3.5 0.42 0 2.34 0 4.98 1.57 4.98 3.5zM0 8.5h4.5V24H0V8.5zm7.5 0h4.31v2.1h.06c.6-1.13 2.07-2.33 4.26-2.33 4.55 0 5.39 3 5.39 6.89V24h-4.5v-7.55c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.96-2.9 3.99V24H7.5V8.5z"/>
                </svg>
              </a>
              <a
                href="tel:+91 8238157599"
                className="social-btn call-btn d-flex align-items-center gap-2"
                aria-label="Call Appzone Infinity"
                title="Call Appzone Infinity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.23c1.21.48 2.53.74 3.88.74a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 22.5 1.5 13.93 1.5 3.5A1 1 0 0 1 2.5 2.5H6a1 1 0 0 1 1 1c0 1.35.25 2.67.74 3.88a1 1 0 0 1-.23 1.11l-2.2 2.2z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/appzoneinfinity/"
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom align-items-center justify-content-between style-text fs-6">
          <Col xs={12} sm="auto" className="mb-2 mb-sm-0 text-muted">
            <p className="m-0">&copy; 2026 Appzone Infinity Software Solutions.</p>
          </Col>
          <Col xs={12} sm="auto" className="text-muted">
            <p className="m-0">Built with optimization transparency architectures.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;