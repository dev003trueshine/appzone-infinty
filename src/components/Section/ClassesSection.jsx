import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coursesData from '../../data/coursesData';

const categories = ['All Courses', 'Flutter', 'Python', 'HTML & CSS', 'QA & Testing'];

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const openCoursePage = (courseId) => {
    // Agar aap React Router use kar rahe hain ya window pushState:
    const targetPath = `/course/${courseId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const filteredCourses = activeTab === 'All Courses' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <section id="classes" className="courses-catalogue-section section-spacing py-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="main-heading text-white fw-bold">
            Explore Our <span className="text-gradient">Industry-Ready Courses</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Learn directly from active engineers with hands-on projects, code reviews, and placement assistance.
          </p>
        </div>

        <Row className="g-4">
          {/* Left Side: Filter Sidebar */}
          <Col lg={3}>
            <div className="filter-sidebar p-3 rounded-4">
              <h5 className="filter-title text-white mb-3 ps-2">Course Categories</h5>
              <div className="filter-list d-flex flex-column gap-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`filter-btn d-flex align-items-center justify-content-between p-3 rounded-3 border-0 ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    <span>{cat}</span>
                    <span className="count-badge">
                      {cat === 'All Courses' 
                        ? coursesData.length 
                        : coursesData.filter(c => c.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Placement Kit Banner */}
              <div className="placement-mini-card p-3 rounded-3 mt-4 text-center">
                <h6 className="text-white fw-bold mb-1">AppZone Placement Kit</h6>
                <p className="text-muted extra-small mb-0">Resume optimization, mock interviews & referrals included.</p>
              </div>
            </div>
          </Col>

          {/* Right Side: Course Cards */}
          <Col lg={9}>
            <Row className="g-4">
              {filteredCourses.map((course) => (
                <Col key={course.id} md={6}>
                  <div
                    role="button"
                    onClick={() => openCoursePage(course.id)}
                    className="course-card h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between"
                    style={{ cursor: 'pointer' }}
                  >
                    <div>
                      {/* Badge & Icon */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="course-category-pill">{course.badge}</span>
                        <div className="tech-logo-wrapper">
                          <img src={course.image} alt={course.title} width="36" height="36" />
                        </div>
                      </div>

                      {/* Title & Short Description */}
                      <h4 className="course-card-title text-white h5 fw-bold mb-2">{course.title}</h4>
                      <p className="course-card-desc text-muted small mb-4">{course.description}</p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="card-bottom-row d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25">
                      <span className="duration-text text-purple extra-small fw-semibold">
                        ⏱ {course.duration}
                      </span>
                      <a 
                        href={`/course/${course.id}`} 
                        className="open-course-btn d-flex align-items-center justify-content-center"
                        onClick={(e) => {
                          e.preventDefault();
                          openCoursePage(course.id);
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClassesSection;