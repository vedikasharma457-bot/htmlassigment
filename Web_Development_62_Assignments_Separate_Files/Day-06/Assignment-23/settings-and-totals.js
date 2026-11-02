function mergeSettings(defaults, userSettings) {
  return { ...defaults, ...userSettings };
}
function calculateCartTotal(items, taxRate = 0) {
  if (!Array.isArray(items)) throw new TypeError("Items must be an array.");
  const subtotal = items.reduce((sum, item) => {
    if (!Number.isFinite(item.price) || item.price < 0 ||
        !Number.isInteger(item.quantity) || item.quantity < 0) {
      throw new Error("Invalid item price or quantity.");
    }
    return sum + item.price * item.quantity;
  }, 0);
  return { subtotal, tax: subtotal * taxRate, total: subtotal * (1 + taxRate) };
}
console.log(mergeSettings({theme:"light",language:"en"},{theme:"dark"}));
console.log(calculateCartTotal([{price:250,quantity:2}],0.18));
