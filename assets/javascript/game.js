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

    //Selecting Gollum As Combatant 
    $('#gollum').one('click', function () {
      $('#defender').append($('#gollum'));
      $('#gollum').append('<button type="button" class="btn btn-danger gollumFight">Fight!</button>');
      $('#gandalf').off('click');
      $('#thering').off('click');

      // Fighting Gollum First
      $('.gollumFight').on('click', function () {
        samwise.attack = ((samwise.attack) + 10);
        gollum.health = gollum.health - samwise.attack;
        samwise.health = samwise.health - gollum.counter;
        $('.gollumHP').text(gollum.health + ' HP');
        $('.samwiseHP').text(samwise.health + ' HP');
        $('#stats').html('<h4>Samwise Attack: ' + samwise.attack + '<br>Gollum Counter: ' + gollum.counter + '</h4>');

        // Sam Dies
        if (samwise.health <= 0) {
          alert('Game Over');

        // Gollum Dies; Clear Board
        } else if (gollum.health <= 0) {
          $('#defender').empty();
          $('#opponentStats').empty();
          $('#defender').html('<h1>Choose Next Opponent</h1>');
          
          // Gandalf is Chosen
          $('#gandalf').one('click', function (){
            $('#defender').html($('#gandalf').append('<button type="button" class="btn btn-danger gandalfFight">Fight!</button>'));

            $('.gandalfFight').on('click', function () {
              samwise.attack = ((samwise.attack) + 10);
              gandalf.health = gandalf.health - samwise.attack;
              $('.gandalfHP').text(gandalf.health + ' HP');
              samwise.health = samwise.health - gandalf.counter
              $('#stats').html('<h4>Samwise Attack: ' + samwise.attack + '<br>Gandalf Counter: ' + gandalf.counter + '</h4>');

              // Sam Dies
              if (samwise.health <= 0) {
               alert('Game Over');
              // Gandalf Dies; Clear Board
              } else if (gandalf.health <= 0) {
              $('#defender').empty();
              $('#opponentStats').empty();
              $('#defender').html('<h1>Choose Next Opponent</h1>');

              // The Ring is Chosen
              $('#thering').one('click', function() {
                $('#defender').html($('#thering').append('<button type="button" class="btn btn-danger ringFight">Fight!</button>'));  
                
                $('.ringFight').on('click', function () {
                  samwise.attack = ((samwise.attack) + 10);
                  ring.health = ring.health - samwise.attack;
                  $('.ringHP').text(ring.health + ' HP');
                  samwise.health = samwise.health - ring.counter
                  $('#stats').html('<h4>Samwise Attack: ' + samwise.attack + '<br>The One Ring Counter: ' + ring.counter + '</h4>');

                  // Sam Dies
                  if (samwise.health <= 0) {
                    alert('Game Over');
                  } else if (ring.health <=0) {
                    alert('You win!');
                  }
                })
              })
              
              }
            });
          });
        };
      });
    });

    // Moving Gandalf
    $('#opponents').append( $('#gandalf').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

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

    // Moving The Ring
    $('#opponents').append( $('#thering').off('click').removeClass('bg-dark').addClass('bg-danger').removeClass('float'));

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