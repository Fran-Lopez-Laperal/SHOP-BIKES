const createError = require('http-errors')
const express = require('express');
const router = express.Router();
const products = require('../controllers/products.controller');
const auth = require('../controllers/auth.controller')
const secure = require('../middlewares/mid.secure')

router.get("/products",  products.list);
router.post("/products", secure.isAdmin, products.create);
router.get("/products/:id", products.detail);
router.delete("/products/:id",secure.isAdmin, products.delete);
router.patch("/products/:id",secure.isAdmin, products.edit);

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout)
router.get("/profile",secure.isAuthnticated, auth.profile)

router.use((req, res, next) => next(createError(404, 'Route not found')));



module.exports = router;