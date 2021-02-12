// Script.js
let productArray = [];
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('products', JSON.stringify( data))
      //console.log(data)
    })

  productArray = JSON.parse(localStorage.getItem('products'));

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

    li.setAttribute('id', product.id);

    //add the product-item to the <ul>
    document.getElementById('product-list').appendChild(li);
  }
      
});
