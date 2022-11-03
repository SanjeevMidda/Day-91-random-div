//create div
//random width and height
//random location
let body = document.querySelector('body');

for(i=0; i<10; i++){
    createDiv();
}

function createDiv(){
    let createBox = document.createElement('div');
    createBox.classList.add('box');
    createBox.style.top=randomNumber();
    createBox.style.left=randomNumber();
    createBox.style.right=randomNumber();
    createBox.style.bottom=randomNumber();

    createBox.style.width=randomNumber();
    createBox.style.height=randomNumber();

    body.appendChild(createBox);
}

function randomNumber(){

    return `${Math.floor(Math.random()*1000)}px`;
}

