function singleRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    let result = (playerChoice === computerChoice) ? 'tie' :
    (playerChoice == 'rock' && computerChoice == 'scissors' ||
    playerChoice == 'scissors' && computerChoice == 'paper' ||
    playerChoice == 'paper' && computerChoice == 'rock') ? 'win' :
    'lose';

    return result
}