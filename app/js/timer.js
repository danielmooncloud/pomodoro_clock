

export default class Timer {
	constructor(num) {
		this.length = num;
	}

	getLength() {
		return this.length;
	}
	
	addMinute(num) {
		if(this.length === 1 && num < 0);
		else return this.length += num;
	}

}


