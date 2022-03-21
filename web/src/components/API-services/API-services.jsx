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




export function getProducts() {
    return http.get("api/products")
}

export function getDetailProduct(id) {
    return http.get(`api/products/${id}`)
}