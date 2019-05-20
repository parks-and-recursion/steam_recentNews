const faker = require('faker');
const db = require('./database');

db.Updates.sync({ force: false }) // force drops the tables and then won't seed successfully, set to false
.then(() => {
	console.log('tables dropped and synced');
})

const updates = []; //initiate the array to be seeded

for (var i = 0; i < 100; i++) { //create 100 entries and fake content

	updates.push({
		id: faker.random.number(),
		posted_by: faker.internet.userName().split(' ').join('_'),
		post_date: faker.date.past(),
		title: faker.lorem.sentence(4, false, 4),
		text: faker.lorem.paragraph(3, false, 5),
		img: faker.image.abstract(), //not all stories need images
		comment_count: faker.random.number()
	})

	// run Updates.create() here?
	//async but for... is not, results in performance issues, use bulkcreate
}

db.Updates.bulkCreate(updates)
.then(() => {
	console.log('fake data seeded!');
})
.catch((err) => {
	console.log('error bulk creating data in db!', err);
})

