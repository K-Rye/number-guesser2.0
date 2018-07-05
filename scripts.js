
var minNumber = document.querySelector('.min-number')
var maxNumber = document.querySelector('.max-number')
var minMaxSubmit = document.querySelector('.min-max-submit-button')
var guessInput = document.querySelector('.enter-your-guess')
var guessButton = document.querySelector('.guess')
var clearButton = document.querySelector('.clear')
var inputForm = document.querySelector('.input-form')
var playerGuess = document.querySelector('#output-number')
var wrongGuess = document.querySelector('.wrong-number')
var outPutMessage = document.querySelector('.output-message')
var resetButton = document.querySelector('.reset')
var resultRandomNumber = getRandomNumber(1, 100);
var bonusRoundResultNumber = getBonusRoundNumber();


maxNumber.addEventListener('keyup', function() {
  minMaxSubmit.disabled = false;
})

minMaxSubmit.addEventListener('click', function(e){
  e.preventDefault();
  resultRandomNumber = getRandomNumber(parseInt(minNumber.value), parseInt(maxNumber.value))
  console.log(minNumber.value, maxNumber.value)
  minMaxSubmit.disabled = true;
  guessInput.disabled = false;
})

guessInput.addEventListener('keyup', function(e) {
  clearButton.disabled = false;
  guessButton.disabled = false;
});

guessButton.addEventListener('click', function(e){
  e.preventDefault();
  checkRange(parseInt(guessInput.value), minNumber.value, maxNumber.value);
  if (guessInput > minNumber.value || guessInput < minNumber.value ) {
      clearButton.disabled = false;
      guessButton.disabled = true;
  } else {
      guessButton.disabled = false;
      resetButton.disabled = false;
      inputForm.reset();
  }
});

clearButton.addEventListener('click' ,clearInput)
resetButton.addEventListener('click', resetGame)


function getRandomNumber(minNum, maxNum) {
  return parseInt(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
}

function checkRange(guess, minNum, maxNum) {
  if (isNaN(guess)){
    playerGuess.innerText = 'NaN';
  } else if (guess < minNumber.value) {
    wrongGuess.innerText = guessInput.value;
    outPutMessage.innerText = `Please choose a number between ${minNum} and ${maxNum}`
  } else if (guess > maxNumber.value) {
    wrongGuess.innerText = guessInput.value;
    outPutMessage.innerText = `Please choose a number between ${minNum} and ${maxNum}`
  } else {
    checkGuess();
  }
}

function checkGuess() {
  playerGuess.innerText = guessInput.value;
  if (guessInput.value > resultRandomNumber) {
    outPutMessage.innerText ='That is too high';
  } else if (guessInput.value < resultRandomNumber){
    outPutMessage.innerText = 'That is too low';
  } else {
    playerGuess.innerText = 'BOOM!';
    outPutMessage.innerText = 'You Win!';
    bonusRound();
  }
    console.log(guessInput.value, resultRandomNumber)
}

function getBonusRoundNumber(minNum, maxNum) {
  return parseInt(Math.floor(Math.random() * (maxNum +10 - minNum -10)) + minNum);
}

function bonusRound(minNum, maxNum) {
  // parseInt(Math.floor(Math.random() * (maxNum +10 - minNum -10)) + minNum);
  console.log(minNum, maxNum);
  minMaxSubmit.disabled = true;
  guessInput.disabled = false;
  resetButton.disabled = false;
  outPutMessage.innerHTML = `YOU WIN! <p>BONUS ROUND!</p><p><em>Guess Again between ${minNum} and ${maxNum}</em></p>`;
  console.log(bonusRoundResultNumber)
} 

//   getRandomNumber(minNum -10, maxNum +10);
//   resultRandomNumber = getRandomNumber(parseInt(minNumber.value), parseInt(maxNumber.value))
//   console.log(minNumber.value -10, maxNumber.value +10)
// }


function buttonDisable(e) {
  clearButton.disabled = true;
  resetButton.disabled =true;
}

function clearInput(e) {
  e.preventDefault();
  guessInput.value = '';
  buttonDisable();
}

function resetGame() {
  location.reload();
}