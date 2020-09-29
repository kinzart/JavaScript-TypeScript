var listaFuncionarios = ['viviane', 'rosangela','mateus', 'moraes', 'aleia' ]
var listaDias = [1, 6, false, 'faltou', 21,]


//imprimir valor e indice da var listaFuncionarios
/*
listaFuncionarios.forEach(function(valor, indice) {
    console.log(valor, indice)
})
*/
// para adicionar mais arrays podemos encapsular function() para uma var
let f = function(valor, indice) {
    console.log(valor, indice) 
}
let j = function(valor) {
    console.log(valor) 
}
    listaFuncionarios.forEach(f)
    listaDias.forEach(j)