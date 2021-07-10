
/*
Autor: Bravo Margarita 
Enunciado ejer03

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//ingreso
	nombreIngresado=document.getElementById('txtIdNombre').value;

	//salida
	alert("Su nombre es: " + nombreIngresado);
}