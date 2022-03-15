const createError = require('http-errors')
const express = require('express');
const router = express.Router();
const products = require('../controllers/products.controller');
const auth = require('../controllers/auth.controller')

router.get("/products", products.list);
router.post("/products", products.create);
router.get("/products/:id", products.detail);
router.delete("/products/:id", products.delete);
router.patch("/products/:id", products.edit);

router.post("/register", auth.register);

router.use((req, res, next) => next(createError(404, 'Route not found')));



module.exports = router;