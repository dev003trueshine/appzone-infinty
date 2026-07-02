import React from 'react';

export default function ChooseCard({ title, description, svgPath }) {
  return (
    <div className="choose-card">
      <div className="choose-content d-flex flex-wrap flex-md-nowrap gap-3">
        <div className="mb-4 choose-icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="90"
            height="90"
            className="choose-icon"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: svgPath }}
          />
        </div>
        <div>
          <h5 className="choose-title">{title}</h5>
          <p className="choose-desc mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
