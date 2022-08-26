//EL HOISTING
//Almacena (elevaciòn) un var nameOfDog; //Undefined
/* var nameOfDog; //Undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog); */

var elmo; // undefined
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

nameOfDog();
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}
var elmo = 'Elmito';