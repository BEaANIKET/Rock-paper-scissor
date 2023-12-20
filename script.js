// console.log("hello I am working ");
let computerVal;
// if "JSON.parse(localStorage.getItem(count)) " this statement is NULL in below then it set by default
let count=null;

document.querySelector('.reset').addEventListener('click',function(){
    localStorage.removeItem('count');
    count={
        score : 0,
        mxscore : 0
    }
    console.log('hahksd');
    displayScore();
})

count=JSON.parse(localStorage.getItem('count')) || {
    score : 0,
    mxscore : 0
};

 // To display score
let displayScore = function(){

    let Score=document.querySelector('.score');
    Score.innerText=`SCORE = ${count.score}`
    let maxScore=document.querySelector('.maxScore');
    maxScore.innerText = `MAXSCORE = ${count.mxscore}`
}

// This function is used to find the computer move
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


let Score=document.querySelector('.score');
Score.innerText=`SCORE = ${count.score}`

// To display score
let maxScore=document.querySelector('.maxScore');
maxScore.innerText = `MAXSCORE = ${count.mxscore}`

let box = document.querySelectorAll('.box');
Array.from(box).forEach(function(element){
    
    let boxText=element.querySelector('.boxText');
    let text=document.querySelector('.text');
    let computer = document.querySelector('.computer');

    // after click on box like "rock || paper || scissor"
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
            count.score++;
            mxscore=Math.max(count.score,count.mxscore);
            
        }
        else if(yoursel === 'PAPER' && computerSel === 'SCISSOR'){
            text.innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'PAPER'){
            text.innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'SCISSOR'){
            text.innerText='YOU WIN';
            count.score++;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'PAPER'){
            text.innerText='YOU WIN';
            count.score++;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'ROCK'){
            text.innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        
        // To save all score into a local storage
        localStorage.setItem("count" , JSON.stringify(count));
        displayScore();
    })
})