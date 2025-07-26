import { Link } from "react-router-dom";
const LearningJourney = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-[1366px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start md:text-left gap-sm-20 gap-8">
        {/* Left Side - Bold Heading */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[45px] pl-2 sm:text-[55px] font-impact font-400 tracking-wide uppercase leading-[1.2] md:text-left">
            Start Your Learning <br /> Journey Today
          </h2>
        </div>

        {/* Right Side - Text & Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start  md:text-left md:ml-16 gap-4">
          <p className="text-[16px] sm:text-sm font-Roboto Condensed uppercase tracking-[0.2em]">
            Unlock endless opportunities with expert-led courses. Learn anytime,
            anywhere, and boost your skills for a brighter future.
          </p>
          <Link to="/signup">
            <button className="px-10 py-3 bg-[#047670] text-white font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
