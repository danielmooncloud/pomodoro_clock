function Clock() {
	'use strict';
	
	let timer = new Timer(25);
	let breakTimer = new Timer(5);
	let interval;
	let self = this;
	let inProgress = false;
	let breakTime = false;
	let paused = false;
	let minutes;
	let seconds;

	this.init = function() {
		view.init();
		view.renderTime(timer.getLength())
	}

	this.getTimeRemaining = function(deadline) { 
		minutes = Math.floor((deadline - Date.parse(new Date()))/60000); 
		seconds = Math.floor(((deadline - Date.parse(new Date()))/1000) % 60);
		return seconds >= 10 ? minutes + ':' + seconds : minutes + ':0' + seconds
  	}

  	this.clockInterval = function(deadline) {
  		interval = setInterval(function() {
    		let timeRemaining = self.getTimeRemaining(deadline);
    		view.renderTime(timeRemaining);  
    		if(minutes + seconds === 0) self.switchToBreak();    
      	}, 1000);
  	}

  	this.tickTock = function() {
  		let current = breakTime ? breakTimer : timer; 
  		if(!inProgress) {
  			inProgress = true;
  			let deadline = Date.parse(new Date()) + (current.getLength()*60*1000); 
  			this.clockInterval(deadline);     		
  		}	
    },

    this.pause = function() {
      	if(!paused) {	
        	clearInterval(interval);
      	} else {
        	let deadline = Date.parse(new Date()) + (minutes*60*1000) + (seconds * 1000); 
        	this.clockInterval(deadline);     
      	}
      	paused = !paused;
    },

    this.addOneMinute = function(num) {
    	let length = timer.addMinute(num) || 1;
    	view.renderTimeSet(length);
    	if(!inProgress) view.renderTime(length)
    },

	this.addBreakMinute = function(num) {
		let length = breakTimer.addMinute(num) || 1;
		view.renderBreakSet(length);
	},

	this.reset = function() {
		clearInterval(interval);
      	paused = breakTime = inProgress = false;
      	view.renderTime(timer.getLength());
	},

	this.switchToBreak = function() {
		inProgress = false;
		if(!breakTime) {
			clearInterval(interval);
			breakTime = true;
			this.tickTock(breakTimer.getLength());	
		} else {
			this.reset();
		}
	}	

	this.init();

}

