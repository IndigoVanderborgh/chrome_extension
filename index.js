// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// old function 
// function saveLead() {
//     console.log("Button Clicked")
// }


// Time to learn listeners! When the user clicks the button we want it to listen for that
// click event, using the event listener method and invoke a function.

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})

// in html we have id="input-btn". on line 15, we connect html's "input-btn" to inputBtn in JS
// the element is used on line 17, where the first thing is inputBtn, connecting the 
// element to the variable stated in line 15.