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
            <div className="footer-socials d-flex gap-3">
              <a
                href="https://www.linkedin.com"
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
                href="https://github.com"
                className="social-btn"
                aria-label="GitHub"
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
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.043-1.61-4.043-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.103.81 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.21.698.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
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