// import React from 'react';

// export default function ChooseCard({ title, description, svgPath }) {
//   return (
//     <div className="choose-card">
//       <div className="choose-content d-flex flex-wrap flex-md-nowrap gap-3">
//         {/* <div className="mb-4 choose-icon-wrapper">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             width="90"
//             height="90"
//             className="choose-icon"
//             aria-hidden="true"
//             dangerouslySetInnerHTML={{ __html: svgPath }}
//           />
//         </div> */}
//         <div>
//           <h5 className="choose-title">{title}</h5>
//           <p className="choose-desc mb-0">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function ChooseCard({ title, description, svgPath }) {
  return (
    <div className="choose-card w-100 h-100">
      <div className="choose-content d-flex flex-column h-100 p-4">
        {/* SVG Icon Box */}
        {svgPath && (
          <div className="choose-icon-wrapper mb-3 d-flex align-items-center justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
              className="choose-icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: svgPath }}
            />
          </div>
        )}

        <div className="d-flex flex-column flex-grow-1">
          <h5 className="choose-title mb-2">{title}</h5>
          <p className="choose-desc mb-0 flex-grow-1">{description}</p>
        </div>
      </div>
    </div>
  );
}