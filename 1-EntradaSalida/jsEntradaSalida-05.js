/*
Autor: Bravo Margarita
Enunciado ejer 05 bis

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	var mensaje;

	apellido=prompt("Ingrese su apellido", "ejemplo Perez");
	nombre= document.getElementById('txtIdNombre').value;
	edad= document.getElementById('txtIdEdad').value;
	

	mensaje="Usted se llama " + nombre + " su apellido es " + apellido + " y tiene " + edad + " años ";

	/*mensaje="uested se llama";
	mensaje=mensaje+nombre;
	mensaje=mensaje+ "y tiene";
	mensaje=mensaje+edad;
	mensaje=mensaje+"años";

	var nombre;
	var edad;
	nombre="José";
	edad="66";
	//alert("Usted se llama José y tiene 66 años");
	mensaje="Usted se llama "+nombre+" y tiene "+edad+" años";
	alert(mensaje);

	*/
	
	alert(mensaje);
}

