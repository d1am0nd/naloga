var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    hours: { type: Number, require: true, default: 0 },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task', required: true }]
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;