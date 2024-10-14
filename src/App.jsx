import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import Rooms from "./pages/Rooms";
import Screening from "./pages/Screening";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AuthService from "./services/auth.service";
import Forget from "./pages/Forget";
import ResetPassword from "./pages/ResetPassword";
import Screen from "./pages/Screen";
import Reservation from "./pages/Reservation";
import Dashboard from "./pages/UserDashboard";
import Account from "./pages/Account";

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
    location.pathname === "/reset-password" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/account";

  // Protected Route Component
  const PrivateRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // Guest Route Component to prevent authenticated users from accessing login/signup
  const GuestRoute = ({ children }) => {
    return currentUser ? <Navigate to="/screening" /> : children;
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
          path="/reservation/:id"
          element={
            <PrivateRoute>
              <Reservation />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
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
