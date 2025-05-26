// CertificateGenerator.jsx
import React, { useRef } from "react";
import Certificate from "./Certificate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

const CertificateGenerator = ({ studentName, courseTitle }) => {
  const certRef = useRef();

  const downloadCertificate = async () => {
    const element = certRef.current;
    // 1) Render to canvas
    const canvas = await html2canvas(element, {
      scale: 2,           // higher resolution
      useCORS: true,      // if you have external images/logos
    });
    const imgData = canvas.toDataURL("image/png");

    // 2) Create PDF
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    // 3) Save
    pdf.save(`${studentName}-certificate.pdf`);
  };

  return (
    <div>
      {/* Invisible on-screen render */}
      <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        <Certificate
          ref={certRef}
          studentName={studentName}
          courseTitle={courseTitle}
          date={new Date().toLocaleDateString()}
        />
      </div>

      {/* Button user clicks */}
      <button 
     className="p-2 rounded text-gray-600 hover:bg-gray-100"
      onClick={downloadCertificate}>
         <FaDownload />
      </button>
    </div>
  );
};

export default CertificateGenerator;
