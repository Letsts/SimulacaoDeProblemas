let botaoParticipantes = document.querySelector("#participantes");
botaoParticipantes.addEventListener('click', abreModal);

function abreModal(e) {
    let janelaModalEl = document.querySelector('.modal');
    janelaModalEl.classList.add('visivel');
}

let botoesFecharModal = document.querySelectorAll('.fecharModal');

for (let fecharEl of botoesFecharModal) {
    fecharEl.addEventListener('click', fechaModal);
}

function fechaModal(e) {
    let janelaModalEl = document.querySelector('.modal');
    janelaModalEl.classList.remove('visivel');
}