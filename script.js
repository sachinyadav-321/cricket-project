let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore = function () {
        return `Game-Score :  Won : ${score.win} | Lost : ${score.lost} | Tie : ${score.tie}`;
    };

    showResult();
}



function generateComputerChoice() {
    let randomNum = Math.random() * 3;

    if (randomNum > 0 && randomNum <= 1) {
        return 'Bat';
    }
    else if (randomNum > 1 && randomNum <= 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++;
            return 'User Won';
        }
        else if (computerMove === 'Bat') {
            score.tie++;
            return `It's a Tie`;
        } else if (computerMove === 'Stump') {
            score.lost++;
            return 'Computer Won';
        }
    }
    else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.tie++;
            return `It's a Tie`;
        }
        else if (computerMove === 'Bat') {
            score.lost++;
            return 'Computer Won';
        } else if (computerMove === 'Stump') {
            score.win++;
            return 'User Won';
        }
    }
    if (userMove === 'Stump') {
        if (computerMove === 'Ball') {
            score.lost++;
            return 'Computer Won';
        }
        else if (computerMove === 'Bat') {
            score.win++;
            return 'User Won';
        } else if (computerMove === 'Stump') {
            score.tie++;
            return `It's a Tie`;
        }
    }

}

function showResult(userMove, computerMove, result) {

    localStorage.setItem('Score', JSON.stringify(score));
    alert(`You have chosen ${userMove}  | Computer Chosen ${computerMove} | ${result}
        
        ${score.displayScore()}`)

    // document.querySelector('#user-move').innerText = userMove ? `You have chosen ${userMove}` : '';

    // document.querySelector('#computer-move').innerText = computerMove ? `You have chosen ${computerMove}` : '';

    // document.querySelector('#result').innerText = result || '';

    // document.querySelector('#score').innerText = score.displayScore();
}