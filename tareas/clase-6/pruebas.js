function probarValidarCantidadDeIntegrantes() {
    console.assert(validarCantidadDeIntegrantes(-1) === false, 'validarCantidadDeIntegrantes no validó cuando ingresa num negativos');
    
    console.assert(validarCantidadDeIntegrantes(5)=== true, 'validarCantidadDeIntegrantes no validó cuando ingresa una cant valida');
}

probarValidarCantidadDeIntegrantes();