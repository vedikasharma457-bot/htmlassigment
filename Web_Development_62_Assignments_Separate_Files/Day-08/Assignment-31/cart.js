const cart = {
  items: [],
  addItem(product, quantity = 1) {
    if (!product || !Number.isFinite(product.price) || product.price < 0) throw new Error("Invalid product.");
    if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Quantity must be a positive integer.");
    const existing = this.items.find(item => item.id === product.id);
    if (existing) existing.quantity += quantity;
    else this.items.push({ id: product.id, name: product.name, price: product.price, quantity });
  },
  getSubtotal() { return this.items.reduce((sum,item)=>sum+item.price*item.quantity,0); },
  getTax(rate = 0.18) { return this.getSubtotal()*rate; },
  getTotal(rate = 0.18) { return this.getSubtotal()+this.getTax(rate); }
};
cart.addItem({id:"P1",name:"Notebook",price:80},2);
cart.addItem({id:"P2",name:"Pen",price:20},3);
console.log(cart, cart.getTotal());
