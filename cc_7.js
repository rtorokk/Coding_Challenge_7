// Task 1 : Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) { //calculate the total amount 
	const total = (subtotal + (subtotal * taxRate)) - discount;
	return `Total Invoice: $${total.toFixed(2)}`; // adding toFixed(2) to make total amount with 2 decimal places 
}

 console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total amount: 103.00"
 console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total amount: 530.00