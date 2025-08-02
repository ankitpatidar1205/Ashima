import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const ReadCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [moduleContents, setModuleContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const courseRes = await axiosInstance.get(`/course/?id=${id}`);
        const courseData = courseRes.data.data;
        setCourse(courseData);
        if (courseData?.course_syllabus?.length > 0) {
          const firstModule = courseData.course_syllabus[0];
          setSelectedModule(firstModule);
          fetchModuleContents(firstModule.id);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  const fetchModuleContents = async (moduleId) => {
    try {
      setLoadingContent(true);
      const res = await axiosInstance.get(`/courseSyllabusCont/${moduleId}`);
      console.log(res)
      if (res?.data?.data) {
        setModuleContents(res.data.data);
      } else {
        setModuleContents([]);
      }
    } catch (err) {
      console.error("Error fetching module contents:", err);
      setModuleContents([]);
    } finally {
      setLoadingContent(false);
    }
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    fetchModuleContents(module.id);
  };

  return (
    <>
      <Header />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-lg border-r overflow-y-auto">
          <h3 className="text-lg font-bold p-5 border-b bg-green-700 text-white">
            {course?.course_title || "Loading Course..."}
          </h3>

          {loading ? (
            <p className="p-5 text-gray-500">⏳ Loading modules...</p>
          ) : course?.course_syllabus?.length === 0 ? (
            <p className="p-5 text-gray-500">⚠️ No modules available</p>
          ) : (
            <ul className="divide-y">
              {course.course_syllabus.map((module) => (
                <li key={module.id}>
                  <button
                    onClick={() => handleModuleClick(module)}
                    className={`w-full text-left px-5 py-3 block transition-all ${
                      selectedModule?.id === module.id
                        ? "bg-green-100 text-green-700 font-semibold border-l-4 border-green-600"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {module.module_title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          {selectedModule ? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {selectedModule.module_title}
              </h2>
              <p className="text-gray-700 mb-6">
                {selectedModule.module_syllabus || "No syllabus content available."}
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Module Contents
                </h3>
                {loadingContent ? (
                  <p className="text-gray-500">⏳ Loading contents...</p>
                ) : moduleContents.length === 0 ? (
                  <p className="text-gray-500">⚠️ No contents found for this module.</p>
                ) : (
                  <ul className="list-disc pl-6 space-y-2">
                    {moduleContents.map((content) => (
                      <li key={content.id} className="text-gray-700">
                        {content?.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600 mt-20">
              <p className="text-lg">📘 Select a module from the left menu to view its content.</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ReadCourse;
