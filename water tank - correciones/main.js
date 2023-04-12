let tapControler = document.querySelector('.tap-controler'), /* Variable que selecciona la llave como boto de abrir agua */
    drop = document.querySelector('.drop'); /* Variable que busca y selecciona los estilos de la gota*/ 

let waterLevel = 0; /* indica el nivel del agua */ 
const waterLevelDiv = document.getElementById("water-level"); /* busca y selecciona el div con el que se controla el nivel del agua */ 

function openHandler(){ /*Funcion que permite abrir la llave */ 
  if(tapControler.classList.contains('opened')){ /*  Si la llave esta abierta lo que hace es que cuando le das click la cierra*/ 
    tapControler.classList.remove('opened')
    drop.classList.remove('dropping')
  } else{
    tapControler.classList.add('opened') /* Si por el contrario esta cerrada la abre y deja caer la gota mientras sube el agua */ 
    drop.classList.add('dropping')
    removeWater();
  }
}
tapControler.addEventListener('click', openHandler); /* Escuchador de eventos que se activa con un click cuando se  le da a la llave */ 


function addWater() { /* Funcion qque añade el nivel del agua mientras que el agua no este en su tope de ser asi no permite que se siga llenando */ 
  if (waterLevel < 100) {
    waterLevel += 25;
    waterLevelDiv.style.height = `${waterLevel}%`;
  }
}

function removeWater() { /* Funcion que remueve el agua mientras que el nivel no haya llegado a 0 */ 
  if (waterLevel > 0) {
    waterLevel -= 25;
    waterLevelDiv.style.height = `${waterLevel}%`;
  }
}

