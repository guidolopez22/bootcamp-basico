
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salidaPar")
let entradaMultiplo = document.getElementById("entradaMultiplo")
let numeroEjercicioEsPar = 0
let numeroMultiplo = 1
entradaUsuario.addEventListener("input",(evento)=>{
    numeroEjercicioEsPar = evento.target.value
}

    if(entradaFuncion%2==0){
        return "es par"
    }else{
        return "no es par"
    }
}

btncalcular.addEventListener("click",()=>{
    resultado = esPar(numeroEjercicioEsPar)
    console.log(resultado)
    let hijo = document.createElement("li")
    hijo.innerHTML = numeroEjercicioEsPar + " " + resultado
    salidaPar.appendChild(hijo)
})