const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./app/routing/html-routes.js')(app);

const port = 3000;
app.listen(port, function(){
  console.log(`server listening on ${port}`);
})