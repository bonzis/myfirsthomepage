let arrayT = [];
arrayT.length = 25;
let tesoroPos;

function controllaTesoro(pos){

    if(arrayT[pos] == "tesoro.jpg"){
        
        document.getElementById(pos).src = "tesoro.jpg";
        alert("HAI VINTO!!!");

    }
    if(arrayT[pos] == "verde.jpg"){

        document.getElementById(pos).src = "errore.png";
    }

}

impostaTesoro();

function impostaTesoro() {

    for (let i = 0; i < 25; i++) {
        
        arrayT[i]="verde.jpg";
    }
    arrayT[tesoroPos = Math.floor(Math.random() * 25)] = "tesoro.jpg";

}
function reset() {

    for (let i = 0; i < 25; i++) {
            
            document.getElementById(i).src = "verde.jpg";

        }

    impostaTesoro();
}

