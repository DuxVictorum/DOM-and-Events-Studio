window.addEventListener("load", event => {
    let shuttleHeight = 0;
    let rocket = document.getElementById("rocket");
    let takeOff = document.querySelector("#takeoff");
    let launched = false;
    takeOff.addEventListener("click", event => {
        let takeOffSure = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffSure) {
            launched = true;
            document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
            rocket.style.top = "230px";
            
        };
    });
    document.querySelector("#landing").addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");
        launched = false;
        document.querySelector("#flightStatus").innerHTML = "The shuttle has landed.";
        document.querySelector("#shuttleBackground").style.backgroundColor = "rgb(99, 148, 79)";
        rocket.style.top = "240px";
        rocket.style.left = "0px";
        shuttleHeight = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
    });
    document.querySelector("#missionAbort").addEventListener("click", event => {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            launched = false;
            document.querySelector("#flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "rgb(99, 148, 79)";
            shuttleHeight = 0;
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
        };
    });
    
    let top = 230;
    let left = 0;
    document.querySelector("#upb").addEventListener("click", event => {
        if (launched && top > 0) {
            shuttleHeight += 10000;
            top -= 10;
            rocket.setAttribute("style", "position: relative; top: " + String(top) + "px; left: " + String(left) + "px");
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
        }
    });
    document.querySelector("#downb").addEventListener("click", event => {
        if (launched && top < 240) {
            shuttleHeight -= 10000;
            top += 10;
            rocket.setAttribute("style", "position: relative; top: " + String(top) + "px; left: " + String(left) + "px");
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
        }
    });
    document.querySelector("#rightb").addEventListener("click", event => {
        if (launched) {
            left += 10;
            rocket.setAttribute("style", "position: relative; top: " + String(top) + "px; left: " + String(left) + "px");
        }
    });
    document.querySelector("#leftb").addEventListener("click", event => {
        if (launched) {
            left -= 10;
            rocket.setAttribute("style", "position: relative; top: " + String(top) + "px; left: " + String(left) + "px");
        }
    });
});