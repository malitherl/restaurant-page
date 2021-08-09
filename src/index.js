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
restaurantTitling.style.marginLeft= "10px";
restaurantTitling.style.borderRadius= "25px";
restaurantTitling.style.textAlign= "Center";
restaurantTitling.textContent= "Workaday Cafe";

//styled in css now 
const restaurantSubTitling= document.createElement("h2");
restaurantSubTitling.style.padding= "30px";
restaurantSubTitling.style.textAlign= "center";
restaurantSubTitling.style.borderRadius= "25px";
restaurantSubTitling.textContent = "About";
restaurantSubTitling.style.marginRight= "30px";
restaurantSubTitling.style.marginLeft= "30%";


const restaurantSubTitling1= document.createElement("h2");
restaurantSubTitling1.style.padding= "30px";
restaurantSubTitling1.style.marginRight= "30px";
restaurantSubTitling1.style.textAlign= "center";
restaurantSubTitling1.textContent = "Menu";
restaurantSubTitling1.style.marginRight= "30px";

const restaurantSubTitling2= document.createElement("h2");
restaurantSubTitling2.style.padding= "30px";
restaurantSubTitling2.style.textAlign= "center";
restaurantSubTitling2.textContent = "Contact Us";
restaurantSubTitling2.style.marginRight= "30px";


const aboutPage = document.createElement("DIV");
aboutPage.setAttribute("id", "about");
aboutPage.style.display ="none";
const aboutTextTitle = document.createElement("h2");
aboutTextTitle.textContent = "About Us";
const aboutTextBlurb = document.createElement("p");


const menuPage = document.createElement("DIV");
menuPage.setAttribute("id", "about");
menuPage.style.display ="none";
const menuTextTitle = document.createElement("h2");
menuTextTitle.textContent = "Contact Us";
const menuTextBlurb = document.createElement("p");
menuTextBlurb.textContent = "tomsrestaurant@yahoo.com";
const menuTextBlurb1 = document.createElement("p");
menuTextBlurb1.textContent = "+1-212-864-6137";


const contactPage = document.createElement("DIV");
contactPage.setAttribute("id", "about");
contactPage.style.display ="none";


textArea.appendChild(restaurantTitling);



webpage.appendChild(textArea);


function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }