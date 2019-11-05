/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function crearInputs(cantidad){
    for(let i=1; i<=cantidad; i++){
        const nuevoLabel = document.createElement('label');
        const textoLabel = document.createTextNode(`Ingrese la edad del integrante ${i}: `);
        nuevoLabel.appendChild(textoLabel);
        document.querySelector('.edad-integrantes').appendChild(nuevoLabel);
        
        const nuevoInput = document.createElement('input');
        nuevoInput.type = "number";
        nuevoInput.className = "edades";
        document.querySelector('.edad-integrantes').appendChild(nuevoInput);
        
        const saltoDeLinea = document.createElement('br');
        document.querySelector('.edad-integrantes').appendChild(saltoDeLinea);        
    }
}


const $botonComenzar = document.querySelector('#comenzar');

$botonComenzar.onclick = function(){
    $botonComenzar.style.display = 'none';//Oculta botón comenzar
    document.querySelector('#cantidad-integrantes').disabled = true; //no permite volver a escribir en cant de integrantes
    const cantidadDeIntegrantes = document.querySelector('#cantidad-integrantes').value;
    crearInputs(cantidadDeIntegrantes);
    document.querySelector('#calcular').style.display = 'inline';//pone visible el botón calcular, yo desde css lo habia puesto con display: none, para que recién se viera cuando hiciera click en comenzar. 
    
    return false;
}

const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = function(){
    let edades = document.querySelectorAll('.edades');
    console.log(mayorEdad(edades));
    
    
    return false;
}

function mayorEdad(edades){
    let mayor = Number(edades[0].value);
    for(let i=0; i<edades.length; i++){
        if(Number(edades[i].value)>mayor){
            mayor = Number(edades[i].value);
        }
    }
    return mayor;
}


