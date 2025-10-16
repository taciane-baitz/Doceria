const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");
const valor4 = document.getElementById("valor4");
const carrinho_btn = document.getElementById("carrinho_btn");

const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco");

let beijodoce = 10
let bowl = 12
let amor = 15
let flor = 16


function calculo() {
    totalquantidade = Number(valor1.value) + Number(valor2.value) + Number(valor3.value) + Number(valor4.value);
    quantidade.innerHTML = totalquantidade;
    totalpreco = (Number(valor1.value)*beijodoce) + (Number(valor2.value)*bowl) + (Number(valor3.value)*amor) + (Number(valor4.value)*flor);
    preco.innerHTML = totalpreco;
}

carrinho_btn.addEventListener("click", calculo);