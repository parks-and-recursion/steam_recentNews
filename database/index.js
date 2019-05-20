const Sequelize = require('sequelize');
const sequelize = new Sequelize('steam_updates', 'root', null);

sequelize
	.authenticate();
	.then(() => {
		console.log('connection successful');
	})
	.cathc((err) => {
		console.log('error connecting to database', err);
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

const getUpdates = (cb) => {
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

Updates.sync() // pass force option in? to auto create table
.then(() => {
	console.log('Updates synced');
})

module.exports.getUpdates = getUpdates;
module.exports.Updates = Updates;