var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    title: {type: String, required: true, max: 100},
    thumbnail: { type: String, required: true },
    level: {type: Number},
    id: {type: String, required: true, max: 500},
});

module.exports = mongoose.model('Group', GroupSchema);