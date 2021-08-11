function displayContact(){
    const webpage = document.getElementById("content");
    const contactDiv = document.createElement("DIV");
    contactDiv.setAttribute("class", "for-content");
    contactDiv.setAttribute("id", "msg");
        const title = document.createElement("h4");
        title.textContent = "Contact Information: ";

        const times = document.createElement("p");
        times.textContent = "definitelyARealEmail@email.com"; 
        const times1 = document.createElement("p");
        times1.textContent= "555-555-5555";
        contactDiv.style.display = "block";
        contactDiv.style.color= "white";

        contactDiv.appendChild(title);
        contactDiv.appendChild(times);
        contactDiv.appendChild(times1);
        webpage.style.display = "block";
        webpage.appendChild(contactDiv);
}

export{displayContact}