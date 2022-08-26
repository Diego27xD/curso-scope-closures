
/* Closure
Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). 
En otras palabras, una clausura permite acceder al 
ámbito de una función exterior desde una función interior. 
En JavaScript, las clausuras se crean cada vez que una función es creada */

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ // función interna
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal)
        }
        return child();
    }
    return parent();    
}
myFunction();