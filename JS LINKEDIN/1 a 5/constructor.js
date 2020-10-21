//CONSTRUCTOR

function Curso(title, prof, nivel, dataPub, numVis, atualizaVis) {
    this.title = title;
    this.prof = prof;
    this.nivel = nivel;
    this.dataPub = dataPub;
    this.numVis = numVis;
    this.atualizaVis = function() {
        return ++curso.numVis;
    }
}

//Declarando objeto com base no constructor
//var curso1 = new Curso("Javascript: formação basica", "Amanda", 1, false, 0);



//Array para colocar varios

var cursos = [
    new Curso("Javascript: formação basica", "Amanda", 1, false, 0),
    new Curso("Javascript: formação basica", "Amanda", 1, true, 700)
]

console.log(cursos)