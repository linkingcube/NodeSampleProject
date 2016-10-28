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
var PollsComponent = (function () {
    function PollsComponent(route) {
        this.route = route;
    }
    PollsComponent.prototype.ngOnInit = function () {
        this.polls = this.route.snapshot.data['polls'];
    };
    PollsComponent.prototype.getOptionValue = function (poll, option) {
        var total = 0;
        for (var i = 0; i < poll.options.length; i++) {
            total += poll.options[i].votes;
        }
        return (option.votes / total) * 100;
    };
    PollsComponent.prototype.voteFor = function (poll, option) {
        option.votes++;
        poll.voted = true;
    };
    PollsComponent = __decorate([
        core_1.Component({
            selector: 'polls',
            templateUrl: 'app/polls/polls.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PollsComponent);
    return PollsComponent;
}());
exports.PollsComponent = PollsComponent;
//# sourceMappingURL=polls.component.js.map