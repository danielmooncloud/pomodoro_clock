import pubSub from "./pubsub";
import Timer from "./timer";



export default class Clock {
	constructor(initialTimeObject, initialBreakTimeObject) {
		this.timeObject = initialTimeObject;
		this.breakTimeObject = initialBreakTimeObject;
		this.mainTimer = new Timer(this.timeObject);
		this.breakTimer = new Timer(this.breakTimeObject);
		this.currentTimer;
		this.interval;
		this.inProgress = false;
		this.paused = false;
		this.breakTime = false;
		this.setCurrentTimer(this.mainTimer);
		this.updateMainTimerLength(0);
		this.updateBreakTimerLength(0);
	}


	//starts the clock
	startTimerInterval() {
		//Lets us know the clock is currently counting
		this.inProgress = true;
		//Creates a reference point for the starting time
		this.currentTimer.start();
		//Starts the countdown
		this.interval = setInterval(() => {
			//Grab the remaining time data from the timer
			const {minutes, seconds} = this.currentTimer.getTimeRemaining();
			//Formats the time data for the view
			const timeDisplay = this.formatTime({minutes, seconds});
			pubSub.publish("updateTime", timeDisplay);
			//Stop or switch timers when the time runs out
			if(minutes + seconds === 0) {
				this.endsTimer();
			}    
		}, 1000);
	}


	//Handles cases when the timer's run out of time
	endsTimer() {
		clearInterval(this.interval);
		if(!this.breakTime) {
			//Start Breaktime
			this.setCurrentTimer(this.breakTimer);
			this.breakTime = true;
			this.startTimerInterval();
		} else {
			//Lets us know the clock is no longer counting
			this.inProgress = false;
		}
	}


	setCurrentTimer(timer) {
		//Gets the time (in minutes and seconds) that the timer is set to
		const {minutes, seconds} = timer;
		//formats the time into a string
		const timeDisplay = this.formatTime({minutes, seconds});
		this.currentTimer = timer;
		pubSub.publish("updateTime", timeDisplay);
	}


	pause() {
		//Is the game already paused ? Start the clock again : pause the clock
		this.paused ? this.startTimerInterval() : clearInterval(this.interval);
		this.paused = !this.paused;
	}


	updateMainTimerLength(num) {
		//The timers cannot have 0 or negative time
		this.timeObject.minutes = Math.max(this.timeObject.minutes + num, 1);
		const timeDisplay = this.formatTime(this.timeObject);
		pubSub.publish("updateTimerLength", timeDisplay);
		//If the clock isn't currently counting, update the time on the clock
		if(!this.inProgress) this.reset();
	}


	updateBreakTimerLength(num) {
		//The timers cannot have 0 or negative time
		this.breakTimeObject.minutes = Math.max(this.breakTimeObject.minutes + num, 1);
		const timeDisplay = this.formatTime(this.breakTimeObject);
		pubSub.publish("updateBreakTimerLength", timeDisplay);
		//If its not breaktime, update the breakTimer with the new time immediately
		if(!this.breakTime) this.breakTimer.reset(this.breakTimeObject);
	}


	reset() {
		//stop the clock
		clearInterval(this.interval);
		//reset the settings
		this.paused = this.inProgress = false;
		//reset the timers
		this.mainTimer.reset(this.timeObject);
		this.breakTimer.reset(this.breakTimeObject);
		//set the current timer
		this.setCurrentTimer(this.mainTimer);
	}


	formatTime({minutes, seconds}) {
		if(minutes >= 0 && seconds >= 0) {
			return seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
		} else {
			return "0:00";
		}
	}

}


