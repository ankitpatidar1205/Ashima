 import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createContent, fetchContentById } from "../../Redux/slices/contentSlice/contentSlice";
import { createQuiz ,fetchQuizById} from "../../Redux/slices/quizSlice/quizSlice";
import { Tabs, Tab } from "react-bootstrap";


const CourseContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams("id").id;
  const [showContentModal, setShowContentModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  const [newContent, setNewContent] = useState({ title: "", description: "", course_syllabus_id: id });
  const [newQuiz, setNewQuiz] = useState({ topic: "", number_questions: 1, id: id });

  const t = localStorage.getItem("title");
  const d = localStorage.getItem("description");
  const role = localStorage.getItem("role");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContent = async() => {
 await dispatch(createContent(newContent)).then(() => {
   dispatch(fetchContentById(id)); 
  });
  setNewContent({ title: "", description: "", course_syllabus_id: id });
  setShowContentModal(false);
};


 const handleAddQuiz = async () => {
 await dispatch(createQuiz(newQuiz)).then(() => {
    dispatch(fetchQuizById(id));  
  });
  setNewQuiz({ topic: "", number_questions: 1, id: id });
  setShowQuizModal(false);
};


  useEffect(() => {
    dispatch(fetchContentById(id));
    dispatch(fetchQuizById(id))
  }, [dispatch, id]);
  const state = useSelector((state) => state?.content?.selectedContent?.data);
   const quiz = useSelector((state) => state?.quiz?.selectedQuiz?.data);

  return (
    <DashboardLayout>
      <div className="container mt-5">
        <div className="mt-5 d-flex justify-content-end gap-3">
          
          {role !== "student" && (
            <>
              <button className="flex p-2 rounded items-center font-semibold text-white bg-teal-700" variant="primary" onClick={() => setShowContentModal(true)}>
                + Add Content
              </button>
              <button  className="flex p-2 rounded items-center font-semibold text-white bg-teal-700" onClick={() => setShowQuizModal(true)}>
                + Add Quiz
              </button>
            </>
          )}

          <button
            className="flex p-2 rounded items-center font-semibold text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>

        <Tabs defaultActiveKey="content" id="content-quiz-tabs" className="my-4">
  {/* 📘 Course Content Tab */}
  <Tab eventKey="content" title="Course Content">
    <h2 className="mb-3">{t}</h2>
    <p className="text-muted">{d}</p>
    <ul>
      {state?.map((item) => (
        <div key={item?.id}>
          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
        </div>
      ))}
    </ul>
  </Tab>

  {/* ❓ Quiz Tab */}
  <Tab eventKey="quiz" title="Quizzes">
    {quiz?.length > 0 ? (
  Object.entries(
    quiz.reduce((acc, item) => {
      if (!acc[item.topic]) acc[item.topic] = [];
      acc[item.topic].push(item);
      return acc;
    }, {})
  ).map(([topic, quizzes]) => (
    <div key={topic} className="mb-5">
      <h4 className="fw-bold border-bottom pb-2 mb-3">Topic : {topic}</h4>
      {quizzes.map((q) => {
        const options = JSON.parse(q.option);
        return (
          <div key={q.id} className="mb-4 p-3 border rounded shadow-sm">
            <h5 className="fw-bold">{q.question}</h5>
            <ul className="list-group">
              {options.map((opt, index) => (
                <li
                  key={index}
                  className={`list-group-item ${
                    // q.correctAnswerOption === index + 1 ? "list-group-item-success" : ""
                    q.correctAnswerOption === index + 1 ? "" : ""

                  }`}
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  ))
) : (
  <p className="text-muted">No quizzes available for this course yet.</p>
)}


  </Tab>
</Tabs>


        {/* Add Content Modal */}
        <Modal show={showContentModal} onHide={() => setShowContentModal(false)} centered>
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
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="contentDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter description"
                  name="description"
                  value={newContent.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowContentModal(false)}>Cancel</Button>
            <Button
              variant="primary"
              onClick={handleAddContent}
              disabled={!newContent.title.trim() || !newContent.description.trim()}
            >
              Add Content
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Add Quiz Modal */}
        <Modal show={showQuizModal} onHide={() => setShowQuizModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Quiz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="quizTopic">
                <Form.Label>Quiz Topic</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter quiz topic"
                  name="topic"
                  value={newQuiz.topic}
                  onChange={handleQuizChange}
                />
              </Form.Group>
              <Form.Group controlId="quizQuestionCount">
                <Form.Label>Number of Questions</Form.Label>
                <Form.Select
                  name="number_questions"
                  value={newQuiz.number_questions}
                  onChange={handleQuizChange}
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowQuizModal(false)}>Cancel</Button>
            <Button
              variant="primary"
              onClick={handleAddQuiz}
              disabled={!newQuiz.topic.trim()}
            >
              Add Quiz
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default CourseContent;
