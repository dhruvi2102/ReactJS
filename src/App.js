import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home.js";
import { AuthProvider } from "./components/Authentication/AuthContext";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Profile from "./components/Profile/Profile.js";
import Settings from "./components/Settings/Settings.js";
import Privaterouter from "./components/Authentication/Privaterouter.js";
import { useAuth } from "./components/Authentication/AuthContext";
//import { Provider } from "react-redux";
//import store from "./Redux/store.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Courses from "./components/Courses/Courses.js";
import AboutUs from "./components/AboutUs/Aboutus.js";
import Contact from "./components/Contact/Contact.js";
import Payment from "./components/Payment/Payment.js";
import Confirmation from "./components/Confirmation/Confirmation.js";
import EnrolledCourses from "./components/EnrolledCourses/EnrolledCourses.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Quiz from "./components/Quiz/Quiz.js";
import Pdfs from "./components/Pdfs/Pdfs.js";
import {
  ThemeContext,
  ThemeContextProvider,
} from "./components/ThemeContext/ThemeContext.js";
function App() {
  //const location = useLocation();
  return (
    //<Provider store={store}>
    <AuthProvider>
      <ThemeContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
            <Route
              path="/enrolledcourses"
              element={<EnrolledCourses />}
            ></Route>
            <Route path="/sidebar" element={<Sidebar />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/pdfs" element={<Pdfs />}></Route>
          </Routes>
        </Router>
      </ThemeContextProvider>
    </AuthProvider>
    //</Provider>
  );
}

export default App;
