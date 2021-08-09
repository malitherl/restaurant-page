const webpage = document.getElementById("content"); 



const textArea = document.createElement("DIV");
textArea.setAttribute("id", "for-text");

textArea.style.display= "flex";
textArea.style.justifyContent= "center";
textArea.style.padding= "20px";

textArea.style.margin = "5px";
textArea.style.fontFamily= "Georgia, Garamond,Times New Roman";
textArea.style.color = "blue";

const restaurantTitling = document.createElement("h1");
restaurantTitling.style.padding= "25px";
restaurantTitling.style.borderRadius= "25px";
restaurantTitling.style.textAlign= "Center";
restaurantTitling.textContent= "Tom's Restaurant";

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
textArea.appendChild(restaurantSubTitling);

textArea.appendChild(restaurantSubTitling1);
textArea.appendChild(restaurantSubTitling2);


webpage.appendChild(textArea);