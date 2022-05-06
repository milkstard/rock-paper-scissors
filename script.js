function computerPlay(){ 
    const wordsToSplit = "Rock,Paper,Scissor";
    const arrayWordsToSplit = wordsToSplit.split(",");
    return arrayWordsToSplit[Math.floor(Math.random()*3)];
}

function resultPlay(playerSelection, computerSelection){
    p1 = playerSelection.toLowerCase();
    c1 = computerSelection.toLowerCase();
    resultLose = "You Lose! ";
    resultWin = "You Win! ";
    resultTie = "It's a TIE!";
    if(p1 === c1){
        return resultTie;
    } else if(p1 === "rock" && c1 === "scissor" || p1 === "paper" && c1 === "rock" || p1 === "scissor" && c1 === "paper"){
        return resultWin + playerSelection + " beats " + computerSelection; //possible wins for player
    } else{
        return resultLose + computerSelection + " beats " + playerSelection; //possible wins for computer
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(resultPlay(playerSelection,computerSelection));