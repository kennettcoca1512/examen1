


function Calcular_temp(){
    const numero = document.getElementById("tem").value;


    const resultado =(parseInt(numero)-32)*(5/9);
   
    document.getElementById("resultado").innerHTML =resultado;


    document.getElementById("tem").value ="";
    alert("La temperatura calculada es" +resultado + "C")
}
