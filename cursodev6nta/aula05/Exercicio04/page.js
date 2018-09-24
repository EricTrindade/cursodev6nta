/**
 * 
 */

function colocarCarrinho(){
	var produto = document.getElementById("produto").value;
	var quantidade = document.getElementById("quantidade").value;
	document.getElementById("tabProduto").value = produto;
	alert(produto);
}

function  calcPreco(){
	var produto = document.getElementById("produto").value;
	if(produto == 'pão'){
		alert("R$2,00");
	}else{
		alert("R$4,00");
	}
}
