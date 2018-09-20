/**
 * 
 */

var resultado;

function numeros(){
	var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
}

function MosResultado(){
	var elementoResultado = document.getElementById("resultado");
	elementoResultado.innerHTML = "Resultado: "+ resultado;
	}


function soma() {
	numeros();
	resultado = parseFloat(n1)+parseFloat(n2);
	MosResultado();
	
}





