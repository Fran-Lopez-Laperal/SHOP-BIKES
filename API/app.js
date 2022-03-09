require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const app = express();

require('./config/db.config');

app.use(logger('dev'));

const routes = require('./config/routes.config');
app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Aplication running 🏃🏼‍♂️ at port 🏔️ ${port}`));