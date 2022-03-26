function method(q) {
    inp.value += q;
    let new1 = inp.value;
}
function func2() {
    inp.value = "";
}
function cleanSheet() {
    let all = inp.value;
    inp.value = all.substring(0, all.length-1);
}
function total(q){
    let new1 = inp.value;
    if(new1){
     inp.value = eval(new1);
     let li1 =document.createElement('li');
     li1.innerHTML+=inp.value;
     exert.appendChild(li1);
    }
}
function open() {
    if(windowDisplay.hidden === true) {
        windowDisplay.hidden = false;
    } else if(windowDisplay.hidden === false) {
        windowDisplay.hidden = true;
    }
}
let inp = document.querySelector('#inp');
let operationsEl = document.querySelectorAll('.small');
let numbersEl = document.querySelectorAll('.nums');
let acEl = document.querySelector('.big');
var windowDisplay = document.getElementById('calc');
var star = document.getElementById('starBlock');
windowDisplay.hidden = true;
star.addEventListener('click', open);
