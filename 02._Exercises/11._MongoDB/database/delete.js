import db from "./connection.js"

const deleteIceCream = await db.types.deleteOne({ name: "Gelato" }).toArray()
console.log(deleteIceCream);