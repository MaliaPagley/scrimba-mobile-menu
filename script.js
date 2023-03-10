import {menuArray} from './data.js';
const checkoutEl = document.getElementById('checkout')
const formEl = document.getElementById('form-el')
const modalContainer = document.getElementById('modal-container')
const customerName = document.getElementById('customer-name')
const orderDetails = document.getElementById('order-dertails')

document.addEventListener('click', function(e) {
    if(/\d/.test(e.target.id)){
        handleAddBtn(e.target.id)
    } if (e.target.dataset.remove) {
            handleRemoveBtn(e.target.dataset.remove)
     } 
     
     if(e.target.id == 'purchase-btn') {
        handlePurchaseBtn(e.target.id)
     } if(e.target === modalContainer) {
        modalConainer.style.display = 'none'
     }
    
})

formEl.addEventListener('submit',function(e){
    e.preventDefault()
    renderOrderDetails()
    formEl.reset()
})

let orderArr = []

function renderOrderDetails(){
   
    modalContainer.style.display = 'none'
    checkoutEl.style.display = 'none'
    orderDetails.innerHTML = `
    Thanks, ${customerName.value}! Your order is on its way!
    `
    orderDetails.style.display = "block"
    orderArr = []
} 

function handlePurchaseBtn(btnId){
    if(orderArr.length) {
        modalContainer.style.display = 'flex'
    }
}

function handleRemoveBtn(itemId) {
    const index = orderArr.indexOf(orderArr.filter(function(item) {
        return item.id == itemId
    })[0])
    if (index > -1) {
        orderArr.splice(index, 1);
    }
    renderCheckout()
}

function handleAddBtn(itemId){
    const targetItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
   orderArr.push(targetItem)
   renderCheckout()
   updateTotalPrice()
}

function updateTotalPrice() {
    return orderArr.reduce((a,b) => a + b.price, 0)
}

function getOrdersHtml() {
    let ordersHtml = ''
    orderArr.forEach(function (item){
        ordersHtml += `
        <div class="checkout-item">
        <span class="item-added">
            <h4>${item.name}</h4>
            <button class="remove-btn" data-remove="${item.id}">remove</button>
        </span>
        <h5>$${item.price}</h5>
    </div>
  `
    })
    return ordersHtml
}


function renderCheckout() {
    checkoutEl.innerHTML = `
        <h4 id="checkout-header">Your Order</h4>
        <div>${getOrdersHtml()}</div>
        <hr id="hr-checkeout">
        <div class="total">
            <h4 id="total-price-text">Total Price:</h4>
            <h5 id="total-price">$${updateTotalPrice()}</h5>
        </div>
        <button class="purchase-btn" id="purchase-btn" >Complete order</button>
    `
    orderDetails.style.display = "none"
    checkoutEl.style.display = 'block'
}
//GetMenuHTML() -  will fetch the information from menuArray in data.js
// and creating an html format for each menu item.
function getMenuHtml() {
    let menuHtml = ''

    menuArray.forEach(function (item){
        menuHtml += `
        <div class="menu-item">
            <span class="emoji-item">${item.emoji}</span>
            <span class="menu-info-group">
                <h4 class="name-item">${item.name}</h4>
                <p class="detail-item">${item.ingredients}</p>
                <h5 class="price-item">$${item.price}</h5>
            </span>
            <button class="add-btn " id="${item.id}">+</button>
        </div>

        <hr></hr> 
        `
    })
    return menuHtml
}

//renderMenu() - will render the information returned by getMenuHtml() pushing it into our innerHTML 
// inside the div 'menu' for display.
function renderMenu() {
    document.getElementById('menu').innerHTML = getMenuHtml()
}
renderMenu()
renderCheckout()