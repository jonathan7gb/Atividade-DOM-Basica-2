const bodyHTML = document.getElementById("body")
const titulo = document.getElementById("titulo")
const paragrafo = document.getElementById("paragrafo")
const cor_fundo = document.getElementById("cor_fundo")
const cor_titulo = document.getElementById("cor_titulo")
const cor_paragrafo = document.getElementById("cor_paragrafo")
const fonte_titulo = document.getElementById("fonte_titulo")
const fonte_paragrafo = document.getElementById("fonte_paragrafo")
const alterar_tudo = document.getElementById("titulo")

function gerarCorAleatoria(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}

cor_fundo.addEventListener('click', () => {
    bodyHTML.style.backgroundColor = gerarCorAleatoria()
    console.log("Cor alterada para: " + gerarCorAleatoria());
})

cor_titulo.addEventListener('click', () => {
    titulo.style.color = gerarCorAleatoria()
    console.log("Cor alterada para: " + gerarCorAleatoria());
})

cor_paragrafo.addEventListener('click', () => {
    paragrafo.style.color = gerarCorAleatoria()
    console.log("Cor alterada para: " + gerarCorAleatoria());
})