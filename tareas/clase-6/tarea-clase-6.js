/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


//FUNCIÓN PARA CREAR LABEL E INPUT DONDE SE CARGA LA EDAD DE LOS INTEGRANTES:
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

//FUNCIÓN QUE CALCULA LA MAYOR EDAD
function calcularMayorEdad(edades){
    let mayor = Number(edades[0].value);
    for(let i=0; i<edades.length; i++){
        if(Number(edades[i].value)>mayor){
            mayor = Number(edades[i].value);
        }
    }
    return mayor;
}

//FUNCIÓN QUE CALCULA LA MENOR EDAD
function calcularMenorEdad(edades){
    let menor = Number(edades[0].value);
    for(let i=0; i<edades.length; i++){
        if(Number(edades[i].value)<menor){
            menor = Number(edades[i].value);
        }
    }
    return menor;
}

//FUNCIÓN QUE CALCULA EL PROMEDIO
function calcularPromedio(edades){
    let suma = 0;
    for(let i=0; i<edades.length; i++){
        suma += Number(edades[i].value);
    }
    return (suma/(edades.length)).toFixed(0);
}

const $botonComenzar = document.querySelector('#comenzar');
//CUANDO SE HACE CLICK EN EL BOTÓN COMENZAR
$botonComenzar.onclick = function(){
    $botonComenzar.style.display = 'none';//Oculta botón comenzar
    document.querySelector('#cantidad-integrantes').disabled = true; //no permite volver a escribir en cant de integrantes
    const cantidadDeIntegrantes = document.querySelector('#cantidad-integrantes').value;
    crearInputs(cantidadDeIntegrantes);//llama a la función para crear los input con la cant de integrantes
    document.querySelector('#calcular').style.display = 'inline';//pone visible el botón calcular, yo desde css lo habia puesto con display: none, para que recién se viera cuando hiciera click en comenzar. 
    return false;
}

const $botonCalcular = document.querySelector('#calcular');
//CUANDO SE HACE CLIK EN EL BOTON CALCULAR
$botonCalcular.onclick = function(){
    
    let edades = document.querySelectorAll('.edades');//guarda un nodeList con todas las edades ingresadas
    
    const $divDeInformacion = document.querySelector('#muestra-informacion');
    $divDeInformacion.style.display = 'inline';//pone visible el div que contiene los parrafos para mostrar la mayor, menor y promedio de edad.
    
    const $parrafoMayor = document.querySelector('#mayor');
    $parrafoMayor.textContent += calcularMayorEdad(edades);
    
    const $parrafoMenor = document.querySelector('#menor');
    $parrafoMenor.textContent += calcularMenorEdad(edades);
    
    const $parrafoPromedio = document.querySelector('#promedio');
    $parrafoPromedio.textContent += calcularPromedio(edades);
    
    $botonCalcular.disabled = "true"; //deshabilita el botón calcular
    
    /* Esto creaba un nuevo párrafo para la mayor de edad, la menor y el promedio... 
    
    const parrafoMayorEdad = document.createElement('p');
    const textoMayorEdad = document.createTextNode(`La mayor edad es ${calcularMayorEdad(edades)}`);
    parrafoMayorEdad.appendChild(textoMayorEdad);
    document.querySelector('#muestra-informacion').appendChild(parrafoMayorEdad);
    
    const parrafoMenorEdad = document.createElement('p');
    const textoMenorEdad = document.createTextNode(`La menor edad es ${calcularMenorEdad(edades)}`);
    parrafoMenorEdad.appendChild(textoMenorEdad);
    document.querySelector('#muestra-informacion').appendChild(parrafoMenorEdad);
    
    const parrafoPromedio = document.createElement('p');
    const textoPromedio = document.createTextNode(`El promedio de edad es ${calcularPromedio(edades)}`);
    parrafoPromedio.appendChild(textoPromedio);
    document.querySelector('#muestra-informacion').appendChild(parrafoPromedio);

    */
    
    //pone visibles los botones reiniciar, agregar salario y quitar salario.
    $botonReiniciar.style.display = 'inline';
    
    $botonAgregarSalario.style.display = 'inline';
    
    $botonQuitarSalario.style.display = 'inline';
    
    return false;
}


function eliminarInput(){
    /* ACÁ QUERÍA HACER QUE SE LE ELIMINARAN LOS INPUTS Y LABELS QUE SE CREARON (DONDE SE COLOCABAN LAS EDADES), PERO NO FUNCIONA me dice: Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'. SEGÚN MDN ES PORQUE EL CHILD NO EXISTE EN EL DOM. 
    
    let divConEdades = document.querySelector('.edad-integrantes')//clase donde hay un div donde están guardados los input con las edades, este sería el nodo padre.
    let lasEdades = document.querySelectorAll('.edades');// me devuelve una nodeList con todas las edades guardadas en los input 
    divConEdades.removeChild(lasEdades[0]);//pruebo con el primer elemento de la nodeList
    
    */
    
    let padre = document.querySelector('#muestra-informacion'); //guarda el div donde están los párrafos que muestran el mayor, el menor y el promedio de edades 
    let hijo = document.querySelector('#mayor');
    padre.removeChild(hijo);
    hijo = document.querySelector('#menor');
    padre.removeChild(hijo);
    hijo = document.querySelector('#promedio');
    padre.removeChild(hijo);

}

const $botonReiniciar = document.querySelector('#reiniciar');
//AL HACER CLICK EN EL BOTÓN REINICIAR
$botonReiniciar.onclick = function(){
    eliminarInput();//llama a la función eliminar input
    $botonReiniciar.style.display = 'none'; //oculta el botón reiniciar
    $botonCalcular.disabled = false; //habilita el botón calcular
    $botonComenzar.style.display = 'inline';
    document.querySelector('#cantidad-integrantes').disabled = false;//habilita el input para ingresar cantidad de integra
    
    return false;
}


//////////////////////////////////////////////////    TAREA 2     ////////////////////////////////////////////////////////

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//FUNCIÓN CALCULA EL MAYOR SALARIO ANUAL
function calcularMayorSalarioAnual(todosLosSalarios){
    let mayor = Number(todosLosSalarios[0].value);
    for(let i=0; i<todosLosSalarios.length; i++){
        if(Number(todosLosSalarios[i].value) > mayor){
            mayor = Number(todosLosSalarios[i].value);
        }
    }
    return mayor;
}

//FUNCIÓN CALCULA EL MENOR SALARIO ANUAL
function calcularMenorSalarioAnual(todosLosSalarios){
    let menor = Number(todosLosSalarios[0].value);
    for(let i=0; i<todosLosSalarios.length; i++){
        if(Number(todosLosSalarios[i].value) < menor){
            menor = Number(todosLosSalarios[i].value);
        }
    }
    return menor;
}

//FUNCIÓN CALCULA EL SALARIO ANUAL PROMEDIO
function calcularSalarioAnualPromedio(todosLosSalarios){
    let cantidad = todosLosSalarios.length;
    let suma = 0;
    for(let i=0; i<cantidad; i++){
        suma += Number(todosLosSalarios[i].value);
    }
    return (suma/cantidad).toFixed(2);
}

//FUNCIÓN CALCULA EL SALARIO MENSUAL PROMEDIO
function calcularSalarioMensualPromedio(todosLosSalarios){
    let suma = 0;
    let cantidad = todosLosSalarios.length
    for(let i=0; i<cantidad; i++){
        suma += ((Number(todosLosSalarios[i].value))/12);
    }
    return (suma/cantidad).toFixed(2);
}

//FUNCIÓN QUE CREA INPUTS PARA AGREGAR LOS SALARIOS
function agregarInputSalario(){
    const nuevoLabel = document.createElement('label');
    const textoLabel = document.createTextNode('Ingrese el salario anual del integrante: ');
    nuevoLabel.appendChild(textoLabel);
    document.querySelector('#carga-informacion-salario').appendChild(nuevoLabel);
    
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'number';
    nuevoInput.className = 'salario';
    document.querySelector('#carga-informacion-salario').appendChild(nuevoInput);
    
    const saltoDeLinea = document.createElement('br');
    document.querySelector('#carga-informacion-salario').appendChild(saltoDeLinea);
}

const $botonAgregarSalario = document.querySelector('#agregar-salario');
const $botonQuitarSalario = document.querySelector('#quitar-salario');
const $botonCalcularSalarios = document.querySelector('#calcular-salarios');

//SI SE HACE CLICK EN EL BOTÓN AGREGAR SALARIO:
$botonAgregarSalario.onclick = function(){
    agregarInputSalario();
    $botonCalcularSalarios.style.display = 'inline';//SE HACE VISIBLE EL BOTÓN CALCULAR SALARIO
}

//SI SE HACE CLICK EN EL BOTÓN CALCULAR SALARIO:
$botonCalcularSalarios.onclick = function(){
    const todosLosSalarios = document.querySelectorAll('.salario');//se crea un nodeList con todosLosSalarios ingresados
    document.querySelector('#muestra-informacion-salario').style.display = 'inline';//se hace visible el div que contiene los párrafos que muestran el mayor, menor y los promedios de salario mensual y anual. 
    
    document.querySelector('#mayor-salario').textContent += calcularMayorSalarioAnual(todosLosSalarios);
    document.querySelector('#menor-salario').textContent += calcularMenorSalarioAnual(todosLosSalarios);
    document.querySelector('#salario-anual-promedio').textContent += calcularSalarioAnualPromedio(todosLosSalarios);
    document.querySelector('#salario-mensual-promedio').textContent += calcularSalarioMensualPromedio(todosLosSalarios);
    
}
