import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL + "/api/v1/users",
  withCredentials: true, 
});


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
       
        await api.post("/refresh-token");


        return api(originalRequest);
      } catch (refreshError) {
        console.log("Refresh failed");

      
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;