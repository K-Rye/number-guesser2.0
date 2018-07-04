// =====================================================
// GLOBAL VARIABLES
// =====================================================
var minNumber = document.querySelector('.min-number')
var maxNumber = document.querySelector('.max-number')
var minMaxSubmit = document.querySelector('.min-max-submit')
var guessInput = document.querySelector('.enter-your-guess')
var guessButton = document.querySelector('.guess')
var clearButton = document.querySelector('.clear')
var resetButton = document.querySelector('.reset')
var inputForm = document.querySelector('.input-form')
var playerGuess = document.querySelector('.output-number')
var outPutMessage = document.querySelector('.output-message')
var resultRandomNumber = getRandomNumber(1, 100);

// =====================================================
// EVENT LISTENERS
// =====================================================


minMaxSubmit.addEventListener('click', function(e){
  e.preventDefault();
  resultRandomNumber = getRandomNumber(parseInt(minNumber.value), parseInt(maxNumber.value))
  console.log(minNumber.value, maxNumber.value)

})


guessInput.addEventListener('keyup', buttonEnable)

guessButton.addEventListener('click', function(e){
  e.preventDefault();
  checkRange(parseInt(guessInput.value), 1, 100);
  inputForm.reset();
})

clearButton.addEventListener('click' ,clearInput)

resetButton.addEventListener('click', resetGame)


// =====================================================
// FUNCTIONS
// =====================================================

function getRandomNumber(minNum, maxNum) {
  return parseInt(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
}

function checkGuess() {
  playerGuess.innerText = guessInput.value;
  if (guessInput.value > resultRandomNumber) {
    outPutMessage.innerText ='That is too high';
  } else if (guessInput.value < resultRandomNumber){
    outPutMessage.innerText = 'That is too low';
  } else {
    outPutMessage.innerText = 'BOOM!';

  }
    console.log(guessInput.value, resultRandomNumber)
}

function checkRange(guess, minNum, maxNum) {
  if (isNaN(guess)){
    outPutMessage.innerText = `Sorry, that is not a number.`
  } else if (guess < minNum || guess > maxNum) {
    outPutMessage.innerText = `Please choose a number between ${minNum} and ${maxNum}`
  // } else if (guess > maxNum) {
  //   outPutMessage.innerText = `Please choose a number between ${minNum} and ${maxNum}`
  } else {
    checkGuess();
  }
}

function buttonEnable() {
  minMaxSubmit.disabled = false;
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;

}

function clearInput(e) {
  e.preventDefault();
  guessInput.value = '';
  minNumber.value = '';
  maxNumber.value = '';
}

function resetGame() {
  location.reload();
}