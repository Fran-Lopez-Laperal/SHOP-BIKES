const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SHOP_BIKES';

mongoose
    .connect(MONGODB_URI, { userNewUrlParser: true, userUnifiedTopology: true})
    .then(() => console.ingo(`Succesfully connected to the database ${MONGODE_URI}`))
    .catch((error) => {
        console.error(`An error ocurred trying to connect to de database ${MONGODB_URI}, error`);
        process.exit(0)
    } )

    process.on('SIGINT', function() {
         mongoose.connection.close(function () {
             console.log('Mongoose disconnected on app termination');
             process.exit(0)
         })
    })

    module.exports.connectionUrl = MONGODB_URI;