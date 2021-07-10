/* Bravo Margarita
	ejercicio 02

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var total;
	var cantidadAlambre;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	total = ancho + ancho + largo + largo;

	cantidadAlambre = total * 3;

	alert(" El total de alambre a comprar es : " + cantidadAlambre);

}
function Circulo () 
{
	var radioTerreno;
	var cantidadAlambre;

	radioTerreno=document.getElementById('txtIdRadio').value;
	radioTerreno=parseInt(radioTerreno);

	radioTerreno = radioTerreno * 3.14;

	cantidadAlambre = (radioTerreno * 2) * 3; 

	alert("La cantidadde alambre necesario es  : " + cantidadAlambre);


}
function Materiales () 
{
	var largo;
	var ancho;
	var bolsasCemento;
	var bolsasCal;
	var metrosCuadrados;
	var totalMateriales;


	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	metrosCuadrados = largo * ancho;

	bolsasCemento = metrosCuadrados * 2;
	bolsasCal = metrosCuadrados * 3;

	alert("Se necesitan : " + bolsasCemento + " bolsas de cemento " + " y " + bolsasCal + "  bolsas de cal ");




}