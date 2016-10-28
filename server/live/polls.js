var Poll = require('./../database/poll');

module.exports = function(io) {
    io.on('connection', function(socket) {
        socket.on('message', function(message) {
            socket.emit('ditConsumer', message.value);
        });
        socket.on('add-vote', function(message) {
            message.option.votes++;

            Poll.findById(message.pollId, function(err, poll) {
                if (err) {
                    //handel error
                    console.log("err:", err);
                    return;
                }

                var option = poll.options.id(message.option._id);
                option.votes = message.option.votes;
                poll.save(function() {
                    if (err) {
                        //handel error
                        console.log("err:", err);
                        return;
                    }
            		io.emit('live-vote', message);
                });
            });
        });
    });
};
