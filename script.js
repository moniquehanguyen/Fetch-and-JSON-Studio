window.addEventListener("load", function() {
    function displayAstro(data) {
        let info = "";
        for (let i = 0; i < data.length; i++) {
            info +=
                `<div class="astronaut">
                <div class="bio">
                <h3>${data[i].firstName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li><span class="active">Active: ${data[i].active}</span></li>
                        <li>Skills: ${data[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${data[i].picture}">
                </div>
                `
        }
        return info;
    }

    function sortBySpaceTime(data) {
        data.sort(function(a, b) {
            return b.hoursInSpace - a.hoursInSpace;
        });
    }

    function countAstro(data) {
        let number = 0;
        for (let i = 0; i < data.length; i++) {
            number += 1
        }
        return number;
    }

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const counter = document.getElementById("counter");
            const container = document.getElementById("container");
            counter.innerHTML = `<h2>Number of Astronauts: ${countAstro(json)}</h2>`
            sortBySpaceTime(json);
            container.innerHTML = displayAstro(json);
        })
    })
});