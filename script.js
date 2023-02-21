import { menuArray } from "./data.js";


function getFeedHtml() {
   let feedHtml = ''
   
 menuArray.forEach(function(item){

    feedHtml += `
    <div class="menu-item"> 
        <div class="menu-inner">
            <h1 class="emoji-item">${item.emoji}</h1>
            <div id="menu-info-group">
                <h3 class="name-item">${item.name}</h3>
                <span class="detail-item">${item.ingredients}</span>
                
                 <h3 class="price-item">${'$'}${item.price}</h3>               
                    
            </div>        
        </div>
    </div>

    <hr></hr>      
    ` 
})
    return feedHtml
}
console.log(getFeedHtml())

//Render Function - 
// 1: Takes control of the menu-items div inside HTML
// 2: Renders the HTML returned by the getFeedHTML() to the 'menu-items' div.
function render() {
    const menuItems = document.getElementById('menu-items')
    menuItems.innerHTML = getFeedHtml()
}
render()