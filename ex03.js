function calcularIMC(){
    var peso, altura, result

    peso=document.getElementById("peso").value 
    altura=document.getElementById("altura").value

        

        if(peso=="" || altura==""){
            alert("Preencha todos os campos")
        }else{
            result=parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))

             if(result<18.5){
                document.getElementById("IMC").style.color= 'blue'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
            }
            if(result>=18.5 & result<24.9){
                document.getElementById("IMC").style.color= 'green'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
            }
            if(result>=24.9 & result<=29.9){
                document.getElementById("IMC").style.color= 'yellow'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
                
            }if(result>30){
                document.getElementById("IMC").style.color= 'red'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
                
            } 





        }

    }