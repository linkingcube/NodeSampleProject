import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class PollService {
	private url:string = 'http://localhost:3000';
	private socket;

	sendVote(vote)
	{
		this.socket.emit('add-vote', vote); 
	}

	getLiveVotes()
	{
		let observable = new Observable(observer => {
			this.socket = io();
			this.socket.on('live-vote',(data)=>{
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			}
		});
		return observable;
	}
}