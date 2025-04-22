// import React from "react";
// import DashboardLayout from "../../Layout/DashboardLayout";
// import { Link } from "react-router-dom";

// import {
//   faPlus,
//   faEdit,
//   faEye,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";

// const MyCourses = () => {
//   return (
//     <DashboardLayout>
//       <div className="bg-gray-50 font-sans min-h-screen flex">
//         {/* Sidebar space reserved */}
//         <div className="flex-1">
//           <main className="p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
//               <button className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90">
//                 <i className="fas fa-plus"></i>
//                 <Link to="/createnewpage">
//                   <span>Create New Course</span>
//                 </Link>
//               </button>
//             </div>

//             <div className="flex space-x-4 mb-6">
//               <select className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-gray-700">
//                 <option>All Types</option>
//                 <option>Video</option>
//                 <option>Live</option>
//                 <option>Hybrid</option>
//               </select>
//               <select className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-gray-700">
//                 <option>All Status</option>
//                 <option>Published</option>
//                 <option>Draft</option>
//               </select>
//             </div>

//             <div className="bg-white rounded-lg shadow">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200">
//                     <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
//                       Course Title
//                     </th>
//                     <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
//                       Mode
//                     </th>
//                     <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
//                       Enrollment
//                     </th>
//                     <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
//                       Status
//                     </th>
//                     <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
//                       Last Updated
//                     </th>
//                     <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-200">
//                     <td className="px-6 py-4">
//                       <div className="flex items-center">
//                         <img
//                           src="https://creatie.ai/ai/api/search-image?query=A modern web development interface showing code editor and browser preview, with clean design elements&width=40&height=40&orientation=squarish&flag=2817f38f-bb86-4538-ae0e-53702b44bb41"
//                           className="w-10 h-10 rounded-lg mr-3"
//                         />
//                         <span className="font-medium text-gray-900">
//                           Advanced Web Development
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                         Video
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">234 students</td>
//                     <td className="px-6 py-4">
//                       <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                         Published
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">2024-02-15</td>
//                     <td className="px-6 py-4">
//                       <div className="flex justify-end space-x-2">
//                         <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
//                           <i className="fas fa-edit"></i>
//                         </button>
//                         <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
//                           <i className="fas fa-eye"></i>
//                         </button>
//                         <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
//                           <i className="fas fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>

//                   <tr className="border-b border-gray-200">
//                     <td className="px-6 py-4">
//                       <div className="flex items-center">
//                         <img
//                           src="https://creatie.ai/ai/api/search-image?query=A creative UI/UX design workspace with wireframes and design tools visible&width=40&height=40&orientation=squarish&flag=267bb08f-87e9-463a-9e07-334ef6971130"
//                           className="w-10 h-10 rounded-lg mr-3"
//                         />
//                         <span className="font-medium text-gray-900">
//                           UI/UX Design Fundamentals
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
//                         Hybrid
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">156 students</td>
//                     <td className="px-6 py-4">
//                       <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                         Published
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">2024-02-10</td>
//                     <td className="px-6 py-4">
//                       <div className="flex justify-end space-x-2">
//                         <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
//                           <i className="fas fa-edit"></i>
//                         </button>
//                         <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
//                           <i className="fas fa-eye"></i>
//                         </button>
//                         <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
//                           <i className="fas fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>

//                   <tr>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center">
//                         <img
//                           src="https://creatie.ai/ai/api/search-image?query=A mobile app development workspace with React Native code and mobile device simulators&width=40&height=40&orientation=squarish&flag=788483eb-16b4-4e23-8ae0-96730f6b583a"
//                           className="w-10 h-10 rounded-lg mr-3"
//                         />
//                         <span className="font-medium text-gray-900">
//                           React Native Masterclass
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
//                         Live
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">89 students</td>
//                     <td className="px-6 py-4">
//                       <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
//                         Draft
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">2024-02-08</td>
//                     <td className="px-6 py-4">
//                       <div className="flex justify-end space-x-2">
//                         <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
//                           <i className="fas fa-edit"></i>
//                         </button>
//                         <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
//                           <i className="fas fa-eye"></i>
//                         </button>
//                         <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
//                           <i className="fas fa-trash"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </main>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default MyCourses;

import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaEye,
  FaTrash,
  FaUpload,
  FaVideo,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

const MyCourses = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <DashboardLayout>
      <div className="d-flex min-vh-100 bg-light mt-4">
        <div className="flex-grow-1 ms-md-5">
          <main className="px-1">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="h4 fw-bold">My Courses</h1>
              <button
                onClick={handleShow}
                className="d-flex p-2 rounded align-items-center font-semibold
                text-white bg-teal-700"
              >
                {" "}
                <FaPlus className="me-2" /> Create New Course
              </button>
            </div>

            <Row className="g-2 mb-4">
              <Col xs={12} sm={6} md={3}>
                <Form.Select>
                  <option>All Types</option>
                  <option>Video</option>
                  <option>Live</option>
                  <option>Hybrid</option>
                </Form.Select>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Form.Select>
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="bg-white rounded shadow-sm overflow-auto">
              <Table responsive className="mb-0 text-nowrap">
                <thead className="table-light">
                  <tr>
                    <th>Course Title</th>
                    <th>Mode</th>
                    <th>Enrollment</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "Advanced Web Development",
                      mode: "Video",
                      students: "234",
                      status: "Published",
                      date: "2024-02-15",
                      badgeClass: "primary",
                      img:
                        "https://creatie.ai/ai/api/search-image?query=A modern web development interface showing code editor and browser preview, with clean design elements&width=40&height=40&orientation=squarish&flag=2817f38f-bb86-4538-ae0e-53702b44bb41",
                    },
                    {
                      title: "UI/UX Design Fundamentals",
                      mode: "Hybrid",
                      students: "156",
                      status: "Published",
                      date: "2024-02-10",
                      badgeClass: "secondary",
                      img:
                        "https://creatie.ai/ai/api/search-image?query=A creative UI/UX design workspace with wireframes and design tools visible&width=40&height=40&orientation=squarish&flag=267bb08f-87e9-463a-9e07-334ef6971130",
                    },
                    {
                      title: "React Native Masterclass",
                      mode: "Live",
                      students: "89",
                      status: "Draft",
                      date: "2024-02-08",
                      badgeClass: "warning",
                      img:
                        "https://creatie.ai/ai/api/search-image?query=A mobile app development workspace with React Native code and mobile device simulators&width=40&height=40&orientation=squarish&flag=788483eb-16b4-4e23-8ae0-96730f6b583a",
                    },
                  ].map((course, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={course.img}
                            alt="course"
                            className="me-3 rounded"
                            width="40"
                            height="40"
                          />
                          <Link
                            to={`/courses/${idx}`}
                            className="fw-medium text-dark text-decoration-none"
                          >
                            {course.title}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${course.badgeClass}`}>
                          {course.mode}
                        </span>
                      </td>
                      <td>{course.students} students</td>
                      <td>
                        <span
                          className={`badge bg-${
                            course.status === "Published"
                              ? "success"
                              : "secondary"
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td>{course.date}</td>
                      <td className="text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <Button variant="outline-dark" size="sm">
                            <FaEdit />
                          </Button>
                          <Button variant="outline-secondary" size="sm">
                            <FaEye />
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            <FaTrash />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </main>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col>
              <Button variant="outline-secondary">All Types</Button>
            </Col>
            <Col>
              <Button variant="outline-secondary">All Status</Button>
            </Col>
          </Row>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course Title</Form.Label>
              <Form.Control type="text" placeholder="Enter course title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter course description"
              />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Level</Form.Label>
                <Form.Select>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Course Type</Form.Label>
                <Form.Select>
                  <option>Video Course</option>
                  <option>Live Course</option>
                  <option>Hybrid</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Price ($)</Form.Label>
                <Form.Control type="text" placeholder="Enter course price" />
              </Col>
            </Row>

            <Form.Group className="mb-4 border border-dashed rounded p-4 text-center">
              <FaUpload size={24} className="mb-2" />
              <p className="mb-0">
                Drag and drop your image here or{" "}
                <span className="text-primary">browse</span>
              </p>
            </Form.Group>

            <Form.Group className="mb-4 border border-dashed rounded p-4 text-center">
              <FaVideo size={24} className="mb-2" />
              <p className="mb-0">
                Upload your course intro video or{" "}
                <span className="text-primary">browse</span>
              </p>
            </Form.Group>

            <div className="border p-3 rounded bg-light">
              <Button variant="outline-dark" className="mb-2 w-100">
                + Add Section
              </Button>
              <div className="bg-white p-3 rounded d-flex justify-content-between align-items-center">
                <strong>Section 1: Introduction</strong>
                <div>
                  <Button variant="link" className="text-success me-2">
                    + Add Lesson
                  </Button>
                  <FaPen
                    className="me-2 text-muted"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrashAlt
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <Button variant="outline-secondary" className="me-2">
                Save as Draft
              </Button>
              <Button variant="success">Publish Course</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </DashboardLayout>
  );
};

export default MyCourses;

