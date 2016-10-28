"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var PollService = (function () {
    function PollService() {
        this.url = 'http://localhost:3000';
    }
    PollService.prototype.sendVote = function (vote) {
        this.socket.emit('add-vote', vote);
    };
    PollService.prototype.getLiveVotes = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io();
            _this.socket.on('live-vote', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return PollService;
}());
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map