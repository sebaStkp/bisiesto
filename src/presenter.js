import {esBisiesto} from "./esBisiesto.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const verificarBisiesto = esBisiesto(firstNumber);
  if(verificarBisiesto == true )
  {
     div.innerHTML = "<p>" + "El numero "+ firstNumber+ " es bisiesto" + "</p>";
  }
 else{
    div.innerHTML = "<p>" + "El numero "+ firstNumber+ " NO es bisiesto" + "</p>";
 }
  
});
