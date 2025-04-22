// import React, { useState } from "react";
// import DashboardLayout from "../../Layout/DashboardLayout";
// import AddSessionModal from "./AddSessionModal";

// const CalendarPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [sessions, setSessions] = useState([]);

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleAddSession = (newSession) => {
//     setSessions((prevSessions) => [...prevSessions, newSession]);
//   };
//   return (
//     <DashboardLayout>
//       <div className="min-h-screen flex">
//         <div className="flex-1">
//           <main className="p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
//               <button
//                 className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90"
//                 style={{ display: "none" }}
//               >
//                 <i className="fas fa-plus"></i>
//                 <span>Create New Course</span>
//               </button>
//             </div>

//             <div className="flex space-x-4 mb-6">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex space-x-2">
//                   <button className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800">
//                     Month
//                   </button>
//                   <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
//                     Week
//                   </button>
//                 </div>
//                 <button
//                   onClick={handleOpenModal}
//                   className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 flex items-center space-x-2"
//                 >
//                   <i className="fas fa-plus"></i>
//                   <span>Add Session</span>
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow">
//               <div className="p-6">
//                 <div className="grid grid-cols-7 gap-4 mb-4">
//                   <div className="text-center text-gray-600">Sun</div>
//                   <div className="text-center text-gray-600">Mon</div>
//                   <div className="text-center text-gray-600">Tue</div>
//                   <div className="text-center text-gray-600">Wed</div>
//                   <div className="text-center text-gray-600">Thu</div>
//                   <div className="text-center text-gray-600">Fri</div>
//                   <div className="text-center text-gray-600">Sat</div>
//                 </div>
//                 <div className="grid grid-cols-7 gap-4">
//                   <div className="h-32 border rounded-lg p-2">1</div>
//                   <div className="h-32 border rounded-lg p-2">
//                     2
//                     {sessions.map(
//                       (session, idx) =>
//                         session.date === "2025-04-02" && (
//                           <div
//                             key={idx}
//                             className="bg-teal-700 text-white rounded p-1 text-sm mb-1"
//                           >
//                             {session.title}
//                             <br />
//                             {session.time}
//                           </div>
//                         )
//                     )}
//                   </div>
//                   <div className="h-32 border rounded-lg p-2">3</div>
//                   <div className="h-32 border rounded-lg p-2">
//                     4
//                     <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
//                       Python Course
//                       <br />
//                       2:00 PM
//                     </div>
//                   </div>
//                   <div className="h-32 border rounded-lg p-2">5</div>
//                   <div className="h-32 border rounded-lg p-2">6</div>
//                   <div className="h-32 border rounded-lg p-2">
//                     7
//                     <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
//                       UI/UX Workshop
//                       <br />
//                       10:00 AM
//                     </div>
//                   </div>
//                   <div className="h-32 border rounded-lg p-2">8</div>
//                   <div className="h-32 border rounded-lg p-2">9</div>
//                   <div className="h-32 border rounded-lg p-2">
//                     10
//                     <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
//                       React Tutorial
//                       <br />
//                       3:00 PM
//                     </div>
//                   </div>
//                   <div className="h-32 border rounded-lg p-2">11</div>
//                   <div className="h-32 border rounded-lg p-2">12</div>
//                   <div className="h-32 border rounded-lg p-2">13</div>
//                   <div className="h-32 border rounded-lg p-2">14</div>
//                   <div className="h-32 border rounded-lg p-2">
//                     15
//                     <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
//                       Database Course
//                       <br />
//                       1:00 PM
//                     </div>
//                   </div>
//                   <div className="h-32 border rounded-lg p-2">16</div>
//                   <div className="h-32 border rounded-lg p-2">17</div>
//                   <div className="h-32 border rounded-lg p-2">18</div>
//                   <div className="h-32 border rounded-lg p-2">19</div>
//                   <div className="h-32 border rounded-lg p-2">20</div>
//                   <div className="h-32 border rounded-lg p-2">21</div>
//                   <div className="h-32 border rounded-lg p-2">22</div>
//                   <div className="h-32 border rounded-lg p-2">23</div>
//                   <div className="h-32 border rounded-lg p-2">24</div>
//                   <div className="h-32 border rounded-lg p-2">25</div>
//                   <div className="h-32 border rounded-lg p-2">26</div>
//                   <div className="h-32 border rounded-lg p-2">27</div>
//                   <div className="h-32 border rounded-lg p-2">28</div>
//                   <div className="h-32 border rounded-lg p-2">29</div>
//                   <div className="h-32 border rounded-lg p-2">30</div>
//                   <div className="h-32 border rounded-lg p-2">31</div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       <AddSessionModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onAddSession={handleAddSession}
//       />
//     </DashboardLayout>
//   );
// };

// export default CalendarPage;

// import React, { useState } from "react";
// import DashboardLayout from "../../Layout/DashboardLayout";
// import AddSessionModal from "./AddSessionModal"; // Import modal component
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const CalendarPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [sessions, setSessions] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date()); // Tracks the current date
//   const [view, setView] = useState("month"); // Default view is month

//   // Handle opening and closing modal
//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   // Add a new session
//   const handleAddSession = (newSession) => {
//     setSessions((prevSessions) => [...prevSessions, newSession]);
//   };

//   // Function to handle changing month or week
//   const changeMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   // Function to render the days for the week view
//   const renderWeek = () => {
//     const startOfWeek = new Date(currentDate);
//     const day = startOfWeek.getDay();
//     startOfWeek.setDate(startOfWeek.getDate() - day); // Get the start of the week

//     const daysOfWeek = [];
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(startOfWeek);
//       date.setDate(startOfWeek.getDate() + i);
//       daysOfWeek.push(date);
//     }
//     return daysOfWeek;
//   };

//   // Function to render the days for the month view
//   const renderMonth = () => {
//     const startOfMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       1
//     );
//     const endOfMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     );
//     const daysInMonth = [];

//     for (let day = 1; day <= endOfMonth.getDate(); day++) {
//       const date = new Date(startOfMonth);
//       date.setDate(day);
//       daysInMonth.push(date);
//     }

//     return daysInMonth;
//   };

//   // Function to render sessions on specific dates
//   const renderSessions = (date) => {
//     return sessions
//       .filter(
//         (session) =>
//           new Date(session.date).toDateString() === date.toDateString()
//       )
//       .map((session, idx) => (
//         <div
//           key={idx}
//           className="bg-teal-700 text-white rounded p-1 text-sm mb-1"
//         >
//           {session.title}
//           <br />
//           {session.time}
//         </div>
//       ));
//   };

//   // Get the current month and year
//   const currentMonthYear = `${currentDate.toLocaleString("default", {
//     month: "long",
//   })} ${currentDate.getFullYear()}`;

//   return (
//     <DashboardLayout>
//       <div className="min-h-screen flex">
//         <div className="flex-1">
//           <main className="p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
//               <button
//                 className="!rounded-button bg-teal-700 text-white px-4 py-2 flex items-center space-x-2 hover:bg-teal-800"
//                 onClick={handleOpenModal}
//               >
//                 <i className="fas fa-plus"></i>
//                 <span>Add Session</span>
//               </button>
//             </div>

//             {/* Display Current Month and Year */}
//             <div className="flex items-center justify-between mb-4">
//               <div className="text-xl font-semibold">{currentMonthYear}</div>
//               <div className="flex space-x-2">
//                 {/* Use React Icons for Previous and Next Month */}
//                 <button
//                   className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
//                   onClick={() => changeMonth(-1)} // Previous month
//                 >
//                   <FaChevronLeft />
//                 </button>
//                 <button
//                   className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
//                   onClick={() => changeMonth(1)} // Next month
//                 >
//                   <FaChevronRight />
//                 </button>
//               </div>
//             </div>

//             <div className="flex space-x-4 mb-6">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex space-x-2">
//                   <button
//                     className={`px-4 py-2 rounded-lg ${
//                       view === "month"
//                         ? "bg-teal-700 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } hover:bg-teal-800`}
//                     onClick={() => setView("month")}
//                   >
//                     Month
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-lg ${
//                       view === "week"
//                         ? "bg-teal-700 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } hover:bg-teal-800`}
//                     onClick={() => setView("week")}
//                   >
//                     Week
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow">
//               <div className="p-6">
//                 {/* Render Calendar based on the view */}
//                 {view === "week" ? (
//                   <div className="grid grid-cols-7 gap-4">
//                     {renderWeek().map((date, idx) => (
//                       <div key={idx} className="h-32 border rounded-lg p-2">
//                         <div className="text-center">{date.getDate()}</div>
//                         {renderSessions(date)}
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-7 gap-4">
//                     {renderMonth().map((date, idx) => (
//                       <div key={idx} className="h-32 border rounded-lg p-2">
//                         <div className="text-center">{date.getDate()}</div>
//                         {renderSessions(date)}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Add Session Modal */}
//       <AddSessionModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onAddSession={handleAddSession}
//       />
//     </DashboardLayout>
//   );
// };

// export default CalendarPage;

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons
// import DashboardLayout from "../../Layout/DashboardLayout";
// import AddSessionModal from "./AddSessionModal";

// const CalendarPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [view, setView] = useState("month");
//   const [sessions, setSessions] = useState([
//     {
//       title: "Web Dev Basics",
//       time: "9:00 AM",
//       date: "2025-04-02",
//       description:
//         "Introduction to web development. Learn HTML, CSS, and JavaScript basics.",
//     },
//     {
//       title: "Python Course",
//       time: "2:00 PM",
//       date: "2025-04-04",
//       description:
//         "Comprehensive Python programming course. Covers basics to advanced concepts.",
//     },
//     {
//       title: "React Tutorial",
//       time: "3:00 PM",
//       date: "2025-04-10",
//       description:
//         "Learn React, state management, and components in this hands-on session.",
//     },
//   ]);

//   // Handle previous/next month functionality
//   const changeMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   // Get the current month and year
//   const currentMonthYear = `${currentDate.toLocaleString("default", {
//     month: "long",
//   })} ${currentDate.getFullYear()}`;

//   const handleAddSession = (newSession) => {
//     setSessions((prevSessions) => [...prevSessions, newSession]);
//   };

//   // Function to render sessions on specific dates
//   const renderSessions = (date) => {
//     return sessions
//       .filter(
//         (session) =>
//           new Date(session.date).toDateString() === date.toDateString()
//       )
//       .map((session, idx) => (
//         <div
//           key={idx}
//           className="bg-teal-700 text-white rounded p-1 text-sm mb-1 hover:bg-teal-800 cursor-pointer"
//           title={session.description}
//         >
//           {session.title} <br />
//           {session.time}
//         </div>
//       ));
//   };

//   // Render Week View (show times and specific session details)
//   const renderWeek = () => {
//     const startOfWeek = new Date(currentDate);
//     const day = startOfWeek.getDay();
//     startOfWeek.setDate(startOfWeek.getDate() - day); // Get the start of the week

//     const daysOfWeek = [];
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(startOfWeek);
//       date.setDate(startOfWeek.getDate() + i);
//       daysOfWeek.push(date);
//     }
//     return daysOfWeek;
//   };

//   // Render Month View (with session details on specific dates)
//   const renderMonth = () => {
//     const startOfMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       1
//     );
//     const endOfMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     );
//     const daysInMonth = [];

//     for (let day = 1; day <= endOfMonth.getDate(); day++) {
//       const date = new Date(startOfMonth);
//       date.setDate(day);
//       daysInMonth.push(date);
//     }

//     return daysInMonth;
//   };

//   // Improved Date Formatting for Month and Week View
//   const formatDate = (date) => {
//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "long" });
//     const dayOfWeek = date.toLocaleString("default", { weekday: "long" });

//     return `${dayOfWeek}, ${month} ${day}`;
//   };

//   return (
//     <DashboardLayout>
//       {" "}
//       <div className="min-h-screen flex flex-col sm:flex-row sm:space-x-4 p-8">
//         <div className="flex-1">
//           <main className="mb-8">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
//               <button
//                 className="!rounded-button bg-teal-700 text-white rounded px-4 py-2 flex items-center space-x-2 hover:bg-teal-800"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 <span>Add Session</span>
//               </button>
//             </div>

//             {/* Display Current Month and Year */}
//             <div className="flex items-center justify-between mb-4">
//               <div className="text-xl font-semibold">{currentMonthYear}</div>
//               <div className="flex space-x-2">
//                 <button
//                   className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
//                   onClick={() => changeMonth(-1)} // Previous month
//                 >
//                   <FaChevronLeft />
//                 </button>
//                 <button
//                   className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800"
//                   onClick={() => changeMonth(1)} // Next month
//                 >
//                   <FaChevronRight />
//                 </button>
//               </div>
//             </div>

//             <div className="flex space-x-4 mb-6">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex space-x-2">
//                   <button
//                     className={`px-4 py-2 rounded-lg ${
//                       view === "month"
//                         ? "bg-teal-700 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } hover:bg-teal-800`}
//                     onClick={() => setView("month")}
//                   >
//                     Month
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-lg ${
//                       view === "week"
//                         ? "bg-teal-700 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     } hover:bg-teal-800`}
//                     onClick={() => setView("week")}
//                   >
//                     Week
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow text-nowrap overflow-x-auto">
//               <div className="p-6">
//                 {/* Render Calendar based on the view */}
//                 {view === "week" ? (
//                   <div className="grid grid-cols-7 gap-4 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7">
//                     {renderWeek().map((date, idx) => (
//                       <div key={idx} className="h-32 border rounded-lg p-2">
//                         <div className="text-center">{formatDate(date)}</div>
//                         {renderSessions(date)}
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-7 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
//                     {renderMonth().map((date, idx) => (
//                       <div key={idx} className="h-32 border rounded-lg p-2">
//                         <div className="text-center">{formatDate(date)}</div>
//                         {renderSessions(date)}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       <AddSessionModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAddSession={handleAddSession}
//       />
//     </DashboardLayout>
//   );
// };

// export default CalendarPage;









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













