
var PlayAgainBTN = document.getElementById("PlayAgainBTN");
PlayAgainBTN.style.display = "none";
var ButtonsArray = document.getElementsByClassName("XorO");
var Variants = [];
for (let i = 1; i < 9; i++) {  
    Variants.push(document.getElementsByClassName("Win" + i.toString()));   
}
var XOCounter = 0;
var StopGame = false;
var Draw = true;
var P1Point = 0;
var P2Point = 0;
var P1Stat = document.getElementById("P1");
var P2Stat = document.getElementById("P2");

var SitXO = [];
var FullBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var P1Use = false;
var P2Use = false;

function AfterChangeP1P2(SettingXO) {
    P1Stat.innerHTML = "0";
    P2Stat.innerHTML = "0";
    P1Point = 0;
    P2Point = 0;
    PlayAgainBTN.onclick();
    for (let i = 0; i < ButtonsArray.length; i++) {
        SettingXO(i);
}
}

document.getElementById("OnePlayerBTN").onclick = (function() {
    AfterChangeP1P2(SettingXOP1);
});

document.getElementById("TwoPlayerBTN").onclick = (function() {
    AfterChangeP1P2(SettingXOP2);
});

function generateRandom(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn]
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? generateRandom(min, max, failOn) : num;
}




function TableClear() {
    for (let i = 0; i < ButtonsArray.length; i++) {
       ButtonsArray[i].innerHTML = "";
        
    }
}

function SettingXOP1(number) {
    ButtonsArray[number].onclick = (function() {
        if( ButtonsArray[number].innerHTML != "O" && StopGame == false) {
            ButtonsArray[number].innerHTML = "X";
            if(SitXO.length < 10) {
            SitXO.push(number);
            }
            for (let i = 0; i < Variants.length; i++) {
                    
                if(Variants[i][0].textContent == "X" && Variants[i][1].textContent == "X" && Variants[i][2].textContent == "X") {
                    document.querySelector("#CompetitionWinner").innerHTML = "Player1 is winner!";
                    PlayAgainBTN.style.display = "block";
                    StopGame = true; 
                    Draw = false;
                    P1Point++; 
                    P1Stat.innerHTML = P1Point;
                }
            }
        }
        if(SitXO.length < 9) {
            var Rnumber = generateRandom(0, 8, SitXO);
            if( ButtonsArray[Rnumber].innerHTML != "X" && StopGame == false) {
                 ButtonsArray[Rnumber].innerHTML = "O";
                 SitXO.push(Rnumber);
                 for (let i = 0; i < Variants.length; i++) {         
                        if(Variants[i][0].textContent == "O" && Variants[i][1].textContent == "O" && Variants[i][2].textContent == "O") {
                            document.querySelector("#CompetitionWinner").innerHTML = "Player2 is winner!";
                            PlayAgainBTN.style.display = "block";       
                            StopGame = true;    
                            P2Point++; 
                            P2Stat.innerHTML = P2Point;
                        }
                 }   
            }

        }


        if(SitXO.length == 9 && Draw == true) {
            document.querySelector("#CompetitionWinner").innerHTML = "Draw!";
            PlayAgainBTN.style.display = "block";
         }

    })
    
    
}

function SettingXOP2(number) {
    ButtonsArray[number].onclick = (function() {
        XOCounter++;
        if(XOCounter % 2 == 0) {
            if( ButtonsArray[number].innerHTML != "X" && StopGame == false) {
                 ButtonsArray[number].innerHTML = "O";
                 for (let i = 0; i < Variants.length; i++) {         
                        if(Variants[i][0].textContent == "O" && Variants[i][1].textContent == "O" && Variants[i][2].textContent == "O") {
                            document.querySelector("#CompetitionWinner").innerHTML = "Player2 is winner!";
                            PlayAgainBTN.style.display = "block";       
                            StopGame = true;    
                            P2Point++; 
                            P2Stat.innerHTML = P2Point;
                        }
                 }   
            }
            else {
                XOCounter--;
            }
        }
        else {
            if( ButtonsArray[number].innerHTML != "O" && StopGame == false) {
                ButtonsArray[number].innerHTML = "X";
                for (let i = 0; i < Variants.length; i++) {
                        
                    if(Variants[i][0].textContent == "X" && Variants[i][1].textContent == "X" && Variants[i][2].textContent == "X") {
                        document.querySelector("#CompetitionWinner").innerHTML = "Player1 is winner!";
                        PlayAgainBTN.style.display = "block";
                        StopGame = true; 
                        Draw = false;
                        P1Point++; 
                        P1Stat.innerHTML = P1Point;
                    }
                }
            }
            else {
                XOCounter--;
            }
        }

        if(XOCounter == 9 && Draw == true) {
            document.querySelector("#CompetitionWinner").innerHTML = "Draw!";
            PlayAgainBTN.style.display = "block";
         }
    })
    
    
}


PlayAgainBTN.onclick = (function() {
    TableClear();
    document.querySelector("#CompetitionWinner").innerHTML = "";
    PlayAgainBTN.style.display = "none";
    XOCounter = 0;
    StopGame = false; 
    Draw = true;
    SitXO.length = 0;
})
