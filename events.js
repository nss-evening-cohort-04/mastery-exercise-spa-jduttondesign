

var CarLot = (function(oldCarLot){

var createCard = document.getElementById("create");
var Submitbtn = document.getElementById("submit");
var userInput = document.getElementById("chatinput");; 
var selectedCard;

var PickaCard; //allows user to select each card separately to view text 

    oldCarLot.activateEvents = function () {
        var carCardsArray = document.getElementsByClassName("carCard");
        for (var i = 0; i < carCardsArray.length; i++) {
            thisCard = carCardsArray[i];
            thisCard.addEventListener("click", function(event) {
                // difference between target and current target!
                // console.log("target", event.target);
                console.log("current target", event.currentTarget);
                // When any card is clicked, remove the 'hidden' class from the input field so that the user can type in the field.
                selectedCard = event.currentTarget;
                selectedCard.style.background = 'pink';

                //dig into current target to change text discription on card
                //change color to only allow one card to change color at a time

                
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

