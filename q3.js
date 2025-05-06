const flattenConfig = (cfg) => {
    const {
      meta: { title },
      theme: { primary: themePrimary },
      authors: [, featuredAuthor]
    } = cfg;
  
    return { ...{ title, primaryColor: themePrimary, featuredAuthor } };
  };
  const blogCfg = {
    meta: { title: "JS Wizardry" },
    theme: { primary: "#3498db", secondary: "#2ecc71" },
    authors: ["Alice", "Bob", "Charlie"]
  };
  
  console.log(flattenConfig(blogCfg));
  
  
  console.log(blogCfg === blogCfg);