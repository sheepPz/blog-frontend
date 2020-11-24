import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
} else {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response);
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

function httpApi (config) {
    return axios(config);
}

export {
    httpApi
}