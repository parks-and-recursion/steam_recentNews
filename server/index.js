const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const port = 3003;
const db = require('../database');
const path = require('path');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use(express.static('/mnt/c/Users/dough/Documents/hack_reactor/steam_FEC/steam_recentNews/public'));

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