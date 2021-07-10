/* Bravo Margarita
   ejercicio tp 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma= precioUno + precioDos + precioTres;

	alert(" La suma total de los tres precios es : " + suma );


}
function Promedio () //promedio.toFixed para sacar los decimales, va junto al alert en la variable
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	promedio= (precioUno + precioDos + precioTres) / 3;

	alert("El promedio de los precios es : " + promedio);


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var iva;
	var suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma = (precioUno + precioDos + precioTres);

	iva = (precioUno + precioDos + precioTres) * 21 /100;

	precioFinal= suma + iva;

	alert(" El precio final más el iva es : " + precioFinal);
}