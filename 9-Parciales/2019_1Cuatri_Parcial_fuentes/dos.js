/* Bravo Margarita
	parcial 02*/
function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var pesoTotal;
  var promedio;
  var mensaje;


  nombre1=prompt("Ingrese su nombre");
  nombre2=prompt("Ingrese el nombre de su pareja");

  peso1=prompt("Ingrese su peso");
  peso1=parseInt(peso1);

  peso2=prompt("Ingrese el peso de su pareja");
  peso2=parseInt(peso2);

  pesoTotal= peso1 + peso2;

  promedio= pesoTotal / 2;

  mensaje= ("Ustedes se llaman : " + nombre1 + " y " + nombre2 + 
  	" pesan "  + peso1 + " y " + peso2 + " kilos " + " que sumados son " + pesoTotal + 
  	" y el promedio de peso es : " + promedio );

  //mensaje += continuo con el mensaje abajo
  alert(mensaje);






}
