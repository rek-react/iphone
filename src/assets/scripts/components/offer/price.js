const storage = {
  "iphone 15": [
    {
      price: "79990",
      memory: "128",
    },
    {
      price: "89990",
      memory: "256",
    },
    {
      price: "99990",
      memory: "512",
    },
  ],
  "iphone 15 plus": [
    {
      price: "109990",
      memory: "128",
    },
    {
      price: "115990",
      memory: "256",
    },
    {
      price: "119990",
      memory: "512",
    },
  ],
  "iphone 15 pro": [
    {
      price: "129990",
      memory: "128",
    },
    {
      price: "139990",
      memory: "256",
    },
    {
      price: "149990",
      memory: "512",
    },
    {
      price: "159990",
      memory: "1",
    },
  ],
  "iphone 15 pro max": [
    {
      price: "149990",
      memory: "128",
    },
    {
      price: "159990",
      memory: "256",
    },
    {
      price: "169990",
      memory: "512",
    },
    {
      price: "179990",
      memory: "1",
    },
  ],
};
export const offerPrice = (item, model, memory) => {
  const priceElem = item.querySelector(".content-offer__price span");
  const result = storage[model.toLowerCase()].find(
    (iphone) => iphone.memory === memory
  );
  if (result)
    priceElem.innerHTML = parseInt(result.price).toLocaleString("ru") + " ₽";
};
