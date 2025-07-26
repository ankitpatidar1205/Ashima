import React from "react";
import review from "../../assets/reviewimage.jpg";
import { FaLinkedin } from "react-icons/fa";
import Slider from "react-slick"; // Import slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/linkimg1.jpg";
import image3 from "../../assets/linkimg3.jpg";
import image2 from "../../assets/linkimg2.gif";

const testimonials = [
  {
    name: "ARSHI KANSAL",
    image: image1,
    review:
     "Finally found a platform that teaches AI in a way that actually makes sense! I joined one of the live cohorts and it was incredible. The real-world projects helped me apply what I learned instantly.AI SKILLS is hands-down the most practical and aordable learning platform I’ve used.",
    
    linkedin: "https://www.linkedin.com/in/arshi-kansal-32820568/",
  },
  {
    name: "ANAND ARYA",
    image: "https://media.licdn.com/dms/image/v2/C5603AQEg6vn0csTvzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1597036434564?e=2147483647&v=beta&t=7WO2L2TDHE_IqAJnrD-R7QBUKPWuMRXzP1unuskjTjQ",
    review:
      "The hybrid learning model is a game changer. I love that I can learn through a mix of live classes and self-paced videos. It gave me theflexibility to learn at my own speed while still getting live support from mentors. AI SKILLShelped me become confident in applying AI at work!",
    linkedin: "https://www.linkedin.com/in/anand-prakash-arya/",
  },
  {
    name: "AMIT BHATIA",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGDXvH8gMQv-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516433588459?e=2147483647&v=beta&t=QmiKF5Ee9njHpqowy8xKeiWgfmaE1bTi-oiUhPmxWpI",
    review:
      "AI SKILLS is an affordable, hands-on platform that delivers real value. I built industry-level projects, earned a certificate, and boosted my job applications. Much better than overpriced platforms with no real outcomes. Highly recommended!",
    linkedin: "https://www.linkedin.com/in/amit-bhatia-94a35171/",
  },
  {
    name: "NIKHIL GUPTA",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHhlHrezNm2DA/profile-displayphoto-shrink_200_200/B56ZaOdkWKGUAc-/0/1746146841437?e=2147483647&v=beta&t=jEp9jyeFS8I97vRJa785j_tKwBJ2gDNXrglNNsJ3HaY",
    review:
   "Live, hybrid, and video courses — all in one place! The concept of combining dierent learning formats is brilliant. I could join live when I had time and watch videos when I didn’t. Every course felt personal and purposeful. It's not justlearning; it’s career building.",
    linkedin: "https://www.linkedin.com/in/nikhil-gupta-23497364/",
  },
  {
    name: "Neha Sharma",
    image: "https://media.istockphoto.com/id/1327206064/photo/happy-business-women-and-teacher-with-headphones-using-laptop-for-video-call-stock-photo.jpg?s=612x612&w=0&k=20&c=2BO4AvSw6wBw4WCy72NA5ksBkw7DGgx3BHCj6nNBVJ8=",
    review:
      "AI SKILLS offers practical learning at an affordable price. The live sessions were highly engaging, and the real-world projects helped me gain confidence. The certificate added great value to my resume. Highly recommend this excellent platform!",
    linkedin: "https://www.linkedin.com/in/arshi-kansal-123456789/",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white px-4 sm:px-6">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-8 text-start sm:text-left font-impact ml-2">
        WHY OUR LEARNERS LOVE US <span className="text-red-500">❤</span>
      </h1>

      {/* Slider Wrapper */}
      <Slider {...sliderSettings} className="mt-5">
        {testimonials.map((testimonial, index) => (
          <a
            key={index}
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative bg-[#0F7768] text-white w-full sm:w-96 min-h-[350px] p-6 rounded-xl shadow-lg text-left transition-all duration-300 hover:scale-105 mx-auto">
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
              <div className="mt-8 flex justify-between items-center text-yellow-400 font-semibold text-sm sm:text-base">
                <span className="text-white font-bold">RATING {testimonial.rating}</span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;