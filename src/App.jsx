import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbare from "./components/Navbar";
import Films from "./components/Films";
import Rooms from "./components/Rooms";
import Screening from "./components/Screening";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();

  // Hide navbar on login and signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbare />} {/* Conditionally render the navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/about" element={<About />} />
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
