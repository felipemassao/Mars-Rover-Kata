const DIRECTIONS = ["N", "E", "S", "W", "N"];
const MOVEMENT = {
  N : {x: 0, y:-1},
  E : {x: 1, y: 0},
  S : {x: 0, y: 1},
  W : {x: -1, y: 0}
};

let rover = {
    direction : "N",
    x : 0,
    y : 0
};

//turnLeft(rover);
//turnRight(rover);

// turnRight(rover);
// moveForward(rover);
// turnRight(rover);
// moveForward(rover);

processCommandsForRover("rffrfflfrff", rover);


// ======================
function turnLeft(rover){
  
    console.log("turnLeft was called!");
    let indexRoverDirection = DIRECTIONS.lastIndexOf(rover.direction);
    rover.direction = DIRECTIONS[indexRoverDirection - 1];
    console.log(rover.direction)
    
  }
  
  function turnRight(rover){
    
    console.log("turnRight was called!");
    let indexRoverDirection = DIRECTIONS.indexOf(rover.direction);
    rover.direction = DIRECTIONS[indexRoverDirection + 1];
    console.log(rover.direction)
    
  }
  
  function moveForward(rover){
    
    console.log("moveForward was called")
    let movement = MOVEMENT[rover.direction];
    rover.x += movement.x;
    rover.y += movement.y;
    console.log(rover.x + " " +rover.y);
    
  }
  
  function processCommandsForRover(commandList, rover){
    for(let i = 0; i < commandList.length; i++){
      
      switch(commandList[i]){
        case "f":
          moveForward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
      }
      
      console.log("Processed " + commandList[i]);
    }
  }