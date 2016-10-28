import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'polls',
	templateUrl: 'app/polls/polls.html'
})

export class PollsComponent implements OnInit {
	polls:any;
	
	constructor(private route: ActivatedRoute) {}

	ngOnInit():void
	{
		this.polls = this.route.snapshot.data['polls'];
	}
}