const btnAll = document.querySelectorAll('button');
let i = 0;
let pOverAllScore = 0; //overAllScore for player
let cOverAllScore = 0; //overAllScore for computer
btnAll.forEach( btn => btn.addEventListener('click', playerBtn));

//DOM containers
const divContainer = document.querySelector('.container');
const divDisplay = document.createElement('div');
const scoreDisplay = document.createElement('h2');
const staticScore = document.createElement('h4');
const staticWinner = document.createElement('h1');

divDisplay.classList.toggle('display');
divContainer.appendChild(divDisplay);
divDisplay.appendChild(scoreDisplay);
divDisplay.appendChild(staticScore);
divDisplay.appendChild(staticWinner);

scoreDisplay.textContent = "Push a button in order to start playing";
staticScore.textContent = `Player 1: ${pOverAllScore} Computer 1: ${cOverAllScore}`;
//return a random rock, paper, scissor by computer
function computerPlay(){ 
    const wordsToSplit = "Rock,Paper,Scissor";
    const arrayWordsToSplit = wordsToSplit.split(",");
    return arrayWordsToSplit[Math.floor(Math.random()*3)];
}


function playerVsComputer(playerSelect, computerSelect){
    console.log("Player Selected: " + playerSelect + "Computer Selected: " + computerSelect)
}


function playerBtn(e){
    //console.log(e.target.id);
    if(pOverAllScore != 5 && cOverAllScore !=5 ){
        resultPlay(e.target.id, computerPlay());
        staticScore.textContent = `Player 1: ${pOverAllScore} Computer 1: ${cOverAllScore}`;
        if(pOverAllScore == 5)
            staticWinner.textContent = 'Player 1 WINS';
        else if(cOverAllScore == 5)
            staticWinner.textContent = 'Computer 1 WINS';
    }
    else
        return;   
}

//return a prompt from user rock, paper, scissor
function personPlay(){

    let playerSelection = prompt("Enter rock, paper, scissor", "");

    while(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissor"){
            
        if(playerSelection === null){
           break;
        }
        console.log(playerSelection);
        playerSelection = prompt("Info is not acceptable");
        
    }  

    return playerSelection;
    
}

//return a result between player
function resultPlay(playerSelection, computerSelection){

    p1 = playerSelection.toLowerCase();
    c1 = computerSelection.toLowerCase();
    resultLose = "You Lose! ";
    resultWin = "You Win! ";
    resultTie = "It's a TIE!";
    if(p1 === c1){
        //return resultTie;
        scoreDisplay.textContent = `Player 1: ${p1} Computer 1: ${c1} RESULT = ${resultTie} `;
    } else if(p1 === "rock" && c1 === "scissor" || p1 === "paper" && c1 === "rock" || p1 === "scissor" && c1 === "paper"){
        //return resultWin + playerSelection + " beats " + computerSelection; //possible wins for player
        scoreDisplay.textContent = `RESULT = ${resultWin} Player 1: ${p1} beats Computer 1: ${c1} `;
        ++pOverAllScore;
    } else{
        //return resultLose + computerSelection + " beats " + playerSelection; //possible wins for computer
        scoreDisplay.textContent = `RESULT = ${resultLose} Player 1: ${p1} beats Computer 1: ${c1} `
        ++cOverAllScore;
    }
    
}

function playRound(){  

    let resultFinalPS = 0;
    let resultFinalCP = 0;

    for (let i = 1; i <= 5; i++){
        //ask user to input
        let playerSelection = personPlay();
        //check if null or not
        if(playerSelection === null)
            break;
        //if not null then continue
        let computerSelection = computerPlay();
        console.log("Player 1: " + playerSelection + " Computer 1: " + computerSelection);
        let partialResult = resultPlay(playerSelection, computerSelection);

        if(partialResult.includes("Win")){
            resultFinalPS++;
        }
        else if(partialResult.includes("Lose")){
            resultFinalCP++;
        } //no score added if its a TIE!

        console.log("Score: " + resultFinalPS + " || " + resultFinalCP);

    }

}

function game(){

    playRound();
}


//start
//game();