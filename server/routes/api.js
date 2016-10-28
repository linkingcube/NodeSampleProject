var express = require('express');
var router = express.Router();
var Poll = require('./../database/poll');

/*var poll = new Poll({
    question: "what kind of fruit do you like?",
    options: [{
        text: "banana",
        votes: 5,
    },{
        text: "Orange",
        votes: 3,
    },{
        text: "Tomato",
        votes: 1,
    }]
});

poll.save(function(err) {
    if (err)
        console.log(err);
    else
        console.log(poll);
});*/

router.get('/', function(req, res) {
    Poll.find(function(err,polls){
    	if (err) {
    		res.send(err);
    	}
    	else
    	{
    		res.send(polls);
    	}
    });
});

module.exports = router;
