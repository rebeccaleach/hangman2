 // constructor file 
 // controls whether a letter appears as _ or itself 

console.log('I\'m a letter!');

function Letter(value) {
	this.value = value;
	this.visible = false;
};

Letter.prototype.show = function() {
	if (this.visible) {
		return this.value;
	}
	else {
		return '_';
	}
};

exports = Letter;