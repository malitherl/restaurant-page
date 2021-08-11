//here we write the module to load separate divs for the page content 

function displaySort() {
    const webpage = document.getElementById("content");
    const wordDiv = document.createElement("DIV");
    wordDiv.setAttribute("class", "for-content");
    wordDiv.setAttribute("id", "msg");
        const aboutUs = document.createElement("P");
        aboutUs.textContent = "Hello and welcome to our website! We at the Workaday Cafe are just about a family, and that means we believe in paying our employees liveable wages"
        + " and providing plenty of benefits along with their wages. In this time of great of uncertainty, we will continue to strive to treat our employees as human beings," 
        +" and we encourage you, the customer, to show them patience and understanding. We reserve our rights to be selective in who we serve, and that includes following all mask mandates.";
        
        const title = document.createElement("h4");
        title.textContent = "Business Hours: ";

        const times = document.createElement("p");
        times.textContent = "Monday-Friday: 08:00AM - 7:00PM"; 
        const times1 = document.createElement("p");
        times1.textContent= "Saturday and Sunday: 9AM-5:00PM";
        wordDiv.style.display = "block";
        wordDiv.style.color= "white";

        wordDiv.appendChild(aboutUs);
        wordDiv.appendChild(title);
        wordDiv.appendChild(times);
        wordDiv.appendChild(times1);
        webpage.style.display = "block";
        webpage.appendChild(wordDiv);
}

export {displaySort}