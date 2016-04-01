$(document).ready(function() {

  // to do:
  // 1) display the world of bricks/coin
  // 2) move pacman up and down
  var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ];
  var score = 0;
  var pacman = {
    x: 1,
    y: 1
  }

  function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
      output += '\n<div class="row">\n';
      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] == 2)
          output += "<div class='brick'></div>";
        else if (world[i][j] == 1)
          output += "<div class='coin'></div>";
        if (world[i][j] == 0)
          output += "<div class='empty'></div>";
      }
      output += '\n</div>';
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
  }

  function displayPacman() {
    var pac = document.getElementById('pacman');
    pac.style.top = pacman.y*20 + "px";
    pac.style.left = pacman.x*20 + "px";
  }
  function displayScore() {
    var pac = document.getElementById('score');
    score.innerHTML = score;

  }
  displayWorld();
  displayPacman();

  document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {
      pacman.x--;
      console.log(pacman.x);
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] !=2) {
      pacman.x++;
    } else if (e.keyCode == 38 && world[pacman.y+1][pacman.x]) {
      pacman.y--;
    } else if (e.keyCode == 40 && world[pacman.y-1][pacman.x]) {
      pacman.y++;
    }

    if(world[pacman.y][pacman.x] == 1) {
      world[pacman.y][pacman.x] = 0;
      score +=10;
      displayWorld();
      displayScore();
      console.log(score);
    }
    displayPacman();
  }



});
