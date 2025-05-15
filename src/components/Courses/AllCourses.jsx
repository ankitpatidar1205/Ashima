import React, { useState, useRef, useEffect } from "react";
import courses2 from "../../assets/courses2.png";
import courses1 from "../../assets/courses1.png";
import courses3 from "../../assets/courses3.png";
import courses4 from "../../assets/courses4.png";
import trending1 from "../../assets/trending1.png";
import { CiFilter, CiGlass } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Header from "../../Layout/Header";
import Footer from '../../Layout/Footer';
import ReviewCarrds from "../Home/ReviewCards";
import { Container, Row, Col, Button, Dropdown, Form, Card,Pagination, Nav,} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";

function AllCourses() {
  const {id}= useParams()
   console.log(id)
   const [activeIndex, setActiveIndex] = useState(null);
   const [selectedCategory, setSelectedCategory] = useState("");
   const [sortOption, setSortOption] = useState("Most Popular");
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
   console.log(courses)
    // Filtered courses based on category id
    const filteredCourses = courses?.filter(
      (course) => course?.category_name === selectedCategory
    );    
    console.log("Filtered Courses:", filteredCourses);
    
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
      <Header/>
      <Container fluid className="bg-[#ffffff]">
        {/* Top Navigation */}
        <Row className="bg-[#ffffff] uppercase">
          <div className="flex items-center border border-blue-500 rounded-md overflow-hidden pt-24">
            <div  ref={scrollRef}  className="flex overflow-x-auto scroll-smooth no-scrollbar"  style={{ scrollBehavior: "smooth", maxWidth: "100vw" }} >
               {categories.map((category, index) => (
            <div  key={index}  onClick={() => handleCategoryClick(index, category.category_name)}
              className={`min-w-max cursor-pointer px-4 py-2 m-2 rounded-full text-sm font-semibold whitespace-nowrap border 
             ${activeIndex === index ? "bg-teal-700 text-white" : "bg-white text-black"}`}>
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
        <Row className="mb-3 ">
          <Col md={3} className="d-flex">
            <Button variant="outline-success" className="w-40 d-flex align-items-center justify-content-center gap-2"
              style={{ height: "62px" }} >
              <span style={{ color: "#047670", fontSize: "1.5rem" }}>
                <CiFilter />
              </span>
              <span
                style={{ color: "#000000", fontWeight: "600", fontSize: "1rem", }}>  Filter</span>
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="outline-success mx-1" className="w-100">
                <label  htmlFor=""  style={{ color: "#000000", fontWeight: "600" }}>
                  Sort By
                </label>{" "}
                <br /> {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item  onClick={() => setSortOption("Highest to Lowest")}>
                  Highest to Lowest
                </Dropdown.Item>
                <Dropdown.Item  onClick={() => setSortOption("Lowest to Highest")} >
                  Lowest to Highest
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          {/* Sidebar Filters */}
          <Col md={3}>
            <hr />
            <h5 className="fw-bold">Ratings</h5>
            <Form>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>

              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
            </Form>

            <hr />

            <h5 className="fw-bold">Price</h5>
            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Highest to Lowest
              </label>
            </div>

            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Lowest to Highest
              </label>
            </div>
            <hr />
            <h5 className="fw-bold">Mode</h5>
            <button>
              <div className="d-flex">
                <Form.Check type="checkbox" />
                <label htmlFor="" className="ms-4">
                  Live
                </label>
              </div>
            </button>

            <div className="d-flex">
              <Form.Check type="checkbox" />
              <button>
                <label htmlFor="" className="ms-4">
                  Hybrid
                </label>
              </button>
            </div>

            <button>
              <div className="d-flex">
                <Form.Check type="checkbox" />
                <label htmlFor="" className="ms-4">
                  Video
                </label>
              </div>
            </button>
          </Col>

        <Col md={9}>
           <div className="p-4">
    {filteredCourses && filteredCourses.length > 0 ? (
      filteredCourses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col md:flex-row gap-4 border-b pb-4 mb-6 hover:bg-gray-50 transition">
          {/* Course image */}
          <img src={course.course_image}  alt="Course"
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
              Rs {course.course_price}
            </h3>

            {/* Instructor */}
            <div className="mb-3">
              <h4 className="font-[700] font-roboto text-[16px] uppercase text-teal-700">
                BY {course.instructor_name}
              </h4>
              <p className="font-roboto font-[500] text-[13px] uppercase text-black">
                {course.updated_at} • {course.hours} • {course.lectures}
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
                  ${
                    course.course_type === "HyBrid"
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
        <button className="text-gray-500 hover:text-black">Next &rarr;</button>
      </div>
    )}
          </div>
    </Col>

        </Row>

        <Row className="mb-3 px-4 md:px-8 pt-4">
          <Col>
            <h1 className="text-[50px] md:text-[50px] text-black font-[400] font-impact leading-tight mb-2">
              AI AND ML COURSES
            </h1>
            <p className="text-[36px] md:text-[24px] font-semibold font-jost text-[#1E1E1E] mb-1 leading-[40px] tracking-[0.5%]">
              Courses to get you started
            </p>
            <p className="text-[18px] md:text-[18px] font-jost text-black font-[400]">
              Explore courses from experienced, real-world experts.
            </p>
          </Col>
        </Row>

        {/* Tabs */}
        <Nav variant="tabs" defaultActiveKey="popular"  className="mb-3 px-4 md:px-8" >
          <Nav.Item>
            <Nav.Link  eventKey="popular"
              className="fw-bold font-jost text-[#1E1E1E] text-[16px] md:text-[18px] border-b-2 border-black rounded-0" >
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  eventKey="trending"
              className="fw-bold font-jost text-[#1E1E1E] text-[16px] md:text-[18px] rounded-0">
              Trending
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Scrollable Course List */}
        <div className="position-relative d-flex flex-column">
          <Button  variant="dark"  className="position-absolute start-0 top-50 translate-middle-y z-2 d-none d-md-inline"
            onClick={() => scroll("left")} >
            <FaArrowLeft />
          </Button>

          <div  ref={scrollRef} className="d-flex overflow-auto pb-3"
            style={{  scrollBehavior: "smooth",  marginLeft: "0",  gap: "1rem",  }}>
            {coursess.map((course, index) => (
              <Link
                key={index}
                to={
                  course.mode === "VIDEO"
                    ? "/video"
                    : course.mode === "LIVE"
                    ? "/live"
                    : "/hybrid"
                }
                className="text-decoration-none"
              >
                <Card
                  // className="flex-shrink-0 transition-transform duration-100 transform hover:scale-105 shadow-sm hover:shadow-lg"
                  style={{
                    minWidth: "250px",
                    width: "100%",
                    maxWidth: "280px",
                    marginLeft: "21px",
                    cursor: "pointer",
                    overflow: "visible",
                  }}
                >
                  <div className="overflow-hidden rounded-[6px]">
                    <img
                      src={course.image}
                      className="transition-transform duration-300 hover:scale-105 w-full h-auto object-cover"
                    />
                  </div>

                  <Card.Body className="p-3">
                    <h6 className="fw-bold font-roboto text-[18px] uppercase text-[#1E1E1E] mb-1 leading-[20px]">
                      {course.title}
                    </h6>

                    <p className="text-teal-700 text-roboto font-bold uppercase text-[14px] mb-0">
                      BY {course.instructor}
                    </p>

                    <p className="mb-1 text-roboto font-[600] uppercase text-[14px]">
                      Microsoft
                    </p>

                    <p className="font-roboto text-[12px] uppercase flex items-center gap-1 mb-1 font-[400]">
                      RATING {course.rating}
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </p>

                    <div className="flex justify-between items-center">
                      <h5 className="fw-bold font-roboto text-[18px] text-[#1E1E1E] mb-2">
                        {course.price}
                      </h5>

                      <span
                        className={`text-white text-[10px] px-4 py-2 rounded-full font-roboto uppercase font-semibold inline-block w-[80px] text-center
                  ${
                    course.mode === "VIDEO"
                      ? "bg-[#ff757a]"
                      : course.mode === "LIVE"
                      ? "bg-[#09d0c6]"
                      : course.mode === "HYBRID"
                      ? "bg-[#1e1e1e]"
                      : "bg-gray-400"
                  }`}
                      >
                        {course.mode}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>

          <Button
            variant="dark"
            className="position-absolute end-0 top-50 translate-middle-y z-2 d-none d-md-inline"
            onClick={() => scroll("right")}
          >
            <FaArrowRight />
          </Button>
        </div>

      

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
