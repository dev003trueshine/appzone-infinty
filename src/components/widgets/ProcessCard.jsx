import React from 'react';

export default function ProcessCard({ index, title, description, isLast }) {
  // Index 0 -> "01", Index 1 -> "02"
  const stepNumber = String(index + 1).padStart(2, '0');

  // Steps unique icons (Lucide / Standard SVG)
  const icons = [
    <path key="1" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />,
    <path key="2" d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586" />,
    <path key="3" d="M16 18l6-6-6-6 M8 6l-6 6 6 6" />,
    <path key="4" d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />,
    <path key="5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  ];

  return (
    <div className="process-card-wrapper position-relative w-100 h-100">
      <div className="process-card h-100 p-4">
        {/* Step Badge (Top Right) */}
        <div className="step-badge">{stepNumber}</div>

        {/* Glowing Icon Box */}
        <div className="process-icon-box mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icons[index % icons.length]}
          </svg>
        </div>

        {/* Content */}
        <h5 className="process-title mb-2">{title}</h5>
        <p className="process-desc mb-0">{description}</p>
      </div>

      {/* Right Connector Arrow (Desktop Desktop only, for non-last items) */}
      {!isLast && (
        <div className="process-arrow d-none d-lg-flex">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14 M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}