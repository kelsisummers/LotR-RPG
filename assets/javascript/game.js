// Global Variables

var characters = {
  samwise: {
    name: 'Samwise Gamgee',
    health: 125,
    attack: 0,
    counter: 10,
},
  gollum: {
    name: 'Gollum',
    health: 150,
    attack: 0,
    counter: 15,
},
  gandalf: {
    name: 'Gandalf the White',
    health: 200,
    attack: 15,
    counter: 10,
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

// Writing HP to HTML
$('.samwiseHP').text(characters.samwise.health + ' HP');
$('.gollumHP').text(characters.gollum.health + ' HP');
$('.gandalfHP').text(characters.gandalf.health + ' HP');
$('.ringHP').text(characters.ring.health + ' HP');

// Fight Function
function fightingFunction (champion, opponent) {
  champion.attack = ((champion.attack) + 10);
  opponent.health -= champion.attack;
  champion.health -= opponent.counter;

    if (champion.health <= 0) {
      alert('Game Over');
    } else if (opponent.health <= 0) {
      $('#defender').empty();
      $('#opponentStats').empty();
      $('#defender').html('<h1>Choose Next Opponent</h1>');
      $('#opponents').on('click', function() {
        alert('Hello');
      });
    };
};



// Click Samwise for Champion
  $('#samwise').one("click", function () {
    $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
    $('#samwise').removeClass('float');

    // Moving Gollum
    $('#opponents').append( $('#gollum').off('click').removeClass('bg-dark').removeClass('float').addClass('bg-danger'));
    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
    // Moving The Ring
    $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    //Selecting Gollum As Combatant 
    $('#gollum').one('click', function () {
      $('#defender').append($('#gollum'));
      $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#thering').off('click');

      // Fight Gollum
      $('.gollumFight').on('click', function () {
        fightingFunction(characters.samwise, characters.gollum);
        $('.gollumHP').text(characters.gollum.health + ' HP');
        $('.samwiseHP').text(characters.samwise.health + ' HP');
        $('#stats').html('<h4>Samwise Attack: ' + characters.samwise.attack + '<br>Gollum Counter: ' + characters.gollum.counter + '</h4>');
      });
    });

    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#gollum').off('click');
      $('#thering').off('click');

      // Fight Gandalf
      $('.gandalfFight').on('click', function () {
        fightingFunction(characters.samwise, characters.gandalf);
        $('.gandalfHP').text(characters.gandalf.health + ' HP');
        $('.samwiseHP').text(characters.samwise.health + ' HP');
        $('#stats').html('<h4>Samwise Attack: ' + characters.samwise.attack + '<br>Gandalf Counter: ' + characters.gandalf.counter + '</h4>');
      });
    });

    // Selecting The Ring As Combatant
    $('#thering').one('click', function () {
      $('#defender').append($('#thering'));
      $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#gollum').off('click');

      // Fight The Ring
      $('.ringFight').on('click', function () {
        fightingFunction(characters.samwise, characters.ring);
        $('.ringHP').text(characters.ring.health + ' HP');
        $('.samwiseHP').text(characters.samwise.health + ' HP');
        $('#stats').html('<h4>Samwise Attack: ' + characters.samwise.attack + '<br>The One Ring Counter: ' + characters.ring.counter + '</h4>');
      });
    });
  });


  
  // Click Gollum for Champion
  $('#gollum').one("click", function() {
    $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
    $('#gollum').removeClass('float');

    // Moving Samwise
    $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
    // Moving The Ring
    $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Samwise As Combatant
    $('#samwise').one('click', function () {
      $('#defender').append($('#samwise'));
      $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#thering').off('click');

      // Fight Samwise
      $('.samwiseFight').on('click', function () {
        fightingFunction(characters.gollum, characters.samwise);
        $('.gollumHP').text(characters.gollum.health + ' HP');
        $('.samwiseHP').text(characters.samwise.health + ' HP');
        $('#stats').html('<h4>Gollum Attack: ' + characters.gollum.attack + '<br>Samwise Counter: ' + characters.samwise.counter + '</h4>');
      });
    });

    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#samwise').off('click');
      $('#thering').off('click');

      // Fight Gandalf
      $('.gandalfFight').on('click', function () {
        fightingFunction(characters.gollum, characters.gandalf);
        $('.gandalfHP').text(characters.gandalf.health + ' HP');
        $('.gollumHP').text(characters.gollum.health + ' HP');
        $('#stats').html('<h4>Gollum Attack: ' + characters.gollum.attack + '<br>Gandalf Counter: ' + characters.gandalf.counter + '</h4>');
      });
    });

    // Selecting The Ring As Combatant
    $('#thering').one('click', function () {
      $('#defender').append($('#thering'));
      $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#samwise').off('click');

      // Fight The Ring
      $('.ringFight').on('click', function () {
        fightingFunction(characters.gollum, characters.ring);
        $('.ringHP').text(characters.ring.health + ' HP');
        $('.gollumHP').text(characters.gollum.health + ' HP');
        $('#stats').html('<h4>Gollum Attack: ' + characters.gollum.attack + '<br>The One Ring Counter: ' + characters.ring.counter + '</h4>');
      });
    });
  });


  
  // Click Gandalf for Champion
    $('#gandalf').one("click", function() {
      $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
      $('#gandalf').removeClass('float');

      // Moving Samwise
      $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
      // Moving Gollum
      $('#opponents').append( $('#gollum').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
      // Moving The Ring
      $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

      // Selecting Samwise As Combatant
      $('#samwise').one('click', function () {
        $('#defender').append($('#samwise'));
        $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
        $('#gollum').off('click');
        $('#thering').off('click');

        // Fight Samwise
        $('.samwiseFight').on('click', function () {
          fightingFunction(characters.gandalf, characters.samwise);
          $('.gandalfHP').text(characters.gandalf.health + ' HP');
          $('.samwiseHP').text(characters.samwise.health + ' HP');
          $('#stats').html('<h4>Gandalf Attack: ' + characters.gandalf.attack + '<br>Samwise Counter: ' + characters.samwise.counter + '</h4>');
        });
      });

      // Selecting Gollum As Combatant
      $('#gollum').one('click', function () {
        $('#defender').append($('#gollum'));
        $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
        $('#samwise').off('click');
        $('#thering').off('click');

        // Fight Gollum
        $('.gollumFight').on('click', function () {
          fightingFunction(characters.gandalf, characters.gollum);
          $('.gollumHP').text(characters.gollum.health + ' HP');
          $('.gandalfHP').text(characters.gandalf.health + ' HP');
          $('#stats').html('<h4>Gandalf Attack: ' + characters.gandalf.attack + '<br>Gollum Counter: ' + characters.gollum.counter + '</h4>');
        });
      });

      // Selecting The Ring As Combatant
      $('#thering').one('click', function () {
        $('#defender').append($('#thering'));
        $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
        $('#gollum').off('click');
        $('#samwise').off('click');

        // Fight The Ring
        $('.ringFight').on('click', function () {
          fightingFunction(characters.gandalf, characters.ring);
          $('.ringHP').text(characters.ring.health + ' HP');
          $('.gandalfHP').text(characters.gandalf.health + ' HP');
          $('#stats').html('<h4>Gandalf Attack: ' + characters.gandalf.attack + '<br>The One Ring Counter: ' + characters.ring.counter + '</h4>');
        });
      });
    });



// Click The Ring for Champion
  $('#thering').one("click", function() {
    $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
    $('#thering').removeClass('float');

    // Moving Samwise
    $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));
    // Moving Gollum
    $('#opponents').append( $('#gollum').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Samwise As Combatant
    $('#samwise').one('click', function () {
      $('#defender').append($('#samwise'));
      $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#gollum').off('click');

      // Fight Samwise
      $('.samwiseFight').on('click', function () {
        fightingFunction(characters.ring, characters.samwise);
        $('.ringHP').text(characters.ring.health + ' HP');
        $('.samwiseHP').text(characters.samwise.health + ' HP');
        $('#stats').html('<h4>The One Ring Attack: ' + characters.ring.attack + '<br>Samwise Counter: ' + characters.samwise.counter + '</h4>');
      });
    });

    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#samwise').off('click');
      $('#gollum').off('click');

      // Fight Gandalf
      $('.gandalfFight').on('click', function () {
        fightingFunction(characters.ring, characters.gandalf);
        $('.gandalfHP').text(characters.gandalf.health + ' HP');
        $('.ringHP').text(characters.ring.health + ' HP');
        $('#stats').html('<h4>The One Ring Attack: ' + characters.ring.attack + '<br>Gandalf Counter: ' + characters.gandalf.counter + '</h4>');
      });
    });

    // Selecting Gollum As Combatant
    $('#gollum').one('click', function () {
      $('#defender').append($('#gollum'));
      $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#samwise').off('click');

      // Fight Gollum
      $('.gollumFight').on('click', function () {
        fightingFunction(characters.ring, characters.gollum);
        $('.gollumHP').text(characters.gollum.health + ' HP');
        $('.ringHP').text(characters.ring.health + ' HP');
        $('#stats').html('<h4>The One Ring Attack: ' + characters.ring.attack + '<br>Gollum Counter: ' + characters.gollum.counter + '</h4>');
      });
    });
  });