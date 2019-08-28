let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
   var rand = Math.round(Math.random() + 8);
  return rand;
}

const compareGuesses = (rand,user,computer)=> {
  
  rand = generateTarget();
  var userDifference = rand - user;
  var computerDifference = rand - computer;

  if(userDifference > computerDifference){
    return false;
  } else if(userDifference === computerDifference){
    return true;
  } else {
    return true;
  }

  


}
