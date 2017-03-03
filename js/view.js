view = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},

	cacheDom: function() {
		this.$header = $('.header');
		this.$lower = $('.lower');
		this.$start = this.$header.find('.start');
      	this.$pause = this.$header.find('.pause');
      	this.$reset = this.$header.find('.reset');
      	this.$clock = this.$lower.find('.clock');
      	this.$sub = this.$lower.find('.sub');
      	this.$add = this.$lower.find('.add');
      	this.$subbreak = this.$lower.find('.subbreak');
      	this.$addbreak = this.$lower.find('.addbreak');
      	this.$timeset = this.$lower.find('.timeset');
      	this.$breakset = this.$lower.find('.breakset')
	},

	bindEvents: function() {
		this.$start.click(function() {
			view.handleStart();
		})
		this.$pause.click(function() {
        	view.handlePause();
      	})
		this.$reset.click(function() {
        	view.handleReset();      
      	})
		this.$add.click(function() {
			view.handle$Add();
		})
		this.$sub.click(function() {
			view.handle$Sub();
		})
		this.$addbreak.click(function() {
        	view.handleAddBreak();
     	});
      	this.$subbreak.click(function() {
        	view.handleSubBreak();
      });
	},

	handleStart: ()=> clock.tickTock(),
	handlePause: ()=> clock.pause(),
	handleReset: ()=> clock.reset(),
	handle$Add: ()=> clock.addOneMinute(),
	handle$Sub: ()=> clock.subOneMinute(),
	handleAddBreak: ()=> clock.addBreakMinute(),
	handleSubBreak: ()=> clock.subBreakMinute(),

	renderTime: (time)=> view.$clock.html('<h1>' + time + '</h1>'),
	renderTimeSet: (length)=> view.$timeset.html('<h3>' + length + '</h3>'),
	renderBreakSet: (length)=> view.$breakset.html('<h3>' + length + '</h3>')
}
