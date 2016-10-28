"use strict";
var router_1 = require('@angular/router');
var polls_component_1 = require('./polls/polls.component');
var polls_resolver_1 = require('./service/polls.resolver');
var appRoutes = [
    {
        path: '',
        component: polls_component_1.PollsComponent,
        resolve: {
            polls: polls_resolver_1.PollsResolver
        }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map