// Script.js
let productArray = [];

// page loads
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      window.localStorage.setItem('products', JSON.stringify(data))
    })

  productArray = JSON.parse(window.localStorage.getItem('products'));


  // get localCartTracker from localStorage
  let localCartTracker = JSON.parse(window.localStorage.getItem('cartTracker'));

  // if localCartTracker was not in localStorage (initial case), populate it with 0's
  if(localCartTracker == undefined){
    localCartTracker=[];
    //console.log('here inside if');
    let length = productArray.length; 
    for(let i = 0; i < length; i++) {
      localCartTracker.push(0);
    }
  }

  // add localCartTracker to localStorage
  window.localStorage.setItem('cartTracker', JSON.stringify(localCartTracker)); 
  

  // add every product to html one by one
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i];

    let li = document.createElement('product-item');

    li.shadowRoot.querySelector('img').src = product.image;
    li.shadowRoot.querySelector('img').alt = product.title;
    li.shadowRoot.querySelector('.title').innerHTML = product.title;
    li.shadowRoot.querySelector('.price').innerHTML = '$' + product.price;
    li.shadowRoot.querySelector('button').innerHTML = 'Add to Cart';   
    li.shadowRoot.querySelector('.product').setAttribute('id', product.id);

    // update cart count and products added to cart to in previous browser session
    let elementID = li.shadowRoot.querySelector('.product').getAttribute('id');
    if(localCartTracker[elementID - 1] == 1) {
      let cart = parseInt(document.getElementById('cart-count').innerHTML);
      cart++;
      document.getElementById('cart-count').innerHTML = cart;
      li.shadowRoot.querySelector('button').innerHTML = 'Remove from Cart';
    }

    //add the product-item to the <ul>
    document.getElementById('product-list').appendChild(li);

  }   
});
