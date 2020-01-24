const DIRECTIONS = ["N", "E", "S", "W", "N"];
const MOVEMENT = {
  N : {x: 0, y:-1},
  E : {x: 1, y: 0},
  S : {x: 0, y: 1},
  W : {x: -1, y: 0}
};

let grid = [];
initializeGrid(grid);

// add obstacles here

grid[3][0] = "X";
grid[2][1] = "X";
grid[0][4] = "X";

let rovers = []
initilizeRovers(grid, rovers);

printGrid(grid); // print initial grid configuration

processCommandsForRovers("rfffffbbbbbb", rovers); // issue comands here

for(let i = 0; i < 3; i++){
  printTravelLog(rovers[i], i);
}

printGrid(grid); // print final grid configuration

// ======================

function initializeGrid(grid){
  for(let i = 0; i < 10; i++){
    grid.push([]);
    for(let j = 0; j < 10; j++){
      grid[i].push("_");
    }
  }
}

function initilizeRovers(grid, rovers){
  for(let i = 0; i < 3; i++){
    let randomPosition;
    
    do{
      randomPosition = { 
        x : Math.floor(10 * Math.random()),
        y : Math.floor(10 * Math.random())
      };
      // console.log(randomPosition);
    }while(grid[randomPosition.x][randomPosition.y] !== "_");
    
    rovers.push({
      direction : "N",
      x : randomPosition.x,
      y : randomPosition.y,
      travelLog : [randomPosition]
    });
    
    grid[randomPosition.x][randomPosition.y] = `${i}`;
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
  
function processCommandsForRovers(commandList, rovers){
  
  let roverIndex = 0;
  
  for(let i = 0; i < commandList.length; i++){
    
    console.log("Rover number " + roverIndex);
    switch(commandList[i]){
      case "f":
        move(rovers[roverIndex], 1);
        break;
      case "b":
        move(rovers[roverIndex], -1);
        break;
      case "r":
        turnRight(rovers[roverIndex]);
        break;
      case "l":
        turnLeft(rovers[roverIndex]);
        break;
    }
    
    roverIndex++;
    if(roverIndex >= rovers.length){
      roverIndex = 0;
    }
      
    console.log("Processed " + commandList[i]);
  }
}

function printTravelLog(rover, number){
  console.log(`Travel log for rover number ${number}: `);
    for(let i = 0; i < rover.travelLog.length; i++)
      console.log(rover.travelLog[i].x + " " + rover.travelLog[i].y);
}
