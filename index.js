let pizzaTotal = 0

// price if small pizza selected
let smallCheckbox = document.getElementById(`cbSmall`)
let smallPrice = 550
smallCheckbox.addEventListener(`click`,function() {
    if (smallCheckbox.checked) {
        //checkbox is checked, add small Price to Total price
        pizzaTotal += smallPrice
    }
    console.log(`total price:`, pizzaTotal)
})

