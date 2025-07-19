import React, { useState, useRef, useEffect } from "react";
import trending1 from "../../assets/trending1.png";
import { CiFilter, CiGlass } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ReviewCarrds from "../Home/ReviewCards";
import { Container, Row, Col, Button, Dropdown, Form, Card, Nav, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import useCurrency from "../../utils/useCurrency";
function AllCourses() {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("Most Popular");
  const [modeFilter, setModeFilter] = useState([]);


  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currency = useCurrency();
  // const scrollRef = useRef(null);
  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: 200, // scroll amount
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (id) {
      setSelectedCategory(id);
    }
  }, [id]);
  const handleCategoryClick = (index, categoryName) => {
    setActiveIndex(index);
    setSelectedCategory(categoryName);
  };

  // fetch categories & courses
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { courses } = useSelector((state) => state.courses);

  // Filtered courses based on category id
  const filteredCourses = courses
    ?.filter((course) => course?.category_name === selectedCategory)
    ?.filter((course) => {
      if (modeFilter.length === 0) return true;
      return modeFilter.includes(course.course_type?.toLowerCase());
    })
    ?.sort((a, b) => {
      const priceA = parseFloat(a?.course_price || 0);
      const priceB = parseFloat(b?.course_price || 0);
      const option = sortOption?.trim().toLowerCase();

      if (option === "lowest to highest") {
        return priceA - priceB;
      }
      if (option === "highest to lowest") {
        return priceB - priceA;
      }
      return 0;
    });



  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCourses());
  }, [dispatch]);

  const coursess = [
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "LIVE",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "HYBRID",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "LIVE",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "VIDEO",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "LIVE",
      image: trending1,
    },
  ];

  // Scroll Function for Navigation Arrows
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };



  return (
    <>
      <Header />
      <Container fluid className="bg-[#ffffff]">
        {/* Top Navigation */}
        <Row className="bg-[#ffffff] uppercase">
          <div className="flex items-center border border-blue-500 rounded-md overflow-hidden pt-24">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth no-scrollbar"
              style={{ scrollBehavior: "smooth", maxWidth: "100vw" }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleCategoryClick(index, category.category_name)
                  }
                  className={`min-w-max cursor-pointer px-4 py-2 m-2 rounded-full text-sm font-semibold whitespace-nowrap border 
             ${activeIndex === index
                      ? "bg-teal-700 text-white"
                      : "bg-white text-black"
                    }`}
                >
                  {category.category_name}
                </div>
              ))}
            </div>
          </div>
        </Row>

        {/* Page Content */}
        <Row className="mb-3 mt-5">
          <Col md={8}>
            <h2 className="font-semibold font-jost text-[36px] ">
              {id} <span className="text-[#047670]">Courses</span>
            </h2>
          </Col>
        </Row>

        {/* Filters & Sorting */}
        {/* <Row className="mb-3 ">
          <Col md={3} className="d-flex">
            <Button
              variant="outline-success"
              className="w-40 d-flex align-items-center justify-content-center gap-2"
              style={{ height: "62px" }}
            >
              <span style={{ color: "#047670", fontSize: "1.5rem" }}>
                <CiFilter />
              </span>
              <span
                style={{
                  color: "#000000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {" "}
                Filter
              </span>
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="outline-success mx-1" className="w-100">
                <div style={{ color: "#000000", fontWeight: "600" }}>Sort By</div>
                <div>{sortOption}</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("Highest to Lowest")}>
                  Highest to Lowest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Lowest to Highest")}>
                  Lowest to Highest
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          </Col>
        </Row> */}

        <Row>
          {/* Sidebar Filters */}
          <Col md={3}>
            <hr />
            <h5 className="fw-bold">Ratings</h5>
            <Form>
              <div className="d-flex align-items-center mb-2">
                <Form.Check type="radio" name="rating" id="rating45" />
                <label htmlFor="rating45" className="ms-2">
                  <span className="text-warning">★★★★★</span> 4.5 & up <span className="text-muted">(0)</span>
                </label>
              </div>

              <div className="d-flex align-items-center mb-2">
                <Form.Check type="radio" name="rating" id="rating40" />
                <label htmlFor="rating40" className="ms-2">
                  <span className="text-warning">★★★★☆</span> 4.0 & up <span className="text-muted">(0)</span>
                </label>
              </div>

              <div className="d-flex align-items-center mb-2">
                <Form.Check type="radio" name="rating" id="rating35" />
                <label htmlFor="rating35" className="ms-2">
                  <span className="text-warning">★★★☆☆</span> 3.5 & up <span className="text-muted">(0)</span>
                </label>
              </div>

              <div className="d-flex align-items-center">
                <Form.Check type="radio" name="rating" id="rating30"  />
                <label htmlFor="rating30" className="ms-2">
                  <span className="text-warning">★★★☆☆</span> 3.0 & up <span className="text-muted">(0)</span>
                </label>
              </div>
            </Form>


            <hr />

            <h5 className="fw-bold">Price</h5>
            <Form>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  name="priceSort"
                  id="price-high"
                  checked={sortOption === "Highest to Lowest"}
                  onChange={() => setSortOption("Highest to Lowest")}
                />
                <label htmlFor="price-high" className="ms-4">
                  Highest to Lowest
                </label>
              </div>

              <div className="d-flex">
                <Form.Check
                  type="radio"
                  name="priceSort"
                  id="price-low"
                  checked={sortOption === "Lowest to Highest"}
                  onChange={() => setSortOption("Lowest to Highest")}
                />
                <label htmlFor="price-low" className="ms-4">
                  Lowest to Highest
                </label>
              </div>
            </Form>

            <hr />
            <h5 className="fw-bold">Mode</h5>
            <Form>
              {["live", "hybrid", "video"].map((mode) => (
                <div key={mode} className="d-flex mb-2">
                  <Form.Check
                    type="checkbox"
                    id={`mode-${mode}`}
                    checked={modeFilter.includes(mode)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setModeFilter([...modeFilter, mode]);
                      } else {
                        setModeFilter(modeFilter.filter((m) => m !== mode));
                      }
                    }}
                  />
                  <label htmlFor={`mode-${mode}`} className="ms-3 text-capitalize">
                    {mode}
                  </label>
                </div>
              ))}
            </Form>

          </Col>

          <Col md={9}>
            <div className="p-4">
              {filteredCourses && filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col md:flex-row gap-4 border-b pb-4 mb-6 hover:bg-gray-50 transition"
                  >
                    {/* Course image */}
                    <img
                      src={course.course_image}
                      alt="Course"
                      className="w-full md:w-[365px] h-auto md:h-[214px] object-cover rounded-[4px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    />

                    <Link to={`/Cource-Detail/${course.id}`}>
                      <div className="flex-1 p-4 border rounded-lg bg-white">
                        {/* Title */}
                        <h2 className="text-[24px] md:text-[30px] font-[700] uppercase leading-[30px] tracking-[2%] font-roboto text-[#1e1e1e] mb-2">
                          {course.course_title}
                        </h2>

                        {/* Description */}
                        <p className="text-[15px] leading-[20px] tracking-[1%] text-black mt-1 font-roboto font-[400] mb-3">
                          {course.course_description}
                        </p>

                        {/* Price */}
                        <h3 className="text-[22px] font-[700] text-[#047670] font-roboto mb-2">
                          {currency.symbol}
                          {(parseFloat(course?.course_price) * currency.rate).toFixed(2)}
                        </h3>

                        {/* Instructor */}
                        <div className="mb-3">
                          <h4 className="font-[700] font-roboto text-[16px]  text-teal-700">
                            By {course?.instructor_details?.full_name}
                          </h4>
                          <p className="font-roboto font-[500] text-[13px] uppercase text-black">
                            {course.updated_at} • {course.hours} •{" "}
                            {course.lectures}
                          </p>
                        </div>

                        {/* Rating and Type */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-roboto font-[500] text-[#1e1e1e] text-[12px]">
                            RATING {course.rating}
                          </span>
                          <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                          <span className="text-[#047670] font-[500] text-[12px]">
                            ({course.reviews})
                          </span>

                          <span
                            className={`text-white w-[101px] h-[21px] text-[10px] px-4 py-1 rounded-[4px] uppercase font-roboto text-center
                  ${course.course_type === "HyBrid"
                                ? "bg-[#ffb347]"
                                : course.course_type === "Live"
                                  ? "bg-[#09d0c6]"
                                  : course.course_type === "HYBRID"
                                    ? "bg-[#1e293b]"
                                    : "bg-gray-400"
                              }`}
                          >
                            {course.course_type}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600 font-roboto text-[18px] py-8">
                  🚫 No Courses Found for "{id}"
                </div>
              )}

              {/* Pagination */}
              {filteredCourses && filteredCourses.length > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-2 text-sm mt-4">
                  <button className="text-gray-500 hover:text-black">
                    &larr; Previous
                  </button>
                  <button className="px-2 py-1 bg-teal-500 text-white rounded">
                    1
                  </button>
                  <button className="hover:underline">2</button>
                  <button className="hover:underline">3</button>
                  <span>...</span>
                  <button className="hover:underline">67</button>
                  <button className="text-gray-500 hover:text-black">
                    Next &rarr;
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
        {/* Popular Courses */}
        <Row className="mt-5 p-4">
          <Col>
            <h2 className="fw-bold">
              Popular <span className="text-success">Courses</span>
            </h2>
          </Col>
          <Row className="mt-3">
            {categories &&
              categories?.map((item, index) => (
                <Col key={index} md={2} sm={6} xs={12} className="mb-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 text-truncate"
                    title={item.category_name}
                  >
                    {item.category_name}
                  </button>
                </Col>
              ))}
          </Row>
        </Row>
        <ReviewCarrds />
        <Footer />
      </Container>
    </>
  );
}

export default AllCourses;
