import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbare from "./components/Navbar";
import Films from "./components/pages/Films";
import Rooms from "./components/pages/Rooms";
import Screening from "./components/pages/Screening";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Contact from "./components/pages/Contact";

function App() {
  const location = useLocation();

  // Hide navbar on login and signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbare />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
