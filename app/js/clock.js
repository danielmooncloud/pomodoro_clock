import pubSub from "./pubsub";


export default class Clock {
	constructor(Timer) {
		this.cacheDom();
		this.bindEvents();
		this.timeObject = {minutes: 1, seconds: 0};
		this.breakTimeObject = {minutes: 1, seconds: 0};
		this.timer = new Timer(this.timeObject);
		this.breakTimer = new Timer(this.breakTimeObject);
		this.currentTimer;
		this.interval;
		this.inProgress = false;
		this.paused = false;
		this.setTimer(this.timer);
		this.updateTimerLength(0);
		this.updateBreakTimerLength(0);
	}

	cacheDom() {
		this.$header = $(".header");
		this.$lower = $(".lower");
		this.$start = this.$header.find(".start");
		this.$pause = this.$header.find(".pause");
		this.$reset = this.$header.find(".reset");
		this.$sub = this.$lower.find(".sub");
		this.$add = this.$lower.find(".add");
		this.$subbreak = this.$lower.find(".subbreak");
		this.$addbreak = this.$lower.find(".addbreak");
	}

	bindEvents() {
		this.$start.click(() => {
			if(!this.inProgress) {
				this.startTimerInterval();
			}
		});
		this.$pause.click(() => {
			this.pause();
		});
		this.$reset.click(() => {
			this.reset();      
		});
		this.$add.click(() => {
			this.updateTimerLength(1);
		});
		this.$sub.click(() => {
			this.updateTimerLength(-1);
		});
		this.$addbreak.click(() => {
			this.updateBreakTimerLength(1);
		});
		this.$subbreak.click(() => {
			this.updateBreakTimerLength(-1);
		});
	}

	startTimerInterval() {
		this.inProgress = true;
		this.currentTimer.start();
		this.interval = setInterval(() => {
			const {minutes, seconds} = this.currentTimer.getTimeRemaining();
			const timeDisplay = seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
			pubSub.publish("updateTime", timeDisplay);
			if(minutes + seconds === 0) {
				this.switchToBreak();
			}    
		}, 1000);
	}

	switchToBreak() {
		if(!this.breakTime) {
			clearInterval(this.interval);
			this.setTimer(this.breakTimer);
			this.breakTime = true;
			this.startTimerInterval();
		} else {
			clearInterval(this.interval);
		}
	}

	setTimer(timer) {
		const {minutes, seconds} = timer;
		this.currentTimer = timer;
		const timeDisplay = seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
		pubSub.publish("updateTime", timeDisplay);
	}

	pause() {
		if(!this.paused) {	
			clearInterval(this.interval);
		} else {
			this.startTimerInterval();     
		}
		this.paused = !this.paused;
	}

	updateTimerLength(num) {
		this.timeObject.minutes = Math.max(this.timeObject.minutes + num, 1);
		const {minutes, seconds} = this.timeObject;
		const timeDisplay = seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
		pubSub.publish("updateTimerLength", timeDisplay);
		if(!this.inProgress) this.reset();
	}

	updateBreakTimerLength(num) {
		this.breakTimeObject.minutes = Math.max(this.breakTimeObject.minutes + num, 1);
		const {minutes, seconds} = this.breakTimeObject;
		const timeDisplay = seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
		pubSub.publish("updateBreakTimerLength", timeDisplay);
		if(!this.breakTime) this.breakTimer.reset(this.breakTimeObject);
	}

	reset() {
		clearInterval(this.interval);
		this.paused = this.inProgress = false;
		this.timer.reset(this.timeObject);
		this.breakTimer.reset(this.breakTimeObject);
		this.setTimer(this.timer);
	}

}


