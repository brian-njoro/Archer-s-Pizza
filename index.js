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

//Price if deluxe pizza selected
let deluxeCheckbox = document.getElementById(`cbDeluxe`)
let deluxePrice = 1200
deluxeCheckbox.addEventListener(`click`,function() {
    if (deluxeCheckbox.checked) {
        //checkbox is checked, add deluxe pizza Price to Total price
        pizzaTotal += deluxePrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Additional price for thick crust
//Price if large pizza selected
let thickCheckbox = document.getElementById(`cbThick`)
let thickPrice = 100
thickCheckbox.addEventListener(`click`,function() {
    if (thickCheckbox.checked) {
        //checkbox is checked, add thick crust Price to Total price
        pizzaTotal += thickPrice
    }
    console.log(`total price:`, pizzaTotal)
})