// console.log("hello I am working ");
let computerVal;
let score=0;
let mxscore=0;

let find = function(computerVal){
    if(computerVal >= 0 && computerVal <= (1/3)){
        return 'ROCK';
    }
    else if(computerVal > (1/3) && computerVal <= (1/2)){
        return 'PAPER';
    }
    else if(computerVal > (1/2) && computerVal <= 1){
        return 'SCISSOR';
    }
}

let scorefun = function(){
    let Score=document.querySelector('.score');
    Score.innerText=`SCORE = ${score}`;
}

let maxscorefun=function(){
    let maxScore=document.querySelector('.maxScore');
    maxScore.innerText = `MAXSCORE = ${mxscore}`
}

setInterval(scorefun,1);
setInterval(maxscorefun,1);

let box = document.querySelectorAll('.box');
Array.from(box).forEach(function(element){
    let boxText=element.querySelector('.boxText');
    let text=document.querySelector('.text');
    let computer = document.querySelector('.computer');
    element.addEventListener('click' , ()=>{
        computerVal = Math.random();
        let computerSel = find(computerVal);
        let yoursel=boxText.innerText;
        
        computer.innerText = `Computer Slected ${computerSel}`

        if(yoursel === computerSel){
            text.innerText='TIE';
            
        }
        else if(yoursel === 'PAPER' && computerSel === 'ROCK'){
            text.innerText='YOU WIN';
            score++;
            mxscore=Math.max(score,mxscore);
            
        }
        else if(yoursel === 'PAPER' && computerSel === 'SCISSOR'){
            text.innerText='YOU LOSS';
            score--;
            mxscore=Math.max(score,mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'PAPER'){
            text.innerText='YOU LOSS';
            score--;
            mxscore=Math.max(score,mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'SCISSOR'){
            text.innerText='YOU WIN';
            score++;
            mxscore=Math.max(score,mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'PAPER'){
            text.innerText='YOU WIN';
            score++;
            mxscore=Math.max(score,mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'ROCK'){
            text.innerText='YOU LOSS';
            score--;
            mxscore=Math.max(score,mxscore);

        }
    })
})
