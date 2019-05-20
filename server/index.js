const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const port = 3003;
const db = require('../database');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use(express.static('../public/'));

App.listen(port, () => { console.log(`listening on port ${port}!`)});

App.get('/Updates', (req, res) => {
	db.getUpdates((err, data) => {
		if (err) {
			console.log('err getting updates from db!', err);
			return;
		}

		console.log('data received from db!', data);
		res.send(data);
	})
})