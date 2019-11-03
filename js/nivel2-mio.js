// Nivel 2

/*
    Introducción
    ============

    ¡Bienvenido al nivel 2! Es tiempo de interactuar con HTML.

    Los archivos Hyper Text Markup Language (HTML) son la columna vertebral de Internet.
    Cada sitio web que visita se carga primero como un archivo HTML.

    No hablaremos demasiado sobre HTML hoy. Lo que necesitas saber es que los archivos HTML
    funcionan como una especie de esqueleto para tu página. Nuestro archivo index.html
    combina todos los archivos de este proyecto para que puedas abrirlos en tu navegador web.

    Este proyecto tiene un archivo llamado index.html. Al final de index.html usted
    verá la siguiente etiqueta:

    <script src="js/nivel1.js"></script>

    Así es como has estado ejecutando el archivo nivel1.js en un navegador. Ahora cambia
     nivel1.js para apuntar a este archivo - nivel2.js.

    ¡Ahora estás listo para comenzar!
*/

/*
    Arrays
    ======

    Un array es una lista ordenada de valores. Podes guardar cualquier cantidad de valores
    dentro. Y también cualquier tipo de valores: números, cadenas, objetos, incluso
    otros Arrays.

    Ejemplo:
    let 

    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.







/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.


//const comidasFavoritas = ['ñoquis', 'pizza', 'empanadas', 'tortas'];
//console.log(comidasFavoritas.length);
//console.log(comidasFavoritas[0]);



/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'. Gracias a un tipo llamado Edsger
    Dijkstra *, los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; y así sucesivamente

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

//console.log(comidasFavoritas[2]);


/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.
//console.log(comidasFavoritas);
//comidasFavoritas[0] = 'sorrentinos';
//console.log(comidasFavoritas);


// TAREA: console.log todo el array para verificar.






// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.

//comidasFavoritas.push('tallarines');
//console.log(comidasFavoritas);


// TAREA: console.log todo el array para verificar.




/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando 'const', los valores *dentro* del
    array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es legal y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // Esto es ilegal y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.
//const a = [1, 2, 3];
//console.log(a);
//a[0] = 4;
//console.log(a);



// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante


//a.push(5);
//console.log(a);



/*
    Bucles
    ======
    
    ¡La gente siempre ha sido perezosa, pero a veces avanza! A nosotros
    no nos gusta repetir las mismas aburridas acciones una y otra vez, 
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript 
    es increible!', ¿cuáles son mis opciones?. Por supuesto, puedo escribir 
    diez líneas de código repitiendo la misma instrucción, pero también 
    puedo decirle a la computadora que lo repita en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada iteración debe tener tres cosas principales:
     - un punto de partida
     - una condición (punto final)
     - un contador (un paso)

     Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

     Veamos diferentes estructuras de bucle.

*/



/*
    Bucles while (mientras)
    ============

    El bucle 'While' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // punto de partida
    let numero = 0;

    while (numero < 10) {
      // 'menos de 10' es una condición (punto final)

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador / tamaño del paso
    }
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

/*let numero = 0;

while (numero <= 10){
    console.log(numero);
    numero++;// numero += 1;
}*/

/*let numero = 10;
while (numero>0){
    console.log(numero);
    numero -- ;
}*/





/*
    Bucles for (para)
    ==========

    Los bucles for son muy similares al 'bucle while'. En un bucle for
    se declara un contador en la declaración.

    Ejemplo:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

/*let i;
for (i=0; i<=5; i++){
    console.log('Hola' + i);
}*/

/*function parte1(){
    for(let i=3; i<=22; i+=3){
        console.log(i);
    }
}
parte1();*/

/*for(let i=3; i<=22; i = i+3){
    console.log(i);
}*/




/*
    Iterando a traves de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno ¿Cómo lo voy a hacer?

    Podemos usar un 'bucle for' para iterar a través de nuestro array y obtener cada valor
    de eso.

    Nota: i++ es otra forma de expresar i = i + 1.

    Ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for(let i = 0; i < animales.length; i++){
        console.log('Me gustan los ' + animales[i]); //animales[i] se lee "animales en i"
    }
*/

// TAREA: Probalo con tu comidasFavoritas array.

/*const notaParciales = [10, 4, 5, 6];
let suma = 0;
for(let i=0; i<notaParciales.length; i++){
    suma = suma +notaParciales[i];
}
console.log("Tu promedio es " + (suma/notaParciales.length));
*/


/*const comidasfavoritas = ['ñoquis', 'tartas', 'pizzas', 'helado'];

for(let i=0; i<comidasfavoritas.length; i++){
    console.log('Me gusta lxs '+comidasfavoritas[i]);
}*/

//tarea hacer una funcion que se llame calcularPromedio que tome como parámetro un array. 

/*function calcularPromedio(arreglo){
    for (let i =0 ; i<arreglo.length; i++){
        sumaTotal = sumaTotal + arreglo[i];
    }
    promedio = sumaTotal / arreglo.length;
    return promedio;
}

let sumaTotal = 0;
let promedio = 0;
const misNotas = [10, 5, 4, 9, 8];
console.log("Mi promedio es " + calcularPromedio(misNotas));*/


/*for (let i=10; i>=10; i--){
    if(i===5){
        console.log("Estamos en el medio");
    }
    else{
        console.log(i);
    }

}*/

/*
    Bucles y Logica
    ===============
    
    Traigamos bucles junto con las declaraciones if / else que aprendimos en
    nivel 1, y hagamos algo interesante.


    Contemos de 10 a 0 e imprimamos todos los números. Pero cuando lleguemos al
    medio (5) imprimimos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.

// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.



/*for (let i=1; i<=50; i++){
    if(((i%3)===0)&&((i%5)===0)){
        console.log('FizzBuzz');
    }
    else if((i%3)===0){
        console.log('Fizz');
    }
    else if((i%5)===0){
        console.log('Buzz');
    } 
    else{
        console.log(i);
    }
}*/


/* OTRA FORMA DE HACERLO
function fizzBuzz(x){
    let cadena = '';
    if(x%3 === 0){
        cadena = 'Fizz';
    }
    if(x%5 === 0){
        cadena += 'Buzz';
    }
    if(cadena.length == 0){
        cadena = x;
    }// este seria como decir console.log(texto || i); // es decir si lo de la izq o sea texto es mas o menos falso mostra el x, es decir si el texto/cadena esta vacío mostra el x
    return cadena;
}

for (let i=1; i<=50; i++){
    console.log(i, fizzBuzz(i));
}*/

/*function fizzBuzz(){
    for(let i=1; i<=50; i++){
        let texto = '';
        if(i%3 === 0){
            texto = 'Fizz';
        }
        if(i%5 === 0){
            texto += 'Buzz';
        }
        
        console.log(texto || i);
    }
}
fizzBuzz();*/



//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro.                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
//////////////////////////////////////////////////////////////////////////////


//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10
 Resultado: 10 9 8 7 6 5 4 3 2 1
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100
 1 3 5 ... 99
Desafío de programación #3: Imprimí la tabla de multiplicación del 7
 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]
 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
Desafío de programación #6: Calcula 10! (10 factorial)
 10 * 9 * 8 * ... * 1
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
Desafío de programación #10: Calcula la suma de todos los números en un array de números
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
Desafío de programación #13: Find the maximum number in an array of numbers
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
Desafío de programación #16: Create una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
Ejemplo:
   1 NO es primo porque tiene 2 divisores enteros (1, -1)
   2 es primo porque sólo puede dividirse por (1,-1,2,-2)
   3 es primo porque sólo puede dividirse por (1,-1,3,-3)
   4 NO es primo porque se puede dividir por (1,-1,2,-2,4,-4)
   5 es primo porque sólo puede dividirse por (1,-1,5,-5)
   6 NO es primo porque se puede dividir por (1,-1,2,-2,3,-3,6,-6)
   ... y así
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
Desafío de programación #18: Imprimir los primeros 100 números primos
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */



