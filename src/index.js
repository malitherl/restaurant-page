const webpage = document.getElementById("content"); 

document.body.style.backgroundImage= "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F91%2FTom%27s_Restaurant%252C_Manhattan.jpg&f=1&nofb=1')";

const textArea = document.createElement("DIV");
textArea.setAttribute("id", "for-text");

textArea.style.display= "flex";
textArea.style.justifyContent= "center";
textArea.style.padding= "20px";

textArea.style.margin = "5px";
textArea.style.fontFamily= "Georgia, Garamond,Times New Roman";


const restaurantTitling = document.createElement("h1");
restaurantTitling.style.color= "rgb(255,250,240)";
restaurantTitling.style.padding= "25px";
restaurantTitling.style.borderRadius= "25px";

restaurantTitling.style.textAlign= "Center";

restaurantTitling.textContent= "Tom's Restaurant";

const restaurantSubTitling= document.createElement("h2");
restaurantSubTitling.style.color= "rgb(255,250,240)";
restaurantSubTitling.style.padding= "30px";
restaurantSubTitling.style.textAlign= "center";
restaurantSubTitling.style.borderRadius= "25px";
restaurantSubTitling.textContent = "About";
restaurantSubTitling.style.marginRight= "30px";
restaurantSubTitling.style.marginLeft= "30%";

const restaurantSubTitling1= document.createElement("h2");
restaurantSubTitling1.style.color= "rgb(255,250,240)";
restaurantSubTitling1.style.padding= "30px";
restaurantSubTitling1.style.marginRight= "30px";
restaurantSubTitling1.style.textAlign= "center";
restaurantSubTitling1.textContent = "Menu";
restaurantSubTitling1.style.marginRight= "30px";

const restaurantSubTitling2= document.createElement("h2");
restaurantSubTitling2.style.color= "rgb(255,250,240)";
restaurantSubTitling2.style.padding= "30px";
restaurantSubTitling2.style.textAlign= "center";
restaurantSubTitling2.textContent = "Contact Us";
restaurantSubTitling2.style.marginRight= "30px";



const blurb = document.createElement("DIV");

const blurb_text = document.createElement("p");
blurb_text.textContent = "Family owned and run, we at Tom's Restaurant remain the old-fashioned diner style restaurant to this day."


textArea.appendChild(restaurantTitling);
textArea.appendChild(restaurantSubTitling);

textArea.appendChild(restaurantSubTitling1);
textArea.appendChild(restaurantSubTitling2);


webpage.appendChild(textArea);