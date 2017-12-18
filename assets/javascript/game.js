// Global Variables
var playerCharacter;
var enemyCharacter;

// Character Stats
$('#samwise').data("stats", {name: 'Samwise Gamgee', health: 115 , attack: 15,counter: 10})
$('#gollum').data('stats', {name: 'Gollum', health: 150, attack: 5, counter: 15})
$('#gandalf').data('stats', {name: 'Gandalf the White', health: 200, attack: 15, counter: 20})
$('#thering').data('stats', {name: 'The One Ring', health: 120, attack: 25, counter: 5})

// Troubleshooting Objects
console.log($('#samwise').data());
console.log($('#gollum').data());
console.log($('#gandalf').data());
console.log($('#thering').data());

// Game Functions
$(document).ready(function(){

// Writing HP to HTML
// $('.HP').text(playerCharacter.data('stats').health + ' HP');
// $('.HP').text(enemyCharacter.data('stats').health + ' HP');
// $('.gandalfHP').text($('#gandalf').data('stats').health + ' HP');
// $('.ringHP').text($('#thering').data('stats').health + ' HP');


$(".card").on("click", function(e) {
  
  if ($(this).hasClass("characters") && !playerCharacter) {
    playerCharacter = $(this);
    $("#champion").append(playerCharacter);
    playerCharacter.removeClass('characters');
    $('#opponents').append($('.characters'));
    playerCharacter.append('<span id = "championHP">' + playerCharacter.data('stats').health + ' HP</span>');
  } else if (playerCharacter && !enemyCharacter && playerCharacter.data('stats').health > 0) {
    $('#gameStats').html('<h2>Game Stats</h2><div id="stats"></div>');
    enemyCharacter = $(this);
    $("#defender").append(enemyCharacter);
    $('#fight').append('<button type="button" class="btn btn-danger">Fight!</button>'); 
    enemyCharacter.append('<span id ="enemyHP">' + enemyCharacter.data('stats').health + ' HP</span>');
  }  
  console.log(playerCharacter.data('stats'))
})

function fight() {

  if (playerCharacter.data('stats').health >= 0) {

  playerCharacter.data('stats').attack = ((playerCharacter.data('stats').attack) + 10);

  //player attacks first
  enemyCharacter.data('stats').health -= playerCharacter.data('stats').attack;

  //enemy counters
  playerCharacter.data('stats').health -= enemyCharacter.data('stats').counter;

  console.log(playerCharacter.data('stats'));
  } else {
    alert('Game Over');
    if (confirm ('Would you like to play again?') === true) {
      reset();
    } else {
      alert ('Long Live The Fellowship');
    }
  }
}

function reset() {
  playerCharacter: null;
  enemyCharacter: null;
  $('#defender').empty();
  $('opponenets').empty();
  $('#fight').empty();
  $('#gameStats').empty();
  $('#champion').html($('#samwise'));
  $('#champion').append($('#gollum'));
  $('#champion').append($('#gandalf'));
  $('#champion').append($('#thering'));
}


$("#fight").on("click", function(e) {
  
  fight();
  $("#championHP").text(playerCharacter.data('stats').health + ' HP');
  $('#enemyHP').text(enemyCharacter.data('stats').health + ' HP');

  if (enemyCharacter.data('stats').health > 0) {
    $('#stats').html('<h4>' + playerCharacter.data('stats').name + ' Attack: ' + playerCharacter.data('stats').attack + '<br>' + enemyCharacter.data('stats').name + ' Counter: ' + enemyCharacter.data('stats').counter + '</h4>');
} else if (enemyCharacter.data('stats').health <= 0) {
    $("#defender").empty();
    $('#defender').html('<h1>Choose Next Opponent</h1>')
    $('#fight').empty();
    enemyCharacter = null;
    $('#stats').empty();
  }
})


});