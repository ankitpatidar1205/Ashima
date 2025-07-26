import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaPaperPlane } from "react-icons/fa";
const Socket_URL= "https://cj2ww6qd-4000.inc1.devtunnels.ms"
const Messages = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef();
  const userId = parseInt(localStorage.getItem("is_id"));

  const inputRef = useRef();
  const messagesEndRef = useRef();

  useEffect(() => {
    if (selectedUser && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socketRef.current = io(Socket_URL, { withCredentials: true });

    socketRef.current.on("connect", () => {
      console.log("✅ Socket connected:", socketRef.current.id);
      socketRef.current.emit("get_users");
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    });

    socketRef.current.on("users", setUsers);

    socketRef.current.on("new_message", (msg) => {
      if (
        selectedUser &&
        (msg.sender_id === selectedUser.id || msg.receiver_id === selectedUser.id)
      ) {
        setMessages((prev) => [...prev, { ...msg, isOwn: msg.sender_id === userId }]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [selectedUser]);

  useEffect(() => {
    if (!selectedUser) {
      setMessages([]);
      return;
    }

    socketRef.current.emit("get_messages", {
      sender_id: userId,
      receiver_id: selectedUser.id,
    });

    const handleMessages = (msgs) => {
      const formatted = msgs.map((msg) => ({
        ...msg,
        isOwn: msg.sender_id === userId,
      }));
      setMessages(formatted);
    };

    socketRef.current.on("messages", handleMessages);

    return () => {
      socketRef.current.off("messages", handleMessages);
    };
  }, [selectedUser, userId]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const messageData = {
        senderId: userId,
        receiverId: selectedUser.id,
        message: newMessage,
      };
      socketRef.current.emit("send_message", messageData);
      setNewMessage("");
    }
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-80px)] bg-gray-50 font-sans">
        {/* Left Sidebar */}
        <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Users</h2>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 px-2 py-3">
            {users.map((user, index) => {
              const isSelected = selectedUser?.id === user.id;
              const initial = user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U";

              return (
                <div
                  key={`${user.id}-${index}`}
                  className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 transform
                  ${isSelected
                    ? "bg-teal-800 text-white shadow-md scale-[1.01]"
                    : "bg-teal-500 text-gray-800 hover:bg-teal-400 hover:scale-[1.01] hover:shadow-sm"
                  }`}
                  onClick={() => handleUserClick(user)}
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      className="w-12 h-12 rounded-full object-cover border border-white shadow-sm"
                      alt={user.name}
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-700 text-white font-bold text-lg shadow-sm">
                      {initial}
                    </div>
                  )}

                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className={`text-base font-semibold truncate ${isSelected ? "text-white" : "text-gray-900"}`}>
                        {user.email}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap 
                        ${isSelected ? "bg-white text-teal-800" : "bg-teal-700 text-white"}`}>
                        {user.role}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${isSelected ? "text-gray-200" : "text-gray-100"}`}>
                      {user.lastMessage || "No recent message"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-100">
          <div className="px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedUser ? `Chat with ${selectedUser.name || selectedUser.full_name}` : "Chats"}
            </h2>
          </div>

          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 pt-24">No messages yet.</div>
              )}
              {messages.map((message, index) => {
                const isSender = message.isOwn;
                const initial = selectedUser?.name?.[0]?.toUpperCase() || selectedUser?.email?.[0]?.toUpperCase() || "U";

                return (
                  <div
                    key={index}
                    className={`flex items-start ${isSender ? "justify-end" : "justify-start"}`}
                  >
                    {!isSender &&
                      (selectedUser?.avatar ? (
                        <img
                          src={selectedUser.avatar}
                          className="w-8 h-8 rounded-full mr-3"
                          alt={selectedUser?.name}
                        />
                      ) : (
                        <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-teal-700 text-white font-bold text-sm">
                          {initial}
                        </div>
                      ))}

                    <div
                      className={`rounded-xl p-3 max-w-xs md:max-w-md shadow-sm 
                        ${isSender ? "bg-teal-700 text-white" : "bg-white text-gray-900"}`}
                    >
                      <p className="whitespace-pre-wrap">{message.message}</p>
                      <span className="text-xs text-gray-300 mt-1 block text-right">
                        {new Date(message.created_at).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef}></div>
            </div>
          </div>

          <div className="px-4 py-3 bg-white border-t border-gray-300">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
