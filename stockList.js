function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) return "";
    
    let cat = {}
    let list = {}
    const result = []
    
    for(let j = 0; j < books.length; j++) {
        list[books[j][0]] = (list[books[j][0]] ?? 0) + +(books[j].split(" ")[1]);
    }

    for(let i = 0; i < categories.length; i++) {
        const key = categories[i];
        cat[key] = (cat[key] ?? 0) + (list[key] ?? 0);
    }

    return Object.entries(cat).map(([key, value]) => `(${key} : ${value})`).join(" - ")
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))