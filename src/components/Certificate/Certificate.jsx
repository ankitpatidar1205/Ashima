// Certificate.jsx
import React, { forwardRef } from "react";
import "./Certificate.css"; // your styles for borders, fonts, positioning

const Certificate = forwardRef(({ studentName, courseTitle, date }, ref) => (
  <div ref={ref} className="certificate-container">
    <div className="certificate-border">
      <h1 className="cert-title">Certificate of Completion</h1>
      <p className="cert-text">
        This certifies that
      </p>
      <h2 className="cert-name">{studentName}</h2>
      <p className="cert-text">
        has successfully completed the course
      </p>
      <h3 className="cert-course">{courseTitle}</h3>
      <p className="cert-date">{date}</p>
      <div className="cert-footer">
        <span>Instructor Signature</span>
      </div>
    </div>
  </div>
));

export default Certificate;
