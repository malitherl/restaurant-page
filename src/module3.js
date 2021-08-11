function displayMenu(){
    
    const webpage = document.getElementById("content");
    const menuDiv = document.createElement("DIV");
    menuDiv.setAttribute("class", "for-content");
    menuDiv.setAttribute("id", "msg");
    const menuTextTitle = document.createElement("h2");
    menuTextTitle.setAttribute("id", "menu");
    menuTextTitle.textContent = "Menu";
    menuTextTitle.style.color = "white";
    
    const menu = document.createElement("IMG");
    menu.setAttribute("src" ,"https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    menu.setAttribute("width", "960");
    menu.setAttribute("height", "500");
    
    
    menuDiv.appendChild(menuTextTitle);
    menuDiv.appendChild(menu);
    webpage.appendChild(menuDiv);
}

export{displayMenu}