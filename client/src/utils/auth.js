import api from "./axios";


export const loginUser = (data) => {
  return api.post("/login", data);
};


export const registerUser = (data) => {
  return api.post("/register", data);
};


export const logoutUser = () => {
  return api.post("/logout");
};

