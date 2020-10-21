/* FECHAMENTO = Closure 
Significa que uma função dentro de outra função é dependente das variaveis da função externa para funcionar*/



function fazerCalc() {
    var a = 5;
    var b = 4;
   // var soma = a + b;

function multiplica() {
    var resMult = a * b;
    return resMult
}
    return multiplica();
}

var res = fazerCalc();

console.log("resultado: ", res )