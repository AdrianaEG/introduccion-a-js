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

const $botonComenzar = document.querySelector('#comenzar');


function mayorEdad(edades){
    let mayor = edades[0];
    console.log(edades[0]);
    for(let i=0; i<edades.length; i++){
        if(edades[i]>mayor){
            mayor = edades[i];
        }
    }
    return mayor;
}

$botonComenzar.onclick = function(){
    
    const $cantidadDeIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    
    for(let i=1; i<=$cantidadDeIntegrantes; i++){
        const nuevoLabel = document.createElement('label');
        const textoDelLabel = document.createTextNode('Ingrese edad del integrante ' + i);
        nuevoLabel.appendChild(textoDelLabel);
        document.querySelector('body').appendChild(nuevoLabel);
        
        const inputEdad = document.createElement('input');
        inputEdad.type = "text";
        inputEdad.className = "edad";
        document.querySelector('body').appendChild(inputEdad);
        
    }
    
    const botonCalcular = document.querySelector('#calcular');
    
    botonCalcular.onclick = function(){
        
        const edades = Number(document.querySelectorAll('.edad'));
        console.log(mayorEdad(edades));
        
        return false;
    }
    
    return false;
}
