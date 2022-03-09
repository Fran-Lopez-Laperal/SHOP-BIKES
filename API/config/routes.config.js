const createError = require('http-errors')
const express = require('express');
const router = express.Router();



router.use((req, res, next) => next(createError(404, 'Route not found')));

router.use((error, req, res, next) => {
    console.error(error);

    const data = {
        message: error.message
    };

    res.status(error.status).json(data)
})

module.exports = router;