// Example of Data Tampering: Updating sales price for apple
db.sales.updateOne(
  { item: "apple" },
  { $set: { price: 99999 } }
)
