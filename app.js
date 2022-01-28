let points = 0;
let speed = 18;
let lost = 0;
let clicked = false;
const audio = new Audio("boom.wav");

//GESTIONE DEL CLICK (INCREMENTO PUNTEGGIO E VELOCITA')
function gestPoints() {
    points ++;
    document.getElementById('number').innerHTML = points;
    console.log(points);
    document.getElementById('palla').style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
    clicked = true;
    audio.play();
  }

// GESTIONE DELL'ANIMAZIONE
function myMove() {
    const elem = document.getElementById("palla");
    let posY = -10;
    let posX = 150;
    let interval = setInterval(frame, speed);

    function frame() {
      //CONTROLLA SE LA PALLA E' A FINE SCHERMO E SE LOST==5
        if (posY == 100 && lost == 5) { 
          clearInterval(interval);
          alert ('GAMEOVER! Il tuo punteggio è ' + points);
          // CASO IN CUI LA PALLA E' STATA CLICCATA (RIASSEGNA "SPEED" DECREMENTATA A SETINTERVAL)
        } else if (posY == 100 && clicked == true) { 
            clicked = false; // 
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
            setInterval(frame, (speed+0.1))
            // CASO IN CUI LA PALLA NON E' STATA CLICCATA (INCREMENTA "LOST")
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