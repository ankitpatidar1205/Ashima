import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const ReadCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [moduleContents, setModuleContents] = useState({});
  const [mainContent, setMainContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMain, setLoadingMain] = useState(false);

  // ✅ Fetch Course + Modules
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const courseRes = await axiosInstance.get(`/course/?id=${id}`);
        const courseData = courseRes.data.data;
        setCourse(courseData);

        if (courseData?.course_syllabus?.length > 0) {
          courseData.course_syllabus.forEach((mod) => {
            fetchModuleContents(mod.id);
          });
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  // ✅ Fetch subtitles for module
  const fetchModuleContents = async (moduleId) => {
    try {
      const res = await axiosInstance.get(`/courseSyllabusCont/${moduleId}`);
      setModuleContents((prev) => ({
        ...prev,
        [moduleId]: res?.data?.data || [],
      }));
    } catch (err) {
      console.error("Error fetching module contents:", err);
      setModuleContents((prev) => ({ ...prev, [moduleId]: [] }));
    }
  };

  // ✅ Fetch Content for a subtitle
  const fetchMainContent = async (subTitleId) => {
    try {
      setLoadingMain(true);
      const res = await axiosInstance.get(
        `/course-syllabus-content?subTitle_id=${subTitleId}`
      );
      const contentArray = res?.data?.data || [];
      setMainContent(contentArray);
    } catch (err) {
      console.error("Error fetching main content:", err);
      setMainContent([]);
    } finally {
      setLoadingMain(false);
    }
  };

  return (
    <>
      <Header />

      {/* Wrapper with padding below header */}
      <div className="pt-20 flex flex-col md:flex-row bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-white shadow-lg border-r overflow-y-auto h-[calc(100vh-5rem)]">
          <h3 className="text-lg font-bold p-2 border-b bg-green-700 text-white py-2">
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
                  {/* Module Title */}
                  <div className="w-full text-left px-2 py-3 font-semibold text-green-700 border-l-4 border-green-600">
                    {module.module_title}
                  </div>

                  {/* Subtitles */}
                  <div className="pl-7 pr-4 py-2">
                    {moduleContents[module.id] ? (
                      moduleContents[module.id].length > 0 ? (
                        <ul className="list-disc pl-4 space-y-2">
                          {moduleContents[module.id].map((content) => (
                            <li
                              key={content.id}
                              className="text-gray-700 text-sm cursor-pointer hover:text-green-700"
                              onClick={() => fetchMainContent(content.id)}
                            >
                              {content.title || content.name}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm">
                          ⚠️ No contents found
                        </p>
                      )
                    ) : (
                      <p className="text-gray-500 text-sm">
                        ⏳ Loading contents...
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-5rem)] p-6 md:p-12">
          {loadingMain ? (
            <p className="text-gray-500 text-center mt-5">⏳ Loading content...</p>
          ) : mainContent && mainContent.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {mainContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md p-6 rounded-lg border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-green-800 mb-3">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 text-base mb-4">
                    {item.description}
                  </p>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full max-w-md rounded-lg shadow-sm"
                    />
                  ) : (
                    <p className="text-gray-500 italic"></p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg text-center">
              👈 Select a subtitle from the left to view content.
            </p>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ReadCourse;
