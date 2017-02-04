(function() {
'use strict';

  var model = {
    timer: 0,
    breakTimer: 0,
    init: function() {
      this.timer = 25;
      this.breakTimer = 5;
    }
  };
  
  var controller = {
    paused: false,
    breakTime: false,
    init: function() {
      this.interval;
      model.init();
      view.init();    
    },
    getTimer: ()=> model.timer,
    getBreakTimer: ()=> model.breakTimer,
    getTimeRemaining: function(deadline) { 
      this.minutes = Math.floor((deadline - Date.parse(new Date()))/60000); 
      this.seconds = Math.floor(((deadline - Date.parse(new Date()))/1000) % 60);
      if(this.seconds >= 10) {
        this.timeRemaining = this.minutes + ':' + this.seconds;         
      }
      else {
        this.timeRemaining = this.minutes + ':0' + this.seconds;
      }
    },
    clock: function(timer) {
      let deadline = Date.parse(new Date()) + (timer*60*1000);      
      this.interval = setInterval(function() {
        controller.getTimeRemaining(deadline);
        view.renderTime(controller.timeRemaining);
        controller.stateChange();
      }, 1000);
      this.inProgress = true;
    },
    pause: function() {
      if(!this.paused) {
        clearInterval(this.interval);
        this.paused = true;
      } else {
        this.paused = false;
        var deadline = Date.parse(new Date()) + (this.minutes*60*1000) + (this.seconds * 1000); 
        this.interval = setInterval(function() {
          controller.getTimeRemaining(deadline);
          view.renderTime(controller.timeRemaining);
          controller.stateChange();
        }, 1000);        
      }
    },
    reset: ()=> {
      clearInterval(controller.interval);
      controller.paused = false;
      controller.breakTime = false;
      view.inProgress = false;
      view.render();
    },
    addTime: function() {     
      model.timer += 1;
      view.renderTimeSet(this.getTimer());
      view.render(this.getTimer());    
    },
    subTime: function() {
      if(model.timer >= 1) {
        model.timer -= 1;
        view.renderTimeSet(this.getTimer());
        view.render(this.getTimer());
      }
    },
    addBreakTime: ()=> {
      model.breakTimer += 1;
      view.renderBreakset(controller.getBreakTimer());
    },
    subBreakTime: ()=> {
      if(model.breakTimer >= 1) {
        model.breakTimer -= 1;
        view.renderBreakset(controller.getBreakTimer());
      }
    },
    stateChange: ()=> {
      if(controller.minutes === 0 && controller.seconds === 0 && !controller.breakTime) {
        clearInterval(controller.interval);
        controller.clock(model.breakTimer);
        controller.breakTime = true;
      } else if(controller.minutes === 0 && controller.seconds === 0 && controller.breakTime) {
        controller.reset();
      }
    }
  };
  
  var view = {
    init: function() {
      this.inProgress = false;
      this.cacheDom();
      this.bind();
      this.render();
    },
    render: function() {
      if(!this.inProgress) {
        let timer = controller.getTimer();
        view.$clock.html('<h1>' + timer + '</h1>');
      };
    },
    renderTime: (timer)=> view.$clock.html('<h1>' + timer + '</h1>'),
    renderTimeSet: function(timer) {
      this.$timeset.html('<h3>' + timer + '</h3>');
    },
    renderBreakset: function(timer) {
      this.$breakset.html('<h3>' + timer + '</h3>');
    },
    cacheDom: function() {
      this.$clock = $('.clock');
      this.$start = $('.start');
      this.$pause = $('.pause');
      this.$reset = $('.reset');
      this.$sub = $('.sub');
      this.$add = $('.add');
      this.$subbreak = $('.subbreak');
      this.$addbreak = $('.addbreak');
      this.$timeset = $('.timeset');
      this.$breakset = $('.breakset');
  },
    bind: function() {
      this.$start.click(function() {
        if(!view.inProgress) {
          controller.clock(controller.getTimer());
          view.inProgress = true;
        }
      });
      this.$pause.click(function() {
        controller.pause();
      });
      this.$reset.click(function() {
        controller.reset();      
      });
      this.$add.click(function() {
        controller.addTime();
      });      
      this.$sub.click(function() {
        controller.subTime();
      });
      this.$addbreak.click(function() {
        controller.addBreakTime();
      });
      this.$subbreak.click(function() {
        controller.subBreakTime();
      });
    } 
  };
  
$(document).ready(function() {
  controller.init();
});

})();