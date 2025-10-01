import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let cuerpo = ["1","2","3","4","5","6","7","8","X","Z","J","A"]
  let firstRandom = Math.floor(Math.random()*cuerpo.length)
  let firstConten = cuerpo[firstRandom]
  let firstElement = document.querySelector(".card-body")
  
  let headerFotter = ["♦","♥","♠","♣"]
  let secondRandon = Math.floor(Math.random()*headerFotter.length)
  let secondConten = headerFotter[secondRandon]
  let secondElement = document.querySelector(".card-headern")

  let thirhElement = document.querySelector(".card-footern")
  
  if(secondRandon==0 || secondRandon==1){
     secondElement.style.color = "red" 
     thirhElement.style.color = 'red' 
  }
  firstElement.innerHTML = firstConten 
  
  secondElement.innerHTML = secondConten
 
  thirhElement.innerHTML = headerFotter[secondRandon]
   
};
