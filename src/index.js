import {generate} from './module1.js'
import {displaySort} from './module2.js'
import { displayMenu } from './module3.js';
import {displayContact} from './module4.js';

generate();

function tabs(i){
  switch(i){
    case 0:
      displaySort();
      break;
    case 1: 
      displayMenu();
      break;
    case 2: 
      displayContact();
      break;
  }
}
const listButtons = document.getElementsByTagName("BUTTON");
console.log(listButtons);
  for(let i =0; i<listButtons.length ; i++){
    listButtons[i].addEventListener("click", function(){
      let msg = document.getElementById("msg");
      if (msg === null){
        tabs(i);
    } else {
      msg.remove();
      tabs(i);
    }
    });
}