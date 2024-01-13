let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
// let total = document.querySelector(".total");
let quantity = document.querySelector(".total");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Stuffed Chicken",
    image: "1.PNG",
    price: 22 ,
  },
  {
    id: 2,
    name: "Baked chicken wings",
    image: "2.PNG",
    price: 12,
  },
  {
    id: 3,
    name: "Salad with salmon",
    image: "3.PNG",
    price: 17,
  },
  {
    id: 4,
    name: "Butternut soup",
    image: "4.PNG",
    price: 6,
  },
  {
    id: 5,
    name: "Salad with cherry tomatoes",
    image: "5.PNG",
    price: 8,
  },
  {
    id: 6,
    name: "Oregano pizza",
    image: "6.PNG",
    price: 24,
  },
  {
    id: 7,
    name: "Potatoe pancakes with bacon",
    image: "7.PNG",
    price: 26,
  },
  {
    id: 8,
    name: "Chrispy chichken nuggets",
    image: "8.PNG",
    price: 18,
  },
  {
    id: 9,
    name: "Bowl of basko",
    image: "9.PNG",
    price: 15,
  },
  {
    id: 10,
    name: "Fried chicken nuggets",
    image: "10.PNG",
    price: 18,
  },
  {
    id: 11,
    name: "Beef Rendang",
    image: "11.PNG",
    price: 32,
  },
  {
    id: 12,
    name: "Sayur Lodeh",
    image: "12.PNG",
    price: 16,
  },
  {
    id: 13,
    name: "Spicy Noodles",
    image: "13.PNG",
    price: 19,
  },
  {
    id: 14,
    name: "Pasta Carbonara",
    image: "14.PNG",
    price: 27,
  },
  
];

let listCards = [];

// function checkCart(){
//   var cookieValue = document.cookie
//   .split('; ')
//   .find(row => row.startsWith('listCards='));
//   if(cookieValue){
//       listCards = JSON.parse(cookieValue.split('=')[1]);
//   }else{
//       listCards = [];
//   }
// }
// checkCart();

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="./assets/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}₼</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
//___________________________________________________
//bu func mehsulun kopyasini yaradib sebete atir
function addToCard(key) {
  if (listCards[key] == null) {
    //hemin key ile olan mehsulu copy edib sebete elave edir
    listCards[key] = JSON.parse(JSON.stringify(products[key])); //json istifade etmesek obyekte yoneldecek, copy qaytarmiyacaq
    listCards[key].quantity = 1; //sebetdeki mehsulun sayini 1 edirik
  }
  reloadCard();
}
//___________________________________________________

// function reloadCard() {
//   listCard.innerHTML = "";
//   let count = 0;
//   let totalPrice = 0;
//   listCards.forEach((value, key) => {
//     totalPrice = totalPrice + value.price;
//     count = count + value.quantity;
//     if (value != null) {
//       let newDiv = document.createElement("li");
//       newDiv.innerHTML = `
//                 <div><img src="./assets/image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${
//         value.quantity - 1
//       })">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${
//         value.quantity + 1
//       })">+</button>
//                 </div>`;
//       listCard.appendChild(newDiv);
//     }
//   });
  
//   document.querySelector(".shopping .quantity").innerText = count;

//   total.innerText = totalPrice.toLocaleString();
//   quantity.innerText = count;
// }


function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalSum = 0;

  listCards.forEach((value, key) => {
    totalSum += value.price * value.quantity;
    count += value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="./assets/image/${value.image}" /></div>
        <div>${value.name}</div>
        <div>${(value.price * value.quantity).toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);
    }
  });

  // Display the total quantity and total sum in the shopping cart
  document.querySelector(".shopping .quantity").innerText = count;
  document.querySelector(".total").innerText = totalSum.toLocaleString();
  document.querySelector(".card .total").innerText = totalSum.toLocaleString();
  quantity.innerText = count;
}


//_________________________________________________________
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

