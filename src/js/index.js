const botaoMostrarPlataformas = document.querySelector('.btn-plataforma');
const plataformaInativa = document.querySelectorAll('.btn-plataforma .plataformas');

botaoMostrarPlataformas.addEventListener('click', () => {
    mostrarPlataformas();
    setTimeout(removerPlataformas, 10000);
})

plataformaInativa.addEventListener('click', () => {
    removerPlataformas2();
})

function mostrarPlataformas() {
    plataformaInativa.forEach(plataformaInativa => {
        plataformaInativa.classList.add('ativo');
    })
}

function removerPlataformas() {
    plataformaInativa.forEach(plataformaInativa => {
        plataformaInativa.classList.remove('ativo');
    })
}