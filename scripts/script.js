// Script.js
let productArray = [];

// page loads
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('products', JSON.stringify(data))
    })

  productArray = JSON.parse(localStorage.getItem('products'));


  // get localCartTracker from localStorage
  let localCartTracker = JSON.parse(localStorage.getItem('cartTracker'));

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
  localStorage.setItem('cartTracker', JSON.stringify(localCartTracker)); 

  // add every product to html one by one
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i];

    let li = document.createElement('product-item');

    li.shadowRoot.querySelector('img').src = product.image;
    li.shadowRoot.querySelector('img').alt = product.title;
    li.shadowRoot.querySelector('.title').innerHTML = product.title;
    li.shadowRoot.querySelector('.price').innerHTML = product.price;
    li.shadowRoot.querySelector('button').innerHTML = 'Add to Cart';
    li.shadowRoot.querySelector('button').setAttribute('onclick', 'alert(\'Added to Cart!\')');
    li.shadowRoot.querySelector('.product').setAttribute('id', product.id);

    // li.setAttribute('id', product.id);

    //add the product-item to the <ul>
    document.getElementById('product-list').appendChild(li);

  }   
});
