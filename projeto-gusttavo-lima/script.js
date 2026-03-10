const foto = document.getElementById('btn-gusttavo');


const frases = [
    'audio1.mp3',
    'audio2.mp3',
    'audio3.mp3',
    'audio4.mp3',
    'gustavo-lima-i-vc.mp3'
];

foto.addEventListener('click', () => {
    
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const somSorteado = frases[indiceAleatorio];

   
    const som = new Audio(somSorteado);
    som.play();

});

