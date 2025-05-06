const parseInventory = (csv) => {
    const [headerLine, ...dataLines] = csv.trim().split("\n");
  
    const items = dataLines.map(line => {
      const [item, category, qty] = line.split(",");
      return { item, category, qty: Number(qty) };
    });
  
    const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  
    return [items, totalQty];
  };
  const input = "Item,Category,Qty\nKeyboard,Electronics,12\nPen,Stationery,30";

  console.log(parseInventory(input));
    