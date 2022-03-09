require('dotenv').config();
const express = require('express');

const app = express();


require('./config/db.config')

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Aplication running 🏃🏼‍♂️ at port 🏔️ ${port}`))