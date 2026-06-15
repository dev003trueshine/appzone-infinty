import React from 'react';
import icon1 from '../../assets/images/business/healthcare.png';
export default function BusinessVertical() {
  return (
    <div className="business-vertical-card h-100 text-center">
      <div className="d-flex flex-column justify-content-between">
        <div>
          <img src={icon1} alt="Healthcare" className="mb-3" style={{ width: '56px', height: '56px' }} />
          <h5 className="mt-3">Healthcare</h5>
        </div>
      </div>
    </div>
  );
}
