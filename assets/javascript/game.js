// Global Variables
var playerCharacter;
var enemyCharacter;
var enemyDefeat = 0;


// Character Stats
$('#samwise').data("stats", {name: 'Samwise Gamgee', health: 100 , attack: 15, counter: 12});

$('#gollum').data('stats', {name: 'Gollum', health: 120, attack: 0, counter: 12});

$('#gandalf').data('stats', {name: 'Gandalf the White', health: 150, attack: 5, counter: 20});

$('#thering').data('stats', {name: 'The One Ring', health: 180, attack: 15, counter: 7});

// Troubleshooting Objects
console.log($('#samwise').data());
console.log($('#gollum').data());
console.log($('#gandalf').data());
console.log($('#thering').data());

// Game Functions
$(document).ready(function(){

  // Click Functions to Select Champion and Enemy
$(".card").on("click", function(e) {
  

  // Selecting Champion
  if ($(this).hasClass("characters") && !playerCharacter) {
    playerCharacter = $(this);
    $("#champion").append(playerCharacter);
    playerCharacter.off('click');
    playerCharacter.removeClass('characters').removeClass('float');
    $('#opponents').append($('.characters').removeClass('float'));


    // Champion HP Dynamically Revealed and Displayed
    playerCharacter.append('<div id = "championHP">' + playerCharacter.data('stats').health + ' HP</div>');

  // Selecting Enemy 
  } else if (playerCharacter && !enemyCharacter) {
    enemyCharacter = $(this);

    // Creates Game Stats Div
    $('#gameStats').html('<h2>Game Stats</h2><div id="stats"></div>');

    // Moves Enemy and Adds Fight Button
    $("#defender").append(enemyCharacter);
    $('#fight').append('<button type="button" class="btn btn-danger">Fight!</button>');

    // Enemy HP Dynamically Revealed and Displayed
    enemyCharacter.append('<div id ="enemyHP">' + enemyCharacter.data('stats').health + ' HP</div>');
  } 
});


// Fighting Function
function fight() {

  // Champion Strikes First
  playerCharacter.data('stats').attack = ((playerCharacter.data('stats').attack) + 10);

  enemyCharacter.data('stats').health -= playerCharacter.data('stats').attack;

  // Enemy Counters
  playerCharacter.data('stats').health -= enemyCharacter.data('stats').counter;

  if (playerCharacter.data('stats').health <= 0) {
    alert('Game Over')
    if (confirm ('Would you like to play again?') === true) {
      location.reload();
      } else {
      alert ('Long Live The Fellowship');
      $('#champion').empty().addClass('flashit').text('Game Over');
      $('#opponents').empty().addClass('flashit').text('Game Over');
      $('#battle').remove();
      $('#defender').empty();
      $('#gameStats').empty();
      $('#fight').empty();
    }
  } 
};


// Click to Start Fight Function
$("#fight").on("click", function(e) {

  // Call Fight Function
  fight();

  // Updates HP on HTML
  $("#championHP").text(playerCharacter.data('stats').health + ' HP');
  $('#enemyHP').text(enemyCharacter.data('stats').health + ' HP');

  // If The Enemy is Alive
  if (enemyCharacter.data('stats').health > 0) {

    // Update Game Stats
    $('#stats').html('<h4>' + playerCharacter.data('stats').name + ' Attack: ' + playerCharacter.data('stats').attack + '<br>' + enemyCharacter.data('stats').name + ' Counter: ' + enemyCharacter.data('stats').counter + '</h4>');

    // If Not, Wipe The Slate Clean
  } else if (enemyCharacter.data('stats').health <= 0) {
    $('#enemyHP').empty();
    $("#defender").empty();
    $('#defender').html('<h1>Choose Next Opponent</h1>')
    $('#fight').empty();
    enemyCharacter = null;
    $('#stats').empty();
    enemyDefeat++;
      if (enemyDefeat === 3) {
        alert('All Enemies Defeated')
        if (confirm ('Would you like to play again?') === true) {
      location.reload();
      } else {
      alert ('Long Live The Fellowship');
      $('#champion').empty().addClass('flashit').text('Game Over');
      $('#opponents').empty().addClass('flashit').text('Game Over');
      $('#battle').remove();
      $('#defender').empty();
      $('#gameStats').empty();
      $('#fight').empty();
    }
  }
}
})
});