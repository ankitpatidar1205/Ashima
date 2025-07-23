// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import Footer from '../../../Layout/Footer';
import Navbar from '../../../Layout/Navbar';
const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Navbar />
            <header className="bg-teal-600 text-white py-8">
                <div className="mt-5 py-5">
                    {/* <div className="flex items-center  text-center mb-6">
                        <i className="fas fa-graduation-cap text-3xl mr-3"></i>
                        <h1 className="text-2xl font-bold ">AI SKILLS</h1>
                    </div> */}
                    <h2 className="text-5xl font-bold mb-4 text-center">Cookie Policy</h2>
                    <p className="text-xl opacity-90  text-center">
                        This Cookie Policy explains how AI SKILLS uses cookies and similar tracking technologies when you visit or use our platform and Services, including live, hybrid, video courses, and digital products.
                    </p>
                </div>
            </header>
            {/* Main Content */}
            <main className="w-full px-6 py-12">
                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-lg p-6 mb-12">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <a href="#what-are-cookies" className="text-teal-600 hover:text-teal-700 cursor-pointer">1. What Are Cookies?</a>
                        <a href="#types-of-cookies" className="text-teal-600 hover:text-teal-700 cursor-pointer">2. Types of Cookies We Use</a>
                        <a href="#how-we-use" className="text-teal-600 hover:text-teal-700 cursor-pointer">3. How We Use Cookies</a>
                        <a href="#third-party" className="text-teal-600 hover:text-teal-700 cursor-pointer">4. Third-Party Cookies</a>
                        <a href="#managing-cookies" className="text-teal-600 hover:text-teal-700 cursor-pointer">5. Managing and Disabling Cookies</a>
                        <a href="#updates" className="text-teal-600 hover:text-teal-700 cursor-pointer">6. Updates to This Cookie Policy</a>
                        <a href="#contact" className="text-teal-600 hover:text-teal-700 cursor-pointer">7. Contact Us</a>
                    </nav>
                </div>
                {/* Consent Notice */}
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-12">
                    <p className="text-gray-700">
                        <strong>By using AI SKILLS, you consent to our use of cookies as described in this policy.</strong>
                    </p>
                </div>
                {/* Section 1: What Are Cookies */}
                <section id="what-are-cookies" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">1. What Are Cookies?</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They help websites recognize your device and remember your preferences, improve user experience, and provide website analytics.
                        </p>
                    </div>
                </section>
                {/* Section 2: Types of Cookies */}
                <section id="types-of-cookies" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Types of Cookies We Use</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <i className="fas fa-shield-alt text-red-500 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-800">Essential Cookies</h3>
                            </div>
                            <p className="text-gray-600">
                                Necessary for the website to function properly (e.g., login, security, and access to secure areas). These cookies cannot be disabled.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <i className="fas fa-chart-line text-blue-500 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-800">Performance & Analytics</h3>
                            </div>
                            <p className="text-gray-600">
                                Help us understand how visitors use our site by collecting information anonymously (e.g., pages visited, time spent). This helps us improve our Services.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <i className="fas fa-cog text-green-500 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-800">Functionality Cookies</h3>
                            </div>
                            <p className="text-gray-600">
                                Remember your preferences and settings to provide a more personalized experience (e.g., language settings, region).
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <i className="fas fa-bullhorn text-purple-500 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-800">Advertising & Targeting</h3>
                            </div>
                            <p className="text-gray-600">
                                Used to deliver relevant ads and measure the effectiveness of marketing campaigns. These may be set by third parties.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Section 3: How We Use Cookies */}
                <section id="how-we-use" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">3. How We Use Cookies</h2>
                    <div className="bg-gray-50 rounded-lg p-6">
                        <p className="text-gray-600 mb-4">We use cookies to:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-check text-teal-600 mt-1 mr-3"></i>
                                <span className="text-gray-600">Enable core site functionality</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-teal-600 mt-1 mr-3"></i>
                                <span className="text-gray-600">Analyze site traffic and usage patterns</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-teal-600 mt-1 mr-3"></i>
                                <span className="text-gray-600">Customize your experience and remember your preferences</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-teal-600 mt-1 mr-3"></i>
                                <span className="text-gray-600">Deliver relevant advertising (where applicable)</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-teal-600 mt-1 mr-3"></i>
                                <span className="text-gray-600">Enhance security and detect fraud</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Section 4: Third-Party Cookies */}
                <section id="third-party" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Third-Party Cookies</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We may allow third-party service providers (like Google Analytics, advertising partners, or payment gateways) to place cookies on your device to help us analyze site usage, provide advertising, or process payments.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            These third parties have their own privacy policies governing their use of data.
                        </p>
                    </div>
                </section>
                {/* Section 5: Managing Cookies */}
                <section id="managing-cookies" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Managing and Disabling Cookies</h2>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                        <p className="text-gray-700">
                            <strong>Important:</strong> Most browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent. Keep in mind that disabling certain cookies may affect your ability to use some features on our platform.
                        </p>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-4">To manage cookies, visit your browser's help section or use browser settings to:</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <i className="fas fa-trash text-red-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">Delete existing cookies</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-ban text-red-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">Block or restrict cookies</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-sliders-h text-blue-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">Set preferences for specific websites</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Section 6: Updates */}
                <section id="updates" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Updates to This Cookie Policy</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed">
                            We may update this policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically.
                        </p>
                    </div>
                </section>
                {/* Section 7: Contact */}
                <section id="contact" className="">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Contact Us</h2>
                    <div className="bg-teal-50 rounded-lg p-6">
                        <p className="text-gray-600 mb-4">If you have questions about our use of cookies or this policy, please contact us:</p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-teal-600 mr-3"></i>
                                <span className="text-gray-700">Email: support@AI SKILLS.ai</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-teal-600 mr-3"></i>
                                <span className="text-gray-700">Address: [Insert Business Address]</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Back to Top Button */}
                {/* <div className="text-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-teal-600 text-white px-6 py-3 !rounded-button hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                        <i className="fas fa-arrow-up mr-2"></i>
                        Back to Top
                    </button>
                </div> */}
            </main>
            <Footer />
        </div>
    );
};
export default CookiePolicy