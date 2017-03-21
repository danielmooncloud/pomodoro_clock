module.exports = function Timer(num) {
	'use strict';
		
	var length = num;
	
	this.getLength = ()=> length;
	
	this.addMinute = (num)=> {
		if(length === 1 && num < 0);
		else return length += num;
	}

}


