import axios from "axios"


const service = axios.create({
  baseURL: '',
  timeout: 10 * 1000, // 请求超时时间
  headers: { "Content-Type": "application/json;charset=UTF-8" }
});


// 请求拦截
service.interceptors.request.use((config) => {


  return config;
});

// 响应拦截
service.interceptors.response.use((response) => {
  const data = response.data;
  if (data.success ) {
    return data;
  } else {

    return Promise.reject(data);
  }
  return data
},
  (err) => {
    // 
    return Promise.reject(err.response);
  }
);



export default service;



