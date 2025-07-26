import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Courses.png";
import img2 from "../../assets/bussiness22.jpg";
import img3 from "../../assets/Newsletter.png";
import {Link} from "react-router-dom"
const cards = [
  { title: "Courses", image: img1 },
  { title: "Business", image: img2 },
  { title: "Newsletter", image: img3 },
];
// Repeat the cards to create a continuous scrolling effect
const repeatedCards = Array(10).fill(cards).flat(); 

const Explore = () => {
  return (
    <div className="relative overflow-hidden bg-white py-4 md:py-8 w-full">
      <motion.div
        className="flex items-center gap-3 pl-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{  duration: 40,  repeat: Infinity,  ease: "linear",}}>
        <div style={{ width: "2.5rem" }}></div>

        {repeatedCards.map((card, index) => (
          <Link
            key={index}
            to="/all-cources"
            className="flex-shrink-0 flex items-center justify-center"
            style={{ height: "330px", width: "auto" }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-auto object-contain block"
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Explore;
