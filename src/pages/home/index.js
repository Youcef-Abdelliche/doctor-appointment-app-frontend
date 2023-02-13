import { logout } from "../../services/auth.service";
import { Navigate } from "react-router-dom";
import LoginPage from "../login";
import { DatePicker } from "antd";

const HomePage = () => {
  // const refresh_token = localStorage.getItem("refresh_token");
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return <Navigate to={<LoginPage />} replace />;
  }
  return (
    <div>
      <h1>Weclome Youcef </h1>
      <p>
        Your access token is:
        <br />
        {access_token}
      </p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
