import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo/logo.png';
export default function Banner() {
  return (
    <section id="banner" className="banner Section-spacing">
      <Container>
        <Row className="align-items-center justify-content-center g-4">
          
          {/* Text Content Column */}
           <Col lg={7} md={12} >
              {/* Visual Orb/Card Column */}
              <div className="banner-visual reveal visible text-center mx-auto">
                <div className="orb-glow"></div>
                <div className="visual-card mx-auto">
                  <img 
                    src={logo} 
                    alt="Appzone Infinity Brand" 
                    className="hero-embedded-logo img-fluid" 
                  />
                </div>
              </div>
              <div className="reveal visible text-center">
                <h2 className="banner-title">
                  Building AI for
                  <br />
                  <strong className="banner-title--highlight">the Way People Work</strong>
                </h2>
                <p className="banner-desc">
                  Novus creates agentic systems and products, providing platforms where teams can turn tasks into working AI agents and manage everything in one place.
                </p>
                <div className="banner-buttons d-flex gap-3 flex-wrap justify-content-center mt-5 pt-lg-5 pt-3">
                  <a href="#products" className="btn btn-outline-primary">
                    Explore Products
                  </a>
                  <a href="#contact" className="btn btn-primary d-flex align-items-center gap-2">
                    Contact us <i className="ph ph-arrow-right"></i>
                  </a>
                </div>
              </div>
           </Col>

  

        </Row>
      </Container>
    </section>
  );
}