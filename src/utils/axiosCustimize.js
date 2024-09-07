import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response && response.data ? response.data : response;
}, function (error) {
    return error && error.response && error.response.data
        ? Object.values(error.response.data.errors).map(item => {
            toast.error(item[0]);
        })
        : Promise.reject(error);
});

export default instance;