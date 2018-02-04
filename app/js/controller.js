import Clock from "./clock";


export default class Controller {
	constructor(initialTimeObject, initialBreakTimeObject) {
		this.clock = new Clock(initialTimeObject, initialBreakTimeObject);
		this.cacheDom();
		this.bindEvents();
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
			if(!this.clock.inProgress) this.clock.startTimerInterval();
		});
		this.$pause.click(() => {
			this.clock.pause();
		});
		this.$reset.click(() => {
			this.clock.reset();      
		});
		//Adjust the main timer
		this.$add.click(() => {
			this.clock.updateMainTimerLength(1);
		});
		this.$sub.click(() => {
			this.clock.updateTimerLength(-1);
		});
		//Adjust the break timer
		this.$addbreak.click(() => {
			this.clock.updateBreakTimerLength(1);
		});
		this.$subbreak.click(() => {
			this.clock.updateBreakTimerLength(-1);
		});
	}

}


