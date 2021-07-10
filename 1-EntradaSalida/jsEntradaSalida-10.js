/*
Bravo Margarita
ejercicio 10 bis

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	var porcentaje;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	porcentaje=prompt("Que porcentaje de descuento quiere?")

	descuento= importe * porcentaje /100;

	resultado= importe - descuento;

	document.getElementById('txtIdResultado').value=resultado;
}
