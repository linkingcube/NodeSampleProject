import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiClient{

	constructor(private http:Http)
	{

	}

	getAllPolls():Promise<any> 
	{		
		return new Promise<any>(resolve => {
			this.http.get("/api")
				.subscribe(
					response => resolve(response.json()),
					err => resolve(err.json())
				);
		});
	}
}