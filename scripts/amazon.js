//adding modules
import {cart} from '../data/cart.js'
import {products} from '../data/products.js'

let productsHTML='';
products.forEach((value,index)=>{
 
    productsHTML+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${value.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${value.name}
          </div>
          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${value.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
            ${value.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(value.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            
            </select>
          </div>

          <div class="product-spacer"></div>
        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>
          <button class="add-to-cart-button button-primary" data-id=${value.id}>Add to Cart
          </button>
        </div>`
        
        
});
let productGrid=document.querySelector('.products-grid')
productGrid.innerHTML+=productsHTML;


let buttonClicked = document.querySelectorAll('.add-to-cart-button')
let added=document.querySelectorAll('.added-to-cart')

 buttonClicked.forEach((button,index)=>{
  // console.log(button);
  button.addEventListener('click',()=>{
   
    added[index].style.opacity=1;
    addToCart()})

function addToCart(){

    let productId=button.dataset.id;
    // console.log(productId);
    let matchingItem=true;
    cart.forEach((item,index)=>{
    if(productId==item.productId)
    {
       item.quantity++
       matchingItem=false;
        
    }
             
})

if(matchingItem)

    {
        cart.push(
          
            {productId:productId, quantity:1}
        )
        
    }

   
        

    let cartQuantity=0;
    cart.forEach((item, index)=>
    {
    cartQuantity+=item.quantity;
    }
    )
    let cartShow= document.querySelector('.cart-quantity')
    cartShow.innerHTML=cartQuantity;
    console.log('cart values are',cart);
  }
      
  
})




