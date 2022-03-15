const expressSession = require("express-session");
const MongoStore = require("connect-mongo");
const {connectionUrl} = require('../config/db.config')
const User = require('../models/user.model')



const session = expressSession({
    secret: process.env.SESSION_SECRET || 'super secret (change it)',
    saveUninitialized: false,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: process.env.SESSION_SECURE === 'true',
        maxAge:  parseInt(process.env.SESSION_MAX_AGE) || (3600 * 24 * 7 * 1000),
    },
    store: new MongoStore({
        mongoUrl: connectionUrl,
        ttl: 3600 * 24 * 7
    })
})

module.exports.session = session



module.exports.loadUser = (req, res, next) => {
    const { userId } = req.session;

    if (userId) {
        User.findById(userId)
            .then(user => {
                req.user = user;
                res.locals.currentUser = user;
                next();
            }).catch(error => next(error))

    } else {
        next()
    }

}


