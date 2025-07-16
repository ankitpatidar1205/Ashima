// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from 'react';
import Navbar from '../../../Layout/Navbar';
import Footer from '../../../Layout/Footer';

const Helpsupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-16 px-6">
        <div className="w-full mx-auto  mt-5 py-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Help & Support</h1>
          <p className="text-xl mb-8 text-center">
            Welcome to the AI SKILLS Help Center! We're here to assist you with any questions or issues 
            you might have while learning with us.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">How Can We Help You?</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Whether you're new to our platform or an experienced learner, here are some common areas 
          where we can support you:
        </p>

        {/* Support Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Getting Started */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-play-circle text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">1. Getting Started</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• How to create your account</li>
              <li>• Navigating live, hybrid, and video courses</li>
              <li>• Accessing and downloading digital products</li>
            </ul>
          </div>

          {/* Course Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-book text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">2. Course Information</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Details about our learning formats</li>
              <li>• Scheduling and joining live classes</li>
              <li>• Using course materials and projects effectively</li>
            </ul>
          </div>

          {/* Payments & Billing */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-credit-card text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">3. Payments & Billing</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• How to purchase courses or subscriptions</li>
              <li>• Payment methods we accept</li>
              <li>• Refund and cancellation policies</li>
            </ul>
          </div>

          {/* Technical Support */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-cog text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">4. Technical Support</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Troubleshooting login or account issues</li>
              <li>• Video playback problems</li>
              <li>• Downloading or accessing digital products</li>
            </ul>
          </div>

          {/* Certificates & Job Guarantee */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-certificate text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">5. Certificates & Job Guarantee</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• How to earn your course completion certificates</li>
              <li>• Understanding our Job Guarantee program (if applicable)</li>
            </ul>
          </div>

          {/* Community & Networking */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <i className="fas fa-users text-teal-600 text-2xl mr-3"></i>
              <h3 className="text-xl font-bold text-gray-800">6. Community & Networking</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Engaging with instructors and fellow learners</li>
              <li>• Joining career networking opportunities</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-teal-600 mb-6">How to Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            Still have questions? We're just a message away!
          </p>
          <div className="flex items-center mb-6">
            <i className="fas fa-envelope text-teal-600 text-xl mr-3"></i>
            <span className="text-lg font-semibold text-gray-800">Email: </span>
            <a href="mailto:support@aiskills.ai" className="text-teal-600 hover:text-teal-700 font-semibold ml-2 cursor-pointer">
              support@aiskills.ai
            </a>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-teal-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-teal-600 mb-6">Tips for Faster Support</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
              <span>Provide your account email or username</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
              <span>Describe your issue clearly with any error messages</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
              <span>Mention the device and browser you're using</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-8 text-center">
            We're committed to making your AI SKILLS experience smooth and rewarding. Thank you for 
            learning with us!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Helpsupport;
