import { useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const CourseSyllabusContent = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // subtitle_id
  const [showContentModal, setShowContentModal] = useState(false);
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({
    name: "",
    description: "",
    image: null, // file will be stored here
    subTitle_id: id,
  });
  const role = localStorage.getItem("role");

  // ✅ Fetch all contents for the subtitle_id
  const fetchContents = async () => {
    try {
      const res = await axiosInstance.get(`/course-syllabus-content?subTitle_id=${id}`);
      setContents(res?.data?.data || []);
    } catch (err) {
      console.error("Error fetching contents:", err);
      setContents([]);
    }
  };

  // ✅ Add new content with FormData
  const handleAddContent = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newContent.name);
      formData.append("description", newContent.description);
      formData.append("subTitle_id", newContent.subTitle_id);
      if (newContent.image) {
        formData.append("image", newContent.image); // attach the file
      }

      await axiosInstance.post(`/course-syllabus-content`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowContentModal(false);
      setNewContent({ name: "", description: "", image: null, subTitle_id: id });
      fetchContents();
    } catch (err) {
      console.error("Error adding content:", err);
    }
  };

  // ✅ Delete content
  const handleDelete = async (contentId) => {
    try {
      await axiosInstance.delete(`/course-syllabus-content/${contentId}`);
      fetchContents();
    } catch (err) {
      console.error("Error deleting content:", err);
    }
  };

  // ✅ Fetch data on load
  useEffect(() => {
    if (id) fetchContents();
  }, [id]);

  return (
    <DashboardLayout>
      <div className="container mt-5">
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <h2 className="mb-3">Course Syllabus Content</h2>

          <div className="d-flex gap-2 flex-wrap">
            {role !== "student" && (
              <button
                className="px-4 py-2 rounded font-semibold text-white bg-teal-700"
                onClick={() => setShowContentModal(true)}
              >
                + Add Content
              </button>
            )}
            <button
              className="px-4 py-2 rounded font-semibold text-white bg-teal-700"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft className="me-2" /> Back
            </button>
          </div>
        </div>

        {/* Content Table */}
        {contents.length > 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-3">
            <Table bordered hover responsive className="mb-0">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th style={{ width: "10%" }}>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  {role !== "student" && <th style={{ width: "15%" }}>Action</th>}
                </tr>
              </thead>
              <tbody>
                {contents.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{index + 1}</td>
                    <td className="fw-medium">{item?.name || "Untitled"}</td>
                    <td>{item?.description || "No description"}</td>
                    <td>
                      {item?.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "60px", height: "40px", objectFit: "cover" }}
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    {role !== "student" && (
                      <td>
                        <button
                          onClick={() => handleDelete(item?.id)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p className="text-center text-gray-600 font-medium">⚠️ No content found</p>
        )}

        {/* Add Content Modal */}
        <Modal show={showContentModal} onHide={() => setShowContentModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Content</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="contentName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={newContent.name}
                  onChange={(e) => setNewContent({ ...newContent, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contentDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  name="description"
                  value={newContent.description}
                  onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contentImage">
                <Form.Label>Image Upload</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setNewContent({ ...newContent, image: e.target.files[0] })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowContentModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleAddContent}
              disabled={!newContent.name.trim()}
            >
              Add Content
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default CourseSyllabusContent;
