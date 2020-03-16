var scores = [0,0]
var roundScore = 0

var activePlayer = 0
var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'


var x = document.querySelector('#score-0')

// document.querySelector('.dice').style.css.display = 'none'


document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Need a random number
});




