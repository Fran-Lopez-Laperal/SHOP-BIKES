const createError = require('http-errors')
const express = require('express');
const router = express.Router();
const products = require('../controllers/products.controller');
const auth = require('../controllers/auth.controller')
const cart = require("../controllers/shoppingCart.controller")
const order = require('../controllers/orders.controller')
const secure = require('../middlewares/mid.secure')

router.get("/products", products.list);
router.post("/products", secure.isAuthenticated, secure.isAdmin, products.create);
router.get("/products/:id", products.detail);
router.delete("/products/:id", secure.isAuthenticated, secure.isAdmin, products.delete);
router.patch("/products/:id", secure.isAuthenticated, secure.isAdmin, products.edit);

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", secure.isAuthenticated, auth.logout)
router.get("/profile", secure.isAuthenticated, auth.profile)

router.put("/shopping-cart", secure.isAuthenticated, cart.upsert)
router.get("/shopping-cart", secure.isAuthenticated, cart.detail)
router.post("/shopping-cart/order", secure.isAuthenticated, cart.order)

router.get("/orders", secure.isAuthenticated, order.ordersList)

router.use((req, res, next) => next(createError(404, 'Route not found')));



module.exports = router;

