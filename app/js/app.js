require("../scss/application.scss");
var Clock = require("./clock");


const view = {
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
			clock.tickTock();
		})
		this.$pause.click(function() {
        	clock.pause();
      	})
		this.$reset.click(function() {
        	clock.reset();      
      	})
		this.$add.click(function() {
			clock.addOneMinute(1);
		})
		this.$sub.click(function() {
			clock.addOneMinute(-1);
		})
		this.$addbreak.click(function() {
        	clock.addBreakMinute(1);
     	});
      	this.$subbreak.click(function() {
        	clock.addBreakMinute(-1);
      });
	},

	renderTime: function(time) {
		view.$clock.html('<h1>' + time + '</h1>')
	},
	renderTimeSet: function(length) {
		view.$timeset.html('<h3>' + length + '</h3>')
	},
	renderBreakSet: function(length) {
		view.$breakset.html('<h3>' + length + '</h3>')
	} 
}


var clock = new Clock(view);
