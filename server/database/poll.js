var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node_sample_db');

var PollSchema = new mongoose.Schema({
    question: String,
    options: [{
        text: String,
        votes: Number,
    }]
});

module.exports = mongoose.model('Poll',PollSchema);