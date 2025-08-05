import { useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft, FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createContent,
  fetchContentById,
  deleteContent,
} from "../../Redux/slices/contentSlice/contentSlice";
import axiosInstance from "../../utils/axiosInstance";

const CourseContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams("id").id;

  const [showContentModal, setShowContentModal] = useState(false);
  const [data, setData] = useState([]);
  const [newContent, setNewContent] = useState({
    title: "",
    course_syllabus_id: id,
  });
  const role = localStorage.getItem("role");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContent = async () => {
    await dispatch(createContent(newContent)).then(() => {
      dispatch(fetchContentById(id));
    });
    setNewContent({ title: "", course_syllabus_id: id });
    setShowContentModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/courseSyllabus/${id}`);
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching syllabus:", err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleDelete = async (_id) => {
    await dispatch(deleteContent(_id));
    dispatch(fetchContentById(id));
  };

  useEffect(() => {
    dispatch(fetchContentById(id));
  }, [dispatch, id]);

  const state = useSelector((state) => state?.content?.selectedContent?.data);

  return (
    <DashboardLayout>
      <div className="container mt-5">
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <h2 className="mb-3">{data?.module_title || "Course Content"}</h2>

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
        {state?.length > 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-3">
            <Table bordered hover responsive className="mb-0">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th style={{ width: "10%" }}>#</th>
                  <th>Chapter</th>
                  {role !== "student" && <th style={{ width: "15%" }}>Action</th>}
                </tr>
              </thead>
              <tbody>
                {state.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{index + 1}</td>
                    <td className="fw-medium">{item?.title}</td>
                    {role !== "student" && (
                      <td>
                        <button  onClick={() => handleDelete(item?.id)}  className="btn btn-sm btn-outline-danger" >
                          <FaTrash /></button>
                        <Link to={`/CourseSyllabusContent/${item.id}`}> <button  className="btn btn-sm btn-outline-info ms-2">
                          < FaEye /> 
                        </button></Link>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p className="text-center text-gray-600 font-medium">
            ⚠️ No content found
          </p>
        )}

        {/* Add Content Modal */}
        <Modal  show={showContentModal} onHide={() => setShowContentModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Content</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="contentTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={newContent.title}
                  onChange={handleChange} />
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
              disabled={!newContent.title.trim()}
            >
              Add Content
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default CourseContent;
