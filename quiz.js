// var x = 'hi';
// var y = 'bye';

// myfunction(x);
// myFunction(y); //key-fob

// function myFunction(blah){ // car
//   console.log('hjasgjh', blah);
// };


 loadJSON();

//xhr to load json file
 function loadJSON(callback) {   //different car
    console.log("jyfhs");

    var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("application/json");
    xobj.open('GET', 'inventory.json', true); // Replace 'my_data' with the path to your file
    xobj.send();  

  };
    
 
console.log("");

// ////////////////////////////////////////////////////////////////////
// function fetchJSONFile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//             }
//         }
//     };
//     httpRequest.open('GET', path);
//     httpRequest.send(); 
// }

// // this requests the file and executes a callback with the parsed result once
// //   it is available
// fetchJSONFile('pathToFile.json', function(data){
//     // do something with your data
//     console.log(data);
// });


// //parse json string into an object
//  function init() {
//  loadJSON(function(response) {
//   // Parse JSON string into object
//     var actual_JSON = JSON.parse(response);
//  });
// }
// ////////////////////////////////////////////////
// //create a card

// var createCard = document.getElementById("create");
// var userInput = document.getElementById("input");
// var outputDiv = document.getElementById("output");

// console.log(outputDiv);

// function makeCard(){ 
// 	var userInputString = userInput.value;
// 	var cardString = "";
// 	cardString += '<div class="card">';
// 		cardString += '<p class="pTag">' + userInputString + '</p>'
// 		cardString += '<button class="delete">delete</button>'
// 	cardString += '</div>'
// 	outputDiv.innerHTML += cardString;
// 	userInput.value = "";
// }

// function removeCard(e){
// 	console.log("removeCard");
// 	console.log("event.target", e.target.className);
// 	if (e.target.className === "delete") {
// 		console.log("deletebtn"); //this shows the delete btn works when clicked
// 		//removeCard from DOM 
// 		e.target.parentNode.className = "";
// 		e.target.parentNode.innerHTML = "";
// 	}

// }
// //event.target delete
// createCard.addEventListener("click", makeCard);
// outputDiv.addEventListener("click", removeCard);
// //create a card --------------------------------------------------------------
// var carName = " Volvo";

// // code here can use carName

// function myFunction() {

//     // code here can use	carName 

// }


// function makeCard(){ 
// 	var userInputString = userInput.value;
// 	var cardString = "";
// 	cardString += '<div class="card">';
// 		cardString += '<p class="pTag">' + userInputString + '</p>'
// 		cardString += '<button class="delete">delete</button>'
// 	cardString += '</div>'
// 	outputDiv.innerHTML += cardString;
// 	userInput.value = "";
// }

// //IIFE
//     if (pick in breadPrices) {
//     breadToppingPrice = breadPrices[pick];
// 	}
//   };

//   maker.getBreadToppingPrice = function() {
//   	return breadToppingPrice;
// };


// function populatePage (inventory) {
//   // Loop over the inventory and populate the page

//   // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();