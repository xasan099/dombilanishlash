const Form = document.querySelector(".form");
const input = document.querySelector("input");
const karopbka = document.querySelector("ul");
const div = document.querySelector("div")
const button = document.querySelector("button")
console.log(Form, input, karopbka);

input.style.width = "200px"
input.style.height = "45px"
input.style.display = "flex"
input.style.marginTop = "350px"
div.style.marginLeft = "750px"
button.style.marginTop = "20px"
button.style.width = "200px"
input.style.border = "4px solid darkviolet"
input.style.background = "none"
button.style.background = "blue"
button.style.border = "0px solid black"
button.style.height = "25px"

Form.addEventListener("submit" , evt => {
    evt.preventDefault();
    let qiymat = input.value;
    let yeguvchi = document.createElement("li");
    yeguvchi.textContent = qiymat;

    karopbka.appendChild(yeguvchi);
})