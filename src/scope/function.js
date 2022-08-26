function greeting(){
    //VARIABLE DE ALCANCE LOCAL
    let userName = 'Ana';
    console.log(userName)

    if(userName==='Ana'){
        console.log(`Hello ${userName}`)
    }

}
greeting();

console.log(userName);
