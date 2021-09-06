import axios from "axios";
import { RegisterFormData, LoginCredentials } from "../types/user";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

//courses
export const fetchCourses = () => API.get(`/courses`);

//authentication
export const registerUser = (userData: RegisterFormData) =>
  API.post("/user/register", userData);
export const login = (credentials: LoginCredentials) =>
  API.post("/user/auth", credentials);
export const logout = () => API.get("/user/logout");
export const profile = () => API.get(`/user/profile`);
export const updateProfile = (userData: any) =>
  API.patch("/user/update", userData);
