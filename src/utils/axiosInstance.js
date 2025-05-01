import axios from "axios";
import BASE_URL from "./baseURL";
import { decryptToken } from "../utils/DecodedToken";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach token (if using auth)
axiosInstance.interceptors.request.use(
  (config) => {
    // Fetch token from localStorage here
    const token = localStorage.getItem("token");

    if (token) {
      const decryptedToken = decryptToken(token);
      console.log("Decrypted Token:", decryptedToken);

      // If token contains JSON string, parse it — otherwise directly attach
      try {
        const parsedToken = decryptedToken ? JSON.parse(decryptedToken) : null;
        console.log("Parsed Token:", parsedToken);

        if (parsedToken) {
          config.headers.Authorization = `Bearer ${parsedToken}`;
        }
      } catch (error) {
        // In case decryptedToken is not JSON string
        config.headers.Authorization = `Bearer ${decryptedToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized. Redirect or show toast here.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
 