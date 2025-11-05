const bodyHTML = document.getElementById("body")
const titulo = document.getElementById("titulo")
const paragrafo = document.getElementById("paragrafo")
const cor_fundo = document.getElementById("cor_fundo")
const cor_titulo = document.getElementById("cor_titulo")
const cor_paragrafo = document.getElementById("cor_paragrafo")
const fonte_titulo = document.getElementById("fonte_titulo")
const fonte_paragrafo = document.getElementById("fonte_paragrafo")
const alterar_tudo = document.getElementById("titulo")
const fontes = ['Roboto', 'Elms Sans', 'Noto Sans Syriac Western', 
    'Momo Signature', 'Momo Trust Display', 'Momo Trust Sans', 'Stack Sans Notch', 
    'Raleway', 'Noto Sans', 'Oswald', 'Kanit', 'Open Sans', 
    'Work Sans', 'Lavishly Yours', 'Google Sans Code']
    
// ===============================
// FUNÇÕES PARA ALTERAR CORES
// ===============================

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

// ===============================
// FUNÇÕES PARA ALTERAR FONTES
// ===============================

function gerarFonteAleatoria(){
    const fonteIndice =  Math.floor(Math.random() * 15)
    return fontes[fonteIndice]
}

fonte_titulo.addEventListener('click', () => {
    titulo.style.fontFamily = gerarFonteAleatoria()
    console.log("Fonte alterada para " + gerarFonteAleatoria());
})

fonte_paragrafo.addEventListener('click', () => {
    paragrafo.style.fontFamily = gerarFonteAleatoria()
    console.log("Fonte alterada para " + gerarFonteAleatoria());
})