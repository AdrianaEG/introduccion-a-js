//Desafío de programación #1: Imprimí los números del 1 al 10. Resultado: 10 9 8 7 6 5 4 3 2 1

/*for (let i=1; i<=10; i++){
    console.log(i);
}*/

//Desafìo de programación  #2: Imprimí los números impares del 1 al 100. 1 3 5 ... 99

/*for(let i=1; i<=100; i+=2){
    console.log(i);
}*/

/*for(let i=1; i<=100; i++){
    if(i%2 != 0){
        console.log (i);
    }
}*/

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7
/*for(let i=0; i<=10; i++){
    console.log(7*i);
}*/

/*Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81*/

/*for (let i=1; i<=10; i++){
    console.log("TABLA DEL "+i)
    for(let j=0; j<=10; j++){
        console.log(i*j);
    }
}*/

/* OTRA FORMA DE HACERLO 

function ejercicio4() {
    let arr = [];

    for (let num = 1; num <= 10; num++) {
        let multis = [];

        for (multi = 1; multi <= 10; multi++) {
            multis.push(num * multi);
        }

        arr.push(multis);
    }

    console.table(arr);
}
ejercicio4();*/

//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 //[1,2,3,4,5,6,7,8,9,10]
 //1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle


/*let array = [];
let suma = 0;
for (let i=1; i<=10; i++){
    array.push(i);
    suma = suma + i; 
}
console.log(suma);
console.log(array);*/


//Desafío de programación #6: Calcula 10! (10 factorial)
// 10 * 9 * 8 * ... * 1

/*let total=1;
for(let i=10; i>1 ; i--){
    total = total * (i);
}
console.log(total);*/

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
/*let suma = 0;
for (let n=11; n<=30; n=n+2){
    suma = suma + n; 
}

console.log(suma);*/


/*function sumaImpares(){
    let suma = 0;
    for(let n=10; n<30; n++){
        if(n%2 !== 0){
            suma = suma + n;
        }
    }
    return suma;
}

console.log(sumaImpares());*/

/* OTRA FORMA DE HACERLO
function ejercicio7(min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }

    return sum;
}
console.log(ejercicio7(10,30));*/


//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

/*function deCelsiusAFarenheit(grados){
    return ((grados * 9/5)+32);
}

let temp = Number(prompt("¿Cuantos grados hacen?"));
console.log("Hacen "+ deCelsiusAFarenheit(temp)+" grados farenheit");*/


//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius


/*function deFarenheitACelcius(temp){
    return ((temp-32)*(5/9)).toFixed(2);
}

let temp = Number(prompt("Ingrese la temperatura en grados farenheit"));
console.log("La temperatura es de "+deFarenheitACelcius(temp)+" grados centigrados");*/


//Desafío de programación #10: Calcula la suma de todos los números en un array de números

/*let miarray = [10, 5, 4, 1, 3];
let suma =0;
for(let i=0; i<miarray.length; i++){
    suma = suma + miarray[i];
}

console.log(suma);*/

/*function sumaDeValoresDeArray(arrayUsuario){
    let suma = 0;
    for(let i=0; i<arrayUsuario.length; i++){
        suma += arrayUsuario[i];
    }
    return suma;
}

let miArray = [5,3,9,2,10,20];
console.log(sumaDeValoresDeArray(miArray));*/

//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)



/*function calculaPromedio(arrayUsuario){
    let suma = 0;
    for (let i=0; i<arrayUsuario.length; i++){
        suma += arrayUsuario[i];
    }
    return (suma / (arrayUsuario.length));
}

let miArray = [10, 9, 8, 4, 10];
console.log(calculaPromedio(miArray));*/

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

/*function devuelvePositivos(arrayUsuario){
    let arrayPositivos = [];
    for (let i=0; i<arrayUsuario.length; i++){
        if (((arrayUsuario[i])%2) === 0){
            arrayPositivos.push(arrayUsuario[i]);
        }
    }
    return arrayPositivos;
}

let miArray = [10, 1, 27, 5, 22, 8];
console.log(devuelvePositivos(miArray));*/

//Desafío de programación #13: Find the maximum number in an array of numbers

/*let miArray = [10,15,28,7,4, 32, 1, 45, 9];
let maximo =0;
for(let i=0; i<miArray.length; i++){
    if(miArray[i]>maximo){
        maximo = miArray[i];
    }
}

console.log(maximo);// también existe math.max.apply(arreglo)*/

//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
//Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
//El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/*let primero = 0;
let segundo = 1;

console.log(primero);
console.log(segundo);

primero = primero + segundo;
console.log(primero);

segundo = primero + segundo;
console.log(segundo);

primero = primero + segundo;
console.log(primero);

segundo = primero + segundo;
console.log(segundo);

primero = primero + segundo;
console.log(primero);

segundo = primero + segundo;
console.log(segundo);

primero = primero + segundo;
console.log(primero);

segundo = primero + segundo;
console.log(segundo);

primero = primero + segundo;
console.log(primero);*/

/*let primero = 0;
let segundo = 1;
let contador = 0
console.log(primero);
console.log(segundo);
while (contador < 10){
    primero = primero + segundo;
    console.log(primero);
    segundo = primero + segundo;
    console.log(segundo);
    contador += 2;
}*/

/*Forma correcta de hacerlo:

function fibonacci()
{
    let primero = 0;
    let segundo = 1;
    let aux;
    console.log(primero);
    console.log(segundo);
 
    for(let i=2; i <= 10;i++)
        {
        aux = primero + segundo;
        primero = segundo; 
        segundo = aux;
        console.log(aux);
        }
}

fibonacci();*/

//OTRA FORMA DE HACERLO

/*function fibonacci(n){
    let miArray = [0, 1];
    
    for (let i=2; i<= n; i++){
        miArray.push(miArray[i-1]+miArray[i-2]);
    
    }
    console.log(miArray);
}
fibonacci(10);*/


//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión


/*function fibo (n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibo (n-1) +fibo(n-2);
}

console.log(fibo(10));*/

//Desafío de programación #16: Create una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

/*let contador = 0;
function esPrimo (n){
    if(n<2){
       return false;
    }
    for (let i=1; i<=n; i++){
        if((n%i)=== 0){
            contador ++;
        }
    }
    if(contador > 2){
        return false;
    }
    return true;
}

let numero = Number(prompt("INGRESE UN NUMERO"));
console.log(esPrimo(numero));*/

//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo


/*function sumaDeDigitos(n){
    let resultado = 0;
    
    while ((n)>0){
        resultado += (n%10);
        n = (n / 10);
        n = Math.trunc(n);
    }
     return resultado;
}

console.log(sumaDeDigitos(120752));
*/

//Desafío de programación #18: Imprimir los primeros 100 números primos

/*function imprimirDiezPrimos(){
    let arregloDePrimos = []
    let contador = 0;
    for (let i=2; contador<100; i++){
        let verificaPrimo = 0;
        for (let j=1; j<=i; j++){
            if((i%j)===0){
                verificaPrimo++;
            }
        }
        if(verificaPrimo===2){
            arregloDePrimos.push(i);
            contador++;
        }
    }
    
    return arregloDePrimos;
}

console.log(imprimirDiezPrimos());*/


//Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
//Ejemplo:
//Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]


/*function imprimirNPrimos (cantidad, mayorQue){
    let arregloDePrimos = [];
    let contador = 0;
    
    for(let i=mayorQue; contador<cantidad; i++){
        let verificaPrimo = 0;
        for (let j=1; j<=i; j++){
            if((i%j)===0){
                verificaPrimo++;
            }
        }
        if(verificaPrimo === 2){
            arregloDePrimos.push(i);
            contador++;
        }
    }
    return arregloDePrimos;
}

console.log(imprimirNPrimos(10, 30));*/


/*Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]*/


/*function rotarArrayIzquierda(elArreglo){
    let primero = elArreglo.shift();
    elArreglo.push(primero);
    return elArreglo;
}

let unArreglo = [58, 91, 7, 1, 2, 1500, 3];
console.log(rotarArrayIzquierda(unArreglo));*/

/*Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]*/


/*function rotarArrayDerecha(elArreglo){
    let ultimo = elArreglo.pop();
    elArreglo.unshift(ultimo);
    return elArreglo;
}

let unArreglo = [2, 3, 4, 1];
console.log(rotarArrayDerecha(unArreglo));*/

/*Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]*/

/*function invierteArreglo(elArreglo){
    let arregloAux = [];
    let aux;
    while(elArreglo.length>0){
        aux = elArreglo.pop();
        arregloAux.push(aux);
    }
    return arregloAux;
}

let unArreglo = [22, 5, 8, 7];
console.log(invierteArreglo(unArreglo));*/

/*Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"*/


//hola --> aloh


/*function invierteCadena(){
    let cadena = "Bienvenides";
    let aux = "";
    let cadenaAux="";
    
    for(let i=cadena.length-1; i>=0; i--){
        aux = cadena[i];
        cadenaAux += aux;
    }
    
    console.log(cadenaAux);
    
}

invierteCadena();*/

//Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
//Ejemplo:
//  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


/*function devuelveTodoJunto (a1, a2){
    let nuevoArray = a1 + " "+ a2;
    return nuevoArray;
}

let arreglo1 = [1, 2, 3];
let arreglo2 = ["a", "b", "c"];
console.log(devuelveTodoJunto(arreglo1, arreglo2));*/

/*function devuelveTodoJunto (a1, a2){
    let nuevoArreglo = [];
    let aux;
    
    while (a1.length > 0){
        aux = a1.shift()
        nuevoArreglo.push(aux);
    }
    
    while (a2.length > 0){
        aux = a2.shift();
        nuevoArreglo.push(aux);
    }
    return nuevoArreglo;
}


let a1 = [1, 2, 3];
let a2 = ['a', 'b', 'c']
console.log (devuelveTodoJunto(a1, a2));*/


//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
//Nota: Esto se llama "diferencia simétrica" entre conjuntos

/*function noDevuelveRepetidos(a1, a2){
    let numerosNoRepetidos = [];
    for (let i=0; i<a1.length; i++){
       if(a2.indexOf (a1[i]) === -1){
           numerosNoRepetidos.push(a1[i]);
       }     
    }
    
    for (let j=0; j<a2.length; j++){
        if(a1.indexOf (a2[j]) === -1){
            numerosNoRepetidos.push(a2[j]);
        }
    }
    
    return numerosNoRepetidos;
}

let a1 = [1, 3, 5, 9];
let a2 = [7, 5, 1, 8, 12];
console.log(noDevuelveRepetidos(a1, a2));*/




//Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
//Nota; Esto se llama "resta" entre conjuntos
//Ejemplo:
//[5,1,2,3,4] y [3,4] debería devolver [5,1,2]


/*function elementosDelPrimerArray(a1, a2){
    let arrayNuevo = [];
    for (let i=0; i<a1.length; i++){
        if(a2.indexOf (a1[i]) === -1){
            arrayNuevo.push(a1[i]);
        }
    }
    return arrayNuevo;
}

let a1 = [5, 1, 2, 3, 4];
let a2 = [3, 4];

console.log(elementosDelPrimerArray(a1, a2));*/

/*Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]*/





/*function devuelveElementosDistintos(arreglo)
{
    var arregloAuxiliar = [];
    for(let i = 0; i < arreglo.length; i++)
    {
        if (!estaEnArreglo(arreglo[i], arregloAuxiliar))
        {
            arregloAuxiliar.push(arreglo[i]);
        }
    }
    
    return arregloAuxiliar;
}

function estaEnArreglo(n, ar)
{
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}

let arreglo = [1, 2, 4, 6, 1, 4, 9];

console.log(devuelveElementosDistintos(arreglo));




*/


//Desafío de programación #28: Calculate the sum of first 100 prime numbers



/*function imprimirCienPrimos(){
    let arregloDePrimos = []
    let contador = 0;
    for (let i=2; contador<100; i++){
        let verificaPrimo = 0;
        for (let j=1; j<=i; j++){
            if((i%j)===0){
                verificaPrimo++;
            }
        }
        if(verificaPrimo===2){
            arregloDePrimos.push(i);
            contador++;
        }
    }
    
    return arregloDePrimos;
}

console.log(imprimirCienPrimos());

function sumaDeLosCienPrimos(elArreglo){
    let resultado = 0;
    for (let i =0; i<elArreglo.length; i++){
        resultado += elArreglo [i];
    }
    return resultado;
}

console.log("La suma de los primeros cien primos es " + sumaDeLosCienPrimos(imprimirCienPrimos()));*/

//Desafío de programación #29: Print the distance between the first 100 prime numbers

/*function imprimirCienPrimos(){
    let arregloDePrimos = []
    let contador = 0;
    for (let i=2; contador<100; i++){
        let verificaPrimo = 0;
        for (let j=1; j<=i; j++){
            if((i%j)===0){
                verificaPrimo++;
            }
        }
        if(verificaPrimo===2){
            arregloDePrimos.push(i);
            contador++;
        }
    }
    
    return arregloDePrimos;
}

console.log(imprimirCienPrimos());

function distanciaEntrePrimos(elArreglo){
    let segundo = 0;
    let primero = 0;
    let resultado;
    for (let i=0; i<elArreglo.length-1; i++){
        primero = elArreglo[i];
        segundo = elArreglo[i+1];
        resultado = segundo - primero;
        console.log(resultado);
    }
}
distanciaEntrePrimos(imprimirCienPrimos());*/

//Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

/*function recibeNumeros (n1, n2){
    let sum = 0;
    n1 = parseInt(n1, 10);
    n2 = parseInt(n2, 10);
    
    sum = n1 + n2;
    sum = sum.toString(10);
    return sum;
}


let num1 = "222222";
let num2 = "111111";
console.log(recibeNumeros(num1, num2));*/


//Desafío de programación #31-a. Create a function that will return the number of words in a text

/*function devuelveNumeroDePalabras (texto){
    let cantDePalabras = 0;
    texto = texto.trim();
    
    if(texto.length>0 && (!esSeparador(texto[0]))){
        cantDePalabras++;
    }
    
    for (let i=1; i<texto.length; i++){
        
        let segundo = texto[i];
        let primer = texto[i-1];
        if(!esSeparador(segundo) && (esSeparador(primer))){
            cantDePalabras++;
        }
    }
    return cantDePalabras++;
}

function esSeparador(unChar){
    let arregloDeSeparadores = [',', ';', ' ', '-', '.'];
    return arregloDeSeparadores.includes(unChar);
    
}

let texto = "  hola como . estan ";
console.log(devuelveNumeroDePalabras(texto));*/


/*function devuelveNumeroDePalabras (texto){
    let cantDePalabras = 0;
    texto = texto.trim();
    for(let i=0; i<texto.length; i++){
        if(texto[i] === " "){
            cantDePalabras++;
        }
    }
    return cantDePalabras++;
}*/


//Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text


/*function hacerMayusculaPrimerLetra (texto){
    let texto2 = "";
    //if((texto.length > 0) && (!esSeparador(texto[0]))){
   //     texto2[0] = texto[0].toUpperCase();
   // }
    for(let i=0; i<texto.length; i++){
        let segundo = texto [i];
        let primero = texto [i-1];
        
        if(!esSeparador(segundo) && esSeparador(primero)){
            segundo = segundo.toUpperCase();
        }
        texto2 += segundo;
    }
    return texto2;
}

function esSeparador(unChar){
    let separadores = ['.', ',',' ', '-'];
    return separadores.includes(unChar);
}

let miTexto ="hola amigos";
console.log(hacerMayusculaPrimerLetra(miTexto));*/


//Coding challenge #33. Calculate the sum of numbers received in a comma delimited string. Ver luego como hacer para que también reconozca espacios-

/*function colocarLosNumerosEnUnArreglo(cadenaDeNumeros){
    let arregloDeNumeros = [];
    let n = "";
    //let i = 0;
    for (let i=0; i<cadenaDeNumeros.length; i++){
        if (cadenaDeNumeros[i] != ","){
            n += cadenaDeNumeros[i];
        }
        else{
            arregloDeNumeros.push(n);
            n="";
        }
    }
    arregloDeNumeros.push(n);
    return arregloDeNumeros;
}

function pasarDeStringAEnteros(cadenaDeNumeros){
    for(let i = 0; i< cadenaDeNumeros.length; i++){
        cadenaDeNumeros[i] = parseInt(cadenaDeNumeros[i], 10);
    }
    return cadenaDeNumeros;
}


function sumaValores(cadenaDeNumeros){
    let resultado = 0;
    
    cadenaDeNumeros = colocarLosNumerosEnUnArreglo(cadenaDeNumeros);
    cadenaDeNumeros = pasarDeStringAEnteros(cadenaDeNumeros);
    
    for(let i=0; i<cadenaDeNumeros.length; i++){
        resultado += cadenaDeNumeros[i];
    }
    return resultado;
}

let misNumeros = "115,3,9,120";


console.log("La suma de todos los valores del string es de "+sumaValores(misNumeros));*/

/*console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{
    var ar = s.split(",");
    
    var sum = 0;
    
    for(var n of ar)
    {
        sum += parseFloat(n);
    }
    
    return sum;
}*/

/*function sumaArreglo(cadenaDeNumeros){
    cadenaDeNumeros = cadenaDeNumeros.split(",");
    let suma = 0;
    
    for (let i =0; i<cadenaDeNumeros.length; i++){
        suma += parseInt(cadenaDeNumeros[i], 10);
    }
    return suma;
}

let unParDeNumeros = "1,115,20,4";
console.log(sumaArreglo(unParDeNumeros));*/


//Desafío de programación #34. Create a function that will return an array with words inside a text

/*function devuelvePalabras(texto){
    let arreglo = [];
    texto.trim();
    arreglo = texto.split(" ");
    return arreglo;
}

let texto ="HOLA muchachos como estan todos";
console.log(devuelvePalabras(texto));*/


//Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array


/*let datos = "Adriana;Gonzalez;1993\n" + 
            "Gustavo;Cerati;1958\n" + 
            "Janis;Joplin;1950";

let arreglo = csvToArray(datos);
console.log(JSON.stringify(arreglo));

function csvToArray(data)
{
    let arreglo1 = data.split("\n");

    for(let i = 0; i < arreglo1.length; i++)
    {
        let arreglo2 = arreglo1[i].split(";");
        arreglo1[i] = arreglo2;
    }
    
    return arreglo1;
}
*/
//Desafío de programación #36. Create a function that converts a string to an array of characters


/*function devuelveChars(texto){
    let arreglo = [];
    
    for(let i=0; i<texto.length; i++){
        arreglo.push(texto[i]);
    }
    return arreglo;
}
let miTexto = "HOLA COMO ? Soy yi";
console.log(devuelveChars(miTexto));
*/


/* otra forma:

console.log(getChars("I like JavaScript"));

function getChars(s)
{
    return Array.from(s);
}
*/


//Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character



/*function convierteStringEnAscii(texto){
    let arregloDeCaracteres = []
    for(let i=0; i<texto.length; i++){
        arregloDeCaracteres.push(texto.charCodeAt(i));
    }
    return arregloDeCaracteres;  
}

let miTexto = "ME re gusta JavaScript";
console.log(convierteStringEnAscii(miTexto));*/


//Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string

/*console.log(convierteDeCodigoAString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));

function convierteDeCodigoAString(arreglo)
{
    return String.fromCharCode(...arreglo);
}*/

//Desafío de programación #39. Implement the Caesar cypher


/* ARREGLARLO!

function cifradoCesar(texto){
    let abecedario ='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let textoCifrado = [];
    for(let i=0; i<texto.length;i++){
        let indice = abecedario.indexOf(texto[i]);
        textoCifrado.push(abecedario[indice+3]);
    }
    return textoCifrado;
}
let mensaje = "HOLA";
console.log(cifradoCesar(mensaje));*/

//Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers

/*function ordenaArreglo(numeros){

    for(let i=0; i<numeros.length-1; i++){
        for(let j=0; j<numeros.length-i-1;j++){
            if(numeros[j]>numeros[j+1]){
                let aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }
        
    
    return numeros;
}

let arregloDeNumeros = [8, 7, 1, 4];
console.log(ordenaArreglo(arregloDeNumeros));
*/


//Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates

/*function calculaDistancias (x1, y1, x2, y2){
    let l1 = x2-x1;
    let l2 = y2-y1;
    return Math.sqrt(l1*l1 + l2-l2);
}
console.log(calculaDistancias(100, 100, 400, 300));*/

//Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
//console.log(seCruzan(200, 200, 100, 300, 300, 50));

/*function seCruzan(circulo1X, circulo1Y, circulo1R, circulo2X, circulo2Y, circulo2R)
{
    return distancia(circulo1X, circulo1Y, circulo2X, circulo2Y) <= circulo1R + circulo2R;
}

// Calculate the distance between the two specified points
function distancia(x1, y1, x2, y2)
{
    var l1 = x2 - x1;
    var l2 = y2 - y1;
    
    return Math.sqrt(l1 * l1 + l2 * l2);
}
*/

/*function meDevuelveUnaColumna(arreglo, numeroColumna){
    let nuevoArreglo = [];
    for(let i=0; i<arreglo.length; i++){
        nuevoArreglo.push(arreglo[i][numeroColumna]);
    }
    return nuevoArreglo;
}

let miMatriz = [["HOLA", 1],["CHAU", 2], ["Bueno",4]];
console.log(meDevuelveUnaColumna(miMatriz, 0))*/


//Coding challenge #44. Create a function that will convert a string containing a binary number into a number

/*console.log(binarioANumero("11111111"));

function binarioANumero(binario)
{
    return parseInt(binario, 2);
}*/

//Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)


/*var ar = [1, 2, [15, [23], [5, 12]], [100]];

println(sumArray(ar));

function sumArray(ar)
{
    var sum = 0;
    
    for(var el of ar)
    {
        if (Array.isArray(el))
        {
            el = sumArray(el);
        }
        
        sum += el;
    }
    
    return sum;
}
*/



/*var suma = 0;

function sumarNumeros (arreglo){
    
    for(let i = 0; i< arreglo.length; i++){
        if(arreglo[i].length == undefined){// es decir, si no es un arreglo lo que hay en esa posición
            suma += arreglo[i];
        }
        else{
            //for(let j = 0; j< arreglo[i].length; j++){
            //    suma += arreglo[i][j];
           // }
            sumarNumeros(arreglo[i]);
            
        }
    }
    
    return suma;
}

let numeros = [1, 2, [3, [23], [5, 12]], [100]];
console.log(sumarNumeros(numeros));*/

//Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers

/*var nuevoArreglo = [];

function encontrarElMaximo (arreglo){
    let miArreglo = pasarTodoAUnArreglo(arreglo);
    let maximo = Math.max(...miArreglo);
    return maximo;
    
}


function pasarTodoAUnArreglo(arreglo){
    
    for (let i=0; i<arreglo.length;i++){
        if(arreglo[i].length == undefined){
            nuevoArreglo.push(arreglo[i]);
        }
        else{
            pasarTodoAUnArreglo(arreglo[i]);
        }
    }
    return nuevoArreglo;
}

let numeros = [1, 2, [3, [23], [120, 12]], [100]];
console.log(encontrarElMaximo(numeros));*/

//Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array

/*var nuevoArreglo = [];
function pasarTodoAUnArreglo(matriz){
    for(let i=0; i<matriz.length; i++){
        if(matriz[i].length == undefined){
            nuevoArreglo.push(matriz[i]);
        }
        else{
            pasarTodoAUnArreglo(matriz[i]);
        }
    }
    return nuevoArreglo;
}

let misNumeros = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
console.log(pasarTodoAUnArreglo(misNumeros));
*/

//Coding challenge #48. Create a function to return the longest word(s) in a string

/*function devuelvePalabraMasLarga (texto){
    let palabras = texto.split(" ");
    let mayor = 0;
    let palabraMayor = "";
    
    for(let i = 0; i<palabras.length; i++){
        if(palabras[i].length > mayor){
            mayor = palabras[i].length;
            palabraMayor = palabras[i];
        }
    }
    return palabraMayor;
}

let miTexto = "Hola Amigos soy yo";
console.log(devuelvePalabraMasLarga(miTexto));*/


//Coding challenge #49. Shuffle an array of strings


/*function leDaCualquierOrden(palabras)
{
    for(var i = palabras.length - 1; i > 0; i--)
    {
        var aleatorio = randomInt(0, i - 1);
        
        var aux = palabras[i];
        palabras[i] = palabras[aleatorio];
        palabras[aleatorio] = aux;
    }
    
    return palabras;
}

// Get a random int between min and max (both included)
function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let palabras = ["HOLA", "ESTOY", "CREO", "QUE", "BIEN"];

console.log(leDaCualquierOrden(palabras));*/


//Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

/*function devuelveAleatorios (numero){
    let arregloDeAleatorios = [];
    let tope = numero;
    for(let i = 0; i<tope; i++){
        arregloDeAleatorios.push(getRandomInt(1,numero));
    }
    return arregloDeAleatorios;
    
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(devuelveAleatorios(15));*/

//Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.


/*function devuelveVecesRepetidas(texto){
    let textoSinEspacios = texto.split (" ");
    let caracteres = [];
    
    for(let i=0; i<textoSinEspacios.length; i++){
        caracteres.push(textoSinEspacios[i]);
    }
    for(let j=0; j<textoSinEspacios.length; j++){
        for(let n=0; n<textoSinEspacios[i].length; n++){
            
        }
    }
   
    return caracteres;
}

let miTexto ="Hola como estan";
console.log(devuelveVecesRepetidas(miTexto));*/

//OPERADORES TERNARIOS

/*function verificarEdad(edad = 18){
    if(edad>=18){
        console.log("SOS MAYOR, PODES ENTRAR");
    }
    else{
        console.log("CHE, SOS MENOR");
    }
}
verificarEdad(15);// SI LO dejo vacio al parametr por defecto lo va a poner en 18.*/
//Operadores ternarios
// (condicion) ? izq : der;

/*function verificarEdad(edad = 18){
    edad>=18 ? console.log("sos mayor, entra") : console.log ("SOS muy menor");// el operador ternario tiene una condicion en este caso edad>=18 si eso se cumple ejecuta lo que esta del lado izquierdo de los dos puntos sino ejecuta lo del lado derecho.
}

verificarEdad(13);*/


