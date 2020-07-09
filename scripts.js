// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = init;
let button = null;
let paragraph = null;
let missionAbort = null;
let spaceShuttleHeight = 0;
let rocket = document.getElementById("rocket");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
document.getElementById("rocket").style = "position: relative";

function init () {
   
   button = document.getElementById("takeoff");
   button.addEventListener("click", function() {
      if (window.confirm("Confirm that the shuttle is ready for takeoff.") === true) {
          document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
          document.getElementById("shuttleBackground").style.backgroundColor = "blue";
          document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight + 10000;
      };
   });
   
   button = document.getElementById("landing");
   button.addEventListener("click", function() {
       window.confirm("The shuttle is landing. Landing gear engaged.");
       document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
       document.getElementById("shuttleBackground").style.backgroundColor = "green";
       document.getElementById("spaceShuttleHeight").innerHTML = 0;
   });
   
   button = document.getElementById("missionAbort");
   button.addEventListener("click", function() {
      if (window.confirm("Confirm that you want to about the mission.") === true) {
          document.getElementById("flightStatus").innerHTML = "Mission aborted.";
          document.getElementById("shuttleBackground").style.backgroundColor = "green";
          document.getElementById("spaceShuttleHeight").innerHTML = 0;
      };
    });

    upButton.addEventListener("click", function() {
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    });

    downButton.addEventListener("click", function() {
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });

    leftButton.addEventListener("click", function() {
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    });

    rightButton.addEventListener("click", function() {
        let positionString = rocket.style.right;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });
    
    
    
};

window.onload = init;