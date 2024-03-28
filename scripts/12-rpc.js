let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let isAutoPlaying = false;
let intervalID;

function autoplay(){
  if(!isAutoPlaying){
    intervalID = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

updateScoreElem();

function playGame(playerMove) {
const computerMove = pickComputerMove();

let Result = '';

if (playerMove === 'Scissors') {
  if (computerMove ==='Paper') {
    Result = `You Win.`;
  } else if (computerMove === 'Rock') {
    Result = `You Lose.`;
  } else if (computerMove === 'Scissors') {
    Result = 'Tie.';
  }

} else if (playerMove === 'Paper') {
  if (computerMove==='Paper') {
    Result = `Tie.`;
  } else if (computerMove === 'Rock') {
    Result = `You Win.`;
  } else if (computerMove === 'Scissors') {
    Result = 'You Lose.';
  }
  
} else if (playerMove === 'Rock') {
  if (computerMove==='Rock') {
    Result = `Tie.`;
  } else if (computerMove === 'Paper') {
    Result = `You Lose.`;
  } else if (computerMove === 'Scissors') {
    Result = 'You Win.';
  }
}

if (Result === 'You Win.') {
  score.wins ++;
} else if (Result === 'You Lose.') {
  score.losses ++;
} else if (Result === 'Tie.') {
  score.ties ++;
}

localStorage.setItem('Score', JSON.stringify (score));

updateScoreElem();

document.querySelector('.js-results').innerHTML = Result;

document.querySelector('.js-moves').innerHTML = `You
  <img class="emoji" src="images/${playerMove}-emoji.png">
  <img class="emoji" src="images/${computerMove}-emoji.png">
  Computer`
}

function updateScoreElem () {
document.querySelector('.js-score')
  .innerHTML = `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
}

function pickComputerMove() {
const RandNumber = (Math.random());

if (RandNumber >= 0 && RandNumber <1/3 ) {
  computerMove = 'Rock' ;
} else if (RandNumber >=1/3 && RandNumber <=2/3){
  computerMove = 'Paper' ;
} else {
  computerMove = 'Scissors' ; 
}

return computerMove;
}