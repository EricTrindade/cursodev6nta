/**
 * 
 */


function calctria(){
	var base = parseFloat(document.getElementById("base").value);
	var altura = parseFloat(document.getElementById("altura").value);
	var resTria= base*altura;
	document.getElementById("resTria").value =resTria;
}


function calcQua(){
	var lado = parseFloat(document.getElementById("Lado").value);
	var resQuad= lado*lado;
	document.getElementById("resQuad").value = resQuad;
}
