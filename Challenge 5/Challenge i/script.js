const rent = 400;
const tax = '8%'; // This will become 8
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

let balance;  // declare balance here so it’s accessible later

if (hourOfDay === 0 && minuteOfDay === 0) {
	const taxAsDecimal = parseInt(tax) / 100;
	const startingAfterTax = salary * (1 - taxAsDecimal);
	const expenses = transport + food + rent;
	balance = startingAfterTax - expenses;
}

console.log("R" + balance.toFixed(2));
