// Rover Object Goes Here
// ======================

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
    let movement = MOVEMENT[rover.direction];
    rover.x += movement.x;
    rover.y += movement.y;
    console.log("moveForward was called")
  }
  
  