// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// function saveLead() {
//     console.log("Button Clicked")
// }


// Time to learn listeners! When the user clicks the button we want it to listen for that
// click event, using the event listener method and invoke a function.

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})
