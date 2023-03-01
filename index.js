import {menuArray} from './data.js';




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
            <button class="add-btn" id="${item.id}">+</button>
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