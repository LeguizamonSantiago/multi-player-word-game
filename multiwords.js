//VARIABLES/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

letrasPermitidas = ["H","V","L","G","F","I","B","T","T","D","D","S","S","R","R","M","M","E","E","A","A","A","P","P","P","P","C","C","C","C","C"]
cantidadPermitida = ["3", "4","4", "5","5", "6","6", "7","7", "8", "8", "9","10"]
palabrasYaEscritas= ["pi"]
vocales=["A","E","I","O","U"]
abecedario=["A","E","I","O","U","B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"]
consonantes=["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"]
listaJugadores=[]
listaElementosClase=[]
var elGanador=""
var elGanadorPoints=0
var nombreCap=""
var letraTocada;
var cantidadTocada;
var validacionVocal=false
var validacionConsonante=false
var validacionGanador=false
let okeyRadio=false
var gameState = false;
var quieroContinuar= false
var cantidadJugadores=0
var cantidadJugadoresControl=0
var jugadorActual;
var tiempo= 30;
var opciones= document.getElementById("moption")
var preguntas= document.getElementById("preguntas");
var contenedor= document.getElementById("contenedor");
var contenedorNombre= document.getElementById("contenedorNombres");
var letraX= document.getElementById("letraX");
var letraC= document.getElementById("letraC");
var tiempoR= document.getElementById("tiempoR");
var barra = document.getElementById("barra");
var botonInicio = document.getElementById("bcomenzar");
var n1= document.getElementById("n1");
var n2= document.getElementById("n2");
var n3= document.getElementById("n3");
var n4= document.getElementById("n4");

botonInicio.addEventListener("click", DestruirArrancar);
preguntas.addEventListener("click", instrucciones);
barra.addEventListener("keyup", ingresoPalabra)


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////             CLASES                            //////////////////////
////////////////                                               //////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
class Player
{
    constructor(playerName)
    {
        this.playerName = playerName
        this.playerTurn = false
        this.playerLife = true
        this.playerPoints = 0
    }
    turnOff()
    {
        this.playerTurn=false
    }
    turnOn()
    {
        this.playerTurn=true
    }
}
/////////////////////////////////////////////////////////////////////////////////////
//Boton START
/////////////////////////////////////////////////////////////////////////////////////
function DestruirArrancar()
{
    validarOpciones();
    cantidadJugadoresControl=cantidadJugadores
    if(okeyRadio==true)
    {
        PreguntarNombre();
        ColocarNombre();
        elementoPadre = botonInicio.parentNode;
        elementoPadre.removeChild(botonInicio);
        elementoPadre= preguntas.parentNode;
        elementoPadre.removeChild(preguntas);
        elementoPadre= moption.parentNode;
        elementoPadre.removeChild(moption);
        barra.style.display= "inline";
        contenedor.style.display= "grid";
        tiempoR.style.display= "block"
        barra.disabled=false
        barra.focus();
        tiempoR.style.color ="green"
        letraAzar()
        cantidadAzar()
        tiempoR.innerHTML= "Tiempo: "+ tiempo
        gameState= true
        Jugador1.playerTurn=true
        jugadorActual=Jugador1
    }
    
}
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////             INGRESO PALABRA                   //////////////////////
////////////////                                               //////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function ingresoPalabra(evento)
{
    if(evento.keyCode ==13 && gameState==true)
        {
            var palabraEscrita = barra.value
            barra.value= ""
            EvaluarPalabra(palabraEscrita);
            verificarJugadoresVivos()       
            if(gameState== true)
            {
                letraAzar()
                cantidadAzar()
                valorPredeterminadoVocal()
                valorPredeterminadoConsonante()    
                desmarcarJugador()
                designarTurno()
                establecerJugadorActual()
                establecerTiempo()
            }
        }
}
//////////////////////        TIEMPO            /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
setInterval(Descontador, 1000);
function Descontador()
{
    if(gameState==true && tiempo>0)
    {
        tiempo = tiempo - 1
        tiempoR.innerHTML= "Tiempo: "+ tiempo
        if(tiempo>20)
        {
            tiempoR.style.color ="green"
            tiempoR.style.borderColor=  "green"
            barra.style.color="white"
            contenedor.style.color="white"
        }
        else if(tiempo>10 && tiempo<=20)
        {
            tiempoR.style.color ="yellow"
            tiempoR.style.borderColor=  "yellow"
            barra.style.color="yellow"
            contenedor.style.color="white"
        }
        else if(tiempo>5 && tiempo<=10)
        {
            tiempoR.style.color ="orange"
            tiempoR.style.borderColor=  "orange"
            barra.style.color="orange"
            contenedor.style.color="white"
        }
        else if(tiempo>0 && tiempo<=5)
        {
            tiempoR.style.color ="red"
            tiempoR.style.borderColor=  "red"
            barra.style.color="red"
            contenedor.style.color="red"
        }
        return tiempo
    }
    if(tiempo==0)
    {
        alert("Tiempo terminado, has perdido.")
        cantidadJugadoresControl=cantidadJugadoresControl-1
        verificarJugadoresVivos()
        tacharPlayer()
        letraAzar()
        cantidadAzar()
        valorPredeterminadoVocal()
        valorPredeterminadoConsonante()    
        desmarcarJugador()
        designarTurno()
        quitarVida()
        establecerJugadorActual()
        establecerTiempo()       
    }
}

//////////////////////        INSTRUCCIONES     /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function instrucciones()
{
    alert("Reglas del juego: \n \n Deberás escribir una palabra que cumpla con las siguientes condiciones \n \n █ Empezar con la letra indicada en pantalla \n █ Poseer el número de letras indicado \n █ NO puedes repetir una misma palabra \n █ Presionar ENTER antes de que el contador llegue a cero \n  \n jugadorActual.playerPoints: \n\n █ Cada segundo que te sobró suma 1 punto \n █ Cada letra de la palabra suma 2 jugadorActual.playerPoints \n \n Para el ganar juego tienes que hacer 500 jugadorActual.playerPoints")
}
