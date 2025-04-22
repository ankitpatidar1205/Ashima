import {
  FaCertificate,
  FaBroadcastTower,
  FaChalkboardTeacher,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// Image array for rotation
const images = [
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  "https://images.unsplash.com/photo-1555421689-491a97ff2040",
  "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
];

function LearningSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Define icons for each label
  const learningModes = [
    { label: "LIVE", icon: FaBroadcastTower },
    { label: "HYBRID", icon: FaChalkboardTeacher },
    { label: "VIDEO", icon: FaVideo },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fffaf1] to-white py-16 font-roboto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense gap-12 items-center"
      >
        {/* Right Section (On Mobile First) - Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left order-1 md:order-2"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#1E3A8A]">
            BUILD A<br />
            BRIGHT
            <br />
            FUTURE
            <br />
            WITH YOUR
            <br />
            UNIQUE
            <br />
            LEARNING
            <br />
            STYLE
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Learn from industry experts through live, hybrid, or self-paced
            video courses. Choose the path that best suits your schedule and
            learning style.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-white hover:bg-green-800 bg-[#004726] transition duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="font-medium text-lg">Signup</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isHovered
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0"
                  }`}
                >
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </motion.button>
        </motion.div>

        {/* Left Section (On Mobile Below) - Image + Icons + Certificate */}
        <div className="space-y-8 order-2 md:order-1">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-[90%] h-80 overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={images[currentImage]}
              alt="Online Learning"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>

          {/* Live | Hybrid | Video - Animated Icons with Unique Icons */}
          <div className="flex justify-center md:justify-start gap-8">
            {learningModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex flex-col items-center space-y-2"
                >
                  {/* Unique Icon for Each */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg border border-yellow-600 cursor-pointer transition-transform"
                  >
                    <Icon className="text-[#1E3A8A]" size={28} />
                  </motion.div>

                  {/* Label */}
                  <span className="font-semibold text-sm text-gray-800">
                    {mode.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Certificate Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1E3A8A] text-white cursor-pointer shadow-lg transition-transform"
            >
              <FaCertificate size={28} />
            </motion.div>

            <div>
              <p className="font-semibold text-gray-800 leading-tight">
                Earn Certificates and share your success with the world
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default LearningSection;
