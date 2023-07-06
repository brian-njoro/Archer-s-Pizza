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

// price if medium pizza selected
let mediumCheckbox = document.getElementById(`cbMedium`)
let mediumPrice = 750
mediumCheckbox.addEventListener(`click`,function() {
    if (mediumCheckbox.checked) {
        //checkbox is checked, add medium pizza Price to Total price
        pizzaTotal += mediumPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Price if large pizza selected
let largeCheckbox = document.getElementById(`cbLarge`)
let largePrice = 900
largeCheckbox.addEventListener(`click`,function() {
    if (largeCheckbox.checked) {
        //checkbox is checked, add large pizza Price to Total price
        pizzaTotal += largePrice
    }
    console.log(`total price:`, pizzaTotal)
})
