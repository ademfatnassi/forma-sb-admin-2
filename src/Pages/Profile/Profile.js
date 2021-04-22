import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Wrapper from "../../components/Wrapper/Wrapper";
import { getProfile, IsAdmin, IsUser } from "../../services/userService";
import { IsLogged } from "../../utils/IsLogged";

const Profile = () => {
  let history = useHistory();
  IsLogged();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!IsUser()) {
      if (IsAdmin()) {
        history.push("/users");
      } else {
        history.push("/404");
      }
    }
  }, [history]);
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
  return (
    <Wrapper>
      <h1 className="h3 mb-4 text-gray-800">Profile Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Wrapper>
  );
};

export default Profile;
