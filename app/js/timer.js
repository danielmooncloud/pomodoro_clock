

export default class Timer {
	constructor(timeObject) {
		this.minutes = timeObject.minutes;
		this.seconds = timeObject.seconds;
		this.deadline;
	}

	start() {
		this.deadline = Date.parse(new Date()) + (this.minutes*60*1000 + this.seconds*1000); 
	}

	reset(timeObject) {
		this.minutes = timeObject.minutes;
		this.seconds = timeObject.seconds;
	}

	getTimeRemaining() {
		if(this.minutes + this.seconds >= 0) {
			this.minutes = Math.floor((this.deadline - Date.parse(new Date()))/60000); 
			this.seconds = Math.floor(((this.deadline - Date.parse(new Date()))/1000) % 60);
		}
		return {minutes: this.minutes, seconds: this.seconds};
	}
}


