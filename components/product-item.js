// product-item.js

// template for product-item element
const template = document.createElement('template');
    template.innerHTML = `
    
      <style>
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
      </style>

      <li class="product">
        <img src="" alt="" width=0>
        <p class="title"></p>
        <p class="price"></p>
        <button onclick="alert('Added to Cart!')">Add to Cart</button>
      </li> 
    `;

class ProductItem extends HTMLElement {
  constructor() {
    super();

/*
    //const s = document.getElementById('product-list');
    //const shadowRoot = s.attachShadow({mode: 'open'});
    //const shadowRoot = document.body.main.ul.attachShadow(item);
    this.attachShadow({mode: 'open'});
    let item = document.createElement('li'); // Could also use appendChild().
    item.setAttribute('class', 'product');
    
    
   
   // title of item
    let title = document.createElement('p');
    title.setAttribute('class', 'title');
    //title.textContent  = this.getAtt
    //title.setAttribute('value', 'Here inside p');
    //title.innerHTML('Here inside p');

    // price of item
    let price = document.createElement('p');
    price.setAttribute('class', 'price');

    // image of item
    let image = document.createElement('img');
    image.setAttribute('src', ''); // fill these in?
    image.setAttribute('alt', '');
    image.setAttribute('width', 0);

    // button
    let button = document.createElement('button');
    button.setAttribute('onclick', 'alert(Added to Cart!)');
    button.onclick = () => onclick.click();

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
    } `
    

    this.shadowRoot.appendChild(item);
    this.shadowRoot.appendChild(style);
    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(button);
    // document.body.main.ul.appendChild(item);
    */


    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true)); // add template
    
    this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title'); // add title
    console.log(this.getAttribute('title'));
    
  }
}

customElements.define('product-item', ProductItem);