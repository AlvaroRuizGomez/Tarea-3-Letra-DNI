/**
 * POLICIA saber la letra de tu dni
 */

//  Base de datos
// Array
const LETRAS_DNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
// preguntar al usuario, el numero de su dni
let numeroDNI = prompt("No sabes tu letra de DNI? Escribe quí tus números")

// bucle
while(numeroDNI != 'salir') {
    // resultado de la letra 
    const resto = numeroDNI % 23
    // que tipo de datos permitimos o no
    switch(true) {
        case numeroDNI < 0:
        case numeroDNI.length != 8:
        case numeroDNI.length == '':
            alert('ERROR!!!')
            numeroDNI = 'salir'
            break
        default:
            alert(`DNI: ${numeroDNI}-${LETRAS_DNI[resto]}`)
            numeroDNI = 'salir'
            break
    }
}