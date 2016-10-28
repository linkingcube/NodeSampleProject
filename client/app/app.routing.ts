import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { ApiClient } from './service/api-client.service';
import { PollsResolver } from './service/polls.resolver';


const appRoutes: Routes = [
	{
		path: '',
		component: PollsComponent,
		resolve: {
     		polls: PollsResolver
    	}
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);