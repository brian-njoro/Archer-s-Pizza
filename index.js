let pizzaTotal = 0

// price if small pizza selected
const smallCheckbox = document.getElementById(`cbSmall`)
const smallPrice = 550
smallCheckbox.addEventListener(`click`,function() {
    if (smallCheckbox.checked) {
        //checkbox is checked, add small Price to Total price
        pizzaTotal += smallPrice
    }
    console.log(`total price:`, pizzaTotal)
})

// price if medium pizza selected
const mediumCheckbox = document.getElementById(`cbMedium`)
const mediumPrice = 750
mediumCheckbox.addEventListener(`click`,function() {
    if (mediumCheckbox.checked) {
        //checkbox is checked, add medium pizza Price to Total price
        pizzaTotal += mediumPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Price if large pizza selected
const largeCheckbox = document.getElementById(`cbLarge`)
const largePrice = 900
largeCheckbox.addEventListener(`click`,function() {
    if (largeCheckbox.checked) {
        //checkbox is checked, add large pizza Price to Total price
        pizzaTotal += largePrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Price if deluxe pizza selected
const deluxeCheckbox = document.getElementById(`cbDeluxe`)
const deluxePrice = 1200
deluxeCheckbox.addEventListener(`click`,function() {
    if (deluxeCheckbox.checked) {
        //checkbox is checked, add deluxe pizza Price to Total price
        pizzaTotal += deluxePrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Additional price for thick crust
const thickCheckbox = document.getElementById(`cbThick`)
const thickPrice = 100
thickCheckbox.addEventListener(`click`,function() {
    if (thickCheckbox.checked) {
        //checkbox is checked, add thick crust Price to Total price
        pizzaTotal += thickPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//Add prices for extra toppings

//bacon
const baconCheckbox = document.getElementById(`baconCb`)
const baconPrice = 90
baconCheckbox.addEventListener(`click`,function() {
    if (baconCheckbox.checked) {
        //checkbox is checked, add 90 to Total price
        pizzaTotal += baconPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//pepperoni
const pepperoniCheckbox = document.getElementById(`pepperoniCb`)
const pepperoniPrice = 100
pepperoniCheckbox.addEventListener(`click`,function() {
    if (pepperoniCheckbox.checked) {
        //checkbox is checked, add pepperoni topping Price to Total price
        pizzaTotal += pepperoniPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//sausage
const sausageCheckbox = document.getElementById(`sausage`)
const sausagePrice = 60
sausageCheckbox.addEventListener(`click`,function() {
    if (sausageCheckbox.checked) {
        //checkbox is checked, add sausage topping Price to Total price
        pizzaTotal += sausagePrice
    }
    console.log(`total price:`, pizzaTotal)
})

//black olives
const olivesCheckbox = document.getElementById(`olivesCb`)
const olivesPrice = 80
pepperoniCheckbox.addEventListener(`click`,function() {
    if (olivesCheckbox.checked) {
        //checkbox is checked, add black olives topping Price to Total price
        pizzaTotal += olivesPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//bell peppers
const peppersCheckbox = document.getElementById(`peppersCb`)
const peppersPrice = 50
peppersCheckbox.addEventListener(`click`,function() {
    if (peppersCheckbox.checked) {
        //checkbox is checked, add bell peppers topping Price to Total price
        pizzaTotal += peppersPrice
    }
    console.log(`total price:`, pizzaTotal)
})

//get number of pizzas ordered by user
function getValue() {
    const input = document.getElementById("quantity");
    const pizzaTally = input.value;
    console.log(pizzaTally);
}

//place order button
const placeOrder = document.getElementById(`placeOrder`)
placeOrder.addEventListener(`click`, function() {
    alert(`Your order has successfully been placed`)
})
