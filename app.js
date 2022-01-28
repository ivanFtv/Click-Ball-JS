let points = 0;
let speed = 18;
let lost = 0;
let clicked = false;
const audio = new Audio("boom.wav");

//CLICK MANAGEMENT (INCREASE POINTS)
function gestPoints() {
    points ++;
    document.getElementById('number').innerHTML = points;
    console.log(points);
    document.getElementById('palla').style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
    clicked = true;
    audio.play();
  }

// ANIMATION MANAGEMENT
function myMove() {
    const elem = document.getElementById("palla");
    let posY = -10;
    let posX = 150;
    let interval = setInterval(frame, speed);

    function frame() {
      //CHECK IF THE BALL IT'S AT THE END OF SCREEN AND IF LOST==5
        if (posY == 100 && lost == 5) { 
          clearInterval(interval);
          alert ('GAMEOVER! Il tuo punteggio è ' + points);
          // CASE THE BALL IT'S CLICKED (DECREASE "SPEED" AND SET UPDATE SETINTERVAL)
        } else if (posY == 100 && clicked == true) { 
            clicked = false; // 
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
            setInterval(frame, (speed+0.1))
            // CASE THE BALL IT'S NOT CLICKED (INCREASE "LOST")
          } else if (posY == 100 && clicked == false) { 
            lost += 1;
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
          } else {
            elem.style.left = posX + 'px';
            elem.style.top = posY + '%';
            posY++; 
        }}}
myMove();
