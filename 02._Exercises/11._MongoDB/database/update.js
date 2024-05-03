import db from "./connection.js"

const updateIceCream = await db.types.updateOne({ name: "Gelato"}, { $set: { price: 12 }}).toArray()
console.log(updateIceCream);