var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    hours: { type: Number, required: true, default: 0 },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task', required: true }]
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;