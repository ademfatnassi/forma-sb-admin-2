import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const IsLogged = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("FormaLab");
    let payload = "";
    try {
      payload = jwtDecode(token);
    } catch (error) {
      console.log("error");
      history.push("/login");
    }
    console.log(payload);
    if (!payload) {
      console.log("Invalid Token");
      history.push("/login");
    }
  }, [history]);
};
