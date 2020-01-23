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

// processCommandsForRover("rffrfflfrff", rover);
processCommandsForRover("fffff", rover);
printTravelLog(rover);


// ======================
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
  
  function moveForward(rover){
    
    console.log("moveForward called")
    let movement = MOVEMENT[rover.direction];
    rover.x += movement.x;
    rover.y += movement.y;
    
    if(10 > rover.x && rover.x > 0 && 10 > rover.y && rover.y > 0){
      rover.travelLog.push({x : rover.x , y : rover.y});  
    } else {
      rover.x -= movement.x;
      rover.y -= movement.y;
      console.log("Can't move: movement will get rover out of bounds");
    }
    
    console.log("Actual position: " + rover.x + " " + rover.y);
    
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

  function printTravelLog(rover){
    console.log("Travel Log: ");
      for(let i = 0; i < rover.travelLog.length; i++)
        console.log(rover.travelLog[i].x + " " + rover.travelLog[i].y);
  }