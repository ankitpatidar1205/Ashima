 // CertificateGenerator.jsx
import React, { useRef, useState } from "react";
import Certificate from "./Certificate";
import html2canvas from "html2canvas";
import { FaEye } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const CertificateGenerator = ({ studentName, courseTitle }) => {
  const certRef = useRef();
  const [previewSrc, setPreviewSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const previewCertificate = async () => {
    if (!certRef.current) return;

    // 1) Render to canvas
    const canvas = await html2canvas(certRef.current, {
      scale: 2,
      useCORS: true,
    });

    // 2) Convert to PNG Data URL
    const imgData = canvas.toDataURL("image/png");
    setPreviewSrc(imgData);

    // 3) Open modal
    setShowModal(true);
  };

  return (
    <>
      {/* Off-screen certificate render */}
      <div style={{ position: "absolute", top: -9999, left: -9999 }}>
        <Certificate
          ref={certRef}
          studentName={studentName}
          courseTitle={courseTitle}
          date={new Date().toLocaleDateString()}
        />
      </div>

      {/* Preview button */}
      <button 
      className="p-2 rounded text-gray-600 hover:bg-gray-100"
       onClick={previewCertificate}>
        <FaEye className="me-1" />
        
      </button>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Certificate Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {previewSrc ? (
            <img
              src={previewSrc}
              alt="Certificate Preview"
              style={{ width: "100%", height: "auto", border: "1px solid #ccc" }}
            />
          ) : (
            <p>Loading preview...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CertificateGenerator;
