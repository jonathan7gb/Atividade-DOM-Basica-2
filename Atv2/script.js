const somar = document.getElementById("somar")
const diminuir = document.getElementById("diminuir")
const numero = document.getElementById("numero")

let valor = 0;
somar.addEventListener('click', () => {
    valor += 1
    numero.textContent = valor 
})

diminuir.addEventListener('click', () => {
    valor -= 1
    numero.textContent = valor
})

