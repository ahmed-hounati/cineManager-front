import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Films from "./components/pages/Films";
import Rooms from "./components/pages/Rooms";
import Screening from "./components/pages/Screening";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Contact from "./components/pages/Contact";
import AuthService from "./services/auth.service";
import Dashboard from "./components/pages/Dashboard";
import Forget from "./components/pages/Forget";
import ResetPassword from "./components/pages/ResetPassword";
import Screen from "./components/pages/Screen";
import Reservation from "./components/pages/Reservation";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Hide navbar on login and signup pages
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forget-password" ||
    location.pathname === "/reset-password";

  // Protected Route Component
  const PrivateRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // Guest Route Component to prevent authenticated users from accessing login/signup
  const GuestRoute = ({ children }) => {
    return currentUser ? <Navigate to="/dashboard" /> : children;
  };

  return (
    <>
      {!hideNavbar && (
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Guest-Only Routes */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login setCurrentUser={setCurrentUser} />
            </GuestRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup setCurrentUser={setCurrentUser} />
            </GuestRoute>
          }
        />

        <Route
          path="/forget-password"
          element={
            <GuestRoute>
              <Forget setCurrentUser={setCurrentUser} />
            </GuestRoute>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <GuestRoute>
              <ResetPassword setCurrentUser={setCurrentUser} />
            </GuestRoute>
          }
        />

        {/* Private Routes - Only accessible when logged in */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/reservation/:id"
          element={
            <PrivateRoute>
              <Reservation />
            </PrivateRoute>
          }
        />
        <Route
          path="/screen/:id"
          element={
            <PrivateRoute>
              <Screen />
            </PrivateRoute>
          }
        />
        <Route
          path="/films"
          element={
            <PrivateRoute>
              <Films />
            </PrivateRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <PrivateRoute>
              <Rooms />
            </PrivateRoute>
          }
        />
        <Route
          path="/screening"
          element={
            <PrivateRoute>
              <Screening />
            </PrivateRoute>
          }
        />
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
