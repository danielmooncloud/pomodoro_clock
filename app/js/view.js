import pubSub from "./pubsub";

export default class View {
	constructor() {
		this.cacheDom();
		this.bindEvents();
	}

	cacheDom() {
		this.$lower = $(".lower");
		this.$clock = this.$lower.find(".clock");
		this.$timeset = this.$lower.find(".timeset");
		this.$breakset = this.$lower.find(".breakset");
	}

	bindEvents() {
		pubSub.subscribe("updateTime", (timeDisplay) => {
			this.renderTime(timeDisplay);
		});
		pubSub.subscribe("updateTimerLength", (timeDisplay) => {
			this.renderTimeSet(timeDisplay);
		});
		pubSub.subscribe("updateBreakTimerLength", (timeDisplay) => {
			this.renderBreakSet(timeDisplay);
		});
	}

	renderTime(timeDisplay) {
		this.$clock.html("<h1>" + timeDisplay + "</h1>");
	}

	renderTimeSet(timeDisplay) {
		this.$timeset.html("<h3>" + timeDisplay + "</h3>");
	}

	renderBreakSet(timeDisplay) {
		this.$breakset.html("<h3>" + timeDisplay + "</h3>");
	}
}





