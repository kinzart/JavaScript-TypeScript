var pens;

pens = ["red", "blue", "green", "orange", "purple"]

console.log(`Before: ${pens}`);
pens.reverse(); //reverte a ordem
pens.shift(); //remove a primeira posicao
pens.unshift("orange", "purple"); //remove  especificos
pens.pop(); //remove ultimo
pens.push("pink","prussian blue"); //adiciona valores apos ultimo valor do array
pens.splice(3, 2); //remove 3 itens da posição 2 em diante 

//avançados
var newPens = pens.slice();
console.log("New pens: ", newPens); //cria uma copia do array constructor

var res = pens.indexOf("orange", 1); //(pesquisa, indice especificado), sem index, comeca do 0
console.log(res)

var arrayString = pens.join("separator"); //coloca um separador entre arrays
console.log("String from array: ", arrayString);







