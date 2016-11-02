
var CarLot = (function(oldCarLot){

var createCard = document.getElementById("create");
var Submitbtn = document.getElementById("submit");
var userInput = document.getElementById("chatinput");
var selectedCard;


    oldCarLot.activateEvents = function () {
        var carCardsArray = document.getElementsByClassName("carCard");
        for (var i = 0; i < carCardsArray.length; i++) {
            var thisCard = carCardsArray[i];
            thisCard.addEventListener("click", function(event) {
                CarLot.addSelectedClass(event.currentTarget, "lightgreen");
                console.log("current target", event.currentTarget);
                
                // When any card is clicked, remove the 'hidden' class from the input field so that the user can type in the field.
                selectedCard = event.currentTarget;
                selectedCard.style.background = 'pink';
                
                // Set the input to an empty string
                userInput.value = "";
                // Move the cursor to be set in the input field when any card is clicked so user can begin typing
                userInput.focus();
            });
        }
    };

// when you click on card edit field comes up bound to discription that fills in input field

 userInput.addEventListener("keydown", function(){
 	selectedCard.lastChild.innerHTML = `description: ${userInput.value}`;
// //var x = document.getElementById('a').value;
 });

///unselect the ones not being selected.
oldCarLot.addSelectedClass = function (){
var carCardsArray = document.getElementsByClassName("carCard");
    for (var i = 0; i < carCardsArray.length; i++) {
        thisCard = carCard[i];
            thisCard.classList.remove("selected");
            thisCard.classList.add("unselected");
            thisCard.style.backgroundColor = "white";
        }
}

  oldCarLot.addSelectedClass = function (clickedEl, newBackgroundColor) {
        console.log("addSelectedClass has fired.");
        clickedEl.classList.remove("unselected");
        clickedEl.classList.add("selected");
        clickedEl.style.backgroundColor = newBackgroundColor;
    } 


    return oldCarLot;

}) (CarLot || {});

