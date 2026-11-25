const titulo = document.querySelector("#titulo");
const textos = document.querySelectorAll(".texto");

titulo.textContent = "Henrique Costa Rodrigues";
textos.item(0).classList.add("destaque");
textos.item(1).style.color = "blue";

const li = document.createElement("li");
li.textContent = "Cameta";
//document.querySelector("#lista").appendChild(li);

const btn = document.querySelector("#btn");
const campo = document.querySelector("#campo");
const eco = document.querySelector("#eco")

btn.addEventListener("click", () => {
    campo.addEventListener("input", (evento) => {
        li.textContent = evento.target.value;
        document.querySelector("#lista").appendChild(li);
    })
})

