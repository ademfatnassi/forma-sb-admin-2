import axios from "axios";
import jwtDecode from "jwt-decode";

const BASE_URL = "http://localhost:4004/";

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}admin/users`).then((res) => res.data);
};

export const deleteUser = (userID) => {
  return axios.delete(`${BASE_URL}admin/${userID}`);
};

export const register = (userInput) => {
  return axios.post(`${BASE_URL}user/register`, userInput);
};
export const login = (userInput) => {
  return axios.post(`${BASE_URL}user/login`, userInput);
};

export const getProfile = (userId) => {
  return axios.get(`${BASE_URL}user/${userId}`);
};

export const IsAdmin = () => {
  let payload = "";
  const token = localStorage.getItem("FormaLab");

  try {
    payload = jwtDecode(token);
    console.log(payload);
  } catch (error) {
    console.log("error");
  }
  if (payload.role === "Admin") {
    return true;
  } else {
    return false;
  }
};
export const IsUser = () => {
  let payload = "";
  const token = localStorage.getItem("FormaLab");

  try {
    payload = jwtDecode(token);
    console.log(payload);
  } catch (error) {
    console.log("error");
  }
  if (payload.role === "User") {
    return true;
  } else {
    return false;
  }
};
