import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from './../service/poll.service';


@Component({
	selector: 'polls',
	templateUrl: 'app/polls/polls.html',
	providers: [PollService]
})

export class PollsComponent implements OnInit {
	polls;
	connection;
	
	constructor(private route: ActivatedRoute, private pollService:PollService) {}

	ngOnInit():void
	{
		this.polls = this.route.snapshot.data['polls'];
		this.connection = this.pollService.getLiveVotes().subscribe(message => {
	      this.updateVotes(message);
	    })
	}

	private updateVotes(message:any):void
	{
		for (let i = 0; i < this.polls.length; i++) {
			if(this.polls[i]._id === message.pollId)
			{
				for(let x = 0; x < this.polls[i].options.length; x++)
				{
					if(this.polls[i].options[x]["_id"] == message.option._id)
					{
						this.polls[i].options[x].votes = message.option.votes;
					}
				}
			}
		}
		
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
		poll.voted = true;
		this.pollService.sendVote({pollId:poll._id,option:option});
	}
}