// make it so that when you click "add to cart" button,
// whatever is written should be console logged

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    console.log(inputFieldEl.value)
})