/*
Tipos de datos
Todos estos tipos de datos se pueden generar o ver en
consola utilizando el codigo console.log(tipodato);

Ejemplo con un objeto:
console.log({
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true,
    "friends": ['joe','ryan', 'martha']
});

"Helo World" => string
'Helo World' => string

1000 =>number

true-false =>boolean

['joe','ryan', 'martha'] =>array

Object
{
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true,
    "friends": ['joe','ryan', 'martha']
}

Variables
Antes de declararse es necesario poner la palabra 'var'
o la palabra 'let', de la siguiente manera:

var nombre="John";
let lastname="Carter"

Para declarar una variable de tipo constante, entonces
añadimos la palabra const, de la siguiente manera

const pi=3.141516
teniendo en cuenta el tipo de variable, no se podran hacer
cambios a esta constante establecida, permaneciendo con
un valor único
console.log(nombre+" "+lastname);


Operaciones entre variables:
ejemplo:

let numero1=60;
let numero2=100;

total=numero1*numero2;
console.log("El total es: "+total);

Comparaciones entre variables:
ejemplo:
____________________________________________
let numero1=60;
let numero2=100;

let result=numero1<numero2;

console.log(result);
____________________________________________

otro ejemplo:
____________________________________________
let contraseña='juan354';
let entrada='juan354';

let result=contraseña==entrada;

console.log(result);
____________________________________________

Condicionales:
Ejemplo:

let contraseña='juan354';
let entrada='juan354';

let result=contraseña==entrada;

if(result==true){
    console.log("Login Correcto");
}
if(result==false){
    console.log("Login Incorrecto");
}

switches:

let typeCard='debito';

switch(typeCard){
    case 'debito':
        console.log("La targeta utilizada es debito")
        break;
    case 'credito':
        console.log("Está utilizando una targeta de credito");
        break;

    default:
        console.log("Targeta no ingresada")
        break;
}

_____________________________________________________
Ciclos y aplicaciones
let count=50;

Ciclo While

while(count>0){
    console.log(count);
    count=count-1;
}

Ciclo For

let names=['ryan', 'joe', 'john', 'mario'];

for(i=0;i<5; i++){
    console.log(names[i]);
}
_____________________________________________________
Funciones:
function saludar(){
    console.log('Hola');
}
saludar();
_____________________________________________________
let name="Juan";
function saludar(name){
    console.log(name);
}
saludar(name);
_____________________________________________________



*/



