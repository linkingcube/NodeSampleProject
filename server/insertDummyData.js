var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node_sample_db');

var PollSchema = new mongoose.Schema({
    question: String,
    options: [{
        text: String,
        votes: Number,
    }]
});

var Poll = mongoose.model("Poll",PollSchema);
var poll = new Poll({
	question: "what is your braces placement style?",
	options:[
	{
		text: "K&R",
		votes: 0
	},{
		text: "Allman",
		votes: 0
	},{
		text: "GNU",
		votes: 0
	},
	{
		text: "Whitesmiths",
		votes: 0
	},
	{
		text: "Horstmann",
		votes: 0
	},{
		text: "Pico",
		votes: 0
	},
	{
		text: "Ratliff",
		votes: 0
	},
	{
		text: "Lisp",
		votes: 0
	},
	{
		text: "Haskell",
		votes: 0
	}]
});

poll.save(function(err){
	if(err)
	{
		console.log(err);
		return;
	}
	console.log("Some Dummy Data where added.");
});

