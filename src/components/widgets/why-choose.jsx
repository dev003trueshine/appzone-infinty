import React from 'react';
import choose1 from '../../assets/images/choose/choose.png';

export default function chooseCard() {
  return (
    <div className="choose-card">
      <div className="choose-content d-flex flex-wrap flex-md-nowrap gap-3">
        <div className="mb-4">
          <img src={choose1} alt="choose 1" className="choose-icon" />
        </div>
        <div className="">
            <h5 className="choose-title">Python Programming</h5>
            <p className="choose-desc mb-0">
              Enhance your projects with our expert Python programming chooses for efficient and scalable solutions.
            </p>
        </div>
      </div>
    </div>
  );
}
