import React from 'react';
import Header from '../../../Layout/Header';
import Footer from '../../../Layout/Footer';


const Careers = () => {
  return (
  
    <div className="bg-white">
      <Header/>

      {/* Hero Section */}
      <section
        className="position-relative text-white"
        style={{
          height: '100vh',
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20classroom%20environment%20with%20teacher%20presenting%20to%20students%2C%20clean%20bright%20lighting%2C%20contemporary%20educational%20setting%20with%20whiteboard%20and%20learning%20materials%2C%20professional%20atmosphere%20with%20warm%20natural%20lighting&width=1440&height=1024&seq=hero-bg-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(13, 148, 136, 0.8)' }}></div>
        <div className="container h-100 position-relative d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">Teach Your Way<br />Transform Life</h1>
            <p className="lead mb-4">Join AI SKILLS And Reach A Global Guideline</p>
           
          </div>
        </div>
      </section>

      {/* Why Teach Section */}
      <section className="py-5 bg-white">
        <div className="p-5 text-center">
          <h2 className="display-5 fw-bold text-teal mb-5">Why Teach With AISkills?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-white h-100">
                <div className="mb-3 rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: 80, height: 80, margin: '0 auto' }}>
                  <i className="fas fa-graduation-cap fa-2x text-teal"></i>
                </div>
                <h5 className="fw-semibold mb-3">Expert Learning Platform</h5>
                <p>Join a cutting-edge platform designed for AI education with advanced tools and resources.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-white h-100">
                <div className="mb-3 rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: 80, height: 80, margin: '0 auto' }}>
                  <i className="fas fa-globe fa-2x text-teal"></i>
                </div>
                <h5 className="fw-semibold mb-3">Global Reach</h5>
                <p>Connect with students worldwide and make a global impact through online learning.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-white h-100">
                <div className="mb-3 rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: 80, height: 80, margin: '0 auto' }}>
                  <i className="fas fa-chart-line fa-2x text-teal"></i>
                </div>
                <h5 className="fw-semibold mb-3">Career Growth</h5>
                <p>Advance your career with professional development and recognition in the AI field.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Content Section */}
      <section className="py-5  ">
        <div className="p-5 ">
          <h2 className="display-6 fw-bold mb-4 text-dark">CAREER</h2>
          <div className="bg-white rounded shadow p-5">
            <h3 className="fw-bold text-teal mb-3">Careers at AI SKILLS</h3>
            <p className="lead mb-3">Join us in shaping the future of AI education!</p>
            <p className="mb-4">
              At AI SKILLS, we're on a mission to empower learners worldwide with AI knowledge 
              through live, hybrid, and video-based courses — plus digital products.
            </p>

            <h4 className="fw-bold mb-3">Why Work With Us?</h4>
            <ul className="list-unstyled mb-4">
              <li className="d-flex mb-3">
                <i className="fas fa-lightbulb text-teal me-3 mt-1"></i>
                <div>
                  <strong>Innovative Environment:</strong> Collaborate with forward-thinking experts.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="fas fa-arrow-up text-teal me-3 mt-1"></i>
                <div>
                  <strong>Growth Opportunities:</strong> Help millions upskill and grow your career.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="fas fa-heart text-teal me-3 mt-1"></i>
                <div>
                  <strong>Impactful Work:</strong> Make education accessible, practical, and affordable.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="fas fa-balance-scale text-teal me-3 mt-1"></i>
                <div>
                  <strong>Flexible Culture:</strong> Remote-friendly and supportive of work-life balance.
                </div>
              </li>
            </ul>

            <h4 className="fw-bold mb-2">Open Positions</h4>
            <p className="mb-4">We're currently not hiring.</p>

            <h4 className="fw-bold mb-2">How to Apply</h4>
            <p className="mb-4">
              Send your resume and cover letter to{' '}
              <a href="mailto:careers@aiskills.ai" className="text-decoration-none text-teal">
                careers@aiskills.ai
              </a>
            </p>

            <h4 className="fw-bold mb-2">Internship & Freelance Opportunities</h4>
            <p className="mb-3">
              We welcome applications from interns and freelancers. Reach out with your portfolio.
            </p>

            <p>
              Questions? Contact us at{' '}
              <a href="mailto:careers@aiskills.ai" className="text-decoration-none text-teal">
                careers@aiskills.ai
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Careers;
