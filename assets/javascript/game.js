var samwise = {
    health: 125,
    attack: 0,
    counter: 10,
};

console.log(samwise);

var gollum = {
    health: 150,
    attack: 0,
    counter: 15,
};

console.log(gollum);

var gandalf = {
    health: 200,
    attack: 15,
    counter: 10,
};

console.log(gandalf);

var ring = {
    health: 100,
    attack: 20,
    counter: 5,
};

console.log(ring);

function fightFunction(champion, opponent) {
  champion.attack = ((champion.attack) + 10);
  opponent.health = opponent.health - champion.attack;
  champion.health = champion.health - opponent.counter;
  if (champion.health <= 0) {
    alert('Game Over');
  } 
  // else if (opponent.health <= 0) {

  // }
}

console.log(fightFunction(samwise, gollum));

// Writing Health Points to HTML
$('.samwiseHP').text(samwise.health + ' HP');
$('.gollumHP').text(gollum.health + ' HP');
$('.gandalfHP').text(gandalf.health + ' HP');
$('.ringHP').text(ring.health + ' HP');



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

      // Fighting Gollum First
      $('.gollumFight').on('click', function () {
        gollum.health = gollum.health -10;
        $('.gollumHP').text(gollum.health + ' HP');
      });
    });


    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#gollum').off('click');
      $('#thering').off('click');

      // Fighting Gandalf
      $('.gandalfFight').on('click', function () {
        gandalf.health = gandalf.health -10;
        $('.gandalfHP').text(gandalf.health + ' HP');
      });
    });

    // Selecting The Ring As Combatant
    $('#thering').one('click', function () {
      $('#defender').append($('#thering'));
      $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#gollum').off('click');

      // Fighting The Ring
      $('.ringFight').on('click', function () {
        ring.health = ring.health -10;
        $('.ringHP').text(ring.health + ' HP');
      });
    });
  });


  
  // Click Gollum for Champion
  $('#gollum').one("click", function() {
    $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
    $('#gollum').removeClass('float');

    // Moving Samwise
    $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Samwise As Combatant
    $('#samwise').one('click', function () {
      $('#defender').append($('#samwise'));
      $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#thering').off('click');

      // Fighting Samwise
      $('.samwiseFight').on('click', function () {
        samwise.health = samwise.health -10;
        $('.samwiseHP').text(samwise.health + ' HP');
      });
    });

    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#samwise').off('click');
      $('#thering').off('click');

      // Fighting Gandalf
      $('.gandalfFight').on('click', function () {
        gandalf.health = gandalf.health -10;
        $('.gandalfHP').text(gandalf.health + ' HP');
      });
    });

    // Move The Ring
    $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting The Ring As Combatant
    $('#thering').one('click', function () {
      $('#defender').append($('#thering'));
      $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#samwise').off('click');

      // Fighting The Ring
      $('.ringFight').on('click', function () {
        ring.health = ring.health -10;
        $('.ringHP').text(ring.health + ' HP');
      });
    });
  });


  
  // Click Gandalf for Champion
    $('#gandalf').one("click", function() {
      $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
      $('#gandalf').removeClass('float');

      // Moving Samwise
      $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

      // Selecting Samwise As Combatant
      $('#samwise').one('click', function () {
        $('#defender').append($('#samwise'));
        $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
        $('#gollum').off('click');
        $('#thering').off('click');

        // Fight Samwise
        $('.samwiseFight').on('click', function () {
          samwise.health = samwise.health -10;
          $('.samwiseHP').text(samwise.health + ' HP');
        });
      });

      // Moving Gollum
      $('#opponents').append( $('#gollum').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

      // Selecting Gollum As Combatant
      $('#gollum').one('click', function () {
        $('#defender').append($('#gollum'));
        $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
        $('#samwise').off('click');
        $('#thering').off('click');

        // Fight Gollum
        $('.gollumFight').on('click', function () {
          gollum.health = gollum.health -10;
          $('.gollumHP').text(gollum.health + ' HP');
        });
      });

      // Moving The Ring
      $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

      // Selecting The Ring As Combatant
      $('#thering').one('click', function () {
        $('#defender').append($('#thering'));
        $('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>');
        $('#gollum').off('click');
        $('#samwise').off('click');

        // Fight The Ring
        $('.ringFight').on('click', function () {
          ring.health = ring.health -10;
          $('.ringHP').text(ring.health + ' HP');
        });
      });
    });



// Click The Ring for Champion
  $('#thering').one("click", function() {
    $('#champion').append('<h2>Game Stats</h2><div id="stats"></div>');
    $('#thering').removeClass('float');

    // Moving Samwise
    $('#opponents').append( $('#samwise').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Samwise As Combatant
    $('#samwise').one('click', function () {
      $('#defender').append($('#samwise'));
      $('#samwise').append('<button type="button" class="btn btn-danger samwiseFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#gollum').off('click');

      // Fight Samwise
      $('.samwiseFight').on('click', function () {
        samwise.health = samwise.health -10;
        $('.samwiseHP').text(samwise.health + ' HP');
      });
    });
    
    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Gandalf As Combatant
    $('#gandalf').one('click', function () {
      $('#defender').append($('#gandalf'));
      $('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>');
      $('#samwise').off('click');
      $('#gollum').off('click');

      // Fight Gandalf
      $('.gandalfFight').on('click', function () {
        gandalf.health = gandalf.health -10;
        $('.gandalfHP').text(gandalf.health + ' HP');
      });
    });

    // Moving Gollum
    $('#opponents').append( $('#gollum').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

    // Selecting Gollum As Combatant
    $('#gollum').one('click', function () {
      $('#defender').append($('#gollum'));
      $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#samwise').off('click');

      // Fight Gollum
      $('.gollumFight').on('click', function () {
        gollum.health = gollum.health -10;
        $('.gollumHP').text(gollum.health + ' HP');
      });
    });
  });