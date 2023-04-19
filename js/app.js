// seleccionar modal-btn, modal-oculto y btn-close
// quedar a la escucha de click event en modal-btn y close-btn
// cuando el usuario clicke modal-btn add .open-modal(class) en modal oculto
// cuando el usuario clicle en close-btn remove .open-modal(class) en modal-oculto


let modalBtn = document.querySelector(".modal-btn");
let modalOculto = document.querySelector(".modal-oculto");
let btnClosed = document.querySelector(".btn-closed");

modalBtn.addEventListener("click", function () {
    modalOculto.classList.add("modal-open");
});

btnClosed.addEventListener("click", function (){
    modalOculto.classList.remove("modal-open");
});



