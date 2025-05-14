import React from 'react'
import Navbar from '../../Layout/Navbar';
import Hero from "../Home/Hero";
import Explore from "../Home/Explore"
import CompaniesSection from "../Home/CompaniesSection"
import Trending from "../Home/Trending"
import LearningJourney from "../Home/LearningJourney"
import CategoryButtons from "../Home/CategoryButtons";
import DigitalProducts from "../Home/DigitalProductsSection";
import FeaturedIn from "../Home/FeaturedIn";
import Letmake from "../Home/Letmake";
import FAQSection from "../Home/FAQSection";
import ReviewCards from "../Home/ReviewCards";
import StartLearning from "../Home/StartLearning";
// import Header from "../../Layout/Header";
import Footer from '../../Layout/Footer';
import AllBlogs from './AllBlogs';


const Home = () => {
  return (
  
      <div>
        <Navbar />
        <Hero />
        <Explore />
        <CompaniesSection />
        <Trending />
        <LearningJourney />
        <CategoryButtons />
        <DigitalProducts />
        <FeaturedIn />
        <Letmake />
        <AllBlogs/>
        <FAQSection />
        <ReviewCards />
        <StartLearning />
        <Footer />
      </div>
  
  );
}

export default Home
