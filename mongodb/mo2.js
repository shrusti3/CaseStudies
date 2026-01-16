//Add a new vegan dish called “Tofu Buddha Bowl” (cuisine: “Asian”, price: $9.50, tags: [“vegan”, “gluten-free”], available: true).
db.menu.insertOne({  
  name: "Tofu Buddha Bowl", 
  cuisine:"Asian",   
  price: { value:9.50, currency: "USD" },  
  tags: ["vegan", "gluten-free"],
  available: true
});  

//Find all available vegan dishes under $12, showing only their name and price.

db.menu.find({
  tags:"vegan",
  available: true,
  "price.value":{$lt:12}
},
{ name: 1, price: 1, _id: 0 }
);
  

//Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.
db.menu.updateOne(
  {name:"Tofu Buddha Bowl"},
  {
  $set:{"price.value" : 10.00},
  $push:{tags:"popular"}
}
  );

//Delete the dish “Old Special Soup” from the menu.
db.menu.deleteOne({
  name:"Old Special Soup"
});
