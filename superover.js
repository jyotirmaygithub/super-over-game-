let hitbutton = document.getElementById("strike");
let resetbutton = document.getElementById("reset");
let balls = document.querySelectorAll(".ball");
let indiascore = document.getElementById("india-score");
let indiawickets = document.getElementById("india-wicket");
let pakistanscore = document.getElementById("pakistan-score");
let pakistanwicket = document.getElementById("pakistan-wicket");
let bothboxes = document.querySelectorAll(".player_calculation");

//these are some audios which i am using throughout the program
const strikeaudio = new Audio("http://bit.ly/so-ball-hit");
const resultaudio = new Audio("http://bit.ly/so-crowd-cheer");

let run_array = [0, 1, 2, 3, 4, 5, 6, "w"]; //this is an array
let num = 0;
let tema1wicket = 0;
let scorecardteam1 = 0;
let team2wicket = 0;
let scorecardteam2 = 0;
let team = 1;

//through this function i am showing result of the match
function result() {
    resultaudio.play();
    if (scorecardteam1 > scorecardteam2) {
        alert(`India won by ${scorecardteam1 - scorecardteam2}.`);
    } else if (scorecardteam2 > scorecardteam1) {
        alert(`Pakistan won by ${scorecardteam2 - scorecardteam1}`);
    } else {
        alert(`Match tie : Another super over `);
        window.location.reload()
    }
}


//this is one function to guide entire project with too many functionality
hitbutton.addEventListener("click", function () {
    strikeaudio.pause();
    strikeaudio.currentTime = 0;
    strikeaudio.play();

    let random_index = Math.floor(Math.random() * run_array.length);
    let random_runorwicket = run_array[random_index];

    balls[num].classList.add("sudden-change");

    if (team == 2) {
        console.log("value of num = " + num);
        balls[num].innerHTML = random_runorwicket;
        if (random_runorwicket == "w") {
            team2wicket++;
            pakistanwicket.innerHTML = team2wicket;
            if (team2wicket == 2) {
                team = 3;
                num = 11;
            }
        } else {
            scorecardteam2 += random_runorwicket;
            pakistanscore.innerHTML = scorecardteam2;
            if (scorecardteam2 > scorecardteam1) {
                result();
            }
        }
    } else if (team == 1) {
        balls[num].innerHTML = random_runorwicket;
        if (random_runorwicket == "w") {
            tema1wicket++;
            indiawickets.innerHTML = tema1wicket;
            if (tema1wicket == 2) {
                team = 2;
                num = 5;
            }
        } else {
            scorecardteam1 += random_runorwicket;
            indiascore.innerHTML = scorecardteam1;
        }
    }
    if (num == 5) {
        team = 2;
    }
    else if (num == 11 || team == 3) {
        if (scorecardteam1 > scorecardteam2) {
            result();
        }
        else if (scorecardteam2 == scorecardteam1) {
            result();
        }
    }
    num++;
});

//this is a reset function 
resetbutton.addEventListener("click", function () {
    window.location.reload();
});
