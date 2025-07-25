import { BrowserRouter, Routes, Route } from "react-router-dom";
import { messaging } from "./firebase.config";
import { onMessage, getToken } from "firebase/messaging";
import { useEffect } from "react";
import axios from 'axios'
import ScrollToTop from "./Auth/ScrollToTop";
import Courses from "./components/Courses/AllCourses"; // Capitalized component name
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import BlogDeatils from "./components/AdminPanal/BlogsDetails";
import Instructor from "./components/Instructor/Instructor";
import "./App.css";
import MarketProduct from "./components/DigitalProduct/MarketProductPage";
import Blog from "./components/Home/Blog";
import MyDigital from "./components/DigitalProduct/MyDigital";
import InstructorSignup from "./components/Instructor/InstructorSignUp";
import Home from "./components/Home/Home";
// import ProtectedRoute from "./Auth/ProtectedRoute";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard ";
import InstructorDashboard from "./components/Dashboard/InstructorDashboard";
import DigitalProducts from "./components/InstructorPanel/DigitalProducts";
import NewCourse from "./components/InstructorPanel/NewCourse";

import Business from "./components/BusinessProduct/Business";
import AIPowered from "./components/BusinessProduct/AI-Powered";
import LaunchPage from "./components/BusinessProduct/LaunchPage";
import MyCourses from "./components/InstructorPanel/MyCourses";
import CourseDetails from "./components/InstructorPanel/CourseDetails";
import Conversation from "./components/InstructorPanel/Conversation";
import CourseComments from "./components/InstructorPanel/CourseComments";

import Setting from "./components/InstructorPanel/Setting";
import ProductDetails from "./components/InstructorPanel/ProductDetails";
import CertificatesPage from "./components/StudentPanal/Certificate";
import Assignments from "./components/StudentPanal/Assignments";
import Descussiontrending from "./components/StudentPanal/Discussiontrending";
import DescussionNew from "./components/StudentPanal/DiscussionNew";
import Dis_unanswered from "./components/StudentPanal/DiscussionUnanswered";
import DiscussionMostLike from "./components/StudentPanal/DiscussionMostLike";

import ReviewsRating from "./components/StudentPanal/ReviewRating";
import Mc_Dashboard from "./components/StudentPanal/MyCourses";
import ManageStudent from "./components/AdminPanal/ManageStudent";
import ManageInstructors from "./components/AdminPanal/ManageInstructors";
import ManageCourses from "./components/AdminPanal/ManageCourses";
import StudentDetails from "./components/AdminPanal/StudentDetails";
import Blogs_article from "./components/AdminPanal/BlogsArticles";
import InstructorDetails from "./components/AdminPanal/InstructorDetails";
import CoursesDetails from "./components/AdminPanal/CoursesDetails";
import CertificateTemplates from "./components/AdminPanal/CertificateTemplate";
import CertificateManagement from "./components/AdminPanal/CertificateManagement";
import AssessmentDetails from "./components/AdminPanal/AssessmentDetails";
import DiscussionDetails from "./components/AdminPanal/DiscussionDetails";
import ManageTransaction from "./components/AdminPanal/ManageTransaction";
import RefundDetails from "./components/AdminPanal/RefundDetails";
import AdminSettings from "./components/AdminPanal/AdminSettings";
import RolePermission from "./components/AdminPanal/RolePermission";
import ForgotPassword from "./Auth/ForgotPassword";
import CourseCategory from "./components/AdminPanal/CourseCategory";
import EditInstruction from "./components/AdminPanal/EditInstruction";
import EditDigitalProduct from "./components/InstructorPanel/EditDigitalProduct";
import EditStudent from "./components/AdminPanal/EditStudent";
import EditCertificateTemplates from "./components/AdminPanal/EditCertificateTemplates";
import ResetPassword from "./Auth/ResetPassword";
import ResetPasswordSucessfullPage from "./Auth/ResetPasswordSucessfullPage";
import CourceDetail from "./components/Courses/CourceDetail";
import ProfileLayout from "./components/InstructorPanel/InstructorProfile";
import StudentProfile from "./components/StudentPanal/StudentProfile";
import AdminProfile from "./components/AdminPanal/AdminProfile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import SingleBlog from "./components/Home/SingleBlog";
import StudentAllCources from "./components/StudentPanal/StudentAllCources";
import SuperadminDashboard from "./components/Dashboard/SuperadminDashboard";
import PlanPackage from "./components/SuperadminPanel/PlanPackage";
import PlanRequest from "./components/SuperadminPanel/PlanRequest";
import OrderDetail from "./components/SuperadminPanel/OrderDetails";
import UserInfo from "./components/SuperadminPanel/UserInfo";
import StudentDigitalProducts from "./components/StudentPanal/StudentDigitalProducts";
import AdminDigitalProduct from "./components/AdminPanal/AdminDigitalProduct";
import SuperAdminProfile from "./components/SuperadminPanel/SuperAdminProfile";
import CourseContent from "./components/AdminPanal/CourseContent";
import Cart from "./components/Cart/Cart";
import TermsConditions from "./components/Home/TermsConditions/TermsConditions";
import AboutUs from "./components/Home/Aboutus/AboutUs";
import Careers from "./components/Home/Careers/Careers";
import Helpsupport from "./components/Home/HelpSupport/Helpsupport";
import CookiePolicy from "./components/Home/Cookie/CookiePolicy";
import Privacypolicy from "./components/Home/PrivacyPolicy/Privacypolicy";
import AllCources from "./components/Home/ALLCources/ALLcources";
import LaunchNow from "./components/AdminPanal/LaunchNow";
axios.defaults.withCredentials = true;

const App = () => {
  //----------------------------------------------------------------------------------
  // firebase notification  

  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        console.log("Notification permission:", permission);
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: "BBjIAf4Boh0eKMGte_vq4AjsThPq97dzE_JiasEcLTzbXXvHJT28e5ib9QENEtZEpIciDKfYo0HmLwpFvIVXQOs"
          });
          localStorage.setItem("fcmToken", token)
          console.log("FCM Token:", token);
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    };

    if ("Notification" in window) {
      requestNotificationPermission();

      onMessage(messaging, (payload) => {
        console.log("Foreground message received:", payload);
        const { title, body, icon } = payload.notification;

        if (Notification.permission === "granted") {
          new Notification(title, {
            body,
            icon: icon || "/default-icon.png",
          });
        }
      });
    } else {
      console.log("❌ Notifications are not supported in this browser.");
    }
  }, []);


  //-----------------------------------------------------------------------------

  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Courses />} /> {/* Fixed route */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSucessfullPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/termconditions" element={<TermsConditions/>} />
        <Route path="/privacypolicy" element={<Privacypolicy/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/all-cources" element={<AllCources/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/cookie" element={<CookiePolicy/>} />
         <Route path="/helpsupport" element={<Helpsupport/>} />

        {/* <Route path="/projects"></Route> */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/digitalproduct" element={<DigitalProducts></DigitalProducts>}></Route>
        <Route path="/edit-digital-product/:id" element={<EditDigitalProduct></EditDigitalProduct>}  ></Route>
        <Route path="/product-detail/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/singleblog/:id" element={<SingleBlog />}></Route>   
        <Route path="/viewTranscation" element={<ManageTransaction></ManageTransaction>}></Route>
        <Route path="/newCourse" element={<NewCourse></NewCourse>}></Route>
        <Route path="/student-all-Courses" element={<StudentAllCources></StudentAllCources>}></Route>
        <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/conversation" element={<Conversation></Conversation>}></Route>
        <Route path="/coursecomments" element={<CourseComments></CourseComments>} ></Route>
        <Route path="/certificate" element={<CertificatesPage></CertificatesPage>}></Route>
        <Route path="/edit-template/:id" element={<EditCertificateTemplates></EditCertificateTemplates>}></Route>
        <Route path="/descussiontrending" element={<Descussiontrending></Descussiontrending>} ></Route>
        <Route path="/descussionnew" element={<DescussionNew></DescussionNew>}></Route>
        <Route path="/descussionunanswered" element={<Dis_unanswered></Dis_unanswered>}></Route>
        <Route path="/descussionmostlike" element={<DiscussionMostLike></DiscussionMostLike>} ></Route>
        <Route element={<ReviewsRating></ReviewsRating>} ></Route>
        <Route path="/student-courses"  element={<Mc_Dashboard></Mc_Dashboard>}></Route>
        <Route path="/student-digitalProducts"   element={<StudentDigitalProducts/>} ></Route>
        <Route path="/manage-student" element={<ManageStudent></ManageStudent>} ></Route>
        <Route path="/edit-student/:id" element={<EditStudent></EditStudent>} ></Route>
        <Route path="/manage-instructors"  element={<ManageInstructors></ManageInstructors>}></Route>
        <Route path="/instructor-detail/:id" element={<InstructorDetails />} />
        <Route path="/manage-courses" element={<ManageCourses></ManageCourses>}></Route>
        <Route path="/edit-instruction/:id" element={<EditInstruction></EditInstruction>}></Route>
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/course-category" element={<CourseCategory />} />
        <Route path="/blog-articles" element={<Blogs_article></Blogs_article>}></Route>
        <Route path="/course-content/:id" element={<CourseContent />} />
        <Route path="/discussion-details/:id" element={<DiscussionDetails />} />
  
        <Route path="/assessment-details/:id" element={<AssessmentDetails />} />
        <Route  path="/CertificateTemplate"  element={<CertificateTemplates></CertificateTemplates>}></Route>
        <Route  path="/CertificateManagemnet"  element={<CertificateManagement></CertificateManagement>}></Route>
        <Route  path="/adminSettings" element={<AdminSettings></AdminSettings>}></Route>
        <Route path="/refund-details/:id" element={<RefundDetails />} />
        <Route  path="/RolePermission"  element={<RolePermission></RolePermission>}></Route>
      
        <Route path="/student-details/:id" element={<StudentDetails />} />
        <Route path="/assignment" element={<Assignments></Assignments>}></Route>
        <Route path="/setting" element={<Setting></Setting>}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/digital" element={<MyDigital />} />
        <Route path="/marketProduct/:id" element={<MarketProduct />} />
        <Route path="/admin-digital-product" element={<AdminDigitalProduct />} />
        <Route path="/Launch-Now" element={<LaunchNow />} />

          <Route path="/assessment-details/:id" element={<AssessmentDetails />} />
          <Route path="/CertificateTemplate" element={<CertificateTemplates></CertificateTemplates>}></Route>
          <Route path="/CertificateManagemnet" element={<CertificateManagement></CertificateManagement>}></Route>
          <Route path="/adminSettings" element={<AdminSettings></AdminSettings>}></Route>
          <Route path="/refund-details/:id" element={<RefundDetails />} />
          <Route path="/RolePermission" element={<RolePermission></RolePermission>}></Route>
        
          <Route path="/student-details/:id" element={<StudentDetails />} />
          <Route path="/assignment" element={<Assignments></Assignments>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/digital" element={<MyDigital />} />
          <Route path="/marketProduct/:id" element={<MarketProduct />} />
          <Route path="/admin-digital-product" element={<AdminDigitalProduct />} />

          <Route path="/Cource-Detail/:id" element={<CourceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsDetail/:id" element={<BlogDeatils />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/instructorSignup" element={<InstructorSignup />} />
          <Route path="/business" element={<Business />} />
          <Route path="/aipowered" element={<AIPowered />} />
          <Route path="/launchpage" element={<LaunchPage />} />
          <Route path="/instructor-profile" element={<ProfileLayout></ProfileLayout>}></Route>
          <Route path="/student-profile" element={<StudentProfile></StudentProfile>}></Route>
          <Route path="/admin-profile" element={<AdminProfile></AdminProfile>}></Route>
          <Route path="/change-password" element={<ChangePassword></ChangePassword>}></Route>
          {/* // super-admin */}
          <Route path="/superadmin-dashboard" element={<SuperadminDashboard />} />
          <Route path="/plan-package" element={<PlanPackage />} />
          <Route path="/plan-request" element={<PlanRequest />} />
          <Route path="/order-details" element={<OrderDetail />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/superadmin-profile" element={<SuperAdminProfile />} />

        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
