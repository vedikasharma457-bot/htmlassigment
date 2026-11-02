const product = {
  id: "P101",
  name: "Wireless Headphones",
  price: 1499,
  category: "Electronics",
  available: true,
  specifications: {
    color: "Black",
    connectivity: "Bluetooth",
    batteryLifeHours: 24,
    warrantyMonths: 12
  },
  ratings: [4, 5, 4, 5]
};
console.log(product);
console.log("Average rating:", product.ratings.reduce((a,b)=>a+b,0)/product.ratings.length);
