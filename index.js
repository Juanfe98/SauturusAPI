const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./src/routes');
require('dotenv').config();
const dbConnect = require('./src/utils/mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1', routes);

dbConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
