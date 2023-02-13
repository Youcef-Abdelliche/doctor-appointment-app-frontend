import axios from "axios";

const getCurrentUserProfile = () => {
  const access_token = localStorage.getItem("access_token");
  const API_URL = "http://localhost:8000/auth/users/me/";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${access_token}`,
    },
  };
  return axios
    .get(API_URL, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });
};

export default getCurrentUserProfile;
