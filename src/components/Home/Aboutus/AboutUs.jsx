// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center text-white py-20 px-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 184, 166, 0.9), rgba(6, 78, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20tech%20learning%20environment%20with%20sleek%20computers%20and%20AI%20technology%20displays%20in%20a%20bright%20minimalist%20office%20space%20with%20people%20collaborating%20and%20studying%20artificial%20intelligence%20concepts&width=1440&height=480&seq=hero-about-001&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Welcome to AI SKILLS, your go-to platform for mastering the most in-demand AI and tech 
            skills through live, hybrid, and video-based learning.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-16">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-8">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At AI SKILLS, we believe learning should be accessible, practical, and tailored to the way you 
            grow. Our mission is to empower individuals and teams with industry-relevant skills that 
            prepare them for the future of work.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-12">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Classes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Interactive%20live%20online%20classroom%20with%20instructor%20teaching%20AI%20technology%20to%20engaged%20students%20on%20video%20call%20with%20modern%20clean%20background%20and%20professional%20lighting%20setup&width=400&height=240&seq=live-classes-001&orientation=landscape"
                  alt="Live Classes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-video text-teal-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800">Live Classes</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Interactive sessions with expert instructors, real-time Q&A, and collaborative learning 
                  experiences that bring the classroom to you.
                </p>
              </div>
            </div>

            {/* Hybrid Learning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20hybrid%20learning%20environment%20combining%20online%20and%20offline%20education%20with%20tablets%20laptops%20and%20books%20on%20clean%20desk%20with%20soft%20lighting%20and%20minimalist%20background&width=400&height=240&seq=hybrid-learning-001&orientation=landscape"
                  alt="Hybrid Learning"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-sync-alt text-teal-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800">Hybrid Learning</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Flexible combination of live instruction and self-paced study, designed to fit your 
                  schedule while maintaining engagement and accountability.
                </p>
              </div>
            </div>

            {/* Video-Based Courses */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20video%20learning%20setup%20with%20high%20quality%20camera%20recording%20AI%20technology%20course%20content%20in%20modern%20studio%20with%20clean%20white%20background%20and%20professional%20lighting&width=400&height=240&seq=video-courses-001&orientation=landscape"
                  alt="Video-Based Courses"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-play-circle text-teal-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800">Video-Based Courses</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  High-quality, comprehensive video content that you can access anytime, anywhere. 
                  Learn at your own pace with expert-crafted curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose AI SKILLS */}
        <div className="bg-teal-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-12">Why Choose AI SKILLS?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-graduation-cap text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Industry-Relevant Skills</h4>
                  <p className="text-gray-600">Learn the most in-demand AI and tech skills that employers are actively seeking.</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-users text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Expert Instructors</h4>
                  <p className="text-gray-600">Learn from industry professionals with real-world experience and proven track records.</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-clock text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Flexible Learning</h4>
                  <p className="text-gray-600">Choose from live, hybrid, or self-paced options that fit your lifestyle and schedule.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-project-diagram text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Hands-On Projects</h4>
                  <p className="text-gray-600">Build real projects that you can showcase in your portfolio and to potential employers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-certificate text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Industry Recognition</h4>
                  <p className="text-gray-600">Earn certificates that are recognized and valued by leading companies in the tech industry.</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-heart text-teal-600 text-2xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Supportive Community</h4>
                  <p className="text-gray-600">Join a community of learners and professionals who support each other's growth and success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-8">Our Vision</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We envision a world where anyone, anywhere, can access high-quality AI and technology education. 
              By bridging the gap between traditional learning and the demands of the modern workforce, 
              we're building the future of professional development—one skill at a time.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of learners who are already transforming their careers with AI SKILLS. 
            Your future in AI and technology starts here.
          </p>
          <button className="!rounded-button whitespace-nowrap bg-white text-teal-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer">
            Explore Our Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
