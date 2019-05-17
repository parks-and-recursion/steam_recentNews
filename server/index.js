const express = require('express');
const App = express();
const bodyParser = require('body-parser');

App.use(express.static('../public/'));