$(document).ready(function() {

    // to do:
    // 1) display the world of bricks/coin
    // 2) move pacman up and down
    var world = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 0, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 0, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 0, 0, 0, 0, 1, 2, 2, 2, 0, 1, 1, 1, 5, 1, 6, 1, 1, 0, 2, 2, 2, 1, 0, 0, 0, 0, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2],
      [2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
      [2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    var pacman = {
      x: 1,
      y: 1,
      score: 0,

    }

    function displayWorld() {
      var output = '';
      for (var i = 0; i < world.length; i++) {
        output += '\n<div class="row">\n';
        for (var j = 0; j < world[i].length; j++) {
          if (world[i][j] == 2) {
            output += "<div class='brick'></div>";
          }
          // if (world[i][j] == 4) {
          //   output += "<div class='brick boundary'></div>";
          // }
          if (world[i][j] == 1) {
            output += "<div class='coin'></div>";
          }
          if (world[i][j] == 0) {
            output += "<div class='empty'></div>";
          }
          if (world[i][j] == 3) {
            // alert("cherry");
            output += "<div class='cherry'></div>"
          }
          if (world[i][j] == 4) {
            // alert("cherry");
            output += "<div class='blue_ghost'></div>"
          }
        }
        output += '\n</div>';
      }
      // console.log(output);
      document.getElementById('world').innerHTML = output;
    }

    function displayPacman() {
      var pac = document.getElementById('pacman');
      pac.style.top = pacman.y * 20 + "px";
      pac.style.left = pacman.x * 20 + "px"
    }

    displayWorld();
    displayPacman();

    document.onkeydown = function(e) {
        // console.log(e.which);
        console.log(pacman.direction);
        console.log($('#pacman').getRotateAngle());
        if (e.keyCode == 37) { //left boundary
          $('#pacman').rotate(180);

        if (world[pacman.y][pacman.x - 1] != 2) {
          pacman.x--;
        }
        pacman.direction = "left";
        console.log(pacman.direction);

      } else if (e.keyCode == 39) { //right boundary
        console.log(pacman.direction);
        console.log($('#pacman').getRotateAngle());

      $('#pacman').rotate(0);
    if (world[pacman.y][pacman.x + 1] != 2) {
      pacman.x++;
    }
    pacman.direction = "right";
    console.log(pacman.direction);

  } else if (e.keyCode == 38) { //up boundary
    console.log(pacman.direction);
    console.log($('#pacman').getRotateAngle());

  $('#pacman').rotate(270);
  if (world[pacman.y - 1][pacman.x] != 2) {
    pacman.y--;
  }
  pacman.direction = "up"; console.log(pacman.direction);
}
else if (e.keyCode == 40) { //down boundary
  console.log(pacman.direction);
  console.log($('#pacman').getRotateAngle());

$('#pacman').rotate(90);
if (world[pacman.y + 1][pacman.x] != 2) {
  pacman.y++;
}
pacman.direction = "down";
console.log(pacman.direction);
}

if (world[pacman.y][pacman.x] == 1) {
  world[pacman.y][pacman.x] = 0;
  pacman.score += 1;
  document.getElementById('score').innerHTML = pacman.score;
  displayWorld();
}
if (world[pacman.y][pacman.x] == 3) {
  // alert('foud cherry');
  world[pacman.y][pacman.x] = 0;
  pacman.score += 50;
  document.getElementById('score').innerHTML = pacman.score;
  displayWorld();
}


displayPacman();
}



});
