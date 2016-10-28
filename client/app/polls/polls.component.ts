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

	public getOptionValue(poll:any, option:any):number
	{
		let total:number = 0;
		for (let i = 0; i < poll.options.length; i++) {
			total += poll.options[i].votes;
		}
		return (option.votes/total)*100;
	}

	public voteFor(poll:any, option:any):void
	{
		option.votes++;
		poll.voted = true;
	}
}