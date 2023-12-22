// console.log("hello I am working ");
let computerVal;
// if "JSON.parse(localStorage.getItem(count)) " this statement is NULL in below then it set by default
let count=null;

document.querySelector('.reset').addEventListener('click',function(){
    localStorage.removeItem('count');
    count={
        score : 0,
        mxscore : 0,
        ysrc : "",
        csrc : ""
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
        count.csrc = 'stone.png';
        return 'ROCK';
    }
    else if(computerVal > (1/3) && computerVal <= (1/2)){
        count.csrc = 'paper.png';
        return 'PAPER';
    }
    else if(computerVal > (1/2) && computerVal <= 1){
        count.csrc = 'scissor.png';
        return 'SCISSOR';
    }
}

let findyourMove = function(index){
    if(index==0){
        count.ysrcsrc = 'stone.png';
        return "ROCK";
    }
    else if(index==1){
        count.ysrcsrc = 'scissor.png';
        return "SCISSOR";
    }
    else if(index==2){
        count.ysrcsrc = 'paper.png';
        return "PAPER";
    }
}

let Score=document.querySelector('.score');
Score.innerText=`SCORE = ${count.score}`

// To display score
let maxScore=document.querySelector('.maxScore');
maxScore.innerText = `MAXSCORE = ${count.mxscore}`


// main function like working start fron here;;;

let box = document.querySelectorAll('.box');
Array.from(box).forEach(function(element,index){
    
    let boxText=element.querySelector('.boxText');
    let text=document.querySelector('.text');
    let computer = document.querySelector('.computer');

    // after click on box like "rock || paper || scissor"
    element.addEventListener('click' , ()=>{
        
        // console.log(index);
        
        // console.log(typeof(element.querySelector('img').getAttribute('src')));
        computerVal = Math.random();
        let computerSel = find(computerVal);
        let yoursel=findyourMove(index);
        // console.log(yoursel);

        count.ysrc=element.querySelector('img').getAttribute('src');

        // computer.innerText = `Computer Slected ${computerSel}`

        if(yoursel === computerSel){
             document.querySelector('.winer').innerText='TIE';
        }
        else if(yoursel === 'PAPER' && computerSel === 'ROCK'){
             document.querySelector('.winer').innerText='YOU WIN';
            count.score++;
            mxscore=Math.max(count.score,count.mxscore);
            
        }
        else if(yoursel === 'PAPER' && computerSel === 'SCISSOR'){
             document.querySelector('.winer').innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'PAPER'){
             document.querySelector('.winer').innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'ROCK' && computerSel === 'SCISSOR'){
             document.querySelector('.winer').innerText='YOU WIN';
            count.score++;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'PAPER'){
            document.querySelector('.winer').innerText='YOU WIN';
            count.score++;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        else if(yoursel === 'SCISSOR' && computerSel === 'ROCK'){
             document.querySelector('.winer').innerText='YOU LOSS';
            count.score--;
            count.mxscore=Math.max(count.score,count.mxscore);

        }
        

        document.querySelector('.text').querySelector('span').innerText='YOU';
        text.querySelector('img').setAttribute('src',`${count.ysrc}`);

        console.log(count.csrc);
        document.querySelector('.computer').querySelector('span').innerText='COMPUTER';
        document.querySelector('.computer').querySelector('img').setAttribute('src',`${count.csrc}`);
        // To save all score into a local storage
        localStorage.setItem("count" , JSON.stringify(count));
        displayScore();
    })
})