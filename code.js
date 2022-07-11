//function for countdownTimer version 1 for week 1-2
function blastoffTimerV1(){
    console.log("Start() function started");
    //variable curr function set for time = 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //Blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!";
        console.log(currTime);
    }, 10000)
}

function PlayCraps(){
    console.log("PlayCraps() started");
    //generate variables
    var die1;
    var die2;
    var sum;

    //roll the dice
die1 = Math.floor(Math.random() * 6) + 1;
console.log(die1);
die2 = Math.floor(Math.random() * 6) + 1;
console.log(die2);
    //determine the sum of the dice and save to sum
sum = die1 +die2;
console.log("sum is equal to " +  sum);

    //follow craps rules
    //first lose
    if(sum == 7 || sum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose!"
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "You win!"
    } else {
        document.getElementById("crapsStatus").innerHTML = "You didn't win or lose. Play again?"
    }
}


//and now were gonna pretend i didnt write any of that old timer and write a new one!
function blastoffTimerV2(){// defining the new timer function
    console.log("blastoffTimerV2() started");
    //want a loop that runs 11 times, ten numbers and blastoff
    var countdownTimer = 10;

    var stepTime = 1000;
//variables for the timer number at that moment, and the variable for seconds.
    for(var i = 0; i < countdownTimer; i = i + 1){
        //this for loop is for the duration of the timer to hit blastoff!
        setTimeout(function(){
            console.log(countdownTimer);
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
        }, stepTime * i)
        //the same setTimeout function that we used earlier, but now in the for loop to repeat as long as we need
    }
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
        console.log("Blastoff!");
    }, stepTime * countdownTimer)
    //the end of the for loop condition, and the end of the timer.
}

function blastoffTimerV3(){
    // defining the new timer function
    console.log("blastoffTimerV3() started");
    //want a loop that runs 11 times, ten numbers and blastoff
    var countdownTimer = 10;

    var stepTime = 1000;

    for(var i = 0; i <= countdownTimer; i = i + 1){
        //this for loop is for the duration of the timer to hit blastoff!
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
                console.log("Blastoff!");
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + countdownTimer;
                countdownTimer = countdownTimer - 1;
            } else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
                countdownTimer = countdownTimer - 1;  
            }
        }, stepTime * i)
        //the same setTimeout function that we used earlier, but now in the for loop to repeat as long as we need
    }
}

function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disable = false;
    document.getElementById("stopButton").disable = true;
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disable = true;
    document.getElementById("startButton").disable = false;
}

function playStation(){
    console.log("playStation started");
    //play space Station sounds here
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
//controls the sound files 
function sound(srcFile){
    console.log("sound started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}


