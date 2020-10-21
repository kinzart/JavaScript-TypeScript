var curso = new Object();

var curso = {
    title: "Java: Formacao basica",
    prof: "Mariana",
    nivel: "2",
    dataPub: true,
    numVis: 0,
    atualizaVis: function() {
        return ++curso.numVis;
    }
}

console.log(curso)


