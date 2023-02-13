import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/jwt/create";
const config = {
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
};

export async function login(email, password) {
  const loginPayload = {
    email,
    password,
  };
  return await axios
    .post(API_URL, loginPayload, config)
    .then((response) => {
      const data = response.data;
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("access_token", data.access);
      // axios.defaults.headers.common["Authorization"] = `JWT ${data["access"]}`;
      window.location.href = "/";
    })
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        console.log(`Login error: ${err.response.data.detail}`);
      } else {
        console.log(`Server error: ${err.message}`);
      }
    });
}

export function logout() {
  try {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  } catch (err) {
    console.log("Logout is not working:", err);
  }
}
