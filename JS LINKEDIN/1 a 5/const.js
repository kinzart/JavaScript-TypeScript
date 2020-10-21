//insubstituivel
const minhaConstante = 2*10/4*8;
console.log(minhaConstante);



function logScope() {
    let localvar = 32*75/7.6; //let faz com que essa variavel seja apenas local do bloco

    if(localvar){
    var localvar = "eu sou diferente";
    console.log("localvar Alinhada: ", localvar);
    }
    console.log("Log Scope: ", localvar)
}

logScope();