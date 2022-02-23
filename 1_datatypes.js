console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var num1=1;
var num2=1;
if (num1==num2){
    console.log("Las dos variables tienen el mismo contenido");
}else{
    console.log("Son diferentes");
}

//crear dos variables con el distinto contenido y comparar si ambas son iguales
var num3=1;
var num4=3;
if (num3==num4){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var cadenanum ="1";
var numnum=1;
var num3=1;
var num4=3;
if (cadenanum==numnum){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}
//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
if (cadenanum===numnum){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}
//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

if (array1==array2){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales

//ahora comparar el contenido de dichos arrays utilizando un bucle
var sonIguales=true;
for (let i = 0; i < array1.length; i++) {
    if(array2[i] != array2[i]){
        sonIguales=false;
        break;
    }
}
console.log(sonIguales);
// crear un objeto "usuario", con tres propiedades
var Objeto = new Object();
Objeto.color_de_pelo = 'Negro';
Objeto.altura=1.70;
Objeto.color_de_ojos= 'Verde';

console.log(Objeto);



/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
var gravedad = Math.round(9.8);
console.log(gravedad);
//incrementar una variable con otra variable con el operador  =+
num3+=num4;
console.log(num3);

//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)

//eleva un número a otro utilizando **
console.log(10**2);
//eleva un número a otro utilizando un bucle
var num=10;
var numCuadrado=2;
var numfinal=1;
for (let i = 1; i <= numCuadrado; i++) {
    numfinal=numfinal*num;
}
console.log(numfinal);
// generar un número aleatorio del 0 al 100
var numAleatorio = (Math.random()*(100+1));
console.log(numAleatorio.toFixed(0));

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var arrayAleatorios = [];
var valorMax=0;
var valorMin=100;
for (let index = 0; index < 10; index++) {
    arrayAleatorios[index]=parseInt((Math.random()*101));
    if (valorMax<arrayAleatorios[index]){
        valorMax=arrayAleatorios[index];
    }
    if (valorMin>arrayAleatorios[index]){
        valorMin=arrayAleatorios[index];
    }
}
console.log(arrayAleatorios.toString());
console.log("El valor mayor es " + valorMax);
console.log("El valor menor es " + valorMin);

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
console.log(Math.max.apply(Math, arrayAleatorios));
console.log(Math.min.apply(Math, arrayAleatorios));
/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
var caracteres = ['A', 'b'];
for (let index = 0; index < caracteres.length; index++) {
    caracteres[index]= caracteres[index].toLowerCase();
}
console.log(caracteres.toString());
for (let index = 0; index < caracteres.length; index++) {
    caracteres[index]= caracteres[index].toUpperCase();
}
console.log(caracteres.toString());
//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var frase = 'Pascal es un lenguaje de programación moderno'
console.log(frase.replace('Pascal', 'Javascript'));
//crear una variable con frase/cadena de caracteres y comprobar la longitud
var cadena = [1, 2, 3, 4, 5]
console.log(cadena.length);
//eliminar "script" de la palabra Javascript con el método substr
var eliminar = 'Javascript'
eliminar=eliminar.substr(0,4);
console.log(eliminar);

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
var frase2 = 'Espero que esto me sirva para algo';
var comprobacion = frase2.search('algo');
if (comprobacion>=0){
    console.log("La palabra algo está en la frase");
}else{
    console.log("La palabra algo no está en la frase");
}