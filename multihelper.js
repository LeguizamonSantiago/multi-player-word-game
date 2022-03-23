function letraAzar()
{
    letraTocada= letrasPermitidas[Math.floor(Math.random() * letrasPermitidas.length)]
    letraX.innerHTML="Letra Inicial: " + "\"" + letraTocada + "\""
    return letraTocada
}
function cantidadAzar()
{
    cantidadTocada= cantidadPermitida[Math.floor(Math.random() * cantidadPermitida.length)]  
    letraC.innerHTML= "Cantidad de letras: " + "\"" + cantidadTocada + "\""
    return cantidadTocada
}




//Evalua: Correcta letra inicial, correcta cantidad de letras, ausencia de repeticiones
function EvaluarPalabra(palabraEvaluada)
{
    palabraEvaluada = palabraEvaluada.toUpperCase()
    let letraInicialEscrita= palabraEvaluada.charAt(0);
    if(letraInicialEscrita == letraTocada)
    {
        if(palabraEvaluada.length == cantidadTocada)
        {
            for(i of palabrasYaEscritas)
            {
                if(i == palabraEvaluada)
                {
                    alert("Has repetido la palabra " + palabraEvaluada)
                    tacharPlayer()
                    cantidadJugadoresControl=cantidadJugadoresControl-1
                    return jugadorActual.playerLife=false
                }   
               
            }
            if(jugadorActual.playerLife==true)
            {
                evaluaCaracteres(palabraEvaluada)
                evaluaCaracteres2(palabraEvaluada)
                evaluaCaracteres3(palabraEvaluada)
                evaluaCaracteres4(palabraEvaluada)
                evaluaCaracteres5(palabraEvaluada)
            }

        }
        else
        {
            alert("Esa palabra no tiene "+ cantidadTocada + " letras, has perdido")
            tacharPlayer()
            cantidadJugadoresControl=cantidadJugadoresControl-1
            return jugadorActual.playerLife=false        
        }

    }
    else
    {
        alert("Esa palabra no comienza con "+ letraTocada+ ", has perdido")
        tacharPlayer()
        cantidadJugadoresControl=cantidadJugadoresControl-1
        return jugadorActual.playerLife=false
    }
    if(jugadorActual.playerLife== true)
    {
        jugadorActual.playerPoints= jugadorActual.playerPoints + tiempo + cantidadTocada*2
        colocarPuntos()
        barra.placeholder="+"+ (tiempo + cantidadTocada*2)
        palabrasYaEscritas.push(palabraEvaluada)
    }
}

///////////////////////////////                                /////////////////
///////////////////////////////     VALIDACION VOCALES         /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function evaluaCaracteres(palabraEvaluada)
{
    if(jugadorActual.playerLife==true)
    {
        separarCaracteres(palabraEvaluada)
        for(v of vocales)
        {
            for(c of caracteresDeLaPalabra)
            {
                if(c==v)
                {
                    return validacionVocal=true
                }
                if(validacionVocal== true)
                {
                    break
                }
            }
        }
        if(validacionVocal==false)
        {
            alert("Esa palabra no existe, has perdido")
            tacharPlayer()
            cantidadJugadoresControl=cantidadJugadoresControl-1
            return jugadorActual.playerLife=false 
        }
    }
}

///////////////////////////////                                /////////////////
///////////////////////////////     VALIDACION CARACTERES      /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function evaluaCaracteres2(palabraEvaluada)
{
    if(jugadorActual.playerLife==true)
    { 
        separarCaracteres(palabraEvaluada)
        contadorCaracteres= 0
        for(c of caracteresDeLaPalabra)
        {
            for(l of abecedario)
            {
                if(c==l)
                {
                    contadorCaracteres= contadorCaracteres+1
                }
            }
        } 
        if(contadorCaracteres != palabraEvaluada.length)
        {
            alert("Has ingresado un CARACTER invalido, has perdido")
            tacharPlayer()
            cantidadJugadoresControl=cantidadJugadoresControl-1
            return jugadorActual.playerLife=false 
        }
    }    
}
///////////////////////////////                                /////////////////
///////////////////////////////     VALIDACION TRIPLE LETRA REP/////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function evaluaCaracteres3(palabraEvaluada)
{
    if(jugadorActual.playerLife==true)
    {
        separarCaracteres(palabraEvaluada)
        let contadorConsecutivas=0
        let ultimoCaracter
        for(c of caracteresDeLaPalabra)
        {
            if(contadorConsecutivas==0)
            {
                contadorConsecutivas=1
                ultimoCaracter=c
            }
            else if(contadorConsecutivas>0 && c==ultimoCaracter)
            {
                contadorConsecutivas=contadorConsecutivas+1
            }
            else if(contadorConsecutivas>0 && c!=ultimoCaracter)
            {
                contadorConsecutivas=1
                ultimoCaracter=c
            }
            if(contadorConsecutivas==3)
            {
                alert("Inventaste una palabra, has perdido")
                tacharPlayer()
                cantidadJugadoresControl=cantidadJugadoresControl-1
                return jugadorActual.playerLife=false 
            }
        }
    }
}
///////////////////////////////                                /////////////////
///////////////////////////////     VALIDACION UNA CONSONANTE  /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function evaluaCaracteres4(palabraEvaluada)
{
    if(jugadorActual.playerLife==true)
    {
        separarCaracteres(palabraEvaluada)
        for(cn of consonantes)
        {
            for(c of caracteresDeLaPalabra)
            {
                if(c==cn)
                {
                    return validacionConsonante=true
                }
                if(validacionConsonante== true)
                {
                    break
                }
            }
        }
        if(validacionConsonante==false)
        {
            alert("Inventaste una palabra, has perdido")
            tacharPlayer()
            cantidadJugadoresControl=cantidadJugadoresControl-1
            return jugadorActual.playerLife=false 
        }
    }
}
///////////////////////////////                                /////////////////
///////////////////////////////     TRES CONSONANTES CONSECUTI /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function evaluaCaracteres5(palabraEvaluada)
{
    if(jugadorActual.playerLife==true)
    {
        separarCaracteres(palabraEvaluada)
        let contadorConsonantesConsecutivas=0
        for(c of caracteresDeLaPalabra)
        {
            if(consonantes.indexOf(c) == -1)
            {
                contadorConsonantesConsecutivas =0
            }   
            else
            {
                contadorConsonantesConsecutivas = contadorConsonantesConsecutivas + 1
            }
            if(contadorConsonantesConsecutivas==5)
            {
                alert("Has inventado una palabra, perdiste")
                tacharPlayer()
                cantidadJugadoresControl=cantidadJugadoresControl-1
                return jugadorActual.playerLife=false 
            }
        }
    }
}

///////////////////////////////                                /////////////////
///////////////////////////////     SEPARA CARACTERES          /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function separarCaracteres(palabraEvaluada)
{
    caracteresDeLaPalabra=[]
    for(i=0; i < palabraEvaluada.length; i++)
    {
        caracteresDeLaPalabra.push(palabraEvaluada.charAt(i))
    }
    return caracteresDeLaPalabra
}
///////////////////////////////                                /////////////////
///////////////////////////////     RETORNAR VALIDACIONES      /////////////////
///////////////////////////////                                /////////////////
///////////////////////////////                                /////////////////
function valorPredeterminadoVocal()
{
    return validacionVocal=false
}
function valorPredeterminadoConsonante()
{
    return validacionConsonante=false
}

//////////////////////   VALIDAR RADIOS BUTTONS /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function validarOpciones()
{
    for(i = 0; i < document.moption.op.length;i++)
    {
        if(document.moption.op[i].checked)
        {
            okeyRadio=true
            cantidadJugadores = document.moption.op[i].value
            return cantidadJugadores
        }
        
    }
    if(okeyRadio==false)
    {
        alert("Debe seleccionar la cantidad de jugadores!")
    }
}
//////////////////////   CREAMOS CLASE PLAYER   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function PreguntarNombre()
{
    for(i=0; i < cantidadJugadores; i++)
    {
        let nombre = prompt("Indique el nombre del jugador "+ (i+1))
        if(nombre=="")
        {
            alert("Debes colocar un nombre! La página se recargara")
            location.reload()
        }
        capitalizar(nombre)
        listaJugadores.push(nombreCap)
    }
    var contador = 1
    for(player of listaJugadores)
    {
        CreateClass(player, contador)
        contador= contador + 1
    }
}

function CreateClass(player, contador)
{
    if(contador==1)
    {
        return Jugador1 = new Player(player)
    }
    if(contador==2)
    {
        return Jugador2 = new Player(player)
    }
    if(contador==3)
    {
        return Jugador3 = new Player(player)
    }
    if(contador==4)
    {
        return Jugador4 = new Player(player)
    }
}
//////////////////////   NOMBRES EN PANTALLA    /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function ColocarNombre()
{
    contenedorNombre.style.display= "grid"
    if(cantidadJugadores==4)
    {
        n1.innerHTML=Jugador1.playerName
        n2.innerHTML=Jugador2.playerName
        n3.innerHTML=Jugador3.playerName
        n4.innerHTML=Jugador4.playerName
    }
    if(cantidadJugadores == 3)
    {
        n4.style.display="none"
        contenedorNombre.style.gridTemplateColumns="1fr 1fr 1fr"
        n1.innerHTML=Jugador1.playerName
        n2.innerHTML=Jugador2.playerName
        n3.innerHTML=Jugador3.playerName
    }
    if(cantidadJugadores == 2)
    {
        n4.style.display="none"
        n3.style.display="none"
        contenedorNombre.style.gridTemplateColumns="1fr 1fr"
        contenedorNombre.style.maxWidth="800px"
        n1.innerHTML=Jugador1.playerName
        n2.innerHTML=Jugador2.playerName
    }
    if(cantidadJugadores == 1)
    {
        n4.style.display="none"
        n3.style.display="none"
        n2.style.display="none"
        contenedorNombre.style.gridTemplateColumns="1fr"
        contenedorNombre.style.maxWidth="300px"
        n1.innerHTML=Jugador1.playerName
    }
}

//////////////////////   DESIGNAR JUGADOR ACTUAL/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function establecerJugadorActual()
{
    if(Jugador1.playerTurn==true && Jugador1.playerLife==true)
    {
        n1.style.borderRadius= "55px 55px 55px 55px";
        n1.style.mozBorderRadius= "55px 55px 55px 55px";
        n1.style.webkitBorderRadius="55px 55px 55px 55px";
        n1.style.border= "7px solid #ffffff";
        n1.style.backgroundColor= "red";
        n1.style.lineHeight= "50px";
        return jugadorActual=Jugador1
    }
    else if(Jugador2.playerTurn==true && Jugador2.playerLife==true)
    {
        n2.style.borderRadius= "55px 55px 55px 55px";
        n2.style.mozBorderRadius= "55px 55px 55px 55px";
        n2.style.webkitBorderRadius="55px 55px 55px 55px";
        n2.style.border= "7px solid #ffffff";
        n2.style.backgroundColor= "red";
        n2.style.lineHeight= "50px";
        return jugadorActual=Jugador2
    }
    else if(Jugador3.playerTurn==true && Jugador3.playerLife==true)
    {
        n3.style.borderRadius= "55px 55px 55px 55px";
        n3.style.mozBorderRadius= "55px 55px 55px 55px";
        n3.style.webkitBorderRadius="55px 55px 55px 55px";
        n3.style.border= "7px solid #ffffff";
        n3.style.backgroundColor= "red";
        n3.style.lineHeight= "50px";
        return jugadorActual=Jugador3
    }
    else if(Jugador4.playerTurn==true && Jugador4.playerLife==true)
    {
        n4.style.borderRadius= "55px 55px 55px 55px";
        n4.style.mozBorderRadius= "55px 55px 55px 55px";
        n4.style.webkitBorderRadius="55px 55px 55px 55px";
        n4.style.border= "7px solid #ffffff";
        n4.style.backgroundColor= "red";
        n4.style.lineHeight= "50px";
        return jugadorActual=Jugador4
    }
}
//////////////////////   DESIGNAR TURNO         /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function designarTurno()
{
    if(cantidadJugadores==4)
    {
        if(jugadorActual==Jugador1)
        {
            if(Jugador2.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador2.turnOn()
            }
            if(Jugador2.playerLife==false && Jugador3.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador3.turnOn()
            }
            if(Jugador2.playerLife==false && Jugador3.playerLife==false && Jugador4.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador4.turnOn()
            }
        }
        else if(jugadorActual==Jugador2)
        {
            if(Jugador3.playerLife==true)
            {
                Jugador2.turnOff()
                Jugador3.turnOn()
            }
            if(Jugador3.playerLife==false && Jugador4.playerLife==true)
            {
                Jugador2.turnOff()
                Jugador4.turnOn()
            }
            if(Jugador3.playerLife==false && Jugador4.playerLife==false && Jugador1.playerLife==true)
            {
                Jugador2.turnOff()
                Jugador1.turnOn()
            }
        }
        else if(jugadorActual==Jugador3)
        {
            if(Jugador4.playerLife==true)
            {
                Jugador3.turnOff()
                Jugador4.turnOn()
            }
            if(Jugador4.playerLife==false && Jugador1.playerLife==true)
            {
                Jugador3.turnOff()
                Jugador1.turnOn()
            }
            if(Jugador4.playerLife==false && Jugador1.playerLife==false && Jugador2.playerLife==true)
            {
                Jugador3.turnOff()
                Jugador2.turnOn()
            }
        }
        else if(jugadorActual==Jugador4)
        {
            if(Jugador1.playerLife==true)
            {
                Jugador4.turnOff()
                Jugador1.turnOn()
            }
            if(Jugador1.playerLife==false && Jugador2.playerLife==true)
            {
                Jugador4.turnOff()
                Jugador2.turnOn()
            }
            if(Jugador1.playerLife==false && Jugador2.playerLife==false && Jugador3.playerLife==true)
            {
                Jugador4.turnOff()
                Jugador3.turnOn()
            }
        }
    }
    if(cantidadJugadores==3)
    {
        if(jugadorActual==Jugador1)
        {
            if(Jugador2.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador2.turnOn()
            }
            if(Jugador2.playerLife==false && Jugador3.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador3.turnOn()
            }
        }
        if(jugadorActual==Jugador2)
        {
            if(Jugador3.playerLife==true)
            {
                Jugador2.turnOff()
                Jugador3.turnOn()
            }
            if(Jugador3.playerLife==false && Jugador1.playerLife==true)
            {
                Jugador2.turnOff()
                Jugador1.turnOn()
            }
        }
        if(jugadorActual==Jugador3)
        {
            if(Jugador1.playerLife==true)
            {
                Jugador3.turnOff()
                Jugador1.turnOn()
            }
            if(Jugador1.playerLife==false && Jugador2.playerLife==true)
            {
                Jugador3.turnOff()
                Jugador2.turnOn()
            }
        }
    }    
    if(cantidadJugadores==2)
    {
        if(jugadorActual==Jugador1)
        {
            if(Jugador2.playerLife==true)
            {
                Jugador1.turnOff()
                Jugador2.turnOn()
            }
        }
        if(jugadorActual==Jugador2)
        {
            Jugador2.turnOff()
            Jugador1.turnOn()
        }
    }                                               
}
//////////////////////   COLOCAR PUNTOS         /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function colocarPuntos()
{
    if(Jugador1.playerTurn)
    {
        n1.innerHTML= Jugador1.playerName + ": "+ Jugador1.playerPoints +"pts"
    }
    else if(Jugador2.playerTurn)
    {
        n2.innerHTML= Jugador2.playerName + ": "+ Jugador2.playerPoints +"pts"
    }
    else if(Jugador3.playerTurn)
    {
        n3.innerHTML= Jugador3.playerName + ": "+ Jugador3.playerPoints +"pts"
    }
    else if(Jugador4.playerTurn)
    {
        n4.innerHTML= Jugador4.playerName + ": "+ Jugador4.playerPoints +"pts"
    }
}
//////////////////////   TACHAR JUGADOR         /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function tacharPlayer()
{
    if(Jugador1.playerTurn)
    {
        n1.style.textDecoration="line-through"
        n1.style.color="grey"
        n1.style.border= "7px solid black";
        n1.style.backgroundColor= "black";
    }
    else if(Jugador2.playerTurn)
    {
        n2.style.textDecoration="line-through"
        n2.style.color="grey"
        n2.style.border= "7px solid black";
        n2.style.backgroundColor= "black";
    }
    else if(Jugador3.playerTurn)
    {
        n3.style.textDecoration="line-through"
        n3.style.color="grey"
        n3.style.border= "7px solid black";
        n3.style.backgroundColor= "black";
    }
    else if(Jugador4.playerTurn)
    {
        n4.style.textDecoration="line-through"
        n4.style.color="grey"
        n4.style.border= "7px solid black";
        n4.style.backgroundColor= "black";
    }
}
//////////////////////   DESMARCAR JUGADOR      /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function desmarcarJugador()
{
    if(jugadorActual==Jugador1)
    {
        n1.style.border= "7px solid black";
        n1.style.backgroundColor= "black";
    }
    else if(jugadorActual==Jugador2)
    {
        n2.style.border= "7px solid black";
        n2.style.backgroundColor= "black";
    }
    else if(jugadorActual==Jugador3)
    {
        n3.style.border= "7px solid black";
        n3.style.backgroundColor= "black";
    }
    else if(jugadorActual==Jugador4)
    {
        n4.style.border= "7px solid black";
        n4.style.backgroundColor= "black";
    }
}
//////////////////////   ESTABLECER TIEMPO      /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function establecerTiempo()
{
    if(jugadorActual.playerPoints<150)
        {
            tiempo=31
        }
        else if(jugadorActual.playerPoints>=150 && jugadorActual.playerPoints < 200)
        {
            tiempo=26
        }
        else if(jugadorActual.playerPoints>=200 && jugadorActual.playerPoints < 250)
        {
            tiempo=21
        }
        else if(jugadorActual.playerPoints>=250 && jugadorActual.playerPoints < 500)
        {
            tiempo=16
        }
        else if(jugadorActual.playerPoints>=500)
        {
            tiempo=11
        }
}
//////////////////////   CAPITALIZE             /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function capitalizar(nombre)
{
    nombre = nombre.toLowerCase()
    nombreCap = ""
    let caracteres=[]
    for(p=0; p < nombre.length; p++)
    {
        caracteres.push(nombre.charAt(p))
    }
    caracteres[0]=caracteres[0].toUpperCase()

    for(e=0; e < caracteres.length ;e++)
    {
        nombreCap= nombreCap + caracteres[e]
    }
}
//////////////////////VER CUANTOS PLAYERS QUEDAN/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function verificarJugadoresVivos()
{
    if(cantidadJugadoresControl<=0)
    {
        gameState=false
        elementoPadre = barra.parentNode;
        elementoPadre.removeChild(barra);
        elementoPadre = tiempoR.parentNode;
        elementoPadre.removeChild(tiempoR);
        elementoPadre = letraX.parentNode;
        elementoPadre.removeChild(letraX);
        elementoPadre = letraC.parentNode;
        elementoPadre.removeChild(letraC);
        if(cantidadJugadores!=1)
        {
            elegirGanador()
            alert("El ganador es "+ jugadorActual.playerName + " con un total de "+ jugadorActual.playerPoints + "pts")    
        }
        else if(cantidadJugadores==1)
        {
            alert("Juego terminado")
        }
        location.reload()
    }
    if(cantidadJugadoresControl==1 && quieroContinuar==false && cantidadJugadores!=1)
    {
        var rta= confirm("Ya no quedan más jugadores, ¿desea continuar?")
        if(rta==true)
        {
            return quieroContinuar=true
        }
        else
        {
            if(cantidadJugadores!=1)
            {
                elegirGanador()
                alert("El ganador es "+ jugadorActual.playerName + " con un total de "+ jugadorActual.playerPoints + "pts")
            }
            else if(cantidadJugadores==1)
            {
                alert("Juego terminado")
            }
            location.reload()
        }
    }
}
//////////////////////QUITAR VIDA               /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function quitarVida()
{   
    return jugadorActual.playerLife=false   
}
//////////////////////ELEGIR GANADOR            /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function elegirGanador()
{
    if(cantidadJugadoresControl==2)
    {
        jugadorActual=Jugador1
        if(jugadorActual.playerPoints < Jugador2.playerPoints)
        {
            jugadorActual=Jugador2
            return jugadorActual
        }
        return jugadorActual
    }
    if(cantidadJugadoresControl==3)
    {
        jugadorActual=Jugador1
        if(jugadorActual.playerPoints < Jugador2.playerPoints)
        {
            jugadorActual=Jugador2
            return jugadorActual
        }
        if(jugadorActual.playerPoints < Jugador3.playerPoints)
        {
            jugadorActual=Jugador3
            return jugadorActual
        }
        return jugadorActual
    }
    if(cantidadJugadoresControl==4)
    {
        jugadorActual=Jugador1
        if(jugadorActual.playerPoints < Jugador2.playerPoints)
        {
            jugadorActual=Jugador2
            return jugadorActual
        }
        if(jugadorActual.playerPoints < Jugador3.playerPoints)
        {
            jugadorActual=Jugador3
            return jugadorActual
        }
        if(jugadorActual.playerPoints < Jugador4.playerPoints)
        {
            jugadorActual=Jugador4
            return jugadorActual
        }
        return jugadorActual
    }    
}