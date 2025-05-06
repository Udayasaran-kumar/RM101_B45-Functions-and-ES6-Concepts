const createStringToolkit = (separator = " ") => {
    const join = (...strings) => strings.join(separator);
  
    const titleCase = (...strings) => 
      join(...strings)
        .split(separator)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(separator);
  
    const stats = (...strings) => ({
      count: strings.length,
      longest: strings.reduce((a, b) => (b.length > a.length ? b : a), "")
    });
  
    return { join, titleCase, stats };
  };

  const tk = createStringToolkit("-");

console.log(tk.join("hello", "world"));           
console.log(tk.titleCase("the", "quick", "fox")); 
console.log(tk.stats("a", "ab", "abc"));  