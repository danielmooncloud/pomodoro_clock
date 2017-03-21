function Clock() {
	'use strict';
	
	var timer = new Timer(25);
	var breakTimer = new Timer(5);
	var interval;
	var inProgress = false;
	var breakTime = false;
	var paused = false;
	var minutes;
	var seconds;

	var init = function() {
		view.init();
		view.renderTime(timer.getLength())
	}

	var getTimeRemaining = function(deadline) { 
		minutes = Math.floor((deadline - Date.parse(new Date()))/60000); 
		seconds = Math.floor(((deadline - Date.parse(new Date()))/1000) % 60);
		return seconds >= 10 ? minutes + ':' + seconds : minutes + ':0' + seconds
  	}

  	var clockInterval = function(deadline) {
  		interval = setInterval(function() {
    		var timeRemaining = getTimeRemaining(deadline);
    		view.renderTime(timeRemaining);  
    		if(minutes + seconds === 0) switchToBreak();    
      	}, 1000);
  	}

  	var switchToBreak = function() {
		inProgress = false;
		if(!breakTime) {
			clearInterval(interval);
			breakTime = true;
			this.tickTock(breakTimer.getLength());	
		} else {
			this.reset();
		}
	}	

  	this.tickTock = function() {
  		var current = breakTime ? breakTimer : timer; 
  		if(!inProgress) {
  			inProgress = true;
  			var deadline = Date.parse(new Date()) + (current.getLength()*60*1000); 
  			clockInterval(deadline);     		
  		}	
    }

    this.pause = function() {
      	if(!paused) {	
        	clearInterval(interval);
      	} else {
        	var deadline = Date.parse(new Date()) + (minutes*60*1000) + (seconds * 1000); 
        	clockInterval(deadline);     
      	}
      	paused = !paused;
    }

    this.addOneMinute = function(num) {
    	var length = timer.addMinute(num) || 1;
    	view.renderTimeSet(length);
    	if(!inProgress) view.renderTime(length)
    }

	this.addBreakMinute = function(num) {
		var length = breakTimer.addMinute(num) || 1;
		view.renderBreakSet(length);
	}

	this.reset = function() {
		clearInterval(interval);
      	paused = breakTime = inProgress = false;
      	view.renderTime(timer.getLength());
	}

	init();
}


var clock = new Clock();
