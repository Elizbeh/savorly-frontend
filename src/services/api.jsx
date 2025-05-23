import axios from 'axios';

// import `https` in development for self-signed cert bypass
const isDev = import.meta.env.DEV;

let httpsAgent;

if (isDev) {
  // Dynamically import 'https' only in development to avoid bundling it in production
  const httpsModule = await import('https');
  httpsAgent = new httpsModule.Agent({
    rejectUnauthorized: false, // Allow self-signed certs in dev
  });
}

// Define the HTTPS base URL
const basePath = import.meta.env.BASE_URL || '/';
// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  ...(isDev && httpsAgent ? { httpsAgent } : {}), // Only for dev
});


// Add an interceptor for handling errors

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      if (!window.location.hash.includes('#/login')) {
        window.location.href = `${basePath}#/login`;
      }
    } else {
      console.error('API Error:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);


export default api;
