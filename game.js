const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize = 0;
let cuadro = 0;

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);

function resizeWindow(){
    if (window.innerHeight > window.innerWidth){
        canvasSize= window.innerWidth * 0.8;
    } else {
        canvasSize =window.innerHeight * 0.8;
    }
    cuadro = canvasSize / 10;
    canvas.setAttribute('height', canvasSize);
    canvas.setAttribute('width', canvasSize);
    
}
function startGame(){
    resizeWindow();

    game.font = (cuadro *0.8) + 'px Arial';
    game.textAlign = 'end';
    game.textBaseline = 'bottom';
    game.fillText(emojis['X'],cuadro, cuadro);
    
    for (i=1; i<=10; i++){
        game.fillText(emojis['X'],cuadro , cuadro*i);
    }    
}
