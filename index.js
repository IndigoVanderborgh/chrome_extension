// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function saveLead() {
    console.log("Button Clicked")
}


// Time to learn listeners! When the user clicks the button we want it to listen for that
// click event, using the event listener method and invoke a function.

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box")
})