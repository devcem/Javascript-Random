function Randomize(sequence, start, end) {
    this.sequence = sequence;
    this.start    = start;
    this.end      = end;
    this.function = {};
}

Randomize.prototype.random = function(min, max){
	return Math.random() * (max - min) + min;
};

Randomize.prototype.getRandom = function() {
    return this.sequence[ Math.floor( Math.random() * this.sequence.length ) ];
};

Randomize.prototype.trigger = function() {
    this.getRandom()();
};

Randomize.prototype.timeTrigger = function() {
    setTimeout(function(self){
    	self.trigger();
    }, this.random(this.start, this.end), this);
};

//Example use
sequence = new Randomize([
	function(){
		console.log('test');
	}
], 1000, 5000);
