import { useState, useEffect } from "react";
import getCurrentUserProfile from "../../services/user.service";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getCurrentUserProfile();
      setUserInfo(data);
    }
    fetchData().catch((err) => {
      console.log("err:" + err);
      return err.message;
    });
  }, []);
  return (
    <div>
      <ul>
        <li>Email : {userInfo.email} </li>
        <li>Gender : {userInfo.sex === "M" ? "Man" : "Woman"} </li>
        <li>Firstname : {userInfo.first_name} </li>
        <li>Lastname : {userInfo.last_name} </li>
      </ul>
    </div>
  );
}

export default ProfilePage;
