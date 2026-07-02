import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ClassesSection = () => {
  return (
    <section id="classes" className="classes">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Content Column */}
          <Col lg={6} className="reveal visible">
            <span className="class-tag">Bootcamps & Mentorship</span>
            <h2 className="section-title text-start mt-2 mb-3">
              Live Coding Classes & Technical Training Available
            </h2>
            <p className="mb-4 text-muted">
              Bridge the modern software engineering logic gap. Learn our production-tier optimization techniques directly from senior developers through verified hands-on tracks.
            </p>
            
            <ul className="classes-list list-unstyled d-flex flex-column gap-3 mb-4">
              <li className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="text-warning"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 6l8 6-8 6" />
                </svg>
                <span>Advanced Web Architecture & React/Vue Orchestration</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="text-warning"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 6l8 6-8 6" />
                </svg>
                <span>Backend Microservices API Design Loops</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="text-warning"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 6l8 6-8 6" />
                </svg>
                <span>Custom Database Sharding & System Scaling Strategies</span>
              </li>
            </ul>

            <Button 
              href="#contact" 
              className="btn-cohort border-0 font-weight-bold"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                boxShadow: '0 4px 15px rgba(245,158,11,0.2)',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 600
              }}
            >
              Apply For Next Cohort
            </Button>
          </Col>

          {/* Right Features Grid Column */}
          <Col lg={6}>
            <Row className="g-4">
              <Col sm={6}>
                <div className="feature-box text-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-warning mb-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 10h16M7 14h10M9 18h6" />
                    <path d="M8 2h8v4H8z" />
                  </svg>
                  <h4>Practical Sandbox Labs</h4>
                  <p className="text-muted small mb-0">Real runtime terminal configuration environments.</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="feature-box text-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-warning mb-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                  <h4>AppZone Placement Kit</h4>
                  <p className="text-muted small mb-0">Direct entry pathways into active engineering streams.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClassesSection;