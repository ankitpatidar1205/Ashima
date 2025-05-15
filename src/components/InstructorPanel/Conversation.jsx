import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaPaperPlane } from "react-icons/fa";

const Messages = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef();
  const userId = localStorage.getItem("is_id");

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", { withCredentials: true });

    socketRef.current.on("connect", () => {
      console.log("✅ Socket connected:", socketRef.current.id);
      socketRef.current.emit("get_users");
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    });

    socketRef.current.on("users", setUsers);

    socketRef.current.on("new_message", (msg) => {
      // check if message relevant to current chat
      console.log("new_message", msg);
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
  }, []); // <-- dependency array empty, only once on mount
  useEffect(() => {
    if (!selectedUser) {
      setMessages([]);
      return;
    }

    // Emit get_messages for selected user conversation
    socketRef.current.emit("get_messages", {
      sender_id: parseInt(userId),
      receiver_id: selectedUser.id,
    });

    // Listen once for messages event
    const handleMessages = (msgs) => {
      const formatted = msgs.map((msg) => ({
        ...msg,
        isOwn: msg.sender_id === userId,
      }));
      setMessages(formatted);
    };

    socketRef.current.on("messages", handleMessages);

    // Cleanup listener when selectedUser changes
    return () => {
      socketRef.current.off("messages", handleMessages);
    };
  }, [selectedUser, userId]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    console.log("senderId", parseInt(userId));
    console.log("receiverId", user.id);
    socketRef.current.emit("get_messages", {
      sender_id: parseInt(userId),
      receiver_id: user.id,
    });


  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const messageData = {
        senderId: userId,
        receiverId: selectedUser.id,
        message: newMessage,
      };
      console.log("messageData", messageData);
      socketRef.current.emit("send_message", messageData);

      // Optimistically update UI
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...messageData, isOwn: true, created_at: new Date().toISOString() },
      ]);
      setNewMessage("");
    }
  };

  // Your render JSX remains unchanged

  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Messages</h1>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex h-[calc(100vh-220px)]">

                {/* User List */}
                <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
                  <div className="space-y-2">
                    {users.map((user, index) => (
                      <div
                        key={`${user.id}-${index}`}
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${selectedUser?.id === user.id ? "bg-teal-800" : "bg-teal-700"
                          }`}
                        onClick={() => handleUserClick(user)}
                      >
                        <img
                          src={user ? user.profile_image : "https://res.cloudinary.com/de1s1o9xc/image/upload/v1746172558/wpxrlb7rwudnv2nnfvwj.png"}
                          className="w-10 h-10 rounded-full mr-3"
                          alt={user.name}
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{user.email}</h3>
                          <p className="text-white/80 text-sm">{user.lastMessage || "No recent message"}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Messages Panel */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex items-start ${message.isOwn ? "justify-end" : "justify-start"}`}
                        >
                          {/* Receiver Avatar */}
                          {!message.isOwn && (
                            <img
                              src={selectedUser?.profile_image || "https://res.cloudinary.com/de1s1o9xc/image/upload/v1746172558/wpxrlb7rwudnv2nnfvwj.png"}
                              className="w-8 h-8 rounded-full mr-3"
                              alt={selectedUser?.name}
                            />
                          )}

                          {/* Message Bubble */}
                          <div
                            className={`rounded-lg p-2 max-w-md ${message.isOwn ? "bg-teal-800 text-white" : "bg-white text-gray-900"}`}
                          >

                            <p>{message.message}</p>
                            <span className="text-xs text-gray-500 mt-1 block">
                              {new Date(message.created_at).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500/20"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
