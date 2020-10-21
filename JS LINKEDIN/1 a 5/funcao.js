
function findBigF() {
    console.log('function running');
    a > b ? console.log("a = " + a) : console.log("b = " + b);
    a < b ? console.log("a = " + a) : console.log("b = " + b)
}

//Declaração de variaveis antes da chamada!

a = 3/4; //.75
b = 5/7; //0.7142857142857143

findBigF();





//======== PASSANDO PARÂMETROS =============//

function findBigF2(c, d) {
    console.log('');
    console.log('function f2 running');
    c > d ? console.log("c = " + c) : console.log("d = " + d);
    c < d ? console.log("c = " + c) : console.log("d = " + d)
}

//Declaração de variaveis antes da chamada!

first = 3/4; //.75
second = 5/7; //0.7142857142857143

findBigF2(first, second); //parametros = variaveis aqui




//======== RETORNANDO VALORES =============//

function findBigF3(e, f) {
    console.log('');
    console.log('function f3 running');
    var res; //declarando como undefined para usar posteriormente
    e>f ? res = ["first", e] : res = ["second", f]
    return res
}

//Declaração de variaveis antes da chamada!

first = 3/4; //.75
second = 5/7; //0.7142857142857143

var fraction = findBigF3(first, second);
console.log("resultado 1 = ",first);
console.log("resultado 2 = ", second);
console.log("resultado se e maior do que a segunda: ", fraction)




//============ ANONIMAS =============//
//Podemos declarar em qualquer lugar fora da funcao as variaveis
// Podemos tbm declarar no parametro (a, b) e declarar no console


//var funcaoAnonima = function() {
var funcaoAnonima = function(a, b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

 //a = 175 * 2, b = 5/7

 console.log('');
 console.log('função anonima:')
//console.log(funcaoAnonima())
console.log(funcaoAnonima(12/7, 13/25)) // resultado da funcao
console.log(funcaoAnonima) // Obtemos toda funcao

