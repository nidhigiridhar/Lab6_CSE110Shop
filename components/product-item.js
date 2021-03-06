// product-item.js
class ProductItem extends HTMLElement {
  constructor() {
    super();

    let body = this.attachShadow({ mode: 'open' });
    let li = document.createElement('li');
    li.setAttribute('class', 'product');

    let image = document.createElement('img');

    let title = document.createElement('p');
    title.setAttribute('class', 'title');

    let price = document.createElement('p');
    price.setAttribute('class', 'price');

    let button = document.createElement('button');

    // event handler to add and remove from cart (step 5)
    button.addEventListener('click', function () {
      if (button.innerHTML == 'Add to Cart') {
        alert('Added to Cart!');

        // increase cart count 
        let cart = parseInt(document.getElementById('cart-count').innerHTML);
        cart++;
        document.getElementById('cart-count').innerHTML = cart;
        button.innerHTML = 'Remove from Cart';

        // get cartTracker array from local storage and remove current one in local storage
        let cartTracker = JSON.parse(window.localStorage.getItem('cartTracker'));
        window.localStorage.removeItem('cartTracker');

        // add element to cartTacker array if it is added to cart
        let elementID = parseInt(li.getAttribute('id'));
        cartTracker[elementID - 1] = 1;

        // put updated cartTracker array back in local storage
        window.localStorage.setItem('cartTracker', JSON.stringify(cartTracker));
      }

      else {
        alert('Removed from Cart!');

        // decrease cart count 
        let cart = parseInt(document.getElementById('cart-count').innerHTML);
        cart--;
        document.getElementById('cart-count').innerHTML = cart;
        button.innerHTML = 'Add to Cart';

        // get cartTracker array from local storage and remove current one in local storage
        let cartTracker = JSON.parse(window.localStorage.getItem('cartTracker'));
        window.localStorage.removeItem('cartTracker');

        // add element to cartTacker array if it is added to cart
        let elementID = parseInt(li.getAttribute('id'));
        cartTracker[elementID - 1] = 0;

        // put updated cartTracker array back in local storage
        window.localStorage.setItem('cartTracker', JSON.stringify(cartTracker));
      }
    })

    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    } `;

    li.appendChild(image);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(button);
    body.appendChild(li);
    body.appendChild(style);

  }
}

customElements.define('product-item', ProductItem);