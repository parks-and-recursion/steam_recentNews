const Sequelize = require('sequelize');
const mysql2 = require('mysql2'); //needed to fix build issue with webpack
const sequelize = new Sequelize('steam_updates', 'root', null, {
	dialect: 'mysql',
	dialectModule: mysql2, //needed to fix issue with webpack
	host: 'localhost',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

sequelize
	.authenticate()
	.then(() => {
		console.log('connection successful yayy');
	})
	.catch((err) => {
		console.log('error connecting to database LOLL', err);
	})

const Updates = sequelize.define('updates', { //defining our updates model

	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	posted_by: {
		type: Sequelize.STRING,
		allowNull: false
	},
	post_date: {
		type: Sequelize.DATEONLY,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	img: {
		type: Sequelize.STRING,
		allowNull: true
	},
	comment_count: {
		type: Sequelize.INTEGER,
		allowNull: true
	} // TO-DO: add additional fields for modals (likes, dislikes, comments, etc)
})

sequelize.sync({ force: false, logging: false }) // pass force option in? to auto create table
.then(() => {
	console.log('Updates synced');
})

const getUpdates = (cb) => {
	console.log('performing get on db!!');

	Updates.findAll()
	.then((data) => {
		console.log('updates successfuly fetched', data);
		cb(null, data);
	})
	.catch((err) => {
		console.log('error encountered retreiving data', err);
		cb(err);
	})
}

module.exports.getUpdates = getUpdates;
module.exports.db = sequelize;
module.exports.Updates = Updates;