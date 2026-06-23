import React from 'react';

export default function ProcessCard({ title, description }) {
  return (
    <div className="process-card h-100">
      <div className="card-body">
        <h5>{title}</h5>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}
