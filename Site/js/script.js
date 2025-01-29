const btnPlus = document.querySelector(".js-plus");
const btnTransport = document.querySelector(".conteneur-transport");

btnPlus.addEventListener("click", ouvreferme);

function ouvreferme(){
    btnTransport.classList.toggle("invisible");
    
}
