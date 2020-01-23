// Rover Object Goes Here
// ======================

const DIRECTIONS = ["N", "E", "S", "W", "N"];

let rover = {
    direction = "N"
};


// ======================
function turnLeft(rover){
    let indexRoverDirection = DIRECTIONS.lastIndexOf(rover.direction);
    rover.direction = DIRECTIONS[indexRoverDirection - 1];
    console.log("turnLeft was called!");
  }
  
  function turnRight(rover){
    let indexRoverDirection = DIRECTIONS.indexOf(rover.direction);
    rover.direction = DIRECTIONS[indexRoverDirection + 1];
    console.log("turnRight was called!");
  }
  
  function moveForward(rover){
    console.log("moveForward was called")
  }
  
  