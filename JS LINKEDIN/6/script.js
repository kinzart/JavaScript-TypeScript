const pontHora = document.querySelector('path.hour');
const pontMin = document.querySelector('path.minutes');
//const pontSec = document.querySelector('#seconds');


function executarRelogio() {
var date = new Date();
let hr = date.getHours();
let mn = date.getMinutes();
let sc = date.getSeconds();

let positionHr = hr*360/12+(mn*(360/60)/12);
let positionMn = (mn*360/60)+(sc*360/60)/60;
//let positionSec = sc*360/60;

pontHora.style.transform = "rotate(" + positionHr + "deg)";
pontMin.style.transform = "rotate(" + positionMn + "deg)";
//pontSec.style.transform = 

var intervalo = setInterval(executarRelogio, 1000);
}