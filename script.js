function calcularFatorial() {
	var num = document.getElementById("num").value;
	var resultado = 1;

	for (var i = 2; i <= num; i++) {
		resultado *= i;
	}

	document.getElementById("resultado").innerHTML = "Núi Fatorial: " + resultado;
}