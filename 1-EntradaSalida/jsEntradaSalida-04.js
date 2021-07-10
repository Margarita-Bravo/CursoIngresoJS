/* 
Autor: Bravo Margarita
Enunciado ejer 04 bis

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre; 
	var apellido;  
	var mensaje;
	
	nombre=prompt("ingrese su nombre", "Natalia, natalia");
	apellido=prompt("ingrese su apellido", "ej Perez");

	mensaje="su nombre y apellido es "+ nombre + apellido;

	document.getElementById('txtIdNombre').value=nombre;

 }
