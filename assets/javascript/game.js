var champions = ['assets/images/samwise.jpg', 'assets/images/gollum.jpg', 'assets/images/gandalf.jpg', 'assets/images/ring.jpg']

console.log(champions);

console.log(champions.slice(3));


var samwise = {
    health: 150,
    attack: 150,
    counter: 150,
};

console.log(samwise);

var gollum = {
    health: 150,
    attack: 150,
    counter: 150,
};

console.log(gollum);

var gandalf = {
    health: 150,
    attack: 150,
    counter: 150,
};

console.log(gandalf);

var thering = {
    health: 150,
    attack: 150,
    counter: 150,
};

console.log(thering);

number = 0;

for (var i = 0; i < champions.length; i++) {
    number++;
    $("#champion").append("<img src=" + champions[i] + " class='" + number + "'>");
  }

//   $('img').on("click", function() {
//       champions.slice(1,2);
//       console.log(champions);
//   })
