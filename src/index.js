import {generate} from './module1.js'



generate();
const listButtons = document.getElementsByTagName("BUTTON");
const text = document.getElementById("word");
console.log(listButtons);
for(let i =0; i<listButtons.length ; i++){
  listButtons[i].addEventListener("click", function(){
    

  });
}