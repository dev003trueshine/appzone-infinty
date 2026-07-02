import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo/logo.png';
export default function Banner() {
  return (
    <section id="banner" className="banner">
      <Container>
        <Row className="align-items-center g-4">
          
          {/* Text Content Column */}
          <Col lg={7} md={12} className="reveal visible">
            <h2 className="banner-title">
              Infinite Possibilities, Boundless Code Evolution
            </h2>
            <p className="banner-desc">
              We build enterprise software applications, highly intuitive custom applications, 
              and industry-ready developer training systems designed to scale endlessly.
            </p>
            <div className="banner-buttons d-flex gap-3 flex-wrap">
              <a href="#contact" className="btn btn-primary">
                Partner With Us <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#services" className="btn btn-secondary">
                Our Capabilities
              </a>
            </div>
          </Col>

          {/* Visual Orb/Card Column */}
          <Col lg={5} md={12} className="banner-visual reveal visible">
            <div className="orb-glow"></div>
            <div className="visual-card">
              <img 
                src={logo} 
                alt="Appzone Infinity Brand" 
                className="hero-embedded-logo img-fluid" 
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}