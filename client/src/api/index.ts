import axios from 'axios';
import { userFormData, loginCredentials } from "../types/user";

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

//courses
export const fetchCourses = () => API.get(`/courses`);

//authentication
export const registerUser = (userData: userFormData) => API.post('/user/register', userData)
export const login = (credentials: loginCredentials) => API.post('/user/auth', credentials, { withCredentials: true })
export const profile = () =>  API.get(`user/profile`)
