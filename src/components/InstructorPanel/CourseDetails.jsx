import React from "react";
import { Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { FaArrowLeft, FaPlay, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

const CourseDetails = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Container fluid className="bg-light min-vh-100 p-4">
        <div className="flex justify-between items-center">
          <h3 className="fw-bold">Course Details</h3>
          <button  className="d-flex p-2 rounded align-items-center font-semibold  text-white bg-teal-700" onClick={() => navigate(-1)}>
            <FaArrowLeft className="me-1" /> Back to Courses
          </button>
        </div>

        <div className="bg-white rounded p-4 shadow-sm mt-3">
          <Row className="align-items-center mb-3">
            <Col md="auto">
              <img
                src="https://creatie.ai/ai/api/search-image?query=A modern web development interface showing code editor and browser preview..."
                alt="course"
                className="rounded"
                width={100}
                height={100}
              />
            </Col>
            <Col>
              <h5 className="mb-1 fw-bold">Advanced Web Development</h5>
              <div className="text-muted small mb-2">
                <span className="badge bg-primary me-2">Video Course</span>
                234 Enrolled • 32 Hours
              </div>
              <p className="text-muted">
                Master modern web development with this comprehensive course
                covering HTML5, CSS3, JavaScript, React, and more. Perfect for
                intermediate developers looking to advance their skills.
              </p>
              <div className="d-flex gap-2">
                <button className="bg-teal-700 px-3 py-2 rounded text-white">
                  <FaPlay className="me-1" />
                  Continue Learning
                </button>
                <Button variant="outline-secondary">
                  <FaDownload className="me-1" />
                  Download Materials
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="text-center my-4">
            <Col>
              <div className="bg-light rounded p-3">
                <h5 className="fw-bold mb-1">Progress</h5>
                <div>65%</div>
              </div>
            </Col>
            <Col>
              <div className="bg-light rounded p-3">
                <h5 className="fw-bold mb-1">Lessons</h5>
                <div>24/36</div>
              </div>
            </Col>
            <Col>
              <div className="bg-light rounded p-3">
                <h5 className="fw-bold mb-1">Time Spent</h5>
                <div>18h 45m</div>
              </div>
            </Col>
            <Col>
              <div className="bg-light rounded p-3">
                <h5 className="fw-bold mb-1">Certificate</h5>
                <div className="text-success fw-bold">Available</div>
              </div>
            </Col>
          </Row>

          <h5 className="fw-bold mt-4">Course Content</h5>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                1. Introduction to Modern Web Development
              </Accordion.Header>
              <Accordion.Body>3 lessons • 45m</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2. Advanced HTML5 & CSS3 Techniques
              </Accordion.Header>
              <Accordion.Body>5 lessons • 1h 30m</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. JavaScript ES6+ Features</Accordion.Header>
              <Accordion.Body>6 lessons • 2h 15m</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default CourseDetails;


