// --- Type alias for a menu item ---
type MenuItem = {
    id: number,
    name: string,
    price: number
}

// enum, union type for order status
type Status = "ordered" | "completed" | "canceled" | "done";

// --- Type alias for an order ---
type Order = {
    id: number,
    item: MenuItem,
    status: Status
}

// --- Store variables ---
let cashInRegister = 100;         // initial cash in register
let nextOrderId: number = 1;      // auto-incrementing order ID
let nextItemId: number = 1;       // auto-incrementing menu item ID
let orderQueue: Order[] = [];     // queue to track active orders

// --- Initial menu ---
const menu: MenuItem[] = [
    { id: nextItemId++, name: "Pasta", price: 12.99 },
    { id: nextItemId++, name: "Pizza", price: 15.99 }, 
    { id: nextItemId++, name: "Salad", price: 9.99 },
    { id: nextItemId++, name: "Soup", price: 7.99 }
]

// --- Add a new item to the menu ---
// utilizing TypeScript's utility type Omit
// Omit<MenuItem, "id"> means caller does not provide id; we auto-generate it
function addNewItem(itemObj: Omit<MenuItem, "id">): MenuItem{
    const newItem: MenuItem = {
        id: nextItemId++, // assign new ID
        ...itemObj        // spread remaining properties
    }
    menu.push(newItem)
    return newItem
}

// --- Place a new order ---
function placeOrder(itemName: string): Order | undefined {
    // Find menu item (case-insensitive)
    const item = menu.find(item => item.name.toLowerCase() === itemName.toLowerCase())
    if (!item) {
        console.error(`${itemName} does not exist in the menu!`)
        return
    }

    // Update cash and create order
    cashInRegister += item.price
    const newOrder: Order = { id: nextOrderId++, item: item, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

// --- Complete an existing order ---
function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(o => o.id === orderId)
    if(!order) {
        console.error(`${orderId} was not found in the orderQueue!`)
        throw new Error(`${orderId} was not found in the orderQueue!`)
    } 
    order.status = "completed" // mark as completed
    return order
}

// --- Add some menu items ---
addNewItem({ name: "Burger", price: 11.99 })
addNewItem({ name: "Fries", price: 4.99 })
addNewItem({ name: "Soda", price: 1.99 })

// --- Place and complete example orders ---
placeOrder("Pasta")
completeOrder(1)

// --- Logs for debugging ---
console.log("Menu:", menu)
console.log("Cash in Register:", cashInRegister)
console.log("Order Queue:", orderQueue)

// --- Retrieve menu item by name or ID ---
function getMenuItemDetail(identifier: string | number) : MenuItem | undefined {
    if (typeof identifier === "string") {
        return menu.find(item => item.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(item => item.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

// --- Generic function to add an item to any array ---
// array = menu or order, item = MenuItem or Order
function addToArray<T>(array:T[], item:T): T[] {
    array.push(item)
    return array
}

addToArray<MenuItem>( menu, { id: nextItemId++, name: "Ice Cream", price: 3.99 } )
addToArray<Order>( orderQueue, { id: nextOrderId++, item: menu[2], status: "done" } )

console.log(menu)
console.log(orderQueue)

// --- Export all main functions as a single object ---
// This allows other files to import and use the restaurant functionality
// Export everything as a single object
export const Restaurant = {
    addNewItem,
    placeOrder,
    completeOrder,
    getMenuItemDetail
};