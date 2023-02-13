// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/index";
import HomePage from "./pages/home/index";
import ProfilePage from "./pages/profile";
import ProtectedRoute from "./components/protectedRoute";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <center>
                <h1>There's nothing here: 404!</h1>
              </center>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
