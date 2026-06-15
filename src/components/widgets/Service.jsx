import React from 'react';
import pythonIcon from '../../assets/images/service/Python-Programming.png';

export default function ServiceCard() {
  return (
    <div className="service-card">
      <div className="service-content">
        <h5 className="service-title">Python Programming</h5>
        <p className="service-desc">
          Enhance your projects with our expert Python programming services for efficient and scalable solutions.
        </p>
        <a href="#!" className="btn btn-link p-0 service-link">
          Learn More
        </a>
        <div className="mt-4">
          <img src={pythonIcon} alt="Python Programming" className="service-icon" />
        </div>
      </div>
    </div>
  );
}
