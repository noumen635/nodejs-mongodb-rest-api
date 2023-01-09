const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Get a list of students from the database
router.get('/students', function(req, res, next){
	Student.find({}).then(function(students) {
		res.send(students);
	}).catch(next);
});

// Add a new student to database (by using the json format in the body section)
router.post('/students', function(req, res, next){
	Student.create(req.body).then(function(student){
		res.send(student);
	}).catch(next);
});

// Update a student in the database
router.put('/students/:id', function(req, res){
	Student.findOneAndUpdate({_id : req.params.id}, req.body).then(function(student) {
		res.send(student);
	});
});

// Delete a student in the database
router.delete('/students/:id', function(req, res){
	Student.findOneAndDelete({_id : req.params.id}, req.body).then(function(student) {
		res.send(student);
	});
});

module.exports = router;