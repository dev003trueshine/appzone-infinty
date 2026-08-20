// // // import React, { useState } from 'react';
// // // import { Container, Row, Col, Button } from 'react-bootstrap';

// // // const CourseDetail = ({ course, onClose }) => {
// // //   if (!course) return null;

// // //   const [openIndex, setOpenIndex] = useState(-1);

// // //   return (
// // //     <section className="course-detail-section bg-dark p-4 rounded-4">
// // //       <Container>
// // //         <div className="d-flex justify-content-between align-items-start mb-3">
// // //           <h3 className="text-white h4 mb-0">{course.title}</h3>
// // //           <Button variant="outline-light" size="sm" onClick={onClose}>Back</Button>
// // //         </div>

// // //         <Row className="g-4">
// // //           <Col lg={7}>
// // //             <div className="detail-hero p-4 rounded-3 bg-secondary bg-opacity-10">
// // //               <div className="d-flex align-items-center gap-3 mb-3">
// // //                 <img src={course.image} alt={course.title} width="72" height="72" />
// // //                 <div>
// // //                   <h2 className="text-white h5 mb-1">{course.title}</h2>
// // //                   <div className="text-muted small">{course.badge} • {course.duration}</div>
// // //                 </div>
// // //               </div>
// // //               <p className="text-muted">{course.about || course.description}</p>

// // //               {course.highlights && (
// // //                 <>
// // //                   <h5 className="text-white mt-3">Key Highlights</h5>
// // //                   <ul className="text-muted">
// // //                     {course.highlights.map((h, i) => (
// // //                       <li key={i}>{h}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </>
// // //               )}
// // //             </div>

// // //             {/* Syllabus accordion (mobile / main column) */}
// // //             {course.syllabus && (
// // //               <div className="mt-4">
// // //                 <h4 className="text-white mb-3">Syllabus</h4>
// // //                 <div className="accordion">
// // //                   {course.syllabus.map((section, idx) => (
// // //                     <div key={idx} className="mb-2 syllabus-section">
// // //                       <button
// // //                         type="button"
// // //                         className="d-flex w-100 justify-content-between align-items-center btn btn-link text-start p-3 rounded-3"
// // //                         onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
// // //                       >
// // //                         <strong className="text-white">{section.title}</strong>
// // //                         <span className="text-muted">{openIndex === idx ? '−' : '+'}</span>
// // //                       </button>
// // //                       {openIndex === idx && (
// // //                         <div className="ps-3 pe-3 pb-3">
// // //                           <ul className="text-muted mb-0">
// // //                             {section.items.map((it, j) => (
// // //                               <li key={j}>{it}</li>
// // //                             ))}
// // //                           </ul>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </Col>

// // //           <Col lg={5}>
// // //             <div className="p-4 rounded-3 bg-secondary bg-opacity-5">
// // //               <div className="mb-3">
// // //                 <strong className="text-white">Course Details</strong>
// // //               </div>
// // //               <div className="d-flex justify-content-between mb-2">
// // //                 <span className="text-muted">Duration</span>
// // //                 <span className="text-white">{course.duration}</span>
// // //               </div>
// // //               <div className="d-flex justify-content-between mb-2">
// // //                 <span className="text-muted">Format</span>
// // //                 <span className="text-white">Live Cohort</span>
// // //               </div>
// // //               <div className="d-flex justify-content-between mb-3">
// // //                 <span className="text-muted">Level</span>
// // //                 <span className="text-white">Beginner → Intermediate</span>
// // //               </div>

// // //               <Button href="#contact" className="w-100 btn-primary">Enroll / Contact</Button>

// // //               <div className="mt-3 text-muted small">
// // //                 <div>Instructor: AppZone Team</div>
// // //                 <div>Language: English</div>
// // //               </div>
// // //             </div>
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </section>
// // //   );
// // // };

// // // export default CourseDetail;

// // import React, { useState } from 'react';
// // import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

// // const CourseDetail = ({ course, onClose }) => {
// //   if (!course) return null;

// //   const [openIndex, setOpenIndex] = useState(0); // Default open first module
// //   const [showModal, setShowModal] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);

// //   // Form State
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     batchPreference: 'Weekend Live',
// //     query: ''
// //   });

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleEnrollSubmit = (e) => {
// //     e.preventDefault();
// //     // Aap yahan apna backend API, Firebase ya WhatsApp redirect trigger kar sakte hain
// //     console.log('Enrollment Request:', { courseTitle: course.title, ...formData });
// //     setSubmitted(true);
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     setSubmitted(false);
// //   };

// //   return (
// //     <section className="course-detail-wrapper py-4">
// //       <Container>
// //         {/* Top Action Bar */}
// //         <div className="d-flex justify-content-between align-items-center mb-4">
// //           <Button 
// //             variant="link" 
// //             className="btn-back-link text-decoration-none p-0" 
// //             onClick={onClose}
// //           >
// //             ← Back to All Courses
// //           </Button>
// //           <span className="badge-category">{course.category}</span>
// //         </div>

// //         <Row className="g-4">
// //           {/* Main Info & Syllabus */}
// //           <Col lg={8}>
// //             {/* Overview Card */}
// //             <div className="glass-card p-4 p-md-5 mb-4">
// //               <div className="d-flex align-items-center gap-3 mb-3">
// //                 <div className="icon-container">
// //                   <img src={course.image} alt={course.title} width="48" height="48" />
// //                 </div>
// //                 <div>
// //                   <span className="badge-highlight">{course.badge}</span>
// //                   <h1 className="course-main-title text-white mt-1 h3 fw-bold">{course.title}</h1>
// //                 </div>
// //               </div>

// //               <p className="course-desc-text text-muted mb-4">{course.about || course.description}</p>

// //               {course.highlights && (
// //                 <>
// //                   <hr className="divider" />
// //                   <h5 className="text-white fw-bold mb-3">Key Highlights</h5>
// //                   <div className="highlights-grid">
// //                     {course.highlights.map((item, idx) => (
// //                       <div key={idx} className="highlight-pill">
// //                         <span className="check-icon">✓</span>
// //                         <span className="text-light">{item}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </>
// //               )}
// //             </div>

// //             {/* Curriculum Accordion */}
// //             {course.syllabus && (
// //               <div className="glass-card p-4 p-md-5">
// //                 <div className="d-flex justify-content-between align-items-center mb-4">
// //                   <h4 className="text-white fw-bold mb-0">Course Curriculum</h4>
// //                   <span className="text-muted small">{course.syllabus.length} Modules</span>
// //                 </div>

// //                 <div className="custom-accordion">
// //                   {course.syllabus.map((section, idx) => {
// //                     const isOpen = openIndex === idx;
// //                     return (
// //                       <div key={idx} className="accordion-item-custom mb-3">
// //                         <button
// //                           type="button"
// //                           className={`accordion-trigger d-flex w-100 justify-content-between align-items-center p-3 rounded-3 border-0 ${isOpen ? 'active' : ''}`}
// //                           onClick={() => setOpenIndex(isOpen ? -1 : idx)}
// //                         >
// //                           <div className="d-flex align-items-center gap-2">
// //                             <span className="module-number">{String(idx + 1).padStart(2, '0')}</span>
// //                             <span className="fw-semibold text-white">{section.title}</span>
// //                           </div>
// //                           <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
// //                         </button>

// //                         {isOpen && (
// //                           <div className="accordion-content p-3 pt-2">
// //                             <ul className="syllabus-list mb-0">
// //                               {section.items.map((item, j) => (
// //                                 <li key={j}>{item}</li>
// //                               ))}
// //                             </ul>
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>
// //             )}
// //           </Col>

// //           {/* Sticky Enrollment Card */}
// //           <Col lg={4}>
// //             <div className="sticky-sidebar">
// //               <div className="enroll-card p-4">
// //                 <h4 className="text-white fw-bold mb-3">Course Snapshot</h4>

// //                 <div className="meta-list mb-4">
// //                   <div className="meta-item">
// //                     <span className="meta-label">Duration</span>
// //                     <span className="meta-val">{course.duration}</span>
// //                   </div>
// //                   <div className="meta-item">
// //                     <span className="meta-label">Format</span>
// //                     <span className="meta-val">Live Cohort (1:3 Mentorship)</span>
// //                   </div>
// //                   <div className="meta-item">
// //                     <span className="meta-label">Level</span>
// //                     <span className="meta-val">Beginner → Advanced</span>
// //                   </div>
// //                   <div className="meta-item">
// //                     <span className="meta-label">Instructor</span>
// //                     <span className="meta-val">AppZone Team</span>
// //                   </div>
// //                   <div className="meta-item">
// //                     <span className="meta-label">Certificate</span>
// //                     <span className="meta-val text-success">Included</span>
// //                   </div>
// //                 </div>

// //                 <Button 
// //                   className="btn-enroll-primary w-100 py-3 mb-3 fw-bold"
// //                   onClick={() => setShowModal(true)}
// //                 >
// //                   Enroll / Book Free Demo
// //                 </Button>

// //                 <div className="text-center">
// //                   <span className="text-muted extra-small">⚡ Limited batch size for personalized reviews</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>

// //       {/* Enrollment & Lead Modal */}
// //       <Modal show={showModal} onHide={closeModal} centered className="dark-theme-modal">
// //         <Modal.Body className="p-4 p-md-5">
// //           {!submitted ? (
// //             <div>
// //               <div className="d-flex justify-content-between align-items-start mb-4">
// //                 <div>
// //                   <h4 className="text-white fw-bold mb-1">Enroll in Course</h4>
// //                   <p className="text-muted small mb-0">Selected: <strong className="text-purple">{course.title}</strong></p>
// //                 </div>
// //                 <button className="btn-close-custom" onClick={closeModal}>✕</button>
// //               </div>

// //               <Form onSubmit={handleEnrollSubmit} className="d-flex flex-column gap-3">
// //                 <Form.Group>
// //                   <Form.Label className="text-light small">Full Name</Form.Label>
// //                   <Form.Control
// //                     type="text"
// //                     name="name"
// //                     placeholder="Enter your name"
// //                     required
// //                     value={formData.name}
// //                     onChange={handleInputChange}
// //                     className="custom-input"
// //                   />
// //                 </Form.Group>

// //                 <Row className="g-2">
// //                   <Col md={6}>
// //                     <Form.Group>
// //                       <Form.Label className="text-light small">Email Address</Form.Label>
// //                       <Form.Control
// //                         type="email"
// //                         name="email"
// //                         placeholder="you@email.com"
// //                         required
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         className="custom-input"
// //                       />
// //                     </Form.Group>
// //                   </Col>
// //                   <Col md={6}>
// //                     <Form.Group>
// //                       <Form.Label className="text-light small">WhatsApp Number</Form.Label>
// //                       <Form.Control
// //                         type="tel"
// //                         name="phone"
// //                         placeholder="+91 98765 43210"
// //                         required
// //                         value={formData.phone}
// //                         onChange={handleInputChange}
// //                         className="custom-input"
// //                       />
// //                     </Form.Group>
// //                   </Col>
// //                 </Row>

// //                 <Form.Group>
// //                   <Form.Label className="text-light small">Preferred Batch Time</Form.Label>
// //                   <Form.Select
// //                     name="batchPreference"
// //                     value={formData.batchPreference}
// //                     onChange={handleInputChange}
// //                     className="custom-input"
// //                   >
// //                     <option value="Weekday Live (Morning)">Weekday Morning (Live)</option>
// //                     <option value="Weekday Live (Evening)">Weekday Evening (Live)</option>
// //                     <option value="Weekend Live">Weekend Dedicated Batch</option>
// //                   </Form.Select>
// //                 </Form.Group>

// //                 <Button type="submit" className="btn-enroll-primary w-100 mt-2 py-3">
// //                   Confirm & Submit
// //                 </Button>
// //               </Form>
// //             </div>
// //           ) : (
// //             <div className="text-center py-4">
// //               <div className="success-icon mb-3">🎉</div>
// //               <h4 className="text-white fw-bold mb-2">Registration Received!</h4>
// //               <p className="text-muted small mb-4">
// //                 Thank you <strong>{formData.name}</strong>. Our mentorship coordinator will reach out to you on <strong>{formData.phone}</strong> with batch timings and onboarding details.
// //               </p>
// //               <Button className="btn-secondary-custom w-100" onClick={closeModal}>
// //                 Done
// //               </Button>
// //             </div>
// //           )}
// //         </Modal.Body>
// //       </Modal>
// //     </section>
// //   );
// // };

// // export default CourseDetail;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import coursesData from '../../data/coursesData';

// const CourseDetail = ({ courseId, course: propCourse, onClose }) => {
//   // Extract course either via direct prop or URL/ID match
//   let course = propCourse;
//   if (!course && courseId) {
//     course = coursesData.find((c) => c.id === courseId);
//   }
//   if (!course) {
//     // URL fallback if courseId isn't directly passed
//     const pathId = window.location.pathname.split('/').pop();
//     course = coursesData.find((c) => c.id === pathId) || coursesData[0];
//   }

//   const [openIndex, setOpenIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   stateLocation: 'Gujarat', // State add kiya
//   batchPreference: 'Weekend Live',
// });

//   const handleBack = () => {
//     if (onClose) {
//       onClose();
//     } else {
//       window.history.pushState({}, '', '/');
//       window.dispatchEvent(new PopStateEvent('popstate'));
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEnrollSubmit = (e) => {
//     e.preventDefault();
//     console.log('Enrollment Request:', { courseTitle: course.title, ...formData });
//     setSubmitted(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSubmitted(false);
//   };

//   return (
//     <section className="course-detail-wrapper py-5 min-vh-100">
//       <Container>
//         {/* Top Back Navigation */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <Button 
//             variant="link" 
//             className="btn-back-link text-decoration-none p-0" 
//             onClick={handleBack}
//           >
//             ← Back to All Courses
//           </Button>
//           <span className="badge-category">{course.category}</span>
//         </div>

//         <Row className="g-4">
//           {/* Main Info & Syllabus */}
//           <Col lg={8}>
//             {/* Overview Card */}
//             <div className="glass-card p-4 p-md-5 mb-4">
//               <div className="d-flex align-items-center gap-3 mb-3">
//                 <div className="icon-container">
//                   <img src={course.image} alt={course.title} width="48" height="48" />
//                 </div>
//                 <div>
//                   <span className="badge-highlight">{course.badge}</span>
//                   <h1 className="course-main-title text-white mt-1 h3 fw-bold">{course.title}</h1>
//                 </div>
//               </div>

//               <p className="course-desc-text text-muted mb-4">{course.about || course.description}</p>

//               {course.highlights && (
//                 <>
//                   <hr className="divider" />
//                   <h5 className="text-white fw-bold mb-3">Key Highlights</h5>
//                   <div className="highlights-grid">
//                     {course.highlights.map((item, idx) => (
//                       <div key={idx} className="highlight-pill">
//                         <span className="check-icon">✓</span>
//                         <span className="text-light">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Curriculum Accordion */}
//             {course.syllabus && (
//               <div className="glass-card p-4 p-md-5">
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <h4 className="text-white fw-bold mb-0">Course Curriculum</h4>
//                   <span className="text-muted small">{course.syllabus.length} Modules</span>
//                 </div>

//                 <div className="custom-accordion">
//                   {course.syllabus.map((section, idx) => {
//                     const isOpen = openIndex === idx;
//                     return (
//                       <div key={idx} className="accordion-item-custom mb-3">
//                         <button
//                           type="button"
//                           className={`accordion-trigger d-flex w-100 justify-content-between align-items-center p-3 rounded-3 border-0 ${isOpen ? 'active' : ''}`}
//                           onClick={() => setOpenIndex(isOpen ? -1 : idx)}
//                         >
//                           <div className="d-flex align-items-center gap-2">
//                             <span className="module-number">{String(idx + 1).padStart(2, '0')}</span>
//                             <span className="fw-semibold text-white">{section.title}</span>
//                           </div>
//                           <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
//                         </button>

//                         {isOpen && (
//                           <div className="accordion-content p-3 pt-2">
//                             <ul className="syllabus-list mb-0">
//                               {section.items.map((item, j) => (
//                                 <li key={j}>{item}</li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </Col>

//           {/* Sticky Snapshot & CTA Card */}
//           <Col lg={4}>
//             <div className="sticky-sidebar">
//               <div className="enroll-card p-4">
//                 <h4 className="text-white fw-bold mb-3">Course Snapshot</h4>

//                 <div className="meta-list mb-4">
//                   <div className="meta-item">
//                     <span className="meta-label">Duration</span>
//                     <span className="meta-val">{course.duration}</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Format</span>
//                     <span className="meta-val">Live Cohort (1:3 Mentorship)</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Level</span>
//                     <span className="meta-val">Beginner → Advanced</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Certificate</span>
//                     <span className="meta-val text-success">Included</span>
//                   </div>
//                 </div>

//                 <Button 
//                   className="btn-enroll-primary w-100 py-3 mb-3 fw-bold"
//                   onClick={() => setShowModal(true)}
//                 >
//                   Enroll / Book Free Demo
//                 </Button>

//                 <div className="text-center">
//                   <span className="text-muted extra-small">⚡ Limited seats available per cohort</span>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Enrollment Modal */}
// <Modal show={showModal} onHide={closeModal} centered className="dark-theme-modal">
//   <Modal.Body className="p-4 p-md-5">
//     {!submitted ? (
//       <div>
//         <div className="d-flex justify-content-between align-items-start mb-4">
//           <div>
//             <h4 className="text-white fw-bold mb-1">Enroll in Course</h4>
//             <p className="text-muted small mb-0">Selected: <strong className="text-purple">{course.title}</strong></p>
//           </div>
//           <button className="btn-close-custom" onClick={closeModal}>✕</button>
//         </div>

//         <Form onSubmit={handleEnrollSubmit} className="d-flex flex-column gap-3">
//           <Form.Group>
//             <Form.Label className="text-light small">Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               required
//               value={formData.name}
//               onChange={handleInputChange}
//               className="custom-input"
//             />
//           </Form.Group>

//           <Row className="g-2">
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label className="text-light small">Email Address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="you@email.com"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="custom-input"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label className="text-light small">WhatsApp Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="phone"
//                   placeholder="+91 98765 43210"
//                   required
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="custom-input"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="g-2">
//             {/* State / Region Dropdown */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label className="text-light small">State / Region</Form.Label>
//                 <Form.Select
//                   name="stateLocation"
//                   value={formData.stateLocation}
//                   onChange={handleInputChange}
//                   className="custom-input"
//                   required
//                 >
//                   <option value="" disabled>Select State / Location</option>
//                   {/* International */}
//                   <option value="Outside India">🌍 Outside India (International)</option>
//                   {/* Indian States & UTs */}
//                   <option value="Andhra Pradesh">Andhra Pradesh</option>
//                   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                   <option value="Assam">Assam</option>
//                   <option value="Bihar">Bihar</option>
//                   <option value="Chhattisgarh">Chhattisgarh</option>
//                   <option value="Goa">Goa</option>
//                   <option value="Gujarat">Gujarat</option>
//                   <option value="Haryana">Haryana</option>
//                   <option value="Himachal Pradesh">Himachal Pradesh</option>
//                   <option value="Jharkhand">Jharkhand</option>
//                   <option value="Karnataka">Karnataka</option>
//                   <option value="Kerala">Kerala</option>
//                   <option value="Madhya Pradesh">Madhya Pradesh</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Manipur">Manipur</option>
//                   <option value="Meghalaya">Meghalaya</option>
//                   <option value="Mizoram">Mizoram</option>
//                   <option value="Nagaland">Nagaland</option>
//                   <option value="Odisha">Odisha</option>
//                   <option value="Punjab">Punjab</option>
//                   <option value="Rajasthan">Rajasthan</option>
//                   <option value="Sikkim">Sikkim</option>
//                   <option value="Tamil Nadu">Tamil Nadu</option>
//                   <option value="Telangana">Telangana</option>
//                   <option value="Tripura">Tripura</option>
//                   <option value="Uttar Pradesh">Uttar Pradesh</option>
//                   <option value="Uttarakhand">Uttarakhand</option>
//                   <option value="West Bengal">West Bengal</option>
                  
//                   {/* Union Territories */}
//                   <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//                   <option value="Chandigarh">Chandigarh</option>
//                   <option value="Dadra & Nagar Haveli and Daman & Diu">Dadra & Nagar Haveli and Daman & Diu</option>
//                   <option value="Delhi">Delhi (NCR)</option>
//                   <option value="Jammu & Kashmir">Jammu & Kashmir</option>
//                   <option value="Ladakh">Ladakh</option>
//                   <option value="Lakshadweep">Lakshadweep</option>
//                   <option value="Puducherry">Puducherry</option>
                  
//                  </Form.Select>
//               </Form.Group>
//             </Col>

//             {/* Batch Preference Dropdown */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label className="text-light small">Preferred Batch</Form.Label>
//                 <Form.Select
//                   name="batchPreference"
//                   value={formData.batchPreference}
//                   onChange={handleInputChange}
//                   className="custom-input"
//                 >
//                   <option value="Weekday Live (Morning)">Weekday Morning (Live)</option>
//                   <option value="Weekday Live (Evening)">Weekday Evening (Live)</option>
//                   <option value="Weekend Live">Weekend Dedicated Batch</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>

//           <Button type="submit" className="btn-enroll-primary w-100 mt-2 py-3">
//             Confirm & Register
//           </Button>
//         </Form>
//       </div>
//     ) : (
//       <div className="text-center py-4">
//         <div className="success-icon mb-3">🎉</div>
//         <h4 className="text-white fw-bold mb-2">Registration Received!</h4>
//         <p className="text-muted small mb-4">
//           Thank you <strong>{formData.name}</strong> ({formData.stateLocation}). Our team will connect with you on <strong>{formData.phone}</strong> for batch onboarding.
//         </p>
//         <Button className="btn-secondary-custom w-100" onClick={closeModal}>
//           Done
//         </Button>
//       </div>
//     )}
//   </Modal.Body>
// </Modal>
//     </section>
//   );
// };

// export default CourseDetail;

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import coursesData from '../../data/coursesData';

const CourseDetail = ({ courseId, onClose }) => {
  const pathId = window.location.pathname.split('/').pop();
  const course = coursesData.find((c) => c.id === (courseId || pathId)) || coursesData[0];

  const [openIndex, setOpenIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pricingPlan, setPricingPlan] = useState('full'); // 'full' or 'emi'

  // Balanced High-Conversion Form (Minesh's suggestions integrated)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stateLocation: 'Gujarat',
    mode: 'Online Live',
    preferredTime: 'Evening (8 PM - 10 PM)',
    qualification: 'Graduation / B.Tech / BCA',
    currentOccupation: 'Student / Fresher',
    paymentPlan: 'One-Time Payment'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    console.log('Final Student Enrollment:', {
      course: course.title,
      selectedPlan: pricingPlan,
      ...formData
    });
    setSubmitted(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
  };

  return (
    <section className="course-detail-wrapper py-5 min-vh-100">
      <Container>
        {/* Back Link */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button 
            variant="link" 
            className="btn-back-link text-decoration-none p-0" 
            onClick={() => {
              if (onClose) onClose();
              else {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
          >
            ← Back to All Courses
          </Button>
          <span className="badge-category">{course.category}</span>
        </div>

        <Row className="g-4">
          {/* Main Info & Syllabus */}
          <Col lg={8}>
            {/* Overview Card */}
            <div className="glass-card p-4 p-md-5 mb-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="icon-container">
                  <img src={course.image} alt={course.title} width="48" height="48" />
                </div>
                <div>
                  <span className="badge-highlight">{course.badge}</span>
                  <h1 className="course-main-title text-white mt-1 h3 fw-bold">{course.title}</h1>
                </div>
              </div>

              <p className="course-desc-text text-muted mb-4">{course.about || course.description}</p>

              {course.highlights && (
                <>
                  <hr className="divider" />
                  <h5 className="text-white fw-bold mb-3">Key Highlights</h5>
                  <div className="highlights-grid">
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="highlight-pill">
                        <span className="check-icon">✓</span>
                        <span className="text-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Curriculum Accordion */}
            {course.syllabus && (
              <div className="glass-card p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="text-white fw-bold mb-0">Course Curriculum</h4>
                  <span className="text-muted small">{course.syllabus.length} Modules</span>
                </div>

                <div className="custom-accordion">
                  {course.syllabus.map((section, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div key={idx} className="accordion-item-custom mb-3">
                        <button
                          type="button"
                          className={`accordion-trigger d-flex w-100 justify-content-between align-items-center p-3 rounded-3 border-0 ${isOpen ? 'active' : ''}`}
                          onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span className="module-number">{String(idx + 1).padStart(2, '0')}</span>
                            <span className="fw-semibold text-white">{section.title}</span>
                          </div>
                          <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                        </button>

                        {isOpen && (
                          <div className="accordion-content p-3 pt-2">
                            <ul className="syllabus-list mb-0">
                              {section.items.map((item, j) => (
                                <li key={j}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </Col>

          {/* Sticky Snapshot & Pricing Card */}
          <Col lg={4}>
            <div className="sticky-sidebar">
              <div className="enroll-card p-4">
                <h4 className="text-white fw-bold mb-3">Course Plan & Pricing</h4>

                {/* Graphy-Style Pricing Toggle */}
                <div className="d-flex gap-2 mb-4">
                  <div 
                    className={`price-option-card flex-fill p-3 rounded-3 ${pricingPlan === 'full' ? 'active' : ''}`}
                    onClick={() => {
                      setPricingPlan('full');
                      setFormData({...formData, paymentPlan: 'One-Time Payment'});
                    }}
                    role="button"
                  >
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <input type="radio" checked={pricingPlan === 'full'} readOnly />
                      <span className="small text-white fw-semibold">One-Time</span>
                    </div>
                    <div className="h5 text-white fw-bold mb-0">₹18,000</div>
                    <span className="extra-small text-muted text-decoration-line-through">₹24,000</span>
                  </div>

                  <div 
                    className={`price-option-card flex-fill p-3 rounded-3 ${pricingPlan === 'emi' ? 'active' : ''}`}
                    onClick={() => {
                      setPricingPlan('emi');
                      setFormData({...formData, paymentPlan: '2-Month EMI'});
                    }}
                    role="button"
                  >
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <input type="radio" checked={pricingPlan === 'emi'} readOnly />
                      <span className="small text-white fw-semibold">2-Month EMI</span>
                    </div>
                    <div className="h5 text-white fw-bold mb-0">₹9,000<span className="extra-small font-normal">/mo</span></div>
                    <span className="extra-small text-purple">0% Extra Interest</span>
                  </div>
                </div>

                <div className="meta-list mb-4">
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-val">{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Batch Type</span>
                    <span className="meta-val">1:3 Small Group Live</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Languages</span>
                    <span className="meta-val">English / Hindi / Gujarati</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Next Cohort</span>
                    <span className="meta-val text-warning">Starting Next Monday</span>
                  </div>
                </div>

                <Button 
                  className="btn-enroll-primary w-100 py-3 mb-3 fw-bold"
                  onClick={() => setShowModal(true)}
                >
                  Enroll Now ({pricingPlan === 'full' ? '₹18,000' : '₹9,000/mo'})
                </Button>

                <div className="text-center">
                  <span className="text-muted extra-small">🔒 100% Refund Guarantee after 1st Demo Session</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Professional Enrollment Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered className="dark-theme-modal">
        <Modal.Body className="p-4 p-md-5">
          {!submitted ? (
            <div>
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h4 className="text-white fw-bold mb-1">Student Enrollment Form</h4>
                  <p className="text-muted small mb-0">Course: <strong className="text-purple">{course.title}</strong> • Plan: <strong className="text-white">{formData.paymentPlan}</strong></p>
                </div>
                <button className="btn-close-custom" onClick={closeModal}>✕</button>
              </div>

              <Form onSubmit={handleEnrollSubmit} className="d-flex flex-column gap-3">
                {/* 1. Basic Student Info */}
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light small">Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="e.g. Vikas Patel"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light small">WhatsApp / Mobile Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light small">Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light small">State / City *</Form.Label>
                      <Form.Select
                        name="stateLocation"
                        value={formData.stateLocation}
                        onChange={handleInputChange}
                        className="custom-input"
                      >
                        <option value="Gujarat">Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Delhi">Delhi NCR</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Other Indian State">Other Indian State</option>
                        <option value="Outside India">🌍 Outside India</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* 2. Course Preferences (Minesh Suggestions) */}
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-light small">Learning Mode</Form.Label>
                      <Form.Select
                        name="mode"
                        value={formData.mode}
                        onChange={handleInputChange}
                        className="custom-input"
                      >
                        <option value="Online Live">Online Live (Google Meet/Zoom)</option>
                        <option value="Offline Classroom">Offline Classroom</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-light small">Preferred Batch Timing</Form.Label>
                      <Form.Select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="custom-input"
                      >
                        <option value="Morning (8 AM - 10 AM)">Morning (8 AM - 10 AM)</option>
                        <option value="Evening (7 PM - 9 PM)">Evening (7 PM - 9 PM)</option>
                        <option value="Weekend Dedicated">Weekend Only Batch</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="text-light small">Highest Qualification</Form.Label>
                      <Form.Select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="custom-input"
                      >
                        <option value="Pursuing Degree / College">Pursuing Degree / College</option>
                        <option value="B.Tech / BCA / IT Graduate">B.Tech / BCA / IT Graduate</option>
                        <option value="Non-IT Graduate">Non-IT Graduate</option>
                        <option value="Working Professional">Working Professional</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit" className="btn-enroll-primary w-100 mt-3 py-3">
                  Proceed to Enroll / Schedule Onboarding
                </Button>
              </Form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="success-icon mb-3">🎉</div>
              <h4 className="text-white fw-bold mb-2">Enrollment Submitted!</h4>
              <p className="text-muted small mb-4">
                Thank you <strong>{formData.name}</strong>. We have sent the course roadmap and batch invite to <strong>{formData.phone}</strong>.
              </p>
              <Button className="btn-secondary-custom w-100" onClick={closeModal}>
                Done
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CourseDetail;