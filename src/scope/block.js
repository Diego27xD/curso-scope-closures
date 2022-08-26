//BLOCK SCOPE
//Las variables definidas dentro de un bloque 
//solo seran válidas dentro de esta
//un bloque es todo lo definido entre {}

function fruits(){
    if(true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; //Block scope
        const fruit3 = 'Banana' //Block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    
}
fruits();