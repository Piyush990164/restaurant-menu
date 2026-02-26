const menu = {
  1: { name: "Margherita Pizza", price: 250 },
  2: { name: "Vada Pav", price: 20 },
  3: { name: "Pasta ", price: 220 },
  4: { name: "Grilled Sandwich", price: 120 },
  5: { name: "French Fries", price: 100 },
  6: { name: "Samosa pav", price: 90 },
  7: { name: "Chocolate Shake", price: 150 },
  8: { name: "Paneer Tikka", price: 379 },
  9: { name: "Veg Thali", price: 300 },
  10: { name: "Ice Cream ", price: 130 }
};

// Display menu
let menuText = "🍴 Welcome to Piyush Restaurant 🍴\n\nToday's Menu:\n";
for (let key in menu) {
  menuText += `${key}. ${menu[key].name} — ₹${menu[key].price}\n`;
}
menuText += "\nEnter the numbers of the items you want:";
alert(menuText);

// Input
let choice = prompt("Enter your choice (e.g., 1,3,5):");
if (!choice) {
  alert("No item selected. Thank you for visiting!");
} else {
  let items = choice.split(",").map(i => i.trim());
  let orderList = "";
  let total = 0;

// Calculation
  for (let i of items) {
    if (menu[i]) {
      orderList += `${menu[i].name} — ₹${menu[i].price}\n`;
      total += menu[i].price;
    } else {
      orderList += `Invalid item: ${i}\n`;
    }
  }

  
  let confirmOrder = confirm("You selected:\n\n" + orderList + "\nConfirm order?");
  
  if (confirmOrder) {
    alert("✅ Order confirmed!\n\nYour Bill:\n" + orderList + "\nTotal: ₹" + total + "\n\nThank you for dining with us!");
  } else {
    alert("❌ Order cancelled. Feel free to order again!");
  }
}
