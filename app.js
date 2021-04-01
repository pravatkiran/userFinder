const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/connection');

const userRoute = require('./routes/user.route');

const app = express();

app.use(bodyParser.json())

// routes
app.use('/', userRoute);

const port = process.env.PORT || 4000;

sequelize.sync().then(result => {
    app.listen(port, console.log(`app listening to ${port}`))
})
