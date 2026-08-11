// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const ClassesSection = () => {
//   return (
//     <section id="classes" className="classes">
//       <Container>
//         <Row className="align-items-center g-5">
//           {/* Left Content Column */}
//           <Col lg={6} className="reveal visible">
//             <span className="class-tag">Bootcamps & Mentorship</span>
//             <h2 className="section-title text-start mt-2 mb-3">
//              Master Modern Software Engineering & Full-Stack Development
//             </h2>
//             <p className="mb-4 text-muted">Bridge the gap from beginner to job-ready developer. Learn production-grade app development, modern web stacks, and software QA directly from active industry experts through hands-on, project-based training.</p>
            
//             <ul className="classes-list list-unstyled d-flex flex-column gap-3 mb-4">
//               <li className="d-flex align-items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   className="text-warning"
//                   aria-hidden="true"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 6l8 6-8 6" />
//                 </svg>
//                 <span>Flutter & Mobile App Development Cross-Platform iOS & Android Apps with Clean Architecture, State Management, and API Integration.</span>
//               </li>
//               <li className="d-flex align-items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   className="text-warning"
//                   aria-hidden="true"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 6l8 6-8 6" />
//                 </svg>
//                 <span>Python Backend & API Development Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Backend Systems.</span>
//               </li>
//               <li className="d-flex align-items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   className="text-warning"
//                   aria-hidden="true"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 6l8 6-8 6" />
//                 </svg>
//                 <span>Modern Frontend Development (HTML, CSS, React) Responsive Web Design, UI/UX Implementation, Tailwind CSS, and Dynamic React.js Web Apps.</span>
//               </li>
//               <li className="d-flex align-items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   className="text-warning"
//                   aria-hidden="true"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 6l8 6-8 6" />
//                 </svg>
//                 <span>Cross-Platform React Native Development Build Native Mobile Experiences using React and Modern JavaScript/TypeScript Tools.</span>
//               </li>
//               <li className="d-flex align-items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                   className="text-warning"
//                   aria-hidden="true"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 6l8 6-8 6" />
//                 </svg>
//                 <span>Software Testing & QA Engineering
// Manual & Automated Testing, API Testing (Postman), Test Case Writing, and Bug Tracking.</span>
//               </li>
//             </ul>

//             <Button 
//               href="#contact" 
//               className="btn-cohort border-0 font-weight-bold"
//               style={{
//                 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
//                 boxShadow: '0 4px 15px rgba(245,158,11,0.2)',
//                 padding: '14px 28px',
//                 borderRadius: '12px',
//                 fontWeight: 600
//               }}
//             >
//               Apply For Next Cohort or Enroll in Live Classes
//             </Button>
//           </Col>

//           {/* Right Features Grid Column */}
//           <Col lg={6}>
//             <Row className="g-4">
//               <Col sm={6}>
//                 <div className="feature-box text-center p-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="32"
//                     height="32"
//                     className="text-warning mb-3"
//                     aria-hidden="true"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M4 6h16M4 10h16M7 14h10M9 18h6" />
//                     <path d="M8 2h8v4H8z" />
//                   </svg>
//                   <h4>Hands-On Real Projects</h4>
//                   <p className="text-muted small mb-0"> Build production-ready apps and real-world web platforms to feature in your portfolio.</p>
//                 </div>
//               </Col>
//               <Col sm={6}>
//                 <div className="feature-box text-center p-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="32"
//                     height="32"
//                     className="text-warning mb-3"
//                     aria-hidden="true"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M4 4h16v16H4z" />
//                     <path d="M8 8h8M8 12h8M8 16h4" />
//                   </svg>
//                   <h4>AppZone Placement Kit</h4>
//                   <p className="text-muted small mb-0">Resume building, GitHub profile optimization, mock interviews, and direct referral pathways.</p>
//                 </div>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ClassesSection;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const courses = [
  {
    title: 'Flutter & Mobile App Development',
    desc: 'Cross-Platform iOS & Android Apps with Clean Architecture, State Management, and API Integration.'
  },
  {
    title: 'Python Backend & API Development',
    desc: 'Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Backend Systems.'
  },
  {
    title: 'Modern Frontend Development (HTML, CSS, React)',
    desc: 'Responsive Web Design, UI/UX Implementation, Tailwind CSS, and Dynamic React.js Web Apps.'
  },
  {
    title: 'Cross-Platform React Native Development',
    desc: 'Build Native Mobile Experiences using React and Modern JavaScript/TypeScript Tools.'
  },
  {
    title: 'Software Testing & QA Engineering',
    desc: 'Manual & Automated Testing, API Testing (Postman), Test Case Writing, and Bug Tracking.'
  }
];

const ClassesSection = () => {
  return (
    <section id="classes" className="classes-section Section-spacing">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Main Content */}
          <Col lg={7}>
            <div className="section-header mb-4">
              <span className="badge-pill mb-3">
                <span className="dot"></span> Bootcamps & Mentorship
              </span>
              <h2 className="main-heading text-white mt-2 mb-3">
                Master Modern Software Engineering & <span className="text-gradient">Full-Stack Development</span>
              </h2>
              <p className="sub-text text-muted">
                Bridge the gap from beginner to job-ready developer. Learn production-grade app development, 
                modern web stacks, and software QA directly from active industry experts through hands-on, project-based training.
              </p>
            </div>

            {/* Structured Course Tracks List */}
            <div className="course-tracks-list d-flex flex-column gap-3 mb-4">
              {courses.map((course, idx) => (
                <div key={idx} className="track-item d-flex align-items-start gap-3 p-3">
                  <div className="check-icon-box flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h6 className="track-title text-white mb-1">{course.title}</h6>
                    <p className="track-desc text-muted mb-0">{course.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="#contact" className="btn-cta text-white font-weight-bold">
              Apply For Next Cohort or Enroll in Live Classes
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ms-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </Col>

          {/* Right Feature Cards */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4">
              {/* Feature 1 */}
              <div className="feature-card-modern p-4">
                <div className="feature-icon mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-white h5 mb-2">Hands-On Real Projects</h4>
                <p className="text-muted small mb-0">
                  Build production-ready apps and real-world web platforms to feature in your portfolio.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card-modern p-4">
                <div className="feature-icon mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4 className="text-white h5 mb-2">AppZone Placement Kit</h4>
                <p className="text-muted small mb-0">
                  Resume building, GitHub profile optimization, mock interviews, and direct referral pathways.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClassesSection;