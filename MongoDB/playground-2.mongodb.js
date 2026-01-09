// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'apple', 'price': 3, 'quantity': 2, 'date': new Date('2024-03-01T08:00:00Z') },
  { 'item': 'carrot', 'price': 5, 'quantity': 1, 'date': new Date('2025-03-01T09:00:00Z') },
]);
