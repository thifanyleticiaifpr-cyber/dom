function calcularPA(){
    var a1, result, n
    const termos = [] /**cont declara uma variável que não pode ser reescrita */

    a1 = document.getElementById("primeiro_termo").value
    result = document.getElementById("razao").value 
    n = document.getElementById("quant_termos").value 

    for(let  i = 0; i < n; i++){
        a1 = parseFloat(a1)
        result = parseFloat(result)
        n = parseInt(n)
        termos.push(a1 + i *result)
    }

    document.getElementById("resultado").innerHTML = `A Progressão Aritmética é: ${termos.join(", ")}`

}