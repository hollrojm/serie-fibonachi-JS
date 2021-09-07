
function fibonacci(){ 
	var i = 0;
	var valor = document.getElementById('number').value;
	var arreglo = [];
	valor = parseInt(valor);
	for (i; i < valor; i++){
		if(i==0){
			arreglo.push(0);
		}
		else if(i==1){
			arreglo.push(1);
		}
		else{
			arreglo.push(arreglo[i-1] + arreglo[i-2]);
		}
	}
	document.getElementById("resultado").innerHTML ="<h3>"+arreglo+"</h3>";
}