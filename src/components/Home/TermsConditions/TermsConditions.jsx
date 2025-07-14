// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import Footer from '../../../Layout/Footer';

const TermsConditions = () => {
    const [activeSection, setActiveSection] = useState('');
    const sections = [
        { id: 'services', title: '1. Our Services' },
        { id: 'eligibility', title: '2. Eligibility' },
        { id: 'accounts', title: '3. User Accounts' },
        { id: 'payments', title: '4. Payments and Subscriptions' },
        { id: 'content', title: '5. Course and Digital Product Access & Content' },
        { id: 'guidelines', title: '6. Community Guidelines' },
        { id: 'classes', title: '7. Live and Hybrid Classes' },
        { id: 'ip', title: '8. Intellectual Property' },
        { id: 'disclaimers', title: '9. Disclaimers' },
        { id: 'liability', title: '10. Limitation of Liability' },
        { id: 'changes', title: '11. Changes to Terms' },
        { id: 'contact', title: '12. Contact Us' }
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="bg-teal-600 text-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">AI SKILLS Terms of Service</h1>
                            <p className="text-base sm:text-xl text-teal-100 mb-6 md:mb-8 max-w-2xl">
                                Welcome to AI SKILLS! These Terms of Service govern your access to and use of our platform,
                                including live sessions, hybrid programs, on-demand courses, and digital products.
                            </p>
                        </div>
                        <div className="flex-1 w-full md:w-auto md:ml-8 lg:ml-12">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20with%20diverse%20team%20discussing%20legal%20documents%20and%20contracts%20in%20modern%20office%20setting%20with%20clean%20white%20background%20and%20natural%20lighting&width=600&height=400&seq=hero-terms&orientation=landscape"
                                alt="Legal consultation"
                                className="w-full h-64 sm:h-80 object-cover object-top rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 mx-auto">
                <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12">
                    {/* Sidebar Navigation - Hidden on mobile, shown on lg screens */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-8">
                            {/* Table of Contents */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {sections.map((section, index) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer break-words ${activeSection === section.id
                                                ? 'bg-teal-100 text-teal-700 font-medium'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                }`}
                                        >
                                            {`${index + 1}. ${section.title.split('. ')[1] || section.title}`}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Quick Summary */}
                            <div className="bg-teal-50 rounded-lg p-4 mt-6">
                                <h3 className="text-lg font-semibold text-teal-900 mb-4">
                                    <i className="fas fa-info-circle mr-2"></i>
                                    Quick Summary
                                </h3>
                                <ul className="text-sm text-teal-800 space-y-2 break-words">
                                    <li>• Platform use requires agreement to Terms & Privacy Policy</li>
                                    <li>• Must be 16+ years old to use services</li>
                                    <li>• Payments are non-refundable unless stated</li>
                                    <li>• Content is protected by intellectual property laws</li>
                                    <li>• Respectful behavior required in all interactions</li>
                                    <li>• No guarantees on learning outcomes</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mobile TOC Dropdown - Shown on mobile, hidden on lg screens */}
                    <div className="lg:hidden mb-6">
                        <details className="bg-gray-50 rounded-lg overflow-hidden">
                            <summary className="px-4 py-3 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                                Table of Contents
                                <svg className="w-5 h-5 ml-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <nav className="p-4 border-t">
                                {sections.map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => {
                                            scrollToSection(section.id);
                                            document.activeElement.blur(); // Close the details element after selection
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer break-words block mb-1 ${activeSection === section.id
                                            ? 'bg-teal-100 text-teal-700 font-medium'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                            }`}
                                    >
                                        {`${index + 1}. ${section.title.split('. ')[1] || section.title}`}
                                    </button>
                                ))}
                            </nav>
                        </details>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 mb-6 md:mb-8">
                                <p className="text-blue-800 mb-0 text-sm sm:text-base">
                                    <strong>Important:</strong> By accessing or using AI SKILLS, you agree to be bound by these Terms and our Privacy Policy.
                                    If you do not agree, please do not use our Services.
                                </p>
                            </div>
                            
                            {/* Section 1: Our Services */}
                            <section id="services" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">1</span>
                                    Our Services
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    AI SKILLS is an online learning platform that offers:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-center mb-2 sm:mb-3">
                                            <i className="fas fa-video text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Live Courses</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm">Real-time sessions taught by experienced instructors with interactive learning.</p>
                                    </div>
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-center mb-2 sm:mb-3">
                                            <i className="fas fa-layer-group text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Hybrid Courses</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm">A blend of live instruction and recorded lessons for flexible learning.</p>
                                    </div>
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-center mb-2 sm:mb-3">
                                            <i className="fas fa-play-circle text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Video-Based Courses</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm">On-demand, self-paced content available anytime, anywhere.</p>
                                    </div>
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-center mb-2 sm:mb-3">
                                            <i className="fas fa-download text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Digital Products</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm">Ready-to-use AI tools, templates, prompts, and downloadable assets.</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    We are committed to providing industry-relevant, project-based learning experiences to help learners build practical AI and tech skills.
                                </p>
                            </section>
                            
                            {/* Section 2: Eligibility */}
                            <section id="eligibility" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">2</span>
                                    Eligibility
                                </h2>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                                    <div className="flex items-start">
                                        <i className="fas fa-exclamation-triangle text-yellow-600 text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5 sm:mt-1"></i>
                                        <div>
                                            <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                                                <strong>Age Requirement:</strong> You must be at least 16 years old to use AI SKILLS.
                                            </p>
                                            <p className="text-gray-700 text-sm sm:text-base">
                                                If you are under 18, you must have permission from a parent or legal guardian who agrees to these Terms on your behalf.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section 3: User Accounts */}
                            <section id="accounts" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">3</span>
                                    User Accounts
                                </h2>
                                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                                    To access most Services, you must create an account. You agree to:
                                </p>
                                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm sm:text-base"></i>
                                        <span className="text-gray-700 text-sm sm:text-base">Provide accurate, current information</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm sm:text-base"></i>
                                        <span className="text-gray-700 text-sm sm:text-base">Keep your login credentials confidential</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm sm:text-base"></i>
                                        <span className="text-gray-700 text-sm sm:text-base">Not share your account or allow others to access it</span>
                                    </li>
                                </ul>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                                    <p className="text-red-800 text-xs sm:text-sm">
                                        <strong>Important:</strong> You are responsible for all activity that occurs under your account.
                                    </p>
                                </div>
                            </section>
                            
                            {/* Section 4: Payments */}
                            <section id="payments" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">4</span>
                                    Payments and Subscriptions
                                </h2>
                                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                                    Some Services require payment. When you purchase a course, subscription, or digital product, you agree to pay the applicable fees and taxes.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                                        <i className="fas fa-ban text-red-500 text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Non-Refundable</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">All payments are non-refundable unless stated otherwise</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                                        <i className="fas fa-clock text-blue-500 text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Access Duration</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Access granted for duration described at purchase</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                                        <i className="fas fa-gift text-green-500 text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Special Offers</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Limited-time trials, discounts, or bundled offers available</p>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section 5: Content Access */}
                            <section id="content" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">5</span>
                                    Course and Digital Product Access & Content
                                </h2>
                                <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                    <h3 className="font-semibold text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base">Content Protection</h3>
                                    <p className="text-blue-800 mb-0 text-sm sm:text-base">
                                        All content (videos, slides, projects, prompts, digital downloads, etc.) is protected by intellectual property laws
                                        and remains the property of AI SKILLS or the instructor/content creator.
                                    </p>
                                </div>
                                <div className="bg-red-50 rounded-lg p-4 sm:p-6">
                                    <h3 className="font-semibold text-red-900 mb-2 sm:mb-3 text-sm sm:text-base">
                                        <i className="fas fa-times-circle mr-1 sm:mr-2"></i>
                                        You may NOT:
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2 text-red-800 text-xs sm:text-sm">
                                        <li>• Copy, reproduce, distribute, or publicly display course or digital product content</li>
                                        <li>• Use content for commercial purposes or outside the platform unless expressly authorized</li>
                                        <li>• Circumvent any access restrictions or technological protections</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6: Community Guidelines */}
                            <section id="guidelines" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">6</span>
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                                    You agree to maintain a respectful and professional environment. You must not:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                                        <i className="fas fa-user-slash text-red-500 text-lg sm:text-xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">No Harassment</h4>
                                        <p className="text-red-700 text-xs sm:text-sm">Harass, threaten, or abuse instructors or learners</p>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                                        <i className="fas fa-exclamation-triangle text-red-500 text-lg sm:text-xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">No Harmful Content</h4>
                                        <p className="text-red-700 text-xs sm:text-sm">Post inappropriate, harmful, or misleading content</p>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                                        <i className="fas fa-gavel text-red-500 text-lg sm:text-xl mb-1 sm:mb-2"></i>
                                        <h4 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">No Illegal Use</h4>
                                        <p className="text-red-700 text-xs sm:text-sm">Use AI SKILLS for illegal or unauthorized purposes</p>
                                    </div>
                                </div>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                                    <p className="text-yellow-800 text-xs sm:text-sm">
                                        <strong>Note:</strong> We reserve the right to suspend or terminate accounts for violations of our policies.
                                    </p>
                                </div>
                            </section>

                            {/* Section 7: Live and Hybrid Classes */}
                            <section id="classes" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">7</span>
                                    Live and Hybrid Classes
                                </h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-start">
                                            <i className="fas fa-video text-teal-600 text-lg sm:text-xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Session Recordings</h3>
                                                <p className="text-gray-700 text-sm sm:text-base">Sessions may be recorded for educational and quality assurance purposes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border rounded-lg p-4 sm:p-6">
                                        <div className="flex items-start">
                                            <i className="fas fa-clipboard-list text-teal-600 text-lg sm:text-xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Attendance & Participation</h3>
                                                <p className="text-gray-700 text-sm sm:text-base">Attendance policies and participation requirements vary by course</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
                                        <div className="flex items-start">
                                            <i className="fas fa-ban text-red-500 text-lg sm:text-xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                            <div>
                                                <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">Important Notice</h3>
                                                <p className="text-red-800 text-sm sm:text-base">You must not record, share, or redistribute live sessions without permission</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section 8: Intellectual Property */}
                            <section id="ip" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">8</span>
                                    Intellectual Property
                                </h2>
                                <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                                    <div className="flex items-start">
                                        <i className="fas fa-copyright text-blue-600 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base">Ownership Rights</h3>
                                            <p className="text-blue-800 text-sm sm:text-base">
                                                All trademarks, content, and branding used on the AI SKILLS platform are owned by AI SKILLS or our partners. Use of the platform does not grant you any ownership rights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section 9: Disclaimers */}
                            <section id="disclaimers" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">9</span>
                                    Disclaimers
                                </h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                                        <div className="flex items-start">
                                            <i className="fas fa-graduation-cap text-gray-600 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Educational Purpose</h3>
                                                <p className="text-gray-700 text-sm sm:text-base">
                                                    AI SKILLS provides educational content for personal and professional development. We do not guarantee specific outcomes, certifications, or job placement unless explicitly stated under a Job Guarantee program.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                                        <div className="flex items-start">
                                            <i className="fas fa-exclamation-circle text-yellow-600 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                            <div>
                                                <h3 className="font-semibold text-yellow-900 mb-2 sm:mb-3 text-sm sm:text-base">Content Disclaimer</h3>
                                                <p className="text-yellow-800 text-sm sm:text-base">
                                                    All content is provided "as is," and we make no warranties, express or implied, regarding accuracy, completeness, or fitness for a particular purpose.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section 10: Limitation of Liability */}
                            <section id="liability" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">10</span>
                                    Limitation of Liability
                                </h2>
                                <div className="bg-red-50 rounded-lg p-4 sm:p-6">
                                    <div className="flex items-start">
                                        <i className="fas fa-shield-alt text-red-600 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                        <div>
                                            <h3 className="font-semibold text-red-900 mb-2 sm:mb-3 text-sm sm:text-base">Legal Limitations</h3>
                                            <p className="text-red-800 text-sm sm:text-base">
                                                To the maximum extent permitted by law, AI SKILLS shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform or Services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 11: Changes to Terms */}
                            <section id="changes" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">11</span>
                                    Changes to Terms
                                </h2>
                                <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                                    <div className="flex items-start">
                                        <i className="fas fa-sync-alt text-blue-600 text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5 sm:mt-1"></i>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base">Updates to Terms</h3>
                                            <p className="text-blue-800 text-sm sm:text-base">
                                                We may update these Terms from time to time. If we make material changes, we'll notify you via email or through the platform. Continued use after changes constitutes your acceptance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Contact Section */}
                            <section id="contact" className="mb-8 md:mb-12">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                                    <span className="bg-teal-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3">12</span>
                                    Contact Us
                                </h2>
                                <div className="bg-teal-50 rounded-lg p-4 sm:p-6">
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <i className="fas fa-envelope text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                        <div>
                                            <h3 className="font-semibold text-teal-900 text-sm sm:text-base">Questions about these Terms?</h3>
                                            <p className="text-teal-700 text-sm sm:text-base">Reach us at support@aiskills.ai</p>
                                        </div>
                                    </div>
                                    <p className="text-teal-800 text-xs sm:text-sm">
                                        We're here to help clarify any questions you may have about our Terms of Service.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs sm:text-sm text-gray-500">
                        <p>Last updated: July 14, 2025</p>
                        <p>Effective date: July 14, 2025</p>
                    </div>
                </div>
            </div>

            <Footer />
            
            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-teal-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:bg-teal-700 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Back to top"
            >
                <i className="fas fa-arrow-up text-white text-sm sm:text-base"></i>
            </button>
        </div>
    );
};

export default TermsConditions;