const products = [
 {name:"Laptop",category:"Electronics",price:55000,stock:8},
 {name:"Mouse",category:"Electronics",price:700,stock:25},
 {name:"Notebook",category:"Stationery",price:80,stock:100},
 {name:"Pen",category:"Stationery",price:20,stock:250},
 {name:"Headphones",category:"Electronics",price:1800,stock:12}
];
const affordable = products.filter(p => p.price < 2000);
const names = products.map(p => p.name);
const inventoryValue = products.reduce((sum,p) => sum + p.price*p.stock, 0);
const byCategory = products.reduce((acc,p) => {
 acc[p.category] = (acc[p.category] || 0) + 1; return acc;
}, {});
console.log({affordable,names,inventoryValue,byCategory});
