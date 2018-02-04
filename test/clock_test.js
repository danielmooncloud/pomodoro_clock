import { expect, assert } from "chai";
import sinon from "sinon";

import Clock from "../app/js/clock";
import pubSub from "../app/js/pubsub"





describe("CLOCK METHODS", function() {
	let initialTimeObject, initialBreakTimeObject, clock;


	beforeEach(function() {
		initialTimeObject = {minutes: 5, seconds: 0};
		initialBreakTimeObject = {minutes: 5, seconds: 0}
		clock = new Clock(initialTimeObject, initialBreakTimeObject);
	})
	

	describe("startTimerInterval", function() {
		const spyClock = sinon.useFakeTimers();
		const spy = sinon.spy();
		const message = "updateTime";

		after(function() {
			spyClock.restore();
		})

		afterEach(function() {
			clock.reset(); //Stops the clock interval after each test
		})



		it("should start the countdown and publish the time", function() {
			pubSub.subscribe(message, spy);
			clock.startTimerInterval();
			spyClock.tick(1000);
			assert(spy.calledWith("4:59"));
			spyClock.tick(10000);
			assert(spy.calledWith("4:49"));
		})

		it("should get the remaining amount of time from the current timer", function() {
			
		})

		it("should stop the timer if the time runs out", function() {
			// Need to set the spy before the model is instantiated to ensure the wrong fn isn't bound
			sinon.spy(Clock.prototype, "endsTimer");
			clock = new Clock(initialTimeObject, initialBreakTimeObject);
			clock.startTimerInterval();
			spyClock.tick((60 * 5) * 1000);
			assert(clock.endsTimer.calledOnce);
		})

	})
	


	describe("endsTimer", function() {})
	

	describe("setCurrentTimer", function() {
		
		it("should set the current timer", function() {
			clock.setCurrentTimer(clock.mainTimer);

			expect(clock.currentTimer).to.deep.equal(clock.mainTimer);
		})

		it("should publish the timer's initial time", function() {
			const spy = sinon.spy();
			const message = "updateTime";
			pubSub.subscribe(message, spy);
			clock.setCurrentTimer(clock.mainTimer);

			assert(spy.calledWith("5:00"))
		})
	})


	describe("updateMainTimerLength", function() {

		beforeEach(function() {
			clock.timeObject = {minutes: 5, seconds: 0};
		})

		it("should update the timeObject on clock if the entry is valid", function() {
			clock.updateMainTimerLength(1);
			expect(clock.timeObject).to.deep.equal({minutes: 6, seconds: 0});

			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);

			expect(clock.timeObject).to.deep.equal({minutes: 4, seconds: 0});
		})

		it("should not let the timeObject decrement below 1 minute", function() {
			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);
			clock.updateMainTimerLength(-1);

			expect(clock.timeObject).to.deep.equal({minutes: 1, seconds: 0});
		})

		it("should publish the updated timeObject", function() {
			const spy = sinon.spy();
			const message = "updateTimerLength";

			pubSub.subscribe(message, spy);
			clock.updateMainTimerLength(1);

			assert(spy.calledWith("6:00"))
		})

	})
	


	describe("updateBreakTimerLength", function() {

		beforeEach(function() {
			clock.breakTimeObject = {minutes: 5, seconds: 0};
		})

		it("should update the timeObject on clock if the entry is valid", function() {
			clock.updateBreakTimerLength(1);
			expect(clock.breakTimeObject).to.deep.equal({minutes: 6, seconds: 0});

			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);

			expect(clock.breakTimeObject).to.deep.equal({minutes: 4, seconds: 0});
		})

		it("should not let the timeObject decrement below 1 minute", function() {
			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);
			clock.updateBreakTimerLength(-1);

			expect(clock.breakTimeObject).to.deep.equal({minutes: 1, seconds: 0});
		})

		it("should publish the updated timeObject", function() {
			const spy = sinon.spy();
			const message = "updateBreakTimerLength";

			pubSub.subscribe(message, spy);
			clock.updateBreakTimerLength(1);

			assert(spy.calledWith("6:00"))
		})
	})



	describe("reset", function() {

		it("should stop the clock")
	})
	



	describe("formatTime", function() {

		it("should format time properly", function () {
			expect(clock.formatTime({minutes: 1, seconds: 21})).to.equal("1:21");
		})

		it("should format time properly", function () {
			expect(clock.formatTime({minutes: 1, seconds: 1})).to.equal("1:01");
		})

		it("should return 0:00 if minutes and seconds are both equal to or less than 0", function() {
			expect(clock.formatTime({minutes: 0, seconds: -2})).to.equal("0:00");
		})
	})

})
