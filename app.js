require('marko/node-require'); // Allow Node.js to require and load `.marko` files
const express = require('express');

const markoExpress = require('marko/express');
const app = express();

app.use(markoExpress());
app.use(express.static(`${__dirname}/public/dist`));

const home = require('./marko/pages/home');
app.get('/', (request, response) => {
	response.marko(home, {
		arriving: false,
		leaving: true,
		people:[{name:'Jeff',age:27},{name:'nick',age:32}]
	});
});

const contact = require('./marko/pages/contact');
console.log("contact:",contact)
app.get('/contact', (request, response) => {
	response.marko(contact, {
		arriving: false,
		leaving: true,
		people:[{name:'Jeff',age:23},{name:'nick',age:99}]
	});
});

const classes = require('./marko/pages/classes');
app.get('/classes', (request, response) => {
	response.marko(classes, {
		arriving: false,
		leaving: true,
		people:[{name:'Jeff',age:23},{name:'nick',age:99}]
	});
});

app.listen(3000, () => {
	console.log('Hello from FKI Server');
});