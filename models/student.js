const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create student schema & model
const studentSchema = new Schema({
	name : {
		type : String,
	},
	roll : {
		type : String,
		required : [true, 'roll field is required']
	},
	present : {
		type : Boolean,
		default : true
	}
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;