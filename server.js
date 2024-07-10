const express = require('express')
const app = express();
const db = require('./db')
const Person = require("./models/person")
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;  
const menuItems = require('./models/menuItems')

app.get('/', function (req, res) {
  res.send('Hello World')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)   
 
app.listen(PORT)