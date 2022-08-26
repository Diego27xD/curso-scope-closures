var firtName; //Undefined
firtName = 'Oscar';
console.log(firtName)

var lastName = 'David'; //declarar / asignar
lastName = 'Ana'; //Reasignacion
console.log(lastName)

var secondName = 'David'; //declarar / asignar
var secondName = 'Ana' // reasignado
console.log(secondName)

//let
let fruit = 'Apple'; // declara y asigna
fruit = 'Kiwi'; // reasignar
console.log(fruit)
//LET no permite la redeclaración
//let fruit = 'Banana';
//console.log(fruit)

//const
//NO Nos permite reasignar ni reasignar en const
const animal = 'dog';
animal = 'cat';
console.log(animal);

const vehicles = [];
vehicles.push('carrito');
console.log(vehicles)

vehicles.pop();
console.log(vehicles)

nameOfDog("Elmo"); 
function nameOfDog(name) { console.log(name); };

//npm init -y