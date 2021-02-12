// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  // create a fetch request to get json data from the url
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => window.localStorage.setItem('products', JSON.stringify(data))); // add fetched data to local storage
    

  let productArray = JSON.parse(window.localStorage.getItem('products'));
  for (let i = 0; i < productArray.length; i++) {
    // create a product item and append it to the #product-list ul element
    let currentProduct = productArray[i]; // get current product from the json array


    let item = document.createElement('product-item');
    document.getElementById('product-list').appendChild(item);

    // TODO: so this does not work because when line 19 is called, it automatically goes to the ProductItem class and runs the code there 
    // when that happens, the value of title is null so nothing happens and idk how to fix this!!
    let productTitle = currentProduct.title
    item.setAttribute('title', productTitle);
    console.log(item.getAttribute('title'));
    

  

    //document.getElementById('product-list').getElementsByClassName('title').innerHTML = currentProduct.title;
    //console.log(document.getElementById('product-list').getElementsByClassName('title'));
  }
})
