function singleRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    let result = (playerChoice === compChoice) ? 'tie' :
    (playerChoice == 'rock' && compChoice == 'scissors' ||
    playerChoice == 'scissors' && computerChoice == 'paper' ||
    playerChoice == 'paper' && computerChoice == 'rock') ? 'win' :
    'lose';

    return result
}