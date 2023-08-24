let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-El")
// 1. Store the delete button in a deleteBtn variable
let deleteBtn = getElementById("")
let leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))




if (leadsFromLocalStorage) {
    leadsFromLocalStorage = myLeads
    renderLeads()
}

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("click", function() {

}
)

// 3. When clicked, clear localStorage, myLeads, and the DOM



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

