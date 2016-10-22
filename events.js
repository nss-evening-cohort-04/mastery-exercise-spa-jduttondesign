
console.log("hello")
// click even(ts 
var CarLot = (function(oldCarLot){

var createCard = document.getElementById("create");
var Submitbtn = document.getElementById("submit");
var userInput = ""; 

var PickaCard; //allows user to select each card separately to view text 

    oldCarLot.activateEvents = function () {
        var carCardsArray = document.getElementsByClassName("carCard");
        for (var i = 0; i < carCardsArray.length; i++) {
            thisCard = carCardsArray[i];
            thisCard.addEventListener("click", CarLot.addUnselectClass);
            thisCard.addEventListener("click", function(event) {
                CarLot.addSelectedClass(event.currentTarget, "lightblue");
                // When any card is clicked, remove the 'hidden' class from the input field so that the user can type in the field.
                selectedCard = event.currentTarget;
                userInput.classList.remove("hidden");
                // Set the input to an empty string
                userInput.value = "";
                // Move the cursor to be set in the input field when any card is clicked so user can begin typing
                userInput.focus();
            });
        }
    };

// when you click on card edit field comes up sbound to discription that fills in input field

// userInput.addEventListener("keydown", function){
// 	PickaCard.lastChild.innerHTML = `Cardtext: ${userInput.value}`;
// //var x = document.getElementById('a').value;
// }

	return oldCarLot;

}) (CarLot || {});

