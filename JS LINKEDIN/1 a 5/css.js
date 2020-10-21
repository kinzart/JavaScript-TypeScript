/* STYLE para propriedades de estilo
acessa o atributo inline dentro do DOM
style traz apenas os estilos inline */

document.querySelector('a.hal').style; //verifica atributos styles css


document.querySelector('a.input').style.color = 'green'; //muda a cor do atributo

document.querySelector('h2').style.backgroundColor = 'blue'


document.querySelector('h2').style.cssText = 'padding: 1em; color: white; background-color: red'

