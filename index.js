
localStorage.setItem("Alarmtime"," ");

let x = document.getElementById("myAudio"); 

let flag = 0; 

function setAlarm(){
    flag = 0;
    let time = document.querySelector("input").value;
    if(time.length==0){
        alert("Enter the valid time");
    }
    else{
        console.log(time);
        localStorage.Alarmtime = time;
        console.log(localStorage.Alarmtime);
    }
}

function getTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let currentTime =  hours + " " + ":" +" "+minutes;
    document.getElementById("Current-time").innerText=currentTime;
    return currentTime;
}

//function to ring alarm as soon as time matches
function ringAlarm(){
    let alarmTime = localStorage.getItem("Alarmtime");
    if(alarmTime === getTime() && flag === 0){
        x.play()
    }
    else{
        console.log("Not yet");
    }
}

//function to give alarm stopping capability 
function stopAlarm(){
    x.pause();
    flag=1;
}

//at every interval of 1 second, we want current time and decide whether to ring or not.
setInterval(getTime, 1000);
let id = setInterval(ringAlarm, 1000);