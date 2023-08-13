import axios from 'axios';
import { getSession } from 'next-auth/react';

// Create an Axios instance with base URL and common headers
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE_BASE, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        const session  = await getSession();
    // Add your authentication token logic here
        if (session) {
            const accessToken = session.user.accessToken;
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;