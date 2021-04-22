import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";

export const Me = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("FormaLab");
    let payload = "";
    try {
      payload = jwtDecode(token);
    } catch (error) {
      console.log("error");
    }
    if (!payload) {
      console.log("error");
      //   return <div>No Data </div>;
    }
    getProfile(payload.id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return user;
};
