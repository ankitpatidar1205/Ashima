// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from 'react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-teal-600 overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20classroom%20environment%20with%20teacher%20presenting%20to%20students%2C%20clean%20bright%20lighting%2C%20contemporary%20educational%20setting%20with%20whiteboard%20and%20learning%20materials%2C%20professional%20atmosphere%20with%20warm%20natural%20lighting&width=1440&height=1024&seq=hero-bg-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-teal-600 bg-opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="w-1/2 text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Teach Your Way<br />Transform Life
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Join AI SKILLS And Reach A Global Guideline
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 font-semibold !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-50 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Why Teach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16 text-teal-600">
            Why Teach With AISkills ?
          </h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Expert Learning Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a cutting-edge platform designed for AI education with advanced tools and resources to enhance your teaching experience.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-globe text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with students worldwide and make a global impact through our comprehensive online learning ecosystem.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Advance your teaching career with professional development opportunities and recognition in the AI education field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">CAREER</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h3 className="text-3xl font-bold mb-6 text-teal-600">Careers at AI SKILLS</h3>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Join us in shaping the future of AI education!
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              At AI SKILLS, we're on a mission to empower learners worldwide with cutting-edge AI 
              knowledge through live, hybrid, and video-based courses — plus powerful digital products. If 
              you're passionate about education, technology, and making a real impact, we want you on our 
              team.
            </p>

            <h4 className="text-2xl font-bold mb-6 text-gray-800">Why Work With Us?</h4>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <i className="fas fa-lightbulb text-teal-600 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-800">Innovative Environment:</strong>
                  <span className="text-gray-700 ml-2">Collaborate with forward-thinking experts dedicated to transforming AI learning.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-up text-teal-600 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-800">Growth Opportunities:</strong>
                  <span className="text-gray-700 ml-2">Grow your career while helping millions upskill and stay relevant in a fast-changing world.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-heart text-teal-600 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-800">Impactful Work:</strong>
                  <span className="text-gray-700 ml-2">Be part of a mission-driven startup that makes education accessible, practical, and affordable.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-balance-scale text-teal-600 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-800">Flexible Culture:</strong>
                  <span className="text-gray-700 ml-2">Enjoy a remote-friendly, flexible work environment that values work-life balance.</span>
                </div>
              </li>
            </ul>

            <h4 className="text-2xl font-bold mb-4 text-gray-800">Open Positions</h4>
            <p className="text-gray-700 mb-12">We're currently not hiring.</p>

            <h4 className="text-2xl font-bold mb-4 text-gray-800">How to Apply</h4>
            <p className="text-gray-700 mb-12">
              Interested? Send your resume and a brief cover letter to{' '}
              <a href="mailto:careers@aiskills.ai" className="text-teal-600 hover:text-teal-700 cursor-pointer">
                careers@aiskills.ai
              </a>{' '}
              telling us why you're a perfect fit for AI SKILLS.
            </p>

            <h4 className="text-2xl font-bold mb-4 text-gray-800">Internship & Freelance Opportunities</h4>
            <p className="text-gray-700 mb-8">
              We also welcome applications from motivated interns and freelancers passionate about AI 
              education. Reach out with your portfolio or previous work.
            </p>

            <p className="text-gray-700">
              Have questions? Contact us at{' '}
              <a href="mailto:careers@aiskills.ai" className="text-teal-600 hover:text-teal-700 cursor-pointer">
                careers@aiskills.ai
              </a>{' '}
              — we're excited to hear from you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
