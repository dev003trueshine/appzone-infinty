import React, { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('requirements');

  return (
    <main className="contact-page">
      <section className="Section-spacing contact-page__hero">
        <div className="container">
          <h2 className="section-title">Let's Build Something Intelligent Together</h2>
          <p className="contact-page__subtitle">
            Choose the best way to connect with our team. Share your requirements or book a call, and we’ll guide you through the next steps.
          </p>
        </div>
      </section>

      <section className="Section-spacing">
        <div className="container">
          <div className="contact-tabs">
            <div className="contact-tabs__nav">
              <button
                type="button"
                className={`contact-tab ${activeTab === 'requirements' ? 'active' : ''}`}
                onClick={() => setActiveTab('requirements')}
              >
                Share Your Requirements
              </button>
              <button
                type="button"
                className={`contact-tab ${activeTab === 'call' ? 'active' : ''}`}
                onClick={() => setActiveTab('call')}
              >
                Book a Call
              </button>
            </div>

            <div className={`contact-tabs__panel ${activeTab === 'requirements' ? 'active' : ''}`}>
              <div className="contact-card">
                <form>
                  <div className="mb-3">
                    <label htmlFor="reqName" className="form-label">Name *</label>
                    <input type="text" className="form-control" id="reqName" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reqEmail" className="form-label">Work Email *</label>
                    <input type="email" className="form-control" id="reqEmail" placeholder="Enter your work email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reqCompany" className="form-label">Company Name (optional)</label>
                    <input type="text" className="form-control" id="reqCompany" placeholder="Your Company inc." />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reqDetails" className="form-label">What are you looking to build? Please share your requirement with us *</label>
                    <textarea className="form-control" id="reqDetails" rows="6" placeholder="Describe your Project, goals, and any specific requirements..."></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reqFile" className="form-label">Upload a file (Optional)</label>
                    <input className="form-control" type="file" id="reqFile" />
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <input type="checkbox" className="form-check-input" id="reqRobot" />
                    <label className="form-check-label text-white-50" htmlFor="reqRobot">I’m not a robot</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Requirements</button>
                </form>
              </div>
            </div>

            <div className={`contact-tabs__panel ${activeTab === 'call' ? 'active' : ''}`}>
              <div className="contact-card">
                <form>
                  <div className="mb-3">
                    <label htmlFor="callName" className="form-label">Name *</label>
                    <input type="text" className="form-control" id="callName" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="callEmail" className="form-label">Work Email *</label>
                    <input type="email" className="form-control" id="callEmail" placeholder="Enter your work email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="callCompany" className="form-label">Company Name (optional)</label>
                    <input type="text" className="form-control" id="callCompany" placeholder="Your Company inc." />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="callDate" className="form-label">Preferred Date</label>
                    <input type="date" className="form-control" id="callDate" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="callTime" className="form-label">Preferred Time</label>
                    <input type="time" className="form-control" id="callTime" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="callNotes" className="form-label">Tell us more about the call *</label>
                    <textarea className="form-control" id="callNotes" rows="5" placeholder="Share the agenda and any details you want us to prepare..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Book a Call</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
