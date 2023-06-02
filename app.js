/* Operaciones */

/* Suma */
const sumar = (a, b) =>{
    return a + b
}

/* Resta */
const restar = (a, b) =>{
    return a - b
}

/* Multiplicacion */
const multiplicar = (a, b) =>{
    return a * b
}

/* Division */
const dividir = (a, b) =>{
    return a / b
}

const calcular = (a, b, operacion) =>{
    if(operacion === "+"){
        return alert(sumar (parseInt(a), parseInt(b)))
    } else if(operacion === "-"){
        return alert(restar (parseInt(a), parseInt(b)))
    } else if(operacion === "*"){
        return alert(multiplicar (parseInt(a), parseInt(b)))
    } else{
        return alert(dividir (parseInt(a), parseInt(b)))
    }
}

let pregunta = prompt("Quieres usar la calculadora?")
while(pregunta.toLowerCase() === "si"){
    a = prompt("Escribi un numero")
    b = prompt ("Escribi otro numero")
    operacion = prompt("Escribi una operacion")
    alert(calcular(a, b, operacion))
    pregunta = prompt("Quieres usar otra vez la calculadora?")
}
alert("El programa ha finalizado")