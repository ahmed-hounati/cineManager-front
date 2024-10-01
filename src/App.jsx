import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbare from "./components/Navbar";
import Films from "./components/Films";
import Rooms from "./components/Rooms";
import Screening from "./components/Screening";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
