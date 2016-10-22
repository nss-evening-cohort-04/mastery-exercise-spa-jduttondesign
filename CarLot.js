//iife
var CarLot = (function (oldCarLot) {
    var inventory = [];
    //console.log("inventory", inventory);

    oldCarLot.loadInventory = function () {
        var inventoryLoader = new XMLHttpRequest();

        inventoryLoader.addEventListener("load", function () {

            var inventoryCars = JSON.parse(this.responseText);
            inventory = inventoryCars.cars;
            console.log("inventory", inventory);
            CarLot.populatePage(inventory);
        });

        // Retrieve the information in inventory.json
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    };

    oldCarLot.getInventory =  function () {
        return inventory 
    }

return oldCarLot;

})(CarLot || {});


//Iffe runs json file to dom thru xhr file

//click events js file thru my iffe 


// Return the new, augmented object with the new method on it

// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
 // }
 