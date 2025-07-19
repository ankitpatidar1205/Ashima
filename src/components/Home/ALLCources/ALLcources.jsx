import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDigitalProducts } from "../../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import Header from "../../../Layout/Header";
import Footer from "../../../Layout/Footer";
import useCurrency from "../../../utils/useCurrency";

function AllCourses() {
  const productSectionRef = useRef(null);
  const dispatch = useDispatch();
  const currency = useCurrency();

  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { courses } = useSelector((state) => state.courses);

  // Scroll to product section
  const scrollToProducts = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handlers
  const handlePriceRangeChange = (e) => setPriceRange(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Filtered & Sorted Data
  const filteredCourses = courses
    ?.filter((item) => {
      const title = item.course_title.toLowerCase();
      const query = searchQuery.toLowerCase();

      if (searchQuery && !title.includes(query)) return false;

      const price = parseFloat(item.course_price);
      if (priceRange === "Under 10" && price >= 10) return false;
      if (priceRange === "10-50" && (price < 10 || price > 50)) return false;
      if (priceRange === "50+" && price <= 50) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortOption === "A-Z")
        return a.course_title.localeCompare(b.course_title);
      if (sortOption === "Z-A")
        return b.course_title.localeCompare(a.course_title);
      if (sortOption === "Price Low-High")
        return parseFloat(a.course_price) - parseFloat(b.course_price);
      if (sortOption === "Price High-Low")
        return parseFloat(b.course_price) - parseFloat(a.course_price);
      return 0;
    });

  // Load Courses
  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <div className="pt-20">
          <div 
        className="relative bg-cover bg-center text-white py-20 px-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 184, 166, 0.9), rgba(6, 78, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20tech%20learning%20environment%20with%20sleek%20computers%20and%20AI%20technology%20displays%20in%20a%20bright%20minimalist%20office%20space%20with%20people%20collaborating%20and%20studying%20artificial%20intelligence%20concepts&width=1440&height=480&seq=hero-about-001&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center mt-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">All Courses</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Explore our wide range of expert-led courses covering AI, Machine Learning, Data Science, 
      Full Stack Development, NLP, and much more — designed for all skill levels.
          </p>
        </div>
      </div>
      </div>

      {/* TOP FILTER & TEXT ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 pt-8 pb-4 gap-4">
        <div>
          <p className="text-[14px] text-black font-medium mb-1">
            {courses.length} COURSES
          </p>
          <h2
            ref={productSectionRef}
            className="text-[28px] md:text-[32px] font-impact uppercase text-black mt-4"
          >
            All Courses
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-2 font-inter mt-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search courses..."
            className="border rounded-full px-4 py-2"
          />
          <select
            onChange={handleSortChange}
            className="border rounded-full px-4 py-2"
          >
            <option value="">Sort By</option>
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            <option value="Price Low-High">Price: Low to High</option>
            <option value="Price High-Low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-4 md:px-10">
        {filteredCourses?.map((item, index) => (
          <Link
            to={`/Cource-Detail/${item.id}`}
            key={index}
            className="block group relative"
          >
            <div className="border w-full max-w-[350px] h-auto rounded-lg shadow-sm overflow-hidden transition-all duration-300 mx-auto bg-white group-hover:bg-[#fffaf1] group-hover:shadow-lg">
              <div className="overflow-hidden">
                <img
                  src={
                    item.course_image || "https://via.placeholder.com/310x234"
                  }
                  alt={item.course_title}
                  className="object-cover w-full h-[234px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-[14px] text-[#333] mb-1">
                  {item.course_type}
                </p>
                <h3 className="font-impact text-[18px] text-black leading-[24px] mb-2 break-words">
                  {item.course_title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#047670] font-impact text-[20px]">
                    {currency.symbol}
                    {(
                      parseFloat(item.course_price) * currency.rate
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default AllCourses;
