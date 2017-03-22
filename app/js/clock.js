import Timer from "./timer";


export default class Clock {
	constructor(view) {
		this.view = view;
		this.timer = new Timer(25);
		this.breakTimer = new Timer(5);
		this.interval;
		this.inProgress = false;
		this.breakTime = false;
		this.paused = false;
		this.minutes;
		this.seconds;
	}


	init() {
		this.view.init();
		this.view.renderTime(this.timer.getLength());
	}

	getTimeRemaining(deadline) { 
		this.minutes = Math.floor((deadline - Date.parse(new Date()))/60000); 
		this.seconds = Math.floor(((deadline - Date.parse(new Date()))/1000) % 60);
		return this.seconds >= 10 ? this.minutes + ":" + this.seconds : this.minutes + ":0" + this.seconds;
	}

	clockInterval(deadline) {
		this.interval = setInterval(() => {
			const timeRemaining = this.getTimeRemaining(deadline);
			this.view.renderTime(timeRemaining);  
			if(this.minutes + this.seconds === 0) this.switchToBreak();    
		}, 1000);
	}

	switchToBreak() {
		this.inProgress = false;
		if(!this.breakTime) {
			clearInterval(this.interval);
			this.breakTime = true;
			this.tickTock(this.breakTimer.getLength());	
		} else {
			this.reset();
		}
	}	

	tickTock() {
		const current = this.breakTime ? this.breakTimer : this.timer; 
		if(!this.inProgress) {
			this.inProgress = true;
			const deadline = Date.parse(new Date()) + (current.getLength()*60*1000); 
			this.clockInterval(deadline);     		
		}	
	}

	pause() {
		if(!this.paused) {	
			clearInterval(this.interval);
		} else {
			const deadline = Date.parse(new Date()) + (this.minutes*60*1000) + (this.seconds * 1000); 
			this.clockInterval(deadline);     
		}
		this.paused = !this.paused;
	}

	addOneMinute(num) {
		const length = this.timer.addMinute(num) || 1;
		this.view.renderTimeSet(length);
		if(!this.inProgress) this.view.renderTime(length);
	}

	addBreakMinute(num) {
		const length = this.breakTimer.addMinute(num) || 1;
		this.view.renderBreakSet(length);
	}

	reset() {
		clearInterval(this.interval);
		this.paused = this.breakTime = this.inProgress = false;
		this.view.renderTime(this.timer.getLength());
	}

}


