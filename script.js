let images = ["images/dice1.png",
             "images/dice2.png",
             "images/dice3.png",
             "images/dice4.png",
             "images/dice5.png",
             "images/dice6.png"];

const img1      =   document.getElementById("winner-flag-area-left");
const img2      =   document.getElementById("winner-flag-right-area");

const text1     =   document.getElementById("left-text-area");
const text2     =   document.getElementById("right-text-area");

const flage1    =   document.getElementById("flag-left-area");
const flage2    =   document.getElementById("flag-right-area");

const score1    =   document.getElementById("game-score-1");
const score2    =   document.getElementById("game-score-2");

const overlay   =   document.getElementById("myOverlayArea");
const countText =   document.getElementById("count-down-text-area");

const input1    =   document.getElementById("btn-player-left");
const input2    =   document.getElementById("btn-player-right");

let diceOneNumber;
let diceTwoNumber;
let counter =   10;


function diceOneRoll(){
    diceOneNumber = Math.floor(Math.random()*6)+1;    
    img1.style.animationName     = "diceRoll";
    img1.style.animationDuration = "3s";
    setTimeout(diceChangeImageOne,3000);
    setTimeout(checkResults,6000);
    setTimeout(()=>{input1.disabled = true;},1000)  
}
function diceTwoRoll(){
    diceTwoNumber = Math.floor(Math.random()*6)+1;
    img2.style.animationName     = "diceRoll";
    img2.style.animationDuration = "3s";
    setTimeout(diceChangeImageTwo,3000);
    setTimeout(checkResults,6000);
    setTimeout(()=>{input2.disabled = true;},1000) 
}


function diceChangeImageOne(){
    img1.setAttribute("src", images[diceOneNumber-1]);
    score1.innerText              = "Score : " + diceOneNumber;
    img1.style.animationName     = "";
    img1.style.animationDuration = "";
}
 
function diceChangeImageTwo(){
    img2.setAttribute("src", images[diceTwoNumber-1]);
    score2.innerText              = "Score : " + diceTwoNumber;
    img2.style.animationName     = "";
    img2.style.animationDuration = "";
}


function checkResults(){

    if((typeof diceOneNumber !== 'undefined')&&(typeof diceTwoNumber !== 'undefined')){

        if(diceOneNumber > diceTwoNumber){
            flage1.style.display    =   "inline-block";
            text1.style.display     =   "inline-block";
            flage2.style.display    =   "none";
            text2.style.display     =   "none";
        }
        else if(diceOneNumber === diceTwoNumber){
            flage1.style.display    =   "inline-block";
            text1.style.display     =   "inline-block";
            flage2.style.display    =   "inline-block";
            text2.style.display     =   "inline-block";
            text2.innerText         =   "Drow";
            text1.innerText         =   "Drow";
        }
        else{
            flage1.style.display    =   "none";
            text1.style.display     =   "none";
            flage2.style.display    =   "inline-block";
            text2.style.display     =   "inline-block";
        }
        setTimeout(countDown,3000);
    }
}

function countDown(){
    diceOneNumber = undefined;
    diceTwoNumber = undefined;
    flage1.style.display    =   "none";
    text1.style.display     =   "none";
    flage2.style.display    =   "none";
    text2.style.display     =   "none";
    overlay.style.display   =   "block";
    input1.disabled = false;
    input2.disabled = false;
    let countdonwBack = setInterval(() => {
        
        countText.innerText = counter--;
        
        if(counter===0){
            overlay.style.display   =   "none";
            clearInterval(countdonwBack);
            counter=10;
        }

    },1000)    
}
function closeOverlay(){
    overlay.style.display   =   "none";
}
    
function resetAllContent(){
    overlay.style.display   =   "none";
}


