// Task 1 : Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) { //calculate the total amount 
	const total = (subtotal + (subtotal * taxRate)) - discount;
	return `Total Invoice: $${total.toFixed(2)}`; // adding toFixed(2) to make total amount with 2 decimal places 
}

 console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total amount: 103.00"
 console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total amount: 530.00"


 // Task 2 : Employee Hourly Wage Calculation

 function calculateHourlyWage(salary, hoursPerWeek) { // calculate the hourly wage
    const hourlyWage = salary/ (hoursPerWeek * 52); // calculate the hourly wage
    return `Hourly wage: $${hourlyWage.toFixed(2)}`; // adding toFixed(2) to make hourly wage with 2 decimal places
}

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly wage: $41.21"


// Task 3 : Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => { // calculate the discount amount
    let discount = 0; // initialize the discount amount
    if (years >= 5) { // check if the customer has been with the company for more than 5 years
        discount = 0.15; // apply 15% discount
    } else if (years >= 3) { // check if the customer has been with the company for more than 3 years
        discount = .10; // apply 10% discount
    } else if (years < 3) { // check if the customer has been with the company for less than 3 years
        discount = 0.05; // apply 5% discount
    }
    const discountedPrice = amount * (1 - discount); // calculate the discount amount
    return `Loyalty discount: $${discountedPrice.toFixed(2)}`; // adding toFixed(2) to make discount amount with 2 decimal places
}

console.log(calculateLoyaltyDiscount(100, 6)); // "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // "Discounted Price: $190.00"


// Task 4 : Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) { // calculate the shipping cost
 let shippingCost = 0; // initialize the shipping cost
  if (location === "USA") { // check if the location is USA
     shippingCost = 5 + (weight * 0.5); // calculate the shipping cost for USA
} else if (location === "Canada") { // check if the location is Canada
    shippingCost = 10 + (weight * 0.7); // calculate the shipping cost for Canada
}
  if (expedited) { // check if expedited shipping is required
    shippingCost += 10; // add expedited shipping cost of $10
}  
return `Shipping cost: $${shippingCost.toFixed(2)}`; // adding toFixed(2) to make shipping cost with 2 decimal places
}

console.log(calculateShippingCost(10,"USA", true)); // Expected output: "Shipping cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping cost: $13.50"