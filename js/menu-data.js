/* ===== De Prime Lounge — Menu Data =====
   Edit this file to add / remove / update menu items.
   Each category has: id, title, icon (font-awesome class), image (banner), items[]
   Each item has: name, price (number, in Naira), note (optional subtitle)
*/

const MENU_DATA = [
  {
    id: "champagne",
    title: "Champagne",
    icon: "fa-solid fa-champagne-glasses",
    image: "images/champagne.jpg",
    items: [
      { name: "Moët Rosé", price: 210000 },
      { name: "Belaire Rosé", price: 110000 },
      { name: "Bottega Gold", price: 90000 },
      { name: "Bluenum Gold", price: 50000 },
      { name: "Martini Rosé", price: 30000 }
    ]
  },
  {
    id: "whisky-cognac",
    title: "Whisky & Cognac",
    icon: "fa-solid fa-whiskey-glass",
    image: "images/whisky.jpg",
    note: "Top Shelf / Premium Tier",
    items: [
      { name: "Hennessy XO", price: 450000 },
      { name: "Glenfiddich 21 Yrs", price: 350000 },
      { name: "Glen 18 Years", price: 200000 },
      { name: "Glenfiddich 18 Yrs", price: 210000 },
      { name: "Hennessy VSOP", price: 175000 },
      { name: "Glenfiddich 15 Yrs", price: 160000 },
      { name: "Macallan 12 Yrs", price: 150000 },
      { name: "Macallan 12 Years", price: 150000 },
      { name: "Remy Martin VS", price: 140000 },
      { name: "Glenlivet 18 Yrs", price: 140000 },
      { name: "Drosti Holf (Fruity)", price: 140000 },
      { name: "Glen 12 Years", price: 120000 },
      { name: "Escodo-Rose", price: 35000 },
      { name: "Famous", price: 30000 },
      { name: "Drosti Holf (Assagoni)", price: 20000 },
      { name: "Asconi-Agor", price: 20000 }
    ]
  },
  {
    id: "standard-tier",
    title: "Standard Tier",
    icon: "fa-solid fa-martini-glass-citrus",
    items: [
      { name: "Glenfiddich 12 Yrs", price: 110000 },
      { name: "Hennessy VS", price: 110000 },
      { name: "Independence Single Malt", price: 110000 },
      { name: "Singleton", price: 110000 },
      { name: "Gold Label", price: 110000 },
      { name: "Martell VS", price: 80000 }
    ]
  }
];
