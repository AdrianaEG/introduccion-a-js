//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



const $botonMuestraTodo = document.querySelector('#mostrar-informacion');

$botonMuestraTodo.onclick = function(){
    const $nombre = document.querySelector('#primer-nombre').value;
    const $segundoNombre = document.querySelector('#segundo-nombre').value;
    const $apellido = document.querySelector('#apellido').value;
    const $edad = document.querySelector('#edad').value;
    
    let $titulo = document.querySelector('h1');
    let todosLosDatos = "";
    
    if((validarFormulario($nombre) == true) || (validarFormulario($segundoNombre)== true) || (validarFormulario($apellido)== true)) {
        alert("Por favor ingrese los nombres y apellidos sin espacios en blancos ni caracteres");
        return true;
    }
    
    if(validarEdad($edad)){
        alert("Por favor ingrese una edad válida");
        return true;
    }

    $titulo.innerText = $titulo.innerText + " " + $nombre;
    
    todosLosDatos = `Tu nombre es ${$nombre} ${$segundoNombre} ${$apellido} y tenés ${$edad} años.`;
    //todosLosDatos = "Tu nombre es " + $nombre + " " + $segundoNombre + " " + $apellido + " y tenes " + $edad + " años.";
    
    document.querySelector('#muestra-todo').innerText = todosLosDatos;
    
    return false;     
}


function validarFormulario(texto){//el texto es el pNombre, Snombre, appelido
    let numerosYSimbolos = " 0123456789/*-+;,"
    if(texto.length == 0){
        return true;
    }
    
    for(let i=0; i<texto.length; i++){
        if(numerosYSimbolos.indexOf(texto.charAt(i),0)!=-1){
            i=texto.length;
            //console.log("INGRESA SOLO LETRAS SIN ESPACIOS");
            return true;
        }
    }
}

function validarEdad(edad){
    if(edad.length == 0){
        return true;
    }
    else if((edad<=0) || (edad>=120)){
        return true;
    }
}






