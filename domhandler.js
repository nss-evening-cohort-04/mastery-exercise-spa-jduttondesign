
//wrap in iffe
//click 1st box store what i clicked on, put focus on box inside the event, set value of this box

var CarLot = (function(oldCarLot){


 oldCarLot.populatePage = function(cars) {
    // Loop over the inventory and populate the page
        var domOutput = document.getElementById("output");
        var carOutput = "";
        var currentCar;

        carOutput += `<div class="row">`;


        for (var i = 0; i < cars.length; i++) {
            currentCar = cars[i];

            carOutput += `<div class="carCard col-md-4 unselected" id="Card-${currentCar.model}">`;
            carOutput += `<h1>${currentCar.year} ${currentCar.make} ${currentCar.model}</h1>`;//style="border-color:${currentCar.color}
            carOutput += `<h4>Color: ${currentCar.color}</h4>`;
            carOutput += `<h4>Price: $${currentCar.price}</h4>`;
                // If statement to display more meaningful information other than 'false'
                if (!currentCar.purchased) {
                    carOutput += `<h5>Available for Purchase: Yes</h5>`; 
                } else {
                    carOutput += `<h5>Not Currently Available</h5>`; 
                }
            carOutput += `<p>Description: ${currentCar.description}</p></div>`;
        }
        carOutput += `</div>`;
        domOutput.innerHTML = carOutput;


    // Now that the DOM is loaded, establish all the event listeners needed
        CarLot.activateEvents();

        var inputBox = document.getElementById('chatinput');
        inputBox.onkeyup = function(){
        document.getElementById('printchatbox').innerHTML = inputBox.value;
}
    }

    return oldCarLot;

}) (CarLot || {});