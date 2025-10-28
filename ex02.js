function converter()
{

    alert("funçao funfou")
    var vr, vc, conv

    vr=document.getElementById("valorReais").value
    vc=document.getElementById("cotacao").value

    conv = (parseFloat(vr)/parseFloat(vc)).toFixed(2)
   

   document.getElementById("resultado").innerHTML=`Conversão ${conv}`
}