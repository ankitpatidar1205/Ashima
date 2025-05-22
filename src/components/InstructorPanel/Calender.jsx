 
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddSessionModal from "./AddSessionModal";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("month");
  const [sessions, setSessions] = useState([
    {
      title: "Web Dev Basics",
      time: "9:00 AM",
      date: "2025-04-02",
      description:
        "Introduction to web development. Learn HTML, CSS, and JavaScript basics.",
    },
    {
      title: "Python Course",
      time: "2:00 PM",
      date: "2025-04-04",
      description:
        "Comprehensive Python programming course. Covers basics to advanced concepts.",
    },
    {
      title: "React Tutorial",
      time: "3:00 PM",
      date: "2025-04-10",
      description:
        "Learn React, state management, and components in this hands-on session.",
    },
  ]);

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const currentMonthYear = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  const handleAddSession = (newSession) => {
    setSessions((prevSessions) => [...prevSessions, newSession]);
  };

  const renderSessions = (date) => {
    return sessions
      .filter(
        (session) =>
          new Date(session.date).toDateString() === date.toDateString()
      )
      .map((session, idx) => (
        <div
          key={idx}
          className="bg-teal-700 text-white rounded p-1 text-sm mb-1 hover:bg-teal-800 cursor-pointer"
          title={session.description}
        >
          {session.title} <br />
          {session.time}
        </div>
      ));
  };

  const renderWeek = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      daysOfWeek.push(date);
    }
    return daysOfWeek;
  };

  const renderMonth = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const daysInMonth = [];
    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      const date = new Date(startOfMonth);
      date.setDate(day);
      daysInMonth.push(date);
    }
    return daysInMonth;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
    return `${dayOfWeek}, ${month} ${day}`;
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen flex flex-col sm:flex-row sm:space-x-4 p-4 sm:p-6 md:p-8">
        <div className="flex-1">
          <main className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Calendar
              </h1>
              <button
                className="!rounded-button bg-teal-700 text-white rounded px-3 sm:px-4 py-2 flex items-center space-x-2 hover:bg-teal-800 text-sm sm:text-base"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Add Session</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
              <div className="text-lg sm:text-xl font-semibold">
                {currentMonthYear}
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-3 sm:px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
                  onClick={() => changeMonth(-1)}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="px-3 sm:px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
                  onClick={() => changeMonth(1)}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 mb-4">
              <button
                className={`px-3 sm:px-4 py-2 rounded-lg ${
                  view === "month"
                    ? "bg-teal-700 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-teal-800 text-sm sm:text-base`}
                onClick={() => setView("month")}
              >
                Month
              </button>
              <button
                className={`px-3 sm:px-4 py-2 rounded-lg ${
                  view === "week"
                    ? "bg-teal-700 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-teal-800 text-sm sm:text-base`}
                onClick={() => setView("week")}
              >
                Week
              </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <div className="p-4 sm:p-6">
                {view === "week" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                    {renderWeek().map((date, idx) => (
                      <div
                        key={idx}
                        className="h-28 sm:h-32 border rounded-lg p-2"
                      >
                        <div className="text-center text-sm sm:text-base">
                          {formatDate(date)}
                        </div>
                        {renderSessions(date)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                    {renderMonth().map((date, idx) => (
                      <div
                        key={idx}
                        className="h-28 sm:h-32 border rounded-lg p-2"
                      >
                        <div className="text-center text-sm sm:text-base">
                          {formatDate(date)}
                        </div>
                        {renderSessions(date)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <AddSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSession={handleAddSession}
      />
    </DashboardLayout>
  );
};

export default CalendarPage;













