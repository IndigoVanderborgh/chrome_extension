let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-El")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Log out the items in the myLeads array using a for loop 
for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}
