// Global Variables
var playerCharacter;
var enemyCharacter;

var characters = {
  samwise: {
    name: 'Samwise Gamgee',
    health: 115,
    attack: 0,
    counter: 10,
},
  gollum: {
    name: 'Gollum',
    health: 150,
    attack: 5,
    counter: 15,
},
  gandalf: {
    name: 'Gandalf the White',
    health: 200,
    attack: 15,
    counter: 20,
},
  ring: {
    name: 'The One Ring',
    health: 100,
    attack: 20,
    counter: 5,
}
};

// Troubleshooting Objects
console.log(characters);

// Game Functions
$(document).ready(function(){

// Writing HP to HTML
$('.samwiseHP').text(characters.samwise.health + ' HP');
$('.gollumHP').text(characters.gollum.health + ' HP');
$('.gandalfHP').text(characters.gandalf.health + ' HP');
$('.ringHP').text(characters.ring.health + ' HP');

// Fight Function
// function fightingFunction (champion, opponent) {
//   champion.attack = ((champion.attack) + 10);
//   opponent.health -= champion.attack;
//   champion.health -= opponent.counter;

//     if (champion.health <= 0) {
//       alert('Game Over');
//     } else if (opponent.health <= 0) {
//       $('#defender').empty();
//       $('#opponentStats').empty();
//       $('#defender').html('<h1>Choose Next Opponent</h1>');
//       $('#opponents').on('click', function() {
//         $('#defender').html($('#opponents'));
//       });
//     };
// };


// this method will need a separate click handler for your attack button

$(".card").on("click", function(e) {
  console.log(this);
  
  if ($(this).hasClass("characters") && !playerCharacter) {
    console.log("Im a character");
    playerCharacter = $(this);
    $("#champion").append(playerCharacter);
    playerCharacter.removeClass('characters');
    $('#opponents').append($('.characters'));
    //steps to set up our player character
  } else if (playerCharacter && !enemyCharacter) {
    console.log("I'm an enemy");
    enemyCharacter = $(this);
    $("#defender").append(enemyCharacter);
    $('#fight').append('<button type="button" class="btn btn-danger">Fight!</button>');
    // $("#fight").prop("disabled", false);
    // create the attack button
    // build characters based off of objects     
  } 
  

  // else {
  //   // this technically would not happen here, but illustrates how a dead character could be handled with this method 
  //   // enemy is considered dead
  //   $("#defender").empty();
  //   enemyCharacter = null;
  // }
})

function fight() {

  playerCharacter.attack = ((playerCharacter.attack) + 10);

  //player attacks first
  enemyCharacter.health -= playerCharacter.attack;
  

  // surprise thingy here -- logic
  
  //enemy counters
  playerCharacter -= enemyCharacter.counter;

  // playerCharacter.text(playerCharacter.health + ' HP');
  // enemyCharacter.text(enemyCharacter.health + ' HP');
  // console.log(this);
  console.log(playerCharacter.attack);
}


$("#fight").on("click", function(e) {
  console.log("call our fight function");
  console.log(playerCharacter);
  fight();
})


});