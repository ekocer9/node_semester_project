import db from "./connection.js"

const createIceCream = await db.types.insertOne({ name: "Gelato", price: 12 }).toArray()
console.log(createIceCream);