//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function validarCampoCantidad(cantidad){
    if(cantidad<=0){
        return true;
    }
}


const $botonComenzar = document.querySelector('#comenzar');
const $botonCalcular = document.querySelector('#calcular');

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

let contadorDeClicks = 0;


$botonComenzar.onclick = function(){
    const $cantDeVideos = Number(document.querySelector('#cantidad').value);    
    if(validarCampoCantidad($cantDeVideos)){
        alert("POR FAVOR INGRESE UNA CANTIDAD DE VIDEOS VALIDA");
        return true;
    }
    
    document.querySelector('#cantidad').disabled = true;//inhabilita el input
    document.querySelector('#comenzar').style.display = 'none';//oculta el boton al hacerle click
}


$botonCalcular.onclick = function(){
    
    let todosLosDatos = "";
    const $cantidadDeVideos = Number(document.querySelector('#cantidad').value);
    
    let $horas = Number(document.querySelector('#horas').value);
    let $minutos = Number(document.querySelector('#minutos').value);
    let $segundos = Number(document.querySelector('#segundos').value);
    
    totalHoras = totalHoras + $horas;
    totalMinutos = totalMinutos + $minutos;
    totalSegundos = totalSegundos + $segundos;
    
    contadorDeClicks++; 
    
    
    
    
    if($cantidadDeVideos == contadorDeClicks){
        $botonCalcular.disabled = true;
        
        if(totalSegundos>60){
            totalMinutos = parseInt(totalMinutos+(totalSegundos/60), 10);
            totalSegundos = totalSegundos%60;
        }
        
        if(totalMinutos>60){
            totalHoras = parseInt(totalHoras + (totalMinutos/60),10);
            totalMinutos = totalMinutos%60;
        }
        
        todosLosDatos = `La duración total es ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos`;
        document.querySelector('#muestra-tiempo').innerText = todosLosDatos;
    }

    return false;
}



