/* declaración de funciones */

function ingresoACuenta() {
    while (usuarioNuevo.toUpperCase() != usuario) {
        usuarioNuevo = prompt("Su e-mail no se encuentra registrado. Por favor, vuelva a ingresarlo para poder registrarse.");
        usuario = usuarioNuevo.toUpperCase();
    }
    if (usuarioNuevo.toUpperCase() == usuario) {
        contrasena = prompt("Ingrese su contraseña");
        alert("¡Le damos la bienvenida a Cinema Paradiso!");
    }
}

function seleccionCine() {
    while (cine.toUpperCase() != "A" && cine.toUpperCase() != "B" && cine.toUpperCase() != "C") {
        cine = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del complejo al que deseas ir: \n A. Belgrano \n B. Palermo \n C. Recoleta");
    }
    if (cine.toUpperCase() == "A") {
        cine = "Belgrano";
    }
    if (cine.toUpperCase() == "B") {
        cine = "Palermo";
    }
    if (cine.toUpperCase() == "C") {
        cine = "Recoleta";
    }
    return cine;
}

function seleccionPelicula() {   
    while (pelicula.toUpperCase() != "A" && pelicula.toUpperCase() != "B" && pelicula.toUpperCase() != "C" && pelicula.toUpperCase() != "D" && pelicula.toUpperCase() != "E" && pelicula.toUpperCase() != "F" && pelicula.toUpperCase() != "G" && pelicula.toUpperCase() != "H" && pelicula.toUpperCase() != "I" && pelicula.toUpperCase() != "J") {
        pelicula = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción de la película que queres ver: \n A. El Padrino \n B. El Rey León \n C. Forrest Gump \n D. Jurassic Park \n E. La vida de bella \n F. Los siete pecados capitales \n G. Mi pobre angelito \n H. Quien quiere ser millonario? \n I. Rocky \n J. Volver al futuro");
    }
    if (pelicula.toUpperCase() == "A") {
        pelicula = "El Padrino";
    }
    if (pelicula.toUpperCase() == "B") {
        pelicula = "El Rey León";
    }
    if (pelicula.toUpperCase() == "C") {
        pelicula = "Forrest Gump";
    }       
    if (pelicula.toUpperCase() == "D") {
        pelicula = "Jurassic Park";
    }
    if (pelicula.toUpperCase() == "E") {
        pelicula = "La vida de bella";
    }
    if (pelicula.toUpperCase() == "F") {
        pelicula = "Los siete pecados capitales";
    }
    if (pelicula.toUpperCase() == "G") {
        pelicula = "Mi pobre angelito";
    }
    if (pelicula.toUpperCase() == "H") {
        pelicula = "Quien quiere ser millonario?";
    }
    if (pelicula.toUpperCase() == "I") {
        pelicula = "Rocky";
    }
    if (pelicula.toUpperCase() == "J") {
        pelicula = "Volver al futuro";
    }  
    return pelicula;
}

function seleccionFormato() {
    while (formato.toUpperCase() != "A" && formato.toUpperCase() != "B" && formato.toUpperCase() != "C") {
        formato = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del formato que prefiera: \n A. 2D \n B. 3D \n C. 4D");
    }
    if (formato.toUpperCase() == "A") {
        formato = "2D";
    }
    if (formato.toUpperCase() == "B") {
        formato = "3D";
    }
    if (formato.toUpperCase() == "C") {
        formato = "4D";
    }
    return formato;
}

function seleccionIdioma() {
    while (idioma.toUpperCase() != "A" && idioma.toUpperCase() != "B") {
        idioma = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción para el idioma: \n A. Doblada \n B. Subtitulada");
    }
    if (idioma.toUpperCase() == "A") {
        idioma = "Doblada";
    }
    if (idioma.toUpperCase() == "B") {
        idioma = "Subtitulada";
    }
    return idioma;
}

function seleccionDia() {
    while (dia.toUpperCase() != "A" && dia.toUpperCase() != "B" && dia.toUpperCase() != "C" && dia.toUpperCase() != "D" && dia.toUpperCase() != "E" && dia.toUpperCase() != "F" && dia.toUpperCase() != "G") {
        dia = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del día: \n A. LUN 06 de febrero \n B. MAR 07 de febrero \n C. MIE 08 de febrero \n D. JUE 09 de febrero \n E. VIE 10 de febrero \n F. SAB 11 de febrero \n G. DOM 12 de febrero");
    }
    if (dia.toUpperCase() == "A") {
        dia = "LUN 06 de febrero";
    }
    if (dia.toUpperCase() == "B") {
        dia = "MAR 07 de febrero";
    }
    if (dia.toUpperCase() == "C") {
        dia = "MIE 08 de febrero";
    }       
    if (dia.toUpperCase() == "D") {
        dia = "JUE 09 de febrero";
    }
    if (dia.toUpperCase() == "E") {
        dia = "VIE 10 de febrero";
    }
    if (dia.toUpperCase() == "F") {
        dia = "SAB 11 de febrero";
    }
    if (dia.toUpperCase() == "G") {
        dia = "DOM 12 de febrero";
    }
    return dia;
}

function seleccionHora() {
    while (hora.toUpperCase() != "A" && hora.toUpperCase() != "B" && hora.toUpperCase() != "C") {
        hora = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción de la hora que prefiere: \n A. 18 hs \n B. 20 hs \n C. 22 hs");
    }
    if (hora.toUpperCase() == "A") {
        hora = "18 hs";
    }
    if (hora.toUpperCase() == "B") {
        hora = "20 hs";
    }
    if (hora.toUpperCase() == "C") {
        hora = "22 hs";
    }
    return hora;
}

function seleccionCantidad() {
    while (cantidad.toUpperCase() != "A" && cantidad.toUpperCase() != "B" && cantidad.toUpperCase() != "C" && cantidad.toUpperCase() != "D" && cantidad.toUpperCase() != "E" && cantidad.toUpperCase() != "F") {
        cantidad = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción de la cantidad de entradas que desea: \n A. 1 \n B. 2 \n C. 3 \n D. 4 \n E. 5 \n F. 6");
    }
    if (cantidad.toUpperCase() == "A") {
        cantidad = "1";
    }
    if (cantidad.toUpperCase() == "B") {
        cantidad = "2";
    }
    if (cantidad.toUpperCase() == "C") {
        cantidad = "3";
    }       
    if (cantidad.toUpperCase() == "D") {
        cantidad = "4";
    }
    if (cantidad.toUpperCase() == "E") {
        cantidad = "5";
    }
    if (cantidad.toUpperCase() == "F") {
        cantidad = "6";
    }   
    return cantidad;
}

function seleccionMedioPago(){
    while (medioPago.toUpperCase() != "SI" && medioPago.toUpperCase() != "NO") {
        medioPago = prompt("La respuesta proporcionada no es válida. Para acceder al beneficio del 50% de descuento debe pagar con Banco Santander. Desea abonar por este medio? (SI / NO)");
    }
    if (medioPago.toUpperCase() == "SI") {
        medioPago = "Banco Santander";
        importe = cantidad * 1500 / 2
    }
    if (medioPago.toUpperCase() == "NO") {
        medioPago = "Sin promoción";
        importe = cantidad * 1500
    }
}



/* declaración de variables globales, asignación e invocación de funciones */

let usuario = "";
let contrasena;
let importe;

let usuarioNuevo = prompt("Ingrese su e-mail para acceder a su cuenta");

ingresoACuenta();

let cine = prompt("Ingrese la opción del complejo al que desea ir: \n A. Belgrano \n B. Palermo \n C. Recoleta");

seleccionCine();

let pelicula = prompt("Ingrese la opción de la película que queres ver: \n A. El Padrino \n B. El Rey León \n C. Forrest Gump \n D. Jurassic Park \n E. La vida de bella \n F. Los siete pecados capitales \n G. Mi pobre angelito \n H. Quien quiere ser millonario? \n I. Rocky \n J. Volver al futuro");

seleccionPelicula();

let formato =prompt("Ingrese la opción del formato que prefiera: \n A. 2D \n B. 3D \n C. 4D");

seleccionFormato();

let idioma = prompt("Ingrese la opción para el idioma: \n A. Doblada \n B. Subtitulada");

seleccionIdioma();

let dia = prompt("Ingrese la opción del día: \n A. LUN 06 de febrero \n B. MAR 07 de febrero \n C. MIE 08 de febrero \n D. JUE 09 de febrero \n E. VIE 10 de febrero \n F. SAB 11 de febrero \n G. DOM 12 de febrero");

seleccionDia();

let hora = prompt("Ingrese la opción de la hora que prefiere: \n A. 18 hs \n B. 20 hs \n C. 22 hs");

seleccionHora();

let cantidad = prompt("Ingrese la opción de la cantidad de entradas que desea: \n A. 1 \n B. 2 \n C. 3 \n D. 4 \n E. 5 \n F. 6");

seleccionCantidad();

let medioPago = prompt("El precio de cada entrada es de $1500. Puede acceder al beneficio del 50% de descuento pagando con Banco Santander. Desea abonar por este medio? (SI / NO)");

seleccionMedioPago();



/* muestra del detalle de la compra a través de un alert */

alert("DETALLE DE LA COMPRA: \n Cine: " + cine + "\n Película: " + pelicula + "\n Formato: " + formato + "\n Idioma: " + idioma + "\n Día: " + dia + "\n Hora: " + hora + "\n Cantidad: " + cantidad + "\n Precio total a pagar: $ " + importe);



/* PRUEBAS */

console.log(usuario);
console.log(contrasena);
console.log(cine);
console.log(pelicula);
console.log(formato);
console.log(idioma);
console.log(dia);
console.log(hora);
console.log(cantidad);
console.log(importe);

console.log("DETALLE DE LA COMPRA: \n Cine: " + cine + "\n Película: " + pelicula + "\n Formato: " + formato + "\n Idioma: " + idioma + "\n Día: " + dia + "\n Hora: " + hora + "\n Cantidad: " + cantidad + "\n Precio total a pagar: $ " + importe);
