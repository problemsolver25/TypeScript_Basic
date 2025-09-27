type MenuItem = {
    id: number,
    name: string,
    price: number
}

// enum, union types
type Status = "ordered" | "completed" | "canceled" | "done";

type Order = {
    id: number,
    item: MenuItem,
    status: Status
}

let cashInRegister = 100;
let nextOrderId: number = 1;
let nextItemId: number = 1;
let orderQueue: Order[] = [];

const menu: MenuItem[] = [
    { id: nextItemId++, name: "Pasta", price: 12.99 },
    { id: nextItemId++, name: "Pizza", price: 15.99 }, 
    { id: nextItemId++, name: "Salad", price: 9.99 },
    { id: nextItemId++, name: "Soup", price: 7.99 }
]

function addNewItem(itemObj: Omit<MenuItem, "id">): MenuItem{
    const newItem: MenuItem = {
        id: nextItemId++,
        ...itemObj
    }
    menu.push(newItem)
    return newItem
}

function placeOrder(itemName: string): Order | undefined {
    const item = menu.find(item => item.name.toLowerCase() === itemName.toLowerCase())
    if (!item) {
        console.error(`${itemName} does not exist in the menu!`)
        return
    }
    cashInRegister += item.price
    const newOrder: Order = { id: nextOrderId++, item: item, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(o => o.id === orderId)
    if(!order) {
        console.error(`${orderId} was not found in the orderQueue!`)
        throw new Error(`${orderId} was not found in the orderQueue!`)
    } 
    order.status = "completed"
    return order
}

addNewItem({ name: "Burger", price: 11.99 })
addNewItem({ name: "Fries", price: 4.99 })
addNewItem({ name: "Soda", price: 1.99 })

placeOrder("Pasta")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in Register:", cashInRegister)
console.log("Order Queue:", orderQueue)

function getMenuItemDetail(identifier: string | number) : MenuItem | undefined {
    if (typeof identifier === "string") {
        return menu.find(item => item.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(item => item.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

// list = menu or order
function addToArray<T>(array:T[], item:T): T[] {
    array.push(item)
    return array
}

addToArray<MenuItem>( menu, { id: nextItemId++, name: "Ice Cream", price: 3.99 } )
addToArray<Order>( orderQueue, { id: nextOrderId++, item: menu[2], status: "done" } )

console.log(menu)
console.log(orderQueue)

// Export everything as a single object
export const Restaurant = {
    addNewItem,
    placeOrder,
    completeOrder,
    getMenuItemDetail
};