let campoPlayer = [];
let campoComputer = [];
let tesoroPosPlayer;
let tesoroPosComputer;

function controllaTesoro(type, pos) {
    if (type === 'player') {
        if (campoPlayer[pos] === "tesoro.jpg") {
            document.getElementById(`player${pos}`).src = "tesoro.jpg";
            alert("HAI VINTO!!!");
        } else {
            document.getElementById(`player${pos}`).src = "errore.png";
            setTimeout(campoComputer, 100);
        }
        cliccaCasellaCasualeComputer();
    }
}

function cliccaCasellaCasualeComputer() {
    let pos;
    do {
        pos = Math.floor(Math.random() * 25);
    } while (campoComputer[pos] === "tesoro.jpg" || campoComputer[pos] === "errore.png");

    if (campoComputer[pos] === "tesoro.jpg") {
        document.getElementById(`computer${pos}`).src = "tesoro.jpg";
        alert("Il computer ha vinto!!!");
    } else {
        document.getElementById(`computer${pos}`).src = "errore.png";
    }
}

function impostaTesoro() {
    for (let i = 0; i < 25; i++) {
        campoPlayer[i] = "verde.jpg";
        campoComputer[i] = "verde.jpg";
    }
    tesoroPosPlayer = Math.floor(Math.random() * 25);
    tesoroPosComputer = Math.floor(Math.random() * 25);
    campoPlayer[tesoroPosPlayer] = "tesoro.jpg";
    campoComputer[tesoroPosComputer] = "tesoro.jpg";
}

function reset() {
    const computerTesoroPos = prompt("Inserisci la posizione del tesoro per il computer (da 0 a 24):");
    if (computerTesoroPos !== null) {
        if (!isNaN(computerTesoroPos) && computerTesoroPos >= 0 && computerTesoroPos < 25) {
            impostaTesoro();
            campoPlayer[tesoroPosPlayer] = "tesoro.jpg"; 
            campoComputer[computerTesoroPos] = "tesoro.jpg"; 
        } else {
            alert("Posizione non valida. Si prega di inserire un numero compreso tra 0 e 24.");
            return;
        }
    } else {
        return;
    }

    for (let i = 0; i < 25; i++) {
        document.getElementById("player" + i).src = "verde.jpg";
        document.getElementById("computer" + i).src = "verde.jpg";
    }
}

impostaTesoro();
