import React from 'react';

export default function VisionCard({ icon, title, description }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        {icon && (
          <div className="mb-4">
            {typeof icon === 'string' ? <img src={icon} alt={title} className="img-fluid" /> : icon}
          </div>
        )}
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
}
