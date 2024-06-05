let posizioneTesoroUtente;
let posizioneTesoroComputer;
let campoUtente = new Array(25);
let campoComputer = new Array(25);
let posizioni = [];
let turnoUtente = true;
let vittoria = false;



function resetArray(){
for(let i = 0 ;i<25 ; i++)
    {
        campoUtente[i] = "vuoto";
        campoComputer[i] = "vuoto";
        posizioni.push(i);

    }
    campoUtente[posizioneTesoro = Math.floor(Math.random()*24)] = "tesoro";
    do{
        posizioneTesoroComputer=prompt("Inserisci la posizione del tesoro computer da 1 a 25")-1;
    }while(posizioneTesoroComputer<0|| posizioneTesoroComputer>24)
    campoComputer[posizioneTesoroComputer] = "tesoro";
}
function reset()
{
    for(let i = 0; i<25; i++)
    {
        document.getElementById(i).src = "verde.jpg";
        document.getElementById(i+25).src = "verde.jpg"
    }
    posizioni = []
    vittoria = false
    resetArray();
s
}
resetArray();

function mossaCpu()
{   let posizione;
    do{
        posizione = Math.floor(Math.random()*posizioni.length);
    }while(posizioni.indexOf(posizione)==-1)

    if(campoComputer[posizione]=="vuoto")
    {
        document.getElementById(posizione+25).src = "errore.png";
    }
    else if(campoComputer[posizione]=="tesoro")
    {
        document.getElementById(posizione+25).src = "tesoro.jpg";
        setTimeout(()=>{
            alert("Il computer ha vinto, hai perso!");},500);
            vittoria = true;
    }
    posizioni.splice(posizioni.indexOf(posizione),1);
    turnoUtente = true;
}
function contrvit(id)
{
    if(campoUtente[id] !=null && !vittoria){
        
        if(turnoUtente)
        {
            if(campoUtente[id]=="vuoto"){
                document.getElementById(id).src = "errore.png";
                campoUtente[id] = null;
            }
            else if(campoUtente[id]=="tesoro"){
                
                document.getElementById(id).src = "tesoro.";
                setTimeout(()=>{
                    alert("Hai vinto")
                },500);
                vittoria = true;
                return; 
            }
            turnoUtente = false;
        }
        setTimeout(()=>{mossaCpu()},300);
    }
    
}
    