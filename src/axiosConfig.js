import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  //gan token vao header
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  //refrash token
  return response;
}, function (error) {
  
  return Promise.reject(error);
});

export default instance