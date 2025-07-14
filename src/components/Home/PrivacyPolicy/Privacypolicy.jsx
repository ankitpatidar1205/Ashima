// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="w-32 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At AI SKILLS, your privacy is important to us. This Privacy Policy explains how we collect, use,
            share, and protect your personal information when you use our platform and services,
            including live sessions, hybrid programs, video-based courses, and digital products
            (collectively, the "Services").
          </p>
          <div className="mt-8 p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
            <p className="text-gray-700 font-medium">
              By using AI SKILLS, you agree to the collection and use of your information as described in this policy.
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">1. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Information You Provide Directly</h3>
                  <p className="text-gray-700 mb-4">
                    When you create an account, purchase courses or digital products, or interact with our platform, we collect information you provide, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Name, email address, phone number</li>
                    <li>Payment details (processed securely via third-party payment processors)</li>
                    <li>Profile information (e.g., username, photo, bio)</li>
                    <li>Communications with our support or instructors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
                  <p className="text-gray-700 mb-4">
                    When you use our Services, we automatically collect information about your device and usage, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages you visit and time spent</li>
                    <li>Device identifiers</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process payments and fulfill orders</li>
                <li>Communicate with you, including sending updates, support, and marketing materials (with your consent)</li>
                <li>Personalize your learning experience and recommend relevant courses or products</li>
                <li>Analyze usage to improve platform performance and security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">3. How We Share Your Information</h2>
              <p className="text-gray-700 mb-4 font-semibold">We do not sell your personal information.</p>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Service providers who help us operate the platform (e.g., payment processors, hosting providers)</li>
                <li>Instructors or content creators when necessary to deliver courses or respond to inquiries</li>
                <li>Legal authorities if required by law or to protect rights and safety</li>
                <li>Business partners or affiliates with your consent or as part of a merger/acquisition</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">4. Your Choices</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Account Information:</h4>
                  <p className="text-gray-700">You can access, update, or delete your account information by logging into your profile or contacting us.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Marketing Communications:</h4>
                  <p className="text-gray-700">You may opt out of marketing emails by clicking the unsubscribe link or contacting us.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cookies:</h4>
                  <p className="text-gray-700">You can control cookies via your browser settings, but disabling some cookies may limit your use of the platform.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">5. Data Security</h2>
              <p className="text-gray-700">
                We implement reasonable technical and organizational measures to protect your personal
                data from unauthorized access, loss, or misuse. However, no online transmission is
                completely secure.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">6. Children's Privacy</h2>
              <p className="text-gray-700">
                AI SKILLS does not knowingly collect personal information from children under 16. If you are
                under 18, you must have parental or guardian consent to use our Services.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">7. International Users</h2>
              <p className="text-gray-700">
                Our Services are primarily hosted and operated globally, and your information may
                be transferred and processed in countries outside your residence, including the United
                States. By using AI SKILLS, you consent to such transfers.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this policy occasionally. We'll notify you of material changes by email or via
                the platform. Continued use after updates means you accept the new policy.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">For questions or concerns about your privacy, please contact:</p>
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-teal-600 mr-3"></i>
                    <span className="font-semibold text-gray-900">Email:</span>
                    <a href="mailto:support@aiskills.ai" className="ml-2 text-teal-600 hover:text-teal-700 cursor-pointer">
                      support@aiskills.ai
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-teal-600 mr-3"></i>
                    <span className="font-semibold text-gray-900">Address:</span>
                    <span className="ml-2 text-gray-700">AI SKILLS Business Center, Innovation District</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 p-12 rounded-xl border border-teal-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Privacy Summary</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                <i className="fas fa-user-shield text-teal-600 mr-2"></i>
                Your Info:
              </h4>
              <p className="text-gray-700 text-sm">We collect info like your name, email, payment details, and usage data.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                <i className="fas fa-cogs text-teal-600 mr-2"></i>
                Use of Data:
              </h4>
              <p className="text-gray-700 text-sm">To provide and improve services, process payments, personalize learning, and send updates (with consent).</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                <i className="fas fa-share-alt text-teal-600 mr-2"></i>
                Sharing:
              </h4>
              <p className="text-gray-700 text-sm">We don't sell your data. Shared only with trusted service providers, instructors (when needed), or legal authorities if required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                <i className="fas fa-hand-paper text-teal-600 mr-2"></i>
                Your Control:
              </h4>
              <p className="text-gray-700 text-sm">You can update/delete your account or unsubscribe from marketing emails anytime.</p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">Last updated: July 14, 2025</p>
        </div>
      </div>
      <style jsx>{`
        .!rounded-button {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default App