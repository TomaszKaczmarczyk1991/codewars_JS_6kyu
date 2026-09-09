const items = [{name:"Smarties", code:"A01", quantity:10, price:0.60}, {name:"Caramac Bar", code:"A02", quantity:5, price:0.60}, {name:"Dairy Milk", code:"A03", quantity:1, price:0.65}, {name:"Freddo", code:"A04", quantity:1, price:0.25}];


class VendingMachine {
    constructor(items, money) {
        this.items = items
        this.money = money
    }

    vend(selection, itemMoney){
        const item = this.items.find(item => item.code === selection)
        
        if(item === undefined) return `Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`
        
        if(itemMoney < item.price) return 'Not enough money!'
        
        if(item.quantity === 0) return `${item.name}: Out of stock!`
    
         
        item.quantity--
        const change = itemMoney - item.price
        this.money += itemMoney - change
        
        if(change > 0) return `Vending ${item.name} with ${change.toFixed(2)} change.`
        
        return `Vending ${item.name}`
        
    }
}


const machine = new VendingMachine(items,10.00)

console.log(machine.vend("A01", 0.60)) // Vending Smarties

console.log(machine.vend("A04", 5.00)) // Freddo: Out of stock!

console.log(machine.vend("A02", 5.00)) // Vending Caramac Bar with 4.40 change.