// Mini Project 1: Number guessing logic
function checkGuess(secret, guess) {
  if (!Number.isInteger(guess)) return "Enter a whole number.";
  if (guess < secret) return "Too low";
  if (guess > secret) return "Too high";
  return "Correct!";
}
console.log(checkGuess(42, 35));

// Mini Project 2: Simple bill calculator
function calculateBill(items, taxRate = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  return { subtotal, tax, total: subtotal + tax };
}
console.log(calculateBill([{price: 100, quantity: 2}, {price: 50, quantity: 1}], 0.05));
