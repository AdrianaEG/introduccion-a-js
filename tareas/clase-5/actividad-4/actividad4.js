//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const nodeListConNumeros = document.querySelectorAll('li');
let arregloDeNumeros = [];

//paso el nodeList a un array
for(let i=0; i<nodeListConNumeros.length; i++){
    arregloDeNumeros[i] = Number(nodeListConNumeros[i].innerText);
    //console.log(arregloDeNumeros[i]);
}

function calcularPromedio(){
    let suma=0;
    for(let i=0; i<arregloDeNumeros.length; i++){
        suma = suma + arregloDeNumeros[i];
    }
    return (suma/(arregloDeNumeros.length));
}

function encontrarMenorNumero(){
    let menor = arregloDeNumeros[0];
    for(let i=0; i<arregloDeNumeros.length; i++){
        if(arregloDeNumeros[i]<menor){
            menor = arregloDeNumeros[i];
        }
    }
    return menor;
}

function encontrarMayorNumero(){
    let mayor = arregloDeNumeros[0];
    for(let i=0; i<arregloDeNumeros.length; i++){
        if(arregloDeNumeros[i]>mayor){
            mayor = arregloDeNumeros[i];
        }
    }
    return mayor;
}

function encontrarMasRepetido(){
    let cantRepeticion = 0;
    let masRepetido = [0,0];
    for(let i=0; i<arregloDeNumeros.length/2; i++){
        for(let j=arregloDeNumeros.length-1; j>=arregloDeNumeros.length/2; j--){
            if(arregloDeNumeros[i] === arregloDeNumeros[j]){
                cantRepeticion++;
            }
        }
        
        if(cantRepeticion>masRepetido[1]){
            masRepetido[0]=arregloDeNumeros[i];
            masRepetido[1]= cantRepeticion;
        }
        cantRepeticion = 0;
    }
    
    return masRepetido[0];
    
}


document.querySelector('#muestra-promedio').innerText += calcularPromedio();

document.querySelector('#muestra-menor').innerText += encontrarMenorNumero();//document.querySelector('#muestra-menor').innerText + encontrarMenorNumero();

document.querySelector('#muestra-mayor').innerText += encontrarMayorNumero();

document.querySelector('#muestra-mas-repetido').innerText += encontrarMasRepetido();