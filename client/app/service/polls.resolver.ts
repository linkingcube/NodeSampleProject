import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiClient } from './api-client.service';

@Injectable()
export class PollsResolver implements Resolve<any>
{
	constructor(private apiClient:ApiClient )
	{

	}

	resolve(route: ActivatedRouteSnapshot):Observable<any>|Promise<any>|any
	{
		return Observable.fromPromise(this.apiClient.getAllPolls());
	}
}