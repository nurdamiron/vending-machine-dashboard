// src/services/axiosInstance.js
import axios from 'axios';
import { auth } from '../firebase';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Замените на ваш URL
});

api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
