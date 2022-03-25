import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);




export function getProducts(category, name) {
    
    return http.get('api/products/', { params: { category, name } })
}

export function getDetailProduct(id) {
  return http.get(`api/products/${id}`)
}


export function login (user) {
  return http.post('api/login', user)
}

export function register (user) {
  return http.post('api/register', user)
}
