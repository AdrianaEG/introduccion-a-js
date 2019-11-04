/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input
2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.
3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.
Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");
$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
function calcularSalarioMensual(salarioAnual){
    const meses = 12;
    return (salarioAnual/meses).toFixed(2);
}

function validarSalario(salarioAnual){
    if(salarioAnual>=0){
        return true;
    }
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){ 
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    
    if(validarSalario(salarioAnual)){
        document.querySelector('#salario-mensual').value = `Tu salario es de $${calcularSalarioMensual(salarioAnual)} por mes`;
    }
    else{
        alert('Por favor ingrese un salario válido');
        location.reload();//si el salario es negativo se recarga la página sin enviar el formulario.
    }
        
    return false;//para que el formulario no se envíe . si tengo en html <button type="button">Soy el boton</button> es decir especifica que es de tipo button y no submit no hace falta acá poner el return false, de todas formas yo acá estoy utilizando un input de tipo submit asi que si hace falta para que la página no se recargue.
}
