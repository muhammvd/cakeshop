//Declare Variables
const cakes = document.querySelector('.cakes');
const doughNut = document.querySelector('.doughnuts');
const cupCakes = document.querySelector('.cupcakes');
const sweets = document.querySelector('.sweets');
const allSnacks = document.querySelector('.all');
const searchSnack = document.querySelector('.input-class');
const cartBtn = document.querySelectorAll('.btn');
const cart = document.querySelector('.cart');
const toggleMenu = document.querySelector('.container');
const classElement = document.querySelectorAll('.class');

//toggle cart off the screen
cart.addEventListener('click', function toggle(){
  var toggleItem = document.querySelector('.cart-content');
  toggleItem.classList.toggle('toggleClass');
})

//Add an event listener
allSnacks.addEventListener('click', ()=>{
  let titles = document.querySelectorAll('.title');
  titles.forEach((title)=>{
     title.parentElement.parentElement.style.display = 'block';
  })
})

cakes.addEventListener('click', ()=>{
   let titles = document.querySelectorAll('.title');
   titles.forEach((title)=>{
     if(title.innerHTML == 'Cakes'){
       title.parentElement.parentElement.style.display = 'block';
     } else{
      title.parentElement.parentElement.style.display = 'none';
     }
   })
})

sweets.addEventListener('click', ()=>{
  let titles = document.querySelectorAll('.title');
  titles.forEach((title)=>{
    if(title.innerHTML == 'Sweets'){
      title.parentElement.parentElement.style.display = 'block';
    } else{
     title.parentElement.parentElement.style.display = 'none';
    }
  })
})

cupCakes.addEventListener('click', ()=>{
  let titles = document.querySelectorAll('.title');
  titles.forEach((title)=>{
    if(title.innerHTML == 'Cup Cake'){
      title.parentElement.parentElement.style.display = 'block';
    } else{
     title.parentElement.parentElement.style.display = 'none';
    }
  })
})

doughNut.addEventListener('click', ()=>{
  let titles = document.querySelectorAll('.title');
  titles.forEach((title)=>{
    if(title.innerHTML == 'Doughnut'){
      title.parentElement.parentElement.style.display = 'block';
    } else{
     title.parentElement.parentElement.style.display = 'none';
    }
  })
})

//search snack function
searchSnack.addEventListener('keyup', ()=>{
   //getting the input value and converting it to lower case
   searchVal = searchSnack.value.toLowerCase();
   //looping through titles to find a match
   let titles = document.querySelectorAll('.title');
   titles.forEach((title)=>{
    let snack = title.innerHTML;
     if(snack.toLowerCase().indexOf(searchVal) != -1){
       title.parentElement.parentElement.style.display = 'block'
     } else{
      title.parentElement.parentElement.style.display = 'none'
     }
      
    })
})


//Add to cart
cartBtn.forEach((button)=>{
  //loop through button and listen for a click
  button.addEventListener('click', addToCart); 
})

function addToCart(e) {
  //target the button and get cart details 
  let button = e.target;
  var cartItems = button.parentElement.parentElement;
  var title = cartItems.childNodes[3].childNodes[1].innerHTML;
  var price = cartItems.childNodes[3].childNodes[3].innerHTML;
  var image = cartItems.childNodes[1].src;
  addItemToCart(title, price, image)
  updateTotalPrice()
}

function addItemToCart(title, price, image) {
  //creating the cart object
  var cartItemsContent = `
  <div class="cart-items">
  <img src="${image}" alt="" class='image-holder'>
  <h5 class = 'tittle-holder'>${title}</h5>
  <p class="price-holder">${price}</p>
  <input type="number" value="1" class="quantity-holder">
  <button class="remove-btn">remove</button>
  </div>
  `;

  var cartContainer = document.createElement('div');
  var imageHolder = document.getElementsByClassName('image-holder');
  var cartItemsHolder = document.getElementsByClassName('class')[0];
  var cartItemsHolders = document.getElementsByClassName('class');


  //running conditionals to avoid double entry of products
  for(imageHold of imageHolder){
    if(imageHold.src == image){
      alert('product is already added!');
      return
    }
  }

   //Append with HTML
   cartContainer.innerHTML = cartItemsContent;
   cartItemsHolder.append(cartContainer)

  // Removing an item from the cart
   cartContainer.querySelector('.remove-btn').addEventListener('click', (e)=>{
     var currentItem = e.target;
     currentItem.parentElement.parentElement.remove();
     updateTotalPrice()
   })

  // Adding quantity functionality
  var quantityHolder = document.getElementsByClassName('quantity-holder');
    for(quantity of quantityHolder) {
      quantity.addEventListener('change', quantityHolderChange);
    }

    function quantityHolderChange(e){
      let currentBtn = e.target;
        if(isNaN(currentBtn.value) || currentBtn.value <= 0) {
          currentBtn.value = 1
        }
        updateTotalPrice()
    }

}

function updateTotalPrice() {
   //Updating the cart
    var cartUpdates = document.getElementsByClassName('cart-items');
    
    totalPrice = 0;

    for(cartUpdate of cartUpdates) {
      let priceElement = cartUpdate.getElementsByClassName('price-holder')[0];
      let quantityProductElement = cartUpdate.getElementsByClassName('quantity-holder')[0];
      //getting the actual values
      let price = parseFloat(priceElement.innerText.replace('$', ''));
      let quantity = quantityProductElement.value;
      totalPrice = totalPrice + (price * quantity)
    }
     totalPrice = Math.floor(totalPrice * 100) /  100;
    
     if(totalPrice === 0){
      let node = document.querySelector('.class');
      node.style.display = 'none';
      node.style.overflow = 'none';
      let total = document.querySelector('.total').style.display = 'none';
      let cartMessage = document.querySelector('.cart-message');
      cartMessage.textContent = 'cart is empty'
      cartMessage.style.backgroundColor = 'rgb(255, 11, 161)';
     } else{
      let node = document.querySelector('.class');
      let total = document.querySelector('.total').style.display = 'block'
      node.style.display = 'block'
      node.style.height = '100px';
      let cartMessage = document.querySelector('.cart-message');
      cartMessage.style.backgroundColor = 'transparent';
      cartMessage.textContent = ''
     }


     document.getElementById('totally').innerHTML = `$<strong>${totalPrice}</strong>`;
     
  }

  updateTotalPrice()


