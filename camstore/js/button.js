/* let photos = ["img/product1.png", "img/product2.png", "img/product3.png", "img/product4.png"]; */
const product = {
    items: [
      {
        name: "Vintage 35mm Film Camera",
        description: "This 35mm film camera features a timeless design and mechanical precision.",
        image: "img/product1.png",
        imageCell: "img/productCell1.png",
        price: "$1000"
      },
      {
        name: "Wide Angle Fisheye Lens",
        description: "Designed for creative distortion and expansive scenes, this fisheye lens offers a unique 180° field of view.",
        image: "img/product2.png",
        imageCell: "img/productCell2.png",
        price: "$1000"
      },
      {
        name: "DSLR Camera with Zoom Lens",
        description: "A versatile digital SLR camera paired with a zoom lens that covers a wide focal range.",
        image: "img/product3.png",
        imageCell: "img/productCell3.png",
        price: "$1000"
      },
      {
        name: "Camera Bag",
        description:  "This is a compact and practical bag designed to protect your photography equipment.",
        image: "img/product4.png",
        imageCell: "img/productCell4.png",
        price: "$1000"
      }
    ]
  };
  
let left = document.getElementById("left");
let right = document.getElementById("right");
let i = 0;
let img = document.getElementById("imgProduct")
let cell = document.getElementById('cell');
let compu = document.getElementById("compu");
let cardName = document.getElementById("cardName");
let textCard = document.getElementById("textCard");
let cardPrice = document.getElementById("cardPrice");
let priceAnimation = document.getElementById("priceAnimation");
right.addEventListener("click", () => {
        i = (i +1 )% product.items.length;
      img.src = product.items[i].image ;
      cell.srcset = product.items[i].imageCell;
      compu.srcset = product.items[i].image;
      img.classList.add("imgAnimation");
      cardName.classList.add("imgAnimation");
      textCard.classList.add("imgAnimation");
      cardPrice.classList.add("imgAnimation");
      cardName.innerText = product.items[i].name;
      textCard.innerText = product.items[i].description;
      cardPrice.innerText = product.items[i].price;
      setTimeout(() => {
        img.classList.remove("imgAnimation");
        cardName.classList.remove("imgAnimation");
        textCard.classList.remove("imgAnimation");
        cardPrice.classList.remove("imgAnimation");
      },1500)
})

left.addEventListener("click", () => {

    i = (i - 1 + product.items.length) % product.items.length;
    img.src = product.items[i].image ;
      cell.srcset = product.items[i].imageCell;
      compu.srcset = product.items[i].image;
      img.classList.add("imgAnimation");
      cardName.classList.add("imgAnimation");
      textCard.classList.add("imgAnimation");
      cardPrice.classList.add("imgAnimation");
      cardName.innerText = product.items[i].name;
      textCard.innerText = product.items[i].description;
      cardPrice.innerText = product.items[i].price;
      setTimeout(() => {
        img.classList.remove("imgAnimation")
        cardName.classList.remove("imgAnimation")
        textCard.classList.remove("imgAnimation")
        cardPrice.classList.remove("imgAnimation")
      },1500)
      
})