
Borders thicken etc.


// var x = 'hi';
// var y = 'bye';

// myFunction(x);
// myFunction(y); //key-fob

// function myFunction(anythingYouGiveMe, andthis){ // car
//   console.log('hjasgjh', z);
// };



// myFunction()

var add_input = function(){
	var count = 0;

	return function add_input(){
		count++;
		if (count >=10){
			return false;
		}
		var input = document.createElement('input');
		input.name = "generated_input";
		document.getElementById('input_contained').appendChild(input);
	}
}();

add_input();
add_input();
add_input();

