console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios básicos introductorios a Javascript");

//Crear una variable para almacenar tu nombre
var nombre = "Alejandro ";
//Crear una variable para almacenar tus apellidos
var apellido = "García Álvarez"
//Crear una variable para almacenar tu edad
var edad = 20;
//Almacenar en una constante tu nombre y apellidos
var nombreCompleto = nombre+apellido;
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Hola, mi nombre es: " + nombreCompleto)
console.log(`Hola, mi nombre es: ${nombreCompleto}`)
//Muestra por pantalla el valor de una constante vacía
var constanteVacia ="";
console.log(constanteVacia)
//Muestra por pantalla el valor de una constante sin definir

//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
nombre= "Pepe";
console.log(nombre);
//Comprueba el tipo de dato de la variable con tu edad
console.log(typeof edad);
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;
if (edad>=18){
    mayorDeEdad = true;
}
console.log("Es mayor de edad: "+mayorDeEdad);
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorEdad = false;
if (edad>=18){
    mayorEdad = true;
}
console.log("Es mayor de edad: "+mayorEdad);
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1 = 2;
var num2 = 3;
var suma= num1+num2;
var resta= num1-num2;
var multiplicar= num1*num2;
var dividir= num1/num2;
console.log("la suma de " + num1 + "+" + num2 + "=" + suma );
console.log("la resta de " + num1 + "-" + num2 + "=" + resta );
console.log("la multiplicación de " + num1 + "*" + num2 + "=" + multiplicar );
console.log("la división de " + num1 + "/" + num2 + "=" + dividir );
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
var operaciones = ['+', '-', '*', '/']
for (let index = 0; index < operaciones.length; index++) {
    const element = operaciones[index];
    switch (element){
        case '+':
            console.log("la suma de " + num1 + "+" + num2 + "=" + suma );
            break;
        case '-':
            console.log("la resta de " + num1 + "-" + num2 + "=" + resta );
            break;
        case '*':
            console.log("la multiplicación de " + num1 + "*" + num2 + "=" + multiplicar );
            break;
        case '/':
            console.log("la división de " + num1 + "/" + num2 + "=" + dividir );
            break;
        default:
            break;
    }
}
//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var base = 3;
var altura = 4;

console.log("El área del triángulo es: " + ((base*altura)/2));
//Calcular el área de una circunferencia para un radio dado
var radio= 10;
console.log("El área del círculo es: " + (3,14*10^2));
//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var altura = 100;
var masa = 20;

console.log("El tiempo de caída libre es: " + Math.sqrt((2*altura)/9,18));
//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
