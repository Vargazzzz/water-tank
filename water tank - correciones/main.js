let waterLevel = 0;
const waterLevelDiv = document.getElementById("water-level");


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

