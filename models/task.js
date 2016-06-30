var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    connection = mongoose.connection;

var taskSchema = new Schema({
    start: { type: Date },
    finish: { type: Date },
    hours: { type: Number },
    person:  { type: Schema.Types.ObjectId, ref: 'Person', required: true },
    customer:  { type: Schema.Types.ObjectId, ref: 'Customer', required: true }
},
{
    timestamps: true
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;