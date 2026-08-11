import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import servicesData from '../../data/servicesData.json';

const getServiceImage = (fileName) => {
  if (!fileName) return '';

  try {
    return new URL(`../../assets/images/service/${fileName}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="services Section-spacing">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5 reveal visible">
          <h2 className="section-title text-white font-weight-bold">Our Services</h2>
          <p className="section-subtitle mx-auto text-muted" style={{ maxWidth: '600px' }}>
            Comprehensive corporate systems architectures built to reliably deploy structural assets dynamically.
          </p>
        </div>
        
        {/* Responsive Grid Layout */}
        <Row className="g-5">
          {servicesData.map((service) => (
            <Col key={service.id} md={6} lg={4}>
              <div className="service-card p-4 h-100 d-flex flex-column gap-lg-5 gap-3">
                
                {/* Header Layout Frame */}
                <div className="card-top-layout">
                  {/* <div className="service-icon d-flex align-items-center justify-content-center flex-shrink-0">
                    <svg 
                      width="26" 
                      height="26" 
                      viewBox="0 0 24 24" 
                      dangerouslySetInnerHTML={{ __html: service.svgIcon }}
                    />
                  </div> */}
                  <h3 className="text-white fs-5 font-weight-bold m-0">{service.title}</h3>
                </div>

                {/* Description Frame */}
                <p className="text-muted small m-0 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>

                {/* Graphic Dynamic Layout Container */}
                <div className="card-graphic-slot w-100 d-flex align-items-center justify-content-center overflow-hidden position-relative">
                  <img 
                    src={getServiceImage(service.graphicImage)} 
                    alt={service.fallbackText}
                    className="img-fluid object-fit-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <span className="card-fallback-text text-muted small position-absolute" style={{ display: 'none', fontStyle: 'italic' }}>
                    {service.fallbackText}
                  </span>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;