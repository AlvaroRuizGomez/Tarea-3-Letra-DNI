/**
 * POLICIA saber la letra de tu dni
 */

// --------   Scope Global  -----------
// Array
const LETRAS_DNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']

var validarOk = true;
var resto = 0
var numeroDNI = 0

// --------   Scope Function  ---------
function validarEntrada(){
    switch(true) {
        case isNaN(numeroDNI):
        case numeroDNI < 0:
        case numeroDNI.length != 8:
        case numeroDNI.length == '':
            alert('ERROR!!!')
            validarOk = false
            break
        default:
            resto = numeroDNI % 23
            mostrarDNI()
            break
    }
}

function mostrarDNI() {
    alert(`DNI: ${numeroDNI}-${LETRAS_DNI[resto]}`)
    validarOk = true
}

// --------   Scope Code  ---------
// preguntar al usuario, el numero de su dni la primera vez antes de entrar al bucle.
numeroDNI = prompt("No sabes tu letra de DNI? Escribe aquí tus números. Para terminar introduzca : salir")

// bucle mientras se quiere introducir datos
while(validarOk = true && numeroDNI != 'salir') {
    validarEntrada() 
    numeroDNI = prompt("No sabes tu letra de DNI? Escribe aquí tus números. Para terminar introduzca : salir")
}
