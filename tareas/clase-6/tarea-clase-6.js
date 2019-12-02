/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


//FUNCIÓN PARA CREAR LABEL E INPUT DONDE SE CARGA LA EDAD DE LOS INTEGRANTES:
function crearInputs(cantidad) {
    let $edadIntegrantes = document.querySelector('.edad-integrantes');

    for (let i = 1; i <= cantidad; i++) {
        const nuevoLabel = document.createElement('label');
        const textoLabel = document.createTextNode(`Ingrese la edad del integrante ${i}: `);
        nuevoLabel.className = "labelEdad";
        nuevoLabel.appendChild(textoLabel);

        $edadIntegrantes.appendChild(nuevoLabel);

        const nuevoInput = document.createElement('input');
        nuevoInput.type = "number";
        nuevoInput.className = "edades";
        $edadIntegrantes.appendChild(nuevoInput);

        const saltoDeLinea = document.createElement('br');
        $edadIntegrantes.appendChild(saltoDeLinea);
    }
}

function calcularMayorEdad(edades) {
    let mayor = Number(edades[0].value);
    for (let i = 0; i < edades.length; i++) {
        if (Number(edades[i].value) > mayor) {
            mayor = Number(edades[i].value);
        }
    }
    return mayor;
}

function calcularMenorEdad(edades) {
    let menor = Number(edades[0].value);
    for (let i = 0; i < edades.length; i++) {
        if (Number(edades[i].value) < menor) {
            menor = Number(edades[i].value);
        }
    }
    return menor;
}

function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += Number(edades[i].value);
    }
    return (suma / (edades.length)).toFixed(0);
}

const $botonComenzar = document.querySelector('#comenzar');

$botonComenzar.onclick = function (event) {
    const cantidadDeIntegrantes = document.querySelector('#cantidad-integrantes').value;
    if (validarCantidadDeIntegrantes(cantidadDeIntegrantes)) {
        crearInputs(cantidadDeIntegrantes); //llama a la función para crear los input con la cant de integrantes
        document.querySelector('#calcular').className = 'mostrar'; //style.display = 'inline'; pone visible el botón calcular, yo desde css lo habia puesto con display: none, para que recién se viera cuando hiciera click en comenzar. 
        document.querySelector('#cantidad-integrantes').disabled = true; //no permite volver a escribir en cant de integrantes
        $botonComenzar.className = 'ocultar'; //$botonComenzar.style.display = 'none'; Oculta botón comenzar
    } else {
        document.querySelector('#cantidad-integrantes').value = '';
        alert('Ingrese una cantidad valida');
    }
    event.preventDefault();
}

function validarCantidadDeIntegrantes(cantidadDeIntegrantes) {
    return (/^[0-9]+$/.test(cantidadDeIntegrantes));
}

const $botonCalcular = document.querySelector('#calcular');

const $parrafoMayor = document.querySelector('#mayor');
const $parrafoMenor = document.querySelector('#menor');
const $parrafoPromedio = document.querySelector('#promedio');

$botonCalcular.onclick = function (event) {

    let edades = document.querySelectorAll('.edades'); //guarda un nodeList con todas las edades ingresadas

    const $cuadroConInformacion = document.querySelector('#muestra-informacion');

    if (validarEdades(edades)) {
        $cuadroConInformacion.className = 'mostrar'; //style.display = 'inline'; pone visible el div que contiene los parrafos para mostrar la mayor, menor y promedio de edad.


        $parrafoMayor.textContent += calcularMayorEdad(edades);

        $parrafoMenor.textContent += calcularMenorEdad(edades);

        $parrafoPromedio.textContent += calcularPromedio(edades);

        $botonCalcular.className = 'ocultar';
        $botonReiniciar.className = 'mostrar'; //style.display = 'inline';

        $botonAgregarSalario.className = 'mostrar'; //style.display = 'inline';

        $botonQuitarSalario.className = 'mostrar'; //$botonQuitarSalario.style.display = 'inline';
        
        edades.forEach(function(key){//inhabilita los input 
            key.disabled = true;
        });
        
    }
    else{
        alert('Por favor ingrese edades validas');
        $botonReiniciar.onclick();
    }




    /* Esto creaba un nuevo párrafo para la mayor de edad, la menor y el promedio...pero ya lo hice desde html 
    
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


    event.preventDefault();
}

function validarEdades(edades) {
    let error = 0;
    edades.forEach(function (key) {
        if (!(/^[0-9]+$/.test(key.value))) {
            error++;
        }
    });
    if (error > 0) {
        return false;
    }
    return true;
}


function eliminarInputs() {

    let contenedorEdades = document.querySelector('.edad-integrantes'); //clase donde hay un div donde están guardados los input con las edades, este sería el nodo padre.
    //let lasEdades = document.querySelectorAll('.edades');// me devuelve una nodeList con todas las edades guardadas en los input 
    //let losLabels = document.querySelectorAll('.labelEdad');//nodeList con todos los labels que dicen "ingrese la edad del integrante numero x.

    contenedorEdades.innerHTML = ''; //esto es una alternativa a lo que hice debajo: 

    /*for (let i=0; i<lasEdades.length; i++){
        contenedorEdades.removeChild(lasEdades[i]);//me elimina todos los input donde se ingresa la edad
        contenedorEdades.removeChild(losLabels[i]);//me elimina todos los labels que dicen "ingrese la edad del integrante x
    }*/

    /* OTRA FORMA DE HACERLO
    lasEdades.forEach(function(key){
        key.remove();
    });
    losLabels.forEach(function(key){
        key.remove();
    });*/
}

const $botonReiniciar = document.querySelector('#reiniciar');
//AL HACER CLICK EN EL BOTÓN REINICIAR
$botonReiniciar.onclick = function (event) {
    eliminarInputs(); //llama a la función eliminar input
    $botonReiniciar.className = 'ocultar';
    //style.display = 'none'; //oculta el botón reiniciar
    $botonCalcular.className = 'ocultar'; //style.display = 'none'; //oculta el botón calcular
    $botonComenzar.className = 'mostrar'; //style.display = 'inline';
    document.querySelector('#cantidad-integrantes').disabled = false; //habilita el input para ingresar cantidad de integrantes
    reiniciarParrafos();
    document.querySelector('#muestra-informacion').className = 'ocultar'; //style.display = 'none'; //oculta los párrafos 
    $botonAgregarSalario.className = 'ocultar';
    $botonQuitarSalario.className = 'ocultar';
    //document.querySelector('#carga-informacion-salario').className = 'ocultar';
    //document.querySelector('#muestra-informacion-salario').className = 'ocultar';
    resetearSalario();

    event.preventDefault();
}

function reiniciarParrafos() {
    $parrafoMayor.textContent = "La mayor edad es: "; //reinicia el parrafo que dice mayor edad
    $parrafoMenor.textContent = "La menor edad es: "; //reinicia el parrafo que dice la menor edad
    $parrafoPromedio.textContent = "El promedio de edades es: "; //reinicia el párrafo que dice promedio de edades.
}


//////////////////////////////////////////////////    TAREA 2     ////////////////////////////////////////////////////////

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function calcularMayorSalarioAnual(todosLosSalarios) {
    todosLosSalarios = comprobarCampoVacio(todosLosSalarios);
    let mayor = Number(todosLosSalarios[0]);

    for (let i = 0; i < todosLosSalarios.length; i++) {
        if (Number(todosLosSalarios[i]) > mayor) {
            mayor = Number(todosLosSalarios[i]);
        }
    }
    return mayor;
}

function calcularMenorSalarioAnual(todosLosSalarios) {
    todosLosSalarios = comprobarCampoVacio(todosLosSalarios);
    let menor = Number(todosLosSalarios[0]);
    for (let i = 0; i < todosLosSalarios.length; i++) {
        if (Number(todosLosSalarios[i]) < menor) {
            menor = Number(todosLosSalarios[i]);
        }
    }
    return menor;
}

function calcularSalarioAnualPromedio(todosLosSalarios) {
    todosLosSalarios = comprobarCampoVacio(todosLosSalarios);
    let cantidad = todosLosSalarios.length;
    let suma = 0;
    for (let i = 0; i < cantidad; i++) {
        suma += Number(todosLosSalarios[i]);
    }

    return (suma / cantidad).toFixed(2);
}

function calcularSalarioMensualPromedio(todosLosSalarios) {
    todosLosSalarios = comprobarCampoVacio(todosLosSalarios);
    let suma = 0;
    let cantidad = todosLosSalarios.length
    for (let i = 0; i < cantidad; i++) {
        suma += ((Number(todosLosSalarios[i])) / 12);
    }
    return (suma / cantidad).toFixed(2);
}

//FUNCIÓN QUE CREA INPUTS PARA AGREGAR LOS SALARIOS
function agregarInputSalario() {
    const nuevoLabel = document.createElement('label');
    const textoLabel = document.createTextNode('Ingrese el salario anual del integrante: ');
    nuevoLabel.className = 'labelSalario';
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

let i = 0; //la var i es la que me impide que se generen más campos que la cantidad de familiares que hay
$botonAgregarSalario.onclick = function () {

    document.querySelector('#carga-informacion-salario').className = 'mostrar';

    if (i < (document.querySelector('#cantidad-integrantes').value)) { //la var i es la que me impide que se generen más campos que la cantidad de familiares que hay

        agregarInputSalario();
        $botonQuitarSalario.className = 'mostrar';
        $botonCalcularSalarios.className = 'mostrar';
        i++;
    }
    return false;
}

$botonCalcularSalarios.onclick = function () {
    const todosLosSalarios = document.querySelectorAll('.salario'); //se crea un nodeList con todosLosSalarios ingresados
    document.querySelector('#muestra-informacion-salario').className = 'mostrar'; //style.display = 'inline';//se hace visible el div que contiene los párrafos que muestran el mayor, menor y los promedios de salario mensual y anual. 

    document.querySelector('#mayor-salario').textContent += calcularMayorSalarioAnual(todosLosSalarios);
    document.querySelector('#menor-salario').textContent += calcularMenorSalarioAnual(todosLosSalarios);
    document.querySelector('#salario-anual-promedio').textContent += calcularSalarioAnualPromedio(todosLosSalarios);
    document.querySelector('#salario-mensual-promedio').textContent += calcularSalarioMensualPromedio(todosLosSalarios);

    $botonCalcularSalarios.className = 'ocultar';
    return false;
}

$botonQuitarSalario.onclick = function () {
    let cantidadDeSalarios = document.querySelectorAll('.salario').length;

    let $divConSalarios = document.querySelector('#carga-informacion-salario');
    let primerSalarioIngresado = document.querySelector('.salario');
    let primerInput = document.querySelector('.labelSalario');
    if (cantidadDeSalarios >= 1) {
        $divConSalarios.removeChild(primerSalarioIngresado);
        $divConSalarios.removeChild(primerInput);
        i--; //la var i es la que me impide que se generen más campos que la cantidad de familiares que hay
    }
    if (cantidadDeSalarios == 1) {
        $botonQuitarSalario.className = 'ocultar';
    }
    return false;
}

function resetearSalario() {
    //document.querySelector('#carga-informacion-salario').innerHTML = '';
    //document.querySelector('#muestra-informacion-salario').innerHTML = '';
    document.querySelector('#carga-informacion-salario').className = 'ocultar';
    document.querySelector('#muestra-informacion-salario').className = 'ocultar';

    document.querySelector('#carga-informacion-salario').innerHTML = '';

    document.querySelector('#mayor-salario').textContent = 'El mayor salario es: ';
    document.querySelector('#menor-salario').textContent = 'El menor salario es: ';
    document.querySelector('#salario-anual-promedio').textContent = 'El salario anual promedio es: ';
    document.querySelector('#salario-mensual-promedio').textContent = 'El salario mensual promedio es: ';

    $botonCalcularSalarios.className = 'ocultar';
    i = 0; ////la var i es la que me impide que se generen más campos que la cantidad de familiares que hay
}

function comprobarCampoVacio(nodeListConSalarios) { //

    /*LA IDEA ERA QUE SI ESTABA VACÍO O SI ERA CERO QUE LO ELIMINARA DE LA NODE LIST PERO NO FUNCIONA ASÍ QUE LO PASÉ A UN ARRAY Y LISTO. 
    
    for(let i=0; i<nodeListConSalarios.length; i++){
        if(nodeListConSalarios[i] == ''){
            nodeListConSalarios[i].remove();
        }
    }
    return nodeListConSalarios;*/


    let arregloDeSalarios = [];
    for (let i = 0; i < nodeListConSalarios.length; i++) {
        arregloDeSalarios[i] = nodeListConSalarios[i].value;
    }

    for (let i = 0; i < arregloDeSalarios.length; i++) {
        if (arregloDeSalarios[i] == '') {
            arregloDeSalarios.splice(i, 1);
        }
    }
    return arregloDeSalarios;
}
