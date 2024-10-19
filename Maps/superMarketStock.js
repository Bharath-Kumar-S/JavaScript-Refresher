const superMarketStock = new Map();

// stock item
superMarketStock.set("soap", 500);
superMarketStock.set("oats", 1000);
superMarketStock.set("shampoo", 800);

// purchase
superMarketStock.set("soap", superMarketStock.get("soap") - 1);
console.log(superMarketStock.get("soap"));

// out of stock
superMarketStock.delete("oats");
console.log(superMarketStock.has("oats"));

// restock
superMarketStock.set("oats", 500);
console.log(superMarketStock.has("oats"));
