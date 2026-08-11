// // import React from 'react';
// // import { Container, Row, Col, Button } from 'react-bootstrap';

// // const ClassesSection = () => {
// //   return (
// //     <section id="classes" className="classes">
// //       <Container>
// //         <Row className="align-items-center g-5">
// //           {/* Left Content Column */}
// //           <Col lg={6} className="reveal visible">
// //             <span className="class-tag">Bootcamps & Mentorship</span>
// //             <h2 className="section-title text-start mt-2 mb-3">
// //              Master Modern Software Engineering & Full-Stack Development
// //             </h2>
// //             <p className="mb-4 text-muted">Bridge the gap from beginner to job-ready developer. Learn production-grade app development, modern web stacks, and software QA directly from active industry experts through hands-on, project-based training.</p>
            
// //             <ul className="classes-list list-unstyled d-flex flex-column gap-3 mb-4">
// //               <li className="d-flex align-items-center gap-2">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                   width="20"
// //                   height="20"
// //                   className="text-warning"
// //                   aria-hidden="true"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M8 6l8 6-8 6" />
// //                 </svg>
// //                 <span>Flutter & Mobile App Development Cross-Platform iOS & Android Apps with Clean Architecture, State Management, and API Integration.</span>
// //               </li>
// //               <li className="d-flex align-items-center gap-2">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                   width="20"
// //                   height="20"
// //                   className="text-warning"
// //                   aria-hidden="true"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M8 6l8 6-8 6" />
// //                 </svg>
// //                 <span>Python Backend & API Development Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Backend Systems.</span>
// //               </li>
// //               <li className="d-flex align-items-center gap-2">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                   width="20"
// //                   height="20"
// //                   className="text-warning"
// //                   aria-hidden="true"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M8 6l8 6-8 6" />
// //                 </svg>
// //                 <span>Modern Frontend Development (HTML, CSS, React) Responsive Web Design, UI/UX Implementation, Tailwind CSS, and Dynamic React.js Web Apps.</span>
// //               </li>
// //               <li className="d-flex align-items-center gap-2">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                   width="20"
// //                   height="20"
// //                   className="text-warning"
// //                   aria-hidden="true"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M8 6l8 6-8 6" />
// //                 </svg>
// //                 <span>Cross-Platform React Native Development Build Native Mobile Experiences using React and Modern JavaScript/TypeScript Tools.</span>
// //               </li>
// //               <li className="d-flex align-items-center gap-2">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                   width="20"
// //                   height="20"
// //                   className="text-warning"
// //                   aria-hidden="true"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M8 6l8 6-8 6" />
// //                 </svg>
// //                 <span>Software Testing & QA Engineering
// // Manual & Automated Testing, API Testing (Postman), Test Case Writing, and Bug Tracking.</span>
// //               </li>
// //             </ul>

// //             <Button 
// //               href="#contact" 
// //               className="btn-cohort border-0 font-weight-bold"
// //               style={{
// //                 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
// //                 boxShadow: '0 4px 15px rgba(245,158,11,0.2)',
// //                 padding: '14px 28px',
// //                 borderRadius: '12px',
// //                 fontWeight: 600
// //               }}
// //             >
// //               Apply For Next Cohort or Enroll in Live Classes
// //             </Button>
// //           </Col>

// //           {/* Right Features Grid Column */}
// //           <Col lg={6}>
// //             <Row className="g-4">
// //               <Col sm={6}>
// //                 <div className="feature-box text-center p-4">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     viewBox="0 0 24 24"
// //                     width="32"
// //                     height="32"
// //                     className="text-warning mb-3"
// //                     aria-hidden="true"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <path d="M4 6h16M4 10h16M7 14h10M9 18h6" />
// //                     <path d="M8 2h8v4H8z" />
// //                   </svg>
// //                   <h4>Hands-On Real Projects</h4>
// //                   <p className="text-muted small mb-0"> Build production-ready apps and real-world web platforms to feature in your portfolio.</p>
// //                 </div>
// //               </Col>
// //               <Col sm={6}>
// //                 <div className="feature-box text-center p-4">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     viewBox="0 0 24 24"
// //                     width="32"
// //                     height="32"
// //                     className="text-warning mb-3"
// //                     aria-hidden="true"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <path d="M4 4h16v16H4z" />
// //                     <path d="M8 8h8M8 12h8M8 16h4" />
// //                   </svg>
// //                   <h4>AppZone Placement Kit</h4>
// //                   <p className="text-muted small mb-0">Resume building, GitHub profile optimization, mock interviews, and direct referral pathways.</p>
// //                 </div>
// //               </Col>
// //             </Row>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default ClassesSection;

// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const courses = [
//   {
//     title: 'Flutter & Mobile App Development',
//     desc: 'Cross-Platform iOS & Android Apps with Clean Architecture, State Management, and API Integration.'
//   },
//   {
//     title: 'Python Backend & API Development',
//     desc: 'Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Backend Systems.'
//   },
//   {
//     title: 'Modern Frontend Development (HTML, CSS, React)',
//     desc: 'Responsive Web Design, UI/UX Implementation, Tailwind CSS, and Dynamic React.js Web Apps.'
//   },
//   {
//     title: 'Cross-Platform React Native Development',
//     desc: 'Build Native Mobile Experiences using React and Modern JavaScript/TypeScript Tools.'
//   },
//   {
//     title: 'Software Testing & QA Engineering',
//     desc: 'Manual & Automated Testing, API Testing (Postman), Test Case Writing, and Bug Tracking.'
//   }
// ];

// const ClassesSection = () => {
//   return (
//     <section id="classes" className="classes-section Section-spacing">
//       <Container>
//         <Row className="align-items-center g-5">
//           {/* Left Main Content */}
//           <Col lg={7}>
//             <div className="section-header mb-4">
//               <span className="badge-pill mb-3">
//                 <span className="dot"></span> Bootcamps & Mentorship
//               </span>
//               <h2 className="main-heading text-white mt-2 mb-3">
//                 Master Modern Software Engineering & <span className="text-gradient">Full-Stack Development</span>
//               </h2>
//               <p className="sub-text text-muted">
//                 Bridge the gap from beginner to job-ready developer. Learn production-grade app development, 
//                 modern web stacks, and software QA directly from active industry experts through hands-on, project-based training.
//               </p>
//             </div>

//             {/* Structured Course Tracks List */}
//             <div className="course-tracks-list d-flex flex-column gap-3 mb-4">
//               {courses.map((course, idx) => (
//                 <div key={idx} className="track-item d-flex align-items-start gap-3 p-3">
//                   <div className="check-icon-box flex-shrink-0 mt-1">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                       <polyline points="20 6 9 17 4 12"></polyline>
//                     </svg>
//                   </div>
//                   <div>
//                     <h6 className="track-title text-white mb-1">{course.title}</h6>
//                     <p className="track-desc text-muted mb-0">{course.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Button href="#contact" className="btn-cta text-white font-weight-bold">
//               Apply For Next Cohort or Enroll in Live Classes
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ms-2">
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12 5 19 12 12 19"></polyline>
//               </svg>
//             </Button>
//           </Col>

//         {/* Right Side - Interactive Badge Showcase */}
// {/* Right Side - Student High-Impact Focus Card */}
// <Col lg={5}>
//   <div className="bootcamp-highlight-container position-relative p-4 rounded-4 h-100 d-flex flex-column justify-content-center">
    
//     {/* Urgency Badge */}
//     <div className="cohort-pulse-badge mb-3 d-inline-flex align-items-center gap-2">
//       <span className="pulse-dot"></span>
//       <span className="badge-text">Next Cohort Admissions Open • Limited Seats</span>
//     </div>

//     {/* Primary Focus Card: Real Projects */}
//     <div className="impact-card featured-card mb-3 p-4 rounded-3 position-relative overflow-hidden">
//       <div className="glow-corner"></div>
//       <div className="d-flex justify-content-between align-items-center mb-2">
//         <div className="d-flex align-items-center gap-2">
//           <div className="card-icon-box purple-glow">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//               <polyline points="2 17 12 22 22 17"></polyline>
//               <polyline points="2 12 12 17 22 12"></polyline>
//             </svg>
//           </div>
//           <h4 className="text-white h5 fw-bold mb-0">Hands-On Real Projects</h4>
//         </div>
//         <span className="status-pill purple">100% Practical</span>
//       </div>
      
//       <p className="text-muted small mb-3">
//         Build production-ready mobile apps and SaaS web platforms to showcase directly in your resume & GitHub.
//       </p>

//       {/* Mini Tech Pills inside Card */}
//       <div className="tech-pills-row d-flex flex-wrap gap-2">
//         <span className="tech-pill">Flutter</span>
//         <span className="tech-pill">Python / FastAPI</span>
//         <span className="tech-pill">React.js</span>
//         <span className="tech-pill">REST APIs</span>
//       </div>
//     </div>

//     {/* Stats Bar */}
//     <div className="impact-stats-bar d-flex justify-content-around p-3 rounded-3 mb-3 text-center">
//       <div>
//         <h5 className="stat-num text-white fw-bold mb-0">1 : 1</h5>
//         <span className="stat-label text-muted">Direct Mentorship</span>
//       </div>
//       <div className="stat-divider"></div>
//       <div>
//         <h5 className="stat-num text-white fw-bold mb-0">Live</h5>
//         <span className="stat-label text-muted">Project Sprints</span>
//       </div>
//       <div className="stat-divider"></div>
//       <div>
//         <h5 className="stat-num text-white fw-bold mb-0">Job</h5>
//         <span className="stat-label text-muted">Placement Support</span>
//       </div>
//     </div>

//     {/* Secondary Focus Card: Career Kit */}
//     <div className="impact-card secondary-card p-4 rounded-3">
//       <div className="d-flex justify-content-between align-items-center mb-2">
//         <div className="d-flex align-items-center gap-2">
//           <div className="card-icon-box cyan-glow">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//               <polyline points="22 4 12 14.01 9 11.01"></polyline>
//             </svg>
//           </div>
//           <h4 className="text-white h5 fw-bold mb-0">AppZone Placement Kit</h4>
//         </div>
//         <span className="status-pill cyan">Career Ready</span>
//       </div>
//       <p className="text-muted small mb-0">
//         Resume building, GitHub profile optimization, mock technical interviews, and direct referral pathways.
//       </p>
//     </div>

//   </div>
// </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ClassesSection;


import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const coursesData = [
  {
    id: 'flutter',
    category: 'Flutter',
    title: 'Flutter & iOS / Android App Development',
    description: 'Master Clean Architecture, State Management (BLoC/GetX), and REST API Integration for production apps.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    badge: 'Mobile App',
    duration: '12 Weeks Live'
  },
  {
    id: 'python',
    category: 'Python',
    title: 'Python Backend & API Engineering',
    description: 'Learn Core Python, FastAPI, Django, Object-Oriented Programming, and Scalable Database Architecture.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    badge: 'Backend & AI',
    duration: '10 Weeks Live'
  },
  {
    id: 'react',
    category: 'React JS',
    title: 'Modern Web Development with React.js',
    description: 'Build high-performance web applications using React, Redux Toolkit, Tailwind CSS, and REST API integration.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    badge: 'Frontend',
    duration: '8 Weeks Live'
  },
  {
    id: 'html-css',
    category: 'HTML & CSS',
    title: 'Responsive UI/UX & Web Design Fundamentals',
    description: 'Master semantic HTML5, modern CSS3 (Flexbox/Grid), SCSS, and responsive design systems from scratch.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    badge: 'Design & Web',
    duration: '4 Weeks Live'
  },
  {
    id: 'react-native',
    category: 'React JS',
    title: 'Cross-Platform React Native Apps',
    description: 'Build native iOS & Android experiences using React, TypeScript, and modern mobile tooling.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    badge: 'Mobile App',
    duration: '8 Weeks Live'
  },
  {
    id: 'qa-testing',
    category: 'QA & Testing',
    title: 'Software Testing & QA Engineering',
    description: 'Manual & Automated Testing, API Testing with Postman, Test Case Writing, and Bug Tracking.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    badge: 'Quality Assurance',
    duration: '6 Weeks Live'
  }
];

const categories = ['All Courses', 'Flutter', 'Python', 'React JS', 'HTML & CSS', 'QA & Testing'];

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const filteredCourses = activeTab === 'All Courses' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <section id="classes" className="courses-catalogue-section py-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge-pill mb-2">
            <span className="dot"></span> Live Bootcamps & Mentorship
          </span>
          <h2 className="main-heading text-white fw-bold">
            Explore Our <span className="text-gradient">Industry-Ready Courses</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Learn directly from active engineers with hands-on projects, code reviews, and placement assistance.
          </p>
        </div>

        <Row className="g-4">
          {/* Left Side: Filter Sidebar (Like JioBusiness) */}
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

              {/* Placement Kit Quick Banner */}
              <div className="placement-mini-card p-3 rounded-3 mt-4 text-center">
                <h6 className="text-white fw-bold mb-1">AppZone Placement Kit</h6>
                <p className="text-muted extra-small mb-0">Resume optimization, mock interviews & referrals included.</p>
              </div>
            </div>
          </Col>

          {/* Right Side: Course Cards Grid */}
          <Col lg={9}>
            <Row className="g-4">
              {filteredCourses.map((course) => (
                <Col key={course.id} md={6}>
                  <div className="course-card h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between">
                    <div>
                      {/* Top Bar with Badge & Tech Logo */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="course-category-pill">{course.badge}</span>
                        <div className="tech-logo-wrapper">
                          <img src={course.image} alt={course.title} width="36" height="36" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h4 className="course-card-title text-white h5 fw-bold mb-2">{course.title}</h4>
                      <p className="course-card-desc text-muted small mb-4">{course.description}</p>
                    </div>

                    {/* Bottom Action Row with Circular Arrow (Jio Style) */}
                    <div className="card-bottom-row d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25">
                      <span className="duration-text text-purple extra-small fw-semibold">
                        ⏱ {course.duration}
                      </span>
                      <a href="#contact" className="open-course-btn d-flex align-items-center justify-content-center">
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