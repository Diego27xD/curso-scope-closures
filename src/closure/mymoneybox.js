
/* function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}
/* NO RECUERDA EL VALOR ANTERIOR, LOS EJECUTA POR SEPARADO 
moneyBox(5);
moneyBox(5);
*/


//USANDO CLOSURE, LA FUNCIÒN SI RECUERDA LOS ANTIGUOS VALORES
function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);