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
    y : 0,
    travelLog : [{x : 0 , y : 0}]
};

let grid = [];
initializeGrid(grid);

grid[3][0] = "O";
grid[2][1] = "O";
grid[0][4] = "O";

// printGrid(grid);

// processCommandsForRover("rffrfflfrff", rover);
// processCommandsForRover("rfbbffrffrbbb", rover);
// processCommandsForRover("zzzzrff", rover);
processCommandsForRover("rfffffbbbbbb", rover);

printTravelLog(rover);

// ======================

function initializeGrid(grid){
  for(let i = 0; i < 10; i++){
    grid.push([]);
    for(let j = 0; j < 10; j++){
      grid[i].push("_");
    }
  }
}

function printGrid(grid){
  for(let i = 0; i < 10; i++){
    console.log(grid[i]);
  }
}

function turnLeft(rover){
  
  console.log("turnLeft called!");
  let indexRoverDirection = DIRECTIONS.lastIndexOf(rover.direction);
  rover.direction = DIRECTIONS[indexRoverDirection - 1];
  console.log(rover.direction)
    
}
  
function turnRight(rover){
    
  console.log("turnRight called!");
  let indexRoverDirection = DIRECTIONS.indexOf(rover.direction);
  rover.direction = DIRECTIONS[indexRoverDirection + 1];
  console.log(rover.direction)
    
}
  
function move(rover, directionMultiplier){
  
  console.log("move called, direction: " + directionMultiplier)
  let movement = MOVEMENT[rover.direction];
  rover.x += directionMultiplier * movement.x;
  rover.y += directionMultiplier * movement.y;
  
  let canMove = true;
  if(10 < rover.x || rover.x < 0 || 10 < rover.y || rover.y < 0){
    console.log("Can't move: movement will get rover out of bounds");
    canMove = false;
  } else if (grid[rover.x][rover.y] !== "_"){
    console.log("Can't move: there is an obstacle");
    canMove = false;
  }
  
  if(canMove === true){
    rover.travelLog.push({x : rover.x , y : rover.y});
  } else {
    rover.x -= directionMultiplier * movement.x;
    rover.y -= directionMultiplier * movement.y;
  }
    
  console.log("Actual position: " + rover.x + " " + rover.y);
}
  
function processCommandsForRover(commandList, rover){
  
  for(let i = 0; i < commandList.length; i++){
      
    switch(commandList[i]){
      case "f":
        move(rover, 1);
        break;
      case "b":
        move(rover, -1);
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

function printTravelLog(rover){
  console.log("Travel Log: ");
    for(let i = 0; i < rover.travelLog.length; i++)
      console.log(rover.travelLog[i].x + " " + rover.travelLog[i].y);
}

