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

function playRound(){
    
    let resultFinalPS = 0;
    let resultFinalCP = 0;

    for (let i = 1; i <= 5; i++){
        //my code
        let playerSelection = prompt("Enter rock, paper, scissor", "");

        while(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissor"){
            
            if(playerSelection === null){
               break;
            }
            console.log(playerSelection);
            playerSelection = prompt("Info is not acceptable");
            
        }

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


game();
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(computerSelection);
//console.log(resultPlay(playerSelection,computerSelection));