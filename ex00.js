function somar( )
{
    var v1, v2, r

    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value

    if(v1=="" || v2=="")
    {
        alert("Os campos devem ser preenchidos")
    }
    else{
        r=parseFloat(v1)+parseFloat(v2)
        document.getElementById("resultado").innerHTML=`O resultado da soma é ${r}`

    }
}

function multiplicar (){
    var v1, v2, rM
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value

    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }
    else{
        rM=parseFloat(v1)*parseFloat(v2)
        document.getElementById("resultadoM").innerHTML=`O resultado da multiplicação é${rM}`
    }
}
function dividir (){
    var v1, v2, rD
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value

    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }
    if(v2==0)
    {
        alert("Digite outro valor")
    }
    else{
        rD=parseFloat(v1)/parseFloat(v2)
        document.getElementById("resultadoD").innerHTML=`O resultado da divisão é${rD}`
    }
}

function subtrair( )
{
    var v1, v2, rS

    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value

    if(v1=="" || v2=="")
    {
        alert("Os campos devem ser preenchidos")
    }
    else{
        rS=parseFloat(v1)-parseFloat(v2)
        document.getElementById("resultadoS").innerHTML=`O resultado da subtração é ${rS}`

    }
}