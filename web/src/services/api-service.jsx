import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error)
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getProducts(category, name) {

  return http.get('api/products', { params: { category, name } })
}

export function getDetailProduct(id) {
  return http.get(`api/products/${id}`)
}


export function login(user) {
  return http.post('api/login', user)
}

export function register(user) {
  return http.post('api/register', user)
}

export function deleteProduct(id) {
  return http.delete(`/api/products/${id}`);
}

export function userProfile(id) {
  return
}

export function getCart() {

  return http.get('api/shopping-cart')
    .catch(error => {
      if (error.response.status === 404) {
        return undefined
      } else {
        throw error
      }
    })
}

export function addProductToCart(productId) {
  return getCart()
    .then(cart => {
      console.log(cart)
      if (!cart) {
        cart = {
          products: [{
            product: productId,
            amount: 1
          }]
        }
        return upsertCart(cart)
      } else {
        cart = {
          products: [
            {
              product: productId,
              amount: 1
            },
            ...cart.products.map((cartItem) => {
              return {
                amount: cartItem.amount,
                product: cartItem.product.id
              }
            })
          ]
        }
        return upsertCart(cart)
      }
    })
}

export function upsertCart(cart) {
  console.log(cart)
  return http.put('/api/shopping-cart', cart)
}


export function order(order) {
  return http.post('/api/shopping-cart/order', order)
}

export function getOrder() {
  return http.get('/api/orders')
}
