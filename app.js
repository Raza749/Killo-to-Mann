
// Getting The Elements

const form = document.querySelector("form");
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const mann = document.querySelector("#mann");
let killo = document.querySelector("#killo");


form.addEventListener("submit",(e)=>{
 e.preventDefault();
  let weightInMann = input.value / 40;
  let weightINKillo = Math.round((weightInMann - Math.floor(weightInMann)) * 40);
  let kil = killo.innerHTML = weightINKillo;
  let valInMann = mann.innerHTML = Math.round(weightInMann);
  
  
  input.value = ''
})
