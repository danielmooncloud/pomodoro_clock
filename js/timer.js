function Timer(num) {
	'use strict';
		
	let length = num;
	
	this.getLength = ()=> length;
	this.addMinute = ()=> length += 1;	
	this.subMinute = ()=> {
		if(length > 1) {
			return length -= 1;
		}	
	}
}