"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var poll_service_1 = require('./../service/poll.service');
var PollsComponent = (function () {
    function PollsComponent(route, pollService) {
        this.route = route;
        this.pollService = pollService;
    }
    PollsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.polls = this.route.snapshot.data['polls'];
        this.connection = this.pollService.getLiveVotes().subscribe(function (message) {
            _this.updateVotes(message);
        });
    };
    PollsComponent.prototype.updateVotes = function (message) {
        for (var i = 0; i < this.polls.length; i++) {
            if (this.polls[i]._id === message.pollId) {
                for (var x = 0; x < this.polls[i].options.length; x++) {
                    if (this.polls[i].options[x]["_id"] == message.option._id) {
                        this.polls[i].options[x].votes = message.option.votes;
                    }
                }
            }
        }
    };
    PollsComponent.prototype.getOptionValue = function (poll, option) {
        var total = 0;
        for (var i = 0; i < poll.options.length; i++) {
            total += poll.options[i].votes;
        }
        return (option.votes / total) * 100;
    };
    PollsComponent.prototype.voteFor = function (poll, option) {
        poll.voted = true;
        this.pollService.sendVote({ pollId: poll._id, option: option });
    };
    PollsComponent = __decorate([
        core_1.Component({
            selector: 'polls',
            templateUrl: 'app/polls/polls.html',
            providers: [poll_service_1.PollService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, poll_service_1.PollService])
    ], PollsComponent);
    return PollsComponent;
}());
exports.PollsComponent = PollsComponent;
//# sourceMappingURL=polls.component.js.map