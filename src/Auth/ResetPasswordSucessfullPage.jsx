import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordResetSent = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check Your Email</h2>
        <p className="text-gray-600 mb-6">
          Your password reset link has been sent to your registered email address.
        </p>
        <button
          onClick={handleBackHome}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSent;
