const analyze = (products) => ({
    outOfStock: products
      .filter(p => p.stock === 0)
      .map(p => p.name),
  
    totalStockValue: products
      .reduce((sum, p) => sum + p.price * p.stock, 0),
  
    avgPriceByCategory: ["Electronics", "Fashion"].reduce((acc, category) => {
      const categoryItems = products.filter(p => p.category === category);
      const avg = categoryItems
        .map(p => p.price)
        .reduce((sum, price) => sum + price, 0) / categoryItems.length;
      acc[category] = Number(avg.toFixed(1));
      return acc;
    }, {})
  });
  const products = [
    { id: 1, name: "Laptop",     price: 72000, category: "Electronics", stock: 4 },
    { id: 2, name: "Shoes",      price: 3500,  category: "Fashion",     stock: 0 },
    { id: 3, name: "Phone",      price: 48000, category: "Electronics", stock: 7 },
    { id: 4, name: "T-Shirt",    price: 1200,  category: "Fashion",     stock: 23 },
    { id: 5, name: "Headphones", price: 2600,  category: "Electronics", stock: 0 }
  ];
  
  console.log(analyze(products));
    