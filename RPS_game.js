function game() {
    let rounds = 5;
    let playerWins = 0;
    let computerWins = 0;

    while (rounds >= 1 && playerWins <=3 || rounds >= 1 && computerWins <= 3) {
        let playerChoice = prompt('Rock, paper or scissors?');
        let compChoice = computerPlay();

        let result = singleRound(playerChoice, compChoice);

        if (result === 'win') {
            alert('You Won!, next round!');
            playerWins++;
            rounds--;
        } else if (result === 'lose') {
            alert('You lost! You\'ll have to do better than that!');
            computerWins++;
            rounds--;
        } else {
            alert('Tie! Nobody takes this round');
        }
    }

    return {playerWins, computerWins};
}