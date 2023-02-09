const botao = document.querySelector('[data-botao]');
const lista = document.querySelector('[data-lista]');

botao.addEventListener("click", () => {
    esconderLista();
})

function esconderLista() {
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}