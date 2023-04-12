let tapControler = document.querySelector('.tap-controler'),
    drop = document.querySelector('.drop');

let waterLevel = 0;
const waterLevelDiv = document.getElementById("water-level");

function openHandler(){
  if(tapControler.classList.contains('opened')){
    tapControler.classList.remove('opened')
    drop.classList.remove('dropping')
  } else{
    tapControler.classList.add('opened')
    drop.classList.add('dropping')
    removeWater();
  }
}
tapControler.addEventListener('click', openHandler);


function addWater() {
  if (waterLevel < 100) {
    waterLevel += 25;
    waterLevelDiv.style.height = `${waterLevel}%`;
  }
}

function removeWater() {
  if (waterLevel > 0) {
    waterLevel -= 25;
    waterLevelDiv.style.height = `${waterLevel}%`;
  }
}

