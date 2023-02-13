import { useState } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import LoginForm from "./loginForm";
import Page from "./page";

const LoginPage = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Page />
      {/* <h1>Login page</h1> */}
      {/* <form>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <button
          type="button"
          onClick={async () => {
            await login(email, password);
          }}
        >
          Login
        </button>
      </form> */}
      {/* <LoginForm /> */}
    </div>
  );
};

export default LoginPage;
