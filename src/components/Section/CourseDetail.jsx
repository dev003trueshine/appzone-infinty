import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CourseDetail = ({ course, onClose }) => {
  if (!course) return null;

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="course-detail-section bg-dark p-4 rounded-4">
      <Container>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h3 className="text-white h4 mb-0">{course.title}</h3>
          <Button variant="outline-light" size="sm" onClick={onClose}>Back</Button>
        </div>

        <Row className="g-4">
          <Col lg={7}>
            <div className="detail-hero p-4 rounded-3 bg-secondary bg-opacity-10">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img src={course.image} alt={course.title} width="72" height="72" />
                <div>
                  <h2 className="text-white h5 mb-1">{course.title}</h2>
                  <div className="text-muted small">{course.badge} • {course.duration}</div>
                </div>
              </div>
              <p className="text-muted">{course.about || course.description}</p>

              {course.highlights && (
                <>
                  <h5 className="text-white mt-3">Key Highlights</h5>
                  <ul className="text-muted">
                    {course.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Syllabus accordion (mobile / main column) */}
            {course.syllabus && (
              <div className="mt-4">
                <h4 className="text-white mb-3">Syllabus</h4>
                <div className="accordion">
                  {course.syllabus.map((section, idx) => (
                    <div key={idx} className="mb-2 syllabus-section">
                      <button
                        type="button"
                        className="d-flex w-100 justify-content-between align-items-center btn btn-link text-start p-3 rounded-3"
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      >
                        <strong className="text-white">{section.title}</strong>
                        <span className="text-muted">{openIndex === idx ? '−' : '+'}</span>
                      </button>
                      {openIndex === idx && (
                        <div className="ps-3 pe-3 pb-3">
                          <ul className="text-muted mb-0">
                            {section.items.map((it, j) => (
                              <li key={j}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Col>

          <Col lg={5}>
            <div className="p-4 rounded-3 bg-secondary bg-opacity-5">
              <div className="mb-3">
                <strong className="text-white">Course Details</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Duration</span>
                <span className="text-white">{course.duration}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Format</span>
                <span className="text-white">Live Cohort</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Level</span>
                <span className="text-white">Beginner → Intermediate</span>
              </div>

              <Button href="#contact" className="w-100 btn-primary">Enroll / Contact</Button>

              <div className="mt-3 text-muted small">
                <div>Instructor: AppZone Team</div>
                <div>Language: English</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseDetail;
