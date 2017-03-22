import "../scss/application.scss";
import Clock from "./clock";

$(document).ready(function() {


	const view = {
		init() {
			this.cacheDom();
			this.bindEvents();
		},

		cacheDom() {
			this.$header = $(".header");
			this.$lower = $(".lower");
			this.$start = this.$header.find(".start");
			this.$pause = this.$header.find(".pause");
			this.$reset = this.$header.find(".reset");
			this.$clock = this.$lower.find(".clock");
			this.$sub = this.$lower.find(".sub");
			this.$add = this.$lower.find(".add");
			this.$subbreak = this.$lower.find(".subbreak");
			this.$addbreak = this.$lower.find(".addbreak");
			this.$timeset = this.$lower.find(".timeset");
			this.$breakset = this.$lower.find(".breakset");
		},

		bindEvents() {
			this.$start.click(() => {
				clock.tickTock();
			});
			this.$pause.click(() => {
				clock.pause();
			});
			this.$reset.click(() => {
				clock.reset();      
			});
			this.$add.click(() => {
				clock.addOneMinute(1);
			});
			this.$sub.click(() => {
				clock.addOneMinute(-1);
			});
			this.$addbreak.click(() => {
				clock.addBreakMinute(1);
			});
			this.$subbreak.click(() => {
				clock.addBreakMinute(-1);
			});
		},

		renderTime(time) {
			this.$clock.html("<h1>" + time + "</h1>");
		},

		renderTimeSet(length) {
			this.$timeset.html("<h3>" + length + "</h3>");
		},

		renderBreakSet(length) {
			this.$breakset.html("<h3>" + length + "</h3>");
		} 
	};

	const clock = new Clock(view);
	clock.init();

});


