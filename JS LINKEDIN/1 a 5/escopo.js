var a = 12 // variavel declarada em escopo global

function dentro() {
    var a = 14 //variavel em escopo local
    return a
}

console.log(a);
console.log(dentro());




b = 5 //variavel global

function dentroB() {
  c = 10 // var global
    return c
}

var dentro = dentroB()



console.log(b);
console.log(c);


