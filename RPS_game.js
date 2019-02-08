function game() {
    let rounds = 5;
    let playerWins = 0;
    let computerWins = 0;

    while (rounds >= 1 && playerWins <=3 || rounds >= 1 && computerWins <= 3) {
        let playerChoice = prompt('Rock, paper or scissors?', 'Rock');
        let compChoice = computerPlay();

        let result = singleRound(playerChoice, compChoice);

        playerChoice = playerChoice.toUpperCase();
        compChoice = compChoice.toUpperCase();

        if (result === 'win') {
            alert('You Won! ' + playerChoice + ' beats ' + compChoice +
             ', so you\'re on to the next round!');
            playerWins++;
            rounds--;
        } else if (result === 'lose') {
            alert('You lost! ' + compChoice + ' beats ' + playerChoice +
             '. You\'ll have to do better than that!');
            computerWins++;
            rounds--;
        } else {
            alert('Tie! Nobody takes this round');
        }
    }

    return {playerWins, computerWins};
}