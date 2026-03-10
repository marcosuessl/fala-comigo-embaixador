const foto = document.getElementById('btn-gusttavo');


const frases = [
    'audio1.mp3',
    'audio2.mp3',
    'audio3.mp3',
    'audio4.mp3',
    'gustavo-lima-i-vc.mp3'
];

foto.addEventListener('click', () => {
    // Sorteia uma posição da lista (0, 1, 2, 3 ou 4)
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const somSorteado = frases[indiceAleatorio];

    // Toca o som que foi sorteado
    const som = new Audio(somSorteado);
    som.play();

});
