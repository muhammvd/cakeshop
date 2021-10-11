const cakes = document.querySelector('.cakes');
const sweet = document.querySelector('.sweets')
const cupcakes = document.querySelector('.cupcakes')
const dough = document.querySelector('.doughnuts');
const all = document.querySelector('.all');
const card = document.querySelectorAll('.card');
const input = document.querySelector('.input');
const removeCart = document.querySelectorAll('.remove');
const cartItems = document.querySelectorAll('.cart-items');
const quantities = document.getElementsByClassName('quan')
const addCart = document.getElementsByClassName('btn');
const cart = document.querySelector('.cart');


cupcakes.addEventListener('click', runCup)
cakes.addEventListener('click', runCake);
sweet.addEventListener('click', runSweet);
dough.addEventListener('click', runDough);
all.addEventListener('click', runAll);
input.addEventListener('keyup', runInput);
cart.addEventListener('click', function toddle(e){
  var tog = document.querySelector('.cart-content')
  tog.classList.toggle('lol')
})

  for( let i = 0; i < quantities.length; i++){
    quanty = quantities[i]
     quanty.addEventListener('change', quantityChanged)
  }
   
   function quantityChanged(e){
    quanty = e.target;

    if(isNaN(quanty.value) || quanty.value <= 0){
      quanty.value = 1
    }
    updateTotal()
  }

  for( let i = 0; i < addCart.length; i++){
   var button = addCart[i]
    
    button.addEventListener('click', addCartClicked);
 }

  function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement; 
    var title = shopItem.getElementsByClassName('title')[0].innerText;
    var price = shopItem.getElementsByClassName('price')[0].innerText;
    var image = shopItem.getElementsByClassName('item-image')[0].src;
    addItemCart(title, price, image);
    updateTotal()
  }
     
  function addItemCart(title, price, image) {
    var cartlist = document.createElement('div');
    var cartItems = document.getElementsByClassName('class')[0];
    var cartItemsLength = cartItems.getElementsByClassName('topbas');
      
     for(let i = 0; i < cartItemsLength.length; i++){
       if(cartItemsLength[i].src == image) {
         alert('This item is added already, Smile!')
         return;
      }
      }

    var cartItemsContent = `
     <div class="cart-items">
     <img src="${image}" alt="" class='topbas'>
     <h5 class = 'namu'>${title}</h5>
     <p class="token">${price}</p>
     <input type="number" value="1" class="quan">
     <button class="remove">Remove</button>
     </div>
      `
    cartlist.innerHTML = cartItemsContent;
      
    cartItems.appendChild(cartlist)

    cartlist.getElementsByClassName('remove')[0].addEventListener('click', function(e) {
      var butt = e.target;
      butt.parentElement.parentElement.remove()
      updateTotal()
    } )

    cartlist.getElementsByClassName('quan')[0].addEventListener('change', quantityChanged)
  }



function updateTotal() {
  //var cart = document.getElementsByClassName('cart-content')[0]
  
  var cartRows = document.getElementsByClassName('cart-items');
  
  var total = 0;

  for(let i = 0; i < cartRows.length; i++){
     var cartRow = cartRows[i];

     var priceElement = cartRow.getElementsByClassName('token')[0]

     var quantityElemen = cartRow.getElementsByClassName('quan')[0]
  
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = quantityElemen.value;
      
      total = total + (price * quantity)

  } 

  total = Math.round(total * 100) / 100;

  document.getElementById('totally').innerText = `$${total}`;
  
}



function runCake() {
    
  card.forEach((item) => {
   
    if(item.firstElementChild.innerHTML === 'Cakes'){
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
    })
 
  }

  function runCup() {
      card.forEach((item) => {
   
    if(item.firstElementChild.innerHTML === 'Cup Cake'){
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
    })

  }

  function runSweet() {
    card.forEach((item) => {
   
      if(item.firstElementChild.innerHTML === 'Sweet Items'){
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
      })
  }

  function runDough() {
    card.forEach((item) => {
   
      if(item.firstElementChild.innerHTML === 'Doughnut'){
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
      })
  }


  function runAll() {

    card.forEach((items) => {
      items.style.display = 'block'
    })
    /*location.reload()*/
  }

  function runInput() {
     let inputVal = input.value.toLowerCase();
  
    
     card.forEach((cards) => {

      let first = cards.firstElementChild.textContent;
       
      if(first.toLowerCase().indexOf(inputVal) != -1) {
        cards.style.display  = 'block'
      } else {
        cards.style.display = 'none'
      }

     })
  

  }




  