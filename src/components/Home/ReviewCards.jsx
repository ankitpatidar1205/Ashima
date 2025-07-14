import React from "react";
import review from "../../assets/reviewimage.jpg";
import { FaLinkedin } from "react-icons/fa"; // 👈 Import this at the
import image1 from "../../assets/linkimg1.jpg";
import image3 from "../../assets/linkimg3.jpg";
import image2 from "../../assets/linkimg2.gif";

const testimonials = [
  {
    name: "ARSHI KANSAL",
    image: image1,
    review:
     "Finally found a platform that teaches AI in a way that actually makes sense! I joined one of the live cohorts and it was incredible. The instructors explained complextopics in simple ways, and the real-world projects helped me apply what I learned instantly.AI Skills is hands-down the most practical and aordable learning platform I’ve used.",
    rating: 5.0,
    
    linkedin: "https://www.linkedin.com/in/arshi-kansal-32820568/",
  },
  {
    name: "ANAND ARYA",
    image: image2,
    review:
      "The hybrid learning model is a game changer. I love that I can learn through a mix of live classes and self-paced videos. It gave me theflexibility to learn at my own speed while still getting live support from mentors. AI Skillshelped me become confident in applying AI at work!",
    rating: 5.0,
    linkedin: "https://www.linkedin.com/in/anand-prakash-arya/",
  },
  {
    name: "AMIT BHATIA",
    image: image3,
    review:
      "Aordable, hands-on, and exactly what I needed to stay relevant. So many platforms charge a fortune and give you flu. AI Skills delivers real content thatmatters. I worked on actual industry-level projects and even earned a certificate that helped me get noticed in job applications. Highly recommend!",
    rating: 5.0,
    linkedin: "https://www.linkedin.com/in/amit-bhatia-94a35171/",
  },
  {
    name: "NIKHIL GUPTA",
    image: image2,
    review:
   "Live, hybrid, and video courses — all in one place! The concept of combining dierent learning formats is brilliant. I could join live when I had time and watch videos when I didn’t. Every course felt personal and purposeful. It's not justlearning; it’s career building.",
    rating: 5.0,
    linkedin: "https://www.linkedin.com/in/nikhil-gupta-23497364/",
  },
  {
    name: "Neha Sharma",
    image: image2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5.0,
    linkedin: "https://www.linkedin.com/in/arshi-kansal-123456789/",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-white px-4 sm:px-6">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-8 text-start sm:text-left font-impact ml-2">
        WHY OUR LEARNERS LOVE US <span className="text-red-500">❤</span>
      </h1>

      {/* ✅ Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 font-Roboto Condensed mt-5 w-max">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#0F7768] text-white w-80 sm:w-96 min-h-[350px] p-6 rounded-xl shadow-lg text-left transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              {/* ✅ LinkedIn Icon */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0A66C2] transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              {/* Circular Image and Name Section */}
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <h3 className="text-xl font-bold mt-4 sm:mt-0 sm:ml-6 tracking-wide text-center sm:text-left">
                  {testimonial.name}
                </h3>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base leading-relaxed text-gray-200 mt-4">
                {testimonial.review}
              </p>

              {/* Rating Section */}
              <div className="mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-yellow-400 font-semibold text-sm sm:text-base">
                <span className="text-white font-bold">
                  RATING {testimonial.rating}
                </span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;