var startBtn = document.getElementById('startBtn');
var wrapp = document.getElementById('wrapp');
var player1Btn = document.getElementById('player1Btn');
var player2Btn = document.getElementById('player2Btn');
var playAgain = document.getElementById('playAgain');
var container = document.getElementsByClassName('container')[0];
var player1Div = document.getElementsByClassName('player1')[0];
var player2Div = document.getElementsByClassName('player2')[0];
var player1Name = document.getElementById('player1Name');
var player2Name = document.getElementById('player2Name');
var player1Current = document.getElementById('player1Current');
var player2Current = document.getElementById('player2Current');
var player1Score = document.getElementById('player1Scoree');
var player2Score = document.getElementById('player2Scoree');
var player1TotalScore = 0;
var player2TotalScore = 0;

playAgain.addEventListener('click',clearDisplay);

function clearDisplay(){
    rollingCounter = 1;
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    player1Current.innerHTML = 0;
    player2Current.innerHTML = 0;
    player1TotalScore = 0;
    player2TotalScore = 0;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
    player1Div.style.background = "#fff";
    player1Div.style.color = "#000";
    player2Div.style.background = "#fff";
    player2Div.style.color = "#000";
    playAgain.style.display = "none";
    circle.innerHTML = 1;
}

var circle = document.getElementById('circle');
player1 = "";
player2 = "";
var rollingCounter = 1;
//circle.innerHTML = 1;

//player1Score = "0";
//player2Score = "0";
rollingCounter = 1;
rand = 0;

startBtn.addEventListener('click',inputPlayers);

function inputPlayers(){
    player1 = prompt("Unesite ime prvog igraca");
    player2 = prompt("Unesite ime drugog igraca");
    displayGame()
}

function displayGame(){
    startBtn.style.display = "none";
    container.style.display = "block";
    wrapp.style.height = "max-content"
    player1Name.innerHTML = player1;
    player2Name.innerHTML = player2;
};

player1Btn.addEventListener('click',player1Rolling);
player2Btn.addEventListener('click',player2Rolling);

function player1Rolling(){
    rollingCounter += 0.5;
    this.setAttribute('disabled','disabled');
    player2Btn.removeAttribute('disabled');
    var rand = Math.ceil(Math.random()*6);
    player1TotalScore += rand;
    player1Scoree.innerHTML = player1TotalScore;
    player1Current.innerHTML = rand;
    if(Math.floor(rollingCounter) < 11){
       circle.innerHTML = Math.floor(rollingCounter)
       }else{
           gameOver();
       }
};

function player2Rolling(){
    rollingCounter += 0.5;
    this.setAttribute('disabled','disabled');
    player1Btn.removeAttribute('disabled');
    var rand = Math.ceil(Math.random()*6);
    player2TotalScore += rand;
    player2Scoree.innerHTML = player2TotalScore;
    player2Current.innerHTML = rand;
    if(Math.floor(rollingCounter) < 11){
       circle.innerHTML = Math.floor(rollingCounter)
       }else{
           gameOver()
       }
};

function gameOver(){
    playAgain.style.display = "block";
    player1Btn.setAttribute('disabled','disabled');
    player2Btn.setAttribute('disabled','disabled');
    if(player1TotalScore > player2TotalScore){
        player1Div.style.background = "#21c34d";
        player1Div.style.color = "#fff";
    }else if(player2TotalScore > player1TotalScore){
        player2Div.style.background = "#21c34d";
        player2Div.style.color = "#fff";
}else{
    player1Div.style.background = "#575eff";
        player1Div.style.borderRight = "1px solid white";
    player2Div.style.background = "#575eff";
    player1Div.style.color = "#fff";
    player2Div.style.color = "#fff";
}
}