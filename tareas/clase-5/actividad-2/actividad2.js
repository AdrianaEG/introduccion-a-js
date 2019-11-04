//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


function validarInput(texto){//el texto es el pNombre, Snombre, appelido
    let numerosYSimbolos = " 0123456789/*-+;,?_"
    if(texto.length == 0){
        alert("Por favor ingrese los nombres y el apellido sin espacio ni caracteres");
        return false;//me devuelve false si el input está vacío
    }
    
    for(let i=0; i<texto.length; i++){
        if(numerosYSimbolos.indexOf(texto.charAt(i),0)!=-1){
            i=texto.length;
            //console.log("INGRESA SOLO LETRAS SIN ESPACIOS");
            alert("Por favor ingrese los nombres y el apellido sin espacio ni caracteres");
            return false;//me devuelve false si el input contiene numeros y/o simbolos        }
        }    
    }
    return true;

}

function validarEdad(edad){
    if(edad.length == 0){
        alert("Por favor ingrese una edad válida");
        return false;
    }
    else if((edad<=0) || (edad>=120)){
        alert("Por favor ingrese una edad válida");
        return false;
    }
    return true;
}

function validarFormulario(nombre, segundoNombre, apellido, edad){
    if(!validarInput(nombre)){
        return false;
    }
    if(!validarInput(segundoNombre)){
        return false;
    }
    if(!validarInput(apellido)){
        return false;
    }
    
    if(!validarEdad(edad)){
        
        return false;
    }
    
    return true;
}

    
const $botonMuestraTodo = document.querySelector('#mostrar-informacion');

$botonMuestraTodo.onclick = function(){
    const nombre = document.querySelector('#primer-nombre').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    
    let $titulo = document.querySelector('h1');
    let todosLosDatos = "";
    
    if(!validarFormulario(nombre, segundoNombre, apellido, edad)){
        location.reload(); //si validarFormulario me devuelve false es decir o la edad es negativa o muy grande o los nombres o apellidos tienen espacios, números o caracteres raros entonces recarga la página.
    }

    $titulo.innerText = $titulo.innerText + " " + nombre;
    
    todosLosDatos = `Tu nombre es ${nombre} ${segundoNombre} ${apellido} y tenés ${edad} años.`;
    //todosLosDatos = "Tu nombre es " + $nombre + " " + $segundoNombre + " " + $apellido + " y tenes " + $edad + " años.";
    
    document.querySelector('#muestra-todo').innerText = todosLosDatos;
    
    return false;     
}
