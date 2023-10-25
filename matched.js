const products = [
  { id: 1, name: "phone" },
  { id: 2, name: "laptop" },
  { id: 3, name: "phone" },
  { id: 4, name: "laptop" },
  { id: 5, name: "phone" },
  { id: 6, name: "laptop" },
  { id: 7, name: "phone" },
  { id: 8, name: "laptop" },
  { id: 9, name: "laptop" },
  { id: 10, name: "phone" },
  { id: 11, name: "laptop" },
  { id: 12, name: "phone" },
  { id: 13, name: "laptop" },
  { id: 14, name: "phone" },
];

function matched(products, search) {
  let obj = [];
  for (let item of products) {
    if (item.name.toLowerCase().includes(search)) {
      obj.push(item);
    }
  }
  return obj;
}

console.log(matched(products, "phone"));
