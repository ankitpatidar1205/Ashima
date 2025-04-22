import React, { useState, useRef } from "react";
import courses2 from "../../assets/courses2.png";
import courses1 from "../../assets/courses1.png";
import courses3 from "../../assets/courses3.png";
import courses4 from "../../assets/courses4.png";
import trending1 from "../../assets/trending1.png";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react"; // optional icon package
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Header from "../../Layout/Header";
import Footer from '../../Layout/Footer';
import ReviewCarrds from "../Home/ReviewCards";




import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  Card,
  Pagination,
  Nav,
} from "react-bootstrap";


const categories = [
  "AI & ML",
  "Devops",
  "NO CODE",
  "CYBER SECURITY AND TESTING",
  "DATA SCIENCE AND ENGINERRING",
  "DESIGN AND DEVELOPMENT",
  "FOUNDER CONNECT",
  "GAMING AND NETWORK",
  "PRODUCT",
  "BUSINESS AND LEADERSHIP",
  "MARKETING AND SALES",
];

function AllCourses() {
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

  const courses = [
    {
      title: "AI AND ML FOR BEGINNERS",
      p:
        "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      price: "$19.99",
      rating: 4.8,
      reviews: 87,
      mode: "VIDEO",
      instructor: "BY KAPIL SHARMA",
      image: courses1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      p:
        "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      price: "$19.99",
      rating: 4.8,
      reviews: 87,
      mode: "LIVE",
      instructor: "Kapil Sharma",
      image: courses2,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      price: "$19.99",
      p:
        "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      rating: 4.8,
      reviews: 87,
      mode: "HYBRID",
      instructor: "Kapil Sharma",
      image: courses3,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      price: "$19.99",
      p:
        "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      rating: 4.8,
      reviews: 87,
      mode: "LIVE",
      instructor: "Kapil Sharma",
      image: courses4,
    },
  ];

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

  const featuredCourses = [
    {
      id: 1,
      image: courses1,
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn to program using the AI & ML.Master AI & ML by building <br/> 100 projects in 100 days.Learn data science, automation,<br/> build websites, games and apps!",
      author: "KAPIL SHARMA",
      updated: "August 2025",
      hours: "10 TOTAL HOURS",
      level: "ALL LEVELS",
      lectures: "45 LECTURES",
      rating: "4.8",
      reviews: 537,
      badge: "VIDEO",
      price: "$19.99",
    },
    {
      id: 2,
      title: "Deep Learning with Python",
      description:
        "Learn to program using the AI & ML.Master AI & ML by building <br/> 100 projects in 100 days.Learn data science, automation,<br/> build websites, games and apps!",
      instructor: "Sarah Johnson",
      updated: "1 March 2025",
      hours: "20 Total Hours",
      level: "Advanced",
      author: "KAPIL SHARMA",
      lectures: "50 Lectures",
      rating: 4.9,
      reviews: 120,
      price: "$24.99",
      badge: "HYBRID",
      image: courses2,
    },
    {
      id: 3,
      title: "Deep Learning with Python",
      description:
        "Learn to program using the AI & ML.Master AI & ML by building <br/> 100 projects in 100 days.Learn data science, automation,<br/> build websites, games and apps!",
      instructor: "Sarah Johnson",
      updated: "next batch start 1 March 2025",
      hours: "20 Total Hours",
      level: "Advanced",
      author: "KAPIL SHARMA",
      lectures: "50 Lectures",
      rating: 4.9,
      reviews: 120,
      price: "$24.99",
      badge: "VIDEO",
      image: courses3,
    },
    {
      id: 4,
      title: "Deep Learning with Python",
      description:
        "Learn to program using the AI & ML.Master AI & ML by building <br/> 100 projects in 100 days.Learn data science, automation,<br/> build websites, games and apps!",
      instructor: "Sarah Johnson",
      updated: "next batch start 1 March 2025",
      hours: "20 Total Hours",
      level: "Advanced",
      author: "KAPIL SHARMA",
      lectures: "50 Lectures",
      rating: 4.9,
      reviews: 120,
      price: "$24.99",
      badge: "LIVE",
      image: courses4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header/>
      <Container fluid className="bg-[#ffffff]">
        {/* Top Navigation */}
        <Row className="bg-[#ffffff] uppercase">
          {/* <hr
            className="m-28 bg-[#047670] h-[2px] border-none"
            style={{ width: "100%" }}
          /> */}
          <div className="flex items-center border border-blue-500 rounded-md overflow-hidden pt-24">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth no-scrollbar"
              style={{ scrollBehavior: "smooth", maxWidth: "100vw" }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-max cursor-pointer px-4 py-2 m-2 rounded-full text-sm font-semibold whitespace-nowrap border 
              ${
                activeIndex === index
                  ? "bg-teal-700 text-white"
                  : "bg-white text-black"
              }`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </Row>

        {/* Page Content */}

        <Row className="mb-3 mt-5">
          <Col md={8}>
            <h2 className="font-semibold font-jost text-[36px] ">
              All AI & ML <span className="text-[#047670]">Courses</span>
            </h2>
          </Col>
        </Row>

        {/* Filters & Sorting */}
        <Row className="mb-3 ">
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
                Filter
              </span>
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="outline-success mx-1" className="w-100">
                <label
                  htmlFor=""
                  style={{ color: "#000000", fontWeight: "600" }}
                >
                  Sort By
                </label>{" "}
                <br /> {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("Most Popular")}>
                  Most Popular
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSortOption("Highest to Lowest")}
                >
                  Highest to Lowest
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSortOption("Lowest to Highest")}
                >
                  Lowest to Highest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Latest First")}>
                  Latest First
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            md={9}
            className="text-end font-semibold text-muted font-roboto text-[24px] start-end"
          >
            500 RESULTS
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

            <h5 className="fw-bold">New Courses</h5>

            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Latest First
              </label>
            </div>
            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Last New Course
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
              {featuredCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/${course.badge.toLowerCase()}`} // dynamic route based on badge
                  className="block"
                >
                  <div className="flex flex-col md:flex-row gap-4 border-b pb-4 mb-6 hover:bg-gray-50 transition">
                    {/* Course image */}
                    <img
                      src={course.image}
                      alt="Course"
                      className="w-full md:w-[365px] h-auto md:h-[214px] object-cover rounded-[4px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    />

                    <div className="flex-1">
                      {/* Course Title and Price */}
                      <div className="flex flex-col sm:flex-row justify-between items-start text-[#1e1e1e] gap-2">
                        <h2 className="text-[24px] md:text-[30px] font-[700] uppercase leading-[24px] tracking-[2%] font-roboto">
                          {course.title}
                        </h2>
                        <span className="text-[24px] md:text-[30px] font-[700] leading-[24px] tracking-[2%] text-right font-roboto">
                          {course.price}
                        </span>
                      </div>

                      {/* Description with Line Breaks */}
                      <div
                        className="text-[15px] leading-[17px] tracking-[2%] text-black mt-1 font-roboto font-[400]"
                        dangerouslySetInnerHTML={{ __html: course.description }}
                      />

                      {/* Author, Updated info, and more */}
                      <div className="mt-2">
                        <h4 className="font-[700] font-roboto text-[16px] leading-[14px] tracking-[2%] uppercase text-teal-700">
                          BY {course.author}
                        </h4>

                        <h6 className="font-[600] font-roboto text-[16px] leading-[14px] tracking-[2%] text-black uppercase mb-0">
                          microsoft
                        </h6>

                        <h7 className="font-roboto font-[500] text-[13px] leading-[12px] tracking-[2%] uppercase text-black">
                          {course.updated} • {course.hours} • {course.lectures}
                        </h7>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-roboto font-[500] text-[#1e1e1e] text-[12px] leading-[12px] tracking-[2%]">
                            RATING {course.rating}
                          </span>
                          <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                          <span className="text-[#047670] font-[500] text-[12px] leading-[15px] tracking-[2%]">
                            ({course.reviews})
                          </span>
                          <span
                            className={`text-white w-[101px] h-[21px] text-[10px] px-4 py-1 rounded-[4px] uppercase font-roboto text-center
                  ${
                    course.badge === "VIDEO"
                      ? "bg-[#ff757a]"
                      : course.badge === "LIVE"
                      ? "bg-[#09d0c6]"
                      : course.badge === "HYBRID"
                      ? "bg-black text-white"
                      : "bg-gray-400"
                  }`}
                          >
                            {course.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Pagination */}
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
        <Nav
          variant="tabs"
          defaultActiveKey="popular"
          className="mb-3 px-4 md:px-8"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="popular"
              className="fw-bold font-jost text-[#1E1E1E] text-[16px] md:text-[18px] border-b-2 border-black rounded-0"
            >
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="trending"
              className="fw-bold font-jost text-[#1E1E1E] text-[16px] md:text-[18px] rounded-0"
            >
              Trending
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Scrollable Course List */}
        <div className="position-relative d-flex flex-column">
          <Button
            variant="dark"
            className="position-absolute start-0 top-50 translate-middle-y z-2 d-none d-md-inline"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft />
          </Button>

          <div
            ref={scrollRef}
            className="d-flex overflow-auto pb-3"
            style={{
              scrollBehavior: "smooth",
              marginLeft: "0",
              gap: "1rem",
            }}
          >
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

        <Row className="mb-3 p-5">
          <Col>
            <h2 className="font-semibold font-jost text-[36px] text-[#1E1E1E]">
              Featured
              <span className="font-semibold font-jost text-[36px] text-[#047670]">
                Courses
              </span>
            </h2>
            <p className="font-normal font-jost text-[18px] text-[#000000]">
              Explore courses from experienced, real-world experts.
            </p>
          </Col>
          <Col md={12}>
            <Card className="p-3 shadow">
              <Row className="g-0 align-items-center">
                <Col md={5}>
                  <Card.Img
                    src={featuredCourses[currentIndex].image}
                    className="img-fluid rounded"
                    alt="Course"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <h4 className="font-bold font-roboto text-[30px] text-[#1E1E1E] uppercase">
                      {featuredCourses[currentIndex].title}
                    </h4>
                    <p className="font-normal font-roboto text-[14px] text-[#000000] uppercase">
                      {featuredCourses[currentIndex].description}
                    </p>
                    <p className="font-bold font-roboto text-[13px] uppercase text-[#1E1E1E]">
                      <strong>
                        BY {featuredCourses[currentIndex].instructor}
                      </strong>{" "}
                      | Updated {featuredCourses[currentIndex].updated}
                    </p>
                    <p className="text-muted small">
                      {featuredCourses[currentIndex].hours} |{" "}
                      {featuredCourses[currentIndex].level} |{" "}
                      {featuredCourses[currentIndex].lectures}
                    </p>
                    <p className="font-semibold font-roboto text-[13px] uppercase text-[#1E1E1E]">
                      Rating: ⭐ {featuredCourses[currentIndex].rating} (
                      {featuredCourses[currentIndex].reviews} reviews)
                      <Button className="ms-2 font-roboto font-semibold  bg-[#FF757A] text-[10px] text-[#1E1E1E] uppercase">
                        {featuredCourses[currentIndex].badge}
                      </Button>
                    </p>
                    <h4 className="fw-bold font-roboto text-[30px] text-[#000000]">
                      {featuredCourses[currentIndex].price}
                    </h4>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
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
            <div className="col-md-2 col-sm-12 text-nowrap">
              <button type="button" class="btn btn-outline-dark w-100">
                AI & ML
              </button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100 mt-1">
                Devops
              </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100">
                Cyber Security And Testing
              </button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100">
                Software Development
              </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button
                type="button"
                class="btn btn-outline-dark w-100"
                style={{ textWrap: "nowrap" }}
              >
                Data Science And Engineering
              </button>
            </div>

            <div className="row mt-3">
              <div className="col-md-2 col-sm-12 ">
                <button type="button" class="btn btn-outline-dark w-100">
                  Gaming And Network
                </button>
              </div>
              <div className="col-md-3 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100 mt-1">
                  Design And Development
                </button>
              </div>
              <div className="col-md-3 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100">
                  Business And Leadership
                </button>
              </div>
              <div className="col-md-2 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100">
                  No Code
                </button>
              </div>
              <div className="col-md-2 col-sm-12">
                <button
                  type="button"
                  class="btn btn-outline-dark w-100"
                  style={{ textWrap: "nowrap" }}
                >
                  Founder Connect
                </button>
              </div>
            </div>
          </Row>
        </Row>
        <ReviewCarrds />
        <Footer />
      </Container>
    </>
  );
}

export default AllCourses;
