window.addEventListener("load", event => {
    let takeOff = document.querySelector("#takeoff");
    takeOff.addEventListener("click", event => {
        let takeOffSure = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffSure) {
            document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
        };
    });
    document.querySelector("#landing").addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");
        document.querySelector("#flightStatus").innerHTML = "The shuttle has landed.";
        document.querySelector("#shuttleBackground").style.backgroundColor = "rgb(99, 148, 79)";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });
    document.querySelector("#missionAbort").addEventListener("click", event => {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.querySelector("#flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "rgb(99, 148, 79)";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        };
    });
    document.querySelector("#")
});