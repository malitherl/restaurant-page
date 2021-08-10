
function generate() {
        const webpage = document.getElementById("content"); 
        webpage.setAttribute("class", "demo");

        const image = document.createElement("IMG");
        image.setAttribute("class", "bg");
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2015/10/12/15/11/cafe-984275_960_720.jpg");
        image.setAttribute("alt", "a picuture of a cafe");
        webpage.appendChild(image);

        const textArea = document.createElement("DIV");
        textArea.setAttribute("id", "for-text");
        textArea.setAttribute("class", "for-content");

        textArea.style.display= "flex";
        textArea.style.justifyContent= "center";
        textArea.style.padding= "20px";

        textArea.style.margin = "5px";
        textArea.style.fontFamily= "Georgia, Garamond,Times New Roman";
        textArea.style.color = "white";

        const restaurantTitling = document.createElement("h1");
        restaurantTitling.style.padding= "25px";
        restaurantTitling.style.marginLeft= "0px";
        restaurantTitling.style.marginRight= "20%";

        restaurantTitling.style.textAlign= "Center";
        restaurantTitling.textContent= "Workaday Cafe";

        const aboutPage = document.createElement("DIV");
        aboutPage.setAttribute("id", "about");
        aboutPage.style.display ="none";
        const aboutTextTitle = document.createElement("h2");
        aboutTextTitle.textContent = "About Us";
        const aboutTextBlurb = document.createElement("p");


        const menuPage = document.createElement("DIV");

        //divs with ids cannot be returned bc they don't have values
        const menuTextTitle = document.createElement("h2");
        menuTextTitle.setAttribute("id", "menu");
        menuTextTitle.textContent = "Menu";
        const menuTextBlurb = document.createElement("p");
        menuTextBlurb.textContent = "Our current selection: "
        const menu = document.createElement("IMG");
        menu.setAttribute("src" ,"https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
        menu.style.display= "none";
        menuPage.appendChild(menu);

        const menuTextBlurb1 = document.createElement("p");
        menuTextBlurb1.textContent = "+1-212-864-6137";


        const contactPage = document.createElement("DIV");
        contactPage.setAttribute("id", "contact");
        contactPage.style.display ="none";

        textArea.appendChild(restaurantTitling);

        textArea.appendChild(menuPage);
        //div to hold all the links 

        const buttons = document.createElement("DIV");

        const barButton1 = document.createElement("button");
        barButton1.setAttribute("class","barButton");
        barButton1.style.marginLeft = "30px";
        barButton1.textContent = "About";

        const barButton2 = document.createElement("button");
        barButton2.setAttribute("class","barButton");
        barButton2.textContent = "Menu";

        //barButton2.onclick(openTab("menu"));

        const barButton3 = document.createElement("button");
        barButton3.setAttribute("class","barButton");
        barButton3.textContent = "Contact Us";

        
        const pageContent = document.createElement("DIV");
        pageContent.setAttribute("id", "word");
        buttons.appendChild(barButton1);
        buttons.appendChild(barButton2);
        buttons.appendChild(barButton3);

        textArea.appendChild(buttons);

        webpage.appendChild(textArea);
        webpage.appendChild(pageContent);
    }
        export {generate}