const express = require('express');
const mongoose = require('mongoose');

// Set up our express app
const app = express();

// Connect to mongodb
const dbURI = 'mongodb://localhost:27017/student';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log('MongoDB connection successful');
	// Listen for requests
	app.listen(process.env.port || 4000, function() {
		console.log('Ready to go !');
	});
}).catch((err) => {
	console.log(err);
});

app.use(express.static('public'));

app.use(express.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next) {
	res.status(422).send({error : err.message});
});