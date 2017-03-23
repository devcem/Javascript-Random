# Javascript-Random
This function allows you to create random sequence and call them from an array with random timing.

# The Function
new Randomize(array, minTime, maxTime);

# Example Use
sequence = new Randomize([
	function(){
		console.log('1. random function');
	},
  function(){
		console.log('2. random function');
	}
], 1000, 5000);

# Example Calls
timeTrigger function calls random function from array in defined time range with random timing.
sequence.timeTrigger();

getRandom function calls random function from array.
sequence.getRandom()
