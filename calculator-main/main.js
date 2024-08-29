const buttons = document.querySelector(".buttons");
const inputTitle = document.getElementById("title");
const buttonClear = document.getElementById("clear");
const buttonEqual = document.getElementById("equal");
const btn = document.querySelectorAll("span");
const toggleBtn = document.querySelector(".toggleBtn")
const body = document.querySelector("body")

for (let index = 0; index < btn.length; index++) {
  btn[index].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      inputTitle.innerHTML = eval(inputTitle.innerHTML);
    } else if (this.innerHTML == "Clear") {
      inputTitle.innerHTML = "";
    }else{
        inputTitle.innerHTML += this.innerHTML
    }
  });
}

const calculatorColor = function(){
    body.classList.toggle("black");
}
toggleBtn.addEventListener('click', calculatorColor);