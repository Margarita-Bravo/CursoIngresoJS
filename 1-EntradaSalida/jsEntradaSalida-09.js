/*
Bravo Margarita
ejercicio 09 bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	var porcentaje;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	porcentaje=prompt("Que porcentaje desea sacar?");

	aumento= sueldo * porcentaje / 100;
	resultado=sueldo + aumento;

	document.getElementById('txtIdResultado').value=resultado;
	resultado=parseInt(resultado);


}
