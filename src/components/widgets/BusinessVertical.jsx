import React from 'react';

export default function BusinessVertical({ icon, title }) {
  return (
    <div className="business-vertical-card h-100 text-center">
      <div className="h-150">
        <div class="position-relative">
          <img src={icon} alt={title} className="business-vertical-img" height="80px" width="80px" />
        </div>
        <div className="mt-n1">
          <div className="glass">
            <h6 className="py-2 mb-0 text-nowrap">{title}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
