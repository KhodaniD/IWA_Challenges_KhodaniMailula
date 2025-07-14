const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Changed 'location' to 'userLocation'
let userLocation = 'RSA';
let customers = 1;
let currency = 'R';

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

// Set shipping based on userLocation
let shipping;
if (userLocation === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (userLocation === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  shipping = 800;
  currency = '$';
}

// Calculate total before shipping
let total = shoes + toys + shirts + batteries + pens;

// Free shipping logic
const isFreeLocal = currency === 'R' && total >= 1000;
const isFreeInt = currency === '$' && total >= 60;
const isFree = isFreeLocal || isFreeInt;

// Free shipping warning logic
const IS_FREE_WARNING = isFree && customers !== 1;

// Apply free shipping if eligible and not warning
if (isFree && !IS_FREE_WARNING) {
  shipping = 0;
}

// New total with shipping
const totalWithShipping = total + shipping;

// Banned country logic
const isBanned = userLocation === 'NK';

// Output
if (IS_FREE_WARNING) console.log(FREE_WARNING);
console.log(isBanned ? BANNED_WARNING : 'Price: ' + currency + totalWithShipping);
